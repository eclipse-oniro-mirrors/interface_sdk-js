'use static';
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * **RecentPhotoComponent** is a UI component that allows an application to access the latest photo/video in the user 
 * directory without the required permission. This component grants the application only the read permission. This 
 * component is applicable to scenarios where the latest photos or videos need to be quickly displayed or selected, such
 * as sending photos in a chat app or quickly sharing photos in a social app.
 * 
 * Note that the recent photo component does not support nesting. Additionally, prevent overlaying components with the 
 * **overlay** attribute or of higher levels on top the component, as this will prevent it from receiving gesture 
 * events.
 * 
 * > **NOTE**
 * >
 * > - This component is supported since API version 12. Newly added APIs will be marked with a superscript to indicate 
 * > their 
 * >
 * > - This component does not support [same-layer rendering](docroot://web/web-same-layer.md).
 * 
 * ###### Properties
 * 
 * The [universal properties]{@link ./@internal/component/ets/common} are supported.
 *
 * @file RecentPhotoComponent
 * @kit MediaLibraryKit
 */

import photoAccessHelper from '@ohos.file.photoAccessHelper';
import { BaseItemInfo, PickerColorMode, ErrorCallback } from '@ohos.file.PhotoPickerComponent';
import { Component, Builder } from '@ohos.arkui.component';

/**
 * RecentPhotoComponent({ recentPhotoOptions?: RecentPhotoOptions, onRecentPhotoCheckResult?:
 * RecentPhotoCheckResultCallback, onRecentPhotoClick: RecentPhotoClickCallback, onRecentPhotoCheckInfo?:
 * RecentPhotoCheckInfoCallback, })
 *
 * Allows an app to access the latest photo or video file in the public directory The app can access media assets based
 * on parameters without requesting the permissions.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Component
export declare struct RecentPhotoComponent {
  /**
   * recentPhotoOptions
   * @type { ?RecentPhotoOptions }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  recentPhotoOptions?: RecentPhotoOptions;

  /**
   * Callback when check whether photos or videos exists
   * @type { ?RecentPhotoCheckResultCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onRecentPhotoCheckResult?: RecentPhotoCheckResultCallback;

  /**
   * Callback when select photos or videos
   * @type { RecentPhotoClickCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onRecentPhotoClick: RecentPhotoClickCallback;

  /**
   * Callback when check whether photos or videos exists and return the recent photo info
   * @type { ?RecentPhotoCheckInfoCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onRecentPhotoCheckInfo?: RecentPhotoCheckInfoCallback;

  /**
   * Callback when an error occurs in the RecentPhotoComponent.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  onError?: ErrorCallback;

  /**
   * Build function of RecentPhotoComponent
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @Builder
  build(): void;
}

/**
 * Called to return the query result of the recent image or video.
 *
 * @param { boolean } recentPhotoExists - Whether the recent image or video exists. **true** if it exists, and **false**
 *     otherwise.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type RecentPhotoCheckResultCallback = (recentPhotoExists: boolean) => void;

/**
 * Describes the callback invoked when a user taps the recent photo component. The return value is meaningless and can
 * be either **true** or **false**.
 *
 * @param { BaseItemInfo } recentPhotoInfo - Information about the recent image or video.
 * @returns { boolean } Processing result of the recent image or video. The value **true** means that the processing is
 *     complete.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type RecentPhotoClickCallback = (recentPhotoInfo: BaseItemInfo) => boolean;

/**
 * Called to return whether the recent image or video exists and the information about it.
 *
 * @param { boolean } recentPhotoExists - Whether the recent image or video exists. **true** if it exists, and **false**
 *     otherwise.
 * @param { RecentPhotoInfo } info - Information about the recent image or video.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type RecentPhotoCheckInfoCallback = (recentPhotoExists: boolean, info: RecentPhotoInfo) => void;

/**
 * Represents the configuration of the recent image or video.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class RecentPhotoOptions {
  /**
   * Time period for displaying the latest photo or video sorted by creation time, in seconds. The value range is (0,
   * 86400]. The longest duration you can set is 1 day (86400s).
   *
   * If the value is less than or equal to 0, greater than 86400, or not set, the latest photos or videos within one
   * day are displayed by default. If there is no photo or video in the specified period, the component is not
   * displayed.
   *
   * **Note:**
   *
   * When **isAutoRefreshSupported** is set to **true**, the **period** field becomes invalid.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public period?: int;

  /**
   * Types of the file displayed. The options include **IMAGE_TYPE** (only images are displayed), **VIDEO_TYPE** (only
   * videos are displayed), and **IMAGE_VIDEO_TYPE** (both images and videos are displayed). The default value is
   * **IMAGE_VIDEO_TYPE**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public MIMEType?: photoAccessHelper.PhotoViewMIMETypes;

  /**
   * Source of the recent photo or video, for example, image or video taken by the camera or screenshot. By default,
   * the source is not restricted.
   *
   * **Note:** This field is still valid when **isAutoRefreshSupported** is set to **true**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public photoSource?: PhotoSource;

  /**
   * Whether the **RecentPhotoComponent** automatically refreshes when there are changes (including additions,
   * deletions, or modifications) to the recent photos or videos that meet the requirements.
   *
   * If the component's originally displayed photo or video is deleted and there are no other photos or videos that
   * meet the requirements, a placeholder is displayed and the component does not automatically close. The placeholder
   * color mode can be configured using **colorMode**.
   *
   * The default value is **false**, indicating that automatic refresh is not supported.
   *
   * If this parameter is set to **true**, all photos or videos that meet the filter criteria are displayed. This
   * parameters is still specified by **photoSource** and **MIMEType**, but not by **period**.
   *
   * The **period** field becomes invalid.
   *
   * **Note:** If automatic refresh is enabled, media library changes are listened for. It is recommended that this
   * function be used in scenarios where real-time updates are required to avoid frequent refreshes that may affect
   * performance.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public isAutoRefreshSupported?: boolean;

  /**
   * Color mode of the placeholder.
   *
   * This setting is used when **isAutoRefreshSupported** is set to **true** and no recent photo or video meets the
   * requirements, showing a placeholder instead. The **colorMode** field takes effect.
   *
   * By default, it follows the system's dark/light color mode.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public colorMode?: PickerColorMode;

  /**
   * Media asset filter, with a maximum length of 50 items. If the limit is exceeded, only the first 50 items are
   * used.
   * **NOTE**
   * 1. When this filter is applied, other filters become invalid.
   * 2. When setting multiple conditions, enclose the filter conditions in parentheses to prevent conflicts with
   *    internal filter items.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public assetFilter?: Array<photoAccessHelper.OperationItem>;

  /**
   * Whether to keep the component alive after click.
   * true: component will not be destroyed after click.
   * false: component will be destroyed after click (default).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public isPersistAfterClick?: boolean;

  /**
   * Whether to show the badge on the displayed photo.
   * true: show the badge info, such as moving photo badge and video duration (default).
   * false: do not show any badge; only the photo thumbnail is displayed.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public isShowBadge?: boolean;
}

/**
 * Represents information about the recent image or video.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class RecentPhotoInfo {
  /**
   * Time when the recent photo or video is taken, in ms. The value is the number of milliseconds elapsed since the
   * Unix epoch (00:00:00 UTC on January 1, 1970).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public dateTaken?: long;

  /**
   * Hash value of the name of the recent photo or video, which is used to help the application determine whether the
   * image or video to be displayed is the same as the one displayed before.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public identifier?: string;
}

/**
 * Enumerates the sources of the image or video data.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum PhotoSource {
  /**
   * Image or video from all sources.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ALL = 0,

  /**
   * Image or video taken by the camera.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CAMERA = 1,

  /**
   * Screenshot or screen capture video.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SCREENSHOT = 2
}