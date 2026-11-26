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
 * @file 自动填充扩展上下文
 * @kit AbilityKit
 */

import { ConnectOptions } from '../ability/connectOptions';
import Want from '../@ohos.app.ability.Want';
import ExtensionContext from './ExtensionContext';
/*** if arkts dynamic */
import type CustomData from './CustomData';
/*** endif */
/*** if arkts static */
import CustomData from './CustomData';
/*** endif */

/**
 * AutoFillExtensionContext模块是AutoFillExtensionAbility的上下文环境，继承自
 * [ExtensionContext]{@link ExtensionContext:ExtensionContext}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare class AutoFillExtensionContext extends ExtensionContext {
  /**
   * 重新拉起模态页面。使用Promise异步回调。
   *
   * @param { CustomData } customData - 拉起模态页面时的自定义信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  reloadInModal(customData: CustomData): Promise<void>;

  /**
   * 将当前AutoFillExtensionAbility连接到一个ServiceExtensionAbility，通过返回的proxy与ServiceExtensionAbility进行通信，
   * 以使用ServiceExtensionAbility对外提供的能力。
   * ServiceExtensionAbility是一类特殊的[ExtensionAbility](docroot://application-models/extensionability-overview.md)组件，
   * 由系统提供，通常用于提供指定场景的后台服务能力，不支持开发者自定义。ServiceExtensionAbility可以被其他组件连接，
   * 并根据调用者的请求信息在后台处理相关事务。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 连接ServiceExtensionAbility的Want信息，包括Ability名称、Bundle名称等。
   * @param { ConnectOptions } options - 回调函数，返回服务连接成功、连接失败、断开的信息。
   * @returns { long } 返回连接id，客户端可以通过
   *     [disconnectServiceExtensionAbility]{@link AutoFillExtensionContext.disconnectServiceExtensionAbility(connection: long)}
   *     传入该连接id来断开连接。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   *     2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16000070 - The extension cannot start the service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  connectServiceExtensionAbility(want: Want, options: ConnectOptions): long;

  /**
   * 断开与ServiceExtensionAbility的连接，断开连接之后开发者需要将连接成功时返回的remote对象置空。使用Promise异步回调。
   * ServiceExtensionAbility是一类特殊的[ExtensionAbility](docroot://application-models/extensionability-overview.md)组件，
   * 由系统提供，通常用于提供指定场景的后台服务能力，不支持开发者自定义。ServiceExtensionAbility可以被其他组件连接，
   * 并根据调用者的请求信息在后台处理相关事务。
   *
   * @param { long } connection - 连接的ServiceExtensionAbility的标识Id，即
   *     [connectServiceExtensionAbility]{@link AutoFillExtensionContext#connectServiceExtensionAbility}返回的connectionId。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  disconnectServiceExtensionAbility(connection: long): Promise<void>;
}

export default AutoFillExtensionContext;