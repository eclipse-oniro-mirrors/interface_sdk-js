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
 * @file UI Appearance
 * @kit ArkUI
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * This module provides basic capabilities for obtaining system appearance configurations, including color mode (dark/
 * light) settings, font size scale factors, and font weight scale factors. It is applicable to scenarios where the
 * application UI style needs to be dynamically adjusted based on the system appearance configuration (such as dark/
 * light mode switching), as well as adapting to the system font size and font weight scale settings. This helps
 * applications maintain consistency with the system appearance and improves user experience.
 *
 * @syscap SystemCapability.ArkUI.UiAppearance
 * @systemapi hide this for inner system use [since 10 - 19]
 * @publicapi [since 20]
 * @crossplatform [since 26.0.0]
 * @since 10 dynamic
 */
declare namespace uiAppearance {
  /**
   * Enumerates the color modes, used to configure the dark or light mode of the system.
   *
   * | Name| Value| Description|
   * | -- | -- | -- |
   * | ALWAYS_DARK | 0 | The system is always in dark mode.|
   * | ALWAYS_LIGHT | 1 | The system is always in light mode.|
   *
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use [since 10 - 19]
   * @publicapi [since 20]
   * @crossplatform [since 26.0.0]
   * @since 10 dynamic
   */
  enum DarkMode {
    /**
     * Always display with dark mode.
     *
     * @syscap SystemCapability.ArkUI.UiAppearance
     * @systemapi hide this for inner system use [since 10 - 19]
     * @publicapi [since 20]
     * @crossplatform [since 26.0.0]
     * @since 10 dynamic
     */
    ALWAYS_DARK = 0,

    /**
     * Always display with light mode.
     *
     * @syscap SystemCapability.ArkUI.UiAppearance
     * @systemapi hide this for inner system use [since 10 - 19]
     * @publicapi [since 20]
     * @crossplatform [since 26.0.0]
     * @since 10 dynamic
     */
    ALWAYS_LIGHT = 1
  }

  /**
   * Sets the system color mode. This API uses an asynchronous callback to return the result.
   *
   * **Permission required**: ohos.permission.UPDATE_CONFIGURATION
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
   * @since 10 dynamic
   */
  function setDarkMode(mode: DarkMode, callback: AsyncCallback<void>): void;

  /**
   * Sets the system color mode. This API uses a promise to return the result.
   *
   * **Permission required**: ohos.permission.UPDATE_CONFIGURATION
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { DarkMode } mode - indicates the dark-mode to set
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use
   * @since 10 dynamic
   */
  function setDarkMode(mode: DarkMode): Promise<void>;

  /**
   * Obtains the current system color mode configuration. This API is applicable to scenarios where the application UI
   * theme needs to be dynamically adapted based on the system appearance mode, such as implementing automatic switching
   * between dark and light theme styles within the application.
   *
   * <!--Del-->
   *
   * > **NOTE**
   * >
   * > This API is a system API in API version 19 and earlier. Using this API requires the
   * > [ohos.permission.UPDATE_CONFIGURATION](docroot://security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration)
   * > permission.
   *
   * <!--DelEnd-->
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION [since 10 - 19]
   * @returns { DarkMode } current dark-mode.
   * @throws { BusinessError } 201 - Permission denied. [since 10 - 19]
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use [since 10 - 19]
   * @publicapi [since 20]
   * @crossplatform [since 26.0.0]
   * @since 10 dynamic
   */
  function getDarkMode(): DarkMode;

  /**
   * Sets the system font scale.
   *
   * **Permission required**: ohos.permission.UPDATE_CONFIGURATION
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { number } fontScale - indicates the font-scale to set
   * @returns { Promise<void> } the promise returned by the function
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use
   * @since 12 dynamic
   */
  function setFontScale(fontScale: number): Promise<void>;

  /**
   * Obtains the current font size scale factor. This scale is the ratio of the font size configured by the user in
   * system settings to the default font size. For the value range, refer to the system font size settings. You can
   * adjust the font size within the application based on this scale factor to accommodate the user's font size
   * preferences.
   *
   * <!--Del-->
   *
   * > **NOTE**
   * >
   * > This API is a system API in API version 19 and earlier. Using this API requires the
   * > [ohos.permission.UPDATE_CONFIGURATION](docroot://security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration)
   * > permission.
   *
   * <!--DelEnd-->
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION [since 12 - 19]
   * @returns { number } current font-scale.
   * @throws { BusinessError } 201 - Permission denied. [since 12 - 19]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12 - 19]
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use [since 12 - 19]
   * @publicapi [since 20]
   * @crossplatform [since 26.0.0]
   * @since 12 dynamic
   */
  function getFontScale(): number;

  /**
   * Sets the system font weight scale.
   *
   * **Permission required**: ohos.permission.UPDATE_CONFIGURATION
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { number } fontWeightScale - indicates the font-weight-scale to set
   * @returns { Promise<void> } the promise returned by the function
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use
   * @since 12 dynamic
   */
  function setFontWeightScale(fontWeightScale: number): Promise<void>;

  /**
   * Obtains the current font weight scale factor. This scale is the ratio of the font weight configured by the user in
   * system settings to the default font weight. For the value range, refer to the system font weight settings. You can
   * adjust the font weight within the application based on this scale factor to accommodate the user's font weight
   * preferences.
   *
   * <!--Del-->
   *
   * > **NOTE**
   * >
   * > This API is a system API in API version 19 and earlier. Using this API requires the
   * > [ohos.permission.UPDATE_CONFIGURATION](docroot://security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration)
   * > permission.
   *
   * <!--DelEnd-->
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION [since 12 - 19]
   * @returns { number } current font-weight-scale.
   * @throws { BusinessError } 201 - Permission denied. [since 12 - 19]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12 - 19]
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   */
  function getFontWeightScale(): number;
}
export default uiAppearance;