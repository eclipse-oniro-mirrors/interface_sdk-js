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
 * @file
 * @kit AbilityKit
 */

import type LaunchServiceDescriptor from './LaunchServiceDescriptor';
import rpc from '../@ohos.rpc';

/**
 * Define the callback interface for connecting to LaunchService. Used as the input parameter of [connectService]
 * _{@link../@ohos.app.ability.launchServiceManager:launchServiceManager.connectService} to receive the IRemoteObject
 * instance of IPC communication when the connection is successful, detect error codes when the connection fails, and
 * receive events when the connection is disconnected.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare interface LaunchServiceConnectCallback {
  /**
   * Called when a connection is set up.
   *
   * @param { LaunchServiceDescriptor } descriptor - Descriptor of the LaunchService for the connection.
   * @param { rpc.IRemoteObject } remote - The IRemoteObject instance is used to communicate with LaunchService.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onConnect(descriptor: LaunchServiceDescriptor, remote: rpc.IRemoteObject): void;

  /**
   * Called when a connection is interrupted.
   *
   * @param { LaunchServiceDescriptor } descriptor - Descriptor of the LaunchService that is disconnected.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onDisconnect(descriptor: LaunchServiceDescriptor): void;

  /**
   * Called when a connection fails.
   *
   * @param { int } code - Error code returned when the connection fails.
   *     16000211 - The specified service is not found.
   *     16000213 - The specified service is disabled.
   *     16000219 - Connection to the specified service timed out.
   *     16000050 - System service connection failed.
   *     <br>The value should be an integer.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onFailed(code: int): void;
}

export default LaunchServiceConnectCallback;