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
 * @namespace access
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 10
 */
/**
 * Provides methods for enabling/disabling bluetooth or monitoring bluetooth state.
 *
 * @namespace access
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @atomicservice
 * @since 11
 */
/**
 * Provides methods for enabling/disabling bluetooth or monitoring bluetooth state.
 *
 * @namespace access
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'13','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace access {
  /**
   * Enables Bluetooth on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Enables Bluetooth on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Enables Bluetooth on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function enableBluetooth(): void;

  /**
   * Disables Bluetooth on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Disables Bluetooth on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Disables Bluetooth on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function disableBluetooth(): void;

  /**
   * Asynchronous interface for enables Bluetooth on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900013 - The user does not respond.
   * @throws { BusinessError } 2900014 - User refuse the action.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  function enableBluetoothAsync(): Promise<void>;

  /**
   * Asynchronous interface for disables Bluetooth on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900013 - The user does not respond.
   * @throws { BusinessError } 2900014 - User refuse the action.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  function disableBluetoothAsync(): Promise<void>;

  /**
   * Notify bluetooth the result of bluetooth dialog.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { NotifyDialogResultParams } notifyDialogResultParams - Indicates the params for dialog result.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 20
   */
  function notifyDialogResult(notifyDialogResultParams: NotifyDialogResultParams): Promise<void>;

  /**
   * Restrict Bluetooth BR/EDR ability on a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function restrictBluetooth(): Promise<void>;

  /**
   * Obtains the Bluetooth status of a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { BluetoothState } Returns the Bluetooth status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Obtains the Bluetooth status of a device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { BluetoothState } Returns the Bluetooth status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Obtains the Bluetooth status of a device.
   *
   * @returns { BluetoothState } Returns the Bluetooth status.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getState(): BluetoothState;

  /**
   * Restoring bluetooth settings.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11
   */
  function factoryReset(callback: AsyncCallback<void>): void;

  /**
   * Restoring bluetooth settings.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11
   */
  function factoryReset(): Promise<void>;

  /**
   * Obtaining the MAC address of the local device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.GET_BLUETOOTH_LOCAL_MAC
   * @returns { string } The local MAC address. For example, "11:22:33:AA:BB:FF".
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11
   */
  function getLocalAddress(): string;

  /**
   * Subscribe the event reported when the Bluetooth state changes.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
   * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Subscribe the event reported when the Bluetooth state changes.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
   * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Subscribe the event reported when the Bluetooth state changes.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
   * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  /**
   * Subscribe the event reported when the Bluetooth state changes.
   *
   * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
   * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function on(type: 'stateChange', callback: Callback<BluetoothState>): void;

  /**
   * Unsubscribe the event reported when the Bluetooth state changes.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
   * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Unsubscribe the event reported when the Bluetooth state changes.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
   * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Unsubscribe the event reported when the Bluetooth state changes.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
   * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  /**
   * Unsubscribe the event reported when the Bluetooth state changes.
   *
   * @param { 'stateChange' } type - Type of the Bluetooth state changes event to listen for.
   * @param { Callback<BluetoothState> } callback - Callback used to listen for the Bluetooth state event.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function off(type: 'stateChange', callback?: Callback<BluetoothState>): void;

  /**
   * Add a persistent random device address. Once the randomized address is successfully added,
   * the application can save it for an extended period of time.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC
   * @param { string } deviceId - the randomized address of remote device.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * 2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900010 - The number of supported device addresses has reached the upper limit.
   * @throws { BusinessError } 2900099 - Add persistent device address failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 16
   */
  function addPersistentDeviceId(deviceId: string): Promise<void>;

  /**
   * Delete a persistent random device address.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC
   * @param { string } deviceId - the randomized address of remote device.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * 2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - delete persistent device address failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 16
   */
  function deletePersistentDeviceId(deviceId: string): Promise<void>;

  /**
   * Obtains the persistent randomized device address of the application.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC
   * @returns { string[] } Returns the list of persistent random device addresses.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Get persistent device address failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 16
   */
  function getPersistentDeviceIds(): string[];

  /**
   * Determine whether the randomized device address application can still be used.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - the randomized address of remote device.
   * @returns { boolean } Returns whether the randomized device address is valid.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * 2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Check persistent device address failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 16
   */
  function isValidRandomDeviceId(deviceId: string): boolean;

  /**
   * Convert 2-byte and 4-byte UUID strings to the 16-byte UUID string standard used in Bluetooth.
   *
   * @param { string } uuid - 2-byte, 4-byte, 16-byte UUID string data.
   * @returns { string } Return the converted 16-byte UUID string.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 22 dynamic
   */
  function convertUuid(uuid: string): string;

  /**
   * The enum of bluetooth state.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * The enum of bluetooth state.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 11
   */
  /**
   * The enum of bluetooth state.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum BluetoothState {
    /**
     * Indicates the local Bluetooth is off
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the local Bluetooth is off
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the local Bluetooth is off
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    STATE_OFF = 0,
    /**
     * Indicates the local Bluetooth is turning on
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the local Bluetooth is turning on
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the local Bluetooth is turning on
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    STATE_TURNING_ON = 1,
    /**
     * Indicates the local Bluetooth is on, and ready for use
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the local Bluetooth is on, and ready for use
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the local Bluetooth is on, and ready for use
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    STATE_ON = 2,
    /**
     * Indicates the local Bluetooth is turning off
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the local Bluetooth is turning off
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the local Bluetooth is turning off
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    STATE_TURNING_OFF = 3,
    /**
     * Indicates the local Bluetooth is turning LE mode on
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the local Bluetooth is turning LE mode on
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    STATE_BLE_TURNING_ON = 4,
    /**
     * Indicates the local Bluetooth is in LE only mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the local Bluetooth is in LE only mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    STATE_BLE_ON = 5,
    /**
     * Indicates the local Bluetooth is turning off LE only mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the local Bluetooth is turning off LE only mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    STATE_BLE_TURNING_OFF = 6
  }

  /**
   * Describes the result of bluetooth dialog.
   *
   * @typedef NotifyDialogResultParams
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 20 dynamic
   * @since 22 static
   */
  interface NotifyDialogResultParams {
    /**
     * The type of bluetooth dialog.
     *
     * @type { DialogType }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 20 dynamic
     * @since 22 static
     */
    dialogType: DialogType;
    /**
     * The result of bluetooth dialog. The value true indicates that the user approves the request,
     * and the value false indicates that the user rejects the request.
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 20 dynamic
     * @since 22 static
     */
    dialogResult: boolean;
  }

  /**
   * The enum of bluetooth dialog type.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 20 dynamic
   * @since 22 static
   */
  enum DialogType {
    /**
     * The type of bluetooth switch dialog.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 20 dynamic
     * @since 22 static
     */
    BLUETOOTH_SWITCH = 0
  }
}

export default access;