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

/*** if arkts 1.1 */
import { AsyncCallback } from './@ohos.base';
/*** endif */

/*** if arkts 1.2 */
import { ResourceColor, Offset, Dimension, EdgeStyles, EdgeColors,EdgeWidths, BorderRadiuses } from './arkui/component/units';
import { AsyncCallback, Callback } from './@ohos.base';
import { BlurStyle, ShadowOptions, ShadowStyle, HoverModeAreaType, Rectangle, TransitionEffect, KeyboardAvoidMode, DismissReason,
  BackgroundBlurStyleOptions, BackgroundEffectOptions } from './arkui/component/common';
import { CustomBuilder } from './arkui/component/builder';
import { DialogAlignment } from './arkui/component/alertDialog';
import { DismissDialogAction } from './arkui/component/actionSheet';
import { BorderStyle,Alignment } from './arkui/component/enums';
import { Resource } from './global/resource';
import { LengthMetrics } from './arkui/Graphics';
/*** endif */

/**
 * Define the display mode of all kind of dialog
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
export enum LevelMode {
  /**
   * Display above all page levels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  OVERLAY = 0,

  /**
   * Display within the current page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  EMBEDDED = 1,
}

/**
 * Define the immersive mode of all kind of dialog
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
export enum ImmersiveMode {
  /**
   * Mask covering the parent node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  DEFAULT = 0,

  /**
   * Mask extend safe area includes status bar and navigation bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  EXTEND = 1,
}

/**
 * Defines level order.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare class LevelOrder {
  /**
   * Generate valid level order.
   *
   * @param { number } order - Clamp order with mininum number -100000 and maximum number 100000.
   * @returns { LevelOrder } the order object.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static clamp(order: number): LevelOrder;

  /**
   * Get the order from LevelOrder object.
   *
   * @returns { number } the order number.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getOrder(): number;
}

/**
 * @namespace promptAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * @namespace promptAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * @namespace promptAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace promptAction {
  /**
   * @typedef ShowToastOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * @typedef ShowToastOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * @typedef ShowToastOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface ShowToastOptions {

    /**
     * Text to display.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Text to display.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Text to display.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    message: string | Resource;

    /**
     * Duration of toast dialog box. The default value is 1500.
     * The recommended value ranges from 1500ms to 10000ms.
     * NOTE: A value less than 1500 is automatically changed to 1500. The maximum value is 10000ms.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Duration of toast dialog box. The default value is 1500.
     * The recommended value ranges from 1500ms to 10000ms.
     * NOTE: A value less than 1500 is automatically changed to 1500. The maximum value is 10000ms.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Duration of toast dialog box. The default value is 1500.
     * The recommended value ranges from 1500ms to 10000ms.
     * NOTE: A value less than 1500 is automatically changed to 1500. The maximum value is 10000ms.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    duration?: number;

    /**
     * The distance between toast dialog box and the bottom of screen.
     *
     * @type { ?(string | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The distance between toast dialog box and the bottom of screen.
     *
     * @type { ?(string | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The distance between toast dialog box and the bottom of screen.
     *
     * @type { ?(string | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    bottom?: string | number;

    /**
     * Determine the show mode of the toast.
     *
     * @type { ?ToastShowMode }
     * @default ToastShowMode.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Determine the show mode of the toast.
     *
     * @type { ?ToastShowMode }
     * @default ToastShowMode.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    showMode?: ToastShowMode;
    /**
     * Defines the toast alignment of the screen.
     *
     * @type { ?Alignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    alignment?: Alignment;
    /**
     * Defines the toast offset.
     *
     * @type { ?Offset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    offset?: Offset;
    /**
     * Background color of toast.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    backgroundColor?: ResourceColor;
    /**
     * Text color of toast.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    textColor?: ResourceColor;
    /**
     * Background blur Style of toast.
     *
     * @type { ?BlurStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Shadow of toast.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    shadow?: ShadowOptions | ShadowStyle;

    /**
     * Define whether to respond to the hover mode.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    enableHoverMode?: boolean;
  
    /**
     * Defines the toast's display area in hover mode.
     *
     * @type { ?HoverModeAreaType }
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    hoverModeArea?: HoverModeAreaType;
  }

  /**
   * Enum for the toast showMode.
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Enum for the toast showMode.
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum ToastShowMode {
    /**
     * Toast shows in app.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Toast shows in app.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DEFAULT = 0,

    /**
     * Toast shows at the top.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
      */
    /**
     * Toast shows at the top.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TOP_MOST = 1,

    /**
     * Toast shows in SYSTEM_TOAST window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SYSTEM_TOP_MOST = 2
  }

  /**
   * @typedef Button
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * @typedef Button
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * @typedef Button
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface Button {

    /**
     * The text displayed in the button.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The text displayed in the button.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The text displayed in the button.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    text: string | Resource;

    /**
     * The foreground color of button.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The foreground color of button.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The foreground color of button.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    color: string | Resource;
    /**
     * Define whether the button responds to Enter/Space key by default.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    primary?: boolean;
  }

  /**
   * Defines the one-button array.
   *
   * @typedef { [Button] } PromptActionSingleButton
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  export type PromptActionSingleButton = [Button];

  /**
   * Defines the two-buttons array.
   *
   * @typedef { [Button, Button | undefined] } PromptActionDoubleButtons
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  export type PromptActionDoubleButtons = [Button, Button | undefined];

  /**
   * Defines the three-buttons array.
   *
   * @typedef { [Button, Button | undefined, Button | undefined] } PromptActionTripleButtons
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  export type PromptActionTripleButtons = [Button, Button | undefined, Button | undefined];

  /**
   * Defines the four-buttons array.
   *
   * @typedef { [Button, Button | undefined, Button | undefined, Button | undefined] } PromptActionQuadrupleButtons
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  export type PromptActionQuadrupleButtons = [Button, Button | undefined, Button | undefined, Button | undefined];

  /**
   * Defines the five-buttons array.
   *
   * @typedef { [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined] } PromptActionQuintupleButtons
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  export type PromptActionQuintupleButtons = [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined];

  /**
   * Defines the six-buttons array.
   *
   * @typedef { [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined, Button | undefined] } PromptActionSextupleButtons
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  export type PromptActionSextupleButtons = [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined, Button | undefined];

  /**
   * Defines success response of show dialog.
   *
   * @typedef ShowDialogSuccessResponse
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * @typedef ShowDialogSuccessResponse
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * @typedef ShowDialogSuccessResponse
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface ShowDialogSuccessResponse {

    /**
     * Index of the selected button, starting from 0.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Index of the selected button, starting from 0.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Index of the selected button, starting from 0.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    index: number;
  }

  /**
   * @typedef ShowDialogOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * @typedef ShowDialogOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * @typedef ShowDialogOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface ShowDialogOptions {

    /**
     * Title of the text to display.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Title of the text to display.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Title of the text to display.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    title?: string | Resource;

    /**
     * Text body.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Text body.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Text body.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    message?: string | Resource;

    /**
     * Array of buttons in the dialog box.
     * The array structure is {text:'button', color: '#666666'}.
     * One to three buttons are supported.
     * The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.
     *
     * @type { ?Array<Button> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Array of buttons in the dialog box.
     * The array structure is {text:'button', color: '#666666'}.
     * More than one buttons are supported.
     *
     * @type { ?Array<Button> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Array of buttons in the dialog box.
     * The array structure is {text:'button', color: '#666666'}.
     * More than one buttons are supported.
     *
     * @type { ?Array<Button> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    buttons?: Array<Button>;

    /**
     * Mask Region of dialog. The size can't exceed the main window.
     *
     * @type { ?Rectangle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Mask Region of dialog. The size can't exceed the main window.
     *
     * @type { ?Rectangle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    maskRect?: Rectangle;

    /**
     * Defines the dialog alignment of the screen.
     *
     * @type { ?DialogAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the dialog alignment of the screen.
     *
     * @type { ?DialogAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    alignment?: DialogAlignment;

    /**
     * Defines the dialog offset.
     *
     * @type { ?Offset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the dialog offset.
     *
     * @type { ?Offset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    offset?: Offset;

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
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
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
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    isModal?: boolean;

    /**
     * Defines the dialog's background color.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    backgroundColor?: ResourceColor;

    /**
     * Defines the dialog's background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    backgroundBlurStyle?: BlurStyle;

    /**
     * Defines the dialog's background blur style with options
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'19','1.2':'20'}
     * @arkts 1.1&1.2
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

    /**
     * Defines the dialog's background effect with options
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'19','1.2':'20'}
     * @arkts 1.1&1.2
     */
    backgroundEffect?: BackgroundEffectOptions;

    /**
     * Defines the dialog's shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    shadow?: ShadowOptions | ShadowStyle;

    /**
     * Defines whether to respond to the hover mode.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    enableHoverMode?: boolean;

    /**
     * Defines the dialog's display area in hover mode.
     *
     * @type { ?HoverModeAreaType }
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    hoverModeArea?: HoverModeAreaType;

    /**
     * Callback function when the dialog appears.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'19','1.2':'20'}
     * @arkts 1.1&1.2
     */
    onDidAppear?: Callback<void>;

    /**
     * Callback function when the dialog disappears.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'19','1.2':'20'}
     * @arkts 1.1&1.2
     */
    onDidDisappear?: Callback<void>;

    /**
     * Callback function before the dialog openAnimation starts.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'19','1.2':'20'}
     * @arkts 1.1&1.2
     */
    onWillAppear?: Callback<void>;

    /**
     * Callback function before the dialog closeAnimation starts.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'19','1.2':'20'}
     * @arkts 1.1&1.2
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
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    levelMode?: LevelMode;

    /**
     * The uniqueId of any node in the router or navigation page.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
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
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
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
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    levelOrder?: LevelOrder;
  }

  /**
   * Enum for state.
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  enum CommonState {
    /**
     * Indicates it is uninitialized.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    UNINITIALIZED = 0,

    /**
     * Indicates it is initialized.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    INITIALIZED = 1,

    /**
     * Indicates it is appearig.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    APPEARING = 2,

    /**
     * Indicates it is appeared.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    APPEARED = 3,

    /**
     * Indicates it is disappearing.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DISAPPEARING = 4,

    /**
     * Indicates it is disappeared.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DISAPPEARED = 5,
  }

  /**
   * The class used to control common dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export class CommonController {
    /**
     * The constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor();

    /**
     * Close the corresponding common dialog.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    close(): void;

    /**
     * Get the state.
     *
     * @returns { CommonState } return the state.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getState(): CommonState;
  }

  /**
   * The class used to control dialog.
   *
   * @extends CommonController
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export class DialogController extends CommonController {}

  /**
   * Dialog base options
   *
   * @typedef BaseDialogOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Dialog base options
   *
   * @typedef BaseDialogOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface BaseDialogOptions {
    /**
     * Mask Region of dialog. The size can't exceed the main window.
     *
     * @type { ?Rectangle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Mask Region of dialog. The size can't exceed the main window.
     *
     * @type { ?Rectangle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    maskRect?: Rectangle;

    /**
     * Defines the dialog alignment of the screen.
     *
     * @type { ?DialogAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the dialog alignment of the screen.
     *
     * @type { ?DialogAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    alignment?: DialogAlignment;

    /**
     * Defines the dialog offset.
     *
     * @type { ?Offset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the dialog offset.
     *
     * @type { ?Offset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    offset?: Offset;

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
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
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
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    isModal?: boolean;

    /**
     * Allows users to click the mask layer to exit.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    autoCancel?: boolean;

    /**
     * Transition parameters of opening/closing custom dialog.
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    transition?: TransitionEffect;

    /**
     * Dialog transition parameters of opening/closing custom dialog.
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'19','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dialogTransition?: TransitionEffect;

    /**
     * Mask transition parameters of opening/closing custom dialog.
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'19','1.2':'20'}
     * @arkts 1.1&1.2
     */
    maskTransition?: TransitionEffect;
    
    /**
     * Defines custom dialog maskColor
     * 
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    maskColor?: ResourceColor;
    
    /**
    * Callback function when the CustomDialog interactive dismiss.
    *
    * @type { ?Callback<DismissDialogAction> }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
    onWillDismiss?: Callback<DismissDialogAction>;

    /**
     * Callback function when the dialog appears.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    onDidAppear?: () => void;

    /**
     * Callback function when the dialog disappears.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    onDidDisappear?: () => void;

    /**
     * Callback function before the dialog openAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    onWillAppear?: () => void;

    /**
     * Callback function before the dialog closeAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    onWillDisappear?: () => void;

    /**
     * Defines the customDialog's keyboard avoid mode
     *
     * @type { ?KeyboardAvoidMode }
     * @default KeyboardAvoidMode.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    keyboardAvoidMode?: KeyboardAvoidMode;

    /**
     * Defines whether to respond to the hover mode.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    enableHoverMode?: boolean;

    /**
     * Defines the dialog's display area in hover mode.
     *
     * @type { ?HoverModeAreaType }
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    hoverModeArea?: HoverModeAreaType;

    /**
     * Defines the customDialog's background blur style with options
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'19','1.2':'20'}
     * @arkts 1.1&1.2
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

    /**
     * Defines the customDialog's background effect with options
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'19','1.2':'20'}
     * @arkts 1.1&1.2
     */
    backgroundEffect?: BackgroundEffectOptions;

    /**
     * Defines the distance between the customDialog and system keyboard.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    keyboardAvoidDistance?: LengthMetrics;

    /**
     * Determine the display level of the dialog.
     *
     * @type { ?LevelMode }
     * @default LevelMode.OVERLAY
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    levelMode?: LevelMode;

    /**
     * The uniqueId of any node in the router or navigation page.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
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
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
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
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    levelOrder?: LevelOrder;

    /**
     * Specifies whether to get focus when the custom dialog is displayed.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'19','1.2':'20'}
     * @arkts 1.1&1.2
     */
    focusable?: boolean;
  }

  /**
   * Dialog's custom content options
   *
   * @extends BaseDialogOptions
   * @interface CustomDialogOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Dialog's custom content options
   *
   * @extends BaseDialogOptions
   * @interface CustomDialogOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface CustomDialogOptions extends BaseDialogOptions {
    /**
     * Allow developer custom dialog's content.
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Allow developer custom dialog's content.
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    builder: CustomBuilder;

    /**
     * Defines the custom dialog's background color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    backgroundColor?: ResourceColor;

    /**
     * Defines the custom dialog's corner radius.
     *
     * @type { ?(Dimension | BorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    cornerRadius?: Dimension | BorderRadiuses;

    /**
     * Defines the custom dialog's width.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    width?: Dimension;

    /**
     * Defines the custom dialog's height.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    height?: Dimension;

    /**
     * Defines the custom dialog's border width.
     *
     * @type { ?(Dimension | EdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    borderWidth?: Dimension | EdgeWidths;

    /**
     * Defines the custom dialog's border color.
     *
     * @type { ?(ResourceColor | EdgeColors) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    borderColor?: ResourceColor | EdgeColors;

    /**
     * Defines the custom dialog's border style.
     *
     * @type { ?(BorderStyle | EdgeStyles) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    borderStyle?: BorderStyle | EdgeStyles;

    /**
     * Defines the custom dialog's shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    shadow?: ShadowOptions | ShadowStyle;

    /**
     * Defines the customDialog's background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    backgroundBlurStyle?: BlurStyle;
  }

  /**
   * Corner radius type of DialogOptions.
   *
   * @typedef { Dimension | BorderRadiuses } DialogOptionsCornerRadius
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export type DialogOptionsCornerRadius = Dimension | BorderRadiuses;

  /**
   * Border width type of DialogOptions.
   *
   * @typedef { Dimension | EdgeWidths } DialogOptionsBorderWidth
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export type DialogOptionsBorderWidth = Dimension | EdgeWidths;

  /**
   * Border color type of DialogOptions.
   *
   * @typedef { ResourceColor | EdgeColors } DialogOptionsBorderColor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export type DialogOptionsBorderColor = ResourceColor | EdgeColors;

  /**
   * Border style type of DialogOptions.
   *
   * @typedef { BorderStyle | EdgeStyles } DialogOptionsBorderStyle
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export type DialogOptionsBorderStyle = BorderStyle | EdgeStyles;

  /**
   * Shadow type of DialogOptions.
   *
   * @typedef { ShadowOptions | ShadowStyle } DialogOptionsShadow
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export type DialogOptionsShadow = ShadowOptions | ShadowStyle;

  /**
   * Dialog options
   *
   * @extends BaseDialogOptions
   * @typedef DialogOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface DialogOptions extends BaseDialogOptions {
    /**
     * Defines the dialog's background color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    backgroundColor?: ResourceColor;

    /**
     * Defines the dialog's corner radius.
     *
     * @type { ?DialogOptionsCornerRadius }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    cornerRadius?: DialogOptionsCornerRadius;

    /**
     * Defines the dialog's width.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    width?: Dimension;

    /**
     * Defines the dialog's height.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    height?: Dimension;

    /**
     * Defines the dialog's border width.
     *
     * @type { ?DialogOptionsBorderWidth }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    borderWidth?: DialogOptionsBorderWidth;

    /**
     * Defines the dialog's border color.
     *
     * @type { ?DialogOptionsBorderColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    borderColor?: DialogOptionsBorderColor;

    /**
     * Defines the dialog's border style.
     *
     * @type { ?DialogOptionsBorderStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    borderStyle?: DialogOptionsBorderStyle;

    /**
     * Defines the dialog's shadow.
     *
     * @type { ?DialogOptionsShadow }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    shadow?: DialogOptionsShadow;

    /**
     * Defines the dialog's background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    backgroundBlurStyle?: BlurStyle;
  }

  /**
   * @typedef ActionMenuSuccessResponse
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * @typedef ActionMenuSuccessResponse
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * @typedef ActionMenuSuccessResponse
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface ActionMenuSuccessResponse {
    /**
     * Index of the selected button, starting from 0.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Index of the selected button, starting from 0.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Index of the selected button, starting from 0.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    index: number;
  }

  /**
   * @typedef ActionMenuOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * @typedef ActionMenuOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * @typedef ActionMenuOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface ActionMenuOptions {
    /**
     * Title of the text to display.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Title of the text to display.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Title of the text to display.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    title?: string | Resource;

    /**
     * Array of buttons in the dialog box.
     * The array structure is {text:'button', color: '#666666'}.
     * One to six buttons are supported.
     *
     * @type { [Button, Button?, Button?, Button?, Button?, Button?] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Array of buttons in the dialog box.
     * The array structure is {text:'button', color: '#666666'}.
     * One to six buttons are supported.
     *
     * @type { [Button, Button?, Button?, Button?, Button?, Button?] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Array of buttons in the dialog box.
     * The array structure is {text:'button', color: '#666666'}.
     * One to six buttons are supported.
     *
     * @type { [Button, Button?, Button?, Button?, Button?, Button?] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    buttons: [Button, Button?, Button?, Button?, Button?, Button?];

    /**
     * Array of buttons in the dialog box.
     * The array structure is {text:'button', color: '#666666'}.
     * One to six buttons are supported.
     *
     * @type { PromptActionSingleButton | PromptActionDoubleButtons | PromptActionTripleButtons | PromptActionQuadrupleButtons | PromptActionQuintupleButtons | PromptActionSextupleButtons }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     * @arkts 1.2
     */
    buttons: PromptActionSingleButton | PromptActionDoubleButtons | PromptActionTripleButtons | PromptActionQuadrupleButtons | PromptActionQuintupleButtons | PromptActionSextupleButtons;

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
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
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
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    isModal?: boolean;
    
    /**
     * Determine the display level of the dialog.
     *
     * @type { ?LevelMode }
     * @default LevelMode.OVERLAY
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    levelMode?: LevelMode;

    /**
     * The uniqueId of any node in the router or navigation page.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
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
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    immersiveMode?: ImmersiveMode;

    /**
     * Callback function when the menu appears.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDidAppear?: Callback<void>;

    /**
     * Callback function when the menu disappears.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDidDisappear?: Callback<void>;

    /**
     * Callback function before the menu openAnimation starts.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillAppear?: Callback<void>;

    /**
     * Callback function before the menu closeAnimation starts.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillDisappear?: Callback<void>;
  }

  /**
   * Displays the notification text.
   *
   * @param { ShowToastOptions } options - Options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Displays the notification text.
   *
   * @param { ShowToastOptions } options - Options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Displays the notification text.
   *
   * @param { ShowToastOptions } options - Options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.PromptAction#showToast
   */
  function showToast(options: ShowToastOptions): void;

  /**
   * Displays the notification text.
   *
   * @param { ShowToastOptions } options - Options.
   * @returns { Promise<number> } return the toast id that will be used by closeToast.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export function openToast(options: ShowToastOptions): Promise<number>;

  /**
   * Close the notification text.
   *
   * @param { number } toastId - the toast id that returned by openToast.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103401 - Cannot find the toast.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export function closeToast(toastId: number): void;

  /**
   * Displays the dialog box.
   *
   * @param { ShowDialogOptions } options - Options.
   * @param { AsyncCallback<ShowDialogSuccessResponse> } callback - the callback of showDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Displays the dialog box.
   *
   * @param { ShowDialogOptions } options - Options.
   * @param { AsyncCallback<ShowDialogSuccessResponse> } callback - the callback of showDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Displays the dialog box.
   *
   * @param { ShowDialogOptions } options - Options.
   * @param { AsyncCallback<ShowDialogSuccessResponse> } callback - the callback of showDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.PromptAction#showDialog
   */
  function showDialog(options: ShowDialogOptions, callback: AsyncCallback<ShowDialogSuccessResponse>): void;

  /**
   * Displays the dialog box.
   *
   * @param { ShowDialogOptions } options - Options.
   * @returns { Promise<ShowDialogSuccessResponse> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Displays the dialog box.
   *
   * @param { ShowDialogOptions } options - Options.
   * @returns { Promise<ShowDialogSuccessResponse> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Displays the dialog box.
   *
   * @param { ShowDialogOptions } options - Options.
   * @returns { Promise<ShowDialogSuccessResponse> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.PromptAction#showDialog
   */
  function showDialog(options: ShowDialogOptions): Promise<ShowDialogSuccessResponse>;

  /**
   * Open the custom dialog.
   *
   * @param { CustomDialogOptions } options - Options.
   * @returns { Promise<number> } return the dialog id that will be used by closeCustomDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Open the custom dialog.
   *
   * @param { CustomDialogOptions } options - Options.
   * @returns { Promise<number> } return the dialog id that will be used by closeCustomDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.PromptAction#openCustomDialog
   */
  function openCustomDialog(options: CustomDialogOptions): Promise<number>;

  /**
   * Close the custom dialog.
   *
   * @param { number } dialogId - the dialog id that returned by openCustomDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Close the custom dialog.
   *
   * @param { number } dialogId - the dialog id that returned by openCustomDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.PromptAction#closeCustomDialog
   */
  function closeCustomDialog(dialogId: number): void;

  /**
   * Displays the menu.
   *
   * @param { ActionMenuOptions } options - Options.
   * @param { AsyncCallback<ActionMenuSuccessResponse> } callback - the callback of showActionMenu.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Displays the menu.
   *
   * @param { ActionMenuOptions } options - Options.
   * @param { AsyncCallback<ActionMenuSuccessResponse> } callback - the callback of showActionMenu.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Displays the menu.
   *
   * @param { ActionMenuOptions } options - Options.
   * @param { AsyncCallback<ActionMenuSuccessResponse> } callback - the callback of showActionMenu.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.PromptAction#showActionMenu
   */
  function showActionMenu(options: ActionMenuOptions, callback: AsyncCallback<ActionMenuSuccessResponse>): void;

  /**
   * Displays the dialog box.
   *
   * @param { ActionMenuOptions } options - Options.
   * @returns { Promise<ActionMenuSuccessResponse> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Displays the dialog box.
   *
   * @param { ActionMenuOptions } options - Options.
   * @returns { Promise<ActionMenuSuccessResponse> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Displays the dialog box.
   *
   * @param { ActionMenuOptions } options - Options.
   * @returns { Promise<ActionMenuSuccessResponse> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.PromptAction#showActionMenu
   */
  function showActionMenu(options: ActionMenuOptions): Promise<ActionMenuSuccessResponse>;
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
export declare interface DismissDialogAction {
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

export default promptAction;
