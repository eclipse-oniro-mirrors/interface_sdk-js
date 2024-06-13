/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit FormKit
 */

import Want from './@ohos.app.ability.Want';

/**
 * interface of formInfo.
 *
 * @namespace formInfo
 * @syscap SystemCapability.Ability.Form
 * @since 9
 */
/**
 * interface of formInfo.
 *
 * @namespace formInfo
 * @syscap SystemCapability.Ability.Form
 * @atomicservice
 * @since 11
 */
declare namespace formInfo {
  /**
   * Provides information about a form.
   *
   * @typedef FormInfo
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Provides information about a form.
   *
   * @typedef FormInfo
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11
   */
  interface FormInfo {
    /**
     * Obtains the bundle name of the application to which this form belongs.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the bundle name of the application to which this form belongs.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    bundleName: string;

    /**
     * Obtains the name of the application module to which this form belongs.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the name of the application module to which this form belongs.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    moduleName: string;

    /**
     * Obtains the class name of the ability to which this form belongs.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the class name of the ability to which this form belongs.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    abilityName: string;

    /**
     * Obtains the name of this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the name of this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    name: string;

    /**
     * Obtains the display name of this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    displayName: string;

    /**
     * Obtains the displayName resource id of this form.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    displayNameId: number;

    /**
     * Obtains the description of this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the description of this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    description: string;

    /**
     * Obtains the description id of this form.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Obtains the description id of this form.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    descriptionId: number;

    /**
     * Obtains the type of this form. Currently, JS forms are supported.
     *
     * @type { FormType }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the type of this form. Currently, JS forms are supported.
     *
     * @type { FormType }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    type: FormType;

    /**
     * Obtains the JS component name of this JS form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the JS component name of this JS form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    jsComponentName: string;

    /**
     * Obtains the color mode of this form.
     *
     * @type { ColorMode }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the color mode of this form.
     *
     * @type { ColorMode }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    colorMode: ColorMode;

    /**
     * Checks whether this form is a default form.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Checks whether this form is a default form.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    isDefault: boolean;

    /**
     * Obtains the updateEnabled.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the updateEnabled.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    updateEnabled: boolean;

    /**
     * Obtains whether notify visible of this form.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains whether notify visible of this form.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    formVisibleNotify: boolean;

    /**
     * Obtains the scheduledUpdateTime.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the scheduledUpdateTime.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    scheduledUpdateTime: string;

    /**
     * Obtains the form config ability about this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the form config ability about this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    formConfigAbility: string;

    /**
     * Obtains the updateDuration.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the updateDuration.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    updateDuration: number;

    /**
     * Obtains the default grid style of this form.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the default grid style of this form.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    defaultDimension: number;

    /**
     * Obtains the grid styles supported by this form.
     *
     * @type { Array<number> }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the grid styles supported by this form.
     *
     * @type { Array<number> }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    supportDimensions: Array<number>;

    /**
     * Obtains the custom data defined in this form.
     *
     * @type { object }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the custom data defined in this form.
     *
     * @type { Record<string, string> }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    customizeData: Record<string, string>;

    /**
     * Obtains whether this form is a dynamic form.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Obtains whether this form is a dynamic form.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    isDynamic: boolean;

    /**
     * Indicates whether the form can be set as a transparent background
     *
     * @type { boolean }
     * @default false
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    transparencyEnabled: boolean;
  }

  /**
   * Type of form.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Type of form.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11
   */
  enum FormType {
    /**
     * JS form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * JS form.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    JS = 1,

    /**
     * eTS form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * eTS form.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    eTS = 2
  }

  /**
   * Color mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Color mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11
   */
  enum ColorMode {
    /**
     * Automatic mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Automatic mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    MODE_AUTO = -1,

    /**
     * Dark mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Dark mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    MODE_DARK = 0,

    /**
     * Light mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Light mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    MODE_LIGHT = 1
  }

  /**
   * Provides state information about a form.
   *
   * @typedef FormStateInfo
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Provides state information about a form.
   *
   * @typedef FormStateInfo
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11
   */
  interface FormStateInfo {
    /**
     * Obtains the form state.
     *
     * @type { FormState }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the form state.
     *
     * @type { FormState }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    formState: FormState;

    /**
     * Obtains the want form .
     *
     * @type { Want }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the want form .
     *
     * @type { Want }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    want: Want;
  }

  /**
   * Provides state about a form.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Provides state about a form.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11
   */
  enum FormState {
    /**
     * Indicates that the form status is unknown due to an internal error.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates that the form status is unknown due to an internal error.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    UNKNOWN = -1,

    /**
     * Indicates that the form is in the default state.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates that the form is in the default state.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    DEFAULT = 0,

    /**
     * Indicates that the form is ready.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates that the form is ready.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    READY = 1
  }

  /**
   * Parameter of form.
   *
   * @enum { string }
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Parameter of form.
   *
   * @enum { string }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11
   */
  enum FormParam {
    /**
     * Indicates the key specifying the ID of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       IDENTITY_KEY: "119476135"
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the ID of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       IDENTITY_KEY: "119476135"
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    IDENTITY_KEY = 'ohos.extra.param.key.form_identity',

    /**
     * Indicates the key specifying the grid style of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       DIMENSION_KEY: FormDimension.Dimension_1_2
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the grid style of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       DIMENSION_KEY: FormDimension.Dimension_1_2
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    DIMENSION_KEY = 'ohos.extra.param.key.form_dimension',

    /**
     * Indicates the key specifying the name of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       NAME_KEY: "formName"
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the name of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       NAME_KEY: "formName"
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    NAME_KEY = 'ohos.extra.param.key.form_name',

    /**
     * Indicates the key specifying the name of the module to which the form to be obtained belongs, which is
     * represented as
     * want: {
     *   "parameters": {
     *       MODULE_NAME_KEY: "formEntry"
     *    }
     * }
     * This constant is mandatory.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the name of the module to which the form to be obtained belongs, which is
     * represented as
     * want: {
     *   "parameters": {
     *       MODULE_NAME_KEY: "formEntry"
     *    }
     * }
     * This constant is mandatory.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    MODULE_NAME_KEY = 'ohos.extra.param.key.module_name',

    /**
     * Indicates the key specifying the width of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       WIDTH_KEY: 800
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the width of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       WIDTH_KEY: 800
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    WIDTH_KEY = 'ohos.extra.param.key.form_width',

    /**
     * Indicates the key specifying the height of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       HEIGHT_KEY: 400
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the height of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       HEIGHT_KEY: 400
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    HEIGHT_KEY = 'ohos.extra.param.key.form_height',

    /**
     * Indicates the key specifying whether a form is temporary, which is represented as
     * want: {
     *   "parameters": {
     *       TEMPORARY_KEY: true
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying whether a form is temporary, which is represented as
     * want: {
     *   "parameters": {
     *       TEMPORARY_KEY: true
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    TEMPORARY_KEY = 'ohos.extra.param.key.form_temporary',

    /**
     * Indicates the key specifying the name of the bundle to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       BUNDLE_NAME_KEY: "bundleName"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the name of the bundle to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       BUNDLE_NAME_KEY: "bundleName"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    BUNDLE_NAME_KEY = 'ohos.extra.param.key.bundle_name',

    /**
     * Indicates the key specifying the name of the ability to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       ABILITY_NAME_KEY: "abilityName"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the name of the ability to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       ABILITY_NAME_KEY: "abilityName"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    ABILITY_NAME_KEY = 'ohos.extra.param.key.ability_name',

    /**
     * Indicates the key specifying whether a form type is theme, which is represented as
     * want: {
     *   "parameters": {
     *       THEME_KEY: true
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    THEME_KEY = 'ohos.extra.param.key.form_is_theme',

    /**
     * Indicates the key specifying the the device ID, which is represented as
     * want: {
     *   "parameters": {
     *       DEVICE_ID_KEY : "EFC11C0C53628D8CC2F8CB5052477E130D075917034613B9884C55CD22B3DEF2"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 9
     */
    DEVICE_ID_KEY = 'ohos.extra.param.key.device_id',

    /**
     * Indicates the key specifying the launch reason of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       LAUNCH_REASON_KEY: LaunchReason.FORM_DEFAULT
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Indicates the key specifying the launch reason of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       LAUNCH_REASON_KEY: LaunchReason.FORM_DEFAULT
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    LAUNCH_REASON_KEY = 'ohos.extra.param.key.form_launch_reason',

    /**
     * Indicates the key specifying the custom data of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       PARAM_FORM_CUSTOMIZE_KEY: {
     *          "key": "userData"
     *       }
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Indicates the key specifying the custom data of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       PARAM_FORM_CUSTOMIZE_KEY: {
     *          "key": "userData"
     *       }
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    PARAM_FORM_CUSTOMIZE_KEY = 'ohos.extra.param.key.form_customize',

    /**
     * Indicates the key specifying the form location, which is represented as
     * want: {
     *   "parameters": {
     *       FORM_LOCATION_KEY: FormLocation.DESKTOP
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 12
     */
    FORM_LOCATION_KEY = 'ohos.extra.param.key.form_location',

    /**
     * Indicates the key specifying the form rendering mode, which is represented as
     * want: {
     *   "parameters": {
     *       FORM_RENDERING_MODE_KEY: FormRenderingMode.SINGLE_COLOR
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 11
     */
    /**
     * Indicates the key specifying the form rendering mode, which is represented as
     * want: {
     *   "parameters": {
     *       FORM_RENDERING_MODE_KEY: FormRenderingMode.SINGLE_COLOR
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12
     */
    FORM_RENDERING_MODE_KEY = 'ohos.extra.param.key.form_rendering_mode',

    /**
     * Indicates the key specifying the inverse of the host background color, which is represented as
     * want: {
     *   "parameters": {
     *       HOST_BG_INVERSE_COLOR_KEY: "#FF000000"
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12
     */
    HOST_BG_INVERSE_COLOR_KEY = 'ohos.extra.param.key.host_bg_inverse_color',

    /**
     * Indicates the key specifying the user granted permission name, which is represented as
     * want: {
     *   "parameters": {
     *       FORM_PERMISSION_NAME_KEY: "permissionName"
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12
     */
    FORM_PERMISSION_NAME_KEY = 'ohos.extra.param.key.permission_name',

    /**
     * Indicates the key specifying whether the user granted, which is represented as
     * want: {
     *   "parameters": {
     *       FORM_PERMISSION_GRANTED_KEY: true
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12
     */
    FORM_PERMISSION_GRANTED_KEY = 'ohos.extra.param.key.permission_granted',
  }

  /**
   * The optional options used as filters to ask
   * getFormsInfo to return formInfos from only forms that match the options.
   *
   * @typedef FormInfoFilter
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * The optional options used as filters to ask
   * getFormsInfo to return formInfos from only forms that match the options.
   *
   * @typedef FormInfoFilter
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11
   */
  interface FormInfoFilter {
    /**
     * optional bundleName that used to ask getFormsInfo to return
     * form infos with the same bundleName.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    bundleName?: string;

    /**
     * optional moduleName that used to ask getFormsInfo to return
     * form infos with the same moduleName.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * optional moduleName that used to ask getFormsInfo to return
     * form infos with the same moduleName.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    moduleName?: string;

    /**
     * optional supportedDimensions that used to ask getFormsInfo to return
     * form infos with the same supportedDimensions.
     *
     * @type { ?Array<number> }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    supportedDimensions?: Array<number>;
  }

  /**
   * Defines the FormDimension enum.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Defines the FormDimension enum.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11
   */
  enum FormDimension {
    /**
     * 1 x 2 form
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * 1 x 2 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    Dimension_1_2 = 1,

    /**
     * 2 x 2 form
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * 2 x 2 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    Dimension_2_2,

    /**
     * 2 x 4 form
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * 2 x 4 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    Dimension_2_4,

    /**
     * 4 x 4 form
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * 4 x 4 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    Dimension_4_4,

    /**
     * 2 x 1 form
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * 2 x 1 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    Dimension_2_1,

    /**
     * 1 x 1 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    DIMENSION_1_1,

    /**
     * 6 x 4 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12
     */
    DIMENSION_6_4,
  }
  /**
   * The visibility of a form.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * The visibility of a form.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11
   */
  enum VisibilityType {
    /**
     * Indicates the type of the form type is unknown.
     * Often used as a condition variable in function OnVisibilityChange to specify actions only on forms that are
     * changing to unknown.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Indicates the type of the form type is unknown.
     * Often used as a condition variable in function OnVisibilityChange to specify actions only on forms that are
     * changing to unknown.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    UNKNOWN = 0,
    /**
     * Indicates the type of the form is visible.
     * Often used as a condition variable in function OnVisibilityChange to specify actions only on forms that are
     * changing to visible.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the type of the form is visible.
     * Often used as a condition variable in function OnVisibilityChange to specify actions only on forms that are
     * changing to visible.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    FORM_VISIBLE = 1,
    /**
     * Indicates the type of the form is invisible.
     * Often used as a condition variable in function OnVisibilityChange to specify actions only on forms that are
     * changing to invisible.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the type of the form is invisible.
     * Often used as a condition variable in function OnVisibilityChange to specify actions only on forms that are
     * changing to invisible.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    FORM_INVISIBLE
  }

  /**
   * Indicates the launch reason of a form.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @since 10
   */
  /**
   * Indicates the launch reason of a form.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11
   */
  enum LaunchReason {
    /**
     * Indicates the launch reason of a form is default.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Indicates the launch reason of a form is default.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    FORM_DEFAULT = 1,
    /**
     * Indicates the launch reason of a form is share.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Indicates the launch reason of a form is share.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11
     */
    FORM_SHARE
  }

  /**
   * The result of publish form.
   *
   * @typedef PublishFormResult
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  interface PublishFormResult {
    /**
     * The error code.
     *
     * @type { PublishFormErrorCode }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12
     */
    code: PublishFormErrorCode;

    /**
     * The message.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12
     */
    message: string;
  }

  /**
   * The error code of publish form.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  enum PublishFormErrorCode {
    /**
     * Publish form success.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12
     */
    SUCCESS,

    /**
     * Host has no space to publish form.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12
     */
    NO_SPACE,

    /**
     * Check param failed.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12
     */
    PARAM_ERROR,

    /**
     * Internal error occurs during form processing.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12
     */
    INTERNAL_ERROR,
  }

  /**
   * Information about a running form.
   *
   * @typedef FormProviderFilter
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  interface FormProviderFilter {
    /**
     * Obtains the bundle name of the provider application.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    bundleName: string;

    /**
     * Obtains the form name of the provider application form.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    formName?: string;

    /**
     * Obtains the module name of the provider application module.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    moduleName?: string;

    /**
     * Obtains the ability name of the provider application module.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    abilityName?: string;

    /**
     * Indicates whether to include unused form.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    isUnusedIncluded?: boolean;
  }

  /**
   * The class of a running form information.
   *
   * @typedef RunningFormInfo
   * @syscap SystemCapability.Ability.Form
   * @systemapi hide this for inner system use
   * @since 10
   */
  interface RunningFormInfo {
    /**
     * Obtains the id of the this form.
     *
     * @type { string }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    readonly formId: string;

    /**
     * Obtains the bundle name of the application to which this form belongs.
     *
     * @type { string }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    readonly bundleName: string;

    /**
     * Obtains the bundle name of the form host application.
     *
     * @type { string }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    readonly hostBundleName: string;

    /**
     * The location of this form.
     *
     * @type { FormLocation }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    readonly formLocation: FormLocation;

    /**
     * Obtains the visibility of this form.
     *
     * @type { VisibilityType }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    readonly visibilityType: VisibilityType;

    /**
     * Obtains the name of the application module to which this form belongs.
     *
     * @type { string }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    readonly moduleName: string;

    /**
     * Obtains the class name of the ability to which this form belongs.
     *
     * @type { string }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    readonly abilityName: string;

    /**
     * Obtains the name of this form.
     *
     * @type { string }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    readonly formName: string;

    /**
     * Obtains the grid style of this form.
     *
     * @type { number }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    readonly dimension: number;

    /**
     * Obtains the stage of form use.
     *
     * @type { FormUsageState }
     * @default FormUsageState.USED
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 11
     */
    readonly formUsageState: FormUsageState;

    /**
     * Obtains the description of this form.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 11
     */
    readonly formDescription: string;

    /**
     * Obtains the extra data of the this form.
     *
     * @type { ?Record<string, Object> }
     * @default -
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    readonly extraData?: Record<string, Object>;
  }

  /**
   * The stage of form use.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11
   */
  enum FormUsageState {
    /**
     * Indicates the stage of the form is used.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 11
     */
    USED = 0,
    /**
     * Indicates the stage of the form is unused.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 11
     */
    UNUSED = 1,
  }

  /**
   * Defines the FormLocation enum.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 12
   */
  enum FormLocation {
    /**
     * Form is on the other location.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    OTHER = -1,

    /**
     * Form is on the desktop
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    DESKTOP = 0,

    /**
     * Form is on the form center.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    FORM_CENTER = 1,

    /**
     * Form is on the form manager.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    FORM_MANAGER = 2,

    /**
     * Form is on the negative screen.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    NEGATIVE_SCREEN = 3,

    /**
     * Form is on the form center of negative screen.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    FORM_CENTER_NEGATIVE_SCREEN = 4,

    /**
     * Form is on the form manager of negative screen.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    FORM_MANAGER_NEGATIVE_SCREEN = 5,

    /**
     * Form is on the screen lock.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    SCREEN_LOCK = 6,

    /**
     * Form is on the ai suggestion.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    AI_SUGGESTION = 7,
  }
}
export default formInfo;
