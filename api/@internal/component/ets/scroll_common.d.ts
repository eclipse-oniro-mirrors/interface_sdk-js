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
 * Provides custom offsets for two-stage scroll snapping with scrollSnapStrategy in Grid and WaterFlow.
 *
 * Offsets are in vp and velocity is in vp/s. Callbacks are invoked synchronously
 * on the UI thread and must be pure calculations. No layout snapshot is provided;
 * a provider must maintain or derive item geometry itself.
 * velocity is the time derivative of the logical content scroll offset, positive toward
 * the content end. The component normalizes reversed layouts and RTL directions.
 * decayOffset is the non-negative magnitude of the natural friction decay distance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
declare interface ScrollSnapOffsetProvider {
  /**
   * Called once at the start of a fling to determine how far the content scrolls before snapping.
   *
   * The return value is a non-negative finite distance magnitude and may be greater than
   * or equal to decayOffset. A non-finite return value, a negative return value, or a
   * callback exception uses the predicted fling distance instead. The snap phase still follows.
   *
   * @param { number } velocity - Initial fling velocity, positive toward the content end, in vp/s.
   * @param { number } decayOffset - Predicted distance of the default fling, in vp. Always non-negative.
   * @returns { number } Distance to scroll during the fling, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  calculateApproachOffset(velocity: number, decayOffset: number): number;

  /**
   * Called once when the approach motion hands off to the final snap animation.
   *
   * Return a finite target offset on the logical scroll axis. Zero is the content start; offsets are
   * positive toward the content end and negative in the opposite direction. A target outside the
   * scrollable range is clamped to the nearest boundary. If the target exceeds the current offset,
   * the component scrolls toward the content end; if smaller, toward the start. Equal offsets cause no scrolling.
   * If the callback returns a non-finite value or throws an exception, the component stops at its current position.
   *
   * @param { number } velocity - Velocity at the start of this approach stage,
   * positive toward the content end, in vp/s.
   * @returns { number } Absolute target scroll offset, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  calculateSnapOffset(velocity: number): number;
}
