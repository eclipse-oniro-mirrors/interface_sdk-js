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
 * This module provides the capability of managing LaunchService.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace launchServiceManager {
  /**
   * Defines the enumeration type of the LaunchService status for
   * [LaunchServiceInformation]{@link ./application/LaunchServiceInformation:LaunchServiceInformation}.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum LaunchServiceState {
    /**
     * LaunchService is not registered.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    NOT_REGISTERED = 0,

    /**
     * LaunchService is registered and enabled.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    ENABLED = 1,

    /**
     * LaunchService is registered but disabled.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    DISABLED = 2
  }

  /**
   * Defines the enumeration type of the LaunchService process status, which is used for
   * [LaunchServiceProcessState]{@link ./application/LaunchServiceProcessStateData:LaunchServiceProcessStateData}.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum LaunchServiceProcessState {
    /**
     * The LaunchService process has been created.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    CREATED = 0,

    /**
     * The LaunchService process has been terminated.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    TERMINATED = 1
  }

  /**
   * Register the LaunchService. In the module.json5 configuration file, runAtLoad is set to true, the service is
   * registered successfully, and the status is Enabled. The system automatically starts the LaunchService process. Only
   * the applications that contain the launch service can be registered. You need to apply for the corresponding
   * permission based on the application type. - Common applications(non-MDM applications): You need to apply for the
   * ohos.permission.REGISTER_DAEMON_SERVICE permission. - MDM application: You need to apply for the
   * ohos.permission.ENTERPRISE_REGISTER_DAEMON_SERVICE permission.
   * @permission ohos.permission.REGISTER_DAEMON_SERVICE or ohos.permission.ENTERPRISE_REGISTER_DAEMON_SERVICE
   * @param { LaunchServiceDescriptor } descriptor - Descriptor of the LaunchService to register.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Deregister LaunchService. If the LaunchService process is running, the system stops the process when you log out.
   * Only applications that contain the launch service can be registered or deregistered. You need to apply for the
   * corresponding permission based on the application type. - Common applications(non-MDM applications): You need to
   * apply for the ohos.permission.REGISTER_DAEMON_SERVICE permission. - MDM application: You need to apply for the
   * ohos.permission.ENTERPRISE_REGISTER_DAEMON_SERVICE permission.
   * @permission ohos.permission.REGISTER_DAEMON_SERVICE or ohos.permission.ENTERPRISE_REGISTER_DAEMON_SERVICE
   * @param { LaunchServiceDescriptor } descriptor - Descriptor of the LaunchService to unregister.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Start the LaunchService process. Before invoking this interface, ensure that LaunchService has been registered and
   * is in the Enabled state.
   * @permission ohos.permission.USE_DAEMON_SERVICE
   * @param { LaunchServiceDescriptor } descriptor - Descriptor of the LaunchService to launch.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Stop the LaunchService process.
   * @permission ohos.permission.USE_DAEMON_SERVICE
   * @param { LaunchServiceDescriptor } descriptor - Descriptor of the LaunchService to stop.
   * @returns { Promise<void> } Promise that returns no value.
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
   * This method is used to obtain information about a specified LaunchService. If the application is installed but
   * LaunchService is not registered, the status returned is NOT_REGISTERED and the pid is 0.
   * @permission ohos.permission.USE_DAEMON_SERVICE
   * @param { LaunchServiceDescriptor } descriptor - Descriptor of the LaunchService to query.
   * @returns { Promise<LaunchServiceInformation> }Promise is used to return LaunchService information.
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
   * This method is used to obtain information about all registered LaunchServices.
   * @permission ohos.permission.MANAGE_DAEMON_SERVICE
   * @param { int } [userId] - If the userId parameter is specified, the registered LaunchServices under the userId
   *     parameter are queried. If userId is not specified, the registered LaunchServices of all users are queried.
   *     <br>The value must be an integer.
   * @returns { Promise<Array<LaunchServiceInformation>> }Promise object, which returns an array of LaunchService
   *     information.
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
   * This method is used to set the enabling status of the LaunchService application.
   * @permission ohos.permission.MANAGE_DAEMON_SERVICE
   * @param { string } bundleName - Name of the target application package.
   * @param { int } userId - ID of the target application user. <br>The value must be an integer.
   * @param { int } appIndex - Indicates the twin index of the target application. <br>The value must be an integer.
   * @param { boolean } enabled - Indicates the enabling status of the. The value true indicates that the function
   *     is enabled, and the value false indicates that the function is disabled.
   * @param { Uint8Array } [token] - The authentication token used to approve the operation. If the token is
   *     transferred, the token is directly used for authentication. If this parameter is not transferred, the user
   *     authorization page is displayed.
   * @returns { Promise<void> }Promise object. No result is returned.
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
   * Register an observer to listen to the LaunchService status and process status changes.
   * @permission ohos.permission.MANAGE_DAEMON_SERVICE
   * @param { LaunchServiceObserver } observer - Watcher for the LaunchService status and process status changes.
   * @returns { int } ID of the observer registered.
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
   * Log off the watcher used to listen for LaunchService state and process state changes.
   * @permission ohos.permission.MANAGE_DAEMON_SERVICE
   * @param { int } observerId - ID of the observer registered.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Connects to the LaunchService process for IPC communication. The target LaunchService must have declared the IPC
   * service. If the LaunchService process is not running, the system automatically starts it before the connection is
   * established. The target service and invoker must belong to the same developer. The connection result is delivered
   * through callback in callback.
   * @permission ohos.permission.USE_DAEMON_SERVICE
   * @param { LaunchServiceDescriptor } descriptor - Descriptor of the LaunchService to connect to.
   * @param { LaunchServiceConnectCallback } callback - Callbacks used to return the connection
   *         status, including onConnect, onDisconnect, and onFailed.
   * @returns { int } Connection ID. A value greater than **0** indicates that the connection request is accepted. You
   *         can pass this ID to [disconnectService]{@link launchServiceManager.disconnectService} for disconnection.
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
   * Disconnect from the LaunchService process.
   * @permission ohos.permission.USE_DAEMON_SERVICE
   * @param { int } connectionId - Returned connection ID
   *     [connectService]{@link launchServiceManager.connectService}. <br>The value must be an integer.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Define the descriptor of LaunchService.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export type LaunchServiceDescriptor = _LaunchServiceDescriptor;

  /**
   * Defines the watcher of LaunchService status and process status changes.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export type LaunchServiceObserver = _LaunchServiceObserver;

  /**
   * Defines the LaunchService information structure.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export type LaunchServiceInformation = _LaunchServiceInformation;

  /**
   * Defines the LaunchService connection callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export type LaunchServiceConnectCallback = _LaunchServiceConnectCallback;

  /**
   * Defines the LaunchService status change data structure.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export type LaunchServiceStateData = _LaunchServiceStateData;

  /**
   * Defines the LaunchService process status change data structure.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export type LaunchServiceProcessStateData = _LaunchServiceProcessStateData;
}

export default launchServiceManager;