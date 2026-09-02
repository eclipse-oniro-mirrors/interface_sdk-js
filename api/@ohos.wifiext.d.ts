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
 * > **NOTE**
 * >
 * > The APIs provided by this module are no longer maintained since API version 9. You are advised to use 
 * > [@ohos.wifiManagerExt (WLAN Extension)]{@link @ohos.wifiManagerExt:wifiManagerExt}.
 *
 * @syscap SystemCapability.Communication.WiFi.AP.Extension
 * @since 8 dynamiconly
 */
declare namespace wifiext {
  /**
   * Enables the Wi-Fi hotspot.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.enableHotspot
   */
  function enableHotspot(): boolean;

  /**
   * Disables the Wi-Fi hotspot.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.disableHotspot
   */
  function disableHotspot(): boolean;

  /**
   * Obtains the supported power models. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<Array<PowerModel>> } Promise used to return the power models obtained.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.getSupportedPowerMode
   */
  function getSupportedPowerModel(): Promise<Array<PowerModel>>;

  /**
   * Obtains the supported power models. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<Array<PowerModel>> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **0** and **data** is the power models obtained. If the operation fails, **err** is not
   *     **0**.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.getSupportedPowerMode
   */
  function getSupportedPowerModel(callback: AsyncCallback<Array<PowerModel>>): void;

  /**
   * Obtains the power model. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<PowerModel> } Promise used to return the power models obtained.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.getPowerMode
   */
  function getPowerModel(): Promise<PowerModel>;

  /**
   * Obtains the power model. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<PowerModel> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **0** and **data** is the power model obtained. If the operation fails, **err** is not **0**.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.getPowerMode
   */
  function getPowerModel(callback: AsyncCallback<PowerModel>): void;

  /**
   * Sets the power model.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @param { PowerModel } model - Power model to set.
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.setPowerMode
   */
  function setPowerModel(model: PowerModel): boolean;

  /**
   * Enumerates the power models.
   *
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.PowerMode
   */
  export enum PowerModel {
    /**
     * Sleeping
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Extension
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManagerExt/wifiManagerExt.PowerMode
     */
    SLEEPING = 0,

    /**
     * General
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Extension
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManagerExt/wifiManagerExt.PowerMode
     */
    GENERAL = 1,

    /**
     * Through_wall
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Extension
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManagerExt/wifiManagerExt.PowerMode
     */
    THROUGH_WALL = 2,
  }
}

export default wifiext;