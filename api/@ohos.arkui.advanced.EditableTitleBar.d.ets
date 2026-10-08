/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * Declaration of the menu item on the right side.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class EditableTitleBarMenuItem {
  /**
   * Icon resource.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * Icon label description. When this parameter is not set, no icon label is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  label?: ResourceStr;

  /**
   * Whether to enable.
   *
   * Default value: **true**, meaning enabled by default.
   *
   * When **isEnabled** is **true**, the item is enabled.
   *
   * When **isEnabled** is **false**, the item is disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isEnabled?: boolean;

  /**
   * Tap event for the custom button on the right side of the title bar. When this parameter is not set, tapping the
   * button has no response.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;

  /**
   * Accessibility text attribute for the custom button on the right side of the title bar. When a component does not
   * contain a text attribute, the screen reader does not announce anything when this component is selected, and the
   * user cannot clearly know which component is currently selected. To address this scenario, developers can set
   * accessibility text for components that do not contain text information. When the screen reader selects this
   * component, it announces the accessibility text, helping screen reader users clearly know which component they have
   * selected.
   *
   * Default value: **" "** when the label attribute is not set; the content of the label attribute when the label
   * attribute is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessible description. You can provide comprehensive text explanations to help users understand the operation they
   * are about to perform and its potential consequences, especially when these cannot be inferred from the component's
   * attributes and accessibility text alone. If a component contains both text information and the accessible
   * description, the text is announced first and then the accessible description, when the component is selected.
   *
   * Default value: **"Double-tap to activate"**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level. It determines whether the component can be recognized by accessibility services.
   *
   * The options are as follows:
   *
   * **"auto"**: This option is treated as "yes" by the system for this component.
   *
   * **"yes"**: The component can be recognized by accessibility services.
   *
   * **"no"**: The component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: Neither the component nor its child components can be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Whether to set as the default focus.
   *
   * **true**: The item gains focus.
   *
   * **false**: The item does not gain focus.
   *
   * Default value: **false**
   *
   * When using the **defaultFocus** attribute, set the **isEnabled** attribute to **true** beforehand; otherwise, the
   * **defaultFocus** setting does not take effect.
   *
   * **Note:** If multiple operable areas are set as the default focus at the same time, the first operable area in the
   * display order among those set as the default focus becomes the default focus.
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;

  /**
   * Symbol icon resource, which takes precedence over value. When this parameter is not set, the value parameter is
   * used to display the icon.
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
 * Declaration of the image item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type EditableTitleBarItem = EditableTitleBarMenuItem;

/**
 * Declaration of the left icon type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare enum EditableLeftIconType {
  /**
   * Back.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  Back = 0,

  /**
   * Cancel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  Cancel = 1
}

/**
 * Indicates the options of the editable title bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare interface EditableTitleBarOptions {
  /**
   * Background color of the title bar.
   *
   * Default value: **'#00000000'**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Background blur style of the title bar.
   *
   * Default value: **BlurStyle.NONE**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Types of the expanded safe area.
   *
   * Default value: **[SafeAreaType.SYSTEM]**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  safeAreaTypes?: Array<SafeAreaType>;

  /**
   * Edges of the expanded safe area.
   *
   * Default value: **[SafeAreaEdge.TOP]**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  safeAreaEdges?: Array<SafeAreaEdge>;
}

/**
 * An editable title bar component that provides a standard title bar implementation for editing scenarios. It supports
 * custom left button types (back/cancel), profile picture display, right-side menu items, background blur styles, and
 * other features. It is suitable for scenarios requiring content editing and multi-selection operations, such as album
 * multi-select editing, text editors, and form editing pages. This component encapsulates common UI interaction
 * patterns for editing scenarios (left close, right confirm), so developers do not need to implement the title bar
 * layout and interaction logic themselves. It enables rapid construction of editing pages that comply with design
 * specifications, improving development efficiency and ensuring UI consistency. It also supports accessibility property
 * configuration to meet accessibility requirements.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **EditableTitleBar** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **EditableTitleBar** component itself. As a result, the configured universal attributes and
 * > universal events may fail to take effect or behave as intended. For this reason, avoid using universal attributes
 * > and events with the **EditableTitleBar** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@Component
export declare struct EditableTitleBar {
  /**
   * Type of the icon on the left.
   *
   * Default value: **EditableLeftIconType.Back**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  leftIconStyle: EditableLeftIconType;

  /**
   * A single menu item for the profile picture on the left. This parameter is required to display a profile picture on
   * the left side of the title bar. If this parameter is not passed, the default value is used and no profile picture
   * is displayed.
   *
   * Default value: **undefined**
   *
   * Note: Accessibility properties are not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  imageItem?: EditableTitleBarItem;

  /**
   * Title.
   *
   * Default value: **''**, indicating that the title is empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  title: ResourceStr;

  /**
   * Subtitle. Pass this parameter when supplementary information needs to be displayed below the title. If not passed,
   * no subtitle is displayed.
   *
   * Default value: **''**, indicating that the subtitle content is empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  subtitle?: ResourceStr;

  /**
   * Whether to show the save button on the right. The value **true** indicates that the save button on the right is
   * required, and **false** indicates the opposite.
   *
   * Default value: **true**
   *
   * **Note:** This parameter is not decorated with **@Require**, so it is not mandatory during construction. When
   * **isSaveIconRequired** is set to **false**, the save button is not displayed and the **onSave** callback is not
   * triggered.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isSaveIconRequired: boolean;

  /**
   * List of menu items on the right. This parameter is required to display custom buttons on the right of the title
   * bar. If this parameter is not passed, the default value is used, and no menu item list is displayed on the right.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  menuItems?: Array<EditableTitleBarMenuItem>;

  /**
   * Save button click event. This parameter is required to customize the save operation logic. If this parameter is not
   * specified, clicking the button does not respond.
   *
   * Default value: **() => void**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onSave?: () => void;

  /**
   * Cancel action event, which is triggered when the left button is of the Cancel type. This parameter is required to
   * customize the return or cancel operation logic. If this parameter is not specified, clicking the button on the left
   * does not respond.
   *
   * Default value: **() => void**
   *
   * Back action event, which is triggered when the button on the left side is of the Back type, since API version 12.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onCancel?: () => void;

  /**
   * Title style.
   *
   * Default value:
   *
   * {
   *
   * safeAreaTypes: [SafeAreaType.SYSTEM],
   *
   * safeAreaEdges: [SafeAreaEdge.TOP],
   *
   * backgroundColor: '#00000000'
   *
   * }
   *
   * **NOTE**
   *
   * If not decorated by @Require, this parameter is not subject to mandatory validation during construction.
   *
   * @default {expandSafeAreaTypes: SafeAreaType.SYSTEM, expandSafeAreaEdges: SafeAreaEdge.TOP}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  options: EditableTitleBarOptions;

  /**
   * Content margin. Negative numbers are not supported.
   *
   * Default value:
   *
   * {start: LengthMetrics.resource(*$r('sys.float.margin_left')*), end: LengthMetrics.resource(*$r('
   * sys.float.margin_right')*)}
   *
   * @default {start: LengthMetrics.resource($r('sys.float.margin_left')),
   *     <br> end: LengthMetrics.resource($r('sys.float.margin_right'))}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  contentMargin?: LocalizedMargin;

  /**
   * Whether the left icon is the default focus. The value **true** indicates that it is the default focus, and
   * **false** indicates the opposite.
   *
   * Default value: **false**
   *
   * **Note:** If multiple operable areas are set as the default focus simultaneously, the first one in display order
   * among them is the default focus.
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  leftIconDefaultFocus?: boolean;

  /**
   * Whether the save icon is the default focus. The value **true** indicates that it is the default focus, and
   * **false** indicates the opposite.
   *
   * Default value: **false**
   *
   * **Note:** This attribute takes effect only when the save button on the right is required (**isSaveIconRequired** is
   * **true**). If multiple operable areas are set as the default focus simultaneously, the first one in display order
   * among them is the default focus.
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  saveIconDefaultFocus?: boolean;
}