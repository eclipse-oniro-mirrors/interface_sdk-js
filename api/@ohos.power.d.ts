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
 * @file Power Management
 * @kit BasicServicesKit
 */

import { AsyncCallback, BusinessError, Callback } from './@ohos.base';

/**
 * The **power** module provides APIs for rebooting and shutting down the system, as well as querying the screen status.
 * You can use these APIs to obtain the device activity status, power mode, and screen on/off status.
 *
 * @syscap SystemCapability.PowerManager.PowerManager.Core
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace power {
  /**
   * Shuts down the system.
   *
   * @permission ohos.permission.REBOOT
   * @param { string } reason - Shutdown reason. The value must be a string.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  function shutdown(reason: string): void;

  /**
   * Restarts the system.
   *
   * @permission ohos.permission.REBOOT
   * @param { string } reason - Indicates the restart reason. For example, "updater" indicates entering the updater mode
   *     after the restart. If the parameter is not specified, the system enters the normal mode after the restart.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead power.reboot
   */
  function rebootDevice(reason: string): void;

  /**
   * Reboots a device.
   *
   * @permission ohos.permission.REBOOT
   * @param { string } reason - Indicates the restart reason. For example, "updater" indicates entering the updater mode
   *     after the restart. If the parameter is not specified, the system enters the normal mode after the restart.
   *     reason parameter must be of type string.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function reboot(reason: string): void;

  /**
   * Checks the screen status of the current device. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined** and **data** is the screen status obtained, where the value **true** indicates on and
   *     the value **false** indicates off. Otherwise, **err** is an error object.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead power.isActive
   */
  function isScreenOn(callback: AsyncCallback<boolean>): void;

  /**
   * Checks the screen status of the current device. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Returns true if the screen is on; returns false otherwise.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead power.isActive
   */
  function isScreenOn(): Promise<boolean>;

  /**
   * Checks whether the current device is active.
   *
   * - A device with a screen is active when the screen is on and inactive when the screen is off.
   * - A device without a screen is active when it exits the sleep mode and inactive when it enters the sleep mode.
   *
   * @returns { boolean } The value true is returned for the active state, and false is returned for the inactive
   *     state or failure to obtain the device active state.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function isActive(): boolean;

  /**
   * Wakes up a device.
   *
   * @permission ohos.permission.POWER_MANAGER [since 19]
   * @param { string } detail - Wakeup reason. The value must be a string.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 19]
   * @throws { BusinessError } 801 - Capability not supported. This API cannot work in car devices. [since 26.0.1]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function wakeup(detail: string): void;

  /**
   * Enables a device to enter the sleep state.
   *
   * @permission ohos.permission.POWER_MANAGER [since 19]
   * @param { boolean } isImmediate - Whether the device enters the sleep state immediately. The value **true**
   *     indicates that the device enters the sleep state immediately after the screen is turned off; **false**
   *     indicates that the system controls when the device enters the sleep state. If this parameter is not set, the
   *     default value **false** is used. If you only want to turn off the screen, you are advised not to set this
   *     parameter.<br>**NOTE**: This parameter is supported since API version 10. [since 10]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 4900701 - Failed to suspend the device. Possible causes:
   *     1. Not allowed to turn off the screen during the exam. [since 26.0.1]
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 19]
   * @throws { BusinessError } 801 - Capability not supported. This API cannot work in car devices. [since 26.0.1]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function suspend(isImmediate?: boolean): void;

  /**
   * Obtains the power mode of the current device. Different power modes correspond to different device behavior
   * policies. Developers can adjust application behavior based on the returned mode value to adapt to the current mode.
   * For the definition and description of each mode, see DevicePowerMode.
   * To query the sub-mode, use [getPowerSubMode]{@link getPowerSubMode}.
   *
   * @returns { DevicePowerMode }Indicates the power mode of the current device. The value can be Standard, Power
   *     Saving, Performance, or Super Power Saving.
   *     When the power mode of the current device fails to be obtained, the value 0 is returned. The value is not 
   *     within the value range defined by the [DevicePwerMode]{@link DevicePowerMode} enumeration. Developers
   *     should check whether the return value is a valid enumerated value (600 or more).
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function getPowerMode(): DevicePowerMode;

  /**
   * Sets the power mode of a device. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.POWER_OPTIMIZATION
   * @param { DevicePowerMode } mode - Power mode. The value must be an enum.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result.<br> If the power mode is
   *     successfully set, **err** is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies. [since 26.1.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900301 - Setting the power mode failed. [since 23]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setPowerMode(mode: DevicePowerMode, callback: AsyncCallback<void>): void;

  /**
   * Sets the power mode of a device. This API uses a promise to return the result.
   * To set both the power mode and the sub-mode, use [setPowerMode(mode, subMode)]{@link setPowerMode(mode: DevicePowerMode, subMode?: DevicePowerSubMode)}.
   *
   * @permission ohos.permission.POWER_OPTIMIZATION
   * @param { DevicePowerMode } mode - Power mode. The value must be an enum.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies. [since 26.1.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900301 - Setting the power mode failed. [since 23]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setPowerMode(mode: DevicePowerMode): Promise<void>;

  /**
   * Obtains the power sub-mode of this device.
   * To query the power mode, use [getPowerMode]{@link getPowerMode}.
   *
   * When the current power mode does not support sub-mode, SUB_MODE_INVALID is returned.
   *
   * @returns { DevicePowerSubMode } Power sub-mode. Returns SUB_MODE_INVALID when the
   *     current power mode does not support sub-mode.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getPowerSubMode(): DevicePowerSubMode;

  /**
   * Sets the power mode and sub-mode of a device. This API uses a promise to return the result.
   * To set the power mode only (without sub-mode), use [setPowerMode(promise)]{@link setPowerMode(mode: DevicePowerMode)} or [setPowerMode(callback)]{@link setPowerMode(mode: DevicePowerMode, callback: AsyncCallback<void>)}.
   *
   * @permission ohos.permission.POWER_OPTIMIZATION
   * @param { DevicePowerMode } mode - Power mode. The value must be an enum.
   * @param { DevicePowerSubMode } subMode - Power sub-mode. The value must be an enum.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 4900301 - Failed to set the power mode. Possible causes:
   *     <br>1. The power mode switching constraint is not met;
   *     <br>2. The power mode does not support the sub-mode, or the sub-mode does not match the power mode.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function setPowerMode(mode: DevicePowerMode, subMode?: DevicePowerSubMode): Promise<void>;

  /**
   * Checks whether the device is in standby mode.
   *
   * @returns { boolean } The value **true** indicates that the device is in standby mode, and the value **false**
   *     indicates the opposite.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function isStandby(): boolean;

  /**
   * Hibernates a device.
   *
   * @permission ohos.permission.POWER_MANAGER [since 19]
   * @param { boolean } clearMemory - Whether to clear the memory. The value **true** means to clear the memory before
   *     the system enters the hibernation state, and the value **false** means the opposite.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 19]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function hibernate(clearMemory: boolean): void;

  /**
   * Sets the screen-off timeout duration, in unit of ms.
   *
   * @permission ohos.permission.POWER_MANAGER [since 19]
   * @param { long } timeout - Screen-off timeout duration, in milliseconds. A value greater than **0** indicates the
   *     specified timeout duration is used, and the value **-1** indicates that the default timeout duration is used.
   *     Other values are invalid.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 19]
   * @throws { BusinessError } 801 - Capability not supported. This API cannot work in car devices. [since 26.0.1]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function setScreenOffTime(timeout: long): void;

  /**
   * Refreshes the device activity status (for example, resetting the screen-off time).
   *
   * This API takes effect only when the device is active. For details about the device activity status, see
   * [power.isActive]{@link @ohos.power:power.isActive}.
   *
   * @permission ohos.permission.REFRESH_USER_ACTION
   * @param { string } reason - Reason for refreshing the device activity status. The value must be a string.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 4900201 - The device activity is being refreshed too frequently; the minimum time
   *     interval is 100 ms.
   * @throws { BusinessError } 801 - Capability not supported. This API cannot work in car devices. [since 26.0.1]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function refreshActivity(reason: string): void;

  /**
   * Registers a callback to be invoked when the device is shut down or rebooted. This API uses an asynchronous callback
   * to return the result.
   *
   * @permission ohos.permission.REBOOT
   * @param { Callback<boolean> } callback - Callback used to return the result. The value **true** indicates that the
   *     device is rebooted, and **false** indicates that the device is shut down.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  function registerShutdownCallback(callback: Callback<boolean>): void;

  /**
   * Unregisters the callback to be invoked when the device is shut down or rebooted. This API uses a callback to return
   * the result.
   *
   * @permission ohos.permission.REBOOT
   * @param { Callback<void> } [callback] - Callback that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  function unregisterShutdownCallback(callback?: Callback<void>): void;

  /**
   * Query the power configuration value for a given scene name.
   *
   * @permission ohos.permission.POWER_CONFIG
   * @param { string } sceneName - Indicates the scene name of the power configuration.
   *     sceneName parameter must be a string and its length cannot exceed 128 bytes.
   * @returns { string } Returns the power configuration value on success.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 4900400 - Invalid parameter. Possible causes:
   *     1. The sceneName parameter is an empty string;
   *     2. The length of sceneName parameter exceeds 128 bytes.
   * @throws { BusinessError } 4900501 - Failed to read the power configuration value.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getPowerConfig(sceneName: string): string;

  /**
   * Update the power configuration value for a given scene name.
   *
   * @permission ohos.permission.POWER_CONFIG
   * @param { string } sceneName - Indicates the scene name of the power configuration.
   *     sceneName parameter must be a string and its length cannot exceed 128 bytes.
   * @param { string } value - Indicates the power configuration value. value parameter must be a string and
   *     its length cannot exceed 128 bytes.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 4900400 - Invalid parameter. Possible causes:
   *     1. The sceneName or value parameter is an empty string;
   *     2. The length of sceneName parameter exceeds 128 bytes;
   *     3. The length of value parameter exceeds 128 bytes.
   * @throws { BusinessError } 4900601 - Failed to write the power configuration value.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setPowerConfig(sceneName: string, value: string): void;

  /**
   * Enumerates power modes.
   *
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DevicePowerMode {
    /**
     * Standard mode. It is the default value.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    MODE_NORMAL = 600,
    /**
     * Power saving mode.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    MODE_POWER_SAVE,
    /**
     * Performance mode.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    MODE_PERFORMANCE,
    /**
     * Extended power saving mode. This mode supports sub-modes defined in [DevicePowerSubMode]{@link power.DevicePowerSubMode}.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    MODE_EXTREME_POWER_SAVE,
    /**
     * Custom power saving mode.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    MODE_CUSTOM_POWER_SAVE = 650
  }

  /**
   * Enumerates power sub-modes.
   *
   * The enum value is composed of the power mode value and a sequence number:
   * - Prefix: the power mode value that this sub-mode belongs to. For example,
   *   603 in 603001 indicates this sub-mode belongs to [MODE_EXTREME_POWER_SAVE]{@link power.DevicePowerMode}.
   * - Suffix: the sequence number within the power mode, starting from 001.
   *
   * SUB_MODE_INVALID (-1) does not follow this rule and indicates that the
   * current power mode does not support sub-mode.
   *
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum DevicePowerSubMode {
    /**
     * Invalid sub-mode. Used when the power mode does not support sub-mode.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SUB_MODE_INVALID = -1,
    /**
     * Super power save sub-mode. Applies to [MODE_EXTREME_POWER_SAVE]{@link power.DevicePowerMode}.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SUB_MODE_SUPER_POWER_SAVE = 603001,
    /**
     * Emergency sub-mode. Applies to [MODE_EXTREME_POWER_SAVE]{@link power.DevicePowerMode}.
     * This is the default sub-mode for MODE_EXTREME_POWER_SAVE.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SUB_MODE_EMERGENCY = 603002
  }

  /**
   * Sets the power key filtering strategy. After the power service subscribes to the power key event, this API is used
   * to configure the processing mode of this event.
   *
   * For details about the power key filtering strategy, see
   * [power.PowerKeyFilteringStrategy]{@link @ohos.power:power.PowerKeyFilteringStrategy}.
   *
   * @permission ohos.permission.POWER_MANAGER
   * @param { PowerKeyFilteringStrategy } strategy - Power key filtering strategy. The value must be of the enum type.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function setPowerKeyFilteringStrategy(strategy: PowerKeyFilteringStrategy): void;

  /**
   * Enumerates the power key filtering strategies.
   *
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 21 dynamic
   * @since 23 static
   */
  export enum PowerKeyFilteringStrategy {
    /**
     * Disable the filtering of power key long-press event. This is the default value.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 21 dynamic
     * @since 23 static
     */
    DISABLE_LONG_PRESS_FILTERING = 0,
    /**
     * Filters the long-press event of the current power key once. The next is not filtered by default.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 21 dynamic
     * @since 23 static
     */
    LONG_PRESS_FILTERING_ONCE = 1
  }
}

export default power;