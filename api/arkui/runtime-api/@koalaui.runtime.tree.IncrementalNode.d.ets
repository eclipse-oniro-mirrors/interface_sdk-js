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
/**
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */

import { uint32 } from '@koalaui.runtime.common'
import { Disposable } from '@koalaui.runtime.states.Disposable'
import { ReadonlyTreeNode } from '@koalaui.runtime.tree.ReadonlyTreeNode'
export declare class IncrementalNode implements Disposable, ReadonlyTreeNode {
    _disposed: boolean
    _child: IncrementalNode | undefined
    _prev: IncrementalNode | undefined
    _next: IncrementalNode | undefined
    _parent: IncrementalNode | undefined
    _incremental: IncrementalNode | undefined
    protected onChildInserted: ((node: IncrementalNode) => void) | undefined
    protected onChildRemoved: ((node: IncrementalNode) => void) | undefined
    readonly kind: uint32
    constructor(kind: uint32 = 1)
    isKind(kind: uint32): boolean
    reuse(reuseKey: string): Disposable | undefined
    recycle(reuseKey: string, child: Disposable): boolean
    get disposed(): boolean
    dispose(): void
    detach(): void
    get parent(): IncrementalNode | undefined
    toString(): string
    toHierarchy(): string
    get firstChild(): IncrementalNode | undefined
    get nextSibling(): IncrementalNode | undefined
    get previousSibling(): IncrementalNode | undefined
    incrementalUpdateSkip(count: uint32): void
    incrementalUpdateDone(parent?: IncrementalNode): void
}
