/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

import _LaunchServiceDescriptor from './application/LaunchServiceDescriptor';
import _LaunchServiceObserver from './application/LaunchServiceObserver';
import _LaunchServiceInformation from './application/LaunchServiceInformation';
import _LaunchServiceConnectCallback from './application/LaunchServiceConnectCallback';
import _LaunchServiceProcessStateData from './application/LaunchServiceProcessStateData';
import _LaunchServiceStateData from './application/LaunchServiceStateData';

/**
 * 该模块提供了对LaunchService进行管理的能力。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace launchServiceManager {
  /**
   * 定义LaunchService状态的枚举类型，用于
   * [LaunchServiceInformation]{@link ./application/LaunchServiceInformation:LaunchServiceInformation}。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum LaunchServiceState {
    /**
     * LaunchService未注册。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    NOT_REGISTERED = 0,

    /**
     * 已注册并启用LaunchService。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    ENABLED = 1,

    /**
     * LaunchService已注册，但被禁用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    DISABLED = 2
  }

  /**
   * 定义LaunchService进程状态的枚举类型，用于
   * [LaunchServiceProcessState]{@link ./application/LaunchServiceProcessStateData:LaunchServiceProcessStateData}。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum LaunchServiceProcessState {
    /**
     * LaunchService进程已创建。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    CREATED = 0,

    /**
     * LaunchService进程已终止。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    TERMINATED = 1
  }

  /**
   * 注册LaunchService。
   * 在module.json5配置文件中将runAtLoad设置为true，且服务注册成功，状态为ENABLED，系统将自动启动LaunchService进程。
   * 仅允许包含该LaunchService的应用自身进行注册，且需根据应用类型申请对应权限：
   * - 普通应用（非MDM应用）：需申请ohos.permission.REGISTER_DAEMON_SERVICE权限。
   * - MDM应用：需申请ohos.permission.ENTERPRISE_REGISTER_DAEMON_SERVICE权限。
   *
   * @permission ohos.permission.REGISTER_DAEMON_SERVICE or ohos.permission.ENTERPRISE_REGISTER_DAEMON_SERVICE
   * @param { LaunchServiceDescriptor } descriptor - 要注册的LaunchService的描述符。
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *         required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *         <br>1. The hardware does not support the capability.
   *         <br>2. The chip does not support the capability.
   *         <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 16000050 - System service connection failed.
   * @throws { BusinessError } 16000211 - The specified service is not found.
   * @throws { BusinessError } 16000212 - The specified service is already registered.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function register(descriptor: LaunchServiceDescriptor): Promise<void>;

  /**
   * 注销LaunchService。若LaunchService进程正在运行，注销时系统将停止该进程。
   *
   * 仅允许包含该LaunchService的应用自身进行注册注销，且需根据应用类型申请对应权限：
   * - 普通应用（非MDM应用）：需申请ohos.permission.REGISTER_DAEMON_SERVICE权限。
   * - MDM应用：需申请ohos.permission.ENTERPRISE_REGISTER_DAEMON_SERVICE权限。
   *
   * @permission ohos.permission.REGISTER_DAEMON_SERVICE or ohos.permission.ENTERPRISE_REGISTER_DAEMON_SERVICE
   * @param { LaunchServiceDescriptor } descriptor - 要注销的LaunchService的描述符。
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *         required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *         <br>1. The hardware does not support the capability.
   *         <br>2. The chip does not support the capability.
   *         <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 16000050 - System service connection failed.
   * @throws { BusinessError } 16000211 - The specified service is not found.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function unregister(descriptor: LaunchServiceDescriptor): Promise<void>;

  /**
   * 启动LaunchService进程。
   * 调用此接口前，必须确保LaunchService已完成注册且处于启动（ENABLED）状态。
   *
   * @permission ohos.permission.USE_DAEMON_SERVICE
   * @param { LaunchServiceDescriptor } descriptor - 要启动的LaunchService的描述符。
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *         required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *         <br>1. The hardware does not support the capability.
   *         <br>2. The chip does not support the capability.
   *         <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 16000050 - System service connection failed.
   * @throws { BusinessError } 16000211 - The specified service is not found.
   * @throws { BusinessError } 16000213 - The specified service is disabled.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function start(descriptor: LaunchServiceDescriptor): Promise<void>;

  /**
   * 停止LaunchService进程。
   *
   * @permission ohos.permission.USE_DAEMON_SERVICE
   * @param { LaunchServiceDescriptor } descriptor - 要停止的LaunchService的描述符。
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *         required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *         <br>1. The hardware does not support the capability.
   *         <br>2. The chip does not support the capability.
   *         <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 16000050 - System service connection failed.
   * @throws { BusinessError } 16000211 - The specified service is not found.
   * @throws { BusinessError } 16000214 - The specified service is not running.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function stop(descriptor: LaunchServiceDescriptor): Promise<void>;

  /**
   * 获取指定LaunchService的信息。如果应用程序已安装，但LaunchService未注册，返回的状态为NOT_REGISTERED，pid为0。
   *
   * @permission ohos.permission.USE_DAEMON_SERVICE
   * @param { LaunchServiceDescriptor } descriptor - 要查询的LaunchService的描述符。
   * @returns { Promise<LaunchServiceInformation> } Promise用于返回LaunchService信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *         required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *         <br>1. The hardware does not support the capability.
   *         <br>2. The chip does not support the capability.
   *         <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 16000050 - System service connection failed.
   * @throws { BusinessError } 16000211 - The specified service is not found.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getInformation(descriptor: LaunchServiceDescriptor): Promise<LaunchServiceInformation>;

  /**
   * 获取所有已注册的LaunchService信息。
   *
   * @permission ohos.permission.MANAGE_DAEMON_SERVICE
   * @param { int } [userId] - 指定userId时，查询该userId下已注册的LaunchService；未指定userId时，
   *     查询所有用户下已注册的LaunchService。
   *     <br>取值限定为整数。
   * @returns { Promise<Array<LaunchServiceInformation>> } Promise对象，返回一个LaunchService的数组信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *         required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *         <br>1. The hardware does not support the capability.
   *         <br>2. The chip does not support the capability.
   *         <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 16000050 - System service connection failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getAllRegisteredInformation(userId?: int): Promise<Array<LaunchServiceInformation>>;

  /**
   * 设置应用LaunchService的启用状态。
   *
   * @permission ohos.permission.MANAGE_DAEMON_SERVICE
   * @param { string } bundleName - 目标应用包名。
   * @param { int } userId - 目标应用用户ID。
   *     <br>取值限定为整数。
   * @param { int } appIndex - 目标应用分身索引。
   *     <br>取值限定为整数。
   * @param { boolean } enabled - 设置的使能状态。true表示使能，false表示禁用。
   * @param { Uint8Array } [token] - 用于批准该操作的身份验证令牌。若传递了该令牌，直接使用该令牌进行鉴权；未传递时将拉起用户
   *     授权界面。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *         required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *         <br>1. The hardware does not support the capability.
   *         <br>2. The chip does not support the capability.
   *         <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 16000050 - System service connection failed.
   * @throws { BusinessError } 16000215 - The approval request was rejected.
   * @throws { BusinessError } 16300005 - The target bundle does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function setLaunchServicesEnabled(bundleName: string, userId: int, appIndex: int,
    enabled: boolean, token?: Uint8Array): Promise<void>;

  /**
   * 注册一个观察者来监听LaunchService状态和进程状态的变化。
   *
   * @permission ohos.permission.MANAGE_DAEMON_SERVICE
   * @param { LaunchServiceObserver } observer - 用于监听LaunchService状态和进程状态变化的观察者。
   * @returns { int } 注册的观察者ID。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *         required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *         <br>1. The hardware does not support the capability.
   *         <br>2. The chip does not support the capability.
   *         <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 16000050 - System service connection failed.
   * @throws { BusinessError } 16000165 - The number of registered observers for the current application has reached
   *         the upper limit.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function onLaunchServiceObserver(observer: LaunchServiceObserver): int;

  /**
   * 注销用于监听LaunchService状态和进程状态更改的观察者。
   *
   * @permission ohos.permission.MANAGE_DAEMON_SERVICE
   * @param { int } observerId - 注册的观察者ID。
   *     <br>取值限定为整数。
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *         required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *         <br>1. The hardware does not support the capability.
   *         <br>2. The chip does not support the capability.
   *         <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 16000050 - System service connection failed.
   * @throws { BusinessError } 16000216 - The specified id is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function offLaunchServiceObserver(observerId: int): Promise<void>;

  /**
   * 连接LaunchService进程，用于IPC通信。目标LaunchService必须已声明IPC服务。若该LaunchService进程尚未运行，系统会在建立连接前自动将其启动。
   * 目标服务和调用者必须属于同一个开发者。
   * 连接结果通过callback中的回调下发。
   *
   * @permission ohos.permission.USE_DAEMON_SERVICE
   * @param { LaunchServiceDescriptor } descriptor - 要连接的LaunchService的描述符。
   * @param { LaunchServiceConnectCallback } callback - 用于返回连接的回调
   *     状态，包括onConnect、onDisconnect、onFailed。
   * @returns { int } 连接ID。大于**0**的值表示连接请求被接受。
   *     可以将此ID传递给[disconnectService]{@link launchServiceManager.disconnectService}以断开连接。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *         required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *         <br>1. The hardware does not support the capability.
   *         <br>2. The chip does not support the capability.
   *         <br>3. A dependent service feature is not supported.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function connectService(descriptor: LaunchServiceDescriptor, callback: LaunchServiceConnectCallback): int;

  /**
   * 断开与LaunchService进程的连接。
   *
   * @permission ohos.permission.USE_DAEMON_SERVICE
   * @param { int } connectionId - 返回的连接ID
   *     [connectService]{@link launchServiceManager.connectService}。
   *     <br>取值限定为整数。
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *         required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *         <br>1. The hardware does not support the capability.
   *         <br>2. The chip does not support the capability.
   *         <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 16000050 - System service connection failed.
   * @throws { BusinessError } 16000216 - The specified connection is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function disconnectService(connectionId: int): Promise<void>;

  /**
   * 定义LaunchService的描述符。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export type LaunchServiceDescriptor = _LaunchServiceDescriptor;

  /**
   * 定义LaunchService状态和进程状态变化的观察者。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export type LaunchServiceObserver = _LaunchServiceObserver;

  /**
   * 定义LaunchService信息结构体。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export type LaunchServiceInformation = _LaunchServiceInformation;

  /**
   * 定义在LaunchService连接回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export type LaunchServiceConnectCallback = _LaunchServiceConnectCallback;

  /**
   * 定义LaunchService状态变化数据结构体。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export type LaunchServiceStateData = _LaunchServiceStateData;

  /**
   * 定义LaunchService进程状态变化数据结构体。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export type LaunchServiceProcessStateData = _LaunchServiceProcessStateData;
}

export default launchServiceManager;