/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const nativeModuleLibraries: Map<string, string> = new Map()

export function loadNativeLibrary(name: string): Record<string, object> {
    if ((globalThis as any).requireNapi)
        return (globalThis as any).requireNapi(name, true)
    else {
        const suffixedName = name.endsWith(".node") ? name : `${name}.node`
        return require(suffixedName)
    }
}

export function registerNativeModuleLibraryName(nativeModule: string, libraryName: string) {
    nativeModuleLibraries.set(nativeModule, libraryName)
}

export function loadNativeModuleLibrary(moduleName: string, module?: object) {
    if (!module)
        throw new Error("<module> argument is required and optional only for compatibility with ArkTS")
    const library = loadNativeLibrary(nativeModuleLibraries.get(moduleName) ?? moduleName)
    if (!library || !library[moduleName]) {
        console.error(`Failed to load library for module ${moduleName}`)
        return
    }
    Object.assign(module, library[moduleName])
}
