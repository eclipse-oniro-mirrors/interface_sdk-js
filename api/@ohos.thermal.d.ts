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
 * @file Thermal Management
 * @kit BasicServicesKit
 */

import { AsyncCallback, BusinessError, Callback } from './@ohos.base';

/**
 * The **thermal** module provides thermal level-related callback and query APIs to obtain the information required for
 * thermal control.
 *
 * @syscap SystemCapability.PowerManager.ThermalManager
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace thermal {
  /**
   * Enumerates thermal levels.
   *
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 8 dynamic
   * @since 23 static
   */
  export enum ThermalLevel {
    /**
     * The device is cool, and services are not restricted.
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    COOL = 0,
    /**
     * The device is in the normal temperature range but it is getting warm. You need to downgrade or reduce the load of
     * imperceptible services.
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    NORMAL = 1,
    /**
     * The device is warm. You need to stop or delay some imperceptible services.
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    WARM = 2,
    /**
     * The device is heating up. You need to stop all imperceptible services and downgrade or reduce the load of non-
     * critical services.
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    HOT = 3,
    /**
     * The device is overheated. You need to stop all imperceptible services and downgrade or reduce the load of major
     * foreground services.
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    OVERHEATED = 4,
    /**
     * The device is overheated and is about to enter the emergency state. You need to stop all imperceptible services
     * and downgrade major foreground services to the maximum extent.
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    WARNING = 5,
    /**
     * The device has entered the emergency state. You need to stop all services except those for fundamental use.
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    EMERGENCY = 6,
    /**
     * The device is about to enter the escape state. You need to stop all services and take necessary emergency
     * measures such as data backup.
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 11 dynamic
     * @since 23 static
     */
    ESCAPE = 7
  }

  /**
   * Subscribes to the thermal level changes. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<ThermalLevel> } callback - Callback used to return thermal level. This parameter is of the
   *     function type.
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead thermal.registerThermalLevelCallback
   */
  function subscribeThermalLevel(callback: AsyncCallback<ThermalLevel>): void;

  /**
   * Subscribe to the callback notification when the hot level changes. Use callback asynchronous callback.
   * When the device temperature exceeds the threshold and the heat level changes, the system automatically triggers a
   * callback notification and returns the changed heat level through the callback.
   * This method is used in conjunction with
   * [thermal.unregisterThermalLevelCallback]{@link thermal.unregisterThermalLevelCallback},
   * Used to cancel a previously registered hot gear callback.
   *
   * - Only one callback is supported per process, and repeated subscriptions will be overwritten.
   * - The callback function must be returned as soon as possible. Do not perform time-consuming operations(such as
   * synchronizing file I/Os). Otherwise, the delivery of system hot-level notifications may be blocked.
   * - When the hot management service restarts abnormally, the registered callback will automatically become invalid
   * and no notification will be received. The developer needs to call registerThermalLevelCallback again to resume the
   * subscription.
   * - Subscriptions may fail silently without throwing an exception when the hot management service is unavailable.
   * Developers cannot determine whether the subscription is successful based on the returned value. It is recommended
   * to verify service availability via [thermal.getLevel]{@link thermal.getLevel} after subscription
   * (If the [thermal.getLevel]{@link thermal.getLevel} returns COOL and the device is significantly hot, the service
   * may not be available).
   *
   * @param { Callback<ThermalLevel> } callback - Callback used to return thermal level. This parameter is of the
   *     function type.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types.
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 9 dynamic
   * @since 23 static
   */
  function registerThermalLevelCallback(callback: Callback<ThermalLevel>): void;

  /**
   * Unsubscribes from the thermal level changes. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback that returns no value. If this parameter is not set, all
   *     callbacks will be unregistered.
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead thermal.unregisterThermalLevelCallback
   */
  function unsubscribeThermalLevel(callback?: AsyncCallback<void>): void;

  /**
   * Unsubscribe from the callback notification when the hot level changes. Use callback asynchronous callback. This
   * method is used in conjunction with thermal.registerThermalLevelCallback,
   * Used to cancel a previously registered hot gear callback. No error is reported when unsubscribing from an
   * unregistered callback, and no operation is performed.
   *
   * @param { Callback<void> } [callback] - Callback function. Notification callback after the deregistration is
   *     complete. No value is returned.
   *     This parameter is used only to receive notifications indicating that the subscription is canceled.
   *     This callback function is invoked when the subscription is canceled successfully. If this parameter is not
   *     transferred, the subscription cancellation still takes effect, but no callback notification is triggered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 9 dynamic
   * @since 23 static
   */
  function unregisterThermalLevelCallback(callback?: Callback<void>): void;

  /**
   * Obtains the current thermal level.
   *
   * @returns { ThermalLevel } Thermal level.
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead thermal.getLevel
   */
  function getThermalLevel(): ThermalLevel;

  /**
   * Obtains the current thermal level.
   *
   * @returns { ThermalLevel } Thermal level.
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 9 dynamic
   * @since 23 static
   */
  function getLevel(): ThermalLevel;
}

export default thermal;