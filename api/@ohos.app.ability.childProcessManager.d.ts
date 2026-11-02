/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @file Child Process Management
 * @kit AbilityKit
 */

import type { AsyncCallback } from './@ohos.base';
import type { ChildProcessArgs } from './@ohos.app.ability.ChildProcessArgs';
import type { ChildProcessOptions } from './@ohos.app.ability.ChildProcessOptions';
import type { ChildProcessInformation as _ChildProcessInformation } from './application/ChildProcessInformation';

/**
 * The childProcessManager module provides the child process management capability. Currently, it provides APIs to
 * create and start a child process
 * The created child process will exit when the parent process exits and cannot run independently.
 *
 * > **NOTE**
 * >
 * > The initial APIs of this module are supported since API version 11. Newly added APIs will be marked with a
 * > superscript to indicate their earliest API version.
 * >
 * > The APIs of this module can be used only in the stage model.
 *
 * ###### Constraints
 *
 * ###### Functional Limitations
 *
 * - The created child process does not support creating a UI.
 * - The created child process does not support API calls that depend on Context (including the APIs of the Context
 *  module itself and APIs that take a Context instance as an input parameter).
 * - Child processes can be created only in the main process. A child process does not support creating child
 *  processes again.
 *
 * ###### Specification Limits
 *
 * - A maximum of 512 child processes can be started by using the APIs of this module and the APIs defined in
 *  native_child_process.h(as long as system resources are sufficient). The child processes started by
 *  [startChildProcess]{@link childProcessManager.startChildProcess(srcEntry: string, startMode: StartMode)}
 *  in SELF_FORK mode are not counted.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace childProcessManager {

  /**
   * Enumerates the child process start modes.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export const enum StartMode {

    /**
     * The child process is forked from the application process. The child process started in this mode inherits the
     * resources of the parent process and cannot use Binder IPC to communicate with other processes. Otherwise, the
     * child process will crash.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    SELF_FORK = 0,

    /**
     * The child process is forked from AppSpawn. The child process started in this mode does not inherit the resources
     * of the parent process and can use Binder IPC to communicate with other processes.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    APP_SPAWN_FORK = 1
  }

  /**
   * Defines the child process information.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  export type ChildProcessInformation = _ChildProcessInformation;

  /**
   * Starts an [ArkTS child process](docroot://application-models/ability-terminology.md#arkts-child-process). This API
   * uses a promise to return the result.
   * This API can be properly called on PCs/2-in-1 devices and tablets. If it is called on other devices, error code 160
   * 00061 is returned.
   *
   * > **NOTE**
   * >
   * > If the child process is created successfully, its PID is returned, and its
   * > [ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart} function is executed. Once the
   * > function is done, the child process is automatically destroyed.
   * >
   * > The child process started by calling this API does not support asynchronous ArkTS API calls. It supports only
   * > synchronous ArkTS API calls.
   *
   * @param { string } srcEntry - Path of the source file of the child process relative to the root directory
   *     **src/main**. The source file can be stored only in the module of the entry type. For example, if the source
   *     file of a child process is **src/main/ets/process/DemoProcess.ets** in the entry module, then **srcEntry** is
   *     **./ets/process/DemoProcess.ets**.<br>In addition, ensure that the source file of the child process is
   *     referenced by other files to prevent it from being optimized by the build tool. (For details, see the
   *     sample code below.)
   * @param { StartMode } startMode - Startup mode of the child process. SELF_FORK (value 0): forks the child process
   *     from the app's own process, inherits the parent process resources, and cannot use Binder IPC to communicate
   *     with other processes; otherwise, the child process crashes and exits. APP_SPAWN_FORK (value 1): forks the
   *     child process from AppSpawn, does not inherit the parent process resources, and can use Binder IPC to
   *     communicate with other processes.
   * @returns { Promise<int> } Promise used to return the PID of the child process.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child processes exceeds the upper limit.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function startChildProcess(srcEntry: string, startMode: StartMode): Promise<int>;

  /**
   * Starts an [ArkTS child process](docroot://application-models/ability-terminology.md#arkts-child-process). This API
   * uses an asynchronous callback to return the result.
   * This API can be properly called on PCs/2-in-1 devices and tablets. If it is called on other devices, error code 160
   * 00061 is returned.
   *
   * > **NOTE**
   * >
   * > If the child process is created successfully, its PID is returned, and its
   * > [ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart} function is executed. Once the
   * > function is done, the child process is automatically destroyed.
   * >
   * > The child process started by calling this API does not support asynchronous ArkTS API calls. It supports only
   * > synchronous ArkTS API calls.
   *
   * @param { string } srcEntry - Path of the source file of the child process relative to the root directory
   *     **src/main**. The source file can be stored only in the module of the entry type. For example, if the source
   *     file of a child process is **src/main/ets/process/DemoProcess.ets** in the entry module, then **srcEntry** is
   *     **./ets/process/DemoProcess.ets**.<br>In addition, ensure that the source file of the child process is
   *     referenced by other files to prevent it from being optimized by the build tool. (For details, see the
   *     sample code below.)
   * @param { StartMode } startMode - Start mode of the child process. SELF_FORK (value 0): forks the child process
   *     from the app's own process, inherits the parent process resources, and cannot use Binder IPC to communicate
   *     with other processes; otherwise, the child process crashes and exits. APP_SPAWN_FORK (value 1): forks the
   *     child process from AppSpawn, does not inherit the parent process resources, and can use Binder IPC to
   *     communicate with other processes.
   * @param { AsyncCallback<int> } callback - Callback used to return the result. If the subprocess is started,
   *     **err** is **undefined** and **data** is the PID of the child process. Otherwise, **data** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child processes exceeds the upper limit.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function startChildProcess(srcEntry: string, startMode: StartMode, callback: AsyncCallback<int>): void;

  /**
   * Starts an [ArkTS child process](docroot://application-models/ability-terminology.md#arkts-child-process). This API
   * uses a promise to return the result.
   * This API can be properly called on PCs/2-in-1 devices and tablets. If it is called on other devices, error code 801
   *  is returned.
   *
   * > **NOTE**
   * >
   * > The child process started by calling this API does not inherit the resources of the parent process. If the child
   * > process is created successfully, its PID is returned, and its
   * > [ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart} function is executed. After the
   * > function is done, the child process is not automatically destroyed. Instead, it must be destroyed by calling
   * > [process.abort]{@link @ohos.process:process.abort}. After the process that calls this API is destroyed, the
   * > created child process is also destroyed.
   * >
   * > The child process created by calling this API supports asynchronous ArkTS API calls.
   *
   * @param { string } srcEntry - Path of the source file of the child process relative to the root directory
   *     **src/main**. The source file cannot be stored in the module of the HAR type. The value consists of a module
   *     name, a slash (/), and a file path. For example, if the child process file is
   *     **src/main/ets/process/DemoProcess.ets** in module1, then **srcEntry** is
   *     **module1/ets/process/DemoProcess.ets**.<br>In addition, ensure that the source file of the child process is
   *     referenced by other files to prevent it from being optimized by the build tool. (For details, see the sample
   *     code below.)
   * @param { ChildProcessArgs } args - 	Parameters passed to the child process. The object contains entryParams
   *     (string type, parameters passed to the child process) and fds (a set of file descriptor handles used for
   *     communication between the parent process and the child process).
   * @param { ChildProcessOptions } [options] - Startup configuration options of the child process. The object
   *     contains properties such as isolationMode (whether to enable the isolation mode). If this parameter is
   *     not passed, the default configuration in ChildProcessOptions is used.
   * @returns { Promise<int> } Promise used to return the PID of the child process.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child processes exceeds the upper limit. [since 13]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function startArkChildProcess(srcEntry: string, args: ChildProcessArgs, options?: ChildProcessOptions): Promise<int>;

  /**
   * Starts a [native child process](docroot://application-models/ability-terminology.md#native-child-process). This API
   *  uses a promise to return the result.
   * This API can be properly called on PCs/2-in-1 devices and tablets. If it is called on other devices, error code 801
   *  is returned.
   *
   * **Usage scenarios**
   * - Requires high-performance C/C++ computing tasks.
   * - Requires integration with existing C/C++ code libraries or third-party libraries.
   * - Requires high-performance data processing, image processing, audio/video encoding and decoding, etc.
   *
   * > **NOTE**
   * >
   * > The child process started by calling this API does not inherit the resources of the parent process. After the
   * > child process is created, its PID is returned, the dynamic link library file specified in the parameters is
   * > loaded, and the entry function of the child process is executed. Once the entry function is done, the child
   * > process is automatically destroyed. After the process that calls this API is destroyed, the created child
   * > process is also destroyed.
   *
   * **Device Behavior Differences**: Starting from API version 13, this API can be called normally on PC/2in1
   *  devices, and returns error code 801 on other device types. Starting from API version 14, this API can be
   *  called normally on PC/2in1 and Tablet devices, and returns error code 801 on other device types.
   *
   * @param { string } entryPoint - The symbol and entry function of the dynamic link library called in the child
   *     process are separated by a colon (:), for example, **libentry.so:Main**.
   * @param { ChildProcessArgs } args - Parameters transferred to the child process.
   * @param { ChildProcessOptions } [options] - Startup configuration of the child process.
   * @returns { Promise<int> } Promise used to return the PID of the child process.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child processes exceeds the upper limit.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  function startNativeChildProcess(entryPoint: string, args: ChildProcessArgs, options?: ChildProcessOptions): Promise<int>;

  /**
   * Checks whether the caller is allowed to create ark child processes on this device.
   * Some devices may not support creating ark child processes, so it is recommended to use this interface to
   * verify support beforehand.
   *
   * @returns { boolean } Whether the caller is allowed to create an ArkTS child process.<br>true: The caller is
   *     allowed to create an ArkTS child process.<br>false: The caller is not allowed to create an ArkTS child process.
   *     <br>Default value: false.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isArkChildProcessSupported(): boolean;

  /**
   * Checks whether the caller is allowed to create native child processes on this device.
   * Some devices may not support creating native child processes, so it is recommended to use this interface to
   * verify support beforehand.
   *
   * @returns { boolean } Whether the caller is allowed to create a Native child process.<br>true: The caller is
   *     allowed to create a Native child process.<br>false: The caller is not allowed to create a Native child process.
   *     <br>Default value: false.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isNativeChildProcessSupported(): boolean;

  /**
   * Obtains the information about the child processes of the current application. This API uses a promise to return
   * the result.
   * The returned child processes include those created through
   * [startChildProcess]{@link @ohos.app.ability.childProcessManager:childProcessManager.startChildProcess} (in
   * APP_SPAWN_FORK mode),
   * [startArkChildProcess]{@link @ohos.app.ability.childProcessManager:childProcessManager.startArkChildProcess}, and
   * [startNativeChildProcess]{@link @ohos.app.ability.childProcessManager:childProcessManager.startNativeChildProcess}.
   * [OH_Ability_CreateNativeChildProcess]
   * [OH_Ability_CreateNativeChildProcessWithConfigs]
   * [OH_Ability_StartNativeChildProcess]
   * [OH_Ability_StartNativeChildProcessWithConfigs]
   *
   * > **NOTE**
   * >
   * > The child process started in SELF_FORK mode is not included in the returned list.
   * > If no child processes exist, an empty array is returned.
   *
   * @returns { Promise<Array<ChildProcessInformation>> } Promise used to return the information about the child
   *     processes of the current application.
   * @throws { BusinessError } 16000050 - Connect to system service failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function getChildProcessInfos(): Promise<Array<ChildProcessInformation>>;
}

export default childProcessManager;