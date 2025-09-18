/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import CompletionHandlerForAtomicService from './@ohos.app.ability.CompletionHandlerForAtomicService';
import StartOptions from './@ohos.app.ability.StartOptions';

/**
 * AtomicServiceOptions is the basic communication component of the system.
 *
 * @extends StartOptions
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export default class AtomicServiceOptions extends StartOptions {
  /**
   * The options of the flags in this AtomicServiceOptions.
   *
   * @type { ?int }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  flags?: int;

  /**
   * The description of the WantParams object in an AtomicServiceOptions
   *
   * @type { ?Record<string, Object> }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  parameters?: Record<string, Object>;

  /**
   * The completion handler of openAtomicService.
   *
   * @type { ?CompletionHandlerForAtomicService }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  completionHandlerForAtomicService?: CompletionHandlerForAtomicService;
}