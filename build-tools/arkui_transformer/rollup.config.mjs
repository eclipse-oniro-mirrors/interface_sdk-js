/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/arkui_transformer.ts',
    output: {
        file: 'build/arkui_transformer.js',
        format: 'commonjs',
        sourcemap: true,
        banner: [
            "#!/usr/bin/env node",
            APACHE_LICENSE_HEADER()
        ].join("\n"),
    },
    external: ["commander", "typescript"],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json'
        }),
        nodeResolve({
            extensions: ['.ts']
        }),
    ]
};


function APACHE_LICENSE_HEADER() {
    return `
/**
* @license
* Copyright (c) ${new Date().getUTCFullYear()} Huawei Device Co., Ltd.
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

`
}