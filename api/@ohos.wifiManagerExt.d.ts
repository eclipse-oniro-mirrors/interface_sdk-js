/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
 * @file WLAN Extension
 * @kit ConnectivityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
/**
 * This module provides Wi-Fi extension APIs for non-universal products.
 *
 * @syscap SystemCapability.Communication.WiFi.AP.Extension
 * @since 9 dynamiconly
 */
declare namespace wifiManagerExt {

  /**
   * Enables the Wi-Fi hotspot.
   * 
   * > **NOTE**
   * >
   * > This API is supported since API version 9 and deprecated since API version 10.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  function enableHotspot(): void;
   
  /**
   * Disables the Wi-Fi hotspot.
   * 
   * > **NOTE**
   * >
   * > This API is supported since API version 9 and deprecated since API version 10.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  function disableHotspot(): void;

  /**
    * Obtains the supported power modes. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<Array<PowerMode>> } Promise used to return the power modes obtained.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  function getSupportedPowerMode(): Promise<Array<PowerMode>>;

  /**
    * Obtains the supported power modes. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO
    * @param { AsyncCallback<Array<PowerMode>> } callback - Callback used to return the result. If the operation
    *     succeeds, **err** is **null** and **data** is the power modes obtained. Otherwise, **err** contains the error
    *     information and **data** is unavailable.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  function getSupportedPowerMode(callback: AsyncCallback<Array<PowerMode>>): void;

  /**
    * Obtains the current power mode. This API uses a promise to return the result.
    *
    * @permission ohos.permission.GET_WIFI_INFO
    * @returns { Promise<PowerMode> } Promise used to return the current power mode obtained.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  function getPowerMode(): Promise<PowerMode>;

  /**
    * Obtains the current power mode. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO
    * @param { AsyncCallback<PowerMode> } callback - Callback used to return the result. If the operation succeeds,
    *     **err** is **null** and **data** is the current power mode obtained. Otherwise, **err** contains the error
    *     information and **data** is unavailable.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  function getPowerMode(callback: AsyncCallback<PowerMode>): void;

  /**
   * Sets the power mode.
   * 
   * > **NOTE**
   * >
   * > This API is supported since API version 9 and deprecated since API version 10.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @param { PowerMode } mode - Power mode to set.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  function setPowerMode(mode: PowerMode): void;

  /**
   * Enumerates the power modes.
   *
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  export enum PowerMode {
    /**
     * Sleeping mode.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9 dynamiconly
     */

    SLEEPING = 0,

    /**
     * General mode.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9 dynamiconly
     */
    GENERAL = 1,

    /**
     * Through-wall mode.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9 dynamiconly
     */
    THROUGH_WALL = 2,
  }
}

export default wifiManagerExt;