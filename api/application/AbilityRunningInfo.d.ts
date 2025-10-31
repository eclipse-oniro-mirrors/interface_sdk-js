/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { ElementName } from '../bundleManager/ElementName';
import abilityManager from '../@ohos.app.ability.abilityManager';

/**
 * The class of an ability running information.
 *
 * @typedef AbilityRunningInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14 dynamic
 * @since 20 static
 */
export interface AbilityRunningInfo {
  /**
   * Ability matching information.
   *
   * @type { ElementName }
   * @default the ohos.bundleManager.ElementName object of the ability.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 20 static
   */
  ability: ElementName;

  /**
   * Process ID.
   *
   * @type { int }
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 20 static
   */
  pid: int;

  /**
   * User ID.
   *
   * @type { int }
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 20 static
   */
  uid: int;

  /**
   * Process name.
   *
   * @type { string }
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 20 static
   */
  processName: string;

  /**
   * Ability startup time.
   *
   * @type { long }
   * @default ability start time
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 20 static
   */
  startTime: long;

  /**
   * Ability status.
   *
   * @type { abilityManager.AbilityState }
   * @default Enumerates state of the ability state info
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 20 static
   */
  abilityState: abilityManager.AbilityState;
}
