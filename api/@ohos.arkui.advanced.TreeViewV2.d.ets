/*
* Copyright (C) 2025-2026 Huawei Device Co., Ltd.
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
 * Defines the node event callback function.
 *
 * @param { CallbackParamV2 } callbackParam - The result of event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnChangedCallback = (callbackParam: CallbackParamV2) => void;
/**
 * Defines the listener of the tree view component, which is used to listen for changes to tree view nodes. Bind this
 * object to a tree view component before use. A single tree view listener cannot control multiple tree view components.
 * This listener provides two event registration modes: **on** and **once**. The **on** method continuously listens for
 * events until canceled, while the **once** method listens once and then is automatically destroyed. After use, call
 * **offNodeClick**, **offNodeAdd**, and other methods to cancel listening when the component is destroyed, to avoid
 * memory leaks.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class TreeListenerV2 {
  /**
   * Registers a listener for the node click event, which takes effect continuously. This API uses a callback to
   * return the result.
   *
   * @param { OnChangedCallback } callback - Callback invoked when a node is clicked.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onNodeClick(callback: OnChangedCallback): void;

  /**
   * Registers a node click event listener, which is automatically destroyed after being triggered once. This API uses
   * a callback to return the result.
   *
   * @param { OnChangedCallback } callback - Callback for the node click event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onceNodeClick(callback: OnChangedCallback): void;

  /**
   * Unregisters the node click event listener. This API uses a callback to return the result.
   *
   * @param { OnChangedCallback } [callback] - Callback for the node click event. If this parameter is passed, the
   *     corresponding listener is removed; otherwise, all node click listeners are removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  offNodeClick(callback?: OnChangedCallback): void;

  /**
   * Registers a listener for the node addition event, which takes effect continuously. This API uses a callback to
   * return the result.
   *
   * @param { OnChangedCallback } callback - Callback invoked when a node is added.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onNodeAdd(callback: OnChangedCallback): void;

  /**
   * Registers a node add event listener, which is automatically destroyed after being triggered once. This API uses a
   * callback to return the result.
   *
   * @param { OnChangedCallback } callback - Callback for the node addition event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onceNodeAdd(callback: OnChangedCallback): void;

  /**
   * Unregisters the node add event listener. This API uses a callback to return the result.
   *
   * @param { OnChangedCallback } [callback] - Callback for the node addition event. If this parameter is passed in,
   *     the corresponding listener is canceled; otherwise, all node addition listeners are canceled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  offNodeAdd(callback?: OnChangedCallback): void;

  /**
   * Registers a listener for the node deletion event, which takes effect continuously. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { OnChangedCallback } callback - Callback invoked when a node is deleted.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onNodeDelete(callback: OnChangedCallback): void;

  /**
   * Registers a node deletion event listener. The listener is automatically destroyed after being triggered once.
   * This API uses a callback to return the result.
   *
   * @param { OnChangedCallback } callback - Callback for the node deletion event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onceNodeDelete(callback: OnChangedCallback): void;

  /**
   * Unregisters from the node deletion event. This API uses a callback to return the result.
   *
   * @param { OnChangedCallback } [callback] - Callback for the node deletion event. If this parameter is passed, the
   *     corresponding listener is unregistered; otherwise, all node deletion listeners are unregistered.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  offNodeDelete(callback?: OnChangedCallback): void;

  /**
   * Registers a listener for the node modification event, which takes effect continuously. This API uses a callback
   * to return the result.
   *
   * @param { OnChangedCallback } callback - Callback for the node modification event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onNodeModify(callback: OnChangedCallback): void;

  /**
   * Registers a node modification event listener, which is automatically destroyed after being triggered once. This
   * API uses a callback to return the result.
   *
   * @param { OnChangedCallback } callback - Callback for the node modification event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onceNodeModify(callback: OnChangedCallback): void;

  /**
   * Unregisters the node modification event listener. This API uses a callback to return the result.
   *
   * @param { OnChangedCallback } [callback] - Callback for the node modification event. If this parameter is passed,
   *     the corresponding listener is canceled; otherwise, all node modification listeners are canceled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  offNodeModify(callback?: OnChangedCallback): void;

  /**
   * Registers a node move event listener that takes effect continuously. Node move is triggered by drag operations.
   * This API uses a callback to return the result.
   *
   * @param { OnChangedCallback } callback - Callback invoked when a node is moved.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onNodeMove(callback: OnChangedCallback): void;

  /**
   * Registers a node move event listener that is automatically destroyed after being triggered once. Node move is
   * triggered by drag operations. This API uses a callback to return the result.
   *
   * @param { OnChangedCallback } callback - Callback for the node move event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onceNodeMove(callback: OnChangedCallback): void;

  /**
   * Unregisters the node move event listener. This API uses a callback to return the result.
   *
   * @param { OnChangedCallback } [callback] - Callback for the node move event. If this parameter is passed in, the
   *     corresponding listener is unregistered; otherwise, all node move listeners are unregistered.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  offNodeMove(callback?: OnChangedCallback): void;
}

/**
 * Defines the listener manager of the tree view component, which is used to manage changes to tree view listeners. Bind
 * this object to the tree view component before use. The same listener manager cannot control multiple tree view
 * components. This manager is designed in singleton mode. Obtain the globally unique instance through **getInstance**,
 * and then obtain the listener instance through **getTreeListener**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class TreeListenerManagerV2 {
  /**
   * Obtains the singleton object of the tree view component listener manager.
   *
   * @returns { TreeListenerManagerV2 } Singleton object of the listener manager of the tree view component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static getInstance(): TreeListenerManagerV2;
  /**
   * Obtains a tree view listener instance.
   *
   * @returns { TreeListenerV2 } Tree view listener instance, used to register or unregister event listeners for node
   *     click, add, delete, modify, and move operations of the tree view.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getTreeListener(): TreeListenerV2;
}

/**
 * The **TreeViewV2** component is displayed as a list in a hierarchical manner, which is suitable for displaying nested
 * structures. It has parent nodes and child nodes, can be expanded or collapsed, and supports node addition, deletion,
 * modification, drag-and-drop movement, custom icons, event listening, and context menus.
 *
 * It is used in productivity apps, such as the side navigation bars in memos, emails, and galleries. It is suitable for
 * scenarios that require displaying and managing hierarchical data and supporting node interaction operations.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1),
 * state management V2 delivers enhanced capabilities for deep observation and management of data objects, and is no
 * longer limited to the component level. With state management V2, you can more flexibly control the data and state of
 * the tree view through this component, achieving more efficient UI refresh.
 *
 * > **NOTE**
 * >
 * > - This module's APIs can only be used in the stage model.
 * >
 * > - If [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} are set for **TreeViewV2**, the compilation toolchain
 * > will generate an additional node \_\_Common\_\_ and mount the universal attributes or universal events on \_\
 * > _Common\_\_, rather than directly applying them to **TreeViewV2** itself. This may cause the set universal
 * > attributes or universal events to not take effect or behave unexpectedly. Therefore, it is not recommended to set
 * > universal attributes and universal events on **TreeViewV2**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct TreeViewV2 {
  /**
   * Controller of the tree view nodes, used to control the node information of the tree. After being bound to the
   * tree view component, it can be used to add, delete, and modify nodes. The same controller cannot control multiple
   * tree view components.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  treeControllerV2: TreeControllerV2;
}

/**
 * Defines the node callback parameter API, used to pass parameter information of node event callbacks.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface CallbackParamV2 {
  /**
   * ID of the current node.
   *
   * Value range: greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  currentNodeId: number;
  /**
   * ID of the current parent node.
   *
   * Value range: greater than or equal to -1.
   *
   * Default value: **-1**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  parentNodeId?: number;
  /**
   * Child index.
   *
   * Value range: greater than or equal to -1.
   *
   * Default value: **-1**
   *
   * Valid only in the node move event, indicating the position index after the move.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  childIndex?: number;
}
/**
 * Defines a container callback function type, which is used to define child component callbacks bound to tree nodes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnContainerCallback = () => void;
/**
 * Defines the node parameter API, which is used to configure the properties of a tree node.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface NodeParamV2 {
  /**
   * Parent node ID.
   *
   * Value range: greater than or equal to -1.
   *
   * Default value: **-1**, which is the root node ID. If the value is less than -1, the node is invalid and is not
   * displayed in the tree view.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  parentNodeId?: number;

  /**
   * Current child node ID.
   *
   * Value range: greater than or equal to -1.
   *
   * It cannot be the root node ID or null; otherwise, an exception is thrown. Two identical **currentNodeId** values
   * cannot be set.
   *
   * Default value: **-1**, which means the node ID is not specified and is automatically assigned by the system.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  currentNodeId?: number;

  /**
   * Whether the node is a folder. The value **true** indicates a directory node that can contain child nodes (used
   * when a parent node that can be expanded is required); the value **false** indicates a leaf node that cannot
   * contain child nodes (used when a non-expandable terminal node is required). If this parameter is not passed, the
   * default value **false** (leaf node) is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isFolder?: boolean;

  /**
   * Icon used to customize the default icon of the node. Pass this parameter when a custom icon needs to be specified
   * for the node. If it is not passed, the node displays the system default icon. When **symbolIconStyle** is also
   * set, only the symbol icon is displayed and **icon** does not take effect.
   *
   * Default value: empty string, which means no custom icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  icon?: ResourceStr;

  /**
   * Symbol icon style used to set the system symbol icon. Pass this parameter when a system symbol icon is required (
   * for example, when consistency with the system style and dynamic color support are needed). If it is not passed,
   * the icon specified by the **icon** parameter is used. Its display priority is higher than that of icon. When both
   * **symbolIconStyle** and **icon** are set, only the symbol icon is displayed.
   *
   * Default value: **undefined**, which means no Symbol icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolIconStyle?: SymbolGlyphModifier;

  /**
   * Selected icon used to customize the icon displayed when the node is selected. Pass this parameter when an icon
   * different from the default state needs to be displayed in the node selection state. If it is not passed, the node
   * displays the same icon as in the unselected state after being selected. When **symbolSelectedIconStyle** is also
   * set, only the symbol selected icon is displayed and **selectedIcon** does not take effect.
   *
   * Default value: empty string, which means no custom selected icon is displayed when the node is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  selectedIcon?: ResourceStr;

  /**
   * Symbol selected icon style used to set the system Symbol icon when the node is selected. Pass this parameter when
   * a system symbol icon is required as the selected icon (for example, when consistency with the system style and
   * dynamic color support are needed). If it is not passed, the node displays the same icon as in the unselected
   * state after being selected. Its priority is higher than that of **selectedIcon**. When both
   * **symbolSelectedIconStyle** and **selectedIcon** are set, only the symbol selected icon is displayed.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolSelectedIconStyle?: SymbolGlyphModifier;

  /**
   * Edit icon used to customize the icon displayed when the node enters the editing state. Pass this parameter when
   * an icon different from the default state needs to be displayed in the node editing state. If it is not passed,
   * the node displays the same icon as in the non-editing state in the editing state. When **symbolEditIconStyle** is
   * also set, only the symbol edit icon is displayed and **editIcon** does not take effect.
   *
   * Default value: empty string, which means no custom edit icon is displayed in the editing state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  editIcon?: ResourceStr;

  /**
   * Symbol edit icon style used to set the system symbol icon in the node editing state. Pass this parameter when a
   * system symbol icon is required as the edit icon (for example, when consistency with the system style and dynamic
   * color support are needed). If it is not passed, the node displays the same icon as in the non-editing state in
   * the editing state. Its priority is higher than that of **editIcon**. When both **symbolEditIconStyle** and
   * **editIcon** are set, only the symbol edit icon is displayed.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolEditIconStyle?: SymbolGlyphModifier;

  /**
   * Primary title.
   *
   * Default value: empty string, which means no primary title is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  primaryTitle?: ResourceStr;

  /**
   * Secondary title.
   *
   * Default value: empty string, which means no secondary title is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  secondaryTitle?: ResourceStr;

  /**
   * Right-click child component container bound to the node. The child component is decorated by **@Builder**. Pass
   * this parameter when a right-click menu or custom right-click operation needs to be provided for the node. If it
   * is not passed, the node does not display a right-click menu.
   *
   * Default value: **() => void**, which means no right-click child component container is bound.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  container?: OnContainerCallback;
}

/**
 * Controller of the tree view component, used to control the node information of the tree. Bind this object to the tree
 * view component before use. The same controller cannot control multiple tree view components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class TreeControllerV2 {
  /**
   * Deletes the tapped node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  removeNode(): void;

  /**
   * Modifies the tapped node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  modifyNode(): void;

  /**
   * Adds a child node to the tapped node. After the node is added, you must call
   * [buildDone()]{@link TreeControllerV2#buildDone} to trigger the saving of tree information; otherwise, the added
   * node will not be displayed in the tree view. Chained calls are supported, for example,
   * **addNode().addNode().buildDone()**.
   *
   * @param { NodeParamV2 } [nodeParam] - Node information, used to specify the attributes of the node to be added. If
   *     this parameter is not passed, a node titled "New Folder" is added under the currently selected node.
   * @returns { TreeControllerV2 } Controller of the tree view component, used to chain other tree view control
   *     methods.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  addNode(nodeParam?: NodeParamV2): TreeControllerV2;

  /**
   * Locates the parent node based on the passed **parentId**, and updates the subtitle of the parent node (
   * **parentSubTitle**) and the subtitle of the current node (**currentSubtitle**).
   *
   * @param { number } parentId - ID of the parent node.<br />Value range: greater than or equal to -1.<br />If a
   *     value less than -1 is passed, the node is invalid.
   * @param { ResourceStr } parentSubTitle - Subtitle of the parent node, used to update the subtitle displayed on the
   *     parent node.
   * @param { ResourceStr } currentSubtitle - Subtitle of the current node, used to update the subtitle displayed on
   *     the current node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  refreshNode(parentId: number, parentSubTitle: ResourceStr, currentSubtitle: ResourceStr): void;

  /**
   * Builds the tree view. After all nodes are added, this method must be called to trigger the saving of tree
   * information. This API uses a two-phase build mode: first add nodes to the memory through **addNode**, and then
   * call this method to save the node information in a unified manner and render it into the tree view. If this
   * method is not called, the added nodes will not be displayed in the tree view.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  buildDone(): void;
}