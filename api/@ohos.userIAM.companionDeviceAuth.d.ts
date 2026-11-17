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
 * @file Companion Device Authentication
 * @kit UserAuthenticationKit
 */

import UserAuth from '@ohos.userIAM.userAuth';

/**
 * The **companionDeviceAuth** module is an important part of the OpenHarmony user identity and access management (
 * UserIAM) system. It is dedicated to companion device authentication management. This module provides the system
 * application with capabilities such as querying and subscribing to companion devices, and managing the business scope.
 *
 * This module applies to the following scenarios:
 *
 * - Managing the authentication relationship between a companion device and the primary device.
 * - Querying and subscribing to the status changes of a companion device.
 * - Managing the business scope supported by a companion device.
 * - Implementing continuous authentication.
 * - Processing device selection and registration.
 *
 * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
 * @systemapi Hide this for inner system use.
 * @stagemodelonly
 * @since 23 dynamic&static
 */
declare namespace companionDeviceAuth {
  /**
   * Enumerates business IDs. A business ID uniquely identifies a business scenario supported by the companion device.
   * The business scenarios supported by different companion devices vary according to the authentication security. For
   * example, executing voice commands without screen unlocking.
   *
   * The companion device relationships of different business IDs are independent of each other and do not interfere
   * with each other. They can be added, deleted, and authenticated independently.
   *
   * The current services of the companion device module include business scenarios such as screen lock unlocking, app
   * lock unlocking, and identity authentication before voice commands are executed on the lock screen.
   *
   * Adding services has requirements on the scenarios supported by the server device. For example, the multi-screen
   * collaboration service requires that the server device support the agency authentication scenario.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum BusinessId {
    /**
     * Default business ID. A system-preset default business used for basic Companion Device authentication scenarios.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DEFAULT = 0,

    /**
     * Starting value of vendor-defined business IDs. Vendors can define extended business IDs based on this value. The
     * actual value must be greater than or equal to 10000 to avoid conflicts with system-reserved values [0-9999].
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VENDOR_BEGIN = 10000
  }

  /**
   * Enumerates device ID types. They are used to define the device service identifier type. System-defined types and
   * vendor-defined types are supported.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum DeviceIdType {
    /**
     * Unified device ID. It is a system-defined device business ID type, used for unified device identification across
     * devices.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    UNIFIED_DEVICE_ID = 1,

    /**
     * Start value of the vendor-defined device ID type. The vendor can extend device ID types based on this value. The
     * actual value must be greater than or equal to 10000 to avoid conflicts with the reserved system values [1-9999].
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VENDOR_BEGIN = 10000
  }

  /**
   * Selects the purpose of the companion device.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum SelectPurpose {
    /**
     * Selects a companion device to which the template is to be added. Specifically, the purpose of the current
     * operation is to select a device for adding a new authentication template. The system returns a list of devices
     * suitable for adding a template.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SELECT_ADD_DEVICE = 1,

    /**
     * Selects the companion device that provides the authentication capability. Specifically, the purpose of the
     * current operation is to select a device that has a registered template for authentication. The system returns a
     * list of devices that have the authentication capability.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SELECT_AUTH_DEVICE = 2,

    /**
     * Start value of the vendor-defined selection purpose. The vendor can extend the selection purpose based on this
     * value. The actual value must be greater than or equal to 10000 to avoid conflicts with the reserved system values
     * [0-9999].
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VENDOR_BEGIN = 10000
  }

  /**
   * Defines the device identifier. It is used to uniquely identify a device and its user, and contains information such
   * as the device ID type, device ID, device user ID, and device sub-identity credential ID.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DeviceKey {
    /**
     * Device ID type. It is used to specify the type of the device business ID and can be extended based on
     * [DeviceIdType]{@link companionDeviceAuth.DeviceIdType}. For example, you can use **UNIFIED_DEVICE_ID(1)** to
     * indicate the unified device ID or use the vendor-defined value (≥ 10000).
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceIdType: int;

    /**
     * Device ID. It is a string that uniquely identifies a device. The format is determined by the value of
     * **deviceIdType**.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceId: string;

    /**
     * Device user ID. A non-negative integer that identifies a user on the device and distinguishes different users on
     * the device.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceUserId: int;

    /**
     * Device sub-identity credential ID. A non-negative integer that identifies a sub-identity credential on the device
     * and distinguishes different sub-identity credentials under the same user on the same device.
     *
     * @default -1
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    deviceSubProfileId?: int;
  }

  /**
   * Defines the device status information. It is used to describe the current status of a companion device, including
   * the device service identifier, user name, model information, device name, online status, list of supported business
   * IDs, and device sub-identity credential name.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DeviceStatus {
    /**
     * Key information about the device. It contains the device ID type, device ID, device user ID, and device sub-
     * identity credential ID, serving as the unique identifier of the device.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceKey: DeviceKey;

    /**
     * Device user name. It is the display name of the current user on the device, and is displayed on the device
     * selection screen.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceUserName: string;

    /**
     * Device model information. It identifies the device model, such as the product model and device type.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceModelInfo: string;

    /**
     * Device name. It is the name or alias of a device, and is displayed to the user in the device list.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceName: string;

    /**
     * Device online status. The value **true** indicates that the device is online and can communicate with the primary
     * device. The value **false** indicates that the device is offline and cannot perform authentication interaction.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isOnline: boolean;

    /**
     * List of business IDs supported by the device. It indicates the business scenarios supported by the device, such
     * as unlocking the screen lock and unlocking the application lock. The business scenarios supported by a device
     * vary depending on the authentication security.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    supportedBusinessIds: int[];

    /**
     * Name of the device sub-identity credentials. It corresponds to the nickname of the distributed account, serving
     * as the display name of the foreground sub-identity credentials on the device and used for display on the device
     * selection screen.
     *
     * @default ""
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    deviceSubProfileName?: string;
  }

  /**
   * Describes the complete status information about a registered companion device authentication template, including
   * the template ID, data confirmation status, validity, user ID, time when the template is added, supported services,
   * and associated device status.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface TemplateStatus {
    /**
     * Template ID. Unique ID of a companion device authentication template, which is used to specify the target
     * template when the business scope is updated or the authentication status is subscribed to.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    templateId: Uint8Array;

    /**
     * Data confirmation status. The value **true** indicates that the data is real-time data and has been confirmed and
     * synchronized with the device. The value **false** indicates that the data is cached data, which may be different
     * from the actual device status.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isConfirmed: boolean;

    /**
     * Template validity. The value **true** indicates that the template is valid and can be used for authentication.
     * The value **false** indicates that the template is invalid, may have been deleted or expired, and cannot be used
     * for authentication.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isValid: boolean;

    /**
     * Local user ID. The identifier of the user associated with the template on the primary device, which is a non-
     * negative integer.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    localUserId: int;

    /**
     * Time when the template is added, of the **Date** object type.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    addedTime: Date;

    /**
     * List of supported business IDs. It specifies the business scenarios where the template is enabled. You can update
     * the business scenarios by calling the
     * [updateEnabledBusinessIds]{@link companionDeviceAuth.updateEnabledBusinessIds} API.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    enabledBusinessIds: int[];

    /**
     * Device status information. It specifies the current status of the companion device associated with the template,
     * including the online status and device name.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceStatus: DeviceStatus;
  }

  /**
   * Defines the callback triggered for receiving notifications of template status changes. When the template status
   * changes (for example, the template is added, deleted, or its validity changes), the system notifies the application
   * through this callback.
   *
   * @param { TemplateStatus[] } templateStatusList - Template status list. The list contains the status information of
   *     all registered templates of the current user. The application can determine whether a template is valid based
   *     on the **isValid** field and whether the data is real-time data based on the **isConfirmed** field.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type TemplateStatusCallback = (templateStatusList: TemplateStatus[]) => void;

  /**
   * Defines the callback triggered for receiving notifications of continuous authentication status changes. When the
   * authentication status of a companion device changes, the system applies the current authentication result and
   * authentication trust level through this callback notification.
   *
   * @param { boolean } isAuthPassed - Whether the authentication is successful. The value **true** indicates that the
   *     companion device is successfully authenticated and the user identity is confirmed. The value **false**
   *     indicates that the authentication fails, the user identity is not confirmed, or the authentication has expired.
   * @param { UserAuth.AuthTrustLevel } [authTrustLevel] - Highest authentication trust level that the companion device
   *     can currently achieve. The value is ATL1 (10000), ATL2 (20000), ATL3 (30000), or ATL4 (40000). A higher level
   *     indicates stronger authentication security.
   *     <br>**Note:**
   *     <br>This parameter is provided only when **isAuthPassed** is **true**; otherwise, it defaults to **undefined**.
   *     <br>For the identity authentication trust level required by typical operations, see
   *     [Principles for Classifying Biometric Authentication Trust Levels](docroot://security/UserAuthenticationKit/user-authentication-overview.md#principles-for-classifying-biometric-authentication-trust-levels).
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type ContinuousAuthStatusCallback = (isAuthPassed: boolean, authTrustLevel?: UserAuth.AuthTrustLevel) => void;

  /**
   * Defines the callback triggered for receiving notifications of available device status changes. When the list of
   * available devices changes (for example, a new device goes online or a device goes offline), the system notifies the
   * application through this callback.
   *
   * @param { DeviceStatus[] } deviceStatusList - Device status list. It contains the status information about all
   *     devices that can be added as companion devices. The application can filter online devices based on the
   *     **isOnline** field and determine the business scope supported by the device based on the
   *     **supportedBusinessIds** field.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type AvailableDeviceStatusCallback = (deviceStatusList: DeviceStatus[]) => void;

  /**
   * Defines continuous authentication parameters. They are used to configure parameters related to the subscription to
   * the continuous authentication status, for example, specifying the target template to be subscribed to.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ContinuousAuthParam {
    /**
     * Template ID. It is used to specify the target template to be subscribed to. If this parameter is not specified,
     * the continuous authentication status of all templates of the current user is subscribed to by default. If a
     * specific template ID is specified, only the authentication status change of the template is subscribed to.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    templateId?: Uint8Array;
  }

  /**
   * Status monitor object. It is used to listen for or obtain information such as the template status, continuous
   * authentication status, and available device status. This object can be obtained by calling
   * [getStatusMonitor]{@link companionDeviceAuth.getStatusMonitor}.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface StatusMonitor {
    /**
     * Obtains the status of the companion device template. This API is used to query the status of all registered
     * companion device authentication templates of the current user, including the template validity, supported
     * services, and associated device status. This API uses a promise to return the result.
     *
     * Data source: returns an in-memory snapshot of the template status maintained by the system service (UserIAM),
     * rather than a real-time cross-device query.
     *
     * Difference from **onTemplateChange**: **getTemplateStatus** is used to obtain a one-time snapshot of the current
     * template status and is suitable for proactive querying, whereas **onTemplateChange** is used to continuously
     * subscribe to template status changes and is suitable for real-time responses. Use **getTemplateStatus** when the
     * status needs to be obtained only once, and use **onTemplateChange** when changes need to be continuously
     * monitored.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @returns { Promise<TemplateStatus[]> } Promise used to return the status list of all templates of the current
     *     user. The status of each template contains the template ID, validity, and device information. If the
     *     operation fails, an error code is returned.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getTemplateStatus(): Promise<TemplateStatus[]>;

    /**
     * Subscribes to template status change events. This API uses an asynchronous callback to return the result.
     *
     * Trigger timing: triggered when the template status changes, including changes to the enabled business ID,
     * validity changes, associated device online/offline or status changes, and templates being added to or removed
     * from the IDM. A snapshot of the current status is pushed once immediately upon subscription; no repeated
     * notification is sent when the status remains unchanged.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { TemplateStatusCallback } callback - Callback invoked when the template status changes (for example,
     *     addition, deletion, or validity change). The callback parameter is a list of template statuses.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onTemplateChange(callback: TemplateStatusCallback): void;

    /**
     * Unsubscribes from template status changes.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { TemplateStatusCallback } [callback] - Callback for the template status event. If this parameter is
     *     specified, only this callback is unregistered; if it is omitted, all registered callbacks are unregistered.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offTemplateChange(callback?: TemplateStatusCallback): void;

    /**
     * Subscribes to the events for status changes of companion devices that can be added. This API uses an asynchronous
     * callback to return the result.
     *
     * Trigger mechanism: the callback is triggered when the list of companion devices that can be added changes (for
     * example, a new device comes online, a device goes offline, or a device binding relationship changes). The current
     * list is pushed once immediately upon subscription.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AvailableDeviceStatusCallback } callback - Callback invoked when the available device status changes.
     *     Triggered when the list of addable devices changes (for example, a new device comes online or a device goes
     *     offline). The callback parameter is the device status list.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onAvailableDeviceChange(callback: AvailableDeviceStatusCallback): void;

    /**
     * Unsubscribes from the available companion device status change. The **callback** parameter specifies the callback
     * to unregister. If no callback is passed, all registered callbacks are unregistered.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AvailableDeviceStatusCallback } [callback] - Callback registered through **onAvailableDeviceChange**. If
     *     this parameter is specified, only this callback is unregistered; if this parameter is omitted, all registered
     *     callbacks are unregistered.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offAvailableDeviceChange(callback?: AvailableDeviceStatusCallback): void;

    /**
     * Subscribes to the events for continuous authentication status of companion devices. This API uses an asynchronous
     * callback to return the result.
     *
     * Continuous authentication: The continuous authentication status indicates whether the companion device holds a
     * valid authentication token. The status changes and the callback is triggered when a token is issued (
     * authentication succeeds), a token times out, the associated device goes offline, or a token is revoked.
     * **authTrustLevel** is the highest authentication trust level among the currently valid tokens. Notification is
     * sent only when the authentication trust level changes. The current status is pushed once immediately upon
     * subscription.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { ContinuousAuthParam } param - Subscription parameters, which can specify the target template through the
     *     templateId field.
     * @param { ContinuousAuthStatusCallback } callback - Callback invoked when the continuous authentication status
     *     changes. The callback parameters are the authentication result (**isAuthPassed**) and the authentication
     *     trust level (**authTrustLevel**).
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @throws { BusinessError } 32600002 - The template is not found.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onContinuousAuthChange(param: ContinuousAuthParam, callback: ContinuousAuthStatusCallback): void;

    /**
     * Unsubscribes from the continuous authentication status change event of the companion device. After
     * unsubscription, the application no longer receives continuous authentication status change notifications. The
     * **callback** parameter specifies the callback to unregister. If no callback is passed, all registered callbacks
     * are unregistered.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { ContinuousAuthStatusCallback } [callback] - Callback previously registered through
     *     **onContinuousAuthChange**. If this parameter is specified, only this callback is canceled; if it is omitted,
     *     all registered callbacks are canceled.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offContinuousAuthChange(callback?: ContinuousAuthStatusCallback): void;
  }

  /**
   * Obtains the status monitor. This API is used to obtain the status monitor object of a specified user. The object
   * can be used to query and subscribe to the template status, continuous authentication status, and available device
   * status of the companion device.
   *
   * Lifecycle: Subscriptions are maintained per user on the system service side. Call the corresponding **off** method
   * to unsubscribe and release resources when they are no longer needed. Registered subscriptions are automatically
   * cleared when the application process exits.
   *
   * @permission ohos.permission.USE_USER_IDM
   * @param { int } localUserId - Local user ID. A non-negative integer that identifies the user on the primary device
   *     and is used to obtain the Companion Device status monitor for the user. An exception is thrown with error code
   *     32600002 if a nonexistent user ID is passed in.
   * @returns { StatusMonitor } Status monitor object. It can be used to query the template status (
   *     [getTemplateStatus]{@link companionDeviceAuth.StatusMonitor.getTemplateStatus}), subscribe to template changes
   *     ([onTemplateChange]{@link companionDeviceAuth.StatusMonitor.onTemplateChange(callback: TemplateStatusCallback)}
   *     ), subscribe to available device status changes (
   *     [onAvailableDeviceChange]{@link companionDeviceAuth.StatusMonitor.onAvailableDeviceChange(callback: AvailableDeviceStatusCallback)}
   *     ), and subscribe to continuous authentication status changes (
   *     [onContinuousAuthChange]{@link companionDeviceAuth.StatusMonitor.onContinuousAuthChange(param: ContinuousAuthParam, callback: ContinuousAuthStatusCallback)}
   *     ).
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @throws { BusinessError } 32600002 - The local user is not found.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getStatusMonitor(localUserId: int): StatusMonitor;

  /**
   * Returns the result of companion device selection. It is used to return the device information and extended context
   * selected by the user in the device selection callback.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DeviceSelectResult {
    /**
     * Device information list. It contains the business identifier information of the devices selected by the user.
     * Each **DeviceKey** contains the device ID type, device ID, device user ID, and device sub-identity credential ID.
     * The system performs subsequent template addition or authentication operations based on this information.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceKeys: DeviceKey[];

    /**
     * Device selection context. Carries extended information in JSON format (the specific fields are defined by the
     * service party), which can be used to pass additional parameters during device selection. If this field is not
     * provided, it is empty by default and carries no extended information.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    selectionContext?: Uint8Array;
  }

  /**
   * Defines the callback triggered for the companion device selection. When the system requires the user to select a
   * companion device (for example, when adding a template or performing authentication), this callback is triggered.
   * The application needs to return the information about the selected device.
   *
   * @param { int } selectPurpose - Selection purpose. Used to identify the intent of the current device selection. For
   *     the values, see [SelectPurpose]{@link companionDeviceAuth.SelectPurpose}. **SELECT_ADD_DEVICE(1)** indicates
   *     selecting a device for adding a template, and **SELECT_AUTH_DEVICE(2)** indicates selecting an authentication
   *     device. Vendors can define extended values (greater than or equal to 10000). The application should return a
   *     **DeviceSelectResult** containing the corresponding device information based on **selectPurpose**.
   * @returns { DeviceSelectResult } Used to return the device information selected by the user to the system, so that
   *     the system can perform subsequent template addition or authentication operations. Contains the list of device
   *     information selected by the user (**deviceKeys**) and the optional extended context (**selectionContext**).
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type DeviceSelectCallback = (selectPurpose: int) => DeviceSelectResult;

  /**
   * Registers a callback for companion device selection. When the system requires the user to select a companion
   * device, this callback is triggered. The application needs to return the information about the selected device in
   * the callback. Through this callback, the application can implement custom device selection logic, for example,
   * displaying a device selection screen for the user to select a device.
   *
   * @permission ohos.permission.USE_USER_IDM
   * @param { DeviceSelectCallback } callback - Callback for companion device selection. When the system invokes this
   *     callback, it passes in the selection purpose (**selectPurpose**), and the application returns a
   *     **DeviceSelectResult** containing the corresponding device information based on **selectPurpose**.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function registerDeviceSelectCallback(callback: DeviceSelectCallback): void;

  /**
   * Unregisters a callback for companion device selection. After the callback is unregistered, the system will no
   * longer invoke the device selection callback registered by the application, and the device selection will fall back
   * to the default system behavior.
   *
   * @permission ohos.permission.USE_USER_IDM
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function unregisterDeviceSelectCallback(): void;

  /**
   * Updates the business scope supported by the specified companion device template. This API is used to modify the
   * list of business IDs enabled for a registered template, thereby controlling the business scenarios in which the
   * template can be used. This API uses a promise to return the result.
   *
   * Effective mechanism: The update takes effect immediately. The next authentication is determined based on the new
   * business scope, without the need to restart the application or re-authenticate.
   *
   * @permission ohos.permission.USE_USER_IDM
   * @param { Uint8Array } templateId - ID of the target template. Unique ID of the template whose business scope is to
   *     be updated, which can be obtained through
   *     [getTemplateStatus]{@link companionDeviceAuth.StatusMonitor.getTemplateStatus}.
   * @param { int[] } enabledBusinessIds - Set of business IDs supported by the template. That is, list of business
   *     scenarios to enable, for example, **[BusinessId.DEFAULT]**. Different business IDs correspond to different
   *     authentication scenarios, and applications can configure them based on business requirements (vendor-defined
   *     business IDs must be ≥ 10000).
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @throws { BusinessError } 32600002 - The template is not found.
   * @throws { BusinessError } 32600003 - The business ID is invalid.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function updateEnabledBusinessIds(templateId: Uint8Array, enabledBusinessIds: int[]): Promise<void>;
  /**
   * Defines the passcode submission callback. The application submits the passcode entered by the user to the system
   * through this callback.
   *
   * @param { Uint8Array } passcode - Passcode entered by the user.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  type PasscodeSubmitCallback = (passcode: Uint8Array) => void;

  /**
   * Defines the parameters of a passcode input request, used to pass context information such as the challenge value.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface PasscodePromptParams {
    /**
     * Challenge value issued by the system when a passcode is requested.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    challenge: Uint8Array;
  }

  /**
   * Defines the callback type for a passcode request. When the system requires the user to enter a passcode, this
   * callback is invoked, and the application needs to submit the passcode entered by the user through the **submit**
   * callback.
   *
   * @param { PasscodeSubmitCallback } submit - Callback invoked to submit the passcode. After receiving the passcode
   *     entered by the user, the application submits the passcode to the system through this callback.
   * @param { PasscodePromptParams } params - Parameters of the passcode input request, including the challenge value
   *     and other information.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  type PasscodePromptCallback =
      (submit: PasscodeSubmitCallback, params: PasscodePromptParams) => void;

  /**
   * Registers a passcode request callback. This callback is invoked when the system requests a passcode. If a callback
   * has already been registered, the new callback replaces the original one.
   *
   * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
   * @param { PasscodePromptCallback } callback - Passcode request callback. Invoked when the system requests a
   *     passcode.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function registerPasscodePromptCallback(callback: PasscodePromptCallback): void;

  /**
   * Unregisters the passcode request callback. After unregistration, the system no longer invokes the passcode request
   * callback registered by the application.
   *
   * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function unregisterPasscodePromptCallback(): void;
}

export default companionDeviceAuth;