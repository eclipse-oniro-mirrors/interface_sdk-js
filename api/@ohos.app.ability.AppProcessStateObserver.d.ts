/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file
 * @kit AbilityKit
 */

import ProcessData from './application/ProcessData';

/**
 * Defines an observer to listen for process state changes within the application.
 * It can be used as an input parameter in
 * [ApplicationContext.onAppProcessStateChange]{@link ./ApplicationContext:ApplicationContext.onAppProcessStateChange}
 * to listen for process creation and termination within the application.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare interface AppProcessStateObserver {
  /**
   * Called when a process is created within the application.
   *
   * @param { ProcessData } processData - Process data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onProcessCreated(processData: ProcessData): void;

  /**
   * Called when a process is destroyed within the application.
   *
   * @param { ProcessData } processData - Process data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onProcessDied(processData: ProcessData): void;
}

export default AppProcessStateObserver;