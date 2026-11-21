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
 * | ACTIVATE | 3 | The toolbar item is activated and can be clicked.|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
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
 * Defines the SymbolGlyph for ToolBarV2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ObservedV2
export class ToolBarV2SymbolGlyph {
  /**
   * Modifier of ToolBarV2's normal symbol.
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
   * Modifier of ToolBarV2's activated symbol.
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
 * @noninterop
 */
export interface ToolBarV2SymbolGlyphOptions {
  /**
   * Modifier of ToolBarV2's normal symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  normal: SymbolGlyphModifier;
  /**
   * Modifier of ToolBarV2's activated symbol.
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
 * @noninterop
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
 * @noninterop
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
 * @noninterop
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
 * @noninterop
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
 * @noninterop
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
 * @noninterop
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
   * Accessibility level of the item.
   * Default value: "auto".
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
 * @noninterop
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
 * @noninterop
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
 * @noninterop
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
   *     for chained calls to other methods to further customize the toolbar style.
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
   *     calls to other methods to further customize the toolbar style.
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
   * @returns { ToolBarV2Modifier } **ToolBarV2Modifier** object with the pressed-state effect set,
   *     which can be used for chained calls to other methods to further customize the toolbar style.
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
export declare enum ToolBarV2ItemPlacement {
  /**
   * Center area. Suitable for primary toolbar actions displayed in the main content area.
   * This is the default placement for regular toolbar items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  MAIN = 0,
  /**
   * Leading half-area. Suitable for navigation or primary actions placed before the main content.
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
export declare class AdvancedToolBarV2Item extends ToolBarV2Item {
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
   * Define advanced ToolBarV2 title settings. When not provided, no title is rendered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  titleConfigs?: ToolBarV2TitleConfigs;
  /**
   * Placement position of the toolbar item.
   * Default value: ToolBarV2ItemPlacement.MAIN.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  placement?: ToolBarV2ItemPlacement;
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
   * Background color of an item in the ACTIVATE state (activated background color).
   * Only applies to icon-only items; icon+text items cannot have a background color.
   * Default value: undefined. No color is applied when this parameter is not set.
   * Using $r('sys.color.comp_background_emphasize') (HarmonyOS blue) is recommended.
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
   * Item size (width × height) of the toolbar item.
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
   * When true, a separator is rendered after this item, but not after the last item in the toolbar.
   * Default value: undefined. If this parameter is not set, the value is false and no separator is displayed.
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
   * When set to false, the text specified by content is not rendered in the toolbar.
   * This is useful for scenarios where only the icon needs to be displayed.
   * Default value: undefined.
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
   * Whether to display the toolbar overflow menu for this item.
   * Default value: undefined. If this parameter is not set, the value is false.
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
   * Group identifier. Items with the same non-empty groupID are rendered as a visual group.
   * The first item with the same groupID determines the group placement.
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
   * Style configuration for the group to which this item belongs.
   * Only the style configuration of the first item with the same groupID that has groupStyle set takes effect.
   * Values on subsequent items with the same groupID are ignored.
   * Default value: undefined.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  groupStyle?: ToolBarV2ItemGroupStyle;
  /**
   * Creates an AdvancedToolBarV2Item object.
   *
   * @param { AdvancedToolBarV2ItemParams } params - Constructor parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(params: AdvancedToolBarV2ItemParams);
}

/**
 * Declares the parameters of AdvancedToolBarV2Item.
 *
 * Extends {@link ToolBarV2ItemOptions} with advanced fields. content is
 * inherited as a required field; use isShowText on the item to control
 * whether the text is rendered.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface AdvancedToolBarV2ItemParams extends ToolBarV2ItemOptions {
  /**
   * Custom content builder for the toolbar item. When set, content and icon are ignored.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  builder?: CustomBuilder;
  /**
   * Define advanced ToolBarV2 title settings. When not provided, no title is rendered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  titleConfigs?: ToolBarV2TitleConfigs;
  /**
   * Placement position of the toolbar item.
   * Default value: ToolBarV2ItemPlacement.MAIN.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  placement?: ToolBarV2ItemPlacement;
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
   * Background color of an item in the ACTIVATE state (activated background color).
   * Only applies to icon-only items; icon+text items cannot have a background color.
   * Using $r('sys.color.comp_background_emphasize') is recommended.
   * Default value: undefined, indicating no color.
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
   * Item size (width × height) of the toolbar item.
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
   * When set to false, the text specified by content is not rendered in the toolbar.
   * This is useful for scenarios where only the icon needs to be displayed.
   * Default value: undefined. If the value is undefined or this parameter is not set, the default value is true,
   * and text can be displayed when both an icon and text are present.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  isShowText?: boolean;
  /**
   * Whether to display the toolbar overflow menu for this item.
   * Default value: undefined. If the value is undefined or this parameter is not set, the default value is false.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  isShowOverflowMenu?: boolean;
  /**
   * Group identifier. Items with the same non-empty groupID are rendered as a visual group.
   * The first item with the same groupID determines the group placement.
   * Default value: undefined, indicating that no groupID is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  groupID?: string;
  /**
   * Style configuration for the group to which this item belongs.
   * Only the style configuration of the first item with the same groupID that has groupStyle set takes effect.
   * Values on subsequent items with the same groupID are ignored.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  groupStyle?: ToolBarV2ItemGroupStyle;
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
export interface ToolBarV2PaddingOptions {
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
export interface ToolBarV2OverflowMenuStyle {
  /**
   * Font configuration for overflow menu items.
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
 * Defines the constructor options for ToolBarV2TitleStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarV2TitleStyleOptions {
  /**
   * Font size of the title text.
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
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  fontWeight?: FontWeight;
  /**
   * Minimum length of the title.
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
export declare class ToolBarV2TitleStyle {
  /**
   * Font size of the title text.
   * Default value: undefined. If the value is undefined or this parameter is not set, the default font size
   * is 20fp for the title and 14fp for the subtitle.
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
   * Default value: undefined. If the value is undefined or this parameter is not set, the default color
   * is $r('sys.color.font_primary') for the title and $r('sys.color.font_secondary') for the subtitle.
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
   * Default value: undefined. If the value is undefined or this parameter is not set, the default font weight
   * is FontWeight.Bold for the title and FontWeight.Regular for the subtitle.
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
   * Minimum length of the title.
   * Default value: undefined. If the value is undefined or this parameter is not set, the default value is 48vp.
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
   * Constructs a ToolBarV2TitleStyle instance.
   *
   * @param { ToolBarV2TitleStyleOptions } [options] - Constructor options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarV2TitleStyleOptions);
}

/**
 * Defines the constructor options for ToolBarV2TitleConfigs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarV2TitleOptions {
  /**
   * Title text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  content?: ResourceStr;
  /**
   * Subtitle text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  subTitleContent?: ResourceStr;
  /**
   * Placement of the title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  placement?: ToolBarV2ItemPlacement;
  /**
   * Whether the title is visible.
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
  style?: ToolBarV2TitleStyle;
  /**
   * Subtitle text style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  subTitleStyle?: ToolBarV2TitleStyle;
}

/**
 * Title configuration. When not provided, no title is rendered.
 *
 * The title participates in layout at the same level as toolbar items.
 * The title reuses `ToolBarV2ItemPlacement` (`LEADING` / `MAIN` / `TRAILING`)
 * to determine the rendering area, and is arranged in the same area as items with the same placement.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class ToolBarV2TitleConfigs {
  /**
   * Title text content. Required when constructing ToolBarV2TitleConfigs.
   * Default value: undefined. No content is available when this parameter is not set.
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
   * Subtitle text content.
   * Default value: undefined. No content is available when this parameter is not set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  subTitleContent?: ResourceStr;
  /**
   * Placement of the title.
   * Default value: ToolBarV2ItemPlacement.LEADING.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  placement?: ToolBarV2ItemPlacement;
  /**
   * Whether the title is visible.
   * Default value: true. The value true makes the title visible, and false hides it.
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
  style?: ToolBarV2TitleStyle;
  /**
   * Subtitle text style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  subTitleStyle?: ToolBarV2TitleStyle;
  /**
   * Constructs a ToolBarV2TitleConfigs instance.
   *
   * @param { ToolBarV2TitleOptions } [options] - Constructor options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarV2TitleOptions);
}

/**
 * Defines the constructor options for ToolBarV2ItemGroupStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarV2ItemGroupStyleOptions {
  /**
   * Placement of the group within the toolbar.
   * The group placement takes precedence over the placement of individual items within the group.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  placement?: ToolBarV2ItemPlacement;
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
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  padding?: ToolBarV2PaddingOptions;
  /**
   * Border radius of the group container.
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
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderWidth?: LengthMetrics;
  /**
   * Corner color of the group container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderColor?: ColorMetrics;
  /**
   * Whether to show the pressed-state effect for items within the group.
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
 * Defines the style configuration for a toolbar item group.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class ToolBarV2ItemGroupStyle {
  /**
   * Placement position of the group within the toolbar.
   * The group placement takes precedence over the placement of individual items within the group.
   * Default value: ToolBarV2ItemPlacement.MAIN.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  placement?: ToolBarV2ItemPlacement;
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
   * Default value: undefined. If the value is undefined or this parameter is not set,
   * $r('sys.color.comp_background_primary') is used.
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
   * Default value: undefined. If the value is undefined or this parameter is not set, the default value is 12vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  padding?: ToolBarV2PaddingOptions;
  /**
   * Border radius of the group container.
   * Default value: undefined. If the value is undefined or this parameter is not set, the default value
   * is half of the cross-axis length of the toolbar.
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
   * Default value: undefined. If the value is undefined or this parameter is not set, no border width is applied.
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
   * Corner color of the group container.
   * Default value: undefined. If the value is undefined or this parameter is not set, no color is applied.
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
   * Constructs a ToolBarV2ItemGroupStyle instance.
   *
   * @param { ToolBarV2ItemGroupStyleOptions } [options] - Constructor options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarV2ItemGroupStyleOptions);
}

/**
 * System material styles of the toolbar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @crossplatform
 * @since 26.1.0 dynamic
 */
export declare enum ToolBarV2MaterialStyle {
  /**
   * No system material effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamic
   */
  NONE = 0,
  /**
   * Default material style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamic
   */
  DEFAULT = 1
}

/**
 * Defines the constructor options for ToolBarV2StyleConfigs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarV2StyleOptions {
  /**
   * Padding of the toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  padding?: ToolBarV2PaddingOptions;
  /**
   * Background color of the toolbar.
   * Default value: undefined. If this parameter is not set, $r('sys.color.comp_background_primary') is used.
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
   * Default value: undefined. If this parameter is not set, no blur effect is applied.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  backgroundBlurStyle?: BlurStyle;
  /**
   * System material effect of the toolbar.
   * Default value: undefined. If the value is undefined or this parameter is not set, the system material is disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamic
   */
  systemBackgroundMaterial?: uiMaterial.Material;
  /**
   * Simplified system material style of the toolbar.
   * If both systemBackgroundMaterial and systemMaterialStyle are set, systemBackgroundMaterial takes precedence.
   * Default value: undefined. If the value is undefined or this parameter is not set,
   * ToolBarV2MaterialStyle.NONE is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamic
   */
  systemMaterialStyle?: ToolBarV2MaterialStyle;
  /**
   * Spacing between toolbar groups, and between a group and a standalone item.
   * Default value: undefined. If the value is undefined or this parameter is not set, the spacing is 12vp.
   * Value range: [8vp, 20vp].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  groupSpace?: LengthMetrics;
  /**
   * Size of toolbar items.
   * Default value: undefined. If the value is undefined or this parameter is not set,
   * the main-axis length is 56vp and the cross-axis length is 48vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  itemSize?: Size;
  /**
   * Default font size of text in toolbar items.
   * Default value: undefined. If the value is undefined or this parameter is not set,
   * the font size is $r('sys.float.ohos_id_text_size_caption').
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
   * Default value: undefined. If the value is undefined or this parameter is not set, no border width is applied.
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
   * Default value: undefined. If the value is undefined or this parameter is not set, no color is applied.
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
   * Default value: undefined. If the value is undefined or this parameter is not set,
   * the radius is half of the cross-axis length of the toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderRadius?: LengthMetrics;
  /**
   * Whether to enable the pressed-state effect.
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
export declare class ToolBarV2StyleConfigs {
  /**
   * Padding of the toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  padding?: ToolBarV2PaddingOptions;
  /**
   * Background color of the toolbar.
   * Default value: undefined. If the value is undefined or this parameter is not set,
   * $r('sys.color.comp_background_primary') is used.
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
   * Default value: undefined. If the value is undefined or this parameter is not set, no blur effect is applied.
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
   * System material effect of the toolbar.
   * Default value: undefined. The system material is not enabled when this parameter is not set.
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
   * Simplified material style of the toolbar.
   * If both systemBackgroundMaterial and systemMaterialStyle are set, systemBackgroundMaterial takes precedence.
   * Default value: undefined. If this parameter is not set, ToolBarV2MaterialStyle.NONE is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamic
   */
  @Trace
  systemMaterialStyle?: ToolBarV2MaterialStyle;
  /**
   * Spacing between toolbar groups, and between a group and a standalone item.
   * Default value: undefined. If the value is undefined or this parameter is not set, the spacing is 12vp.
   * Value range: [8vp, 20vp].
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
   * Size of toolbar items.
   * Default value: undefined. If the value is undefined or this parameter is not set,
   * the main-axis length is 56vp and the cross-axis length is 48vp.
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
   * Default font size of text in toolbar items.
   * Default value: undefined. If the value is undefined or this parameter is not set,
   * the font size is $r('sys.float.ohos_id_text_size_caption').
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
   * Default value: undefined. If the value is undefined or this parameter is not set, no border width is applied.
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
   * Default value: undefined. If the value is undefined or this parameter is not set, no color is applied.
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
   * Default value: undefined. If the value is undefined or this parameter is not set,
   * the radius is half of the cross-axis length of the toolbar.
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
   * Whether to enable the pressed-state effect.
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
   * Constructs a ToolBarV2StyleConfigs instance.
   *
   * @param { ToolBarV2StyleOptions } [options] - Constructor options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarV2StyleOptions);
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
   * Default value: undefined. If the value is undefined or this parameter is not set,
   * the toolbar fills the available space along the layout direction.
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
   * Sets the length of the toolbar perpendicular to the layout direction.
   *
   * Horizontal: controls height. Vertical: controls width.
   * Default value: undefined. If the value is undefined or this parameter is not set, the value is 56vp.
   *
   * @param { LengthMetrics } value - The length value perpendicular to the layout direction.
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
   * Default value: undefined. If the value is undefined or this parameter is not set,
   * items are arranged horizontally.
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
   * @param { ToolBarV2StyleConfigs } styleConfigs - The style configuration object.
   * @returns { AdvancedToolBarV2Modifier } Returns this modifier for chaining.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  style(styleConfigs: ToolBarV2StyleConfigs): AdvancedToolBarV2Modifier;
  /**
   * Sets the style configuration for the overflow menu popup.
   *
   * @param { ToolBarV2OverflowMenuStyle } menuStyle - The overflow menu style configuration object.
   * @returns { AdvancedToolBarV2Modifier } Returns this modifier for chaining.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  overflowMenuStyle(menuStyle: ToolBarV2OverflowMenuStyle): AdvancedToolBarV2Modifier;
}

/**
 * The toolbar is used to display action options for the current screen content. It is displayed at the bottom of the
 * screen and is suitable for scenarios where quick action entries need to be provided to users. A standard toolbar can
 * display a maximum of five entries. Any excess entries are collapsed into a "More" item, which is displayed on the
 * far right. It is suitable for scenarios where quick operations on the current page content are needed, helping
 * users quickly access common functions and improving operation efficiency.<br />
 * ToolBarV2 supports configuring advanced toolbar items via `AdvancedToolBarV2Item` (which extends `ToolBarV2Item`).
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
 * ###### Child Components
 *
 * None
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ComponentV2
export declare struct ToolBarV2 {
  /**
   * Define ToolBarV2 item list. Using ToolBarV2Item[] constitutes a standard toolbar.
   * `AdvancedToolBarV2Item` (which extends `ToolBarV2Item`) can be used for advanced
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
   * Defines the index of the activated item in ToolBarV2. The default value is -1.
   * This parameter applies only to standard toolbars composed of ToolBarV2Item.
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
   * Defines the divider modifier of ToolBarV2.
   * This parameter applies only to standard toolbars composed of ToolBarV2Item.
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
   * Defines the modifier of ToolBarV2.
   * This parameter applies only to standard toolbars composed of ToolBarV2Item.
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
   * Define advanced ToolBarV2 modifier. Merges layout attributes, style configs,
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
