/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit PerformanceAnalysisKit
 */

import type FaultLogExtensionContext from './@ohos.hiviewdfx.FaultLogExtensionContext';

/**
 * Class of the FaultLog extension ability.
 *
 * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
 * @stagemodelonly
 * @since 21 dynamic
 * @since 22 static
 */
declare class FaultLogExtensionAbility {
  /**
   * Indicates FaultLog extension ability context.
   *
   * @type { FaultLogExtensionContext }
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @stagemodelonly
   * @since 21 dynamic
   * @since 22 static
   */
  context: FaultLogExtensionContext;

  /**
   * Called back when a FaultLog extension is ready to report fault.
   *
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @stagemodelonly
   * @since 21 dynamic
   * @since 22 static
   */
  onFaultReportReady(): void;

  /**
   * Called back when a FaultLog extension is connected.
   *
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @stagemodelonly
   * @since 21 dynamic
   * @since 22 static
   */
  onConnect(): void;

  /**
   * Called back when a FaultLog extension is disconnected.
   *
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @stagemodelonly
   * @since 21 dynamic
   * @since 22 static
   */
  onDisconnect(): void;
}

/**
 * Class of the FaultLog extension ability.
 *
 * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
 * @stagemodelonly
 * @since 21 dynamic
 * @since 22 static
 */
export default FaultLogExtensionAbility;
