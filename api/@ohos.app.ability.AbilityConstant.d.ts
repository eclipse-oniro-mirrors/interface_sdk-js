/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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

/**
 * The definition of AbilityConstant.
 *
 * @namespace AbilityConstant
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 9
 */
/**
 * The definition of AbilityConstant.
 *
 * @namespace AbilityConstant
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * The definition of AbilityConstant.
 *
 * @namespace AbilityConstant
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace AbilityConstant {
  /**
   * Interface of launch param.
   *
   * @typedef LaunchParam
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * Interface of launch param.
   *
   * @typedef LaunchParam
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Interface of launch param.
   *
   * @typedef LaunchParam
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface LaunchParam {
    /**
     * Indicates launch reason.
     *
     * @type { LaunchReason }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Indicates launch reason.
     *
     * @type { LaunchReason }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates launch reason.
     *
     * @type { LaunchReason }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    launchReason: LaunchReason;

    /**
     * Indicates launch detailed reason.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    launchReasonMessage?: string;

    /**
     * Indicates last exit reason.
     *
     * @type { LastExitReason }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Indicates last exit reason.
     *
     * @type { LastExitReason }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates last exit reason.
     *
     * @type { LastExitReason }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    lastExitReason: LastExitReason;

    /**
     * Indicates last exit detailed reason.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    lastExitMessage: string;

    /**
     * Indicates process last exit details.
     *
     * @type { LastExitDetailInfo }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18
     */
    lastExitDetailInfo?: LastExitDetailInfo;
  }

  /**
   * The definition of detailed information of process exits
   *
   * @typedef LastExitDetailInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 18
   */
  export interface LastExitDetailInfo {
    /**
     * Indicates the exited process id
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18
     */
    pid: number;

    /**
     * Indicates the exited process name
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18
     */
    processName: string;

    /**
     * Indicates the uid of exited process
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18
     */
    uid: number;

    /**
     * Indicates the exit sub-reason
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18
     */
    exitSubReason: number;

    /**
     * Indicates the exit detailed reason
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18
     */
    exitMsg: string;

    /**
     * Indicates the rss value when process exit
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18
     */
    rss: number;

    /**
     * Indicates the pss value when process exit
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18
     */
    pss: number;

    /**
     * Indicates the timestamp when process exit
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18
     */
    timestamp: number;
  }

  /**
   * Type of launch reason.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * Type of launch reason.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Type of launch reason.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum LaunchReason {
    /**
     * Unknown reason.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    UNKNOWN = 0,

    /**
     * Start ability through the startAbility interface.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Start ability through the startAbility interface.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    START_ABILITY = 1,

    /**
     * Start ability through the startAbilityByCall interface.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Start ability through the startAbilityByCall interface.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CALL = 2,

    /**
     * Start ability through cross-end device migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Start ability through cross-end device migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONTINUATION = 3,

    /**
     * After the application is restored, the ability is automatically restored and started when the application fails.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * After the application is restored, the ability is automatically restored and started when the application fails.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    APP_RECOVERY = 4,

    /**
     * Start ability through the acquireShareData interface.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10
     */
    /**
     * Start ability through the acquireShareData interface.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    SHARE = 5,

    /**
     * Start ability by booting it up.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    AUTO_STARTUP = 8,

    /**
     * Start ability through the insight intent interface.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    INSIGHT_INTENT = 9,

    /**
     * Prepare start ability through cross-end device migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    PREPARE_CONTINUATION = 10,
  }

  /**
   * Type of last exit reason.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * Type of last exit reason.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Type of last exit reason.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum LastExitReason {
    /**
     * Exit reason : Unknown. The reason for the last exit of the target application is not recorded in the application
     *               framework.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Exit reason : Unknown. The reason for the last exit of the target application is not recorded in the application
     *               framework.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Exit reason : Unknown. The reason for the last exit of the target application is not recorded in the application
     *               framework.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    UNKNOWN = 0,

    /**
     * Exit reason : Ability is not responding.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     * @deprecated since 10
     * @useinstead AbilityConstant.LastExitReason#APP_FREEZE
     */
    ABILITY_NOT_RESPONDING = 1,

    /**
     * Exit reason : normally. App exit due to user active close.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Exit reason : normally. App exit due to user active close.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    NORMAL = 2,

    /**
     * Exit reason : cpp crash. The app exit due to native exception signal.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10
     */
    /**
     * Exit reason : cpp crash. The app exit due to native exception signal.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CPP_CRASH = 3,

    /**
     * Exit reason : js error. App exit due to js error.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10
     */
    /**
     * Exit reason : js error. App exit due to js error.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    JS_ERROR = 4,

    /**
     * Exit reason : app freeze. App exit due to appFreeze error.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10
     */
    /**
     * Exit reason : app freeze. App exit due to appFreeze error.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    APP_FREEZE = 5,

    /**
     * Exit reason : performance control. App exit due to system performance issues, such as device low memory.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10
     */
    /**
     * Exit reason : performance control. App exit due to system performance issues, such as device low memory.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    PERFORMANCE_CONTROL = 6,

    /**
     * Exit reason : resource control. App exit due to resource usage violation, such as exceed cpu/io/memory usage.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10
     */
    /**
     * Exit reason : resource control. App exit due to resource usage violation, such as exceed cpu/io/memory usage.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    RESOURCE_CONTROL = 7,

    /**
     * Exit reason : upgrade. App exit due to upgrade.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10
     */
    /**
     * Exit reason : upgrade. App exit due to upgrade.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    UPGRADE = 8,

    /**
     * Exit reason : USER_REQUEST. App exit due to user request.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    USER_REQUEST = 9,

    /**
     * Exit reason : SIGNAL. App exit due to system signal.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    SIGNAL = 10
  }

  /**
   * Type of onContinue result.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * Type of onContinue result.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum OnContinueResult {
    /**
     * Agree to the result of Ability migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Agree to the result of Ability migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    AGREE = 0,

    /**
     * Reject to the result of Ability migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Reject to the result of Ability migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    REJECT = 1,

    /**
     * Mismatch to the result of Ability migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Mismatch to the result of Ability migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    MISMATCH = 2
  }

  /**
   * Type of memory level.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * Type of memory level.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum MemoryLevel {
    /**
     * Memory footprint is moderate.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Memory footprint is moderate.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    MEMORY_LEVEL_MODERATE = 0,

    /**
     * Low memory footprint.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Low memory footprint.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    MEMORY_LEVEL_LOW = 1,

    /**
     * High memory footprint.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * High memory footprint.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    MEMORY_LEVEL_CRITICAL = 2
  }

  /**
   * Type of window mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum WindowMode {
    /**
     * The window mode is not defined.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    WINDOW_MODE_UNDEFINED = 0,

    /**
     * Full screen mode.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    WINDOW_MODE_FULLSCREEN = 1,

    /**
     * Primary screen in split-screen mode. If the screen is horizontal, it means the left split screen.
     * It is valid only in intra-app redirection scenarios.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    WINDOW_MODE_SPLIT_PRIMARY = 100,

    /**
     * Secondary screen in split-screen mode. If the screen is horizontal, it means the right split screen.
     * It is valid only in intra-app redirection scenarios.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    WINDOW_MODE_SPLIT_SECONDARY = 101,

    /**
     * Free floating window mode.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    WINDOW_MODE_FLOATING = 102
  }

  /**
   * Type of onSave result.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * Type of onSave result.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum OnSaveResult {
    /**
     * Always agree to save the state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Always agree to save the state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    ALL_AGREE = 0,

    /**
     * Refuse to migrate the saved state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Refuse to migrate the saved state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONTINUATION_REJECT = 1,

    /**
     * Migration mismatch.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Migration mismatch.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONTINUATION_MISMATCH = 2,

    /**
     * Agree to restore the saved state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Agree to restore the saved state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    RECOVERY_AGREE = 3,

    /**
     * Refuse to restore the saved state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Refuse to restore the saved state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    RECOVERY_REJECT = 4,

    /**
     * Always refuses to save the state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Always refuses to save the state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    ALL_REJECT
  }

  /**
   * Type of save state.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * Type of save state.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum StateType {
    /**
     * Migrate and save the state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Migrate and save the state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONTINUATION = 0,

    /**
     * App recovery to restore the saved state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * App recovery to restore the saved state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    APP_RECOVERY = 1
  }

  /**
   * Continue state.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10
   */
  /**
   * Continue state.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum ContinueState {
    /**
     * Mission continuable active.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10
     */
    /**
     * Mission continuable inactive.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    ACTIVE = 0,

    /**
     * Mission continuable inactive.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10
     */
    /**
     * Mission continuable inactive.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    INACTIVE = 1
  }

  /**
   * Type of collaborate result.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum CollaborateResult {
    /**
     * Accept to the result of Ability collaborate.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    ACCEPT = 0,

    /**
     * Reject to the result of Ability collaborate.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    REJECT = 1,
  }

  /**
   * PrepareTerminateAction indicates what to do prior to terminating process.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'15', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum PrepareTermination {
    /**
     * Terminate process immediately.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'15', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    TERMINATE_IMMEDIATELY = 0,

    /**
     * Cancel terminate.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since arkts {'1.1':'15', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CANCEL = 1
  }
}

export default AbilityConstant;
