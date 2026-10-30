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
 * Developers can use the callback APIs provided by AgentExtensionConnectCallback to receive data and security
 *  authentication requests sent by the server, and to detect the disconnection of the AgentExtensionAbility server.
 *
 * > **NOTE**
 * >
 * > - The initial APIs of this module are supported since API version 24. Newly added APIs will be marked with
 * >   a superscript to indicate their earliest API version.
 * > - The APIs of this module are system APIs.
 * > - The APIs of this module can be used only in the stage model.
 *
 * @interface AgentExtensionConnectCallback
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export interface AgentExtensionConnectCallback {
  /**
   * Receives data from the AgentExtensionAbility server.
   *
   * @param { string } data - Data received from the server-side AgentExtensionAbility.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onData(data: string): void;

  /**
   * Receives the security authentication callback from the AgentExtensionAbility server.
   *
   * @param { string } handshakeData - Security authentication data received from the AgentExtensionAbility server side.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onAuth(handshakeData: string): void;

  /**
   * Called when the connection to the AgentExtensionAbility server is disconnected.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onDisconnect(): void;
}