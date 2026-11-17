/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

/**
 * AgentHostProxy is used to send data or security authentication requests from the AgentExtensionAbility server
 *  to the client.
 *
 * > **NOTE**
 * >
 * > - The initial APIs of this module are supported since API version 24. Newly added APIs will be marked with
 * >   a superscript to indicate their earliest API version.
 * > - The APIs of this module can be used only in the stage model.
 * > - The APIs of this module must be used in the main thread. They are not supported in subthreads such as Worker
 * >   and TaskPool.
 *
 * @interface AgentHostProxy
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
export interface AgentHostProxy {
  /**
   * Sends data from the AgentExtensionAbility server to the client.
   *
   * @param { string } data - Data to be sent to the client of AgentExtensionAbility.
   * @throws { BusinessError } 35600002 - Failed to send the IPC message.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  sendData(data: string): void;

  /**
   * Sends a security authentication request from the AgentExtensionAbility server to the client.
   *
   * @param { string } handshakeData - Security authentication data to be sent to the client.
   * @throws { BusinessError } 35600002 - Failed to send the IPC message.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  authorize(handshakeData: string): void;
}