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
 * Controller of the **Indicator** component. You can bind this object to the **Indicator** component to control page
 * turning. By passing the same **IndicatorComponentController** instance to the constructor of the
 * **IndicatorComponent** and the **indicator** attribute of the **Swiper** component, you can bind the **Indicator**
 * and **Swiper** components for linkage.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare class IndicatorComponentController {
  /**
   * A constructor used to create an **IndicatorComponentController** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  constructor();

  /**
   * Moves to the next indicator. When bound to a **Swiper** component, it also controls the **Swiper** to switch to the
   * next page. This is applicable to scenarios where the indicator switching is controlled through buttons or other
   * interaction methods.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  showNext():void;

  /**
   * Moves to the previous indicator. When bound to a **Swiper** component, it also controls the **Swiper** to switch to
   * the previous page. This is applicable to scenarios where the indicator switching is controlled through buttons or
   * other interaction methods.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  showPrevious():void;

  /**
   * Navigates to the specified indicator. Before using this method, ensure that the controller has been bound to the
   * **Indicator** component. This is applicable to scenarios where you need to jump to a specified indicator.
   *
   * @param { number } index - Index value of the specified indicator.<br/>**Note:** <br/>If the set value is less than
   *     0 or greater than the maximum indicator index, 0 is used.
   * @param { boolean } [useAnimation] - Whether to use an animation for when the target index is reached. The value
   *     **true** means to use an animation, and **false** means the opposite.
   *     <br>Default value: **false**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  changeIndex(index: number, useAnimation?: boolean):void;
}

/**
 * Provides an interface for indicator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
interface IndicatorComponentInterface {

  /**
   * Called when a indicator is set.
   *
   * @param { IndicatorComponentController } controller - indicator component controller.
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  (controller?: IndicatorComponentController): IndicatorComponentAttribute;
}

/**
 * Defines the IndicatorComponent attribute functions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare class IndicatorComponentAttribute extends CommonMethod<IndicatorComponentAttribute> {
  /**
   * Sets the index value of the current indicator when it first appears. If the value is less than 0 or
   * greater than or equal to the total number of indicators, the default value **0** is used.
   *
   * This attribute does not take effect when the **Indicator** component is bound to a **Swiper** component.
   * 
   * @param { number } index - Initial index of the navigation indicator when it first appears.<br>Default value: **0**
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  initialIndex(index: number): IndicatorComponentAttribute;

  /**
   * Sets the total number of indicators. When not bound to a **Swiper** component,
   * you can use this API to customize the number of indicators.
   *
   * When the **Indicator** component is bound to a **Swiper** component,
   * the count is subject to the number of pages in the **Swiper** component.
   * 
   * @param { number } totalCount - Total number of navigation dots. The value range is [2, +∞).
   *     <br/>Default value: 2.<br/>If 0, 1, or a negative number is passed in, the default value 2 is used.
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  count(totalCount: number): IndicatorComponentAttribute;

  /**
   * Sets the indicator style.
   *
   * @param { DotIndicator | DigitIndicator } indicatorStyle - the style value
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  style(indicatorStyle: DotIndicator | DigitIndicator): IndicatorComponentAttribute;

  /**
   * Sets whether to enable looping for the indicators.
   *
   * This attribute does not take effect when the **Indicator** component is bound to a **Swiper** component.
   * 
   * @param { boolean } isLoop - Whether to enable looping. The value **true** means to enable looping,
   *     and **false** means the opposite.<br>Default value: **true**
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  loop(isLoop: boolean): IndicatorComponentAttribute;

  /**
   * Sets whether the indicators are arranged vertically.
   * 
   * This attribute does not take effect when the **Indicator** component is bound to a **Swiper** component.
   *
   * @param { boolean } isVertical - Whether the indicator is arranged vertically.
   *     The value true means vertical arrangement, and false means horizontal arrangement.<br/>Default value: false.
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  vertical(isVertical: boolean): IndicatorComponentAttribute;

  /**
   * Triggered when the currently selected navigation index changes. The callback provides the new index.
   *
   * @param { Callback<number> } event - Callback invoked when the index of the currently displayed selected indicator changes.
   *     The callback parameter is the index value of the currently selected indicator.
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  onChange(event: Callback<number>): IndicatorComponentAttribute;
}

/**
 * Defines IndicatorComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare const IndicatorComponent: IndicatorComponentInterface;

/**
 * Defines IndicatorComponent instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare const IndicatorComponentInstance: IndicatorComponentAttribute;