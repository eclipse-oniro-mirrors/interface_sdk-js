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
 * @file ExtensionAbility for Application Background Services
 * @kit AbilityKit
 */

import rpc from './@ohos.rpc';
import AppServiceExtensionContext from './application/AppServiceExtensionContext';
import Want from './@ohos.app.ability.Want';
import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';

/**
 * The AppServiceExtensionAbility module provides extended capabilities for background services, including lifecycle
 * callbacks for creating, destroying, connecting, and disconnecting background services.
 *
 * ###### Constraints
 *
 * - Currently, only 2-in-1 devices are supported.
 * - To integrate an AppServiceExtensionAbility, applications must request the ACL permission
 * (ohos.permission.SUPPORT_APP_SERVICE_EXTENSION). This ACL permission is available only for enterprise applications.
 *
 * ###### Lifecycle
 *
 * The AppServiceExtensionAbility provides the following lifecycle callbacks:
 * [onCreate()]{@link AppServiceExtensionAbility#onCreate}, [onRequest()]{@link AppServiceExtensionAbility#onRequest},
 * [onConnect()]{@link AppServiceExtensionAbility#onConnect}, and
 * [onDestroy()]{@link AppServiceExtensionAbility#onDestroy}. You can override the callback methods as required.
 * The following figure shows the AppServiceExtensionAbility lifecycle.
 *
 * ![AppServiceExtensionAbility-lifecycle](docroot://application-models/figures/AppServiceExtensionAbility-lifecycle.png)
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare class AppServiceExtensionAbility extends ExtensionAbility {
  /**
   * Context environment for an AppServiceExtensionAbility. This context inherits from
   * [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}.
   *
   * **Device Behavior Differences:** This attribute can be called normally only on PC/2-in-1 devices and
   * does not take effect on other devices.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  context: AppServiceExtensionContext;

  /**
   * Called when an AppServiceExtensionAbility instance is created.
   * Applications can perform initialization operations, such as registering common event listeners, in this callback.
   *
   * > **NOTE**
   * >
   * > If an AppServiceExtensionAbility instance has already been created, the **onCreate()** callback is not invoked
   * > again when the instance is started or connected.
   *
   * **Device Behavior Differences:** This API executes the callback normally only on PC/2-in-1 devices and
   * does not execute the callback on other devices.
   *
   * @param { Want } want - Want information about the target AppServiceExtensionAbility instance, including the
   *     ability name and bundle name.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * Called when an AppServiceExtensionAbility instance is destroyed. Applications can perform resource cleanup
   * operations, such as unregistering listeners, in this callback.
   *
   * **Device Behavior Differences:** This API executes the callback normally only on PC/2-in-1 devices and
   * does not execute the callback on other devices.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onDestroy(): void;

  /**
   * Called each time an AppServiceExtensionAbility instance is started by calling
   * [startAppServiceExtensionAbility()]{@link ./application/UIAbilityContext:UIAbilityContext.startAppServiceExtensionAbility}
   * .
   *
   * **Device Behavior Differences:** This API executes the callback normally only on PC/2-in-1 devices and
   * does not execute the callback on other devices.
   *
   * @param { Want } want - Want information about the target AppServiceExtensionAbility instance, including the
   *     ability name and bundle name.
   * @param { int } startId - Number of times the instance has been started. The initial value is **1** for the first
   *     start, and it increments automatically for subsequent starts.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onRequest(want: Want, startId: int): void;

  /**
   * Called when an AppServiceExtensionAbility instance is connected by calling
   * [connectAppServiceExtensionAbility()]{@link ./application/UIAbilityContext:UIAbilityContext.connectAppServiceExtensionAbility}
   * .
   *
   * **Device Behavior Differences:** This API executes the callback normally only on PC/2-in-1 devices.
   * On other devices, the callback is not executed.
   *
   * @param { Want } want - Want information about the target AppServiceExtensionAbility instance, including the
   *     ability name and bundle name.
   * @returns { rpc.RemoteObject } A RemoteObject used for communication between the server and client.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onConnect(want: Want): rpc.RemoteObject;

  /**
   * Called when all connections to an AppServiceExtensionAbility instance are interrupted.
   *
   * **Device Behavior Differences:** This API executes the callback normally only on PC/2-in-1 devices.
   * On other devices, the callback is not executed.
   *
   * @param { Want } want - Want information passed by the caller when the AppServiceExtensionAbility instance was most
   *     recently started or connected. This includes information such as the ability name and bundle name.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onDisconnect(want: Want): void;
}
export default AppServiceExtensionAbility;