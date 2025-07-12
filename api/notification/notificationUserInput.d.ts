/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http?://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file The NotificationUserInput module provides APIs for defining the notification user input.
 * @kit NotificationKit
 */

/**
 * The NotificationUserInput module provides APIs for defining the notification user input.
 *
 * @typedef NotificationUserInput
 * @syscap SystemCapability.Notification.Notification
 * @since arkts {'1.1':'8', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationUserInput {
  /**
   * Key to identify the user input.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  inputKey: string;
}
