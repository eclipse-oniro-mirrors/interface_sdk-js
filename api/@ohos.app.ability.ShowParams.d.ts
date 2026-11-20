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

import window from './@ohos.window';

/**
 * ShowParams can be used as an input parameter for APIs used to show a UIAbility (for example,
 * [showAbility()]{@link ./application/UIAbilityContext:UIAbilityContext#showAbility(params: ShowParams)}
 * ). It specifies the params for showing the target UIAbility, including but not limited to the window gains focus
 * where the target UIAbility is started.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic&static
 */
declare class ShowParams {
  /**
   * Parameters for the window for the UIAbility upon startup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  windowShowParams: window.WindowShowParams;
}

export default ShowParams;
