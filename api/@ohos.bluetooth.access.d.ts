/*
 * Copyright (C) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * Provides methods for enabling/disabling bluetooth or monitoring bluetooth state.
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @crossplatform [since 13]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace access {
  /**
   * Enables Bluetooth on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function enableBluetooth(): void;

  /**
   * Disables Bluetooth on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function disableBluetooth(): void;

  /**
   * Asynchronous interface for enables Bluetooth on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission verification failed.
   *         The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *         <br>1. The hardware does not support the capability;
   *         <br>2. The chip does not support the capability;
   *         <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900013 - The user did not respond.
   * @throws { BusinessError } 2900014 - The user refused the action.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function enableBluetoothAsync(): Promise<void>;

  /**
   * Asynchronous interface for disables Bluetooth on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission verification failed.
   *         The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *         <br>1. The hardware does not support the capability;
   *         <br>2. The chip does not support the capability;
   *         <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900013 - The user did not respond.
   * @throws { BusinessError } 2900014 - The user refused the action.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function disableBluetoothAsync(): Promise<void>;

  /**
   * Notify bluetooth the result of bluetooth dialog.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { NotifyDialogResultParams } notifyDialogResultParams - Indicates the params for dialog result.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function notifyDialogResult(notifyDialogResultParams: NotifyDialogResultParams): Promise<void>;

  /**
   * Restrict Bluetooth BR/EDR ability on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function restrictBluetooth(): Promise<void>;

  /**
   * Obtains the Bluetooth status of a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 12]
   * @returns { BluetoothState } Returns the Bluetooth status.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API. [since 10 - 12]
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function getState(): BluetoothState;

  /**
   * Restoring bluetooth settings.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function factoryReset(callback: AsyncCallback<void>): void;

  /**
   * Restoring bluetooth settings.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function factoryReset(): Promise<void>;

  /**
   * Obtaining the MAC address of the local device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.GET_BLUETOOTH_LOCAL_MAC
   * @returns { string } The local MAC address. For example, "11:22:33:AA:BB:FF".
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getLocalAddress(): string;

  /**
   * Add a persistent random device address. Once the randomized address is successfully added,
   * the application can save it for an extended period of time.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC
   * @param { string } deviceId - the randomized address of remote device.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - [Sync] Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900010 - The number of supported device addresses has reached the upper limit.
   * @throws { BusinessError } 2900099 - Add persistent device address failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 16 dynamic
   * @since 23 static
   */
  function addPersistentDeviceId(deviceId: string): Promise<void>;

  /**
   * Delete a persistent random device address.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC
   * @param { string } deviceId - the randomized address of remote device.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - [Sync] Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - delete persistent device address failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 16 dynamic
   * @since 23 static
   */
  function deletePersistentDeviceId(deviceId: string): Promise<void>;

  /**
   * Obtains the persistent randomized device address of the application.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC
   * @returns { string[] } Returns the list of persistent random device addresses.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Get persistent device address failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 16 dynamic
   * @since 23 static
   */
  function getPersistentDeviceIds(): string[];

  /**
   * Determine whether the randomized device address application can still be used.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - the randomized address of remote device.
   * @returns { boolean } Returns whether the randomized device address is valid.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - [Sync] Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Check persistent device address failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 16 dynamic
   * @since 23 static
   */
  function isValidRandomDeviceId(deviceId: string): boolean;

  /**
   * Convert 2-byte and 4-byte UUID strings to the 16-byte UUID string standard used in Bluetooth.
   *
   * @param { string } uuid - 2-byte, 4-byte, 16-byte UUID string data.
   * @returns { string } Return the converted 16-byte UUID string.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  function convertUuid(uuid: string): string;

  /**
   * Check whether Bluetooth is available.
   *
   * @returns { boolean } Returns {@code true} if Bluetooth is available, returns {@code false} otherwise.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function isBluetoothSupported(): boolean;

  /**
   * Start capturing HCI packet and returns a socket file descriptor carrying the real-time HCI data stream.
   *
   * The data stream is encapsulated in the standard btsnoop format and can be forwarded to a PC for real-time
   * parsing (for example, Wireshark).
   * Multiple applications are not allowed to capture HCI packet simultaneously.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { int } Returns the socket file descriptor carrying the real-time HCI data stream.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     <br>1. The operation is restricted by the OS-account constraint;
   *     <br>2. The required privilege for the operation has not been granted.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900020 - Another HCI sniffing session is in progress.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function startSnoopCapture(): int;

  /**
   * Stop capturing HCI packet.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     <br>1. The operation is restricted by the OS-account constraint;
   *     <br>2. The required privilege for the operation has not been granted.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900021 - The HCI capture session is initiated by another application.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function stopSnoopCapture(): void;

  /**
   * Subscribe the event reported when the Bluetooth state changes.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 17]
   * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
   * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API. [since 10 - 17]
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function on(type: 'stateChange', callback: Callback<BluetoothState>): void;

  /**
   * Subscribe the event reported when the Bluetooth state changes.
   *
   * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 23 static
   */
  function onStateChange(callback: Callback<BluetoothState>): void;
  /**
   * Unsubscribe the event reported when the Bluetooth state changes.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 17]
   * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
   * @param { Callback<BluetoothState> } [callback] - Specifies the callback function notification for unsubscription.
   * If a parameter is transferred, the parameter value must be the same as
   * [access.on('stateChange')]{@link access.on(type:'stateChange', callback: Callback<BluetoothState>)}.
  The callback functions in * are the same. If no parameter is transferred, all callback function notifications
   * corresponding to the type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API. [since 10 - 17]
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function off(type: 'stateChange', callback?: Callback<BluetoothState>): void;

  /**
   * Unsubscribe the event reported when the Bluetooth state changes.
   *
   * @param { Callback<BluetoothState> } [callback] - Callback used to listen for the Bluetooth state event.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability;
   *     <br>2. The chip does not support the capability;
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 23 static
   */
  function offStateChange(callback?: Callback<BluetoothState>): void;

  /**
   * The enum of bluetooth state.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum BluetoothState {
    /**
     * Indicates the local Bluetooth is off
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_OFF = 0,
    /**
     * Indicates the local Bluetooth is turning on
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_TURNING_ON = 1,
    /**
     * Indicates the local Bluetooth is on, and ready for use
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_ON = 2,
    /**
     * Indicates the local Bluetooth is turning off
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_TURNING_OFF = 3,
    /**
     * Indicates the local Bluetooth is turning LE mode on
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_BLE_TURNING_ON = 4,
    /**
     * Indicates the local Bluetooth is in LE only mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_BLE_ON = 5,
    /**
     * Indicates the local Bluetooth is turning off LE only mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_BLE_TURNING_OFF = 6
  }

  /**
   * Describes the result of bluetooth dialog.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface NotifyDialogResultParams {
    /**
     * The type of bluetooth dialog.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dialogType: DialogType;
    /**
     * The result of bluetooth dailog. The value true indicates that the user approves the request,
     * and the value false indicates that the user rejects the request.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dialogResult: boolean;
  }

  /**
   * The enum of bluetooth dialog type.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum DialogType {
    /**
     * The type of bluetooth switch dialog.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    BLUETOOTH_SWITCH = 0,
    /**
     * Bluetooth Unpair dialog box.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    BLUETOOTH_UNPAIR = 1
  }
}

export default access;