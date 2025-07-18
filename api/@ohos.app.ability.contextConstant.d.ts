/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * The context of an application. It allows access to application-specific resources.
 *
 * @namespace contextConstant
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 9
 */
/**
 * The context of an application. It allows access to application-specific resources.
 *
 * @namespace contextConstant
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace contextConstant {
  /**
   * File area mode
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * File area mode
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum AreaMode {
    /**
     * System level device encryption area
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * System level device encryption area
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    EL1 = 0,

    /**
     * User credential encryption area
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * User credential encryption area
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    EL2 = 1,

    /**
     * User credential encryption area
     * when screen locked, can read/write, and create file
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    EL3 = 2,

    /**
     * User credential encryption area
     * when screen locked, FEB2.0 can read/write, FEB3.0 can't
     * read/write, and all can't create file
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    EL4 = 3,

    /**
     * User privacy sensitive encryption area
     * when the screen locked, a closed file cannot be opened, read, or written,
     * a file can be created and then opened, read, or written.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12
     */
    EL5 = 4
  }

  /**
   * Process mode
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum ProcessMode {
    /**
     * Indicates the ability started in a new process, and the process lifecycle follows the parent process.
     * When using this mode, the target ability needs to have the same bundle name as the caller.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    NEW_PROCESS_ATTACH_TO_PARENT = 1,

    /**
     * Indicates the ability started in a new process.
     * When using this mode, the caller needs to add item to status bar first,
     * and the target ability needs to have the same bundle name as the caller.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    NEW_PROCESS_ATTACH_TO_STATUS_BAR_ITEM = 2,

    /**
     * Indicates the ability started without forcing the creation of a new process.
     * When using this mode, the caller needs to add item to status bar first,
     * and the target ability needs to have the same bundle name as the caller.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    ATTACH_TO_STATUS_BAR_ITEM = 3
  }

  /**
   * Startup visibility
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum StartupVisibility {
    /**
     * Indicates that the ability will hide after process startup.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    STARTUP_HIDE = 0,

    /**
     * Indicates that the ability will show after process startup.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    STARTUP_SHOW = 1
  }

  /**
   * Scenario values for disabling the onNewWant lifecycle callback.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  export enum Scenarios {
    /**
     * Indicates the scenario where a UIAbility is brought to the foreground through
     * the missionManager.moveMissionToFront invocation.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20
     * @arkts 1.1&1.2
     */
    SCENARIO_MOVE_MISSION_TO_FRONT = 0x00000001,

    /**
     * Indicates the scenario where a UIAbility is brought to the foreground through
     * the UIAbilityContext.showAbility invocation.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20
     * @arkts 1.1&1.2
     */
    SCENARIO_SHOW_ABILITY = 0x00000002,

    /**
     * Indicates the scenario where a UIAbility is brought to the foreground through
     * the UIAbilityContext.backToCallerAbilityWithResult invocation.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20
     * @arkts 1.1&1.2
     */
    SCENARIO_BACK_TO_CALLER_ABILITY_WITH_RESULT = 0x00000004
  }
}

export default contextConstant;
