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
 * Describes the status change data of the LaunchService. This data is used for [LaunchServiceObserver]
 * {./application/LaunchServiceObserver:LaunchServiceObserver}.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare interface LaunchServiceStateData {
  /**
   * Descriptor of LaunchService.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  descriptor: LaunchServiceDescriptor;

  /**
   * Latest status after the registration status of LaunchService changes. true indicates registered, and false
   * indicates not registered.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  registered: boolean;
}

export default LaunchServiceStateData;