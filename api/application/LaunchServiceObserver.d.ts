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

import LaunchServiceStateData from './LaunchServiceStateData';
import LaunchServiceProcessStateData from './LaunchServiceProcessStateData';

/**
 * Defines the watcher of LaunchService status and process status changes.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare interface LaunchServiceObserver {

  /**
   * This interface is invoked when the registration status of LaunchService changes (registration or deregistration).
   * @param { Array<LaunchServiceStateData> } stateDataList - List of LaunchServices whose status changes.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onLaunchServiceRegisteredChanged(stateDataList: Array<LaunchServiceStateData>): void;

  /**
   * This interface is invoked when the LaunchService process status changes, including process start and stop events.
   * @param { LaunchServiceProcessStateData } processStateData - Process state change data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onLaunchServiceProcessStateChanged(processStateData: LaunchServiceProcessStateData): void;
}

export default LaunchServiceObserver;