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
 * Enumerates the sidebar types of the container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum SideBarContainerType {
  /**
   * The sidebar is embedded in the component and displayed side by side with the content area. This mode applies to
   * scenarios where both the sidebar and the content area need to be displayed.
   *
   * When the overall container size remains unchanged, showing the sidebar shrinks the content area, and hiding the
   * sidebar expands the content area.
   *
   * When the component size is smaller than [minContentWidth]{@link SideBarContainerAttribute#minContentWidth} +
   * [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)} and **showSideBar** is not set,
   * the sidebar is not displayed by default.
   *
   * When the **showSideBar** attribute is set, the value set by the **showSideBar** attribute prevails.
   *
   * When [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)} or
   * [minContentWidth]{@link SideBarContainerAttribute#minContentWidth} is not set, the default value of the
   * corresponding API is used for calculation.
   *
   * After the component is automatically hidden, if the sidebar is brought up by tapping the control button, the
   * sidebar floats over the content area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Embed = 0,

  /**
   * The sidebar floats over the content area and does not affect the size of the content area. This mode applies to
   * scenarios where the sidebar needs to be displayed temporarily.
   *
   * When the component size is smaller than [minContentWidth]{@link SideBarContainerAttribute#minContentWidth}, the
   * content area is displayed in a truncated manner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Overlay = 1,

  /**
   * When the component size is greater than or equal to
   * [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)} +
   * [minContentWidth]{@link SideBarContainerAttribute#minContentWidth}, the Embed mode is used for display.
   *
   * When the component size is smaller than
   * [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)} +
   * [minContentWidth]{@link SideBarContainerAttribute#minContentWidth}, the Overlay mode is used for display. This mode
   * applies to scenarios that require responsive layout or multi-device adaptation.
   *
   * When [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)} or
   * [minContentWidth]{@link SideBarContainerAttribute#minContentWidth} is not set, the default value of the unset API
   * is used for calculation. If the calculated value is smaller than 600 vp, 600 vp is used as the threshold for mode
   * switching.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  AUTO = 2,

  /**
   * The sidebar and the content area are displayed in parallel, and the overflow part of the content area is moved
   * outside the component. When the sidebar is expanded, the content area is displayed with a gray overlay (color: #330
   * 00000) and events are disabled. You can tap the content area to collapse the sidebar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISPLACE = 3
}

/**
 * Enumerates the positions of the sidebar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum SideBarPosition {
  /**
   * The sidebar is on the left side of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Start = 0,

  /**
   * The sidebar is on the right side of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  End = 1
}

/**
 * Describes the icons of the sidebar control button.
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
declare interface ButtonIconOptions {
  /**
   * Icon of the control button when the sidebar is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  shown: string | PixelMap | Resource;

  /**
   * Icon of the control button when the sidebar is hidden.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  hidden: string | PixelMap | Resource;

  /**
   * Icon of the control button when the sidebar is switching between the shown and hidden states.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  switching?: string | PixelMap | Resource;
}

/**
 * Describes the style of the sidebar control button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface ButtonStyle {
  /**
   * Distance between the sidebar control button and the left edge of the container.
   *
   * Default value: **16vp**
   *
   * Unit: vp
   *
   * Value range: [0, +∞)
   *
   * The default value is used when an invalid value is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  left?: number;

  /**
   * Spacing between the sidebar control button and the top of the container.
   *
   * Default value: **48vp**
   *
   * Unit: vp
   *
   * Value range: [0, +∞).
   *
   * If the value is abnormal, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  top?: number;

  /**
   * Width of the sidebar control button.
   *
   * Default value:
   *
   * API version 9 and earlier versions: **32vp**
   *
   * API version 10 and later versions: **24vp**
   *
   * Unit: vp
   *
   * Value range: [0, +∞).
   *
   * If the value is abnormal, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  width?: number;

  /**
   * Height of the sidebar control button.
   *
   * Default value:
   *
   * API version 9 and earlier versions: **32vp**
   *
   * API version 10 and later versions: **24vp**
   *
   * Unit: vp
   *
   * Value range: [0, +∞).
   *
   * If the value is abnormal, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  height?: number;

  /**
   * Icons of the sidebar control button.
   *
   * If the resource fails to be obtained or this attribute is not set, the default icon is used.
   *
   * @type { ?object } [since 8 - 17]
   * @type { ?ButtonIconOptions } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  icons?: ButtonIconOptions;
}

/**
 * Provides a container that allows the sidebar to be shown and hidden. The sidebar and content area are defined by
 * child components, with the first child component representing the sidebar and the second representing the content
 * area. It supports sidebar navigation layout scenarios, where the sidebar can be shown or hidden through a control
 * button or gesture, improving app navigation efficiency.
 *
 * > **NOTE**
 * >
 * > The APIs of this module are supported since API version 8. Updates will be marked with a superscript to indicate
 * > their
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface SideBarContainerInterface {
  /**
   * Creates a sidebar container.
   *
   * @param { SideBarContainerType } type - Display type of the sidebar.
   *     <br>Default value: **SideBarContainerType.Embed**
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (type?: SideBarContainerType): SideBarContainerAttribute;
}

/**
 * Sets the divider style.
 *
 * > **NOTE**
 * >
 * > When [width]{@link CommonMethod#width(value: Length)} and [height]{@link CommonMethod#height(value: Length)} are
 * > set for the sidebar child component, neither takes effect.
 * >
 * > When [width]{@link CommonMethod#width(value: Length)} and [height]{@link CommonMethod#height(value: Length)} are
 * > set for the sidebar content area, neither takes effect. By default, the content area occupies the remaining space
 * > of the **SideBarContainer**.
 * >
 * > When the [showSideBar]{@link SideBarContainerAttribute#showSideBar} attribute is not set, the sidebar is displayed
 * > automatically based on the component size:
 * >
 * > - Smaller than [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)} +
 * > [minContentWidth]{@link SideBarContainerAttribute#minContentWidth}: the sidebar is not displayed by default.
 * >
 * > - Greater than or equal to [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)} +
 * > [minContentWidth]{@link SideBarContainerAttribute#minContentWidth}: the sidebar is displayed by default.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface DividerStyle {
  /**
   * Width of the divider.
   *
   * Default value: **1vp**
   *
   * Unit: vp
   *
   * Value range: [0, +∞)
   *
   * The default value is used when an abnormal value is set.
   *
   * **NOTE**
   *
   * The width of the divider does not support percentage settings. It has a lower priority than the
   * [common attribute height]{@link CommonMethod#height(value: Length)}. If the width exceeds the size set by the
   * common attribute, it is clipped according to the common attribute. On some devices, the divider may not be
   * displayed due to 1-pixel rounding in hardware. 2 px is recommended.
   *
   * @default 1vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth: Length;

  /**
   * Color of the divider.
   *
   * Default value: **#000000**, 3%, black.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color?: ResourceColor;

  /**
   * Distance between the divider and the top of the sidebar.
   *
   * Default value: **0**
   *
   * Unit: vp
   *
   * Value range: [0, +∞).
   *
   * If the value is abnormal, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  startMargin?: Length;

  /**
   * Distance between the divider and the bottom of the sidebar.
   *
   * Default value: **0**
   *
   * Unit: vp
   *
   * Value range: [0, +∞).
   *
   * If the value is abnormal, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  endMargin?: Length;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link ./common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class SideBarContainerAttribute extends CommonMethod<SideBarContainerAttribute> {
  /**
   * Sets whether to display the sidebar. Setting this attribute triggers the show/hide animation of the sidebar.
   *
   * When the **showSideBar** attribute is not set, the sidebar is automatically displayed based on the component size:
   * it is hidden by default when the size is smaller than
   * [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)} +
   * [minContentWidth]{@link SideBarContainerAttribute#minContentWidth}, and displayed by default when the size is
   * greater than or equal to that value.
   *
   * Since API version 10, this attribute supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * @param { boolean } value - Whether to display the sidebar.
   *     <br>**true**: The sidebar is displayed.
   *     <br>**false**: The sidebar is not displayed.
   *     <br>Default value: **true**
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  showSideBar(value: boolean): SideBarContainerAttribute;

  /**
   * Sets the attributes of the sidebar control button. The control button is used to switch the sidebar between the
   * shown and hidden states.
   *
   * @param { ButtonStyle } value - Style of the sidebar control button, used to configure the position, size, and icon
   *     of the control button.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controlButton(value: ButtonStyle): SideBarContainerAttribute;

  /**
   * Sets whether to display the control button. The control button is used to toggle the **showSideBar** attribute.
   * Tapping it shows or hides the sidebar and updates the **showSideBar** attribute value.
   *
   * @param { boolean } value - Whether to display the sidebar control button.
   *     <br>**true**: The sidebar control button is displayed.
   *     <br>**false**: The sidebar control button is not displayed.
   *     <br>Default value: **true**
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  showControlButton(value: boolean): SideBarContainerAttribute;

  /**
   * Triggered when the status of the sidebar switches between shown and hidden.
   *
   * This event is triggered when any of the following conditions is met:
   *
   * 1. The value of the **showSideBar** attribute changes.
   * 2. The adaptation of the **showSideBar** attribute changes.
   * 3. [autoHide]{@link SideBarContainerAttribute#autoHide} is triggered upon divider dragging.
   *
   * @param { function } callback - **true**: The sidebar is shown. **false**: The sidebar is hidden.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: (value: boolean) => void): SideBarContainerAttribute;

  /**
   * Sets the width of the sidebar. If a value less than 0 is set, the default value is used. The value is subject to
   * the **minSideBarWidth** and **maxSideBarWidth** constraints. If it is not within the valid range, the closest
   * boundary value is used.
   *
   * Since API version 18, this attribute supports two-way binding through
   * [!!](docroot://ui/state-management/arkts-new-binding.md).
   *
   * @param { number } value - Width of the sidebar.<br/>Default value: **240vp**<br/>Unit: vp<br/>Value range:
   *     [0, +∞)<br/>The default value is used when an invalid value is set.<br/>**NOTE**<br/>
   *     The default value is **200vp** for API versions earlier than 10, and **240vp** for API version 10 and later.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  sideBarWidth(value: number): SideBarContainerAttribute;

  /**
   * Sets the minimum width of the sidebar. If a value less than 0 is set, the default value is used. The value cannot
   * exceed the width of the sidebar container. If the specified value exceeds the sidebar container width, the
   * container width is used instead.
   *
   * **minSideBarWidth**, whether it is specified or kept at the default value, takes precedence over **minWidth** of
   * the sidebar child components.
   *
   * @param { number } value - Minimum width of the sidebar.<br/>Default value: **200vp** for API version 9 and earlier,
   *     and **240vp** for API version 10 and later.<br/>Unit: vp<br/>Value range:
   *     [0, +∞)<br/>The default value is used when an invalid value is set.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  minSideBarWidth(value: number): SideBarContainerAttribute;

  /**
   * Sets the maximum width of the sidebar. If a value less than 0 is set, the default value is used. The value cannot
   * exceed the width of the sidebar container. If the specified value exceeds the sidebar container width, the
   * container width is used instead.
   *
   * **maxSideBarWidth**, whether it is specified or kept at the default value, takes precedence over **maxWidth** of
   * the sidebar child components.
   *
   * @param { number } value - Maximum width of the sidebar.<br/>Default value: **280vp**<br/>Unit: vp<br/>Value range:
   *     [0, +∞)<br/>The default value is used when an invalid value is set.<br/>The value cannot exceed the width of
   *     the sidebar container itself. If it does, the width of the sidebar container itself is used.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  maxSideBarWidth(value: number): SideBarContainerAttribute;

  /**
   * Sets the width of the sidebar. If a value less than 0 is set, the default value is used. The value is subject to
   * the **minSideBarWidth** and **maxSideBarWidth** constraints. If it is not within the valid range, the closest
   * boundary value is used. Compared with [sideBarWidth]{@link SideBarContainerAttribute#sideBarWidth(value: number)},
   * the **value** parameter additionally supports percentage strings and other [pixel units]{@link ./common}.
   *
   * Since API version 18, this attribute supports two-way binding through
   * [!!](docroot://ui/state-management/arkts-new-binding.md).
   *
   * @param { Length } value - Width of the sidebar.<br/>Default value: **240vp**<br/>Unit: vp<br/>Value range:
   *     [0, +∞)<br/>If the value is abnormal, the default value is used.<br/>
   *     **NOTE**<br/>The default value is **200vp** since API version 9, and **240vp** since API version 10.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sideBarWidth(value: Length): SideBarContainerAttribute;

  /**
   * Sets the minimum width of the sidebar. If a value less than 0 is set, the default value is used. The value cannot
   * exceed the width of the sidebar container. If the specified value exceeds the sidebar container width, the
   * container width is used instead. Compared to
   * [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)}, this API supports percentage
   * strings and other [pixel units]{@link ./common} for the **value** parameter.
   *
   * **minSideBarWidth**, whether it is specified or kept at the default value, takes precedence over **minWidth** of
   * the sidebar child components.
   *
   * @param { Length } value - Minimum width of the sidebar.<br/>Default value: **200vp** for API version 9 and earlier,
   *     and **240vp** for API version 10 and later.<br/>Unit: vp<br/>Value range:
   *     [0, +∞)<br/>The default value is used when an invalid value is set.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  minSideBarWidth(value: Length): SideBarContainerAttribute;

  /**
   * Sets the maximum width of the sidebar. If a value less than 0 is set, the default value is used. The value cannot
   * exceed the width of the sidebar container. If the specified value exceeds the sidebar container width, the
   * container width is used instead. Compared with
   * [maxSideBarWidth]{@link SideBarContainerAttribute#maxSideBarWidth(value: number)}, this API supports percentage
   * strings and other [pixel units]{@link ./common} for the **value** parameter.
   *
   * **maxSideBarWidth**, whether it is specified or kept at the default value, takes precedence over **maxWidth** of
   * the sidebar child components.
   *
   * @param { Length } value - Maximum width of the sidebar.<br/>Default value: **280vp**<br/>Unit: vp<br/>Value range:
   *     [0, +∞)<br/>The default value is used when an exception occurs.<br/>
   *     The value cannot exceed the width of the sidebar container itself.
   *     If it does, the width of the sidebar container itself is used.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  maxSideBarWidth(value: Length): SideBarContainerAttribute;

  /**
   * Sets whether to automatically hide the sidebar when it is dragged to be smaller than the minimum width. The value
   * is subject to the **minSideBarWidth** attribute method. If the **minSideBarWidth** attribute method is not set, the
   * default value is used. After the sidebar is automatically hidden, the **showSideBar** attribute value is
   * synchronously updated to **false**, and the **onChange** event is triggered.
   *
   * Determines whether to automatically hide the sidebar during dragging. When the sidebar is dragged to be smaller
   * than the minimum width, it must be dragged beyond the boundary by a certain distance (the specific distance is
   * determined by the system implementation) to trigger automatic hiding, which provides a damping effect to avoid
   * accidental operations.
   *
   * @param { boolean } value - Whether to automatically hide the sidebar when it is dragged to be smaller than the
   *     minimum width.
   *     <br>**true**: The sidebar is automatically hidden.
   *     <br>**false**: The sidebar is not automatically hidden.
   *     <br>Default value: **true**
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  autoHide(value: boolean): SideBarContainerAttribute;

  /**
   * Sets the position of the sidebar.
   *
   * @param { SideBarPosition } value - Position of the sidebar.
   *     <br>Default value: **SideBarPosition.Start**
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sideBarPosition(value: SideBarPosition): SideBarContainerAttribute;

  /**
   * Sets the divider style.
   *
   * @param { DividerStyle | null } value - Style of the divider.<br/>The default value is **DividerStyle**, which
   *     displays the divider.<br/>- **null** or **undefined**: The divider style remains the default value and is not
   *     changed.<br/>**Note:** <br/>In API version 11 and earlier, **null** means that the divider is not displayed.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  divider(value: DividerStyle | null): SideBarContainerAttribute;

  /**
   * Sets the minimum content area width of the sidebar container.
   *
   * If this attribute is set to a value less than 0, the default value **360vp** will be used. If this attribute is not
   * set, the width of the content area can shrink to 0.
   *
   * In Embed mode, when the component size is increased, only the content area is enlarged;
   *
   * when the component size is decreased, the content area is shrunk until its width reaches the value defined by
   * **minContentWidth**; if the component size is further decreased, while respecting the **minContentWidth** settings,
   * the sidebar is shrunk
   *
   * until its width reaches the value defined by **minSideBarWidth**; if the component size is further decreased, then:
   *
   * - If [autoHide]{@link SideBarContainerAttribute#autoHide} is set to **false**, while retaining the
   * [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)} and **minContentWidth** settings,
   * the content area has its content clipped.
   * - If **autoHide** is set to **true**, the sidebar is hidden first, and then the content area is shrunk. After its
   * width reaches the value defined by **minContentWidth**, the content area has its content clipped.
   *
   * **minContentWidth** takes precedence over the
   * [maxSideBarWidth]{@link SideBarContainerAttribute#maxSideBarWidth(value: number)} and **sideBarWidth** attributes
   * of the sidebar. If **minContentWidth** is not set, **minSideBarWidth** and **maxSideBarWidth** take precedence over
   * its default value.
   *
   * @param { Dimension } value - Minimum width of the content area of the **SideBarContainer** component.<br/>Default
   *     value: **360vp**<br/>Value range: [0, +∞)<br/>If the value is less than 0, the default value is used.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  minContentWidth(value: Dimension): SideBarContainerAttribute;

  /**
   * Sets whether the sidebar can be displayed or hidden by swiping. If this API is not called, the sidebar cannot be
   * displayed or hidden by swiping.
   *
   * > **NOTE**
   * >
   * > - The swipe gesture takes effect on the sidebar and content area (excluding the divider). When the swiping
   * > distance reaches 100 vp, the sidebar is displayed or hidden. The maximum swiping distance is equal to the width
   * > of the sidebar.
   * >
   * > - When the sidebar is on the left of the container:
   * >
   * > - You can swipe right to expand the sidebar when it is hidden.
   * >
   * > - You can swipe left to close the sidebar when it is displayed.
   * >
   * > - When the sidebar is on the right of the container:
   * >
   * > - You can swipe left to expand the sidebar when it is hidden.
   * >
   * > - You can swipe right to close the sidebar when it is displayed.
   *
   * @param { boolean } value - Whether to support showing or hiding the sidebar through gesture swiping.<br/>**true**:
   *     gesture swiping is supported.<br/>**false**: gesture swiping is not supported.<br/>Default value: **false**
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  showSideBarWithGesture(value: boolean): SideBarContainerAttribute;
}

/**
 * Provides a container that allows the sidebar to be shown and hidden. The sidebar and content area are defined by
 * child components, with the first child component representing the sidebar and the second representing the content
 * area. It supports sidebar navigation layout scenarios, where the sidebar can be shown or hidden through a control
 * button or gesture, improving app navigation efficiency.
 *
 * > **NOTE**
 * >
 * > The APIs of this module are supported since API version 8. Updates will be marked with a superscript to indicate
 * > their
 *
 * ###### Child Components
 *
 * Supported
 *
 * > **NOTE**
 * >
 * > - Allowed child component types: built-in and custom components, excluding rendering control types (
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), and
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)).
 * >
 * > - This component must contain two child components.
 * >
 * > - If there are three or more child components, only the first and second child components are displayed. If there
 * > is only one child component, the sidebar is displayed, and the content area is blank.
 * >
 * > - The focus navigation is performed in the content area and then in the sidebar of the **SideBarContainer**
 * > component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const SideBarContainer: SideBarContainerInterface;

/**
 * Defines SideBarContainer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const SideBarContainerInstance: SideBarContainerAttribute;