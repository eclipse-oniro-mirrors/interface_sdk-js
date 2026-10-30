/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @file ServiceExtensionAbility
 * @kit AbilityKit
 */

import rpc from './@ohos.rpc';
import ServiceExtensionContext from './application/ServiceExtensionContext';
import Want from './@ohos.app.ability.Want';
import { Configuration } from './@ohos.app.ability.Configuration';

/**
 * The ServiceExtensionAbility module provides extended capabilities for background services, including lifecycle
 * callbacks for creating, destroying, connecting, and disconnecting background services.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @StageModelOnly
 * @since 9 dynamic
 * @since 23 static
 */
declare class ServiceExtensionAbility {
  /**
   * Context of the ServiceExtensionAbility. This context inherits from **ExtensionContext**.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  context: ServiceExtensionContext;

  /**
   * Called to initialize the service logic when a ServiceExtensionAbility is being created.
   *
   * @param { Want } want - Want information related to this ServiceExtensionAbility, including the ability name and
   *     bundle name.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * Called to clear resources when this ServiceExtensionAbility is being destroyed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onDestroy(): void;

  /**
   * Extension lifecycle callback. If the service is started by startServiceExtensionAbility or requestDialogService,
   *  this callback is invoked after [onCreate](#oncreate). It is invoked each time the service is started, and
   *  startId increments each time.
   *
   * @param { Want } want - Want information related to this ServiceExtensionAbility, including the ability name and
   *     bundle name.
   * @param { int } startId - Number of times the instance has been started. The initial value is **1** for the first
   *     start, and it increments automatically for subsequent starts.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onRequest(want: Want, startId: int): void;

  /**
   * Extension lifecycle callback. If the service is connected through connectAbility, this callback is invoked
   *  after onCreate. It returns a RemoteObject object used for communication between the client and the server.
   *
   * @param { Want } want - Want information related to this ServiceExtensionAbility, including the ability name and
   *     bundle name.
   * @returns { rpc.RemoteObject | Promise<rpc.RemoteObject> } RemoteObject or Promise used to return a RemoteObject,
   *     which is used for communication between the client and server.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onConnect(want: Want): rpc.RemoteObject | Promise<rpc.RemoteObject>;

  /**
   * Extension lifecycle callback. It is invoked when the client disconnects from the service.
   *
   * This API returns the result synchronously or uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > - Once the **onDisconnect** lifecycle callback completes, the application may exit. This can interrupt any
   * >   pending asynchronous operations (such as asynchronously writing data to a database), preventing them from
   * >   finishing successfully. For any non-instantaneous tasks, you are advised to use Promise-based asynchronous
   * >   callbacks.
   * >
   * > - Be aware that asynchronous operations are subject to a default timeout of approximately 1 second. Even if
   * >   this timeout is exceeded, the system may still force-terminate the application. Note that the exact timeout
   * >   duration can vary by device.
   *
   * @param { Want } want - Want information related to this ServiceExtensionAbility, including the ability name and
   *     bundle name.
   * @returns { void | Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   */
  onDisconnect(want: Want): void | Promise<void>;

  /**
   * Called when a client is disconnected from this ServiceExtensionAbility.
   * This API returns the result synchronously or uses a promise to return the result.
   *
   * @param { Want } want - Want information related to this ServiceExtensionAbility, including the ability name and
   *     bundle name.
   * @returns { Promise<void> | undefined } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onDisconnect(want: Want): Promise<void> | undefined;

  /**
   * Called when a new client attempts to connect to this ServiceExtensionAbility after all previous clients are
   * disconnected. This capability is reserved.
   *
   * @param { Want } want - Want information related to this ServiceExtensionAbility, including the ability name and
   *     bundle name.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   */
  onReconnect(want: Want): void;

  /**
   * Called when the configuration of this ServiceExtensionAbility is updated.
   *
   * @param { Configuration } newConfig - New configuration.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onConfigurationUpdate(newConfig: Configuration): void;

  /**
   * Dumps the client information.
   *
   * @param { Array<string> } params - Array of parameters passed in command line mode.
   * @returns { Array<string> } Array of client information.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onDump(params: Array<string>): Array<string>;
}

export default ServiceExtensionAbility;