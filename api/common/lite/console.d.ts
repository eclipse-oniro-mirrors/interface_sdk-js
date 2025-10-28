/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

/**
 * Provide console
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 3 dynamiconly
 */
export declare class console {
  /**
   * Prints "debug" logs.
   * 
   * @param { string } message - Text to print
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3 dynamiconly
   */
  static debug(message: string): void;

  /**
   * Prints "log" logs.
   * 
   * @param { string } message - Text to print
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3 dynamiconly
   */
  static log(message: string): void;

  /**
   * Prints "info" logs.
   * 
   * @param { string } message - Text to print
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3 dynamiconly
   */
  static info(message: string): void;

  /**
   * Prints "warn" logs.
   * 
   * @param { string } message - Text to print
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3 dynamiconly
   */
  static warn(message: string): void;

  /**
   * Prints "error" logs.
   * 
   * @param { string } message - Text to print
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3 dynamiconly
   */
  static error(message: string): void;
}
