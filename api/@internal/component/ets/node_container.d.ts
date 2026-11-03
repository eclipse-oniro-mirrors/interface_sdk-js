/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit ArkUI
 */

/**
 * **NodeContainer** is a basic component for mounting custom nodes (such as [FrameNode]{@link @ohos.arkui.node:FrameNode}
 * or the root FrameNode obtained from [BuilderNode]{@link @ohos.arkui.node:BuilderNode}) and dynamically controlling the
 * mounting and unmounting of nodes through [NodeController]{@link @ohos.arkui.node:NodeController}. It is
 * suitable for scenarios where custom nodes need to be dynamically inserted into and removed from the component tree to
 * implement on-demand UI loading and node reuse, which improves page rendering efficiency and reduces node creation
 * overhead. The component does not support appending child nodes. It accepts a
 * [NodeController]{@link @ohos.arkui.node:NodeController} instance and must be used together with
 * **NodeController**.
 *
 * > **NOTE**
 * >
 * > - This component supports mounting only custom nodes, that is, [FrameNodes]{@link @ohos.arkui.node:FrameNode} or the
 * > root FrameNode obtained from a [BuilderNode]{@link @ohos.arkui.node:BuilderNode}.
 * >
 * > - Mounting the proxy node of a system component obtained through a query is not supported. For details, see
 * > [isModifiable]{@link @ohos.arkui.node:FrameNode.isModifiable}.
 * >
 * > - This component does not work with the [attribute modifier]{@link CommonMethod}.
 * >
 * > - When the node tree under this component is built, the UI instance [UIContext]{@link @ohos.arkui.UIContext} is
 * > used. When the instance is switched, the input parameter of the
 * > [makeNode]{@link @ohos.arkui.node:NodeController.makeNode} callback of the bound
 * > [NodeController]{@link @ohos.arkui.node:NodeController} may be **undefined** due to instance mismatch.
 * > Therefore, this component does not support cross-instance node reuse.
 * >
 * > - When this component is not destroyed, it does not proactively trigger the unmounting of the mounted node.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface NodeContainerInterface {
  /**
   * Creates a **NodeContainer** component.
   *
   * @param { import('../api/@ohos.arkui.node').NodeController } controller - **NodeController** instance used to
   *     control the mounting and unmounting of nodes in **NodeContainer**. It represents the lifecycle of the
   *     **NodeContainer**.
   * @returns { NodeContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  (controller: import('../api/@ohos.arkui.node').NodeController): NodeContainerAttribute;
}

/**
 * The [universal attributes]{@link CommonMethod} are supported, but the [attribute modifier]{@link @global:AttributeModifier} is not
 * supported.
 *
 * The [universal events]{@link CommonMethod} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class NodeContainerAttribute extends CommonMethod<NodeContainerAttribute> {}

/**
 * **NodeContainer** is a basic component for mounting custom nodes (such as [FrameNode]{@link @ohos.arkui.node:FrameNode}
 * or the root FrameNode obtained from [BuilderNode]{@link @ohos.arkui.node:BuilderNode}) and dynamically controlling the
 * mounting and unmounting of nodes through [NodeController]{@link @ohos.arkui.node:NodeController}. It is
 * suitable for scenarios where custom nodes need to be dynamically inserted into and removed from the component tree to
 * implement on-demand UI loading and node reuse, which improves page rendering efficiency and reduces node creation
 * overhead. The component does not support appending child nodes. It accepts a
 * [NodeController]{@link @ohos.arkui.node:NodeController} instance and must be used together with
 * **NodeController**.
 *
 * > **NOTE**
 * >
 * > - This component supports mounting only custom nodes, that is, [FrameNodes]{@link @ohos.arkui.node:FrameNode} or the
 * > root FrameNode obtained from a [BuilderNode]{@link @ohos.arkui.node:BuilderNode}.
 * >
 * > - Mounting the proxy node of a system component obtained through a query is not supported. For details, see
 * > [isModifiable]{@link @ohos.arkui.node:FrameNode.isModifiable}.
 * >
 * > - This component does not work with the [attribute modifier]{@link @global:AttributeModifier}.
 * >
 * > - When the node tree under this component is built, the UI instance [UIContext]{@link @ohos.arkui.UIContext} is
 * > used. When the instance is switched, the input parameter of the
 * > [makeNode]{@link @ohos.arkui.node:NodeController.makeNode} callback of the bound
 * > [NodeController]{@link @ohos.arkui.node:NodeController} may be **undefined** due to instance mismatch.
 * > Therefore, this component does not support cross-instance node reuse.
 * >
 * > - When this component is not destroyed, it does not proactively trigger the unmounting of the mounted node.
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const NodeContainer: NodeContainerInterface;

/**
 * Defines NodeContainer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const NodeContainerInstance: NodeContainerAttribute;