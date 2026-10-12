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
export declare class ComposeTitleBarMenuItem {
  /**
   * Icon resource. If the **symbolStyle** attribute is also set, **symbolStyle** takes precedence.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * Symbol icon resource, which takes precedence over **value**. This attribute is not supported for the avatar on the
   * left of the item. If not set, the icon resource specified by the **value** attribute is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Icon label description, used to set auxiliary text information for the icon. When **accessibilityText** is not set,
   * **label** can serve as the default value for the accessibility text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 13 dynamic
   */
  label?: ResourceStr;

  /**
   * Whether to enable. Default value: **false**.
   *
   * The value **true** indicates enabled, and **false** indicates disabled.
   *
   * The **item** parameter does not support triggering the **isEnabled** attribute.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isEnabled?: boolean;

  /**
   * Callback invoked when a menu item is tapped. The **item** parameter does not support triggering the action event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;

  /**
   * Accessibility text of the custom button on the right of the title bar. When a component has no text attribute, the
   * screen reader does not announce it. After this attribute is set, the screen reader can announce the content,
   * helping users understand the selected component. The **item** attribute does not support setting this attribute.
   *
   * Default value: when **label** is set, the default value is the content of the **label** attribute of the current
   * item; when **label** is not set, the default value is an empty string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessibility description of the custom button on the right of the title bar, used to explain the component
   * function and operation consequences to users in detail. When the component is selected, the system announces the
   * text attribute first, and then the accessibility description. The item attribute does not support setting this
   * attribute.
   *
   * Default value: "Double-tap with one finger to execute".
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the custom button on the right of the title bar, which controls whether the current item can
   * be recognized by accessibility services. This applies only to **items** in **menuItems**, not to the item
   * parameter.
   *
   * Supported values:
   *
   * **"auto"**: equivalent to **"yes"**.
   *
   * **"yes"**: can be recognized by accessibility services.
   *
   * **"no"**: cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: neither the current item nor its child components can be recognized.
   *
   * Default value: **"auto"**. The item parameter does not support setting this attribute.
   *
   * @default "auto".The options are as follows:<br/>
   *     "auto":The value is converted to "yes" or "no" based on the component.
   *     "yes": the current component is selectable for the accessibility service.
   *     "no": The current component is not selectable for the accessibility service.
   *     "no-hide-descendants":The current component and all its child components are not selectable<br/>
   *     for the accessibility service.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * **ComposeTitleBar** is a standard title bar component that supports setting a title, avatar (optional), and subtitle
 * (optional). It can be used on first-level pages, as well as second-level and higher pages to display a back button.
 * It helps quickly build a unified-style title bar, simplifies page development, supports flexible menu item
 * configuration and icon customization, and helps developers quickly implement navigation and operation entry points.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **ComposeTitleBar** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **ComposeTitleBar** component itself. As a result, the configured universal attributes and
 * > universal events may fail to take effect or behave as intended. For this reason, avoid using universal attributes
 * > and events with the **ComposeTitleBar** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@Component
export declare struct ComposeTitleBar {
  /**
   * Single menu item for the left avatar. When not set, no avatar is displayed on the left side of the title bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  item?: ComposeTitleBarMenuItem;

  /**
   * Title text of the title bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  title: ResourceStr;

  /**
   * Subtitle. When not set, no subtitle is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  subtitle?: ResourceStr;

  /**
   * List of menu items on the right side. When not set, no menu items are displayed on the right side of the title bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  menuItems?: Array<ComposeTitleBarMenuItem>;
}