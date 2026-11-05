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
 * 定义一个观察者来监听应用程序中的进程状态变化。
 * 它可以用作中的输入参数
 * [ApplicationContext.onAppProcessStateChange]{@link ./ApplicationContext:ApplicationContext.onAppProcessStateChange}
 * 来监听应用程序中进程的创建和终止。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare interface AppProcessStateObserver {
  /**
   * 在应用程序中创建进程时调用。
   *
   * @param { ProcessData } processData - 流程数据。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onProcessCreated(processData: ProcessData): void;

  /**
   * 当应用程序中的进程被销毁时调用。
   *
   * @param { ProcessData } processData - 流程数据。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onProcessDied(processData: ProcessData): void;
}

export default AppProcessStateObserver;