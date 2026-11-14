/*
 * Copyright (C) 2022-2023 Huawei Device Co., Ltd.
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
 * @file WLAN
 * @kit ConnectivityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * This module provides basic Wi-Fi functions, peer-to-peer (P2P) functions, and Wi-Fi message notification services. It
 * allows applications to communicate with devices over Wi-Fi.
 *
 * @syscap SystemCapability.Communication.WiFi.STA [since 12]
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace wifiManager {
  /**
   * Enable Wi-Fi.
   *
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   *     ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501003 - Operation failed because the service is being closed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function enableWifi(): void;

  /**
   * Disable Wi-Fi.
   *
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   *     ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501004 - Operation failed because the service is being opened.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 20 dynamic
   * @since 23 static
   */
  function disableWifi(): void;

  /**
   * Enables Wi-Fi partially, that is, enables P2P and Huawei Magneto Link (HML) while disabling STA. You need to 
   * register a callback for the **wifiStateChange** event to return the operation result.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501004 - Operation failed because the service is being opened.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function enableSemiWifi(): void;

  /**
   * Query the Wi-Fi status
   *
   * @permission ohos.permission.GET_WIFI_INFO [since 9 - 12]
   * @returns { boolean } Returns {@code true} if the Wi-Fi is active, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied. [since 9 - 12]
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isWifiActive(): boolean;

  /**
   * Scan Wi-Fi hotspot.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead wifiManager.startScan
   */
  function scan(): void;

  /**
   * Scan Wi-Fi hotspot.
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 21 dynamic
   * @since 23 static
   */
  function startScan(): void;

  /**
   * Obtain the scanned sta list.
   *
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or
   *     (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))
   * @returns { Promise<Array<WifiScanInfo>> } Returns information about scanned Wi-Fi hotspot if any.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead wifiManager.getScanInfoList
   */
  function getScanResults(): Promise<Array<WifiScanInfo>>;

  /**
   * Obtains the Wi-Fi state.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { WifiDetailState } Wi-Fi state obtained.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function getWifiDetailState(): WifiDetailState;

  /**
   * Obtain the scanned sta list.
   *
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or
   *     (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))
   * @param { AsyncCallback<Array<WifiScanInfo>> } callback - Returns information about scanned Wi-Fi hotspot if any.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead wifiManager.getScanInfoList
   */
  function getScanResults(callback: AsyncCallback<Array<WifiScanInfo>>): void;

  /**
   * Obtain the scanned sta list.
   *
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or
   *     (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))
   * @returns { Array<WifiScanInfo> } Returns information about scanned Wi-Fi hotspot if any.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead wifiManager.getScanInfoList
   */
  function getScanResultsSync(): Array<WifiScanInfo>;

  /**
   * Obtain the scanned station list. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random
   * bssid.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiScanInfo> } Returns information about scanned Wi-Fi hotspot if any.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function getScanInfoList(): Array<WifiScanInfo>;

  /**
   * Sets whether scan is always allowed.
   * 
   * - This interface controls whether the device can support hotspot scanning when Wi-Fi is disabled.
   * - After this function is enabled, the system can still scan for nearby Wi-Fi hotspots even if Wi-Fi is disabled.
   * - This function is mainly used in network discovery and location locating scenarios.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { boolean } isScanAlwaysAllowed - Whether scan is always allowed. The value **true** indicates that scan is
   *     always allowed, and the value **false** indicates the opposite.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setScanAlwaysAllowed(isScanAlwaysAllowed: boolean): void;

  /**
   * Obtains whether scan is always allowed.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { boolean } Whether scan is always allowed. The value **true** means scan is always allowed, and the value
   *     **false** means scan is not allowed when Wi-Fi is disabled.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getScanAlwaysAllowed(): boolean;

  /**
   * Add Wi-Fi connection configuration to the device. The configuration will be updated when the configuration is 
   * added.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config - Indicates the device configuration for connection to the Wi-Fi network.
   * @returns { Promise<int> } Returns {@code networkId} if the configuration is added; returns {@code -1} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function addDeviceConfig(config: WifiDeviceConfig): Promise<int>;
  
  /**
   * Add Wi-Fi connection configuration to the device. The configuration will be updated when the configuration is 
   * added.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config - Indicates the device configuration for connection to the Wi-Fi network.
   * @param { AsyncCallback<int> } callback - Indicates call back of addDeviceConfig.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function addDeviceConfig(config: WifiDeviceConfig, callback: AsyncCallback<int>): void;

  /**
   * Add a specified candidate hotspot configuration and returns the networkId.
   * This method adds one configuration at a time. After this configuration is added,
   * your device will determine whether to connect to the hotspot.
   * The app must be in the foreground.
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - candidate config.
   * @returns { Promise<int> } Returns {@code networkId} if the configuration is added; returns {@code -1} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function addCandidateConfig(config: WifiDeviceConfig): Promise<int>;
  
  /**
   * Add a specified candidate hotspot configuration and returns the networkId.
   * This method adds one configuration at a time. After this configuration is added,
   * your device will determine whether to connect to the hotspot.
   * The app must be in the foreground.
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - candidate config.
   * @param { AsyncCallback<int> } callback - Indicates call back of addCandidateConfig.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function addCandidateConfig(config: WifiDeviceConfig, callback: AsyncCallback<int>): void;

  /**
   * Remove a specified candidate hotspot configuration, only the configuration which is added by ourself is allowed
   * to be removed.
   * The app must be in the foreground.
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - Network ID which will be removed.
   * @returns { Promise<void> } Return results.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function removeCandidateConfig(networkId: int): Promise<void>;

  /**
   * Remove a specified candidate hotspot configuration, only the configuration which is added by ourself is allowed
   * to be removed.
   * The app must be in the foreground.
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - Network ID which will be removed.
   * @param { AsyncCallback<void> } callback - Indicates call back of removeCandidateConfig.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function removeCandidateConfig(networkId: int, callback: AsyncCallback<void>): void;

  /**
   * Obtain the list of all existed candidate Wi-Fi configurations which added by ourself.
   * You can obtain only the Wi-Fi configurations you created on your own application.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @returns { Array<WifiDeviceConfig> } Returns the list of all existed Wi-Fi configurations you created on your
   *     application.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCandidateConfigs(): Array<WifiDeviceConfig>;

  /**
   * Connect to a specified candidate hotspot by networkId, only the configuration which is added by ourself
   * is allowed to be connected. This method connect to a configuration at a time.
   * The app must be in the foreground.
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - Network ID which will be connected. The value of networkId cannot be less than 0.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function connectToCandidateConfig(networkId: int): void;

  /**
   * Connect to the specified candidate hotspot using connect settings.
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { ConnectSettings } settings - Indicates the connection settings.
   * @returns { Promise<void> } - Returns the promise object that used to return the operation result.
   *     If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @throws { BusinessError } 2501001 - Wi-Fi STA disabled.
   * @throws { BusinessError } 2501005 - The user does not respond.
   * @throws { BusinessError } 2501006 - The user refused the action.
   * @throws { BusinessError } 2501007 - Parameter validation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function connectToCandidateConfig(settings: ConnectSettings): Promise<void>;

  /**
   * Connect to a specified candidate hotspot by networkId, and wait for user respond result.
   * Only the configuration which is added by ourself is allowed to be connected.
   * This method connect to a configuration at a time.
   * The app must be in the foreground.
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - Network ID which will be connected. The value of networkId cannot be less than 0.
   * @returns { Promise<void> } - Returns the promise object that used to return the operation result.
   *     If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @throws { BusinessError } 2501001 - Wi-Fi STA disabled.
   * @throws { BusinessError } 2501005 - The user does not respond.
   * @throws { BusinessError } 2501006 - The user refused the action.
   * @throws { BusinessError } 2501007 - Parameter validation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function connectToCandidateConfigWithUserAction(networkId: int): Promise<void>;

  /**
   * Disconnects a candidate network identified by networkId for a period of time.
   * The disconnected candidate network will not be re-associated during the block duration.
   * You can only disconnect candidate networks that were added by the caller.
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - Identifies the candidate network to be disconnected.
   * @param { int } blockDuration - Duration for which the network is blocked from re-associated, in seconds.
   *     If the value is -1, the candidate network is permanently blocked from re-associated.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed, possibly causes:
   *     <br>The network identified by networkId does not exist.
   *     <br>The candidate network was not added by the caller.
   *     <br>The caller is not running in the foreground.
   * @throws { BusinessError } 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function disconnectFromCandidateConfig(networkId: int, blockDuration: int): void;

  /**
   * Connect to Wi-Fi hotspot by networkId.
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION or ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { int } networkId - ID of the connected network. The value of networkId cannot be less than 0.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function connectToNetwork(networkId: int): void;

  /**
   * Connects to the specified network. If the device is already connected to a hotspot, disconnect it from the hotspot 
   * first.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG and
   *     ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { WifiDeviceConfig } config - Wi-Fi configuration information. The value of **bssidType** is a random device
   *     address by default.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function connectToDevice(config: WifiDeviceConfig): void;

  /**
   * Disconnect connection between sta and Wi-Fi hotspot.
   *
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   *     ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function disconnect(): void;

  /**
   * Calculate the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { int } rssi - Indicates the Wi-Fi RSSI.
   * @param { int } band - Indicates the Wi-Fi frequency band.
   * @returns { int } Returns Wi-Fi signal level ranging from 0 to 4.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  function getSignalLevel(rssi: int, band: int): int;

  /**
   * Obtain connection information about the Wi-Fi connection. If does't have the permission of 
   * ohos.permission.GET_WIFI_PEERS_MAC, return random bssid.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiLinkedInfo> } Returns Wi-Fi linked information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getLinkedInfo(): Promise<WifiLinkedInfo>;
  
  /**
   * Obtain multiple Wi-Fi connection information when Wi-Fi linked in MLO(Muti-Link Operation) state.
   * If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiLinkedInfo> } Returns Wi-Fi multiple link information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 18 dynamic
   * @since 23 static
   */
  function getMultiLinkedInfo(): Array<WifiLinkedInfo>;
  
  /**
   * Obtain connection information about the Wi-Fi connection.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiLinkedInfo> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void;

  /**
    * Obtain connection information about the Wi-Fi connection.this apireturns the result syncchronously.
    * If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid.
    *
    * @permission ohos.permission.GET_WIFI_INFO
    * @returns { WifiLinkedInfo } Returns Wi-Fi linked information.
    * @throws {BusinessError} 201 - Permission denied.
    * @throws {BusinessError} 801 - Capability not supported.
    * @throws {BusinessError} 2501000 - Operation failed.
    * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
    * @syscap SystemCapability.Communication.WiFi.STA
    * @crossplatform
    * @since 18 dynamic
    * @since 23 static
    */
   function getLinkedInfoSync(): WifiLinkedInfo;

  /**
   * Check whether the Wi-Fi connection has been set up.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Returns {@code true} if a Wi-Fi connection has been set up, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function isConnected(): boolean;

  /**
   * Obtains the features supported by this device.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { long } Feature value. Each bit represents a feature:
   *     <br>0x0001: WLAN infrastructure mode
   *     <br>0x0002: 5 GHz feature
   *     <br>0x0004: Generic Advertisement Service (GAS)/Access Network Query Protocol (ANQP) feature
   *     <br>0x0008: Wi-Fi Direct
   *     <br>0x0010: SoftAP
   *     <br>0x0040: Wi-Fi Aware
   *     <br>0x8000: WLAN AP/STA concurrency
   *     <br>0x8000000: WPA3 Personal (WPA-3 SAE)
   *     <br>0x10000000: WPA3-Enterprise Suite B
   *     <br>0x20000000: Enhanced open feature
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSupportedFeatures(): long;

  /**
   * Check whether the device supports a specified feature.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { long } featureId Indicates the ID of the feature.
   * @returns { boolean } Returns {@code true} if this device supports the specified feature, returns {@code false}
   *     otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function isFeatureSupported(featureId: long): boolean;

  /**
   * Obtain the MAC address of a Wi-Fi device. Wi-Fi must be enabled.
   * The MAC address is unique and cannot be changed.
   *
   * @permission ohos.permission.GET_WIFI_LOCAL_MAC and ohos.permission.GET_WIFI_INFO
   * @returns { string[] } Returns the MAC address of the Wi-Fi device.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 26.0.1 ]
   * @since 15 dynamic
   * @since 23 static
   */
  function getDeviceMacAddress(): string[];

  /**
   * Obtain the IPv4 information of the Wi-Fi connection.
   * The IP information includes the host IP address, gateway address, and DNS information.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { IpInfo } Returns the IP information of the Wi-Fi connection.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  function getIpInfo(): IpInfo;

  /**
   * Obtain the IPv6 information of the Wi-Fi connection.
   * The IPv6 information includes the host IP address, gateway address, and DNS information.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Ipv6Info } Returns the IPv6 information of the Wi-Fi connection.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  function getIpv6Info(): Ipv6Info;

  /**
   * Obtain the country code of the device.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { string } Returns the country code of this device.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function getCountryCode(): string;

  /**
   * Re-associates with the network.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function reassociate(): void;

  /**
   * Reconnects to the network.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function reconnect(): void;

  /**
   * Obtain the list of all existed Wi-Fi configurations.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { Array<WifiDeviceConfig> } Returns the list of all existing Wi-Fi configurations you created on your
   *     application.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function getDeviceConfigs(): Array<WifiDeviceConfig>;

  /**
   * Obtains the configuration of a single network based on the network ID.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { int } networkId - ID of the network configuration to be queried.
   *     <br>The value should be an integer.
   * @returns { WifiDeviceConfig } Network configuration of a specified network ID.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API is not allowed called by Non-system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getDeviceConfig(networkId: int): WifiDeviceConfig;

  /**
   * Updates network configuration.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config - Wi-Fi configuration information.
   * @returns { int } ID of the updated network configuration. The value **-1** indicates that the operation has failed.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function updateNetwork(config: WifiDeviceConfig): int;

  /**
   * Set whther to allow automatic connnect by networkId.
   * The network can be associated with again if isAllowed is true, else not.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { int } netId Identifies the network to be set. The value of networkId cannot be less than 0.
   * @param { boolean } isAllowed Identifies whether allow auto connect or not.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 17 dynamic
   * @since 23 static
   */
  function allowAutoConnect(netId: int, isAllowed: boolean): void;

  /**
   * Disables the network configuration.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { int } netId - Network configuration ID.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function disableNetwork(netId: int): void;

  /**
   * Disables the network connection, disconnects the connected network, and does not automatically reconnect to the
   * network within the specified time range.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { int } netId - Network configuration ID.
   *     <br>The value should be an integer.
   * @param { int } blockDuration - Network disabling duration, in seconds.
   *     <br>The value should be an integer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API is not allowed called by Non-system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @throws { BusinessError } 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 dynamic&static
   */
  function disableNetwork(netId: int, blockDuration: int): void;

  /**
   * Removes the configuration of all networks.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAllNetwork(): void;

  /**
   * Remove a Wi-Fi DeviceConfig with networkId.
   * After a Wi-Fi DeviceConfig is removed, its configuration will be deleted from the list of Wi-Fi configurations.
   * If the Wi-Fi DeviceConfig is being connected, the connection will be interrupted.
   * The application can only delete Wi-Fi DeviceConfig it has created.
   *
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   *     ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @param { int } id - Indicate the ID of the Wi-Fi DeviceConfig. The value of networkId cannot be less than 0.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function removeDevice(id: int): void;

  /**
   * Check whether the current device supports the specified band.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiBandType } bandType - Indicates the band type.
   * @returns { boolean }Returns {@code true} if the specified band is supported, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  function isBandTypeSupported(bandType: WifiBandType): boolean;

  /**
   * Obtains the list of 5 GHz channels supported by this device.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { Array<int> } List of 5 GHz channels supported by the device.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function get5GChannelList(): Array<int>;

  /**
   * Obtains the reason of the latest disconnection.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { DisconnectedReason } Returns the reason of the latest disconnection obtained.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getDisconnectedReason(): DisconnectedReason;

  /**
   * Starts the Portal authentication process, which is used to process public Wi-Fi networks (such as networks in 
   * hotels, airports, and cafes) that require web page authentication.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function startPortalCertification(): void;

  /**
   * Whether the hotspot is metered hotspot or not.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Returns {@code true} if the hotspot is metered hotspot, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 11 dynamic
   * @since 23 static
   */
  function isMeteredHotspot(): boolean;

  /**
   * Enables or disables HiLink.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { boolean } isHiLinkEnable - Whether to enable hiLink. The value **true** means to enable HiLink, and the
   *     value **false** means the opposite.
   * @param { string } bssid - MAC address of the hotspot, for example, **00:11:22:33:44:55**.
   * @param { WifiDeviceConfig } config - Wi-Fi configuration information. The value of **config.bssid** must be the
   *     same as that of the second parameter **bssid**. The value of **bssidType** is a random device address by
   *     default.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function enableHiLinkHandshake(isHiLinkEnable: boolean, bssid: string, config: WifiDeviceConfig): void;

  /**
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function factoryReset(): void;

  /**
   * Enables this hotspot. This API is an asynchronous interface. The **hotspotStateChange** callback must be registered
   * and listened for.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function enableHotspot(): void;

  /**
   * Disables this hotspot. This API is an asynchronous interface. The **hotspotStateChange** callback must be 
   * registered and listened for.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function disableHotspot(): void;

  /**
   * Checks whether the Wi-Fi hotspot function of the current device supports dual bands (both 2.4 GHz and 5 GHz).
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } Whether the hotspot supports dual bands. The value **true** indicates dual bands are
   *     supported, and the value **false** indicates the opposite.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isHotspotDualBandSupported(): boolean;

  /**
   * Checks whether Wi-Fi hotspot operations are allowed under certain circumstances. When Airplane mode is enabled, if 
   * the system does not support the coexistence of SoftAP and STA or signal bridging, the hotspot switch cannot be 
   * operated.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } Whether Wi-Fi hotspot operations are allowed. The value **true** indicates Wi-Fi hotspot
   *     operations are allowed, and the value **false** indicates the opposite.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function isOpenSoftApAllowed(): boolean;

  /**
   * Check whether Wi-Fi hotspot is active on a device.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } {@code true} if Wi-Fi hotspot is enabled, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application. [since 9 - 14]
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use. [since 9 - 14]
   * @publicapi [since 15]
   * @since 9 dynamic
   * @since 23 static
   */
  function isHotspotActive(): boolean;

  /**
   * Sets the Wi-Fi hotspot configuration information, including the SSID, encryption mode, password, bandwidth, 
   * channel, and maximum number of connected STAs.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { HotspotConfig } config - Hotspot configuration to set.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setHotspotConfig(config: HotspotConfig): void;

  /**
   * Obtains the Wi-Fi hotspot configuration information, including the SSID, encryption mode, password, bandwidth, 
   * channel, and maximum number of connected STAs.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { HotspotConfig } Hotspot configuration obtained.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getHotspotConfig(): HotspotConfig;

  /**
   * Obtains the list of all devices that are currently connected to the hotspot of the device.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   *     and ohos.permission.MANAGE_WIFI_HOTSPOT [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT [since 10]
   * @returns { Array<StationInfo> } Connected stations obtained. If the application has the
   *     **ohos.permission.GET_WIFI_PEERS_MAC** permission, **macAddress** in the return value is a real MAC address;
   *     otherwise, **macAddress** is a random MAC address.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getStations(): Array<StationInfo>;

   /**
   * Adds a device to the list of blocked devices of the hotspot. Devices in the list cannot access the hotspot.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { StationInfo } stationInfo - Device to add.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function addHotspotBlockList(stationInfo: StationInfo): void;

  /**
   * Deletes a device from the list of blocked devices of the hotspot.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { StationInfo } stationInfo - Device to delete.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function delHotspotBlockList(stationInfo: StationInfo): void;

  /**
   * Obtains the list of devices that are in the blocklist of the current Wi-Fi hotspot. This API is valid when the 
   * device is in hotspot (AP) mode.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { Array<StationInfo> } List of blocked devices obtained.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getHotspotBlockList(): Array<StationInfo>;

  /**
   * Obtain information about the P2P connection.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiP2pLinkedInfo> } Returns p2p linked information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pLinkedInfo(): Promise<WifiP2pLinkedInfo>;
  
  /**
   * Obtain information about the P2P connection.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiP2pLinkedInfo> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pLinkedInfo(callback: AsyncCallback<WifiP2pLinkedInfo>): void;

  /**
   * Obtain information about the current p2p group.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @returns { Promise<WifiP2pGroupInfo> } Returns p2p group information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentGroup(): Promise<WifiP2pGroupInfo>;

  /**
   * Obtain information about the current p2p group.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @param { AsyncCallback<WifiP2pGroupInfo> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void;

  /**
   * Obtain the information about the found devices.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @returns { Promise<WifiP2pDevice[]> } Returns p2p device information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pPeerDevices(): Promise<WifiP2pDevice[]>;
  
  /**
   * Obtain the information about the found devices.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @param { AsyncCallback<WifiP2pDevice[]> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void;

  /**
   * Obtain the information about own device information.
   * DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00",
   * if ohos.permission.GET_WIFI_LOCAL_MAC is not granted.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG [since 9 - 10]
   * @permission ohos.permission.GET_WIFI_INFO [since 11]
   * @returns { Promise<WifiP2pDevice> } Returns the information about own device info.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pLocalDevice(): Promise<WifiP2pDevice>;
  
  /**
   * Obtain the information about own device information.
   * DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00",
   * if ohos.permission.GET_WIFI_LOCAL_MAC is not granted.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG [since 9 - 10]
   * @permission ohos.permission.GET_WIFI_INFO [since 11]
   * @param { AsyncCallback<WifiP2pDevice> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pLocalDevice(callback: AsyncCallback<WifiP2pDevice>): void;

  /**
   * Create a P2P group.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiP2PConfig } config - Indicates the configuration for a group.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function createGroup(config: WifiP2PConfig): void;

  /**
   * Remove a P2P group.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function removeGroup(): void;

  /**
   * Initiate a P2P connection to a device with the specified configuration.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @param { WifiP2PConfig } config - Indicates the configuration for connecting to a specific group.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function p2pConnect(config: WifiP2PConfig): void;

  /**
   * Stop an ongoing p2p connection that is being established.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function p2pCancelConnect(): void;

  /**
   * Start discover Wi-Fi P2P devices.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function startDiscoverDevices(): void;

  /**
   * Stop discover Wi-Fi P2P devices.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function stopDiscoverDevices(): void;

  /**
   * Deletes the permanent Wi-Fi group configuration of a specified network. This API is used to clear the saved Wi-Fi 
   * network configuration information so that the WLAN network cannot be automatically connected.
   * 
   * - Deletes the permanent group information previously established with the P2P device according to the network ID, 
   * and performs P2P negotiation again when establishing a P2P connection with the P2P device subsequently.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { int } netId - ID of the group to delete.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function deletePersistentGroup(netId: int): void;

  /**
   * Obtains information about all P2P groups. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @returns { Promise<Array<WifiP2pGroupInfo>> } Promise used to return the group information obtained. If the
   *     application has the **ohos.permission.GET_WIFI_PEERS_MAC** permission, **deviceAddress** in the return value is
   *     a real device address; otherwise, **deviceAddress** is a random device address.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pGroups(): Promise<Array<WifiP2pGroupInfo>>;
  
  /**
   * Obtains information about all P2P groups. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
    * @param { AsyncCallback<Array<WifiP2pGroupInfo>> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pGroups(callback: AsyncCallback<Array<WifiP2pGroupInfo>>): void;

  /**
   * Sets the device name.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { string } devName - Device name.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setDeviceName(devName: string): void;

  /**
   * Subscribe Wi-Fi status change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 0: inactive, 1: active, 2: activating, 3: de-activating
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function on(type: 'wifiStateChange', callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi status change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on, 0: inactive, 1: active, 2: activating, 3: de-activating
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function onWifiStateChange(callback: Callback<int>): void;

  /**
   * Unsubscribe Wi-Fi status change events.
   * 
   * All callback functions will be deregistered If there is no specific callback parameter.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function off(type: 'wifiStateChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi status change events.
   * 
   * All callback functions will be deregistered If there is no specific callback parameter.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function offWifiStateChange(callback?: Callback<int>): void;

  /**
   * Subscribe Wi-Fi connection change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 0: disconnected, 1: connected
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function on(type: 'wifiConnectionChange', callback: Callback<number>): void;

    /**
   * Subscribe Wi-Fi connection change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on, 0: disconnected, 1: connected
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function onWifiConnectionChange(callback: Callback<int>): void;

  /**
   * Unsubscribe Wi-Fi connection change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function off(type: 'wifiConnectionChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi connection change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function offWifiConnectionChange(callback?: Callback<int>): void;

  /**
   * Subscribe Wi-Fi scan status change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 0: scan fail, 1: scan success
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function on(type: 'wifiScanStateChange', callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi scan status change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on, 0: scan fail, 1: scan success
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 23 static
   */
  function onWifiScanStateChange(callback: Callback<int>): void;

  /**
   * Unsubscribe Wi-Fi scan status change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function off(type: 'wifiScanStateChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi scan status change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 23 static
   */
  function offWifiScanStateChange(callback?: Callback<int>): void;

  /**
   * Subscribe Wi-Fi rssi change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   */
  function on(type: 'wifiRssiChange', callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi rssi change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 23 static
   */
  function onWifiRssiChange(callback: Callback<int>): void;

  /**
   * Unsubscribe Wi-Fi rssi change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   */
  function off(type: 'wifiRssiChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi rssi change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 23 static
   */
  function offWifiRssiChange(callback?: Callback<int>): void;

  /**
   * Subscribes to Wi-Fi stream changes. When the service exits, call 
   * **off(type: 'streamChange', callback?: Callback<number>)** to unregister the callback registered. 
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { 'streamChange' } type - Event type, which has a fixed value of **streamChange**.
   * @param { Callback<number> } callback - Callback used to return the status change. **0**: No stream. **1**:
   *     Downward. **2**: Upward. **3**: Bidirectional.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'streamChange', callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi stream change events.
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { Callback<int> } callback - the callback of on, 1: stream down, 2: stream up, 3: stream bidirectional
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onStreamChange(callback: Callback<int>): void;

  /**
    * Unsubscribes from Wi-Fi stream changes.
    *
    * @permission ohos.permission.MANAGE_WIFI_CONNECTION
    * @param { 'streamChange' } type - Event type, which has a fixed value of **streamChange**.
    * @param { Callback<number> } [callback] - Callback to unregister. It must be the same as the callback passed in
    *     **on()**. If this parameter is not specified, all callbacks of this event are unregistered.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'streamChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi stream change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { Callback<int> } [callback] - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API is not allowed called by Non-system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offStreamChange(callback?: Callback<int>): void;

  /**
   * Subscribes to Wi-Fi device configuration changes. When the service exits, call off(type: 'deviceConfigChange', 
   * callback?: Callback<number>) to unregister the callback registered. This API uses an asynchronous 
   * callback to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'deviceConfigChange' } type - Event type, which has a fixed value of **deviceConfigChange**.
   * @param { Callback<number> } callback - Callback for device configuration changes.
   *     <br>**0**: Configuration is added. **1**: Configuration is modified. **2**: Configuration is deleted.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'deviceConfigChange', callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi device config change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on,
   *     0: config is added, 1: config is changed, 2: config is removed.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onDeviceConfigChange(callback: Callback<int>): void;

  /**
    * Unsubscribes from Wi-Fi device configuration changes.
    *
    * @permission ohos.permission.GET_WIFI_INFO
    * @param { 'deviceConfigChange' } type - Event type, which has a fixed value of **deviceConfigChange**.
    * @param { Callback<number> } [callback] - Callback to unregister. It must be the same as the callback passed in
    *     **on()**. If this parameter is not specified, all callbacks of this event are unregistered.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'deviceConfigChange', callback?: Callback<number>): void;

  /**
   * Subscribe Wi-Fi device config change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off,
   *     0: config is added, 1: config is changed, 2: config is removed.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API is not allowed called by Non-system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offDeviceConfigChange(callback?: Callback<int>): void;

  /**
   * Subscribe Wi-Fi hotspot state change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on,
   *     0: inactive, 1: active, 2: activating, 3: de-activating
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 9 dynamic
   */
  function on(type: 'hotspotStateChange', callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi hotspot state change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on,
   *     0: inactive, 1: active, 2: activating, 3: de-activating
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 23 static
   */
  function onHotspotStateChange(callback: Callback<int>): void;

  /**
   * Unsubscribe Wi-Fi hotspot state change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 9 dynamic
   */
  function off(type: 'hotspotStateChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi hotspot state change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 23 static
   */
  function offHotspotStateChange(callback?: Callback<int>): void;

  /**
   * Subscribes to the event of an STA joining a Wi-Fi hotspot. When the service exits, call 
   * **off(type: 'hotspotStaJoin', callback?: Callback<StationInfo>)** to unregister the callback 
   * registered. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaJoin' } type - Event type, which has a fixed value of **hotspotStaJoin**.
   * @param { Callback<StationInfo> } callback - Callback used to return the status change.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'hotspotStaJoin', callback: Callback<StationInfo>): void;

  /**
   * Subscribe Wi-Fi hotspot sta join events.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onHotspotStaJoin(callback: Callback<StationInfo>): void;

  /**
    * Unsubscribes from the connection of an STA to a Wi-Fi hotspot.
    *
    * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
    * @param { 'hotspotStaJoin' } type - Event type, which has a fixed value of **hotspotStaJoin**.
    * @param { Callback<StationInfo> } [callback] - Callback to unregister. It must be the same as the callback passed
    *     in **on()**. If this parameter is not specified, all callbacks of this event are unregistered.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'hotspotStaJoin', callback?: Callback<StationInfo>): void;

  /**
   * Unsubscribe Wi-Fi hotspot sta join events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } [callback] - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API is not allowed called by Non-system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offHotspotStaJoin(callback?: Callback<StationInfo>): void;

  /**
   * Subscribes to the event of an STA leaving a Wi-Fi hotspot. When the service exits, call 
   * **off(type: 'hotspotStaLeave', callback?: Callback<StationInfo>)** to unregister the callback 
   * registered. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaLeave' } type - Event type, which has a fixed value of **hotspotStaLeave**.
   * @param { Callback<StationInfo> } callback - Callback used to return the event.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'hotspotStaLeave', callback: Callback<StationInfo>): void;

  /**
   * Subscribe Wi-Fi hotspot sta leave events.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onHotspotStaLeave(callback: Callback<StationInfo>): void;

  /**
    * Unsubscribes from the disconnection of a STA from a Wi-Fi hotspot.
    *
    * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
    * @param { 'hotspotStaLeave' } type - Event type, which has a fixed value of **hotspotStaLeave**.
    * @param { Callback<StationInfo> } [callback] - Callback to unregister. It must be the same as the callback passed
    *     in **on()**. If this parameter is not specified, all callbacks of this event are unregistered.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'hotspotStaLeave', callback?: Callback<StationInfo>): void;

  /**
   * Unsubscribe Wi-Fi hotspot sta leave events.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } [callback] - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API is not allowed called by Non-system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offHotspotStaLeave(callback?: Callback<StationInfo>): void;

  /**
   * Subscribe P2P status change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 1: idle, 2: starting, 3:started, 4: closing, 5: closed
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pStateChange', callback: Callback<number>): void;

  /**
   * Subscribe P2P status change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on, 1: idle, 2: starting, 3:started, 4: closing, 5: closed
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pStateChange(callback: Callback<int>): void;

  /**
   * Unsubscribe P2P status change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pStateChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe P2P status change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pStateChange(callback?: Callback<int>): void;

  /**
   * Subscribe P2P connection change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - event name.
   * @param { Callback<WifiP2pLinkedInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pConnectionChange', callback: Callback<WifiP2pLinkedInfo>): void;

  /**
   * Subscribe P2P connection change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pLinkedInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pConnectionChange(callback: Callback<WifiP2pLinkedInfo>): void;

  /**
   * Unsubscribe P2P connection change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - event name.
   * @param { Callback<WifiP2pLinkedInfo> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pConnectionChange', callback?: Callback<WifiP2pLinkedInfo>): void;

  /**
   * Unsubscribe P2P connection change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pLinkedInfo> } [callback] - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pConnectionChange(callback?: Callback<WifiP2pLinkedInfo>): void;

  /**
   * Subscribe P2P local device change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @param { 'p2pDeviceChange' } type - event name.
   * @param { Callback<WifiP2pDevice> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pDeviceChange', callback: Callback<WifiP2pDevice>): void;

  /**
   * Subscribe P2P local device change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pDevice> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pDeviceChange(callback: Callback<WifiP2pDevice>): void;

  /**
   * Unsubscribe P2P local device change events.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @param { 'p2pDeviceChange' } type - event name.
   * @param { Callback<WifiP2pDevice> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pDeviceChange', callback?: Callback<WifiP2pDevice>): void;

  /**
   * Unsubscribe P2P local device change events.
   *
   * @param { Callback<WifiP2pDevice> } [callback] - the callback of off.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pDeviceChange(callback?: Callback<WifiP2pDevice>): void;

  /**
   * Subscribe P2P peer device change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and
   *     ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @permission ohos.permission.GET_WIFI_INFO [since 10]
   * @param { 'p2pPeerDeviceChange' } type - event name.
   * @param { Callback<WifiP2pDevice[]> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pPeerDeviceChange', callback: Callback<WifiP2pDevice[]>): void;

  /**
   * Subscribe P2P peer device change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pDevice[]> } callback - the callback of on.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pPeerDeviceChange(callback: Callback<WifiP2pDevice[]>): void;

  /**
   * Unsubscribe P2P peer device change events.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION [since 9 - 9]
   * @param { 'p2pPeerDeviceChange' } type - event name.
   * @param { Callback<WifiP2pDevice[]> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pPeerDeviceChange', callback?: Callback<WifiP2pDevice[]>): void;

  /**
   * Unsubscribe P2P peer device change events.
   *
   * @param { Callback<WifiP2pDevice[]> } [callback] - the callback of off.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pPeerDeviceChange(callback?: Callback<WifiP2pDevice[]>): void;

  /**
   * Subscribe P2P persistent group change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - event name.
   * @param { Callback<void> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pPersistentGroupChange', callback: Callback<void>): void;

  /**
   * Subscribe P2P persistent group change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<void> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pPersistentGroupChange(callback: Callback<void>): void;

  /**
   * Unsubscribe P2P persistent group change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - event name.
   * @param { Callback<void> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pPersistentGroupChange', callback?: Callback<void>): void;

  /**
   * Unsubscribe P2P persistent group change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<void> } [callback] - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pPersistentGroupChange(callback?: Callback<void>): void;

  /**
   * Subscribe P2P discovery events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pDiscoveryChange', callback: Callback<number>): void;

  /**
   * Subscribe P2P discovery events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pDiscoveryChange(callback: Callback<int>): void;

  /**
   * Unsubscribe P2P discovery events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pDiscoveryChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe P2P discovery events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pDiscoveryChange(callback?: Callback<int>): void;
  /**
   * Wi-Fi device address( mac / bssid ) type.
   *
   * @syscap SystemCapability.Communication.WiFi.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum DeviceAddressType {
    /**
     * random device address
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    RANDOM_DEVICE_ADDRESS,

    /**
     * real device address
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    REAL_DEVICE_ADDRESS,
  }

  /**
   * Wi-Fi EAP method.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum EapMethod {
    /**
     * EAP NONE
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_NONE,
    /**
     * EAP PEAP
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_PEAP,
    /**
     * EAP TLS
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_TLS,
    /**
     * EAP TTLS
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_TTLS,
    /**
     * EAP PWD
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_PWD,
    /**
     * EAP SIM
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_SIM,
    /**
     * EAP AKA
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_AKA,
    /**
     * EAP AKA PRIME
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_AKA_PRIME,
    /**
     * EAP UNAUTH TLS
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_UNAUTH_TLS
  }

  /**
   * Wi-Fi phase 2 method.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum Phase2Method {
    /**
     * Phase2 NONE
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_NONE,
    /**
     * Phase2 PAP
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_PAP,
    /**
     * Phase2 MSCHAP
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_MSCHAP,
    /**
     * Phase2 MSCHAPV2
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_MSCHAPV2,
    /**
     * Phase2 GTC
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_GTC,
    /**
     * Phase2 SIM
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_SIM,
    /**
     * Phase2 AKA
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_AKA,
    /**
     * Phase2 AKA+
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_AKA_PRIME
  }

  /**
   * Enumerates the reasons why the Wi-Fi connection is disconnected. This API is used to diagnose network connection 
   * problems and optimize connection policies.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum DisconnectedReason {
    /**
     * Default reason.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DISC_REASON_DEFAULT = 0,

    /**
     * Incorrect password.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DISC_REASON_WRONG_PWD = 1,

    /**
     * The number of connections to the router has reached the limit.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DISC_REASON_CONNECTION_FULL = 2
  }

  /**
   * Enumerates Wi-Fi states.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  enum WifiDetailState {
    /**
     * state is unknown.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    UNKNOWN = -1,

    /**
     * wifi is closed.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    INACTIVE = 0,

    /**
     * wifi is opened.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    ACTIVATED = 1,

    /**
     * wifi is opening.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    ACTIVATING = 2,

    /**
     * wifi is closing.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    DEACTIVATING = 3,

    /**
     * wifi sta is entering semi active.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    SEMI_ACTIVATING = 4,

    /**
     * wifi sta is semi active.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    SEMI_ACTIVE = 5,
  }

  /**
   * Enumerates the Wi-Fi proxy methods.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum ProxyMethod {
    /**
     * No proxy.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    METHOD_NONE = 0,

    /**
     * Use an automatically configured proxy.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    METHOD_AUTO = 1,

    /**
     * Use a manually configured proxy.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    METHOD_MANUAL = 2
  }

  /**
   * Wi-Fi Category.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 12 dynamic
   * @since 23 static
   */
  enum WifiCategory {
    /**
     * Default.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 1,

    /**
     * Wifi6.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI6 = 2,

    /**
     * Wifi6+.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI6_PLUS = 3,

    /**
     * Wifi7.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 15 dynamic
     * @since 23 static
     */
    WIFI7 = 4,

    /**
     * Wifi7+.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 15 dynamic
     * @since 23 static
     */
    WIFI7_PLUS = 5
  }

  /**
   * Wi-Fi link type.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 18 dynamic
   * @since 23 static
   */
  enum WifiLinkType {
    /**
     * Default link.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    DEFAULT_LINK = 0,

    /**
     * Wi-Fi7 single link.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_SINGLE_LINK = 1,

    /**
     * Wi-Fi7 MLSR.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_MLSR = 2,

    /**
     * Wi-Fi7 EMLSR.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_EMLSR = 3,

    /**
     * Wi-Fi7 STR.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_STR = 4
  }

  /**
   * Represents the Wi-Fi proxy configuration.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface WifiProxyConfig {
    /**
     * Proxy method.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    proxyMethod?: ProxyMethod;

    /**
     * PAC web address of the proxy automatically configured.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    pacWebAddress?: string;

    /**
     * Server host name of the proxy manually configured.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    serverHostName?: string;

    /**
     * Server port of the proxy manually configured.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    serverPort?: int;

    /**
     * Excluded objects of the manually configured proxy. Multiple objects are separated by commas (,).
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    exclusionObjects?: string;
  }

  /**
   * Wi-Fi EAP config.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  interface WifiEapConfig {
    /**
     * EAP authentication method
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    eapMethod: EapMethod;

    /**
     * Phase 2 authentication method
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    phase2Method: Phase2Method;

    /**
     * The identity
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    identity: string;

    /**
     * Anonymous identity
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    anonymousIdentity: string;

    /**
     * Password
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * CA certificate alias
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    caCertAlias: string;

    /**
     * CA certificate path
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    caPath: string;

    /**
     * Client certificate alias
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    clientCertAlias: string;

    /**
     * content of user's certificate
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    certEntry: Uint8Array;

    /**
     * Password of user's certificate
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    certPassword: string;

    /**
     * Alternate subject match
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    altSubjectMatch: string;

    /**
     * Domain suffix match
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    domainSuffixMatch: string;

    /**
     * Realm for Passpoint credential
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    realm: string;

    /**
     * Public Land Mobile Network of the provider of Passpoint credential
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    plmn: string;

    /**
     * Sub ID of the SIM card
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    eapSubId: int;
  }

  /**
   * Represents the Wi-Fi configuration information.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiDeviceConfig {
    /**
     * Wi-Fi SSID: the maximum length is 32.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * Wi-Fi bssid(MAC): the length is 6.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    bssid?: string;

    /**
     * Wi-Fi bssid type.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    bssidType?: DeviceAddressType;

    /**
     * Wi-Fi key: maximum length is 64.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    preSharedKey: string;

    /**
     * Hide SSID or not, false(default): not hide
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    isHiddenSsid?: boolean;

    /**
     * Security type: reference definition of WifiSecurityType
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    securityType: WifiSecurityType;

    /**
     * ID of the creator.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    creatorUid?: int;

    /**
     * Reason for disabling Wi-Fi.
     * 
     * **-1**: unknown reason
     * 
     * **0**: not disabled
     * 
     * **1**: association refused
     * 
     * **2**: authentication failed
     * 
     * **3**: DHCP failure
     * 
     * **4**: no Internet connection
     * 
     * **5**: no authentication credentials
     * 
     * **6**: no Internet connection permanently
     * 
     * **7**: disabled by Wi-Fi manager
     * 
     * **8**: disabled due to incorrect password
     * 
     * **9**: authentication without subscription
     * 
     * **10**: private EAP authentication error
     * 
     * **11**: network not found
     * 
     * **12**: consecutive failures
     * 
     * **13**: disabled by the system
     * 
     * **14**: EAP-AKA authentication failed
     * 
     * **15**: association removed
     * 
     * **16**: maximum number of forbidden network selections
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    disableReason?: int;

    /**
     * Allocated networkId
     *
     * @type { ?number } [since 9 - 21]
     * @type { ?int } [since 22]
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use. [since 9 - 21]
     * @publicapi [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    netId?: int;

    /**
     * MAC address type. 
     * 
     * The value **0** indicates a random MAC address, and the value **1** indicates a device MAC address.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    randomMacType?: int;

    /**
     * MAC address.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    randomMacAddr?: string;

    /**
     * IP address type.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ipType?: IpType;

    /**
     * Static IP family: 0 - IPv4, 1 - Ipv6.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    family?: int;

    /**
     * Static IP address information.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    staticIp?: IpConfig;

    /**
     * IPv6 config of static
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    staticIpv6?: Ipv6Config;

    /**
     * EAP config info.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    eapConfig?: WifiEapConfig;

    /**
     * Proxy configuration.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    proxyConfig?: WifiProxyConfig;

    /**
     * WAPI config info.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiConfig?: WifiWapiConfig;

    /**
     * Status indicating whether the current network can be selected.
     * 
     * **1**: network selection allowed
     * 
     * **2**: network selection forbidden
     * 
     * **3**: network selection permanently forbidden
     * 
     * 4: unknown
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    configStatus?: int;

    /**
     * Whether automatic connection is allowed. The value **true** indicates that automatic connection is allowed, and 
     * the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 17 dynamic
     * @since 23 static
     */
    isAutoConnectAllowed?: boolean;

    /**
     * Whether the Wi-Fi connection is secure. The value **true** indicates that the Wi-Fi connection is secure, and the
     * value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isSecureWifi?: boolean;

    /**
     * Whether to show a dialog when the first network probe detects no internet.
     * If false, the default network is bound to cellular with no dialog shown.
     * If true, will show a no-internet dialog prompts the user to select the default network binding.
     * Default value: true.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    showNoInternetDialog?: boolean;
  }

  /**
   * Wi-Fi WAPI config.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 12 dynamic
   * @since 23 static
   */
  interface WifiWapiConfig {
    /**
     * WAPI pre-shared key type.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiPskType: WapiPskType;

    /**
     * WAPI AS certification.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiAsCert: string;

    /**
     * WAPI user certification.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiUserCert: string;
  }

  /**
   * Represents IP configuration information.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface IpConfig {
    /**
     * IP address.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: int;

    /**
     * Gateway.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    gateway: int;

    /**
     * Subnet mask.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    prefixLength: int;

    /**
     * Domain name server (DNS) information.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    dnsServers: int[];

    /**
     * Domain information.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    domains: Array<string>;
  }

  /**
   * Wi-Fi Ipv6 configuration information.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface Ipv6Config {
    /**
     * IPv6 address.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    ipAddress: string;
 
    /**
     * Gate way.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    gateway: string;
 
    /**
     * Prefix length.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    prefixLength: int;
 
    /**
     * DNS servers.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    dnsServers: Array<string>;
 
    /**
     * Domains.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    domains: Array<string>;
  }

  /**
   * Wi-Fi information elements.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiInfoElem {
    /**
     * Element id
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    eid: int;

    /**
     * Element content
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    content: Uint8Array;
  }

  /**
   * Describes the wifi channel width.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  enum WifiChannelWidth {
    /**
     * 20MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_20MHZ = 0,

    /**
     * 40MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_40MHZ = 1,

    /**
     * 80MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_80MHZ = 2,

    /**
     * 160MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_160MHZ = 3,

    /**
     * 80MHz plus.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_80MHZ_PLUS = 4,

    /**
     * Invalid.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_INVALID
  }

  /**
   * Provides information about Wi-Fi scanning.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiScanInfo {
    /**
     * Wi-Fi SSID: the maximum length is 32
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * Wi-Fi bssid(MAC): the length is 6
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    bssid: string;

    /**
     * Wi-Fi bssid type
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    bssidType: DeviceAddressType;

    /**
     * Hotspot capability
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    capabilities: string;

    /**
     * Security type: reference definition of WifiSecurityType
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    securityType: WifiSecurityType;

    /**
     * Received signal strength indicator (RSSI)
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * Frequency band, 1: 2.4G, 2: 5G
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    band: int;

    /**
     * Frequency
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * Channel width
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    channelWidth: int;

    /**
     * Center frequency 0.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    centerFrequency0: int;

    /**
     * Center frequency 1.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    centerFrequency1: int;

    /**
     * Information elements.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    infoElems: Array<WifiInfoElem>;

    /**
     * Time stamp
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * Supported wifi category
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    supportedWifiCategory: WifiCategory;

    /**
     * Whether the Wi-Fi hotspot is HiLink network.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    isHiLinkNetwork: boolean;

    /**
     * Whether the network is a HiLinkPro network. The value **true** indicates that the network is a HiLinkPro network,
     * and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isHiLinkProNetwork?: boolean;
  }

  /**
   * Describes the wifi security type.
   *
   * @syscap SystemCapability.Communication.WiFi.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum WifiSecurityType {
    /**
     * Invalid security type
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_INVALID = 0,

    /**
     * Open
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_OPEN = 1,

    /**
     * Wired Equivalent Privacy (WEP)
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_WEP = 2,

    /**
     * Pre-shared key (PSK)
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_PSK = 3,

    /**
     * Simultaneous Authentication of Equals (SAE)
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_SAE = 4,

    /**
     * EAP authentication.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_EAP = 5,

    /**
     * SUITE_B_192 192 bit level.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_EAP_SUITE_B = 6,

    /**
     * Opportunistic Wireless Encryption.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_OWE = 7,

    /**
     * WAPI certificate to be specified.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_WAPI_CERT = 8,

    /**
     * WAPI pre-shared key to be specified.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_WAPI_PSK = 9
  }

  /**
   * Describes the capabilities supported by the Wi-Fi module.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum WifiCapability {  
    /**
     * Wi-Fi enabled automatically.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WIFI_AUTO_ENABLE = 0
  }
  
  /**
   * Special Wi-Fi info
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface SpecialWifiInfo {  
    /**
     * The network ID of the connected Wi-Fi.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    networkId: int;
 
    /**
     * Whether the connected Wi-Fi is CEAIR airplane Wi-Fi.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    isCeairPlaneWifi?: boolean;
  }

  /**
   * Describes the WAPI pre-shared key Type.
   *
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum WapiPskType {
    /**
     * ASCII character type of WAPI pre-shared key.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 12 dynamic
     * @since 23 static
     */
    WAPI_PSK_ASCII = 0,

    /**
     * HEX character type of WAPI pre-shared key.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 12 dynamic
     * @since 23 static
     */
    WAPI_PSK_HEX = 1
  }

  /**
   * Wi-Fi band type.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum WifiBandType {
    /**
     * Default.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_NONE,

    /**
     * Band 2.4G.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_2G,

    /**
     * Band 5G.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_5G,

    /**
     * Band 6G.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_6G,

    /**
     * Band 60G.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_60G
  }

  /**
   * Wi-Fi standard.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum WifiStandard {
    /**
     * Undefined
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_UNDEFINED,

    /**
     * Wifi 802.11a
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11A,

    /**
     * Wifi 802.11b
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11B,

    /**
     * Wifi 802.11g
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11G,

    /**
     * Wifi 802.11n
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11N,

    /**
     * Wifi 802.11ac
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11AC,

    /**
     * Wifi 802.11ax
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11AX,

    /**
     * Wifi 802.11ad
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11AD
  }

  /**
   * Wi-Fi connection information.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
   
  interface WifiLinkedInfo {
    /**
     * The SSID of the Wi-Fi hotspot
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * The BSSID of the Wi-Fi hotspot
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    bssid: string;

    /**
     * Network configuration ID.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    networkId: int;

    /**
     * The RSSI(dBm) of a Wi-Fi access point.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * The frequency band of a Wi-Fi access point.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    band: int;

    /**
     * The speed of a Wi-Fi access point.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    linkSpeed: int;

    /**
     * The rx speed of a Wi-Fi access point.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    rxLinkSpeed: int;

    /**
     * Max tx speed of a Wi-Fi access point.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    maxSupportedTxLinkSpeed: int;

    /**
     * Max rx speed of a Wi-Fi access point.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    maxSupportedRxLinkSpeed: int;

    /**
     * The frequency of a Wi-Fi access point.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * Whether the SSID of the access point (AP) of this Wi-Fi connection is hidden.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    isHidden: boolean;

    /**
     * Whether this Wi-Fi connection restricts the data volume.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    isRestricted: boolean;

    /**
     * Channel load. A larger value indicates a higher load.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    chload: int;

    /**
     * Signal-to-noise ratio (SNR), in dB. 
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    snr: int;

    /**
     * Type of macAddress: 0 - random mac, 1 - real mac.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    macType: int;

    /**
     * The Wi-Fi MAC address of a device.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    macAddress: string;

    /**
     * The IP address of this Wi-Fi connection.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: int;

    /**
     * Supplicant state.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    suppState: SuppState;

    /**
     * The state of this Wi-Fi connection.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    connState: ConnState;

    /**
     * Channel width of the connected hotspot.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    channelWidth: WifiChannelWidth;

    /**
     * Wifi standard of current connection.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    wifiStandard: WifiStandard;

    /**
     * Supported wifi category
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    supportedWifiCategory: WifiCategory;

    /**
     * Whether the Wi-Fi hotspot is HiLink network.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    isHiLinkNetwork: boolean;

    /**
     * Whether the network is a HiLinkPro network. The value **true** indicates that the network is a HiLinkPro network,
     * and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isHiLinkProNetwork?: boolean;

    /**
     * Wi-Fi link type
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    wifiLinkType?: WifiLinkType;

    /**
     * Whether the Wi-Fi transmitting (Tx) and receiving (Rx) functions are working properly.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    wifiTxRxValid?: boolean;
  }

  /**
   * Wi-Fi IP information.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  interface IpInfo {
    /**
     * The IP address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: int;

    /**
     * The gateway of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    gateway: int;

    /**
     * The network mask of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    netmask: int;

    /**
     * The primary DNS server IP address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    primaryDns: int;

    /**
     * The secondary DNS server IP address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    secondDns: int;

    /**
     * The DHCP server IP address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    serverIp: int;

    /**
     * The IP address lease duration of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    leaseDuration: int;
  }

  /**
   * Wi-Fi IPv6 information.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  interface Ipv6Info {
    /**
     * The link IPv6 address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    linkIpv6Address: string;

    /**
     * The global IPv6 address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    globalIpv6Address: string;

    /**
     * The rand Global IPv6 address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    randomGlobalIpv6Address: string;

    /**
     * The unique IPv6 address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    uniqueIpv6Address?: string;

    /**
     * The rand unique IPv6 address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    randomUniqueIpv6Address?: string;

    /**
     * The gateway of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    gateway: string;

    /**
     * The network mask of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    netmask: string;

    /**
     * The primary DNS server IPV6 address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    primaryDNS: string;

    /**
     * The secondary DNS server IPV6 address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    secondDNS: string;
  }

  /**
   * Describes the settings for Wi-Fi connection.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface ConnectSettings {  
    /**
     * The ID (uniquely identifies) of a Wi-Fi connection.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    networkId: int;
  
    /**
     * Returned with user action, default value is false.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    withUserAction?: boolean;
  
    /**
     * User action timeout threshold(unit is seconds).
     * The maximum value cannot exceed 30, and default is 10.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    userActionTimeout?: int;
  
    /**
     * Whether to add the network to the system for connection.
     * Default is false, if set to true, the network will be added to the system
     * before connection and cannot be retrieved again.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    addNetworkToSystem?: boolean;
  }

  /**
   * Represents the hotspot configuration.
   *
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface HotspotConfig {
    /**
     * SSID of the hotspot, in UTF-8 format.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * Security type.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    securityType: WifiSecurityType;

    /**
     * Hotspot band. The value **1** stands for 2.4 GHz, the value **2** for 5 GHz, and the value **3** for dual bands.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    band: int;

    /**
     * Hotspot channel (channels 1 to 14 for 2.4 GHz, and channels 7 to 196 for 5 GHz)
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    channel?: int;

    /**
     * PSK of the hotspot.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    preSharedKey: string;

    /**
     * Maximum number of connections allowed.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    maxConn: int;

    /**
     * DHCP server IP address
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    ipAddress?: string;
  }

  /**
   * Represents the station information. This information contains details about the device that is connected to Wi-Fi.
   *
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface StationInfo {
    /**
     * Device name.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * MAC address.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    macAddress: string;

    /**
     * MAC address type.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    macAddressType?: DeviceAddressType;

    /**
     * IP address.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: string;
	
	/**
     * The client reason code of the Wi-Fi client leaving the hotspot, as
     * defined in the IEEE 802.11 protocol. The default value is 1.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    reasonCode?: int;

    /**
     * Whether the disconnection is initiated by the local device when the
     * Wi-Fi client left the hotspot.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    locallyGenerated?: boolean;

    /**
     * The Received Signal Strength Indicator (RSSI) in dBm of the Wi-Fi
     * client when it left the hotspot. The default value is -127.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    rssi?: int;
  }

  /**
   * Enumerates the IP address types.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  enum IpType {
    /**
     * Static IP address.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    STATIC,

    /**
     * IP address allocated by DHCP.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DHCP,

    /**
     * Unspecified.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN
  }

  /**
   * Enumerates the supplicant states.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SuppState {
    /**
     * The supplicant is disconnected from the AP.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTED,

    /**
     * The network interface is disabled.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INTERFACE_DISABLED,

    /**
     * The supplicant is inactive.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INACTIVE,

    /**
     * The supplicant is scanning for a WLAN connection.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SCANNING,

    /**
     * The supplicant is being authenticated.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    AUTHENTICATING,

    /**
     * The supplicant is being associated with an AP.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ASSOCIATING,

    /**
     * The supplicant is associated with an AP.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ASSOCIATED,

    /**
     * A four-way handshake is being performed for the supplicant.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FOUR_WAY_HANDSHAKE,

    /**
     * A group handshake is being performed for the supplicant.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    GROUP_HANDSHAKE,

    /**
     * The authentication is complete.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    COMPLETED,

    /**
     * The supplicant failed to set up the connection.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    UNINITIALIZED,

    /**
     * Invalid value.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID
  }

  /**
   * The state of Wi-Fi connection enumeration.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ConnState {
    /**
     * The device is searching for an available AP.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    SCANNING,

    /**
     * The Wi-Fi connection is being set up.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTING,

    /**
     * The Wi-Fi connection is being authenticated.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    AUTHENTICATING,

    /**
     * The IP address of the Wi-Fi connection is being obtained.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    OBTAINING_IPADDR,

    /**
     * The Wi-Fi connection has been set up.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTED,

    /**
     * The Wi-Fi connection is being torn down.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTING,

    /**
     * The Wi-Fi connection has been torn down.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTED,

    /**
     * Failed to set up the Wi-Fi connection.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN
  }

  /**
   * P2P device information.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2pDevice {
    /**
     * Device name
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * Device mac address
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceAddress: string;

    /**
     * Device mac address type
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 10 dynamic
     * @since 23 static
     */
    deviceAddressType?: DeviceAddressType;

    /**
     * Primary device type
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    primaryDeviceType: string;

    /**
     * Device status
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceStatus: P2pDeviceStatus;

    /**
     * Device group capabilities
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupCapabilities: int;
  }

  /**
   * P2P config.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2PConfig {
    /**
     * Device mac address
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceAddress: string;

    /**
     * Device mac address type
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 10 dynamic
     * @since 23 static
     */
    deviceAddressType?: DeviceAddressType;

    /**
     * Group network ID. When creating a group, -1 indicates creates a temporary group,
     * -2: indicates creates a persistent group
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    netId: int;

    /**
     * The passphrase of this {@code WifiP2pConfig} instance
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    passphrase: string;

    /**
     * Group name
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupName: string;

    /**
     * Group owner band
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    goBand: GroupOwnerBand;

    /**
     * Group owner frequency.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 23 dynamic&static
     */
    goFreq?: int;
  }

  /**
   * P2P group information.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2pGroupInfo {
    /**
     * Indicates whether it is group owner
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    isP2pGo: boolean;

    /**
     * Group owner information
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    ownerInfo: WifiP2pDevice;

    /**
     * The group passphrase 
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    passphrase: string;

    /**
     * Interface name
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     */
    interface: string;

    /**
     * Interface name.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 23 static
     */
    interfaceName: string;

    /**
     * Group name
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupName: string;

    /**
     * Network ID
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    networkId: int;

    /**
     * Frequency
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * Client list
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    clientDevices: WifiP2pDevice[];

    /**
     * Group owner IP address
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    goIpAddress: string;
  }

  /**
   * P2P connection status.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  enum P2pConnectState {
    /**
     * p2p is disconnected
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTED = 0,

    /**
     * p2p is connected
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTED = 1
  }

  /**
   * P2P linked information.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2pLinkedInfo {
    /**
     * Connection status
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    connectState: P2pConnectState;

    /**
     * Indicates whether it is group owner
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    isGroupOwner: boolean;

    /**
     * Group owner address
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupOwnerAddr: string;
  }

  /**
   * P2P device status.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  enum P2pDeviceStatus {
    /**
     * Indicate p2p device is connected.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTED = 0,

    /**
     * Indicate p2p device is invited.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    INVITED = 1,

    /**
     * Indicate p2p device is failed.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    FAILED = 2,

    /**
     * Indicate p2p device is available.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    AVAILABLE = 3,

    /**
     * Indicate p2p device is unavailable.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    UNAVAILABLE = 4
  }

  /**
   * P2P group owner band.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  enum GroupOwnerBand {
  /**
     * default band.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    GO_BAND_AUTO = 0,

  /**
     * 2.4G band.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    GO_BAND_2GHZ = 1,

  /**
     * 5G band.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    GO_BAND_5GHZ = 2
  }


  /**
   * Starts Wi-Fi network detections.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 21 dynamic
   * @since 23 static
   */
  function startWifiDetection(): void;

  /**
   * Whether the random MAC address is disabled.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { boolean } The value **true** indicates that random MAC addresses are disabled, and the value **false**
   *     indicates the opposite.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 21 dynamic
   * @since 23 static
   */
  function isRandomMacDisabled(): boolean;

  /**
   * Sets the Wi-Fi capability.
   *
   * @permission ohos.permission.SET_WIFI_CONFIG
   * @param { WifiCapability } capability - Wi-Fi capability.
   * @param { boolean } enable - Whether to enable the Wi-Fi capability. The value **true** means to enable, and the
   *     value **false** means the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API is not allowed called by Non-system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setWifiCapability(capability: WifiCapability, enable: boolean): void;

  /**
   * Obtains the Wi-Fi capabilities.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiCapability } capability - Wi-Fi capability.
   * @returns { boolean } The value **true** indicates the Wi-Fi capability is enabled, and the value **false**
   *     indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API is not allowed called by Non-system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getWifiCapability(capability: WifiCapability): boolean;

  /**
   * Get special Wi-Fi info
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { SpecialWifiInfo } Returns the special Wi-Fi info.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 2501000 - The Wi-Fi service is not started properly, or there is an Wi-Fi service error.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function getSpecialWifiInfo(): SpecialWifiInfo;

  /**
   * Query whether Wi-Fi is available
   *
   * @returns { boolean } Returns {@code true} if the Wi-Fi is available, returns {@code false} otherwise.
   * @throws { BusinessError } 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isWlanSupported(): boolean;

  /**
   * Enumerates the P2P service protocol types.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  enum P2pServiceProtocolType {
    /**
     * All service protocol types.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    SERVICE_TYPE_ALL = 0,

    /**
     * Bonjour (DNS-SD) service discovery protocol.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    SERVICE_TYPE_BONJOUR = 1,

    /**
     * UPnP service discovery protocol.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    SERVICE_TYPE_UP_NP = 2,

    /**
     * WS-Discovery service discovery protocol.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    SERVICE_TYPE_WS_DISCOVERY = 3,

    /**
     * Vendor-specific protocol.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    SERVICE_TYPE_VENDOR_SPECIFIC = 255
  }

  /**
   * Represents the P2P service information.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface WifiP2pServiceInfo {
    /**
     * Service name. Refer to the {@link addDnsSdLocalP2pService} or {@link addUpnpLocalP2pService} functions. 
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    serviceName: string;

    /**
     * Service protocol type.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    protocolType: P2pServiceProtocolType;

    /**
     * Query string list consumed by wpa_supplicant. The maximum size of a single data record is 1024.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    queryList: Array<string>;
  }

  /**
   * Represents the P2P service discovery request (TLV query).
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface WifiP2pServiceRequest {  
    /**
     * Service protocol type.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    protocolType: P2pServiceProtocolType;

    /**
     * Query bytes.
     * The maximum length is 256.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    query: Uint8Array;
  }

  /**
   * Represents the DNS-SD service response information received from a peer device.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface P2pDnsSdInfo {  
    /**
     * Instance name of the discovered Bonjour service.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    instanceName: string;

    /**
     * Registration type of the discovered Bonjour service. The value prefix is the same as
     * the serviceType input parameter in {@link addDnsSdLocalP2pService}, with ".local." appended at the end.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    registrationType: string;

    /**
     * The peer device that responded with the service.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    device: WifiP2pDevice;
  }

  /**
   * Represents the DNS-SD TXT record information received from a peer device.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface P2pDnsSdTxtInfo {  
    /**
     * The full domain name of the TXT record. The format is instanceName + "." + serviceType + ".local.".
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    wholeDomainName: string;

    /**
     * TXT record map containing key/value pairs.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    txtRecord: Map<string, string>;

    /**
     * The peer device that responded with the TXT record.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    device: WifiP2pDevice;
  }

  /**
   * Represents the UPnP service response information received from a peer device.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface P2pUpnpInfo {  
    /**
     * List of unique service names discovered. The maximum size of a single data record is 1024 bytes,
     * and the data volume is related to the number of services on the target device.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    uniqueServiceNames: Array<string>;

    /**
     * The peer device that responded with the service.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    device: WifiP2pDevice;
  }

  /**
   * Represents the generic service response information received from a peer device.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface P2pGenericInfo {  
    /**
     * Service protocol type of the response.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    protocolType: P2pServiceProtocolType;

    /**
     * Raw response data from the peer device.
     * The maximum length is 1024.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    responseData: Uint8Array;

    /**
     * The peer device that responded with the service.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    device: WifiP2pDevice;
  }

  /**
   * Represents the P2P service discovery response information received from a peer device.
   * The specific type is determined by the service protocol type of the response.
   *
   * @unionmember { P2pDnsSdInfo } DNS-SD service response information received from a peer device.
   * @unionmember { P2pDnsSdTxtInfo } DNS-SD TXT record information received from a peer device.
   * @unionmember { P2pUpnpInfo } UPnP service response information received from a peer device.
   * @unionmember { P2pGenericInfo } Generic service response information received from a peer device.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  type P2pServiceDiscoveryInfo = P2pDnsSdInfo | P2pDnsSdTxtInfo | P2pUpnpInfo | P2pGenericInfo;

  /**
   * Adds and registers the local P2P service description of DNS-SD (DNS service discovery) to be discovered by the peer
   * device.
   *
   * @permission ohos.permission.GET_WIFI_INFO_INTERNAL
   * @param { string } instanceName - Instance name, which is used for service discovery by the peer device. The value
   *     contains a maximum of 63 characters.
   * @param { string } serviceType - Service type, which is used for service discovery by the peer device. The value
   *     contains a maximum of 63 characters. It cannot be an empty string and can be customized. The recommended format
   *     is _<ServiceName>._<Protocol>, for example, **_http._tcp**.
   * @param { Map<string, string> } txtRecord - TXT record containing key-value pairs. A key cannot contain equal signs
   *     (=). The length of a single record equals to **key.length** + **value.length**, which must be less than 255
   *     bytes. It is recommended that the total length of all serialized keys and values be 200 to 400 bytes. If the
   *     length exceeds the limit of a single mDNS packet, the data may fail to be broadcast correctly or be ignored by
   *     the peer device. There is no limit on the number of key-value pairs. For the format, see
   *     [draft-cheshire-dnsext-dns-sd-11.txt](http://files.dns-sd.org/draft-cheshire-dnsext-dns-sd.txt).
   * @param { string } serviceName - Service name, which is used to identify the local service object. The value
   *     contains a maximum of 63 characters.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @throws { BusinessError } 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function addDnsSdLocalP2pService(instanceName: string, serviceType: string,
    txtRecord: Map<string, string>, serviceName: string): void;

  /**
   * Adds and registers the local P2P service description of the UPnP (Universal Plug and Play) service to be discovered
   * by the peer device.
   *
   * @permission ohos.permission.GET_WIFI_INFO_INTERNAL
   * @param { string } uuid - UUID, which is in the form of a string. For details about the format, see
   *     [RFC 4122](http://www.ietf.org/rfc/rfc4122.txt). The value has a fixed length of 36 characters and cannot
   *     contain spaces, for example, **6859dede-8574-59ab-9332-123456789012**.
   * @param { string } device - UPnP device type, which is in the form of a string. For details about the format, see
   *     [UPnP Device Architecture 1.1](http://www.upnp.org/specs/arch/UPnP-arch-DeviceArchitecture-v1.1.pdf). The
   *     length depends on the protocol definition and cannot contain spaces. The length is generally dozens of
   *     characters, and it is recommended to keep it within 255 bytes, for example,
   *     **urn:schemas-upnp-org:device:MediaServer:1**.
   * @param { Array<string> } services - Array of UPnP service types, which is in the form of a string. For details
   *     about the format, see
   *     [UPnP Device Architecture 1.1](http://www.upnp.org/specs/arch/UPnP-arch-DeviceArchitecture-v1.1.pdf). The
   *     length of each element in the array must not exceed 512 bytes, and the array should not contain too many
   *     elements. An example of this parameter is **urn:schemas-upnp-org:service:ContentDirectory:1**.
   * @param { string } serviceName - Service name used to identify the local service object. The value contains a
   *     maximum of 63 characters.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @throws { BusinessError } 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function addUpnpLocalP2pService(uuid: string, device: string,
    services: Array<string>, serviceName: string): void;

  /**
   * Removes a registered local service that was added through
   * [addDnsSdLocalP2pService]{@link wifiManager.addDnsSdLocalP2pService} or
   * [addUpnpLocalP2pService]{@link wifiManager.addUpnpLocalP2pService}.
   *
   * @permission ohos.permission.GET_WIFI_INFO_INTERNAL
   * @param { WifiP2pServiceInfo } srvInfo - Service description consistent with the registered service.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @throws { BusinessError } 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function removeLocalP2pService(srvInfo: WifiP2pServiceInfo): void;

  /**
   * Queries the local P2P services. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO_INTERNAL
   * @returns { Promise<Array<WifiP2pServiceInfo>> } Promise used to return the array of registered local P2P services.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function getLocalP2pServices(): Promise<Array<WifiP2pServiceInfo>>;
  
  /**
   * Adds a DNS-SD service discovery request that matches DNS-SD services.
   *
   * @permission ohos.permission.GET_WIFI_INFO_INTERNAL
   * @param { string } [serviceType] - Service type, which is used for peer service discovery.
   *     The recommended format is "_<ServiceName>._<Protocol>", for example, "_http._tcp".
   *     Corresponds to the serviceType input parameter in {@link addDnsSdLocalP2pService}.
   *     If this parameter is not specified, it defaults to an empty string, which matches all service types.
   * @param { string } [instanceName] - Instance name, used to discover the peer service.
   *     Corresponds to the instanceName input parameter in {@link addDnsSdLocalP2pService}.
   *     If this parameter is not specified, it defaults to an empty string.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @throws { BusinessError } 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function addDnsSdServiceRequest(serviceType?: string, instanceName?: string): void;

  /**
   * Adds a UPnP service discovery request that matches the specified search target.
   *
   * @permission ohos.permission.GET_WIFI_INFO_INTERNAL
   * @param { string } [searchTarget] - UPnP search target. If this parameter is not specified,
   *     it defaults to an empty string.<br>
   *     Examples of input parameter types: <br>
   *     <ul>
   *     <li>Search all UPnP devices and services: "ssdp:all"
   *     <li>Search specific root devices: "upnp:rootdevice"
   *     <li>Search specific device types (urn:schemas-upnp-org:device:...): <br>
   *         for example "urn:schemas-upnp-org:device:MediaServer:2"
   *     <li>Search specific service types (urn:schemas-upnp-org:service:...): <br>
   *         for example "urn:schemas-upnp-org:service:ContentDirectory:2"
   *     <li>Search specific UUID: for example: "uuid:6859dede-8574-59ab-9332-123456789012"
   *     </ul>
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @throws { BusinessError } 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function addUpnpServiceRequest(searchTarget?: string): void;

  /**
   * Queries the pending P2P service discovery requests. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO_INTERNAL
   * @returns { Promise<Array<WifiP2pServiceRequest>> } Promise used to return the pending service discovery
   *     request list.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @throws { BusinessError } 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function getP2pServiceRequest(): Promise<Array<WifiP2pServiceRequest>>;

  /**
   * Removes a specified service discovery request.
   * You can obtain the list of registered service discovery requests by calling {@link getP2pServiceRequest}.
   *
   * @permission ohos.permission.GET_WIFI_INFO_INTERNAL
   * @param { WifiP2pServiceRequest } request - Service discovery request to remove.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @throws { BusinessError } 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function removeP2pServiceRequest(request: WifiP2pServiceRequest): void;

  /**
   * Removes all pending service discovery requests.
   *
   * @permission ohos.permission.GET_WIFI_INFO_INTERNAL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @throws { BusinessError } 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function removeAllP2pServiceRequests(): void;

  /**
   * Starts P2P service discovery. The pending requests' TLV queries are used, falling back to all service types
   * if the pending list is empty.
   * Use {@link addDnsSdServiceRequest} or {@link addUpnpServiceRequest} to add a service request before
   * starting discovery.
   *
   * @permission ohos.permission.GET_WIFI_PEERS_MAC
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @throws { BusinessError } 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function discoverServices(): void;

  /**
   * Subscribes to generic service response events from peer devices.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<P2pServiceDiscoveryInfo> } callback - Callback invoked when a service discovery
   *     response is received from a peer device.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function onP2pServiceDiscovery(callback: Callback<P2pServiceDiscoveryInfo>): void;

  /**
   * Unsubscribes from generic service response events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<P2pServiceDiscoveryInfo> } [callback] - Callback to unregister. If not specified,
   *     all callbacks for this event type are unregistered.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function offP2pServiceDiscovery(callback?: Callback<P2pServiceDiscoveryInfo>): void;
}

export default wifiManager;
