/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * Defines the callback for the tap event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnActionCallback = () => void;

/**
 * Enumerates the left icon types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum EditableLeftIconTypeV2 {
  /**
   * Back icon type. Tapping it performs the route back operation by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  Back = 0,

  /**
   * Cancel icon type. Tapping it performs no default operation, and a custom callback is required.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  Cancel = 1
}

/**
 * Defines the left icon configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface EditableLeftIconV2Options {
  /**
   * Type of the left icon, which determines the style and default click behavior of the left icon. For the Back type,
   * the route back operation is performed by default when clicked. For the Cancel type, no default operation is
   * performed when clicked, and a custom callback is required.
   *
   * Default value: **EditableLeftIconTypeV2.Back**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  iconType?: EditableLeftIconTypeV2;

  /**
   * Whether to obtain focus by default.
   *
   * **true**: Obtains focus.
   *
   * **false**: Does not obtain focus.
   *
   * Default value: **false**.
   *
   * If multiple operable areas of the title bar are set as the default focus, the first operable area in display order
   * among those set as the default focus is the default focus.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  defaultFocus?: boolean;

  /**
   * Callback triggered when the left icon is tapped. If not set, the Back type performs route return by default, and
   * the Cancel type has no operation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onAction?: OnActionCallback;
}

/**
 * Defines the left icon configuration class, which is decorated with **@ObservedV2** and supports state observation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class EditableLeftIconV2 {
  /**
   * Type of the left icon, which determines the style and default tap behavior of the left icon. When the type is Back,
   * route return is performed by default on tap. When the type is Cancel, there is no default operation on tap, and a
   * custom callback must be configured through the **onAction** attribute.
   *
   * Default value: **EditableLeftIconTypeV2.Back**.
   *
   * **Decorator:** @Trace
   *
   * @default EditableLeftIconTypeV2.Back
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public iconType: EditableLeftIconTypeV2;

  /**
   * Whether to obtain focus by default.
   *
   * **true**: Obtains focus.
   *
   * **false**: Does not obtain focus.
   *
   * Default value: **false**. If multiple operable areas in the title bar are set as the default focus, the first one
   * in display order among the operable areas set as the default focus is the default focus.
   *
   * **Decorator:** @Trace
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public defaultFocus: boolean;

  /**
   * Callback triggered when the left icon is tapped. If not set, the Back type performs route return by default, and
   * the Cancel type has no operation.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public onAction?: OnActionCallback;

  /**
   * A constructor used to create an **EditableLeftIconV2** instance.
   *
   * @param { EditableLeftIconV2Options } [options] - Options for the left icon configuration.<br/>Default value:
   *     **undefined**. If this parameter is not passed, the default configuration is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: EditableLeftIconV2Options);
}

/**
 * Defines the title configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface EditableTitleV2Options {
  /**
   * Primary title content.
   *
   * Default value: **''**, which means the title content is empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  mainTitle?: ResourceStr;

  /**
   * Subtitle content. Pass this parameter when supplementary information needs to be displayed below the title.
   *
   * Default value: **undefined**, which means no subtitle is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  subTitle?: ResourceStr;
}

/**
 * Defines the title configuration class, which is decorated with **@ObservedV2** and supports state observation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class EditableTitleV2 {
  /**
   * Main title content.
   *
   * Default value: **''**, indicating that the title content is empty.
   *
   * **Decorator:** @Trace
   *
   * @default ''
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public mainTitle: ResourceStr;

  /**
   * Subtitle content. Pass this parameter when supplementary information needs to be displayed below the title.
   *
   * Default value: **undefined**, indicating that the subtitle is not displayed.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public subTitle?: ResourceStr;

  /**
   * A constructor used to create an **EditableTitleV2** instance.
   *
   * @param { EditableTitleV2Options } [options] - Title configuration options.<br/>Default value: undefined. If this
   *     parameter is not passed, the default value of each attribute is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: EditableTitleV2Options);
}

/**
 * Defines the menu item configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface EditableTitleBarMenuItemV2Options {
  /**
   * Icon resource, which supports Symbol or Image. When both value and **symbolStyle** are set, **symbolStyle** takes
   * effect and value does not.
   *
   * Default value: **''**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  value?: ResourceStr;

  /**
   * Modifier for the Symbol icon style. Pass this parameter when a Symbol icon is used and its style needs to be
   * customized. It takes precedence over value.
   *
   * Default value: **undefined**, which means no Symbol icon style modifier is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Whether to enable an item.
   *
   * Default value: **true**, meaning to enable.
   *
   * When **isEnabled** is **false**, the item is disabled.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isEnabled?: boolean;

  /**
   * Label text of the long-press dialog box.
   *
   * Default value: **undefined**, which means no label is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  label?: ResourceStr;

  /**
   * Callback invoked when the menu item is tapped.
   *
   * Default value: **undefined**, which means no response when tapped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: OnActionCallback;

  /**
   * Accessibility level, which controls whether the current item can be recognized by the accessibility service.
   *
   * Supported values:
   *
   * **"auto"**: The current component is converted to **"yes"** or **"no"** depending on the situation.
   *
   * **"yes"**: The current component can be recognized by the accessibility service.
   *
   * **"no"**: The current component cannot be recognized by the accessibility service.
   *
   * **"no-hide-descendants"**: The current component and all its child components cannot be recognized by the
   * accessibility service.
   *
   * If a value outside the preceding range is passed in, it is processed as **"auto"**.
   *
   * Default value: **"auto"**
   *
   * @default 'auto'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Accessibility text for the screen reader. When the component does not contain a text attribute, setting this
   * attribute enables the screen reader to announce the accessibility text when the component is selected.
   *
   * Default value: If **label** is set, the default value is the content of the label attribute of the current item;
   * otherwise, the default value is **" "**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessibility description, which explains in detail the operation of the current component and its possible
   * consequences to the user. If the component has both a text attribute and an accessibility description attribute,
   * the system announces the text attribute first and then the accessibility description attribute when the component
   * is selected.
   *
   * Default value: **"Single-tap with one finger to execute."**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Whether to obtain focus by default.
   *
   * **true**: The component obtains focus.
   *
   * **false**: The component does not obtain focus.
   *
   * Default value: **false**.
   *
   * When using the **defaultFocus** attribute, set the **isEnabled** attribute to **true** in advance; otherwise, the
   * **defaultFocus** value is recognized as **false**. If multiple operable areas in the title bar are set as the
   * default focus, the first one in display order among the operable areas set as the default focus is the default
   * focus.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  defaultFocus?: boolean;
}

/**
 * Defines the menu item configuration class, which is decorated with **@ObservedV2** and supports state observation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class EditableTitleBarMenuItemV2 {
  /**
   * Icon resource, which supports a Symbol type icon or an Image type icon. When both **value** and **symbolStyle** are
   * set, **symbolStyle** takes effect and **value** does not.
   *
   * Default value: **''**.
   *
   * **Decorator:** @Trace
   *
   * @default ''
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public value: ResourceStr;

  /**
   * Symbol icon style modifier. When both **value** and **symbolStyle** are set, **symbolStyle** takes effect and
   * **value** does not.
   *
   * Default value: **undefined**, meaning that no Symbol icon style modifier is set.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * Whether to enable an item.
   *
   * Default value: **true**, meaning to enable.
   *
   * When **isEnabled** is **false**, the item is disabled.
   *
   * **Decorator:** @Trace
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public isEnabled: boolean;

  /**
   * Label text of the long-press dialog box.
   *
   * Default value: **undefined**, meaning that no label is displayed.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public label?: ResourceStr;

  /**
   * Callback invoked when the menu item is tapped. If it is not set, no response is triggered on tap.
   *
   * Default value: **undefined**.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public action?: OnActionCallback;

  /**
   * Accessibility level, which controls whether the current item can be recognized by the accessibility service.
   *
   * Supported values:
   *
   * **"auto"**: The attribute value of the current component is converted to **"yes"** or **"no"** as appropriate.
   *
   * **"yes"**: The current component can be recognized by the accessibility service.
   *
   * **"no"**: The current component cannot be recognized by the accessibility service.
   *
   * **"no-hide-descendants"**: The current component and all its child components cannot be recognized by the
   * accessibility service.
   *
   * If a value outside the preceding range is passed in, it is processed as **"auto"**.
   *
   * Default value: **"auto"**.
   *
   * **Decorator:** @Trace
   *
   * @default 'auto'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel: string;

  /**
   * Accessibility text for the screen reader. When the component does not contain a text attribute, setting this
   * attribute enables the screen reader to announce the accessibility text when the component is selected.
   *
   * Default value: the content of the **label** attribute of the current item if **label** is set; otherwise, **" "**.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * Accessibility description, which explains in detail the operation of the current component and its possible
   * consequences to users. If the component has both a text attribute and an accessibility description attribute, the
   * system announces the text attribute first and then the accessibility description attribute when the component is
   * selected.
   *
   * Default value: **"Single-finger double-tap to execute"**.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * Whether to set the item as the default focus.
   *
   * **true**: The item obtains focus.
   *
   * **false**: The item does not obtain focus.
   *
   * Default value: **false**.
   *
   * If multiple operable areas in the title bar are set as the default focus, the first operable area in display order
   * among those set as the default focus is used as the default focus.
   *
   * When using the **defaultFocus** attribute, set the **isEnabled** attribute to **true** in advance; otherwise, the
   * **defaultFocus** value is recognized as **false**.
   *
   * **Decorator:** @Trace
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public defaultFocus: boolean;

  /**
   * A constructor used to create an **EditableTitleBarMenuItemV2** instance.
   *
   * @param { EditableTitleBarMenuItemV2Options } [options] - Menu item configuration options.<br/>Default value:
   *     **undefined**, which means that when this parameter is not passed, each attribute uses its default value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: EditableTitleBarMenuItemV2Options);
}

/**
 * Defines the type alias of the left avatar item. The left avatar does not support configuring accessibility
 * attributes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type EditableTitleBarItemV2 = EditableTitleBarMenuItemV2;

/**
 * Defines the type alias of the left avatar item configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type EditableTitleBarItemV2Options = EditableTitleBarMenuItemV2Options;

/**
 * Defines the save button configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface EditableSaveButtonV2Options {
  /**
   * Whether to display the save button.
   *
   * **true**: yes.
   *
   * **false**: no.
   *
   * Default value: **true**.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isRequired?: boolean;

  /**
   * Whether to obtain focus by default.
   *
   * **true**: yes.
   *
   * **false**: no.
   *
   * Default value: **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  defaultFocus?: boolean;

  /**
   * Callback triggered when the save button is tapped. If not set, no response occurs when the button is tapped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onAction?: OnActionCallback;
}

/**
 * Defines the save button configuration class, which is decorated by **@ObservedV2** and supports state observation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class EditableSaveButtonV2 {
  /**
   * Whether to display the save button.
   *
   * **true**: yes.
   *
   * **false**: no.
   *
   * Default value: **true**.
   *
   * **Decorator:** @Trace
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public isRequired: boolean;

  /**
   * Whether to obtain focus by default.
   *
   * **true**: yes.
   *
   * **false**: no.
   *
   * Default value: **false**.
   *
   * If multiple operable areas in the title bar are set as the default focus, the first operable area in display order
   * among those set as the default focus is the default focus.
   *
   * **Decorator:** @Trace
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public defaultFocus: boolean;

  /**
   * Callback triggered when the save button is tapped. If not set, tapping the button does not respond.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public onAction?: OnActionCallback;

  /**
   * A constructor used to create an **EditableSaveButtonV2** instance.
   *
   * @param { EditableSaveButtonV2Options } [options] - Save button configuration options.<br/>Default value:
   *     **undefined**, which means the default configuration is used when this parameter is not passed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: EditableSaveButtonV2Options);
}

/**
 * Defines the title bar style configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface EditableTitleBarStyleV2Options {
  /**
   * Background color of the title bar.
   *
   * Default value: **'#00000000'**, indicating a transparent background.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Background blur style of the title bar. Pass this parameter when a background blur effect is needed for the title
   * bar. If it is not passed, no blur effect is applied.
   *
   * Default value: **BlurStyle.NONE**, indicating no blur effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Types of the expanded safe area. Pass this parameter when the title bar needs to be extended to a specific safe
   * area. If it is not passed, the title bar is extended only to the system safe area.
   *
   * Default value: **[SafeAreaType.SYSTEM]**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  safeAreaTypes?: Array<SafeAreaType>;

  /**
   * Edges of the expanded safe area. Pass this parameter when the safe area expansion direction needs to be customized.
   * If it is not passed, the safe area is expanded upward by default.
   *
   * Default value: **[SafeAreaEdge.TOP]**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  safeAreaEdges?: Array<SafeAreaEdge>;

  /**
   * Outer margin of the title bar. Negative values are not supported (they do not take effect).
   *
   * Default value:
   *
   * **{
   *
   * start: LengthMetrics.resource($r('sys.float.margin_left')),
   *
   * end: LengthMetrics.resource($r('sys.float.margin_right'))
   *
   * }**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  contentMargin?: LocalizedMargin;
}

/**
 * Defines the title bar style configuration class, which is decorated with **@ObservedV2** and supports state
 * observation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class EditableTitleBarStyleV2 {
  /**
   * Background color of the title bar.
   *
   * Default value: **'#00000000'**, indicating a transparent background.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public backgroundColor?: ResourceColor;

  /**
   * Background blur style of the title bar.
   *
   * Default value: **BlurStyle.NONE**, indicating no blur effect.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public backgroundBlurStyle?: BlurStyle;

  /**
   * Types of the expanded safe area.
   *
   * Default value: **[SafeAreaType.SYSTEM]**.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public safeAreaTypes?: Array<SafeAreaType>;

  /**
   * Edges of the expanded safe area.
   *
   * Default value: **[SafeAreaEdge.TOP]**.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public safeAreaEdges?: Array<SafeAreaEdge>;

  /**
   * Outer margin of the title bar. Negative values are not supported. If a negative value is set, it does not take
   * effect.
   *
   * Default value:
   *
   * **{
   *
   * start: LengthMetrics.resource($r('sys.float.margin_left')),
   *
   * end: LengthMetrics.resource($r('sys.float.margin_right'))
   *
   * }**.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public contentMargin?: LocalizedMargin;

  /**
   * A constructor used to create an **EditableTitleBarStyleV2** instance.
   *
   * @param { EditableTitleBarStyleV2Options } [options] - Options for the title bar style.<br/>Default value:
   *     **undefined**, which means the default configuration is used when this parameter is not passed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: EditableTitleBarStyleV2Options);
}

/**
 * The editable title bar is suitable for multi-select or content editing screens. Generally, a cancel icon is placed on
 * the left and a save button on the right. It supports left icon configuration, title configuration, avatar display,
 * menu item customization, save button control, and style customization, helping developers quickly build a unified
 * editable title bar.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1),
 * state management V2 delivers enhanced capabilities for deep observation and management of data objects, and is no
 * longer limited to the component level. With state management V2, you can more flexibly control the data and state of
 * the editable title bar through this component, achieving more efficient UI refresh.
 *
 * > **NOTE**
 * >
 * > - This component can only be used in the stage model.
 * >
 * > - If [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} are set for **EditableTitleBarV2**, the compilation
 * > toolchain will generate an additional node \_\_Common\_\_ and mount the universal attributes or universal events on
 * > \_\_Common\_\_, rather than directly applying them to **EditableTitleBarV2** itself. This may cause the set
 * > universal attributes or universal events to not take effect or behave unexpectedly. Therefore, it is not
 * > recommended to set universal attributes and universal events on **EditableTitleBarV2**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct EditableTitleBarV2 {
  /**
   * Left icon configuration. Pass this parameter when a back or cancel icon needs to be displayed on the left side of
   * the title bar. If not passed, the default value is used and no left icon is displayed.
   *
   * Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  leftIcon?: EditableLeftIconV2;

  /**
   * Title content, which can be a string or an object. When a string is passed, only the main title is displayed. When
   * an **EditableTitleV2** object is passed, both the main title and subtitle can be configured.
   *
   * Default value: **new EditableTitleV2()**, indicating that the title content is empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  title: ResourceStr | EditableTitleV2;

  /**
   * Menu item for the left avatar. Pass this parameter when an avatar needs to be displayed on the left side of the
   * title bar. If not passed, the default value is used and no avatar is displayed.
   *
   * Default value: **undefined**.
   *
   * **Note:** The left avatar does not support accessibility attribute configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  imageItem?: EditableTitleBarItemV2;

  /**
   * List of menu items on the right. Pass this parameter when custom action buttons need to be displayed on the right
   * side of the title bar. If not passed, the default value is used and no menu items are displayed on the right.
   *
   * **Note:** A maximum of 3 menu items can be configured. If a save button is also configured, a maximum of 2 menu
   * items can be configured. Menu items exceeding the quantity limit are not displayed.
   *
   * Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  menuItems?: Array<EditableTitleBarMenuItemV2>;

  /**
   * Save button configuration. Pass this parameter when you need to control the visibility of the save button on the
   * right side of the title bar, set its default focus, or configure the callback triggered upon saving. If not passed,
   * the default value is used and the save button is displayed. If **menuItems** is also configured, a maximum of 2
   * menu items can be configured.
   *
   * Default value: **undefined**, indicating that the save button is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  saveButton?: EditableSaveButtonV2;

  /**
   * Title bar style and layout configuration. Pass this parameter when you need to customize the title bar background,
   * safe area, margins, and other styles. If not passed, the default value is used and the default title bar style is
   * applied.
   *
   * Default value: **new EditableTitleBarStyleV2()**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  options: EditableTitleBarStyleV2;
}