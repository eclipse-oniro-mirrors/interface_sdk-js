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
 * 提供可滚动组件两阶段滚动限位偏移量。
 *
 * 偏移量单位为vp，速度单位为vp/s。回调在UI线程同步调用，且必须是纯计算。不提供布局快照；
 * 自定义提供方需要自行维护或推导item几何信息。
 * velocity为逻辑内容滚动偏移量对时间的导数，向内容末端为正；组件负责归一化反向布局和RTL方向。
 * decayOffset为自然摩擦衰减距离的非负幅值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.2.0 static
 */
export declare interface ScrollSnapOffsetProvider {
  /**
   * 每次惯性滚动期间仅调用一次，用于计算趋近偏移量。
   *
   * 返回值为非负有限距离幅值，可以大于或等于decayOffset。
   * 返回非有限值、负数或回调异常时回退到自然衰减偏移量。
   *
   * @param { double } velocity - 当前惯性滚动速度，向内容末端为正，单位vp/s。
   * @param { double } decayOffset - 自然摩擦衰减距离的非负幅值，单位vp。
   * @returns { double } 趋近偏移量大小，单位vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.2.0 static
   */
  calculateApproachOffset(velocity: double, decayOffset: double): double;

  /**
   * 每次趋近运动切换到最终限位动画时仅调用一次，用于计算目标偏移量。
   *
   * 返回值为绝对内容滚动目标，0是合法目标；有限目标超出合法滚动范围时会被限制到范围内。
   * 返回非有限值或回调异常时，使用组件的兜底目标。Grid自定义策略保持在趋近阶段结束位置，
   * 不返回手势起始位置。
   *
   * @param { double } velocity - 本次趋近阶段开始时的速度，向内容末端为正，单位vp/s。
   * @returns { double } 目标滚动绝对偏移量，单位vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.2.0 static
   */
  calculateSnapOffset(velocity: double): double;
}
