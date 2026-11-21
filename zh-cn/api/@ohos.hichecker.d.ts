/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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
 * @kit PerformanceAnalysisKit
 */

/**
 * HiChecker可以作为应用开发阶段使用的检测工具，用于检测代码运行过程中部分易忽略的问题，如应用线程出现耗时调用、应用进程中Ability资源泄漏等问题。开发者可以通过日志记录或进程crash等形式查看具体问题并进行修改，提升应用
 * 的使用体验。
 *
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace hichecker {
  /**
    * 告警规则，当有告警时记录日志。
   *
   * @constant
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 8 dynamic
   */
  const RULE_CAUTION_PRINT_LOG = 9223372036854775808n;

  /**
    * 告警规则，当有告警时记录日志。
    *
    * @syscap SystemCapability.HiviewDFX.HiChecker
    * @FaAndStageModel
    * @since 23 static
    */
  const RULE_CAUTION_PRINT_LOG: bigint;

  /**
    * 告警规则，当有告警时让应用退出。
   *
   * @constant
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 8 dynamic
   */
  const RULE_CAUTION_TRIGGER_CRASH = 4611686018427387904n;

  /**
    * 告警规则，当有告警时让应用退出。
    *
    * @syscap SystemCapability.HiviewDFX.HiChecker
    * @FaAndStageModel
    * @since 23 static
    */
  const RULE_CAUTION_TRIGGER_CRASH: bigint;

  /**
    * 检测规则，检测是否有耗时函数被调用。
   *
   * @constant
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 8 dynamic
   */
  const RULE_THREAD_CHECK_SLOW_PROCESS = 1n;

  /**
    * 检测规则，检测是否有耗时函数被调用。
    *
    * @syscap SystemCapability.HiviewDFX.HiChecker
    * @FaAndStageModel
    * @since 23 static
    */
  const RULE_THREAD_CHECK_SLOW_PROCESS: bigint;

  /**
    * 检测规则，检测是否发生Ability泄漏。
   *
   * @constant
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 8 dynamic
   */
  const RULE_CHECK_ABILITY_CONNECTION_LEAK = 8589934592n;

  /**
    * 检测规则，检测是否发生Ability泄漏。
    *
    * @syscap SystemCapability.HiviewDFX.HiChecker
    * @FaAndStageModel
    * @since 23 static
    */
  const RULE_CHECK_ABILITY_CONNECTION_LEAK: bigint;

  /**
    * 检测规则，检测arkui性能。
   *
   * @constant
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 11 dynamic
   */
  const RULE_CHECK_ARKUI_PERFORMANCE = 17179869184n;

  /**
    * 检测规则，检测arkui性能。
    *
    * @syscap SystemCapability.HiviewDFX.HiChecker
    * @FaAndStageModel
    * @since 23 static
    */
  const RULE_CHECK_ARKUI_PERFORMANCE: bigint;

  /**
    * 检测规则，检测线程是否调用网络耗时接口。
    *
    * @syscap SystemCapability.HiviewDFX.HiChecker
    * @FaAndStageModel
    * @since 26.0.0 dynamic&static
    */
  const RULE_THREAD_CHECK_NETWORK_USAGE = 2n;

  /**
   * 添加一条或多条规则到系统，系统根据添加的规则进行检测或反馈。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[hichecker.addCheckRule]{@link hichecker.addCheckRule}替代。
   *
   * @param { bigint } rule - 需要添加的规则。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead hichecker.addCheckRule
   */
  function addRule(rule: bigint): void;

  /**
   * 删除一条或多条规则，删除的规则后续将不再生效。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[hichecker.removeCheckRule]{@link hichecker.removeCheckRule}替代。
   *
   * @param { bigint } rule - 需要删除的规则。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead hichecker.removeCheckRule
   */
  function removeRule(rule: bigint): void;

  /**
   * 获取当前线程规则、进程规则、告警规则的合集。
   *
   * @returns { bigint } 当前系统中添加的规则。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 8 dynamic
   * @since 23 static
   */
  function getRule() : bigint;

  /**
   * 当前已添加的规则集中是否包含了某一个特定的规则。如果传入的规则级别为线程级别，则仅在当前线程中进行查询。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[hichecker.containsCheckRule]{@link hichecker.containsCheckRule}替代。
   *
   * @param { bigint } rule - 需要查询的规则。
   * @returns { boolean } 查询结果。true 表示规则已添加；false 表示规则未添加。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead hichecker.containsCheckRule
   */
  function contains(rule: bigint): boolean;

  /**
   * 添加一条或多条规则到系统，系统根据添加的规则进行检测或反馈，当有相应规则触发时可在hilog中grep HiChecker查看运行信息。
   *
   * 如果传入的规则级别为线程级别，则仅在当前线程中生效。
   *
   * @param { bigint } rule - 需要添加的规则。支持使用或运算组合多个规则。可选值包括：
   *     <br>RULE_CAUTION_PRINT_LOG（记录日志）、RULE_CAUTION_TRIGGER_CRASH（应用退出）、
   *     RULE_THREAD_CHECK_SLOW_PROCESS（检测耗时函数调用）等，详见常量定义。
   * @throws { BusinessError } 401 - [Sync] Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 9 dynamic
   * @since 23 static
   */
  function addCheckRule(rule: bigint) : void;

  /**
   * 删除一条或多条规则，删除的规则后续将不再生效。
   *
   * 如果传入的规则级别为线程级别，则仅从当前线程中删除。
   *
   * @param { bigint } rule - 需要删除的规则。支持使用或运算组合多个规则。可选值包括：
   *     <br>RULE_CAUTION_PRINT_LOG（记录日志）、RULE_CAUTION_TRIGGER_CRASH（应用退出）、
   *     RULE_THREAD_CHECK_SLOW_PROCESS（检测耗时函数调用）等，详见常量定义。
   * @throws { BusinessError } 401 - [Sync] Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 9 dynamic
   * @since 23 static
   */
  function removeCheckRule(rule: bigint) : void;

  /**
   * 当前已添加的规则集中是否包含了某一个特定的规则。如果传入的规则级别为线程级别，则仅在当前线程中进行查询。
   *
   * @param { bigint } rule - 需要查询的规则。
   * @returns { boolean } 查询结果。true 表示规则已添加；false 表示规则未添加。
   * @throws { BusinessError } 401 - [Sync] Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 9 dynamic
   * @since 23 static
   */
  function containsCheckRule(rule: bigint) : boolean;
}
export default hichecker;