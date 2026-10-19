/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
import { ColorMetrics, LengthMetrics } from './@ohos.arkui.node';
/**
 * Enumerates the states of the toolbar item.
 *
 * | Name      | Value| Description             |
 * | -------- | - | --------------- |
 * | ENABLE   | 1 | The toolbar item is enabled. |
 * | DISABLE  | 2 | The toolbar item is disabled.  |
 * | ACTIVATE | 3 | The toolbar item is activated.|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare enum ToolBarV2ItemState {
  /**
   * Enable type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLE = 1,
  /**
   * Disable type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  DISABLE = 2,
  /**
   * Activate type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ACTIVATE = 3
}

/**
 * Defines the icon symbol options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
export class ToolBarV2SymbolGlyph {
  /**
   * Icon symbol of the toolbar item in normal state.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  normal: SymbolGlyphModifier;
  /**
   * Icon symbol of the toolbar item in activated state.
   *
   * Default value:
   *
   * **fontColor**: **$r('sys.color.icon_emphasize')**, **fontSize**: **24vp**
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  activated?: SymbolGlyphModifier;
  /**
   * A constructor used to create a **ToolBarV2SymbolGlyph** object.
   *
   * @param { ToolBarV2SymbolGlyphOptions } options - symbol info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: ToolBarV2SymbolGlyphOptions);
}

/**
 * Defines the attributes of the symbol icon.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface ToolBarV2SymbolGlyphOptions {
  /**
   * Modifier of toolbarV2's normal symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  normal: SymbolGlyphModifier;
  /**
   * Modifier of toolbarV2's activated symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  activated?: SymbolGlyphModifier;
}

/**
 * Defines the text of a toolbar item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @class ToolBarV2ItemText
 */
@ObservedV2
export declare class ToolBarV2ItemText {
  /**
   * Text of the toolbar item.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  text: ResourceStr;
  /**
   * Font color of the toolbar item.
   *
   * Default value: **$r('sys.color.font_primary')**.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  color?: ColorMetrics;
  /**
   * Font color of the toolbar item in the activated state.
   *
   * </div>Default value: **$r('sys.color.font_emphasize')**.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  activatedColor?: ColorMetrics;
  /**
   * A constructor used to create a **ToolBarV2ItemText** instance.
   *
   * @param { ToolBarV2ItemTextOptions } options - text info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: ToolBarV2ItemTextOptions);
}

/**
 * Defines the options for initializing a **ToolBarV2ItemText** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface ToolBarV2ItemTextOptions {
  /**
   * Text of the toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  text: ResourceStr;
  /**
   * Font color of the toolbar item.
   *
   * Default value: **$r('sys.color.font_primary')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  color?: ColorMetrics;
  /**
   * Font color of the toolbar item in the activated state.
   *
   * Default value: **$r('sys.color.font_emphasize')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  activatedColor?: ColorMetrics;
}

/**
 * Defines the union type for the icon content of a toolbar item.
 *
 * @unionmember { ToolBarV2ItemImage } Type for defining a common icon.
 * @unionmember { ToolBarV2SymbolGlyph } Type for defining a symbol icon.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare type ToolBarV2ItemIconType = ToolBarV2ItemImage | ToolBarV2SymbolGlyph;

/**
 * Defines the icon content of a toolbar item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @class ToolBarV2ItemImage
 */
@ObservedV2
export declare class ToolBarV2ItemImage {
  /**
   * Icon of the toolbar item.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  src: ResourceStr;
  /**
   * Color of the icon.
   *
   * Default value: **$r('sys.color.icon_primary')**.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  color?: ColorMetrics;
  /**
   * Color of the icon when the toolbar item is activated.
   *
   * Default value: **$r('sys.color.icon_emphasize')**.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  activatedColor?: ColorMetrics;
  /**
   * A constructor used to create a **ToolBarV2ItemImage** instance.
   *
   * @param { ToolBarV2ItemImageOptions } options - image info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: ToolBarV2ItemImageOptions);
}

/**
 * Defines the options for initializing a **ToolBarV2ItemImage** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface ToolBarV2ItemImageOptions {
  /**
   * Icon of the toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  src: ResourceStr;
  /**
   * Color of the icon.
   *
   * Default value: **$r('sys.color.icon_primary')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  color?: ColorMetrics;
  /**
   * Color of the icon when the toolbar item is activated.
   *
   * Default value: **$r('sys.color.icon_emphasize')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  activatedColor?: ColorMetrics;
}

/**
 * Defines an item in the toolbar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @class ToolBarV2Item
 */
@ObservedV2
export declare class ToolBarV2Item {
  /**
   * Define text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  content: ToolBarV2ItemText;
  /**
   * Define the action event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  action?: ToolBarV2ItemAction;
  /**
   * Define icon resource.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  icon?: ToolBarV2ItemIconType;
  /**
   * Define item type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  state?: ToolBarV2ItemState;
  /**
   * The accessibilityText of item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of item.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityLevel?: string;
  /**
   * A constructor used to create a **ToolBarV2Item** instance.
   *
   * @param { ToolBarV2ItemOptions } options - item info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: ToolBarV2ItemOptions);
}

/**
 * Defines the options for initializing a **ToolBarV2Item** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface ToolBarV2ItemOptions {
  /**
   * Text of the toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  content: ToolBarV2ItemText;
  /**
   * Click event of the toolbar item.
   *
   * By default, there is no click event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  action?: ToolBarV2ItemAction;
  /**
   * Icon of the toolbar item.
   *
   * By default, there is no icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  icon?: ToolBarV2ItemIconType;
  /**
   * State of the toolbar item.
   *
   * Default value: **ToolBarV2ItemState.ENABLE**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  state?: ToolBarV2ItemState;
  /**
   * Accessibility text, that is, accessible label name, of the toolbar item. If a component does not contain text
   * information, it will not be announced by the screen reader when selected. In this case, the screen reader user
   * cannot know which component is selected. To solve this problem, you can set accessibility text for components
   * without text information. When such a component is selected, the screen reader announces the specified
   * accessibility text, informing the user which component is selected.
   *
   * Default value: value of **content**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;
  /**
   * Accessible description of the toolbar item. You can provide comprehensive text explanations to help users
   * understand the operation they are about to perform and its potential consequences, especially when these cannot be
   * inferred from the component's attributes and accessibility text alone. If a component contains both text
   * information and the accessible description, the text is announced first and then the accessible description, when
   * the component is selected.
   *
   * Default value: **"Double-tap to activate"**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;
  /**
   * Accessibility level of the toolbar item, which controls whether the current item can be recognized by the
   * accessibility service.
   *
   * </div>Supported values:
   *
   * **"auto"**: The current value is converted to **"yes"**.
   *
   * **"yes"**: The current component can be recognized by the accessibility service.
   *
   * **"no"**: The current component cannot be recognized by the accessibility service.
   *
   * **"no-hide-descendants"**: The current component and all its child components cannot be recognized by the
   * accessibility service.
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
 * Defines the callback for the click event of a toolbar item.
 *
 * @param { number } index - Index of the toolbar item that triggers the click event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export type ToolBarV2ItemAction = (index: number) => void;

/**
 * Provides methods for setting the toolbar height (**height**), background color (**backgroundColor**), left and right
 * padding (**padding**, which takes effect only when the number of items is fewer than five), and whether to display
 * the pressed state effect (**stateEffect**).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare class ToolBarV2Modifier {
  /**
   * Sets the height of the toolbar. This method can be called for custom drawing. This height does not include the
   * divider height.
   *
   * @param { LengthMetrics } height - toolBarV2's height.
   * @returns { ToolBarV2Modifier } **ToolBarV2Modifier** object after setting the height, which can be used for chained
   *     calls to other methods to further customize the toolbar style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  height(height: LengthMetrics): ToolBarV2Modifier;
  /**
   * Sets the background color of the toolbar. This method can be called for custom drawing.
   *
   * @param { ColorMetrics } backgroundColor - toolBarV2's backgroundColor.
   * @returns { ToolBarV2Modifier } **ToolBarV2Modifier** object after setting the background color, which can be used
   *     for chained calls to further customize the toolbar style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundColor(backgroundColor: ColorMetrics): ToolBarV2Modifier;
  /**
   * Sets the left and right padding of the toolbar. This method can be called for custom drawing.
   *
   * @param { LengthMetrics } padding - left and right padding.
   * @returns { ToolBarV2Modifier } **ToolBarV2Modifier** object with the padding set, which can be used for chained
   *     calls to further customize the toolbar style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  padding(padding: LengthMetrics): ToolBarV2Modifier;
  /**
   * Sets whether to display the pressed state effect.
   *
   * @param { boolean } stateEffect - press status effect.
   * @returns { ToolBarV2Modifier } **ToolBarV2Modifier** object with the pressed state effect set, which can be used
   *     for chained calls to other methods to further customize the toolbar style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  stateEffect(stateEffect: boolean): ToolBarV2Modifier;
}

/**
 * The toolbar is used to display action options for the current screen content. It is displayed at the bottom of the
 * screen and is suitable for scenarios where quick action entries need to be provided to users. A maximum of five
 * entries can be displayed at the bottom. Any excess entries are collapsed into a "More" item, which is displayed on
 * the far right. It is suitable for scenarios where quick operations on the current page content are needed, helping
 * users quickly access common functions and improving operation efficiency.<br />
 * This component is implemented based on
 * [state management (V2)](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2).
 * Compared with
 * [state management (V1)](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1), state
 * management (V2) enhances the deep observation and management capabilities of data objects, no longer limited to the
 * component level. With state management (V2), developers can more flexibly control the data and state of the toolbar
 * through this component, achieving more efficient UI refresh.
 * <br>
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} are set for **ToolBarV2**, the compilation toolchain
 * > will generate an additional node \_\_Common\_\_ and attach the universal attributes or universal events to \_\
 * > _Common\_\_, rather than directly applying them to **ToolBarV2** itself. This may cause the universal attributes or
 * > universal events set by the developer to not take effect or behave unexpectedly. Therefore, setting universal
 * > attributes and universal events for **ToolBarV2** is not recommended.
 * >
 * > - When the system switches between light and dark modes, the toolbar background color does not automatically follow
 * > the switch.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ComponentV2
export declare struct ToolBarV2 {
  /**
   * Define toolbarV2 item list.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  toolBarList: ToolBarV2Item[];
  /**
   * Define toolbarV2 activate item index, default is -1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  activatedIndex?: number;
  /**
   * Define divider Modifier.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  dividerModifier?: DividerModifier;
  /**
   * Define toolbarV2 modifier.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  toolBarModifier?: ToolBarV2Modifier;
}