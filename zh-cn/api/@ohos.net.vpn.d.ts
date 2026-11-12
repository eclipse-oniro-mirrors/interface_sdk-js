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
 * @file VPN管理
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';
import type _AbilityContext from './application/UIAbilityContext';

/**
 * VPN管理模块，支持VPN的启动和停止功能。
 *
 * 本模块是操作系统提供的内置VPN功能，允许用户通过系统的网络设置进行VPN连接，通常提供的功能较少，而且有比较严格的限制。
 *
 * > **说明：**
 * >
 * > 本模块首批接口从 API version 10 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @syscap SystemCapability.Communication.NetManager.Vpn
 * @since 10 dynamic
 * @since 26.0.1 static
 */
declare namespace vpn {
  /**
   * 表示网络链路信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 26.0.1 static
   */
  export type LinkAddress = connection.LinkAddress;

  /**
   * 表示网络路由信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 26.0.1 static
   */
  export type RouteInfo = connection.RouteInfo;

  /**
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 10 dynamic
   * @since 26.0.1 static
   */
  export type AbilityContext = _AbilityContext;

  /**
   * 创建一个 VPN 连接对象。
   *
   * @param { AbilityContext } context - 指定 context。
   * @returns { VpnConnection } 返回一个 VPN 连接对象。
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 26.0.1 static
   */
  function createVpnConnection(context: AbilityContext): VpnConnection;

  /**
   * 订阅VPN连接状态变化事件。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { 'connect' } type - 订阅事件，固定为'connect'。
   * @param { Callback<VpnConnectState> } callback - VPN连接状态改变时的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function on(type: 'connect', callback: Callback<VpnConnectState>): void;

  /**
   * 订阅VPN连接状态变化事件。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { Callback<VpnConnectState> } callback - vpn连接状态的回调。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 26.0.1 static
   */
  function onConnect(callback: Callback<VpnConnectState>): void;

  /**
   * 订阅VPN连接状态变化事件。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { 'connectMulti' } type - 订阅事件，固定为'connectMulti'。
   * @param { Callback<MultiVpnConnectState> } callback - 多VPN连接状态改变时的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 19900001 - Invalid parameter value.
   * @throws { BusinessError } 19900002 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  function on(type: 'connectMulti', callback: Callback<MultiVpnConnectState>): void;

  /**
   * 订阅VPN连接状态变化事件。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { Callback<MultiVpnConnectState> } callback - 多VPN连接状态改变时的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 19900001 - Invalid parameter value.
   * @throws { BusinessError } 19900002 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 26.0.1 static
   */
  function onConnectMulti(callback: Callback<MultiVpnConnectState>): void;

  /**
   * 取消订阅VPN连接状态变化事件。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { 'connect' } type - 取消订阅事件，固定为'connect'。
   * @param { Callback<VpnConnectState> } callback - VPN连接状态改变时的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function off(type: 'connect', callback?: Callback<VpnConnectState>): void;

  /**
   * 取消订阅VPN连接状态变化事件。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { Callback<VpnConnectState> } [callback] - vpn连接状态的回调。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 26.0.1 static
   */
  function offConnect(callback?: Callback<VpnConnectState>): void;

  /**
   * 取消订阅VPN连接状态变化事件。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { 'connectMulti' } type - 取消订阅事件，固定为'connectMulti'。
   * @param { Callback<MultiVpnConnectState> } [callback] - 多VPN连接状态改变时的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 19900001 - Invalid parameter value.
   * @throws { BusinessError } 19900002 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  function off(type: 'connectMulti', callback?: Callback<MultiVpnConnectState>): void;

  /**
   * 取消订阅VPN连接状态变化事件。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { Callback<MultiVpnConnectState> } [callback] - 多VPN连接状态改变时的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 19900001 - Invalid parameter value.
   * @throws { BusinessError } 19900002 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 26.0.1 static
   */
  function offConnectMulti(callback?: Callback<MultiVpnConnectState>): void;

  /**
   * 添加系统VPN网络配置。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { SysVpnConfig } config - 指定VPN网络的配置信息，参见[SysVpnConfig]{@link vpn.SysVpnConfig}。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 26.0.1 static
   */
  function addSysVpnConfig(config: SysVpnConfig): Promise<void>;

  /**
   * 删除指定vpnId的系统VPN网络配置。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { string } vpnId - 指定VPN网络配置的uuid。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 26.0.1 static
   */
  function deleteSysVpnConfig(vpnId: string): Promise<void>;

  /**
   * 获取所有系统VPN网络配置。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @returns { Promise<Array<SysVpnConfig>> } Promise对象，返回所有VPN网络配置。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 26.0.1 static
   */
  function getSysVpnConfigList(): Promise<Array<SysVpnConfig>>;

  /**
   * 获取指定vpnId的系统VPN网络配置。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @param { string } vpnId - 指定VPN网络的uuid。
   * @returns { Promise<SysVpnConfig> } Promise对象，返回VPN网络配置。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 26.0.1 static
   */
  function getSysVpnConfig(vpnId: string): Promise<SysVpnConfig>;

  /**
   * 获取已连接的VPN网络配置。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @returns { Promise<SysVpnConfig> } Promise对象，返回已连接的VPN网络配置。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 26.0.1 static
   */
  function getConnectedSysVpnConfig(): Promise<SysVpnConfig>;

  /**
   * 获取已连接的VPN应用信息。
   *
   * @permission ohos.permission.MANAGE_VPN
   * @returns { Promise<Array<string>> } Promise对象，返回已连接的VPN应用信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 19900001 - Invalid parameter value.
   * @throws { BusinessError } 19900002 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 26.0.1 static
   */
  function getConnectedVpnAppInfo(): Promise<Array<string>>;

  /**
   * VPN 连接对象。在调用 VpnConnection 的方法前，需要先通过[vpn.createVpnConnection]{@link vpn.createVpnConnection}创建 VPN 连接对象。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 26.0.1 static
   */
  export interface VpnConnection {
    /**
     * 使用config创建一个VPN网络。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { VpnConfig } config - 指定 VPN 网络的配置信息。
     * @param { AsyncCallback<int> } callback - 回调函数。当成功启动VPN网络时，返回虚拟网卡的文件描述符fd，error为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203001 - VPN creation denied. Check the user type.
     * @throws { BusinessError } 2203002 - VPN already exists.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    setUp(config: VpnConfig, callback: AsyncCallback<int>): void;

    /**
     * 使用config创建一个VPN网络。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { VpnConfig } config - 指定 VPN 网络的配置信息。
     * @returns { Promise<int> } Promise对象，返回指定虚拟网卡的文件描述符 fd。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203001 - VPN creation denied. Check the user type.
     * @throws { BusinessError } 2203002 - VPN already exists.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    setUp(config: VpnConfig): Promise<int>;

    /**
     * 保护指定套接字，使该套接字的数据流量绕过VPN网络，直接经物理网络收发数据。使用callback方式作为异步方法。
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { int } socketFd - 指定保护的 socketfd，该文件描述符通过
     *     [getSocketFd]{@link @ohos.net.socket:socket.TCPSocket.getSocketFd(callback: AsyncCallback<int>)}获取。
     * @param { AsyncCallback<void> } callback - 回调函数。成功时，error 为 undefined，失败返回错误码错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203004 - Invalid socket file descriptor.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    protect(socketFd: int, callback: AsyncCallback<void>): void;

    /**
     * 保护指定套接字，使该套接字的数据流量绕过VPN网络，直接经物理网络收发数据。使用Promise方式作为异步方法。
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { int } socketFd - 指定保护的 socketfd，该文件描述符通过
     *     [getSocketFd]{@link @ohos.net.socket:socket.TCPSocket.getSocketFd()}获取。
     * @returns { Promise<void> } Promise对象，无返回结果。失败返回错误码错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203004 - Invalid socket file descriptor.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    protect(socketFd: int): Promise<void>;

    /**
     * 销毁启动的VPN网络。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_VPN
     * @param { AsyncCallback<void> } callback - 回调函数。成功时，error 为 undefined，失败返回错误码错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     * 销毁启动的VPN网络。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_VPN
     * @returns { Promise<void> } Promise对象，无返回结果。失败返回错误码错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    destroy(): Promise<void>;
  }

  /**
   * VPN 配置参数。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 26.0.1 static
   */
  export interface VpnConfig {
    /**
     * VPN唯一标识。不设置该参数时默认为空。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    vpnId?: string;
    /**
     * VPN虚拟网卡的 IP 地址。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    addresses: Array<LinkAddress>;

    /**
     * VPN虚拟网卡的路由信息。不设置该参数时默认为空。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    routes?: Array<RouteInfo>;

    /**
     * DNS服务器地址信息。不设置该参数时默认为空。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    dnsAddresses?: Array<string>;

    /**
     * DNS 的搜索域列表。不设置该参数时默认为空。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    searchDomains?: Array<string>;

    /**
     * 最大传输单元MTU值(单位：字节)。不设置该参数时使用系统默认MTU值。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    mtu?: int;

    /**
     * 是否支持IPv4。true表示支持IPv4，false表示不支持IPv4。默认值为true。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    isIPv4Accepted?: boolean;

    /**
     * 是否支持IPv6。true表示支持IPv6，false表示不支持IPv6。默认值为false。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    isIPv6Accepted?: boolean;

    /**
     * 是否支持内置VPN。true表示支持内置VPN，false表示不支持内置VPN。默认值为false。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    isLegacy?: boolean;

    /**
     * 是否阻塞模式。true表示是阻塞模式，false表示不是阻塞模式。默认值为false。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    isBlocking?: boolean;

    /**
     * string类型表示的包名可以接入VPN网络。不设置该参数时默认为空。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    trustedApplications?: Array<string>;

    /**
     * string类型表示的包名不能接入VPN网络。不设置该参数时默认为空。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.0.1 static
     */
    blockedApplications?: Array<string>;
  }

  /**
   * 定义系统VPN网络的配置。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 26.0.1 static
   */
  export interface SysVpnConfig extends VpnConfig {
    /**
     * VPN网络的uuid。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    vpnId?: string;

    /**
     * VPN网络的名称。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    vpnName?: string;

    /**
     * VPN网络的类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    vpnType?: SysVpnType;

    /**
     * VPN网络的用户名。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    userName?: string;

    /**
     * VPN网络的用户密码。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    password?: string;

    /**
     * 是否保存VPN网络的登录名和密码，默认值为false。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    saveLogin?: boolean;

    /**
     * VPN网络的系统用户ID。
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    userId?: int;

    /**
     * VPN网络的转发路由。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    forwardingRoutes?: string;

    /**
     * 远程服务器地址数组。
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    remoteAddresses?: Array<string>;

    /**
     * VPN接口的地址数组
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.0.1 static
     */
    localAddresses?: Array<LinkAddress>;

    /**
     * IPSec VPN网络的p12证书密码。
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    pkcs12Password?: string;

    /**
     * IPSec VPN网络的p12证书数据。
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    pkcs12FileData?: Uint8Array;
  }

  /**
   * 定义开放VPN网络的配置。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 26.0.1 static
   */
  export interface OpenVpnConfig extends SysVpnConfig {
    /**
     * OpenVPN网络的端口。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ovpnPort?: string;

    /**
     * OpenVPN网络的协议。
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ovpnProtocol?: int;

    /**
     * OpenVPN网络的配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ovpnConfig?: string;

    /**
     * OpenVPN网络的认证类型。
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ovpnAuthType?: int;

    /**
     * OpenVPN网络的askpass文件。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    askpass?: string;

    /**
     * OpenVPN网络的配置文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ovpnConfigFilePath?: string;

    /**
     * OpenVPN网络的CA证书文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ovpnCaCertFilePath?: string;

    /**
     * OpenVPN网络的用户证书文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ovpnUserCertFilePath?: string;

    /**
     * OpenVPN网络的私钥文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ovpnPrivateKeyFilePath?: string;
  }

  /**
   * 定义IPSec VPN网络的配置。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 26.0.1 static
   */
  export interface IpsecVpnConfig extends SysVpnConfig {
    /**
     * IPSec VPN网络的预共享密钥。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPreSharedKey?: string;

    /**
     * IPSec VPN网络的标识符。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecIdentifier?: string;

    /**
     * IPSec VPN网络的swanctl配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    swanctlConfig?: string;

    /**
     * IPSec VPN网络的strongSwan配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    strongSwanConfig?: string;

    /**
     * IPSec VPN网络的CA证书配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecCaCertConfig?: string;

    /**
     * IPSec VPN网络的用户私钥证书配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPrivateUserCertConfig?: string;

    /**
     * IPSec VPN网络的用户公钥证书配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPublicUserCertConfig?: string;

    /**
     * IPSec VPN网络的服务端私钥证书配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPrivateServerCertConfig?: string;

    /**
     * IPSec VPN网络的服务端公钥证书配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPublicServerCertConfig?: string;

    /**
     * IPSec VPN网络的CA证书文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecCaCertFilePath?: string;

    /**
     * IPSec VPN网络的用户私钥证书文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPrivateUserCertFilePath?: string;

    /**
     * IPSec VPN网络的用户公钥证书文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPublicUserCertFilePath?: string;

    /**
     * IPSec VPN网络的服务端私钥证书文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPrivateServerCertFilePath?: string;

    /**
     * IPSec VPN网络的服务端公钥证书文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPublicServerCertFilePath?: string;
  }

  /**
   * 定义L2TP VPN网络的配置。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 26.0.1 static
   */
  export interface L2tpVpnConfig extends SysVpnConfig {
    /**
     * L2TP VPN网络的预共享密钥。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPreSharedKey?: string;

    /**
     * L2TP VPN网络的标识符。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecIdentifier?: string;

    /**
     * L2TP VPN网络的strongSwan配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    strongSwanConfig?: string;

    /**
     * L2TP VPN网络的CA证书配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecCaCertConfig?: string;

    /**
     * L2TP VPN网络的用户私钥证书配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPrivateUserCertConfig?: string;

    /**
     * L2TP VPN网络的用户公钥证书配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPublicUserCertConfig?: string;

    /**
     * L2TP VPN网络的服务端私钥证书配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPrivateServerCertConfig?: string;

    /**
     * L2TP VPN网络的服务端公钥证书配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPublicServerCertConfig?: string;

    /**
     * L2TP VPN网络的CA证书文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecCaCertFilePath?: string;

    /**
     * L2TP VPN网络的用户私钥证书文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPrivateUserCertFilePath?: string;

    /**
     * L2TP VPN网络的用户公钥证书文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPublicUserCertFilePath?: string;

    /**
     * L2TP VPN网络的服务端私钥证书文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPrivateServerCertFilePath?: string;

    /**
     * L2TP VPN网络的服务端公钥证书文件路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecPublicServerCertFilePath?: string;

    /**
     * L2TP VPN网络的配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecConfig?: string;

    /**
     * L2TP VPN网络的secrets文件。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    ipsecSecrets?: string;

    /**
     * L2TP VPN网络的客户端配置项。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    optionsL2tpdClient?: string;

    /**
     * L2TP VPN网络的xl2tpd配置。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    xl2tpdConfig?: string;

    /**
     * L2TP VPN网络的共享密钥。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    l2tpSharedKey?: string;
  }

  /**
   * 定义VPN网络的类型。
   *
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 26.0.1 static
   */
  export enum SysVpnType {
    /**
     * IKEv2/IPsec MSCHAPv2 VPN网络的类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    IKEV2_IPSEC_MSCHAPV2 = 1,

    /**
     * IKEv2/IPsec PSK VPN网络的类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    IKEV2_IPSEC_PSK = 2,

    /**
     * IKEv2/IPsec RSA VPN网络的类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    IKEV2_IPSEC_RSA = 3,

    /**
     * L2TP/IPsec PSK VPN网络的类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    L2TP_IPSEC_PSK = 4,

    /**
     * L2TP/IPsec RSA VPN网络的类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    L2TP_IPSEC_RSA = 5,

    /**
     * IPsec XAUTH PSK VPN网络的类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    IPSEC_XAUTH_PSK = 6,

    /**
     * IPsec XAUTH RSA VPN网络的类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    IPSEC_XAUTH_RSA = 7,

    /**
     * IPsec HYBRID RSA VPN网络的类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    IPSEC_HYBRID_RSA = 8,

    /**
     * OpenVPN网络的类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 26.0.1 static
     */
    OPENVPN = 9
  }
}

export default vpn;
