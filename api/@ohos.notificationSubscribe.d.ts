/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file NotificationSubscribe
 * @kit NotificationKit
 */

import { AsyncCallback } from './@ohos.base';
import { BundleOption as _BundleOption } from './notification/NotificationCommonDef';
import { NotificationSubscribeInfo as _NotificationSubscribeInfo } from './notification/notificationSubscribeInfo';
import { NotificationSubscriber as _NotificationSubscriber } from './notification/notificationSubscriber';
import { SubscribeCallbackData as _SubscribeCallbackData } from './notification/notificationSubscriber';
import { EnabledNotificationCallbackData as _EnabledNotificationCallbackData } from './notification/notificationSubscriber';
import { EnabledSilentReminderCallbackData as _EnabledSilentReminderCallbackData } from './notification/notificationSubscriber';
import { EnabledSilentReminderChangedCallback as _EnabledSilentReminderChangedCallback } from './notification/notificationSubscriber';
import { EnabledPriorityNotificationCallbackData as _EnabledPriorityNotificationCallbackData } from './notification/notificationSubscriber';
import { EnabledPriorityNotificationByBundleCallbackData as _EnabledPriorityNotificationByBundleCallbackData } from './notification/notificationSubscriber';
import { VoiceContent as _VoiceContent } from './notification/notificationSubscriber';
import { VoiceContentOptions as _VoiceContentOptions } from './notification/notificationSubscribeInfo';
import { NotificationClassification as _NotificationClassification } from './notification/notificationSubscriber';
import { NotificationSwitchChangedCallback as _NotificationSwitchChangedCallback } from './notification/notificationSubscriber';
import { NotificationSwitchChangedCallbackData as _NotificationSwitchChangedCallbackData } from './notification/notificationSubscriber';
/*** if arkts dynamic */
import type { BadgeNumberCallbackData as _BadgeNumberCallbackData } from './notification/notificationSubscriber';
/*** endif */
/*** if arkts static */
import type { BadgeNumberCallbackData as _BadgeNumberCallbackData } from './notification/notificationSubscriber';
/*** endif */

/**
 * This module provides 
 * [notification subscription](docroot://notification/notification-glossary.md#notification-subscription), 
 * unsubscription, notification removal, and other capabilities. Generally, only system applications have the 
 * permissions for these operations.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace notificationSubscribe {
  /**
   * Defines the notification key value.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface NotificationKey {
    /**
     * Notification ID.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * Notification label. This parameter is left empty by default.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    label?: string;
  }

  /**
   * Defines the reasons for notification removal.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum RemoveReason {
    /**
     * The notification is removed after a click on it.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CLICK_REASON_REMOVE = 1,

    /**
     * The notification is removed by the user.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CANCEL_REASON_REMOVE = 2
  }

  /**
   * Subscribes to notifications of all applications under this user. This API uses an asynchronous callback to return 
   * the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber -
   *     [Notification subscription](docroot://notification/notification-glossary.md#notification-subscription) object.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   * @useinstead subscribeNotification(subscriber: NotificationSubscriber)
   */
  function subscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * Subscribes to notifications of this application. This API uses a promise to return the result.
   *
   * @param { NotificationSubscriber } subscriber -
   *     [Notification subscription](docroot://notification/notification-glossary.md#notification-subscription) object.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function subscribeSelf(subscriber: NotificationSubscriber): Promise<void>;

  /**
   * Subscribes to a notification with the subscription information specified. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber -
   *     [Notification subscription](docroot://notification/notification-glossary.md#notification-subscription) object.
   * @param { NotificationSubscribeInfo } info - Notification subscription information.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   * @useinstead subscribeNotification(subscriber: NotificationSubscriber, info: NotificationSubscribeInfo)
   */
  function subscribe(
    subscriber: NotificationSubscriber,
    info: NotificationSubscribeInfo,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Subscribes to a notification with the subscription information specified. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber -
   *     [Notification subscription](docroot://notification/notification-glossary.md#notification-subscription) object.
   * @param { NotificationSubscribeInfo } [info] - Notification subscription information. The default value is empty.
   *     When this parameter is empty, it indicates subscribing to notifications of all applications under the current
   *     user.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   * @useinstead subscribeNotification(subscriber: NotificationSubscriber, info: NotificationSubscribeInfo)
   */
  function subscribe(subscriber: NotificationSubscriber, info?: NotificationSubscribeInfo): Promise<void>;

  /**
   * Subscribes to notifications. After the subscription, the new message is received through the callback in the 
   * subscriber. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_SYSTEM_SUBSCRIBER
   * @param { NotificationSubscriber } subscriber -
   *     [Notification subscription](docroot://notification/notification-glossary.md#notification-subscription)
   *     subscriber.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error. Possible cause: 1.IPC communication failed.
   *     2.Memory operation error. 3.The user does not exist.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function subscribeNotification(subscriber: NotificationSubscriber): Promise<void>;

  /**
   * Subscribes to notifications. After the subscription, the new message is received through the callback in the 
   * subscriber. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_SYSTEM_SUBSCRIBER
   * @param { NotificationSubscriber } subscriber -
   *     [Notification subscriber](docroot://notification/notification-glossary.md#notification-subscription).
   * @param { NotificationSubscribeInfo } info - Notification subscription information. The default value is empty. When
   *     this parameter is empty, it indicates subscribing to notifications of all applications under the current user.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error. Possible cause: 1.IPC communication failed.
   *     2.Memory operation error. 3.The user does not exist.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function subscribeNotification(subscriber: NotificationSubscriber, info: NotificationSubscribeInfo): Promise<void>;

  /**
   * Unsubscribes from a notification. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER [since 9 - 19]
   * @param { NotificationSubscriber } subscriber -
   *     [Notification subscription](docroot://notification/notification-glossary.md#notification-subscription) object.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied. [since 9 - 19]
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function unsubscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * Unsubscribes from a notification. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER [since 9 - 19]
   * @param { NotificationSubscriber } subscriber -
   *     [Notification subscription](docroot://notification/notification-glossary.md#notification-subscription) object.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied. [since 9 - 19]
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function unsubscribe(subscriber: NotificationSubscriber): Promise<void>;

  /**
   * Removes a notification based on the bundle information and notification key. This API uses an asynchronous callback
   * to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { NotificationKey } notificationKey - Notification key.
   * @param { RemoveReason } reason - Reason for removing the notification.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function remove(
    bundle: BundleOption,
    notificationKey: NotificationKey,
    reason: RemoveReason,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Removes a notification based on the bundle information and notification key. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { NotificationKey } notificationKey - Notification key.
   * @param { RemoveReason } reason - Reason for removing the notification.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function remove(bundle: BundleOption, notificationKey: NotificationKey, reason: RemoveReason): Promise<void>;

  /**
   * Removes a notification based on the specified unique notification ID. This API uses an asynchronous callback to 
   * return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } hashCode - Unique notification ID. It is the value of **hashCode** in the
   *     [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest} object of
   *     [SubscribeCallbackData]{@link ./notification/notificationSubscriber:SubscribeCallbackData} used in the
   *     [onConsume]{@link ./notification/notificationSubscriber:NotificationSubscriber.onConsume} callback.
   * @param { RemoveReason } reason - Reason for removing the notification.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function remove(hashCode: string, reason: RemoveReason, callback: AsyncCallback<void>): void;

  /**
   * Removes specified notifications. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<String> } hashCodes - Array of unique notification IDs. It is the value of **hashCode** in the
   *     [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest} object of
   *     [SubscribeCallbackData]{@link ./notification/notificationSubscriber:SubscribeCallbackData} used in the
   *     [onConsume]{@link ./notification/notificationSubscriber:NotificationSubscriber.onConsume} callback.
   * @param { RemoveReason } reason - Reason for removing the notification.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function remove(hashCodes: Array<String>, reason: RemoveReason, callback: AsyncCallback<void>): void;

  /**
   * Removes a notification based on the specified unique notification ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } hashCode - Unique notification ID. It is the value of **hashCode** in the
   *     [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest} object of
   *     [SubscribeCallbackData]{@link ./notification/notificationSubscriber:SubscribeCallbackData} used in the
   *     [onConsume]{@link ./notification/notificationSubscriber:NotificationSubscriber.onConsume} callback.
   * @param { RemoveReason } reason - Reason for removing the notification.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function remove(hashCode: string, reason: RemoveReason): Promise<void>;

  /**
   * Removes specified notifications. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<String> } hashCodes - Array of unique notification IDs. It is the value of **hashCode** in the
   *     [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest} object of
   *     [SubscribeCallbackData]{@link ./notification/notificationSubscriber:SubscribeCallbackData} used in the
   *     [onConsume]{@link ./notification/notificationSubscriber:NotificationSubscriber.onConsume} callback.
   * @param { RemoveReason } reason - Reason for removing the notification.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function remove(hashCodes: Array<String>, reason: RemoveReason): Promise<void>;

  /**
   * Removes all notifications for a specified application. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAll(bundle: BundleOption, callback: AsyncCallback<void>): void;

  /**
   * Removes all notifications. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAll(callback: AsyncCallback<void>): void;

  /**
   * Removes all notifications for a specified user. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - User ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAll(userId: int, callback: AsyncCallback<void>): void;

  /**
   * Removes all notifications for a specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - User ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAll(userId: int): Promise<void>;

  /**
   * Removes all notifications for a specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } [bundle] - Bundle information of the specified application. Default is empty. When this
   *     parameter is empty, it indicates deleting notifications of all applications.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAll(bundle?: BundleOption): Promise<void>;

  /**
   * Triggers the 
   * [cross-device collaboration](docroot://notification/notification-glossary.md#cross-device-collaboration) operation 
   * of the specified notification (for example, cross-device notification click-to-redirect and cross-device quick 
   * reply). This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } hashcode - Unique notification ID. It is the value of **hashCode** in the
   *     [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest} object of
   *     [SubscribeCallbackData]{@link ./notification/notificationSubscriber:SubscribeCallbackData} used in the
   *     [onConsume]{@link ./notification/notificationSubscriber:NotificationSubscriber.onConsume} callback.
   * @param { OperationInfo } [operationInfo] - Cross-device collaboration operation information. When this parameter is
   *     not passed, the system default collaboration operation configuration is used.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600021 - Distributed operation timed out.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function distributeOperation(hashcode: string, operationInfo?: OperationInfo): Promise<void>;

  /**
   * Describes the 
   * [cross-device collaboration](docroot://notification/notification-glossary.md#cross-device-collaboration) operation 
   * information.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  export interface OperationInfo {
    /**
     * Operation button displayed in the notification. The value must be the same as that of **title** in 
     * [NotificationActionButton]{@link ./notification/notificationActionButton:NotificationActionButton}.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    actionName?: string;

    /**
     * User input, used to apply quick reply across devices. The value must be the same as that of **inputKey** in 
     * [NotificationUserInput]{@link ./notification/notificationUserInput:NotificationUserInput}.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    userInput?: string;

    /**
     * Type of the user click operation.
     *
     * - **0**: The user clicks the non-
     * [live view notification](docroot://notification/notification-glossary.md#live-view-notification) body.
     * - **1**: The user clicks a non-live-view notification button.
     * - **32**: The user clicks the live view notification body.
     * - **33**: The user clicks the auxiliary area of the live view notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    operationType?: int;

    /**
     * Index of the non-live view button or live view auxiliary area that the user taps.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    buttonIndex?: int;
  }

  /**
   * Describes the **BundleOption** information, that is, the bundle information of an application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type BundleOption = _BundleOption;

  /**
   * The **NotificationSubscribeInfo** module provides APIs for defining the information about the notification
   * subscriber.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationSubscribeInfo = _NotificationSubscribeInfo;

  /**
   * Provides callback methods for subscribers to receive and cancel notifications.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationSubscriber = _NotificationSubscriber;

  /**
   * Returns notification information carrying system property values.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type SubscribeCallbackData = _SubscribeCallbackData;

  /**
   * Returns the changes of the application badge enabled state.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type EnabledNotificationCallbackData = _EnabledNotificationCallbackData;

  /**
   * Returns the changes of the [silent reminder](docroot://notification/notification-glossary.md#silent-reminder)
   * switch state of application notifications.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export type EnabledSilentReminderCallbackData = _EnabledSilentReminderCallbackData;

  /**
   * Triggered for registering the [silent reminder](docroot://notification/notification-glossary.md#silent-reminder)
   * enabled state change of application notifications.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export type EnabledSilentReminderChangedCallback = _EnabledSilentReminderChangedCallback;

  /**
   * Returns the changes of the enabled state of the notification priority.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  export type EnabledPriorityNotificationCallbackData = _EnabledPriorityNotificationCallbackData;

  /**
   * Returns the changes of the enabled state of the application notification priority.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  export type EnabledPriorityNotificationByBundleCallbackData = _EnabledPriorityNotificationByBundleCallbackData;

  /**
   * Returns the changes of the application badge number.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type BadgeNumberCallbackData = _BadgeNumberCallbackData;

  /**
   * Describes the properties of the voice content options for notification subscription.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type VoiceContentOptions = _VoiceContentOptions;
  /**
   * Returns the notification voice broadcast content.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type VoiceContent = _VoiceContent;

  /**
   * Returns the notification classification information.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type NotificationClassification = _NotificationClassification;

  /**
   * Registers the callback for notification switch state changes set by the
   * [notificationManager.setNotificationSwitch]{@link @ohos.notificationManager:notificationManager.setNotificationSwitch}
   * API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type NotificationSwitchChangedCallback = _NotificationSwitchChangedCallback;

  /**
   * Returns the changes of the notification switch state.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type NotificationSwitchChangedCallbackData = _NotificationSwitchChangedCallbackData;
}

export default notificationSubscribe;