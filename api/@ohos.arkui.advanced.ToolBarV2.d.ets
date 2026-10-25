/*
 * Copyright (c) 2024-2026 Huawei Device Co., Ltd.
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
import uiMaterial from './@ohos.arkui.uiMaterial';
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
 * Defines the placement position of a toolbar item within the toolbar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare enum ToolbarV2ItemPlacement {
  /**
   * Center area (default). Suitable for primary toolbar actions displayed in the main content region.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  MAIN = 0,
  /**
   * Leading half-area. Suitable for primary actions placed before the main content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  LEADING = 1,
  /**
   * Trailing half-area. Suitable for secondary or overflow actions placed after the main content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TRAILING = 2
}

/**
 * Defines the advanced toolbar item.
 *
 * Extends {@link ToolBarV2Item} with advanced layout capabilities such as
 * custom builder, title configuration, placement, display priority,
 * activated background color, item size, separator, text visibility,
 * overflow menu, and item grouping.
 *
 * Items with the same non-empty `groupID` form a group. Group-level
 * configuration (placement, spacing, container style) is read from the
 * first item in the array that carries that `groupID`.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class AdvancedToolbarV2Item extends ToolBarV2Item {
  /**
   * Custom content builder for the toolbar item. When set, content and icon are ignored.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  builder?: CustomBuilder;
  /**
   * Define advanced toolbarV2 title settings. When not provided, no title is rendered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  titleConfigs?: ToolbarV2TitleConfigs;
  /**
   * Placement position of the toolbar item.
   * Default value: ToolbarV2ItemPlacement.MAIN.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  placement?: ToolbarV2ItemPlacement;
  /**
   * Display priority of the toolbar item in the layout container.
   * Higher values indicate higher display priority.
   * Value range: [0,10]. Default value: 1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  displayPriority?: number;
  /**
   * Item background color in `ACTIVATE` status (activated background color).
   * Only applies to icon-only items; icon+text items cannot set a background color.
   * Defaults to transparent when not specified. Recommend using
   * `$r('sys.color.comp_background_emphasize')` (HarmonyOS blue).
   * Default value: Color.Transparent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  activatedBackgroundColor?: ColorMetrics;
  /**
   * Unique identifier for the toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  id?: string;
  /**
   * Item size (width × height) for the toolbar item.
   * Default value: mainAxis 56vp x crossAxis 48vp.
   * When horizontal: 56vp(width) x 48vp(height).
   * When vertical: 48vp(width) x 56vp(height).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  itemSize?: Size;
  /**
   * Whether to show a separator after this item.
   * When true, a separator is rendered after this item (not after the last item in the toolbar).
   * Default value: false.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  isShowSeparator?: boolean;
  /**
   * Whether to display the text content of the toolbar item.
   * When set to false, the text specified by `content` is not rendered in the toolbar,
   * but `content` is still used for overflow menu identification.
   * This is useful when an icon-only item still needs text identification in the overflow menu.
   * Default value: true.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  isShowText?: boolean;
  /**
   * Whether to display the overflowMenu of the toolbar in this item.
   * Default value: false.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  isShowOverflowMenu?: boolean;
  /**
   * Group identifier. Items sharing the same non-empty `groupID` are rendered
   * as a visual group. Group-level configuration is read from the first item
   * in the array that carries this `groupID`.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  groupID?: string;
  /**
   * Style configuration for the group that this item belongs to.
   * Only the value on the first item (in array order) carrying a given `groupID`
   * takes effect; values on subsequent items with the same `groupID` are ignored.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  groupStyle?: ToolbarV2ItemGroupStyle;
  /**
   * The constructor used to create a AdvancedToolbarV2Item object.
   *
   * @param { AdvancedToolbarV2ItemOptions } [options] - item info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: AdvancedToolbarV2ItemOptions);
}

/**
 * Declare the options of AdvancedToolbarV2Item.
 *
 * Extends {@link ToolBarV2ItemOptions} with advanced fields. `content` is
 * inherited as a required field; use `isShowText` on the item to control
 * whether the text is rendered.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface AdvancedToolbarV2ItemOptions extends ToolBarV2ItemOptions {
  /**
   * Custom content builder for the toolbar item. When set, content and icon are ignored.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  builder?: CustomBuilder;
  /**
   * Define advanced toolbarV2 title settings. When not provided, no title is rendered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  titleConfigs?: ToolbarV2TitleConfigs;
  /**
   * Placement position of the toolbar item.
   * Default value: ToolbarV2ItemPlacement.MAIN.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  placement?: ToolbarV2ItemPlacement;
  /**
   * Display priority of the toolbar item in the layout container.
   * Higher values indicate higher display priority.
   * The value range is [0, 10].
   * Default value: 1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  displayPriority?: number;
  /**
   * Item background color in `ACTIVATE` status (activated background color).
   * Only applies to icon-only items; icon+text items cannot set a background color.
   * Defaults to transparent when not specified. Recommend using `$r('sys.color.comp_background_emphasize')`.
   * Default value: Color.Transparent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  activatedBackgroundColor?: ColorMetrics;
  /**
   * Unique identifier for the toolbar item.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  id?: string;
  /**
   * Item size (width × height) for the toolbar item.
   * Default value: mainAxis 56vp x crossAxis 48vp.
   * When horizontal: 56vp(width) x 48vp(height).
   * When vertical: 48vp(width) x 56vp(height).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  itemSize?: Size;
  /**
   * Whether to show a separator after this item.
   * When true, a separator is rendered after this item (not after the last item in the toolbar).
   * Default value: false.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  isShowSeparator?: boolean;
  /**
   * Whether to display the text content of the toolbar item.
   * When set to false, the text specified by `content` is not rendered in the toolbar,
   * but `content` is still used for accessibility and overflow menu identification.
   * This is useful when an icon-only item still needs text identification in the overflow menu.
   * Default value: true.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  isShowText?: boolean;
  /**
   * Whether to display the overflowMenu of the toolbar in this item.
   * Default value: false.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  isShowOverflowMenu?: boolean;
  /**
   * Group identifier. Items sharing the same non-empty `groupID` are rendered
   * as a visual group.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  groupID?: string;
  /**
   * Style configuration for the group that this item belongs to.
   * Only the value on the first item (in array order) carrying a given `groupID`
   * takes effect; values on subsequent items with the same `groupID` are ignored.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  groupStyle?: ToolbarV2ItemGroupStyle;
}

/**
 * Defines the toolbar background visibility.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare enum BarBackgroundVisibility {
  /**
   * Visible (default): the toolbar background is shown normally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  VISIBLE = 0,
  /**
   * Hidden: the toolbar background is transparent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  HIDDEN = 1
}

/**
 * Toolbar padding configuration along the main axis.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolbarV2PaddingOptions {
  /**
   * Padding at the start of the main axis.
   * When horizontal: left padding. When vertical: top padding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  mainAxisStart?: LengthMetrics;
  /**
   * Padding at the end of the main axis.
   * When horizontal: right padding. When vertical: bottom padding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  mainAxisEnd?: LengthMetrics;
}

/**
 * Style configuration for the overflow menu popup.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolbarV2OverflowMenuStyle {
  /**
   * Font configuration for overflow menu items.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  font?: Font;
  /**
   * Font color of overflow menu items.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  fontColor?: ColorMetrics;
  /**
   * Overflow menu corner radius.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  radius?: Dimension | BorderRadiuses;
  /**
   * Divider style between individual overflow menu items.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  menuItemDivider?: DividerStyleOptions;
  /**
   * Divider style between overflow menu item groups.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  menuItemGroupDivider?: DividerStyleOptions;
}

/**
 * Defines the constructor options for ToolbarV2TitleStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolbarV2TitleStyleOptions {
  /**
   * Font size of the title text.
   * Default value: 20fp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  fontSize?: LengthMetrics;
  /**
   * Title text color.
   * Default value: $r('sys.color.font_primary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  fontColor?: ColorMetrics;
  /**
   * Font weight of the title text.
   * Default value: FontWeight.Bold.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  fontWeight?: FontWeight;
  /**
   * Minimum width of the title.
   * Default value: 48vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  minLength?: LengthMetrics;
}

/**
 * Title text style configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class ToolbarV2TitleStyle {
  /**
   * Font size of the title text.
   * Default value: 20fp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  fontSize?: LengthMetrics;
  /**
   * Title text color.
   * Default value: $r('sys.color.font_primary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  fontColor?: ColorMetrics;
  /**
   * Font weight of the title text.
   * Default value: FontWeight.Bold.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  fontWeight?: FontWeight;
  /**
   * Minimum width of the title.
   * Default value: 48vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  minLength?: LengthMetrics;
  /**
   * Constructs a ToolbarV2TitleStyle instance.
   *
   * @param { ToolbarV2TitleStyleOptions } [options] - Constructor options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolbarV2TitleStyleOptions);
}

/**
 * Defines the constructor options for ToolbarV2TitleConfigs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolbarV2TitleOptions {
  /**
   * Title text content. Required when constructing ToolbarV2TitleConfigs.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  content?: ResourceStr;
  /**
   * Placement position of the title within the toolbar.
   * Reuses `ToolbarV2ItemPlacement` — the title is arranged in the same area as items with the same placement.
   * Default value: ToolbarV2ItemPlacement.LEADING.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  placement?: ToolbarV2ItemPlacement;
  /**
   * Whether the title is visible.
   * Default value: true.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  visible?: boolean;
  /**
   * Title text style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  style?: ToolbarV2TitleStyle;
}

/**
 * Title configuration. When not provided, no title is rendered.
 *
 * The title participates in layout at the same level as toolbar items.
 * The title reuses `ToolbarV2ItemPlacement` (`LEADING` / `MAIN` / `TRAILING`)
 * to determine the rendering area, and is arranged in the same area as items with the same placement.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class ToolbarV2TitleConfigs {
  /**
   * Title text content. Required when constructing ToolbarV2TitleConfigs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  content: ResourceStr;
  /**
   * Placement position of the title within the toolbar.
   * Reuses `ToolbarV2ItemPlacement` — the title is arranged in the same area as items with the same placement.
   * Default value: ToolbarV2ItemPlacement.LEADING.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  placement?: ToolbarV2ItemPlacement;
  /**
   * Whether the title is visible.
   * Default value: true.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  visible?: boolean;
  /**
   * Title text style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  style?: ToolbarV2TitleStyle;
  /**
   * Constructs a ToolbarV2TitleConfigs instance.
   *
   * @param { ToolbarV2TitleOptions } [options] - Constructor options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolbarV2TitleOptions);
}

/**
 * Defines the constructor options for ToolbarV2ItemGroupStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolbarV2ItemGroupStyleOptions {
  /**
   * Placement position of the group within the toolbar.
   * The group placement takes precedence over the placement of individual items within the group.
   * Default value: ToolbarV2ItemPlacement.MAIN.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  placement?: ToolbarV2ItemPlacement;
  /**
   * Spacing between items within the group.
   * Default value: 0vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  space?: LengthMetrics;
  /**
   * Background color of the group container.
   * Default value: $r('sys.color.comp_background_primary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  backgroundColor?: ColorMetrics;
  /**
   * Padding of the group container.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  padding?: ToolbarV2PaddingOptions;
  /**
   * Border radius of the group container.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderRadius?: LengthMetrics;
  /**
   * Border width of the group container.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderWidth?: LengthMetrics;
  /**
   * Border color of the group container.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderColor?: ColorMetrics;
  /**
   * Whether to show the press-state effect for items within the group.
   * Default value: true.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  stateEffect?: boolean;
}

/**
 * Defines the style configuration for toolbar item group.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class ToolbarV2ItemGroupStyle {
  /**
   * Placement position of the group within the toolbar.
   * The group placement takes precedence over the placement of individual items within the group.
   * Default value: ToolbarV2ItemPlacement.MAIN.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  placement?: ToolbarV2ItemPlacement;
  /**
   * Spacing between items within the group.
   * Default value: 0vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  space?: LengthMetrics;
  /**
   * Background color of the group container.
   * Default value: $r('sys.color.comp_background_primary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  backgroundColor?: ColorMetrics;
  /**
   * Padding of the group container.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  padding?: ToolbarV2PaddingOptions;
  /**
   * Border radius of the group container.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  borderRadius?: LengthMetrics;
  /**
   * Border width of the group container.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  borderWidth?: LengthMetrics;
  /**
   * Border color of the group container.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  borderColor?: ColorMetrics;
  /**
   * Whether to show the press-state effect for items within the group.
   * Default value: true.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  stateEffect?: boolean;
  /**
   * Constructs a ToolbarV2ItemGroupStyle instance.
   *
   * @param { ToolbarV2ItemGroupStyleOptions } [options] - Constructor options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolbarV2ItemGroupStyleOptions);
}

/**
 * Defines the constructor options for ToolbarV2StyleConfigs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolbarV2StyleOptions {
  /**
   * Toolbar padding. Each edge can be set independently.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  padding?: ToolbarV2PaddingOptions;
  /**
   * Whether the toolbar background is visible.
   * Default value: BarBackgroundVisibility.VISIBLE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  backgroundVisibility?: BarBackgroundVisibility;
  /**
   * Background color of the toolbar.
   * Default value: $r('sys.color.comp_background_primary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  backgroundColor?: ColorMetrics;
  /**
   * Background blur style of the toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  backgroundBlurStyle?: BlurStyle;
  /**
   * Background material of the toolbar. Sets a system-styled material effect that influences
   * the backgroundColor, border, shadow, and other visual attributes of the toolbar.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamic
   */
  systemBackgroundMaterial?: uiMaterial.Material;
  /**
   * Spacing between item groups.
   * Default value: 12vp, value range [8vp, 20vp], clamped to the boundary when out of range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  groupSpace?: LengthMetrics;
  /**
   * Item size of the toolbar items.
   * Default value: mainAxis 56vp x crossAxis 48vp.
   * When horizontal: 56vp(width) x 48vp(height).
   * When vertical: 48vp(width) x 56vp(height).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  itemSize?: Size;
  /**
   * Font size of the toolbar item text.
   * Default value: $r('sys.float.ohos_id_text_size_caption').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  fontSize?: LengthMetrics;
  /**
   * Border width of the toolbar.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderWidth?: LengthMetrics;
  /**
   * Border color of the toolbar.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderColor?: ColorMetrics;
  /**
   * Border radius of the toolbar.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderRadius?: LengthMetrics;
  /**
   * Whether to enable the state effect.
   * Default value: true.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  stateEffect?: boolean;
}

/**
 * Defines the style configuration for the toolbar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class ToolbarV2StyleConfigs {
  /**
   * Toolbar padding. Each edge can be set independently.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  padding?: ToolbarV2PaddingOptions;
  /**
   * Whether the toolbar background is visible.
   * Default value: BarBackgroundVisibility.VISIBLE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  backgroundVisibility?: BarBackgroundVisibility;
  /**
   * Background color of the toolbar.
   * Default value: $r('sys.color.comp_background_primary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  backgroundColor?: ColorMetrics;
  /**
   * Background blur style of the toolbar.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  backgroundBlurStyle?: BlurStyle;
  /**
   * Background material of the toolbar. Sets a system-styled material effect that influences
   * the backgroundColor, border, shadow, and other visual attributes of the toolbar.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamic
   */
  @Trace
  systemBackgroundMaterial?: uiMaterial.Material;
  /**
   * Spacing between item groups.
   * Default value: 12vp, value range [8vp, 20vp], clamped to the boundary when out of range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  groupSpace?: LengthMetrics;
  /**
   * Item size of the toolbar items.
   * Default value: mainAxis 56vp x crossAxis 48vp.
   * When horizontal: 56vp(width) x 48vp(height).
   * When vertical: 48vp(width) x 56vp(height).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  itemSize?: Size;
  /**
   * Font size of the toolbar item text.
   * Default value: $r('sys.float.ohos_id_text_size_caption').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  fontSize?: LengthMetrics;
  /**
   * Border width of the toolbar.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  borderWidth?: LengthMetrics;
  /**
   * Border color of the toolbar.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  borderColor?: ColorMetrics;
  /**
   * Border radius of the toolbar.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  borderRadius?: LengthMetrics;
  /**
   * Constructs a ToolbarV2StyleConfigs instance.
   *
   * @param { ToolbarV2StyleOptions } [options] - Constructor options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolbarV2StyleOptions);
}

/**
 * Advanced modifier for ToolBarV2. Merges layout attributes, style configs,
 * and overflow menu style into a single modifier class.
 *
 * Uses chainable setter methods that accept original config objects.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class AdvancedToolBarV2Modifier {
  /**
   * Sets the length of the toolbar along the layout direction.
   *
   * Horizontal: controls width. Vertical: controls height.
   * Default value: '100%'.
   *
   * @param { LengthMetrics } value - The length value along the layout direction.
   * @returns { AdvancedToolBarV2Modifier } Returns this modifier for chaining.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  mainAxisLength(value: LengthMetrics): AdvancedToolBarV2Modifier;
  /**
   * Sets the breadth of the toolbar perpendicular to the layout direction.
   *
   * Horizontal: controls height. Vertical: controls width. When not set, the cross-axis is auto-sized by content.
   *
   * @param { LengthMetrics } value - The breadth value perpendicular to the layout direction.
   * @returns { AdvancedToolBarV2Modifier } Returns this modifier for chaining.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  crossAxisLength(value: LengthMetrics): AdvancedToolBarV2Modifier;
  /**
   * Sets the layout direction of the toolbar.
   *
   * HORIZONTAL: items arranged in a row (default).
   * VERTICAL: items arranged in a column.
   *
   * @param { Axis } value - The direction value.
   * @returns { AdvancedToolBarV2Modifier } Returns this modifier for chaining.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  direction(value: Axis): AdvancedToolBarV2Modifier;
  /**
   * Sets the toolbar style configuration.
   *
   * Controls background, padding, groupSpace, border, and item active/disabled colors.
   *
   * @param { ToolbarV2StyleConfigs } styleConfigs - The style configuration object.
   * @returns { AdvancedToolBarV2Modifier } Returns this modifier for chaining.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  style(styleConfigs: ToolbarV2StyleConfigs): AdvancedToolBarV2Modifier;
  /**
   * Sets the style configuration for the overflow menu popup.
   *
   * @param { ToolbarV2OverflowMenuStyle } menuStyle - The overflow menu style configuration object.
   * @returns { AdvancedToolBarV2Modifier } Returns this modifier for chaining.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  overflowMenuStyle(menuStyle: ToolbarV2OverflowMenuStyle): AdvancedToolBarV2Modifier;
}

/**
 * The toolbar is used to display action options for the current screen content. It is displayed at the bottom of the
 * screen and is suitable for scenarios where quick action entries need to be provided to users. A maximum of five
 * entries can be displayed at the bottom. Any excess entries are collapsed into a "More" item, which is displayed on
 * the far right. It is suitable for scenarios where quick operations on the current page content are needed, helping 
 * users quickly access common functions and improving operation efficiency.<br />
 * ToolbarV2 supports configuring advanced toolbar items via `AdvancedToolbarV2Item` (which extends `ToolBarV2Item`).
 * A toolbar with configured advanced items is more flexible, allowing you to customize titles, overflow
 * menus, item grouping, and more.
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
   * Define toolbarV2 item list. Using ToolBarV2Item[] constitutes a simple toolbar.
   * `AdvancedToolbarV2Item` (which extends `ToolBarV2Item`) can be used for advanced
   * layout scenarios such as titles, overflow menus, and item grouping.
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
   * Define toolbarV2 activate item index, default is -1. Which is only used for ToolBarV2Item.
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
   * Define toolbarV2 divider Modifier.
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
  /**
   * Define advanced toolbarV2 modifier. Merges layout attributes, style configs,
   * and overflow menu style into a single modifier.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Param
  advancedToolBarModifier?: AdvancedToolBarV2Modifier;
}
