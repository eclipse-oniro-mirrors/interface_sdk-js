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
 * 定义LaunchService状态和进程状态变化的观察者。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare interface LaunchServiceObserver {

  /**
   * 当LaunchService的注册状态发生变化（注册或解注册）时调用。
   *
   * @param { Array<LaunchServiceStateData> } stateDataList - 状态变化的LaunchService列表。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onLaunchServiceRegisteredChanged(stateDataList: Array<LaunchServiceStateData>): void;

  /**
   * 在LaunchService进程状态改变时调用，包括进程启动和停止事件。
   *
   * @param { LaunchServiceProcessStateData } processStateData - 进程状态变化数据。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  onLaunchServiceProcessStateChanged(processStateData: LaunchServiceProcessStateData): void;
}

export default LaunchServiceObserver;