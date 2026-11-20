/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file User state awareness
 * @kit MultimodalAwarenessKit
 */

import type { Callback } from './@ohos.base';

/**
 * The **UserStatus** module, designed for user state awareness, empowers the system to perceive specific conditions of
 * users, such as determining their age group or recognizing environmental sounds, among other functions.
 *
 * @syscap SystemCapability.MultimodalAwareness.UserStatus
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace userStatus {
  /**
   * Defines the user age group detection result.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @since 23 static
   * @deprecated since 24
   */
  export interface UserClassification {
    /**
     * User age group, for example, child or adult.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     * @deprecated since 24
     */
    ageGroup?: UserAgeGroup;

    /**
     * Confidence of the detection result. The value is a floating point number ranging from 0 to 1. A larger value 
     * indicates a higher confidence.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     * @deprecated since 24
     */
    confidence?: float;
  }

  /**
   * Enumerates the user age groups, for example, child or adult.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @since 23 static
   * @deprecated since 24
   */
  export enum UserAgeGroup {
    /**
     * Adult.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     * @deprecated since 24
     */
    OTHERS = 0,

    /**
     * Child.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     * @deprecated since 24
     */
    CHILD = 1
  }

  /**
   * Enables the age group detection function.
   * 
   * When the function is enabled, the application can recommend content based on the age group detection result.
   * 
   * > **NOTE**
   * >
   * > This API is supported only on some phones. Error code **801** is returned if it is called on unsupported phones.
   *
   * @param { 'userAgeGroupDetected' } type - Event type. The value **userAgeGroupDetected** indicates the event of
   *     enabling age group detection.
   * @param { Callback<UserClassification> } callback - Callback used to return the detection result. The callback
   *     to be unsubscribed must be the same as the one passed in during subscription. If not specified, all
   *     callbacks currently listening for this event will be unsubscribed.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @throws { BusinessError } 33900002 - Subscription failed. Possible causes:
   *     <br>1. Callback registration failed.
   *     <br>2. Failed to bind the native object to the JS wrapper.
   *     <br>3. Node-API invocation exception, such as invalid Node-API status.
   *     <br>4. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @deprecated since 24
   */
  function on(type: 'userAgeGroupDetected', callback: Callback<UserClassification>): void;

  /**
   * Disables the age group detection function.
   * 
   * > **NOTE**
   * >
   * > This API is supported only on some phones. Error code **33900003** is returned if it is called on unsupported 
   * > phones.
   *
   * @param { 'userAgeGroupDetected' } type - Event type. The value **userAgeGroupDetected** indicates the event of
   *     enabling age group detection.
   * @param { Callback<UserClassification> } [callback] - Callback used to return the detection result.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @throws { BusinessError } 33900003 - Unsubscription failed. Possible causes:
   *     <br>1. Callback failure.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   *     <br>3. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @deprecated since 24
   */
  function off(type: 'userAgeGroupDetected', callback?: Callback<UserClassification>): void;

  /**
   * Subscribe to age group detection feature.
   *
   * @param { Callback<UserClassification> } callback - Indicates the callback for getting the event data.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @throws { BusinessError } 33900002 - Subscription failed. Possible causes:
   *     <br>1. Callback registration failed.
   *     <br>2. Failed to bind the native object to the JS wrapper.
   *     <br>3. Node-API invocation exception, such as invalid Node-API status.
   *     <br>4. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 23 static
   * @deprecated since 24
   */
  function onUserAgeGroupDetected(callback: Callback<UserClassification>): void;

  /**
   * Unsubscribe to age group detection feature.
   *
   * @param { Callback<UserClassification> } [callback] - Indicates the callback for getting the event data.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @throws { BusinessError } 33900003 - Unsubscription failed. Possible causes:
   *     <br>1. Callback failure.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   *     <br>3. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 23 static
   * @deprecated since 24
   */
  function offUserAgeGroupDetected(callback?: Callback<UserClassification>): void;

  /**
   * Enumerates device types.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum DeviceType {
    /**
     * Unknown device type.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN_TYPE = 0,

    /**
     * PC device.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PC = 0x0C,

    /**
     * Phone device.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PHONE = 0x0E,

    /**
     * Tablet device.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TABLET = 0x11
  }

  /**
   * Defines device information.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface DeviceInfo {
    /**
     * Device ID. A unique device identifier used to identify and distinguish different devices.
     * The string length ranges from 0 to 64.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceId: string;

    /**
     * Device network ID. A unique network identifier used for device networking and cross-device
     * communication. The string length ranges from 0 to 64.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    networkId: string;

    /**
     * Device name. A user-defined device display name used to show device information in the UI.
     * The string length ranges from 0 to 64.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceName: string;

    /**
     * Device type.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceType: DeviceType;
  }

  /**
   * Enumerates user status detection features.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum UserStatusFeature {
    /**
     * Gesture recognition feature (100ms reporting interval).
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GESTURES_RECOGNITION = 5,

    /**
     * Anti-mistouch detection feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ANTI_MISTOUCH = 6,

    /**
     * Quick gesture recognition feature (20ms reporting interval).
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    QUICK_GESTURES_RECOGNITION = 7,

    /**
     * Face relative position recognition feature (100ms reporting interval).
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_RELATIVE_POSITION_RECOGNITION = 8,

    /**
     * Quick face relative position recognition feature (20ms reporting interval).
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    QUICK_FACE_RELATIVE_POSITION_RECOGNITION = 9,

    /**
     * Hand-eye coordination (attention) recognition feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HAND_GAZE_COORDINATION = 11,

    /**
     * User blowing status detection feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USER_BLOWING_STATUS = 12,

    /**
     * User mood detection feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USER_MOOD = 13,

    /**
     * Comfort reminder detection feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMFORT_REMINDER = 15,

    /**
     * Environmental sound detection feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ENV_SOUND = 17,

    /**
     * External screen anti-mistouch detection feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EXT_SCREEN_ANTI_MISTOUCH = 19
  }

  /**
   * Enumerates user status atomic capabilities.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum UserStatusAtomicCap {
    /**
     * Unknown atomic capability.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ATOMIC_UNKNOWN = 0,

    /**
     * Detects face position relative to screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_RELATIVE_POSITION = 1,

    /**
     * Detects face number changes.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_NUM_CHANGE = 2,

    /**
     * Detects user hand gestures.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GESTURE = 3,

    /**
     * Detects face angle relative to screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_ANGLE = 4,

    /**
     * Detects sensor gravity data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_GRAVITY = 5,

    /**
     * Detects sensor gyroscope data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_GYROSCOPE = 6,

    /**
     * Detects sensor accelerometer data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_ACCELEROMETER = 7,

    /**
     * Detects sensor linear acceleration data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_LINEAR_ACCELERATION = 8,

    /**
     * Detects sensor rotation vector data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_ROTATION_VECTOR = 9,

    /**
     * Detects sensor orientation data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_ORIENTATION = 10,

    /**
     * Detects user blow data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    BLOWING_STATUS = 11,

    /**
     * Detects user emotion data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MOOD_STATUS = 12,

    /**
     * Detects user ambient sound intensity.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ENV_SOUND = 13,

    /**
     * Detects user noise intensity.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NOISE_SOUND = 14,

    /**
     * Detects whether user is gazing at screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EYE_GAZE_SCREEN = 15
  }

  /**
   * Enumerates comfort reminder levels required for triggering specific alert ringtones.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum ReminderLevel {
    /**
     * Weak reminder level.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WEAK_REMINDER = 0,

    /**
     * Normal reminder level.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NORMAL_REMINDER = 1
  }

  /**
   * Defines user status data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserStatusData {
    /**
     * User status detection feature type.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    feature: UserStatusFeature;

    /**
     * Multi-stage detection status under a specific function. The string value indicates the corresponding
     * detection status, and the maximum length of the string is 64.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    status: string;

    /**
     * User status detection result.
     * The value `0` indicates success, and other values indicate failure.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    result: int;

    /**
     * Business error code.
     * The value `0` indicates success, and other values indicate failure.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    errCode: int;
  }

  /**
   * Defines user blow data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserBlowData extends UserStatusData {
    /**
     * Coordinates of the face relative to the screen. The array length is 8, representing the x and y
     * coordinates of the four vertices (top, bottom, left, and right). The value range in the
     * normalized coordinate system is [0,640]. Unit: px
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    facePosition?: double[];

    /**
     * Blow strength level.
     * The value must be an integer within [1,12].
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    strengthLevel?: int;

    /**
     * Blow direction.
     * The value ranges from 0 to 2. 0: Not blowing, 1: Blowing from bottom mic, 2: Blowing from top mic.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    blowDirection?: int;

    /**
     * User emotion level.
     * The value ranges from 0 to 5. 0: Very happy, 1: A little happy, 2: Calm,
     * 3: A little unhappy, 4: Angry, 5: Crying.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    emotion?: int;

    /**
     * Whether user is gazing at screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isGazeStatus?: boolean;

    /**
     * Gravity acceleration of the device in the current state. The array length is 3, representing the
     * acceleration components in the x, y, and z directions. Unit: m/s².
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gravityAcceleration?: double[];

    /**
     * Linear acceleration of the device in the current state. A two-dimensional array. The outer layer
     * represents sampling at multiple points, and the inner layer is an array of length 3, representing
     * the acceleration components in the x, y, and z directions. Unit: m/s².
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    linearAcceleration?: double[][];
  }

  /**
   * Defines user emotion data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserEmotionData extends UserStatusData {
    /**
     * User real-time emotion level.
     * The value ranges from 0 to 5. 0: Very happy, 1: A little happy, 2: Calm,
     * 3: A little unhappy, 4: Angry, 5: Crying.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    emotionRealTime ?: int;

    /**
     * User emotion confidence.
     * The value ranges from 0 to 100. A larger value indicates a higher confidence.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    confidence?: int;

    /**
     * Whether emotion data is real-time.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isRealTime?: boolean;

    /**
     * User non-real-time emotion level.
     * The value ranges from 0 to 5. 0: Very happy, 1: A little happy, 2: Calm,
     * 3: A little unhappy, 4: Angry, 5: Crying.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    emotionNonRealTime ?: int[];

    /**
     * Gravity acceleration of the device in the current state. The array length is 3, representing the
     * acceleration components in the x, y, and z directions respectively, in m/s².
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gravityAcceleration?: double[];

    /**
     * Linear acceleration of the device in the current state. It is a two-dimensional array. The outer
     * layer represents sampling at multiple points, and the inner layer is an array of length 3,
     * representing the acceleration components in the x, y, and z directions respectively, in m/s².
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    linearAcceleration?: double[][];
  }

  /**
   * Defines comfort reminder data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface ComfortReminderData extends UserStatusData {
    /**
     * Reminder level after comprehensive detection.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fusionReminderData: ReminderLevel;

    /**
     * Reminder level when gazing at the screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    swingReminderData: ReminderLevel;

    /**
     * Event type. The value 0 indicates a gaze event, and 1 indicates an ambient sound event.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    eventType: int;
  }

  /**
   * Defines user face data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserFacesData extends UserStatusData {
    /**
     * Viewing angle of the user looking at the screen. Value range: [0, 90]. Unit: deg.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    visualAngle?: double[];

    /**
     * Angular velocity of the device in the current state. The array length is 3, representing the
     * angular velocity components of rotation around the x, y, and z axes respectively. Unit: rad/s.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    angularVelocity?: double[];

    /**
     * Gravity acceleration of the device in the current state. The array length is 3, representing
     * the acceleration components in the x, y, and z directions respectively. Unit: m/s².
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gravityAcceleration?: double[];

    /**
     * Linear acceleration of the device in the current state. Two-dimensional array. The outer layer
     * represents sampling at multiple points, and the inner layer is an array of length 3, representing
     * the acceleration components in the x, y, and z directions respectively. Unit: m/s².
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    linearAcceleration?: double[][];

    /**
     * Azimuth of the device in the current state. The array length is 3, representing the yaw
     * angle (around the y-axis), pitch angle (around the x-axis), and roll angle (around the z-axis)
     * respectively. Value range: [0, 360]. Unit: deg.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    azimuth?: double[];

    /**
     * Number of detected faces. Value range: [0, 3].
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    faceNum?: int;
  }

  /**
   * Defines user gesture data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserGesturesData extends UserFacesData {
    /**
     * Whether the user's hand exists. Value range: [true, false].
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isHandExist?: boolean;

    /**
     * Coordinate position of the hand relative to the screen. The array length is 8, representing the x
     * and y coordinates of the four vertices (top, bottom, left, and right). The value range in the
     * normalized coordinate system is [0, 640].
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    handPosition?: double[];

    /**
     * User's dynamic gesture type. Value range: [0, 3]. 0: flip up, 1: flip down, 2: grab screen,
     * 3: release.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    motionGesture?: int;

    /**
     * User's static gesture type. Value range: [0, 3]. 0: palm, 1: fist, 2: scissors, 3: heart.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    handType?: int;

    /**
     * Angle between the user's gesture and the screen direction. The array contains the angle
     * values of the gesture in multiple dimensions. The value range of each elementis [0, 90]. Unit: deg.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    directionAngle?: double[];

    /**
     * Gesture speed, in frames per second (fps).
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gestureSpeed?: double[];
  }

  /**
   * Defines user face angle data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserFaceAngleData extends UserStatusData {
    /**
     * Network ID of device that user head is facing.
     * The maximum length is 128.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    hpeNetworkId: string;
  }

  /**
   * Subscribes to user status monitoring to obtain user status data. After calling subscribe(), you must
   * call unsubscribe() to cancel the subscription and release callback resources when they are no longer
   * needed. Failure to call unsubscribe() causes callback resource leakage and affects application
   * performance. It is recommended to call configure() to configure feature parameters before calling
   * subscribe() to start the subscription.
   *
   * @param { UserStatusFeature } featureId - Indicates the feature to be subscribed to.
   * @param { Callback<UserStatusData> } callback - Callback invoked to return the user status data. It
   *     is invoked when the subscribed user status data is updated.
   * @param { DeviceInfo[] } [deviceInfo] - List of devices for which user status monitoring is to be
   *     enabled. When featureId is HAND_GAZE_COORDINATION, valid and non-empty deviceInfo must be
   *     provided; otherwise, the function may not work properly. For other featureId values, this
   *     parameter can be omitted. If an empty value, undefined, or null is passed, it is considered that
   *     no actual value is provided.
   * @returns { int } Returns the registered callback ID.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as a invalid Node-API status.
   * @throws { BusinessError } 33900002 - Subscription failed. Possible causes:
   *     <br>1. Callback registration failed.
   *     <br>2. Failed to bind the native object to the JS wrapper.
   *     <br>3. Node-API invocation exception, such as invalid Node-API status.
   *     <br>4. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function subscribe(featureId: UserStatusFeature, callback: Callback<UserStatusData>,
    deviceInfo?: DeviceInfo[]): int;

  /**
   * Unsubscribes from user status monitoring. This method is used in pair with subscribe() to cancel the
   * subscription callback and release resources. It must be called after subscribe(). Unsubscribing from
   * a featureId that is not subscribed returns a failure. It is recommended to call unsubscribe() when
   * the application exits or no longer needs monitoring.
   *
   * @param { UserStatusFeature } featureId - Indicates the feature to be unsubscribed from.
   * @param { Callback<UserStatusData> } [callback] - Callback for the notification event. If null,
   *     undefined, or null is passed, all notification events subscribed to by featureId are unsubscribed.
   * @returns { int } Returns 0 if the operation succeeds; otherwise, returns a non-zero value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @throws { BusinessError } 33900003 - Unsubscription failed. Possible causes:
   *     <br>1. Callback failure.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   *     <br>3. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function unsubscribe(featureId: UserStatusFeature, callback?: Callback<UserStatusData>): int;

  /**
   * Configures feature parameters. After a successful call, the configuration parameters of the specified
   * feature are updated, affecting the subsequent detection behavior of the feature, such as detection
   * sensitivity, sampling frequency, and enabled detection items. It is recommended to call configure()
   * to configure feature parameters before subscribe() to ensure that the configuration takes effect upon
   * subscription. For features that require specific configuration (such as the real-time/non-real-time
   * mode of USER_MOOD), it is recommended to call configure() before subscribe().
   *
   * **detail Definition**
   *
   * | featureId | description | value | Description |
   * | --- | --- | --- | --- |
   * | USER_MOOD | isRealTime | [ ] | **isRealTime** takes the value **0** or **1**, where **0** indicates non-real-time
   * and **1** indicates real-time. Obtaining data in real-time mode increases performance overhead. It is recommended to
   * select an appropriate mode based on business needs to optimize performance. |
   * | - | atomicCapabilities | [ ] | **atomicCapabilities** can contain one or more values, and duplicate values are automatically deduplicated. Enabling multiple capabilities increases the computational load. It is recommended to select capabilities on demand based on business requirements to optimize performance.<br>5=atomic gravity sensor<br>8=atomic linear acceleration sensor<br>12=atomic emotion capability |
   * | GESTURES_RECOGNITION<br>QUICK_GESTURES_RECOGNITION | dynamicGestureTypes | [ ] | **dynamicGestureTypes** can contain one or more values, and duplicate values are invalid. Enabling multiple gesture types increases the recognition computational load. It is recommended to select them on demand to optimize performance.<br>0=grab<br>1=swipe down<br>2=initial flip-up gesture<br>3=initial flip-down gesture<br>4=swipe up<br>5=fist to open palm<br>6=disappear |
   * | - | staticGestureTypes | [ ] | **staticGestureTypes** can contain one or more values, and duplicate values are invalid. Enabling multiple gesture types increases the recognition computational load. It is recommended to select them on demand to optimize performance.<br>7=palm<br>8=scissors hand<br>9=fist<br>10=heart gesture |
   * | USER_BLOWING_STATUS | atomicCapabilities | [ ] | **atomicCapabilities** can contain one or more values, and duplicate values are automatically deduplicated. Enabling multiple capabilities increases the computational load. It is recommended to select capabilities on demand based on business requirements to optimize performance.<br>5=atomic gravity sensor<br>8=atomic linear acceleration sensor<br>11=atomic blowing capability<br>12=atomic emotion capability<br>15=atomic screen gaze capability |
   *
   * @param { UserStatusFeature } featureId - Feature to configure.
   * @param { string } detail - Configuration parameter, a JSON format string. It contains a params array,
   *     where each parameter contains the description (parameter name) and value (parameter value array)
   *     fields. For the specific format and value range, see the detail definition table below.
   * @returns { int } Configuration execution result. The value 0 indicates that the operation is
   *     successful, and a non-zero value indicates that the operation fails.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function configure(featureId: UserStatusFeature, detail: string): int;

  /**
   * Queries the atomic capabilities supported by the device. This method determines whether the specified
   * atomic capabilities are supported through the underlying interface and returns the list of
   * capabilities actually supported by the device.
   *
   * @param { UserStatusAtomicCap[] } capabilities - List of atomic capabilities to query.
   * @returns { UserStatusAtomicCap[] } Returns the list of device-supported atomic capabilities.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function queryCapabilities(capabilities: UserStatusAtomicCap[]): UserStatusAtomicCap[];
}
export default userStatus;

