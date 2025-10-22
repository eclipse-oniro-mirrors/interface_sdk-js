
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkWeb
 */

import type UIAbilityContext from './application/UIAbilityContext';
import type Want from './@ohos.app.ability.Want';

/**
 * This module of web native messaging extension manager.
 *
 * @namespace webNativeMessagingExtensionManager
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 21 dynamic
 */
declare namespace webNativeMessagingExtensionManager {

  /**
   * Indicates connection information about web native messaging connection
   * @typedef ConnectionNativeInfo
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  interface ConnectionNativeInfo {
    /**
     * Indicates connection id
     *
     * @type { int }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    connectionId: int;

    /**
     * Indicates the bundle name of the web native messaging extension
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    bundleName: string;

    /**
     * Indicates the browser extension origin url
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    extensionOrigin: string;

    /**
     * Indicates the pid of the web native messaging extension
     *
     * @type { int }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    extensionPid: int;
  }
  /**
   * Enumerates the module error code of Native Messaging.
   *
   * @enum { int }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  export enum NmErrorCode {
    /**
     * Permission denied.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    PERMISSION_DENY = 17100203,
    /**
     * Want content is invalid.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    WANT_CONTENT_ERROR = 17100202,
    /**
     * Inner error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    INNER_ERROR = 17100201
  }

  /**
   * As an input parameter when connecting a web native messaging extension, it is used to receive
   * state changes during the connection.
   * @typedef WebExtensionConnectionCallback
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  interface WebExtensionConnectionCallback {
    /**
     * The callback interface was connect successfully.
     *
     * @param { ConnectionNativeInfo } connection - The remote connection info
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    onConnect(connection: ConnectionNativeInfo): void;

    /**
     * The callback interface was disconnect successfully.
     *
     * @param { ConnectionNativeInfo } connection - The remote connection info
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    onDisconnect(connection: ConnectionNativeInfo): void;

    /**
     * The callback interface was connect failed.
     *
     * @param { NmErrorCode } code - The error code of the failure.
     * @param { string } errMsg - The error message of the failure.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    onFailed(code: NmErrorCode, errMsg: string): void;
  }

  /**
   * Connects current ability to an web native message extension ability.
   *
   * @permission ohos.permission.WEB_NATIVE_MESSAGING
   * @param { UIAbilityContext } context - The context of the caller of the ui ability
   * @param { Want } want - The element name of the web native messaging ability
   * @param { WebExtensionConnectionCallback } callback - The remote object instance
   * @returns { int } Returns the number code of the ability connected
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  function connectNative(context: UIAbilityContext, want: Want, callback: WebExtensionConnectionCallback): int;

  /**
   * Disconnect current ability from an web native messaging extension, in contrast to {@link connectNative}.
   *
   * @permission ohos.permission.WEB_NATIVE_MESSAGING
   * @param { int } connectionId - The number code of the ability connected
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  function disconnectNative(connectionId: int): Promise<void>;
}

export default webNativeMessagingExtensionManager;
