/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @arkts 1.1&1.2
 */

/**
 * Provides interfaces to generate system logs.
 *
 * @namespace hilog
 * @syscap SystemCapability.HiviewDFX.HiLog
 * @since 7
 */
/**
 * Provides interfaces to generate system logs.
 *
 * @namespace hilog
 * @syscap SystemCapability.HiviewDFX.HiLog
 * @crossplatform
 * @since 10
 */
/**
 * Provides interfaces to generate system logs.
 *
 * @namespace hilog
 * @syscap SystemCapability.HiviewDFX.HiLog
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace hilog {

  /**
   * Outputs debug-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Outputs debug-level logs.
   *
   * * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                            if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @since 10
   */
  /**
   * Outputs debug-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Outputs debug-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { (Object | undefined | null)[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  function debug(domain: number, tag: string, format: string, ...args: (Object | undefined | null)[]): void;

  /**
   * Outputs info-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Outputs info-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @since 10
   */
  /**
   * Outputs info-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Outputs info-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { (Object | undefined | null)[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  function info(domain: number, tag: string, format: string, ...args: (Object | undefined | null)[]): void;

  /**
   * Outputs warning-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Outputs warning-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @since 10
   */
  /**
   * Outputs warning-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Outputs warning-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { (Object | undefined | null)[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  function warn(domain: number, tag: string, format: string, ...args: (Object | undefined | null)[]): void;

  /**
   * Outputs error-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Outputs error-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @since 10
   */
  /**
   * Outputs error-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Outputs error-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { (Object | undefined | null)[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  function error(domain: number, tag: string, format: string, ...args: (Object | undefined | null)[]): void;

  /**
   * Outputs fatal-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Outputs fatal-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @since 10
   */
  /**
   * Outputs fatal-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Outputs fatal-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { (Object | undefined | null)[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  function fatal(domain: number, tag: string, format: string, ...args: (Object | undefined | null)[]): void;

  /**
   * Checks whether logs of the specified tag, and level can be printed.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { LogLevel } level log level
   * @returns { boolean }
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Checks whether logs of the specified tag, and level can be printed.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { LogLevel } level log level
   * @returns { boolean }
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function isLoggable(domain: number, tag: string, level: LogLevel): boolean;

  /**
   * Sets the lowest log level of the current application process.
   *
   * @param { LogLevel } level log level
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
   function setMinLogLevel(level: LogLevel): void;

  /**
   * Log level define
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Log level define
   *
   * @enum { number }
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @since 10
   */
  /**
   * Log level define
   *
   * @enum { number }
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum LogLevel {
    /**
     * DEBUG Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @since 7
     */
    /**
     * DEBUG Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @since 10
     */
    /**
     * DEBUG Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DEBUG = 3,
    /**
     * INFO Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @since 7
     */
    /**
     * INFO Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @since 10
     */
    /**
     * INFO Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    INFO = 4,
    /**
     * WARN Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @since 7
     */
    /**
     * WARN Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @since 10
     */
    /**
     * WARN Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    WARN = 5,
    /**
     * ERROR Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @since 7
     */
    /**
     * ERROR Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @since 10
     */
    /**
     * ERROR Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ERROR = 6,
    /**
     * FATAL Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @since 7
     */
    /**
     * FATAL Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @since 10
     */
    /**
     * FATAL Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    FATAL = 7
  }
}

export default hilog;