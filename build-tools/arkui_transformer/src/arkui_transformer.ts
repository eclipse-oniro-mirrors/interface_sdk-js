/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { program } from "commander"
import { exit } from "process"
import * as ts from 'typescript';
import * as path from 'path';
import * as fs from 'fs';
import { componentInterfaceCollector, interfaceTransformer, addMemoTransformer } from "./interface_converter"
import { ComponentFile } from './component_file';
import { exportAllTransformer } from './add_export'
import { addImportTransformer } from './add_import'
import uiconfig from './arkui_config_util'

function getFiles(dir: string, fileFilter: (f: string) => boolean): string[] {
  const result: string[] = []
  const dirents = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of dirents) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isFile() && fileFilter(fullPath) && !uiconfig.notUIFile(fullPath)) {
      let addFile: boolean = true
      if (uiconfig.isHdsComponent) {
        addFile = entry.name.startsWith("@hms.hds.")
      }
      if (addFile) {
        result.push(fullPath)
        uiconfig.addComponentFile(fullPath)
      }
    }
  }
  return result
}

function convertFiles(files: string[]): string[] {
  const result: string[] = []
  for (const file of files) {
    const dest = file.replace(".d.ets", ".d.ts")
    fs.copyFile(file, dest, () => { })
    result.push(dest)
  }
  return result
}

function printResult(source: string, file: ComponentFile) {
  const outPath = path.join(options.targetDir, file.outFileName)
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, source.concat(file.concactSource))
}

function main() {
  uiconfig.loadConfig(options);
  const files = getFiles(options.inputDir, f => f.endsWith(".d.ets"));
  const program = ts.createProgram(files, { allowJs: true });
  const { printFile } = ts.createPrinter({ removeComments: false });
  const componentFileMap = new Map<string, ComponentFile>();
  const componentFileCallback = (f: string) => {
    return (context: ts.TransformationContext) => {
      return (sourceFile: ts.SourceFile) => {
        const componentFile = new ComponentFile(f, sourceFile);
        componentFileMap.set(f, componentFile);
        ts.transform(sourceFile, [componentInterfaceCollector(program, componentFile)]);
        return sourceFile;
      }
    }
  }

  const transformerCallback = (f: string) => {
    return (context: ts.TransformationContext) => {
      return (sourceFile: ts.SourceFile) => {
        const componentFile = componentFileMap.get(f)!;
        const result = ts.transform(sourceFile, [interfaceTransformer(program, componentFile), exportAllTransformer(), addImportTransformer()]);
        const transformedFile = ts.createSourceFile(f, printFile(result.transformed[0]), ts.ScriptTarget.Latest, true);
        const addMemoResult = ts.transform(transformedFile, [addMemoTransformer(componentFile)]);
        const transformedSource = ts.createPrinter().printFile(addMemoResult.transformed[0]);
        printResult(transformedSource, componentFile);
        return ts.createSourceFile("", "", ts.ScriptTarget.Latest, true);
      }
    }
  }

  // Step1 collect all component dependencies
  files.forEach(f => {
    try {
      const content = fs.readFileSync(f, 'utf-8');
      ts.transpileModule(content, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2017,
        },
        fileName: f,
        transformers: { before: [componentFileCallback(f)] }
      })
    } catch (e) {
      console.log("Error collecting file: ", f, e);
      exit(1)
    }
  })

  // Step2 make transformation
  files.forEach(f => {
    try {
      const content = fs.readFileSync(f, 'utf-8');
      ts.transpileModule(content, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2017,
        },
        fileName: f,
        transformers: { before: [transformerCallback(f)] }
      })
    } catch (e) {
      console.log("Error transforming file: ", f, e);
      exit(1)
    }
  })
}

function mock() {
  const mock_file = path.join(options.targetDir, "type-translated.d.ets")
  fs.mkdirSync(options.targetDir, { recursive: true })
  fs.writeFileSync(mock_file, "// WARNING! THIS FILE IS AUTO-GENERATED, DO NOT MAKE CHANGES, THEY WILL BE LOST ON NEXT GENERATION!\n")
}

const options = program
  .option('--input-dir <path>', "Path of where d.ets exist")
  .option('--target-dir <path>', "Path to generate d.ets file")
  .option('--config-path <path>', "Path to folder with config files")
  .option('--use-memo-m3', "Generate code with m3 @memo annotations and functions with @ComponentBuilder", false)
  .parse()
  .opts()

mock()