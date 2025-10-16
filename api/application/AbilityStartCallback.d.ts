/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

/*** if arkts 1.1 */
import type { AbilityResult } from '../ability/abilityResult';
/*** endif */
/*** if arkts 1.2 */
import { AbilityResult } from '../ability/abilityResult';
/*** endif */
import { CompletionHandlerForAbilityStartCallback } from '../@ohos.app.ability.CompletionHandlerForAbilityStartCallback';


/**
 * Defines a onResult function.
 * 
 * @typedef { function } OnResultFn
 * @param { AbilityResult } parameter - The Parameter returned if the UIExtensionAbility call terminateSelfWithResult.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 20
 * @arkts 1.2
 */
type OnResultFn = (parameter: AbilityResult) => void;

/*** if arkts 1.1 */
/**
 * The callback of UIAbility or UIExtensionAbility.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 11
 */
export default class AbilityStartCallback {
/*** endif */

/*** if arkts 1.2 */
/**
 * The callback of UIAbility or UIExtensionAbility.
 *
 * @typedef AbilityStartCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare interface AbilityStartCallback {
/*** endif */
  /**
   * Called when some error occurred except disconnected from UIAbility or UIExtensionAbility.
   *
   * @param { int } code - The code returned if the UIAbility or UIExtensionAbility failed to start.
   * @param { string } name - The name returned if the UIAbility or UIExtensionAbility failed to start.
   * @param { string } message - The message returned if the UIAbility or UIExtensionAbility failed to start.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onError(code: int, name: string, message: string): void;

  /**
   * Called when UIExtensionAbility terminate with result.
   *
   * @param { AbilityResult } parameter - The parameter returned if the UIExtensionAbility call terminateSelfWithResult.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onResult?(parameter: AbilityResult): void;
  
  /**
   * Called when UIExtensionAbility terminate with result.
   *
   * @type { ?OnResultFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20
   * @arkts 1.2
   */
  onResult?: OnResultFn;

  /**
   * The completion handler of startAbilityByType.
   *
   * @type { ?CompletionHandlerForAbilityStartCallback }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 21
   * @arkts 1.1&1.2
   */
  completionHandler?: CompletionHandlerForAbilityStartCallback;
}

/*** if arkts 1.2 */
export default AbilityStartCallback;
/*** endif */