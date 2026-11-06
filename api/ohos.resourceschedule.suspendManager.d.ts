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
 * @file Suspend Manager
 * @kit BackgroundTasksKit
 */

import { AsyncCallback, BusinessError } from './@ohos.base';

/**
 * Manages the freeze state of background applications. The **suspendManager** module provides APIs for system applications
 * and system abilities to listen for application freeze state changes and query the current freeze state by PID list.
 *
 * > **NOTE**
 * >
 * > - The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
 * @stagemodelonly
 * @since 26.1.0 dynamiconly
 */
declare namespace suspendManager {

  /**
   * Enumerates the freeze states of an application.
   *
   * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  export enum FreezeState {
    /**
     * The application is in the active state.
     *
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    ACTIVE = 0,

    /**
     * The application is in the doze state, entering the freeze process but not yet fully frozen.
     *
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    DOZE = 1,

    /**
     * The application is in the frozen state.
     *
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    FROZEN = 2
  }

  /**
   * Defines the observer for suspend state changes.
   *
   * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  export interface SuspendStateObserver {
    /**
     * Called when the application transitions to the active state.
     *
     * @param { Array<int> } pidList - List of PIDs that transitioned to the active state.
     * @param { int } uid - UID of the application.
     *     <br>The value should be an integer.
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    onActive(pidList: Array<int>, uid: int): void;

    /**
     * Called when the application enters the doze state.
     *
     * @param { Array<int> } pidList - List of PIDs that transitioned to the doze state.
     * @param { int } uid - UID of the application.
     *     <br>The value should be an integer.
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    onDoze(pidList: Array<int>, uid: int): void;

    /**
     * Called when the application is fully frozen.
     *
     * @param { Array<int> } pidList - List of PIDs that transitioned to the frozen state.
     * @param { int } uid - UID of the application.
     *     <br>The value should be an integer.
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    onFrozen(pidList: Array<int>, uid: int): void;
  }

  /**
   * Registers a suspend state observer to listen for application freeze state changes.
   *
   * @permission ohos.permission.GET_SUSPEND_STATE
   * @param { SuspendStateObserver } observer - The observer to register.
   * @param { Array<FreezeState> } stateList - List of the status type of the subscription.
   * @param { Array<int> } [pidList] - Optional list of PIDs to filter. If not specified or empty,
   *     all processes state changes will trigger the callback.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31800005 - Parameter error. Possible cause: Duplicate observer registration.
   * @throws { BusinessError } 31800006 - Failed to get suspend manager service. Possible cause: A necessary system
   *     service is not ready.
   * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  function registerSuspendStateObserver(observer: SuspendStateObserver, stateList: Array<FreezeState>, pidList?: Array<int>): void;

  /**
   * Unregisters a previously registered suspend state observer.
   *
   * @permission ohos.permission.GET_SUSPEND_STATE
   * @param { SuspendStateObserver } observer - The observer to unregister.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31800005 - Parameter error. Possible cause: Observer not registered.
   * @throws { BusinessError } 31800006 - Failed to get suspend manager service. Possible cause: A necessary system
   *     service is not ready.
   * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  function unregisterSuspendStateObserver(observer: SuspendStateObserver): void;

  /**
   * Queries the frozen state list by the PID list of processes.
   *
   * @permission ohos.permission.GET_SUSPEND_STATE
   * @param { Array<int> } pidList - The PID list to query. Each PID must be a positive integer.
   * @returns { Array<FreezeState> } The freeze state list. Returns an empty array if no matching states are found.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31800005 - Parameter error. Possible cause: PID does not exist.
   * @throws { BusinessError } 31800006 - Failed to get suspend manager service. Possible cause: A necessary system
   *     service is not ready.
   * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  function getSuspendStateByPidList(pidList: Array<int>): Array<FreezeState>;
}

export default suspendManager;
