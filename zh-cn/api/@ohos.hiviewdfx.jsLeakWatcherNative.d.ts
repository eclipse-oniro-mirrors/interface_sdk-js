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
 * @overview Provided interfaces are internal implementation details of jsleawatcher and are exposed as
 * system APIs only. They should not be called directly by any other applications instead of the jsLeakWatcher itself.
 * @file This module provides the native implementation interfaces of jsLeakWatcher.
 * @kit PerformanceAnalysisKit
 */

import window from '@ohos.window';

/**
 * rawheap堆导出时打点上报
 *
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface RawHeapReport {
  /**
   * 进程pid。
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  pid: number;

  /**
   * 发生时间。
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  happenTime: string;

  /**
   * 应用包名。
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  module: string;

  /**
   * 泄漏对象列表。
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  leakList: string;

  /**
   * arkts动态语言rawheap堆路径。
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  dynamicRawheapPath: string;

  /**
   * arkts静态堆rawheap路径。
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  staticRawheapPath: string;

  /**
   * 记录泄漏对象列表的文件路径。
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  leakListPath: string;

  /**
   * 泄漏对象的个数。
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  leakObjectCount: number;
}
/**
 * 接收被销毁对象的弱引用的回调
 *
 * @param { WeakRef<object> } weakRef - WeakRef of one object.
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamiconly
 */
type WeakRefCallback = (weakRef: WeakRef<object>) => void;

/**
 * 接收生命周期已结束的window对象的回调
 *
 * @param { window.Window } winObj - 已销毁的窗口对象。
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamiconly
 */
type WindowLifeCycleCallback = (winObj: window.Window) => void;

/**
 * 任务回调函数
 *
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamiconly
 */
type TaskCallback = () => void;

/**
 * 导出堆快照的回调函数
 *
 * @param { int } code - 导出结果码。
 *     取值限定为整数
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamiconly
 */
type RawHeapDumpCallback = (code: int) => void;

/**
 * 提供jsleakwatcher依赖的native能力的封装
 *
 * 这些接口是内部实现细节，暴露为仅系统API。第三方不应该直接调用它们
 *
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamiconly
 */
declare namespace jsLeakWatcherNative {
  /**
   * 注册ArkUI对象生命周期的回调
   *
   * @param { WeakRefCallback } cb - 接收被销毁对象的弱引用的回调。
   * @returns { boolean } 回调是否注册成功
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function registerArkUIObjectLifeCycleCallback(cb: WeakRefCallback): boolean;

  /**
   * 取消注册ArkUI对象生命周期回调
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function unregisterArkUIObjectLifeCycleCallback(): void;

  /**
   * 注册窗口生命周期的回调
   *
   * @param { WindowLifeCycleCallback } cb - 接收生命周期已结束的window对象的回调。
   * @returns { boolean } 回调是否注册成功
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function registerWindowLifeCycleCallback(cb: WindowLifeCycleCallback): boolean;

  /**
   * 取消注册窗口生命周期回调
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function unregisterWindowLifeCycleCallback(): void;

  /**
   * 触发并启动周期性GC任务。当期限到期时，自动触发传入的调用。
   *
   * @param { TaskCallback } cb - GC事件的回调。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function handleGCTask(cb: TaskCallback): void;

  /**
   * 设置导出任务的回调。在GC之后，如果确定有泄漏，则执行传入的回调。
   *
   * @param { TaskCallback } cb - 导出事件的回调。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function handleDumpTask(cb: TaskCallback): void;

  /**
   * 注册停止jsleakwatcher任务回调。
   *
   * @param { TaskCallback } cb - jsLeakWatcher停止时执行的回调。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function handleShutdownTask(cb: TaskCallback): void;

  /**
   * 停止周期性GC和dump任务循环。
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function removeTask(): void;

  /**
   * 异步导出堆快照到给定的文件路径。
   *
   * @param { string } filePath - 原始堆快照的目标文件路径。
   * @param { RawHeapDumpCallback } cb - 接收导出结果的回调。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function dumpRawHeap(filePath: string, cb: RawHeapDumpCallback): void;

  /**
   * 同步导出ArkTS堆快照。
   *
   * @param { string } filePath - 堆快照的目标文件路径。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function dumpRawHeapSync(filePath: string): void;

  /**
   * 设置每轮GC之间的时间间隔，单位为毫秒。
   *
   * @param { int } delay - GC时间间隔。
   *     <br>单位为：毫秒。取值限定为整数。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function setGcDelay(delay: int): void;

  /**
   * 设置GC后执行dump之前的延迟时间，单位为毫秒。
   *
   * @param { int } delay - 转储延迟。
   *     <br>单位为：毫秒。取值限定为整数。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function setDumpDelay(delay: int): void;

  /**
   * 获取状态参数，决定是否要自动执行jsleakwatcher的检测。
   *
   * @returns { boolean } 是否要自动执行jsleakwatcher。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function getDumpStatus(): boolean;

  /**
   * 上报快照导出的结果。
   *
   * @param { RawHeapReport } report - 堆快照导出的信息。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function reportRawHeap(report: RawHeapReport): void;

  /**
   * 上报API打点
   *
   * @param { string } name - API的名字。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function apiRecord(name: string): void;
}

export default jsLeakWatcherNative;