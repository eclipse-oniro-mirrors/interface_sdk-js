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
 * @noninterop
 */
export declare class TabTitleBarMenuItem {
  /**
   * Icon resource. If **symbolStyle** is set, this attribute does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * Icon label, which provides a text description for the menu item icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  label?: ResourceStr;

  /**
   * Whether to enable. The value **true** means enabled, and **false** means disabled. When disabled, the menu item
   * does not respond to tap events, and the action is not triggered.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isEnabled?: boolean;

  /**
   * Action closure triggered when the menu item is tapped. If not set, tapping the menu item has no response.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;

  /**
   * Accessibility text attribute of the custom button on the right side of the title bar. It provides spoken text for
   * components that do not contain text information.
   *
   * Default value: If the **label** attribute is set, the default value is the content of the label attribute;
   * otherwise, the default value is a space character.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessibility level of the custom button on the right side of the title bar. It controls whether the current item
   * can be recognized by accessibility services.
   *
   * Supported values:
   *
   * **"auto"**: Automatically determined based on whether the component is interactive. If the component is
   * interactive, it is equivalent to **"yes"**; otherwise, it is equivalent to **"no"**.
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
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Symbol icon resource, which takes precedence over **value**. Pass this parameter when a symbol icon is needed. If
   * not passed, the icon set by value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Accessibility description of the custom button on the right side of the title bar. This description is used to
   * explain the current component to users in detail. You should provide a relatively detailed text description for
   * this attribute to help users understand the action to be performed and its possible consequences, especially when
   * such consequences cannot be directly inferred from the component's attributes and accessibility text. If a
   * component that is selected has both a text attribute and an accessibility description attribute, the system first
   * announces the text attribute and then the content of the accessibility description attribute.
   *
   * Default value: **"Double-tap with one finger to execute."**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Declaration of the tab item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
export declare class TabTitleBarTabItem {
  /**
   * Text content displayed on the tab item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  title: ResourceStr;

  /**
   * Tab icon resource. If **symbolStyle** is set, this attribute does not take effect. If not set, the tab displays
   * only text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: ResourceStr;

  /**
   * Symbol icon resource, which takes priority over **icon**. Pass this parameter when a symbol icon is needed as the
   * tab. If not passed, the image tab set by the **icon** parameter is used.
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
 * **TabTitleBar** is a tab title bar component that supports linked switching between a tab list and associated
 * content, and allows configuration of right menu items. It is suitable for scenarios where page content needs to be
 * switched through tabs, such as top navigation bars. With flexible configuration of tabs and menu items, this
 * component can meet various interaction requirements. It supports tab switching only on level-1 pages.
 *
 * > **NOTE**
 * >
 * > - This component can only be used in the stage model.
 * >
 * > - When setting [universal attributes]{@link ./@internal/component/ets/common} or
 * > [universal events]{@link ./@internal/component/ets/common} of **TabTitleBar**, the compilation toolchain mounts
 * > them on the \_\_Common\_\_ node instead of directly applying them to the component itself, which may cause the
 * > settings to not take effect or not work as expected. Therefore, setting them is not recommended.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Component
export declare struct TabTitleBar {
  /**
   * List of tab items on the left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  tabItems: Array<TabTitleBarTabItem>;

  /**
   * List of menu items on the right. If this parameter is not passed, the right menu items are not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  menuItems?: Array<TabTitleBarMenuItem>;

  /**
   * Constructor for page content pertaining to the tab list.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @BuilderParam
  swiperContent: () => void;
}