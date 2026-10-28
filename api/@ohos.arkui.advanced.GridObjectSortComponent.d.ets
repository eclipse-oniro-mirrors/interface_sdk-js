/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * **GridObjectSortComponent** is a grid object organizer that you can use to edit, drag to sort, add, and delete grid
 * objects.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **GridObjectSortComponent** component has [universal attributes]{@link ./@internal/component/ets/common}
 * > and [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **GridObjectSortComponent** component itself. As a result, the configured universal attributes and
 * > universal events may fail to take effect or behave as intended. For this reason, avoid using universal attributes
 * > and events with the **GridObjectSortComponent** component.
 * 
 * ######  Child Components
 * 
 * Not supported
 * 
 * ###### Events
 * 
 * The [universal events]{@link ./@internal/component/ets/common} are not supported.
 *
 * @file
 * @kit ArkUI
 */

/**
 * Enumerates display types for nodes in the **GridObjectSortComponent** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export declare enum GridObjectSortComponentType {
  /**
   * Image with text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  IMAGE_TEXT = "image_text",

  /**
   * Text only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  TEXT = "text"
}

/**
 * Provides data item configuration for the **GridObjectSortComponent** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface GridObjectSortComponentItem {
  /**
   * Data ID, which must be unique.
   *
   * The default value is an empty string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  id: number | string;

  /**
   * Text information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text: ResourceStr;

  /**
   * Whether the grid object is selected. The value **true** means that the grid object is selected, and **false**
   * means the opposite.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selected: boolean;

  /**
   * Sequence number. The smaller the value, the higher the item is sorted.
   *
   * The value must be greater than or equal to 0.
   *
   * Default value: **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  order: number;

  /**
   * URL of the image, configured when **GridObjectSortComponentType** is set to **IMAGE_TEXT**. It does not take
   * effect when the type is **TEXT**. If **symbolStyle** is also configured, **symbolStyle** prevails.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  url?: ResourceStr;

  /**
   * Symbol resource of the image, configured when **GridObjectSortComponentType** is set to **IMAGE_TEXT**. It does
   * not take effect when the type is **TEXT**. The priority of this property is higher than that of **url**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;
}

/**
 * Provides configuration options for the **GridObjectSortComponent** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface GridObjectSortComponentOptions {
  /**
   * Component display type: text only or image with text. When it is set to **GridObjectSortComponentType.IMAGE_TEXT**,
   * configure **url** or **symbolStyle** for the data items.
   *
   * Default value: **GridObjectSortComponentType.TEXT**
   *
   * @default GridObjectSortComponentType.TEXT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type?: GridObjectSortComponentType;

  /**
   * Image size, in vp. This parameter takes effect only when **type** is **GridObjectSortComponentType.IMAGE_TEXT**.
   * When it is set to **0**, a common image is displayed at the default size, and the font size of the Symbol icon
   * is 0 vp.
   *
   * The value must be greater than or equal to 0.
   *
   * Default value: **56vp**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  imageSize?: number | Resource;

  /**
   * Title displayed in the non-editing state.
   *
   * Default value: **Channel**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  normalTitle?: ResourceStr;

  /**
   * Title displayed in the editing state.
   *
   * Default value: **Edit**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  editTitle?: ResourceStr;

  /**
   * First subtitle of the display area.
   *
   * Default value: **Drag to sort**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  showAreaTitle?: ResourceStr;

  /**
   * Second subtitle of the display area.
   *
   * Default value: **Tap to add**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  addAreaTitle?: ResourceStr;
}

/**
 * Creates a GridObjectSortComponent component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Component
export declare struct GridObjectSortComponent {
  /**
   * Component configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  @Prop
  options: GridObjectSortComponentOptions;

  /**
   * Data to pass. The maximum number of data entries is 50. If the number of data entries exceeds 50, only the
   * first 50 entries are used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  dataList: Array<GridObjectSortComponentItem>;

  /**
   * Callback invoked when changes are saved. **select** indicates the selected data after editing, and **unselect**
   * indicates the unselected data after editing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onSave: (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void;

  /**
   * Callback invoked when changes are canceled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onCancel: () => void;

  /**
   * Build function of GridObjectSortComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  build(): void;
}