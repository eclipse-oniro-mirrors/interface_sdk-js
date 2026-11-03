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
from pathlib import Path
import sys


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
    write_depfile(depfile, output, sorted(dependencies))
