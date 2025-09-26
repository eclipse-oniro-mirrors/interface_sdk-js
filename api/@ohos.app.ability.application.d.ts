/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import ApplicationContext from './application/ApplicationContext';
import Context from './application/Context';

/**
 * This module provides application basic functions.
 *
 * @namespace application
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace application {
  /**
   * Indicates the app preload type.
   * 
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 22
   * @arkts 1.1&1.2 
   */
  export enum AppPreloadType {
  /**
   * Indicates no preloading has occurred or preload data has been cleared.
   * 
   * @enum { int }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 22
   * @arkts 1.1&1.2 
   */
   UNSPECIFIED = 0,
  /**
   * Indicates the preloading will be completed after the process creation is finished.
   * @enum { int }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 22
   * @arkts 1.1&1.2 
   */
   TYPE_CREATE_PROCESS = 1,
  /**
   * Indicates that the preloading will be completed after the ability stage creation is finished.
   * 
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 22
   * @arkts 1.1&1.2 
   */
   TYPE_CREATE_ABILITY_STAGE = 2,
  /**
   * Indicates that the preloading will be completed after the window stage creation is finished.
   * 
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 22
   * @arkts 1.1&1.2 
   */
   TYPE_CREATE_WINDOW_STAGE = 3
  }
  /**
   * Create a module context
   *
   * @param { Context } context - Indicates current context.
   * @param { string } moduleName - Indicates the module name.
   * @returns { Promise<Context> } Returns the application context.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export function createModuleContext(context: Context, moduleName: string): Promise<Context>;

  /**
   * Create a module context
   * 
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Context } context - Indicates current context.
   * @param { string } bundleName - Indicates the bundle name.
   * @param { string } moduleName - Indicates the module name.
   * @returns { Promise<Context> } Returns the application context.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export function createModuleContext(context: Context, bundleName: string, moduleName: string): Promise<Context>;

  /**
   * Create a module context of plugin.
   * 
   * @param { Context } context - Indicates current context.
   * @param { string } pluginBundleName - Indicates the bundle name of plugin.
   * @param { string } pluginModuleName - Indicates the module name of plugin.
   * @returns { Promise<Context> } Returns the module context of plugin.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 19
   */
  export function createPluginModuleContext(context: Context, pluginBundleName: string, pluginModuleName: string): Promise<Context>;

  /**
   *  Create a context for a specified plugin module under the host application.
   * 
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Context } context - Indicates current context.
   * @param { string } pluginBundleName - Indicates the bundle name of plugin.
   * @param { string } pluginModuleName - Indicates the module name of plugin.
   * @param { string } hostBundleName - Indicates the bundle name of host application.
   * @returns { Promise<Context> } Returns the module context of plugin.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  export function createPluginModuleContextForHostBundle(context: Context, pluginBundleName: string, pluginModuleName: string, hostBundleName: string): Promise<Context>;

  /**
   * Create a bundle context
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Context } context - Indicates current context.
   * @param { string } bundleName - Indicates the bundle name.
   * @returns { Promise<Context> } Returns the application context.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export function createBundleContext(context: Context, bundleName: string): Promise<Context>;

  /**
   * Get application context.
   *
   * @returns { ApplicationContext } Returns the application context.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export function getApplicationContext(): ApplicationContext;

  /**
   * Elevate the current process to be a candidate master process.
   * If UIAbility or UIExtension component within the application is configured with "isolationProcess",launching an
   * instance of such UIAbility or UIExtension will trigger a callback to the master process's "onNewProcessRequest".
   * The "onNewProcessRequest" callback return value determines whether the new instance starts in a new process or an existing one.
   * After successfully invoking this interface, the current process becomes a candidate master process. If the original master process
   * is destroyed, the candidate process with the highest priority will be selected as the new master process.
   * 
   * @param { boolean } insertToHead - Whether inset current process to the head of candidates master process list.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000115 - The current process is not running a component configured with "isolationProcess"
   *                                      and cannot be set as a candidate master process.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20
   */
  export function promoteCurrentToCandidateMasterProcess(insertToHead: boolean): Promise<void>;

  /**
   * Revoke current process as a candidate master process.
   * 
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000116 - The current process is already a master process and does not support cancellation.
   * @throws { BusinessError } 16000117 - The current process is not a candidate master process and does not support cancellation.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20
   */
  export function demoteCurrentFromCandidateMasterProcess(): Promise<void>;

  /**
   * Exit from the master process role of the current process.
   * After calling this method:
   * - System stops triggering `onNewProcessRequest` callbacks on current process.
   * - Process can rejoin candidate pool via `promoteCurrentToCandidateMasterProcess`.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000118 - Not a master process.
   * @throws { BusinessError } 16000119 - Cannot exit because there is an unfinished onNewProcessRequest.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 21
   */
   export function exitMasterProcessRole(): Promise<void>

  /**
   * Obtains the preload type of the current process
   * 
   * Note: The preload type data is cleared after the first `AbilityStage.onCreate()` finishes.
   * Subsequent calls will return `UNSPECIFIED`.
   * 
   * @returns { AppPreloadType } The preload type of the process.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 22
   * @arkts 1.1&1.2 
   */
  export function getAppPreloadType(): AppPreloadType;
}

export default application;