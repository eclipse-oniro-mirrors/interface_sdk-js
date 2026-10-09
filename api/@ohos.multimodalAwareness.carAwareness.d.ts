/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file Car awareness
 * @kit MultimodalAwarenessKit
 */
import { Callback } from './@ohos.base';

/**
 * This module provides car awareness capabilities, including spatial motion interaction, real-time weather recognition,
 * and refueling status recognition.
 *
 * @syscap SystemCapability.MultimodalAwareness.CarAwareness
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.1
 */
declare namespace carAwareness {
  /**
   * Enumerates the capability types supported by car awareness.
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  enum Capability {
    /**
     * Spatial motion capability, which supports recognizing the user's air gestures for operating the screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    SPATIAL_MOTION = 'SpatialMotion',
    /**
     * Spatial point capability, which supports recognizing the in-car components pointed to by the user.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    SPATIAL_POINT = 'SpatialPoint',
    /**
     * Spatial gesture capability, which supports recognizing the user's specific postures and actions.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    SPATIAL_GESTURE = 'SpatialGesture',
    /**
     * Real-time weather capability, which supports recognizing the weather conditions of the environment where the car
     * is currently located.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    REALTIME_WEATHER = 'RealTimeWeather',
    /**
     * Refueling capability, which supports recognizing the start and end states of car refueling.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    REFUELING = 'Refueling',
    /**
     * Car status capability, which supports obtaining vehicle-related status information.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    CAR_STATUS = 'CarStatus',
    /**
     * Habit recommendation capability, which supports generating recommendations based on user habits.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    HABIT_RECOMMENDATION = 'HabitRecommendation',
    /**
     * Spatial draw capability, which supports identifying the users' air gestures during mid-air drawing.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    SPATIAL_DRAW = 'SpatialDraw',
    /**
     * Gesture close door capability, which supports recognizing user's hand action for closing the doors.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    GESTURE_CLOSEDOOR = 'GestureCloseDoor',
    /**
     * Occupant sense capability, which supports recognizing position and classification of in-car occupants.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    OCCUPANT_SENSE = 'OccupantSense'
  }

  /**
   * Interface for spatial motion response info.
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  export interface SpatialMotionInfo {
    /**
     * Timestamp of the recognition result.
     * Unit: ms.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    timestamp: number;

    /**
     * X-axis coordinate of the hand on the screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    pointX: number;

    /**
     * Y-axis coordinate of the hand on the screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    pointY: number;

    /**
     * Gesture event type.
     * - 1: invalid
     * 0: ready
     * 1: move
     * 2: tap.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    event: number;
  }

  /**
   * Subscribes to spatial motion awareness results. If the device does not support this capability, error code 34000002
   * is thrown. You can obtain the supported capabilities by calling the getAllCapabilityList method. The data is
   * returned asynchronously through the callback.
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { Callback<SpatialMotionInfo> } callback - Callback invoked to return the spatial motion awareness data.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  function onSpatialMotion(callback: Callback<SpatialMotionInfo>): void;

  /**
   * Unsubscribes from spatial motion results.
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { Callback<SpatialMotionInfo> } [callback] - Callback for spatial motion event. If a specific callback is
   *     passed in, only the corresponding listener is unregistered; otherwise, all listeners are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  function offSpatialMotion(callback?: Callback<SpatialMotionInfo>): void;

  /**
   * Interface for real-time weather response info.
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  export interface RealTimeWeatherInfo {
    /**
     * Timestamp of the recognition result.
     * Unit: ms.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    timestamp: number;

    /**
     * Weather status.
     * - 1: Invalid
     * 0: Other
     * 1: Fog
     * 2: Dense fog
     * 3: Snow
     * 4: Heavy snow
     * 5: Rain
     * 6: Heavy rain.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    weather: number;
  }

  /**
   * Subscribes to real-time weather awareness results. If the device does not support this capability, error code
   * 34000002 is thrown. You can obtain the supported capabilities by calling the getAllCapabilityList method. The data
   * is returned asynchronously through the callback.
   *
   * @permission ohos.permission.vehicle.MMA_WEATHER
   * @param { Callback<RealTimeWeatherInfo> } callback - Callback invoked to return the real-time weather awareness
   *     data.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  function onRealTimeWeather(callback: Callback<RealTimeWeatherInfo>): void;

  /**
   * Unsubscribes from real-time weather results.
   *
   * @permission ohos.permission.vehicle.MMA_WEATHER
   * @param { Callback<RealTimeWeatherInfo> } [callback] - Callback for the real-time weather event. If a specific
   *     callback is passed in, only the corresponding listener is unregistered; otherwise, all listeners are
   *     unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  function offRealTimeWeather(callback?: Callback<RealTimeWeatherInfo>): void;

  /**
   * Interface for refueling response info.
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.1
   */
  export interface RefuelingInfo {
    /**
     * Timestamp of the recognition result.
     * Unit: ms.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.1
     */
    timestamp: number;

    /**
     * Refueling status.
     * - 1: invalid
     * 0: idle (refueling is not started)
     * 1: refueling started
     * 2: refueling finished.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.1
     */
    status: number;
  }

  /**
   * Subscribes to the refueling status awareness result. If the device does not support this capability, error code
   * 34000002 is thrown. You can obtain the supported capabilities by calling the getAllCapabilityList method. The data
   * is returned asynchronously through the callback.
   *
   * @permission ohos.permission.vehicle.MMA_ENERGYREFILL
   * @param { Callback<RefuelingInfo> } callback - Callback invoked to return the refueling recognition data.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.1
   */
  function onRefueling(callback: Callback<RefuelingInfo>): void;

  /**
   * Unsubscribes from the refueling status result.
   *
   * @permission ohos.permission.vehicle.MMA_ENERGYREFILL
   * @param { Callback<RefuelingInfo> } [callback] - Callback for the refueling status event. If a specific callback is
   *     passed in, only the corresponding listener is unregistered; otherwise, all listeners are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.1
   */
  function offRefueling(callback?: Callback<RefuelingInfo>): void;

  /**
   * Interface for general car awareness response info.
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  export interface CarAwarenessInfo {
    /**
     * Timestamp of the recognition result.
     * Unit: ms.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    timestamp: number;
    /**
     * Indicates specific awareness capability type.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    capability: Capability;
    /**
     * Key-value pair of the awareness result data. Different capabilities return different fields.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    awarenessEvent?:Record<string, Object>;
  }

  /**
   * Interface for car awareness subscription options.
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  export interface CarAwarenessOptions {
    /**
     * Custom awareness parameter key-value pairs, used to pass in configuration items for a specific capability.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    parameters?: Record<string, Object>;
  }

  /**
   * Subscribes to car awareness results. If the device does not support the capability, error code 34000002 is thrown.
   * You can obtain the supported capabilities by calling the getAllCapabilityList method. The data is returned
   * asynchronously through the callback.
   *
   * @param { Capability } capability - Specifies the type of the awareness capability to subscribe to.
   * @param { Callback<CarAwarenessInfo[]> } callback - Callback used to return the array of awareness response data.
   * @param { CarAwarenessOptions } [options] - Optional configuration items of the awareness capability.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  function onCarAwareness(capability: Capability, callback: Callback<CarAwarenessInfo[]>, options?:
  CarAwarenessOptions): void;

  /**
   * Unsubscribes from the specific car awareness capability result.
   *
   * @param { Capability } capability - Specifies the type of the awareness capability to unsubscribe.
   * @param { Callback<CarAwarenessInfo[]> } [callback] - Callback used to return specific car awareness event. If a
   *     specific callback is passed in, only the corresponding listener is unregistered; otherwise, all listeners are
   *     unregistered.
   * @param { CarAwarenessOptions } [options] - Optional configuration items of the awareness capability.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  function offCarAwareness(capability: Capability, callback?: Callback<CarAwarenessInfo[]>, options?:
  CarAwarenessOptions): void;

  /**
   * Obtains the list of all car awareness capabilities supported by the current device.
   *
   * @returns { Promise<Capability[]> } Promise used to return the list of awareness capability enums supported by the
   *     device.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  function getAllCapabilityList(): Promise<Capability[]>;

  /**
   * Updates the start/stop status of spatial action awareness.
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { number } event - Start/stop status value.
   *     0: end
   *     1: start
   *     The value must be an integer.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  function updateSpatialActionEnableStatus(event: number): void;

  /**
   * Updates the voice zone information for spatial action awareness.
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { number } zone - Voice zone ID.
   *     3: rear left
   *     4: rear right
   *     The value must be an integer.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  function updateSpatialActionZone(zone: number): void;

  /**
   * Obtains the car awareness result of the specified type once.
   *
   * @param { Capability } capability - Specifies the type of the awareness capability result to obtain.
   * @param { CarAwarenessOptions } [options] - Optional configuration items of the awareness capability.
   * @returns { Promise<CarAwarenessInfo[]> } Promise used to return an array of awareness result data.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  function getCarAwareness(capability: Capability, options?: CarAwarenessOptions): Promise<CarAwarenessInfo[]>;
}

export default carAwareness;
