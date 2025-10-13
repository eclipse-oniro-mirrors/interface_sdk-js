/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';

/**
 * Obtains traffic statistics.
 * @namespace statistics
 * @syscap SystemCapability.Communication.NetManager.Core
 * @since 10
 */
/**
 * Obtains traffic statistics.
 * @namespace statistics
 * @syscap SystemCapability.Communication.NetManager.Core
 * @atomicservice
 * @since arkts{'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace statistics {
  /**
   * @typedef {connection.NetBearType}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since arkts{'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type NetBearType = connection.NetBearType;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through a specified NIC.
   * @param { string } nic - Network interface card.
   * @param { AsyncCallback<long> } callback - Returns the data traffic received through the specified NIC.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since arkts{'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getIfaceRxBytes(nic: string, callback: AsyncCallback<long>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through a specified NIC.
   * @param { string } nic - Network interface card.
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since arkts{'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getIfaceRxBytes(nic: string): Promise<long>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC.
   * @param { string } nic - Network interface card.
   * @param { AsyncCallback<long> } callback - Returns the data traffic sent through the specified NIC.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since arkts{'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getIfaceTxBytes(nic: string, callback: AsyncCallback<long>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC.
   * @param { string } nic - Network interface card.
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since arkts{'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getIfaceTxBytes(nic: string): Promise<long>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through the cellular network.
   * @param { AsyncCallback<long> } callback - Returns the data traffic received through the cellular network.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getCellularRxBytes(callback: AsyncCallback<long>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through the cellular network.
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getCellularRxBytes(): Promise<long>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network.
   * @param { AsyncCallback<long> } callback - Returns the data traffic sent through the cellular network.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getCellularTxBytes(callback: AsyncCallback<long>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network.
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @throws { BusinessError } 2103012 - Failed to obtain the NIC name.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getCellularTxBytes(): Promise<long>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through all NICs.
   * @param { AsyncCallback<int> } callback - Returns the data traffic received through all NICs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through all NICs.
   * @param { AsyncCallback<long> } callback - Returns the data traffic received through all NICs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since arkts{'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getAllRxBytes(callback: AsyncCallback<long>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through all NICs.
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through all NICs.
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since arkts{'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getAllRxBytes(): Promise<long>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through all NICs.
   * @param { AsyncCallback<long> } callback - Returns the data traffic sent through all NICs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through all NICs.
   * @param { AsyncCallback<long> } callback - Returns the data traffic sent through all NICs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since arkts{'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getAllTxBytes(callback: AsyncCallback<long>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through all NICs.
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through all NICs.
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since arkts{'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getAllTxBytes(): Promise<long>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received by a specified application.
   * @param { int } uid - Indicates the process ID of the application.
   * @param { AsyncCallback<long> } callback - Returns the data traffic received by the specified application.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getUidRxBytes(uid: int, callback: AsyncCallback<long>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received by a specified application.
   * @param { int } uid - Indicates the process ID of the application.
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getUidRxBytes(uid: int): Promise<long>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent by a specified application.
   * @param { int } uid - Indicates the process ID of the application.
   * @param { AsyncCallback<long> } callback - Returns the data traffic sent by the specified application.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getUidTxBytes(uid: int, callback: AsyncCallback<long>): void;
  
  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent by a specified application.
   * @param { int } uid - Indicates the process ID of the application.
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read the system map.
   * @throws { BusinessError } 2103011 - Failed to create a system map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getUidTxBytes(uid: int): Promise<long>;

  /**
   * Register notifications of network traffic updates.
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { 'netStatsChange' } type - Indicates Event name.
   * @param { Callback<{ iface: string, uid?: int }> } callback - The callback of on.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  /**
   * Register notifications of network traffic updates.
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { 'netStatsChange' } type - Indicates Event name.
   * @param { Callback<NetStatsChangeInfo> } callback - The callback of on.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  function on(type: 'netStatsChange', callback: Callback<NetStatsChangeInfo>): void;

  /**
   * Unregister notifications of network traffic updates.
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { 'netStatsChange' } type - Indicates Event name.
   * @param { Callback<{ iface: string, uid?: int }> } callback - The callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  /**
   * Unregister notifications of network traffic updates.
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { 'netStatsChange' } type - Indicates Event name.
   * @param { Callback<NetStatsChangeInfo> } callback - The callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  function off(type: 'netStatsChange', callback?: Callback<NetStatsChangeInfo>): void;

  /**
   * Get the traffic usage details of the network interface in the specified time period.
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { IfaceInfo } ifaceInfo - Detailed query content. See {@link IfaceInfo}.
   * @param { AsyncCallback<NetStatsInfo> } callback - Returns the {@link NetStatsInfo} object;
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts{'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getTrafficStatsByIface(ifaceInfo: IfaceInfo, callback: AsyncCallback<NetStatsInfo>): void;
  
  /**
   * Get the traffic usage details of the network interface in the specified time period.
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { IfaceInfo } ifaceInfo - Detailed query content. See {@link IfaceInfo}.
   * @returns { Promise<NetStatsInfo> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts{'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getTrafficStatsByIface(ifaceInfo: IfaceInfo): Promise<NetStatsInfo>;

  /**
   * Get the traffic usage details of the specified time period of the application.
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { UidInfo } uidInfo - Detailed query content. See {@link UidInfo}.
   * @param { AsyncCallback<NetStatsInfo> } callback - Returns the {@link NetStatsInfo} object;
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts{'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getTrafficStatsByUid(uidInfo: UidInfo, callback: AsyncCallback<NetStatsInfo>): void;
  
  /**
   * Get the traffic usage details of the specified time period of the application.
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { UidInfo } uidInfo - Detailed query content. See {@link UidInfo}.
   * @returns { Promise<NetStatsInfo> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts{'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getTrafficStatsByUid(uidInfo: UidInfo): Promise<NetStatsInfo>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through a specified sockfd.
   * @param { int } sockfd - Indicates the file descriptor of the given socket.
   * @param { AsyncCallback<long> } callback - Returns the data traffic bytes received by the specified sockfd.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11
   */
  function getSockfdRxBytes(sockfd: int, callback: AsyncCallback<long>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through a specified sockfd.
   * @param { int } sockfd - Indicates the file descriptor of the given socket.
   * @returns { Promise<long> } Returns the data traffic bytes received by the specified sockfd.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11
   */
  function getSockfdRxBytes(sockfd: int): Promise<long>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through a specified sockfd.
   * @param { int } sockfd - Indicates the file descriptor of the given socket.
   * @param { AsyncCallback<long> } callback - Returns the data traffic bytes sent by the specified sockfd.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11
   */
  function getSockfdTxBytes(sockfd: int, callback: AsyncCallback<long>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through a specified sockfd.
   * @param { int } sockfd - Indicates the file descriptor of the given socket.
   * @returns { Promise<long> } Returns the data traffic bytes sent by the specified sockfd.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11
   */
  function getSockfdTxBytes(sockfd: int): Promise<long>;

  /**
   * Parameters for obtaining detailed information on network interface traffic usage.
   * @interface IfaceInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts{'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface IfaceInfo {
    /**
     * Network interface for querying traffic.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    iface: string;

    /**
     * Start time for querying traffic.
     * @type {int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    startTime: int;

    /**
     * End time for querying traffic.
     * @type {int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    endTime: int;
  }

  /**
   * Parameters for obtaining detailed information on application traffic usage.
   * @interface UidInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts{'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface UidInfo {
    /**
     * See {@link IfaceInfo}
     * @type {IfaceInfo}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ifaceInfo: IfaceInfo;

    /**
     * Uid of app for querying traffic.
     * @type {int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    uid: int;
  }

  /**
   * Detailed information of statistics.
   * @interface NetStatsInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts{'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  /**
   * Detailed information of statistics.
   * @interface NetStatsInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 22 static&dynamic
   */
  export interface NetStatsInfo {
    /**
     * Bytes of received.
     * @type {long}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    /**
     * Bytes of received.
     * @type {long}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 static&dynamic
     */
    rxBytes: long;

    /**
     * Bytes of send.
     * @type {long}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    /**
     * Bytes of send.
     * @type {long}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 static&dynamic
     */
    txBytes: long;

    /**
     * Packets of received.
     * @type {long}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    /**
     * Packets of received.
     * @type {long}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 static&dynamic
     */
    rxPackets: long;

    /**
     * Packets of send.
     * @type {long}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    /**
     * Packets of send.
     * @type {long}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 static&dynamic
     */
    txPackets: long;
  }

  /**
   * Used to monitor and manage the status and usage of network interfaces.
   * @interface NetStatsChangeInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts{'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface NetStatsChangeInfo {
    /**
     * Network interface for querying traffic.
     * @type { string }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    iface: string;
    /**
     * Network interface for querying traffic.
     * @type { ?int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    uid?: int;
  }

  /**
   * An {@link NetStatsInfo} array with start time and end time.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  export type NetStatsInfoSequence = {
    /**
     * Start time for querying traffic.
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    startTime: int;
    /**
     * End time for querying traffic.
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    endTime: int;
    /**
     * Detailed information of statistics.
     * @type { NetStatsInfo }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    info: NetStatsInfo;
  }[];

  /**
   * {@link NetStatsInfo} for every UID. Key is UID.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  export type UidNetStatsInfo = {
    [uid: int]: NetStatsInfo;
  };

  /**
   * Parameters for obtaining detailed information on specified network traffic usage.
   * @interface NetworkInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts{'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  /**
   * Parameters for obtaining detailed information on specified network traffic usage.
   * @interface NetworkInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 22 static&dynamic
   */
  export interface NetworkInfo {
    /**
     * Network type for querying traffic.
     * @type { NetBearType }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    /**
     * Network type for querying traffic.
     * @type { NetBearType }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 static&dynamic
     */
    type: NetBearType;
    /**
     * Start time for querying traffic.
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    /**
     * Start time for querying traffic.
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 static&dynamic
     */
    startTime: int;
    /**
     * End time for querying traffic.
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    /**
     * End time for querying traffic.
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 static&dynamic
     */
    endTime: int;
    /**
     * SIM card id for querying traffic.
     * @type { ?int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts{'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    /**
     * SIM card id for querying traffic.
     * @type { ?int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 static&dynamic
     */
    simId?: int;
  }

  /**
   * Get the traffic usage details of the specified network of all applications in the specified time period.
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { NetworkInfo } networkInfo - Information about the network to be queried.
   * @returns { Promise<UidNetStatsInfo> } The statistics of the sim card.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function getTrafficStatsByNetwork(networkInfo: NetworkInfo): Promise<UidNetStatsInfo>;
  /**
   * Get the traffic usage sequence of the specified network of the application in the specified time period.
   * @permission ohos.permission.GET_NETWORK_STATS
   * @param { int } uid - UID with this parameter, get stats info of this UID.
   * @param { NetworkInfo } networkInfo - Information about the network to be queried.
   * @returns { Promise<NetStatsInfoSequence> } The statistics history of the sim card.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function getTrafficStatsByUidNetwork(uid: int, networkInfo: NetworkInfo): Promise<NetStatsInfoSequence>;

  /**
   * Get the traffic usage details of the specified network of the calling application
   *     in the specified time period and the specified networktype.
   * @param { NetworkInfo } networkInfo - Information about the network to be queried.
   * @returns { Promise<NetStatsInfo> } The statistics of the calling application.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Failed to read the database.
   * @throws { BusinessError } 2103019 - The timestamp in param is invalid.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 22 dynamic&static
   */
  function getSelfTrafficStats(networkInfo: NetworkInfo): Promise<NetStatsInfo>;
}

export default statistics;