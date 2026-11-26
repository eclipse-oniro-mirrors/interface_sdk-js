'use static'
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
 * The module provides the functionality to create an **AVInputCastPicker** component, which offers a unified entry for discovering and connecting recording devices.
 *
 * > **NOTE**
 * >
 * > - The Preview in DevEco Studio does not support actual recording device selection. To see the real effect, test on a real device. <!--Del-->
 * >
 * > - This component can only be used from the recording device selection screen, which needs to be implemented by OEM vendors.
 * >
 * > - In versions earlier than API version 26.0.0, this component can only be used on PCs and 2-in-1 devices. In API version 26.0.0 and later, this component can also be used on mobile phones and tablets. <!--DelEnd-->
 *
 * ###### Properties
 *
 * The [universal properties]{@link ./@internal/component/ets/common} are supported.
 *
 * ###### Events
 *
 * The [universal events]{@link ./@internal/component/ets/common} are supported.
 *
 * @file AVInputCastPicker
 * @kit AVSessionKit
 */

import { Component } from './arkui/component/customComponent';
import { CustomBuilder, Builder, BuilderParam } from './arkui/component/builder';
import { OnPickerStateCallback } from './@ohos.multimedia.avCastPicker';

/**
 * A picker view to show availale input device list.
 * @struct { AVInputCastPicker }
 * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
 * @since 23 static
 */
@Component
export declare struct AVInputCastPicker {

  /**
   * Set the custom builder for the picker appearance.
   * If not set, system will show the default appearance for different device type.
   * @type { ? CustomBuilder }
   * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
   * @since 23 static
   */
  @BuilderParam
  customPicker?: CustomBuilder;

  /**
   * Picker state change callback.
   * @type { ?OnPickerStateCallback }
   * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
   * @since 23 static
   */
  onStateChange?: OnPickerStateCallback;

   /**
   * The method to build component.
   * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
   * @since 23 staticonly
   */
   @Builder
   build(): void;
}