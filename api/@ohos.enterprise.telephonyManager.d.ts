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
 * @file Telephony Management
 * @kit MDMKit
 */
import type Want from './@ohos.app.ability.Want';
import adminManager from './@ohos.enterprise.adminManager';

/**
 * The **telephonyManager** module provides the telephony management capability.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be called only by a device administrator application that is enabled. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 * >
 * > The global restriction policy is provided by **restrictions**. To disable telephony globally, see
 * > [@ohos.enterprise.restrictions (Restrictions)]{@link @ohos.enterprise.restrictions:restrictions}.
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 20
 */
declare namespace telephonyManager {
  /**
   * Query SMS messages based on the specified time range and phone number.
   *
   * @permission ohos.permission.ENTERPRISE_READ_MESSAGES
   * @param { TelephonyQueryConfig } queryConfig - Query options, including time range and phone number.
   * @returns { Promise<Array<SmsMessageInfo>> }Promise object, which is used to return the list of SMs that meet
   *     the query conditions.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  function getSmsMessages(queryConfig: TelephonyQueryConfig): Promise<Array<SmsMessageInfo>>;

  /**
   * Query call records based on the specified time range and phone number. Enterprise MDM applications can use this
   * interface to read device call records for audit.
   * Supports filtering and query by time range and number. The query time range cannot exceed 31 days. The full match
   * mode is used.
   * A maximum of 5000 call records can be stored. When the number of call records exceeds 5000, the earliest call
   * records are automatically deleted.
   * This interface returns the result asynchronously in Promise mode.
   *
   * @permission ohos.permission.ENTERPRISE_READ_CALL_LOG
   * @param { TelephonyQueryConfig } queryConfig - Query the configuration, including the time range and phone number.
   * If telephoneNumber is not transferred or is an empty string, all call records within the time range are returned.
   * @returns { Promise<Array<CallLogInfo>> }Promise object, which is used to return the list of call records that
   *     meet the query conditions.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  function getCallLogs(queryConfig: TelephonyQueryConfig): Promise<Array<CallLogInfo>>;

  /**
   * Disables the SIM card in the specified slot. After being disabled, the SIM card in the specified slot cannot be
   * used for making or receiving calls, sending or receiving SMSs, or accessing the internet. For example, an
   * enterprise device administrator can disable the SIM card when an employee leaves the company or a device is lost,
   * preventing unauthorized use. This is applicable in scenarios where enterprises need to restrict employee devices'
   * communication capabilities, such as preventing SIM card misuse after employee departure or device loss, thereby
   * ensuring enterprise communication security and cost control.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } slotId - Slot ID. Currently, only single-slot and dual-slot devices are supported. The value can
   *     be **0** or **1**, where **0** indicates slot 1 and **1** indicates slot 2.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setSimDisabled(admin: Want, slotId: number): void;

  /**
   * Enables the SIM card in a specified slot. After it has been disabled with **setSimDisabled**, the card must be
   * turned back on manually in **Settings** > **Mobile network** > **SIM management**, as this **setSimEnabled** API
   * cannot re-enable it directly.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } slotId - Slot ID. Currently, only single-slot and dual-slot devices are supported. The value can
   *     be **0** or **1**, where **0** indicates slot 1 and **1** indicates slot 2.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setSimEnabled(admin: Want, slotId: number): void;

  /**
   * Checks whether the SIM card in a specified slot is disabled. This API is applicable in scenarios where enterprise
   * administrators need to check whether the SIM card disablement policy has taken effect. It helps administrators
   * confirm the policy enforcement status and ensure that call control policies are correctly implemented.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } slotId - Slot ID. Currently, only single-slot and dual-slot devices are supported. The value can
   *     be **0** or **1**, where **0** indicates slot 1 and **1** indicates slot 2.
   * @returns { boolean } A Boolean value indicating the SIM card status in the specified slot. The value **true** means
   *     the SIM card in the specified slot is disabled; the value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function isSimDisabled(admin: Want, slotId: number): boolean;

  /**
   * Adds the trustlist or blocklist for outgoing calls. If no list is set, all numbers can make outgoing calls. Once a
   * list is added, only numbers on the list are allowed (or blocked) from making outgoing calls. For example, an
   * enterprise can restrict employees to calling only customer service hotlines, or prohibit them from calling specific
   * numbers.
   *
   * A policy conflict is reported when this API is called in the following scenarios:
   *
   * 1. The device's call capability has been disabled via [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy},
   * using this API to add an outgoing call trustlist or blocklist will return error code 203. To resolve the conflict,
   * enable the call capability via [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy}.
   * 2. If an outgoing call blocklist has been set via this API, using this API again to add an outgoing call trustlist
   * will return error code 9200010. To resolve the conflict, remove the previously set blocklist via the [removeOutgoingCallPolicyNumbers]{@link telephonyManager.removeOutgoingCallPolicyNumbers} API.
   * 3. If an outgoing call trustlist has been set via this API, using this API again to add an outgoing call blocklist
   * will return error code 9200010. To resolve the conflict, remove the previously set trustlist via the [removeOutgoingCallPolicyNumbers]{@link telephonyManager.removeOutgoingCallPolicyNumbers} API.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @param { Array<string> } numbers - Call number list. Currently, only full number matching is supported. In versions
   *     earlier than API 26.1.0, the total length of the array cannot exceed 1000. For example, if there are 100 numbers in
   *     the allowed list, a maximum of 900 numbers can be added through this API. The total length of the array in API
   *     26.1.0 and later versions cannot exceed 10000. For example, if there are 1000 numbers in the allowed list, a
   *     maximum of 9000 numbers can be added through this API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addOutgoingCallPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void;

  /**
   * Removes the trustlist or blocklist for outgoing calls. If the list is not set, the removal fails. For example, an
   * enterprise can use this API when removing call restrictions and restoring normal call permissions for employees.
   *
   * A policy conflict is reported when this API is called in the following scenario:
   *
   * If the device's call capability has been disabled via the
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy} API, using this API to
   * remove an outgoing call trustlist or blocklist will return error code 203. To resolve the conflict, enable the call
   * capability via [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy}.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @param { Array<string> } numbers - List of call numbers to remove. The total length of the array must not exceed 1,
   *     000.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function removeOutgoingCallPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void;

  /**
   * Obtains the trustlist or blocklist for outgoing calls.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @returns { Array<string> } An array of numbers in the outgoing call blocklist or trustlist.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getOutgoingCallPolicyNumbers(admin: Want, policy: adminManager.Policy): Array<string>;

  /**
   * Obtains the trustlist or blocklist for outgoing calls.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the.
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @returns { Array<string> } An array of numbers in the outgoing call blocklist or trustlist.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getOutgoingCallPolicyNumbers(admin: Want | null, policy: adminManager.Policy): Array<string>;

  /**
   * Adds the trustlist or blocklist for incoming calls. If no list is set, all numbers can make incoming calls. Once a
   * list is added, only numbers on the list are allowed (or blocked) from making incoming calls. For example, an
   * enterprise can restrict employees to answering only calls from customers, or prohibit them from answering
   * harassment calls.
   *
   * A policy conflict is reported when this API is called in the following scenarios:
   *
   * 1. The device's call capability has been disabled via [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy},
   * using this API to add an incoming call trustlist or blocklist will return error code 203. To resolve the conflict,
   * enable the call capability via [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy}.
   * 2. If an incoming call blocklist has been set via this API, using this API again to add an incoming call trustlist
   * will return error code 9200010. To resolve the conflict, remove the previously set blocklist via the [removeIncomingCallPolicyNumbers]{@link telephonyManager.removeIncomingCallPolicyNumbers} API.
   * 3. If an incoming call trustlist has been set via this API, using this API again to add an incoming call blocklist
   * will return error code 9200010. To resolve the conflict, remove the previously set trustlist via the [removeIncomingCallPolicyNumbers]{@link telephonyManager.removeIncomingCallPolicyNumbers} API.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @param { Array<string> } numbers - Call number list. Currently, only full number matching is supported. In versions
   *     earlier than API 26.1.0, the total array length cannot exceed 1000. For example, if 100 numbers exist in the
   *     allowed list, a maximum of 900 numbers can be added through this API. For API 26.1.0 and later versions, the total
   *     array length cannot exceed 10000. For example, if there are 1000 numbers in the allowed list array, a maximum of
   *     9000 numbers can be added through this API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addIncomingCallPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void;

  /**
   * Removes the trustlist or blocklist for incoming calls. If the list is not set, the removal fails. For example, an
   * enterprise can use this API when lifting incoming call restrictions and restoring employees' normal answering
   * permissions.
   *
   * A policy conflict is reported when this API is called in the following scenario:
   *
   * 1. If the device's call capability has been disabled via the [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy}
   * API, using this API to remove an incoming call trustlist or blocklist will return error code 203. To resolve the
   * conflict, enable the call capability via [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy}.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @param { Array<string> } numbers - List of call numbers to remove. The total length of the array must not exceed 1,
   *     000.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function removeIncomingCallPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void;

  /**
   * Obtains the trustlist or blocklist for incoming calls.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @returns { Array<string> } An array of numbers in the incoming call blocklist or trustlist.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getIncomingCallPolicyNumbers(admin: Want, policy: adminManager.Policy): Array<string>;

  /**
   * Obtains the trustlist or blocklist for incoming calls.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the.
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @returns { Array<string> } An array of numbers in the incoming call blocklist or trustlist.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getIncomingCallPolicyNumbers(admin: Want | null, policy: adminManager.Policy): Array<string>;

  /**
   * Ends the current call. Only carrier calls are supported, excluding MeeTime calls. For example, an enterprise device
   * administrator can forcibly hang up a non-compliant call that an employee is currently on in enterprise security
   * management scenarios.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function hangupCalling(admin: Want): void;

  /**
   * Activates the SIM card in the specified slot. In scenarios where a SIM card is inserted but not yet activated, this
   * API can be used to activate the SIM card without requiring manual user action. After the SIM card is activated, it
   * can be used for communication. To successfully call this API, the SIM card must be inserted and airplane mode must
   * be turned off.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } slotId - Slot ID. Currently, only single-slot and dual-slot devices are supported. The value can
   *     be **0** or **1**, where **0** indicates slot 1 and **1** indicates slot 2.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201017 - SIM card activation or deactivation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function activeSim(admin: Want, slotId: number): void;

  /**
   * Deactivates the SIM card in the specified slot. After deactivation, the SIM card in that slot cannot be used for
   * making or receiving calls, sending or receiving SMSs, or accessing the internet. For example, an enterprise can
   * temporarily deactivate a SIM card during employee leave or device maintenance. To successfully call this API, the
   * SIM card must be inserted and airplane mode must be turned off.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } slotId - Slot ID. Currently, only single-slot and dual-slot devices are supported. The value can
   *     be **0** or **1**, where **0** indicates slot 1 and **1** indicates slot 2.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201017 - SIM card activation or deactivation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function deactiveSim(admin: Want, slotId: number): void;

  /**
   * Sets the SIM card in the specified slot as the default data SIM card. The device will use the data connection from
   * the SIM card in that slot for internet access. For example, in dual-SIM device management scenarios, an enterprise
   * can specify a default data SIM card for employee devices to centrally manage data usage. To successfully call this
   * API, the SIM card must be inserted and airplane mode must be turned off.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } slotId - Slot ID. Currently, only single-slot and dual-slot devices are supported. The value can
   *     be **0** or **1**, where **0** indicates slot 1 and **1** indicates slot 2.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201020 - Failed to set the default data SIM card.
   *     The airplane mode is enabled or no SIM card is inserted.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setDefaultData(admin: Want, slotId: number): void;

  /**
   * Obtains the slot ID of the SIM card currently used as the default data SIM card on the device. For example, an
   * enterprise device administrator can query the current default data SIM during device management for data usage
   * control or data card configuration switching. If no SIM card is inserted or the device is in airplane mode, the API
   * returns the slot ID of the last used data SIM card. If the device has never had a default data SIM set, the API
   * returns **0**, indicating slot 1.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { number } Slot ID. Currently, only single-slot and dual-slot devices are supported. The value can be
   *     **0** or **1**, where **0** indicates slot 1 and **1** indicates slot 2.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getDefaultData(admin: Want): number;

  /**
   * Config for querying SMS messages and call logs.
   * Provides common query parameters for telephony-related queries.
   *
   * @property { number } startTime - Query start time (timestamp, in milliseconds).
   * @property { number } endTime - Query end time (timestamp, in milliseconds).
   * @property { string } [phoneNumber] - Phone number to filter by (optional).
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  interface TelephonyQueryConfig {
    /**
     * Query start time (timestamp, in seconds). Match by call/SMS record creation time.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    startTime: number;

    /**
     * Query end time (timestamp, in seconds). Match by call/SMS record creation time.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    endTime: number;

    /**
     * The phone number to filter (optional). The default value is an empty string, indicating that all records are queried.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    telephoneNumber?: string;
  }

  /**
   * Call log information.
   * Provides detailed information about a call log entry, including call duration, direction
   * (incoming/outgoing), timestamp, and SIM card slot used.
   *
   * @property { number } startTime - Call start time (timestamp, in milliseconds).
   * @property { number } endTime - Call end time (timestamp, in milliseconds).
   * @property { boolean } isIncoming - Call direction: **TRUE** indicates incoming, **false** indicates outgoing.
   * @property { number } slotId - SIM card slot ID.
   * @property { string } phoneNumber - Phone number.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  interface CallLogInfo {
    /**
     * Time when a call record is created(timestamp, in seconds). When an incoming call is made, the ringing start time
     * is displayed. When an outgoing call is made, the ringing start time is displayed.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    createTime: number;

    /**
     * Call connection time (timestamp, in seconds). The value is 0 when the call is not connected.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    startTime: number;

    /**
     * Call end time(timestamp, in seconds). When a call is not connected, the time when the call is hung up is the time
     * when the call is disconnected.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    endTime: number;

    /**
     * Call direction: **true** indicates an incoming call, and **false** indicates an outgoing call.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    isIncoming: boolean;

    /**
     * SIM card slot ID. The value 0 indicates card slot 1, and the value 1 indicates card slot 2.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    slotId: number;

    /**
     * Phone number of the other party.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    telephoneNumber: string;
  }

  /**
   * SMS message information.
   * Provides detailed information about an SMS message, including the message content, sender/receiver
   * information, timestamp, and SIM card slot used.
   *
   * @property { number } time - SMS receive/send time (millisecond timestamp).
   * @property { boolean } isSender - SMS direction: **true** indicates send, **false** indicates receive.
   * @property { number } slotId - SIM card slot ID.
   * @property { string } phoneNumber - Phone number of the other party.
   * @property { string } content - SMS content.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  interface SmsMessageInfo {
    /**
     * SMS receive/send time (millisecond timestamp).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    time: number;
 
    /**
     * SMS direction: **true** indicates send, **false** indicates receive.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    isSender: boolean;
 
    /**
     * Telephone number of the other party.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    telephoneNumber: string;
 
    /**
     * SMS content.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    content: string;
  }
}

export default telephonyManager;