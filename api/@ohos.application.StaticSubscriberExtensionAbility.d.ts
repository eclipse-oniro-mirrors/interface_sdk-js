/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import { CommonEventData } from './commonEvent/commonEventData';
import StaticSubscriberExtensionContext from './@ohos.application.StaticSubscriberExtensionContext';

/**
 * class of static subscriber extension ability.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @StageModelOnly
 * @since arkts {'1.1':'9', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class StaticSubscriberExtensionAbility {
  /**
   * Indicates configuration information about an ability context.
   *
   * @type { StaticSubscriberExtensionContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  context: StaticSubscriberExtensionContext;

  /**
   * Called back when a specific common event is published.
   *
   * @param { CommonEventData } event - Static subscriber universal event callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onReceiveEvent(event: CommonEventData): void;
}

export default StaticSubscriberExtensionAbility;