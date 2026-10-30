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
 * @file AppStartup Configuration
 * @kit AbilityKit
 */

import StartupListener from './@ohos.app.appstartup.StartupListener';

/**
 * The module defines the configuration of [AppStartup](docroot://application-models/app-startup.md).
 *
 * @syscap SystemCapability.Ability.AppStartup
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
export default interface StartupConfig {
  /**
   * Timeout duration for executing all startup tasks, in ms. The default value is 10000.
   * When the timeout expires, the startup framework stops waiting and returns a timeout
   * error through the startupListener.onCompleted callback. The timeout does not interrupt
   * the startup tasks being executed, but affects the execution of subsequent tasks.
   *
   * @default 10000
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  timeoutMs?: int;

  /**
   * Listener of the startup framework, which is invoked when all startup tasks are complete.
   * If this parameter is not set, no callback notification is sent.
   *
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  startupListener?: StartupListener;
}