/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * Defines error codes used when starting an ability, for example, featureAbility.ErrorCode.NO_ERROR.
 *
 * @enum { number }
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since arkts {'1.1':'6', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export enum ErrorCode {
  /**
   * Permission denied.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since arkts {'1.1':'6', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  PERMISSION_DENY = -3,

  /**
   * Ability not found.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since arkts {'1.1':'6', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  ABILITY_NOT_FOUND = -2,

  /**
   * Invalid parameter.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since arkts {'1.1':'6', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  INVALID_PARAMETER = -1,

  /**
   * No error.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since arkts {'1.1':'6', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  NO_ERROR = 0
}
