/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
* 步骤导航器组件，适用于引导用户按照步骤完成任务的导航场景。
*
* > **说明：**
*
* > - 从API version 8开始支持，从API version 22开始废弃，建议使用[Swiper]{@link @global:Swiper}替代。详细示例请参考
* > [示例2]{@link @global:Stepper}。
*
 * @interface StepperInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper#SwiperInterface
 * @noninterop
 */
interface StepperInterface {

  /**
   * 使用步骤导航器组件时调用。
   *
   * @param { object } value - Index of the **StepperItem** that is currently displayed.<br>Default value: **0**<br>
   *     Since API version 10, this parameter supports two-way binding through
   *     [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   * @returns { StepperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#index
   */
  (value?: { index?: number }): StepperAttribute;
}

/**
* 无
*
 * @extends CommonMethod<StepperAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper#SwiperAttribute
 * @noninterop
 */
declare class StepperAttribute extends CommonMethod<StepperAttribute> {

  /**
   * 点击完成标签时的回调。
   *
   * @param { function } callback - 当**Stepper**中最后一个**StepperItem**的**nextLabel**被点击，并且**ItemState**属性为**Normal**时调用。
   * @returns { StepperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#onChange
   */
  onFinish(callback: () => void): StepperAttribute;

  /**
   * 点击跳过标签时的回调。
   *
   * @param { function } callback - 当前显示的**StepperItem**状态为**ItemState.Skip**时，**nextLabel**被点击时调用。
   * @returns { StepperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#onChange
   */
  onSkip(callback: () => void): StepperAttribute;

  /**
   * 点击切换标签时的回调。
   *
   * @param { function } callback - 页面切换时触发的回调。<br/>prevIndex: 切换前的步骤页索引值。<br>取值范围：
   *     [0, +∞)。<br/>index: 切换后的步骤页（前一页或者下一页）索引值。
   *     <br>取值范围：[0, +∞)。
   * @returns { StepperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#onChange
   */
  onChange(callback: (prevIndex: number, index: number) => void): StepperAttribute;

  /**
   * 点击下一步标签时的回调。
   *
   * @param { function } callback - 页面切换时触发的回调。<br/>index: 当前步骤页索引值。<br/>pendingIndex: 下一步骤页索引值。
   * @returns { StepperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#onChange
   */
  onNext(callback: (index: number, pendingIndex: number) => void): StepperAttribute;

  /**
   * 点击上一步标签时的回调。
   *
   * @param { function } callback - 页面切换时触发的回调。<br/>index: 当前步骤页索引值。<br/>pendingIndex: 上一步骤页索引值。
   * @returns { StepperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#onChange
   */
  onPrevious(callback: (index: number, pendingIndex: number) => void): StepperAttribute;
}

/**
* 步骤导航器组件，适用于引导用户按照步骤完成任务的导航场景。
*
* > **说明：**
*
* > - 从API version 8开始支持，从API version 22开始废弃，建议使用[Swiper]{@link @global:Swiper}替代。详细示例请参考
* > [示例2]{@link @global:Stepper}。
*
* ###### 子组件
*
* 仅能包含子组件[StepperItem]{@link @global:StepperItem}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper
 * @noninterop
 */
declare const Stepper: StepperInterface;

/**
 * Defines Stepper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Stepper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Stepper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper
 * @noninterop
 */
declare const StepperInstance: StepperAttribute;