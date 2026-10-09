/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file Defines WithTheme component.
 * @kit ArkUI
 */

/**
 * Customizes the color scheme of components within the **WithTheme** scope. The specific color items are configured
 * through the **CustomColors** interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type CustomTheme = import('../api/@ohos.arkui.theme').CustomTheme;

/**
 * Sets the theme colors and dark/light mode for components within the **WithTheme** scope.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface WithThemeOptions {
  /**
   * Used to set the custom theme colors of components within the scope of WithTheme.
   *
   * Default value: **undefined**, which means the default colors follow the system
   * [token default styles](docroot://ui/theme_skinning.md#system-default-token-color-values).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  theme?: CustomTheme;

  /**
   * Used to specify the dark/light mode of the component colors within the scope of WithTheme. Value rules:
   * **ThemeColorMode.SYSTEM** follows the system dark/light mode settings, **ThemeColorMode.DARK** forces the dark
   * mode, and **ThemeColorMode.LIGHT** forces the light mode. When setting the dark/light mode, a dark.json resource
   * file must be added for the setting to take effect.
   *
   * Default value: **ThemeColorMode.SYSTEM**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  colorMode?: ThemeColorMode;
}

/**
 * Define the function of WithThemeInterface.
 *
 * @param { WithThemeOptions } options
 * @returns { WithThemeAttribute } withThemeAttribute object
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type WithThemeInterface = (options: WithThemeOptions) => WithThemeAttribute;

/**
 * The [universal attributes]{@link ./common} are not supported.
 *
 * The [universal events]{@link ./common} are not supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class WithThemeAttribute {}

/**
 * Defines WithTheme Logic Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare const WithTheme: WithThemeInterface;

/**
 * Defines WithTheme Logic Component Instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare const WithThemeInstance: WithThemeAttribute;