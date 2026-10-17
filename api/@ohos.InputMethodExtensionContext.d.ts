/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * ###### Usage
 * <br>
 * <br>Before using the **InputMethodExtensionContext** module, you must define a child class that inherits from
 * **InputMethodExtensionAbility**.
 * <br>
 * <br>```ts
 * <br>import { InputMethodExtensionAbility, InputMethodExtensionContext } from '@kit.IMEKit';
 * <br>import { Want } from '@kit.AbilityKit';
 * <br>class InputMethodExtAbility extends InputMethodExtensionAbility {
 * <br>  onCreate(want: Want): void {
 * <br>    console.info('onCreate, want:' + want.abilityName);
 * <br>  }
 * <br>}
 * <br>```
 *
 * @file InputMethodExtensionContext
 * @kit IMEKit
 */

import { AsyncCallback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import ExtensionContext from './application/ExtensionContext';
import { ConnectOptions } from './ability/connectOptions';

/**
 * The **@ohos.InputMethodExtensionContext** module is the context of **InputMethodExtensionAbility**, inherited from
 * **ExtensionContext**, and provides context-level operation APIs for input method extension capabilities.
 * <br>
 * <br>This module is the context class of the input method **ExtensionAbility**, inherited from **ExtensionContext**, and
 * is provided as the **context** property of an **InputMethodExtensionAbility** instance. It carries the context
 * capabilities that an input method extension app can use during its lifecycle, including destroying itself and
 * starting other apps.
 * <br>
 * <br>This module provides two core capabilities: (1) destroying the input method ExtensionAbility through **destroy()** to
 * terminate the lifecycle of the input method app; (2) starting the target app through **startAbility()** so that the
 * input method app can launch other abilities for interaction, expanding the flexibility and extensibility of input
 * method features.
 * <br>
 * <br>Use this module when you develop an input method ExtensionAbility and need to perform context-level operations during
 * its lifecycle. Typical scenarios include: the input method app actively destroys itself in the **onDestroy**
 * callback, and the input method app needs to start the settings page or other auxiliary apps.
 * <br>
 * <br>The core APIs in this module are divided into two categories by feature:
 * <br>
 * <br>1. Lifecycle management: **destroy()** is used to destroy the input method ExtensionAbility and terminate the input method app.
 * 2. Ability interaction: **startAbility()** is used to start a target ability (such as a settings page) from the input method app,
 * extending the interaction between the input method app and other apps.
 * <br>
 * <br>Typical usage process: obtain **this.context** in the **onCreate** callback of **InputMethodExtensionAbility** → call
 * **context.destroy()** when the input method needs to be terminated → call **context.startAbility(want)** when another
 * app needs to be started.
 * <br>
 *  Name | Description |
 * |---|---|
 * | InputMethodExtensionContext | Input method extension context class inherited from **ExtensionContext**, which provides context‑level operation
 * capabilities for **InputMethodExtensionAbility**. Key methods include: **destroy()** for destroying the input method
 * itself (supports both callback‑based and promise‑based asynchronous modes), and **startAbility(want)** for starting a target app (promise‑based,
 * added since API version 12). |
 * <br>
 * <br>The **InputMethodExtensionContext** of this module must be obtained from a child class instance of
 * **InputMethodExtensionAbility**. Its APIs are used in combination with the lifecycle callbacks of
 * **InputMethodExtensionAbility**.
 * <br>
 * <br> > **NOTE**
 * <br> >
 * <br> > The `InputMethodExtensionContext` instance is obtained through the `this.context` property of an
 * <br> > `InputMethodExtensionAbility` child class and cannot be created directly. `destroy()` is usually called in the
 * <br> > `onDestroy` lifecycle callback, and you can also proactively call it at other times to terminate the input method
 * <br> > ExtensionAbility.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare class InputMethodExtensionContext extends ExtensionContext {
  /**
   * Destroys this input method. This API uses an asynchronous callback to return the result.
   * <br>
   * <br>- Meaning/Function: Destroys the current **InputMethodExtensionAbility** and terminates the running of the input
   * method app. After the call, the system triggers the **InputMethodExtensionAbility.onDestroy()** lifecycle callback.
   * <br>- Usage scenarios: Used when the input method app needs to actively terminate its own running. For example, the
   * input method app actively exits after completing a specific task, or performs cleanup logic within the
   * **onDestroy** callback to ensure resource release.
   * <br>- Use effect: After the call succeeds, the current **InputMethodExtensionAbility** is destroyed, the system
   * triggers the **onDestroy()** lifecycle callback, and the input method app process is terminated. Any subsequent
   * context operations after the call will no longer take effect.
   *
   * @param { AsyncCallback<void> } callback - Callback function. If the input method app is destroyed successfully, err
   * is undefined; otherwise, it is an error object.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  destroy(callback: AsyncCallback<void>): void;

  /**
   * Destroys this input method. This API uses a promise to return the result.
   * <br>
   * <br>- Meaning/Function: Destroys the current **InputMethodExtensionAbility** and terminates the running of the input
   * method app. After the call, the system triggers the **InputMethodExtensionAbility.onDestroy()** lifecycle callback.
   * <br>- Usage scenarios: Used when the input method app needs to actively terminate its own running. It provides the same
   * functionality and form as the callback and is suitable for scenarios that require promise chaining.
   * <br>- Use effect: After the call succeeds, the current **InputMethodExtensionAbility** is destroyed, the system
   * triggers the **onDestroy()** lifecycle callback, and the input method app process is terminated.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  destroy(): Promise<void>;

  /**
   * Destroys this input method extension. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   * **err** is **undefined**. Otherwise, **err** is an error object.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead InputMethodExtensionContext.destroy(callback: AsyncCallback<void>)
   */
  terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * Destroys this input method extension. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead InputMethodExtensionContext.destroy()
   */
  terminateSelf(): Promise<void>;

  /**
   * Starts an ability. This API uses a promise to return the result.
   * <br>
   * <br>- Meaning/Function: Starts a specified ability from the input method app, enabling the input method app to interact
   * with other apps. The **want** parameter specifies the ability name and bundle name of the target app.
   * <br>- Usage scenarios: Used when the input method app needs to launch other apps. For example, the input method app
   * launches the system settings page for users to configure the input method, or launches a browser to open help
   * documents.
   * <br>- Use effect: After the call succeeds, the target ability is started and displayed in the foreground. The input
   * method app itself is not affected and continues to run normally.
   *
   * @param { Want } want - Want type information used to specify the target app, including the ability name, bundle
   * name, and so on.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000019 - No matching ability is found.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000069 - The extension cannot start the third party application.
   * @throws { BusinessError } 16000070 - The extension cannot start the service.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  startAbility(want: Want): Promise<void>;

  /**
   * Starts an ability with a specified account. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target ability.
   * @param { number } accountId - ID of the target system account.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the starting is successful,
   * **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   * 2. System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  startAbilityWithAccount(want: Want, accountId: number, callback: AsyncCallback<void>): void;

  /**
   * Starts an ability with a specified account. This API uses a promise to return the result.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target ability.
   * @param { number } accountId - ID of the target system account.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   * 2. System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  startAbilityWithAccount(want: Want, accountId: number): Promise<void>;

  /**
   * Connects this ability to a ServiceExtensionAbility.
   *
   * @param { Want } want - Want information about the target ability, such as the ability name and bundle name.
   * @param { ConnectOptions } options - Callback used to return the information indicating that the connection is
   * successful, interrupted, or failed.
   * @returns { number } A number, based on which the connection will be interrupted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   * 2. System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed. [since 10]
   * @throws { BusinessError } 16000008 - The crowdtesting application expires. [since 10]
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI. [since 10]
   * @throws { BusinessError } 16000055 - Installation-free timed out. [since 10]
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  connectAbility(want: Want, options: ConnectOptions): number;

  /**
   * Connects to a ServiceExtensionAbility with a specified account.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target ability.
   * @param { number } accountId - ID of the target system account.
   * @returns { number } Result code of the connection.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   * 2. System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed. [since 10]
   * @throws { BusinessError } 16000008 - The crowdtesting application expires. [since 10]
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI. [since 10]
   * @throws { BusinessError } 16000055 - Installation-free timed out. [since 10]
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  connectAbilityWithAccount(want: Want, accountId: number): number;

  /**
   * Connects this ability to a ServiceExtensionAbility.
   *
   * @param { Want } want - Want information about the target ability, such as the ability name and bundle name.
   * @param { ConnectOptions } options - Callback used to return the information indicating that the connection is
   * successful, interrupted, or failed.
   * @returns { number } A number, based on which the connection will be interrupted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   * 2. System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed. [since 10]
   * @throws { BusinessError } 16000008 - The crowdtesting application expires. [since 10]
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI. [since 10]
   * @throws { BusinessError } 16000055 - Installation-free timed out. [since 10]
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  connectServiceExtensionAbility(want: Want, options: ConnectOptions): number;

  /**
   * Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote
   * object returned upon the connection to void. This API uses an asynchronous callback to return the result.
   *
   * @param { number } connection - Number returned after **connectServiceExtensionAbility** is called.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If disconnection is successful,
   * **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   * 2. System service failed to communicate with dependency module.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  disconnectAbility(connection: number, callback: AsyncCallback<void>): void;

  /**
   * Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote
   * object returned upon the connection to void. This API uses a promise to return the result.
   *
   * @param { number } connection - Number returned after **connectServiceExtensionAbility** is called.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   * 2. System service failed to communicate with dependency module.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  disconnectAbility(connection: number): Promise<void>;

  /**
   * Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote
   * object returned upon the connection to void. This API can be called only on the main thread.  This API uses an
   * asynchronous callback to return the result.
   *
   * @param { number } connection - Number returned after **connectServiceExtensionAbility** is called.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If disconnection is successful,
   * **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   * 2. System service failed to communicate with dependency module.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  disconnectServiceExtensionAbility(connection: number, callback: AsyncCallback<void>): void;

  /**
   * Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote
   * object returned upon the connection to void. This API can be called only on the main thread. This API uses a
   * promise to return the result.
   *
   * @param { number } connection - Number returned after **connectServiceExtensionAbility** is called.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   * 2. System service failed to communicate with dependency module.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  disconnectServiceExtensionAbility(connection: number): Promise<void>;
}

export default InputMethodExtensionContext;