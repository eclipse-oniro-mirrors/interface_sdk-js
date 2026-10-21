
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
 * @file A component which support other applications to select recent photos or videos
 * @kit MediaLibraryKit
 */

import photoAccessHelper from '@ohos.file.photoAccessHelper';

import { BaseItemInfo, PickerColorMode, ErrorCallback } from '@ohos.file.PhotoPickerComponent';

import { Component, Builder } from '@ohos.arkui.component';

import { PickerColorMode } from '@ohos.file.PhotoPickerComponent';

/**
 * Declare struct RecentPhotoComponent
 *
 * @struct { RecentPhotoComponent }
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
   * @type { ?ErrorCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
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
 * The callback of onRecentPhotoCheckResult event
 * @typedef { function }
 * @param { boolean } recentPhotoExists - Does the recent photo exist?
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type RecentPhotoCheckResultCallback = (recentPhotoExists: boolean) => void;

/**
 * The callback of onRecentPhotoClick event
 * @typedef { function }
 * @param { BaseItemInfo } recentPhotoInfo - The item information of recent photo
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type RecentPhotoClickCallback = (recentPhotoInfo: BaseItemInfo) => boolean;

/**
 * The callback of onRecentPhotoCheckInfo event
 * @typedef { function }
 * @param { boolean } recentPhotoExists - Does the recent photo exist?
 * @param { RecentPhotoInfo } info - the recent photo info
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type RecentPhotoCheckInfoCallback = (recentPhotoExists: boolean, info: RecentPhotoInfo) => void;

/**
 * RecentPhotoOptions Object
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class RecentPhotoOptions {
  /**
   * Time range for displaying the recent images or videos, measured in seconds. After setting, the system shows
   * the latest image sorted by creation time taken within the specified time from the current moment. The longest
   * duration you can set is 2147483647 (INT_MAX) seconds.
   *
   * If the value is set to Number.POSITIVE_INFINITY, the system shows the latest one within the INT_MAX range.
   * If the value is less than or equal to 0, greater than INT_MAX, or not set, the system uses 1 day by default.
   * If there are no images or videos within the set time range, the component does not show anything.
   *
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public period?: int;

  /**
   * The Type of the file in the recent photo window.
   * @type { ?photoAccessHelper.PhotoViewMIMETypes }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public MIMEType?: photoAccessHelper.PhotoViewMIMETypes;

  /**
   * PhotoSource
   * @type { ?PhotoSource }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public photoSource?: PhotoSource;

  /**
   * isSupportAutoRefresh
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public isAutoRefreshSupported?: boolean;

  /**
   * color mode of recentPhotoComponent placeholder
   * @type { ?PickerColorMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public colorMode?: PickerColorMode;

  /**
   * Whether to keep the component alive after click.
   * true: component will not be destroyed after click.
   * false: component will be destroyed after click (default).
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public isPersistAfterClick?: boolean;

  /**
   * Media asset filter, with a maximum length of 50 items. If the limit is exceeded, only the first 50 items are
   * used.
   * **NOTE**
   * 1. When this filter is applied, other filters become invalid.
   * 2. When setting multiple conditions, enclose the filter conditions in parentheses to prevent conflicts with
   *    internal filter items.
   * @type { ?Array<photoAccessHelper.OperationItem> }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public assetFilter?: Array<photoAccessHelper.OperationItem>;

  /**
   * Whether to show the badge on the displayed photo.
   * true: show the badge info, such as moving photo badge and video duration (default).
   * false: do not show any badge; only the photo thumbnail is displayed.
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public isShowBadge?: boolean;
}

/**
 * Recent photo info
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class RecentPhotoInfo {
  /**
   * The dateTaken of photos or videos
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public dateTaken?: long;

  /**
   * The identifier of photos or videos
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public identifier?: string;
}

/**
 * Enumeration of PhotoSource type
 *
 * @enum { int } PhotoSource
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum PhotoSource {
  /**
   * all resource
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ALL = 0,

  /**
   * camera resource
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CAMERA = 1,

  /**
   * screenshot resource
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SCREENSHOT = 2
}