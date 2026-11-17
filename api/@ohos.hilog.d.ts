/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version  2.0 (the "License");
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
 * @file HiLOG Logging
 * @kit PerformanceAnalysisKit
 */

/*** if arkts static */
import { RecordData } from '@ohos.base';
/*** endif */

/**
 * The hilog module is a logging subsystem provided by OpenHarmony that allows applications or services to output logs
 * with specified log types, log levels, and format strings. Developers can use hilog to record key process information,
 * exceptions, and error events during application runtime, thereby understanding the application's running status and
 *     facilitating better debugging. hilog is applicable for recording runtime logs during development and debugging phases,
 *     and also for scenarios where log output is reduced and privacy data is protected through level control in release versions.
 *
 * The hilog module provides the following core features:
 *
 * **Log Printing**: Provides five level functions: debug, info, warn, error, and fatal. Developers can select an
 * appropriate level to output logs based on the severity of the information. Log content supports formatted strings and
 * privacy flags for structured recording and protection of sensitive data.
 *
 * **Log Level Control**: Uses setMinLogLevel to set the minimum log level to filter out lower-level logs, or uses
 * setLogLevel with PreferStrategy to flexibly determine the effective relationship between the newly set level and the
 * system control level, avoiding redundant logs.
 *
 * **Log Output Management**: Uses setOutputType to set log output to console, private sandbox, or shared sandbox, uses
 * setOutputTypeByDomain to finely control different output methods by domain ID list, and provides sandbox log directory
 *     query, sandbox log file retrieval, sandbox log flush and cleanup management capabilities.
 *
 */

/**
 * @syscap SystemCapability.HiviewDFX.HiLog
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace hilog {

  /**
   * Prints a DEBUG-level log.
   *
   * DEBUG-level logs are not printed by default in release versions. They are only printed in debug versions or when
   * the debug switch is enabled.
   *
   * @param { number } domain - Domain identifier for the log, ranging from 0x0 to 0xFFFF. Logs outside this range
   *     cannot be printed.<br/>It is recommended that developers define and divide domains as needed within the application.
   * @param { string } tag - Specifies the log tag, which can be any string. It is recommended to identify the calling
   * class or business behavior. The recommended tag length should not exceed 31 bytes. Chinese characters are not
   * recommended as they may cause garbled text or alignment issues.
   * @param { string } format - Format string for formatted log output. The format string can contain multiple parameters,
   * each requiring a parameter type and privacy flag.<br>Privacy flags are divided into {public} and {private}, defaulting
   *     to {private}. Content marked with {public} is output in plaintext, while content marked with {private} is displayed
   *     as <private>. The privacy flag mechanism helps developers protect privacy-sensitive data.
   * @param { any[] } args - Variable-length parameter list corresponding to the format string. The number and types of
   *     parameters must match the placeholders in the format string one-to-one. When the format string does not contain
   *     placeholders, this parameter can be omitted, and only the format string itself is output.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function debug(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Prints a DEBUG-level log.
   *
   * @param { int } domain - Domain identifier for the log, ranging from 0x0 to 0xFFFF. Logs outside this range
   *     cannot be printed.<br/>It is recommended that developers define and divide domains as needed within the application.
   * @param { string } tag - Specifies the log tag, which can be any string. It is recommended to identify the calling
   * class or business behavior. The recommended tag length should not exceed 31 bytes. Chinese characters are not
   * recommended as they may cause garbled text or alignment issues.
   * @param { string } format - Format string for formatted log output. The format string can contain multiple parameters,
   * each requiring a parameter type and privacy flag.<br>Privacy flags are divided into {public} and {private}, defaulting
   *     to {private}. Content marked with {public} is output in plaintext, while content marked with {private} is displayed
   *     as <private>. The privacy flag mechanism helps developers protect privacy-sensitive data.
   * @param { RecordData[] } args - Variable-length parameter list corresponding to the format string. The number and types
   *     of parameters must match the placeholders in the format string one-to-one. When the format string does not contain
   *     placeholders, this parameter can be omitted, and only the format string itself is output.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function debug(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Prints an INFO-level log.
   *
   * @param { number } domain - Domain identifier for the log, ranging from 0x0 to 0xFFFF. Logs outside this range
   *     cannot be printed.<br/>It is recommended that developers define and divide domains as needed within the application.
   * @param { string } tag - Specifies the log tag, which can be any string. It is recommended to identify the calling
   * class or business behavior. The recommended tag length should not exceed 31 bytes. Chinese characters are not
   * recommended as they may cause garbled text or alignment issues.
   * @param { string } format - Format string for formatted log output. The format string can contain multiple parameters,
   * each requiring a parameter type and privacy flag.<br>Privacy flags are divided into {public} and {private}, defaulting
   *     to {private}. Content marked with {public} is output in plaintext, while content marked with {private} is displayed
   *     as <private>. The privacy flag mechanism helps developers protect privacy-sensitive data.
   * @param { any[] } args - Variable-length parameter list corresponding to the format string. The number and types of
   *     parameters must match the placeholders in the format string one-to-one. When the format string does not contain
   *     placeholders, this parameter can be omitted, and only the format string itself is output.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function info(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Prints an INFO-level log.
   *
   * @param { int } domain - Domain identifier for the log, ranging from 0x0 to 0xFFFF. Logs outside this range
   *     cannot be printed.<br/>It is recommended that developers define and divide domains as needed within the application.
   * @param { string } tag - Specifies the log tag, which can be any string. It is recommended to identify the calling
   * class or business behavior. The recommended tag length should not exceed 31 bytes. Chinese characters are not
   * recommended as they may cause garbled text or alignment issues.
   * @param { string } format - Format string for formatted log output. The format string can contain multiple parameters,
   * each requiring a parameter type and privacy flag.<br>Privacy flags are divided into {public} and {private}, defaulting
   *     to {private}. Content marked with {public} is output in plaintext, while content marked with {private} is displayed
   *     as <private>. The privacy flag mechanism helps developers protect privacy-sensitive data.
   * @param { RecordData[] } args - Variable-length parameter list corresponding to the format string. The number and types
   *     of parameters must match the placeholders in the format string one-to-one. When the format string does not contain
   *     placeholders, this parameter can be omitted, and only the format string itself is output.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function info(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Prints a WARN-level log.
   *
   * @param { number } domain - Domain identifier for the log, ranging from 0x0 to 0xFFFF. Logs outside this range
   *     cannot be printed.<br/>It is recommended that developers define and divide domains as needed within the application.
   * @param { string } tag - Specifies the log tag, which can be any string. It is recommended to identify the calling
   * class or business behavior. The recommended tag length should not exceed 31 bytes. Chinese characters are not
   * recommended as they may cause garbled text or alignment issues.
   * @param { string } format - Format string for formatted log output. The format string can contain multiple parameters,
   * each requiring a parameter type and privacy flag.<br>Privacy flags are divided into {public} and {private}, defaulting
   *     to {private}. Content marked with {public} is output in plaintext, while content marked with {private} is displayed
   *     as <private>. The privacy flag mechanism helps developers protect privacy-sensitive data.
   * @param { any[] } args - Variable-length parameter list corresponding to the format string. The number and types of
   *     parameters must match the placeholders in the format string one-to-one. When the format string does not contain
   *     placeholders, this parameter can be omitted, and only the format string itself is output.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function warn(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Prints a WARN-level log.
   *
   * @param { int } domain - Domain identifier for the log, ranging from 0x0 to 0xFFFF. Logs outside this range
   *     cannot be printed.<br/>It is recommended that developers define and divide domains as needed within the application.
   * @param { string } tag - Specifies the log tag, which can be any string. It is recommended to identify the calling
   * class or business behavior. The recommended tag length should not exceed 31 bytes. Chinese characters are not
   * recommended as they may cause garbled text or alignment issues.
   * @param { string } format - Format string for formatted log output. The format string can contain multiple parameters,
   * each requiring a parameter type and privacy flag.<br>Privacy flags are divided into {public} and {private}, defaulting
   *     to {private}. Content marked with {public} is output in plaintext, while content marked with {private} is displayed
   *     as <private>. The privacy flag mechanism helps developers protect privacy-sensitive data.
   * @param { RecordData[] } args - Variable-length parameter list corresponding to the format string. The number and types
   *     of parameters must match the placeholders in the format string one-to-one. When the format string does not contain
   *     placeholders, this parameter can be omitted, and only the format string itself is output.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function warn(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Prints an ERROR-level log.
   *
   * @param { number } domain - Domain identifier for the log, ranging from 0x0 to 0xFFFF. Logs outside this range
   *     cannot be printed.<br/>It is recommended that developers define and divide domains as needed within the application.
   * @param { string } tag - Specifies the log tag, which can be any string. It is recommended to identify the calling
   * class or business behavior. The recommended tag length should not exceed 31 bytes. Chinese characters are not
   * recommended as they may cause garbled text or alignment issues.
   * @param { string } format - Format string for formatted log output. The format string can contain multiple parameters,
   * each requiring a parameter type and privacy flag.<br>Privacy flags are divided into {public} and {private}, defaulting
   *     to {private}. Content marked with {public} is output in plaintext, while content marked with {private} is displayed
   *     as <private>. The privacy flag mechanism helps developers protect privacy-sensitive data.
   * @param { any[] } args - Variable-length parameter list corresponding to the format string. The number and types of
   *     parameters must match the placeholders in the format string one-to-one. When the format string does not contain
   *     placeholders, this parameter can be omitted, and only the format string itself is output.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function error(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Prints an ERROR-level log.
   *
   * @param { int } domain - Domain identifier for the log, ranging from 0x0 to 0xFFFF. Logs outside this range
   *     cannot be printed.<br/>It is recommended that developers define and divide domains as needed within the application.
   * @param { string } tag - Specifies the log tag, which can be any string. It is recommended to identify the calling
   * class or business behavior. The recommended tag length should not exceed 31 bytes. Chinese characters are not
   * recommended as they may cause garbled text or alignment issues.
   * @param { string } format - Format string for formatted log output. The format string can contain multiple parameters,
   * each requiring a parameter type and privacy flag.<br>Privacy flags are divided into {public} and {private}, defaulting
   *     to {private}. Content marked with {public} is output in plaintext, while content marked with {private} is displayed
   *     as <private>. The privacy flag mechanism helps developers protect privacy-sensitive data.
   * @param { RecordData[] } args - Variable-length parameter list corresponding to the format string. The number and types
   *     of parameters must match the placeholders in the format string one-to-one. When the format string does not contain
   *     placeholders, this parameter can be omitted, and only the format string itself is output.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function error(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Prints a FATAL-level log.
   *
   * @param { number } domain - Domain identifier for the log, ranging from 0x0 to 0xFFFF. Logs outside this range
   *     cannot be printed.<br/>It is recommended that developers define and divide domains as needed within the application.
   * @param { string } tag - Specifies the log tag, which can be any string. It is recommended to identify the calling
   * class or business behavior. The recommended tag length should not exceed 31 bytes. Chinese characters are not
   * recommended as they may cause garbled text or alignment issues.
   * @param { string } format - Format string for formatted log output. The format string can contain multiple parameters,
   * each requiring a parameter type and privacy flag.<br>Privacy flags are divided into {public} and {private}, defaulting
   *     to {private}. Content marked with {public} is output in plaintext, while content marked with {private} is displayed
   *     as <private>. The privacy flag mechanism helps developers protect privacy-sensitive data.
   * @param { any[] } args - Variable-length parameter list corresponding to the format string. The number and types of
   *     parameters must match the placeholders in the format string one-to-one. When the format string does not contain
   *     placeholders, this parameter can be omitted, and only the format string itself is output.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function fatal(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Prints a FATAL-level log.
   *
   * @param { int } domain - Domain identifier for the log, ranging from 0x0 to 0xFFFF. Logs outside this range
   *     cannot be printed.<br/>It is recommended that developers define and divide domains as needed within the application.
   * @param { string } tag - Specifies the log tag, which can be any string. It is recommended to identify the calling
   * class or business behavior. The recommended tag length should not exceed 31 bytes. Chinese characters are not
   * recommended as they may cause garbled text or alignment issues.
   * @param { string } format - Format string for formatted log output. The format string can contain multiple parameters,
   * each requiring a parameter type and privacy flag.<br>Privacy flags are divided into {public} and {private}, defaulting
   *     to {private}. Content marked with {public} is output in plaintext, while content marked with {private} is displayed
   *     as <private>. The privacy flag mechanism helps developers protect privacy-sensitive data.
   * @param { RecordData[] } args - Variable-length parameter list corresponding to the format string. The number and types
   *     of parameters must match the placeholders in the format string one-to-one. When the format string does not contain
   *     placeholders, this parameter can be omitted, and only the format string itself is output.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function fatal(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Called before printing a log to check whether a log with the specified domain identifier, tag, and level can be printed.
   *
   * @param { int } domain - Domain identifier for the log, ranging from 0x0 to 0xFFFF. Logs outside this range
   *     cannot be printed.<br/>It is recommended that developers define and divide domains as needed within the application.
   * @param { string } tag - Specifies the log tag, which can be any string. It is recommended to identify the calling
   * class or business behavior. The recommended tag length should not exceed 31 bytes. Chinese characters are not
   * recommended as they may cause garbled text or alignment issues.
   * @param { LogLevel } level - Log level.
   * @returns { boolean } Returns true if the log with the specified domain identifier, tag, and level can be printed;
   *     otherwise false.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function isLoggable(domain: int, tag: string, level: LogLevel): boolean;

  /**
   * Sets the minimum log level for application log printing to filter out lower-level logs. Used when optimizing
   * application performance or reducing interference from low-value logs to avoid redundant logs.
   *
   * > **Note:**
   * >
   * > If the set log level is lower than the [global log level](docroot://dfx/hilog.md#viewing-and-setting-log-levels),
   * the setting does not take effect.
   * >
   * > This function does not take effect in debug-version applications.
   *
   * @param { LogLevel } level - Log level.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function setMinLogLevel(level: LogLevel): void;

  /**
   * Sets the minimum log level for the current application process.
   *
   * Different preference strategies can be configured via the prefer parameter. If the strategy PREFER_CLOSE_LOG is
   * selected, it is equivalent to calling the setMinLogLevel function.
   *
   * > **Note:**
   * >
   * > This function does not take effect in debug-version applications.
   *
   * @param { LogLevel } level - Log level.
   * @param { PreferStrategy } prefer - Preference strategy.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function setLogLevel(level: LogLevel, prefer: PreferStrategy): void;

  /**
   * Sets the hilog output type.
   *
   * @param { OutputType } type - The log output type of hilog, used to set the output target of hilog logs
   *     (such as console or sandbox).
   * @returns { OutputType } Returns the previously set output type.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function setOutputType(type: OutputType): OutputType;

  /**
   * Sets the hilog output type and configures the domain ID list for output. You can choose to output only the domain IDs
   * in the list, or exclude the domain IDs in the list from output.
   *
   * @param { OutputType } type - The output type of hilog.
   * @param { Array<int> } domainIDs - Domain ID list. Each domain ID ranges from 0x0000 to 0xFFFF. Only effective for
   *     application domains.
   * @param { boolean } isExclude - Determines whether the domainIDs are excluded from the output type.
   *     <br>true means the domain IDs in the list are excluded from output; false means only the domain IDs in the list
   *     are output.
   * @returns { OutputType } Returns the previously set output type.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function setOutputTypeByDomainID(type: OutputType, domainIDs: Array<int>, isExclude: boolean): OutputType;

  /**
   * Gets the current hilog output type.
   *
   * @returns { OutputType } Returns the current hilog output type.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function getOutputType(): OutputType;

  /**
   * Returns the path of hilog logs in the sandbox. If the hilog output type is DEFAULT, an empty string is returned.
   *
   * @returns { string } The sandbox path of hilog logs.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function getOutputDir(): string;

  /**
   * Deletes all hilog logs in the sandbox.
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function clean(): void;

  /**
   * Flushes hilog logs in the sandbox to ensure logs are persisted to disk.
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function flush(): void;

  /**
   * Returns hilog sandbox log files that have been modified within the specified number of seconds.
   *
   * @param { int } latestSeconds - The time interval from now, in seconds.
   *     <br>If the value is less than 0, it is invalid and the return value is empty.
   * @returns { Array<string> } List of sandbox files that have been written within the specified time period.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function getLogFile(latestSeconds: int): Array<string>;

  /**
   * Log level.
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  enum LogLevel {
    /**
     * Detailed process records. Logs at this level can be used to analyze business processes and locate issues in detail.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    DEBUG = 3,
    /**
     * Used to record key business process nodes, which can restore the main running process of the business;
     *
     * Used to record information about expected abnormal situations, such as no network signal, login failure, etc.
     *
     * These logs should be recorded by the dominant module in the business, avoiding duplicate recording in multiple
     * called modules or low-level functions.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    INFO = 4,
    /**
     * Used to record relatively severe unexpected situations that have little impact on users. The application can
     * recover automatically or through simple operations.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    WARN = 5,
    /**
     * The application has encountered an error that affects normal function operation or user experience. Recovery is
     * possible but at a high cost, such as resetting data.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    ERROR = 6,
    /**
     * A major fatal exception indicating that the application is about to crash and the fault cannot be recovered.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    FATAL = 7
  }

  /**
   * Preference strategy.
   *
   * Example: With the global log level set to INFO, 5 logs of different levels are printed. setLogLevel is called twice
   * during the printing process:
   *
   * Since the global log starts at INFO, the first log can be printed normally.
   *
   * After setting the process minimum log level to WARN with strategy PREFER_OPEN_LOG, the effective minimum log level
   * is the global log level INFO, so both the second and third logs can be printed normally.
   *
   * After setting the process minimum log level to DEBUG with strategy PREFER_CLOSE_LOG (equivalent to
   * hilog.setMinLogLevel(hilog.LogLevel.DEBUG)), but the global log level is INFO at this time, so the fourth log does
   *     not meet the global log level and fails to print. The fifth log can be printed.
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  enum PreferStrategy {
    /**
     * Clears the setting. The effective minimum log level is the minimum level controlled by the system.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    UNSET_LOGLEVEL = 0,
    /**
     * The effective minimum log level is the larger of the newly set level and the system-controlled minimum level.
     * Suitable for scenarios that require strict restriction of log output.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    PREFER_CLOSE_LOG = 1,
    /**
     * The effective minimum log level is the smaller of the newly set level and the system-controlled minimum level.
     * Suitable for scenarios that require as much log output as possible.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    PREFER_OPEN_LOG = 2
  }

  /**
   * Enum values for hilog output types. DEFAULT and CONSOLE_ONLY are suitable for console-only output scenarios,
   * PRIVATE_SANDBOX_ONLY is suitable for privacy log storage, SHARE_SANDBOX_ONLY is suitable for scenarios requiring
   *     cloud log collection, PRIVATE_SANDBOX_WITH_CONSOLE and SHARE_SANDBOX_WITH_CONSOLE are suitable for scenarios
   *     requiring both console output and sandbox storage.
   * 
   * @enum { int }
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum OutputType {
      /**
       * Default output type. hilog outputs to console only, equivalent to CONSOLE_ONLY.
       * 
       * @syscap SystemCapability.HiviewDFX.HiLog
       * @FaAndStageModel
       * @crossplatform
       * @atomicservice
       * @since 26.0.0 dynamic&static
       */
      DEFAULT = 0,
      /**
       * hilog outputs to console only, equivalent to DEFAULT.
       * 
       * @syscap SystemCapability.HiviewDFX.HiLog
       * @FaAndStageModel
       * @crossplatform
       * @atomicservice
       * @since 26.0.0 dynamic&static
       */
      CONSOLE_ONLY = 0,
      /**
       * hilog logs are persisted to the application private sandbox. This path is only accessible by the application itself.
       * 
       * @syscap SystemCapability.HiviewDFX.HiLog
       * @FaAndStageModel
       * @crossplatform
       * @atomicservice
       * @since 26.0.0 dynamic&static
       */
      PRIVATE_SANDBOX_ONLY = 1,
      /**
       * hilog logs are persisted to the application shared sandbox. This path is accessible by both the application and
       * the system.
       * 
       * @syscap SystemCapability.HiviewDFX.HiLog
       * @FaAndStageModel
       * @crossplatform
       * @atomicservice
       * @since 26.0.0 dynamic&static
       */
      SHARE_SANDBOX_ONLY = 2,
      /**
       * Simultaneously enables CONSOLE_ONLY and PRIVATE_SANDBOX_ONLY.
       * 
       * @syscap SystemCapability.HiviewDFX.HiLog
       * @FaAndStageModel
       * @crossplatform
       * @atomicservice
       * @since 26.0.0 dynamic&static
       */
      PRIVATE_SANDBOX_WITH_CONSOLE = 3,
      /**
       * Simultaneously enables CONSOLE_ONLY and SHARE_SANDBOX_ONLY.
       * 
       * @syscap SystemCapability.HiviewDFX.HiLog
       * @FaAndStageModel
       * @crossplatform
       * @atomicservice
       * @since 26.0.0 dynamic&static
       */
      SHARE_SANDBOX_WITH_CONSOLE = 4
  }
}

export default hilog;