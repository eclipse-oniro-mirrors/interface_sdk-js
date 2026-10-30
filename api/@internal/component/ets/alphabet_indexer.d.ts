/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 */

/**
 * Enumerates the alignment styles of the indexer pop-up window.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum IndexerAlign {
  /**
   * The pop-up window is displayed on the right of the indexer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Left,

  /**
   * The pop-up window is displayed on the left of the indexer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Right,

  /**
   * The pop-up window is displayed on the right of the indexer for left-to-right scripts, and on the left of the
   * indexer for right-to-left scripts.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  START,

  /**
   * The pop-up window is displayed on the left of the indexer for left-to-right scripts, and on the right of the
   * indexer for right-to-left scripts.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  END
}

/**
 * Defines the options of the **AlphabetIndexer** component.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface AlphabetIndexerOptions {
  /**
   * Array of index items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  arrayValue: Array<string>;
  /**
   * Index of the initial selected item. If the value is out of range, the default value **0** is used. When this
   * parameter and the [selected]{@link AlphabetIndexerAttribute#selected} property are set at the same time, the
   * **selected** property has a higher priority.
   *
   * Value range: [0, arrayValue.length-1]
   *
   * This parameter supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selected: number;
}

/**
 * The **AlphabetIndexer** component can be used with container components to quickly locate the display area of the
 * container based on logical structure. It is suitable for scenarios requiring quick content location, such as
 * contacts, city lists, and category lists.
 *
 * > **NOTE**
 * >
 * > - Primary indexes: letter indexes on the index bar, such as '#', 'A', 'B', 'C', etc.
 * >
 * > - Secondary indexes: specific content list items displayed in the pop-up window, returned through the
 * > **onRequestPopupData** callback.
 * >
 * > - Since API version 12, haptic feedback is enabled by default. Before using it, configure the vibration permission
 * > as described in [enableHapticFeedback]{@link AlphabetIndexerAttribute#enableHapticFeedback}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface AlphabetIndexerInterface {

  /**
   * Creates an **AlphabetIndexer** component.
   *
   * @param { object } value [since 7 - 17]
   * @param { AlphabetIndexerOptions } options - Options of the **AlphabetIndexer** component. [since 18]
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options: AlphabetIndexerOptions): AlphabetIndexerAttribute;
}

/**
 * Represents the callback invoked when an index item is selected.
 *
 * @param { number } index - Index of the currently selected index item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnAlphabetIndexerSelectCallback  = (index: number) => void;

/**
 * Represents the callback invoked when a secondary index item in the pop-up window is selected.
 *
 * @param { number } index - Index of the currently selected secondary index item in the pop-up window.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnAlphabetIndexerPopupSelectCallback = (index: number) => void;
/**
 * Represents the callback invoked when an index item is selected and
 * [usingPopup]{@link AlphabetIndexerAttribute#usingPopup} is set to **true**.
 *
 * @param { number } index - Index of the currently selected index item.
 * @returns { Array<string> } Array of secondary index items to be displayed in the pop-up window. Up to 5 items can be
 *     displayed vertically, with scrollable support for more items.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnAlphabetIndexerRequestPopupDataCallback  = (index: number) => Array<string>;

/**
 * When the [width]{@link CommonMethod#width(value: Length)} attribute is set to **"auto"**, the width is adaptive. This
 * means that the width will adjust according to the maximum width of the index items.
 *
 * The default value of the [padding]{@link CommonMethod#padding} attribute is 4 vp.
 *
 * The [maxFontScale]{@link TextAttribute#maxFontScale} and [minFontScale]{@link TextAttribute#minFontScale} attributes
 * are both set to a constant value of 1, which means that they do not change with the system font size.
 *
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link ./common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class AlphabetIndexerAttribute extends CommonMethod<AlphabetIndexerAttribute> {
  /**
   * Registers the callback for the index item selection event. The callback parameter is the current selected item
   * index.
   *
   * @param { function } callback - Index of the selected item.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead onSelect
   */
  onSelected(callback: (index: number) => void): AlphabetIndexerAttribute;

  /**
   * Sets the text color for unselected items.
   *
   * @param { ResourceColor } value - Text color of unselected items.
   *     <br>Default value: **0x99182431**, displayed as a slightly transparent dark blue.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the text color for the selected item.
   *
   * @param { ResourceColor } value - Selected item text color.<br/>Default value: **0xFF007DFF**, displayed as opaque
   *     blue.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the text color for the primary index item in the pop-up window.
   *
   * @param { ResourceColor } value - Text color of the pop-up window primary index item.<br/>Default value:
   *     **0xFF007DFF**, displayed as opaque blue.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  popupColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the background color of the selected item.
   *
   * @param { ResourceColor } value - Background color of the selected item.
   *     <br>Default value: **0x1A007DFF**, displayed as a semi-transparent blue.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selectedBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the background color of the pop-up window.
   *
   * When this API is not actively called or the parameter **value** is set to **undefined**:
   *
   * In API version 11 and earlier, the default background color of the pop-up window is **0xFFFFFFFF**, displayed as
   * white.
   *
   * From API version 12 to API version 24, the default is **#66808080**, displayed as semi-transparent gray.
   *
   * Starting from API version 26.0.0, if neither [popupBackground]{@link AlphabetIndexerAttribute#popupBackground} nor
   * [popupBackgroundBlurStyle]{@link AlphabetIndexerAttribute#popupBackgroundBlurStyle} is actively called, or both are
   * called with **value** set to **undefined**, the default display on high-computing-power and medium-computing-power
   * devices is the **THICK** style of the immersive system material
   * [ImmersiveStyle]{@link @ohos.arkui.uiMaterial:uiMaterial.ImmersiveStyle}, and the default display on low-computing-
   * power devices is a white background.
   *
   * If **popupBackgroundBlurStyle** is actively called with a valid **value**, the default background color of the pop-
   * up window is **#66808080**, displayed as semi-transparent gray.
   *
   * @param { ResourceColor } value - Background color of the pop-up window.
   *     <br>The background blur effect of the pop-up text can affect the background color. You can disable the effect
   *     by setting [popupBackgroundBlurStyle]{@link AlphabetIndexerAttribute#popupBackgroundBlurStyle} to **NONE**.
   *     <br>
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  popupBackground(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the text color for the selected secondary index item in the pop-up window.
   *
   * @param { ResourceColor } value - Text color of the selected secondary index items in the pop-up window.
   *     <br>Default value: **#FF182431**, which is dark blue.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popupSelectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the text color for the unselected secondary index items in the pop-up window.
   *
   * @param { ResourceColor } value - Text color of the unselected secondary index items in the pop-up window.
   *     <br>Default value: **#FF182431**, which is dark blue.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popupUnselectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the background color for the secondary index item in the pop-up window.
   *
   * @param { ResourceColor } value - Background color of the pop-up window secondary index item.<br/>Default value:<br
   *     />API version 11 and earlier: #FFFFFFFF, displayed as white.<br />API version 12 and later: #00000000,
   *     displayed as transparent.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popupItemBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets whether to display the pop-up window.
   *
   * @param { boolean } value - Whether to display the pop-up window.
   *     <br>Default value: **false**.
   *     <br>**true**: Display the pop-up window.
   *     <br>**false**: Do not display the pop-up window.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  usingPopup(value: boolean): AlphabetIndexerAttribute;

  /**
   * Sets the text style for the selected item.
   *
   * @param { Font } value - Text style of the selected item.
   *     <br>Default value:
   *     <br>API version 11 and earlier:
   *     <br>{
   *     <br>size:'12.0fp',
   *     <br> style:FontStyle.Normal,
   *     <br> weight:FontWeight.Regular,
   *     <br> family:'HarmonyOS Sans'
   *     <br>}
   *     <br>API version 12 and later:
   *     <br>{
   *     <br>size:'10.0vp',
   *     <br> style:FontStyle.Normal,
   *     <br> weight:FontWeight.Medium,
   *     <br> family:'HarmonyOS Sans'
   *     <br>}
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selectedFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Sets the text style for the primary index item in the pop-up window.
   *
   * @param { Font } value - Text style of the primary index item in the pop-up window.
   *     <br>Default value:
   *     <br>{
   *     <br>size:'24.0vp',
   *     <br> style:FontStyle.Normal,
   *     <br> weight:FontWeight.Medium,
   *     <br> family:'HarmonyOS Sans'
   *     <br>}
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  popupFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Sets the text style for the secondary index item in the pop-up window.
   *
   * @param { Font } value - Text style of the secondary index item in the pop-up window.
   *     <br>Default value:
   *     <br>{
   *     <br>size:24,
   *     <br>weight:FontWeight.Medium
   *     <br>}
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popupItemFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Sets the size of the index item area.
   *
   * @param { string | number } value - Size of the index item area, which is a square, meaning the side length of the
   *     square. This attribute cannot be set in percentage.
   *     <br>The actual value is restricted by the component size. The maximum width of an index item is the component
   *     width minus the left and right [padding]{@link CommonMethod#padding}, and the maximum height of an index item
   *     is (component height minus the top and bottom [padding]{@link CommonMethod#padding})/number of index items. If
   *     the input value is less than or equal to 0, the default value is used.
   *     <br>Default value: **16.0**
   *     <br>Unit: vp
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  itemSize(value: string | number): AlphabetIndexerAttribute;

  /**
   * Sets the text style for unselected items.
   *
   * @param { Font } value - Text style of unselected items.
   *     <br>Default value:
   *     <br>API version 11 and earlier:
   *     <br>{
   *     <br>size:'12.0fp',
   *     <br> style:FontStyle.Normal,
   *     <br> weight:FontWeight.Regular,
   *     <br> family:'HarmonyOS Sans'
   *     <br>}
   *     <br>API version 12 and later:
   *     <br>{
   *     <br>size:'10.0vp',
   *     <br> style:FontStyle.Normal,
   *     <br> weight:FontWeight.Medium,
   *     <br> family:'HarmonyOS Sans'
   *     <br>}
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  font(value: Font): AlphabetIndexerAttribute;

  /**
   * Sets the alignment style of the indexer pop-up window.
   *
   * @param { IndexerAlign } value - Alignment style of the indexer pop-up window. The pop-up window can be displayed on
   *     the right or left of the indexer.
   *     <br>Default value: **IndexerAlign.END**
   * @param { Length } [offset] - Spacing between the pop-up window and the alphabetic index bar. A value greater than
   *     or equal to **0** is valid. If this parameter is set to a value less than **0** or is not set, the spacing is
   *     the same as **popupPosition**. When this parameter and
   *     [popupPosition]{@link AlphabetIndexerAttribute#popupPosition} are set at the same time, **offset** takes effect
   *     in the horizontal direction, and **popupPosition.y** takes effect in the vertical direction. [since 10]
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignStyle(value: IndexerAlign, offset?: Length): AlphabetIndexerAttribute;

  /**
   * Triggered when an index item is selected, with the callback parameter being the index of the currently selected
   * item.
   *
   * @param { function } callback - Callback used to process the index item selection event. [since 8 - 17]
   * @param { OnAlphabetIndexerSelectCallback } callback - Callback used to process the index item selection
   *     event. [since 18]
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onSelect(callback: OnAlphabetIndexerSelectCallback): AlphabetIndexerAttribute;

  /**
   * Triggered for a secondary index item content event in the pop-up window. The callback parameter is the index of the
   * selected secondary index item. The return value is the secondary index item content to be displayed in the pop-up
   * window.
   *
   * @param { function } callback - Callback used to provide the content of the secondary index item in the pop-up
   *     window. You need to set [usingPopup]{@link AlphabetIndexerAttribute#usingPopup} to **true**
   *     first. [since 8 - 17]
   * @param { OnAlphabetIndexerRequestPopupDataCallback } callback - Callback used to provide the content of the
   *     secondary index item in the pop-up window. You need to set
   *     [usingPopup]{@link AlphabetIndexerAttribute#usingPopup} to **true** first. [since 18]
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onRequestPopupData(callback: OnAlphabetIndexerRequestPopupDataCallback): AlphabetIndexerAttribute;

  /**
   * Triggered when a secondary index item in the pop-up window is selected. The callback parameter is the index of the
   * selected secondary index item. This event is triggered only when
   * [usingPopup]{@link AlphabetIndexerAttribute#usingPopup} is set to **true**.
   *
   * @param { function } callback - Callback used to process the secondary index selection event of the pop-up window.
   *     You need to set [usingPopup]{@link AlphabetIndexerAttribute#usingPopup} to **true** first. [since 8 - 17]
   * @param { OnAlphabetIndexerPopupSelectCallback } callback - Callback used to process the secondary index selection
   *     event of the pop-up window. You need to set [usingPopup]{@link AlphabetIndexerAttribute#usingPopup} to **true**
   *     first. [since 18]
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onPopupSelect(callback: OnAlphabetIndexerPopupSelectCallback): AlphabetIndexerAttribute;

  /**
   * Sets the index of the selected item. When this attribute and the **selected** attribute in
   * [AlphabetIndexerOptions]{@link AlphabetIndexerOptions} are set at the same time, this attribute has a higher
   * priority.
   *
   * Since API version 10, this parameter supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * @param { number } index - Index of the selected item.
   *     <br>Value range: [0, [arrayValue]{@link AlphabetIndexerOptions}.length – 1]
   *     <br>If the index value is out of the range, the default value **0** is used.
   *     <br>Default value: **0**
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selected(index: number): AlphabetIndexerAttribute;

  /**
   * Sets the position of the pop-up window relative to the midpoint of the top edge of the index bar.
   *
   * @param { Position } value - Position of the pop-up window relative to the midpoint of the top edge of the index
   *     bar. When set simultaneously with [alignStyle]{@link AlphabetIndexerAttribute#alignStyle}, the horizontal
   *     direction is controlled by the **offset** parameter of [alignStyle]{@link AlphabetIndexerAttribute#alignStyle},
   *     and **value.y** takes effect in the vertical direction.<br/>Default value: **{x: 60.0, y: 48.0}**<br/>Unit: vp
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  popupPosition(value: Position): AlphabetIndexerAttribute;

  /**
   * Sets whether to enable the adaptive collapse behavior for the indexer.
   *
   * When the first index item is **"#"**: Remaining items ≤ 9: Full display mode (all index items are fully displayed);
   * 9 < Remaining items ≤ 13: Adapts between full display and short collapse modes based on the indexer height;
   * remaining items > 13: Adapts between short and long collapse modes based on the indexer height.
   *
   * When the first index item is not **"#"**: All items ≤ 9: Full display mode (all index items are fully displayed); 9
   * < All items ≤ 13: Adapts between full display and short collapse modes based on the indexer height; all items > 13:
   * Adapts between short and long collapse modes based on the indexer height.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { boolean } value - Whether to auto-collapse or expand the indexer bar.
   *     <br>Default value:
   *     <br>Before API version 12: **false**
   *     <br>Since API version 12: **true**
   *     <br>**true**: Enable the adaptive collapse behavior.
   *     <br>**false**: Disable the adaptive collapse behavior.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  autoCollapse(value: boolean): AlphabetIndexerAttribute;

  /**
   * Sets the radius of the index border corners in the pop-up window.
   *
   * @param { number } value - Radius of the index background border corners in the pop-up window.
   *     <br>Default value: **24vp**.
   *     <br>This parameter cannot be set in percentage. If the value specified is less than **0**, **0** is used.
   *     <br>The radius of the index background border corners in the pop-up window is automatically adaptive (radius of
   *     the index corners + 4 vp).
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  popupItemBorderRadius(value: number): AlphabetIndexerAttribute;

  /**
   * Sets the radius of the index background border corners in the alphabetic index bar.
   *
   * @param { number } value - Radius of the index background border corners in the alphabetic index bar.
   *     <br>Default value: **8vp**
   *     <br>This parameter cannot be set in percentage. If the value specified is less than **0**, **0** is used.
   *     <br>The radius of the index background border corners in the alphabetic index bar is automatically adaptive (
   *     radius of the index corners + 4 vp).
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  itemBorderRadius(value: number): AlphabetIndexerAttribute;

  /**
   * Sets the background blur material of the pop-up window. Before API version 26.0.0, when this API is not called, the
   * default is the component's regular material blur, corresponding to **COMPONENT_REGULAR** in **BlurStyle**. Starting
   * from API version 26.0.0, if neither [popupBackground]{@link AlphabetIndexerAttribute#popupBackground} nor
   * [popupBackgroundBlurStyle]{@link AlphabetIndexerAttribute#popupBackgroundBlurStyle} is actively called, or both are
   * called with **value** set to **undefined**, the default display on high-computing-power and medium-computing-power
   * devices is the **THICK** style of the immersive system material
   * [ImmersiveStyle]{@link @ohos.arkui.uiMaterial:uiMaterial.ImmersiveStyle}, and the default display on low-computing-
   * power devices is a white background.
   *
   * @param { BlurStyle } value - Background blur style of the pop-up window.
   *     <br>The background blur effect can affect [popupBackground]{@link AlphabetIndexerAttribute#popupBackground}.
   *     You can disable the effect by setting it to **NONE**.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  popupBackgroundBlurStyle(value: BlurStyle): AlphabetIndexerAttribute;

  /**
   * Sets the background color for the primary index item in the pop-up window.
   *
   * @param { ResourceColor } value - Background color for the primary index item in the pop-up window.
   *     <br>Default value:
   *     <br>If the pop-up window has only one index: **#00FFFFFF**.
   *     <br>If the pop-up window has multiple indexes: **#0c182431**.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  popupTitleBackground(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets whether to enable haptic feedback. When enabled, haptic feedback is triggered when a finger touches or slides
   * to select an index item.
   *
   * @param { boolean } value - Whether to enable haptic feedback.
   *     <br>**true**: To enable haptic feedback.
   *     <br>**false**: Not to enable haptic feedback.
   *     <br>Default value: **true**
   *     <br>To enable haptic feedback, you must declare the **ohos.permission.VIBRATE** permission under
   *     **requestPermissions** in the [module.json5](docroot://quick-start/module-configuration-file.md) file of the
   *     project.
   *     <br>"requestPermissions": [{"name": "ohos.permission.VIBRATE"}]
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  enableHapticFeedback(value: boolean): AlphabetIndexerAttribute;
}

/**
 * The **AlphabetIndexer** component can be used with container components to quickly locate the display area of the
 * container based on logical structure. It is suitable for scenarios requiring quick content location, such as
 * contacts, city lists, and category lists.
 *
 * > **NOTE**
 * >
 * > - Primary indexes: letter indexes on the index bar, such as '#', 'A', 'B', 'C', etc.
 * >
 * > - Secondary indexes: specific content list items displayed in the pop-up window, returned through the
 * > **onRequestPopupData** callback.
 * >
 * > - Since API version 12, haptic feedback is enabled by default. Before using it, configure the vibration permission
 * > as described in [enableHapticFeedback]{@link AlphabetIndexerAttribute#enableHapticFeedback}.
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const AlphabetIndexer: AlphabetIndexerInterface;

/**
 * Defines AlphabetIndexer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const AlphabetIndexerInstance: AlphabetIndexerAttribute;