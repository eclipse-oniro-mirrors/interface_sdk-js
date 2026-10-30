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
 * @file Child Process Arguments
 * @kit AbilityKit
 */

/**
 * The module describes the parameters transferred to the child process. When starting a child process through
 * [childProcessManager]{@link @ohos.app.ability.childProcessManager:childProcessManager}, you can transfer parameters
 * to the child process through **ChildProcessArgs**.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
export interface ChildProcessArgs {
  /**
   * Developer-defined parameters passed through to the child process. They can be obtained through args.entryParams
   * in the [ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess.onStart} method.
   * If not passed in, the child process cannot obtain the developer-defined parameters. entryParams
   * is transmitted over IPC. The maximum amount of data transmitted over IPC is 200 KB, part of which
   * is occupied by the system. It is recommended that the data size of entryParams not exceed 150 KB;
   * otherwise, the child process may fail to be created.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  entryParams?: string;

  /**
   * A collection of file descriptor handles used for communication between the main process and the child process.
   * If not passed in, the child process cannot obtain the file handles passed by the main process. This parameter
   * is passed to the child process in key-value pairs, where key is a custom string and value is a file descriptor
   * handle. The fd handle can be obtained through args.fds in the
   * [ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess.onStart} method.
   *
   * > **NOTE**
   * >
   * > - fds supports a maximum of 16 groups, and the maximum length of each key is 20 characters.
   * > - The handle number passed to the child process may change, but the file it points to remains the same.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  fds?: Record<string, int>;
}