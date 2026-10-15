/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import FocusedApplicationInfo from './FocusedApplicationInfo';

/**
 * 定义用于监听获焦应用变化的观察者。可以作为
 * [appManager.onFocusedApplicationChanged]{@link @ohos.app.ability.appManager:appManager.onFocusedApplicationChanged}
 * 的入参监听获焦应用变化。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.2.0 dynamic&static
 */
declare interface FocusedApplicationObserver {
  /**
   * 获焦应用发生变化时调用。
   *
   * @param { FocusedApplicationInfo } info - 获焦应用信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  onFocusedApplicationChanged(info: FocusedApplicationInfo): void;
}

export default FocusedApplicationObserver;
