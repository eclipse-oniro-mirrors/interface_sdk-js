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

import type launchServiceManager from '../@ohos.app.ability.launchServiceManager';
import LaunchServiceDescriptor from './LaunchServiceDescriptor';

/**
 * 描述LaunchService进程状态变化数据。
 * 用于[LaunchServiceObserver]{./application/LaunchServiceObserver:LaunchServiceObserver}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare interface LaunchServiceProcessStateData {
  /**
   * 启动服务的描述符。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  descriptor: LaunchServiceDescriptor;

  /**
   * LaunchService进程的pid。0表示进程未在运行，大于0表示正在运行进程的pid。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  pid: int;

  /**
   * LaunchService进程状态。
   * 0：LaunchService进程启动。
   * 1：LaunchService进程停止。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  state: launchServiceManager.LaunchServiceProcessState;
}

export default LaunchServiceProcessStateData;