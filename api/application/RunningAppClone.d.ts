/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file RunningAppClone
 * @kit AbilityKit
 */

/**
 * The RunningAppClone module defines the information of an application clone in the running state.
 *
 * ###### How to Use
 *
 * The RunningAppClone struct is obtained from
 * [getRunningMultiAppInfo]{@link ./../@ohos.app.ability.appManager:appManager.getRunningMultiAppInfo} of
 * **appManager**.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 12 dynamic
 * @since 23 static
 */
export interface RunningAppClone {
  /**
   * Index of the app clone, used to identify different clone instances. The index starts from 0 and
   *  increments in the order in which clones are created. 0 indicates the primary app instance, and
   *  1 or greater indicates a clone instance.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  appCloneIndex: int;

  /**
   * UID of the application.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * Set of process IDs of the application, including the process IDs of all running processes of the application.
   *  An application may run multiple processes, so an array is returned.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  pids: Array<int>;
}