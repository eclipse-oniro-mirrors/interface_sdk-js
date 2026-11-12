
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 用户界面外观
 * @file
 用户界面外观
 * @kit ArkUI
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * 用户界面外观提供管理系统外观的一些基础能力，目前仅包括深浅色模式配置。
 * 
 * > **说明：**
 * >
 * > 从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > 当前页面仅包含本模块的系统接口，其他公开接口参见[@ohos.uiAppearance (用户界面外观)]{@link @ohos.uiAppearance:uiAppearance}。
 *
 * @syscap SystemCapability.ArkUI.UiAppearance
 * @since 23 static
 */
declare namespace uiAppearance {
  /**
   * 深浅色模式枚举，用于配置系统的深色或浅色模式。
   *
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @since 23 static
   */
  enum DarkMode {
    /**
     * 表示系统始终为深色模式。
     *
     * @syscap SystemCapability.ArkUI.UiAppearance
     * @since 23 static
     */
    ALWAYS_DARK = 0,

    /**
     * 表示系统始终为浅色模式。
     *
     * @syscap SystemCapability.ArkUI.UiAppearance
     * @since 23 static
     */
    ALWAYS_LIGHT = 1
  }

  /**
   * 设置系统深色模式。使用callback异步回调。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { DarkMode } mode - indicates the dark-mode to set
   * @param { AsyncCallback<void> } callback - the callback of setDarkMode
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use
   * @since 23 static
   */
  function setDarkMode(mode: DarkMode, callback: AsyncCallback<void>): void;

  /**
   * 设置系统深色模式。使用Promise异步回调。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { DarkMode } mode - indicates the dark-mode to set
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use
   * @since 23 static
   */
  function setDarkMode(mode: DarkMode): Promise<void>;

  /**
   * 获取系统当前的深浅色模式配置。
   *
   * @returns { DarkMode } 系统当前的深浅色模式配置。
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @since 23 static
   */
  function getDarkMode(): DarkMode;

  /**
   * 设置系统字体大小。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { double } fontScale - indicates the font-scale to set
   * @returns { Promise<void> } the promise returned by the function
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use
   * @since 23 static
   */
  function setFontScale(fontScale: double): Promise<void>;

  /**
   * 获取系统当前的字体大小缩放比例。
   *
   * @returns { double } 系统当前的字体大小缩放比例。
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @since 23 static
   */
  function getFontScale(): double;

  /**
   * 设置系统字体粗细。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { double } fontWeightScale - indicates the font-weight-scale to set
   * @returns { Promise<void> } the promise returned by the function
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use
   * @since 23 static
   */
  function setFontWeightScale(fontWeightScale: double): Promise<void>;

  /**
   * 获取系统当前的字体粗细缩放比例。
   *
   * @returns { double } 系统当前的字体粗细缩放比例。
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @since 23 static
   */
  function getFontWeightScale(): double;
}
export default uiAppearance;