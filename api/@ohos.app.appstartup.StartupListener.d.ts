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
 * The module defines the task listener used in [App Startup](docroot://application-models/app-startup.md).
 *
 * @file AppStartup Task Listener
 * @kit AbilityKit
 */

import { BusinessError } from './@ohos.base';

/**
 * Defines a onCompleted function.
 *
 * @param { BusinessError<void> } error - Indicates the error during execution.
 * @syscap SystemCapability.Ability.AppStartup
 * @since 23 staticonly
 */
type OnCompletedFn = (error: BusinessError<void>) => void;

/**
 * The module defines the task listener used in [App Startup](docroot://application-models/app-startup.md).
 *
 * @syscap SystemCapability.Ability.AppStartup
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
declare class StartupListener {
  /**
   * Called when all startup tasks complete.
   *
   * @param { BusinessError<void> } error - Error information of the startup task execution. On success,
   *     error is null. On failure, it contains an error code and an error description. You can obtain the
   *     error code through error.code and the error description through error.message. Possible error codes
   *     include 28800001, 28800002, 28800003, and 28800004. For details about the error causes and handling
   *     measures, see Ability Subsystem Error Codes.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   */
  onCompleted?(error: BusinessError<void>): void;

  /**
   * Called when all startup tasks complete.
   *
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 23 static
   */
  onCompleted?: OnCompletedFn;
}

export default StartupListener;