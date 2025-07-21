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
import { ResourceColor, ResourceStr, Length } from './units';
import { DecorationStyleInterface, MutableStyledString, StyledString } from './styled_string';
import { SelectionOptions, Callback } from './common';
import { TextDecorationType, TextDecorationStyle } from './enums';
/*** endif */

/**
 * Defines the text data detector type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines the text data detector type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum TextDataDetectorType {
  /**
   * Detector type phone number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */  
  /**
   * Detector type phone number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */   
  PHONE_NUMBER = 0,

  /**
   * Detector type URL.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */ 
  /**
   * Detector type URL.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  URL = 1,

  /**
   * Detector type email.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */ 
  /**
   * Detector type email.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */ 
  EMAIL = 2,

  /**
   * Detector type address.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Detector type address.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ADDRESS = 3,

  /**
   * Detector type datetime.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  DATE_TIME = 4,
}
  
/**
 * Text data detector config.
 *
 * @interface TextDataDetectorConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Text data detector config.
 *
 * @interface TextDataDetectorConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface TextDataDetectorConfig {
  /**
   * Text data detector types.
   *
   * @type { TextDataDetectorType[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Text data detector types.
   *
   * @type { TextDataDetectorType[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  types: TextDataDetectorType[]

  /**
   * Text data detect result callback.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Text data detect result callback.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  onDetectResultUpdate?: (result: string) => void
  /**
   * Text data detect result callback.
   *
   * @type { ?Callback<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onDetectResultUpdate?: Callback<string>
  /**
   * The color of AI entity.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  color?: ResourceColor,

  /**
   * The decoration of AI entity.
   *
   * @type { ?DecorationStyleInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  decoration?: DecorationStyleInterface;

  /**
   * Used to set whether the preview window will be displayed when long-presses and selects a word.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  enablePreviewMenu?: boolean;
}

/**
 * Defines range of text type component.
 *
 * @interface TextRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface TextRange {
  /**
   * Start offset.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  start?: number;

  /**
   * End offset.
   *
   * @type { ?number }
   * @default text length
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  end?: number;
}

/**
 * Defines the inserted text value info.
 *
 * @interface InsertValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface InsertValue {
  /**
   * The location info where the value will be inserted.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  insertOffset: number;

  /**
   * The inserted value.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  insertValue: string;
}

/**
 * Defines delete text direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum TextDeleteDirection {
  /**
   * Delete backward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  BACKWARD = 0,

  /**
   * Delete forward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  FORWARD = 1,
}

/**
 * Defines the superscript style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare enum SuperscriptStyle {
  /**
   * normal font style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  NORMAL = 0,

  /**
   * Superscript font style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  SUPERSCRIPT = 1,

  /**
   * Subscript font style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  SUBSCRIPT = 2,
}

/**
 * Defines menu type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'13','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum MenuType {
  /**
   * Selection menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  SELECTION_MENU = 0,

  /**
   * Preview menu, only for image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PREVIEW_MENU = 1,
}

/**
 * Declare the type of automatic case mode switching.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'20','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum AutoCapitalizationMode {
  /**
   * The default status is invalid.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'20','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NONE = 0,

  /**
   * Automatic case by words.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'20','1.2':'20'}
   * @arkts 1.1&1.2
   */
  WORDS = 1,

  /**
   * Automatic case by sentences.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'20','1.2':'20'}
   * @arkts 1.1&1.2
   */
  SENTENCES = 2,

  /**
   * Automatic case by full characters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'20','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ALL_CHARACTERS = 3,
}

/**
 * Provides an interface for deleting value from text.
 *
 * @interface DeleteValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface DeleteValue {
  /**
   * The location info where the value will be deleted.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  deleteOffset: number;

  /**
   * The deleted direction.
   *
   * @type { TextDeleteDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  direction: TextDeleteDirection;

  /**
   * The deleted value.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  deleteValue: string;
}

/**
 * Callback after content changed.
 * 
 * @typedef { function } OnDidChangeCallback
 * @param { TextRange } rangeBefore - Range of content that had been replaced.
 * @param { TextRange } rangeAfter - Range of content that newly added.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type OnDidChangeCallback = (rangeBefore: TextRange, rangeAfter: TextRange) => void;

/**
 * Callback when input sometimes has info of previewText.
 *
 * @typedef { function } EditableTextOnChangeCallback
 * @param { string } value - Value of body text, without previewText value.
 * @param { PreviewText } [previewText] - info of previewText, contains previewText value and start index.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
/**
 * Callback when input sometimes has info of previewText.
 *
 * @typedef { function } EditableTextOnChangeCallback
 * @param { string } value - Value of body text, without previewText value.
 * @param { PreviewText } [previewText] - info of previewText, contains previewText value and start index.
 * @param { TextChangeOptions } [options] - contains the selection range before and after the change, as well as the old content.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type EditableTextOnChangeCallback = (value: string, previewText?: PreviewText, options?: TextChangeOptions) => void;

/**
 * Define the text selection controller.
 *
 * @interface TextBaseController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface TextBaseController {
  /**
   * Set selection to select a range of content.
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
   * Close the select menu when menu is on.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  closeSelectionMenu(): void;

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
}

/**
 * Define the text extended editing controller.
 *
 * @extends TextBaseController
 * @interface TextEditControllerEx
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface TextEditControllerEx extends TextBaseController {
  /**
   * Judge whether is in editing state
   * 
   * @returns { boolean } - true means that the component is in editing state, false means is non in editing status
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
   * Set caret offset.
   *
   * @param { number } offset - caret offset.
   * @returns { boolean } - Return true if the caret offset was successfully set, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCaretOffset(offset: number): boolean;

  /**
   * Get caret offset from controller.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getCaretOffset(): number;

  /**
   * Get PreviewText.
   *
   * @returns { PreviewText } - Return the PreviewText.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getPreviewText?(): PreviewText;

  /**
   * Get PreviewText.
   *
   * @returns { PreviewText } - Return the PreviewText.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  getPreviewText(): PreviewText;
}

/**
 * The previewText.
 * @interface PreviewText
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface PreviewText {
  /**
   * Start offset of the previewText
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offset: number;

  /**
   * Value of the previewText.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  value: string;
}

/**
 * Define the StyledString controller.
 *
 * @interface StyledStringController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface StyledStringController {
  /**
   * Set the StyledString of the component.
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
   * Get the StyledString of the component.
   *
   * @returns { MutableStyledString }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getStyledString(): MutableStyledString;
}

/**
 * Define the StyledString changed listener.
 *
 * @interface StyledStringChangedListener
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface StyledStringChangedListener {
  /**
   * Called before text changed.
   *
   * @type { ?Callback<StyledStringChangeValue, boolean> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWillChange?: Callback<StyledStringChangeValue, boolean>;

  /**
   * Called after text changed.
   *
   * @type { ?OnDidChangeCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onDidChange?: OnDidChangeCallback;
}

/**
 * Define the StyledString changed value.
 *
 * @interface StyledStringChangeValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface StyledStringChangeValue {
  /**
   * Range of the content to be replaced.
   *
   * @type { TextRange }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  range: TextRange;

  /**
   * StyledString to replace.
   *
   * @type { StyledString }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  replacementString: StyledString;

  /**
   * Preview StyledString
   *
   * @type { ?StyledString }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  previewText?: StyledString;
}

/**
 * Define the LayoutManager for querying layout information.
 *
 * @interface LayoutManager
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface LayoutManager {
  /**
   * Get the line count.
   * 
   * @returns { number } The line count value returned to the caller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getLineCount(): number;

  /**
   * Get the glyph position at coordinate.
   * 
   * @param { number } x - the positionX of typography.
   * @param { number } y - the positionY of typography.
   * @returns { PositionWithAffinity } TextBlob object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getGlyphPositionAtCoordinate(x: number, y: number): PositionWithAffinity;

  /**
   * Get LineMetrics.
   * 
   * @param { number } lineNumber - the number of line.
   * @returns { LineMetrics } The line Metrics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getLineMetrics(lineNumber: number): LineMetrics;

  /**
   * Get the rects for range.
   * @param { TextRange } range - The range to set.
   * @param { RectWidthStyle } widthStyle - Width style to set.
   * @param { RectHeightStyle } heightStyle - Height style to set.
   * @returns { Array<TextBox> } The rects for range.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  getRectsForRange(range: TextRange, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>;
}

/**
 * Position and affinity.
 * 
 * @typedef PositionWithAffinity
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface PositionWithAffinity {
  /**
   * Position of text.
   * 
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  position: number;

  /**
   * Affinity of text.
   * 
   * @type { Affinity }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  affinity: Affinity;
}

/**
 * Define the Affinity type.
 * 
 * @typedef { import('../api/@ohos.graphics.text').default.Affinity } Affinity
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type Affinity = import('../api/@ohos.graphics.text').default.Affinity;

/**
 * Define the LineMetrics type.
 * 
 * @typedef { import('../api/@ohos.graphics.text').default.LineMetrics } LineMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type LineMetrics = import('../api/@ohos.graphics.text').default.LineMetrics; 

/**
 * Define the RectWidthStyle type.
 * 
 * @typedef { import('../api/@ohos.graphics.text').default.RectWidthStyle } RectWidthStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare type RectWidthStyle = import('../api/@ohos.graphics.text').default.RectWidthStyle;

/**
 * Define the RectHeightStyle type.
 * 
 * @typedef { import('../api/@ohos.graphics.text').default.RectHeightStyle } RectHeightStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare type RectHeightStyle = import('../api/@ohos.graphics.text').default.RectHeightStyle;

/**
 * Define the TextBox type.
 * 
 * @typedef { import('../api/@ohos.graphics.text').default.TextBox } TextBox
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare type TextBox = import('../api/@ohos.graphics.text').default.TextBox;

/**
 * Defines the cursor style
 *
 * @interface CaretStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the cursor style
 *
 * @interface CaretStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface CaretStyle {
  /**
   * Set the cursor width
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the cursor width
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2 
   */
  width?: Length,

  /**
   * Set the cursor color
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the cursor color
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  color?: ResourceColor,
}

/**
 * Defines the TextMenuItemId.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2 
 */
declare class TextMenuItemId {
  /**
   * Init a TextMenuItemId with id.
   *
   * @param { ResourceStr } id - The id of the TextMenuItemId.
   * @returns { TextMenuItemId } - Returns the TextMenuItemId object.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2 
   */
  static of(id: ResourceStr): TextMenuItemId;

  /**
   * Judge if two TextMenuItemId are equal.
   *
   * @param { TextMenuItemId } id - id TextMenuItemId.
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2 
   */
  equals(id: TextMenuItemId): boolean;

  /**
   * Indicates the TextMenuItemId to copy and delete the currently selected text.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2 
   */
  static readonly CUT: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId to copy the currently selected text to the clipboard.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2 
   */
  static readonly COPY: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId to copy the current contents of the clipboard into the text view.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2 
   */
  static readonly PASTE: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId to select all text in a text view.
   * 
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static readonly SELECT_ALL: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId for collaboration service menu items.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static readonly COLLABORATION_SERVICE: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId to recognize the text in the picture and input it into the text view.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static readonly CAMERA_INPUT: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId to help with text creation by invoking large models.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static readonly AI_WRITER: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId to translate the selected content.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static readonly TRANSLATE: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId to search the selected content.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static readonly SEARCH: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId to share the selected content.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static readonly SHARE: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId to open url.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  static readonly url: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId to open email.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  static readonly email: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId to call the phone number.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  static readonly phoneNumber: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId to open map.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  static readonly address: TextMenuItemId;

  /**
   * Indicates the TextMenuItemId to open calendar.
   *
   * @type { TextMenuItemId }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  static readonly dateTime: TextMenuItemId;
}

/**
 * TextMenuItem
 *
 * @interface TextMenuItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface TextMenuItem {
  /**
   * Customize what the menu displays.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  content: ResourceStr;
  /**
   * Customize the icon before the menu displays content.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  icon?: ResourceStr;
  /**
   * Distinguish clicked menu content by Id.
   *
   * @type { TextMenuItemId }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  id: TextMenuItemId;
  /**
   * Customize what the menu item shortcut displays.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  labelInfo?: ResourceStr;
}

/**
 * Callback before displaying the menu when the selection range changes.
 *
 * @typedef { function } OnPrepareMenuCallback
 * @param { Array<TextMenuItem> } menuItems - currently displayed menu items.
 * @returns { Array<TextMenuItem> } Return the menu items will displayed after operations.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
type OnPrepareMenuCallback = (menuItems: Array<TextMenuItem>) => Array<TextMenuItem>;

/**
 * Callback function when the selection menu create.
 *
 * @typedef { function } OnCreateMenuCallback
 * @param { Array<TextMenuItem> } menuItems - currently displayed menu items.
 * @returns { Array<TextMenuItem> } Return the menu items will displayed after operations.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
type OnCreateMenuCallback = (menuItems: Array<TextMenuItem>) => Array<TextMenuItem>;

/**
 * Invoke upon clicking an item, capable of intercepting the default system menu execution behavior.
 *
 * @typedef { function } OnMenuItemClickCallback
 * @param { TextMenuItem } menuItem - current default menu.
 * @param { TextRange } range - current selected range.
 * @returns { boolean } - Return True, the event is consumed, false otherwise.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
type OnMenuItemClickCallback = (menuItem: TextMenuItem, range: TextRange) => boolean

/**
 * EditMenuOptions
 *
 * @interface EditMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface EditMenuOptions {
  /**
   * Passes the default menu, invokes before every display to generate a menu for triggering click events.
   *
   * @param { Array<TextMenuItem> } menuItems - current default menu array.
   * @returns { Array<TextMenuItem> } - Return the menu after operations.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onCreateMenu(menuItems: Array<TextMenuItem>): Array<TextMenuItem>;
  /**
   * Invoke upon clicking an item, capable of intercepting the default system menu execution behavior.
   *
   * @param { TextMenuItem } menuItem - current default menu.
   * @param { TextRange } range - current selected range.
   * @returns { boolean } - Return True, the event is consumed, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onMenuItemClick(menuItem: TextMenuItem, range: TextRange): boolean;
  /**
   * Callback before displaying the menu when the selection range changes.
   *
   * @type { ?OnPrepareMenuCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onPrepareMenu?: OnPrepareMenuCallback;

  /**
   * Passes the default menu, invokes before every display to generate a menu for triggering click events.
   *
   * @type { OnCreateMenuCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onCreateMenu: OnCreateMenuCallback;

  /**
   * Invoke upon clicking an item, capable of intercepting the default system menu execution behavior.
   *
   * @type { OnMenuItemClickCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onMenuItemClick: OnMenuItemClickCallback;
}

/**
 * Defines the font decoration result.
 *
 * @interface DecorationStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface DecorationStyleResult {
  /**
   * Font decoration type.
   *
   * @type { TextDecorationType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type: TextDecorationType;

  /**
   * Font decoration color.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  color: ResourceColor;

  /**
   * The style value of the decoration property object.
   *
   * @type { ?TextDecorationStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  style?: TextDecorationStyle;

  /**
   * The thicknessScale value of the decoration property object.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  thicknessScale?: number;
}

/**
 * Defines the options of font.
 *
 * @interface FontSettingOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface FontSettingOptions {
  /**
    * Define whether VariableFontWeight is supported.
    *
    * @type { ?boolean }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
  enableVariableFontWeight?: boolean;
 }

 /**
 * The TextChangeOptions.
 * @interface TextChangeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface TextChangeOptions {
  /**
   * The selected area before the change.
   *
   * @type { TextRange }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  rangeBefore: TextRange;

  /**
   * The selected area after the change.
   *
   * @type { TextRange }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  rangeAfter: TextRange;

  /**
   * The content before the change.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  oldContent: string;

  /**
   * The info of PreviewText before the change.
   *
   * @type { PreviewText }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  oldPreviewText: PreviewText;
}

/**
 * Define the editableText Component changed value.
 *
 * @interface EditableTextChangeValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface EditableTextChangeValue {
  /**
   * Value of body text, without previewText value.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  content: string;

  /**
   * Info of previewText, contains previewText value and start index.
   *
   * @type { ?PreviewText }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  previewText?: PreviewText;

  /**
   * The TextChangeOptions.
   *
   * @type { TextChangeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  options?: TextChangeOptions;
}

 /**
  * Defines text menu show mode.
  *
  * @enum { number }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since arkts {'1.1':'16','1.2':'20'}
  * @arkts 1.1&1.2
  */
declare enum TextMenuShowMode {
  /**
   * Display the text selection menu in the current window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'16','1.2':'20'}
   * @arkts 1.1&1.2
   */
  DEFAULT = 0,

  /**
   * Prefer to display the text selection menu in a separate window
   * and continue to display it within the current window if a separate window is not supported
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'16','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PREFER_WINDOW = 1,
}

 /**
  * Defines text menu options.
  *
  * @interface TextMenuOptions
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since arkts {'1.1':'16','1.2':'20'}
  * @arkts 1.1&1.2
  */
declare interface TextMenuOptions {
  /**
   * Text menu show mode.
   *
   * @type { ?TextMenuShowMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'16','1.2':'20'}
   * @arkts 1.1&1.2
   */
  showMode?: TextMenuShowMode;
}
/**
 * Defines keyboard appearance.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum KeyboardAppearance {
  /**
   * Default appearance mode, don't adopt immersive styles
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NONE_IMMERSIVE = 0,

  /**
   * Immersive mode
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  IMMERSIVE = 1,

  /**
   * Light immersive style
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  LIGHT_IMMERSIVE = 2,

  /**
   * Dark immersive style
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  DARK_IMMERSIVE = 3,
}

/**
 * Defines shader style class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class ShaderStyle {
}

/**
 * Defines linear gradient class.
 *
 * @extends ShaderStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class LinearGradientStyle extends ShaderStyle {
  /**
   * The constructor.
   *
   * @param { LinearGradientOptions } options - The options of the gradient.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor(options: LinearGradientOptions);
  
  /**
   * The options of the gradient.
   * angle: Angle of linear gradient.
   * direction: Direction of Linear Gradient.
   * colors: Color description for gradients.
   * repeating: if the gradient colors with repeated coloring.
   *
   * @type { LinearGradientOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  options: LinearGradientOptions;
}

/**
 * Defines radial gradient class.
 *
 * @extends ShaderStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class RadialGradientStyle extends ShaderStyle {
  /**
   * The constructor.
   *
   * @param { RadialGradientOptions } options - The options of the gradient.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor(options: RadialGradientOptions);
  
  /**
   * The options of the gradient.
   * center: Center point of radial gradient
   * radius: Radius of Radial Gradient. value range [0, +∞)
   * colors: Color description for gradients
   * repeating: Refill. The default value is false
   *
   * @type { RadialGradientOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  options: RadialGradientOptions;
}

/**
 * Defines a shader with single color.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class ColorShaderStyle extends ShaderStyle {
  /**
   * The constructor.
   *
   * @param { ResourceColor } color - The color used by shader.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor(color: ResourceColor);
  
  /**
   * The color of the shader.
   *
   * @type { RadialGradientOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  color: ResourceColor;
}

/**
 * Defines the text content transition class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
declare class ContentTransition {}

/**
 * Defines the numeric text content transition class.
 *
 * @extends ContentTransition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
declare class NumericTextTransition extends ContentTransition {
  /**
   * constructor.
   *
   * @param { NumericTextTransitionOptions } [options] -  The options of numeric text transition.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  constructor(options?: NumericTextTransitionOptions);

  /**
   * The flip direction of numeric text transition.
   *
   * @type { ?FlipDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  flipDirection?: FlipDirection;

  /**
   * Define whether enable blur effect.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  enableBlur?: boolean;
}

/**
 * The options of numeric text transition.
 *
 * @interface NumericTextTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
declare interface NumericTextTransitionOptions {
  /**
   * Define the flip direction of numeric text transition.
   *
   * @type { ?FlipDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  flipDirection?: FlipDirection;

  /**
   * Define whether enable blur effect.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  enableBlur?: boolean;
}

/**
 * Defines the flip direction of numeric text transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
declare enum FlipDirection {
  /**
   * The flip direction is down.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  DOWN = 0,

  /**
   * The flip direction is up.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  UP = 1,
}

/**
 * Defines the line spacing options.
 * @interface LineSpacingOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare interface LineSpacingOptions {
  /**
   * Used to set whether it will only take effect between lines. 
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onlyBetweenLines?: boolean;
}

/**
 * Defines the reason for text changes.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
declare enum TextChangeReason {
  /**
   * Default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  UNKNOWN = 0,

  /**
   * Reason for input.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  INPUT = 1,

  /**
   * Reason for paste.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  PASTE = 2,

  /**
   * Reason for cut.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  CUT = 3,

  /**
   * Reason for drag.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  DRAG = 4,

  /**
   * Reason for auto fill.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  AUTO_FILL = 5,

  /**
   * Reason for ai write.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  AI_WRITE = 6,

  /**
   * Reason for redo.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  REDO = 7,

  /**
   * Reason for undo.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  UNDO = 8,

  /**
   * Reason for controller methods.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  CONTROLLER = 9,

  /**
   * Reason for accessibilty methods.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  ACCESSIBILITY = 10,

  /**
   * Reason for collarboration input.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  COLLABORATION = 11,
 
  /**
   * Reason for stylus input.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  STYLUS = 12
}

/**
 * Vertical Alignment of text.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare enum TextVerticalAlign {
  /**
   * Baseline alignment, the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  BASELINE = 0,

  /**
   * Bottom alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  BOTTOM = 1,

  /**
   * Center alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  CENTER = 2,

  /**
   * Top alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  TOP = 3,
}

/**
 * Defines the options of max lines.
 * @interface MaxLinesOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare interface MaxLinesOptions {
  /**
   * The mode of max lines.
   *
   * @type { ?MaxLinesMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  overflowMode?: MaxLinesMode;
}

/**
 * Defines maxlines mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare enum MaxLinesMode {
  /**
   * Default maxlines mode
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  CLIP = 0,

  /**
   * Scroll mode of max lines
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  SCROLL = 1,
}

/**
 * Keyboard Gradient mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 20
 */
declare enum KeyboardGradientMode {
  /**
   * Disable gradient mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20
   */
  NONE = 0,

  /**
   * Linear gradient mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20
   */
  LINEAR_GRADIENT = 1,
}

/**
 * Keyboard fluid light mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 20
 */
declare enum KeyboardFluidLightMode {
  /**
   * Disable fluid light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20
   */
  NONE = 0,

  /**
   * Background fluid light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20
   */
  BACKGROUND_FLUID_LIGHT = 1,
}

/**
 * Defines the keyboard appearance config.
 *
 * @interface KeyboardAppearanceConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 20
 */
declare interface KeyboardAppearanceConfig {
/**
  * Used to set keyboard gradient mode.
  *
  * @type { ?KeyboardGradientMode }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @systemapi
  * @since 20
  */
  gradientMode?: KeyboardGradientMode;

/**
  * Used to set keyboard fluid light mode..
  *
  * @type { ?KeyboardFluidLightMode }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @systemapi
  * @since 20
  */
  fluidLightMode?: KeyboardFluidLightMode;
}

/**
 * Defines the input method client.
 *
 * @interface IMEClient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare interface IMEClient {
  /**
   * The unique ID of this input component node.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  nodeId: number;
}

/**
 * Defines text layout options. Use this to set constraints for measure text.
 *
 * @interface TextLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
declare interface TextLayoutOptions {
  /**
   * Text display area of width.
   *
   * @type { ?LengthMetrics } constraintWidth
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  constraintWidth?: LengthMetrics;
}