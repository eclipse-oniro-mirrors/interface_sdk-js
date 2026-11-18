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

import window from './@ohos.window';

/**
 * ShowParams可以用作用于显示UIAability的API的输入参数(例如，
 * [showAbility()]{@link ./application/UIAbilityContext:UIAbilityContext#showAbility(params: ShowParams)}
 * )，用于指定目标UIAability的显示参数，包括但不限于窗口获得焦点
 * 其中启动了目标UIAability。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic&static
 */
declare class ShowParams {
  /**
   * 启动UIAbility界面参数说明。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  windowShowParams: window.WindowShowParams;
}
 
export default ShowParams;
