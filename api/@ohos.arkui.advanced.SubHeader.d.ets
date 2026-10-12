/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import { TextModifier } from './@ohos.arkui.modifier';

/**
 * Defines the style of elements in the subheader operation area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare enum OperationType {
  /**
   * Text button with a right arrow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TEXT_ARROW = 0,

  /**
   * Text button without a right arrow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BUTTON = 1,

  /**
   * Icon-attached button (A maximum of three icons can be configured.)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ICON_GROUP = 2,

  /**
   * Loading animation. When **operationType** is set to **LOADING**, **operationItem** does not need to be configured.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LOADING = 3
}

/**
 * Declare type OperationOption.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class OperationOption {
  /**
   * Operation area element content. When **operationType** is **TEXT_ARROW** or **BUTTON**, **value** is the text
   * content; when **operationType** is **ICON_GROUP**, **value** is the icon resource.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * Tap event of the right button in the subtitle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;

  /**
   * Accessibility text attribute of the right button in the subtitle. When a component does not contain a text
   * attribute, the screen reader does not announce anything when this component is selected, and the user cannot
   * clearly know which component is currently selected. To address this issue, developers can set accessibility text
   * for components that do not contain text information. When the screen reader selects this component, it announces
   * the content of the accessibility text, helping screen reader users clearly know which component they have selected.
   *
   * Default value: When the type is **TEXT_ARROW** or **BUTTON**, the default value is the value attribute content of
   * the current item. For other types, the default value is **" "**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessibility description of the right button in the subtitle. This description is used to explain the current
   * component to the user in detail. Developers should provide a relatively detailed text description for this
   * attribute of the component to help users understand the action to be performed and its possible consequences,
   * especially when these consequences cannot be directly learned from the component's attributes and accessibility
   * text alone. If a component has both a text attribute and an accessibility description attribute, when the component
   * is selected, the system first announces the component's text attribute, and then announces the content of the
   * accessibility description attribute.
   *
   * Default value: When the type is **LOADING**, the default value is "Loading". For other types, the default value is
   * "Single-tap with one finger to execute".
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the right button in the subtitle. Used to control whether the current item can be recognized
   * by accessibility services.
   *
   * Supported values:
   *
   * **"auto"**: The current component is converted to "yes".
   *
   * **"yes"**: The current component can be recognized by accessibility services.
   *
   * **"no"**: The current component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: The current component and all its child components cannot be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Whether the right button in the subtitle is the default focus.
   *
   * **true**: The right button in the subtitle is the default focus.
   *
   * **false**: The right button in the subtitle is not the default focus.
   *
   * Default value: **false**
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;

  /**
   * Right button ID in the subtitle. Set this parameter when an ID needs to be set for the right button in the
   * subtitle. When omitted, this parameter is not set.
   * indicating that no right button ID is set in the subtitle.
   * Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  id?: string;
}

/**
 * Declare type SelectOption.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class SelectOptions {
  /**
   * Dropdown option content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  options: Array<SelectOption>;

  /**
   * Index of the initial option in the dropdown menu.
   *
   * Value range: greater than or equal to -1.
   *
   * The index of the first item is 0.
   *
   * When the selected attribute is not set, the default value is -1, and no menu item is selected.
   *
   * If the value is set to less than -1, it is treated as no selection.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selected?: number;

  /**
   * Text content of the dropdown button itself.
   *
   * Default value: empty string.
   *
   * **Note**: Text exceeding the column width will be truncated. Since API version 20, the Resource type is supported.
   *
   * @type { string }. [since 10 - 19]
   * @type { ?ResourceStr }. [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value?: ResourceStr;

  /**
   * Callback for when an item is selected in the dropdown menu.
   *
   * - index: index of the selected item.
   *
   * - value: value of the selected item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onSelect?: (index: number, value?: string) => void;

  /**
   * Whether the dropdown button is the default focus.
   *
   * **true**: The dropdown button is the default focus.
   *
   * **false**: The dropdown button is not the default focus.
   *
   * Default value: **false**
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;

  /**
   * Dropdown button ID. Set this parameter when an ID needs to be set for the dropdown button. When omitted, this
   * parameter is not set.
   * indicating that no dropdown button ID is set.
   * Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  id?: string;
}

/**
 * Declare type SymbolOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 */
export declare class SymbolOptions {
  /**
   * Size of the [symbol glyph]{@link ./@internal/component/ets/symbolglyph}.
   *
   * For the number type, the value must be greater than or equal to 0.
   *
   * For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are supported.
   *
   * Default value: system default value
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  fontSize?: number | string | Resource;

  /**
   * Color of the [symbol glyph]{@link ./@internal/component/ets/symbolglyph}.
   *
   * Default value: depending on the rendering strategy
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  fontColor?: Array<ResourceColor>;

  /**
   * Weight of the [symbol glyph]{@link ./@internal/component/ets/symbolglyph}.
   *
   * For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a heavier
   * font weight. The default value is **400**.
   *
   * For the string type, only strings of the number type are supported, for example, **"400"**, **"bold"**,
   * **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**, which correspond to the enumerated values in
   * **FontWeight**.
   *
   * Default value: **FontWeight.Normal**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  fontWeight?: number | FontWeight | string;

  /**
   * Effect strategy of the [symbol glyph]{@link ./@internal/component/ets/symbolglyph}.
   *
   * Default value: **SymbolEffectStrategy.NONE**.
   *
   * **NOTE**
   *
   * For the resources referenced in **$r('sys.symbol.ohos_*')**, only **ohos_wifi** supports the hierarchical effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  effectStrategy?: SymbolEffectStrategy;

  /**
   * Rendering strategy of the [symbol glyph]{@link ./@internal/component/ets/symbolglyph}.
   *
   * Default value: **SymbolRenderingStrategy.SINGLE**.
   *
   * **NOTE**
   *
   * For the resources referenced in **$r('sys.symbol.ohos_*')**, only **ohos_trash_circle**,
   * **ohos_folder_badge_plus**, and **ohos_lungs** support the **MULTIPLE_COLOR** modes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  renderingStrategy?: SymbolRenderingStrategy;
}

/**
 * The **SubHeader** component is used at the top of list items or content items to divide the list or content into
 * sections, with the subtitle name summarizing the content of each section. It supports various style configurations,
 * including icons, primary and secondary titles, dropdown selectors, and operation buttons, meeting content
 * partitioning and navigation needs in different scenarios and enhancing the visual hierarchy and user experience of
 * the UI. It is suitable for list grouping, categorized content display, form partitioning, and other scenarios.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **SubHeader** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **SubHeader** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **SubHeader** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@Component
export declare struct SubHeader {

  /**
   * Icon resource.
   *
   * Default value: **undefined**, indicating that no icon is displayed.
   *
   * The icon attribute takes effect only when the **secondaryTitle** attribute is used. When the **primaryTitle**,
   * **secondaryTitle**, and **icon** attributes are used together, the **primaryTitle** attribute does not take effect.
   *
   * @type { ResourceStr }. [since 10 - 17]
   * @type { ?ResourceStr }. [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  icon?: ResourceStr;

  /**
   * Settings when icon is [SymbolGlyph]{@link ./@internal/component/ets/symbolglyph}.
   *
   * Default value: **undefined**, indicating that no icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  iconSymbolOptions?: SymbolOptions;

  /**
   * End icon of the title.
   * The **endIcon** attribute takes effect only when the **primaryTitle** or **secondaryTitle** attribute is used.
   * Default value: **undefined**, indicating that no end icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.1 dynamic
   */
  @Prop
  endIcon?: ResourceStr;

  /**
   * End icon symbol options. This parameter is available when **endIcon** is set to a
   * [symbol glyph]{@link ./@internal/component/ets/symbolglyph}.
   * Default value: **undefined**, indicating that no end icon symbol style is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.1 dynamic
   */
  endIconSymbolOptions?: SymbolOptions;

  /**
   * Primary title content.
   *
   * Default value: **undefined**, indicating that no title is displayed.
   *
   * When the **primaryTitle**, **secondaryTitle**, and **icon** attributes are used together, the **primaryTitle**
   * attribute does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  primaryTitle?: ResourceStr;

  /**
   * Secondary title content.
   *
   * Default value: **undefined**, indicating that no secondary title is displayed. When the **primaryTitle**,
   * **secondaryTitle**, and **icon** attributes are used together, the **primaryTitle** attribute does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  secondaryTitle?: ResourceStr;

  /**
   * Dropdown box content and events.
   *
   * Default value: **undefined**, indicating that no dropdown box is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  select?: SelectOptions;

  /**
   * Element style of the operation area (right side).
   *
   * Default value: **OperationType.BUTTON**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  operationType?: OperationType;

  /**
   * Settings for the operation area (right side). When **operationType** is **OperationType.ICON_GROUP**, a maximum of
   * three icon items can be configured.
   *
   * Default value: **undefined**, indicating that no operation area is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  operationItem?: Array<OperationOption>;

  /**
   * Settings when **operationType** is **OperationType.ICON_GROUP**, **operationItem** is set with multiple icons, and
   * the icons are [SymbolGlyph]{@link ./@internal/component/ets/symbolglyph}.
   *
   * Default value: **undefined**, indicating that no symbol icon is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  operationSymbolOptions?: Array<SymbolOptions>;

  /**
   * Title text attributes, such as title color, font size, font weight, etc.
   *
   * Default value: **undefined**, indicating that the system default style is used.
   *
   * **Note:** This parameter takes effect only when **primaryTitle** is effective.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  primaryTitleModifier?: TextModifier;

  /**
   * Secondary title text attributes, such as title color, font size, font weight, etc.
   *
   * Default value: **undefined**, indicating that the system default style is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  secondaryTitleModifier?: TextModifier;

  /**
   * Custom title area content. When **titleBuilder** is used, title parameters such as **primaryTitle**,
   * **secondaryTitle**, and icon do not take effect.
   *
   * Default value: **undefined**, indicating that no custom title is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  @BuilderParam
  titleBuilder?: () => void;

  /**
   * Margin of the subtitle. Negative values are not supported.
   *
   * Default value:
   *
   * `{start: LengthMetrics.resource(`
   *
   * `$r('sys.float.margin_left'))`,
   *
   * `end: LengthMetrics.resource(`
   *
   * `$r('sys.float.margin_right'))}`
   *
   * @default {start: LengthMetrics.resource($r('sys.float.margin_left')),
   *     <br> end: LengthMetrics.resource($r('sys.float.margin_right'))}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  contentMargin?: LocalizedMargin;

  /**
   * Padding of the subtitle. Negative values are not supported.
   *
   * Default value:
   *
   * When the left side contains a secondary title or a secondary title with an icon:
   *
   * `{start: LengthMetrics.vp(12), end: LengthMetrics.vp(12)}`.
   *
   * @default set different default values according to the width of the subHeader:
   *     <br> When the left area is secondaryTitle or the group of secondaryTitle and icon,
   *     <br> the default value is {start: LengthMetrics.vp(12), end: LengthMetrics.vp(12)};
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  contentPadding?: LocalizedPadding;

  /**
   * Custom accessibility reading content for the title.
   *
   * Default value: **undefined**, indicating that no custom reading content is set, and the title content displayed on
   * the component is read by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  @Prop
  titleAccessibilityText?: ResourceStr;

  /**
   * Title identifier. Use this parameter when an ID needs to be set for the title.
   * indicating that no title identifier is set.
   * Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Prop
  titleId?: string;
}