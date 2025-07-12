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
 * @file The NotificationActionButton module provides APIs for describing the button displayed in the notification.
 * @kit NotificationKit
 */

import { NotificationUserInput } from './notificationUserInput';

/*** if arkts 1.1 */
import { WantAgent } from '../@ohos.wantAgent';
/*** endif */
/*** if arkts 1.2 */
import { WantAgent } from '../@ohos.app.ability.wantAgent';
/*** endif */

/**
 * The NotificationActionButton module provides APIs for describing the button displayed in the notification.
 *
 * @typedef NotificationActionButton
 * @syscap SystemCapability.Notification.Notification
 * @since arkts {'1.1':'7', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationActionButton {
  /**
   * Button title.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  title: string;

  /**
   * WantAgent of the button.
   *
   * @type { WantAgent }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  wantAgent: WantAgent;

  /**
   * Extra information of the button.
   *
   * @type { ?object }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  extras?: { [key: string]: any };

  /**
   * Extra information of the button.
   *
   * @type { ?object }
   * @syscap SystemCapability.Notification.Notification
   * @since 20
   * @arkts 1.2
   */
    extras?: Record<string, Object>;

  /**
   * User input object. ID entered by a subscriber.
   *
   * @type { ?NotificationUserInput }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  userInput?: NotificationUserInput;
}
