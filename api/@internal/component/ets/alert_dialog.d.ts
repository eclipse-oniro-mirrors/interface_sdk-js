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

/**
 * The alignment of dialog,
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * The alignment of dialog,
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The alignment of dialog,
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum DialogAlignment {
  /**
   * Vertical top alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Vertical top alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Vertical top alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  Top,

  /**
   * Align vertically to the center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Align vertically to the center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Align vertically to the center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  Center,

  /**
   * Vertical bottom alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Vertical bottom alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Vertical bottom alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  Bottom,

  /**
   * Default alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Default alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Default alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  Default,

  /**
   * Align the upper left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Align the upper left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Align the upper left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  TopStart,

  /**
   * Align the upper right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Align the upper right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Align the upper right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  TopEnd,

  /**
   * Left center alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Left center alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Left center alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  CenterStart,

  /**
   * Right center alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Right center alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Right center alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  CenterEnd,

  /**
   * Align the lower left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Align the lower left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Align the lower left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  BottomStart,

  /**
   * Align the lower right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Align the lower right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Align the lower right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  BottomEnd,
}

/**
* The arrangement of buttons in dialog.
*
* @enum { number }
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @since 10
*/
/**
* The arrangement of buttons in dialog.
*
* @enum { number }
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @atomicservice
* @since 11
*/
declare enum DialogButtonDirection {
  /**
   * Two or fewer buttons are arranged horizontally,
   * and two or more buttons are arranged vertically.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Two or fewer buttons are arranged horizontally,
   * and two or more buttons are arranged vertically.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  AUTO = 0,

  /**
   * Buttons are arranged horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Buttons are arranged horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  HORIZONTAL = 1,

  /**
   * Buttons are arranged vertically.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Buttons are arranged vertically.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  VERTICAL = 2,
}

/**
 * Base button param.
 *
 * @interface AlertDialogButtonBaseOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface AlertDialogButtonBaseOptions {
  /**
   * Enable switch of button.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Enable switch of button.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Enable switch of button.
   * Anonymous Object Rectification.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  enabled?: boolean;

  /**
   * Default focus switch of button.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Default focus switch of button.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Default focus switch of button.
   * Anonymous Object Rectification.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  defaultFocus?: boolean;

  /**
   * Style of button.
   *
   * @type { ?DialogButtonStyle }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Style of button.
   *
   * @type { ?DialogButtonStyle }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Style of button.
   * Anonymous Object Rectification.
   *
   * @type { ?DialogButtonStyle }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  style?: DialogButtonStyle;

  /**
   * Text content of button.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Text content of button.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Text content of button.
   * Anonymous Object Rectification.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  value: ResourceStr;

  /**
   * Text color of button.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Text color of button.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Text color of button.
   * Anonymous Object Rectification.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  fontColor?: ResourceColor;

  /**
   * Background color of button.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Background color of button.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Background color of button.
   * Anonymous Object Rectification.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  backgroundColor?: ResourceColor;

  /**
   * Method executed by the callback.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Method executed by the callback.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Method executed by the callback.
   * Anonymous Object Rectification.
   *
   * @type { VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  action: VoidCallback;
}

/**
 * Base button param used for AlertDialogParamWithOptions.
 *
 * @extends AlertDialogButtonBaseOptions
 * @interface AlertDialogButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Base button param used for AlertDialogParamWithOptions.
 *
 * @extends AlertDialogButtonBaseOptions
 * @interface AlertDialogButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
/**
 * Button param used for AlertDialogParamWithOptions.
 *
 * @extends AlertDialogButtonBaseOptions
 * @interface AlertDialogButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface AlertDialogButtonOptions extends AlertDialogButtonBaseOptions {
  /**
   * Define whether the button responds to Enter/Space key by default.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Define whether the button responds to Enter/Space key by default.
   * Anonymous Object Rectification.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  primary?: boolean;
}

/**
 * Defines TextStyle in the AlertDialog.
 *
 * @interface TextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface TextStyle {
  /**
   * Set the word break type.
   *
   * @type { ?WordBreak }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  wordBreak?: WordBreak;
}

/**
 * Import the LevelOrder type from promptAction.
 *
 * @typedef { import('../api/@ohos.promptAction').LevelOrder } LevelOrder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare type LevelOrder = import('../api/@ohos.promptAction').LevelOrder;

/**
 * Base param used for AlertDialog.show method.
 *
 * @interface AlertDialogParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Base param used for AlertDialog.show method.
 *
 * @interface AlertDialogParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Base param used for AlertDialog.show method.
 *
 * @interface AlertDialogParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface AlertDialogParam {
  /**
   * Title Properties
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Title Properties
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Title Properties
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  title?: ResourceStr;
  
  /**
   * Subtitle Properties
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Subtitle Properties
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  subtitle?: ResourceStr;

  /**
   * message Properties
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * message Properties
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * message Properties
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  message: ResourceStr;

  /**
   * Allows users to click the mask layer to exit.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Allows users to click the mask layer to exit.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Allows users to click the mask layer to exit.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  autoCancel?: boolean;

  /**
   * Execute Cancel Function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Execute Cancel Function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Execute Cancel Function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Execute Cancel Function.
   * Anonymous Object Rectification.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  cancel?: VoidCallback;

  /**
   * Alignment in the vertical direction.
   *
   * @type { ?DialogAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Alignment in the vertical direction.
   *
   * @type { ?DialogAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Alignment in the vertical direction.
   *
   * @type { ?DialogAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the pop-up window relative to the alignment position.
   *
   * @type { ?Offset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Offset of the pop-up window relative to the alignment position.
   *
   * @type { ?Offset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Offset of the pop-up window relative to the alignment position.
   *
   * @type { ?Offset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  offset?: Offset;

  /**
   * Grid count of dialog.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Grid count of dialog.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Grid count of dialog.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  gridCount?: number;

  /**
   * Mask Region of dialog. The size cannot exceed the main window.
   *
   * @type { ?Rectangle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Mask Region of dialog. The size cannot exceed the main window.
   *
   * @type { ?Rectangle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  maskRect?: Rectangle;
  
  /**
   * Whether to display in the sub window.
   * 
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Whether to display in the sub window.
   * 
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  showInSubWindow?: boolean;

  /**
   * Whether it is a modal dialog
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Whether it is a modal dialog
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  isModal?: boolean;

  /**
   * Defines the alertDialog's background color
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the alertDialog's background color
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  backgroundColor?: ResourceColor;

  /**
   * Defines the alertDialog's background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the alertDialog's background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Defines the alertDialog's background blur style with options
   *
   * @type { ?BackgroundBlurStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Defines the alertDialog's background effect with options
   *
   * @type { ?BackgroundEffectOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Callback function when the dialog interactive dismiss
   *
   * @type { ?Callback<DismissDialogAction> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onWillDismiss?: Callback<DismissDialogAction>;

  /**
   * Transition parameters of opening/closing AlertDialog.
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  transition?: TransitionEffect;

  /**
   * Defines the alertDialog's corner radius.
   *
   * @type { ?(Dimension | BorderRadiuses | LocalizedBorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  cornerRadius?: Dimension | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * Defines the alertDialog's width.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  width?: Dimension;

  /**
   * Defines the alertDialog's height.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  height?: Dimension;

  /**
   * Defines the alertDialog's border width.
   *
   * @type { ?(Dimension | EdgeWidths | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;

  /**
   * Defines the alertDialog's border color.
   *
   * @type { ?(ResourceColor | EdgeColors | LocalizedEdgeColors) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;

  /**
   * Defines the alertDialog's border style.
   *
   * @type { ?(BorderStyle | EdgeStyles) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  borderStyle?: BorderStyle | EdgeStyles;

  /**
   * Defines the alertDialog's shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Set the alertDialog's textStyle.
   *
   * @type { ?TextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  textStyle?: TextStyle;

  /**
   * Defines whether to respond to the hover mode.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  enableHoverMode?: boolean;

  /**
   * Defines the alertDialog's display area in hover mode.
   *
   * @type { ?HoverModeAreaType }
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  hoverModeArea?: HoverModeAreaType;

  /**
   * Callback function when the dialog appears.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  onDidAppear?: Callback<void>;

  /**
   * Callback function when the dialog disappears.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  onDidDisappear?: Callback<void>;

  /**
   * Callback function before the dialog openAnimation starts.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  onWillAppear?: Callback<void>;

  /**
   * Callback function before the dialog closeAnimation starts.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  onWillDisappear?: Callback<void>;

  /**
   * Determine the display level of the dialog.
   *
   * @type { ?LevelMode }
   * @default LevelMode.OVERLAY
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  levelMode?: LevelMode;

  /**
   * The uniqueId of any node in the router or navigation page.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  levelUniqueId?: number;

  /**
   * Determine the immersive mode of the dialog.
   *
   * @type { ?ImmersiveMode }
   * @default ImmersiveMode.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  immersiveMode?: ImmersiveMode;

  /**
   * Determine the display order of the dialog.
   *
   * @type { ?LevelOrder }
   * @default The value returns by LevelOrder.clamp(0)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  levelOrder?: LevelOrder;
}

/**
 * Defines the AlertDialog with confirm button.
 *
 * @extends AlertDialogParam
 * @interface AlertDialogParamWithConfirm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the AlertDialog with confirm button.
 *
 * @extends AlertDialogParam
 * @interface AlertDialogParamWithConfirm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the AlertDialog with confirm button.
 *
 * @extends AlertDialogParam
 * @interface AlertDialogParamWithConfirm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface AlertDialogParamWithConfirm extends AlertDialogParam {
  /**
   * Invoke the commit function.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Invoke the commit function.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Invoke the commit function.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Invoke the commit function.
   * Anonymous Object Rectification.
   *
   * @type { ?AlertDialogButtonBaseOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  confirm?: AlertDialogButtonBaseOptions;
}

/**
 * Component dialog dismiss action.
 *
 * @interface DismissDialogAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface DismissDialogAction {
  /**
   * Defines dialog dismiss function.
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  dismiss: Callback<void>;
  
  /**
   * Dismiss reason type.
   *
   * @type { DismissReason }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  reason: DismissReason;
}

/**
 * Defines the dialog param with buttons.
 *
 * @extends AlertDialogParam
 * @interface AlertDialogParamWithButtons
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the dialog param with buttons.
 *
 * @extends AlertDialogParam
 * @interface AlertDialogParamWithButtons
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the dialog param with buttons.
 *
 * @extends AlertDialogParam
 * @interface AlertDialogParamWithButtons
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface AlertDialogParamWithButtons extends AlertDialogParam {
  /**
   * First button.
   *
   * @type { object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * First button.
   *
   * @type { object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * First button.
   *
   * @type { object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * First button.
   * Anonymous Object Rectification.
   *
   * @type { AlertDialogButtonBaseOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  primaryButton: AlertDialogButtonBaseOptions;

  /**
   * Second button.
   *
   * @type { object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Second button.
   *
   * @type { object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Second button.
   *
   * @type { object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Second button.
   * Anonymous Object Rectification.
   *
   * @type { AlertDialogButtonBaseOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  secondaryButton: AlertDialogButtonBaseOptions;
}

/**
 * Defines the dialog param with options.
 *
 * @extends AlertDialogParam
 * @interface AlertDialogParamWithOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the dialog param with options.
 *
 * @extends AlertDialogParam
 * @interface AlertDialogParamWithOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface AlertDialogParamWithOptions extends AlertDialogParam {
  /**
   * The array of buttons.
   * @type { Array<AlertDialogButtonOptions> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The array of buttons.
   * @type { Array<AlertDialogButtonOptions> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  buttons: Array<AlertDialogButtonOptions>;

  /**
   * The arrangement of buttons.
   * @type { ?DialogButtonDirection }
   * @default DialogButtonDirection.AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The arrangement of buttons.
   * @type { ?DialogButtonDirection }
   * @default DialogButtonDirection.AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  buttonDirection?: DialogButtonDirection;
}

/**
 * Defines AlertDialog which uses show method to show alert dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines AlertDialog which uses show method to show alert dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines AlertDialog which uses show method to show alert dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class AlertDialog {
  /**
   * Invoking method display.
   *
   * @param { AlertDialogParamWithConfirm | AlertDialogParamWithButtons } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Invoking method display.
   *
   * @param { AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions} value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Invoking method display.
   *
   * @param { AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions} value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIContext#showAlertDialog
   */
  static show(value: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions);
}

