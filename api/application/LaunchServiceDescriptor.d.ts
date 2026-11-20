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
/**
 * Descriptor describing LaunchService.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */

declare interface LaunchServiceDescriptor {
  /**
   * Package name of the application that has LaunchService.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  bundleName: string;

  /**
   * Declare the module name of LaunchService.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  moduleName: string;

  /**
   * LaunchService name.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  serviceName: string;

  /**
   * User ID. If this parameter is not specified, the current user is used by default.
   * The value should be an integer.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  userId?: int;

  /**
   * Index of the application twin. The value ranges from 0 to 1000. The default value 0 indicates the main application.
   * The value must be an integer.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  appIndex?: int;
}

export default LaunchServiceDescriptor;