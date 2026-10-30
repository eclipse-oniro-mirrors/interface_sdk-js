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
 * The **pinAuth** module is the OpenHarmony user identity and access management (UserIAM system). Used for PIN
 * authentication management. This module provides security policy interfaces for configuring PIN authentication for
 * system applications.
 *
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @systemapi Hide this for inner system use.
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace pinAuth {
  /**
   * Sets PIN validity period. After the policy is set, when PIN is expired, a security prompt will be displayed
   * asking the user to reset the PIN.
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { int } userId - User ID. If the value is 0, the policy takes effect for all users; otherwise, the policy
   *     takes effect for the specified user.
   *     <br>The value should be an integer.
   * @param { long } validityPeriod - PIN validity period, in milliseconds.
   *     Valid values must be greater than or equal to 0 and less than 2^50.
   *     <br>Unit: milliseconds.
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
   * Get PIN validity period.
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { int } userId - User ID.
   *     <br>The value should be an integer.
   * @returns { long | undefined } Validity period of a PIN, in milliseconds. If no validity period or zero is set for the
   *     specified userId, or if the validity period is set to 0, undefined is returned.
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
   * Sets the disable state of the PIN deletion feature. After the policy is set, the user
   * cannot delete the PIN when the feature is disabled.
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { int } userId - User ID. If the value is 0, the policy takes effect for all users; otherwise, the policy
   *     takes effect for the specified user.
   *     <br>The value should be an integer.
   * @param { boolean } isDisabled - Whether the PIN deletion feature is disabled. True means disabled.
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
   * Gets the disable state of the PIN deletion feature.
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { int } userId - User ID.
   *     <br>The value should be an integer.
   * @returns { boolean | undefined } True if the PIN deletion feature is disabled, false otherwise.Returns undefined if
   *     the enabled state has not been set for the specified user.
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
   * PIN complexity check policy and description.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface PinComplexityPolicy {
    /**
     * Regular expression for PIN complexity check.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    complexityReg: string;

    /**
     * Description of the PIN complexity policy.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    policyDescription: string;
  }

  /**
   * Set the PIN complexity check policy and description. After setting this policy, users must create or change
   * their lock screen PIN to match the specified complexity regular expression.
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { int } userId - User ID. If the value is 0, the policy takes effect for all users; otherwise, the policy
   *     takes effect for the specified user.
   *     <br>The value should be an integer.
   * @param { PinComplexityPolicy } policy - PIN complexity check policy and description.
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
   * Gets PIN complexity check policy and description.
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { int } userId - User ID.
   *     <br>The value should be an integer.
   * @returns { PinComplexityPolicy | undefined } PIN complexity check policy and description. Returns undefined if no
   *     complexity policy has been set for the specified user or if both an empty regular expression and an empty regular
   *     expression description are set for the specified user.
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