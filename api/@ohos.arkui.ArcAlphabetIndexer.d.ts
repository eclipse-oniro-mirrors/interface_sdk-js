/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
  * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * Initialization parameters for the **ArcAlphabetIndexer** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ArcAlphabetIndexerInitInfo {
  /**
   * Array of alphabet index strings. It cannot be set to empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  arrayValue: string[];
  /**
   * Index of the initial selected item. If the value is out of range, the default value **0** is used.
   *
   * This parameter supports two-way binding through [!!](docroot://ui/state-management/arkts-new-binding.md).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selected: number;
}

/**
 * Defines the callback used in [onSelect]{@link ArcAlphabetIndexerAttribute#onSelect}.
 *
 * @param { number } index - Index value of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnSelectCallback =  (index: number) => void;

/**
 * The **ArcAlphabetIndexer** is a component arranged in an arc that allows quick location by alphabetical order. It can
 * be bound with container components to quickly locate the container display area based on logical structure, making it
 * suitable for circular screen devices such as watches.
 *
 * > **NOTE**
 * >
 * > - This component can be used on phones, PCs, 2-in-1 devices, tablets, TVs, and wearables. In API version 22 and
 * > earlier versions, a compilation warning will be reported when this component is used on phones, PCs, 2-in-1
 * > devices, tablets, and TVs, but the component can still run properly.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export interface ArcAlphabetIndexerInterface {

  /**
   * Creates and initializes an **ArcAlphabetIndexer** component.
   *
   * @param { ArcAlphabetIndexerInitInfo } info - Initialization parameters of the arc alphabet index bar, including the
   *     alphabet index string array and the initial selected item index value.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  (info: ArcAlphabetIndexerInitInfo): ArcAlphabetIndexerAttribute;
}

/**
 * In addition to the [universal attributes]{@link ./@internal/component/ets/common}, the following attributes are
 * supported.
 *
 * In addition to the [universal events]{@link ./@internal/component/ets/common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare class ArcAlphabetIndexerAttribute extends CommonMethod<ArcAlphabetIndexerAttribute> {
  /**
   * Sets the text color of the index items in the normal state.
   *
   * @param { Optional<ColorMetrics> } color - Text color.
   *     <br>Default value: **0xFFFFFF**, displayed as white
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  color(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute;

  /**
   * Sets the text color of the selected item.
   *
   * @param { Optional<ColorMetrics> } color - Text color of the selected item.
   *     <br>Default value: **0xFFFFFF**, displayed as white
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedColor(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute;

  /**
   * Sets the text color for the pop-up window.
   *
   * @param { Optional<ColorMetrics> } color - Text color of the pop-up window.
   *     <br>Default value: **0xFFFFFF**, displayed as white
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  popupColor(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute;

  /**
   * Sets the background color of the selected item.
   *
   * @param { Optional<ColorMetrics> } color - Background color of the selected item.
   *     <br>Default value: **0x1F71FF**, displayed as dark blue
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedBackgroundColor(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute;

  /**
   * Sets the background color of the pop-up window.
   *
   * @param { Optional<ColorMetrics> } color - Background color of the pop-up window.
   *     <br>Default value: **0xD8404040**, displayed as dark gray with slight transparency
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  popupBackground(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute;

  /**
   * Sets whether to display the pop-up window.
   *
   * @param { Optional<boolean> } enabled - Whether to display the pop-up window.
   *     <br>**true**: yes; **false**: no
   *     <br>Default value: **false**
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  usePopup(enabled: Optional<boolean>): ArcAlphabetIndexerAttribute;

  /**
   * Sets the font style of the selected item, including size, weight, style, and font family.
   *
   * @param { Optional<Font> } font - Text style of the selected item, used to set the display effect of the selected
   *     letter in the index bar, including font size, font weight, tilt angle, and font family.<br/>Default value:
   *     **{<br/>size:'13.0fp',<br/> style:FontStyle.Normal,<br/> weight:500,<br/> family:'HarmonyOS Sans'<br/>}**
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedFont(font: Optional<Font>): ArcAlphabetIndexerAttribute;

  /**
   * Sets the font style of the pop-up window.
   *
   * @param { Optional<Font> } font - Font style of the pop-up window, which sets the display effect of the currently
   *     selected letter shown in the pop-up window, including font size, font weight, tilt angle, font family, etc.<br/
   *     >Default value:<br/>{<br/>size:'19.0fp',<br/> style:FontStyle.Normal,<br/> weight:500,<br/> family:'HarmonyOS
   *     Sans'<br/>}
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  popupFont(font: Optional<Font>): ArcAlphabetIndexerAttribute;

  /**
   * Sets the default font style of the arc alphabet index bar, that is, the font style of index items in the unselected
   * state.
   *
   * @param { Optional<Font> } font - Default font style of the alphabet index bar, used to set the display effect of
   *     all letters on the index bar, including font size, font weight, tilt angle, and font family.<br/>Default value:
   *     **<br/>{<br/>size:'13.0fp',<br/> style:FontStyle.Normal,<br/> weight:500,<br/> family:'HarmonyOS Sans'<br/>}**
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  font(font: Optional<Font>): ArcAlphabetIndexerAttribute;

  /**
   * Sets the size of the index item area for the arc alphabet indexer.
   *
   * @param { Optional<LengthMetrics> } size - Size of the index item area of the arc index bar (diameter of the
   *     circular area). Percentage setting is not supported.<br/>Default value: **24.0**<br/>Unit: vp
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  itemSize(size: Optional<LengthMetrics>): ArcAlphabetIndexerAttribute;

  /**
   * Sets the index of the selected item.
   *
   * @param { Optional<number> } index - Index value of the selected item. If the value exceeds the valid index range,
   *     the default value **0** is used.<br/>Default value: **0**<br/>This parameter supports two-way binding through
   *     [!!](docroot://ui/state-management/arkts-new-binding.md).
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selected(index: Optional<number>): ArcAlphabetIndexerAttribute;

  /**
   * Sets whether to use the adaptive collapse mode. When there are too many index items, the component automatically
   * adjusts the display layout of the index items based on the available display space.
   *
   * @param { Optional<boolean> } enable - Whether to enable the adaptive collapse behavior for the indexer.
   *     <br>Default value: **true**.
   *     <br>**true**: Enable the adaptive collapse behavior.
   *     <br>**false**: Disable the adaptive collapse behavior.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  autoCollapse(enable: Optional<boolean>): ArcAlphabetIndexerAttribute;

  /**
   * Triggered when an index item is selected. The return value is the index of the selected item.
   *
   * @param { Optional<OnSelectCallback> } handler - Callback invoked when an item is selected on the index bar. It is
   *     triggered when the user taps or swipes on the index bar to select an item, and returns the index value of the
   *     currently selected item.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onSelect(handler: Optional<OnSelectCallback>): ArcAlphabetIndexerAttribute;

  /**
   * Sets the background blur style of the pop-up window. If this API is not used, the blur is disabled by default. The
   * corresponding value is **NONE** in **BlurStyle**.
   *
   * > **NOTE**
   * >
   * > After configuring the pop-up window background blur style with **popupBackgroundBlurStyle**, avoid applying
   * > background colors via [popupBackground]{@link ArcAlphabetIndexerAttribute#popupBackground}.
   *
   * @param { Optional<BlurStyle> } style - Background blur style of the pop-up window.<br/>Default value:
   *     **BlurStyle.NONE**.<br/>With this attribute set, it is not recommended to set the
   *     [popupBackground]{@link ArcAlphabetIndexerAttribute#popupBackground} attribute.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  popupBackgroundBlurStyle(style: Optional<BlurStyle>): ArcAlphabetIndexerAttribute;
}

/**
 * The **ArcAlphabetIndexer** is a component arranged in an arc that allows quick location by alphabetical order. It can
 * be bound with container components to quickly locate the container display area based on logical structure, making it
 * suitable for circular screen devices such as watches.
 *
 * > **NOTE**
 * >
 * > - This component can be used on phones, PCs, 2-in-1 devices, tablets, TVs, and wearables. In API version 22 and
 * > earlier versions, a compilation warning will be reported when this component is used on phones, PCs, 2-in-1
 * > devices, tablets, and TVs, but the component can still run properly.
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @uicomponent [since 19]
 * @since 18 dynamic
 * @noninterop
 */
declare const ArcAlphabetIndexer: ArcAlphabetIndexerInterface;

/**
 * Defines ArcAlphabetIndexer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
declare const ArcAlphabetIndexerInstance: ArcAlphabetIndexerAttribute;