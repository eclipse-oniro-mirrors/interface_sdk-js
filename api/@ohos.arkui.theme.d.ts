/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * Defines the **Theme** object in use, which can be obtained through
 * [onWillApplyTheme](@link onWillApplyTheme).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare interface Theme {
  /**
   * Color resources of the theme.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  colors: Colors;
}

/**
 * Defines the color resources of a theme.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare interface Colors {

  /**
   * Brand color. When the non-[Resource]{@link Resource} type in [ResourceColor]{@link ResourceColor} is used to set
   * the color, the default values of **backgroundEmphasize**, **compBackgroundEmphasize**,
   * **compEmphasizeSecondary**, **compEmphasizeTertiary**, **interactiveFocus**, and **interactiveSelect** change
   * according to the mapping. For details, see the description of the corresponding color attributes.
   *
   * **Affected components**: [TextInput]{@link ./@internal/component/ets/text_input} and
   * [Search]{@link ./@internal/component/ets/search}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  brand: ResourceColor;

  /**
   * Primary color. The default value is **undefined**, indicating that the primary color does not take effect. Since
   * API version 26.0.0, when the non-[Resource]{@link Resource} type in [ResourceColor]{@link ResourceColor} is used
   * to set the color, the default values of **fontPrimary**, **fontSecondary**, **fontTertiary**, **fontFourth**,
   * **iconPrimary**, **iconSecondary**, **iconTertiary**, and **iconFourth** change with the mapping. For details,
   * see the description of the corresponding color attributes.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  primary?: ResourceColor;

  /**
   * Inverted primary color. The default value is **undefined**, indicating that the emphasis color does not take
   * effect. Since API version 26.0.0, when the non-[Resource]{@link Resource} type in
   * [ResourceColor]{@link ResourceColor} is used to set the color, the default values of **fontOnPrimary**,
   * **fontOnSecondary**, **fontOnTertiary**, **fontOnFourth**, **iconOnPrimary**, **iconOnSecondary**,
   * **iconOnTertiary**, and **iconOnFourth** change with the mapping. For details, see the description of the
   * corresponding color attributes.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onPrimary?: ResourceColor;

  /**
   * Container color. The default value is **undefined**, indicating that the container color does not take effect.
   * Since API version 26.0.0, when the non-[Resource]{@link Resource} type in [ResourceColor]{@link ResourceColor} is
   * used to set the color, the default values of **compBackgroundSecondary**, **compBackgroundTertiary**,
   * **compDivider**, **interactiveHover**, **interactivePressed**, and **interactiveClick** change with the mapping.
   * For details, see the description of the corresponding color attributes.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  container?: ResourceColor;

  /**
   * Warning color.
   *
   * Affected components: [TipsDialog]{@link @ohos.arkui.advanced.Dialog:TipsDialog},
   * [AlertDialog]{@link @ohos.arkui.advanced.Dialog:AlertDialog},
   * [CustomContentDialog]{@link @ohos.arkui.advanced.Dialog:CustomContentDialog},
   * [Badge]{@link ./@internal/component/ets/badge}, and [Button]{@link ./@internal/component/ets/button}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  warning: ResourceColor;

  /**
   * Alert color.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  alert: ResourceColor;

  /**
   * Confirmation color.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  confirm: ResourceColor;

  /**
   * Primary font color.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **primary** is set, the default value of **fontPrimary** in light color
   * mode and dark color mode is the color value of **primary** with 90% transparency.
   *
   * **Affected components**: [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar},
   * [LoadingDialog]{@link @ohos.arkui.advanced.Dialog:LoadingDialog},
   * [TipsDialog]{@link @ohos.arkui.advanced.Dialog:TipsDialog},
   * [ConfirmDialog]{@link @ohos.arkui.advanced.Dialog:ConfirmDialog},
   * [AlertDialog]{@link @ohos.arkui.advanced.Dialog:AlertDialog},
   * [SelectDialog]{@link @ohos.arkui.advanced.Dialog:SelectDialog},
   * [CustomContentDialog]{@link @ohos.arkui.advanced.Dialog:CustomContentDialog},
   * [Swiper]{@link ./@internal/component/ets/swiper}, [Text]{@link ./@internal/component/ets/text},
   * [SubHeader]{@link @ohos.arkui.advanced.SubHeader}, [ProgressButton]{@link @ohos.arkui.advanced.ProgressButton},
   * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer}, [Popup]{@link @ohos.arkui.advanced.Popup},
   * [Select]{@link ./@internal/component/ets/select}, [Chip]{@link @ohos.arkui.advanced.Chip},
   * [ToolBar]{@link @ohos.arkui.advanced.ToolBar}, [Menu]{@link ./@internal/component/ets/menu},
   * [TextInput]{@link ./@internal/component/ets/text_input}, [Search]{@link ./@internal/component/ets/search},
   * [TimePicker]{@link ./@internal/component/ets/time_picker},
   * [DatePicker]{@link ./@internal/component/ets/date_picker},
   * [TextPicker]{@link ./@internal/component/ets/text_picker},
   * [ComposeListItem]{@link @ohos.arkui.advanced.ComposeListItem}, and
   * [TreeView]{@link @ohos.arkui.advanced.TreeView}. Since API version 26.0.0,
   * [CalendarPicker]{@link ./@internal/component/ets/calendar_picker},
   * [UIPickerComponent]{@link ./@internal/component/ets/ui_picker_component},
   * [RichEditor]{@link ./@internal/component/ets/rich_editor}, [MenuItem]{@link ./@internal/component/ets/menu_item},
   * [MenuItemGroup]{@link ./@internal/component/ets/menu_item_group}, and
   * [Counter]{@link ./@internal/component/ets/counter} are added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontPrimary: ResourceColor;

  /**
   * Secondary font color.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **primary** is set, the default value of **fontSecondary** in light color
   * mode and dark color mode is the color value of **primary** with 60% transparency.
   *
   * **Affected components**: [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar},
   * [AlertDialog]{@link @ohos.arkui.advanced.Dialog:AlertDialog},
   * [CustomContentDialog]{@link @ohos.arkui.advanced.Dialog:CustomContentDialog},
   * [SubHeader]{@link @ohos.arkui.advanced.SubHeader},
   * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer}, [Popup]{@link @ohos.arkui.advanced.Popup},
   * [TextInput]{@link ./@internal/component/ets/text_input}, [Search]{@link ./@internal/component/ets/search},
   * [ComposeListItem]{@link @ohos.arkui.advanced.ComposeListItem}, [TreeView]{@link @ohos.arkui.advanced.TreeView},
   * and [TextClock]{@link ./@internal/component/ets/text_clock}. Since API version 26.0.0,
   * [MenuItem]{@link ./@internal/component/ets/menu_item} and
   * [MenuItemGroup]{@link ./@internal/component/ets/menu_item_group} are added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontSecondary: ResourceColor;

  /**
   * Tertiary font color.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **primary** is set, the default value of **fontTertiary** in light color
   * mode and dark color mode is the color value of **primary** with 40% transparency.
   *
   * **Affected components**: [ComposeListItem]{@link @ohos.arkui.advanced.ComposeListItem}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontTertiary: ResourceColor;

  /**
   * Fourth-level font color.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **primary** is set, the default value of **fontFourth** in light color
   * mode and dark color mode is the color value of **primary** with 20% transparency.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFourth: ResourceColor;

  /**
   * Emphasis font color.
   *
   * **Affected components**: [TipsDialog]{@link @ohos.arkui.advanced.Dialog:TipsDialog},
   * [ConfirmDialog]{@link @ohos.arkui.advanced.Dialog:ConfirmDialog},
   * [AlertDialog]{@link @ohos.arkui.advanced.Dialog:AlertDialog},
   * [SelectDialog]{@link @ohos.arkui.advanced.Dialog:SelectDialog},
   * [CustomContentDialog]{@link @ohos.arkui.advanced.Dialog:CustomContentDialog},
   * [SubHeader]{@link @ohos.arkui.advanced.SubHeader},
   * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer}, [Popup]{@link @ohos.arkui.advanced.Popup},
   * [Button]{@link ./@internal/component/ets/button}, [Select]{@link ./@internal/component/ets/select},
   * [ToolBar]{@link @ohos.arkui.advanced.ToolBar}, [Search]{@link ./@internal/component/ets/search},
   * [TimePicker]{@link ./@internal/component/ets/time_picker},
   * [DatePicker]{@link ./@internal/component/ets/date_picker}, and
   * [TextPicker]{@link ./@internal/component/ets/text_picker}. Since API version 26.0.0,
   * [RichEditor]{@link ./@internal/component/ets/rich_editor} is added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontEmphasize: ResourceColor;

  /**
   * Primary inverted font color used on color background.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **onPrimary** is set, the default value of **fontOnPrimary** in light
   * color mode and dark color mode is the color value of **onPrimary** with 100% transparency.
   *
   * **Affected components**: [Badge]{@link ./@internal/component/ets/badge},
   * [Button]{@link ./@internal/component/ets/button}, and [Chip]{@link @ohos.arkui.advanced.Chip}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontOnPrimary: ResourceColor;

  /**
   * Secondary inverted font color used on color background.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **onPrimary** is set, the default value of **fontOnSecondary** in light
   * color mode and dark color mode is the color value of **onPrimary** with 60% transparency.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontOnSecondary: ResourceColor;

  /**
   * Tertiary inverted font color used on color background.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **onPrimary** is set, the default value of **fontOnTertiary** in light
   * color mode and dark color mode is the color value of **onPrimary** with 40% transparency.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontOnTertiary: ResourceColor;

  /**
   * Fourth-level inverted font color used on color background.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **onPrimary** is set, the default value of **fontOnFourth** in light color
   * mode and dark color mode is the color value of **onPrimary** with 20% transparency.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontOnFourth: ResourceColor;

  /**
   * Primary icon color.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **primary** is set, the default value of **iconPrimary** in light color
   * mode and dark color mode is the color value of **primary** with 90% transparency.
   *
   * **Affected components**: [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar},
   * [Swiper]{@link ./@internal/component/ets/swiper}, [ToolBar]{@link @ohos.arkui.advanced.ToolBar}, and
   * [TreeView]{@link @ohos.arkui.advanced.TreeView}. Since API version 26.0.0,
   * [MenuItem]{@link ./@internal/component/ets/menu_item} is added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconPrimary: ResourceColor;

  /**
   * Secondary icon color.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **primary** is set, the default value of **iconSecondary** in light color
   * mode and dark color mode is the color value of **primary** with 60% transparency.
   *
   * **Affected components**: [LoadingDialog]{@link @ohos.arkui.advanced.Dialog:LoadingDialog},
   * [SubHeader]{@link @ohos.arkui.advanced.SubHeader}, [Popup]{@link @ohos.arkui.advanced.Popup},
   * [Chip]{@link @ohos.arkui.advanced.Chip}, [Search]{@link ./@internal/component/ets/search}, and
   * [TreeView]{@link @ohos.arkui.advanced.TreeView}. Since API version 26.0.0,
   * [LoadingProgress]{@link ./@internal/component/ets/loading_progress} is added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconSecondary: ResourceColor;

  /**
   * Tertiary icon color.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **primary** is set, the default value of **iconTertiary** in light color
   * mode and dark color mode is the color value of **primary** with 40% transparency.
   *
   * **Affected components**: [SubHeader]{@link @ohos.arkui.advanced.SubHeader}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconTertiary: ResourceColor;

  /**
   * Fourth-level icon color.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **primary** is set, the default value of **iconFourth** in light color
   * mode and dark color mode is the color value of **primary** with 20% transparency.
   *
   * **Affected components**: [Checkbox]{@link ./@internal/component/ets/checkbox},
   * [CheckboxGroup]{@link ./@internal/component/ets/checkboxgroup}, and
   * [Radio]{@link ./@internal/component/ets/radio}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconFourth: ResourceColor;

  /**
   * Emphasis icon color.
   *
   * **Affected components**: [ToolBar]{@link @ohos.arkui.advanced.ToolBar}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconEmphasize: ResourceColor;

  /**
   * Color of the emphasis auxiliary icon.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconSubEmphasize: ResourceColor;

  /**
   * Primary inverted icon color used on color background.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **onPrimary** is set, the default value of **iconOnPrimary** in light
   * color mode and dark color mode is the color value of **onPrimary** with 100% transparency.
   *
   * **Affected components**: [Checkbox]{@link ./@internal/component/ets/checkbox},
   * [CheckboxGroup]{@link ./@internal/component/ets/checkboxgroup}, and
   * [Radio]{@link ./@internal/component/ets/radio}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconOnPrimary: ResourceColor;

  /**
   * Secondary inverted icon color used on color background.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **onPrimary** is set, the default value of **iconOnSecondary** in light
   * color mode and dark color mode is the color value of **onPrimary** with 60% transparency.
   *
   * **Affected components**: [Chip]{@link @ohos.arkui.advanced.Chip}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconOnSecondary: ResourceColor;

  /**
   * Tertiary inverted icon color used on color background.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **onPrimary** is set, the default value of **iconOnTertiary** in light
   * color mode and dark color mode is the color value of **onPrimary** with 40% transparency.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconOnTertiary: ResourceColor;

  /**
   * Fourth-level inverted icon color used on color background.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **onPrimary** is set, the default value of **iconOnFourth** in light color
   * mode and dark color mode is the color value of **onPrimary** with 20% transparency.
   *
   * **Affected components**: [ProgressButton]{@link @ohos.arkui.advanced.ProgressButton}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconOnFourth: ResourceColor;

  /**
   * Primary background color (solid, opaque).
   *
   * **Affected components**: [TextInput]{@link ./@internal/component/ets/text_input} and
   * [QRCode]{@link ./@internal/component/ets/qrcode}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundPrimary: ResourceColor;

  /**
   * Secondary background color (solid, opaque).
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundSecondary: ResourceColor;

  /**
   * Tertiary background color (solid, opaque).
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundTertiary: ResourceColor;

  /**
   * Fourth-level background color (solid, opaque).
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundFourth: ResourceColor;

  /**
   * Emphasis background color (solid, opaque).
   *
   * Note: When this parameter is used as an attribute of [CustomColors]{@link CustomColors}, if **brand** is set, the
   * default value of **backgroundEmphasize** in both light mode and dark color mode is the color value of **brand**
   * with 100% transparency.
   *
   * **Affected components**: [Progress]{@link ./@internal/component/ets/progress},
   * [Button]{@link ./@internal/component/ets/button}, and [Slider]{@link ./@internal/component/ets/slider}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundEmphasize: ResourceColor;

  /**
   * Foreground.
   *
   * **Affected components**: [QRCode]{@link ./@internal/component/ets/qrcode}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compForegroundPrimary: ResourceColor;

  /**
   * White background.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundPrimary: ResourceColor;

  /**
   * White transparent background.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundPrimaryTran: ResourceColor;

  /**
   * Always-on background.
   *
   * **Affected components**: [Toggle]{@link ./@internal/component/ets/toggle} and
   * [Slider]{@link ./@internal/component/ets/slider}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundPrimaryContrary: ResourceColor;

  /**
   * Gray background.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundGray: ResourceColor;

  /**
   * Secondary background.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **container** is set, the default value of **compBackgroundSecondary** in
   * light color mode and dark color mode is the color value of **container** with 10% transparency.
   *
   * **Affected components**: [Swiper]{@link ./@internal/component/ets/swiper} and
   * [Slider]{@link ./@internal/component/ets/slider}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundSecondary: ResourceColor;

  /**
   * Tertiary background.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **container** is set, the default value of **compBackgroundTertiary** in
   * light color mode is the color value of **container** with 5% transparency, and the default value in dark color
   * mode is the color value of **container** with 10% transparency.
   *
   * **Affected components**: [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar},
   * [Progress]{@link ./@internal/component/ets/progress},
   * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer},
   * [Button]{@link ./@internal/component/ets/button}, [Select]{@link ./@internal/component/ets/select},
   * [Toggle]{@link ./@internal/component/ets/toggle}, [Chip]{@link @ohos.arkui.advanced.Chip},
   * [TextInput]{@link ./@internal/component/ets/text_input}, and [Search]{@link ./@internal/component/ets/search}.
   * Since API version 26.0.0, [UIPickerComponent]{@link ./@internal/component/ets/ui_picker_component} and
   * [TextPicker]{@link ./@internal/component/ets/text_picker} are added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundTertiary: ResourceColor;

  /**
   * Emphasis background.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **brand** is set, the default value of **compBackgroundEmphasize** in
   * light color mode and dark color mode is the color value of **brand** with 100% transparency.
   *
   * **Affected components**: [Swiper]{@link ./@internal/component/ets/swiper},
   * [Toggle]{@link ./@internal/component/ets/toggle}, [Chip]{@link @ohos.arkui.advanced.Chip},
   * [Checkbox]{@link ./@internal/component/ets/checkbox},
   * [CheckboxGroup]{@link ./@internal/component/ets/checkboxgroup}, and
   * [Radio]{@link ./@internal/component/ets/radio}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundEmphasize: ResourceColor;

  /**
   * Black, neutral, emphasis background.
   *
   * **Affected components**: [PatternLock]{@link ./@internal/component/ets/pattern_lock}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundNeutral: ResourceColor;

  /**
   * 20% emphasis background color.
   *
   * Note: When this parameter is used as an attribute of [CustomColors]{@link CustomColors}, if **brand** is set, the
   * default value of **compEmphasizeSecondary** in both light mode and dark color mode is the color value of
   * **brand** with 20% transparency.
   *
   * **Affected components**: [Progress]{@link ./@internal/component/ets/progress},
   * [ProgressButton]{@link @ohos.arkui.advanced.ProgressButton},
   * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer},
   * [Select]{@link ./@internal/component/ets/select}, and [Toggle]{@link ./@internal/component/ets/toggle}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compEmphasizeSecondary: ResourceColor;

  /**
   * 10% emphasis background color.
   *
   * Note: When this parameter is used as an attribute of [CustomColors]{@link CustomColors}, if **brand** is set, the
   * default value of **compEmphasizeTertiary** in both light mode and dark color mode is the color value of **brand**
   * with 10% transparency.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compEmphasizeTertiary: ResourceColor;

  /**
   * Common divider color.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **container** is set, the default value of **compDivider** in light color
   * mode and dark color mode is the color value of **container** with 20% transparency.
   *
   * **Affected components**: [SelectDialog]{@link @ohos.arkui.advanced.Dialog:SelectDialog},
   * [PatternLock]{@link ./@internal/component/ets/pattern_lock}, and
   * [Divider]{@link ./@internal/component/ets/divider}. Since API version 26.0.0,
   * [UIPickerComponent]{@link ./@internal/component/ets/ui_picker_component},
   * [TextPicker]{@link ./@internal/component/ets/text_picker}, [MenuItem]{@link ./@internal/component/ets/menu_item},
   * [MenuItemGroup]{@link ./@internal/component/ets/menu_item_group}, and
   * [Select]{@link ./@internal/component/ets/select} are added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compDivider: ResourceColor;

  /**
   * Common inverted color.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compCommonContrary: ResourceColor;

  /**
   * Background color in the focused state.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundFocus: ResourceColor;

  /**
   * Primary inverted color in the focused state.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compFocusedPrimary: ResourceColor;

  /**
   * Secondary inverted color in the focused state.
   *
   * **Affected components**: N/A
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compFocusedSecondary: ResourceColor;

  /**
   * Tertiary inverted color in the focused state.
   *
   * **Affected components**: [Scroll]{@link ./@internal/component/ets/scroll}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compFocusedTertiary: ResourceColor;

  /**
   * Common interactive color for the hover state.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **container** is set, the default value of **interactiveHover** in light
   * color mode is the color value of **container** with 5% transparency, and the default value in dark color mode is
   * the color value of **container** with 10% transparency.
   *
   * **Affected components**: [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar},
   * [Chip]{@link @ohos.arkui.advanced.Chip}, and [TreeView]{@link @ohos.arkui.advanced.TreeView}. Since API version 2
   * 6.0.0, [RichEditor]{@link ./@internal/component/ets/rich_editor},
   * [MenuItem]{@link ./@internal/component/ets/menu_item}, and [Select]{@link ./@internal/component/ets/select} are
   * added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interactiveHover: ResourceColor;

  /**
   * Common interactive color for the pressed state.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **container** is set, the default value of **interactivePressed** in light
   * color mode is the color value of **container** with 10% transparency, and the default value in dark color mode is
   * the color value of **container** with 15% transparency.
   *
   * **Affected components**: [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar},
   * [Chip]{@link @ohos.arkui.advanced.Chip}, and [TreeView]{@link @ohos.arkui.advanced.TreeView}. Since API version 2
   * 6.0.0, [RichEditor]{@link ./@internal/component/ets/rich_editor} is added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interactivePressed: ResourceColor;

  /**
   * Common interactive color for the focused state.
   *
   * Note: When this parameter is used as an attribute of [CustomColors]{@link CustomColors}, if **brand** is set, the
   * default value of **interactiveFocus** in both light mode and dark color mode is the color value of **brand** with
   * 100% transparency.
   *
   * **Affected components**: [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar},
   * [Chip]{@link @ohos.arkui.advanced.Chip}, and [TreeView]{@link @ohos.arkui.advanced.TreeView}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interactiveFocus: ResourceColor;

  /**
   * Common interactive color for the active state.
   *
   * **Affected components**: [TreeView]{@link @ohos.arkui.advanced.TreeView}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interactiveActive: ResourceColor;

  /**
   * Common interactive color for the selected state.
   *
   * Note: When this parameter is used as an attribute of [CustomColors]{@link CustomColors}, if **brand** is set, the
   * default value of **interactiveSelect** in both light mode and dark color mode is the color value of **brand**
   * with 20% transparency.
   *
   * **Affected components**: [TreeView]{@link @ohos.arkui.advanced.TreeView}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interactiveSelect: ResourceColor;

  /**
   * Common interactive color for the clicked state.
   *
   * Note: Since API version 26.0.0, when this parameter is used as an attribute of
   * [CustomColors]{@link CustomColors}, if **container** is set, the default value of **interactiveClick** in light
   * color mode is the color value of **container** with 10% transparency, and the default value in dark color mode is
   * the color value of **container** with 15% transparency.
   *
   * **Affected components**: [MenuItem]{@link ./@internal/component/ets/menu_item} and
   * [Select]{@link ./@internal/component/ets/select} are added since API version 26.0.0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interactiveClick: ResourceColor;
}

/**
 * Defines a custom theme object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare interface CustomTheme {
  /**
   * Custom light theme color resources.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  colors?: CustomColors;

  /**
   * Custom dark theme color resources.
   *
   * Note: If **darkColors** is not set, the **colors** configuration in light color mode is used and does not change
   * with the system's dark/light color mode. If the corresponding color is set using the resources in the **dark**
   * directory, the resources in the **dark** directory are preferentially used.
   *
   * @default If not set darkColors, color value will same as colors under light mode and will not change with color
   *     mode, unless the color is setted by resource in dark directory.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  darkColors?: CustomDarkColors;
}

/**
 * Defines the type for custom theme color resources.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare type CustomColors = Partial<Colors>;

/**
 * Defines the struct of CustomDarkColors.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type CustomDarkColors = Partial<Colors>;

/**
 * Implements a **ThemeControl** object to apply the custom theme to the components in the application.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ThemeControl {
  /**
   * Sets a custom theme as the default, application-level theme, applying it to all components within the
   * application. When using this API within a page, ensure that the API is called before the page's **build** API
   * executes. When using this API within a UIAbility, ensure that the API is called in the callback after
   * windowStage.
   * [loadContent]{@link @ohos.window:window.WindowStage.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
   * during the **onWindowStageCreate** lifecycle phase. For a complete implementation example, see
   * [Setting Custom Theme Colors for Application Components](docroot://ui/theme_skinning.md#setting-custom-theme-colors-for-application-components).
   *
   * @param { CustomTheme } theme - Defines a custom theme object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static setDefaultTheme(theme: CustomTheme): void;
}