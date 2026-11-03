/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * The **ProgressButtonV2** component is a text-based download button with a progress indicator that shows the download
 * progress.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1),
 * state management V2 delivers enhanced capabilities for deep observation and management of data objects, and is no
 * longer limited to the component level. With state management V2, you can control the data and states of the text
 * download button more flexibly through this component, achieving more efficient UI refresh.
 *
 * Device differences: When this API is used on wearable devices, the application runs abnormally, and the exception
 * information indicates that the API is not defined. On other devices, this API can be called as normal.
 *
 * > **NOTE**
 * >
 * > - If the **ProgressButtonV2** component has [universal attributes]{@link CommonMethod} or
 * > [universal events]{@link CommonMethod} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **ProgressButtonV2** component itself. As a result, the configured universal attributes and
 * > universal events may fail to take effect or behave as intended. For this reason, avoid using universal attributes
 * > and events with the **ProgressButtonV2** component.
 *
 * @file
 * @kit ArkUI
 */

import { LengthMetrics } from './@ohos.arkui.node';
import { ColorMetrics } from './@ohos.arkui.node';

/**
 * Creates a **ProgressButtonV2** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @crossplatform
 * @since 18 dynamic
 */
@ComponentV2
export declare struct ProgressButtonV2 {
  /**
   * Sets the ProgressButtonV2 progress.
   * @type { number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
  @Require
  @Param readonly progress: number;

  /**
   * Sets the ProgressButtonV2 content.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
  @Require
  @Param readonly content: ResourceStr;

  /**
   * Sets the ProgressButtonV2 progressButtonWidth.
   * @type { ?LengthMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
  @Param @Once progressButtonWidth?: LengthMetrics;

  /**
   * Sets the ProgressButtonV2 onClicked.
   * @type { ClickCallback }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
  @Param readonly onClicked: ClickCallback;

  /**
   * Sets the ProgressButtonV2 isEnabled state.
   * @type { boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
  @Param readonly isEnabled: boolean;

  /**
   * Set Color options of the ProgressButtonV2.
   *
   * @type { ?ProgressButtonV2Color }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
  @Param colorOptions?: ProgressButtonV2Color;

  /**
   * Set border rounded corner radius of progress.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param progressButtonRadius?: LengthMetrics;
}

/**
 * Declare ProgressButtonV2 Color.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @crossplatform
 * @since 18 dynamic
 */
@ObservedV2
export declare class ProgressButtonV2Color {
  /**
   * Set progress color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
  @Trace progressColor?: ColorMetrics;

  /**
   * Set border color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
  @Trace borderColor?: ColorMetrics;

  /**
   * Set text color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
  @Trace textColor?: ColorMetrics;

  /**
   * Set background color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
  @Trace backgroundColor?: ColorMetrics;

  /**
   * The constructor of ProgressButtonV2
   *
   * @param options { ProgressButtonV2ColorOptions } the options of the ProgressButtonV2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: ProgressButtonV2ColorOptions);
}

/**
 * Defines ClickCallback of the ProgressButtonV2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @crossplatform
 * @since 18 dynamic
 */
export type ClickCallback = () => void;

/**
 * Declare Color options interface of the ProgressButtonV2.
 *
 * @interface ProgressButtonV2ColorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @crossplatform
 * @since 18 dynamic
 */
export declare interface ProgressButtonV2ColorOptions {
  /**
   * Set progress color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
   progressColor?: ColorMetrics;

  /**
   * Set border color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
   borderColor?: ColorMetrics;

  /**
   * Set text color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
   textColor?: ColorMetrics;

  /**
   * Set background color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @crossplatform
   * @since 18 dynamic
   */
   backgroundColor?: ColorMetrics;
}