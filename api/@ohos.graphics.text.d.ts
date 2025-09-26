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
 * @kit ArkGraphics2D
 */
import type drawing from './@ohos.graphics.drawing';
import type common2D from './@ohos.graphics.common2D';
/*** if arkts static */
import { Resource } from './global/resource';
/*** endif */

/**
 * The Text module provides a set of APIs for text layout and font management. 
 * It aims to deliver high-quality typesetting through features like character-to-glyph
 * conversion, kerning, line breaking, alignment, and text measurement. Additionally,
 * it provides font management capabilities, including font registration, font descriptors,
 * and font collection management.
 * 
 * This module provides the following classes for creating complex text paragraphs:
 * 
 * TextStyle: defines the font type, size, spacing, and other text properties.
 * FontCollection: manages a collection of different fonts.
 * FontDescriptor: provides information about font descriptors.
 * ParagraphStyle: controls line break and word break strategies for the entire paragraph.
 * ParagraphBuilder: used to create different paragraph objects.
 * Paragraph: created by calling build() of the ParagraphBuilder class.
 * LineTypeset: created by calling buildLineTypeset() of the ParagraphBuilder class.
 * TextLine: paragraph text on a line-by-line basis, obtained by calling getTextLines() of the Paragraph class.
 * Run: text typesetting unit, obtained by calling getGlyphRuns() of the TextLine class.
 *
 * @namespace text
 * @syscap SystemCapability.Graphics.Drawing
 * @since 12 dynamic
 * @since 20 static
 */
/**
 * The Text module provides a set of APIs for text layout and font management.
 * It aims to deliver high-quality typesetting through features like character-to-glyph
 * conversion, kerning, line breaking, alignment, and text measurement. Additionally,
 * it provides font management capabilities, including font registration, font descriptors,
 * and font collection management.
 *
 * This module provides the following classes for creating complex text paragraphs:
 *
 * TextStyle: defines the font type, size, spacing, and other text properties.
 * FontCollection: manages a collection of different fonts.
 * FontDescriptor: provides information about font descriptors.
 * ParagraphStyle: controls line break and word break strategies for the entire paragraph.
 * ParagraphBuilder: used to create different paragraph objects.
 * Paragraph: created by calling build() of the ParagraphBuilder class.
 * LineTypeset: created by calling buildLineTypeset() of the ParagraphBuilder class.
 * TextLine: paragraph text on a line-by-line basis, obtained by calling getTextLines() of the Paragraph class.
 * Run: text typesetting unit, obtained by calling getGlyphRuns() of the TextLine class.
 *
 * @namespace text
 * @syscap SystemCapability.Graphics.Drawing
 * @form
 * @since 22
 * @arkts 1.1&1.2
 */
declare namespace text {

  /**
   * Refers to how to align the horizontal position of text when displaying text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum TextAlign {
    /**
     * Use the left side of the text as a reference line for alignment.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    LEFT = 0,

    /**
     * Use the right side of the text as a reference line for alignment.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    RIGHT = 1,

    /**
     * Use the midpoint line the text as a reference line for alignment.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    CENTER = 2,

    /**
     * Justified, which means that each line (except the last line) is stretched so that every line has equal width,
     * and the left and right margins are straight.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    JUSTIFY = 3,

    /**
     * Align text from start, based on the TextDirection, such as left-to-right or right-to-left.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    START = 4,

    /**
     * Align text from end, based on the TextDirection, such as left-to-right or right-to-left, opposite to START.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    END = 5,
  }

  /**
   * Enumerates the vertical alignment modes.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 20 dynamic
   */
  enum TextVerticalAlign {
    /**
     * Baseline alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    BASELINE = 0,
    /**
     * Bottom alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    BOTTOM = 1,
    /**
     * Center alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    CENTER = 2,
    /**
     * Top alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    TOP = 3
  }

  /**
   * Enumerate text runs direction.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum TextDirection {
    /**
     * The text is oriented from right to left.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    RTL,

    /**
     * The text is oriented from left to right.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    LTR,
  }

  /**
   * Enumerate text segmentation strategy.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum BreakStrategy {
    /**
     * Fills the current line as much as possible without adding hyphens.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    GREEDY,

    /**
     * Optimizes layout and may add hyphens when necessary.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    HIGH_QUALITY,

    /**
     * Ensures consistent line width in a paragraph, adding hyphens if needed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    BALANCED,
  }

  /**
   * Enumerate word break strategy.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum WordBreak {
    /**
     * Default mode that break words based on language-specific conventions.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    NORMAL,

    /**
     * Allows breaks within any character in non-CJK text. (CJK means Chinese, Japanese, and Korean.)
     * This value is suitable for Asian text that contains some non-Asian text. For example, 
     * it can be used to break consecutive English characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    BREAK_ALL,

    /**
     * Allows breaks between any two characters in non-CJK text. It prioritizes breaking at whitespace
     * or other natural breakpoints to keep words intact. If no breakpoints are found, it breaks between
     * any two characters. For CJK text, this behaves like NORMAL.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    BREAK_WORD,

    /**
     * Attempts to break words at the end of a line using a hyphen. If a hyphen cannot be added,
     * it behaves like BREAK_WORD.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    BREAK_HYPHEN,
  }

  /**
   * Describes a text decoration.
   * @typedef Decoration
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface Decoration {
    /**
     * Type of the decoration. The default value is NONE.
     * @type { ?TextDecorationType }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    textDecoration?: TextDecorationType;

    /**
     * Color of the decoration. The default value is transparent.
     * @type { ?common2D.Color }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    color?: common2D.Color;

    /**
     * Style of the decoration. The default value is SOLID.
     * @type { ?TextDecorationStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    decorationStyle?: TextDecorationStyle;

    /**
     * Scale factor for the thickness of the decoration line. The value is a floating point number.
     * The default value is 1.0.
     * @type { ?double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    decorationThicknessScale?: double;
  }

  /**
   * Enumerates the text decoration types.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum TextDecorationType {
    /**
     * There are no text decoration.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    NONE,

    /**
     * There is a decoration line below the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    UNDERLINE,

    /**
     * There is a decoration line above the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    OVERLINE,

    /**
     * There is a decoration line through the middle of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    LINE_THROUGH,
  }

  /**
   * Enumerates the text decoration styles.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum TextDecorationStyle {
    /**
     * Decoration line is solid line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    SOLID,

    /**
     * Decoration line is double line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    DOUBLE,

    /**
     * Decoration line is dotted line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    DOTTED,

    /**
     * Decoration line is dashed line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    DASHED,

    /**
     * Decoration line is wavy line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    WAVY,
  }

  /**
   * Enumeration of font weight of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum FontWeight {
    /**
     * Thin
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    W100,

    /**
     * Extra-light
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    W200,

    /**
     * Light
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    W300,

    /**
     * Normal/Regular
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    W400,

    /**
     * Medium
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    W500,

    /**
     * Semi-bold
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    W600,

    /**
     * Bold
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    W700,

    /**
     * Extra-bold
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    W800,

    /**
     * Black
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    W900,
  }

  /**
   * Enumeration of font style of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum FontStyle {
    /**
     * Upright font type.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    NORMAL,

    /**
     * Slant font. If no italic version is available for the current font, the oblique version will be used instead.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    ITALIC,

    /**
     * Oblique font. If no oblique version is available for the current font, the italic version will be used instead.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    OBLIQUE,
  }

  /**
   * Enumeration of font width of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum FontWidth {
    /**
     * Ultra condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    ULTRA_CONDENSED = 1,

    /**
     * Extra condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    EXTRA_CONDENSED = 2,

    /**
     * Condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    CONDENSED = 3,

    /**
     * Semi condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    SEMI_CONDENSED = 4,

    /**
     * Normal font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    NORMAL = 5,

    /**
     * Semi expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    SEMI_EXPANDED = 6,

    /**
     * Expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    EXPANDED = 7,

    /**
     * Extra expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    EXTRA_EXPANDED = 8,

    /**
     * Ultra expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    ULTRA_EXPANDED = 9,
  }

  /**
   * Enumerates the text height modifier patterns.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum TextHeightBehavior {
    /**
     * Allows the first line of the paragraph to rise and the last line to drop.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    ALL = 0x0,

    /**
     * Prevents the first line of a paragraph from rising.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    DISABLE_FIRST_ASCENT = 0x1,

    /**
     * Prevents the last line of a paragraph from dropping.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    DISABLE_LAST_ASCENT = 0x2,

    /**
     * Combines the effects of disabling the first line from rising and the last line from dropping.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    DISABLE_ALL = 0x1 | 0x2,
  }

  /**
   * Enumeration the type of text baseline.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum TextBaseline {
    /**
     * The alphabetic baseline, typically used for Latin-based scripts where the baseline aligns
     * with the base of lowercase letters.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    ALPHABETIC,

    /**
     * The ideographic baseline, commonly used for ideographic scripts such as Chinese, Japanese, and Korean,
     * where the baseline aligns with the center of characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    IDEOGRAPHIC,
  }

  /**
   * Enumerates of ellipsis mode.
   * EllipsisMode.START and EllipsisMode.MIDDLE take effect only when text overflows in a single line.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum EllipsisMode {
    /**
     * Places the ellipsis in the text header. It is valid only when maxLines is set to 1 in ParagraphStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    START,

    /**
     * Places the ellipsis in the middle of the text. It is valid only when maxLines is set to 1 in ParagraphStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    MIDDLE,

    /**
     * Places the ellipsis at the end of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    END,
  }

  /**
   * Describes shadow of text.
   * @typedef TextShadow
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface TextShadow {
    /**
     * Color of the text shadow. The default value is black (255, 0, 0, 0).
     * @type { ?common2D.Color } The color of text shadow
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    color?: common2D.Color;
    /**
     * Position of the text shadow relative to the text.
     * The horizontal and vertical coordinates must be greater than or equal to 0.
     * @type { ?common2D.Point } The point of shadow
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    point?: common2D.Point;
    /**
     * The value sets special effect radius of blurring text.
     * The value is a floating point number. The default value is 0.0px.
     * @type { ?double } The value about radius of blur, it type is "double"
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    blurRadius?: double;
  }

  /**
   * Describes the style of a rectangle.
   * @typedef RectStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface RectStyle {
    /**
     * Color of the rectangle.
     * @type { common2D.Color } The color of rect style
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    color: common2D.Color;

    /**
     * Left top radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    leftTopRadius: double;

    /**
     * Right top radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    rightTopRadius: double;

    /**
     * Right bottom radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    rightBottomRadius: double;

    /**
     * Left bottom radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    leftBottomRadius: double;
  }

  /**
   * Enumerates line height scaling type.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 21
   * @arkts 1.1&1.2
   */
  enum LineHeightStyle {
    /**
     * Use the font size as the scale factor for line height scaling.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21
     * @arkts 1.1&1.2
     */
    FONT_SIZE = 0,

    /**
     * Use the text height after shaping as the scale factor for line height scaling.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21
     * @arkts 1.1&1.2
     */
    FONT_HEIGHT = 1
  }

  /**
   * Describes font feature of text.
   * @typedef FontFeature
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface FontFeature {
    /**
     * String identified by the keyword in the font feature key-value pair.
     * @type { string } feature name
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    name: string;
    /**
     * 	Value in the font feature key-value pair.
     * @type { int } feature value
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    value: int;
  }

  /**
   * Describes font variation of text.
   * @typedef FontVariation
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface FontVariation {
    /**
     * String identified by the keyword in the font variation key-value pair.
     * @type { string } variation axis
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    axis: string;
    /**
     * Value in the font variation key-value pair.
     * @type { double } variation value
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    value: double;
  }

  /**
   * Describes badge type of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 20 dynamic
   */
  enum TextBadgeType {
    /**
     * No badge.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    TEXT_BADGE_NONE,
    /**
     * Superscript.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    TEXT_SUPERSCRIPT,
    /**
     * Subscript.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    TEXT_SUBSCRIPT,
  }

  /**
   * Describes text style.
   * @typedef TextStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface TextStyle {

    /**
     * Text decoration. By default, no decoration is used.
     * @type { ?Decoration } decoration for text
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    decoration?: Decoration;

    /**
     * Text color. The default color is white.
     * @type { ?common2D.Color } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    color?: common2D.Color;

    /**
     * Font weight. The default value is W400. Currently, only the default system font supports font weight adjustment.
     * For other fonts, if the weight is less than semi-bold (W600), there is no variation in stroke thickness.
     * If the weight is greater than or equal to semi-bold, it might result in a fake bold effect.
     * @type { ?FontWeight } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    fontWeight?: FontWeight;

    /**
     * Font style. The default value is NORMAL.
     * @type { ?FontStyle } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    fontStyle?: FontStyle;

    /**
     * Text baseline type. The default value is ALPHABETIC.
     * @type { ?TextBaseline } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    baseline?: TextBaseline;

    /**
     * Array of font families. By default, the array is empty, indicating that all system fonts are matched.
     * @type { ?Array<string> } fontfamily gather
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    fontFamilies?: Array<string>;

    /**
     * Font size, in units of px. The value is a floating point number. The default value is 14.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    fontSize?: double;

    /**
     * Letter spacing, in units of px. The value is a floating point number.
     * The default value is 0.0. A positive value causes characters to spread farther apart,
     * and a negative value bring characters closer together.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    letterSpacing?: double;

    /**
     * Word spacing, in units of px. The value is a floating point number. The default value is 0.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    wordSpacing?: double;

    /**
     * Maximum line height. The value is a double number.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21
     * @arkts 1.1&1.2
     */
    lineHeightMaximum?: double;

    /**
     * Minimum line height. The value is a double number.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21
     * @arkts 1.1&1.2
     */
    lineHeightMinimum?: double;

    /**
     * Line height scaling base style. The default value is FONT_SIZE.
     * @type { ?LineHeightStyle } Line height scaling style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21
     * @arkts 1.1&1.2
     */
    lineHeightStyle?: LineHeightStyle;

    /**
     * Scale factor of the line height. The value is a floating point number.
     * The default value is 1.0. This parameter is valid only when heightOnly is set to true.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    heightScale?: double;

    /**
     * Whether half leading is enabled.
     * Half leading is the leading split in half and applied equally to the top and bottom edges.
     * The value true means that half leading is enabled, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    halfLeading?: boolean;

    /**
     * How the height of the text box is set.
     * The value true means that the height of the text box is set based on the font size and the value of heightScale,
     * and false means that the height is set based on the line height and line spacing. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    heightOnly?: boolean;

    /**
     * Ellipsis content, which will be used to replace the extra content.
     * @type { ?string } it is u16string type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    ellipsis?: string;

    /**
     * Ellipsis type. The default value is END, indicating that the ellipsis is at the end of a line.
     * @type { ?EllipsisMode } Ellipsis mode.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    ellipsisMode?: EllipsisMode;

    /**
     * Locale. For example, 'en' indicates English, 'zh-Hans' indicates Simplified Chinese,
     * and 'zh-Hant' indicates Traditional Chinese. For details, see ISO 639-1. The default value is an empty string.
     * @type { ?string } it is string type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    locale?: string;

    /**
     * Shift of the baseline. The value is a floating point number. The default value is 0.0px.
     * @type { ?double } it is double type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    baselineShift?: double;

    /**
     * Text Style available font features.
     * @type { ?Array<FontFeature> } A collection of font features.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    fontFeatures?: Array<FontFeature>;

    /**
     * Text shadows of text.
     * @type { ?Array<TextShadow> } textShadow gather.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    textShadows?: Array<TextShadow>;

    /**
     * Rectangle style of text.
     * @type { ?RectStyle } rect style for text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    backgroundRect?: RectStyle;

    /**
     * Text Style available font variations.
     * @type { ?Array<FontVariation> } A collection of font variations.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    fontVariations?: Array<FontVariation>;

    /**
     * Text style available badge type.
     * @type { ?TextBadgeType } The type of text badge type.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    badgeType?: TextBadgeType;

    /**
     * Font width. The default value is NORMAL.
     * @type {  ?FontWidth  } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21
     * @arkts 1.1&1.2
     */
    fontWidth?: FontWidth;
  }

  /**
   * Implements a collection of fonts.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  /**
   * Implements a collection of fonts.
   * @syscap SystemCapability.Graphics.Drawing
   * @form
   * @since 22
   * @arkts 1.1&1.2
   */
  class FontCollection {
    /**
     * Get global FontCollection instance of the application.
     * @returns { FontCollection } The FontCollection object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    static getGlobalInstance(): FontCollection;

    /**
     * Get local FontCollection instance of the application.
     * @returns { FontCollection } The FontCollection object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @since 22
     * @arkts 1.1&1.2
     */
    static getLocalInstance(): FontCollection;

    /**
     * Loads a custom font. This API returns the result synchronously.
     * In this API, name specifies the alias of the font, and the custom font effect can be displayed only when
     * the value of name is set in fontFamilies in TextStyle. The supported font file formats are .ttf and .otf.
     * @param { string } name - the font name.
     * @param { string | Resource } path - Path of the font file to import. The value must be
     * **file://**absolute path of the font file or **rawfile/**directory or file name.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    /**
     * Loads a custom font. This API returns the result synchronously.
     * In this API, name specifies the alias of the font, and the custom font effect can be displayed only when
     * the value of name is set in fontFamilies in TextStyle. The supported font file formats are .ttf and .otf.
     * @param { string } name - the font name.
     * @param { string | Resource } path - Path of the font file to import. The value must be
     * **file://**absolute path of the font file or **rawfile/**directory or file name.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @since 22
     * @arkts 1.1&1.2
     */
    loadFontSync(name: string, path: string | Resource): void;

    /**
     * Loads a custom font. This API uses a promise to return the result.
     * In this API, name specifies the alias of the font, and the custom font effect can be displayed only when
     * the value of name is set in fontFamilies in TextStyle. The supported font file formats are ttf and otf.
     * @param { string } name - Name of the font. Any string is acceptable.
     * @param { string | Resource } path - Path of the font file to load.
     * The value must be **file://**absolute path of the font file or **rawfile/**directory or file name.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    /**
     * Loads a custom font. This API uses a promise to return the result.
     * In this API, name specifies the alias of the font, and the custom font effect can be displayed only when
     * the value of name is set in fontFamilies in TextStyle. The supported font file formats are ttf and otf.
     * @param { string } name - Name of the font. Any string is acceptable.
     * @param { string | Resource } path - Path of the font file to load.
     * The value must be **file://**absolute path of the font file or **rawfile/**directory or file name.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @since 22
     * @arkts 1.1&1.2
     */
    loadFont(name: string, path: string | Resource): Promise<void>;

    /**
     * Unloads a custom font synchronously. This API returns the result synchronously.
     * After unloading a font alias through this API, the corresponding custom font will no longer be available.
     * All typography using the font alias should be destroyed and re-created.
     * - Unloading a non-existent font alias has no effect and will **not** throw an error.
     * - This operation only affects subsequent font usages.
     * unload a font that is currently in used may lead to text rendering anomalies,
     * including garbled characters or missing glyphs.
     * @param { string } name - The alias of the font to unload.
     * This must exactly match the name used when loading the font through.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Unloads a custom font synchronously. This API returns the result synchronously.
     * After unloading a font alias through this API, the corresponding custom font will no longer be available.
     * All typography using the font alias should be destroyed and re-created.
     * - Unloading a non-existent font alias has no effect and will **not** throw an error.
     * - This operation only affects subsequent font usages.
     * unload a font that is currently in used may lead to text rendering anomalies,
     * including garbled characters or missing glyphs.
     * @param { string } name - The alias of the font to unload.
     * This must exactly match the name used when loading the font through.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @since 22
     * @arkts 1.1&1.2
     */
    unloadFontSync(name: string): void;

    /**
     * Unloads a custom font. This API uses a promise to return the result.
     * After unloading a font alias through this API, the corresponding custom font will no longer be available.
     * All typography using the font alias should be destroyed and re-created.
     * - Unloading a non-existent font alias has no effect and will **not** throw an error.
     * - This operation only affects subsequent font usages.
     * unload a font that is currently in used may lead to text rendering anomalies,
     * including garbled characters or missing glyphs.
     * @param { string } name - The alias of the font to unload.
     * This must exactly match the name used when loading the font through.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Unloads a custom font. This API uses a promise to return the result.
     * After unloading a font alias through this API, the corresponding custom font will no longer be available.
     * All typography using the font alias should be destroyed and re-created.
     * - Unloading a non-existent font alias has no effect and will **not** throw an error.
     * - This operation only affects subsequent font usages.
     * unload a font that is currently in used may lead to text rendering anomalies,
     * including garbled characters or missing glyphs.
     * @param { string } name - The alias of the font to unload.
     * This must exactly match the name used when loading the font through.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @since 22
     * @arkts 1.1&1.2
     */
    unloadFont(name: string): Promise<void>;

    /**
     * Clear font caches.
     * The font cache has a memory limit and a clearing mechanism. It occupies limited memory.
     * You are not advised to clear it unless otherwise required.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    /**
     * Clear font caches.
     * The font cache has a memory limit and a clearing mechanism. It occupies limited memory.
     * You are not advised to clear it unless otherwise required.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @since 22
     * @arkts 1.1&1.2
     */
     clearCaches(): void;
  }

  /**
   * Describes the strut style, which determines the line spacing, baseline alignment mode,
   * and other properties related to the line height when drawing texts. The strut style is disabled by default.
   * @typedef StrutStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface StrutStyle {
    /**
     * List of font families. By default, the list corresponds to the system's default fonts.
     * @type { ?Array<string> } fontfamily gather
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    fontFamilies?: Array<string>;

    /**
     * Font style. The default value is NORMAL.
     * @type { ?FontStyle } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    fontStyle?: FontStyle;

    /**
     * Font width. The default value is NORMAL.
     * @type { ?FontWidth } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    fontWidth?: FontWidth;

    /**
     * Font weight. The default value is W400. The default system font supports font weight adjustment.
     * For other fonts, if the weight is less than W600, there is no variation in stroke thickness.
     * If the weight is greater than or equal to W600, it might result in a fake bold effect.
     * @type { ?FontWeight } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    fontWeight?: FontWeight;

    /**
     * Font size, in units of px. The value is a floating point number. The default value is 14.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    fontSize?: double;

    /**
     * Scale factor of the line height. The value is a floating point number. The default value is 1.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    height?: double;

    /**
     * Custom leading to be applied to the strut. The value is a floating point number. The default value is -1.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    leading?: double;

    /**
     * Whether to forcibly use the strut height for all lines. The value true means to forcibly use the strut height
     * for all lines, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    forceHeight?: boolean;

    /**
     * Whether to enable the strut style.
     * The value true means to enable the strut style, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    enabled?: boolean;

    /**
     * 	Whether to override the height. The value true means to override the height, and false means the opposite.
     * The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    heightOverride?: boolean;

    /**
     * Whether half leading is enabled.
     * Half leading is the leading split in half and applied equally to the top and bottom edges.
     * The value true means that half leading is enabled, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    halfLeading?: boolean;
  }

  /**
   * Determines the configuration used by ParagraphBuilder to position lines within a Paragraph of text.
   * @typedef ParagraphStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface ParagraphStyle {
    /**
     * Text style applied to the paragraph. The default value is the initial text style.
     * @type { ?TextStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    textStyle?: TextStyle;

    /**
     * Text direction. The default value is LTR.
     * @type { ?TextDirection }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    textDirection?: TextDirection;

    /**
     * Text alignment mode. The default value is START. This parameter is invalid when the tab parameter is configured.
     * @type { ?TextAlign }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    align?: TextAlign;

    /**
     * Word break type. The default value is BREAK_WORD.
     * @type { ?WordBreak }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    wordBreak?: WordBreak;

    /**
     * Maximum number of lines. The value is an integer. The default value is 1e9.
     * @type { ?int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    maxLines?: int;

    /**
     * Text break strategy. The default value is GREEDY.
     * @type { ?BreakStrategy }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    breakStrategy?: BreakStrategy;

    /**
     * Strut style. The default value is the initial StrutStyle object.
     * @type { ?StrutStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    strutStyle?: StrutStyle;

    /**
     * Text height modifier pattern. The default value is ALL.
     * @type { ?TextHeightBehavior }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    textHeightBehavior?: TextHeightBehavior;

    /**
     * Alignment mode and position of the text after the tab character in a paragraph. By default, the tab character
     * is replaced with a space. This parameter is invalid when it is used together with the align parameter or
     * the ellipsis parameter in TextStyle.
     * @type { ?TextTab }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    tab?: TextTab;

    /**
     * Whether to optimize white spaces at the end of each line.
     * @type { ?boolean } Boolean type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    trailingSpaceOptimized?: boolean;

    /**
     * Whether to enable automatic spacing between Chinese and English for paragraph.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    autoSpace?: boolean;

    /**
     * Vertical alignment mode of the paragraph.
     * @type { ?TextVerticalAlign }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    verticalAlign?: TextVerticalAlign;

    /**
     * Line spacing. The value is a double number.
     * @type { ?double } It is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21
     * @arkts 1.1&1.2
     */
    lineSpacing?: double;
  }

  /**
   * Enumerates the vertical alignment modes of a placeholder relative to the surrounding text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum PlaceholderAlignment {
    /**
     * Aligns the baseline of the placeholder to the baseline of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    OFFSET_AT_BASELINE,

    /**
     * Aligns the bottom edge of the placeholder to the baseline of the text.
     * sits on top of the baseline.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    ABOVE_BASELINE,

    /**
     * Aligns the top edge of the placeholder to the baseline of the text.
     * hangs below the baseline.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    BELOW_BASELINE,

    /**
     * Align the top edge of the placeholder with the top edge of the font. When the placeholder is very tall,
     * the extra space will hang from the top and extend through the bottom of the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    TOP_OF_ROW_BOX,

    /**
     * Align the bottom edge of the placeholder with the bottom edge of the text. When the placeholder is very tall,
     * the extra space will rise from the bottom and extend through the top of the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    BOTTOM_OF_ROW_BOX,

    /**
     * Align the middle of the placeholder with the middle of the text. When the placeholder is very tall,
     * the extra space will grow equally from the top and bottom of the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    CENTER_OF_ROW_BOX,

    /**
     * Follow Paragraph setting,
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    FOLLOW_PARAGRAPH,
  }

  /**
   * Describes the placeholder style.
   * @typedef PlaceholderSpan
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface PlaceholderSpan {
    /**
     * Width of the placeholder, in units of px. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    width: double;

    /**
     * Height of the placeholder, in units of px. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    height: double;

    /**
     * Vertical alignment of the placeholder relative to the surrounding text.
     * @type { PlaceholderAlignment }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    align: PlaceholderAlignment;

    /**
     * Type of the text baseline.
     * @type { TextBaseline }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    baseline: TextBaseline;

    /**
     * Offset to the text baseline, in units of px. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    baselineOffset: double;
  }

  /**
   * Describes a left-closed and right-open interval.
   * @typedef Range
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface Range {
    /**
     * Index of the leftmost point of the interval. The value is an integer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    start: int;

    /**
     * Index of the rightmost point of the interval. The value is an integer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    end: int;
  }

  /**
   * Enumerates the font types, which can be combined through bitwise OR operations.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 14 dynamic
   * @since 20 static
   */
  enum SystemFontType {
    /**
     * All font types, including the system font type, style font type, and user-installed font type.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    ALL = 1 << 0,

    /**
     * System generic font type.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    GENERIC = 1 << 1,

    /**
     * Style font type. The style font type is designed for 2-in-1 devices.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    STYLISH = 1 << 2,

    /**
     * Font type that has been installed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    INSTALLED = 1 << 3,

    /**
     * Customized font types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    CUSTOMIZED = 1 << 4,
  }

  /**
   * Describes the font descriptor information.
   * @typedef FontDescriptor
   * @syscap SystemCapability.Graphics.Drawing
   * @since 14 dynamic
   * @since 20 static
   */
  interface FontDescriptor {
    /**
     * Absolute path of the font. Any string is acceptable, but the value must adhere to the system's path constraints.
     * The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    path?: string;

    /**
     * Unique name of the font. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    postScriptName?: string;

    /**
     * Font name. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    fullName?: string;

    /**
     * Family name of the font. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    fontFamily?: string;

    /**
     * Subfamily name of the font. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    fontSubfamily?: string;

    /**
     * Font weight. The default value is 0.
     * @type { ?FontWeight }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    weight?: FontWeight;

    /**
     * Font width. The value is an integer ranging from 1 to 9. The default value is 0.
     * @type { ?int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    width?: int;

    /**
     * Whether the font is italic. The value 0 means that the font is not italic, and 1 means the opposite.
     * The default value is 0.
     * @type { ?int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    italic?: int;

    /**
     * Whether the font is monospaced. The value true means that the font is monospaced, and false means the opposite.
     * The default value is false.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    monoSpace?: boolean;

    /**
     * Whether the font is symbolic. The value true means that the font is symbolic, and false means the opposite.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     * @since 20 static
     */
    symbolic?: boolean;
  }

  /**
   * Implements a carrier that stores the text content and style. You can perform operations such as layout and drawing.
   * Before calling any of the following APIs, you must use build() of the ParagraphBuilder class to
   * create a Paragraph object.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  class Paragraph {
    /**
     * Performs layout and calculates the positions of all glyphs.
     * @param { double } width - Maximum width of a single line, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    layoutSync(width: double): void;

    /**
     * Performs layout and calculates the positions of all glyphs. This API uses a promise to return the result.
     * @param { double } width - Maximum width of a single line, in units of px. The value is a floating point number.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    layout(width: double): Promise<void>;

    /**
     * Paints the text on the canvas with the coordinate point (x, y) as the upper left corner.
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - X coordinate of the upper left corner. The value is a floating point number.
     * @param { double } y - Y coordinate of the upper left corner. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    paint(canvas: drawing.Canvas, x: double, y: double): void;

    /**
     * Draw the laid out text onto the supplied canvas along the path and offset.
     * @param { drawing.Canvas } canvas - Canvas used to carry the drawn content and drawing status.
     * @param { drawing.Path } path - Path used to determine the position of the text.
     * @param { double } hOffset - Horizontal offset along the path direction. A positive number indicates a position
     * that is ahead along the path from its start point, and a negative number indicates a position that is behind
     * from the start point.
     * @param { double } vOffset - Vertical offset along the path direction. A positive number indicates a position
     * on the left side of the path, and a negative number indicates a position on the right side of the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    paintOnPath(canvas: drawing.Canvas, path: drawing.Path, hOffset: double, vOffset: double): void;

    /**
     * Obtains the maximum width of the line in the text.
     * @returns { double } Maximum line width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getMaxWidth(): double;

    /**
     * Obtains the total height of the text.
     * @returns { double } Total height, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getHeight(): double;

    /**
     * Obtains the longest line in the text.
     * @returns { double } Longest line, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getLongestLine(): double;

    /**
     * Obtains the width of the longest line, including its indentation, in the text.
     * You are advised to round up the return value. If the text content is empty, 0 is returned.
     * @returns { double } Width of the longest line, including its indentation.
     * The value is a floating point number, in px.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 13 dynamic
     * @since 20 static
     */
    getLongestLineWithIndent(): double;

    /**
     * Obtains the minimum intrinsic width of the paragraph.
     * @returns { double } Minimum intrinsic width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getMinIntrinsicWidth(): double;

    /**
     * Obtains the maximum intrinsic width of the paragraph.
     * @returns { double } Maximum intrinsic width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getMaxIntrinsicWidth(): double;

    /**
     * Obtains the alphabetic baseline.
     * @returns { double } Alphabetic baseline, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getAlphabeticBaseline(): double;

    /**
     * Obtains the ideographic baseline.
     * @returns { double } Ideographic baseline, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getIdeographicBaseline(): double;

    /**
     * Obtains the rectangles occupied by the characters in the range of the text under the given rectangle width and
     * height.
     * @param { Range } range - Range of the text.
     * @param { RectWidthStyle } widthStyle - Width of the rectangle.
     * @param { RectHeightStyle } heightStyle - Height of the rectangle.
     * @returns { Array<TextBox> } Array holding the rectangles obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getRectsForRange(range: Range, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>;

    /**
     * Obtains the rectangles occupied by all placeholders in the text.
     * @returns { Array<TextBox> } Array holding the rectangles obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getRectsForPlaceholders(): Array<TextBox>;

    /**
     * Obtains the position of a glyph closest to the given coordinates.
     * @param { double } x - X coordinate. The value is a floating point number.
     * @param { double } y - Y coordinate. The value is a floating point number.
     * @returns { PositionWithAffinity } Position of the glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getGlyphPositionAtCoordinate(x: double, y: double): PositionWithAffinity;

    /**
     * Obtains the range of the word where the glyph with a given offset is located.
     * @param { int } offset - Offset of the glyph. The value is an integer.
     * @returns { Range } Range of the word.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getWordBoundary(offset: int): Range;

    /**
     * Obtains the number of text lines.
     * @returns { int } Number of text lines. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getLineCount(): int;

    /**
     * Obtains the height of a given line.
     * @param { int } line - Index of the line. The value is an integer ranging from 0 to getLineCount() – 1.
     * @returns { double } The line height value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getLineHeight(line: int): double;

    /**
     * Obtains the width of a given line.
     * @param { int } line - Index of the line. The value is an integer ranging from 0 to getLineCount() – 1.
     * @returns { double } The line width value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getLineWidth(line: int): double;

    /**
     * Checks whether the number of lines in the paragraph exceeds the maximum.
     * @returns { boolean } Check result. The value true means that the number of lines exceeds the maximum,
     * and false means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    didExceedMaxLines(): boolean;

    /**
     * Obtains all the text lines.
     * @returns { Array<TextLine> } Array of text lines.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getTextLines(): Array<TextLine>;

    /**
     * Obtains the actually visible text range in the specified line, excluding any overflow ellipsis.
     * @param { int } lineNumber - Line number of the text range, starting from 0. This API can only be used to
     * obtain the bounds of existing lines. That is, the line number must start from 0, and the maximum line number
     * is getLineCount - 1.
     * @param { boolean } includeSpaces - Whether spaces are included. The value true means that spaces are contained,
     * and false means the opposite.
     * @returns { Range } Text range obtained. If the line index is invalid, start and end are both 0.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getActualTextRange(lineNumber: int, includeSpaces: boolean): Range;

    /**
     * Obtains an array of line measurement information.
     * @returns { Array<LineMetrics> } Array of line measurement information.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getLineMetrics(): Array<LineMetrics>;

    /**
     * Obtains the line measurement information of a line.
     * @param { int } lineNumber - Line number, starting from 0.
     * @returns { LineMetrics | undefined } LineMetrics object containing the measurement information if the specified
     * line number is valid and the measurement information exists. If the line number is invalid or
     * the measurement information cannot be obtained, undefined is returned.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getLineMetrics(lineNumber: int): LineMetrics | undefined;

    /**
     * Synchronously updates the text color of the typography.
     * @param { common2D.Color } color - Color of text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    updateColor(color: common2D.Color): void;

    /**
     * Synchronously updates text decoration.
     * @param { Decoration } decoration - Decoration of text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    updateDecoration(decoration: Decoration): void;
  }

  /**
   * Implements a carrier that stores the text content and style. It can be used to compute layout details for
   * individual lines of text. Before calling any of the following APIs, you must use buildLineTypeset()
   * in the ParagraphBuilder class to create a LineTypeset object.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18 dynamic
   * @since 20 static
   */
  class LineTypeset {
    /**
     * Obtains the number of characters that can fit in the layout from the specified position within a limited width.
     * @param { int } startIndex - Start position (inclusive) for calculation. The value is an integer in the range
     * [0, total number of text characters). If the parameter is invalid, an exception is thrown.
     * @param { double } width - Layout width. The value is a floating point number greater than 0, in px.
     * @returns { int } Number of characters.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    getLineBreak(startIndex: int, width: double): int;

    /**
     * Generates a text line object based on the specified layout range.
     * @param { int } startIndex - Start position for layout calculation. The value is an integer in the
     * range [0, total number of text characters).
     * @param { int } count - 	Number of characters from the specified start position. The value is an integer in
     * the range [0, total number of text characters). The sum of startIndex and count cannot be greater than
     * the total number of text characters. When count is 0, the range is [startIndex, end of the text].
     * You can use getLineBreak to obtain the number of characters that can fit in the layout.
     * @returns { TextLine } TextLine object generated based on the characters in the text range.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    createLine(startIndex: int, count: int): TextLine;
  }

  /**
   * Describes the rectangle that holds the text.
   * @typedef TextBox
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface TextBox{
    /**
     * Information about the rectangle.
     * @type { common2D.Rect }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    rect: common2D.Rect;

    /**
     * Text direction.
     * @type { TextDirection }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    direction: TextDirection;
  }

  /**
   * Describes the position and affinity of a glyph.
   * @typedef PositionWithAffinity
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface PositionWithAffinity {
    /**
     * Index of the glyph relative to the paragraph. The value is an integer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    position: int;

    /**
     * Affinity of the position.
     * @type { Affinity }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    affinity: Affinity;
  }

  /**
   * Enumerates the rectangle width styles.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum RectWidthStyle {
    /**
     * If letterSpacing is not set, the rectangle conforms tightly to the text it contains.
     * However, if letterSpacing is set, a gap is introduced between the rectangle and text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    TIGHT,

    /**
     * The rectangle's width is extended to align with the widest rectangle across all lines.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    MAX,
  }

  /**
   * Enumerates the rectangle height styles.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum RectHeightStyle {
    /**
     * Tight style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    TIGHT,

    /**
     * Extends the height to match the highest rectangle in all lines.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    MAX,

    /**
     * The top and bottom of each rect will cover half of the space above and half of the space below the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    INCLUDE_LINE_SPACE_MIDDLE,

    /**
     * The line spacing will be added to the top of the rect.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    INCLUDE_LINE_SPACE_TOP,

    /**
     * The line spacing will be added to the bottom of the rect.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    INCLUDE_LINE_SPACE_BOTTOM,

    /**
     * The height of the boxes will be calculated by text strut.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    STRUT,
  }

  /**
   * Enumerates text affinity.When a selection range involves line breaks or other special characters, the
   * affinity determines which side of the characters the start and end of the selection range should be
   * closer to.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  enum Affinity {
    /**
     * The position has affinity for the upstream side of the text position.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */

    UPSTREAM,
    /**
     * The position has affinity for the downstream side of the text position.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    DOWNSTREAM,
  }

  /**
   * Builds a Paragraph containing text with the given styling information.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  class ParagraphBuilder {
    /**
     * A constructor used to create a ParagraphBuilder object.
     * @param { ParagraphStyle } paragraphStyle - Paragraph style {@link ParagraphStyle}
     * @param { FontCollection } fontCollection - Font collection {@link FontCollection}
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    constructor(paragraphStyle: ParagraphStyle, fontCollection: FontCollection);

    /**
     * Applies a new style to the current text blob.
     * <p>**NOTE**</p>
     * When you update the style of the current text blob, all text added afterward will use this new style.
     * @param { TextStyle } textStyle - Text style, which describes various visual attributes of text, such as font,
     * font size, color, font weight, word spacing, line spacing, decoration (such as underline and strikethrough),
     * and text shadow. {@link TextStyle}
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    pushStyle(textStyle: TextStyle): void;

    /**
     * Restores the previous text style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    popStyle(): void;

    /**
     * Inserts a text string into the paragraph being built.
     * @param { string } text - Exact text string inserted into the paragraph. If an invalid Unicode character is
     * provided, it is displayed as �.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    addText(text: string): void;

    /**
     * Inserts a placeholder into the paragraph being built.
     * @param { PlaceholderSpan } placeholderSpan - Placeholder span, which describes the size, alignment,
     * baseline type, and baseline offset of the placeholder. {@link PlaceholderSpan}
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    addPlaceholder(placeholderSpan: PlaceholderSpan): void;

    /**
     * Creates a paragraph object that can be used for subsequent layout and rendering.
     * @returns { Paragraph } Paragraph object that can be used for subsequent rendering.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    build(): Paragraph;

    /**
     * Builds a line typesetter.
     * @returns { LineTypeset } LineTypeset object that can be used for subsequent rendering.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    buildLineTypeset(): LineTypeset;

    /**
     * Inserts a symbol into the paragraph being built.
     * @param { int } symbolId - Symbol code to insert. The value is a hexadecimal number in the
     * range 0xF0000-0xF0C97. For details about the configurable symbol codes (unicode values in the list view),
     * see <a href="https://developer.huawei.com/consumer/cn/design/harmonyos-symbol/">HarmonyOS Symbol</a>.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    addSymbol(symbolId: int): void;
  }

  /**
   * Describes the typographic boundaries of a text line. These boundaries depend on the typographic font and font size,
   * not on the characters themselves. For example, for the string " a b " (which has a space before "a" and a space
   * after "b"), the typographic boundaries include the spaces at the beginning and end of the line. Similarly,
   * the strings "j" and "E" have identical typographic boundaries, which are independent of the characters themselves.
   * @typedef TypographicBounds
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18 dynamic
   * @since 20 static
   */
  interface TypographicBounds {
    /**
     * Ascent of a text line. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    ascent: double;

    /**
     * Descent of a text line. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    descent: double;

    /**
     * Leading of a text line. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    leading: double;

    /**
     * Width of the typographic boundaries. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    width: double;
  }

  /**
   * Defines the callback used to receive the offset and index of each character in a text line object
   * as its parameters.
   *
   * @typedef { function } CaretOffsetsCallback
   * @param { double } offset - Offset of each character in a text line. The value is a floating point number.
   * @param { int } index - Index of each character in a text line. The value is an integer.
   * @param { boolean } leadingEdge - Whether the cursor is located at the front of the character. The value true means
   * that the cursor is located at the front of the character, that is, the offset does not contain the character
   * width. The value false means that the cursor is located at the rear of the character, that is, the offset
   * contains the character width.
   * callback function.
   * @returns { boolean } Whether to stop calling the callback. The value true means to stop calling the callback,
   * and false means to continue calling the callback.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18 dynamic
   * @since 20 static
   */
  type CaretOffsetsCallback = (offset: double, index: int, leadingEdge: boolean) => boolean;

  /**
   * Implements a carrier that describes the basic text line structure of a paragraph.
   * Before calling any of the following APIs, you must use getTextLines() of the Paragraph class or createLine() of
   * the LineTypeset class to create a TextLine object.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  class TextLine {
    /**
     * Obtains the number of glyphs in this text line.
     * @returns { int } Number of glyphs. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getGlyphCount(): int;

    /**
     * Obtains the range of the text in this text line in the entire paragraph.
     * @returns { Range } Range of the text in this text line in the entire paragraph.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getTextRange(): Range;

    /**
     * Obtains the array of glyph runs in the text line.
     * @returns { Array<Run> } Array of the runs obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getGlyphRuns(): Array<Run>;

    /**
     * Paints this text line on the canvas with the coordinate point (x, y) as the upper left corner.
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - X coordinate of the upper left corner. The value is a floating point number.
     * @param { double } y - Y coordinate of the upper left corner. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    paint(canvas: drawing.Canvas, x: double, y: double): void;

    /**
     * Creates a truncated text line object.
     * @param { double } width - Width of the line after truncation. The value is a floating point number.
     * @param { EllipsisMode } ellipsisMode - Ellipsis mode. Currently, only START and END are supported.
     * @param { string } ellipsis - String used to mark a truncation.
     * @returns { TextLine } Truncated text line object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    createTruncatedLine(width: double, ellipsisMode: EllipsisMode, ellipsis: string): TextLine;

    /**
     * Creates a truncated text line object.
     * @param { double } width - Width of the line after truncation. The value is a floating point number.
     * @param { EllipsisMode } ellipsisMode - Ellipsis mode. Currently, only START and END are supported.
     * @param { string } ellipsis - String used to mark a truncation.
     * @returns { TextLine | undefined } Truncated text line object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    createTruncatedLine(width: double, ellipsisMode: EllipsisMode, ellipsis: string): TextLine | undefined;

    /**
     * Obtains the typographic boundaries of this text line. These boundaries depend on the typographic font and font
     * size, but not on the characters themselves. For example, for the string " a b " (which has a space before
     * "a" and a space after "b"), the typographic boundaries include the spaces at the beginning and end of the
     * line. Similarly, the strings "j" and "E" have identical typographic boundaries, which are independent of
     * the characters themselves.
     * @returns { TypographicBounds } Typographic boundaries of the text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    getTypographicBounds(): TypographicBounds;

    /**
     * Obtains the image boundaries of this text line. The image boundaries, equivalent to visual boundaries, depend on
     * the font, font size, and characters. For example, for the string " a b " (which has a space before "a" and
     * a space after "b"), only "a b" are visible to users, and therefore the image boundaries do not include these
     * spaces at the beginning and end of the line. For the strings "j" and "E", their image boundaries are
     * different. Specifically, the width of the boundary for "j" is narrower than that for "E", and the height of
     * the boundary for "j" is taller than that for "E".
     * @returns { common2D.Rect } Image boundary of the text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    getImageBounds(): common2D.Rect;

    /**
     * Obtains the width of the spaces at the end of this text line.
     * @returns { double } Number of spaces at the end of the text line. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    getTrailingSpaceWidth(): double;

    /**
     * Obtains the index of a character at the specified position in the original string.
     * @param { common2D.Point } point - Position of the character.
     * @returns { int } Index of the character in the text line. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    getStringIndexForPosition(point: common2D.Point): int;

    /**
     * Obtains the offset of a character with the specified index in this text line.
     * @param { int } index - Index of the character. The value is an integer.
     * @returns { double } Offset of the character with the specified index. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    getOffsetForStringIndex(index: int): double;

    /**
     * Enumerates the offset and index of each character in a text line.
     * @param { CaretOffsetsCallback } callback - Custom function, which contains the offset and index of each
     * character in the text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    enumerateCaretOffsets(callback: CaretOffsetsCallback): void;

    /**
     * Obtains the offset of this text line after alignment based on the alignment factor and alignment width.
     * @param { double } alignmentFactor - Alignment factor, which determines how text is aligned. The value is a
     * floating point number. A value less than or equal to 0.0 means that the text is left-aligned; a value
     * between 0.0 and 0.5 means that the text is slightly left-aligned; the value 0.5 means that is text
     * is centered; a value between 0.5 and 1 means that the text is slightly right-aligned; a value greater than
     * or equal to 1.0 means that the text is right-aligned.
     * @param { double } alignmentWidth - Alignment width, that is, the width of the text line. The value is a floating
     * point number. If the width is less than the actual width of the text line, 0 is returned.
     * @returns { double } Offset required for alignment. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    getAlignmentOffset(alignmentFactor: double, alignmentWidth: double): double;
  }

  /**
   * Implements a unit for text layout.
   * Before calling any of the following APIs, you must use getGlyphRuns() of the TextLine class to create a Run object.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  class Run {
    /**
     * Obtains the number of glyphs in this run.
     * @returns { int } Number of glyphs. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getGlyphCount(): int;

    /**
     * Obtains the index of each glyph in this run.
     * @returns { Array<int> } Array holding the index of each glyph in the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getGlyphs(): Array<int>;

    /**
     * Obtains the index of each glyph in the specified range of this run.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range. end indicates the length of the range. If the length is 0, the range is from range.start to the end
     * of the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is
     * returned.
     * @returns { Array<int> } Array holding the index of each glyph in the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    getGlyphs(range: Range): Array<int>;

    /**
     * Obtains the index of each glyph in the specified range of this run.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range. end indicates the length of the range. If the length is 0, the range is from range.start to the end
     * of the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is
     * returned.
     * @returns { Array<int> | undefined } Array holding the index of each glyph in the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    getGlyphs(range: Range): Array<int> | undefined;

    /**
     * Obtains the position of each glyph relative to the respective line in this run.
     * @returns { Array<common2D.Point> } Array holding the position of each glyph relative to the respective line in
     * the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getPositions(): Array<common2D.Point>;

    /**
     * Obtains the position array of each glyph relative to the respective line within the specified range of this run.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range. end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is returned.
     * @returns { Array<common2D.Point> } 	Array holding the position of each glyph relative to the respective line in
     * the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    getPositions(range: Range): Array<common2D.Point>;

    /**
     * Obtains the position array of each glyph relative to the respective line within the specified range of this run.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range. end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is returned.
     * @returns { Array<common2D.Point> | undefined } 	Array holding the position of each glyph relative to the respective line in
     * the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    getPositions(range: Range): Array<common2D.Point> | undefined;

	  /**
     * Obtains the offset of each glyph in this run relative to its index.
     * @returns { Array<common2D.Point> } Array holding the offset of each glyph in the run relative to its index.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getOffsets(): Array<common2D.Point>;

    /**
     * Obtains the Font object of this run.
     * @returns { drawing.Font } Font object of this run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    getFont(): drawing.Font;

    /**
     * Paints this run on the canvas with the coordinate point (x, y) as the upper left corner.
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - X coordinate of the upper left corner. The value is a floating point number.
     * @param { double } y - Y coordinate of the upper left corner. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    paint(canvas: drawing.Canvas, x: double, y: double): void;

    /**
     * Obtains an array of character indices for glyphs within a specified range of this run, where the indices are
     * offsets relative to the entire paragraph.
     * @param { Range } [range] - Range of the glyphs, where range.start indicates the start position of the range, and
     * range.end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is returned.
     * If this parameter is not passed, the entire run is obtained.
     * @returns { Array<int> } Array of character indices.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    getStringIndices(range?: Range): Array<int>;

    /**
     * Obtains an array of character indices for glyphs within a specified range of this run, where the indices are
     * offsets relative to the entire paragraph.
     * @param { Range } [range] - Range of the glyphs, where range.start indicates the start position of the range, and
     * range.end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is returned.
     * If this parameter is not passed, the entire run is obtained.
     * @returns { Array<int> | undefined } Array of character indices.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    getStringIndices(range?: Range): Array<int> | undefined;

    /**
     * Obtains the range of glyphs generated by this run.
     * @returns { Range } 	Range of the glyphs, where start indicates the start position of the range, which is the
     * index relative to the entire paragraph, and end indicates the length of the range.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    getStringRange(): Range;

    /**
     * Obtain the typographic boundaries of this run. These boundaries depend on the typographic font and font size,
     * but not on the characters themselves. For example, for the string " a b " (which has a space before "a" and
     * a space after "b"), the typographic boundaries include the spaces at the beginning and end of the line.
     * @returns { TypographicBounds } Typographic boundaries of the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    getTypographicBounds(): TypographicBounds;

    /**
     * Obtains the image boundary of this run. The image boundary, equivalent to a visual boundary, is related to the
     * font, font size, and characters. For example, for the string " a b " (which has a space before "a" and a
     * space after "b"), only "a b" are visible to users, and therefore the image boundary does not include these
     * spaces at the beginning and end.
     * @returns { common2D.Rect } Image boundary of the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    getImageBounds(): common2D.Rect;

    /**
     * Obtains the text direction of the run.
     * @returns { TextDirection } Returns the text direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    getTextDirection(): TextDirection;

    /**
     * Gets the glyph width array within the range.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range.end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run.
     * @returns { Array<common2D.Point> } Array holding the advance width and height of each glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    getAdvances(range: Range): Array<common2D.Point>;
  }

  /**
   * Describes the layout information and metrics for a continuous piece of text (a run) in a line of text.
   * @typedef RunMetrics
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface RunMetrics {
    /**
     * The metrics of an Font.
     * @type { TextStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    textStyle: TextStyle;

    /**
     * Describes text style.
     * @type { drawing.FontMetrics }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    fontMetrics: drawing.FontMetrics;
  }

  /**
   * Describes the measurement information of a single line of text in the text layout.
   * @typedef LineMetrics
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  interface LineMetrics {
    /**
     * Start index of the line in the text buffer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    startIndex: int;

    /**
     * End index of the line in the text buffer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    endIndex: int;

    /**
     * Ascent, that is, the distance from the baseline to the top of the character.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    ascent: double;

    /**
     * Descent, that is, the distance from the baseline to the bottom of the character.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    descent: double;

    /**
     * Height of the line, which is Math.round(ascent + descent).
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    height: double;

    /**
     * Width of the line.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    width: double;

    /**
     * Left edge of the line. The right edge is the value of left plus the value of width.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    left: double;

    /**
     * Y coordinate of the baseline in the line relative to the top of the paragraph.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    baseline: double;

    /**
     * Line number, starting from 0.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    lineNumber: int;

    /**
     * Height from the top to the current line.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    topHeight: double;

    /**
     * Mapping between text index ranges and the FontMetrics associated with
     * them. The first run will be keyed under start_index. The metrics here.
     * are before layout and are the base values we calculate from.
     * @type { Map<int, RunMetrics> }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    runMetrics: Map<int, RunMetrics>;
  }

  /**
   * Obtains the full names of all fonts of the specified type. This API uses a promise to return the result.
   * @param { SystemFontType } fontType - System font type.
   * @returns { Promise<Array<string>> } 	Promise used to return the full names of all fonts of the specified type.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 14 dynamic
   * @since 20 static
   */
  function getSystemFontFullNamesByType(fontType: SystemFontType): Promise<Array<string>>;

  /**
   * Obtains the font descriptor based on the font name and type. This API uses a promise to return the result.
   * A font descriptor is a data structure that describes font features. It contains details of the font appearance and
   * properties.
   * @param { string } fullName - Font name, corresponding to the value of fullName in the name table of the
   * corresponding font file. It is obtained by calling getSystemFontFullNamesByType.
   * @param { SystemFontType } fontType - System font type.
   * @returns { Promise<FontDescriptor> } Promise used to return the font descriptor.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 14 dynamic
   * @since 20 static
   */
  function getFontDescriptorByFullName(fullName: string, fontType: SystemFontType): Promise<FontDescriptor>;

  /**
   * Obtains all system font descriptors that match the provided font descriptor. This API uses a promise to return the
   * result.
   * @param { FontDescriptor } desc - Font descriptor to match against. If this parameter is left unspecified,
   * all system font descriptors are returned. If a specific value is provided, the matching is performed based on
   * <br.the value provided. If the matching fails, an empty array is returned.
   * @returns { Promise<Array<FontDescriptor>> } Promise used to return all matched system font descriptors, and an
   * empty array will be returned if the matching fails.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18 dynamic
   * @since 20 static
   */
  function matchFontDescriptors(desc: FontDescriptor): Promise<Array<FontDescriptor>>;

  /**
   * Implements a paragraph-style text tab, which stores the alignment mode and position.
   * @typedef TextTab
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18 dynamic
   * @since 20 static
   */
  interface TextTab {
    /**
     * Alignment mode of the text following the tab character in a paragraph. It can be set to LEFT, RIGHT, and CENTER
     * defined in TextAlign. Other enumerated values have the effect of left alignment. The default value is left
     * alignment.
     * @type { TextAlign }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    alignment: TextAlign;

    /**
     * Alignment position of the text following the tab character. The value is a floating point number, in px.
     * The minimum value is 1.0. When the value is less than 1.0, the tab character is replaced with a space.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    location: double;
  }

  /**
   * Defines text rendering high contrast mode to enhance readability.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 20 dynamic
   */
  enum TextHighContrast {
    /**
     * Follow system's high contrast settings for text rendering.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    TEXT_FOLLOW_SYSTEM_HIGH_CONTRAST,
    /**
     * Disables high contrast rendering regardless of system settings.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    TEXT_APP_DISABLE_HIGH_CONTRAST,
    /**
     * Enable high contrast rendering regardless of system settings.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    TEXT_APP_ENABLE_HIGH_CONTRAST,
  }

  /**
   * Sets high contrast mode of text rendering.
   * @param { TextHighContrast } action - High contrast mode.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 20 dynamic
   */
  function setTextHighContrast(action: TextHighContrast): void;

  /**
   * Visual representations for undefined (.notdef) glyphs.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 20 dynamic
   */
  enum TextUndefinedGlyphDisplay {
    /**
     * Use the font's built-in .notdef glyph. This respects font's internal .notdef glyph design,
     * which might be an empty box, blank space, or custom symbol.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    USE_DEFAULT,
    /**
     * Always replace undefined glyphs with explicit tofu blocks,
     * overriding the font's default behavior. Useful for debugging missing characters
     * or enforcing consistent missing symbol display.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    USE_TOFU,
  }

  /**
   * Sets the glyph type to use when a character maps to the .notdef (undefined) glyph.
   * affects all text rendered after this call.
   * This configuration affects how the renderer displays characters that are not defined in the font:
   * - The default behavior follows font's internal .notdef glyph design
   * - Tofu blocks explicitly show missing characters as visible squares
   * @param { TextUndefinedGlyphDisplay } noGlyphShow - The strategy for handling undefined glyphs.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 20 dynamic
   */
  function setTextUndefinedGlyphDisplay(noGlyphShow: TextUndefinedGlyphDisplay): void;

  /**
   * Obtains the font descriptor array based on the provided font file path or resource.
   * @param { string | Resource } path - Path or resource of the font file.
   *     The value must be **file://**absolute path of the font file or **rawfile/**directory or file name.
   * @returns { Promise<Array<FontDescriptor>> } Promise used to return all parsed font descriptors,
   *     and an empty array will be returned if no fonts are found, invalid path, no permission, or non-font file.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 22 dynamic
   */
  function getFontDescriptorsFromPath(path: string | Resource): Promise<Array<FontDescriptor>>;
}

export default text;
