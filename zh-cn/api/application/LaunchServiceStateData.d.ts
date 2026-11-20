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

/**
 * 描述LaunchService状态变化数据。
 * 用于[LaunchServiceObserver]{./application/LaunchServiceObserver:LaunchServiceObserver}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare interface LaunchServiceStateData {
  /**
   * LaunchService的描述符。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  descriptor: LaunchServiceDescriptor;

  /**
   * LaunchService注册状态发生变化后的最新状态。true表示已注册，false表示未注册。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  registered: boolean;
}

export default LaunchServiceStateData;