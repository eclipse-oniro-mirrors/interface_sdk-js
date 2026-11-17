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
 * 描述LaunchService的描述符。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */

declare interface LaunchServiceDescriptor {
  /**
   * 拥有LaunchService的应用程序的包名。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  bundleName: string;

  /**
   * 声明LaunchService的模块名。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  moduleName: string;

  /**
   * LaunchService的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  serviceName: string;

  /**
   * 用户ID。如果不指定该参数，则默认使用当前用户。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  userId?: int;

  /**
   * 应用分身的索引。取值范围是[0,1000]，默认值0表示主应用。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  appIndex?: int;
}

export default LaunchServiceDescriptor;