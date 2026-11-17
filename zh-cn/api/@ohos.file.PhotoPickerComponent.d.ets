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
 * PhotoPickerComponent是图片选择器组件，应用可以在布局中嵌入图片选择器组件，通过此组件，应用无需申请权限，即可实现媒体文件选择功能。图片选择器组件支持宫格浏览和大图预览两种视图模式，提供单选和多选两种选择模式，支持相
 * 机入口让用户拍摄新照片，并支持动态照片的预览和选择。在用户选择媒体文件后，应用即可访问用户选中的图片或视频文件。仅包含读权限。
 *
 * 图片选择器组件不支持嵌套，且不应在该组件上覆盖设置overlay属性或更高层级组件，以免导致手势事件失效。
 *
 * 应用嵌入组件后，用户可直接在图片选择器组件中选择图片或视频文件。
 *
 * > **说明：**
 * >
 * > - 该组件从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > - 该组件不支持[同层渲染](docroot://web/web-same-layer.md)。
 *
 * ###### 属性
 *
 * 支持[通用属性]{@link common}。
 *
 * @file PhotoPicker组件
 * @kit MediaLibraryKit
 */

import photoAccessHelper from '@ohos.file.photoAccessHelper';
import { AsyncCallback } from '@ohos.base';
import type image from './@ohos.multimedia.image';

/**
 * PhotoPickerComponent({ pickerOptions?: PickerOptions, onSelect?: (uri: string) => void, onDeselect?: (uri: string) =>
 * void, onItemClicked?: (itemInfo: ItemInfo, clickType: ClickType) => boolean, onItemClickedNotify?:
 * ItemClickedNotifyCallback, onEnterPhotoBrowser?: (photoBrowserInfo: PhotoBrowserInfo) => boolean, onExitPhotoBrowser?
 * : (photoBrowserInfo: PhotoBrowserInfo) => boolean, onPickerControllerReady?: () => void, onPhotoBrowserChanged?: (
 * browserItemInfo: BaseItemInfo) => boolean, onSelectedItemsDeleted?: ItemsDeletedCallback, onExceedMaxSelected?:
 * ExceedMaxSelectedCallback, onCurrentAlbumDeleted?: CurrentAlbumDeletedCallback, onVideoPlayStateChanged?:
 * videoPlayStateChangedCallback, pickerController: PickerController })
 *
 * 应用可以在布局中嵌入图片选择器组件，通过此组件，应用无需申请权限，即可访问公共目录中的图片或视频文件。
 *
 * > **说明：**
 * >
 * > - 如果当前图片选择器组件嵌套在Tabs组件中使用，Tabs组件的左右滑动会与图片选择大图界面的左右滑动切换手势发生冲突。
 * >
 * > -可在进退大图的回调中设置Tabs组件是否支持滑动来规避，该问题将在后续版本修复。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
@Component
export declare struct PhotoPickerComponent {
  /**
   * picker配置参数信息
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  pickerOptions?: PickerOptions;

  /**
   * 用户在Picker组件中勾选图片时产生的回调事件，将图片uri报给应用
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onSelect?: (uri: string) => void;

  /**
   * 用户在Picker组件中取消勾选图片时产生的回调事件，同时也会将图片uri报给应用。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onDeselect?: (uri: string) => void;

  /**
   * 用户在picker组件中点击宫格产生的回调事件。
   * 点击图片（缩略图宫格）时，返回值为true则勾选此图片，否则不响应勾选，URI不授权；点击相机宫格，返回值为true则拉起系统相机，否则不拉起相机，由应用自行处理。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onItemClicked?: (itemInfo: ItemInfo, clickType: ClickType) => boolean;

  /**
   * 点击进入大图时产生的回调事件，将大图相关信息报给应用。不对返回值做特殊处理。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onEnterPhotoBrowser?: (photoBrowserInfo: PhotoBrowserInfo) => boolean;

  /**
   * 退出大图时产生的回调事件，将大图相关信息报给应用。不对返回值做特殊处理。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onExitPhotoBrowser?: (photoBrowserInfo: PhotoBrowserInfo) => boolean;

  /**
   * 当pickerController可用时产生的回调事件。
   * 调用PickerController相关接口需在该回调后才能生效。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onPickerControllerReady?: () => void;

  /**
   * 大图左右滑动时产生的回调事件，将大图相关信息报给应用。仅在多选模式下生效。不对返回值做特殊处理。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onPhotoBrowserChanged?: (browserItemInfo: BaseItemInfo) => boolean;

  /**
   * 已勾选的图片被删除时产生的回调，并将被删除图片的相关信息回调给应用。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  onSelectedItemsDeleted?: ItemsDeletedCallback;

  /**
   * 选择达到最大选择数量（最大图片选择数量或者是最大视频选择数量亦或是总的最大选择数量）之后再次点击勾选时产生的回调
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  onExceedMaxSelected?: ExceedMaxSelectedCallback;

  /**
   * 当前相册被删除时产生的回调。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  onCurrentAlbumDeleted?: CurrentAlbumDeletedCallback;

  /**
   * 大图页视频播放状态改变时回调。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  onVideoPlayStateChanged?: videoPlayStateChangedCallback;

  /**
   * 用户在Picker组件中打开/关闭动态效果时产生的回调。将图片uri和动态照片状态报给应用。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  onMovingPhotoBadgeStateChanged?: MovingPhotoBadgeStateChangedCallback;

  /**
   * 宫格视图进入到大图视图、大图浏览切换时产生的回调。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  onPhotoBrowserChangeStart?: PhotoBrowserChangeStartCallback;

  /**
   * 用户在picker组件中点击宫格产生的回调事件。
   * 应用可执行自身是否选中逻辑，需要配合addData方法一同使用，通过SET_ITEM_CLICK_RESULT进行选中或不选中。若未设置选中结果，在2秒或PhotoPicker被关闭时取消授权。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  onItemClickedNotify?: ItemClickedNotifyCallback;

  /**
   * 用户在Picker组件滑动停止、处于宫格内容起始位置时的回调。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  onScrollStopAtStart?: ScrollStopAtStartCallback;

  /**
   * 用户在Picker组件滑动停止、处于宫格内容结束位置时的回调。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  onScrollStopAtEnd?: ScrollStopAtEndCallback;

  /**
   * 宫格捏合时产生的回调事件。仅在GridPinchModeType配置为FULL_FUNCTION_GRID时被触发。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  onPinchGridSwitched?: PinchGridSwitchedCallback;

  /**
   * 使用PhotoPickerComponent组件发生错误时产生的回调。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  onError?: ErrorCallback;

  /**
   * 当照片拾取器恢复之前的网格状态时的回调。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onPickerRecovery?: PickerRecoveryCallback;

  /**
   * 大图浏览时，缩放比例发生变化时的回调。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onPhotoBrowserZoom?: PhotoBrowserZoomCallback;

  /**
   * 点击不可选项时的回调。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.1 dynamic
   */
  onUnselectableItemClicked?: UnselectableItemClickedCallback;

  /**
   * 当选择器状态在默认状态和搜索状态之间更改时调用。
   * 初始状态为PickerState.DEFAULT。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onPickerStateChanged?: PickerStateChangedCallback;

  /**
   * 当用户在搜索页面点击推荐标签时调用。
   * 标签可以是纯文本标签，也可以是智能实体标签。
   * 第三方应用可以使用回调payload来渲染自己的搜索框。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onRecommendedLabelClicked?: RecommendedLabelClickedCallback;

  /**
   * 应用可通过PickerController向Picker组件发送数据。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  @ObjectLink
  pickerController: PickerController;

  /**
   *
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  @Builder
  build(): void;
}

/**
 * 应用可通过PickerController向picker组件发送数据。
 *
 * > **说明：**
 * >
 * > 调用本接口前需确保onPickerControllerReady回调已触发，否则接口调用不生效。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
@Observed
export declare class PickerController {
  /**
   * 应用可通过该接口向picker组件发送数据，并通过DataType来区分具体发送的数据类型。
   *
   * @param { DataType } dataType - 发送数据的数据类型。
   * @param { Object } data - 发送的数据。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  setData(dataType: DataType, data: Object): void;

  /**
   * 应用可通过该接口向picker组件发送增加配置数据。通过DataType来区分具体发送的数据类型。在API version 23之前，该方法仅支持SET_BADGE_CONFIGS类型。
   *
   * @param { DataType } dataType - 发送增加配置数据的数据类型。
   * @param { Object } data - 发送的增加配置数据。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  addData(dataType: DataType, data: Object): void;

  /**
   * 应用可通过该接口向picker组件发送移除配置数据。通过DataType来区分具体发送的数据类型，该方法仅支持SET_BADGE_CONFIGS类型。
   *
   * @param { DataType } dataType - 发送移除配置数据的数据类型。
   * @param { Object } data - 发送的移除配置数据。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  deleteData(dataType: DataType, data: Object): void;

  /**
   * 应用可通过该接口，实时地设置图片的最大选择数量、视频的最大选择数量以及总的最大选择数量。
   *
   * @param { MaxSelected } maxSelected - 最大选择数量。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  setMaxSelected(maxSelected: MaxSelected): void;

  /**
   * 应用可通过该接口，切换图片选择器组件至大图浏览模式浏览图片；当已处于大图浏览模式时，切换浏览的图片。
   *
   * > **说明：**
   * >
   * > 当PickerOptions.singleLineConfig配置为单行模式时，本接口调用将无效。
   *
   * @param { string } uri - 指定大图浏览的图片URI。应用仅可指定用户已选择的图片，未选择的图片不生效。
   * @param { PhotoBrowserRange } [photoBrowserRange] - 打开大图浏览模式后，左右滑动切换浏览图片的范围，可配置仅浏览用户选择的或浏览全部图片，视频。默认：
   *     PhotoBrowserRange.ALL。浏览全部图片，视频。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  setPhotoBrowserItem(uri: string, photoBrowserRange?: PhotoBrowserRange): void;

  /**
   * 应用可通过该接口，向picker发送退出大图的通知。
   *
   * > **说明：**
   * >
   * > 当PickerOptions.singleLineConfig配置为单行模式时，本接口调用将无效。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  exitPhotoBrowser(): void;

  /**
   * 应用可通过该接口，设置大图页除预览组件外的其他UI元素是否可见。不设置则默认可见。
   *
   * > **说明：**
   * >
   * > 当PickerOptions.singleLineConfig配置为单行模式时，本接口调用将无效。
   *
   * @param { Array<PhotoBrowserUIElement> } elements - 大图页大图预览组件外其他UI元素。
   * @param { boolean } isVisible - 设置的elements元素是否可见。true表示可见，false表示不可见。默认值为false。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  setPhotoBrowserUIElementVisibility(elements: Array<PhotoBrowserUIElement>, isVisible: boolean): void;

  /**
   * 应用可通过该接口，将图片选择器组件中用户勾选的图片替换为应用后期编辑修改后的图片。
   *
   * @param { string } originalUri - 原URI，将会被替换掉的URI。
   * @param { string } newUri - 新URI，即替换后的URI。期望在图片选择器组件上替换originalUri显示的、暂存在应用沙箱的图片或视频的URI。
   * @param { AsyncCallback<void> } callback - 调用接口完成替换后的回调。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 15 dynamic
   */
  replacePhotoPickerPreview(originalUri: string, newUri: string, callback: AsyncCallback<void>): void;

  /**
   * 应用可通过该接口，保存对应URI列表的文件。使用时，一般结合[replacePhotoPickerPreview]{@link PickerController#replacePhotoPickerPreview}接口使用，将替换
   * 显示成功后的应用沙箱图片/视频newUris保存到图库。
   *
   * @param { Array<string> } trustedUris - 需要保存到图库的应用沙箱图片/视频URI。trustedUris一般来自
   *     [replacePhotoPickerPreview]{@link PickerController#replacePhotoPickerPreview}替换显示成功的newUri。
   * @param { AsyncCallback<Array<string>> } callback - 返回保存后新生成的媒体库文件对应的URI。
   * @param { Array<PhotoCreationConfig> } [configs] - 需要保存的文件对应的配置参数。
   *     <br>**注意：**
   *     <br>1. 传入subtype选项，配置项不生效，仅支持保存DEFAULT类型图片。
   *     <br>默认使用trustedUris对应mediaItem的title、fileNameExtension和photoType值，且subtype固定为DEFAULT。
   *     <br>2. 该参数在[SaveMode]{@link SaveMode}为OVERWRITE下不生效。
   * @param { SaveMode } [saveMode] - 图片保存模式。
   *     <br>默认使用SAVE_AS模式保存为新图片。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 15 dynamic
   */
  saveTrustedPhotoAssets(trustedUris: Array<string>, callback: AsyncCallback<Array<string>>,
    configs?: Array<photoAccessHelper.PhotoCreationConfig>, saveMode?: SaveMode): void;

  /**
   * 应用可通过该接口保存对应URI列表中的文件。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 此接口通常与[replacePhotoPickerPreview]{@link PickerController#replacePhotoPickerPreview}接口结合使用，以保存替换显示成功后的应用沙箱图片或视频
   * > newUris到图库。
   *
   * @param { Array<string> } trustedUris - 需要保存到图库的应用沙箱图片或视频URI。
   *     <br>trustedUris一般来自[replacePhotoPickerPreview]{@link PickerController#replacePhotoPickerPreview}替换显示成功后的应用沙箱图片或
   *     视频newUri。
   * @param { Array<photoAccessHelper.CreationSetting> } [settings] - 需要保存的文件对应的配置参数。
   *     <br>默认使用trustedUris对应mediaItem的title、fileNameExtension和photoType值。
   * @param { SaveMode } [saveMode] - 图片或视频的保存模式。
   *     <br>默认使用SAVE_AS模式保存为新图片。
   * @returns { Promise<Array<string>> } Promise对象，返回保存后新生成的媒体库文件对应的URI数组。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  saveTrustedPhotoAssetsEx(trustedUris: Array<string>,settings?: Array<photoAccessHelper.CreationSetting>,
    saveMode?: SaveMode): Promise<Array<string>>;

  /**
   * 应用通过该接口，更新图片选择器组件的属性。使用Promise异步回调。
   *
   * @param { UpdatablePickerConfigs } updateConfig - 支持更新的图片选择器组件属性，为[PickerOptions]{@link PickerOptions}的子集。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  updatePickerOptions(updateConfig: UpdatablePickerConfigs): Promise<void>;

  /**
   * 应用通过该接口，设置大图浏览下当前动态照片的效果。使用Promise异步回调。
   *
   * 仅在大图浏览下设置生效，不支持设置NOT_MOVING_PHOTO。
   *
   * @param { photoAccessHelper.MovingPhotoBadgeStateType } movingPhotoState - 设置当前大图动态照片的状态。仅支持设置MOVING_PHOTO_ENABLED和
   *     MOVING_PHOTO_DISABLED，不支持设置NOT_MOVING_PHOTO。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
   *     1. An invalid enumeration value was passed. Only MOVING_PHOTO_ENABLED and
   *     MOVING_PHOTO_DISABLED are supported for configuration.
   * @throws { BusinessError } 23800202 - Invalid call context. Possible causes:
   *     1. The API is called outside the photo browsing scenario.
   *     2. The API is called when isMovingPhotoBadgeShown is already set to true.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  setMovingPhotoState(movingPhotoState: photoAccessHelper.MovingPhotoBadgeStateType): Promise<void>;

  /**
   * 应用可通过该接口，在Picker界面完成选择操作后获取完整现场数据，下一次启动Picker时可以使用该数据恢复现场。
   *
   * @returns { Promise<CompletedResult> } Promise对象，返回恢复现场的信息。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  completed(): Promise<CompletedResult>;

  /**
   * 进入Picker的搜索页面。
   *
   * 呼叫生效的前提条件：
   * -picker已经被初始化（onPickerControllerReady已经被调用）。
   * -选择器选项`isSearchSupported`设置为`false`。
   *
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 23800202 - Invalid call context. That is, one of the
   *     following conditions is met:
   *     1. The picker is not ready (onPickerControllerReady has not been invoked).
   *     2. The search UI is rendered by the picker itself (that is, `isSearchSupported`
   *        is set to `true`).
   *     3. The picker is in the photo browsing view.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability.
   *     <br>2. The chip does not support the capability.
   *     <br>3. A dependent service feature is not supported.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  enterSearchPage(): Promise<void>;

  /**
   * 退出搜索页面，选择器返回默认相册网格。
   *
   * 前提条件：
   * -选择器当前处于搜索状态（PickerState.SEARCH）。
   *
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 23800202 - Invalid call context: the picker is not in the search state.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability.
   *     <br>2. The chip does not support the capability.
   *     <br>3. A dependent service feature is not supported.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  exitSearchPage(): Promise<void>;

  /**
   * Navigates back one level within the search page.
   * 在搜索页面中返回一层。
   * 第一个调用从搜索结果页面返回到搜索推荐页面。
   * 并且随后的调用从搜索推荐页面返回到默认的
   * 相册网格（相当于exitSearch）。
   *
   * 前提条件：
   * -选择器当前处于搜索状态（PickerState.SEARCH）。
   *
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 23800202 - Invalid call context: the picker is not in the search state.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability.
   *     <br>2. The chip does not support the capability.
   *     <br>3. A dependent service feature is not supported.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  navigateBackInSearchPage(): Promise<void>;

  /**
   * 使用给定的搜索信息调用选择器搜索功能。
   * picker显示搜索结果页面和onPickerStateChanged回调
   * 如果选择器尚未处于搜索状态，则使用PickerState.SEARCH调用。
   *
   * 前提条件：
   * -选择器当前处于搜索状态（PickerState.SEARCH）。
   * 如果picker处于默认状态，则先调用enterSearch。
   * -`searchInfo.text`和`searchInfo.smartEntityIds`至少有一个为非空。
   *
   * @param { SearchInfo } searchInfo - 搜索信息。
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 23800151 - Scene parameter check failed: empty search info or invalid entity id.
   * @throws { BusinessError } 23800202 - Invalid call context: the picker is not in the search state.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability.
   *     <br>2. The chip does not support the capability.
   *     <br>3. A dependent service feature is not supported.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  search(searchInfo: SearchInfo): Promise<void>;
}

/**
 * Picker配置选项，继承自
 * [photoAccessHelper.BaseSelectOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.BaseSelectOptions}。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class PickerOptions extends photoAccessHelper.BaseSelectOptions {
  /**
   * 勾选框的背景色。
   *
   * 格式为8位十六进制颜色代码（#AARRGGBB）。前2位表示透明度，后6位表示RGB颜色值。
   *
   * **注意：** 此格式与CSS标准的#RRGGBBAA格式不同，CSS标准中alpha在最后两位。
   *
   * 示例：'#FFFFFFFF'表示白色不透明背景；'#80FF0000'表示半透明红色背景。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  checkBoxColor?: string;

  /**
   * picker宫格页面背景色。
   *
   * 格式为8位十六进制颜色代码（#AARRGGBB）。前2位表示透明度，后6位表示RGB颜色值。
   *
   * **注意：** 此格式与CSS标准的#RRGGBBAA格式不同，CSS标准中alpha在最后两位。
   *
   * 示例：'#FFFFFFFF'表示白色不透明背景；'#80FF0000'表示半透明红色背景。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor?: string;

  /**
   * 是否支持单张图片重复选择。true表示支持，false表示不支持。默认值为false。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  isRepeatSelectSupported?: boolean;

  /**
   * 勾选框内文本颜色。
   *
   * 格式为8位十六进制颜色代码（#AARRGGBB）。前2位表示透明度，后6位表示RGB颜色值。
   *
   * **注意：** 此格式与CSS标准的#RRGGBBAA格式不同，CSS标准中alpha在最后两位。
   *
   * 示例：'#FFFFFFFF'表示白色不透明背景；'#80FF0000'表示半透明红色背景。（该能力从API version 19开始支持，API version 19之前系统默认为白色）。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  checkboxTextColor?: string;

  /**
   * 大图背景颜色。包括跟随系统、浅色模式以及深色模式。当不设置该参数时，默认为跟随系统。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  photoBrowserBackgroundColorMode?: PickerColorMode;

  /**
   * 选择数量达到最大时的提示方式。包括弹toast提示、不提示以及蒙层提示。当不设置该参数时，默认为弹toast提示。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  maxSelectedReminderMode?: ReminderMode;

  /**
   * 宫格页面滑动预览方向，包括水平和竖直两个方向。
   *
   * 当不设置该参数时，默认为竖直方向。
   *
   * 当需要横向滑动浏览媒体文件时应设置为HORIZONTAL（水平方向）。
   *
   * 当需要纵向滑动浏览时使用VERTICAL（竖直方向）或不填写此参数。
   *
   * 该能力从API version 20开始支持，API version 20之前系统默认为竖直方向。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  orientation?: PickerOrientation;

  /**
   * 图片选择器组件选择模式，包括多选和单选。
   *
   * 当不设置该参数时，默认为多选。
   *
   * 当仅需要用户选择单个文件时应设置为SINGLE_SELECT（单选模式）。
   *
   * 当需要用户选择多个文件时使用MULTI_SELECT（多选模式）或不填写此参数。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  selectMode?: SelectMode;

  /**
   * 图片最大的选择数量。取值范围[1, 500]，默认为500。单位：个。
   *
   * 受到最大选择总数[BaseSelectOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.BaseSelectOptions}.maxSelectNumber
   * 的限制。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  maxPhotoSelectNumber?: number;

  /**
   * 视频最大的选择数量。取值范围[1, 500]，默认为500。单位：个。
   *
   * 受到最大选择总数[BaseSelectOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.BaseSelectOptions}.maxSelectNumber
   * 的限制。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  maxVideoSelectNumber?: number;

  /**
   * 是否支持滑动多选，true表示支持，false表示不支持。当不设置该参数时，默认值为false。重复选择场景不支持滑动多选。
   *
   * 从API版本26.0.0开始，select方法支持Car设备，但isSlidingSelectionSupported属性不支持Car设备，所以在Car设备上配置本属性不会生效。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  isSlidingSelectionSupported?: boolean;

  /**
   * 设置大图页checkbox的位置。第一个参数为X方向偏移量，第二个参数为Y方向偏移量。传参范围[0, 1]，代表距离组件左上角0%-100%的偏移量。当不设置该参数时，默认值为[0, 0]。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  photoBrowserCheckboxPosition?: [number, number];

  /**
   * 设置组件大图页margin。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  photoBrowserMargin?: Margin;

  /**
   * 设置组件宫格页margin。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  gridMargin?: Margin;

  /**
   * 设置组件宫格页单行显示模式。单行模式下，组件不提供打开大图浏览相关功能。组件不支持onEnterPhotoBrowser、onExitPhotoBrowser等大图浏览回调，PickerController不支持
   * setPhotoBrowserItem、exitPhotoBrowser等大图浏览接口，接口调用将无效。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  singleLineConfig?: SingleLineConfig;

  /**
   * Picker的颜色模式。Picker宫格界面除背景色之外其他组件的深浅色风格，包括搜索框、相机入口、安全使用图库提示组件、推荐气泡等组件，一般与backgroundColor配合使用。当不设置该参数时，默认为
   * PickerColorMode.AUTO，跟随系统深浅色切换。
   *
   * 该属性一般设置PickerColorMode.LIGHT时不与深颜色的backgroundColor搭配；设置PickerColorMode.DARK时不与浅颜色的backgroundColor搭配，否则会出现组件背景或文字无法看
   * 清楚的问题。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  uiComponentColorMode?: PickerColorMode;

  /**
   * 组件宫格缩略图第一行与组件顶部的预留空间。当不设置该参数时，默认值0，单位vp。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  gridStartOffset?: number;

  /**
   * 组件宫格缩略图最后一行与组件底部的预留空间。默认值0，单位vp。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  gridEndOffset?: number;

  /**
   * 通过设置唯一序号来区分不同的pickerComponent。取值范围[-1, +∞)，默认值为-1，不做区分。当应用中同时使用多个图片选择器组件且需要区分不同组件时应设置不同的唯一序号。
   *
   * 配合preselectedInfos进行数据回显时，需设置pickerIndex并在[PreselectedInfo]{@link PreselectedInfo}中的preselectablePickerIndex进行匹配，以实
   * 现回显到指定组件。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  pickerIndex?: number;

  /**
   * 支持在指定pickerIndex的图片选择器组件中回显用户预选择的数据。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  preselectedInfos?: Array<PreselectedInfo>;

  /**
   * 支持配置特殊角标显示。Picker目前仅支持一种类型的角标，详见[BadgeType]{@link BadgeType}。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  badgeConfig?: BadgeConfig;

  /**
   * 是否屏蔽图片选择器组件的滚动。true表示不屏蔽滚动事件，响应用户滚动。false表示屏蔽滚动事件，不响应用户滚动。
   *
   * 默认为true。
   *
   * **注意：**
   *
   * 当isSlidingSupported设为false时，宫格缩略图将不响应用户点击查看大图的操作，onEnterPhotoBrowser等大图浏览相关回调将不会触发。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  isSlidingSupported?: boolean;

  /**
   * Picker宫格页滑动到边缘处的滑动效果。
   *
   * 默认为[EdgeEffect.Spring]{@link EdgeEffect}。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  edgeEffect?: EdgeEffect;

  /**
   * 仅显示与指定bundle name对应的相册内容。传入完整的bundle name字符串数组，需精确匹配应用包名。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  appAlbumFilters?: Array<string>;

  /**
   * 支持配置图片选择器组件背景透明度。取值范围为[0, 1]，0表示完全透明，1表示完全不透明。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  backgroundOpacity?: number;

  /**
   * 用于恢复上次退出时图片选择器组件现场的信息。默认为空，即不恢复上次现场。
   *
   * **说明：** 需配合PickerController的[completed]{@link PickerController#completed}方法使用，该方法返回的
   * [CompletedResult]{@link CompletedResult}中的contextRecoveryInfo可传入本参数实现现场恢复。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  contextRecoveryInfo?: photoAccessHelper.ContextRecoveryInfo;
}

/**
 * 图片、视频相关信息。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class BaseItemInfo {
  /**
   * 图片、视频的URI。
   *
   * 当[ItemType]{@link ItemType}为THUMBNAIL时支持，否则为空。
   *
   * **注意：**
   *
   * 当资源为连拍照片类型时，仅返回该连拍组的封面资源。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  uri?: string;

  /**
   * 图片、视频的mimeType。
   *
   * 当[ItemType]{@link ItemType}为THUMBNAIL时支持，否则为空。
   *
   * 开发者可以通过mimeType的字符串前缀判断媒体类型：以'image/'开头表示图片，以'video/'开头表示视频。具体判断方式请参考
   * [使用mimeType字段来判断资源类型](docroot://media/medialibrary/medialibrary-faqs/medialibrary-asset-judgment-faq.md#使用mimetype字段来判断资源类型)。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  mimeType?: string;

  /**
   * 图片、视频的宽，单位为像素（px）。
   *
   * 当[ItemType]{@link ItemType}为THUMBNAIL时支持，否则为空。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  width?: number;

  /**
   * 图片、视频的高，单位为像素（px）。
   *
   * 当[ItemType]{@link ItemType}为THUMBNAIL时支持，否则为空。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  height?: number;

  /**
   * 图片、视频的大小，单位为字节（Byte）。
   *
   * 当[ItemType]{@link ItemType}为THUMBNAIL时支持，否则为空。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  size?: number;

  /**
   * 视频的持续时间，单位为毫秒（ms）。在API version 23之前，动态照片的duration将返回0；在API version 23及之后，返回动态照片附带视频片段的时长，异常场景返回-1。
   *
   * 当[ItemType]{@link ItemType}为THUMBNAIL时支持，否则为空。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  duration?: number;

  /**
   * 图片类型，包括DEFAULT、MOVING_PHOTO和BURST。
   *
   * 非特殊类型图片默认为DEFAULT（0）。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  photoSubType?: photoAccessHelper.PhotoSubtype;

  /**
   * 媒体文件动态范围模型，包括HDR和SDR。
   *
   * 对于movingPhoto专指封面图片的动态范围类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  dynamicRangeType?: photoAccessHelper.DynamicRangeType;

  /**
   * 图片/视频方向信息。
   *
   * 1.“TOP-left”，图像未旋转。
   *
   * 2.“TOP-right”，镜像水平翻转。
   *
   * 3.“Bottom-right”，图像旋转180°。
   *
   * 4.“Bottom-left”，镜像垂直翻转。
   *
   * 5.“Left-top”，先镜像水平翻转，再顺时针旋转270°。
   *
   * 6.“Right-top”，顺时针旋转90°。
   *
   * 7.“Right-bottom”，先镜像水平翻转，再顺时针旋转90°。
   *
   * 8.“Left-bottom”，顺时针旋转270°。
   *
   * 携带镜像信息的图片无论旋转与否其宽高属性都与原图保持一致，无镜像信息的图片其宽高属性会更新为旋转后的结果。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  orientation?: number;

  /**
   * 动态照片的状态。
   *
   * 当[ItemType]{@link ItemType}为THUMBNAIL时支持，否则为空。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  movingPhotoBadgeState?: photoAccessHelper.MovingPhotoBadgeStateType;

  /**
   * 视频文件的log模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  videoMode?: photoAccessHelper.VideoMode;
}

/**
 * 继承自[BaseItemInfo]{@link BaseItemInfo}，增加私有参数itemType。
 *
 * 图片、视频相关信息。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ItemInfo extends BaseItemInfo {
  /**
   * 被点击的item类型。包括缩略图item和相机item。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  itemType?: ItemType;
}

/**
 * 大图相关信息。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class PhotoBrowserInfo {
  /**
   * 进入、退出大图界面时的动效参数。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  animatorParams?: AnimatorParams;
}

/**
 * 进退大图动效参数。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class AnimatorParams {
  /**
   * 动效时长，单位为毫秒（ms），取值范围[0, +∞)。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  duration?: number;

  /**
   * 动效曲线。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  curve?: Curve | ICurve | string;
}

/**
 * 最大选择数量。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class MaxSelected {
  /**
   * 最大选择数量（包含图片的最大选择数量、视频的最大选择数量以及总的最大选择数量）。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  data?: Map<MaxCountType, number>;
}

/**
 * 单行显示模式配置项。单行模式下，组件不提供打开大图浏览相关功能。组件不支持大图相关回调，PickerController不支持大图相关的接口，接口调用将无效。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 20 dynamic
 */
export declare class SingleLineConfig {
  /**
   * 宫格显示宽高比，支持1:1，原图宽高比两种模式，默认为宽高比1:1显示。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  itemDisplayRatio?: ItemDisplayRatio;

  /**
   * 宫格圆角属性。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  itemBorderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * 宫格间距。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  itemGap?: Length;
}

/**
 * 预选中的文件以及文件对应的图片选择器组件序号。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 21 dynamic
 */
export declare class PreselectedInfo {
  /**
   * 选中媒体文件的URI。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  uri: string;

  /**
   * 限制仅在指定序号的图片选择器组件中进行自动选中；默认为-1，即可支持在任意序号的图片选择器组件中自动选中。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  preselectablePickerIndex?: number;
}

/**
 * 特殊角标配置项。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 21 dynamic
 */
export declare class BadgeConfig {
  /**
   * 特殊角标的类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  badgeType?: BadgeType;

  /**
   * 显示角标的URI数据。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  uris?: Array<string>;
}

/**
 * 支持更新的图片选择器组件属性，为[PickerOptions]{@link PickerOptions}的子集。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 22 dynamic
 */
export declare class UpdatablePickerConfigs {
  /**
   * 可选择的媒体文件类型。
   *
   * 若无此参数，则默认为图片和视频类型。
   *
   * **注意：**
   *
   * 当配置mimeTypeFilter参数时，mimeType的配置自动失效。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  mimeType?: photoAccessHelper.PhotoViewMIMETypes;

  /**
   * 文件类型的过滤配置，支持指定多个类型过滤。
   *
   * - 当配置mimeTypeFilter参数时，mimeType的配置自动失效。
   * - 当配置该参数时，仅显示配置过滤类型对应的媒体文件，建议提示用户仅支持选择指定类型的图片/视频。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  mimeTypeFilter?: photoAccessHelper.MimeTypeFilter;

  /**
   * 选择媒体文件数量的最大值（单位：个），取值范围[0, 500]，若不设置则默认为50。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  maxSelectNumber?: number;

  /**
   * 图片最大的选择数量（单位：个），取值范围[0, 500]，受到最大选择总数的限制。默认为500。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  maxPhotoSelectNumber?: number;

  /**
   * 视频最大的选择数量（单位：个），取值范围[0, 500]，受到系统中所有媒体文件最大选择总数的限制。默认为500。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  maxVideoSelectNumber?: number;

  /**
   * 图片选择器组件选择模式。
   *
   * 包括多选和单选，默认为多选。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  selectMode?: SelectMode;

  /**
   * 单选模式类型。默认为大图预览模式（SingleSelectionMode.BROWSER_MODE）。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  singleSelectionMode?: photoAccessHelper.SingleSelectionMode;

  /**
   * 是否支持单张图片重复选择。
   *
   * true表示支持，false表示不支持。当不设置该参数时，默认为false。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  isRepeatSelectSupported?: boolean;

  /**
   * 预选择图片的URI列表。数组长度受[BaseSelectOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.BaseSelectOptions}.
   * maxSelectNumber、[BaseSelectOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectOptions}.
   * maxPhotoSelectNumber和[BaseSelectOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectOptions}.
   * maxVideoSelectNumber共同限制，取值范围[0, 500]，默认50，否则超出部分不生效。若不配置，则默认不预选择任何图片。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  preselectedUris?: Array<string>;

  /**
   * 勾选框的背景色。
   *
   * 格式为8位十六进制颜色代码。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  checkBoxColor?: string;

  /**
   * 勾选框内文本颜色。
   *
   * 格式为8位十六进制颜色代码。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  checkboxTextColor?: string;

  /**
   * 图片选择器组件宫格页面背景色。格式为8位十六进制颜色代码。前2位表示透明度，后6位表示RGB颜色值。
   *
   * 示例：'#FFFFFFFF'表示白色不透明背景。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  backgroundColor?: string;

  /**
   * 大图背景颜色。
   *
   * 包括跟随系统、浅色模式以及深色模式，默认为跟随系统。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  photoBrowserBackgroundColorMode?: PickerColorMode;

  /**
   * Picker UI组件的颜色模式。
   *
   * 图片选择器组件宫格界面除背景色之外其他组件的深浅色风格，包括搜索框、相机入口、安全使用图库提示组件、推荐气泡等组件，一般与backgroundColor配合使用。默认为PickerColorMode.AUTO，跟随系统深浅色切换。
   *
   * 该属性设置为PickerColorMode.LIGHT时，一般不与深颜色的backgroundColor搭配；设置为PickerColorMode.DARK时，不与浅颜色的backgroundColor搭配，避免出现组件背景或文字
   * 无法看清楚的问题。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  uiComponentColorMode?: PickerColorMode;

  /**
   * 是否屏蔽图片选择器组件的滚动。true表示不屏蔽滚动事件，响应用户滚动。false表示屏蔽滚动事件，不响应用户滚动。
   *
   * 默认为true。
   *
   * **注意：**
   *
   * 当isSlidingSupported设为false时，宫格缩略图将不响应用户点击查看大图的操作，onEnterPhotoBrowser等大图浏览相关回调将不会触发。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  isSlidingSupported?: boolean;

  /**
   * 图片选择器组件宫格页滑动到边缘处的滑动效果。
   *
   * 默认为[EdgeEffect.Spring]{@link EdgeEffect}。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  edgeEffect?: EdgeEffect;

  /**
   * 设置动态照片自动播放场景。最多支持配置2个自动播放场景，超出时仅取前2个，多余的会自动忽略。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  autoPlayScenes?: Array<photoAccessHelper.AutoPlayScene>;

  /**
   * 仅显示与指定bundle name对应的相册内容。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  appAlbumFilters?: Array<string>;

  /**
   * 支持配置图片选择器组件背景透明度。取值范围为[0, 1]，0表示完全透明，1表示完全不透明。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  backgroundOpacity?: number;

  /**
   * 设置组件大图页边距。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  photoBrowserMargin?: Margin;

  /**
   * 设置组件宫格页边距。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  gridMargin?: Margin;
}

/**
 * 设置指定URI的资产是否被选中。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export declare class ClickResult {
  /**
   * 媒体文件资产的URI。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  uri: string;

  /**
   * 设置指定的媒体文件资产是否被选中，true表示选中，false表示不选中。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  isSelected: boolean;
}

/**
 * 使用图片选择器组件发生错误时返回的错误的接口名称、错误码和错误描述。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export declare class PickerError {
  /**
   * 产生错误的接口名称。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  functionName: string;

  /**
   * 错误码。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  errorCode: number;

  /**
   * 接口返回的具体错误描述信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  message: string;
}

/**
 * Picker上次退出时现场的信息。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class CompletedResult {
  /**
   * 已选择的图片或视频URI。该URI数组仅支持通过临时授权方式调用photoAccessHelper.getAssets使用。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  photoUris: Array<string>;

  /**
   * 图片选择器组件退出状态的上下文信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  contextRecoveryInfo: photoAccessHelper.ContextRecoveryInfo;

  /**
   * 已选择媒体文件的动态照片状态。当isMovingPhotoBadgeShown为true时，movingPhotoBadgeStates包含动态照片状态；否则为空。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  movingPhotoBadgeStates: Array<photoAccessHelper.MovingPhotoBadgeStateType>;
}

/**
 * 恢复结果
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare class RecoveryResult {
  /**
   * 恢复的相册的URI。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  albumUri: string;

  /**
   * 恢复后的专辑名称。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  albumName: string;
}

/**
 * 被点击的不可选中的图片详情。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.1 dynamic
 */
export declare class UnselectableItemInfo {
  /**
   * 媒体文件类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.1 dynamic
   */
  public mimeType?: string;

  /**
   * 图片资源的子类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.1 dynamic
   */
  public photoSubType?: photoAccessHelper.PhotoSubtype;
}

/**
 * 用于调用picker搜索能力的搜索信息。
 * `text`和`smartEntityIds`中至少有一个必须为非空，否则将抛出错误。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare class SearchInfo {
  /**
   * 用户键入的搜索文本。
   * 如果同时提供了`text`和`smartEntityIds`，则选择器将使用组合条件进行搜索。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  text?: string;

  /**
   * 从推荐标签回调中获取的智能实体id列表。
   * 每个id仅在当前picker会话生命周期内有效。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  smartEntityIds?: Array<int>;
}

/**
 * 推荐标签中的智能实体。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare class SmartEntity {
  /**
   * 实体的唯一id，在当前picker会话生命周期内有效。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  id: int;

  /**
   * 实体名称。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  name?: string;

  /**
   * 要为实体显示的缩略图，例如肖像头像。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  thumbnail?: image.PixelMap;
}

/**
 * 用户在搜索页面点击的推荐标签。
 * 推荐标签要么是纯文本标签（只提供`text`）
 * 或智能实体标签（提供了`smartEntity`）。这两种情况是互斥的。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare class RecommendedLabel {
  /**
   * 智能实体，关联搜索生成标签时应用。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  smartEntity?: SmartEntity;
}


/**
 * 枚举，PickerController向picker组件发送数据的数据类型。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum DataType {
  /**
   * 发送已选择的数据列表，通知图片选择器组件勾选状态刷新，需要传入string数组类型。
   *
   * 例如：应用在自己的页面中删除某张图片后，需要把剩下的已选择的数据列表通过setData接口通知到图片选择器组件，从而触发图片选择器组件勾选框状态刷新正确。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SET_SELECTED_URIS = 1,

  /**
   * 发送已选择相册，通知图片选择器组件刷新相册，需要传入string类型。
   *
   * 例如：应用在自己的页面中选择相册后，需要把已选择的相册URI通过setData接口通知到图片选择器组件，从而触发图片选择器组件刷新相册数据。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SET_ALBUM_URI = 2,

  /**
   * 发送已选择的文件URI以及选中的图片选择器组件序号。当图片选择器组件序号与参数中的图片选择器组件序号匹配时，已选择文件支持在当前图片选择器组件里自动选中。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  SET_SELECTED_INFO = 3,

  /**
   * 发送需要显示角标的配置，类型为[BadgeConfig]{@link BadgeConfig}，包含角标的类型和对应文件URI的数据列表。配置后，对应文件会显示配置类型的角标。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  SET_BADGE_CONFIGS = 4,

  /**
   * 发送点击后的结果，类型为[ClickResult]{@link ClickResult}。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  SET_ITEM_CLICK_RESULT = 5
}

/**
 * 被点击item的类型。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum ItemType {
  /**
   * 图片、视频item（缩略图item）。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  THUMBNAIL = 0,

  /**
   * 相机item。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  CAMERA = 1
}

/**
 * 点击操作的类型。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum ClickType {
  /**
   * 选择操作（勾选图片或者点击相机item）。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SELECTED = 0,

  /**
   * 取消选择操作（取消勾选图片）。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  DESELECTED = 1
}

/**
 * Picker宫格页面滑动预览的方向。
 *
 * 从API版本20开始，该能力支持配置；在API版本12-19，该能力设置不生效，默认为竖直方向。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum PickerOrientation {
  /**
   * 竖直方向。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  VERTICAL = 0,

  /**
   * 水平方向。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  HORIZONTAL = 1
}

/**
 * 选择模式。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum SelectMode {
  /**
   * 单选模式。用户只能选择一张图片或视频。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SINGLE_SELECT = 0,

  /**
   * 多选模式。用户可以同时选择多张图片和视频。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  MULTI_SELECT = 1
}

/**
 * Picker的颜色模式。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum PickerColorMode {
  /**
   * 跟随系统。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  AUTO = 0,

  /**
   * 浅色模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  LIGHT = 1,

  /**
   * 深色模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  DARK = 2
}

/**
 * 最大选择数量提示方式。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum ReminderMode {
  /**
   * 不提示。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  NONE = 0,

  /**
   * 弹出toast提示。选择达到最大数量后弹出toast提示，告知用户已达最大选择数。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  TOAST = 1,

  /**
   * 蒙灰提示。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  MASK = 2
}

/**
 * 最大选择数量的类型。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum MaxCountType {
  /**
   * 总的最大选择数量。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  TOTAL_MAX_COUNT = 0,

  /**
   * 图片的最大选择数量（不能大于总的最大选择数量）。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  PHOTO_MAX_COUNT = 1,

  /**
   * 视频的最大选择数量（不能大于总的最大选择数量）。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  VIDEO_MAX_COUNT = 2
}

/**
 * 打开大图浏览模式后，左右滑动切换浏览图片的范围。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum PhotoBrowserRange {
  /**
   * 全部图片，视频。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  ALL = 0,

  /**
   * 仅浏览用户已选择的图片和视频，不可切换至未选择的内容。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SELECTED_ONLY = 1
}

/**
 * 大图页大图预览组件外其他UI元素。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export declare enum PhotoBrowserUIElement {
  /**
   * 大图页勾选框。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  CHECKBOX = 0,

  /**
   * 大图页返回按钮。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  BACK_BUTTON = 1
}

/**
 * 视频播放状态。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 14 dynamic
 */
export declare enum VideoPlayerState {
  /**
   * 视频播放中。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  PLAYING = 0,

  /**
   * 视频播放暂停。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  PAUSED = 1,

  /**
   * 视频播放停止。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  STOPPED = 2,

  /**
   * 开始拖拽进度条。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  SEEK_START = 3,

  /**
   * 结束拖拽进度条。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  SEEK_FINISH = 4
}

/**
 * 图片/视频保存模式。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 15 dynamic
 */
export declare enum SaveMode {
  /**
   * 另存为新的图片/视频。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 15 dynamic
   */
  SAVE_AS = 0,

  /**
   * 覆盖原有图片/视频，覆盖后支持在图库中将保存内容回退，还原成原始图片/视频。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 15 dynamic
   */
  OVERWRITE = 1
}

/**
 * 单行布局宫格显示宽高比模式，包括1:1和原图宽高比两种模式。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 20 dynamic
 */
export declare enum ItemDisplayRatio {
  /**
   * 1:1比例显示。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  SQUARE_RATIO = 0,

  /**
   * 原图宽高比显示。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  ORIGINAL_SIZE_RATIO = 1
}

/**
 * 表示特殊角标类型的枚举。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 21 dynamic
 */
export declare enum BadgeType {
  /**
   * 已上传。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  BADGE_UPLOADED = 0
}

/**
 * 选择器页面状态。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare enum PickerState {
  /**
   * 默认的相册浏览状态。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  DEFAULT = 0,

  /**
   * 搜索状态，包括搜索推荐页面和搜索结果页面。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  SEARCH = 1
}

/**
 * 已勾选的图片被删除时产生的回调事件。
 *
 * @param { Array<BaseItemInfo> } baseItemInfos - 照片的基本信息。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export type ItemsDeletedCallback = (baseItemInfos: Array<BaseItemInfo>) => void;

/**
 * 选择达到最大选择数量之后再次点击勾选时的回调事件。
 *
 * @param { MaxCountType } exceedMaxCountType - 达到最大选择数量的类型。类型包含图片最大选择数量、视频最大选择数量以及总的最大选择数量。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export type ExceedMaxSelectedCallback = (exceedMaxCountType: MaxCountType) => void;

/**
 * 当前相册被删除时的回调事件。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export type CurrentAlbumDeletedCallback = () => void;

/**
 * 大图页视频播放状态改变时的回调事件。
 *
 * @param { VideoPlayerState } state - 视频播放状态。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 14 dynamic
 */
export type videoPlayStateChangedCallback = (state: VideoPlayerState) => void;

/**
 * 用户在Picker组件中打开/关闭动态效果时的回调事件。
 *
 * @param { string } uri - 动态照片uri。
 * @param { photoAccessHelper.MovingPhotoBadgeStateType } state - 动态照片状态。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 22 dynamic
 */
export type MovingPhotoBadgeStateChangedCallback = 
  (uri: string, state: photoAccessHelper.MovingPhotoBadgeStateType) => void;

/**
 * 表示用户滑动picker宫格页，当滚动停止并处于宫格内容开始位置时的回调事件类型。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export type ScrollStopAtStartCallback = () => void;

/**
 * 表示用户滑动picker宫格页，当滚动停止并处于宫格内容结束位置时的回调事件类型。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export type ScrollStopAtEndCallback = () => void;

/**
 * 用户在图片选择器组件中点击宫格产生的回调事件。
 *
 * @param { ItemInfo } itemInfo - 被点击的宫格类型。包括缩略图宫格和相机宫格。
 * @param { ClickType } clickType - 点击操作的类型。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export type ItemClickedNotifyCallback = (itemInfo: ItemInfo, clickType: ClickType) => void;

/**
 * 用户在宫格组件内捏合时产生的回调事件。
 *
 * @param { photoAccessHelper.GridLevel } gridLevel - 宫格列数的档位。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export type PinchGridSwitchedCallback = (gridLevel: photoAccessHelper.GridLevel) => void;

/**
 * 宫格视图进入到大图视图、大图浏览切换时产生的回调。
 *
 * @param { BaseItemInfo } targetPhotoInfo - 照片的基本信息。
 *     <br>**注意：**
 *     <br>返回信息只包含[BaseItemInfo]{@link BaseItemInfo}中的uri、photoSubType、mimeType和movingPhotoBadgeState。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export type PhotoBrowserChangeStartCallback = (targetPhotoInfo: BaseItemInfo) => void;

/**
 * 图片选择器组件产生错误时的回调。
 *
 * @param { PickerError } pickerError - 产生的错误的基本信息。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export type ErrorCallback = (pickerError: PickerError) => void;

/**
 * onPickerRecovery事件的回调
 *
 * @param { RecoveryResult } recoveryResult
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export type PickerRecoveryCallback = (recoveryResult: RecoveryResult) => void;

/**
 * 图片选择器组件进入大图后，大图放大缩小时的回调。
 *
 * @param { double } scale - 图片相比原图放大缩小的比例。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type PhotoBrowserZoomCallback = (scale: double) => void;

/**
 * 在picker宫格或大图预览界面，当不可选中的图片被点击时产生的回调。
 *
 * @param { UnselectableItemInfo } unselectableItemInfo - 被点击的不可选中的图片详情。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.1 dynamic
 */
export type UnselectableItemClickedCallback = (unselectableItemInfo: UnselectableItemInfo) => void;

/**
 * onPickerStateChanged事件的回调。
 *
 * @param { PickerState } pickerState
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export type PickerStateChangedCallback = (pickerState: PickerState) => void;

/**
 * onRequestLabelClicked事件的回调。
 *
 * @param { RecommendedLabel } recommendedLabel
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export type RecommendedLabelClickedCallback = (recommendedLabel: RecommendedLabel) => void;