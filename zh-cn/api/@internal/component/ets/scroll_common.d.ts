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
 * 为Grid和WaterFlow的scrollSnapStrategy属性提供两阶段限位滚动的自定义偏移量。
 *
 * 偏移量单位为vp，速度单位为vp/s。回调在UI线程同步调用，且必须是纯计算。不提供布局快照；
 * 自定义提供方需要自行维护或推导item几何信息。
 * velocity为逻辑内容滚动偏移量对时间的导数，向内容末端为正；组件负责归一化反向布局和RTL方向。
 * decayOffset为自然摩擦衰减距离的非负幅值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
declare interface ScrollSnapOffsetProvider {
  /**
   * 在惯性滚动开始时调用一次，用于计算进入限位动画前的滚动距离。
   *
   * 返回值为非负有限距离幅值，可以大于或等于decayOffset。
   * 返回非有限值、负数或回调抛出异常时，按默认惯性滚动预测的距离滑行，随后正常进入限位动画阶段。
   *
   * @param { number } velocity - 惯性滚动开始时的速度，向内容末端为正，单位vp/s。
   * @param { number } decayOffset - 按默认惯性滚动预测的滑行距离，单位vp，取值为非负数。
   * @returns { number } 惯性阶段的滚动距离，单位vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  calculateApproachOffset(velocity: number, decayOffset: number): number;

  /**
   * 每次趋近运动切换到最终限位动画时仅调用一次，用于计算目标偏移量。
   *
   * 返回值为逻辑滚动轴上的有限目标偏移量。0表示内容起点，朝内容末端为正，反方向为负。
   * 目标超出可滚动范围时，取最近的边界值。目标偏移量大于当前偏移量时朝内容末端滚动，小于时朝内容起点滚动，相等时不滚动。
   * 返回非有限值或回调抛出异常时，组件在当前滚动位置停止。
   *
   * @param { number } velocity - 本次趋近阶段开始时的速度，向内容末端为正，单位vp/s。
   * @returns { number } 目标滚动绝对偏移量，单位vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  calculateSnapOffset(velocity: number): number;
}
