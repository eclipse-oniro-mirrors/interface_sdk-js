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
import type LaunchServiceDescriptor from './LaunchServiceDescriptor';

/**
 * LaunchService的信息结构体。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare interface LaunchServiceInformation {
  /**
   * LaunchService的描述符。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  descriptor: LaunchServiceDescriptor;

  /**
   * LaunchService的状态。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  state: launchServiceManager.LaunchServiceState;

  /**
   * LaunchService进程的pid。0表示进程未启动，大于0时表示正在运行的进程的pid。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  pid: int;
}

export default LaunchServiceInformation;