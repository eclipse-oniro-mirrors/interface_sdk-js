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
 * @file NotificationSlot
 * @kit NotificationKit
 */

/*** if arkts dynamic */
import notification from '../@ohos.notification';
/*** endif */
/*** if arkts dynamic&static */
import type notificationManager from '../@ohos.notificationManager';
/*** endif */

/**
 * Describes the [notification slot](docroot://notification/notification-glossary.md#notification-slot). Different 
 * notification slots have different 
 * [notification reminder modes](docroot://notification/notification-glossary.md#notification-reminder-mode).
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationSlot {
  /**
   * Slot type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead NotificationSlot#notificationType
   */
  type?: notification.SlotType;

  /**
   * Slot type. Different slot types have different 
   * [notification reminder modes](docroot://notification/notification-glossary.md#notification-reminder-mode).
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  notificationType?: notificationManager.SlotType;

  /**
   * Notification level.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamiconly
   * @deprecated since 20
   * @useinstead NotificationSlot#notificationLevel
   */
  level?: notification.SlotLevel;

  /**
   * Notification level, which is used to describe the display priority and alert intensity of notifications of this 
   * slot type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 20 dynamic
   * @since 23 static
   */
  notificationLevel?: notificationManager.SlotLevel;

  /**
   * Description of the notification slot. The size cannot exceed 243 bytes, and the excess part will be truncated.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  desc?: string;

  /**
   * Whether to display the badge. The default value is **true**.
   *
   * - **true**: Display the badge.
   * - **false**: Do not display the badge.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  badgeFlag?: boolean;

  /**
   * Whether to bypass [Do Not Disturb mode](docroot://notification/notification-glossary.md#do-not-disturb-mode) in the
   * system. The default value is **false**.
   *
   * - **true**: bypasses Do Not Disturb mode, and notifications are still reminded in Do Not Disturb mode.
   * - **false**: does not bypass Do Not Disturb mode, and notifications are not reminded in Do Not Disturb mode.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  bypassDnd?: boolean;

  /**
   * Mode for displaying the notification on the lock screen. This is a reserved capability and is not supported 
   * currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lockscreenVisibility?: int;

  /**
   * Whether to enable vibration. The default value is **false**.
   *
   * - **true**: yes.
   * - **false**: no.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  vibrationEnabled?: boolean;

  /**
   * File name of the [customized ringtone](docroot://notification/notification-glossary.md#customized-ringtone) for 
   * notifications of this slot. The file is stored in the resources/rawfile directory and supports formats such as m4a,
   * aac, mp3, ogg, wav, flac, and amr. The size cannot exceed 243 bytes, and the excess part is truncated.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  sound?: string;

  /**
   * Whether to enable the light. The default value is **false**.
   *
   * - **true**: yes.
   * - **false**: no.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lightEnabled?: boolean;

  /**
   * Indicator color of the notification. This is a reserved capability and is not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lightColor?: int;

  /**
   * Vibration mode of the notification. This is a reserved capability and is not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  vibrationValues?: Array<long>;

  /**
   * Whether to allow publishing notifications of this 
   * [notification slot](docroot://notification/notification-glossary.md#notification-slot) type.
   *
   * - **true**: publishing notifications is allowed.
   * - **false**: publishing notifications is prohibited.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  readonly enabled?: boolean;

  /**
   * Reminder mode of the notification.
   *
   * - Bit 0: sound alert. The value **0** means the feature is disabled, and **1** means enabled.
   * - Bit 1: locking the screen. The value **0** means the feature is disabled, and **1** means enabled.
   * - Bit 2: banner. The value **0** means the feature is disabled, and **1** means enabled.
   * - Bit 3: turning on the screen. The value **0** means the feature is disabled, and **1** means enabled.
   * - Bit 4: vibration. The value **0** means the feature is disabled, and **1** means enabled.
   * - Bit 5: notification icon in the status bar. The value **0** means the feature is disabled, and **1** means 
   * enabled.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly reminderMode?: int;

  /**
   * Authorization status.
   *
   * - **0**: means the feature is authorized.
   * - **1**: means the feature is to be authorized.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly authorizedStatus?: int;
}
