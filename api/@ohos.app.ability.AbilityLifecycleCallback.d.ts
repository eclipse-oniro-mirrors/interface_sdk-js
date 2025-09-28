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
 * @kit AbilityKit
 */

import UIAbility from './@ohos.app.ability.UIAbility';
import window from './@ohos.window';

/**
 * Called back after the UIAbility called onNewWant.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnNewWantFn = (ability: UIAbility) => void;

/**
 * Called back before the state of an ability changes to background.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnAbilityWillBackgroundFn = (ability: UIAbility) => void;

/**
 * Called back before the state of an ability changes to foreground.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnAbilityWillForegroundFn = (ability: UIAbility) => void;

/**
 * Called back before an ability is started for initialization.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnAbilityWillCreateFn = (ability: UIAbility) => void;

/**
 * Called back before a window stage is destroyed.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - window stage to destroy
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnWindowStageWillDestroyFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * Called back before an ability is destroyed.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnAbilityWillDestroyFn = (ability: UIAbility) => void;

/**
 * Called back when the ability prepares to call onWindowStageRestore.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - window stage to restore.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */

type OnWindowStageWillRestoreFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * Called back when the ability has called onWindowStageRestore.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - window stage to restore.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnWindowStageRestoreFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * Called back when the ability has called onSaveState.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnAbilitySaveStateFn = (ability: UIAbility) => void;

/**
 * Called back when the ability prepares to call onContinue.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnAbilityWillContinueFn = (ability: UIAbility) => void;

/**
 * Called back when the ability prepares to call onSaveState.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnAbilityWillSaveStateFn = (ability: UIAbility) => void;

/**
 * Called back before the UIAbility will called onNewWant.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnWillNewWantFn = (ability: UIAbility) => void;

/**
 * Called back before a window stage is created.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - window stage to create
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnWindowStageWillCreateFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/*** if arkts 1.1 */
/**
 * The ability lifecycle callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @since 9
 */
/**
 * The ability lifecycle callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
/**
 * The ability lifecycle callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export default class AbilityLifecycleCallback {
/*** endif */

/*** if arkts 1.2 */
/**
 * The ability lifecycle callback.
 *
 * @typedef AbilityLifecycleCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare interface AbilityLifecycleCallback {
/*** endif */
  /**
   * Called back when an ability is started for initialization.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when an ability is started for initialization.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when an ability is started for initialization.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onAbilityCreate(ability: UIAbility): void;

  /**
   * Called back before an ability is started for initialization.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onAbilityWillCreate?(ability: UIAbility): void;

  /**
   * Called back before an ability is started for initialization.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onAbilityWillCreate?: OnAbilityWillCreateFn;

  /**
   * Called back when a window stage is created.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to create
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when a window stage is created.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to create
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when a window stage is created.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to create
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWindowStageCreate(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back before a window stage is created.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to create
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onWindowStageWillCreate?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back before a window stage is created.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to create
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onWindowStageWillCreate?: OnWindowStageWillCreateFn;

  /**
   * Called back before the UIAbility will called onNewWant.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onWillNewWant?(ability: UIAbility): void;

  /**
   * Called back before the UIAbility will called onNewWant.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onWillNewWant?: OnWillNewWantFn;

  /**
   * Called back after the UIAbility called onNewWant.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onNewWant?(ability: UIAbility): void;

  /**
   * Called back after the UIAbility called onNewWant.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onNewWant?: OnNewWantFn;

  /**
   * Called back when a window stage is active.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to active
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when a window stage is active.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to active
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWindowStageActive(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back when a window stage is inactive.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to inactive
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when a window stage is inactive.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to inactive
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWindowStageInactive(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back when a window stage is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to destroy
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when a window stage is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to destroy
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when a window stage is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to destroy
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWindowStageDestroy(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back before a window stage is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to destroy
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onWindowStageWillDestroy?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back before a window stage is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to destroy
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onWindowStageWillDestroy?: OnWindowStageWillDestroyFn;

  /**
   * Called back when an ability is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when an ability is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when an ability is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onAbilityDestroy(ability: UIAbility): void;

  /**
   * Called back before an ability is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onAbilityWillDestroy?(ability: UIAbility): void;

  /**
   * Called back before an ability is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onAbilityWillDestroy?: OnAbilityWillDestroyFn;

  /**
   * Called back when the state of an ability changes to foreground.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when the state of an ability changes to foreground.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when the state of an ability changes to foreground.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onAbilityForeground(ability: UIAbility): void;

  /**
   * Called back before the state of an ability changes to foreground.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onAbilityWillForeground?(ability: UIAbility): void;

  /**
   * Called back before the state of an ability changes to foreground.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onAbilityWillForeground?: OnAbilityWillForegroundFn;

  /**
   * Called back when the state of an ability changes to background.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when the state of an ability changes to background.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when the state of an ability changes to background.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onAbilityBackground(ability: UIAbility): void;

  /**
   * Called back before the state of an ability changes to background.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onAbilityWillBackground?(ability: UIAbility): void;

  /**
   * Called back before the state of an ability changes to background.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onAbilityWillBackground?: OnAbilityWillBackgroundFn;

  /**
   * Called back when an ability prepares to continue.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when an ability prepares to continue.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @atomicservice
   * @since 11
   */
  onAbilityContinue(ability: UIAbility): void;

  /**
   * Called back when the ability prepares to call onContinue.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onAbilityWillContinue?(ability: UIAbility): void;

  /**
   * Called back when the ability prepares to call onWindowStageRestore.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to restore.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onWindowStageWillRestore?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back when the ability prepares to call onWindowStageRestore.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to restore.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onWindowStageWillRestore?: OnWindowStageWillRestoreFn;

  /**
   * Called back when the ability has called onWindowStageRestore.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to restore.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onWindowStageRestore?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back when the ability has called onWindowStageRestore.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to restore.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onWindowStageRestore?: OnWindowStageRestoreFn;

  /**
   * Called back when the ability prepares to call onSaveState.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onAbilityWillSaveState?(ability: UIAbility): void;

  /**
   * Called back when the ability has called onSaveState.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onAbilitySaveState?(ability: UIAbility): void;
}

/*** if arkts 1.2 */
export default AbilityLifecycleCallback;
/*** endif */