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

import AppStateData from './AppStateData';
import AbilityStateData from './AbilityStateData';
import * as _ProcessData from './ProcessData';

/**
 * The application state observer.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 8
 */
export default class ApplicationStateObserver {
  /**
   * Will be called when foreground or background application changed.
   *
   * @param { AppStateData } appStateData - State changed Application info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   */
  onForegroundApplicationChanged(appStateData: AppStateData): void;

  /**
   * Will be called when ability state changed.
   *
   * @param { AbilityStateData } abilityStateData - State changed ability info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   */
  onAbilityStateChanged(abilityStateData: AbilityStateData): void;

  /**
   * Will be called when process created.
   *
   * @param { ProcessData } processData - Process info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   */
  onProcessCreated(processData: ProcessData): void;

  /**
   * Will be called when process died.
   *
   * @param { ProcessData } processData - Process info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   */
  onProcessDied(processData: ProcessData): void;

  /**
   * Called when process state changes.
   *
   * @param { ProcessData } processData - Process info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9
   */
  onProcessStateChanged(processData: ProcessData): void;
}

/**
 * The process data.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 9
 */
export type ProcessData = _ProcessData.default;
