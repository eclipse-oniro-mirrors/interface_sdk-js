/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit NotificationKit
 */

/**
 * @typedef ActionResult
 * @syscap SystemCapability.Notification.Notification
 * @since 3
 * @deprecated since 7
 */
export interface ActionResult {
  /**
   * Bundle name of the application to be redirected to after the notification is clicked.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 3
   * @deprecated since 7
   */
  bundleName: string;

  /**
   * Ability name of the application to be redirected to after the notification is clicked.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 3
   * @deprecated since 7
   */
  abilityName: string;

  /**
   * URI of the page to be redirected to. The supported URI formats are as follows:
   * 1. Absolute path of the page, which is provided by the pages list in the config.json file. Example:
   * pages/index/index
   * pages/detail/detail
   * 2. Particular path. If the value is a slash (/), the home page is displayed.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 3
   * @deprecated since 7
   */
  uri: string;
}

/**
 * @typedef ShowNotificationOptions
 * @syscap SystemCapability.Notification.Notification
 * @since 3
 * @deprecated since 7
 */
export interface ShowNotificationOptions {
  /**
   * Notification title.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 3
   * @deprecated since 7
   */
  contentTitle?: string;

  /**
   * Notification content.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 3
   * @deprecated since 7
   */
  contentText?: string;

  /**
   * Action triggered after the notification is clicked.
   *
   * @type { ?ActionResult }
   * @syscap SystemCapability.Notification.Notification
   * @since 3
   * @deprecated since 7
   */
  clickAction?: ActionResult;
}

/**
 * Manages notifications.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 3
 * @deprecated since 7
 * @useinstead ohos.notification/notification
 */
declare class Notification {
  /**
   * Displays the notification.
   *
   * @param { ShowNotificationOptions } [options] - Options.
   * @syscap SystemCapability.Notification.Notification
   * @since 3
   * @deprecated since 7
   */
  static show(options?: ShowNotificationOptions): void;
}

export default Notification;