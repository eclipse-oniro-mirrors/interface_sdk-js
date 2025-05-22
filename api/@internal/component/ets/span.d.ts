/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
import { ResourceColor, Dimension, BorderRadiuses, Length, Font } from './units';
import { CommonMethod, ShadowOptions } from './common';
import { LengthMetrics } from './../Graphics';
import { Resource } from './../../../api/global/resource';
import { FontStyle, FontWeight, TextCase } from './enums';
import { DecorationStyleInterface } from './styledString';
/*** endif */

/**
 * Define the background style of span.
 *
 * @interface TextBackgroundStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Define the background style of span.
 *
 * @interface TextBackgroundStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface TextBackgroundStyle {
  /**
   * Background color of span.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Background color of span.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  color?: ResourceColor;
  
  /**
   * Background radius of span.
   *
   * @type { ?(Dimension | BorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Background radius of span.
   *
   * @type { ?(Dimension | BorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  radius?: Dimension | BorderRadiuses;
}

/**
 * Define the BaseSpan class, contains the common methods of span.
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Define the BaseSpan class, contains the common methods of span.
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class BaseSpan<T> extends CommonMethod<T> {
  /**
   * Span background style.
   *
   * @param { TextBackgroundStyle } style - The background style of span.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Span background style.
   *
   * @param { TextBackgroundStyle } style - The background style of span.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textBackgroundStyle(style: TextBackgroundStyle): T;

  /**
   * Base line offset of the Span.
   *
   * @param { LengthMetrics } value - The base line offset of the Span.
   * @returns { T } The attribute of the Span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
    baselineOffset(value: LengthMetrics): T;
}

/**
 * Provide text decoration.
 *
 * @interface SpanInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provide text decoration.
 *
 * @interface SpanInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provide text decoration.
 *
 * @interface SpanInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provide text decoration.
 *
 * @interface SpanInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface SpanInterface {
  /**
   * Called when text is entered in span.
   *
   * @param { string | Resource } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when text is entered in span.
   *
   * @param { string | Resource } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when text is entered in span.
   *
   * @param { string | Resource } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when text is entered in span.
   *
   * @param { string | Resource } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (value: string | Resource): SpanAttribute;
}

/**
 * @extends CommonMethod<SpanAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * @extends CommonMethod<SpanAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @extends CommonMethod<SpanAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @extends BaseSpan<SpanAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class SpanAttribute extends BaseSpan<SpanAttribute> {
  /**
   * Called when the font is set.
   *
   * @param { Font } value - the span font size and weight and family and style.
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Called when the font is set.
   *
   * @param { Font } value - the span font size and weight and family and style.
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  font(value: Font): SpanAttribute;

  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontColor(value: ResourceColor): SpanAttribute;

  /**
   * Called when the font size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the font size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the font size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontSize(value: number | string | Resource): SpanAttribute;

  /**
   * Called when the font style of a font is set.
   *
   * @param { FontStyle } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font style of a font is set.
   *
   * @param { FontStyle } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the font style of a font is set.
   *
   * @param { FontStyle } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the font style of a font is set.
   *
   * @param { FontStyle } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontStyle(value: FontStyle): SpanAttribute;

  /**
   * Called when the font weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the font weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the font weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontWeight(value: number | FontWeight | string): SpanAttribute;

  /**
   * Called when the font list of text is set.
   *
   * @param { string | Resource } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font list of text is set.
   *
   * @param { string | Resource } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the font list of text is set.
   *
   * @param { string | Resource } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the font list of text is set.
   *
   * @param { string | Resource } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontFamily(value: string | Resource): SpanAttribute;

  /**
   * Called when the text decoration of the text is set.
   *
   * @param { object } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the text decoration of the text is set.
   *
   * @param { object } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the text decoration of the text is set.
   *
   * @param { object } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the text decoration of the text is set.
   *
   * @param { object } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the text decoration of the text is set.
   *
   * @param { DecorationStyleInterface } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  decoration(value: DecorationStyleInterface): SpanAttribute;

  /**
   * Called when the distance between text fonts is set.
   *
   * @param { number | string } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the distance between text fonts is set.
   *
   * @param { number | string } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the distance between text fonts is set.
   *
   * @param { number | string } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the distance between text fonts is set.
   *
   * @param { number | string } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  letterSpacing(value: number | string): SpanAttribute;

  /**
   * Called when the type of letter in the text font is set.
   *
   * @param { TextCase } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the type of letter in the text font is set.
   *
   * @param { TextCase } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the type of letter in the text font is set.
   *
   * @param { TextCase } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the type of letter in the text font is set.
   *
   * @param { TextCase } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textCase(value: TextCase): SpanAttribute;

  /**
   * Called when the line height of the span is set.
   *
   * @param { Length } value - The line height of the span.
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Called when the line height of the span is set.
   *
   * @param { Length } value - The line height of the span.
   * @returns { SpanAttribute } The attribute of the span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lineHeight(value: Length): SpanAttribute;

  /**
   * Called when the text shadow is set.
   *
   * @param { ShadowOptions | Array<ShadowOptions> } value - The shadow options.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when the text shadow is set.
   *
   * @param { ShadowOptions | Array<ShadowOptions> } value - The shadow options.
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textShadow(value: ShadowOptions | Array<ShadowOptions>): SpanAttribute;
}

/**
 * Defines Span Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Span Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Span Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Span Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Span: SpanInterface;

/**
 * Defines Span Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Span Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Span Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Span Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const SpanInstance: SpanAttribute;
