/*
 * Copyright (c) 2026-2026 Huawei Device Co., Ltd.
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
 * @file 冻结管理
 * @kit BackgroundTasksKit
 */
 
import { AsyncCallback, BusinessError } from './@ohos.base';
 
/**
 * 本模块提供查询应用状态和注册监听的API，可监听应用冻结状态的改变，并通过进程pid列表查询应用当前的冻结状态。
 *
 * > **说明**
 * >
 * > 本模块接口为系统接口。
 *
 * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
 * @systemapi Hide this for inner system use.
 * @stagemodelonly
 * @since 26.1.0 dynamiconly
 */
declare namespace suspendManager {
  /**
   * 应用程序状态的枚举。
   *
   * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  export enum FreezeState {  
    /**
     * 应用处于激活状态。
     *
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    ACTIVE = 0,
    /**
     * 应用处于doze状态，进入冻结过程，但尚未完全冻结。
     *
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    DOZE = 1,
    /**
     * 应用处于冻结状态。
     *
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    FROZEN = 2
  }
 
  /**
   * 定义冻结状态变化的观察者。
   *
   * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  export interface SuspendStateObserver {  
    /**
     * 当应用状态转换到活动状态时回调。
     *
     * @param { Array<int> } pidList - 转换为激活状态的uid对应的pid列表。
     * @param { int } uid - 应用转为激活状态的uid。
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    onActive(pidList: Array<int>, uid: int): void;
    /**
     * 当应用程序进入doze状态时回调。
     *
     * @param { Array<int> } pidList - 被doze的uid对应的pid列表。
     * @param { int } uid - 被doze的应用的uid。
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    onDoze(pidList: Array<int>, uid: int): void;
    /**
     * 当应用程序完全冻结时回调。
     *
     * @param { Array<int> } pidList - 冻结的uid对应的pid列表。
     * @param { int } uid - 被冻结的应用uid
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    onFrozen(pidList: Array<int>, uid: int): void;
  }
 
  /**
   * 注册一个冻结状态观察者来监听应用冻结状态的变化。
   *
   * @permission ohos.permission.GET_SUSPEND_STATE
   * @param { SuspendStateObserver } observer - 要注册的观察者。
   * @param { Array<FreezeState> } stateList - 订阅状态类型的列表。
   * @param { Array<int> } [pidList] - 要筛选的可选进程ID列表。如果未指定或为空，所有进程状态更改都会触发回调。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31800005 - Parameter error.
   * @throws { BusinessError } 31800006 - Failed to get suspend manager service.
   * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  function registerSuspendStateObserver(observer: SuspendStateObserver, stateList: Array<FreezeState>, pidList?: Array<int>): void;

  /**
   * 注销先前注册的冻结状态观察者。
   *
   * @permission ohos.permission.GET_SUSPEND_STATE
   * @param { SuspendStateObserver } observer - 要取消注册的观察者。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31800005 - Parameter error.
   * @throws { BusinessError } 31800006 - Failed to get suspend manager service.
   * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  function unregisterSuspendStateObserver(observer: SuspendStateObserver): void;
 
  /**
   * 根据进程的pid查询进程的冻结状态。
   *
   * @permission ohos.permission.GET_SUSPEND_STATE
   * @param { Array<int> } pidList - 要查询的进程ID列表。必须为正整数。
   * @returns { Array<FreezeState> } The freeze state list. Returns an empty array if no matching states are found.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31800005 - Parameter error.
   * @throws { BusinessError } 31800006 - Failed to get suspend manager service.
   * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  function getSuspendStateByPidList(pidList: Array<int>): Array<FreezeState>;
}
 
export default suspendManager;