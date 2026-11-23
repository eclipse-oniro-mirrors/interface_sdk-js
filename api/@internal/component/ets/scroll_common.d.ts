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
 * Provides custom snap-scroll distances and snap positions. This interface applies to the
 * scrollSnapStrategy attribute of the Grid, WaterFlow, and List components; implement the
 * interface and pass the object to scrollSnapStrategy to use it.
 * For a complete example, see [Example 24: Customizing the Scroll Snap Position](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-24-customizing-the-scroll-snap-position).
 *
 * Custom snap scrolling has two stages: the component first scrolls by inertia for the
 * specified distance, then scrolls to the target snap position through a snap animation.
 * The two callbacks are invoked at the start of each stage:
 * - calculateApproachOffset: invoked once when the inertial scrolling starts.
 * - calculateSnapOffset: invoked once when the inertial stage ends, before the snap
 *   animation starts.
 *
 * Notes:
 * - Offsets are in vp and velocity is in vp/s.
 * - Both callbacks are invoked synchronously on the UI thread and must be used for
 *   calculation only; do not modify component layout or application state.
 * - The callbacks do not provide item positions or sizes; record or derive this
 *   information yourself.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
declare interface ScrollSnapOffsetProvider {
  /**
   * Callback that computes the inertial scroll distance, invoked once when the inertial
   * scrolling starts.
   *
   * @param { number } velocity - Velocity at the start of the inertial scrolling, positive
   *     toward the content end. Reversed layouts and RTL directions are normalized by the component.
   *     Unit: vp/s.
   * @param { number } decayOffset - Glide distance predicted by the default inertial scrolling.
   *     Unit: vp.
   *     Value range: [0, +∞).
   * @returns { number } Inertial scroll distance, which must not be NaN or Infinity and may exceed decayOffset. When a negative
   *     value, NaN, or Infinity is returned, or the callback throws an exception, this stage scrolls by the default inertial
   *     glide distance and then enters the snap animation stage normally.
   *     Unit: vp.
   *     Value range: [0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  calculateApproachOffset(velocity: number, decayOffset: number): number;

  /**
   * Callback that computes the final snap position, invoked once when the inertial stage
   * ends, before the snap animation starts.
   *
   * @param { number } velocity - Residual velocity at the end of the inertial scrolling, positive
   *     toward the content end. Reversed layouts and RTL directions are normalized by the component.
   *     Unit: vp/s.
   * @returns { number } Scroll offset of the final snap position relative to the content start, which must be a finite value.
   *     Along the logical main axis, offsets are positive toward the content end, negative in the opposite direction, and 0
   *     indicates the content start. The actual scroll direction depends on the target and current positions: the component
   *     scrolls toward the content end when the target is greater, toward the content start when smaller, and does not scroll
   *     when they are equal. Targets outside the scrollable range are clamped to the range boundary. When the callback returns
   *     NaN or Infinity or throws an exception, the component stops at the current position.
   *     Unit: vp.
   *     Value range: scroll offsets within the scrollable range of the component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  calculateSnapOffset(velocity: number): number;
}
