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
 * Describes the status change of the LaunchService process and is used for the [LaunchServiceObserver]
 * {./application/LaunchServiceObserver:LaunchServiceObserver}.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare interface LaunchServiceProcessStateData {
  /**
   * Descriptor for starting the service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  descriptor: LaunchServiceDescriptor;

  /**
   * PID of the LaunchService process. The value 0 indicates that the process is not running. A value greater than 0
   * indicates that the process is running. The value must be an integer.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  pid: int;

  /**
   * LaunchService process status. 0: The LaunchService process is started. 1: The LaunchService process is stopped. The
   * value must be an integer.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  state: launchServiceManager.LaunchServiceProcessState;
}

export default LaunchServiceProcessStateData;