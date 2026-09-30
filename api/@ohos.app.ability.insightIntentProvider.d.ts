/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import type insightIntent from './@ohos.app.ability.insightIntent';

/**
 * Insight intent Provider.
 * @namespace insightIntentProvider
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic&static
 */
declare namespace insightIntentProvider {
  /**
   * Send execute result.
   * @param { int } instanceId - The insight intent instance ID.
   *     It is from InsightIntentExecutor.context.instanceId.
   * @param { insightIntent.ExecuteResult } result - The result of insight intent execution.
   * @returns { Promise<void> } - The promise returned by the function.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  function sendExecuteResult(instanceId: int, result: insightIntent.ExecuteResult): Promise<void>;

  /**
   * Send intent result.
   * @param { int } instanceId - The insight intent instance ID.
   *     It is from InsightIntentEntryExecutor.context.instanceId.
   * @param { insightIntent.IntentResult<T> } result - The result of insight intent execution.
   * @returns { Promise<void> } - The promise returned by the function.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  function sendIntentResult(instanceId: int, result: insightIntent.IntentResult<T>): Promise<void>;

  /**
   * Send intent result.
   * 
   * @param { int } instanceId - The insight intent instance ID.
   *     It is from InsightIntentEntryExecutor.context.instanceId.
   * @param { insightIntent.IntentResult<T> } result - The result of insight intent execution.
   * @returns { Promise<void> } - The promise returned by the function.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  function sendIntentResult<T>(instanceId: int, result: insightIntent.IntentResult<T>): Promise<void>;

  /**
   * Defines an onWillInsightIntentExecuteCallBackFn function.
   *
   * @param { insightIntent.InsightIntentExecutionInfo } executionInfo - The insight intent execute information.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.2.0 dynamic&static
   */
  type OnWillInsightIntentExecuteCallBackFn = (executionInfo: insightIntent.InsightIntentExecutionInfo) => void;

  /**
   * Insight intent Execution callback.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.2.0 dynamic&static
   */
  interface InsightIntentExecutionCallBack {
    /**
     * Called before insight intent execute.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.2.0 dynamic&static
     */
    onWillInsightIntentExecuteCallBack?: OnWillInsightIntentExecuteCallBackFn;
  }

  /**
   * Registers a listener for insight intent execute.
   *
   * @param { InsightIntentExecutionCallBack } callback - The insight intent execution callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.2.0 dynamic&static
   */
  function onWillInsightIntentExecute(callback: InsightIntentExecutionCallBack): void;

  /**
   * unregisters a listener for insight intent execute.
   *
   * @param { InsightIntentExecutionCallBack } [callback] - The insight intent execution callback.
   *     If a defined callback is passed in, the listener for that callback is unregistered.
   *     If no value is passed in, all the listeners for insight intent execute are unregistered.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.2.0 dynamic&static
   */
  function offWillInsightIntentExecute(callback?: InsightIntentExecutionCallBack): void;
}

export default insightIntentProvider;