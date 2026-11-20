/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
  * @kit NetworkKit
 */

import type VpnExtensionContext from './application/VpnExtensionContext';
import type Want from './@ohos.app.ability.Want';

/**
 * VpnExtensionAbility模块提供三方VPN相关能力，提供三方VPN创建、销毁等生命周期回调。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 11 dynamic
 * @since 26.0.1 static
 */
export default class VpnExtensionAbility {
  /**
   * VpnExtension的上下文环境，继承自[ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 26.0.1 static
   */
  context: VpnExtensionContext;

  /**
   * 在启动三方VPN进行初始化时回调。
   * 
   * > **说明：**
   * >
   * > 建议配对调用[onDestroy]{@link VpnExtensionAbility#onDestroy}监听三方VPN的销毁，执行资源清理等操作。
   *
   * @param { Want } want - 指示要启动的信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 26.0.1 static
   */
  onCreate(want: Want): void;

  /**
   * VpnExtensionAbility生命周期回调，在销毁时回调，执行资源清理等操作。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 26.0.1 static
   */
  onDestroy(): void;
}