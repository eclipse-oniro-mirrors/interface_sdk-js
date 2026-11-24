/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * 本模块提供创建录音设备选择组件AVInputCastPicker的功能，提供录音设备发现与连接的统一入口。
 * 
 * > **说明：**
 * >
 * > - 示例效果请以真机为准，当前DevEco Studio预览器无实际录音设备选择功能。<!--Del-->
 * >
 * > - 当前组件的使用，依赖于设备支持“录音设备选择界面”。当前暂无OpenHarmony设备支持，需要OEM厂商实现具体的“录音设备选择界面”。
 * >
 * > - API版本26.0.0之前，此组件仅支持在PC/2in1上使用；API版本26.0.0及之后，此组件新增支持在手机、平板上使用。<!--DelEnd-->
 * 
 * ###### 属性
 * 
 * 支持[通用属性]{@link ./@internal/component/ets/common}。
 * 
 * ###### 事件
 * 
 * 支持[通用事件]{@link ./@internal/component/ets/common}。
 *
 * @file 录音设备选择组件
 * @kit AVSessionKit
 */

import { AVCastPickerState } from './@ohos.multimedia.avCastPickerParam';

/**
 * 录音设备选择组件，可用于切换音频输入设备。
 *
 * 该组件为自定义组件，开发者在使用前需要先了解[@Component](docroot://ui/state-management/arkts-create-custom-components.md#component)。
 *
 * @struct { AVInputCastPicker }
 * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
 * @atomicservice
 * @since 20 dynamic
 */
@Component
export declare struct AVInputCastPicker {

  /**
   * 自定义样式。建议开发者自定义组件样式，可有效提升组件渲染性能。
   *
   * @type { ? CustomBuilder }
   * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
   * @atomicservice
   * @since 20 dynamic
   */
  @Prop
  customPicker?: CustomBuilder;

  /**
   * 设备列表状态变更回调。
   *
   * @type { ?OnPickerStateCallback }
   * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
   * @atomicservice
   * @since 20 dynamic
   */
  onStateChange?: OnPickerStateCallback;
}

/**
 *
 * @typedef { function } OnPickerStateCallback
 * @param { AVCastPickerState } state - 设备列表状态。
 * @returns { void }
  * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
 * @atomicservice
 * @since 20 dynamic
 */
export type OnPickerStateCallback =  (state: AVCastPickerState) => void;