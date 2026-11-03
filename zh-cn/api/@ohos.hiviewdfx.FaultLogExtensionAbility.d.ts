/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file 故障延迟通知
 * @kit PerformanceAnalysisKit
 */

import type FaultLogExtensionContext from './@ohos.hiviewdfx.FaultLogExtensionContext';

/**
 * 本模块实现故障的延迟通知功能。
 * 
 * [HiAppEvent]{@link @ohos.hiviewdfx.hiAppEvent:hiAppEvent}订阅崩溃、应用冻屏事件时，
 * 只有当应用下次启动后才能接收上一次的事件。如果应用无法启动或长时间未打开，则存在故障无法及时上
 * 报的局限性。
 * 
 * 本模块作为该场景的补充。在应用实现FaultLogExtensionAbility后，当应用发生崩溃或冻屏时，
 * 系统服务预计会在30分钟后拉起FaultLogExtensionAbility。
 * 
 * 开发者可在[onFaultReportReady]{@link FaultLogExtensionAbility#onFaultReportReady}中订阅并处理故障事件。
 *
 * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
 * @stagemodelonly
 * @since 21 dynamic
 * @since 23 static
 */
declare class FaultLogExtensionAbility {
  /**
   * FaultLogExtensionAbility的上下文环境，
   * 继承自[ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
   *
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @stagemodelonly
   * @since 21 dynamic
   * @since 23 static
   */
  context: FaultLogExtensionContext;

  /**
   * FaultLogExtensionAbility回调。系统服务通知FaultLogExtensionAbility可以进行故障处理时，回调此接口，
   * 可以在该方法中订阅故障事件进行处理。
   *
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @stagemodelonly
   * @since 21 dynamic
   * @since 23 static
   */
  onFaultReportReady(): void;

  /**
   * FaultLogExtensionAbility生命周期回调。当系统服务完成连接时调用此接口，用于执行初始化操作，该方法可选择性重写。
   *
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @stagemodelonly
   * @since 21 dynamic
   * @since 23 static
   */
  onConnect(): void;

  /**
   * FaultLogExtensionAbility生命周期回调。当系统服务完成断开连接时调用此接口，
   * 用于释放资源清理运行状态，该方法可选择性重写。
   *
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @stagemodelonly
   * @since 21 dynamic
   * @since 23 static
   */
  onDisconnect(): void;
}
export default FaultLogExtensionAbility;
