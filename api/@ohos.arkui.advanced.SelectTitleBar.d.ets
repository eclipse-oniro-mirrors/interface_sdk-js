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
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class SelectTitleBarMenuItem {
  /**
   * Icon resource used to set the icon of the menu item on the right side of the title bar. It can be referenced
   * through $r. When **symbolStyle** is also set, **symbolStyle** takes precedence.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * Symbol icon resource, which has higher priority than **value**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Icon label description, which can serve as the default value of **accessibilityText**. When both **label** and
   * **accessibilityText** are set, **accessibilityText** takes precedence. When not set, there is no label by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 13 dynamic
   */
  label?: ResourceStr;

  /**
   * Whether to enable.
   *
   * Default value: **false**. The value **true** enables the menu item, and **false** disables it (grayed out and not
   * tappable).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isEnabled?: boolean;

  /**
   * Callback invoked when the custom button on the right is tapped. Developers can define custom operations to be
   * executed after the button is tapped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;

  /**
   * Accessibility text attribute of the custom button on the right side of the title bar. When a component does not
   * contain a text attribute, the screen reader does not announce anything when this component is selected, and the
   * user cannot clearly know which component is currently selected. To address this scenario, developers can set
   * accessibility text for components that do not contain text information. When the screen reader selects this
   * component, it announces the content of the accessibility text, helping screen reader users clearly know which
   * component they have selected.
   *
   * Default value: when **label** is set, the default value is the content of the **label** attribute of the current
   * item; when **label** is not set, the default value is a space character.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessible description. You can provide comprehensive text explanations to help users understand the operation
   * they are about to perform and its potential consequences, especially when these cannot be inferred from the
   * component's attributes and accessibility text alone. If a component contains both text information and the
   * accessible description, the text is announced first and then the accessible description, when the component is
   * selected.
   *
   * Default value: **"Double-tap to activate"**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the custom button on the right side of the title bar. It controls whether the current item
   * can be recognized by accessibility services.
   *
   * Supported values:
   *
   * **"auto"**: The component is automatically converted to **"yes"** or **"no"** based on the specific situation.
   *
   * **"yes"**: The component can be recognized by accessibility services.
   *
   * **"no"**: The component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: The component and all its child components cannot be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * The dropdown menu title bar is a title bar component that includes a dropdown menu, supports quick switching between
 * pages, and can be configured with a back button and right-side menu items. This component is suitable for scenarios
 * where navigation and switching between different views or pages are required, and it supports first-level pages as
 * well as second-level and higher-level interfaces. Using this component facilitates quick access to and switching
 * between different content views, improving the convenience of page navigation and user experience.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **SelectTitleBar** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **SelectTitleBar** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **SelectTitleBar** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@Component
export declare struct SelectTitleBar {
  /**
   * Index of the currently selected item.
   *
   * The index of the first item is 0, and the default value is **0**.
   *
   * @type { number }. [since 10 - 19]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  selected: number;

  /**
   * Items in the dropdown menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  options: Array<SelectOption>;

  /**
   * List of menu items on the right side, which defines the menu items on the right side of the title bar. This
   * parameter is passed when menu items need to be added on the right side. If not specified, the right-side menu area
   * is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  menuItems?: Array<SelectTitleBarMenuItem>;

  /**
   * Subtitle, used to display supplementary information. This parameter is passed to show the subtitle. If this
   * parameter is not specified, the subtitle area is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  subtitle?: ResourceStr;

  /**
   * New event badge, which displays a count on the menu icon on the right side of the title bar.
   *
   * Value range: [-2147483648, 2147483647]. If the value exceeds the range, 4294967296 is added to or subtracted from
   * it to bring it within the range. If the value is not an integer, the decimal part is truncated, for example, 5.5
   * becomes 5.
   *
   * **NOTE**
   *
   * If this parameter is not passed or is less than or equal to 0, the event badge is not displayed.
   *
   * The maximum number of messages is 99. If the number exceeds the maximum, only 99+ is displayed. An excessively
   * large value is considered abnormal, and the event badge is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  badgeValue?: number;

  /**
   * Whether to hide the back arrow on the left.
   *
   * Default value: **false**. **true** to hide, **false** to show.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  hidesBackButton?: boolean;

  /**
   * Callback triggered when a dropdown menu item is selected. It passes the index of the selected item. This parameter
   * is passed when specific business logic needs to be processed after a dropdown menu item is selected. If there is no
   * specific business logic, this parameter can be omitted.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onSelected?: ((index: number) => void);

  /**
   * Callback function when an option is selected
   * @type { ?(index: number) => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Callback function when an option is selected
   * @type { ?(index: number) => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Callback function when an option is selected
   * @type { ?(index: number) => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 22 static
   */
  onSelected?: ((index: number) => void);
}