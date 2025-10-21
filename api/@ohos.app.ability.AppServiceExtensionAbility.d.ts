/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import rpc from './@ohos.rpc';
import AppServiceExtensionContext from './application/AppServiceExtensionContext';
import Want from './@ohos.app.ability.Want';
import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';

/**
 * class of app service extension ability.
 *
 * @extends ExtensionAbility
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 20 dynamic&static
 */
declare class AppServiceExtensionAbility extends ExtensionAbility {
  /**
   * Indicates app service extension ability context.
   *
   * @type { AppServiceExtensionContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic&static
   */
  context: AppServiceExtensionContext;

  /**
   * Called back when an app service extension is started for initialization.
   *
   * @param { Want } want - Indicates the want of created app service extension.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic&static
   */
  onCreate(want: Want): void;

  /**
   * Called back before an app service extension is destroyed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic&static
   */
  onDestroy(): void;

  /**
   * Called back when an app service extension is started.
   *
   * @param { Want } want - Indicates the want of app service extension to start.
   * @param { int } startId - Indicates the number of times the app service extension has been started.
   *                             The {@code startId} is incremented by 1 every time the app service extension is started.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic&static
   */
  onRequest(want: Want, startId: int): void;

  /**
   * Called back when an app service extension is first connected to an ability.
   *
   * @param { Want } want - Indicates connection information about the app service ability.
   * @returns { rpc.RemoteObject } A RemoteObject for communication between the client and server.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic&static
   */
  onConnect(want: Want): rpc.RemoteObject;

  /**
   * Called back when all abilities connected to an app service extension are disconnected.
   *
   * @param { Want } want - Indicates disconnection information about the app service extension.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic&static
   */
  onDisconnect(want: Want): void;
}
export default AppServiceExtensionAbility;
