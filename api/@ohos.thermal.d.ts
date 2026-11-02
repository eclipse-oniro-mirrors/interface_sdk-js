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
   * Subscribes to the callback notification when the thermal level changes. This API uses an asynchronous callback.
   * When Then device temperature crosses the threshold of a thermal level, the system automatically triggers a callback
   * notification and returns the new thermal level through the callback. This method used in pairs
   * with [thermal.unregisterThermalLevelCallback]{@link thermal.unregisterThermalLevelCallback} to cancel the
   * previously registered thermal level callback.
   *
   * - Only one callback can be subscribed to in each process. Repeatde subscriptions will overwrite the previous one.
   * - The callback function must return as soon as possible and cannot perform time-consuming operations (such as
   * synchronous file I/O). Otherwise, the delivery of the thermal level notification may be blocked.
   * - After the thermal management service restarts unexpectedly, the registered callback will automatically bacome
   * invalid and no notifucation will be received. You need to call registerThrrmalLevelCallback again to
   * resume the subscription.
   * - When the thermal management service is unavailable, the subscription may fail silently and no exception will be
   * thrown. You cannot determine whether the subscrption is successful based on the return value.
   * It is recommended that you call [thermal.getLevel]{@link thermal.getLevel} to check whether the service is
   * available after the subscription. If [thermal.getLevel]{@link thermal.getLevel} return COOL and the device
   * is obviously overheating, the service may be unavailable.
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
   * Unregisters from the thermal level changes. This API uses an asynchronous callback to return the result.
   * It is used together with [thermal.registerThermalLevelCallback]{@link thermal.registerThermalLevelCallback} to
   * cancel the previously registered  thermal level callback. If the callback to be unregistered is not registered,
   * no error will be reported and the operation is regarded as not performed.
   *
   * @param { Callback<void> } callback - (Optional) Callback function. This is a notification callback triggered
   * after the unregistration is completed, with no return value. This parameter is only used to receive notifications
   * about the completion of unsubscription. The callback fountion will be invoked once the unsubscription is
   * successfully completed. If this parameter is not passed, the unsubscription will still take effect,
   * but the callback notification will not be triggered.
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