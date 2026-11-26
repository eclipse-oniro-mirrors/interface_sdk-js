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
 * Used to customize the distance and suction position of the kickout roll. This API applies to the scrollSnapStrategy
 * attribute of the [Grid]{@link Grid}, [WaterFlow]{@link WaterFlow}, and [List]{@link List} components,
 * After implementing the API, you can transfer the object to scrollSnapStrategy.
 * For a complete example, refer to [Example 24 (Custom Scroll Adsorption Position)](
 * docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md# Example 24 Custom Scroll Adsorption Position).
 *
 * Custom limit scrolling is divided into two phases: scrolling at the specified distance inertia, and then scrolling to
 * the target adsorption position through the limit animation. The two callbacks are invoked at the start time of the
 * two phases:
 * - calculateApproachOffset: Called once at the beginning of inertial scrolling.
 * - calculateSnapOffset: Called once before the end of the inertia phase and the start of the limit animation.
 *
 * > **Note: * *
 *
 * > - The unit of offset is vp, and the unit of speed is vp/s.
 * > - Both callbacks are called synchronously in the UI thread and should be used only for calculations, and should not
 * > modify the component layout or application state.
 * > - The callback does not provide the location and size of the item. Developers need to record or calculate the
 * > information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */

declare interface ScrollSnapOffsetProvider {
  /**
   * Callback used to calculate the scrolling distance of the inertia phase. It is called once when the inertia
   * scrolling starts.
   *
   * @param { number } velocity - The speed at which inertial scrolling begins, which is positive when scrolling
   *     towards the end of the content. The reverse layout and RTL direction are handled by the component. <br/>Unit:
   *     vp/s
   * @param { number } decayOffset - Rolls the predicted coasting distance by default inertia.
   *     <br/>Unit: vp
   *     <br>Value range: [0, + △)
   * @returns { number }Rolling distance in the inertia phase, which cannot be NaN or Infinity and can exceed
   *     decayOffset. When a negative number, NaN, or Infinity is returned, or an exception is thrown by a callback, the
   *     stage rolls by the default inertial glide distance and then enters the limit animation phase normally.
   *     <br/>Unit: vp<br/>Value range:[0, + △)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  calculateApproachOffset(velocity: number, decayOffset: number): number;

  /**
   * Callback used to calculate the final suction position, called once before the end of the inertia phase and the
   * start of the limit animation.
   *
   * @param { number } velocity - Remaining speed at the end of inertia scrolling, positive when scrolling towards
   *     the end of the content. Reverse layout and RTL direction are handled by the component. <br/>Unit: vp/s
   * @returns { number }The scrolling offset of the final adsorption position relative to the starting point of the
   *     content, which must be a finite value. The offset along the logical axis towards the end of the content is
   *     positive, and the reverse direction is negative. 0 indicates the start of the content. The actual scrolling
   *     direction is determined by the target position and the current scrolling position. If the target offset is
   *     greater than the current offset, scroll towards the end of the content. If the target offset is less than the
   *     current offset, scroll towards the start of the content. If the target offset is equal, do not scroll. When the
   *     scrollable range is exceeded, the target position is limited to the boundary of the scrollable range. When the
   *     callback returns NaN, Infinity, or throws an exception, the component stops at the current scrolling position.
   *     <br/>Unit: vp<br/>Value range: scrolling offset corresponding to the scrolling range of the component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  calculateSnapOffset(velocity: number): number;
}