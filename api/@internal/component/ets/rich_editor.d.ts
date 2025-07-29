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

/*** if arkts 1.2 */
import {  ShadowOptions, ClickEvent, SelectionOptions, CommonMethod, Callback, HapticFeedbackMode, RectResult, HoverEvent, PixelMap } from './common';
import { CustomBuilder } from './builder';
import { ResourceColor, Length, ResourceStr, Dimension, Margin, BorderRadiuses, Font, VoidCallback } from './units';
import { FontStyle, FontWeight, TextAlign, WordBreak, LineBreakStrategy, ImageSpanAlignment, ImageFit, ResponseType, CopyOptions, BarState } from './enums';
import { DecorationStyleInterface, StyledString, MutableStyledString } from './styledString';
import { Resource } from './../../../api/global/resource';
import { SymbolEffectStrategy, SymbolRenderingStrategy } from './symbolglyph';
import { DecorationStyleResult, TextRange, MenuType, TextEditControllerEx, LayoutManager, PreviewText, StyledStringController, StyledStringChangedListener, TextDataDetectorConfig, OnDidChangeCallback, EditMenuOptions, KeyboardAppearance } from './textCommon';
import { GestureEvent } from './gesture';
import { EnterKeyType, SubmitEvent } from './textInput';
import { LengthMetrics , ColorMetrics } from '../Graphics';
import { TextBackgroundStyle } from "./span";
/*** endif */

/**
 * Defines delete text direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines delete text direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum RichEditorDeleteDirection {
  /**
   * Delete backward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Delete backward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  BACKWARD,

  /**
   * Delete forward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Delete forward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  FORWARD,
}

/**
 * Defines span type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines span type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum RichEditorSpanType {
  /**
   * Text,corresponding textSpan type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Text,corresponding textSpan type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  TEXT = 0,

  /**
   * Image,corresponding imageSpan type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Image,corresponding imageSpan type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  IMAGE = 1,

  /**
   * Mixed,corresponding mixed span type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Mixed,corresponding mixed span type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  MIXED = 2,

  /**
   * Builder,corresponding builderSpan type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  BUILDER = 3,

  /**
   * When no other types are explicitly specified, this type will be matched.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  DEFAULT = 4,
}

/**
 * Defines undo style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare enum UndoStyle {
  /**
   * Undo without style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  CLEAR_STYLE = 0,

  /**
   * Undo keep style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  KEEP_STYLE = 1,
}

/**
 * ResponseType for contextMenu
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * ResponseType for contextMenu
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum RichEditorResponseType {
  /**
   * Right click.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Right click.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  RIGHT_CLICK = 0,

  /**
   * Long press.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Long press.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  LONG_PRESS = 1,

  /**
   * Selected by mouse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Selected by mouse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  SELECT = 2,

  /**
   * When no other types are explicitly specified, this type will be matched.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  DEFAULT = 3,
}

/**
 * Defines the span position.
 *
 * @interface RichEditorSpanPosition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the span position.
 *
 * @interface RichEditorSpanPosition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorSpanPosition {
  /**
   * Define the index of span.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define the index of span.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  spanIndex: number;

  /**
   * The range of span.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The range of span.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  spanRange: [number, number];
}

/**
 * Defines the span text style.
 *
 * @interface RichEditorTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the span text style.
 *
 * @interface RichEditorTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorTextStyle {
  /**
   * font color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * font color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontColor?: ResourceColor;

  /**
   * font size.
   *
   * @type { ?(Length | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * font size.
   *
   * @type { ?(Length | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontSize?: Length | number;

  /**
   * font style.
   *
   * @type { ?FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * font style.
   *
   * @type { ?FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontStyle?: FontStyle;

  /**
   * font weight.
   *
   * @type { ?(number | FontWeight | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * font weight.
   *
   * @type { ?(number | FontWeight | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontWeight?: number | FontWeight | string;

  /**
   * font family.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * font family.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontFamily?: ResourceStr;

  /**
   * font decoration.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * font decoration.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Font decoration.
   *
   * @type { ?DecorationStyleInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  decoration?: DecorationStyleInterface;

  /**
   * Text shadow
   *
   * @type { ?(ShadowOptions | Array<ShadowOptions>) } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Text shadow
   *
   * @type { ?(ShadowOptions | Array<ShadowOptions>) } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textShadow?: ShadowOptions | Array<ShadowOptions>;
  
  /**
   * letter spacing.
   *
   * @type { ?(number | string) } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  letterSpacing?: number | string;

  /**
   * line height.
   *
   * @type { ? (number | string | Resource) } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lineHeight?: number | string | Resource;

  /**
   * Set the text with half leading.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  halfLeading?: boolean;

  /**
   * Set font feature, advanced text styles and effects as designed by the font author.
   * The format is the like the CSS font-feature-settings attribute.
   *
   * @type { ?string }
   * normal | <feature-tag-value>,
   * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
   * the values of <feature-tag-value> reference to doc of RichEditor component
   * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontFeature?: string;

  /**
   * Text background style.
   *
   * @type { ?TextBackgroundStyle } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textBackgroundStyle?: TextBackgroundStyle;
}


/**
 * Defines the leading margin placeholder of a paragraph.
 *
 * @interface LeadingMarginPlaceholder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the leading margin placeholder of a paragraph.
 *
 * @interface LeadingMarginPlaceholder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface LeadingMarginPlaceholder {
  /**
   * Placeholder pixelMap.
   *
   * @type { PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Placeholder pixelMap.
   *
   * @type { PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  pixelMap: PixelMap;

  /**
   * Placeholder size.
   *
   * @type { [Dimension, Dimension] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Placeholder size.
   *
   * @type { [Dimension, Dimension] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  size: [Dimension, Dimension];
}

/**
 * Defines the paragraph style.
 *
 * @interface RichEditorParagraphStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the paragraph style.
 *
 * @interface RichEditorParagraphStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorParagraphStyle {
  /**
   * Text alignment.
   *
   * @type { ?TextAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Text alignment.
   *
   * @type { ?TextAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textAlign?: TextAlign;

  /**
   * Vertical alignment of text.
   *
   * @type { ?TextVerticalAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  textVerticalAlign?: TextVerticalAlign;

  /**
   * Leading margin.
   *
   * @type { ?(Dimension | LeadingMarginPlaceholder) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Leading margin.
   *
   * @type { ?(Dimension | LeadingMarginPlaceholder) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  leadingMargin?: Dimension | LeadingMarginPlaceholder;

  /**
   * Set word break type.
   *
   * @type { ?WordBreak }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  wordBreak?: WordBreak;

  /**
   * Set line break strategy type.
   *
   * @type { ?LineBreakStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lineBreakStrategy?: LineBreakStrategy;

  /**
   * Set paragraph spacing.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'19','1.2':'20'}
   * @arkts 1.1&1.2
   */
  paragraphSpacing?: number;
}

/**
 * Defines the paste event.
 *
 * @interface PasteEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface PasteEvent {
  /**
   * Override system paste event.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Override system paste event.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  preventDefault?: Callback<void>;

  /**
   * Override system paste event.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  preventDefault?: VoidCallback;
}

/**
 * Defines the text span.
 *
 * @interface RichEditorTextSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the text span.
 *
 * @interface RichEditorTextSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorTextSpan {
  /**
   * The position of the text span.
   *
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The position of the text span.
   *
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * The content of the text span.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The content of the text span.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  value: string;

  /**
   * text style.
   *
   * @type { ?RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * text style.
   *
   * @type { ?RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textStyle?: RichEditorTextStyle;
}

/**
 * Defines the richEditor Image Layout Style.
 *
 * @interface RichEditorLayoutStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the richEditor Image Layout Style.
 *
 * @interface RichEditorLayoutStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface RichEditorLayoutStyle {
  /**
   * Outer Margin.
   *
   * @type { ?(Dimension | Margin) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Outer Margin.
   *
   * @type { ?(Dimension | Margin) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  margin?: Dimension | Margin;

  /**
   * Border radius.
   *
   * @type { ?(Dimension | BorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Border radius.
   *
   * @type { ?(Dimension | BorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  borderRadius?: Dimension | BorderRadiuses;
}

/**
 * Defines the span image style.
 *
 * @interface RichEditorImageSpanStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the span image style.
 *
 * @interface RichEditorImageSpanStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorImageSpanStyle {
  /**
   * image size.
   *
   * @type { ?[Dimension, Dimension] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * image size.
   *
   * @type { ?[Dimension, Dimension] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  size?: [Dimension, Dimension];

  /**
   * image vertical align.
   *
   * @type { ?ImageSpanAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * image vertical align.
   *
   * @type { ?ImageSpanAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  verticalAlign?: ImageSpanAlignment;

  /**
   * image fit.
   *
   * @type { ?ImageFit }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * image fit.
   *
   * @type { ?ImageFit }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  objectFit?: ImageFit;

  /**
   * RichEditor ImageSpan Layout Style.
   *
   * @type { ?RichEditorLayoutStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * RichEditor ImageSpan Layout Style.
   *
   * @type { ?RichEditorLayoutStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  layoutStyle?: RichEditorLayoutStyle;
}

/**
 * Defines the symbol span style.
 *
 * @interface RichEditorSymbolSpanStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the symbol span style.
 *
 * @interface RichEditorSymbolSpanStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorSymbolSpanStyle {
  /**
   * The font size.
   *
   * @type { ?(number | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The font size.
   *
   * @type { ?(number | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontSize?: number | string | Resource;

  /**
   * The font color.
   *
   * @type { ?Array<ResourceColor> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The font color.
   *
   * @type { ?Array<ResourceColor> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontColor?: Array<ResourceColor>;

  /**
   * The font weight.
   *
   * @type { ?(number | FontWeight | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The font weight.
   *
   * @type { ?(number | FontWeight | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontWeight?: number | FontWeight | string;

  /**
   * The symbol span effect strategy.
   *
   * @type { ?SymbolEffectStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The symbol span effect strategy.
   *
   * @type { ?SymbolEffectStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  effectStrategy?: SymbolEffectStrategy;

  /**
   * The symbol span rendering strategy.
   *
   * @type { ?SymbolRenderingStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The symbol span rendering strategy.
   *
   * @type { ?SymbolRenderingStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  renderingStrategy?: SymbolRenderingStrategy;
}

/**
 * Defines the text style result.
 *
 * @interface RichEditorTextStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the text style result.
 *
 * @interface RichEditorTextStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorTextStyleResult {
  /**
   * font color.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * font color.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontColor: ResourceColor;

  /**
   * font size.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * font size.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontSize: number;

  /**
   * font style.
   *
   * @type { FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * font style.
   *
   * @type { FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontStyle: FontStyle;

  /**
   * font weight.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * font weight.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontWeight: number;

  /**
   * font family.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * font family.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontFamily: string;

  /**
   * font decoration.
   *
   * @type { object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * font decoration.
   *
   * @type { object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Font decoration.
   *
   * @type { DecorationStyleResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  decoration: DecorationStyleResult;

  /**
   * Text shadow
   *
   * @type { ?Array<ShadowOptions> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textShadow?: Array<ShadowOptions>;

  /**
   * letter spacing.
   *
   * @type { ?number } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  letterSpacing?: number;

  /**
   * line height.
   *
   * @type { ?number } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lineHeight?: number;

  /**
   * Set the text with half leading.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  halfLeading?: boolean;

  /**
   * Set font feature, advanced text styles and effects as designed by the font author.
   * The format is the like the CSS font-feature-settings attribute.
   *
   * @type { ?string }
   * normal | <feature-tag-value>,
   * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
   * the values of <feature-tag-value> reference to doc of RichEditor component
   * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontFeature?: string;

  /**
   * Text background style.
   *
   * @type { ?TextBackgroundStyle } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textBackgroundStyle?: TextBackgroundStyle;
}

/**
 * Defines the paragraph result.
 *
 * @interface RichEditorParagraphResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the paragraph result.
 *
 * @interface RichEditorParagraphResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorParagraphResult {
  /**
   * The paragraph style.
   *
   * @type { RichEditorParagraphStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The paragraph style.
   *
   * @type { RichEditorParagraphStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  style: RichEditorParagraphStyle;

  /**
   * The range of paragraph based on character indices.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The range of paragraph based on character indices.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  range: [number, number];
}

/**
 * Defines the symbol span style result.
 *
 * @interface RichEditorSymbolSpanStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the symbol span style result.
 *
 * @interface RichEditorSymbolSpanStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorSymbolSpanStyleResult {
  /**
   * The font size.
   *
   * @type { number | string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The font size.
   *
   * @type { number | string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontSize: number | string | Resource;

  /**
   * The font color.
   *
   * @type { Array<ResourceColor> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The font color.
   *
   * @type { Array<ResourceColor> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontColor: Array<ResourceColor>;

  /**
   * The font weight.
   *
   * @type { number | FontWeight | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The font weight.
   *
   * @type { number | FontWeight | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontWeight: number | FontWeight | string;

  /**
   * The symbol span effect strategy.
   *
   * @type { SymbolEffectStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The symbol span effect strategy.
   *
   * @type { SymbolEffectStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  effectStrategy: SymbolEffectStrategy;

  /**
   * The symbol span rendering strategy.
   *
   * @type { SymbolRenderingStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The symbol span rendering strategy.
   *
   * @type { SymbolRenderingStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  renderingStrategy: SymbolRenderingStrategy;
}

/**
 * Defines the text span result.
 *
 * @interface RichEditorTextSpanResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the text span result.
 *
 * @interface RichEditorTextSpanResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorTextSpanResult {
  /**
   * The position of the text span.
   *
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The position of the text span.
   *
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * The content of the text span.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The content of the text span.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  value: string;

  /**
   * text style.
   *
   * @type { RichEditorTextStyleResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * text style.
   *
   * @type { RichEditorTextStyleResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textStyle: RichEditorTextStyleResult;

  /**
   * get offset in span.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * get offset in span.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offsetInSpan: [number, number];

  /**
   * Symbol span style.
   *
   * @type { ?RichEditorSymbolSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Symbol span style.
   *
   * @type { ?RichEditorSymbolSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  symbolSpanStyle?: RichEditorSymbolSpanStyle;

  /**
   * The resource string of the symbol span.
   *
   * @type { ?Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The resource string of the symbol span.
   *
   * @type { ?Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  valueResource?: Resource;

  /**
   * The Style of paragraph.
   *
   * @type { ?RichEditorParagraphStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  paragraphStyle?: RichEditorParagraphStyle;

  /**
   * The preview text.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  previewText?: string;

  /**
   * RichEditor url style.
   *
   * @type { ?RichEditorUrlStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'19','1.2':'20'}
   * @arkts 1.1&1.2
   */
  urlStyle?: RichEditorUrlStyle;
}

/**
 * Defines the span image style result.
 *
 * @interface RichEditorImageSpanStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the span image style result.
 *
 * @interface RichEditorImageSpanStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorImageSpanStyleResult {
  /**
   * image size.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * image size.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  size: [number, number];

  /**
   * image vertical align.
   *
   * @type { ImageSpanAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * image vertical align.
   *
   * @type { ImageSpanAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  verticalAlign: ImageSpanAlignment;

  /**
   * image fit.
   *
   * @type { ImageFit }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * image fit.
   *
   * @type { ImageFit }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  objectFit: ImageFit;

  /**
   * RichEditor ImageSpan Layout Style.
   *
   * @type { ?RichEditorLayoutStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  layoutStyle?: RichEditorLayoutStyle;
}

/**
 * Defines the image span.
 *
 * @interface RichEditorImageSpanResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the image span.
 *
 * @interface RichEditorImageSpanResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorImageSpanResult {
  /**
   * The position of the image span.
   *
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The position of the image span.
   *
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * The pixel map of the image span.
   *
   * @type { ?PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The pixel map of the image span.
   *
   * @type { ?PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  valuePixelMap?: PixelMap;

  /**
   * The resource string of the image span.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The resource string of the image span.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  valueResourceStr?: ResourceStr;

  /**
   * image attribute.
   *
   * @type { RichEditorImageSpanStyleResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * image attribute.
   *
   * @type { RichEditorImageSpanStyleResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  imageStyle: RichEditorImageSpanStyleResult;

  /**
   * get offset in span.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * get offset in span.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offsetInSpan: [number, number];
}

/**
 * Defines the image span.
 *
 * @interface RichEditorImageSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the image span.
 *
 * @interface RichEditorImageSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorImageSpan {
  /**
   * The position of the image span.
   *
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The position of the image span.
   *
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * The content of the image span.
   *
   * @type { PixelMap | ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The content of the image span.
   *
   * @type { PixelMap | ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  value: PixelMap | ResourceStr;

  /**
   * image style.
   *
   * @type { ?RichEditorImageSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * image style.
   *
   * @type { ?RichEditorImageSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  imageStyle?: RichEditorImageSpanStyle;
}

/**
 * Defines range of RichEditor.
 *
 * @interface RichEditorRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines range of RichEditor.
 *
 * @interface RichEditorRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorRange {
  /**
   * start offset.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * start offset.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  start?: number;

  /**
   * end offset.
   *
   * @type { ?number }
   * @default text length
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * end offset.
   *
   * @type { ?number }
   * @default text length
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  end?: number;
}

/**
 * Defines the richEditor Gestures.
 *
 * @interface RichEditorGesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the richEditor Gestures.
 *
 * @interface RichEditorGesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorGesture {
  /**
   * Trigger a click event when a click is clicked.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Trigger a click event when a click is clicked.
   *
   * @type { ?Callback<ClickEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onClick?: Callback<ClickEvent>;

  /**
   * Trigger a gesture event when long press event is complete.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Trigger a gesture event when long press event is complete.
   *
   * @type { ?Callback<GestureEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onLongPress?: Callback<GestureEvent>;

  /**
   * Trigger a gesture event when a double click event is complete.
   *
   * @type { ?Callback<GestureEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @systemapi
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onDoubleClick?: Callback<GestureEvent>;
}

/**
 * Defines the span options of RichEditor.
 *
 * @interface RichEditorTextSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the span options of RichEditor.
 *
 * @interface RichEditorTextSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorTextSpanOptions {
  /**
   * the offset that add a text span at.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * the offset that add a text span at.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offset?: number;

  /**
   * text style.
   *
   * @type { ?RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * text style.
   *
   * @type { ?RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  style?: RichEditorTextStyle;

  /**
   * Paragraph style.
   *
   * @type { ?RichEditorParagraphStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Paragraph style.
   *
   * @type { ?RichEditorParagraphStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  paragraphStyle?: RichEditorParagraphStyle;

  /**
   * RichEditor gesture.
   *
   * @type { ?RichEditorGesture }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * RichEditor gesture.
   *
   * @type { ?RichEditorGesture }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  gesture?: RichEditorGesture;

  /**
   * RichEditor url style.
   *
   * @type { ?RichEditorUrlStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'19','1.2':'20'}
   * @arkts 1.1&1.2
   */
  urlStyle?: RichEditorUrlStyle;
}

/**
 * Defines the custom keyboard options of RichEditor.
 *
 * @interface KeyboardOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface KeyboardOptions {
  /**
   * Indicates whether to support custom keyboard avoidance.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  supportAvoidance?: boolean;
}

/**
 * Defines the image span options of RichEditor.
 *
 * @interface RichEditorImageSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the image span options of RichEditor.
 *
 * @interface RichEditorImageSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorImageSpanOptions {
  /**
   * the offset that add image span at.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * the offset that add image span at.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offset?: number;

  /**
   * image style.
   *
   * @type { ?RichEditorImageSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * image style.
   *
   * @type { ?RichEditorImageSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  imageStyle?: RichEditorImageSpanStyle;

  /**
   * RichEditor gesture.
   *
   * @type { ?RichEditorGesture }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * RichEditor gesture.
   *
   * @type { ?RichEditorGesture }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  gesture?: RichEditorGesture;

  /**
   * RichEditor onHover.
   *
   * @type { ?OnHoverCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onHover?: OnHoverCallback;
}

/**
 * Defines the builder span options of RichEditor.
 *
 * @interface RichEditorBuilderSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the builder span options of RichEditor.
 *
 * @interface RichEditorBuilderSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorBuilderSpanOptions {
  /**
   * The offset that add custom builder span at.
   *
   * @type { ?number } Indicates the index where the builder will be inserted
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The offset that add custom builder span at.
   *
   * @type { ?number } Indicates the index where the builder will be inserted
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offset?: number;

  /**
   * builder span drag background color
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dragBackgroundColor? : ColorMetrics;

  /**
   * builder span drag shadow configuration
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  isDragShadowNeeded?: boolean;
}

/**
 * Defines the placeholder style.
 *
 * @interface PlaceholderStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface PlaceholderStyle {
  /**
   * font.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  font?: Font;

  /**
   * fontColor.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontColor?: ResourceColor;
}

/**
 * Defines span style option of RichEditor.
 *
 * @extends RichEditorRange
 * @interface RichEditorSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines span style option of RichEditor.
 *
 * @extends RichEditorRange
 * @interface RichEditorSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorSpanStyleOptions extends RichEditorRange { }

/**
 * Defines paragraph style option of RichEditor.
 *
 * @extends RichEditorRange
 * @interface RichEditorParagraphStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines paragraph style option of RichEditor.
 *
 * @extends RichEditorRange
 * @interface RichEditorParagraphStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorParagraphStyleOptions extends RichEditorRange {
  /**
   * Paragraph style.
   *
   * @type { RichEditorParagraphStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Paragraph style.
   *
   * @type { RichEditorParagraphStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  style: RichEditorParagraphStyle;
}

/**
 * Defines text span style option of RichEditor.
 *
 * @extends RichEditorSpanStyleOptions
 * @interface RichEditorUpdateTextSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines text span style option of RichEditor.
 *
 * @extends RichEditorSpanStyleOptions
 * @interface RichEditorUpdateTextSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorUpdateTextSpanStyleOptions extends RichEditorSpanStyleOptions {
  /**
   * text style.
   *
   * @type { RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * text style.
   *
   * @type { RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textStyle: RichEditorTextStyle;

  /**
   * RichEditor url style.
   *
   * @type { ?RichEditorUrlStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'19','1.2':'20'}
   * @arkts 1.1&1.2
   */
    urlStyle?: RichEditorUrlStyle;
}

/**
 * Defines image span style option of RichEditor.
 *
 * @extends RichEditorSpanStyleOptions
 * @interface RichEditorUpdateImageSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines image span style option of RichEditor.
 *
 * @extends RichEditorSpanStyleOptions
 * @interface RichEditorUpdateImageSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorUpdateImageSpanStyleOptions extends RichEditorSpanStyleOptions {
  /**
   * image style.
   *
   * @type { RichEditorImageSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * image style.
   *
   * @type { RichEditorImageSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  imageStyle: RichEditorImageSpanStyle;
}

/**
 * Defines symbol span style option of RichEditor.
 *
 * @extends RichEditorSpanStyleOptions
 * @interface RichEditorUpdateSymbolSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines symbol span style option of RichEditor.
 *
 * @extends RichEditorSpanStyleOptions
 * @interface RichEditorUpdateSymbolSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorUpdateSymbolSpanStyleOptions extends RichEditorSpanStyleOptions {
  /**
   * Update the symbol span style.
   *
   * @type { RichEditorSymbolSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Update the symbol span style.
   *
   * @type { RichEditorSymbolSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  symbolStyle: RichEditorSymbolSpanStyle;
}

/**
 * Defines the symbol span options of RichEditor.
 *
 * @interface RichEditorSymbolSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the symbol span options of RichEditor.
 *
 * @interface RichEditorSymbolSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorSymbolSpanOptions {
  /**
   * The offset that add custom symbol span at.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The offset that add custom symbol span at.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offset?: number;

  /**
   * The style that add custom symbol span at.
   *
   * @type { ?RichEditorSymbolSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The style that add custom symbol span at.
   *
   * @type { ?RichEditorSymbolSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  style?: RichEditorSymbolSpanStyle;
}

/**
 * Defines the text information for editing.
 *
 * @interface RichEditorSelection
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the text information for editing.
 *
 * @interface RichEditorSelection
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorSelection {
  /**
   * The location info.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The location info.
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selection: [number, number];

  /**
   * The selected text content.
   *
   * @type { Array<RichEditorTextSpanResult | RichEditorImageSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The selected text content.
   *
   * @type { Array<RichEditorTextSpanResult | RichEditorImageSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  spans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}

/**
 * Defines the inserted text value info.
 *
 * @interface RichEditorInsertValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the inserted text value info.
 *
 * @interface RichEditorInsertValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorInsertValue {
  /**
   * The location info where the value will be inserted.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The location info where the value will be inserted.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  insertOffset: number;

  /**
   * The inserted value.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The inserted value.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  insertValue: string;

  /**
   * The preview text.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  previewText?: string;
}

/**
 * Provides an interface for deleting value from text.
 *
 * @interface RichEditorDeleteValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Provides an interface for deleting value from text.
 *
 * @interface RichEditorDeleteValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorDeleteValue {
  /**
   * The offset of deleting.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The offset of deleting.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offset: number;

  /**
   * The deleted direction.
   *
   * @type { RichEditorDeleteDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The deleted direction.
   *
   * @type { RichEditorDeleteDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  direction: RichEditorDeleteDirection;

  /**
   * The deleted text length.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The deleted text length.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  length: number;

  /**
   * The deleted span object.
   *
   * @type { Array<RichEditorTextSpanResult | RichEditorImageSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The deleted span object.
   *
   * @type { Array<RichEditorTextSpanResult | RichEditorImageSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  richEditorDeleteSpans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}

/**
 * Provides an interface for changes in the text.
 *
 * @interface RichEditorChangeValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorChangeValue {
  /**
   * Range of content that will be replaced.
   *
   * @type { TextRange }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  rangeBefore: TextRange;

  /**
   * Text spans to replace.
   *
   * @type { Array<RichEditorTextSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  replacedSpans: Array<RichEditorTextSpanResult>;

  /**
   * Image spans to replace.
   *
   * @type { Array<RichEditorImageSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  replacedImageSpans: Array<RichEditorImageSpanResult>;

  /**
   * Symbol spans to replace.
   *
   * @type { Array<RichEditorTextSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  replacedSymbolSpans: Array<RichEditorTextSpanResult>;

  /**
   * The reason for text changes.
   *
   * @type { ?TextChangeReason }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @atomicservice
   * @since 20
   */
  changeReason?: TextChangeReason;
}

/**
 * Defines the options of RichEditor.
 *
 * @interface RichEditorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the options of RichEditor.
 *
 * @interface RichEditorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorOptions {
  /**
   * RichEditor controller.
   *
   * @type { RichEditorController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * RichEditor controller.
   *
   * @type { RichEditorController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  controller: RichEditorController;
}

/**
 * Defines the options of RichEditor with StyledString.
 *
 * @interface RichEditorStyledStringOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorStyledStringOptions {
  /**
   * RichEditor controller.
   *
   * @type { RichEditorStyledStringController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  controller: RichEditorStyledStringController;
}

/**
 * Defines the selection menu options.
 * 
 * @interface SelectionMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the selection menu options.
 * 
 * @interface SelectionMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface SelectionMenuOptions {
  /**
   * Callback function when the selection menu appears.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback function when the selection menu appears.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Callback function when the selection menu appears.
   * 
   * @type { ?MenuOnAppearCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onAppear?: MenuOnAppearCallback;

  /**
   * Callback function when the selection menu disappears.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback function when the selection menu disappears.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Callback function when the selection menu disappears.
   * 
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onDisappear?: Callback<void>;

  /**
   * Callback function when the selection menu disappears.
   * 
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onDisappear?: VoidCallback;

  /**
   * Menu type, default value is MenuType.SELECTION_MENU.
   * 
   * @type { ?MenuType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  menuType?: MenuType;

  /**
   * Callback function when the selection menu is displayed.
   *
   * @type { ?MenuCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onMenuShow?: MenuCallback;

  /**
   * Callback function when the selection menu is hidden.
   *
   * @type { ?MenuCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onMenuHide?: MenuCallback;

  /**
   * Defines the preview menu options.
   * 
   * @type { ?PreviewMenuOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  previewMenuOptions?: PreviewMenuOptions;
}

/**
 * Defines the preview menu options.
 * 
 * @interface PreviewMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface PreviewMenuOptions {
  /**
   * Defines the haptic feedback mode of preview menu.
   * 
   * @type { ?HapticFeedbackMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  hapticFeedbackMode? : HapticFeedbackMode;
}

/**
 * Provides Base Controller for RichEditor.
 *
 * @implements TextEditControllerEx
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class RichEditorBaseController implements TextEditControllerEx {
  /**
   * Get caret offset from controller.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get caret offset from controller.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getCaretOffset(): number;

  /**
   * Set caret offset.
   *
   * @param { number } offset - caret offset.
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set caret offset.
   *
   * @param { number } offset - caret offset.
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCaretOffset(offset: number): boolean;

  /**
   * close the select menu when menu is on.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * close the select menu when menu is on.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  closeSelectionMenu(): void;

  /**
   * Get the typing text style.
   *
   * @returns { RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the typing text style.
   *
   * @returns { RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getTypingStyle(): RichEditorTextStyle;

  /**
   * Set the typing text style.
   *
   * @param { RichEditorTextStyle } value - set the typing text style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set the typing text style.
   *
   * @param { RichEditorTextStyle } value - set the typing text style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  setTypingStyle(value: RichEditorTextStyle): void;

  /**
   * Set the typing paragraph style.
   *
   * @param { RichEditorParagraphStyle } style - set the typing paragraph style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  setTypingParagraphStyle(style: RichEditorParagraphStyle): void;

  /**
   * Text selection is achieved by specifying the start and end positions of the rich editor.
   *
   * @param { number } selectionStart - The start position of the selected text.
   * @param { number } selectionEnd - The end position of the selected text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Specify the start and end positions to select a range of content.
   *
   * @param { number } selectionStart - The start position of the selected text.
   * @param { number } selectionEnd - The end position of the selected text.
   * @param { SelectionOptions } [options] - Indicates the options of selection.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  setSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;

  /**
   * Judge whether is in editing state
   * 
   * @returns { boolean } - true is editing state, false is non editing status
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  isEditing(): boolean;

  /**
   * Stop editing state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  stopEditing(): void;

  /**
   * Get LayoutManager.
   *
   * @returns { LayoutManager } - Return the LayoutManager.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getLayoutManager(): LayoutManager;

  /**
   * Get PreviewText.
   *
   * @returns { PreviewText } - Return the PreviewText.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getPreviewText(): PreviewText;

  /**
   * Get CaretRect.
   *
   * @returns { RectResult | undefined } - Return the caret rect or undefined value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getCaretRect(): RectResult | undefined;
}

/**
 * Provides Controller for RichEditor.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Provides Controller for RichEditor.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
/**
 * Provides Controller for RichEditor.
 *
 * @extends RichEditorBaseController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class RichEditorController extends RichEditorBaseController {
  /**
   * Add a text span.
   *
   * @param { string } value - text value.
   * @param { RichEditorTextSpanOptions } [options] - span info.
   * @returns { number } span index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Add a text span.
   *
   * @param { string } value - text value.
   * @param { RichEditorTextSpanOptions } [options] - span info.
   * @returns { number } span index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Add a text span.
   *
   * @param { ResourceStr } content - text value.
   * @param { RichEditorTextSpanOptions } [options] - span info.
   * @returns { number } span index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  addTextSpan(content: ResourceStr, options?: RichEditorTextSpanOptions): number;

  /**
   * Add a image span.
   *
   * @param { PixelMap | ResourceStr } value - image value.
   * @param { RichEditorImageSpanOptions } [options] - image span info.
   * @returns { number } span index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Add a image span.
   *
   * @param { PixelMap | ResourceStr } value - image value.
   * @param { RichEditorImageSpanOptions } [options] - image span info.
   * @returns { number } span index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): number;

  /**
   * Add a builder span.
   *
   * @param { CustomBuilder } value - Indicates the custom builder node
   * @param { RichEditorBuilderSpanOptions } [options] - span option.
   * @returns { number } span index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Add a builder span.
   *
   * @param { CustomBuilder } value - Indicates the custom builder node
   * @param { RichEditorBuilderSpanOptions } [options] - span option.
   * @returns { number } span index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  addBuilderSpan(value: CustomBuilder, options?: RichEditorBuilderSpanOptions): number;

  /**
   * Add a symbol span.
   *
   * @param { Resource } value - symbol span value
   * @param { RichEditorSymbolSpanOptions } [options] - symbol span option.
   * @returns { number } symbol span index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Add a symbol span.
   *
   * @param { Resource } value - symbol span value
   * @param { RichEditorSymbolSpanOptions } [options] - symbol span option.
   * @returns { number } symbol span index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  addSymbolSpan(value: Resource, options?: RichEditorSymbolSpanOptions ): number;
  
  /**
   * Modify span style.
   *
   * @param { RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Modify span style.
   *
   * @param { RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions | RichEditorUpdateSymbolSpanStyleOptions } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  updateSpanStyle(value: RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions | RichEditorUpdateSymbolSpanStyleOptions): void;

  /**
   * Modify span style.
   *
   * @param { RichEditorParagraphStyleOptions } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Modify span style.
   *
   * @param { RichEditorParagraphStyleOptions } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  updateParagraphStyle(value: RichEditorParagraphStyleOptions): void;

  /**
   * Delete span.
   *
   * @param { RichEditorRange } [value] - range for deleting.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Delete span.
   *
   * @param { RichEditorRange } [value] - range for deleting.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  deleteSpans(value?: RichEditorRange): void;

  /**
   * Get span content.
   *
   * @param { RichEditorRange } [value] - range for getting span info.
   * @returns { Array<RichEditorImageSpanResult | RichEditorTextSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get span content.
   *
   * @param { RichEditorRange } [value] - range for getting span info.
   * @returns { Array<RichEditorImageSpanResult | RichEditorTextSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult>;

  /**
   * Get span content.
   *
   * @param { RichEditorRange } [value] - range for getting span info.
   * @returns { Array<RichEditorParagraphResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get span content.
   *
   * @param { RichEditorRange } [value] - range for getting span info.
   * @returns { Array<RichEditorParagraphResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getParagraphs(value?: RichEditorRange): Array<RichEditorParagraphResult>;

  /**
   * Called when the content is selected.
   *
   * @returns { RichEditorSelection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when the content is selected.
   *
   * @returns { RichEditorSelection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getSelection(): RichEditorSelection;

  /**
   * Convert StyledString to spans in rich editor.
   * return a empty Array<RichEditorSpan> if convert failed
   * 
   * @param { StyledString } value - StyledString.
   * @returns { Array<RichEditorSpan> }
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fromStyledString(value: StyledString): Array<RichEditorSpan>;

  /**
   * Convert spans to StyledString in rich editor.
   * return a empty StyledString if convert failed
   * 
   * @param { RichEditorRange } value - range of spans in rich editor
   * @returns { StyledString }
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
    toStyledString(value: RichEditorRange): StyledString;
}

/**
 * Defines the types of spans in rich editor.
 *
 * @typedef { RichEditorImageSpanResult | RichEditorTextSpanResult } RichEditorSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type RichEditorSpan = RichEditorImageSpanResult | RichEditorTextSpanResult;

/**
 * Provides Controller for RichEditor with StyledString.
 *
 * @extends RichEditorBaseController
 * @implements StyledStringController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class RichEditorStyledStringController extends RichEditorBaseController implements StyledStringController {
  /**
   * Set the StyledString of the RichEditor.
   *
   * @param { StyledString } styledString - StyledString.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  setStyledString(styledString: StyledString): void;

  /**
   * Get the StyledString of the RichEditor.
   *
   * @returns { MutableStyledString }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Get the StyledString of the RichEditor.
   *
   * @returns { MutableStyledString }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  getStyledString(): MutableStyledString;

  /**
   * Get the selection in the StyledString of the RichEditor.
   *
   * @returns { RichEditorRange }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getSelection(): RichEditorRange;

  /**
   * Register content changed listener
   * 
   * @param { StyledStringChangedListener } listener - content changed listener.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onContentChanged(listener: StyledStringChangedListener): void;
}

/**
 * Provides attribute for RichEditor.
 *
 * @extends CommonMethod<RichEditorAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Provides attribute for RichEditor.
 *
 * @extends CommonMethod<RichEditorAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 * @noninterop
 */
declare class RichEditorAttribute extends CommonMethod<RichEditorAttribute> {
  /**
   * Called when on ready.
   *
   * @param { function } callback - The triggered function when rich editor is ready.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Called when on ready.
   *
   * @param { function } callback - The triggered function when rich editor is ready.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when on ready.
   *
   * @param { Callback<void> } callback - The triggered function when rich editor is ready.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onReady(callback: Callback<void>): RichEditorAttribute;

  /**
   * Called when on ready.
   *
   * @param { VoidCallback } callback - The triggered function when rich editor is ready.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onReady(callback: VoidCallback): RichEditorAttribute;

  /**
   * Called when the content is selected.
   *
   * @param { function } callback - The triggered function when select text.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Called when the content is selected.
   *
   * @param { function } callback - The triggered function when select text.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the content is selected.
   *
   * @param { Callback<RichEditorSelection> } callback - The triggered function when select text.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onSelect(callback: Callback<RichEditorSelection>): RichEditorAttribute;

  /**
   * Called when selection range or caret position is changed.
   *
   * @param { Callback<RichEditorRange> } callback - The triggered function when change selection range or caret position.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onSelectionChange(callback: Callback<RichEditorRange>): RichEditorAttribute;

  /**
   * Get text value information when about to input.
   *
   * @param { function } callback - The triggered function when text content is about to insert.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get text value information when about to input.
   *
   * @param { function } callback - The triggered function when text content is about to insert.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Get text value information when about to input.
   *
   * @param { Callback<RichEditorInsertValue, boolean> } callback - The triggered function when text content is about to insert.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  aboutToIMEInput(callback: Callback<RichEditorInsertValue, boolean>): RichEditorAttribute;

  /**
   * Get text value information when completed input.
   *
   * @param { function } callback - The triggered function when text content has been inserted.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get text value information when completed input.
   *
   * @param { function } callback - The triggered function when text content has been inserted.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Get text value information when completed input.
   *
   * @param { Callback<RichEditorTextSpanResult> } callback - The triggered function when text content has been inserted.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onIMEInputComplete(callback: Callback<RichEditorTextSpanResult>): RichEditorAttribute;

  /**
   * Called when ime input complete.
   *
   * @param { Callback<TextRange> } callback - The triggered function when text content has been inserted.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onDidIMEInput(callback: Callback<TextRange>): RichEditorAttribute;

  /**
   * Get text value information when about to delete.
   *
   * @param { function } callback - The triggered function when text content is about to delete.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get text value information when about to delete.
   *
   * @param { function } callback - The triggered function when text content is about to delete.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Get text value information when about to delete.
   *
   * @param { Callback<RichEditorDeleteValue, boolean> } callback - The triggered function when text content is about to delete.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  aboutToDelete(callback: Callback<RichEditorDeleteValue, boolean>): RichEditorAttribute;

  /**
   * Notify that the deletion has been completed
   *
   * @param { function } callback - The triggered function when text content has been deleted.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Notify that the deletion has been completed
   *
   * @param { function } callback - The triggered function when text content has been deleted.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Notify that the deletion has been completed
   *
   * @param { Callback<void> } callback - The triggered function when text content has been deleted.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onDeleteComplete(callback: Callback<void>): RichEditorAttribute;

    /**
   * Notify that the deletion has been completed
   *
   * @param { VoidCallback } callback - The triggered function when text content has been deleted.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onDeleteComplete(callback: VoidCallback): RichEditorAttribute;

  /**
   * Allow replication.
   *
   * @param { CopyOptions } value - Indicates the type of copy option.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Allow replication.
   *
   * @param { CopyOptions } value - Indicates the type of copy option.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  copyOptions(value: CopyOptions): RichEditorAttribute;

  /**
   * Bind to the selection menu.
   *
   * @param { RichEditorSpanType } spanType - Indicates the type of selection menu.
   * @param { CustomBuilder } content - Indicates the content of selection menu.
   * @param { ResponseType } responseType - Indicates response type of selection menu.
   * @param { SelectionMenuOptions } [options] - Indicates the options of selection menu.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Bind to the selection menu.
   *
   * @param { RichEditorSpanType } spanType - Indicates the type of selection menu.
   * @param { CustomBuilder } content - Indicates the content of selection menu.
   * @param { ResponseType | RichEditorResponseType } responseType - Indicates response type of selection menu.
   * @param { SelectionMenuOptions } [options] - Indicates the options of selection menu.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bindSelectionMenu(spanType: RichEditorSpanType, content: CustomBuilder, responseType: ResponseType | RichEditorResponseType,
    options?: SelectionMenuOptions): RichEditorAttribute;

  /**
   * Define custom keyboard.
   *
   * @param { CustomBuilder } value
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define custom keyboard.
   *
   * @param { CustomBuilder } value
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Define custom keyboard.
   *
   * @param { CustomBuilder } value - Set up a custom keyboard of RichEditor
   * @param { KeyboardOptions } [options] - Indicates the custom keyboard options of RichEditor
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  customKeyboard(value: CustomBuilder, options?: KeyboardOptions): RichEditorAttribute;

  /**
    * Defines onPaste callback.
    *
    * @param { function } callback Executed when a paste operation is performed.
    * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 11
    */
   /**
    * Defines onPaste callback.
    *
    * @param { PasteEventCallback } callback Executed when a paste operation is performed.
    * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
    */
  onPaste(callback: PasteEventCallback): RichEditorAttribute;

  /**
   * Enable data detector.
   *
   * @param { boolean } enable - Enable data detector.
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Enable data detector.
   *
   * @param { boolean } enable - Enable data detector.
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enableDataDetector(enable: boolean): RichEditorAttribute;

  /**
   * Enable preview text.
   *
   * @param { boolean } enable - Enable preview text.
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enablePreviewText(enable: boolean): RichEditorAttribute;

  /**
   * Data detector with config.
   *
   * @param { TextDataDetectorConfig } config - The config of text data detector.
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Data detector with config.
   *
   * @param { TextDataDetectorConfig } config - The config of text data detector.
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dataDetectorConfig(config: TextDataDetectorConfig): RichEditorAttribute;

  /**
   * Set richEditor placeholder.
   *
   * @param { ResourceStr } value - The value of placeholder.
   * @param { PlaceholderStyle } [style] - The style of placeholder.
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  placeholder(value: ResourceStr, style?: PlaceholderStyle): RichEditorAttribute;
  
   /**
   * Set caret color of rich editor.
   *
   * @param { ResourceColor } value - Custom color types.
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  caretColor(value: ResourceColor): RichEditorAttribute;

  /**
   * Set background color of selected text in rich editor.
   *
   * @param { ResourceColor } value - Custom color types.
   * @returns { RichEditorAttribute } The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedBackgroundColor(value: ResourceColor): RichEditorAttribute;

  /**
   * Called when edit status is changed
   *
   * @param { Callback<boolean> } callback - when edit status is changed
   * @returns { RichEditorAttribute } returns The attribute of the rich editor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onEditingChange(callback: Callback<boolean>): RichEditorAttribute;

  /**
   * Set enter key type of soft keyboard.
   *
   * @param { EnterKeyType } value - the enter key type of soft keyboard
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enterKeyType(value: EnterKeyType): RichEditorAttribute;

  /**
   * Called when submitted.
   *
   * @param { SubmitCallback } callback - callback of the listened event.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onSubmit(callback: SubmitCallback): RichEditorAttribute;

  /**
   * Called before text changed.
   *
   * @param { Callback<RichEditorChangeValue, boolean> } callback - The triggered function before text content is about to change.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWillChange(callback: Callback<RichEditorChangeValue, boolean>) : RichEditorAttribute;

  /**
   * Called after text changed.
   *
   * @param { OnDidChangeCallback } callback - The triggered function after content changed.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onDidChange(callback: OnDidChangeCallback) : RichEditorAttribute;

  /**
    * Called before the cut event.
    *
    * @param { Callback<CutEvent> } callback - Called before the cut event.
    * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
    */
  onCut(callback: Callback<CutEvent>): RichEditorAttribute;

  /**
    * Called before the copy event.
    *
    * @param { Callback<CopyEvent> } callback - Called before the copy event.
    * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
    */
  onCopy(callback: Callback<CopyEvent>): RichEditorAttribute;

  /**
   * Set the custom text menu.
   *
   * @param { EditMenuOptions } editMenu - Customize text menu options.
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  editMenuOptions(editMenu: EditMenuOptions): RichEditorAttribute;

  /**
   * Sets whether request keyboard or not when on focus.
   *
   * @param { boolean } isEnabled - Whether enable request keyboard when on focus.
   * @returns { RichEditorAttribute } Returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enableKeyboardOnFocus(isEnabled: boolean): RichEditorAttribute;

  /**
   * Enable or disable haptic feedback.
   *
   * @param { boolean } isEnabled - Default value is true, set false to disable haptic feedback.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enableHapticFeedback(isEnabled: boolean): RichEditorAttribute;

  /**
   * Define bar state of the RichEditor.
   *
   * @param { BarState } state - bar state.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  barState(state: BarState): RichEditorAttribute;

  /**
   * Define the max length content of the richEditor.
   *
   * @param { Optional<number> } maxLength - The maximun length content of the richEditor.
   * @returns { RichEditorAttribute }  returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  maxLength(maxLength: Optional<number>): RichEditorAttribute;

  /**
   * Define max lines of the richEditor.
   *
   * @param { Optional<number> } maxLines - The maximun Lines of the richEditor.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  maxLines(maxLines: Optional<number>): RichEditorAttribute;

  /**
   * Whether to enable automatic spacing between Chinese and Latin characters.
   *
   * @param { Optional<boolean> } enable - The default value is false, indicates the flag whether to enable automatic spacing.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  enableAutoSpacing(enable: Optional<boolean>): RichEditorAttribute;

  /**
   * Set the keyboard appearance.
   *
   * @param { Optional<KeyboardAppearance> } appearance - Default value is KeyboardAppearance.NONE_IMMERSIVE
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): RichEditorAttribute;

  /**
   * Set whether stop backPressed callback event or not.
   *
   * @param { Optional<boolean> } isStopped - Default value is true, set false to trigger the latest callback event.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  stopBackPress(isStopped: Optional<boolean>): RichEditorAttribute;

  /**
   * Set undo style.
   *
   * @param { Optional<UndoStyle> } style - Default value is UndoStyle.CLEAR_STYLE.
   * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  undoStyle(style: Optional<UndoStyle>): RichEditorAttribute;
}

/**
 * the callback of cut event.
 * @interface CutEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface CutEvent {
  /**
   * Prevent system cut event.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  preventDefault?: Callback<void>;

  /**
   * Prevent system cut event.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  preventDefault?: VoidCallback;
}

/**
 * the callback of copy event.
 * @interface CopyEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface CopyEvent {
  /**
   * Prevent system cut event.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  preventDefault?: Callback<void>;

  /**
   * Prevent system cut event.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  preventDefault?: VoidCallback;
}

/**
 * RichEditor url style.
 * @interface RichEditorUrlStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'19','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RichEditorUrlStyle {
  /**
   * uniform resoure locator.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'19','1.2':'20'}
   * @arkts 1.1&1.2
   */
  url?: ResourceStr;
}

/**
 * callback of the listened enter key event.
 *
 * @typedef { function } SubmitCallback
 * @param { EnterKeyType } enterKey - the enter key type of soft keyboard.
 * @param { SubmitEvent } event - Provides the method of keeping RichEditor editable state when submitted.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type SubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void;

/**
 * Callback function when the selection menu appears.
 *
 * @typedef { function } MenuOnAppearCallback
 * @param { number } start - Start offset of the selected content in rich editor.
 * @param { number } end - End offset of the selected content in rich editor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type MenuOnAppearCallback = (start: number, end: number) => void;

/**
 * Callback function when the selection menu show or hide.
 *
 * @typedef { function } MenuCallback
 * @param { number } start - Start offset of the selected content in rich editor.
 * @param { number } end - End offset of the selected content in rich editor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type MenuCallback = (start: number, end: number) => void;

/**
 * Callback function when a paste operation is performed.
 *
 * @typedef { function } PasteEventCallback
 * @param { PasteEvent } [event] - The paste event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type PasteEventCallback = (event?: PasteEvent) => void;

/**
 * callback of the on hover event.
 *
 * @typedef { function } OnHoverCallback
 * @param { boolean } status - The hover status
 * @param { HoverEvent } event - The event info for hover.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'14','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type OnHoverCallback = (status: boolean, event: HoverEvent) => void;

/**
 * Provides an interface for writing texts.
 *
 * @interface RichEditorInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Provides an interface for writing texts.
 *
 * @interface RichEditorInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 * @noninterop
 */
interface RichEditorInterface {
  /**
   * Called when create RichEditor.
   *
   * @param { RichEditorOptions } value
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Called when create RichEditor.
   *
   * @param { RichEditorOptions } value
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (value: RichEditorOptions): RichEditorAttribute;

  /**
   * Called when create RichEditor with StyledString.
   *
   * @param { RichEditorStyledStringOptions} options
   * @returns { RichEditorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (options: RichEditorStyledStringOptions): RichEditorAttribute;
}

/**
 * Defines RichEditor Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines RichEditor Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @noninterop
 */
declare const RichEditorInstance: RichEditorAttribute;

/**
 * Defines RichEditor Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines RichEditor Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @noninterop
 */
declare const RichEditor: RichEditorInterface;
