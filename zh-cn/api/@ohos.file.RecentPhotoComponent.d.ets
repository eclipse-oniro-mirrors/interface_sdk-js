/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * RecentPhotoComponent是最近图片组件，应用可以在布局中嵌入最近图片组件，通过此组件，应用无需申请权限，即可指定配置访问公共目录中最近的一个照片或视频文件。授予的权限仅包含只读权限。该组件适用于需要快速展示或选择最近照
 * 片或视频的场景，如聊天应用发送照片、社交应用快速分享等。
 * 
 * 最近图片组件不支持嵌套，且不应在该组件上覆盖设置overlay属性或更高层级组件，以免导致手势事件失效。
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
 * @file 最近图片组件
 * @kit MediaLibraryKit
 */

import photoAccessHelper from '@ohos.file.photoAccessHelper';
import { BaseItemInfo, PickerColorMode, ErrorCallback } from '@ohos.file.PhotoPickerComponent';

/**
 * RecentPhotoComponent({ recentPhotoOptions?: RecentPhotoOptions, onRecentPhotoCheckResult?: 
 * RecentPhotoCheckResultCallback, onRecentPhotoClick: RecentPhotoClickCallback, onRecentPhotoCheckInfo?: 
 * RecentPhotoCheckInfoCallback, })
 * 
 * 应用可以在布局中嵌入最近图片组件，用于访问按创建时间排序的公共目录下最新的一个照片或视频文件。应用无需申请媒体访问权限，即可根据配置项访问。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
@Component
export declare struct RecentPhotoComponent {
  /**
   * 最近图片配置参数信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  recentPhotoOptions?: RecentPhotoOptions;

  /**
   * 最近图片查询结果回调函数。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onRecentPhotoCheckResult?: RecentPhotoCheckResultCallback;

  /**
   * 选择最近图片回调函数。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onRecentPhotoClick: RecentPhotoClickCallback;

  /**
   * 最近图片查询结果回调函数，并且返回该照片的相关信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  onRecentPhotoCheckInfo?: RecentPhotoCheckInfoCallback;

  /**
   * 当最近的图片组件发生错误时的回调。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.1 dynamic
   */
  onError?: ErrorCallback;
}

/**
 * 最近图片查询结果回调事件。
 *
 * @param { boolean } recentPhotoExists - 查询最近图片是否存在，true为存在，false为不存在。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export type RecentPhotoCheckResultCallback = (recentPhotoExists: boolean) => void;

/**
 * 用户点击最近图片组件时触发的回调事件，返回值无实际作用，可返回true或false。
 *
 * @param { BaseItemInfo } recentPhotoInfo - 最近图片信息。
 * @returns { boolean } 应用回调中处理最近图片的结果返回。true表示处理完成。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export type RecentPhotoClickCallback = (recentPhotoInfo: BaseItemInfo) => boolean;

/**
 * 最近图片是否存在查询结果以及最近图片相关信息的回调事件。
 *
 * @param { boolean } recentPhotoExists - 查询最近图片是否存在，true为存在，false为不存在。
 * @param { RecentPhotoInfo } info - 最近图片相关信息。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export type RecentPhotoCheckInfoCallback = (recentPhotoExists: boolean, info: RecentPhotoInfo) => void;

/**
 * 最近图片配置选项。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class RecentPhotoOptions {
  /**
   * 配置显示多久时间段内按创建时间排序的最新一个照片或视频，单位为秒（s），取值范围(0, 86400]。最长可配置时长为1天（86400s）。
   * 
   * 当值小于等于0、大于86400或者未设置该值时，默认显示1天内最近照片或视频。当配置时间段内无符合的照片或视频时，组件不显示。
   * 
   * **注意：**
   * 
   * 当isAutoRefreshSupported为true时，period字段失效。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  period?: number;

  /**
   * 最近图片控件显示的文件类型。可设置为IMAGE_TYPE（仅显示图片）、VIDEO_TYPE（仅显示视频）或IMAGE_VIDEO_TYPE（显示图片和视频）。默认为IMAGE_VIDEO_TYPE。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  MIMEType?: photoAccessHelper.PhotoViewMIMETypes;

  /**
   * 配置最近照片或视频显示内容的来源，比如拍照、截屏等。默认不限制来源。
   * 
   * **说明：**当isAutoRefreshSupported为true时，仍受此字段约束。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  photoSource?: PhotoSource;

  /**
   * 配置最近图片组件在符合要求的最近照片或视频发生变更（包括新增、删除、修改）时是否进行刷新。
   * 
   * 当组件原显示的最近照片或视频被删除，而无符合要求的照片或视频时，则显示占位符（可通过colorMode配置占位符颜色模式），组件不自动退出。
   * 
   * 默认为false，不支持自动刷新。
   * 
   * 配置为true时显示全部符合筛选条件的照片或视频（不受period限制，仍受photoSource和MIMEType约束）。
   * 
   * period字段失效。
   * 
   * **说明**：开启自动刷新会监听媒体库变更，建议在需要实时更新场景使用，避免频繁刷新影响性能。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  isAutoRefreshSupported?: boolean;

  /**
   * 支持应用配置占位符的颜色模式。
   * 
   * 当isAutoRefreshSupported为true，且无符合要求的最近照片或视频时，显示占位符，colorMode字段生效。
   * 
   * 默认为跟随系统深浅色模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  colorMode?: PickerColorMode;

  /**
   * 媒资过滤器，如果超过限制，则只有前50项
   * 使用。
   * **注意**
   * 1.当应用此过滤器时，其他过滤器将失效。
   * 2.设置多个条件时，请将过滤条件用括号括起来，以避免与
   * 内部筛选项。
   * 最大长度为50。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.1 dynamic
   */
  assetFilter?: Array<photoAccessHelper.OperationItem>;

  /**
   * 点击后组件是否保活。
   * true：单击后组件不会被销毁。
   * false：点击后组件会被销毁（默认）。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.1 dynamic
   */
  isPersistAfterClick?: boolean;

  /**
   * 是否在显示的照片上显示徽章。
   * true：显示徽章信息，如移动照片徽章、视频时长等。
   * false：不显示任何徽章，只显示照片缩略图。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.1 dynamic
   */
  isShowBadge?: boolean;
}

/**
 * 最近图片相关信息。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export declare class RecentPhotoInfo {
  /**
   * 最近照片/视频的拍摄时间，单位为毫秒（ms）。（距1970年1月1日的毫秒数值）。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  dateTaken?: number;

  /**
   * 最近照片/视频的名称hash值，用于辅助应用区分最新图片组件将要显示的图片/视频与之前曾显示过的图片/视频是否为同一个。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  identifier?: string;
}

/**
 * 枚举，图片或者视频数据的来源类型。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum PhotoSource {
  /**
   * 所有来源的图片、视频。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  ALL = 0,

  /**
   * 仅相机拍摄的图片、视频。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  CAMERA = 1,

  /**
   * 截屏图片或者录屏视频。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SCREENSHOT = 2
}