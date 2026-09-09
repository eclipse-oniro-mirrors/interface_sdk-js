/*
 * Copyright (C) 2021-2023 Huawei Device Co., Ltd.
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
 * This module provides basic Wi-Fi functions (such as Wi-Fi scanning, connection management, connection information 
 * query, and signal strength acquisition), peer-to-peer (P2P) functions (such as device discovery, group creation and 
 * management, and P2P connection), and Wi-Fi notifications. It is applicable to scenarios where apps access the network
 * or perform P2P data transmission and connection with other devices over Wi-Fi.
 * 
 * > **NOTE**
 * >
 * > Since API version 9, this API is no longer maintained. You are advised to use 
 * > [@ohos.wifiManager (WLAN)]{@link @ohos.wifiManager:wifiManager}.
 *
 * @syscap SystemCapability.Communication.WiFi.STA
 * @since 6 dynamiconly
 */
declare namespace wifi {
  /**
   * Enables Wi-Fi.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } Returns {@code true} if the operation is successful, returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.enableWifi
   */
  function enableWifi(): boolean;

  /**
   * Disables Wi-Fi.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } Returns {@code true} if the operation is successful, returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.disableWifi
   */
  function disableWifi(): boolean;

  /**
   * Checks whether Wi-Fi is enabled.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Returns **true** if Wi-Fi is enabled; returns **false** otherwise.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isWifiActive
   */
  function isWifiActive(): boolean;

  /**
   * Starts Wi-Fi scanning.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.LOCATION
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.scan
   */
  function scan(): boolean;

  /**
   * Obtains the scan result. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or ohos.permission.LOCATION)
   * @returns { Promise<Array<WifiScanInfo>> } Promise used to return the detected hotspots.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getScanInfoList
   */
  function getScanInfos(): Promise<Array<WifiScanInfo>>;

  /**
   * Obtains the scan result. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or ohos.permission.LOCATION)
    * @param { AsyncCallback<Array<WifiScanInfo>> } callback - Callback used to return the result. If the operation
    *     succeeds, **err** is **null** and **data** is the detected hotspots. Otherwise, **err** contains the error
    *     information and **data** is unavailable.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getScanInfoList
   */
  function getScanInfos(callback: AsyncCallback<Array<WifiScanInfo>>): void;

  /**
   * Adds Wi-Fi connection configuration to the device.
   * 
   * <p>The configuration will be updated when the configuration is added.</p>
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config Indicates the device configuration for connection to the Wi-Fi network.
   * @returns { Promise<number> } Returns {@code networkId} if the configuration is added; returns {@code -1} otherwise.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.addDeviceConfig
   */
  function addDeviceConfig(config: WifiDeviceConfig): Promise<number>;

  /**
   * Adds Wi-Fi connection configuration to the device.
   *
   * <p>The configuration will be updated when the configuration is added.</p>
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config Indicates the device configuration for connection to the Wi-Fi network.
   * @param { AsyncCallback<number> } callback - Indicates the callback used to return the result.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.addDeviceConfig
   */
  function addDeviceConfig(config: WifiDeviceConfig, callback: AsyncCallback<number>): void;

  /**
   * Adds the configuration of an untrusted network. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - Wi-Fi configuration information.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means the operation is
   *     successful; the value **false** means the opposite.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.addCandidateConfig
   */
  function addUntrustedConfig(config: WifiDeviceConfig): Promise<boolean>;

  /**
   * Adds the configuration of an untrusted network. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - Wi-Fi configuration information.
    * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation succeeds,
    *     **err** is **null** and **data** indicates whether the operation is successful. Otherwise, **err** contains
    *     the error information and **data** is unavailable.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.addCandidateConfig
   */
  function addUntrustedConfig(config: WifiDeviceConfig, callback: AsyncCallback<boolean>): void;

  /**
   * Removes the configuration of an untrusted network. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - Wi-Fi configuration information.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means the operation is
   *     successful; the value **false** means the opposite.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.removeCandidateConfig
   */
  function removeUntrustedConfig(config: WifiDeviceConfig): Promise<boolean>;

  /**
   * Removes the configuration of an untrusted network. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - Wi-Fi configuration information.
    * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation succeeds,
    *     **err** is **null** and **data** indicates whether the operation is successful. Otherwise, **err** contains
    *     the error information and **data** is unavailable.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.removeCandidateConfig
   */
  function removeUntrustedConfig(config: WifiDeviceConfig, callback: AsyncCallback<boolean>): void;

  /**
   * Connects to Wi-Fi network.
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } networkId ID of the connected network.
   * @returns { boolean } Returns {@code true} if the network connection is successful, returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.connectToNetwork
   */
  function connectToNetwork(networkId: number): boolean;

  /**
   * Connects to Wi-Fi network.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG and
   *     ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { WifiDeviceConfig } config Indicates the device configuration for connection to the Wi-Fi network.
   * @returns { boolean } Returns {@code true} if the network connection is successful, returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.connectToDevice
   */
  function connectToDevice(config: WifiDeviceConfig): boolean;

  /**
   * Disconnect Wi-Fi network.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } Returns {@code true} for disconnecting network success, returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.disconnect
   */
  function disconnect(): boolean;

  /**
    * Calculates the Wi-Fi signal level based on the RSSI and frequency band.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { number } rssi - RSSI of the hotspot, in dBm.
   * @param { number } band - Frequency band of the Wi-Fi access point.
   * @returns { number } Signal level obtained. The value range is [0, 4].
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getSignalLevel
   */
  function getSignalLevel(rssi: number, band: number): number;

  /**
    * Obtains Wi-Fi connection information. This API uses a promise to return the result.
    *
    * @permission ohos.permission.GET_WIFI_INFO
    * @returns { Promise<WifiLinkedInfo> } Promise used to return the Wi-Fi connection information.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getLinkedInfo
   */
  function getLinkedInfo(): Promise<WifiLinkedInfo>;

  /**
   * Obtains Wi-Fi connection information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO
    * @param { AsyncCallback<WifiLinkedInfo> } callback - Callback used to return the result. If the operation
    *     succeeds, **err** is **null** and **data** is the Wi-Fi connection information obtained. Otherwise, **err**
    *     contains the error information and **data** is unavailable.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getLinkedInfo
   */
  function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void;

  /**
   * Checks whether the Wi-Fi connection is established.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Returns **true** if the Wi-Fi connection is established; returns **false** otherwise.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isConnected
   */
  function isConnected(): boolean;

  /**
   * Obtains the features supported by this device.
   * 
   * <p>To check whether this device supports a specified feature.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { number }Returns the features supported by this device.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getSupportedFeatures
   */
  function getSupportedFeatures(): number;

  /**
   * Checks whether the device supports the Wi-Fi feature specified by the feature ID.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { number } featureId - Feature ID.
   * @returns { boolean } Returns **true** if the feature is supported; returns **false** otherwise.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isFeatureSupported
   */
  function isFeatureSupported(featureId: number): boolean;

  /**
   * Obtains the MAC address of a Wi-Fi device. Wi-Fi must be enabled.
   * 
   * <p>The MAC address is unique and cannot be changed.
   *
   * @permission ohos.permission.GET_WIFI_LOCAL_MAC and ohos.permission.GET_WIFI_INFO
   * @returns { string[] } Returns the MAC address of the Wi-Fi device.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getDeviceMacAddress
   */
  function getDeviceMacAddress(): string[];

  /**
   * Obtains IP information.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { IpInfo } IP information obtained.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getIpInfo
   */
  function getIpInfo(): IpInfo;

  /**
   * Obtains the country code.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { string } Country code obtained.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getCountryCode
   */
  function getCountryCode(): string;

  /**
   * Re-associate to current network.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } {@code true} if the Wi-Fi network is re-associate successfully.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.reassociate
   */
  function reassociate(): boolean;

  /**
   * Re-connects to current network.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } {@code true} if the Wi-Fi network is re-connect successfully.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.reconnect
   */
  function reconnect(): boolean;

  /**
   * Obtains the list of all existing Wi-Fi configurations.
   * 
   * <p>You can obtain only the Wi-Fi configurations you created on your own application.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.GET_WIFI_CONFIG
   * @returns { Array<WifiDeviceConfig> } sReturns the list of all existing Wi-Fi configurations you created on your
   *     application.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getDeviceConfigs
   */
  function getDeviceConfigs(): Array<WifiDeviceConfig>;

  /**
   * Updates the specified Wi-Fi configuration.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config Indicates the Wi-Fi configuration to update.
   * @returns { number } Returns the network ID in the updated Wi-Fi configuration if the update is successful;
   *     returns {@code -1} if the specified Wi-Fi configuration is not contained in the list.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.updateDeviceConfig
   */
  function updateNetwork(config: WifiDeviceConfig): number;

  /**
   * Disables a specified network.
   * 
   * <p>The disabled network will not be associated with again.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } netId Identifies the network to disable.
   * @returns { boolean } Returns {@code true} if the specified network is disabled, returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.disableDeviceConfig
   */
  function disableNetwork(netId: number): boolean;

  /**
   * Removes all the saved Wi-Fi configurations.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } Returns {@code true} if all the saved Wi-Fi configurations are removed;
   *     returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.removeAllDeviceConfigs
   */
  function removeAllNetwork(): boolean;

  /**
   * Deletes a Wi-Fi network with a specified ID.
   * 
   * <p>After a Wi-Fi network is deleted, its configuration will be deleted from the list of Wi-Fi configurations.
   * If the Wi-Fi network is being connected, the connection will be interrupted.
   * The application can only delete Wi-Fi networks it has created.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } id Indicates the ID of the Wi-Fi network,
   *     which can be obtained using the {@link #addDeviceConfig} or {@link #getLinkedInfo} method.
   * @returns { boolean } Returns {@code true} if the Wi-Fi network is deleted successfully, returns {@code false}
   *     otherwise.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.removeDeviceConfig
   */
  function removeDevice(id: number): boolean;

  /**
   * Enables a Wi-Fi hotspot.
   * 
   * <p>This method is asynchronous. After the Wi-Fi hotspot is enabled, Wi-Fi may be disabled.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } Returns {@code true} if this method is called successfully, returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.enableHotspot
   */
  function enableHotspot(): boolean;

  /**
   * Disables a Wi-Fi hotspot.
   * 
   * <p>This method is asynchronous. If Wi-Fi is enabled after the Wi-Fi hotspot is disabled, Wi-Fi may be re-enabled.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } Returns {@code true} if this method is called successfully, returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.disableHotspot
   */
  function disableHotspot(): boolean;

  /**
   * Checks whether a device serving as a Wi-Fi hotspot supports both the 2.4 GHz and 5 GHz Wi-Fi.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } Returns {@code true} if the method is called successfully, returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isHotspotDualBandSupported
   */
  function isHotspotDualBandSupported(): boolean;

  /**
   * Checks whether Wi-Fi hotspot is active on a device.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Returns {@code true} if Wi-Fi hotspot is enabled, returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isHotspotActive
   */
  function isHotspotActive(): boolean;

  /**
   * Sets the hotspot for a device.
   * 
   * <p>Only OPEN and WPA2 PSK hotspot can be configured.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { HotspotConfig } config - Indicates the Wi-Fi hotspot configuration.
   *     The SSID and {@code securityType} must be available and correct.
   *     If {@code securityType} is not {@code open}, {@code preSharedKey} must be available and correct.
   * @returns { boolean } Returns {@code true} if the method is called successfully, returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.setHotspotConfig
   */
  function setHotspotConfig(config: HotspotConfig): boolean;

  /**
   * Obtains the Wi-Fi hotspot configuration.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { HotspotConfig } Returns the configuration of an existing or enabled Wi-Fi hotspot.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getHotspotConfig
   */
  function getHotspotConfig(): HotspotConfig;

  /**
   * Obtains the list of clients that are connected to a Wi-Fi hotspot.
   * 
   * <p>This method can only be used on a device that serves as a Wi-Fi hotspot.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { Array<StationInfo> } Returns the list of clients that are connected to the Wi-Fi hotspot.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getHotspotStations
   */
  function getStations(): Array<StationInfo>;

  /**
   * Obtains P2P connection information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiP2pLinkedInfo> } Promise used to return the P2P link information.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getP2pLinkedInfo
   */
  function getP2pLinkedInfo(): Promise<WifiP2pLinkedInfo>;

  /**
   * Obtains P2P connection information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO
    * @param { AsyncCallback<WifiP2pLinkedInfo> } callback - Callback used to return the result. If the operation
    *     succeeds, **err** is **null** and **data** is the P2P link information. Otherwise, **err** contains the error
    *     information and **data** is unavailable.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getP2pLinkedInfo
   */
  function getP2pLinkedInfo(callback: AsyncCallback<WifiP2pLinkedInfo>): void;

  /**
   * Obtains the current P2P group information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @returns { Promise<WifiP2pGroupInfo> } Promise used to return the P2P group information obtained.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getCurrentGroup
   */
  function getCurrentGroup(): Promise<WifiP2pGroupInfo>;

  /**
   * Obtains the current P2P group information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
    * @param { AsyncCallback<WifiP2pGroupInfo> } callback - Callback used to return the result. If the operation
    *     succeeds, **err** is **null** and **data** is the group information obtained. Otherwise, **err** contains the
    *     error information and **data** is unavailable.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getCurrentGroup
   */
  function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void;

  /**
   * Obtains the P2P peer device list. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @returns { Promise<WifiP2pDevice[]> } Promise used to return the peer device list.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getP2pPeerDevices
   */
  function getP2pPeerDevices(): Promise<WifiP2pDevice[]>;

  /**
   * Obtains the P2P peer device list. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
    * @param { AsyncCallback<WifiP2pDevice[]> } callback - Callback used to return the result. If the operation
    *     succeeds, **err** is **null** and **data** is the peer device list obtained. Otherwise, **err** contains the
    *     error information and **data** is unavailable.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getP2pPeerDevices
   */
  function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void;

  /**
   * Creates a P2P group.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiP2PConfig } config - Group configuration.
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.createP2pGroup
   */
  function createGroup(config: WifiP2PConfig): boolean;

  /**
   * Removes this P2P group.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.removeP2pGroup
   */
  function removeGroup(): boolean;

  /**
   * Sets up a P2P connection.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @param { WifiP2PConfig } config - P2P group configuration.
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.p2pConnect
   */
  function p2pConnect(config: WifiP2PConfig): boolean;

  /**
   * Cancels this P2P connection.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.p2pCancelConnect
   */
  function p2pCancelConnect(): boolean;

  /**
   * Starts to discover devices.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.startDiscoverP2pDevices
   */
  function startDiscoverDevices(): boolean;

  /**
   * Stops discovering devices.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Whether the device discovery is stopped successfully. **true** if the operation is successful;
   *     **false** otherwise.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.stopDiscoverP2pDevices
   */
  function stopDiscoverDevices(): boolean;

  /**
   * Deletes the persistent P2P group with the specified network ID.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } netId - Indicates the network ID of the group to be deleted.
   * @returns { boolean } Returns {@code true} if the operation is successful, returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.deletePersistentP2pGroup
   */
  function deletePersistentGroup(netId: number): boolean;

  /**
   * Sets the name of the Wi-Fi P2P device.
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { string } devName Indicates the name to be set.
   * @returns { boolean } Returns {@code true} if the operation is successful, returns {@code false} otherwise.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.setP2pDeviceName
   */
  function setDeviceName(devName: string): boolean;

  /**
   * Subscribes to Wi-Fi status change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - Event type, which has a fixed value of **wifiStateChange**.
   * @param { Callback<number> } callback - Callback for status changes. Returns **0**: Deactivated.
   *     <br>**1**: Activated.
   *     <br>**2**: Activating.
   *     <br>**3**: Deactivating.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:wifiStateChange
   */
  function on(type: 'wifiStateChange', callback: Callback<number>): void;

  /**
   * Unsubscribes from Wi-Fi status change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - Event type, which has a fixed value of **wifiStateChange**.
   * @param { Callback<number> } callback - Callback to unregister. If this parameter is not specified, all callbacks
   *     for the specified event will be unregistered.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:wifiStateChange
   */
  function off(type: 'wifiStateChange', callback?: Callback<number>): void;

  /**
   * Subscribes to Wi-Fi connection status change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - Event type, which has a fixed value of **wifiConnectionChange**.
   * @param { Callback<number> } callback - Callback for status changes.
   *     <br>**WLAN connection states**
   *     <br>- **0**: Disconnected.
   *     <br>- **1**: Connected.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:wifiConnectionChange
   */
  function on(type: 'wifiConnectionChange', callback: Callback<number>): void;

  /**
   * Unsubscribes from Wi-Fi connection status change events.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - Event type, which has a fixed value of **wifiConnectionChange**.
   * @param { Callback<number> } callback - Callback to unregister. If this parameter is not specified, all callbacks
   *     for the specified event will be unregistered.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:wifiConnectionChange
   */
  function off(type: 'wifiConnectionChange', callback?: Callback<number>): void;

  /**
   * Subscribes to WLAN scan state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - Event type, which has a fixed value of **wifiScanStateChange**.
   * @param { Callback<number> } callback - Callback for status changes.
   *     <br>**WLAN scan states**
   *     <br>- **0**: Scan failed.
   *     <br>- **1**: Scan successful.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:wifiScanStateChange
   */
  function on(type: 'wifiScanStateChange', callback: Callback<number>): void;

  /**
   * Unsubscribes from WLAN scan state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - Event type, which has a fixed value of **wifiScanStateChange**.
   * @param { Callback<number> } callback - Callback to unregister. If this parameter is not specified, all callbacks
   *     for the specified event will be unregistered.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:wifiScanStateChange
   */
  function off(type: 'wifiScanStateChange', callback?: Callback<number>): void;

  /**
   * Subscribes to RSSI changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - Event type, which has a fixed value of **wifiRssiChange**.
   * @param { Callback<number> } callback - Callback used to return the RSSI, in dBm.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:wifiRssiChange
   */
  function on(type: 'wifiRssiChange', callback: Callback<number>): void;

  /**
   * Unsubscribes from RSSI changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - Event type, which has a fixed value of **wifiRssiChange**.
   * @param { Callback<number> } callback - Callback to unregister. If this parameter is not specified, all callbacks
   *     for the specified event will be unregistered.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:wifiRssiChange
   */
  function off(type: 'wifiRssiChange', callback?: Callback<number>): void;

  /**
   * Subscribe Wi-Fi stream change events.
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { 'streamChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 1: stream down, 2: stream up, 3: stream bidirectional
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:streamChange
   */
  function on(type: 'streamChange', callback: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi stream change events.
   * 
   * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { 'streamChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 1: stream down, 2: stream up, 3: stream bidirectional
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:streamChange
   */
  function off(type: 'streamChange', callback?: Callback<number>): void;

  /**
   * Subscribes to hotspot state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - Event type, which has a fixed value of **hotspotStateChange**.
   * @param { Callback<number> } callback - Callback for status changes.
   *     <br>**Hotspot states**
   *     <br>- **0**: Deactivated.
   *     <br>- **1**: Activated.
   *     <br>- **2**: Activating.
   *     <br>- **3**: Deactivating.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:hotspotStateChange
   */
  function on(type: 'hotspotStateChange', callback: Callback<number>): void;

  /**
   * Unsubscribes from hotspot state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - Event type, which has a fixed value of **hotspotStateChange**.
   * @param { Callback<number> } callback - Callback to unregister. If this parameter is not specified, all callbacks
   *     for the specified event will be unregistered.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:hotspotStateChange
   */
  function off(type: 'hotspotStateChange', callback?: Callback<number>): void;

  /**
   * Subscribe Wi-Fi hotspot sta join events.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaJoin' } type - event name.
   * @param { Callback<StationInfo> } callback - the callback of on
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:hotspotStaJoin
   */
  function on(type: 'hotspotStaJoin', callback: Callback<StationInfo>): void;

  /**
   * Unsubscribe Wi-Fi hotspot sta join events.
   * 
   * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaJoin' } type - event name.
   * @param { Callback<StationInfo> } callback - the callback of on
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:hotspotStaJoin
   */
  function off(type: 'hotspotStaJoin', callback?: Callback<StationInfo>): void;

  /**
   * Subscribe Wi-Fi hotspot sta leave events.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaLeave' } type - event name.
   * @param { Callback<StationInfo> } callback - the callback of on
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:hotspotStaLeave
   */
  function on(type: 'hotspotStaLeave', callback: Callback<StationInfo>): void;

  /**
   * Unsubscribe Wi-Fi hotspot sta leave events.
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaLeave' } type - event name.
   * @param { Callback<StationInfo> } callback - the callback of on
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:hotspotStaLeave
   */
  function off(type: 'hotspotStaLeave', callback?: Callback<StationInfo>): void;

  /**
   * Subscribes to P2P state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - Event type, which has a fixed value of **p2pStateChange**.
   * @param { Callback<number> } callback - Callback for status changes.
   *     <br>**P2P states**
   *     <br>- **1**: Available.
   *     <br>- **2**: Opening.
   *     <br>- **3**: Opened.
   *     <br>- **4**: Closing.
   *     <br>- **5**: Closed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pStateChange
   */
  function on(type: 'p2pStateChange', callback: Callback<number>): void;

  /**
   * Unsubscribes from P2P state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - Event type, which has a fixed value of **p2pStateChange**.
   * @param { Callback<number> } callback - Callback to unregister. If this parameter is not specified, all callbacks
   *     for the specified event will be unregistered.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pStateChange
   */
  function off(type: 'p2pStateChange', callback?: Callback<number>): void;

  /**
   * Subscribes to P2P connection state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - Event type, which has a fixed value of **p2pConnectionChange**.
   * @param { Callback<WifiP2pLinkedInfo> } callback - Callback for status changes.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pConnectionChange
   */
  function on(type: 'p2pConnectionChange', callback: Callback<WifiP2pLinkedInfo>): void;

  /**
   * Unsubscribes from P2P connection state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - Event type, which has a fixed value of **p2pConnectionChange**.
   * @param { Callback<WifiP2pLinkedInfo> } callback - Callback to unregister. If this parameter is not specified, all
   *     callbacks for the specified event will be unregistered.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pConnectionChange
   */
  function off(type: 'p2pConnectionChange', callback?: Callback<WifiP2pLinkedInfo>): void;

  /**
   * Subscribes to P2P device state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @param { 'p2pDeviceChange' } type - Event type, which has a fixed value of **p2pDeviceChange**.
   * @param { Callback<WifiP2pDevice> } callback - Callback for status changes.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pDeviceChange
   */
  function on(type: 'p2pDeviceChange', callback: Callback<WifiP2pDevice>): void;

  /**
   * Unsubscribes from P2P device state changes.
   *
   * @permission ohos.permission.LOCATION
   * @param { 'p2pDeviceChange' } type - Event type, which has a fixed value of **p2pDeviceChange**.
   * @param { Callback<WifiP2pDevice> } callback - Callback to unregister. If this parameter is not specified, all
   *     callbacks for the specified event will be unregistered.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pDeviceChange
   */
  function off(type: 'p2pDeviceChange', callback?: Callback<WifiP2pDevice>): void;

  /**
   * Subscribes to P2P peer device state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @param { 'p2pPeerDeviceChange' } type - Event type, which has a fixed value of **p2pPeerDeviceChange**.
   * @param { Callback<WifiP2pDevice[]> } callback - Callback for status changes.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pPeerDeviceChange
   */
  function on(type: 'p2pPeerDeviceChange', callback: Callback<WifiP2pDevice[]>): void;

  /**
   * Unsubscribes from P2P peer device state changes.
   *
   * @permission ohos.permission.LOCATION
   * @param { 'p2pPeerDeviceChange' } type - Event type, which has a fixed value of **p2pPeerDeviceChange**.
   * @param { Callback<WifiP2pDevice[]> } callback - Callback to unregister. If this parameter is not specified, all
   *     callbacks for the specified event will be unregistered.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pPeerDeviceChange
   */
  function off(type: 'p2pPeerDeviceChange', callback?: Callback<WifiP2pDevice[]>): void;

  /**
   * Subscribes to P2P persistent group state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - Event type, which has a fixed value of **p2pPersistentGroupChange**.
   * @param { Callback<void> } callback - Callback for status changes.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pPersistentGroupChange
   */
  function on(type: 'p2pPersistentGroupChange', callback: Callback<void>): void;

  /**
   * Unsubscribes from P2P persistent group state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - Event type, which has a fixed value of **p2pPersistentGroupChange**.
   * @param { Callback<void> } callback - Callback to unregister. If this parameter is not specified, all callbacks for
   *     the specified event will be unregistered.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pPersistentGroupChange
   */
  function off(type: 'p2pPersistentGroupChange', callback?: Callback<void>): void;

  /**
   * Subscribes to P2P device discovery state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - Event type, which has a fixed value of **p2pDiscoveryChange**.
   * @param { Callback<number> } callback - Callback for status changes.
   *     <br>**P2P discovered device states**
   *     <br>- **0**: Initial state.
   *     <br>- **1**: Discovered.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pDiscoveryChange
   */
  function on(type: 'p2pDiscoveryChange', callback: Callback<number>): void;

  /**
   * Unsubscribes from P2P device discovery state changes.
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - Event type, which has a fixed value of **p2pDiscoveryChange**.
   * @param { Callback<number> } callback - Callback to unregister. If this parameter is not specified, all callbacks
   *     for the specified event will be unregistered.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pDiscoveryChange
   */
  function off(type: 'p2pDiscoveryChange', callback?: Callback<number>): void;

  /**
   * Represents the Wi-Fi configuration information.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig
   */
  interface WifiDeviceConfig {
    /**
     * Service set identifier (SSID) of the hotspot, in UTF-8 format. The maximum length is 32 bytes.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.ssid
     */
    ssid: string;

    /**
     * BSSID of the hotspot, for example, **00:11:22:33:44:55**.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.bssid
     */
    bssid: string;

    /**
     * PSK of the hotspot. The maximum length is 64 bytes.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.preSharedKey
     */
    preSharedKey: string;

    /**
     * Whether the network is hidden. The value **true** indicates that the network is hidden, and the value **false** 
     * indicates the opposite.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.isHiddenSsid
     */
    isHiddenSsid: boolean;

    /**
     * Security type.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.securityType
     */
    securityType: WifiSecurityType;

    /**
     * The UID of the Wi-Fi configuration creator
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.creatorUid
     */
    creatorUid: number;

    /**
     * Disable reason
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.disableReason
     */
    disableReason: number;

    /**
     * Allocated networkId
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.netId
     */
    netId: number;

    /**
     * Random mac type
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.randomMacType
     */
    randomMacType: number;

    /**
     * Random mac address, the length is 6
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.randomMacAddr
     */
    randomMacAddr: string;

    /**
     * IP Type
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.ipType
     */
    ipType: IpType;

    /**
     * IP config of static
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.staticIp
     */
    staticIp: IpConfig;
  }

  /**
   * Wi-Fi IP configuration information.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.IpConfig
   */
  interface IpConfig {
    /**
     * IP address.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpConfig.ipAddress
     */
    ipAddress: number;

    /**
     * Gate way.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpConfig.gateway
     */
    gateway: number;

    /**
     * DNS servers.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpConfig.dnsServers
     */
    dnsServers: number[];

    /**
     * Domains.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpConfig.domains
     */
    domains: Array<string>;
  }

  /**
   * Represents the Wi-Fi hotspot information.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo
   */
  interface WifiScanInfo {
    /**
     * Service set identifier (SSID) of the hotspot, in UTF-8 format. The maximum length is 32 bytes.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.ssid
     */
    ssid: string;

    /**
     * Basic service set identifier (BSSID) of the hotspot, for example, **00:11:22:33:44:55**.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.bssid
     */
    bssid: string;

    /**
     * Hotspot capabilities.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.capabilities
     */
    capabilities: string;

    /**
     * Wi-Fi encryption type.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.securityType
     */
    securityType: WifiSecurityType;

    /**
     * Received signal strength indicator (RSSI) of the hotspot, in dBm.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.rssi
     */
    rssi: number;

    /**
     * Frequency band of the Wi-Fi access point. The value **1** indicates 2.4 GHz, and the value **2** indicates 5 GHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.band
     */
    band: number;

    /**
     * Frequency of the Wi-Fi access point, in MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.frequency
     */
    frequency: number;

    /**
     * Bandwidth of the Wi-Fi access point.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.channelWidth
     */
    channelWidth: number;

    /**
     * Timestamp.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.timestamp
     */
    timestamp: number;
  }

  /**
   * Enumerates the Wi-Fi security types.
   *
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType
   */
  enum WifiSecurityType {
    /**
     * Invalid security type.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_INVALID
     */
    WIFI_SEC_TYPE_INVALID = 0,

    /**
     * Open security type.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_OPEN
     */
    WIFI_SEC_TYPE_OPEN = 1,

    /**
     * Wired Equivalent Privacy (WEP).
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_WEP
     */
    WIFI_SEC_TYPE_WEP = 2,

    /**
     * Pre-shared key (PSK).
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_PSK
     */
    WIFI_SEC_TYPE_PSK = 3,

    /**
     * Simultaneous Authentication of Equals (SAE).
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_SAE
     */
    WIFI_SEC_TYPE_SAE = 4,
  }

  /**
   * Provides information about a Wi-Fi connection.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo
   */
  interface WifiLinkedInfo {
    /**
     * Service set identifier (SSID) of the hotspot, in UTF-8 format. The maximum length is 32 bytes.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.ssid
     */
    ssid: string;

    /**
     * BSSID of the hotspot, for example, **00:11:22:33:44:55**.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.bssid
     */
    bssid: string;

    /**
     * The ID(uniquely identifies) of a Wi-Fi connection.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.networkId
     */
    networkId: number;

    /**
     * RSSI of the hotspot, in dBm.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.rssi
     */
    rssi: number;

    /**
     * Frequency band of the Wi-Fi access point. The value **1** indicates 2.4 GHz, and the value **2** indicates 5 GHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.band
     */
    band: number;

    /**
     * Speed of the Wi-Fi access point, in Mbit/s.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.linkSpeed
     */
    linkSpeed: number;

    /**
     * Frequency of the Wi-Fi access point, in MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.frequency
     */
    frequency: number;

    /**
     * Whether the Wi-Fi access point is a hidden network. The value **true** indicates that the Wi-Fi access point is a
     * hidden network; the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.isHidden
     */
    isHidden: boolean;

    /**
     * Whether to restrict data volume at the Wi-Fi access point. The value **true** means to restrict data volume at 
     * the Wi-Fi access point, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.isRestricted
     */
    isRestricted: boolean;

    /**
     * The load value of this Wi-Fi connection. A greater value indicates a higher load.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.chload
     */
    chload: number;

    /**
     * The signal-to-noise ratio (SNR) of this Wi-Fi connection.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.snr
     */
    snr: number;

    /**
     * MAC address of the device.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.macAddress
     */
    macAddress: string;

    /**
     * IP address of the Wi-Fi connection.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.ipAddress
     */
    ipAddress: number;

    /**
     * The state of the supplicant of this Wi-Fi connection.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.suppState
     */
    suppState: SuppState;

    /**
     * Wi-Fi connection status.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.connState
     */
    connState: ConnState;
  }

  /**
   * Represents the IP information obtained.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.IpInfo
   */
  interface IpInfo {
    /**
     * IP address.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.ipAddress
     */
    ipAddress: number;

    /**
     * Gateway.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.gateway
     */
    gateway: number;

    /**
     * Subnet mask.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.netmask
     */
    netmask: number;

    /**
     * IP address of the preferred DNS server.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.primaryDns
     */
    primaryDns: number;

    /**
     * IP address of the alternate DNS server.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.secondDns
     */
    secondDns: number;

    /**
     * IP address of the DHCP server.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.serverIp
     */
    serverIp: number;

    /**
     * Lease duration of the IP address, in seconds.
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.leaseDuration
     */
    leaseDuration: number;
  }

  /**
   * Wi-Fi hotspot configuration information.
   *
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.HotspotConfig
   */
  interface HotspotConfig {
    /**
     * The SSID of the Wi-Fi hotspot
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.ssid
     */
    ssid: string;

    /**
     * The encryption mode of the Wi-Fi hotspot
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.securityType
     */
    securityType: WifiSecurityType;

    /**
     * The frequency band of the Wi-Fi hotspot
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.band
     */
    band: number;

    /**
     * The password of the Wi-Fi hotspot
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.preSharedKey
     */
    preSharedKey: string;

    /**
     * The maximum number of connections allowed by the Wi-Fi hotspot
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.maxConn
     */
    maxConn: number;
  }

  /**
   * Wi-Fi station information.
   *
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.StationInfo
   */
  interface StationInfo {
    /**
     * the network name of the Wi-Fi client
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.StationInfo.name
     */
    name: string;

    /**
     * The MAC address of the Wi-Fi client
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.StationInfo.macAddress
     */
    macAddress: string;

    /**
     * The IP address of the Wi-Fi client
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.StationInfo.ipAddress
     */
    ipAddress: string;
  }

  /**
   * Wi-Fi IP type enumeration.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.IpType
   */
  enum IpType {
    /**
     * Use statically configured IP settings
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpType.STATIC
     */
    STATIC,

    /**
     * Use dynamically configured IP settings
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpType.DHCP
     */
    DHCP,

    /**
     * No IP details are assigned
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpType.UNKNOWN
     */
    UNKNOWN,
  }

  /**
   * The state of the supplicant enumeration.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.SuppState
   */
  export enum SuppState {
    /**
     * The supplicant is not associated with or is disconnected from the AP.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.DISCONNECTED
     */
    DISCONNECTED,

    /**
     * The network interface is disabled.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.INTERFACE_DISABLED
     */
    INTERFACE_DISABLED,

    /**
     * The supplicant is disabled.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.INACTIVE
     */
    INACTIVE,

    /**
     * The supplicant is scanning for a Wi-Fi connection.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.SCANNING
     */
    SCANNING,

    /**
     * The supplicant is authenticating with a specified AP.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.AUTHENTICATING
     */
    AUTHENTICATING,

    /**
     * The supplicant is associating with a specified AP.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.ASSOCIATING
     */
    ASSOCIATING,

    /**
     * The supplicant is associated with a specified AP.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.ASSOCIATED
     */
    ASSOCIATED,

    /**
     * The four-way handshake is ongoing.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.FOUR_WAY_HANDSHAKE
     */
    FOUR_WAY_HANDSHAKE,

    /**
     * The group handshake is ongoing.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.GROUP_HANDSHAKE
     */
    GROUP_HANDSHAKE,

    /**
     * All authentication is completed.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.COMPLETED
     */
    COMPLETED,

    /**
     * Failed to establish a connection to the supplicant.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.UNINITIALIZED
     */
    UNINITIALIZED,

    /**
     * The supplicant is in an unknown or invalid state.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.INVALID
     */
    INVALID
  }

  /**
   * Enumerates the Wi-Fi connection statuses.
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.ConnState
   */
  export enum ConnState {
    /**
     * The device is scanning for available APs.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.SCANNING
     */
    SCANNING,

    /**
     * The Wi-Fi connection is being established.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.CONNECTING
     */
    CONNECTING,

    /**
     * The Wi-Fi connection is being authenticated.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.AUTHENTICATING
     */
    AUTHENTICATING,

    /**
     * The IP address of the Wi-Fi connection is being obtained.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.OBTAINING_IPADDR
     */
    OBTAINING_IPADDR,

    /**
     * The Wi-Fi connection is established.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.CONNECTED
     */
    CONNECTED,

    /**
     * The Wi-Fi connection is being disconnected.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.DISCONNECTING
     */
    DISCONNECTING,

    /**
     * The Wi-Fi connection is disconnected.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.DISCONNECTED
     */
    DISCONNECTED,

    /**
     * The Wi-Fi connection fails to be established.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.UNKNOWN
     */
    UNKNOWN
  }

  /**
   * Represents the P2P device information.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice
   */
  interface WifiP2pDevice {
    /**
     * Device name.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.deviceName
     */
    deviceName: string;

    /**
     * MAC address of the device.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.deviceAddress
     */
    deviceAddress: string;

    /**
     * Type of the primary device.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.primaryDeviceType
     */
    primaryDeviceType: string;

    /**
     * Device status.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.deviceStatus
     */
    deviceStatus: P2pDeviceStatus;

    /**
     * Group capability, in the form of bitmask.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.groupCapabilitys
     */
    groupCapabilitys: number;
  }

  /**
   * Represents P2P group configuration.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig
   */
  interface WifiP2PConfig {
    /**
     * Device address.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.deviceAddress
     */
    deviceAddress: string;

    /**
     * Network ID. The value **-1** indicates a temporary group, and **-2** indicates a persistent group.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.netId
     */
    netId: number;

    /**
     * Passphrase of the group.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.passphrase
     */
    passphrase: string;

    /**
     * Group name.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.groupName
     */
    groupName: string;

    /**
     * Frequency band of the group.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.goBand
     */
    goBand: GroupOwnerBand;
  }

  /**
   * Represents the P2P group information.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo
   */
  interface WifiP2pGroupInfo {
    /**
     * Whether the device is the group owner. The value **true** indicates that the device is the group owner, and the 
     * value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.isP2pGo
     */
    isP2pGo: boolean;

    /**
     * Device information of the group.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.ownerInfo
     */
    ownerInfo: WifiP2pDevice;

    /**
     * Passphrase of the group.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.passphrase
     */
    passphrase: string;

    /**
     * Interface name.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.interface
     */
    interface: string;

    /**
     * Group name.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.groupName
     */
    groupName: string;

    /**
     * Network ID.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.networkId
     */
    networkId: number;

    /**
     * Frequency of the group, in MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.frequency
     */
    frequency: number;

    /**
     * List of connected devices.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.clientDevices
     */
    clientDevices: WifiP2pDevice[];

    /**
     * IP address of the group.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.goIpAddress
     */
    goIpAddress: string;
  }

  /**
   * Enumerates the P2P connection states.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.P2pConnectState
   */
  enum P2pConnectState {
    /**
     * Disconnected.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pConnectState.DISCONNECTED
     */
    DISCONNECTED = 0,

    /**
     * Connected.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pConnectState.CONNECTED
     */
    CONNECTED = 1,
  }

  /**
   * Provides information about the P2P connection.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiP2pLinkedInfo
   */
  interface WifiP2pLinkedInfo {
    /**
     * P2P connection state.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pLinkedInfo.connectState
     */
    connectState: P2pConnectState;

    /**
     * Whether the device is the group owner. The value **true** indicates that the device is the group owner, and the 
     * value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pLinkedInfo.isGroupOwner
     */
    isGroupOwner: boolean;

    /**
     * MAC address of the group.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pLinkedInfo.groupOwnerAddr
     */
    groupOwnerAddr: string;
  }

  /**
   * Enumerates the P2P device states.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus
   */
  enum P2pDeviceStatus {
    /**
     * Connected.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.CONNECTED
     */
    CONNECTED = 0,

    /**
     * Invited.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.INVITED
     */
    INVITED = 1,

    /**
     * Failed.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.FAILED
     */
    FAILED = 2,

    /**
     * Available.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.AVAILABLE
     */
    AVAILABLE = 3,

    /**
     * Unavailable.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.UNAVAILABLE
     */
    UNAVAILABLE = 4,
  }

  /**
   * Enumerates the P2P group frequency bands.
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.GroupOwnerBand
   */
  enum GroupOwnerBand {
    /**
     * Auto.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.GroupOwnerBand.GO_BAND_AUTO
     */
    GO_BAND_AUTO = 0,

    /**
     * 2.4 GHz.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.GroupOwnerBand.GO_BAND_2GHZ
     */
    GO_BAND_2GHZ = 1,

    /**
     * 5 GHz.
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.GroupOwnerBand.GO_BAND_5GHZ
     */
    GO_BAND_5GHZ = 2,
  }
}

export default wifi;