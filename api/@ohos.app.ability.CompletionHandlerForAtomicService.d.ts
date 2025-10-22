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

/**
  * Specific failure codes indicating failure to open atomicservice.
  *
  * @enum { number }
  * @syscap SystemCapability.Ability.AbilityRuntime.Core
  * @stagemodelonly
  * @atomicservice
  * @since 20 dynamic&static
*/
declare enum FailureCode {
  /**
   * Indicates fail to open atomicservice due to the system error, such as redirect dialog crash, alloc memory failed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic&static
   */
  FAILURE_CODE_SYSTEM_MALFUNCTION = 0,

  /**
   * Indicates the user cancelled the redirection.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic&static
   */
  FAILURE_CODE_USER_CANCEL = 1,

  /**
   * Indicates the user refused the redirection.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic&static
   */
  FAILURE_CODE_USER_REFUSE = 2,
}

/**
  * Notify the success result of openAtomicService.
  *
  * @typedef { function }
  * @param { string } appId - Globally unique identifier of an atomicservice, which is allocated by the cloud.
  * @syscap SystemCapability.Ability.AbilityRuntime.Core
  * @stagemodelonly
  * @since 22 static
  */
type OnAtomicServiceRequestSuccessFn = (appId: string) => void;

/**
  * Notify the failure result of openAtomicService.
  *
  * @typedef { function }
  * @param { string } appId - Globally unique identifier of an atomicservice, which is allocated by the cloud.
  * @param { FailureCode } failureCode - Indicates the failure code for open atomic service.
  * @param { string } failureMessage - Indicates the detail failure message for open atomic service.
  * @syscap SystemCapability.Ability.AbilityRuntime.Core
  * @stagemodelonly
  * @since 22 static
  */
type OnAtomicServiceRequestFailureFn = (appId: string, failureCode: FailureCode, failureMessage: string) => void;

/**
 * CompletionHandlerForAtomicService is a handler to handle the completion events of openAtomicService.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamic
 * @since 22 static
 */
declare class CompletionHandlerForAtomicService {
  /**
   * Notify the success result of openAtomicService.
   *
   * @param { string } appId - Globally unique identifier of an atomicservice, which is allocated by the cloud.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  onAtomicServiceRequestSuccess(appId: string): void;

  /**
   * Notify the failure result of openAtomicService.
   *
   * @param { string } appId - Globally unique identifier of an atomicservice, which is allocated by the cloud.
   * @param { FailureCode } failureCode - Indicates the failure code for open atomic service.
   * @param { string } failureMessage - Indicates the detail failure message for open atomic service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  onAtomicServiceRequestFailure(appId: string, failureCode: FailureCode, failureMessage: string): void;

  /*** if arkts static */
  /**
   * Notify the success result of openAtomicService.
   *
   * @type { OnAtomicServiceRequestSuccessFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 22 static
   */
  onAtomicServiceRequestSuccess: OnAtomicServiceRequestSuccessFn;

  /**
   * Notify the failure result of openAtomicService.
   *
   * @type { OnAtomicServiceRequestFailureFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 22 static
   */
  onAtomicServiceRequestFailure: OnAtomicServiceRequestFailureFn;
  /*** endif */
}

export { FailureCode };
export default CompletionHandlerForAtomicService;
