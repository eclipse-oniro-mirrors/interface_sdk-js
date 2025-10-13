/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * @file The NotificationContent module provides APIs for defining the notification content.
 * @kit NotificationKit
 */

import image from '../@ohos.multimedia.image';
import { Resource } from '../global/resource';
import type notificationManager from '../@ohos.notificationManager';
/*** if arkts 1.1 */
import notification from '../@ohos.notification';
import { WantAgent } from '../@ohos.wantAgent';
/*** endif */
/*** if arkts 1.2 */
import { WantAgent } from '../@ohos.app.ability.wantAgent';
/*** endif */

/**
 * Describes icon type.
 *
 * @typedef { Resource | image.PixelMap } IconType
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since arkts {'1.1':'18', '1.2':'20'}
 * @arkts 1.1&1.2
 */
type IconType = Resource | image.PixelMap;

/**
 * Describes a normal text notification.
 *
 * @typedef NotificationBasicContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Describes a normal text notification.
 *
 * @typedef NotificationBasicContent
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationBasicContent {
  /**
   * Notification title. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Notification title. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  title: string;

  /**
   * Notification content. It cannot be empty or exceed 3072 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Notification content. It cannot be empty or exceed 3072 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  text: string;

  /**
   * Additional information of the notification. It cannot exceed 3072 bytes. Excess content will be truncated.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  additionalText?: string;

  /**
   * Picture of a notification displayed on the lock screen. Currently, only the live view notification is supported.
   * The total number of the icon pixel bytes cannot exceed 192 KB (which is obtained through getPixelBytesNumber.
   * The recommended icon size is 128 × 128 pixels.
   * The display effect depends on the device capability and notification center UI style.
   *
   * @type { ?image.PixelMap }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  lockscreenPicture?: image.PixelMap;

  /**
   * Structured text of the notification. Its key or value cannot exceed 512 bytes. Excess content will be truncated.
   *
   * @type { ?Map<string, string> }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'21', '1.2':'21'}
   * @arkts 1.1&1.2
   */
  structuredText?: Map<string, string>;
}

/**
 * Describes the long text notification. This API is inherited from NotificationBasicContent.
 *
 * @typedef NotificationLongTextContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Describes the long text notification. This API is inherited from NotificationBasicContent.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationLongTextContent
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationLongTextContent extends NotificationBasicContent {
  /**
   * Long text of the notification. It cannot be an empty string and exceed 3072 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Long text of the notification. It cannot be an empty string and exceed 3072 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  longText: string;

  /**
   * Brief text of the notification. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Brief text of the notification. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  briefText: string;

  /**
   * Title of the notification in the expanded state. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Title of the notification in the expanded state. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  expandedTitle: string;
}

/**
   * Enum for live view notification option type.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
export enum LiveViewStatus {
  /**
   * Create the live view notification.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  LIVE_VIEW_CREATE = 0,
  /**
   * Batch update the live view notification.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  LIVE_VIEW_INCREMENTAL_UPDATE = 1,
  /**
   * Complete the live view notification.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  LIVE_VIEW_END = 2,
  /**
   * Full update the live view notification.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  LIVE_VIEW_FULL_UPDATE = 3
}

/**
 * Enum for live view notification task type.
 *
 * @enum { number }
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since arkts {'1.1':'18', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export enum LiveViewTypes {
  /**
   * Real-time activity live view Notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  LIVE_VIEW_ACTIVITY = 0,
  /**
   * Instant Task live view Notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  LIVE_VIEW_INSTANT = 1,
  /**
   * Long-term status task live view Notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  LIVE_VIEW_LONG_TERM = 2
}

/**
 * Describes a live view notification.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationLiveViewContent
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationLiveViewContent extends NotificationBasicContent {
  /**
   * Status of the live view (0: create, 1: batch update, 2: end, 3: full update).
   *
   * @type { LiveViewStatus }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  status: LiveViewStatus;

  /**
   * Version of the live view with the same id. (If the version number stored in the database is 0xffffffff,
   * the version number is not verified at the current operation of update or end. Otherwise, the
   * version number must be greater than the version number stored in the database.)
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  version?: number;

  /**
   * Additional information of the live view notification.
   *
   * @type { ?Record<string, Object>}
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  extraInfo?: Record<string, Object>;

  /**
   * The picture information list of the live view notification.
   *
   * @type { ?Record<string, Array<image.PixelMap>> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  pictureInfo?: Record<string, Array<image.PixelMap>>;

  /**
   * Whether to update locally.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isLocalUpdateOnly?: boolean;

  /**
   * The WantAgent instance of the clickAction field in the live view extension area.
   *
   * @type { ?WantAgent }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts{ '1.1':'20','1.2':'20'}
   * @arkts 1.1&1.2
   */
  extensionWantAgent?: WantAgent;
}

/**
 * Describes the multi-line text notification. This API is inherited from NotificationBasicContent.  
 *
 * @typedef NotificationMultiLineContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Describes the multi-line text notification. This API is inherited from NotificationBasicContent.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationMultiLineContent
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationMultiLineContent extends NotificationBasicContent {
  /**
   * Brief text of the notification. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Brief text of the notification. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  briefText: string;

  /**
   * Title of the notification in the expanded state. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Title of the notification in the expanded state. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  longTitle: string;

  /**
   * Multi-line text of the notification. It cannot exceed 1024 bytes. Excess content will be truncated.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Multi-line text of the notification. It cannot exceed 1024 bytes. Excess content will be truncated.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  lines: Array<string>;
  
  /**
   * Multi-line wantAgent of the multi-line text notification.
   * @permission ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @type { ?Array<WantAgent> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  lineWantAgents?: Array<WantAgent>;
}

/**
 * Describes the picture-attached notification. This API is inherited from NotificationBasicContent.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationPictureContent
 * @syscap SystemCapability.Notification.Notification
 * @since arkts {'1.1':'7', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationPictureContent extends NotificationBasicContent {
  /**
   * Brief text of the notification. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  briefText: string;

  /**
   * Title of the notification in the expanded state. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  expandedTitle: string;

  /**
   * Picture content of the notification. (The total number of bytes of image pixels cannot exceed 2 MB.)
   *
   * @type { image.PixelMap }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  picture: image.PixelMap;
}

/**
 * Describes the system live view notification. A third-party application cannot directly create a notification of this type.
 * After the system proxy creates a system live view, the third-party application releases a notification with the same ID to update the specified content.
 * This API is inherited from NotificationBasicContent.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationSystemLiveViewContent
 * @syscap SystemCapability.Notification.Notification
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationSystemLiveViewContent extends NotificationBasicContent {
  /**
   * Type code, which identifies the type of the service that invokes the API.
   *
   * @type { number }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  typeCode: number;

  /**
   * Capsule of the notification.
   *
   * @type { ?NotificationCapsule }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  capsule?: NotificationCapsule;

  /**
   * Button in the notification.
   *
   * @type { ?NotificationButton }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  button?: NotificationButton;

  /**
   * card button of a system live view notification.
   *
   * @type { ?Array<NotificationIconButton> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  cardButtons?: Array<NotificationIconButton>;

  /**
   * Time of the notification.
   *
   * @type { ?NotificationTime }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  time?: NotificationTime;

  /**
   * Progress of the notification.
   *
   * @type { ?NotificationProgress }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  progress?: NotificationProgress;

  /**
   * task type of a system live view notification.
   *
   * @type { number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  liveViewType?: LiveViewTypes;
}

/**
 * Describe the notification capsule.
 *
 * @typedef NotificationCapsule
 * @syscap SystemCapability.Notification.Notification
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationCapsule {
  /**
   * Title of the capsule.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  title?: string;

  /**
   * Icon of the capsule.
   *
   * @type { ?image.PixelMap }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  icon?: image.PixelMap;

  /**
   * Background color of the capsule.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  backgroundColor?: string;

  /**
   * Extended text of this capsule.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  content?: string;

  /**
   * Display time of this capsule.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  time?: number;

  /**
   * Extended button of this capsule.
   *
   * @type { ?Array<NotificationIconButton> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  capsuleButtons?: Array<NotificationIconButton>;
}

/**
 * Describes a system live view button with icon.
 *
 * @typedef NotificationIconButton
 * @syscap SystemCapability.Notification.Notification
 * @since arkts {'1.1':'18', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationIconButton {

  /**
   * button unique name.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  name: string;

  /**
   * button icon resource.
   *
   * @type { IconType }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  iconResource: IconType;

  /**
   * addition text of the icon buttion
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  text?: string;

  /**
   * hide the panel when click the icon button.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  hidePanel?: boolean;
}

/**
 * Describes the notification button.
 *
 * @typedef NotificationButton
 * @syscap SystemCapability.Notification.Notification
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationButton {
  /**
   * Button names. A maximum of three names are supported.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  names?: Array<string>;

  /**
   * Button icons. A maximum of three icons are supported.
   *
   * @type { ?Array<image.PixelMap> }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  icons?: Array<image.PixelMap>;

  /**
   * Button icon resources. A maximum of three icon resources are supported.
   *
   * @type { ?Array<Resource> }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  iconsResource?: Array<Resource>;
}

/**
 * Describes the notification timing information.
 *
 * @typedef NotificationTime
 * @syscap SystemCapability.Notification.Notification
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationTime {
  /**
   * Start time, in milliseconds.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  initialTime?: number;

  /**
   * Whether to count down.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isCountDown?: boolean;

  /**
   * Whether to pause the progress.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isPaused?: boolean;

  /**
   * Whether the time is displayed in the title.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isInTitle?: boolean;
}

/**
 * Describes the notification progress.
 *
 * @typedef NotificationProgress
 * @syscap SystemCapability.Notification.Notification
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationProgress {
  /**
   * Maximum progress value.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  maxValue?: number;

  /**
   * Current progress value.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  currentValue?: number;

  /**
   * Whether to show the progress in percentage.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isPercentage?: boolean;
}

/**
 * Describes the notification contents.
 *
 * @typedef NotificationContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Describes the notification contents.
 *
 * @typedef NotificationContent
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationContent {
  /**
   * Notification content type.
   *
   * @type { ?notification.ContentType }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 11
   * @useinstead NotificationContent#notificationContentType
   */
  contentType?: notification.ContentType;

  /**
   * Notification content type.
   *
   * @type { ?notificationManager.ContentType }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Notification content type.
   *
   * @type { ?notificationManager.ContentType }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  notificationContentType?: notificationManager.ContentType;

  /**
   * Normal text.
   *
   * @type { ?NotificationBasicContent }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Normal text.
   *
   * @type { ?NotificationBasicContent }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  normal?: NotificationBasicContent;

  /**
   * Long text.
   *
   * @type { ?NotificationLongTextContent }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Long text.
   *
   * @type { ?NotificationLongTextContent }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  longText?: NotificationLongTextContent;

  /**
   * Multi-line text.
   *
   * @type { ?NotificationMultiLineContent }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Multi-line text.
   *
   * @type { ?NotificationMultiLineContent }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  multiLine?: NotificationMultiLineContent;

  /**
   * Picture-attached.
   *
   * @type { ?NotificationPictureContent }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  picture?: NotificationPictureContent;

  /**
   * System live view. A third-party application cannot directly create a notification of this type. After the system proxy creates a system live view,
   * the third-party application releases a notification with the same ID to update the specified content.
   *
   * @type { ?NotificationSystemLiveViewContent }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  systemLiveView?: NotificationSystemLiveViewContent;

  /**
   * live-view notification.
   *
   * @type { ?NotificationLiveViewContent }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  liveView?: NotificationLiveViewContent;
}
