#!/usr/bin/env python3
# Copyright (c) 2026 Huawei Device Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# http://www.apache.org/licenses/LICENSE-2.0
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""Track SDK copy inputs and existing generated files without changing selection."""
import os
import json
import re
import tempfile
from pathlib import Path
import sys


def _relative_depfile_inputs(paths):
    result = []
    for path in paths:
        try:
            result.append(os.path.relpath(path))
        except ValueError:
            result.append(path)  # Different Windows drives cannot be rebased.
    return sorted(result)


def record(depfile, output, inputs):
    if not depfile:
        return
    dependencies = set()
    for value in inputs:
        dependencies.add(str(value))
        if os.path.isdir(value):
            for directory, directories, files in os.walk(value, followlinks=True):
                directories[:] = [name for name in directories if name not in ('.git', '__pycache__')]
                dependencies.add(directory)
                dependencies.update(os.path.join(directory, name) for name in files)
    # The directory itself is an explicit output; files inside detect partial
    # artifact loss and cause the existing copy/filter operation to run again.
    for directory, _, files in os.walk(output):
        dependencies.update(os.path.join(directory, name) for name in files)
    sys.path.insert(0, str(Path(__file__).resolve().parents[2] / 'build'))
    from scripts.util.build_utils import write_depfile
    write_depfile(depfile, output, _relative_depfile_inputs(dependencies))


def reconcile(depfile, output, produced):
    """Remove only previously recorded files owned by this copy action."""
    if not depfile:
        return
    output = Path(output).absolute()
    manifest = Path(str(depfile) + '.outputs.json')
    current = {str(Path(path).absolute().relative_to(output)) for path in produced}
    try:
        old = json.loads(manifest.read_text())
        if not isinstance(old, list) or not all(isinstance(name, str) for name in old):
            raise ValueError('Invalid SDK copy ownership manifest: ' + str(manifest))
    except FileNotFoundError:
        # Older depfiles already recorded all generated files in this dedicated
        # output. Adopt those paths; do not infer ownership of arbitrary files.
        old = []
        if Path(depfile).is_file():
            text = Path(depfile).read_text().replace('\\\n', '')
            for word in re.findall(r'(?:\\.|[^\s])+', text.partition(': ')[2]):
                name = re.sub(r'\\([ \t#\\:])', r'\1', word).replace('$$', '$')
                path = Path(os.path.abspath(name))
                try:
                    relative = path.relative_to(output)
                except ValueError:
                    continue
                if path.is_file():
                    old.append(str(relative))
    for name in old:
        relative = Path(name)
        if relative.is_absolute() or '..' in relative.parts:
            raise ValueError('Unsafe SDK copy ownership path: ' + name)
        path = output / relative
        # Never follow a replaced parent symlink outside the owned output.
        try:
            path.parent.resolve().relative_to(output.resolve())
        except ValueError:
            raise ValueError('Linked SDK output escapes its owner: ' + str(path))
        if name not in current and (path.is_file() or path.is_symlink()):
            path.unlink()
    manifest.parent.mkdir(parents=True, exist_ok=True)
    descriptor, temporary = tempfile.mkstemp(dir=manifest.parent, prefix=manifest.name+'.')
    try:
        with os.fdopen(descriptor, 'w') as stream:
            json.dump(sorted(current), stream)
        os.replace(temporary, manifest)
    finally:
        if os.path.exists(temporary):
            os.unlink(temporary)
