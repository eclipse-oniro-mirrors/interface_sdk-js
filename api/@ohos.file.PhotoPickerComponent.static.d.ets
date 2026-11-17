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
 * The **PhotoPickerComponent** can be embedded in the UI of an app. This component allows the app to select media files
 * without requesting any permissions. The photo picker component supports two view modes: grid view and large image 
 * preview. It provides both single and multiple selection modes. Users can take new photos using the camera entry, and 
 * preview and select moving photos. Once the users have made their selection, your application gets read-only access to
 * the chosen images or videos.
 *
 * Note that the photo picker component does not support nesting. Additionally, prevent overlaying components with the 
 * **overlay** attribute or of higher levels on top the component, as this will prevent it from receiving gesture 
 * events.
 *
 * The user can directly tap this component to select images or videos.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 12. Newly added APIs will be marked with a superscript to indicate 
 * >   their
 * >
 * > - This component does not support [same-layer rendering](docroot://web/web-same-layer.md).
 *
 * ###### Attributes
 *
 * The [universal attributes]{@link common} are supported.
 *
 * @file PhotoPickerComponent
 * @kit MediaLibraryKit
 */

import photoAccessHelper from '@ohos.file.photoAccessHelper';
import { AsyncCallback } from '@ohos.base';
import { Component, Margin, Curve, EdgeEffect, ICurve, Length, BorderRadiuses, LocalizedBorderRadiuses }
    from '@ohos.arkui.component';
import { Observed, ObjectLink } from './arkui/stateManagement/decorator';
import type image from './@ohos.multimedia.image';
import { Builder } from './arkui/component/builder';

/**
 * PhotoPickerComponent({ pickerOptions?: PickerOptions, onSelect?: (uri: string) => void, onDeselect?: (uri: string) =>
 * void, onItemClicked?: (itemInfo: ItemInfo, clickType: ClickType) => boolean, onItemClickedNotify?:
 * ItemClickedNotifyCallback, onEnterPhotoBrowser?: (photoBrowserInfo: PhotoBrowserInfo) => boolean, onExitPhotoBrowser?
 * : (photoBrowserInfo: PhotoBrowserInfo) => boolean, onPickerControllerReady?: () => void, onPhotoBrowserChanged?: (
 * browserItemInfo: BaseItemInfo) => boolean, onSelectedItemsDeleted?: ItemsDeletedCallback, onExceedMaxSelected?:
 * ExceedMaxSelectedCallback, onCurrentAlbumDeleted?: CurrentAlbumDeletedCallback, onVideoPlayStateChanged?:
 * videoPlayStateChangedCallback, pickerController: PickerController })
 *
 * The photo picker component embedded in the application UI allows the application to access images or videos in the
 * user directory without any permission.
 *
 * > **NOTE**
 * >
 * > - If the photo picker component is used with the **Tabs** component, the swipe gestures of the **Tabs** component
 * >   conflict with those of the photo browser page.
 * >
 * > -To prevent this problem, you can disable the swipe operation for the **Tabs** component in
 * >  **onEnterPhotoBrowser()** and enable it in **onExitPhotoBrowser()**. This conflict will be resolved in later
 * >  versions.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Component
export declare struct PhotoPickerComponent {
  /**
   * PickerOptions
   *
   * @type { ?PickerOptions }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  pickerOptions?: PickerOptions;

  /**
   * Callback when select photos or videos
   *
   * @type { ?SelectCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onSelect?: SelectCallback;

  /**
   * Callback when Deselect photos or videos
   *
   * @type { ?DeSelectCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onDeselect?: DeSelectCallback;

  /**
   * Callback when click item. include click camera item and thumbnail item, will return itemInfo
   *
   * @type { ?ItemClickedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onItemClicked?: ItemClickedCallback;

  /**
   * Callback when enter photo browser, will return photoBrowserInfo
   *
   * @type { ?EnterPhotoBrowserCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onEnterPhotoBrowser?: EnterPhotoBrowserCallback;

  /**
   * Callback when exit photo browser, will return photoBrowserInfo
   *
   * @type { ?ExitPhotoBrowserCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onExitPhotoBrowser?: ExitPhotoBrowserCallback;

  /**
   * Callback when pickerController is ready.
   * Set data to picker component by pickerController is supported after pickerController is ready
   *
   * @type { ?PickerControllerReadyCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onPickerControllerReady?: PickerControllerReadyCallback;

  /**
   * Callback when photo browser change, will return browserItemInfo
   *
   * @type { ?PhotoBrowserChangedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onPhotoBrowserChanged?: PhotoBrowserChangedCallback;

  /**
   * Callback when selected items are deleted
   *
   * @type { ?ItemsDeletedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onSelectedItemsDeleted?: ItemsDeletedCallback;

  /**
   * Callback when exceed max selected
   *
   * @type { ?ExceedMaxSelectedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onExceedMaxSelected?: ExceedMaxSelectedCallback;

  /**
   * Callback when the current album is deleted
   *
   * @type { ?CurrentAlbumDeletedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onCurrentAlbumDeleted?: CurrentAlbumDeletedCallback;

  /**
   * Callback when the video play state changed
   *
   * @type { ?VideoPlayStateChangedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onVideoPlayStateChanged?: VideoPlayStateChangedCallback;

  /**
   * Callback when moving photo badge state changed
   *
   * @type { ?MovingPhotoBadgeStateChangedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  onMovingPhotoBadgeStateChanged?: MovingPhotoBadgeStateChangedCallback;

  /**
   * Callback when photo browser change start (upon user swipe release), will return targetPhotoInfo
   *
   * @type { ?PhotoBrowserChangeStartCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  onPhotoBrowserChangeStart?: PhotoBrowserChangeStartCallback;

  /**
   * Callback when click item. Includes camera items and thumbnail items. Returns itemInfo in the callback.
   * Must be used in conjunction with the addData method.
   *
   * @type { ?ItemClickedNotifyCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  onItemClickedNotify?: ItemClickedNotifyCallback;

  /**
   * Callback when the grid stops scrolling at the starting position.
   *
   * @type { ?ScrollStopAtStartCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  onScrollStopAtStart?: ScrollStopAtStartCallback;

  /**
   * Callback when the grid stops scrolling at the ending position.
   *
   * @type { ?ScrollStopAtEndCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  onScrollStopAtEnd?: ScrollStopAtEndCallback;

  /**
   * Callback when the grid's level is switched via pinch gesture.
   *
   * @type { ?PinchGridSwitchedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  onPinchGridSwitched?: PinchGridSwitchedCallback;

  /**
   * Callback when an error occurs in the PhotoPickerComponent.
   *
   * @type { ?ErrorCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  onError?: ErrorCallback;

  /**
   * Callback when the photo picker restores the previously grid state.
   *
   * @type { ?PickerRecoveryCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  onPickerRecovery?: PickerRecoveryCallback;

  /**
   * Callback when the zoom scale changes during large image browsing.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  onPhotoBrowserZoom?: PhotoBrowserZoomCallback;

  /**
   * Callback when an unselectable item is clicked.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  onUnselectableItemClicked?: UnselectableItemClickedCallback;

  /**
   * Called when the picker state changes between the default state and the search state.
   * The initial state is PickerState.DEFAULT.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  onPickerStateChanged?: PickerStateChangedCallback;

  /**
   * Called when the user clicks a recommendation label on the search page.
   * The label is either a pure text label or a smart entity label.
   * The third-party app can use the callback payload to render its own search box.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  onRecommendedLabelClicked?: RecommendedLabelClickedCallback;

  /**
   * PickerController
   *
   * @type { PickerController }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @ObjectLink
  pickerController: PickerController;

  /**
   * Build function of PhotoPickerComponent
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Builder
  build(): void;
}

/**
 * Defines an instance used to send data to the **PhotoPickerComponent**.
 *
 * > **NOTE**
 * >
 * > Before calling this API, ensure that the **onPickerControllerReady** callback has been triggered. Otherwise, the
 * > API call does not take effect.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Observed
export declare class PickerController {
  /**
   * Sends data of the specified type to the **PhotoPickerComponent**.
   *
   * @param { DataType } dataType - Type of the data to send.
   * @param { Object } data - Data to send.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public setData(dataType: DataType, data: Object): void;

  /**
   * Sends additional configuration data to the **PhotoPickerComponent**. The **DataType** parameter identifies the
   * type of data to send. In versions earlier than API version 23, only the **SET_BADGE_CONFIGS** type is supported.
   *
   * @param { DataType } dataType - Type of additional configuration data to send.
   * @param { Object } data - Additional configuration data to send.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public addData(dataType: DataType, data: Object): void;

  /**
   * Sends removal configuration data to the **PhotoPickerComponent**. The **DataType** parameter identifies the type
   * of data to send, and only the **SET_BADGE_CONFIGS** type is supported currently.
   *
   * @param { DataType } dataType - Type of removal configuration data to send.
   * @param { Object } data - Removal configuration data to send.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public deleteData(dataType: DataType, data: Object): void;

  /**
   * Sets the maximum number of images, videos, or images and videos that can be selected in real time.
   *
   * @param { MaxSelected } maxSelected - Maximum number of media assets that can be selected at a time.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public setMaxSelected(maxSelected: MaxSelected): void;

  /**
   * Switches from the **PhotoPickerComponent** to the photo browser page or from the photo browser page to the image
   * to be viewed.
   *
   * > **NOTE**
   * >
   * > This API does not take effect when **PickerOptions.singleLineConfig** is set to the single-line mode.
   *
   * @param { string } uri - URI of the image to view. Only the images selected by the user are supported.
   * @param { PhotoBrowserRange } [photoBrowserRange] - View range on the photo browser page. The value can be **ALL**
   *     or **SELECTED_ONLY**. The default value is **ALL**, which means to view all images and videos.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public setPhotoBrowserItem(uri: string, photoBrowserRange?: PhotoBrowserRange): void;

  /**
   * Exits the photo browser page.
   *
   * > **NOTE**
   * >
   * > This API does not take effect when **PickerOptions.singleLineConfig** is set to the single-line mode.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public exitPhotoBrowser(): void;

  /**
   * Sets whether other UI elements are visible on the photo browser page. By default, other UI elements are visible.
   *
   * > **NOTE**
   * >
   * > This API does not take effect when **PickerOptions.singleLineConfig** is set to the single-line mode.
   *
   * @param { PhotoBrowserUIElement[] } elements - Other UI elements on the photo browser page.
   * @param { boolean } isVisible - Whether the specified elements are visible. **true**: visible; **false**: not
   *     visible. The default value is **false**.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public setPhotoBrowserUIElementVisibility(elements: PhotoBrowserUIElement[], isVisible: boolean): void;

  /**
   * Replaces the image selected by the user in the **PhotoPickerComponent** with the image edited by the application.
   *
   * @param { string } originalUri - URI of the original image, which will be replaced.
   * @param { string } newUri - URI of the new image. This is the URI of the image or video that is temporarily stored
   *     in the app sandbox and is used to replace the original URI on the photo picker component.
   * @param { AsyncCallback<void> } callback - Callback invoked when image replacement is complete.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public replacePhotoPickerPreview(originalUri: string, newUri: string, callback: AsyncCallback<void>): void;

  /**
   * Saves files in a URI list. Generally, this API is used together with
   * [replacePhotoPickerPreview]{@link PickerController#replacePhotoPickerPreview} to save the new images or videos in
   * the application sandbox path to Gallery.
   *
   * @param { string[] } trustedUris - URIs of the images or videos in the application sandbox path. Generally,
   *     **trustedUris** comes from **newUri** of new images generated by
   *     [replacePhotoPickerPreview]{@link PickerController#replacePhotoPickerPreview}.
   * @param { AsyncCallback<string[]> } callback - Callback used to return the result. If saving the files is
   *     successful, **err** is **undefined**, and **data** is the URIs of the new files in Gallery obtained.
   *     Otherwise, **err** is an error object.
   * @param { photoAccessHelper.PhotoCreationConfig[] } [configs] - Configuration parameters corresponding to the
   *     original files.
   *     <br>**NOTE**
   *     <br>1. If a **subtype** option is passed, the configuration does not take effect. Only **DEFAULT** images can
   *     be saved.
   *     <br>By default, the values of **title**, **fileNameExtension**, and **photoType** of **mediaItem**
   *     corresponding to **trustedUris** are used, and the value of **subtype** is fixed to **DEFAULT**.
   *     <br>2. This parameter does not take effect when [SaveMode]{@link SaveMode} is set to **OVERWRITE**.
   * @param { SaveMode } [saveMode] - Mode for saving the files.
   *     <br>By default, the **SAVE_AS** mode is used to save the files as new files.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public saveTrustedPhotoAssets(trustedUris: string[], callback: AsyncCallback<string[]>,
        configs?: photoAccessHelper.PhotoCreationConfig[], saveMode?: SaveMode): void;

  /**
   * Saves files in a URI list. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > This API is usually used together with
   * > [replacePhotoPickerPreview]{@link PickerController#replacePhotoPickerPreview} to save the new images or videos
   * > in the application sandbox path to Gallery.
   *
   * @param { Array<string> } trustedUris - URIs of the images or videos in the application sandbox path.
   *     <br>**trustedUris** is usually the **newUri** of the images or videos in the application sandbox path that
   *     are successfully replaced by [replacePhotoPickerPreview]{@link PickerController#replacePhotoPickerPreview}.
   * @param { Array<photoAccessHelper.CreationSetting> } [settings] - Configuration parameters corresponding to the
   *     original files.
   *     <br>By default, the **title**, **fileNameExtension**, and **photoType** values of **mediaItem** corresponding
   *     to **trustedUris** are used.
   * @param { SaveMode } [saveMode] - Mode for saving images or videos.
   *     <br>By default, the **SAVE_AS** mode is used to save the files as new files.
   * @returns { Promise<Array<string>> } Promise used to return the URI array of the new asset.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public saveTrustedPhotoAssetsEx(trustedUris: Array<string>,settings?: Array<photoAccessHelper.CreationSetting>,
        saveMode?: SaveMode): Promise<Array<string>>;

  /**
   * Updates the attributes of the **PhotoPickerComponent**. This API uses a promise to return the result.
   *
   * @param { UpdatablePickerConfigs } updateConfig - New attributes, which are a subset of
   *     [PickerOptions]{@link PickerOptions}.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public updatePickerOptions(updateConfig: UpdatablePickerConfigs): Promise<void>;

  /**
   * Sets the state of the moving photo on the photo browser page. This API uses a promise to return the result.
   *
   * This parameter takes effect only on the photo browser page. **NOT_MOVING_PHOTO** cannot be set.
   *
   * @param { photoAccessHelper.MovingPhotoBadgeStateType } movingPhotoState - State of the moving photo on the photo
   *     browser page. It can only be set to **MOVING_PHOTO_ENABLED** or **MOVING_PHOTO_DISABLED**, but not
   *     **NOT_MOVING_PHOTO**.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
   *     1. An invalid enumeration value was passed. Only MOVING_PHOTO_ENABLED and
   *     MOVING_PHOTO_DISABLED are supported for configuration.
   * @throws { BusinessError } 23800202 - Invalid call context. Possible causes:
   *     1. The API is called outside the photo browsing scenario.
   *     2. The API is called when isMovingPhotoBadgeShown is already set to true.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public setMovingPhotoState(movingPhotoState: photoAccessHelper.MovingPhotoBadgeStateType): Promise<void>;

  /**
   * This API is used by an application to obtain the complete data after a selection operation is completed on the
   * Picker page. The data can be used to restore the scene when the Picker is started next time.
   *
   * @returns { Promise<CompletedResult> } Promise used to return the information about the restored scene.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public completed(): Promise<CompletedResult>;

  /**
   * Enter the search page of the picker.
   *
   * Prerequisites for the call to take effect:
   *  - The picker has been initialized (onPickerControllerReady has been invoked).
   *  - The picker option `isSearchSupported` is set to `false`.
   *
   * @returns { Promise<void> } Promise that returns no value.
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
   * @since 26.1.0 static
   */
  public enterSearchPage(): Promise<void>;

  /**
   * Exit the search page and the picker returns to the default album grid.
   *
   * Prerequisites:
   *  - The picker is currently in the search state (PickerState.SEARCH).
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 23800202 - Invalid call context: the picker is not in the search state.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability.
   *     <br>2. The chip does not support the capability.
   *     <br>3. A dependent service feature is not supported.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public exitSearchPage(): Promise<void>;

  /**
   * Navigates back one level within the search page.
   *
   * Prerequisites:
   *  - The picker is currently in the search state (PickerState.SEARCH).
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 23800202 - Invalid call context: the picker is not in the search state.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability.
   *     <br>2. The chip does not support the capability.
   *     <br>3. A dependent service feature is not supported.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public navigateBackInSearchPage(): Promise<void>;

  /**
   * Invoke the picker search capability with the given search information.
   * The picker shows the search result page and the onPickerStateChanged callback
   * is invoked with PickerState.SEARCH if the picker was not already in the search state.
   *
   * Prerequisites:
   *  - The picker is currently in the search state (PickerState.SEARCH).
   *    If the picker is in the default state, call enterSearchPage first.
   *  - At least one of `searchInfo.text` and `searchInfo.smartEntityIds` is non-empty.
   *
   * @param { SearchInfo } searchInfo - The search information.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 23800151 - Scene parameter check failed: empty search info or invalid entity id.
   * @throws { BusinessError } 23800202 - Invalid call context: the picker is not in the search state.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability.
   *     <br>2. The chip does not support the capability.
   *     <br>3. A dependent service feature is not supported.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public search(searchInfo: SearchInfo): Promise<void>;
}

/**
 * Describes the configuration of a Picker. It inherits from
 * [photoAccessHelper.BaseSelectOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.BaseSelectOptions}.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class PickerOptions extends photoAccessHelper.BaseSelectOptions {
  /**
   * Background color of the check box.
   *
   * The value is an 8-digit hexadecimal color code (#AARRGGBB). The first two digits indicate the transparency, and
   * the last six digits indicate the RGB color value.
   *
   * Note: This format is different from the #RRGGBBAA format used in the CSS standard, where alpha is in the last two
   * digits.
   *
   * For example, '#FFFFFFFF' indicates a white opaque background, and '#80FF0000' indicates a semi-transparent red
   * background.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public checkBoxColor?: string;

  /**
   * Background color of the Picker grid page.
   *
   * The value is an 8-digit hexadecimal color code (#AARRGGBB). The first two digits indicate the transparency, and
   * the last six digits indicate the RGB color value.
   *
   * Note: This format is different from the #RRGGBBAA format used in the CSS standard, where alpha is in the last two
   * digits.
   *
   * For example, '#FFFFFFFF' indicates a white opaque background, and '#80FF0000' indicates a semi-transparent red
   * background.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public backgroundColor?: string;

  /**
   * Whether a single image can be repeatedly selected. **true** if supported, **false** otherwise. The default value
   * is **false**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public isRepeatSelectSupported?: boolean;

  /**
   * Text color in the check box.
   *
   * The value is an 8-digit hexadecimal color code (#AARRGGBB). The first two digits indicate the transparency, and
   * the last six digits indicate the RGB color value.
   *
   * Note: This format is different from the #RRGGBBAA format used in the CSS standard, where alpha is in the last two
   * digits.
   *
   * For example, '#FFFFFFFF' indicates a white opaque background, and '#80FF0000' indicates a semi-transparent red
   * background. (This parameter is supported since API version 19. In earlier versions, the system defaults to white.
   * )
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public checkboxTextColor?: string;

  /**
   * Background color of the photo browser page. The options are **AUTO**, **LIGHT**, and **DARK**. If this parameter
   * is not set, the default value is **AUTO**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public photoBrowserBackgroundColorMode?: PickerColorMode;

  /**
   * Mode of the reminder when the number of selected items reaches the maximum. The options are **NONE**, **TOAST**,
   * and **MASK**. If this parameter is not set, the default value is **TOAST**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public maxSelectedReminderMode?: ReminderMode;

  /**
   * Sliding preview direction of the grid page. The options are **HORIZONTAL** and **VERTICAL**.
   *
   * If this parameter is not set, the default value is **VERTICAL**.
   *
   * Set this parameter to **HORIZONTAL** if you want to browse media files horizontally.
   *
   * Set this parameter to **VERTICAL** if you want to browse media files vertically, or leave this parameter empty.
   *
   * This capability is supported since API version 20. In versions earlier than API version 20, the default value is
   * **VERTICAL**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public orientation?: PickerOrientation;

  /**
   * Selection mode of the photo picker component, including **MULTI_SELECT** and **SINGLE_SELECT**.
   *
   * If this parameter is not set, **MULTI_SELECT** is used by default.
   *
   * Set this parameter to **SINGLE_SELECT** if only one file needs to be selected.
   *
   * Set this parameter to **MULTI_SELECT** if multiple files need to be selected, or leave this parameter empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public selectMode?: SelectMode;

  /**
   * Maximum number of images that can be selected. The value range is [1, 500]. The default value is **500**.
   * The value is subject to the maximum number of available items specified by
   * [BaseSelectOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.BaseSelectOptions}.maxSelectNumber.
   * The value should be an integer.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public maxPhotoSelectNumber?: int;

  /**
   * Maximum number of videos that can be selected. The value range is [1, 500]. The default value is **500**.
   *
   * The value is subject to the maximum number of available items specified by
   * [BaseSelectOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.BaseSelectOptions}.maxSelectNumber.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public maxVideoSelectNumber?: int;

  /**
   * Whether to support multiple selections by sliding. **true**: yes; **false**: no. If this parameter is not set,
   * the default value **false** is used. This parameter is not available for repeat selection.
   *
   * Since API version 26.0.0, the **select** method is supported on cars, but the **isSlidingSelectionSupported**
   * attribute is not. Therefore, this attribute does not take effect on cars.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public isSlidingSelectionSupported?: boolean;

  /**
   * Position of the check box on the photo browser page. The first parameter specifies the offset in the X direction,
   * and the second parameter specifies the offset in the Y direction. The value range is [0, 1], which indicates the
   * offset (from 0% to 100%) to the upper-left corner of the component. If this parameter is not set, the default
   * value **[0, 0]** is used.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public photoBrowserCheckboxPosition?: [
        double,
        double
    ];

  /**
   * Margin of the component on a photo browser page.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public photoBrowserMargin?: Margin;

  /**
   * Margin of the component on a grid page.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public gridMargin?: Margin;

  /**
   * Single-line display mode of a grid page. In single-line mode, the component does not provide functions for
   * viewing a larger image. The component does not support callbacks related to large image browsing, such as
   * **onEnterPhotoBrowser** and **onExitPhotoBrowser**. The **PickerController** does not support APIs related to
   * large image browsing, such as **setPhotoBrowserItem** and **exitPhotoBrowser**. As a result, API calls will be
   * ineffective.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public singleLineConfig?: SingleLineConfig;

  /**
   * Picker color mode. Dark/Light color mode (excluding the background color) of other components on the Picker grid
   * page, including the search box, camera entry, safety tips for using Gallery, and recommendation bubble. This
   * attribute is usually used together with **backgroundColor**. If this parameter is not set, the default value
   * **PickerColorMode.AUTO** is used, which means that the color mode changes with the system dark/light color mode.
   *
   * When setting this attribute, avoid using **PickerColorMode.LIGHT** with a dark backgroundColor, as it may make
   * components or text hard to see. Avoid using **PickerColorMode.DARK** with a light backgroundColor for the same
   * reason.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public uiComponentColorMode?: PickerColorMode;

  /**
   * Space between the top of the component and the first row of the grid thumbnail. If this parameter is not set, the
   * default value **0** is used, in vp.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public gridStartOffset?: int;

  /**
   * Space between the bottom of the component and the last row of the grid thumbnail. The default value is **0**, in
   * vp.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public gridEndOffset?: int;

  /**
   * Unique serial number used to distinguish different picker components. The value range is
   * [–1, +∞). The default value is **–1**, indicating that the picker component is not distinguished.
   * If multiple phone picker components are used
   * in an app and different components need to be distinguished, set different unique IDs for the components.
   *
   * When using the **preselectedInfos** attribute to display data, you need to set **pickerIndex** and match it with
   * **preselectablePickerIndex** in [PreselectedInfo]{@link PreselectedInfo} to display the data in the specified
   * component.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public pickerIndex?: int;

  /**
   * Displaying the pre-selected data in the image chip selector component with the specified **pickerIndex**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public preselectedInfos?: PreselectedInfo[];

  /**
   * Badge configuration. Currently, the **PhotoPickerComponent** supports only one type of badge. For details, see
   * [BadgeType]{@link BadgeType}.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public badgeConfig?: BadgeConfig;

  /**
   * Whether to block scrolling of the photo picker component. The value **true** means that scrolling is not blocked
   * and the component responds to user scroll gestures. The value **false** means that scrolling is blocked and the
   * component does not respond to user scroll gestures.
   *
   * The default value is **true**.
   *
   * **NOTE**
   *
   * When **isSlidingSupported** is set to **false**, the grid thumbnail does not respond to the user's tap gesture to
   * view the full image. Callbacks related to large image browsing, such as **onEnterPhotoBrowser**, will not be
   * triggered.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public isSlidingSupported?: boolean;

  /**
   * Scrolling effect when the Picker grid page reaches the edge.
   *
   * The default value is [EdgeEffect.Spring]{@link EdgeEffect}.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public edgeEffect?: EdgeEffect;

  /**
   * Used to display only the album content corresponding to the specified bundle name. Pass a complete array of
   * bundle name strings, which must exactly match the app package name.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public appAlbumFilters?: Array<string>;

  /**
   * Background transparency of the photo picker component. The value range is [0, 1]. **0** indicates completely
   * transparent, and **1** indicates completely opaque.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public backgroundOpacity?: double;

  /**
   * Information for restoring the photo picker component's state from the last exit. By default, this parameter is
   * left empty, indicating that the state from the last exit is not restored.
   *
   * Note: This parameter must be used together with the [completed]{@link PickerController#completed} method of
   * **PickerController**. The **contextRecoveryInfo** in the [CompletedResult]{@link CompletedResult} returned by
   * this method can be used to restore the state.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public contextRecoveryInfo?: photoAccessHelper.ContextRecoveryInfo;
}

/**
 * Represents basic image and video information.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class BaseItemInfo {
  /**
   * URI of the image or video.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * **NOTE**
   *
   * If the resource is a burst shot photo, only the cover image of the burst shot photo group is returned.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public uri?: string;

  /**
   * MIME type of the image or video.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * You can determine the media type based on the prefix of the **mimeType** string. If the string starts with "image
   * /", it indicates an image. If the string starts with "video/", it indicates a video. For details, see
   * [Identifying Asset Types Using the mimeType Field](docroot://media/medialibrary/medialibrary-faqs/medialibrary-asset-judgment-faq.md#identifying-asset-types-using-the-mimetype-field).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public mimeType?: string;

  /**
   * Pointer to the image or video width, in pixels.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public width?: int;

  /**
   * Pointer to the image or video height, in pixels.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public height?: int;

  /**
   * Size of the image or video, in bytes.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public size?: int;

  /**
   * Duration of the video, in milliseconds. In versions earlier than API version 23, the value of **duration** is
   * **0** for moving photos. In API version 23 and later versions, the value of **duration** is the duration of the
   * video clip attached to moving photos. If an exception occurs, **-1** is returned.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public duration?: int;

  /**
   * Subtype of the photo. The options are **DEFAULT**, **MOVING_PHOTO**, and **BURST**.
   *
   * The default value is **DEFAULT (0)**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public photoSubType?: photoAccessHelper.PhotoSubtype;

  /**
   * Dynamic range type of the media file. The options are **HDR** and **SDR**.
   *
   * For moving photos, this parameter specifies the dynamic range type of the cover image.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public dynamicRangeType?: photoAccessHelper.DynamicRangeType;

  /**
   * Image or video direction information.
   *
   * 1: **TOP-left**: The image is not rotated.
   *
   * 2: **TOP-right**: The image is flipped horizontally.
   *
   * 3: **Bottom-right**: The image is rotated by 180°.
   *
   * 4: **Bottom-left**: The image is flipped vertically.
   *
   * 5: **Left-top**: The image is flipped horizontally and then rotated clockwise by 270°.
   *
   * 6: **Right-top**: The image is rotated clockwise by 90°.
   *
   * 7: **Right-bottom**: The image is vertically flipped and then rotated clockwise by 90°.
   *
   * 8: **Left-bottom**: The image is rotated clockwise by 270°.
   *
   * Images with mirroring information retain their original width and height attributes regardless of rotation,
   * whereas images without such information have these attributes updated to reflect the post-rotation dimensions.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public orientation?: int;

  /**
   * State of the moving photo badge.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public movingPhotoBadgeState?: photoAccessHelper.MovingPhotoBadgeStateType;

  /**
   * Log mode of a video file.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public videoMode?: photoAccessHelper.VideoMode;
}

/**
 * It inherits from [BaseItemInfo]{@link BaseItemInfo}, adding the parameter **itemType**.
 *
 * Represents basic image and video information.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ItemInfo extends BaseItemInfo {
  /**
   * Type of the item, which can be **THUMBNAIL** or **CAMERA**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public itemType?: ItemType;
}

/**
 * Represents information about the photo browser page.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class PhotoBrowserInfo {
  /**
   * Animation for entering or exiting the photo browser page.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public animatorParams?: AnimatorParams;
}

/**
 * Defines animation parameters for entering or exiting the photo browser page.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class AnimatorParams {
  /**
   * Animation effects duration, in milliseconds. The value range is [0, +∞).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public duration?: int;

  /**
   * Animation curve.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public curve?: Curve | ICurve | string;
}

/**
 * Represents the maximum number of media assets that can be selected at a time.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class MaxSelected {
  /**
   * Maximum number of media assets (images, videos, or both) that can be selected at a time.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public data?: Map<MaxCountType, int>;
}

/**
 * Represents the single-line display mode. In single-line mode, the component does not provide functions for viewing a
 * larger image. The component does not support callbacks related to large images, and the PickerController does not
 * support APIs related to large images, making API calls ineffective.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class SingleLineConfig {
  /**
   * Aspect ratio for grid display. Both 1:1 and the original image aspect ratio are supported. The default value is 1
   * :1.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public itemDisplayRatio?: ItemDisplayRatio;

  /**
   * Rounded corner radius for grid items.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public itemBorderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * Spacing between grid items.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public itemGap?: Length;
}

/**
 * Describes the information about the preselected files and their corresponding **PhotoPickerComponent** index.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export declare class PreselectedInfo {
  /**
   * URI of the preselected media file.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public uri: string;

  /**
   * Index of the **PhotoPickerComponent** that can be used in automatic selection. The default value is **-1**, which
   * allows automatic selection in any **PhotoPickerComponent**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public preselectablePickerIndex?: int;
}

/**
 * Describes the badge configuration.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export declare class BadgeConfig {
  /**
   * Badge type.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public badgeType?: BadgeType;

  /**
   * URIs for the badge.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public uris?: Array<string>;
}

/**
 * New attributes, which are a subset of [PickerOptions]{@link PickerOptions}.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export declare class UpdatablePickerConfigs {
  /**
   * MIME types.
   *
   * If this parameter is not specified, **IMAGE_VIDEO_TYPE** is used by default.
   *
   * **NOTE**
   *
   * When this parameter is set, the **mimeType** configuration automatically becomes invalid.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public mimeType?: photoAccessHelper.PhotoViewMIMETypes;

  /**
   * Configuration for file type filtering. Multiple types can be specified.
   *
   * - When this parameter is set, the **mimeType** configuration automatically becomes invalid.
   * - When this parameter is set, only media files of the configured filter type are displayed. You are advised to
   * notify users that only images or videos of the specified type can be selected.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public mimeTypeFilter?: photoAccessHelper.MimeTypeFilter;

  /**
   * Maximum number of media files that can be selected. The value range is [0, 500], and the default value is **50**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public maxSelectNumber?: int;

  /**
   * Maximum number of images that can be selected. The value range is [0, 500], and this parameter is limited by the
   * total number of images that can be selected. The default value is **500**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public maxPhotoSelectNumber?: int;

  /**
   * Maximum number of videos that can be selected. The value range is [0, 500]. The value is limited by the maximum
   * number of media files that can be selected in the system. The default value is **500**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public maxVideoSelectNumber?: int;

  /**
   * Selection mode of the photo picker component.
   *
   * **SINGLE_SELECT** or **MULTI_SELECT**. The default value is **MULTI_SELECT**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public selectMode?: SelectMode;

  /**
   * Single selection mode. The default value is **SingleSelectionMode.BROWSER_MODE**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public singleSelectionMode?: photoAccessHelper.SingleSelectionMode;

  /**
   * Whether a single image can be repeatedly selected.
   *
   * **true** if supported, **false** otherwise. If this parameter is not set, the default value **false** is used.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public isRepeatSelectSupported?: boolean;

  /**
   * URIs of the preselected images. The array length is specified by
   * [BaseSelectOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.BaseSelectOptions}.maxSelectNumber,
   * [BaseSelectOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectOptions}.maxPhotoSelectNumber,
   * and [BaseSelectOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectOptions}.
   * maxVideoSelectNumber. The value range is [0, 500], and the default value is **50**. If the value is out of the
   * range, the excess part does not take effect. If this parameter is not set, no image is preselected by default.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public preselectedUris?: Array<string>;

  /**
   * Background color of the check box.
   *
   * The value is an 8-digit hexadecimal color code.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public checkBoxColor?: string;

  /**
   * Text color in the check box.
   *
   * The value is an 8-digit hexadecimal color code.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public checkboxTextColor?: string;

  /**
   * Background color of the grid page of the photo picker component. The value is an 8-digit hexadecimal color code.
   * The first two digits indicate the transparency, and the last six digits indicate the RGB color value.
   *
   * For example, '#FFFFFFFF' indicates a white opaque background.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public backgroundColor?: string;

  /**
   * Background color of the photo browser page.
   *
   * The options are **AUTO**, **LIGHT**, and **DARK**. The default value is **AUTO**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public photoBrowserBackgroundColorMode?: PickerColorMode;

  /**
   * Color mode of the Picker UI component.
   *
   * Dark/light color mode of components other than the background color on the grid page of the photo picker component,
   * including the search box, camera entry, safety tips for using Gallery, and recommendation bubble. This attribute is
   * usually used together with **backgroundColor**. The default value is **PickerColorMode.AUTO**, which follows the
   * system's dark/light color mode.
   *
   * When setting this attribute, avoid using **PickerColorMode.LIGHT** with a dark background color, as it may make
   * components or text hard to see. Avoid using **PickerColorMode.DARK** with a light background color for the same
   * reason.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public uiComponentColorMode?: PickerColorMode;

  /**
   * Whether to block scrolling of the photo picker component. The value **true** means that scrolling is not blocked
   * and the component responds to user scroll gestures. The value **false** means that scrolling is blocked and the
   * component does not respond to user scroll gestures.
   *
   * The default value is **true**.
   *
   * **NOTE**
   *
   * When **isSlidingSupported** is set to **false**, the grid thumbnail does not respond to the user's tap gesture to
   * view the full image. Callbacks related to large image browsing, such as **onEnterPhotoBrowser**, will not be
   * triggered.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public isSlidingSupported?: boolean;

  /**
   * Scrolling effect when the grid page of the photo picker component reaches the edge.
   *
   * The default value is [EdgeEffect.Spring]{@link EdgeEffect}.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public edgeEffect?: EdgeEffect;

  /**
   * Automatic playback scenarios for moving photos. A maximum of two automatic playback scenarios can be configured. If
   * more than two scenarios are configured, only the first two are used, and the extra ones are automatically ignored.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public autoPlayScenes?: Array<photoAccessHelper.AutoPlayScene>;

  /**
   * Used to display only the album content corresponding to the specified bundle name.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public appAlbumFilters?: Array<string>;

  /**
   * Background transparency of the photo picker component. The value range is [0, 1]. **0** indicates completely
   * transparent, and **1** indicates completely opaque.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public backgroundOpacity?: double;

  /**
   * Margin of the component large image.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public photoBrowserMargin?: Margin;

  /**
   * Margin of the component grid.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public gridMargin?: Margin;
}

/**
 * Sets whether the asset with the specified URI is selected.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export declare class ClickResult {
  /**
   * URI of the media asset.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public uri: string;
  /**
   * Sets whether the specified media asset is selected. The value **true** indicates that the asset is selected, and
   * **false** indicates the opposite.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public isSelected: boolean;
}

/**
 * Describes the function name, error code, and message of the error returned when an error occurs during the use of the
 * photo picker component.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export declare class PickerError {
  /**
   * Function name of the error.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public functionName: string;

  /**
   * Error code.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public errorCode: int;

  /**
   * Error message.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  public message: string;
}

/**
 * Defines the information about the Picker's state from the last exit.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export declare class CompletedResult {
  /**
   * URI of the selected image or video. The URI array can be used only by calling **photoAccessHelper.getAssets** in
   * temporary authorization mode.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  photoUris: Array<string>;

  /**
   * Context information of the photo picker component exit status.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  contextRecoveryInfo: photoAccessHelper.ContextRecoveryInfo;

  /**
   * Moving photo badge states of the selected media files. When **isMovingPhotoBadgeShown** is set to **true**,
   * **movingPhotoBadgeStates** contains the moving photo status. Otherwise, the value is empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  movingPhotoBadgeStates: Array<photoAccessHelper.MovingPhotoBadgeStateType>;
}

/**
 * RecoveryResult
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.1.0 static
 */
export declare class RecoveryResult {
  /**
   * URI of the restored album.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  albumUri: string;

  /**
   * Name of the restored album.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  albumName: string;
}

/**
 * Details about the image that is tapped but cannot be selected.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.1.0 static
 */
export declare class UnselectableItemInfo {
  /**
   * Type of the file.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public mimeType?: string;

  /**
   * Subtype of the media asset.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public photoSubType?: photoAccessHelper.PhotoSubtype;
}

/**
 * Indicates the search information used to invoke the picker search capability.
 * At least one of `text` and `smartEntityIds` must be non-empty; otherwise an error is thrown.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.1.0 static
 */
export declare class SearchInfo {
  /**
   * Search text typed by the user.
   * If both `text` and `smartEntityIds` are provided, the picker searches using the combined condition.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  text?: string;

  /**
   * Smart entity id list obtained from the recommendation label callback.
   * Each id is valid only within the current picker session lifecycle.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  smartEntityIds?: Array<int>;
}

/**
 * Indicates a smart entity in the recommendation label.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.1.0 static
 */
export declare class SmartEntity {
  /**
   * Unique id of the entity, valid within the current picker session lifecycle.
   * The value should be an integer.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  id: int;

  /**
   * Name of the entity.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  name?: string;

  /**
   * Thumbnail to be displayed for the entity, for example a portrait avatar.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  thumbnail?: image.PixelMap;
}

/**
 * Indicates the recommendation label clicked by the user on the search page.
 * A recommendation label is either a pure text label (only `text` is provided)
 * or a smart entity label (`smartEntity` is provided). The two cases are mutually exclusive.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.1.0 static
 */
export declare class RecommendedLabel {
  /**
   * Smart entity, applied when the label is generated by association search.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  smartEntity?: SmartEntity;
}

/**
 * Enumerates the types of data sent from **PickerController** to the **PhotoPickerComponent**.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DataType {
  /**
   * Sends a list of selected items to instruct the photo picker component to refresh the selection status. A string
   * array needs to be passed in.
   *
   * For example, after an image is deleted from an application's page, the application calls **setData** to notify the
   * photo picker component of the list of the remaining selected data. Then, the photo picker component refreshes the
   * check box status.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SET_SELECTED_URIS = 1,

  /**
   * Sends the selected album to instruct the photo picker component to refresh the album data. A string array needs to
   * be passed in.
   *
   * For example, after an album is selected from an application's page, the application calls **setData** to notify the
   * photo picker component of the URI of the selected album. Then, the photo picker component refreshes the album data.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SET_ALBUM_URI = 2,

  /**
   * Sends the URI of the selected file and the index of the selected photo picker component If the index of a photo
   * picker component matches the one provided in the parameter, the selected file is automatically highlighted in that
   * photo picker component.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  SET_SELECTED_INFO = 3,

  /**
   * Sends the badge configurations, which are of the [BadgeConfig]{@link BadgeConfig} type and include a list of data
   * with badge types and corresponding file URIs. Once configured, the badge of the configured type is displayed in the
   * specified file.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  SET_BADGE_CONFIGS = 4,

  /**
   * Result of the click, which is of the [ClickResult]{@link ClickResult} type.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  SET_ITEM_CLICK_RESULT = 5
}

/**
 * Enumerates the types of the item clicked.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ItemType {
  /**
   * Image or video (thumbnail).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  THUMBNAIL = 0,

  /**
   * Camera item.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CAMERA = 1
}

/**
 * Enumerates the click operation types.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ClickType {
  /**
   * Select (select an image or click a camera item).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SELECTED = 0,

  /**
   * Deselect (deselect an image).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DESELECTED = 1
}

/**
 * Enumerates the sliding preview directions of the Picker grid page.
 *
 * This capability can be configured since API version 20. If this capability is set since API version 12 to 19, the
 * setting does not take effect and the default direction (vertical) is used.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum PickerOrientation {
  /**
   * Vertical direction.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  VERTICAL = 0,

  /**
   * Horizontal direction.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  HORIZONTAL = 1
}

/**
 * Enumerates the selection modes.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum SelectMode {
  /**
   * Select a single option. Only one image or video can be selected.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SINGLE_SELECT = 0,

  /**
   * Select multiple options. Multiple images and videos can be selected at the same time.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  MULTI_SELECT = 1
}

/**
 * Enumerates the Picker color modes.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum PickerColorMode {
  /**
   * Same with the system.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  AUTO = 0,

  /**
   * Light mode.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LIGHT = 1,

  /**
   * Dark mode.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DARK = 2
}

/**
 * Enumerates the types of the reminder when the number of selected items reaches the maximum.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ReminderMode {
  /**
   * No reminder.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NONE = 0,

  /**
   * Toast message. A toast message is displayed when the number of selected items reaches the maximum.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TOAST = 1,

  /**
   * Grayed-out hint.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  MASK = 2
}

/**
 * Enumerates the types of the maximum count.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum MaxCountType {
  /**
   * Total number of media assets (images and videos) that can be selected.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TOTAL_MAX_COUNT = 0,

  /**
   * Total number of images that can be selected. The value cannot be greater than **Total_MAX_Count**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PHOTO_MAX_COUNT = 1,

  /**
   * Total number of videos that can be selected. The value cannot be greater than **Total_MAX_Count**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  VIDEO_MAX_COUNT = 2
}

/**
 * Enumerates the view range on the photo browser page.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum PhotoBrowserRange {
  /**
   * View all images and videos.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ALL = 0,

  /**
   * View selected images and videos only. You cannot switch to unselected content.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SELECTED_ONLY = 1
}

/**
 * Represents other UI elements except the image preview component on the photo browser page.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum PhotoBrowserUIElement {
  /**
   * Check box on the photo browser page.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CHECKBOX = 0,

  /**
   * **Back** button on the photo browser page.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BACK_BUTTON = 1
}

/**
 * Enumerates the video playback states.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum VideoPlayerState {
  /**
   * The video is being played.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PLAYING = 0,

  /**
   * Video playback is paused.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PAUSED = 1,

  /**
   * Video playback is stopped.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  STOPPED = 2,

  /**
   * Started dragging the progress bar.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SEEK_START = 3,

  /**
   * Finished dragging the progress bar.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SEEK_FINISH = 4
}

/**
 * Enumerates the modes for saving images or videos.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum SaveMode {
  /**
   * Saves the image or video as a new one.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SAVE_AS = 0,

  /**
   * Replaces the original image or video. After the replacements, you can roll back the saved content in Gallery to
   * restore the original image or video.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  OVERWRITE = 1
}

/**
 * Enumerates the aspect ratios for grid display in single-line display mode.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ItemDisplayRatio {
  /**
   * 1:1 ratio.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SQUARE_RATIO = 0,

  /**
   * Original image aspect ratio.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ORIGINAL_SIZE_RATIO = 1
}

/**
 * Enumerates the badge types.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export declare enum BadgeType {
  /**
   * Uploaded.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  BADGE_UPLOADED = 0
}

/**
 * Indicates the picker page state.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export declare enum PickerState {
  /**
   * Default album browsing state.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  DEFAULT = 0,

  /**
   * Search state, including search recommendation page and search result page.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.1 static
   */
  SEARCH = 1
}

/**
 * The callback of onSelected event
 *
 * @typedef { function }
 * @param { string } uri
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type SelectCallback = (uri: string) => void;

/**
 * The callback of onDeSelected event
 *
 * @typedef { function }
 * @param { string } uri
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type DeSelectCallback = (uri: string) => void;

/**
 * The callback of itemClicked event
 *
 * @typedef { function }
 * @param { ItemInfo } itemInfo
 * @param { ClickType } clickType
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ItemClickedCallback = (itemInfo: ItemInfo, clickType: ClickType) => boolean;

/**
 * The callback of enterPhotoBrowser event
 *
 * @typedef { function }
 * @param { PhotoBrowserInfo } photoBrowserInfo
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type EnterPhotoBrowserCallback = (photoBrowserInfo: PhotoBrowserInfo) => boolean;

/**
 * The callback of exitPhotoBrowser event
 *
 * @typedef { function }
 * @param { PhotoBrowserInfo } photoBrowserInfo
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type ExitPhotoBrowserCallback = (photoBrowserInfo: PhotoBrowserInfo) => boolean;

/**
 * The callback of pickerControllerReady event
 *
 * @typedef { function }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type PickerControllerReadyCallback = () => void;

/**
 * Called when the selected items are deleted.
 *
 * @param { BaseItemInfo[] } baseItemInfos - Basic information about the selected items.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ItemsDeletedCallback = (baseItemInfos: BaseItemInfo[]) => void;

/**
 * The callback of onPhotoBrowserChanged event
 *
 * @typedef { function }
 * @param { BaseItemInfo } browserItemInfo
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type PhotoBrowserChangedCallback = (browserItemInfo: BaseItemInfo) => boolean;

/**
 * Called when items are selected after the maximum count has been reached.
 *
 * @param { MaxCountType } exceedMaxCountType - Type of the maximum count that has been reached. It can be the maximum
 *     count of selected images, maximum count of selected videos, or maximum count of selected images and videos.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ExceedMaxSelectedCallback = (exceedMaxCountType: MaxCountType) => void;

/**
 * Called when the current album is deleted.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type CurrentAlbumDeletedCallback = () => void;

/**
 * The callback of onVideoPlayStateChanged event
 *
 * @typedef { function }
 * @param { VideoPlayerState } state - Indicates the video player state.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type VideoPlayStateChangedCallback = (state: VideoPlayerState) => void;

/**
 * Callback to be invoked when the moving photo effect of the **PhotoPickerComponent** is enabled or disabled.
 *
 * @param { string } uri - URI of the moving photo.
 * @param { photoAccessHelper.MovingPhotoBadgeStateType } state - State of the moving photo badge.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export type MovingPhotoBadgeStateChangedCallback =
    (uri: string, state: photoAccessHelper.MovingPhotoBadgeStateType) => void;

/**
 * Callback to be invoked when the user stops scrolling and is positioned at the beginning of the grid content in the
 * **PhotoPickerComponent**.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export type ScrollStopAtStartCallback = () => void;

/**
 * Callback to be invoked when the user stops scrolling and is positioned at the end of the grid content in the
 * **PhotoPickerComponent**.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export type ScrollStopAtEndCallback = () => void;

/**
 * Callback to be invoked when an item in a **PhotoPickerComponent** is clicked.
 *
 * @param { ItemInfo } itemInfo - Type of the clicked item, which can be a thumbnail item or a camera item.
 * @param { ClickType } clickType - Enumerates the click operation types.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export type ItemClickedNotifyCallback = (itemInfo: ItemInfo, clickType: ClickType) => void;

/**
 * Callback to be invoked when a user pinches a grid component.
 *
 * @param { photoAccessHelper.GridLevel } gridLevel - Number of columns in the grid.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export type PinchGridSwitchedCallback = (gridLevel: photoAccessHelper.GridLevel) => void;

/**
 * Callback to be invoked when a grid view switches to the photo browser page or the photo browser page is switched.
 *
 * @param { BaseItemInfo } targetPhotoInfo - Basic information about the selected items.
 *     <br>**NOTE**
 *     <br>The returned information contains only the **uri**, **photoSubType**, **mimeType**, and
 *     **movingPhotoBadgeState** fields in [BaseItemInfo]{@link BaseItemInfo}.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export type PhotoBrowserChangeStartCallback = (targetPhotoInfo: BaseItemInfo) => void;

/**
 * Describes the callback to be invoked when an error occurs during the use of the **PhotoPickerComponent**.
 *
 * @param { PickerError } pickerError - Basic information about the error.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export type ErrorCallback = (pickerError: PickerError) => void;

/**
 * The callback of onPickerRecovery event
 *
 * @typedef { function }
 * @param { RecoveryResult } recoveryResult
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.1.0 static
 */
export type PickerRecoveryCallback = (recoveryResult: RecoveryResult) => void;

/**
 * Called when the user zooms in or out on a full image after entering the full image view through
 * **PhotoPickerComponent**.
 *
 * @param { double } scale - Scale of the image compared with the original image.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.1 static
 */
export type PhotoBrowserZoomCallback = (scale: double) => void;

/**
 * Describes the callback invoked when an unselectable image is tapped on the picker grid or large image preview screen.
 *
 * @param { UnselectableItemInfo } unselectableItemInfo - Details about the image that is tapped but cannot be selected.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.1.0 static
 */
export type UnselectableItemClickedCallback = (unselectableItemInfo: UnselectableItemInfo) => void;

/**
 * The callback of onPickerStateChanged event.
 *
 * @param { PickerState } pickerState
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.1.0 static
 */
export type PickerStateChangedCallback = (pickerState: PickerState) => void;

/**
 * The callback of onRecommendedLabelClicked event.
 *
 * @param { RecommendedLabel } recommendedLabel
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.1.0 static
 */
export type RecommendedLabelClickedCallback = (recommendedLabel: RecommendedLabel) => void;