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
 * The **AlbumPickerComponent** displays a list of albums in an app for users to select an album to browse images or 
 * videos. For example, in a social media app, users can select an album to upload photos. With this component, apps can
 * access the album list in the public directory without requesting the album access permission. This simplifies the 
 * permission request process, reduces development costs, and improves user experience.
 * 
 * The album picker component must be used together with the photo picker component. When a user selects an album, the 
 * system triggers the **onAlbumClick** callback and passes **AlbumInfo** (including the album URI and name) to the app.
 * The app needs to pass the URI to the photo picker component through the **PickerController** to refresh the images 
 * and videos in the selected album. For details about the collaboration mechanism, see 
 * [@ohos.file.PhotoPickerComponent (PhotoPickerComponent)]{@link @ohos.file.PhotoPickerComponent}.
 * 
 * Note that the album picker component does not support nesting. Additionally, prevent overlaying components with the 
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
 * ###### Attributes
 * 
 * The [universal attributes]{@link ./@internal/component/ets/common} are supported.
 *
 * @file AlbumPickerComponent
 * @kit MediaLibraryKit
 */

import { PickerColorMode } from '@ohos.file.PhotoPickerComponent';
import photoAccessHelper from '@ohos.file.photoAccessHelper';
import { Component, Builder } from '@ohos.arkui.component';
import { Observed } from '@ohos.arkui.stateManagement';

/**
 * AlbumPickerComponent({albumPickerOptions?: AlbumPickerOptions, onAlbumClick?: (albumInfo: AlbumInfo) => boolean,
 * onEmptyAreaClick?: EmptyAreaClickCallback, albumPickerController?: AlbumPickerController })
 *
 * The album picker component embedded in the UI of an application allows the application to access the albums in the
 * user directory without any permission.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Component
export declare struct AlbumPickerComponent {
  /**
   * AlbumPickerOptions
   *
   * @type { ?AlbumPickerOptions }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  albumPickerOptions?: AlbumPickerOptions;

  /**
   * Callback when select an album, will return album uri
   *
   * @type { ?AlbumClickCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onAlbumClick?: AlbumClickCallback;

  /**
   * Callback when click the empty area of the album component
   *
   * @type { ?EmptyAreaClickCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onEmptyAreaClick?: EmptyAreaClickCallback;

  /**
   * AlbumPickerController
   *
   * @type { ?AlbumPickerController }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  albumPickerController?: AlbumPickerController;

  /**
   * Build function of AlbumPickerComponent
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @Builder
  build(): void;
}

/**
 * Called when the blank area of the **AlbumPickerComponent** is tapped.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type EmptyAreaClickCallback = () => void;

/**
 * The callback of onAlbumClick event
 *
 * @typedef { function }
 * @param { AlbumInfo } albumInfo
 * @returns { boolean } boolean
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type AlbumClickCallback = (albumInfo: AlbumInfo) => boolean;

/**
 * Represents the **AlbumPicker** configuration.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class AlbumPickerOptions {
  /**
   * Theme color of the album list. The options are **AUTO**, **Light**, and **Dark**. The default value is **AUTO**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public themeColorMode?: PickerColorMode;

  /**
   * Type of the filter. You can use it to display images, videos, or both. If this parameter is not specified, the
   * album component displays all image and video resources.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public filterType?: photoAccessHelper.PhotoViewMIMETypes;

  /**
   * Font size. For details about the value range, see [fontSize]{@link TextAttribute#fontSize}. If this parameter is
   * not set, the default font size is used. You can also dynamically set the font size using
   * [AlbumPickerController]{@link AlbumPickerController}.setFontSize.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public fontSize?: int | string;
}

/**
 * Represents album information.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class AlbumInfo {
  /**
   * Album URI.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public uri?: string;

  /**
   * Album name.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public albumName?: string;
}

/**
 * A controller that enables applications to send data to the **AlbumPickerComponent**.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Observed
export declare class AlbumPickerController {
  /**
   * Sets the font size of the album list. The **albumPickerController** parameter needs to be passed when the album
   * picker component is created.
   *
   * @param { int | string } fontSize - Font size. For details about the value range, see
   *     [fontSize]{@link TextAttribute#fontSize}.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public setFontSize(fontSize: int | string): void;
}