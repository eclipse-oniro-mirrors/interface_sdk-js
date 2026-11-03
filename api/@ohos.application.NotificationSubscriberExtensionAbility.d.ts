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
 * @file ExtensionAbility for Notification Subscription
 * @kit NotificationKit
 */

import type NotificationSubscriberExtensionContext from './@ohos.application.NotificationSubscriberExtensionContext';
import { NotificationInfo } from './notification/NotificationInfo'

/**
 * NotificationSubscriberExtensionAbility is the base class of the 
 * [notification subscription](docroot://notification/notification-glossary.md#notification-subscription) extension 
 * ability, providing notification subscription related capabilities. Third-party wearable applications (such as 
 * companion applications for watches) implement callback logic by inheriting from this class, receive notification 
 * information when a notification is published on the local device and forward it to the wearable device over 
 * Bluetooth. When a local notification is canceled, they receive the cancellation callback and forward it to the 
 * wearable device to delete the corresponding notification.
 *
 * Use this module when your wearable application needs to obtain local notifications and sync them to a paired wearable
 * device. This module is used together with the **notificationExtensionSubscription** module. This module is 
 * responsible for receiving and processing notification data in callbacks, while the 
 * **notificationExtensionSubscription** module is responsible for management operations such as authorization, 
 * subscription, and unsubscription.
 *
 * @syscap SystemCapability.Notification.Notification
 * @stagemodelonly
 * @since 22 dynamic
 * @since 23 static
 */
declare class NotificationSubscriberExtensionAbility {
  /**
   * Context for the NotificationSubscriberExtensionAbility.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  context: NotificationSubscriberExtensionContext;

  /**
   * Triggered when the 
   * [notification subscription](docroot://notification/notification-glossary.md#notification-subscription) extension is
   * destroyed.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  onDestroy(): void;

  /**
   * Called when a notification is received.
   *
   * @param { NotificationInfo } notificationInfo - Callback information about the notification received in the
   *     notification subscription extension ability.
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  onReceiveMessage(notificationInfo: NotificationInfo): void;

  /**
   * Called when notifications are canceled.
   *
   * @param { Array<string> } hashCodes - List of hash codes of the notifications to cancel, obtained through
   *     [onReceiveMessage]{@link NotificationSubscriberExtensionAbility#onReceiveMessage}.
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  onCancelMessages(hashCodes: Array<string>): void;
}

export default NotificationSubscriberExtensionAbility;
