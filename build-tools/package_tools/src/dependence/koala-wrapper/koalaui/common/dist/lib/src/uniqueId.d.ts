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

import { int32 } from "#koalaui/compat";
export declare class UniqueId {
    private sha;
    addString(data: string): UniqueId;
    addI32(data: int32): UniqueId;
    addF32Array(data: Float32Array): UniqueId;
    addI32Array(data: Int32Array): UniqueId;
    addU32Array(data: Uint32Array): UniqueId;
    addU8Array(data: Uint8Array): UniqueId;
    addPtr(data: Uint32Array | number): UniqueId;
    compute(): string;
}
//# sourceMappingURL=uniqueId.d.ts.map