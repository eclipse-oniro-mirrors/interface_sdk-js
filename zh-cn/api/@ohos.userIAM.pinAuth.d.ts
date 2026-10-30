/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file PIN Authentication
 * @kit UserAuthenticationKit
 */

/**
 * **pinAuthManager**模块是OpenHarmony用户身份和访问管理(UserIAM系统）。专用于PIN认证管理。本模块提供系统应用配置PIN码认证的安全策略接口。
 *
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @systemapi Hide this for inner system use.
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace pinAuth {
  /**
   * 设置PIN有效期。设置策略后，当口令过期时，会弹出安全提示要求用户重置口令。
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { int } userId - 用户ID。如果取值为0，则表示该策略对所有用户生效，否则表示该策略对对指定用户生效。
   *     <br>取值限定为整数。
   * @param { long } validityPeriod - PIN码有效时间，单位：毫秒。合法有效值为大于等于0并且小于2的50次方的整数。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 12500002 - General operation error.
   * @throws { BusinessError } 12500008 - The parameter is out of range.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function setPinValidityPeriod(userId: int, validityPeriod: long): void;

  /**
   * 获取PIN有效期。
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { int } userId - 用户ID。
   *     <br>取值限定为整数。
   * @returns { long | undefined } PIN码有效时间，单位为毫秒。如果没有为指定用户设置有效期或者设置有效期为0，则返回undefined。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 12500002 - General operation error.
   * @throws { BusinessError } 12500008 - The parameter is out of range.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getPinValidityPeriod(userId: int): long | undefined;

  /**
   * 设置PIN删除功能的禁用状态。策略设置完成后，用户
   * 功能禁用时，无法删除PIN。
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { int } userId - 用户ID。如果取值为0，则对所有用户生效，否则对指定用户生效。
   *     <br>取值限定为整数。
   * @param { boolean } isDisabled - 是否禁用PIN删除功能。True表示禁用。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 12500002 - General operation error.
   * @throws { BusinessError } 12500008 - The parameter is out of range.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function setPinDeletionDisabledState(userId: int, isDisabled: boolean): void;

  /**
   * 获取PIN删除功能的禁用状态。
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { int } userId - 用户ID。
   *     <br>取值限定为整数。
   * @returns { boolean | undefined } 如果禁用PIN删除功能，则返回true；否则返回false。如果尚未为指定用户设置启用状态，则返回undefined。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 12500002 - General operation error.
   * @throws { BusinessError } 12500008 - The parameter is out of range.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getPinDeletionDisabledState(userId: int): boolean | undefined;

  /**
   * PIN码复杂度检查策略及说明。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface PinComplexityPolicy {
    /**
     * PIN码复杂度检查正则表达式。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    complexityReg: string;

    /**
     * PIN码复杂度策略说明。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    policyDescription: string;
  }

  /**
   * 设置PIN码复杂度检查策略和描述信息。设置策略后，用户新注册和修改的锁屏密码必须匹配指定的复杂度正则表达式。
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { int } userId - 用户ID。如果取值为0，则对所有用户生效，否则对指定用户生效。
   *     <br>取值限定为整数。
   * @param { PinComplexityPolicy } policy - PIN码复杂度检查策略及说明。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 12500002 - General operation error.
   * @throws { BusinessError } 12500008 - The parameter is out of range.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function setPinComplexityPolicy(userId: int, policy: PinComplexityPolicy): void;

  /**
   * 获取PIN复杂度检查策略和描述。
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { int } userId - 用户ID。
   *     <br>取值限定为整数。
   * @returns { PinComplexityPolicy | undefined } PIN码复杂度检查策略及说明。如果尚未为指定的用户设置复杂度策略或者为指定
   *     用户同时设置的正则表达式和空的正则表达式描述均为空，则返回undefined。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 12500002 - General operation error.
   * @throws { BusinessError } 12500008 - The parameter is out of range.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getPinComplexityPolicy(userId: int): PinComplexityPolicy | undefined;
}

export default pinAuth;