/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * @file NotificationSubscribeInfo
 * @kit NotificationKit
 */

import type notificationManager from '../@ohos.notificationManager';

/**
 * The **NotificationSubscribeInfo** module provides APIs for defining the information about the notification 
 * subscriber.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationSubscribeInfo {
  /**
   * Bundle names of the applications whose notifications are to be subscribed to. If this parameter is not specified, 
   * the subscription defaults to notifications from all applications.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  bundleNames?: Array<string>;

  /**
   * User ID. If this parameter is not specified, the subscription defaults to notifications from the current user ID.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  userId?: int;

  /**
   * Device type. If this parameter is not specified, the subscription defaults to notifications from the current 
   * device. The value is obtained based on [device information]{@link @ohos.deviceInfo:deviceInfo}.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  deviceType?: string;

  /**
   * [Notification slot](docroot://notification/notification-glossary.md#notification-slot) type. If this parameter is 
   * not passed, notifications of all slot types are subscribed to by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  slotTypes?: Array<notificationManager.SlotType>;

  /**
   * Notification filtering range. The default value is **0**. The options are as follows:
   *
   * - **0**: All notifications are included in the subscription.
   * - **1**: Filter out notifications whose slot type is 
   * [SOCIAL_COMMUNICATION]{@link @ohos.notificationManager:notificationManager.SlotType} and 
   * [userInput]{@link ./notificationActionButton:NotificationActionButton} is empty.
   * - **2**: Filter out notifications whose slot type is 
   * [SOCIAL_COMMUNICATION]{@link @ohos.notificationManager:notificationManager.SlotType} and 
   * [userInput]{@link ./notificationActionButton:NotificationActionButton} is not empty.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  filterLimit?: long;

  /**
   * Configuration options for notification voice broadcast.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  voiceContentOptions?: VoiceContentOptions;

  /**
   * [Live view notification](docroot://notification/notification-glossary.md#live-view-notification) image 
   * configuration options.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  pictureOptions?: PictureOptions;

  /**
   * Whether to enable notification classification.
   *
   * - **true**: yes.
   * - **false**: no. The default value is **false**.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enableClassification?: boolean;

  /**
   * Whether to enable silent replay upon subscription.
   *
   * - **true**: yes.
   * - **false**: no. The default value is **false**.
   *
   * After this feature is enabled, historical notifications are silently re-pushed upon the first subscription, without
   * ringing or vibration reminders.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  needSilentReplayOnSubscribe?: boolean;
}

/**
 * Describes the configuration options for notification voice broadcast.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface VoiceContentOptions {
  /**
   * Whether to subscribe to the voice broadcast content of a notification.
   *
   * - **true**: yes.
   * - **false**: no. The default value is **false**.
   *
   * @default false
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enabled?: boolean;
}

/**
 * Describes the image options of the live notification.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface PictureOptions {
  /**
   * Subscribes to the image information in **extraInfo** of 
   * [NotificationLiveViewContent]{@link ./notificationContent:NotificationLiveViewContent} in a common live 
   * notification. The input parameter is the **Key** of the image file name that needs to be parsed into the pixelMap 
   * format in **extraInfo**.
   *
   * When the application publishes a common live notification, the parsed image information is called back to the 
   * subscriber through [onConsume]{@link ./notificationSubscriber:NotificationSubscriber.onConsume} and stored in 
   * **pictureInfo** of **NotificationLiveViewContent**.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  preparseLiveViewPicList?: string[];
}