/*
* Copyright (C) 2023-2025 Huawei Device Co., Ltd.
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
 */

/**
 * Enumerates the listening types of tree view nodes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare enum TreeListenType {
  /**
   * Listens for click events of nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NODE_CLICK = "NodeClick",
  /**
   * Listens for the node addition event. Triggered after the **addNode** method is called to add a node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NODE_ADD = "NodeAdd",
  /**
   * Listens for the node deletion event. Triggered after the **removeNode** method is called to delete a node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NODE_DELETE = "NodeDelete",
  /**
   * Listens for the node modification event. Triggered after the **modifyNode** method is called to modify a node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NODE_MODIFY = "NodeModify",
  /**
   * Listens for the node move event. Triggered after the node position changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NODE_MOVE = "NodeMove"
}

/**
 * Defines a listener for the tree view component, which can be bound to the tree view component to listen for node
 * changes of the tree. The same listener cannot control multiple tree view components. The listener internally
 * maintains the mapping between event types and callback functions. When a user performs a node operation on the
 * TreeView, the TreeView notifies the listener to trigger the corresponding callback function, and the developer can
 * obtain node information in the callback and perform service processing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class TreeListener {
  /**
   * Registers a listener for tree view node events. After successful registration, the callback function is triggered
   * when the corresponding event occurs on a node. The same listener cannot control multiple tree view components.
   *
   * @param { TreeListenType } type - Type of the listening event, used to specify the listening event to register.
   * @param { (callbackParam: CallbackParam) => void } callback - Callback invoked when the corresponding listening
   *     event is triggered. The callback parameter **callbackParam** contains information such as **currentNodeId**,
   *     **parentNodeId**, and **childIndex**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  on(type: TreeListenType, callback: (callbackParam: CallbackParam) => void): void;

  /**
   * Registers a one-time listening for tree view node events. After successful registration, the callback function is
   * triggered when the corresponding event occurs on a node for the first time, and the listening is automatically
   * removed after triggering. The same listener cannot control multiple tree view components.
   *
   * @param { TreeListenType } type - Type of the listening event, used to specify the listening event to register.
   * @param { (callbackParam: CallbackParam) => void } callback - Callback invoked when the corresponding listening
   *     event is triggered. The callback parameter **callbackParam** contains information such as **currentNodeId**,
   *     **parentNodeId**, and **childIndex**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  once(type: TreeListenType, callback: (callbackParam: CallbackParam) => void): void;

  /**
   * Cancels listening. Listening must be registered before it can be canceled. The same listener cannot control
   * multiple tree view components.
   *
   * @param { TreeListenType } type - Type of the listening event, used to specify the listening event to cancel.
   * @param { (callbackParam: CallbackParam) => void } callback - Callback invoked when the corresponding listening
   *     event is triggered. Default value: **undefined**. When this parameter is passed, the listener for the
   *     corresponding node information is canceled; when not passed, all node information listeners of this type are
   *     canceled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  off(type: TreeListenType, callback?: (callbackParam: CallbackParam) => void): void;
}

/**
 * Defines a listener manager for the tree view component, which can obtain a listener instance and bind it to the tree
 * view component for managing node listening of the tree. The same listener cannot control multiple tree view
 * components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class TreeListenerManager {
  /**
   * Obtains a **TreeListenerManager** singleton object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @return treeListenerManager instance
   */
  static getInstance(): TreeListenerManager;

  /**
   * Obtains a listener.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @return treeListener object
   */
  getTreeListener(): TreeListener;
}

/**
 * A tree view is a hierarchical list suitable for displaying nested structures. It consists of parent nodes and child
 * nodes, and supports expanding or collapsing.
 *
 * The tree view is applicable in the side navigation bar of productivity apps, such as notepad, email, and Gallery.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **TreeView** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **TreeView** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **TreeView** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@Component
export declare struct TreeView {
  /**
   * Controller of the tree view component, used to control the node information of the tree.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  treeController: TreeController;
}

/**
 * Declare CallbackParam.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export interface CallbackParam {
  /**
   * ID of the current child node.
   *
   * The value must be greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  currentNodeId: number;

  /**
   * ID of the current parent node.
   *
   * The value must be greater than or equal to -1.
   *
   * Default value: **-1**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  parentNodeId?: number;

  /**
   * Index of the child node under the parent node, used to identify the position of the child node in the parent node's
   * child list.
   *
   * Value range: greater than or equal to -1, where -1 indicates an invalid index or no child node.
   *
   * Default value: **-1**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  childIndex?: number;
}

/**
 * Declare NodeParam.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export interface NodeParam {
  /**
   * ID of the parent node.
   *
   * The value must be greater than or equal to -1.
   *
   * Default value: -1. The root node ID is -1. If the value is less than -1, the setting does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  parentNodeId?: number;

  /**
   * Current child node ID.
   *
   * Value range: greater than or equal to -1.
   *
   * Cannot be the root node ID (i.e., cannot be -1) or **null**; otherwise, an exception is thrown. Two identical
   * **currentNodeId** values cannot be set.
   *
   * Default value: **-1**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  currentNodeId?: number;

  /**
   * Whether the node is a folder.
   *
   * Default value: **false**
   *
   * **true**: a folder that can contain child nodes and supports expand/collapse operations; **false**: not a folder,
   * i.e., a leaf node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isFolder?: boolean;

  /**
   * Icon. If **symbolIconStyle** is also set, **symbolIconStyle** takes precedence.
   *
   * Default value: empty string
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: ResourceStr;

  /**
   * Selected icon. If **symbolSelectedIconStyle** is also set, **symbolSelectedIconStyle** takes precedence.
   *
   * Default value: empty string
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedIcon?: ResourceStr;

  /**
   * Edit icon. If **symbolEditIconStyle** is also set, **symbolEditIconStyle** takes precedence.
   *
   * Default value: empty string
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  editIcon?: ResourceStr;

  /**
   * Primary title.
   *
   * The default value is an empty string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  primaryTitle?: ResourceStr;

  /**
   * Secondary title.
   *
   * The default value is an empty string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  secondaryTitle?: ResourceStr;

  /**
   * Context menu component bound to the node, displayed when the user right-clicks the node. It must be defined through
   * the **@Builder** function.
   *
   * Default value: () => void
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  container?: () => void;

  /**
   * Symbol edit icon, which has a higher priority than **editIcon**.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolEditIconStyle?: SymbolGlyphModifier;

  /**
   * Symbol icon, which has higher priority than **icon**.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolIconStyle?: SymbolGlyphModifier;

  /**
   * Symbol icon of the selected node, which has higher priority than **selectedIcon**.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolSelectedIconStyle?: SymbolGlyphModifier;
}

/**
 * A controller for the tree view component, used to control node information of the tree. The same controller instance
 * cannot control multiple tree view components simultaneously.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class TreeController {
  /**
   * Deletes the selected node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  removeNode(): void;

  /**
   * Modifies the selected node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  modifyNode(): void;

  /**
   * After a node is selected, call this method to add a child node.
   *
   * @param { NodeParam } nodeParam - Node information. If this parameter is not passed, a node titled **New Folder**
   *     will be added under the currently selected node.
   * @returns { TreeController } Returns the controller instance of the tree view component, supporting chain calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  addNode(nodeParam?: NodeParam): TreeController;

  /**
   * Updates the display information of the current node by specifying the parent node ID, parent node subtitle, and
   * current node subtitle.
   *
   * @param { number } parentId - Parent node ID.<br />The value range is greater than or equal to -1. The root node ID
   *     is -1. If the value is set to less than -1, it does not take effect.
   * @param { ResourceStr } parentSubTitle - Subtitle of the parent node. After setting, the subtitle display content of
   *     the parent node is updated.
   * @param { ResourceStr } currentSubtitle - Subtitle of the current node. After setting, the subtitle display content
   *     of the current node is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  refreshNode(parentId: number, parentSubTitle: ResourceStr, currentSubtitle: ResourceStr): void;

  /**
   * Saves the tree information after all nodes are added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  buildDone(): void;
}