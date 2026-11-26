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
 * 定义连接LaunchService时的回调接口。
 * 作为[connectService]{@link ../@ohos.app.ability.launchServiceManager:launchServiceManager.connectService}的入参使用，
 * 用于连接成功时接收IPC通信的IRemoteObject实例、连接失败时感知错误码、断连时接收事件。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare interface LaunchServiceConnectCallback {
  /**
   * 在建立连接时调用。
   *
   * @param { LaunchServiceDescriptor } descriptor - 连接的LaunchService的描述符。
   * @param { rpc.IRemoteObject } remote - IRemoteObject实例用于与LaunchService通信。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onConnect(descriptor: LaunchServiceDescriptor, remote: rpc.IRemoteObject): void;

  /**
   * 当连接中断时调用。
   *
   * @param { LaunchServiceDescriptor } descriptor - 断开连接的LaunchService的描述符。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onDisconnect(descriptor: LaunchServiceDescriptor): void;

  /**
   * 当连接失败时调用。
   *
   * @param { int } code - 连接失败时返回的错误码。
   *     16000211 -找不到指定的服务。
   *     16000050 -系统服务连接失败。
   *     <br>取值限定为整数。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onFailed(code: int): void;
}

export default LaunchServiceConnectCallback;