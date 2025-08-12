/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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

/*** if arkts 1.2 */
import { CommonMethod } from './common';
import { CustomBuilder } from './builder'
import { TextHeightAdaptivePolicy, TextOverflow, VerticalAlign } from './enums';
import { Dimension, Font, Length, LocalizedPadding, Padding, Resource, ResourceColor, ResourceStr, VoidCallback } from './units';
import { ComponentContent } from '../ComponentContent'
import { SymbolGlyphModifier } from '../SymbolGlyphModifier';
/*** endif */

/**
 * Enum for the mode of the tab bar when selected.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Enum for the mode of the tab bar when selected.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum SelectedMode {
  /**
   * The value of indicator
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Indicator mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  INDICATOR,

  /**
   * The value of board
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Board mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  BOARD
}

/**
 * Enum for the layout mode of the content in the tab bar.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Enum for the layout mode of the content in the tab bar.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum LayoutMode {

  /**
   * The the content is laid vertically or horizontally, according to its width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The the content is laid vertically or horizontally, according to its width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  AUTO = 0,
  /**
   * The the content is laid vertically
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The the content is laid vertically
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  VERTICAL = 1,

  /**
   * The the content is laid horizontally
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The the content is laid horizontally
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  HORIZONTAL = 2
}


/**
 * Provide an interface for the style of an indicator including color, height, width, border radius
 * and margin top
 *
 * @interface IndicatorStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provide an interface for the style of an indicator including color, height, width, border radius
 * and margin top
 *
 * @interface IndicatorStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface IndicatorStyle {
  /**
   * Define the color of the indicator
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Color of the indicator and board.
   *
   * @type { ?ResourceColor }
   * @default #FF007DFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  color?: ResourceColor;

  /**
   * Define the height of the indicator
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Height of the indicator. It cannot be set in percentage.
   *
   * @type { ?Length }
   * @default 2vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  height?: Length;

  /**
   * Define the width of the indicator.
   * If it is 0, the width will be equal to the width of the content
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Width of the indicator. It cannot be set in percentage.
   * If it is 0, the width will be equal to the width of the content
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  width?: Length;

  /**
   * Define the border radius of the indicator
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Rounded corner radius of the indicator. It cannot be set in percentage.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  borderRadius?: Length;

  /**
   * Define the margin top of the indicator
   *
   * @type { ?Length }
   * @default 8
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Spacing between the indicator and text.It cannot be set in percentage.
   *
   * @type { ?Length }
   * @default 8vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  marginTop?: Length;
}

/**
 * Provide an interface for the style of an SubTabBar indicator including color, height, width, border radius
 * and margin top
 *
 * @interface SubTabBarIndicatorStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare interface SubTabBarIndicatorStyle {
  /**
   * Define the color of the indicator
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  color?: ResourceColor;

  /**
   * Define the height of the indicator
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  height?: Length;

  /**
   * Define the width of the indicator.
   * If it is 0, the width will be equal to the width of the content
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  width?: Length;

  /**
   * Define the border radius of the indicator
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  borderRadius?: Length;

  /**
   * Define the margin top of the indicator
   *
   * @type { ?Length }
   * @default 8
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  marginTop?: Length;
}

/**
 * Provide an interface for the style of an indicator including border radius
 *
 * @interface BoardStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provide an interface for the style of an indicator including border radius
 *
 * @interface BoardStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface BoardStyle {
  /**
   * Define the border radius of the board
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define the border radius of the board
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  borderRadius?: Length;
}

/**
 * LabelStyle object.
 *
 * @interface LabelStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * LabelStyle object.
 *
 * @interface LabelStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface LabelStyle {
  /**
   * overflow mode.
   *
   * @type { ?TextOverflow }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Display mode when the label text is too long.
   *
   * @type { ?TextOverflow }
   * @default TextOverflow.Ellipsis
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  overflow?: TextOverflow;

  /**
   * Label max lines.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Maximum number of lines in the label text.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  maxLines?: number;

  /**
   * Min font size for adapted height.
   *
   * @type { ?(number | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Minimum font size of the label text.
   *
   * @type { ?(number | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  minFontSize?: number | ResourceStr;

  /**
   * Max font size for adapted height.
   *
   * @type { ?(number | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Maximum font size of the label text.
   *
   * @type { ?(number | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  maxFontSize?: number | ResourceStr;

  /**
   * Adapt text height option.
   *
   * @type { ?TextHeightAdaptivePolicy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * How the adaptive height is determined for the label text.
   *
   * @type { ?TextHeightAdaptivePolicy }
   * @default TextHeightAdaptivePolicy.MAX_LINES_FIRST
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  heightAdaptivePolicy?: TextHeightAdaptivePolicy;

  /**
   * Font style.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Font of the label text.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  font?: Font;

  /**
   * Font color of the label text when it is selected.
   *
   * @type { ?ResourceColor }
   * @default #FF007DFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selectedColor?: ResourceColor;

  /**
   * Font color of the label text when it is not selected.
   *
   * @type { ?ResourceColor }
   * @default #99182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  unselectedColor?: ResourceColor;
}

/**
 * TabBarLabelStyle object.
 *
 * @interface TabBarLabelStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare interface TabBarLabelStyle {

  /**
   * overflow mode.
   *
   * @type { ?TextOverflow }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  overflow?: TextOverflow;

  /**
   * Label max lines.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  maxLines?: number;

  /**
   * Min font size for adapted height.
   *
   * @type { ?(number | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  minFontSize?: number | ResourceStr;

  /**
   * Max font size for adapted height.
   *
   * @type { ?(number | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  maxFontSize?: number | ResourceStr;

  /**
   * Adapt text height option.
   *
   * @type { ?TextHeightAdaptivePolicy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  heightAdaptivePolicy?: TextHeightAdaptivePolicy;

  /**
   * Font style.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  font?: Font;

  /**
   * The text color of the selected tab bar.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  selectedColor?: ResourceColor;

  /**
   * The text color of the unselected tab bar.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  unselectedColor?: ResourceColor;
}

/**
 * TabBarIconStyle object.
 *
 * @interface TabBarIconStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface TabBarIconStyle {
  /**
   * The icon color of the selected tab bar.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedColor?: ResourceColor;

  /**
   * The icon color of the unselected tab bar.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  unselectedColor?: ResourceColor;
}

/**
 * TabBarSymbol object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
/**
 * TabBarSymbol object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 * @noninterop
 */
declare class TabBarSymbol {
  /**
   * Symbol icon in the normal style.
   *
   * @type { SymbolGlyphModifier }
   * @default fontColor: #66182431, renderingStrategy: SymbolRenderingStrategy.MULTIPLE_OPACITY, fontSize: 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Symbol icon in the normal style.
   *
   * @type { SymbolGlyphModifier }
   * @default fontColor: #66182431, renderingStrategy: SymbolRenderingStrategy.MULTIPLE_OPACITY, fontSize: 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  normal: SymbolGlyphModifier;

  /**
   * Symbol icon in the selected style.
   *
   * @type { ?SymbolGlyphModifier }
   * @default fontColor: #ff007dff, renderingStrategy: SymbolRenderingStrategy.MULTIPLE_OPACITY, fontSize: 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Symbol icon in the selected style.
   *
   * @type { ?SymbolGlyphModifier }
   * @default fontColor: #ff007dff, renderingStrategy: SymbolRenderingStrategy.MULTIPLE_OPACITY, fontSize: 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  selected?: SymbolGlyphModifier;
}

/**
 * Icon and text for TabBar.
 *
 * @typedef TabBarOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface TabBarOptions {
  /**
   * TabBar icon.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * TabBar icon.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * TabBar icon.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * TabBar icon.
   * Anonymous Object Rectification
   * 
   * <p><strong>NOTE</strong>:
   * <br>If the icon uses an SVG image, the width and height attributes of the SVG image must be deleted.
   * Otherwise, the icon size will be determined by the width and height attributes of the SVG image.
   * </p>
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  icon?: string | Resource;

  /**
   * TabBar text.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * TabBar text.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * TabBar text.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * TabBar text.
   * Anonymous Object Rectification
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  text?: string | Resource
}

/**
 * Define SubTabBarStyle, the style is text and underline.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Define SubTabBarStyle, the style is text and underline.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Define SubTabBarStyle, the style is text and underline.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class SubTabBarStyle {
  /**
   * constructor.
   *
   * @param { ResourceStr } content - indicates the content of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * constructor.
   *
   * @param { ResourceStr } content - indicates the content of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * constructor.
   *
   * @param { ResourceStr } content - indicates the content of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor(content: ResourceStr);
  /**
   * constructor.
   *
   * @param { ResourceStr | ComponentContent } content - indicates the content of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor(content: ResourceStr | ComponentContent);

  /**
   * constructor
   *
   * @param { ResourceStr } content - indicates the content of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Static constructor used to create a SubTabBarStyle instance.
   *
   * @param { ResourceStr } content - indicates the content of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static of(content: ResourceStr): SubTabBarStyle;
  /**
   * Static constructor used to create a SubTabBarStyle instance. You can set custom content with ComponentContent.
   *
   * @param { ResourceStr | ComponentContent } content - indicates the content of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static of(content: ResourceStr | ComponentContent): SubTabBarStyle;

  /**
   * Set the style of the indicator when selected
   *
   * @param { IndicatorStyle } value - indicates the indicator style of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the indicator style of the selected subtab.
   *
   * @param { IndicatorStyle } value - indicator style object for the selected subtab.
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  indicator(value: IndicatorStyle): SubTabBarStyle;

  /**
   * Set the style of the indicator when selected
   *
   * @param { SubTabBarIndicatorStyle } style - indicates the indicator style of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  indicator(style: SubTabBarIndicatorStyle): SubTabBarStyle;

  /**
   * Set the mode of the indicator when selected
   *
   * @param { SelectedMode } value - indicates the selected mode of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the display mode of the selected subtab.
   * 
   * <p><strong>NOTE</strong>:
   * <br>It takes effect only in the horizontal layout.
   * </p>
   *
   * @param { SelectedMode } value - display mode of the selected subtab. Default value is SelectedMode.INDICATOR.
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedMode(value: SelectedMode): SubTabBarStyle;

  /**
   * Set the style of the board when selected
   *
   * @param { BoardStyle } value - indicates the board style of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the background style (board style) of the selected subtab.
   * 
   * <p><strong>NOTE</strong>:
   * <br>It takes effect only in the horizontal layout.
   * </p>
   *
   * @param { BoardStyle } value - background style object for the selected subtab.
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  board(value: BoardStyle): SubTabBarStyle;

  /**
   * Set the label style of the indicator
   *
   * @param { LabelStyle } value - indicates the label style of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the style of the label text and font for the subtab.
   *
   * @param { LabelStyle } value - style object for the label text and font of the subtab.
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  labelStyle(value: LabelStyle): SubTabBarStyle;

  /**
   * Set the label style of the sub tab bar
   *
   * @param { TabBarLabelStyle } style - indicates the label style of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  labelStyle(style: TabBarLabelStyle): SubTabBarStyle;

  /**
   * Set the padding of the sub tab bar
   *
   * @param { Padding | Dimension } value - indicates the padding of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the padding of the sub tab bar
   * 
   * <p><strong>NOTE</strong>:
   * <br>It cannot be set in percentage. 
   * <br>When the parameter is of the Dimension type, the value applies to all sides.
   * </p>
   *
   * @param { Padding | Dimension } value - indicates the padding of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  padding(value: Padding | Dimension): SubTabBarStyle;

  /**
   * Set the padding of the sub tab bar
   * 
   * <p><strong>NOTE</strong>:
   * <br>This API supports mirroring but does not support percentage-based settings.
   * </p>
   *
   * @param { LocalizedPadding } padding - indicates the padding of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  padding(padding: LocalizedPadding): SubTabBarStyle;

  /**
   * Set an id to the sub tab bar to identify it
   *
   * @param { string } value - id of the sub tab bar to identify it
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set an id to the sub tab bar to identify it
   *
   * @param { string } value - id of the sub tab bar to identify it
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  id(value: string): SubTabBarStyle;
}

/**
 * Define BottomTabBarStyle, the style is icon and text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Define BottomTabBarStyle, the style is icon and text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Define BottomTabBarStyle, the style is icon and text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class BottomTabBarStyle {
  /**
   * constructor.
   *
   * @param { ResourceStr } icon - indicates the icon of the bottom tab bar
   * @param { ResourceStr } text - indicates the text of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * constructor.
   *
   * @param { ResourceStr } icon - indicates the icon of the bottom tab bar
   * @param { ResourceStr } text - indicates the text of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * constructor.
   *
   * @param { ResourceStr } icon - indicates the icon of the bottom tab bar
   * @param { ResourceStr } text - indicates the text of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * constructor.
   *
   * @param { ResourceStr | TabBarSymbol } icon - indicates the icon of the bottom tab bar
   * @param { ResourceStr } text - indicates the text of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr);

  /**
   * of.
   *
   * @param { ResourceStr } icon - indicates the icon of the bottom tab bar
   * @param { ResourceStr } text - indicates the text of the bottom tab bar
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * of.
   *
   * @param { ResourceStr } icon - indicates the icon of the bottom tab bar
   * @param { ResourceStr } text - indicates the text of the bottom tab bar
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Static constructor used to create a BottomTabBarStyle instance.
   *
   * @param { ResourceStr | TabBarSymbol } icon - indicates the icon of the bottom tab bar
   * @param { ResourceStr } text - indicates the text of the bottom tab bar
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static of(icon: ResourceStr | TabBarSymbol, text: ResourceStr): BottomTabBarStyle;

  /**
   * Set the label style of the indicator
   *
   * @param { LabelStyle } value - indicates the label style of the bottom tab bar
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the style of the label text and font for the bottom tab.
   *
   * @param { LabelStyle } value - style of the label text and font for the bottom tab.
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  labelStyle(value: LabelStyle): BottomTabBarStyle;

  /**
   * Set the label style of the bottom tab bar
   *
   * @param { TabBarLabelStyle } style - indicates the label style of the bottom tab bar
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  labelStyle(style: TabBarLabelStyle): BottomTabBarStyle;

  /**
   * Set the padding of the bottom tab bar
   *
   * @param { Padding | Dimension } value - indicates the padding of the bottom tab bar
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the padding of the bottom tab bar
   *
   * @param { Padding | Dimension } value - indicates the padding of the bottom tab bar
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Set the padding of the bottom tab bar
   * 
   * <p><strong>NOTE</strong>:
   * <br>It cannot be set in percentage.
   * <br>When the parameter is of the Dimension type, the value applies to all sides.
   * </p>
   *
   * @param { Padding | Dimension | LocalizedPadding } value - indicates the padding of the bottom tab bar
   * Default value is { left:4.0vp, right:4.0vp, top:0.0vp, bottom:0.0vp }.
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  padding(value: Padding | Dimension | LocalizedPadding): BottomTabBarStyle;

  /**
   * Set the layout mode of the bottom tab bar
   *
   * @param { LayoutMode } value - indicates the layout mode of the bottom tab bar
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the layout mode of the images and texts on the bottom tab.
   *
   * @param { LayoutMode } value - layout mode of the images and text on the bottom tab.
   * Default value is LayoutMode.VERTICAL.
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  layoutMode(value: LayoutMode): BottomTabBarStyle;

  /**
   * Set the vertical alignment style of the bottom tab bar
   *
   * @param { VerticalAlign } value - indicates the vertical alignment of the bottom tab bar
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the vertical alignment mode of the images and text on the bottom tab.
   *
   * @param { VerticalAlign } value - vertical alignment mode of the images and text on the bottom tab.
   * Default value is VerticalAlign.Center.
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  verticalAlign(value: VerticalAlign): BottomTabBarStyle;

  /**
   * Set the symmetric extensible of the bottom tab bar
   *
   * @param { boolean } value - indicates whether the bottom tab bar is extensible
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets whether the images and text on the bottom tab can be symmetrically extended by 
   * the minimum value of the available space on the left and right bottom tabs.
   * 
   * <p><strong>NOTE</strong>:
   * <br>This parameter is valid only between bottom tabs in fixed horizontal mode.
   * </p>
   *
   * @param { boolean } value - indicates whether the bottom tab bar is extensible. Default value is false.
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  symmetricExtensible(value: boolean): BottomTabBarStyle;

  /**
   * Set an id to the bottom tab bar to identify it
   *
   * @param { string } value - id of the bottom tab bar to identify it
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set an id to the bottom tab bar to identify it
   *
   * @param { string } value - id of the bottom tab bar to identify it
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  id(value: string): BottomTabBarStyle;

  /**
   * Sets the style of the label icon on the bottom tab.
   *
   * @param { TabBarIconStyle } style - style of the label icon on the bottom tab.
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  iconStyle(style: TabBarIconStyle): BottomTabBarStyle;
}

/**
 * Provides an interface for switching the content view on a tab page.
 *
 * @interface TabContentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides an interface for switching the content view on a tab page.
 *
 * @interface TabContentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides an interface for switching the content view on a tab page.
 *
 * @interface TabContentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 * @noninterop
 */
interface TabContentInterface {
  /**
   * Called when the content view of the switch tab is set.
   *
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the content view of the switch tab is set.
   *
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the content view of the switch tab is set.
   *
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (): TabContentAttribute;
}

/**
 * Defines the attribute functions of TabContent.
 *
 * @extends CommonMethod<TabContentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the attribute functions of TabContent.
 *
 * @extends CommonMethod<TabContentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the attribute functions of TabContent.
 *
 * @extends CommonMethod<TabContentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 * @noninterop
 */
declare class TabContentAttribute extends CommonMethod<TabContentAttribute> {
  /**
   * Called when tabbar is entered.
   *
   * @param { string | Resource | { icon?: string | Resource; text?: string | Resource } } value
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when tabbar is entered.
   *
   * @param { string | Resource | CustomBuilder | { icon?: string | Resource; text?: string | Resource } } value
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when tabbar is entered.
   *
   * @param { string | Resource | CustomBuilder | { icon?: string | Resource; text?: string | Resource } } value
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when tabbar is entered.
   *
   * @param { string | Resource | CustomBuilder | { icon?: string | Resource; text?: string | Resource } } value
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the content displayed on the tab bar.
   * Anonymous Object Rectification
   * 
   * <p><strong>NOTE</strong>:
   * <br>If the content set exceeds the space provided by the tab bar, it will be clipped.
   * </p>
   *
   * @param { string | Resource | CustomBuilder | TabBarOptions } options - Content displayed on the tab bar.
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  tabBar(options: string | Resource | CustomBuilder | TabBarOptions): TabContentAttribute;

  /**
   * Called when tabbar is entered.
   *
   * @param { SubTabBarStyle | BottomTabBarStyle } value
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Called when tabbar is entered.
   *
   * @param { SubTabBarStyle | BottomTabBarStyle } value
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the content displayed on the tab bar.
   * 
   * <p><strong>NOTE</strong>:
   * <br>The bottom tab style does not include an indicator.
   * <br>When an icon display error occurs, a gray blank block is displayed.
   * </p>
   *
   * @param { SubTabBarStyle | BottomTabBarStyle } value - Content displayed on the tab bar.
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  tabBar(value: SubTabBarStyle | BottomTabBarStyle): TabContentAttribute;

  /**
   * Sets the content displayed on the tab bar.
   * Anonymous Object Rectification
   * 
   * <p><strong>NOTE</strong>:
   * <br>If BottomTabBarStyle or TabBarOptions is used and an icon is set, 
   * a gray block will be displayed if the icon is invalid.
   * <br>If the content exceeds the space provided by the tab bar, it will be clipped.
   * </p>
   *
   * @param { ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | TabBarOptions } content
   * Content displayed on the tab bar.
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  tabBar(content: ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | 
    TabBarOptions): TabContentAttribute;

  /**
   * Called when the tab content is about to be displayed. The scenarios include the first-time display,
   * tab switching, page switching, and window switching between the foreground and background.
   * 
   * @param { VoidCallback  } event
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWillShow(event: VoidCallback): TabContentAttribute;

  /**
   * Called when the tab content is about to be hidden. The scenarios include the tab switching,
   * page switching, and window switching between the foreground and background.
   * 
   * @param { VoidCallback  } event
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWillHide(event: VoidCallback): TabContentAttribute;
}

/**
 * Defines TabContent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines TabContent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TabContent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @noninterop
 */
declare const TabContent: TabContentInterface;

/**
 * Defines TabContent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines TabContent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TabContent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @noninterop
 */
declare const TabContentInstance: TabContentAttribute;
