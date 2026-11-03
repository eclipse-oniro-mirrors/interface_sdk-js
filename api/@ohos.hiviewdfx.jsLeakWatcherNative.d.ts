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
 * Report information of a raw heap dump result.
 *
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface RawHeapReport {
  /**
   * Process id of the reported application.
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  pid: number;

  /**
   * Happen time of the report, in milliseconds.
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  happenTime: string;

  /**
   * Bundle name of the reported application.
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  module: string;

  /**
   * Leaked object list in JSON string format.
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  leakList: string;

  /**
   * Path of the dynamic raw heap file.
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  dynamicRawheapPath: string;

  /**
   * Path of the static raw heap file.
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  staticRawheapPath: string;

  /**
   * Path of the leak list file.
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  leakListPath: string;

  /**
   * Number of leaked objects.
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  leakObjectCount: number;
}
/**
 * WeakRef callback function, which if called by system.
 *
 * @param { WeakRef<object> } weakRef - WeakRef of one object.
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamiconly
 */
type WeakRefCallback = (weakRef: WeakRef<object>) => void;

/**
 * Window lifecycle callback function, which is called by system when the window has alredy destroyed.
 *
 * @param { window.Window } winObj - Window object which has already destroyed.
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamiconly
 */
type WindowLifeCycleCallback = (winObj: window.Window) => void;

/**
 * Task callback function.
 *
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamiconly
 */
type TaskCallback = () => void;

/**
 * Raw heap dump callback function.
 *
 * @param { int } code - Dump result code.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamiconly
 */
type RawHeapDumpCallback = (code: int) => void;

/**
 * Provides the native implementation interfaces used by jsLeakWatcher.
 *
 * These interfaces are internal implementation details and are exposed as
 * system APIs only. They should not be called directly by third-party
 * applications.
 *
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamiconly
 */
declare namespace jsLeakWatcherNative {
  /**
   * Registers a callback for ArkUI object lifecycle, which is invoked with a
   * weak reference when the object is destroyed.
   *
   * @param { WeakRefCallback } cb - Callback to receive the weak reference of the destroyed object.
   * @returns { boolean } Whether the callback is registered successfully.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function registerArkUIObjectLifeCycleCallback(cb: WeakRefCallback): boolean;

  /**
   * Unregisters the ArkUI object lifecycle callback.
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function unregisterArkUIObjectLifeCycleCallback(): void;

  /**
   * Registers a callback for window lifecycle, which is invoked when a window is destroyed.
   *
   * @param { WindowLifeCycleCallback } cb - Callback to receive the destroyed window object.
   * @returns { boolean } Whether the callback is registered successfully.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function registerWindowLifeCycleCallback(cb: WindowLifeCycleCallback): boolean;

  /**
   * Unregisters the window lifecycle callback.
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function unregisterWindowLifeCycleCallback(): void;

  /**
   * Trigger and start a periodic GC task. When the term expires, the incoming call is automatically triggered.
   *
   * @param { TaskCallback } cb - Callback to execute on each GC event.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function handleGCTask(cb: TaskCallback): void;

  /**
   * Sets the callback of the dump task. After GC, if a leak is determined, the incoming callback is executed.
   *
   * @param { TaskCallback } cb - Callback to execute on each dump event.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function handleDumpTask(cb: TaskCallback): void;

  /**
   * Registers the shutdown task callback.
   *
   * @param { TaskCallback } cb - Callback to execute when jsLeakWatcher is shut down.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function handleShutdownTask(cb: TaskCallback): void;

  /**
   * Stops the periodic GC and dump task loop.
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function removeTask(): void;

  /**
   * Asynchronously dumps the raw heap snapshot to the given file path.
   *
   * @param { string } filePath - Target file path of the raw heap snapshot.
   * @param { RawHeapDumpCallback } cb - Callback to receive the dump result code.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function dumpRawHeap(filePath: string, cb: RawHeapDumpCallback): void;

  /**
   * Synchronously dumps the raw heap snapshot to the given file path.
   *
   * @param { string } filePath - Target file path of the raw heap snapshot.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function dumpRawHeapSync(filePath: string): void;

  /**
   * Sets the interval between each round of GC, in milliseconds.
   *
   * @param { int } delay - GC interval.
   *     <br>Unit: millisecond. . The value should be an integer.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function setGcDelay(delay: int): void;

  /**
   * Sets the delay before executing the dump after GC, in milliseconds.
   *
   * @param { int } delay - Dump delay.
   *     <br>Unit: millisecond. . The value should be an integer.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  function setDumpDelay(delay: int): void;

  /**
   * Obtains the status parameter to determine whether to automatically perform jsleakwatcher detection.
   *
   * @returns { boolean } Indicates whether to automatically execute jsleakwatcher.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function getDumpStatus(): boolean;

  /**
   * Reports the raw heap result through HiSysEvent.
   *
   * @param { RawHeapReport } report - Raw heap report information.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function reportRawHeap(report: RawHeapReport): void;

  /**
   * Records the API call metric. Only takes effect when API metrics are enabled.
   *
   * @param { string } name - Name of the API to record.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function apiRecord(name: string): void;
}

export default jsLeakWatcherNative;