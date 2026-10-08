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
 * Defines the callback to notify the application when the animation stops playing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type FinishAnimationHandler = () => void;

/**
 * Implements the controller of the **ArcSwiper** component. You can bind this object to the **ArcSwiper** component and
 * use it to control page switching.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export class ArcSwiperController {
  /**
   * A constructor used to create an **ArcSwiperController** instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor();

  /**
   * Swipes to the next page. The swipe transition includes animation, with the duration specified by
   * [duration]{@link ArcSwiperAttribute#duration}. When page switching is controlled through this method, the bounce
   * effect set by **effectMode** does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  showNext();

  /**
   * Swipes to the previous page. The swipe transition includes animation, with the duration specified by
   * [duration]{@link ArcSwiperAttribute#duration}. When page switching is controlled through this method, the bounce
   * effect set by **effectMode** does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  showPrevious();

  /**
   * Stops the animation. When page switching is controlled through this method, the bounce effect set by **effectMode**
   * does not take effect.
   *
   * @param { FinishAnimationHandler } handler - Callback triggered when an animation stops.<br/>Default value: No
   *     callback when not passed.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  finishAnimation(handler?: FinishAnimationHandler);
}

/**
 * Declare the direction of arc indicator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export enum ArcDirection {
  /**
   * 3 o'clock direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  THREE_CLOCK_DIRECTION = 0,

  /**
   * 6 o'clock direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  SIX_CLOCK_DIRECTION = 1,

  /**
   * 9 o'clock direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  NINE_CLOCK_DIRECTION = 2
}

/**
 * Describes the properties and behavior of the arc dot navigation indicator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export class ArcDotIndicator {
  /**
   * A constructor used to create an **ArcDotIndicator** instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor();

  /**
   * Sets the direction of the arc navigation indicator.
   *
   * @param { Optional<ArcDirection> } direction - Direction of the arc navigation indicator.
   *     <br>Default value: **ArcDirection.SIX_CLOCK_DIRECTION** (6 o'clock direction)
   * @returns { ArcDotIndicator } Properties and functionality of the arc navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  arcDirection(direction: Optional<ArcDirection>): ArcDotIndicator;

  /**
   * Sets the color of the unselected navigation points in the arc navigation indicator.
   *
   * @param { Optional<ResourceColor> } color - Color of the unselected navigation points in the arc navigation
   *     indicator.
   *     <br>Default value: **'#A9FFFFFF'**
   * @returns { ArcDotIndicator } Properties and functionality of the arc navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  itemColor(color: Optional<ResourceColor>): ArcDotIndicator;

  /**
   * Sets the color of the selected navigation point in the arc navigation indicator.
   *
   * @param { Optional<ResourceColor> } color - Color of the selected navigation point in the arc navigation indicator.
   *     <br>Default value: **#FF5EA1FF**
   * @returns { ArcDotIndicator } Properties and functionality of the arc navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedItemColor(color: Optional<ResourceColor>): ArcDotIndicator;

  /**
   * Sets the color of the arc navigation indicator when it is long-pressed.
   *
   * @param { Optional<ResourceColor> } color - Color of the arc navigation indicator when it is long-pressed.
   *     <br>Default value: **'#FF404040'**
   * @returns { ArcDotIndicator } Properties and functionality of the arc navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundColor(color: Optional<ResourceColor>): ArcDotIndicator;

  /**
   * Sets the mask gradient color of the arc navigation indicator.
   *
   * @param { Optional<LinearGradient> } color - Mask gradient color of the arc navigation indicator.
   *     <br>Default start color: **'#00000000'**
   *     <br>Default end color: **'#FF000000'**
   * @returns { ArcDotIndicator } Properties and functionality of the arc navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  maskColor(color: Optional<LinearGradient>): ArcDotIndicator;
}

/**
 * Provide an interface for ArcSwiper.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
interface ArcSwiperInterface {
  /**
   * Creates an **ArcSwiper** component.
   *
   * @param { ArcSwiperController } controller - Controller bound to the component for controlling page swiping. If this
   *     parameter is not passed, pages can still be switched by swiping gestures, but the page swiping method cannot be
   *     called through the controller.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  (controller?: ArcSwiperController): ArcSwiperAttribute;
}

/**
 * Notifies the app when the index of the currently displayed element changes. The index sequence starts from 0.
 *
 * @param { number } index - Index of the currently displayed element. The index is zero-based.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type IndexChangedHandler = (index: number) => void;

/**
 * Defines the callback triggered when the page transition animation starts.
 *
 * @param { number } index - Index of the currently displayed element before the animation starts (not the final index
 *     after the animation ends).
 * @param { number } targetIndex - Index of the target element to switch to.
 * @param { SwiperAnimationEvent } event - Extra information of the animation, including the offset of the currently
 *     displayed element and target element relative to the start position of the **ArcSwiper** along the main axis, and
 *     the hands-off velocity.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type AnimationStartHandler = (index: number, targetIndex: number, event: SwiperAnimationEvent) => void;

/**
 * Defines the callback triggered when the page transition animation ends.
 *
 * @param { number } index - Index of the currently displayed element.
 * @param { SwiperAnimationEvent } event - Extra information of the animation, which is the offset of the currently
 *     displayed element relative to the start position of the **ArcSwiper** along the main axis.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type AnimationEndHandler = (index: number, event: SwiperAnimationEvent) => void;

/**
 * Defines the callback triggered on a frame-by-frame basis during a swipe-based page turn.
 *
 * @param { number } index - Index of the currently displayed element.
 * @param { SwiperAnimationEvent } event - Extra information of the animation, which is the offset of the currently
 *     displayed element relative to the start position of the **ArcSwiper** along the main axis.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type GestureSwipeHandler = (index: number, event: SwiperAnimationEvent) => void;

/**
 * Provides the information about the custom page transition animation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface SwiperContentAnimatedTransition {
  /**
   * Timeout for the **ArcSwiper** custom swipe animation. The timer starts from the first frame when the page performs
   * the default animation (page swipe) and moves out of the viewport. If the developer has not called the
   * [finishTransition]{@link SwiperContentTransitionProxy.finishTransition} API of
   * [SwiperContentTransitionProxy]{@link SwiperContentTransitionProxy} to notify the **ArcSwiper** component that the
   * custom animation of this page has ended after this time is reached, the component will forcibly end the custom
   * animation of this page and immediately render the tree under this page node.
   *
   * Unit: ms
   *
   * Default value: **0**.
   *
   * @default 0 ms
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  timeout?: number;

  /**
   * Content of the custom page transition animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  transition: Callback<SwiperContentTransitionProxy>;
}

/**
 * Implements the proxy object returned during the execution of the custom page transition animation of the
 * **ArcSwiper** component. You can use this object to obtain the page information in the custom animation viewport. You
 * can also call the **finishTransition** API of this object to notify the **ArcSwiper** component that the custom
 * animation has finished playing.
 *
 * > **NOTE**
 * >
 * > - For example, when the index of the currently selected child component is 0, during a transition animation from
 * > page 0 to page 1, the callback is triggered for all pages within the viewport on every frame. When pages 0 and 1
 * > are both in the viewport, the callback is triggered twice per frame. The first callback has **selectedIndex** as
 * > **0**, **index** as **0**, **position** as the ratio of how much page 0 has moved relative to its position before
 * > the animation started on the current frame, and **mainAxisLength** as the length of page 0 on the main axis. The
 * > second callback has **selectedIndex** as **0**, **index** as **1**, **position** as the ratio of how much page 1
 * > has moved relative to page 0 before the animation started on the current frame, and **mainAxisLength** as the
 * > length of page 1 on the main axis.
 * >
 * > - If the animation curve is a spring interpolation curve, during the transition animation from page 0 to page 1,
 * > due to the position and velocity when the user lifts their finger off the screen, animation may overshoot and slide
 * > past to page 2, then bounce back to page 1. Throughout this process, a callback is triggered for pages 1 and 2
 * > within the viewport on every frame.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface SwiperContentTransitionProxy {
  /**
   * Index of the currently selected page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedIndex: number;

  /**
   * Index of a page in the viewport.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  index: number;

  /**
   * Position of the page specified by **index** relative to the start position of the **ArcSwiper** main axis (start
   * position of the page corresponding to **selectedIndex**).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  position: number;

  /**
   * Length of the page corresponding to the index on the main axis. Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  mainAxisLength: number;

  /**
   * Notifies the **ArcSwiper** component that the custom animation has finished playing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  finishTransition(): void;
}

/**
 * In addition to the [universal attributes]{@link ./@internal/component/ets/common}, the following attributes are
 * supported.
 *
 * In addition to the [universal events]{@link ./@internal/component/ets/common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
declare class ArcSwiperAttribute extends CommonMethod<ArcSwiperAttribute> {
  /**
   * Sets the index of the child component currently displayed in the container. If the **index** value is
   * **undefined**, less than 0, or greater than or equal to the number of child components, the default value **0** is
   * used.
   *
   * @param { Optional<number> } index - Index of the child component currently displayed in the container.
   *     <br>If **index** is set to **undefined**, the value **0** is used.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  index(index: Optional<number>): ArcSwiperAttribute;

  /**
   * Sets the style of the arc dot navigation indicator.
   *
   * @param { Optional<ArcDotIndicator | boolean> } style - Style of the arc dot navigation indicator.
   *     <br> - **ArcDotIndicator**: properties and behavior of the arc dot navigation indicator.
   *     <br> - **boolean**: whether to enable the arc dot navigation indicator. **true** to enable, **false**
   *     otherwise.
   *     <br> Default value: **true**
   *     <br> Default type: **ArcDotIndicator**
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  indicator(style: Optional<ArcDotIndicator | boolean>): ArcSwiperAttribute;

  /**
   * Sets the duration of the animation for child component switching.
   *
   * @param { Optional<number> } duration - Animation duration for child component switching.<br/>Default value: **400**
   *     <br/>Unit: ms. If a negative number is passed, the default value is used.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  duration(duration: Optional<number>): ArcSwiperAttribute;

  /**
   * Sets whether vertical swiping is used.
   *
   * @param { Optional<boolean> } isVertical - Whether vertical swiping is used.
   *     <br>The value **true** means vertical swiping, and **false** means horizontal swiping.
   *     <br>Default value: **false**
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  vertical(isVertical: Optional<boolean>): ArcSwiperAttribute;

  /**
   * Sets whether to disable the swipe-to-switch feature of the component.
   *
   * @param { Optional<boolean> } disabled - Whether to disable the swipe-to-switch feature of the component. The value
   *     **true** means to disable the feature, and **false** means the opposite.
   *     <br>Default value: **false**
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  disableSwipe(disabled: Optional<boolean>): ArcSwiperAttribute;

  /**
   * Sets the sensitivity of the rotating crown. The page switching of the **ArcSwiper** component can be controlled by
   * rotating the crown. Different sensitivity levels adjust the response speed of crown scrolling. The higher the
   * sensitivity, the larger the page switching step per unit rotation angle.
   *
   * @param { Optional<CrownSensitivity> } sensitivity - Sensitivity of the digital crown rotation. Setting different
   *     sensitivity levels adjusts the response speed of crown rotation.<br/>Default value: CrownSensitivity.MEDIUM
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): ArcSwiperAttribute;

  /**
   * Triggered when the index of the currently displayed child component changes. The return value is the index of the
   * currently displayed child component.
   *
   * When the **ArcSwiper** component is used together with
   * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), the subpage UI update cannot
   * be triggered in the **onChange** event.
   *
   * @param { Optional<IndexChangedHandler> } handler - Callback for the index of the currently displayed element.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onChange(handler: Optional<IndexChangedHandler>): ArcSwiperAttribute;

  /**
   * Triggered when the page transition animation starts.
   *
   * @param { Optional<AnimationStartHandler> } handler - Triggered when the page transition animation starts.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onAnimationStart(handler: Optional<AnimationStartHandler>): ArcSwiperAttribute;

  /**
   * Triggered when the page transition animation ends.
   *
   * Triggered when the **ArcSwiper** transition animation ends, including when the animation is interrupted by a
   * gesture or when **finishAnimation** is called through [ArcSwiperController]{@link ArcSwiperController}. The
   * parameter is the index value after the animation ends. For multi-column **ArcSwiper**, the **index** is the index
   * of the leftmost component.
   *
   * @param { Optional<AnimationEndHandler> } handler - Triggered when the page transition animation ends.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onAnimationEnd(handler: Optional<AnimationEndHandler>): ArcSwiperAttribute;

  /**
   * Triggered on a frame-by-frame basis when the page is turned by a swipe.
   *
   * @param { Optional<GestureSwipeHandler> } handler - Triggered on a frame-by-frame basis when the page is turned by a
   *     swipe.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onGestureSwipe(handler: Optional<GestureSwipeHandler>): ArcSwiperAttribute;

  /**
   * Sets effect used at the edges of the component when the boundary of the scrollable content is reached. For
   * supported edge effects, see [EdgeEffect]{@link EdgeEffect}. The bounce effect does not take effect when page
   * turning is controlled through the **showNext**, **showPrevious**, and **finishAnimation** APIs of
   * [ArcSwiperController]{@link ArcSwiperController}.
   *
   * @param {  Optional<EdgeEffect> } edgeEffect - Effect used at the edges of the component when the boundary of the
   *     scrollable content is reached. The bounce effect does not take effect when page turning is controlled through
   *     the **ArcSwiperController** API.<br/>Default value: **EdgeEffect.Spring**
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  effectMode(edgeEffect: Optional<EdgeEffect>): ArcSwiperAttribute;

  /**
   * Customizes the **ArcSwiper** page transition animation. During the finger swipe and transition animation, a
   * callback is triggered frame by frame for all pages within the viewport. You can set attributes such as opacity,
   * scale, and offset in the callback.
   *
   * During finger-following swipes and post-release transition animations, the
   * [SwiperContentTransitionProxy]{@link SwiperContentTransitionProxy} callback is invoked for all pages in the
   * viewport on a frame-by-frame basis. For example, when there are two pages whose subscripts are 0 and 1 in the
   * viewport, two callbacks whose indexes are 0 and 1 are invoked in each frame.
   *
   * @param { Optional<SwiperContentAnimatedTransition> } transition - Information about the **ArcSwiper** custom swipe
   *     animation, including **timeout** and **transition**.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  customContentTransition(transition: Optional<SwiperContentAnimatedTransition>): ArcSwiperAttribute;

  /**
   * Sets whether to disable special animation effects.
   *
   * @param { Optional<boolean> } disabled - Whether to disable the transition animation.<br/>**true**: yes; **false**:
   *     no.<br/>If an invalid parameter is passed, it is processed as **false**.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  disableTransitionAnimation(disabled: Optional<boolean>): ArcSwiperAttribute;
}

/**
 * Defines the ArcSwiper Component that can provide the ability for sub components to swipe and display.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @uicomponent [since 19]
 * @since 18 dynamic
 * @noninterop
 */
declare let ArcSwiper: ArcSwiperInterface;

/**
 * Defines ArcSwiper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
declare let ArcSwiperInstance: ArcSwiperAttribute;