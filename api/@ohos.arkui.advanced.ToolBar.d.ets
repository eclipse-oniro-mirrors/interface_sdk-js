/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import { SymbolGlyphModifier, DividerModifier } from './@ohos.arkui.modifier';
import { LengthMetrics } from './@ohos.arkui.node';
/**
 * Enumerates toolbar item states.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
export declare enum ItemState {
  /**
   * The toolbar item is enabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ENABLE = 1,
  /**
   * The toolbar item is disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DISABLE = 2,
  /**
   * The toolbar item is activated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ACTIVATE = 3
}

/**
 * Defines the icon symbol options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice
 * @since 13 dynamic
 * @noninterop
 */
export interface ToolBarSymbolGlyphOptions {

  /**
   * Icon symbol of the toolbar item in normal state.
   *
   * Default value: **fontColor: $r('sys.color.icon_primary'), fontSize: 24vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  normal?: SymbolGlyphModifier;

  /**
   * Icon symbol of the toolbar item in activated state.
   *
   * Default value: **fontColor: $r('sys.color.icon_emphasize'), fontSize: 24vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  activated?: SymbolGlyphModifier;
}

/**
 * Defines the content and attributes of a toolbar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Observed
export declare class ToolBarOption {
  /**
   * Text of the toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  content: ResourceStr;
  /**
   * Tap event of the toolbar item. If not passed in, tapping the item does not trigger any action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;
  /**
   * Icon of the toolbar item.
   *
   * By default, if not set or set to **undefined**, the icon is not displayed.
   *
   * When the **toolBarSymbolOptions** attribute is set, the icon attribute does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: Resource;
  /**
   * State of the toolbar item.
   *
   * Default value: **ItemState.ENABLE**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  state?: ItemState;
  /**
   * Font color of the toolbar item.
   *
   * Default value: **$r('sys.color.font_primary')**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  textColor?: ResourceColor;
  /**
   * Font color of the toolbar item in the activated state.
   *
   * Default value: **$r('sys.color.font_emphasize')**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  activatedTextColor?: ResourceColor;
  /**
   * Fill color of the toolbar item icon.
   *
   * Default value: $r('sys.color.icon_primary').
   *
   * When the toolBarSymbolOptions attribute is set, this parameter does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  iconColor?: ResourceColor;
  /**
   * Fill color of the toolbar item icon in the activated state.
   *
   * Default value: **$r('sys.color.icon_emphasize')**.
   *
   * When the **toolBarSymbolOptions** attribute is set, this parameter does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  activatedIconColor?: ResourceColor;
  /**
   * Icon attribute of the toolbar item, of the symbol type. After this parameter is set, the **icon** attribute does
   * not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  toolBarSymbolOptions?: ToolBarSymbolGlyphOptions;
  /**
   * Accessibility text attribute of the toolbar item. When the component does not contain a text attribute, the screen
   * reader does not announce it when this component is selected. Developers can set accessibility text for components
   * that do not contain text information, so that the screen reader announces the text content when this component is
   * selected.
   *
   * Default value: the content of the current item's content attribute.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;
  /**
   * Accessibility description of the toolbar item. Used to explain the function and operation consequences of the
   * current component to users in detail, especially when such information cannot be directly obtained from the
   * component text alone. When the component is selected, the content of the text attribute and the accessibility
   * description attribute are announced in sequence.
   *
   * Default value: "Double-tap with one finger to execute".
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;
  /**
   * Accessibility level of the toolbar item. Used to control whether the current item can be recognized by
   * accessibility services.
   *
   * Supported values:
   *
   * **"auto"**: The current component is converted to **"yes"**.
   *
   * **"yes"**: The current component can be recognized by accessibility services.
   *
   * **"no"**: The current component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: The current component and all its child components cannot be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * Inherits from Array<[ToolBarOption]{@link ToolBarOption}>.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Observed
export declare class ToolBarOptions extends Array<ToolBarOption> {}

/**
 * Provides methods for setting the toolbar height, background color, left and right padding (takes effect only when the
 * number of items is less than 5), and whether to display the pressed state (**stateEffect**).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice
 * @since 13 dynamic
 * @noninterop
 */
export declare class ToolBarModifier {
  /**
   * Sets the toolbar height. This height does not include the divider line height.
   *
   * @param { LengthMetrics } height - Height of the toolbar.
   *     <br>The default height of the toolbar is 56 vp, which does not include the divider.
   * @returns { ToolBarModifier } Returns the current **ToolBarModifier** object, which supports chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  height(height: LengthMetrics): ToolBarModifier;
  /**
   * Sets the toolbar background color.
   *
   * @param { ResourceColor } backgroundColor - Toolbar background color.
   *     <br>Default value: **$r('sys.color.ohos_id_color_toolbar_bg')**
   * @returns { ToolBarModifier } Returns the current **ToolBarModifier** object, which supports chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  backgroundColor(backgroundColor: ResourceColor): ToolBarModifier;
  /**
   * Sets the left and right padding of the toolbar.
   *
   * @param { LengthMetrics } padding - Left and right padding of the toolbar. Takes effect only when the number of
   *     items is less than 5.<br/>By default, the toolbar padding is 24 vp when the number of items is less than 5, and
   *     0 vp when the number of items is 5 or more.
   * @returns { ToolBarModifier } Returns the current **ToolBarModifier** object, which supports chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  padding(padding: LengthMetrics): ToolBarModifier;
  /**
   * Sets whether to display the pressed state effect.
   *
   * @param { boolean } stateEffect - Whether to display the pressed state effect on the toolbar.
   *     <br>The value **true** means to display the pressed state effect on the toolbar, and **false** means the
   *     opposite.
   *     <br>Default value: **true**
   * @returns { ToolBarModifier } Returns the current **ToolBarModifier** object, which supports chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  stateEffect(stateEffect: boolean): ToolBarModifier;
}

/**
 * The **Toolbar** component is used to display operation options for the current interface content, shown at the bottom
 * of the interface. It is suitable for scenarios where quick action entry points need to be provided for users, such as
 * copy, paste, and share operations on an editing page. A maximum of 5 entries are displayed at the bottom. Any excess
 * entries are collapsed into a "More" item, displayed on the far right.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **ToolBar** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **ToolBar** component itself. As a result, the configured universal attributes and universal events
 * > may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events with
 * > the **ToolBar** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Component
export declare struct ToolBar {
  /**
   * Toolbar list.
   *
   * @type { ToolBarOptions }. [since 10 - 17]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @ObjectLink
  toolBarList: ToolBarOptions;
  /**
   * Index of the active item.
   *
   * Default value: **-1**, indicating no active item. Values less than -1 are treated as no active item.
   *
   * @type { ?number }. [since 10 - 17]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  activateIndex?: number;
  /**
   * Toolbar controller used to associate with **Tabs** component page switching. It does not support controlling
   * toolbar items.
   *
   * **NOTE**
   *
   * According to the
   * [usage restrictions](docroot://ui/state-management/arkts-custom-components-access-restrictions.md#constraints) of
   * custom component member attribute access qualifiers, this API is a regular member variable. It can be initialized
   * by passing parameters, or left uninitialized. When not passed, it is initialized with the component's preset value:
   * **new TabsController()**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  controller: TabsController;
  /**
   * Modifier for the toolbar header divider, which can be used to customize the divider's height, color, and other
   * attributes.
   *
   * Default value: system default value
   *
   * @type { ?DividerModifier }. [since 13 - 17]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  @Prop
  dividerModifier?: DividerModifier;
  /**
   * Modifier for the toolbar, which can be used to set the toolbar's height, background color, padding (which only
   * takes effect when there are fewer than five toolbar items), and whether to display the pressed state.
   *
   * Default value:
   *
   * Height of the toolbar: **56vp**
   *
   * Background color: **ohos_id_toolbar_bg**
   *
   * Padding: **24vp**
   *
   * Whether to display the pressed state: yes
   *
   * @type { ?ToolBarModifier }. [since 13 - 17]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  @Prop
  toolBarModifier?: ToolBarModifier;
}