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
 * @file Variable Frame Rate
 * @kit ArkGraphics2D
 */

import type { Callback } from './@ohos.base';
/*** if arkts static */
import { ExpectedFrameRateRange } from './arkui/component/common';
/*** endif */

/**
 * Variable frame rate support allows developers to run UI services at a specified frame rate. It is generally used in scenarios where developers draw the UI themselves and have specific requirements for the frame rate. The system adjusts the drawing frequency based on the set expected frame rate, minimum frame rate, and maximum frame rate to meet the requirements of different scenarios.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice [since 26.0.1]
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace displaySync {
  /**
   * Developers can obtain the timestamp information of frame drawing from the callback function, including the timestamp when the current frame arrives and the targetTimestamp when the next frame is expected to arrive.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 26.0.1]
   * @since 11 dynamic
   * @since 23 static
   */
  interface IntervalInfo {
    /**
     * Time when the current frame arrives (in nanoseconds). Monotonically increasing time since system startup.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 26.0.1]
     * @since 11 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * Expected arrival time of the next frame (in nanoseconds). Monotonically increasing time since system startup. The value must be greater than timestamp.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 26.0.1]
     * @since 11 dynamic
     * @since 23 static
     */
    targetTimestamp: long;
  }

  /**
   * An instance for setting the expected frame rate and callback function. It is used to set the expected frame rate range, register the frame callback function, and start and stop the frame callback.
   * Before calling any of the following APIs, you must use displaySync.create() to create a DisplaySync instance and then call the corresponding method through this instance.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 26.0.1]
   * @since 11 dynamic
   * @since 23 static
   */
  interface DisplaySync {
    /**
     * Sets the expected frame rate range. The expected frame rate range is used as a reference for system scheduling, and the system tries to adjust the drawing frame rate within this range.
     * If this API is not called or ExpectedFrameRateRange(0, 0, 0) is passed in, the current frame rate of the application is followed. It is recommended to set the range before calling start so that it takes effect immediately. Setting the range after calling start also takes effect, but there may be a delay.
     * 
     * @param { ExpectedFrameRateRange } rateRange - Sets the expected frame rate range of DisplaySync, which contains three fields: expected, min, and max, in frames per second (fps).
     *                                               The fields must be non-negative integers, with a value range of [0, the maximum frame rate of the device], and must satisfy min <= expected <= max. If the value is out of the valid range, error code 401 is thrown.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1. Mandatory parameters are left unspecified.
     *                                 2. Incorrect parameter types.
     *                                 3. Parameter verification failed.
     *                                 Or check if ExpectedFrameRateRange is valid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 26.0.1]
     * @since 11 dynamic
     * @since 23 static
     */
    setExpectedFrameRateRange(rateRange: ExpectedFrameRateRange) : void;

    /**
     * Subscribes to change events of each frame. After the callback function is registered, you must call start to start the DisplaySync object; only then will the system trigger the callback on each frame.
     * This API is used together with off('frame') to unregister the callback function. The callback function is executed on the UI main thread. The callback frequency is affected by the frame rate range set by setExpectedFrameRateRange.
     * If the callback takes too long to execute, frame freezing may occur. It is recommended that only lightweight business logic be performed in the callback.
     * 
     * @param { 'frame' } type - Type of the callback to set (only 'frame' is supported).
     * @param { Callback<IntervalInfo> } callback - Callback function for subscribing to frame changes. IntervalInfo contains two attributes: timestamp (the arrival time of the current frame) and targetTimestamp (the expected arrival time of the next frame), both in nanoseconds.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 26.0.1]
     * @since 11 dynamic
     */
    on(type: 'frame', callback: Callback<IntervalInfo>): void;

    /**
     * Subscribes to change events of each frame.
     * 
     * @param { Callback<IntervalInfo> } callback - Callback used for subscription.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onFrame(callback: Callback<IntervalInfo>): void;

    /**
     * Unsubscribes from change events of each frame. This API is used together with on('frame'). After the unsubscription succeeds, the callback function will no longer be triggered.
     * 
     * @param { 'frame' } type - Type of the callback to set (only 'frame' is supported).
     * @param { Callback<IntervalInfo> } [callback] - Callback function registered when on('frame') is called, used to unsubscribe from the callback function. It must be used after the callback has been registered through on('frame').
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 26.0.1]
     * @since 11 dynamic
     */
    off(type: 'frame', callback?: Callback<IntervalInfo>): void;

    /**
     * Unsubscribes from change events of each frame.
     * 
     * @param { Callback<IntervalInfo> } [callback] - Callback used for unsubscription. If no value is passed in, all subscriptions to the specified event are canceled.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offFrame(callback?: Callback<IntervalInfo>): void;

    /**
     * Makes the expected frame rate range set by setExpectedFrameRateRange take effect. If a callback function is registered through on('frame'), this API starts requesting VSync signals and triggers the registered callback once per frame. This API is used together with stop.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 26.0.1]
     * @since 11 dynamic
     * @since 23 static
     */
    start(): void;

    /**
     * Closes the expected frame rate range and stops the callback for each frame. This method must be called after start. After it is stopped, the DisplaySync configurations (such as the expected frame rate range and callback function) are retained and can be restarted at any time through start.
     * The stop method disassociates DisplaySync from the UI context and window, and usually no specific UI context is required.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 26.0.1]
     * @since 11 dynamic
     * @since 23 static
     */
    stop(): void;
  }

  /**
   * Creates a DisplaySync object, through which you can set the frame rate of the custom UI content.
   * 
   * @returns { DisplaySync } Returns a DisplaySync object instance, which is used to set the frame rate range, register the frame callback function, and control the start and stop of the callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 26.0.1]
   * @since 11 dynamic
   * @since 23 static
   */
  function create(): DisplaySync;
}

export default displaySync;
