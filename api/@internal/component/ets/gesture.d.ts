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
 * Enumerates the pan directions. Unlike **SwipeDirection**, **PanDirection** has no angular restrictions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum PanDirection {
  /**
   * Panning disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None,

  /**
   * Horizontal direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Horizontal,

  /**
   * Leftward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Left,

  /**
   * Rightward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Right,

  /**
   * Vertical direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Vertical,

  /**
   * Upward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Up,

  /**
   * Downward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Down,

  /**
   * All directions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  All,
}

/**
 * Enumerates the directions in which the swipe gesture can be recognized.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum SwipeDirection {
  /**
   * Swiping disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  None,

  /**
   * Horizontal direction. The gesture is triggered when the angle between the finger moving direction and the x-axis is
   * less than 45 degrees.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Horizontal,

  /**
   * Vertical direction. The gesture is triggered when the angle between the finger moving direction and the y-axis is 
   * less than 45 degrees.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Vertical,

  /**
   * All directions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  All,
}

/**
 * Defines the recognition mode of a gesture group.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum GestureMode {
  /**
   * Sequential recognition. Gestures are recognized in the registration sequence until all gestures are recognized 
   * successfully. If any gesture in the sequence fails recognition, subsequent gestures will not be recognized.
   * 
   * Only the last gesture in a sequentially recognized gesture group can trigger **onActionEnd**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Sequence,

  /**
   * Parallel recognition. Registered gestures are recognized concurrently until all gestures are recognized. The 
   * recognition result of each gesture does not affect each other. This mode is suitable for interaction scenarios 
   * where multiple gestures need to respond simultaneously without blocking each other.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Parallel,

  /**
   * Exclusive recognition. All registered gestures are processed simultaneously. Once any gesture is recognized 
   * successfully, the recognition process ends, and all other gestures are deemed unrecognized. This mode is suitable 
   * for interaction scenarios where multiple gestures may trigger simultaneously but only one is allowed to take 
   * effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Exclusive,
}

/**
 * Enumerates masking modes of child component gestures.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum GestureMask {
  /**
   * The gestures of child components are enabled and recognized based on the default gesture recognition sequence.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Normal,

  /**
   * The gestures of child components are disabled, including the built-in gestures, such as the built-in swipe gesture 
   * for a **List** component. If the areas of the parent and child components are partly overlapped, only gestures in 
   * the overlapped areas are disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  IgnoreInternal,
}

/**
 * Enumerates gesture competition results.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum GestureJudgeResult {
  /**
   * The system gesture recognition process continues.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  CONTINUE = 0,

  /**
   * Gesture recognition fails.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  REJECT = 1,
}

/**
 * Enumerates gesture competition results.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare namespace GestureControl {
  /**
   * Enumerates gesture types.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enum GestureType {
    /**
     * Tap gesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    TAP_GESTURE = 0,

    /**
     * Long press gesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    LONG_PRESS_GESTURE = 1,

    /**
     * Pan gesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    PAN_GESTURE = 2,

    /**
     * Pinch gesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    PINCH_GESTURE = 3,

    /**
     * Swipe gesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    SWIPE_GESTURE = 4,

    /**
     * Rotation gesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    ROTATION_GESTURE = 5,

    /**
     * Drag.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    DRAG = 6,

    /**
     * Click.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    CLICK = 7,

    /**
     * Mouse box selection gesture in a scrollable container. It is a special pan gesture used to create a selection 
     * area by dragging the mouse in a scrollable container to select multiple elements in batches.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    BOX_SELECT_GESTURE = 8,

    /**
     * Web component scroll gesture. It is a special pan gesture used to control the scrolling behavior within the 
     * **Web** component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    WEB_SCROLL_GESTURE = 9,

    /**
     * Text selection gesture. It is a special pan gesture used to select text content by dragging in an input box 
     * component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    TEXT_FIELD_SELECT_GESTURE = 10,

    /**
     * Context menu hover gesture. It is a special type of long-press gesture and triggers the **hoverScale** animation
     * effect of the menu during the long-press process (this behavior requires enabling the **hoverScaleInterruption**
     * attribute of [ContextMenuAnimationOptions]{@link ContextMenuAnimationOptions} for support).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    CONTEXT_MENU_HOVER_GESTURE = 11
  }
}

/**
 * Defines the gesture information type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface GestureInfo {
  /**
   * Gesture tag.
   * 
   * **NOTE**
   * 
   * Returns **undefined** if the gesture's **tag** attribute was not set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  tag?: string;

  /**
   * Gesture type.
   * 
   * **NOTE**
   * 
   * Returns **-1** for built-in gestures of unexposed types.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type: GestureControl.GestureType;

  /**
   * Whether the current gesture is a system built-in gesture. The value **true** indicates that the gesture is a 
   * system built-in gesture, and **false** indicates the opposite.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  isSystemGesture: boolean;
}

/**
 * Provides coordinate information for tap gestures.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface EventLocationInfo {
  /**
   * X coordinate relative to the upper left corner of the component.
   * 
   * Value range: [0, +∞)
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  x: number;

  /**
   * Y coordinate relative to the upper left corner of the component.
   * 
   * Value range: [0, +∞)
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  y: number;

  /**
   * X coordinate relative to the upper left corner of the window.
   * 
   * Value range: [0, +∞)
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  windowX: number;

  /**
   * Y coordinate relative to the upper left corner of the window.
   * 
   * Value range: [0, +∞)
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  windowY: number;

  /**
   * X coordinate relative to the upper left corner of the screen.
   * 
   * Value range: [0, +∞)
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  displayX: number;

  /**
   * Y coordinate relative to the upper left corner of the screen.
   * 
   * Value range: [0, +∞)
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  displayY: number;

  /**
   * X coordinate in the coordinate system with the upper left corner of the main screen as the origin.
   * 
   * Unit: vp
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate in the coordinate system with the upper left corner of the main screen as the origin.
   * 
   * Unit: vp
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  globalDisplayY?: number;

  /**
   * Gets the coordinates of the top-left corner of the current component based on its real-time position.
   *
   * @returns { Coordinate2D } - return the coordinates of the top-left corner of the current component based on its
   *     real-time position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getCurrentLocalPosition?(): Coordinate2D;
}

/**
 * Defines the finger information type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
interface FingerInfo {
  /**
   * Index of the finger, determined by the number of fingers pressed. The first pressed finger is assigned 0, with the 
   * index incrementing by one for each subsequent finger.
   * 
   * **NOTE**
   * 
   * Indexes for other input sources (mouse: 1001, stylus: 102, mouse wheel: 0, two-finger trackpad slide: 0) are also 
   * converted to finger indexes.
   * 
   * Value range: [0, 10), 102, 1001
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  id: number;

  /**
   * X coordinate relative to the upper left corner of the global screen, in vp. If this parameter is not returned, 
   * there is no global screen X coordinate information.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate relative to the upper left corner of the global screen, in vp. If this parameter is not returned, 
   * there is no global screen Y coordinate information.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * X-coordinate relative to the upper left corner of the application window, in vp.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  globalX: number;

  /**
   * Y-coordinate relative to the upper left corner of the application window, in vp.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  globalY: number;

  /**
   * X-coordinate relative to the upper left corner of the current component's original area, in vp.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  localX: number;

  /**
   * Y-coordinate relative to the upper left corner of the current component's original area, in vp.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  localY: number;

  /**
   * X-coordinate relative to the upper left corner of the screen, in vp.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  displayX: number;

  /**
   * Y-coordinate relative to the upper left corner of the screen, in vp.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  displayY: number;

  /**
   * Whether the event is triggered by a left-hand or right-hand tap. If this parameter is not returned, the current 
   * event has no left-hand or right-hand tap information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  hand?: InteractionHand;

  /**
   * Obtains the coordinates of the finger position relative to the upper left corner of the current component's 
   * real-time position.
   *
   * @returns { Coordinate2D } - coordinates of the finger position relative to the upper left corner of the current
   *     component's real-time position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getCurrentLocalPosition?(): Coordinate2D;
}

/**
 * Enumerates gesture types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type GestureType =
  TapGestureInterface
  | LongPressGestureInterface
  | PanGestureInterface
  | PinchGestureInterface
  | SwipeGestureInterface
  | RotationGestureInterface
  | GestureGroupInterface;

/**
 * Defines the basic gesture event type. Inherits from [BaseEvent]{@link BaseEvent}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface BaseGestureEvent extends BaseEvent {
  /**
   * Information about all fingers that trigger the event. For a gesture generated by the touchscreen, **fingerList** 
   * contains information about all touch points that trigger the event. For a gesture initiated by the mouse, 
   * **fingerList** contains only one record. The event category of a touchpad is the same as that of a mouse, so for a 
   * gesture initiated by a touchpad, **fingerList** carries only one record.
   * 
   * **NOTE**
   * 
   * 1. The finger index corresponds to the position, that is, the id of **fingerList[index]** is **index**. The 
   * position corresponding to a finger that is pressed first but does not participate in the current gesture trigger is 
   * empty in **fingerList**.
   * 2. When a gesture is triggered by a keyboard or gamepad, there is no finger information, and **fingerList** is 
   * empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fingerList: FingerInfo[];

  /**
   * Information about all valid touch points that participate in triggering the event. For gesture events initiated by 
   * a touchscreen, **fingerInfos** includes information about all touch points. For gesture events initiated by a 
   * mouse or touchpad, **fingerInfos** contains only one touch point.
   * 
   * **NOTE**
   * 
   * **fingerInfos** only records information about effective fingers that participate in the touch. Fingers that are 
   * pressed first but do not participate in triggering of the current gesture will not be shown in **fingerInfos**. The
   * default value is an empty array **[]**, and an empty array indicates no effective touch point information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  fingerInfos?: FingerInfo[];
}

/**
 * Inherits from [BaseGestureEvent]{@link BaseGestureEvent}. This object can be passed as the **event** parameter of 
 * [onGestureJudgeBegin]{@link CommonMethod#onGestureJudgeBegin}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface TapGestureEvent extends BaseGestureEvent {
  /**
   * Coordinate information of the tap gesture. If no value is returned, there is no coordinate information of the tap 
   * gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  tapLocation?: EventLocationInfo;
}

/**
 * Inherits from [BaseGestureEvent]{@link BaseGestureEvent}. This object can be passed as the **event** parameter of 
 * [onGestureJudgeBegin]{@link CommonMethod#onGestureJudgeBegin}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface LongPressGestureEvent extends BaseGestureEvent {
  /**
   * Whether the event is a repeated trigger event. **true**: The event is repeated. **false**: The event is not 
   * repeated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  repeat: boolean;
}

/**
 * Inherits from [BaseGestureEvent]{@link BaseGestureEvent}. This object can be passed as the **event** parameter of 
 * [onGestureJudgeBegin]{@link CommonMethod#onGestureJudgeBegin}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface PanGestureEvent extends BaseGestureEvent {
  /**
   * Offset of the gesture event on the x-axis relative to the original area of the current component, in vp. A positive
   * value means to pan from left to right, and a negative value means the opposite.
   * 
   * Value range: (-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  offsetX: number;

  /**
   * Offset of the gesture event on the y-axis relative to the original area of the current component, in vp. A positive
   * value means to pan from top to bottom, and a negative value means the opposite.
   * 
   * Value range: (-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  offsetY: number;

  /**
   * Velocity along the x-axis. The origin of the coordinate axis is the upper left corner of the screen. The velocity 
   * is positive if the movement is from left to right, and it is negative if the movement is from right to left. The 
   * unit is vp/s.
   * 
   * Value range: (-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  velocityX: number;

  /**
   * Velocity along the y-axis. The origin of the coordinate axis is the upper left corner of the screen. The velocity 
   * is positive if the movement is from top to bottom, and it is negative if the movement is from bottom to top. The 
   * unit is vp/s.
   * 
   * Value range: (-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  velocityY: number;

  /**
   * Velocity along the main axis. The value is the arithmetic square root of the sum of squares of the velocity along 
   * the x- and y-axis. The unit is vp/s.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  velocity: number;
}

/**
 * Inherits from [BaseGestureEvent]{@link BaseGestureEvent}. This object can be passed as the **event** parameter of 
 * [onGestureJudgeBegin]{@link CommonMethod#onGestureJudgeBegin}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface PinchGestureEvent extends BaseGestureEvent {
  /**
   * Scale factor.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  scale: number;

  /**
   * X-coordinate of the center of the pinch gesture, in vp, relative to the original area of the current component.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pinchCenterX: number;

  /**
   * Y-coordinate of the center of the pinch gesture, in vp, relative to the original area of the current component.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pinchCenterY: number;
}

/**
 * Inherits from [BaseGestureEvent]{@link BaseGestureEvent}. This object can be passed as the **event** parameter of 
 * [onGestureJudgeBegin]{@link CommonMethod#onGestureJudgeBegin}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface RotationGestureEvent extends BaseGestureEvent {
  /**
   * Rotation angle, in deg.
   * 
   * **NOTE**
   * 
   * Angle calculation: When a rotation gesture is detected, the line connecting the two fingers is identified as the 
   * starting line. As the fingers slide, the line between them rotates. Based on the coordinates of the end points of 
   * the starting line and the current line, the arctangent function is used to calculate the included angles relative 
   * to the horizontal direction.
   * 
   * The final rotation angle is: arctan2(cy2 - cy1, cx2 - cx1) - arctan2(y2 - y1, x2 - x1)
   * 
   * With the starting line as the reference axis, clockwise rotation ranges from 0 to 180 degrees, and counterclockwise
   * rotation ranges from 0 to –180 degrees.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  angle: number;
}

/**
 * Inherits from [BaseGestureEvent]{@link BaseGestureEvent}. This object can be passed as the **event** parameter of 
 * [onGestureJudgeBegin]{@link CommonMethod#onGestureJudgeBegin}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface SwipeGestureEvent extends BaseGestureEvent {
  /**
   * Angle of the swipe gesture, that is, the angle between the instantaneous direction of finger sliding and the 
   * positive horizontal direction. The unit is deg.
   * 
   * **NOTE**
   * 
   * With the positive horizontal direction as the reference, when the sliding direction is on the clockwise side of the
   * positive horizontal direction, the angle ranges from 0 to 180 degrees; when on the counterclockwise side, the angle
   * ranges from 0 to –180 degrees.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  angle: number;

  /**
   * Swipe gesture speed, defined as the average swipe speed of all fingers relative to the original area of the current
   * component. The unit is vp/s.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  speed: number;
}

/**
 * Defines the gesture event information. Inherits from [BaseEvent]{@link BaseEvent}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface GestureEvent extends BaseEvent {
  /**
   * Whether the event is a repeated trigger event, used in the **LongPressGesture** scenarios. The value **true** means
   * that the event is a repeated trigger event, and **false** means the opposite.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  repeat: boolean;

  /**
   * List of touch points of the gesture event. If the event input device is touchscreen, the list includes all touch 
   * points. If the event input device is mouse or touchpad, the list contains only one touch point.
   * 
   * **NOTE**
   * 
   * 1. The index of a finger corresponds to its position, that is, the ID of a finger in **fingerList[index]** refers
   * to its index. If a finger is pressed first and does not participate in triggering of the current gesture, its
   * position in **fingerList** is left empty.
   * 2. **fingerList** is empty when gestures are triggered using a keyboard or game controller and no finger
   * information exists.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fingerList: FingerInfo[];

  /**
   * Information about touch points of the gesture event. For gesture events initiated by a touchscreen, **fingerInfos**
   * includes information about all touch points. For gesture events initiated by a mouse or touchpad, **fingerInfos** 
   * contains only one touch point.
   * 
   * **NOTE**
   * 
   * **fingerInfos** only records information about effective fingers that participate in the touch. Fingers that are 
   * pressed first but do not participate in triggering of the current gesture will not be shown in **fingerInfos**. The
   * default value is an empty array **[]**, and an empty array indicates no effective touch point information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  fingerInfos?: FingerInfo[];

  /**
   * X-axis offset of the gesture event relative to the finger press position, in vp. Used in **PanGesture** scenarios. 
   * A positive value means to pan from left to right, and a negative value means the opposite.
   * 
   * Value range: (-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  offsetX: number;

  /**
   * Y-axis offset of the gesture event relative to the finger press position, in vp. Used in **PanGesture** scenarios. 
   * A positive value means to pan from top to bottom, and a negative value means the opposite.
   * 
   * Value range: (-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  offsetY: number;

  /**
   * Rotation angle for the **RotationGesture** event, in deg.
   * 
   * Angle of the swipe gesture for the **SwipeGesture** event, that is, the angle between the instantaneous direction 
   * of finger sliding and the positive horizontal direction, in deg.
   * 
   * **NOTE**
   * 
   * Rotation gesture angle calculation: When a rotation gesture is detected, the line connecting the two fingers is 
   * identified as the starting line. As the fingers slide, the line between them rotates. Based on the coordinates of 
   * the end points of the starting line and the current line, the arctangent function is used to calculate the included
   * angles relative to the horizontal direction. The rotation angle is calculated as arctan2(cy2-cy1, cx2-cx1) - arctan
   * 2(y2-y1, x2-x1). With the starting line as the reference axis, clockwise rotation ranges from 0 to 180 degrees, and
   * counterclockwise rotation ranges from 0 to –180 degrees.
   * 
   * Value range: [-180, 180]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  angle: number;

  /**
   * Swipe gesture speed, that is, the average swipe speed of all fingers relative to the original area of the current 
   * component, in vp/s. Used for the **SwipeGesture** event.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  speed: number;

  /**
   * Scale ratio. This attribute is used for the pinch gesture.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scale: number;

  /**
   * X-coordinate of the center of the pinch gesture, in vp, relative to the original area of the current component. 
   * This attribute is used for the **PinchGesture** event.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  pinchCenterX: number;

  /**
   * Y-coordinate of the center of the pinch gesture, in vp, relative to the original area of the current component. 
   * This attribute is used for the **PinchGesture** event.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  pinchCenterY: number;

  /**
   * Velocity along the x-axis. This parameter is used in [PanGesture]{@link PanGesture}. The origin of the coordinate axis
   * is the upper left corner of the screen. The velocity is positive if the movement is from left to right, and it is 
   * negative if the movement is from right to left. The unit is vp/s.
   * 
   * Value range: (-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  velocityX: number;

  /**
   * Velocity along the y-axis. This parameter is used in [PanGesture]{@link PanGesture}. The origin of the coordinate axis
   * is the upper left corner of the screen. The velocity is positive if the movement is from top to bottom, and it is 
   * negative if the movement is from bottom to top. The unit is vp/s.
   * 
   * Value range: (-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  velocityY: number;

  /**
   * Velocity along the main axis. This parameter is used in [PanGesture]{@link PanGesture}. The value is the arithmetic 
   * square root of the sum of squares of the velocity along the x- and y-axis. The unit is vp/s.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  velocity: number;

  /**
   * Coordinate information of the current tap gesture. For non-tap gestures, the return value of **tapLocation** is 
   * **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  tapLocation?: EventLocationInfo;
}

/**
 * Configures common attributes of gestures, supporting setting gesture tags and input types for gesture responses.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
interface GestureInterface<T> {
  /**
   * Sets a gesture tag.
   *
   * @param { string } tag - Gesture tag.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  tag(tag: string): T;

  /**
   * Sets the input types that can trigger the gesture response.
   *
   * @param { Array<SourceTool> } types - Input types that can trigger the gesture response.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  allowedTypes(types: Array<SourceTool>): T;
}

  /**
   * Provides the parameters of the basic gesture handler.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  interface BaseHandlerOptions {
  /**
   * Whether to enforce the exact number of fingers touching the screen. **true**: Enforce the exact number of fingers 
   * touching the screen. **false**: Do not enforce the exact number of fingers touching the screen.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  isFingerCountLimited?: boolean;
}

/**
 * Defines tap gesture parameters. Inherits from [BaseHandlerOptions]{@link BaseHandlerOptions}.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 12. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TapGestureParameters extends BaseHandlerOptions {
  /**
   * Number of consecutive taps. If the value is less than 1 or is not set, the default value is used.
   * 
   * Default value: **1**
   * 
   * Value range: [0, +∞)
   * 
   * **NOTE**
   * 
   * 1. If multi-tap is configured, the timeout interval between a lift and the next tap is 300 ms.
   * 2. If the distance between the last tapped position and the current tapped position exceeds 60 vp, gesture
   * recognition fails. In multi-finger scenarios, the tapped position is the average position of all fingers involved
   * in the gesture response.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  count?: number;
  /**
   * Number of fingers required to trigger a tap. The value ranges from 1 to 10. If the value is less than 1 or is not 
   * set, the default value is used.
   * 
   * Default value: **1**
   * 
   * **NOTE**
   * 
   * 1. For a multi-finger gesture, recognition fails if the required number of fingers is not pressed within 300 ms
   * after the first finger; when fingers are lifted, if the remaining number of fingers is below the threshold after
   * lifting, all fingers must be lifted within 300 ms for the gesture to be successfully recognized.
   * 2. When the number of fingers touching the screen exceeds the set value, the gesture can be recognized.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  fingers?: number;
  /**
   * Movement threshold for the tap gesture. If the value is less than or equal to 0 or is not set, the default value is
   * used.
   * 
   * Default value: 2^31-1
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * If the finger movement exceeds the preset movement threshold, the tap gesture recognition fails. If the default 
   * threshold is used during initialization and the finger moves beyond the component's touch target, the tap gesture 
   * recognition fails.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  distanceThreshold?: number;
}

/**
 * TapGesture is used to trigger a tap gesture with one, two, or more taps.
 * 
 * > **NOTE**
 * >
 * > When both double-tap and single-tap gestures are bound to a component with the double-tap gesture bound first, the
 * > single-tap gesture will have a 300 ms delay.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface TapGestureInterface extends GestureInterface<TapGestureInterface> {
  /**
   * Creates a tap gesture. Inherits from [GestureInterface<T>]{@link GestureInterface}.
   * 
   * When triggered by keyboard or gamepad input, the gesture event's [SourceTool]{@link SourceTool} is **Unknown**, and 
   * [SourceType]{@link SourceType} is **KEY** or **JOYSTICK**.
   *
   * @param { object } value [since 7 - 11]
   * @param { TapGestureParameters } value - Parameters for the tap gesture. [since 12]
   * @returns { TapGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: TapGestureParameters): TapGestureInterface;

  /**
   * Triggered when the tap gesture is recognized.
   *
   * @param { function } event - Callback for the tap event.
   * @returns { TapGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onAction(event: (event: GestureEvent) => void): TapGestureInterface;
}

/**
 * **LongPressGesture** is used to trigger a long press gesture. This gesture requires one or more fingers to be held 
 * down for a specified duration, which is 500 ms by default and can be adjusted using the **duration** parameter.
 * 
 * > **NOTE**
 * >
 * > Since API version 18, on some devices, the system's two-finger long press gesture may take precedence, causing 
 * > the application's two-finger long press gesture to be ineffective.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface LongPressGestureInterface extends GestureInterface<LongPressGestureInterface> {
  /**
   * Creates a long press gesture. Inherits from [GestureInterface<T>]{@link GestureInterface}.
   * 
   * In components that support drag actions by default, such as **Text**, **TextInput**, **TextArea**, **HyperLink**,
   * **Image**, and **RichEditor**, the long press gesture may conflict with the drag action. If this occurs, the event
   * priority is determined as follows:
   * 
   * If the long press duration is less than 500 milliseconds, the system prioritizes the long press event over the
   * drag event.
   * 
   * If the long press duration reaches or exceeds 500 milliseconds, the system prioritizes the drag event over the
   * long press event.
   *
   * @param { object } value - Parameters for the long press gesture.
   *     <br> - **fingers**: minimum number of fingers to trigger a long press gesture. The value ranges from 1 to 10.
   *     <br>Default value: **1**.
   *     <br> - **repeat**: whether to continuously trigger the event callback. The value **true** means to continuously
   *     trigger the event callback, and **false** means the opposite.<br>Default value: **false**.
   *     <br> - **duration**: minimum hold-down time, in ms.<br>Default value: **500**.
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: { fingers?: number; repeat?: boolean; duration?: number }): LongPressGestureInterface;

  /**
   * Creates a long press gesture. Compared with [LongPressGesture]{@link LongPressGestureInterface(value?: { fingers?: number; repeat?: boolean; duration?: number })}, 
   * this API adds the **isFingerCountLimited** parameter to **options**, which determines whether to enforce the exact
   * number of fingers touching the screen.
   * 
   * In components that support drag actions by default, such as **Text**, **TextInput**, **TextArea**, **HyperLink**,
   * **Image**, and **RichEditor**, the long press gesture may conflict with the drag action. If this occurs, the event
   * priority is determined as follows:
   * 
   * If the long press duration is less than 500 milliseconds, the system prioritizes the long press event over the
   * drag event.
   * 
   * If the long press duration reaches or exceeds 500 milliseconds, the system prioritizes the drag event over the
   * long press event.
   *
   * @param { LongPressGestureHandlerOptions } options - Parameters of the long press gesture handler.
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  (options?: LongPressGestureHandlerOptions): LongPressGestureInterface;
  /**
   * Registers the callback for successful long press gesture recognition.
   *
   * @param { function } event - Callback for successful long press gesture recognition.
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onAction(event: (event: GestureEvent) => void): LongPressGestureInterface;

  /**
   * Registers the callback for long press gesture completion. This callback is triggered when all fingers are lifted 
   * after successful recognition.
   *
   * @param { function } event - Callback for long press gesture completion.
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionEnd(event: (event: GestureEvent) => void): LongPressGestureInterface;

  /**
   * Registers the callback for long press gesture cancellation. This callback is triggered when a touch cancellation 
   * event occurs after successful long press gesture recognition. No gesture event information is returned.
   *
   * @param { function } event - Callback for long press gesture cancellation.
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionCancel(event: () => void): LongPressGestureInterface;
  /**
   * Registers the callback for long press gesture cancellation. This callback is triggered when a touch cancellation 
   * event occurs after successful long press gesture recognition. Gesture event information is returned.
   *
   * @param { function } event - Callback for long press gesture cancellation.
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onActionCancel(event: Callback<GestureEvent>): LongPressGestureInterface;
}

/**
 * Defines the PanGesture options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class PanGestureOptions {
  /**
   * Creates a pan gesture configuration object. The **PanGestureOptions** API enables dynamic updates to pan gesture 
   * properties without requiring state variable modifications that would trigger UI re-renders.
   *
   * @param { object } value - Pan gesture configuration.
   *     <br>**fingers**: minimum number of fingers required. The value ranges from 1 to 10.<br>Default value: **1**
   *     <br>**direction**: pan direction. The value supports the AND (&) and OR (|) operations.<br>Default value:
   *     **PanDirection.All**
   *     <br>**distance**: minimum pan distance to trigger the gesture, in vp.<br>Default value: **8** for the stylus
   *     and **5** for other input sources.
   *     <br>**NOTE**<br>If a pan gesture and a [tab]{@link tabs} swipe occur at the same time, set **distance** to
   *     **1** to make the gesture more easily recognizable.<br>If the value specified is less than **0**, the default
   *     value is used.<br>To avoid slow response and lagging during scrolling, set a reasonable pan distance.<br>When
   *     the [scale]{@link CommonMethod#scale(value: ScaleOptions)} attribute is applied to the component, the actual
   *     pan distance is adjusted based on the **scale** ratio.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constructor(value?: { fingers?: number; direction?: PanDirection; distance?: number });

  /**
   * Sets the pan direction.
   *
   * @param { PanDirection } value - Pan direction. The value supports the AND (&) and OR (|) operations.<br>Default
   *     value: **PanDirection.All**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  setDirection(value: PanDirection);

  /**
   * Sets the minimum pan distance to trigger the gesture, in vp. To avoid performance degradation due to excessive 
   * response delays or accidental releases, avoid excessively large values. For best practices, see 
   * [Reducing the Pan Distance for Gesture Recognition](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-application-latency-optimization-cases#section1116134115286).
   *
   * @param { number } value - Minimum pan distance to trigger the gesture, in vp.<br>Default value: **8** for the
   *     stylus and **5** for other input sources.<br>**NOTE**<br>If a pan gesture and a [tab]{@link tabs} swipe occur
   *     at the same time, set **distance** to **1** to make the gesture more easily recognizable.<br>If the value
   *     specified is less than **0**, the default value is used.<br>To avoid slow response and lagging during
   *     scrolling, set a reasonable pan distance.<br>When the [scale]{@link CommonMethod#scale(value: ScaleOptions)}
   *     attribute is applied to the component, the actual pan distance is adjusted based on the **scale** ratio.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  setDistance(value: number);

  /**
   * Sets the minimum number of fingers to trigger the gesture.
   *
   * @param { number } value - Minimum number of fingers to trigger a pan gesture. The value ranges from 1 to 10.<br>
   *     Default value: **1**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  setFingers(value: number);

  /**
   * Obtains the pan direction.
   *
   * @returns { PanDirection } Pan direction.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getDirection(): PanDirection;
  /**
   * Obtains the minimum pan distance to trigger the gesture. The unit is vp.
   *
   * @returns { number } Minimum pan distance to trigger the gesture.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getDistance(): number;
}

/**
 * PanGesture is used to trigger a pan gesture when the movement distance of a finger on the screen reaches the minimum
 * value.
 *
 * A pan gesture can be triggered by a finger or stylus swipe, a left-mouse-button swipe, mouse-wheel scrolling, or a
 * two-finger touchpad gesture. For mouse-wheel and two-finger touchpad input, the vertical or horizontal axis value
 * must be non-zero.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface PanGestureInterface extends GestureInterface<PanGestureInterface> {
  /**
   * Creates a pan gesture. Inherits from [GestureInterface<T>]{@link GestureInterface}.
   *
   * @param { { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions } value -
   *     Parameters for the pan gesture.
   *     <br> - **fingers**: minimum number of fingers to trigger a pan gesture. The value ranges from 1 to 10.
   *     <br>Default value: **1**<br>Value range: [1, 10]
   *     <br>**NOTE**<br>If the value is less than 1 or is not set, the default value is used.
   *     <br> - **direction**: pan direction. The value supports the AND (&amp;) and OR (\|) operations.
   *     <br>Default value: **PanDirection.All**
   *     <br> - **distance**: minimum pan distance to trigger the gesture, in vp.<br>Value range: [0, +∞)
   *     <br>Default value: **8** for the stylus and **5** for other input sources.
   *     <br>**NOTE**<br>If a pan gesture and a [tab]{@link tabs} swipe occur at the same time,
   *     set **distance** to **1** to make the gesture more easily recognizable.<br>If the value specified is less
   *     than **0**, the default value is used.<br>When the [scale]{@link CommonMethod#scale(value: ScaleOptions)}
   *     attribute is applied to the component, the actual pan distance is adjusted based on the **scale** ratio.
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions): PanGestureInterface;

  /**
   * Creates a pan gesture. Compared with [PanGesture]{@link PanGestureInterface(value?: { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions)}, 
   * this API adds the **isFingerCountLimited** and **distanceMap** parameters to **options**, which control whether to
   * enforce the exact number of fingers touching the screen and specify the minimum pan distance required to trigger
   * the gesture for different input sources, respectively.
   *
   * @param { PanGestureHandlerOptions } options - Parameters of the swipe gesture handler.
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  (options?: PanGestureHandlerOptions): PanGestureInterface;

  /**
   * Registers the callback for successful pan gesture recognition.
   *
   * @param { function } event - Callback for successful pan gesture recognition.
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionStart(event: (event: GestureEvent) => void): PanGestureInterface;

  /**
   * Registers the callback for pan gesture updates. If **fingerList** contains multiple fingers, this callback updates 
   * the location information of only one finger each time.
   *
   * @param { function } event - Callback for pan gesture updates.
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionUpdate(event: (event: GestureEvent) => void): PanGestureInterface;

  /**
   * Registers the callback for pan gesture completion. This callback is triggered when all fingers are lifted after 
   * successful pan gesture recognition.
   *
   * @param { function } event - Callback for pan gesture completion.
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionEnd(event: (event: GestureEvent) => void): PanGestureInterface;

  /**
   * Registers the callback for pan gesture cancellation. This callback is triggered when a touch cancellation event 
   * occurs after successful pan gesture recognition. No gesture event information is returned.
   *
   * @param { function } event - Callback for pan gesture cancellation.
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionCancel(event: () => void): PanGestureInterface;
  /**
   * Registers the callback for pan gesture cancellation. This callback is triggered when a touch cancellation event 
   * occurs after successful pan gesture recognition. Gesture event information is returned.
   *
   * @param { function } event - Callback for pan gesture cancellation.
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onActionCancel(event: Callback<GestureEvent>): PanGestureInterface;
  
}

/**
 * **SwipeGesture** is used to trigger a swipe gesture. This gesture is successfully recognized when the swipe speed 
 * exceeds the specified threshold, which is 100 vp/s by default.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
interface SwipeGestureInterface extends GestureInterface<SwipeGestureInterface> {
  /**
   * Sets the parameters for the swipe gesture. Inherits from [GestureInterface<T>]{@link GestureInterface}.
   *
   * @param { object } value - Parameters for the swipe gesture.
   *     <br> - **fingers**: minimum number of fingers to trigger the swipe gesture.<br>Default value: **1**
   *     <br>Value range: [1, 10].
   *     <br> - **direction**: direction in which the swipe gesture can be recognized.
   *     <br>Default value: **SwipeDirection.All**
   *     <br> - **speed**: minimum speed of the swipe gesture.<br>Default value: 100 vp/s<br>Value range: (0, +∞).
   *     <br>**NOTE**<br>If the value is less than or equal to 0, it will be converted to the default value.
   * @returns { SwipeGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (value?: { fingers?: number; direction?: SwipeDirection; speed?: number }): SwipeGestureInterface;

  /**
   * Sets the parameters for the swipe gesture. Compared with [SwipeGesture]{@link SwipeGestureInterface(value?: { fingers?: number; direction?: SwipeDirection; speed?: number })}, 
   * this API adds the **isFingerCountLimited** parameter to **options**, which determines whether to enforce the exact
   * number of fingers touching the screen.
   *
   * @param { SwipeGestureHandlerOptions } options - Parameters of the swipe gesture handler.
   * @returns { SwipeGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  (options?: SwipeGestureHandlerOptions): SwipeGestureInterface;

  /**
   * Triggered when the swipe gesture is recognized.
   *
   * @param { function } event - Callback for the gesture event.
   * @returns { SwipeGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onAction(event: (event: GestureEvent) => void): SwipeGestureInterface;
}

/**
 * **PinchGesture** is used to trigger a pinch gesture, which requires two to five fingers with a minimum 5 vp
 * distance between the fingers.
 * 
 * >  **NOTE**
 * >
 * >  To trigger the pinch gesture again after successful recognition, all fingers must be lifted and then make
 * >  contact again to satisfy the recognition criteria.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface PinchGestureInterface extends GestureInterface<PinchGestureInterface> {
  /**
   * Sets the parameters for the pinch gesture. Inherits from [GestureInterface<T>]{@link GestureInterface}.
   *
   * @param { object } value - Parameters for the pinch gesture.
   *     <br> - **fingers**: minimum number of fingers to trigger a pinch. The value ranges from 2 to 5.<br>Default
   *     value: **2** <br>Value range: [2, 5]. Values outside this range are automatically adjusted to the default
   *     value.<br>While more fingers than the minimum number can be pressed to trigger the gesture, only the first
   *     fingers of the minimum number participate in gesture calculation.
   *     <br> - **distance**: minimum recognition distance, in vp. This distance refers to the difference between the
   *     current average distance from the multiple finger positions to their center point and the average distance
   *     when the fingers first made contact. If this difference meets or exceeds the minimum recognition distance,
   *     the pinch gesture is recognized.<br>Default value: **5**<br>**NOTE**<br>Value range: [0, +∞). If the value is
   *     less than or equal to 0, it will be converted to the default value.
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: { fingers?: number; distance?: number }): PinchGestureInterface;

  /**
   * Sets the parameters for the pinch gesture. Compared with
   * [PinchGesture]{@link PinchGestureInterface(value?: { fingers?: number; distance?: number })},
   * this API adds the **isFingerCountLimited** parameter to **options**, which determines whether to enforce the exact
   * number of fingers touching the screen.
   *
   * @param { PinchGestureHandlerOptions } options - Parameters of the pinch gesture handler.
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  (options?: PinchGestureHandlerOptions): PinchGestureInterface;

  /**
   * Triggered after the pinch gesture is recognized.
   *
   * @param { function } event - Callback for the pinch event.
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionStart(event: (event: GestureEvent) => void): PinchGestureInterface;

  /**
   * Triggered when the user moves the finger in the pinch gesture on the screen.
   *
   * @param { function } event - Callback for the pinch event.
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionUpdate(event: (event: GestureEvent) => void): PinchGestureInterface;

  /**
   * Triggered when all fingers are lifted after successful pinch gesture recognition.
   *
   * @param { function } event - Callback for the pinch event.
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionEnd(event: (event: GestureEvent) => void): PinchGestureInterface;

  /**
   * Triggered when a touch cancellation event occurs after successful pinch gesture recognition. No gesture event 
   * information is returned.
   *
   * @param { function } event - Callback for the pinch event.
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionCancel(event: () => void): PinchGestureInterface;
  /**
   * Triggered when a touch cancellation event occurs after successful pinch gesture recognition. Compared with 
   * [onActionCancel]{@link PinchGestureInterface.onActionCancel(event: () => void)}, this callback returns gesture 
   * event information.
   *
   * @param { function } event - Callback for the pinch event.
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onActionCancel(event: Callback<GestureEvent>): PinchGestureInterface;
}

/**
 * **RotationGesture** is used to trigger a rotation gesture, which recognizes rotational movements using two to five
 * fingers, with a minimum angular change of 1 degree. This gesture cannot be triggered using a two-finger rotation
 * operation on a trackpad.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface RotationGestureInterface extends GestureInterface<RotationGestureInterface> {
  /**
   * Sets the parameters for the rotation gesture. Inherits from [GestureInterface<T>]{@link GestureInterface}.
   *
   * @param { object } value - Parameters for the rotation gesture.
   *     <br> - **fingers**: minimum number of fingers to trigger the rotation gesture.<br>Default value: **2**
   *     <br>Value range: [2, 5]. Values less than 2 or greater than 5 are automatically adjusted to the default value.
   *     <br>While more fingers than the minimum number can be pressed to trigger the gesture, only the first two
   *     fingers participate in gesture calculation.
   *     <br> - **angle**: minimum angular change required to trigger the rotation gesture; unit: deg.<br>Default
   *     value: **1**<br>**NOTE**<br>If the value is less than or equal to 0 or greater than 360, it will be converted
   *     to the default value.
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: { fingers?: number; angle?: number }): RotationGestureInterface;

  /**
   * Sets the parameters for the rotation gesture. Compared with
   * [RotationGesture]{@link RotationGestureInterface(value?: { fingers?: number; angle?: number })}, 
   * this API adds the **isFingerCountLimited** parameter to **options**, which determines whether to enforce the exact
   * number of fingers touching the screen.
   *
   * @param { RotationGestureHandlerOptions } options - Parameters of the rotation gesture handler.
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  (options?: RotationGestureHandlerOptions): RotationGestureInterface;

  /**
   * Triggered when the rotation gesture is recognized successfully.
   *
   * @param { function } event - Callback for the gesture event.
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionStart(event: (event: GestureEvent) => void): RotationGestureInterface;

  /**
   * Triggered during the movement of the rotation gesture.
   *
   * @param { function } event - Callback for the gesture event.
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionUpdate(event: (event: GestureEvent) => void): RotationGestureInterface;

  /**
   * Triggered when the last finger used for the rotation gesture is lifted.
   *
   * @param { function } event - Callback for the gesture event.
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionEnd(event: (event: GestureEvent) => void): RotationGestureInterface;

  /**
   * Triggered when a tap cancellation event is received after the rotation gesture is recognized. This callback does 
   * not return gesture event information.
   *
   * @param { function } event - Callback for the gesture event.
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onActionCancel(event: () => void): RotationGestureInterface;
   /**
    * Triggered when a tap cancellation event is received after the rotation gesture is recognized. Compared with 
    * [onActionCancel]{@link RotationGestureInterface.onActionCancel(event: () => void)}, this callback returns gesture 
    * event information.
    *
    * @param { function } event - Callback for the gesture event.
    * @returns { RotationGestureInterface }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @crossplatform
    * @atomicservice
    * @since 18 dynamic
    */
   onActionCancel(event: Callback<GestureEvent>): RotationGestureInterface;
}

/**
 * Combined gestures integrate two or more gestures into a compound gesture, supporting sequential recognition, parallel
 * recognition, and exclusive recognition. They are suitable for scenarios where multiple basic gestures need to be
 * combined on the same component and their recognition order, parallel relationship, or exclusive relationship needs to
 * be controlled, helping developers implement more complex gesture interaction logic.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface GestureGroupInterface {
  /**
   * Creates a combined gesture.
   *
   * @param { GestureMode } mode - Gesture group recognition mode. If the recognition mode is not explicitly set,
   *     **GestureMode.Sequence** is used by default.
   * @param { GestureType[] } gesture - When two or more basic gesture types are set, these gestures are recognized as a
   *     gesture group. If this parameter is not set, the gesture group recognition function does not take effect.
   *     <br>**NOTE**<br>When you need to add both a single-tap gesture and a double-tap gesture to a component, you can
   *     add two [TapGesture]{@link TapGesture} gestures in the gesture group. The double-tap gesture must be placed
   *     before the single-tap gesture; otherwise, the gestures do not take effect.
   * @returns { GestureGroupInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (mode: GestureMode, ...gesture: GestureType[]): GestureGroupInterface;

  /**
   * Invoked when a touch cancel event is received after gesture recognition.
   *
   * @param { function } event - Callback for the gesture event, invoked when a touch cancel event is received after
   *     combined gesture recognition succeeds. The callback has no parameters and no return value.
   * @returns { GestureGroupInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onCancel(event: () => void): GestureGroupInterface;
}

/**
 * Defines TapGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const TapGesture: TapGestureInterface;

/**
 * Defines LongPressGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const LongPressGesture: LongPressGestureInterface;

/**
 * Defines PanGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const PanGesture: PanGestureInterface;

/**
 * Defines SwipeGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const SwipeGesture: SwipeGestureInterface;

/**
 * Defines PinchGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const PinchGesture: PinchGestureInterface;

/**
 * Defines RotationGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const RotationGesture: RotationGestureInterface;

/**
 * Defines GestureGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const GestureGroup: GestureGroupInterface;

/**
 * Defines the base type of a gesture handler, which carries the common configuration capabilities of specific gesture 
 * handlers, such as setting the gesture tag and limiting the supported event input sources.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class GestureHandler<T> implements GestureInterface<T> {
  /**
   * Sets the tag of the gesture handler. This is suitable for scenarios where multiple gesture handlers need to be 
   * distinguished or managed.
   *
   * @param { string } tag - Gesture handler tag.
   * @returns { T } Current gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  tag(tag: string): T;

  /**
   * Sets the event input sources supported by the gesture handler. This is suitable for scenarios where the gesture 
   * needs to be limited to responding only to specific input sources such as touch, mouse, or stylus.
   *
   * @param { Array<SourceTool> } types - Supported input source types.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  allowedTypes(types: Array<SourceTool>): T;
}

/**
 * Provides the parameters of the tap gesture handler. Inherits from [BaseHandlerOptions]{@link BaseHandlerOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface TapGestureHandlerOptions extends BaseHandlerOptions {
  /**
   * Number of consecutive taps. If the value is less than 1 or is not set, the default value is used.
   * 
   * Default value: **1**
   * 
   * Value range: [0, +∞)
   * 
   * **NOTE**
   * 
   * 1. If multi-tap is configured, the timeout interval between a lift and the next tap is 300 ms.
   * 2. If the distance between the last tapped position and the current tapped position exceeds 60 vp, gesture
   * recognition fails.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  count?: number;
  /**
   * Number of fingers that trigger a tap. The minimum is 1 finger, and the maximum is 10 fingers. If the value is 
   * less than 1 or is not set, the default value is used.
   * 
   * Default value: **1**
   * 
   * **NOTE**
   * 
   * 1. When multiple fingers are configured, if a sufficient number of fingers are not pressed within 300 ms after the 
   * first finger is pressed, gesture recognition fails. If a sufficient number of fingers are not lifted within 300 ms 
   * after the first finger is lifted, gesture recognition fails.
   * 2. When **isFingerCountLimited** is not enabled, if the actual number of tapping fingers exceeds the configured 
   * value, gesture recognition succeeds. When **isFingerCountLimited** is enabled, the number of fingers touching the 
   * screen must be equal to the configured value; otherwise, gesture recognition fails.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fingers?: number;
  /**
   * Movement threshold for the tap gesture. If the value is less than or equal to 0 or is not set, the default value
   * is used.
   * 
   * Default value: **2^31-1**
   * 
   * Unit: vp
   * 
   * Value range: (0, +∞)
   * 
   * **NOTE**
   * 
   * If the finger movement exceeds the preset movement threshold, the gesture recognition fails. If the default 
   * threshold is used during initialization and the finger moves beyond the component's touch target, the tap gesture 
   * recognition fails.
   *
   * @default Infinity
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  distanceThreshold?: number;
}

/**
 * Defines the tap gesture handler object type, which is used to recognize tap interactions on a component. It is 
 * suitable for touch scenarios such as single tap, multiple taps, or multi-finger tap, and supports configuring 
 * recognition conditions such as the tap count and the number of triggering fingers.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class TapGestureHandler extends GestureHandler<TapGestureHandler> {
  /**
   * Constructor used to create a tap gesture handler instance.
   *
   * @param { TapGestureHandlerOptions } [options] - Tap gesture handler configuration options. Pass this parameter 
   *     when you need to customize the number of consecutive taps, the number of fingers that trigger the tap, the 
   *     finger count check, or the tap gesture movement threshold. If this parameter is not passed, the default tap 
   *     gesture handler configuration is used, for example, the number of consecutive taps is 1, the number of 
   *     fingers that trigger the tap is 1, and the number of fingers touching the screen is not checked by default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: TapGestureHandlerOptions);
  /**
   * Sets the callback for successful tap gesture recognition.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked upon successful tap gesture recognition.
   * @returns { TapGestureHandler } Tap gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onAction(event: Callback<GestureEvent>): TapGestureHandler;
}

/**
 * Provides the parameters of the long press gesture handler. Inherits from 
 * [BaseHandlerOptions]{@link BaseHandlerOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface LongPressGestureHandlerOptions extends BaseHandlerOptions {
  /**
   * Minimum number of fingers to trigger a long press. When **isFingerCountLimited** is enabled, the number of fingers 
   * touching the screen must equal the fingers value; otherwise, gesture recognition fails.
   * 
   * Default value: **1**
   * 
   * Value range: [1, 10]
   * 
   * **NOTE**
   * 
   * If a finger moves more than 15 px after being pressed, the gesture recognition fails.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fingers?: number;
  /**
   * Whether to continuously trigger the event callback. The value **true** means to continuously trigger the event 
   * callback, and **false** means the opposite.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  repeat?: boolean;
  /**
   * Minimum hold-down time, in ms.
   * 
   * Default value: **500**
   * 
   * **NOTE**
   * 
   * Value range: (0, +∞). If the value is less than or equal to 0, the default value **500** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  duration?: number;
  /**
   * Maximum movement distance recognized by the long press gesture recognizer, in px.
   * 
   * Default value: **15**
   * 
   * Value range: (0, +∞). If the value is less than or equal to 0, the default value **15** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  allowableMovement?: number;
}

/**
 * Defines the long press gesture handler object type, which is used to recognize long press interactions on a 
 * component. It is suitable for scenarios where an operation is triggered after pressing and holding, and supports 
 * configuring recognition conditions such as the number of triggering fingers, the long press duration, whether to 
 * trigger continuously, and the movement threshold.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class LongPressGestureHandler extends GestureHandler<LongPressGestureHandler> {
  /**
   * Constructor used to create a long press gesture handler instance.
   *
   * @param { LongPressGestureHandlerOptions } [options] - Configuration parameters of the long press gesture handler. 
   *     Pass this parameter when you need to customize the minimum finger count for triggering a long press, whether 
   *     to trigger continuously, the minimum trigger time, finger count verification, or the maximum movement 
   *     distance. If this parameter is not passed, the default configuration of the long press gesture handler is 
   *     used, for example, the trigger finger count is 1, **repeat** is **false**, the minimum time for triggering a 
   *     long press is 500 ms, and the maximum movement distance is 15 px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: LongPressGestureHandlerOptions);
  /**
   * Sets the callback for successful long press gesture recognition.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked upon successful long press gesture recognition.
   * @returns { LongPressGestureHandler } Long press gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onAction(event: Callback<GestureEvent>): LongPressGestureHandler;
  /**
   * Sets the callback for long press gesture recognition completion. This callback is triggered when all fingers are 
   * lifted after successful recognition.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked when long press gesture recognition completes.
   * @returns { LongPressGestureHandler } Long press gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionEnd(event: Callback<GestureEvent>): LongPressGestureHandler;
  /**
   * Sets the callback for long press gesture cancellation. This callback is triggered when a touch cancellation event 
   * occurs after successful recognition. No gesture event information is returned.
   *
   * @param { Callback<void> } event - Callback invoked when the long press gesture is cancelled.
   * @returns { LongPressGestureHandler } Long press gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionCancel(event: Callback<void>): LongPressGestureHandler;
  /**
   * Sets the callback for long press gesture cancellation. This callback is triggered when a touch cancellation event 
   * occurs after successful recognition. Compared with 
   * [onActionCancel]{@link LongPressGestureHandler#onActionCancel(event: Callback<void>)}, this API returns gesture 
   * event information.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked when the long press gesture is cancelled. This callback
   *     returns gesture event information.
   * @returns { LongPressGestureHandler } Long press gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onActionCancel(event: Callback<GestureEvent>): LongPressGestureHandler;
}

/**
 * Provides the parameters of the pan gesture handler. Inherits from [BaseHandlerOptions]{@link BaseHandlerOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface PanGestureHandlerOptions extends BaseHandlerOptions {
  /**
   * Minimum number of fingers to trigger a pan gesture. The value ranges from 1 to 10.
   * 
   * Default value: **1**
   * 
   * Value range: [1, 10]
   * 
   * **NOTE**
   * 
   * If the value is less than 1 or is not set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fingers?: number;
  /**
   * Pan direction. The value supports the AND (&) and OR (|) operations.
   * 
   * Default value: **PanDirection.All**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: PanDirection;
  /**
   * Minimum pan distance to trigger the gesture, in vp.
   * 
   * Default value: **8** for the stylus and **5** for other input sources
   * 
   * **NOTE**
   * 
   * If a pan gesture and a [tab]{@link tabs} swipe occur at the same time, set **distance** to **1** to make the 
   * gesture more easily recognizable.
   * 
   * Value range: [0, +∞). If the value specified is less than 0, the default value is used.
   * 
   * Since API version 19, the default value is **8**, in vp, for the stylus.
   *
   * When configuring this field with [gestureModifier]{@link CommonMethod#gestureModifier}, the unit is px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  distance?: number;
  /**
   * Minimum pan distance for different input sources to trigger the gesture, in vp.
   * 
   * Default value: **8** for the stylus and **5** for other input sources
   * 
   * **NOTE**
   * 
   * If a pan gesture and a [tab]{@link tabs} swipe occur at the same time, set the **distanceMap** value of the 
   * corresponding input source to **1** to make the gesture more easily recognizable.
   * 
   * Value range: [0, +∞). If the value specified is less than 0, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  distanceMap?: Map<SourceTool, number>;
}

/**
 * Defines the pan gesture handler object type, which is used to recognize drag or slide interactions on a component. 
 * It is suitable for scenarios where the state needs to be updated as the finger moves, and supports configuring the 
 * number of triggering fingers, the pan direction, the minimum drag distance, and the trigger distance for different 
 * input sources.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class PanGestureHandler extends GestureHandler<PanGestureHandler> {
  /**
   * Constructor used to create a pan gesture handler instance.
   *
   * @param { PanGestureHandlerOptions } [options] - Configuration options of the pan gesture handler. Pass this 
   *     parameter when you need to customize the minimum number of fingers to trigger dragging, the trigger 
   *     direction, the minimum drag distance, the minimum drag distance for different input sources, or finger count 
   *     validation. If this parameter is not passed, the default configuration of the pan gesture handler is used, 
   *     for example, the number of fingers to trigger is 1, the direction is **PanDirection.All**, the minimum drag 
   *     distance uses the default value based on the input source, and the number of fingers touching the screen is 
   *     not checked by default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: PanGestureHandlerOptions);
  /**
   * Sets the callback for successful pan gesture recognition.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked upon successful pan gesture recognition.
   * @returns { PanGestureHandler } Pan gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionStart(event: Callback<GestureEvent>): PanGestureHandler;
  /**
   * Sets the callback for pan gesture movement updates. The callback is triggered when the pan gesture moves.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked during pan gesture movement.<br>If **fingerList**
   *     contains multiple fingers, this callback updates the location information of only one finger each time.
   * @returns { PanGestureHandler } Pan gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionUpdate(event: Callback<GestureEvent>): PanGestureHandler;
  /**
   * Sets the callback for pan gesture recognition completion. This callback is triggered when all fingers are lifted 
   * after successful recognition.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked when pan gesture recognition completes.
   * @returns { PanGestureHandler } Pan gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionEnd(event: Callback<GestureEvent>): PanGestureHandler;
  /**
   * Sets the callback for pan gesture cancellation. This callback is triggered when a touch cancellation event occurs 
   * after successful recognition. No gesture event information is returned.
   *
   * @param { Callback<void> } event - Callback invoked when the pan gesture is cancelled.
   * @returns { PanGestureHandler } Pan gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionCancel(event: Callback<void>): PanGestureHandler;
  /**
   * Sets the callback for pan gesture cancellation. This callback is triggered when a touch cancellation event occurs 
   * after successful recognition. Compared with 
   * [onActionCancel]{@link PanGestureHandler#onActionCancel(event: Callback<void>)}, this API returns 
   * gesture event information.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked when the pan gesture is cancelled. Gesture event
   *     information is returned.
   * @returns { PanGestureHandler } Pan gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onActionCancel(event: Callback<GestureEvent>): PanGestureHandler;
}

/**
 * Provides the parameters of the swipe gesture handler. Inherits from [BaseHandlerOptions]{@link BaseHandlerOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface SwipeGestureHandlerOptions extends BaseHandlerOptions {
  /**
   * Minimum number of fingers required to trigger a swipe. Value range: [1, 10]. If the value is out of range, the 
   * default value is used. Set this parameter to 1 when a single-finger swipe is sufficient to trigger the action; 
   * set it to a value from 2 to 10 when you need to reduce accidental touches and require multi-finger coordination 
   * to trigger the swipe.
   * 
   * Default value: **1**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fingers?: number;
  /**
   * Swipe direction that triggers the swipe gesture. **SwipeDirection.All** applies to scenarios where a swipe in any 
   * direction can trigger the action; **SwipeDirection.Horizontal** applies to scenarios where only horizontal swipes 
   * are responded to, such as page turning or carousel switching; **SwipeDirection.Vertical** applies to scenarios 
   * where only vertical swipes are responded to, such as switching content up and down; **SwipeDirection.None** 
   * applies to scenarios where the swipe gesture is not triggered for the time being.
   * 
   * Default value: **SwipeDirection.All**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: SwipeDirection;
  /**
   * Minimum speed for recognizing a swipe. Set a smaller positive threshold when you need to recognize swipes more 
   * sensitively; set a larger threshold when you need to reduce the chance of ordinary pans being misrecognized as 
   * swipes. It is recommended to use the default value first and then adjust it based on interaction sensitivity and 
   * accidental touch conditions.
   * 
   * Default value: 100 vp/s
   * 
   * Value range: (0, +∞), unit: vp/s
   * 
   * **NOTE**
   * 
   * If the value is less than or equal to 0, it will be converted to the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  speed?: number;
}

/**
 * Defines the swipe gesture handler object type, which is used to recognize quick swipe interactions on a component. 
 * It is suitable for scenarios where an operation is triggered based on the swipe direction or speed, and supports 
 * configuring the number of triggering fingers, the swipe direction, and the minimum speed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class SwipeGestureHandler extends GestureHandler<SwipeGestureHandler> {
  /**
   * Constructor used to create a swipe gesture handler instance.
   *
   * @param { SwipeGestureHandlerOptions } [options] - Configuration options of the swipe gesture handler. Pass this 
   *     parameter when you need to customize the minimum finger count, swipe direction, minimum recognition speed, or 
   *     finger count check for triggering a swipe; if not passed, the default configuration of the swipe gesture 
   *     handler is used, that is, the trigger finger count is 1, the direction is **SwipeDirection.All**, the minimum 
   *     speed is 100 vp/s, and the number of fingers touching the screen is not checked by default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: SwipeGestureHandlerOptions);
  /**
   * Sets the callback for successful swipe gesture recognition.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked upon successful swipe gesture recognition.
   * @returns { SwipeGestureHandler } Swipe gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onAction(event: Callback<GestureEvent>): SwipeGestureHandler;
}

/**
 * Provides the parameters of the pinch gesture handler. Inherits from [BaseHandlerOptions]{@link BaseHandlerOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface PinchGestureHandlerOptions extends BaseHandlerOptions {
  /**
   * Minimum number of fingers that trigger a pinch. The value ranges from 2 to 5.
   * 
   * Default value: **2**
   * 
   * Value range: [2, 5]
   * 
   * If the value is less than 2 or greater than 5, the default value **2** is used. If **isFingerCountLimited** is 
   * not enabled, the number of fingers that trigger the gesture can be greater than **fingers**, but only the first 
   * **fingers** fingers that touch the screen participate in gesture calculation. If **isFingerCountLimited** is 
   * enabled, the number of fingers touching the screen must be equal to **fingers**; otherwise, the gesture will not 
   * be recognized.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fingers?: number;
  /**
   * Minimum recognition distance, in vp. To recognize a pinch gesture more sensitively, set a smaller positive 
   * threshold. To reduce the chance of triggering a pinch due to slight movement or accidental touch, set a larger 
   * threshold. You are advised to use the default value first and then adjust it based on the component size and 
   * interaction sensitivity.
   * 
   * Default value: **5**
   * 
   * Value range: (0, +∞)
   * 
   * **NOTE**
   * 
   * If the recognition distance is less than or equal to 0, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  distance?: number;
}

/**
 * Defines the pinch gesture handler object type, which is used to recognize multi-finger pinch interactions on a 
 * component. It is suitable for scaling operation scenarios, and supports configuring recognition conditions such as 
 * the number of triggering fingers, the minimum recognition distance, and the finger count limit.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class PinchGestureHandler extends GestureHandler<PinchGestureHandler> {
  /**
   * Constructor used to create a pinch gesture handler instance.
   *
   * @param { PinchGestureHandlerOptions } [options] - Configuration parameters of the pinch gesture handler. Pass 
   *     this parameter when you need to customize the minimum finger count for triggering a pinch, the minimum 
   *     recognition distance, or the finger count check. If this parameter is not passed, the default configuration 
   *     of the pinch gesture handler is used, for example, the trigger finger count is 2, the minimum recognition 
   *     distance is 5 vp, and the finger count on the touch screen is not checked by default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: PinchGestureHandlerOptions);
  /**
   * Sets the callback for successful pinch gesture recognition.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked upon successful pinch gesture recognition.
   * @returns { PinchGestureHandler } Pinch gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionStart(event: Callback<GestureEvent>): PinchGestureHandler;
  /**
   * Sets the callback for pinch gesture movement updates. The callback is triggered when the pinch gesture moves.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked during pinch gesture movement.
   * @returns { PinchGestureHandler } Pinch gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionUpdate(event: Callback<GestureEvent>): PinchGestureHandler;
  /**
   * Sets the callback for pinch gesture recognition completion. This callback is triggered when all fingers are lifted 
   * after successful recognition.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked when pinch gesture recognition completes.
   * @returns { PinchGestureHandler } Pinch gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionEnd(event: Callback<GestureEvent>): PinchGestureHandler;
  /**
   * Sets the callback for pinch gesture cancellation. This callback is triggered when a touch cancellation event occurs
   * after successful recognition. No gesture event information is returned.
   *
   * @param { Callback<void> } event - Callback invoked when the pinch gesture is cancelled. No gesture event
   *     information is returned.
   * @returns { PinchGestureHandler } Pinch gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionCancel(event: Callback<void>): PinchGestureHandler;
  /**
   * Sets the callback for pinch gesture cancellation. This callback is triggered when a touch cancellation event occurs
   * after successful recognition. Compared with 
   * [onActionCancel]{@link PinchGestureHandler#onActionCancel(event: Callback<void>)}, this API returns gesture 
   * event information.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked when the pinch gesture is cancelled. Gesture event
   *     information is returned.
   * @returns { PinchGestureHandler } Pinch gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onActionCancel(event: Callback<GestureEvent>): PinchGestureHandler;
}

/**
 * Provides the parameters of the rotation gesture handler. Inherits from 
 * [BaseHandlerOptions]{@link BaseHandlerOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface RotationGestureHandlerOptions extends BaseHandlerOptions {
  /**
   * Minimum number of fingers required to trigger rotation. The minimum is 2 and the maximum is 5.
   * 
   * Default value: **2**
   * 
   * Value range: [2, 5]
   * 
   * If the value is less than 2 or greater than 5, the default value **2** is used. When **isFingerCountLimited** is 
   * not enabled, the number of fingers touching the screen can be greater than the value of **fingers** when the 
   * gesture is triggered, but only the first two fingers that touch the screen participate in gesture calculation. 
   * When **isFingerCountLimited** is enabled, the number of fingers touching the screen must be equal to the value of 
   * **fingers**; otherwise, the gesture will not be recognized.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fingers?: number;
  /**
   * Minimum angle change required to trigger the rotation gesture, in degrees (deg). To recognize slight rotations 
   * more sensitively, set a smaller positive angle. To reduce accidental touches or respond only to obvious 
   * rotations, set a larger angle. It is recommended to use the default value first and then adjust it based on the 
   * rotation interaction precision requirements.
   * 
   * Default value: **1**
   * 
   * Value range: (0, 360]
   * 
   * **NOTE**
   * 
   * If the value is less than or equal to 0 or greater than 360, it will be converted to the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  angle?: number;
}

/**
 * Defines the rotation gesture handler object type, which is used to recognize multi-finger rotation interactions on 
 * a component. It is suitable for scenarios where an object needs to be rotated or an angle needs to be adjusted, and 
 * supports configuring recognition conditions such as the number of triggering fingers, the minimum angle change, and 
 * the finger count limit.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class RotationGestureHandler extends GestureHandler<RotationGestureHandler> {
  /**
   * Constructor used to create a rotation gesture handler instance.
   *
   * @param { RotationGestureHandlerOptions } [options] - Rotation gesture handler configuration options. Pass this 
   *     parameter when you need to customize the minimum number of fingers to trigger rotation, the minimum angle 
   *     change to trigger the rotation gesture, or the finger count check. If this parameter is not passed, the 
   *     default configuration of the rotation gesture handler is used, for example, two fingers to trigger, a 
   *     minimum angle change of 1deg, and no check on the number of fingers touching the screen by default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: RotationGestureHandlerOptions);
  /**
   * Sets the callback for successful rotation gesture recognition.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked upon successful rotation gesture recognition.
   * @returns { RotationGestureHandler } Rotation gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionStart(event: Callback<GestureEvent>): RotationGestureHandler;
  /**
   * Sets the callback for rotation gesture movement updates. The callback is triggered when the rotation gesture moves.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked during rotation gesture movement.
   * @returns { RotationGestureHandler } Rotation gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionUpdate(event: Callback<GestureEvent>): RotationGestureHandler;
  /**
   * Sets the callback for rotation gesture recognition completion. This callback is triggered when all fingers are 
   * lifted after successful recognition.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked when rotation gesture recognition completes.
   * @returns { RotationGestureHandler } Rotation gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionEnd(event: Callback<GestureEvent>): RotationGestureHandler;
  /**
   * Sets the callback for rotation gesture cancellation. This callback is triggered when a touch cancellation event 
   * occurs after successful recognition. No gesture event information is returned.
   *
   * @param { Callback<void> } event - Callback invoked when the rotation gesture is cancelled. No gesture event
   *     information is returned.
   * @returns { RotationGestureHandler } Rotation gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onActionCancel(event: Callback<void>): RotationGestureHandler;
  /**
   * Sets the callback for rotation gesture cancellation. This callback is triggered when a touch cancellation event 
   * occurs after successful recognition. Compared with 
   * [onActionCancel]{@link RotationGestureHandler#onActionCancel(event: Callback<void>)}, this API returns 
   * gesture event information.
   *
   * @param { Callback<GestureEvent> } event - Callback invoked when the rotation gesture is cancelled. Gesture event
   *     information is returned.
   * @returns { RotationGestureHandler } Rotation gesture handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onActionCancel(event: Callback<GestureEvent>): RotationGestureHandler;
}

/**
 * Provides the parameters of the gesture group handler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface GestureGroupGestureHandlerOptions {
  /**
   * Gesture recognition mode of the gesture group. It applies to scenarios where multiple gestures need to be 
   * recognized in sequence, in parallel, or mutually exclusively.
   * 
   * Default value: **GestureMode.Sequence**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  mode: GestureMode;
  /**
   * Gestures to be included in a gesture group.
   * 
   * **NOTE**
   * 
   * To add both single-tap and double-tap gestures for a component, add two [TapGesture]{@link TapGesture} instances as 
   * the [combined gestures]{@link GestureGroup}, with the double-tap gesture preceding the single-tap gesture. The gestures 
   * will not work correctly if this order is reversed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  gestures: GestureHandler<TapGestureHandler | LongPressGestureHandler | PanGestureHandler | SwipeGestureHandler | PinchGestureHandler | RotationGestureHandler | GestureGroupHandler>[];
}

/**
 * Defines the gesture group handler object type, which is used to combine multiple gestures and bind them to a 
 * component as a whole. It is suitable for scenarios where the recognition order or concurrency relationship of 
 * multiple gestures such as single tap, double tap, and long press needs to be coordinated.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class GestureGroupHandler extends GestureHandler<GestureGroupHandler> {
  /**
   * Constructor used to create a gesture group handler instance.
   *
   * @param { GestureGroupGestureHandlerOptions } [options] - Configuration options of the gesture group handler. 
   *     Passed when the combined gesture recognition mode and gesture set need to be set; if not passed, the default 
   *     configuration of the gesture group handler is used, with the combined gesture recognition mode defaulting to 
   *     **GestureMode.Sequence** and no gesture set configured.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: GestureGroupGestureHandlerOptions);
  /**
   * Sets the cancellation callback for the gesture group handler. The callback is triggered when a sequence gesture (
   * [GestureMode]{@link GestureMode}.Sequence) is cancelled.
   *
   * @param { Callback<void> } event - Callback for the gesture group handler cancellation, which takes no input 
   *     parameter and is used to receive a notification after the sequential combined gesture is canceled.
   * @returns { GestureGroupHandler } Current gesture group handler object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onCancel(event: Callback<void>): GestureGroupHandler;
}

/**
 * Defines the priority of the bound gesture, which is suitable for scenarios where the response order of gestures 
 * needs to be controlled or gesture conflicts need to be handled when multiple gestures are bound at the same time.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum GesturePriority {
  /**
   * Normal priority.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NORMAL = 0,
  /**
   * High priority.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PRIORITY = 1,
}

/**
 * Enumerates the gesture recognizer states.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum GestureRecognizerState {
  /**
   * Ready.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  READY = 0,
  /**
   * Detecting.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DETECTING = 1,
  /**
   * Pending.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PENDING = 2,
  /**
   * Blocked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BLOCKED = 3,
  /**
   * Successful.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SUCCESSFUL = 4,
  /**
   * Failed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FAILED = 5,
}

/**
 * Provides the information about the scrollable container component corresponding to the gesture recognizer. It 
 * inherits from [EventTargetInfo]{@link EventTargetInfo}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class ScrollableTargetInfo extends EventTargetInfo {
  /**
   * Checks whether this scrollable container component is scrolled to the top. If it is a **Swiper** component in loop 
   * mode, **false** is returned.
   *
   * @returns { boolean } Whether the current scrollable container component is scrolled to the top. The value **true**
   *     means that the component is scrolled to the top, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isBegin(): boolean;
  /**
   * Checks whether the current scroll container is scrolled to the bottom. If the container is a **Swiper** component 
   * and is in loop mode, **false** is returned.
   *
   * @returns { boolean } Whether the current scrollable container component is scrolled to the bottom. The value
   *     **true** means that the component is scrolled to the bottom, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isEnd(): boolean;
}

/**
 * Provides the information about the component corresponding to the gesture recognizer.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class EventTargetInfo {
  /**
   * Obtains the ID of this component.
   *
   * @returns { string } [ID]{@link CommonMethod#id} of the current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getId(): string;
  /**
   * Returns the unique ID of the current component. Different from the component ID returned by **getId()**, this API 
   * returns the unique ID of the component. When an API parameter requires the unique ID of a component (such as the 
   * **uniqueId** of **isHostBelongsTo**), use this API to obtain it.
   *
   * @returns { int } Unique ID of the current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getUniqueId(): int;
}

/**
 * Defines the touch gesture recognizer object, which supports obtaining touch target information, canceling the current 
 * touch interaction, and determining whether the bound node belongs to a specified component subtree. It is applicable 
 * to touch processing and event distribution control scenarios.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare class TouchRecognizer {
    /**
     * Obtains the information about the component corresponding to this touch gesture recognizer.
     *
     * @returns { EventTargetInfo } Information about the component corresponding to the current touch gesture
     *     recognizer.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    getEventTargetInfo(): EventTargetInfo;
    /**
     * Sends a touch cancellation event to the current touch gesture recognizer. It is applicable to scenarios such as 
     * page state changes, dialog box interruptions, or business logic that needs to actively terminate the current 
     * touch interaction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    cancelTouch(): void;
    /**
     * Returns whether the node bound to the current touch gesture recognizer is a descendant node of the passed-in 
     * component. It is applicable to scenarios where it is determined whether an event comes from the target component 
     * subtree during touch processing or gesture distribution.
     *
     * @param { int } uniqueId - Unique ID of the component. This ID can be obtained via the
     *     [getUniqueId]{@link EventTargetInfo#getUniqueId} API.<br>If the value does not match any component unique 
     *     ID, **false** is returned.
     * @returns { boolean } Whether the node bound to the current touch gesture recognizer is a descendant node of the
     *     passed-in component. The value **true** indicates that the current bound node is a descendant node of the 
     *     passed-in component, and **false** indicates the opposite.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    isHostBelongsTo(uniqueId: int): boolean;
}

/**
 * Defines the gesture recognizer object, which supports querying gesture tag, type, state, and target component 
 * information, controlling the enabled state of the recognizer, blocking the current recognition process, and 
 * determining whether the bound node belongs to a specified component subtree. It is applicable to gesture recognition 
 * state management and gesture competition handling scenarios.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class GestureRecognizer {
  /**
   * Obtains the tag of this gesture recognizer.
   *
   * @returns { string } Tag of the current gesture recognizer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getTag(): string;
  /**
   * Obtains the type of this gesture recognizer.
   *
   * @returns { GestureControl.GestureType } Type of the current gesture recognizer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getType(): GestureControl.GestureType;
  /**
   * Obtains whether this gesture recognizer is a built-in gesture.
   *
   * @returns { boolean } Whether the current gesture recognizer is a built-in gesture. The value **true** means that
   *     the gesture recognizer is a built-in gesture, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isBuiltIn(): boolean;
  /**
   * Sets the enabled state of this gesture recognizer.
   *
   * @param { boolean } isEnabled - Enabled status of the gesture recognizer. The value **true** indicates that the 
   *     current gesture recognizer can call back app events, and **false** indicates that it does not call back app 
   *     events.<br>Currently, this takes effect only when set for [PanRecognizer]{@link PanRecognizer}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setEnabled(isEnabled: boolean): void;
  /**
   * Obtains the enabled state of this gesture recognizer.
   *
   * @returns { boolean } Enabled state of the gesture recognizer. The value **true** means that the gesture recognizer
   *     is enabled and will trigger events, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isEnabled(): boolean;
  /**
   * Obtains the state of this gesture recognizer.
   *
   * @returns { GestureRecognizerState } State of the gesture recognizer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getState(): GestureRecognizerState;
  /**
   * Obtains the information about the component corresponding to this gesture recognizer.
   *
   * @returns { EventTargetInfo } Information about the component corresponding to the current gesture recognizer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getEventTargetInfo(): EventTargetInfo;
  /**
   * Whether the current gesture recognizer is valid.
   *
   * @returns { boolean } Whether the current gesture recognizer is valid.
   *     <br>Returns **false** if the component bound to this recognizer is destroyed or if the recognizer is not on the
   *     response chain.
   *     <br>Returns **true** if the bound component exists and the recognizer is in the response chain.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 12 dynamic
   */
  isValid(): boolean;
  /**
   * Obtains the number of fingers required to trigger the preset gesture.
   *
   * @returns { number } Number of fingers required to trigger the preset gesture.
   *     <br>Value range: an integer from 1 to 10.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getFingerCount(): number;
  /**
   * Checks whether the preset gesture detects the number of fingers on the screen.
   *
   * @returns { boolean } Whether the preset gesture will detect the number of fingers on the screen. **true** if the
   *     gesture event is bound and detects the number of fingers; **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  isFingerCountLimit(): boolean;
  /**
   * Blocks the gesture recognizer from participating in the current gesture recognition before all fingers are lifted. 
   * It is applicable to scenarios such as custom gesture competition or temporarily giving up the current gesture 
   * recognition based on business conditions. If the system has already determined the result of this gesture 
   * recognizer (whether successful or not), calling this API has no effect. This method differs from 
   * GestureRecognizer.[setEnabled]{@link GestureRecognizer#setEnabled}(isEnabled: boolean). 
   * [setEnabled]{@link GestureRecognizer#setEnabled} does not block the gesture recognizer object from participating in 
   * the gesture recognition process, but only affects whether the callback function corresponding to the gesture is 
   * executed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  preventBegin(): void;
  /**
   * Returns whether the node bound to the current gesture recognizer is a descendant node of the passed-in component. 
   * It is applicable to scenarios where it is determined whether an event comes from the target component subtree 
   * during touch processing or gesture distribution.
   *
   * @param { int } uniqueId - Unique ID of the component. This ID can be obtained via the
   *     [getUniqueId]{@link EventTargetInfo#getUniqueId} API.<br>If the value is abnormal, **false** is returned.
   * @returns { boolean } Whether the node bound to the current gesture recognizer is a descendant node of the
   *     passed-in component. The value **true** indicates that the current bound node is a descendant node of the 
   *     passed-in component, and **false** indicates the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isHostBelongsTo(uniqueId: int): boolean;
}

/**
 * Defines the tap gesture recognizer object, which inherits from [GestureRecognizer]{@link GestureRecognizer} and 
 * supports obtaining the tap count threshold. It is applicable to querying the recognition configuration of single-tap 
 * or multi-tap gestures.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare class TapRecognizer extends GestureRecognizer {
  /**
   * Obtains the number of consecutive taps required for the tap gesture to be recognized.
   *
   * @returns { number } Number of consecutive taps required for the tap gesture to be recognized.
   *     <br>Value range: [0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getTapCount(): number;
}

/**
 * Defines the long press gesture recognizer object, which inherits from [GestureRecognizer]{@link GestureRecognizer} 
 * and supports querying whether long press is triggered repeatedly, the trigger duration threshold, and the maximum 
 * recognizable movement distance. It is applicable to querying the long press gesture recognition configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare class LongPressRecognizer extends GestureRecognizer {
  /**
   * Checks whether the long press gesture recognizer is set to trigger repeated callbacks.
   *
   * @returns { boolean } Whether the long press gesture recognizer is set to trigger repeated callbacks. **false**:
   *     Repeated callbacks are not triggered. **true**: Repeated callbacks are triggered.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  isRepeat(): boolean;
  /**
   * Obtains the minimum duration required for the long press gesture to be recognized.
   *
   * @returns { number } Minimum duration, in ms.
   *     <br>Value range: [0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getDuration(): number;
  /**
   * Obtains the maximum movement distance allowed for gesture recognition by the long press gesture recognizer.
   *
   * @returns { number } Maximum movement distance recognized by the long press gesture recognizer, in px.
   *     <br>Value range: (0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  getAllowableMovement(): number;
}

/**
 * Defines the swipe gesture recognizer object, which inherits from [GestureRecognizer]{@link GestureRecognizer} and 
 * supports querying the velocity threshold and swipe direction of the swipe gesture. It is applicable to querying the 
 * swipe gesture recognition configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare class SwipeRecognizer extends GestureRecognizer {
  /**
   * Returns the minimum velocity threshold for the preset swipe gesture recognizer to recognize a swipe. The default 
   * minimum velocity is 100 vp/s.
   *
   * @returns { number } Minimum velocity threshold for the preset swipe gesture recognizer to recognize a swipe, in 
   *     vp/s. If no velocity threshold is configured, the default value 100vp/s is returned.
   *     <br>Value range: [0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getVelocityThreshold(): number;
  /**
   * Obtains the direction for recognizing swipe gestures.
   *
   * @returns { SwipeDirection } Direction for recognizing swipe gestures.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getDirection(): SwipeDirection;
}

/**
 * Defines the pinch gesture recognizer object, which inherits from [GestureRecognizer]{@link GestureRecognizer} and 
 * supports querying the minimum recognition distance threshold of the pinch gesture. It is applicable to querying the 
 * recognition configuration of scaling gestures.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare class PinchRecognizer extends GestureRecognizer {
  /**
   * Obtains the minimum distance required for the pinch gesture to be recognized.
   *
   * @returns { number } Minimum distance required for the pinch gesture to be recognized, in vp.
   *     <br>Value range: [0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getDistance(): number;
}

/**
 * Defines the rotation gesture recognizer object, which inherits from [GestureRecognizer]{@link GestureRecognizer} and 
 * supports querying the minimum angle threshold for triggering the rotation gesture. It is applicable to querying the 
 * gesture recognition configuration of rotation interactions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare class RotationRecognizer extends GestureRecognizer {
  /**
   * Obtains the minimum angle change required for the rotation gesture to be recognized.
   *
   * @returns { number } Minimum angle change required for the rotation gesture to be recognized, in degrees (deg).
   *     <br>Value range: [0, +∞)
   *     <br>**NOTE**
   *     <br>If the provided angle is less than or equal to 0 or greater than 360, it is converted to the default value
   *     **1**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getAngle(): number;
}

/**
 * Defines the pan gesture recognizer object, which inherits from [GestureRecognizer]{@link GestureRecognizer} and 
 * supports querying pan gesture attributes, recognition direction, minimum pan distance, and pan thresholds for 
 * different input sources. It is applicable to querying the pan gesture recognition configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class PanRecognizer extends GestureRecognizer {
  /**
   * Obtains the properties of this pan gesture recognizer.
   *
   * @returns { PanGestureOptions } Properties of the current pan gesture recognizer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPanGestureOptions(): PanGestureOptions;
  /**
   * Obtains the recognized direction of the current pan gesture recognizer.
   *
   * @returns { PanDirection } Recognized direction of the current pan gesture recognizer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  getDirection(): PanDirection;
  /**
   * Returns the minimum pan distance that triggers the current pan gesture recognizer. The default pan threshold is 
   * 5 vp.
   *
   * @returns { number } Minimum pan distance that triggers the current pan gesture recognizer. If the minimum pan 
   *     distance is not configured, the default pan threshold 5vp is returned. Unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  getDistance(): number;
  /**
   * Returns the minimum pan distance that triggers the pan gesture recognizer for different input sources. The default 
   * pan threshold is 5 vp.
   * 
   * > **NOTE**
   * >
   * > This API only returns thresholds for input sources that have been explicitly configured during pan gesture 
   * > initialization. The default threshold can be queried using the [SourceTool]{@link SourceTool}.Unknown type. 
   * > Thresholds for unconfigured device types are not available.
   *
   * @returns { Map<SourceTool, number> } Minimum pan distances required for different input sources to trigger the pan
   *     gesture recognizer. Unit: vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  getDistanceMap(): Map<SourceTool, number>;
}
