/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import Want from './@ohos.app.ability.Want';
import wantConstant from './@ohos.app.ability.wantConstant';
import type { AsyncCallback } from './@ohos.base';
import type insightIntent from './@ohos.app.ability.insightIntent';

/**
 * Insight intent driver.
 *
 * @namespace insightIntentDriver
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @StageModelOnly
 * @since 11 dynamic
 * @since 20 static
 */
declare namespace insightIntentDriver {
  /**
   * Param when execute insight intent.
   *
   * @typedef ExecuteParam
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   * @since 20 static
   */
  interface ExecuteParam {
    /**
     * Indicates the bundle name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamic
     * @since 20 static
     */
    bundleName: string;

    /**
     * Indicates the module name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamic
     * @since 20 static
     */
    moduleName: string;

    /**
     * Indicates the ability name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamic
     * @since 20 static
     */
    abilityName: string;

    /**
     * Indicates the insight intent name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamic
     * @since 20 static
     */
    insightIntentName: string;

    /**
     * Indicates the insight intent param.
     *
     * @type { Record<string, Object> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamic
     * @since 20 static
     */
    insightIntentParam: Record<string, Object>;

    /**
     * Indicates the execute mode.
     *
     * @type { insightIntent.ExecuteMode }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamic
     * @since 20 static
     */
    executeMode: insightIntent.ExecuteMode;

    /**
     * Indicates the display Id, only works when executeMode is UIAbility foreground.
     *
     * @type { ?long }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 12 dynamic
     * @since 20 static
     */
    displayId?: long;

    /**
     * Indicates the URIs will be authorized to the insight intent executor.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 20 static
     */
    uris?: Array<string>;

    /**
     * Indicates the URIs read and write permissions which consistent with {@link Want#flags},
     * flags must be one of {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION},
     * {@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION},
     * {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION}|
     * {@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION}.
     *
     * @type { ?int }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 20 static
     */
    flags?: int;
  }

  /**
   * Execute insight intent.
   * If the caller application is in foreground, you can use this method to execute insight intent;
   * If the caller application is in background, you need to apply for permission: ohos.permission.START_ABILITIES_FROM_BACKGROUND;
   * If the execute mode is UI_ABILITY_BACKGROUND, you need to apply for permission: ohos.permission.ABILITY_BACKGROUND_COMMUNICATION.
   *
   * @permission ohos.permission.EXECUTE_INSIGHT_INTENT
   * @param { ExecuteParam } param - Execute parameter.
   * @param { AsyncCallback<insightIntent.ExecuteResult> } callback - The callback of executeIntent.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   * @since 20 static
   */
  function execute(param: ExecuteParam, callback: AsyncCallback<insightIntent.ExecuteResult>): void;

  /**
   * Execute insight intent.
   * If the caller application is in foreground, you can use this method to execute insight intent;
   * If the caller application is in background, you need to apply for permission: ohos.permission.START_ABILITIES_FROM_BACKGROUND;
   * If the execute mode is UI_ABILITY_BACKGROUND, you need to apply for permission: ohos.permission.ABILITY_BACKGROUND_COMMUNICATION.
   *
   * @permission ohos.permission.EXECUTE_INSIGHT_INTENT
   * @param { ExecuteParam } param - Execute parameter.
   * @returns { Promise<insightIntent.ExecuteResult> } Returns the execute result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   * @since 20 static
   */
  function execute(param: ExecuteParam): Promise<insightIntent.ExecuteResult>;

  /**
   * Enum for intent type.
   *
   * @enum { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  enum InsightIntentType {
    /**
     * Link insight intent.
     * {@link InsightIntentDecorator#InsightIntentLink}
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    LINK = '@InsightIntentLink',

    /**
     * Page insight intent.
     * {@link InsightIntentDecorator#InsightIntentPage}
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    PAGE = '@InsightIntentPage',

    /**
     * Entry insight intent.
     * {@link InsightIntentDecorator#InsightIntentEntry}
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    ENTRY = '@InsightIntentEntry',

    /**
     * Function insight intent.
     * {@link InsightIntentDecorator#InsightIntentFunction}
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    FUNCTION = '@InsightIntentFunctionMethod',

    /**
     * Form insight intent.
     * {@link InsightIntentDecorator#InsightIntentForm}
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    FORM = '@InsightIntentForm',
  }
  
  /**
   * The insight intent information.
   *
   * @interface InsightIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  interface InsightIntentInfo {
    /**
     * The bundle name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly bundleName: string;

    /**
     * The module name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly moduleName: string;

    /**
     * The intent name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly intentName: string;

    /**
     * The intent domain.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly domain: string;

    /**
     * The intent version.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly intentVersion: string;

    /**
     * The intent display name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly displayName: string;

    /**
     * The intent display description.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly displayDescription: string;

    /**
     * The intent schema.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly schema: string;

    /**
     * The intent icon.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly icon: string;

    /**
     * The intent large language model description.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly llmDescription: string;

    /**
     * The intent keywords.
     *
     * @type { string[] }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly keywords: string[];

    /**
     * The intent type.
     *
     * @type { InsightIntentType }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly intentType: InsightIntentType;

    /**
     * The sub intent information.
     * If the intentType is "@InsightIntentLink", subIntentInfo is a LinkIntentInfo.
     * If the intentType is "@InsightIntentPage", subIntentInfo is a PageIntentInfo.
     * If the intentType is "@InsightIntentFunctionMethod", subIntentInfo is a FunctionIntentInfo.
     * If the intentType is "@InsightIntentForm", subIntentInfo is a FormIntentInfo.
     * If the intentType is "@InsightIntentEntry", subIntentInfo is a EntryIntentInfo.
     *
     * @type { LinkIntentInfo | PageIntentInfo | FunctionIntentInfo | FormIntentInfo | EntryIntentInfo }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly subIntentInfo: LinkIntentInfo | PageIntentInfo | FunctionIntentInfo | FormIntentInfo | EntryIntentInfo;

    /**
     * The insight intent parameters.
     *
     * @type { Record<string, Object> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly parameters: Record<string, Object>;

    /**
     * The type definition of the result returned by intent call.
     *
     * @type { Record<string, Object> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly result: Record<string, Object>;

    /**
     * The entity informations.
     *
     * @type { Array<EntityInfo> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly entities: Array<EntityInfo>;
  }

  /**
   * The link intent information.
   *
   * @interface LinkIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  interface LinkIntentInfo {
    /**
     * The uri.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly uri: string;
  }

  /**
   * The page intent information.
   *
   * @interface LinkIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  interface PageIntentInfo {
    /**
     * The uiability.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly uiAbility: string;

    /**
     * The page path.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly pagePath: string;

    /**
     * The navigationId.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly navigationId: string;

    /**
     * The navigation destination name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly navDestinationName: string;
  }

  /**
   * The function intent information.
   *
   * @interface FunctionIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  interface FunctionIntentInfo {}

  /**
   * The form intent information.
   *
   * @interface FormIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  interface FormIntentInfo {
    /**
     * The form extension ability name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly abilityName: string;

    /**
     * The form name of the form extension ability.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly formName: string;
  }

  /**
   * The form intent information.
   *
   * @interface EntryIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  interface EntryIntentInfo {
    /**
     * The ability name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly abilityName: string;

    /**
     * The execute mode.
     *
     * @type { insightIntent.ExecuteMode[] }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly executeMode: insightIntent.ExecuteMode[];
  }

  /**
   * Enum for get insight intent flag.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  enum GetInsightIntentFlag {
    /**
     * Get full insight intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    GET_FULL_INSIGHT_INTENT = 0x00000001,

    /**
     * Get summary insight intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    GET_SUMMARY_INSIGHT_INTENT = 0x00000002,

    /**
     * Get entities info.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    GET_ENTITY_INFO = 0x00000004,
  }

  /**
   * The entity information.
   *
   * @interface EntityInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  interface EntityInfo {
    /**
     * The entity class name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly className: string;

    /**
     * The entity Id.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly entityId: string;

    /**
     * The entity category.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly entityCategory: string;

    /**
     * The parameters of intent entity.
     *
     * @type { Record<string, Object> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly parameters: Record<string, Object>;

    /**
     * The entity class name of parent.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly parentClassName: string;
  }

  /**
   * Get all insight intent information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { number } intentFlags - The flags of get insight intent information.
   * @returns { Promise<Array<InsightIntentInfo>> } Returns the insight intent information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module. 
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  function getAllInsightIntentInfo(intentFlags: number): Promise<Array<InsightIntentInfo>>;

  /**
   * Get insight intent information by bundle name.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - The specified bundle name.
   * @param { number } intentFlags - The flags of get insight intent information.
   * @returns { Promise<Array<InsightIntentInfo>> } Returns the insight intent information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module. 
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  function getInsightIntentInfoByBundleName(bundleName: string, intentFlags: number): Promise<Array<InsightIntentInfo>>;

  /**
   * Get insight intent information by intent name.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - The specified bundle name.
   * @param { string } moduleName - The specified module name.
   * @param { string } intentName - The specified intent name.
   * @param { number } intentFlags - The flags of get insight intent information.
   * @returns { Promise<InsightIntentInfo> } Returns the insight intent information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module. 
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  function getInsightIntentInfoByIntentName(bundleName: string, moduleName: string, intentName: string, intentFlags: number): Promise<InsightIntentInfo>;
}

export default insightIntentDriver;
