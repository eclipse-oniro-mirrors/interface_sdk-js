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
 * @file Auto Fill Extension Context
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
 * The AutoFillExtensionContext module provides the context environment for the AutoFillExtensionAbility. It inherits 
 * from [ExtensionContext]{@link ExtensionContext:ExtensionContext}.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare class AutoFillExtensionContext extends ExtensionContext {
  /**
   * Reloads the modal page. This API uses a promise to return the result.
   *
   * @param { CustomData } customData - Custom information for raising the modal page.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Connects this AutoFillExtensionAbility to a ServiceExtensionAbility. It enables communication with the
   * ServiceExtensionAbility via a proxy, allowing access to the capabilities exposed by the ServiceExtensionAbility.
   * ServiceExtensionAbility is a special type of
   * [ExtensionAbility](docroot://application-models/extensionability-overview.md) provided by the system. It is
   * designed to offer background services for specific scenarios and is not customizable by developers. It can be
   * connected to by other components and handles requests in the background based on the caller information.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information required for connecting to the ServiceExtensionAbility, including the
   *     ability name and bundle name.
   * @param { ConnectOptions } options - Callback used to return the information indicating that the connection is
   *     successful, failed, or interrupted.
   * @returns { long } Connection ID. The client can call
   *     [disconnectServiceExtensionAbility]{@link AutoFillExtensionContext.disconnectServiceExtensionAbility(connection: long)}
   *     with this ID for disconnection.
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
   * Disconnects from a ServiceExtensionAbility. Once the connection is terminated, set the remote object, which is
   * returned when the connection is established, to null. This API uses a promise to return the result.
   * ServiceExtensionAbility is a special type of
   * [ExtensionAbility](docroot://application-models/extensionability-overview.md) provided by the system. It is
   * designed to offer background services for specific scenarios and is not customizable by developers. It can be
   * connected to by other components and handles requests in the background based on the caller information.
   *
   * @param { long } connection - ID of the connected ServiceExtensionAbility, that is, **connectionId** returned by
   *     [connectServiceExtensionAbility]{@link AutoFillExtensionContext#connectServiceExtensionAbility}.
   * @returns { Promise<void> } Promise that returns no value.
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