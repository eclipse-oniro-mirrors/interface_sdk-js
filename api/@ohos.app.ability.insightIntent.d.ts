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
 * @file Basic Definitions of InsightIntent Framework
 * @kit AbilityKit
 */

import Want from './@ohos.app.ability.Want';
import type wantConstant from './@ohos.app.ability.wantConstant';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * This module provides basic definitions of the
 * [InsightIntent framework](docroot://application-models/insight-intent-overview.md).
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace insightIntent {
  /**
   * Intent execution mode. Indicates the mode passed when a system entry triggers intent execution. The execution modes
   * supported by each intent are defined during intent development.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum ExecuteMode {
    /**
     * Display a UIAbility in the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    UI_ABILITY_FOREGROUND = 0,

    /**
     * Start a UIAbility in the background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    UI_ABILITY_BACKGROUND = 1,

    /**
     * Start a UIExtensionAbility.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    UI_EXTENSION_ABILITY = 2,

    /**
     * Starts a ServiceExtensionAbility.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    SERVICE_EXTENSION_ABILITY = 3
  }

  /**
   * Defines the base information of the interaction UI to be displayed after the current intent execution completes.
   * This is a base class. Use its subclasses such as {@link InteractionModalUIExtension} in practice.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface InteractionUI {
    /**
     * Type of the interaction UI.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    interactionUIType: string;
  }

  /**
   * Defines the information of the modal UIExtension to be displayed as the interaction UI after the current
   * intent execution completes. Does not support distributed scenarios.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface InteractionModalUIExtension extends InteractionUI {
    /**
     * Type of the interaction UI. The value is fixed to 'MODAL_UIEXTENSION'.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    interactionUIType: 'MODAL_UIEXTENSION';

    /**
     * Bundle name of the target UIExtension ability.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    bundleName: string;

    /**
     * Module name of the target UIExtension ability.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    moduleName: string;

    /**
     * Ability name of the target UIExtension ability.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    abilityName: string;

    /**
     * Type of the UIExtension ability.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    uiExtensionType: string;

    /**
     * URI information passed to the target UIExtension ability for data processing.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    uri: string;

    /**
     * Parameters passed to the target UIExtension ability.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic
     */
    parameters: Record<string, Object>;

    /**
     * Parameters passed to the target UIExtension ability.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 static
     */
    parameters: Record<string, RecordData>;
  }

  /**
   * Defines the information of the Text to be displayed as the interaction UI after the current
   * intent execution completes. Does not support distributed scenarios.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface InteractionText extends InteractionUI {
    /**
     * Type of the interaction UI. The value is fixed to 'TEXT'.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    interactionUIType: 'TEXT';

    /**
     * Parameters passed to the target TEXT.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic
     */
    parameters: Record<string, Object>;

    /**
     * Parameters passed to the target TEXT.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 static
     */
    parameters: Record<string, RecordData>;

    /**
     * Buttons passed to the target TEXT.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    buttons?: Array<string>;
  }

  /**
   * Defines the interaction information returned after the current intent execution completes, including
   * the next intent to be triggered and the interaction UI to be displayed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface InteractionInfo {
    /**
     * Information of the interaction UI to be displayed after the current intent execution completes.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    interactionUI?: InteractionUI;
  }

  /**
   * Return result of intent execution.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface ExecuteResult {
    /**
     * Error code returned by the intent execution, defined by the developer.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    code: int;

    /**
     * Result data returned by the intent execution, typically containing information to be passed back to the system
     * entry point.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    result?: Record<string, Object>;

    /**
     * Indicates execute result.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 23 static
     */
    result?: Record<string, RecordData>;

    /**
     * List of URIs returned by the intent execution. This field must be used together with the **flags** field to grant
     * the corresponding permissions for the URI list to the system entry point.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    uris?: Array<string>;

    /**
     * Permissions to be granted to the system entry point for the URI list returned by the intent execution.
     *
     * **NOTE**
     *
     * This parameter supports only FLAG_AUTH_READ_URI_PERMISSION, FLAG_AUTH_WRITE_URI_PERMISSION, and
     * FLAG_AUTH_READ_URI_PERMISSION|FLAG_AUTH_WRITE_URI_PERMISSION. For details about the permissions, see
     * [Flags]{@link @ohos.app.ability.wantConstant:wantConstant.Flags}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    flags?: int;

    /**
     * Interactive information returned after intent execution.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    interactionInfo?: InteractionInfo;
  }

  /**
   * Defines the struct of an intent entity. It represents key information objects involved during intent execution,
   * including intent parameters and execution results.
   *
   * You can define intent entities by inheriting this class. The child class must be decorated with
   * [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity)
   * .
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  interface IntentEntity {
    /**
     * ID of the intent entity.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    entityId: string;
  }

  /**
   * Defines the struct of a file entity. It represents key file objects involved during intent execution, including
   * intent parameters and execution results.
   *
   * You can define file entities by implementing this interface. The child class must be decorated with
   * [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity)
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  interface FileEntity extends IntentEntity {
    /**
     * ID of the file entity. The value is fixed to 'OHOS_FILE_ENTITY'.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    entityId: 'OHOS_FILE_ENTITY';

    /**
     * List of file URIs.
     *
     * **Note**
     *
     * The FLAG_AUTH_READ_URI_PERMISSION permission on the URI is granted by default. For details about the
     * permission, see [Flags]{@link @ohos.app.ability.wantConstant:wantConstant.Flags}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    uris: Array<string>;

    /**
     * Permission to be granted to the URI list.
     *
     * **Note**
     *
     * This parameter supports only FLAG_AUTH_READ_URI_PERMISSION, FLAG_AUTH_WRITE_URI_PERMISSION, and
     * FLAG_AUTH_READ_URI_PERMISSION|FLAG_AUTH_WRITE_URI_PERMISSION. For details about the permissions, see
     * [Flags]{@link @ohos.app.ability.wantConstant:wantConstant.Flags}.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    flags?: int;
  }

  /**
   * Enum for query entity mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum QueryType {
    /**
     * Query all entities.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ALL = 'all',

    /**
     * Query entities by property.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    BY_PROPERTY = 'byProperty'
  }

  /**
   * Parameter for query entity.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface QueryEntityParam {
    /**
     * The query type.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    queryType: QueryType;

    /**
     * Indicates the parameters when querying entities by property.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    parameters?: Record<string, Object>;

    /**
     * Indicates the parameters when querying entities by property.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    parameters?: Record<string, RecordData>;
  }

  /**
   * Define AppIntentEntity.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  abstract class AppIntentEntity<T> implements IntentEntity {
    /**
     * Called when query entity execute.
     *
     * @param { QueryEntityParam } params - The params of query entity.
     * @returns { Promise<Array<T>> } - Returns an array of subclasses of the AppIntentEntity class, support promise.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    abstract onQueryEntity(params: QueryEntityParam): Promise<Array<T>>;

    /**
     * The display name of entity.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    displayName: string;
  }

  /**
   * Defines the return result of intent execution. The
   * [generic type](docroot://quick-start/introduction-to-arkts.md#generic-class-and-interface) is supported.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  interface IntentResult<T> {
    /**
     * Error code returned by the intent execution, defined by the developer.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    code: int;

    /**
     * Result data returned by the intent execution, typically containing information to be passed
     * back to the system entry point.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    result?: T;

    /**
     * Interaction information returned after the intent execution completes.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    interactionInfo?: InteractionInfo;
  }

  /**
   * Enumerates the modes that define how the execution result of an intent is returned to the intent initiator.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  enum ReturnMode {
    /**
     * The intent execution result is returned through the
     * [onExecuteInUIAbilityForegroundMode]{@link @ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor#onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>, pageLoader: window.WindowStage)}
     * or
     * [onExecuteInUIExtensionAbility]{@link @ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor#onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>, pageLoader: UIExtensionContentSession)}
     * API in the [intent execution base class]{@link @ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    CALLBACK = 0,

    /**
     * The intent execution result is returned after the
     * [sendExecuteResult]{@link @ohos.app.ability.insightIntentProvider:insightIntentProvider.sendExecuteResult} or
     * [sendIntentResult]{@link @ohos.app.ability.insightIntentProvider:insightIntentProvider.sendIntentResult} API in
     * [intent provider management]{@link @ohos.app.ability.insightIntentProvider:insightIntentProvider} is called.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    FUNCTION = 1
  }

  /**
   * The insight intent execute information.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  interface InsightIntentExecutionInfo {
    /**
     * Intent name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    intentName: string;

    /**
     * Unique ID of an intent instance.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    instanceId: int;

    /**
     * The caller bundle name of the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    callerBundleName: string;

    /**
     * Token ID of the caller.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    callerTokenId: string;

    /**
     * UID of the caller.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    callerUid: int;
  }
}

export default insightIntent;