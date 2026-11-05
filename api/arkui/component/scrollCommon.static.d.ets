'use static'
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
 * Provides offsets for a two-stage scroll snap of a scrollable component.
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
 * @since 26.1.0 static
 */
export declare interface ScrollSnapOffsetProvider {
  /**
   * Called once during a fling to determine the approach offset.
   *
   * The return value is a non-negative finite distance magnitude and may be greater than
   * or equal to decayOffset. A non-finite return value, a negative return value, or a
   * callback exception falls back to the natural decay offset.
   *
   * @param { double } velocity - Current fling velocity, positive toward the content end, in vp/s.
   * @param { double } decayOffset - Non-negative natural friction decay distance magnitude, in vp.
   * @returns { double } Approach offset magnitude, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.1.0 static
   */
  calculateApproachOffset(velocity: double, decayOffset: double): double;

  /**
   * Called once when the approach motion hands off to the final snap animation.
   *
   * The return value is an absolute content scroll target; 0 is valid. A finite target
   * outside the legal scroll range is clamped to that range.
   * A non-finite return value or a callback exception uses the component fallback target.
   * A Grid custom strategy stays at the approach endpoint without returning to the gesture start position.
   *
   * @param { double } velocity - Velocity at the start of this approach stage,
   * positive toward the content end, in vp/s.
   * @returns { double } Absolute target scroll offset, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.1.0 static
   */
  calculateSnapOffset(velocity: double): double;
}
