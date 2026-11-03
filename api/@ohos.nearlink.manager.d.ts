/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file Basic NearLink Management Capability
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';

/**
 * This module provides basic NearLink management capabilities, including enabling or disabling NearLink, obtaining the
 * MAC address of the local device, and setting the connection mode.
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @atomicservice [since 26.1.0]
 * @since 26.0.0 dynamic
 * @since 26.0.1 static
 */
declare namespace manager {

  /**
   * Checks whether the current device supports NearLink.
   *
   * @returns { boolean } Whether the current device supports NearLink. The value **true** indicates that the device
   *     supports NearLink, and **false** indicates the opposite.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @atomicservice [since 26.1.0]
   * @since 26.0.0 dynamic
   * @since 26.0.1 static
   */
  function isNearLinkSupported(): boolean;

  /**
   * Checks whether the current device supports radio frame type 4.
   *
   * @returns { boolean } Whether the current device supports radio frame type 4. The value **true** indicates that
   *     the device supports radio frame type 4, and **false** indicates the opposite.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  function isFrameType4Supported(): boolean;

  /**
   * Enables NearLink.
   * Before calling this API, you may call [isNearLinkSupported]{@link isNearLinkSupported} to check
   * whether the device supports NearLink.
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     1. The hardware does not support the capability;
   *     2. The chip does not support the capability;
   *     3. A dependent service feature is not supported.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @atomicservice [since 26.1.0]
   * @since 26.0.0 dynamic
   * @since 26.0.1 static
   * @see [disable]{@link disable(): void} Disables NearLink.
   */
  function enable(): void;

  /**
   * Enables NearLink with the specified options.
   * Before calling this API, you may call [isNearLinkSupported]{@link isNearLinkSupported} to check
   * whether the device supports NearLink.
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
   * @param { EnableOptions } [options] - Options used when NearLink is enabled.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     1. The hardware does not support the capability;
   *     2. The chip does not support the capability;
   *     3. A dependent service feature is not supported.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  function enableWithOptions(options?: EnableOptions): void;

  /**
   * Disables NearLink.
   * Before calling this API, you may call [isNearLinkSupported]{@link isNearLinkSupported} to check
   * whether the device supports NearLink.
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     1. The hardware does not support the capability;
   *     2. The chip does not support the capability;
   *     3. A dependent service feature is not supported.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @atomicservice [since 26.1.0]
   * @since 26.0.0 dynamic
   * @since 26.0.1 static
   * @see [enable]{@link enable(): void} Enables NearLink.
   */
  function disable(): void;

  /**
   * Queries the NearLink status.
   * Before calling this API, you may call [isNearLinkSupported]{@link isNearLinkSupported} to check
   * whether the device supports NearLink.
   *
   * @returns { NearlinkState } NearLink status.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     1. The hardware does not support the capability;
   *     2. The chip does not support the capability;
   *     3. A dependent service feature is not supported.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @atomicservice [since 26.1.0]
   * @since 26.0.0 dynamic
   * @since 26.0.1 static
   */
  function getState(): NearlinkState;

  /**
   * Queries the MAC address of the local device.
   * Before calling this API, you may call [isNearLinkSupported]{@link isNearLinkSupported} to check
   * whether the device supports NearLink.
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.GET_NEARLINK_LOCAL_MAC
   * @returns { string } Local MAC address, for example, **'11:22:33:AA:BB:FF'**.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     1. The hardware does not support the capability;
   *     2. The chip does not support the capability;
   *     3. A dependent service feature is not supported.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @atomicservice [since 26.1.0]
   * @since 26.0.0 dynamic
   * @since 26.0.1 static
   */
  function getLocalAddress(): string;

  /**
   * Queries the NearLink name on the local device.
   * Before calling this API, you may call [isNearLinkSupported]{@link isNearLinkSupported} to check
   * whether the device supports NearLink.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { string } NearLink name on the local device. The value contains a maximum of 30 characters.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     1. The hardware does not support the capability;
   *     2. The chip does not support the capability;
   *     3. A dependent service feature is not supported.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @atomicservice [since 26.1.0]
   * @since 26.0.0 dynamic
   * @since 26.0.1 static
   */
  function getLocalName(): string;

  /**
   * Obtains the devices paired with the current device.
   * Before calling this API, you may call [isNearLinkSupported]{@link isNearLinkSupported} to check
   * whether the device supports NearLink.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { string[] } List of paired device addresses.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     1. The hardware does not support the capability;
   *     2. The chip does not support the capability;
   *     3. A dependent service feature is not supported.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @atomicservice [since 26.1.0]
   * @since 26.0.0 dynamic
   * @since 26.0.1 static
   */
  function getPairedDevices(): string[];

  /**
   * Sets the connection mode. This API uses a promise to return the result.
   * Before calling this API, you may call [isNearLinkSupported]{@link isNearLinkSupported} to check
   * whether the device supports NearLink.
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
   * @param { ConnectionMode } mode - Connection mode to be set.
   * @param { int } duration - Duration of the mode to set, in seconds.  The value **0** indicates no time limit.
   *     <br>The value should be an integer.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     1. The hardware does not support the capability;
   *     2. The chip does not support the capability;
   *     3. A dependent service feature is not supported.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Integer out of range.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @atomicservice [since 26.1.0]
   * @since 26.0.0 dynamic
   * @since 26.0.1 static
   */
  function setConnectionMode(mode: ConnectionMode, duration: int): Promise<void>;

  /**
   * Restores a device to its factory settings. This API uses a promise to return the result.
   * Before calling this API, you may call [isNearLinkSupported]{@link isNearLinkSupported} to check
   * whether the device supports NearLink.
   *
   * @permission ohos.permission.MANAGE_NEARLINK
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     1. The hardware does not support the capability;
   *     2. The chip does not support the capability;
   *     3. A dependent service feature is not supported.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @atomicservice [since 26.1.0]
   * @since 26.0.0 dynamic
   * @since 26.0.1 static
   */
  function factoryReset(): Promise<void>;

  /**
   * Subscribes to the NearLink status change event. This API uses an asynchronous callback to return the result.
   * Before calling this API, you may call [isNearLinkSupported]{@link isNearLinkSupported} to check
   * whether the device supports NearLink.
   *
   * @param { Callback<NearlinkState> } callback - Callback used to return the NearLink status.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     1. The hardware does not support the capability;
   *     2. The chip does not support the capability;
   *     3. A dependent service feature is not supported.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @atomicservice [since 26.1.0]
   * @since 26.0.0 dynamic
   * @since 26.0.1 static
   * @see [offStateChange]{@link offStateChange(callback?: Callback<NearlinkState>): void} Unsubscribes from the
   *     NearLink status change event.
   */
  function onStateChange(callback: Callback<NearlinkState>): void;

  /**
   * Unsubscribes from the NearLink status change event.
   * Before calling this API, you may call [isNearLinkSupported]{@link isNearLinkSupported} to check
   * whether the device supports NearLink.
   *
   * @param { Callback<NearlinkState> } [callback] - Callback used to return the NearLink status.
   *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not specified,
   *     all callbacks corresponding to the event are unregistered.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     1. The hardware does not support the capability;
   *     2. The chip does not support the capability;
   *     3. A dependent service feature is not supported.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @atomicservice [since 26.1.0]
   * @since 26.0.0 dynamic
   * @since 26.0.1 static
   * @see [onStateChange]{@link onStateChange(callback: Callback<NearlinkState>): void} Subscribes to the
   *     NearLink status change event.
   */
  function offStateChange(callback?: Callback<NearlinkState>): void;

  /**
   * Enumerates the NearLink statuses.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @atomicservice [since 26.1.0]
   * @since 26.0.0 dynamic
   * @since 26.0.1 static
   */
  enum NearlinkState {
    /**
     * NearLink is being turned on.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @atomicservice [since 26.1.0]
     * @since 26.0.0 dynamic
     * @since 26.0.1 static
     */
    STATE_TURNING_ON = 0,
    /**
     * NearLink is turned on.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @atomicservice [since 26.1.0]
     * @since 26.0.0 dynamic
     * @since 26.0.1 static
     */
    STATE_ON = 1,
    /**
     * NearLink is being turned off.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @atomicservice [since 26.1.0]
     * @since 26.0.0 dynamic
     * @since 26.0.1 static
     */
    STATE_TURNING_OFF = 2,
    /**
     * NearLink is turned off.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @atomicservice [since 26.1.0]
     * @since 26.0.0 dynamic
     * @since 26.0.1 static
     */
    STATE_OFF = 3
  }

  /**
   * Enumerates the connection modes.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @atomicservice [since 26.1.0]
   * @since 26.0.0 dynamic
   * @since 26.0.1 static
   */
  enum ConnectionMode {
    /**
     * The device cannot be connected.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @atomicservice [since 26.1.0]
     * @since 26.0.0 dynamic
     * @since 26.0.1 static
     */
    SLE_MODE_UNCONNECTABLE = 0,
    /**
     * The device can be connected.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @atomicservice [since 26.1.0]
     * @since 26.0.0 dynamic
     * @since 26.0.1 static
     */
    SLE_MODE_CONNECTABLE = 1
  }

  /**
   * The options for enabling NearLink.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  interface EnableOptions {
    /**
     * Auto-connection policy to be used when NearLink is enabled.
     * The default value is **AUTO_CONN_GENERAL**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    autoConnPolicy?: AutoConnectPolicy;
  }

  /**
   * Enumerates the auto-connection policies when NearLink is enabled.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  enum AutoConnectPolicy {
    /**
     * All paired devices are automatically reconnected after NearLink is enabled.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    AUTO_CONN_GENERAL = 0,
    /**
     * All paired devices except audio devices are automatically reconnected after NearLink is enabled.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    AUTO_CONN_EXCEPT_AUDIO_DEVICES = 1,
    /**
     * All paired devices except those disconnected by the user are automatically reconnected after NearLink is enabled.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    AUTO_CONN_EXCEPT_USER_DISCONNECTED_DEVICES = 2
  }
}
export default manager;