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
 * 用于自定义限位滚动的距离和吸附位置。此接口适用于[Grid](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md)、[WaterFlow](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md)和[List](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md)组件的scrollSnapStrategy属性，
 * 开发者实现接口后，将对象传入scrollSnapStrategy即可使用。
 * 完整示例参考[示例24（自定义滚动吸附位置）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例24自定义滚动吸附位置)。
 *
 * 自定义限位滚动分为两个阶段：先按指定的距离惯性滚动，再通过限位动画滚动到目标吸附位置。
 * 两个回调分别在两个阶段的起始时机调用：
 * - [calculateApproachOffset](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#calculateapproachoffset)：在惯性滚动开始时调用一次。
 * - [calculateSnapOffset](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#calculatesnapoffset)：在惯性阶段结束、限位动画开始前调用一次。
 *
 * 使用时请注意：
 * - 偏移量的单位是vp，速度的单位是vp/s。
 * - 两个回调均在UI线程同步调用，应仅用于计算，不应修改组件布局或应用状态。
 * - 回调不提供item的位置和尺寸，开发者需要自行记录或计算这些信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
declare interface ScrollSnapOffsetProvider {
  /**
   * 用于计算惯性阶段滚动距离的回调，在惯性滚动开始时调用一次。
   *
   * @param { number } velocity - 惯性滚动开始时的速度，朝内容末端滚动时为正。反向布局和RTL方向由组件统一处理。
   *     单位：vp/s。
   * @param { number } decayOffset - 按默认惯性滚动预测的滑行距离。
   *     单位：vp。
   *     取值范围：[0, +∞)。
   * @returns { number } 惯性阶段的滚动距离，不能为NaN或Infinity，可以超过decayOffset。返回负数、NaN或Infinity，或回调抛出异常时，
   *     该阶段按默认的惯性滑行距离滚动，随后正常进入限位动画阶段。
   *     单位：vp。
   *     取值范围：[0, +∞)。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  calculateApproachOffset(velocity: number, decayOffset: number): number;

  /**
   * 用于计算最终吸附位置的回调，在惯性阶段结束、限位动画开始前调用一次。
   *
   * @param { number } velocity - 惯性滚动结束时的剩余速度，朝内容末端滚动时为正。反向布局和RTL方向由组件统一处理。
   *     单位：vp/s。
   * @returns { number } 最终吸附位置相对内容起点的滚动偏移量，必须为有限数值。沿逻辑主轴朝内容末端方向偏移为正，反方向为负，0表示内容起点。
   *     实际滚动方向由目标位置与当前滚动位置决定：目标偏移量大于当前偏移量时朝内容末端滚动，小于时朝内容起点滚动，相等时不滚动。
   *     超出可滚动范围时，目标位置限制在可滚动范围的边界。回调返回NaN、Infinity或抛出异常时，组件在当前滚动位置停止。
   *     单位：vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  calculateSnapOffset(velocity: number): number;
}
