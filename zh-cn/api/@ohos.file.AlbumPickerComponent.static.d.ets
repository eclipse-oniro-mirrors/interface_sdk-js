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
 * AlbumPickerComponent是相册选择组件，相册选择组件适用于需要在应用内展示相册列表让用户选择相册浏览图片或视频的场景，例如社交媒体应用中让用户选择相册进行照片上传。通过此组件，应用无需申请相册访问权限即可访问公共目录中
 * 的相册列表，做到了简化权限申请流程、降低开发成本，从而提升了用户体验。
 * 
 * 相册选择组件需配合图片选择器组件一起使用。当用户选择相册后，系统触发onAlbumClick回调并将AlbumInfo（包含相册URI和名称）传递给应用。应用需通过PickerController将URI传递给图片选择器组件以刷新显示
 * 对应相册的图片和视频。详细协作机制请参见文档[@ohos.file.PhotoPickerComponent (PhotoPicker组件)]{@link @ohos.file.PhotoPickerComponent}。
 * 
 * 相册选择组件不支持嵌套，且不应在该组件上覆盖设置overlay属性或更高层级组件，以免导致手势事件失效。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > - 该组件不支持[同层渲染](docroot://web/web-same-layer.md)。
 * 
 * ###### 属性
 * 
 * 支持[通用属性]{@link ./@internal/component/ets/common}。
 *
 * @file Album Picker组件
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
 * 应用可以在布局中嵌入相册选择组件，通过此组件，应用无需申请权限，即可访问公共目录中的相册列表。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Component
export declare struct AlbumPickerComponent {
  /**
     * AlbumPicker的配置信息。
     *
   * @type { ?AlbumPickerOptions }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  albumPickerOptions?: AlbumPickerOptions;

  /**
     * 用户选择某个相册时产生的回调事件，将相册uri给到应用。不对返回值做特殊处理。
     *
   * @type { ?AlbumClickCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onAlbumClick?: AlbumClickCallback;

  /**
     * 点击相册组件空白区域时产生的回调事件，并将该次点击通知给应用。
     *
   * @type { ?EmptyAreaClickCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onEmptyAreaClick?: EmptyAreaClickCallback;

  /**
     * 应用可通过AlbumPickerController向组件发送数据。
     *
   * @type { ?AlbumPickerController }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  albumPickerController?: AlbumPickerController;

  /**
   * AlbumPickerComponent的build方法
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @Builder
  build(): void;
}

/**
 * 点击相册组件空白区域时产生的回调事件。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type EmptyAreaClickCallback = () => void;

/**
 * 点击相册组件时产生的回调事件。
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
 * Album Picker配置选项。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class AlbumPickerOptions {
  /**
     * 相册列表主题颜色，包括跟随系统、浅色模式以及深色模式，默认为跟随系统。
     *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public themeColorMode?: PickerColorMode;

  /**
     * 相册组件过滤参数，可筛选只显示图片、视频或者图片和视频。若未配置此参数，则相册组件显示图片和视频类型的所有资源。
     *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public filterType?: photoAccessHelper.PhotoViewMIMETypes;

  /**
     * 字体大小，取值范围参考[fontSize]{@link TextAttribute#fontSize}。若未设置此参数，则使用系统默认字体大小。也可通过
     * [AlbumPickerController]{@link AlbumPickerController}.setFontSize动态设置字体大小。
     *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public fontSize?: int | string;
}

/**
 * 相册相关信息。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class AlbumInfo {
  /**
     * 相册的uri。
     *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public uri?: string;

  /**
     * 相册的名称。
     *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public albumName?: string;
}

/**
 * 应用可通过AlbumPickerController向组件发送数据。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Observed
export declare class AlbumPickerController {
  /**
     * 应用可通过该接口设置相册列表的字体大小。需要在创建相册选择组件时传入albumPickerController参数。
     *
   * @param { int | string } fontSize - 字体大小，取值范围参考[fontSize]{@link TextAttribute#fontSize}。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public setFontSize(fontSize: int | string): void;
}