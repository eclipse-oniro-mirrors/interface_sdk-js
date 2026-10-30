/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
 * @file Proxy Channel Management
 * @kit DistributedServiceKit
 */

import { Callback } from './@ohos.base';
/**
 * DSoftBus provides stable and reliable underlying channels for cross-device communication. This module is developed
 * based on DSoftBus. It supports data exchange between phones and wearables, providing users with a seamless device
 * interconnection experience. It also simplifies cross-device communication for developers, eliminating the need to
 * handle underlying communication protocols and process wakeup logic. Use scenarios: During collaboration between the
 * phone app and wearable app, if the phone app is not running in the foreground, its downlink messages are forwarded
 * to the notification server and then sent to the wearable through the proxy module. When the wearable sends data to
 * the phone, the proxy module can dynamically wake up the corresponding app process on the phone to receive and
 * process the data. The core functions of this module include proxy channel management, data route management,
 * application state awareness and wakeup, and link state monitoring.
 *
 * - Proxy channel management: Manages bidirectional data channels established between phones and wearables via the
 * Bluetooth Basic Rate (BR) protocol. This ensures reliable cross-device data communication without the need to
 * implement the underlying communication protocol. The supported data channel IDs range from 1 to 2147483647.
 * - Data route management: Accurately forwards data of wearables based on the specified service UUID. This accurately
 * routes data to the target service port, preventing data loss or incorrect data transmission. The UUID uniquely
 * identifies the service listened for the peer device. The proxy module routes data to the corresponding service port
 * based on the UUID of the peer device.
 * - Application state awareness and wakeup: After a proxy channel is enabled and data sent by the wearable is received,
 * the proxy module identifies the target app based on the **action** field (for example, **action.ohos.pull.listener**)
 * configured in the **module.json5** file, and starts the corresponding app process on the phone to process the data.
 * This allows the app to receive data without having to stay in the foreground, thereby saving system resources.
 * - Link state monitoring: Monitors the connection status changes of the proxy channel throughout its lifecycle in real
 * time through callbacks. This helps the phone app respond to connection exceptions in a timely manner and adjust
 * service policies, thereby improving data transmission reliability. Connection exceptions include connection
 * restoration, abnormal disconnection, and pairing relationship deletion.
 *
 * ###### Instructions
 *
 * Before calling the APIs of this module, complete the following configurations:
 *
 * 1. You have requested the **ohos.permission.ACCESS_BLUETOOTH** permission. For details about how to configure and
 * apply for permissions, see [Declaring Permissions](../../security/AccessToken/declare-permissions.md) and
 * [Requesting User Authorization](../../security/AccessToken/request-user-authorization.md).
 * 2. In the **module.json5** file, you have configured the **action** field **action.ohos.pull.listener** for the
 * phone app process that needs to be started by the proxy module.
 *
 * The typical calling process is as follows:
 *
 * 1. Call **openProxyChannel** to open the proxy channel and obtain the channel ID.
 * 2. Call **sendData** to send data, and subscribe to events based on service requirements. Call **on('receiveData')**
 * to receive data from the peer end, and call **on('channelStateChange')** to monitor channel connection state changes
 * (such as disconnection and recovery). You can subscribe to both events at the same time. You are advised to use them
 * together in data transmission scenarios so that data sending can be paused promptly and disconnection recovery logic
 * can be handled when the channel is abnormal.
 * 3. After using the event, call **off('receiveData')** or **off('channelStateChange')** to unsubscribe from the event.
 * 4. Call **closeProxyChannel** to close the proxy channel and release resources.
 *
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace proxyChannelManager {
  /**
   * Opens a proxy channel. This API uses a promise to return the result. Based on the link type and peer device
   * information configured in **ChannelInfo**, it negotiates with the peer device via the Bluetooth BR protocol to
   * establish a bidirectional data channel and returns a channel ID that uniquely identifies the channel. This is
   * applicable to scenarios where a phone-side app needs to establish a bidirectional data channel with a wearable
   * device-side app, such as message notification forwarding. After calling this method, you must call
   * [closeProxyChannel]{@link proxyChannelManager.closeProxyChannel} to close the channel and release resources when
   * the proxy channel is no longer needed.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { ChannelInfo } channelInfo - Proxy channel information, including the link type, MAC address of the peer
   *     device, and service UUID of the peer device.
   * @returns { Promise<int> } Promise used to return the result. If the proxy channel is successfully opened, the
   *     return value of **resolve** is the channel ID, and value range is [1, 2147483647]. The lifecycle of the
   *     channel ID is the same as that of the proxy channel. If the proxy channel is not closed, the same input
   *     parameter will return the same channel ID. If the proxy channel fails to be opened, the return value of
   *     **reject** is an error message. For details about the error codes, see the error code table.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported because bluetooth proxy function has
   *     been trimmed. [since 26.0.0]
   * @throws { BusinessError } 32390001 - BR is disabled.
   * @throws { BusinessError } 32390002 - Device not paired.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @throws { BusinessError } 32390102 - Operation failed or Connection timed out.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function openProxyChannel(channelInfo: ChannelInfo): Promise<int>;

  /**
   * Closes a proxy channel that has been opened. This method is applicable to scenarios where the mobile app no longer
   * needs to communicate with the wearable app, for example, when the channel resources need to be released after a
   * data synchronization task is complete. This method must be used together with
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel}. After using the proxy channel, call this method to
   * close the channel and release resources. After the channel is closed, the registered **receiveData** and
   * **channelStateChange** callbacks will be automatically unregistered, and the data that is being transmitted will
   * be interrupted. If the proxy channel is not closed in a timely manner, a channel resource leak may occur.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - Proxy channel ID obtained when the proxy channel is opened. The value ranges from
   *     1 to 2147483647. If an invalid or closed channel ID is used, error code 32390004 will be returned. If the
   *     value is out of range, error code 32390006 will be returned. This parameter takes effect only when the proxy
   *     channel is available. After the channel is closed or disconnected, the channel ID becomes unavailable.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported because bluetooth proxy function has
   *     been trimmed. [since 26.0.0]
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function closeProxyChannel(channelId: int): void;

  /**
   * Sends data to the peer end. This API uses a promise to return the result. This method is applicable to scenarios
   * where a phone app sends instructions or data to a wearable app through the proxy channel, for example, sending
   * configuration updates and notifications. This method can be called to send data only after the proxy channel is
   * successfully opened by calling [openProxyChannel]{@link proxyChannelManager.openProxyChannel}. This method will
   * fail to be called if the proxy channel is unavailable (for example, in the
   * [ChannelState]{@link proxyChannelManager.ChannelState}.CHANNEL_WAIT_RESUME, **CHANNEL_EXCEPTION_SOFTWARE_FAILED**,
   * or **CHANNEL_BR_NO_PAIRED** state). You are advised to subscribe to the
   * [on('channelStateChange')]{@link proxyChannelManager.on(type: 'channelStateChange', channelId: number, callback: Callback<ChannelStateInfo>)}
   * event to monitor the channel status. When the channel is unavailable, suspend data transmission. When the channel
   * recovers, resume data transmission. Data is transmitted to the peer device through the established proxy channel
   * over the BR link. The maximum data length is 4096 bytes. If the data length exceeds 4096 bytes, error code 32390103
   * will be returned.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - Proxy channel ID obtained when the proxy channel is opened. The value ranges from
   *     1 to 2147483647. If an invalid or closed channel ID is used, error code 32390004 will be returned. If the
   *     value is out of range, error code 32390006 will be returned. This parameter takes effect only when the proxy
   *     channel is available. After the channel is closed or disconnected, the channel ID becomes unavailable.
   * @param { ArrayBuffer } data - Binary data sent to the peer device. The data format is defined by the app layer.
   *     The maximum length is 4096 bytes. If the length exceeds the upper limit, error code 32390103 is returned.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported because bluetooth proxy function has
   *     been trimmed. [since 26.0.0]
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @throws { BusinessError } 32390103 - Data too long.
   * @throws { BusinessError } 32390104 - Send failed.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function sendData(channelId: int, data: ArrayBuffer): Promise<void>;

  /**
   * Subscribes to data receiving events. This API uses an asynchronous callback to return the result. This method is
   * applicable when the phone app needs to continuously receive data reported by the wearable app, for example,
   * receiving the wearable app data. The proxy module receives data from the peer device based on the peer UUID
   * configured when **openProxyChannel** is called, and transfers the received wearable app data to the subscriber
   * through a callback. You can subscribe to data receiving events only after the proxy channel is successfully opened
   * by calling [openProxyChannel]{@link proxyChannelManager.openProxyChannel}. To enable the proxy channel to wake up
   * the phone app process to receive and process data from the peer device, set the **action** field to
   * **action.ohos.pull.listener** in the **module.json5** file. After the subscription, call
   * [off('receiveData')]{@link proxyChannelManager.off(type: 'receiveData', channelId: number, callback?: Callback<DataInfo>)}
   * to cancel the subscription to prevent the callback from being continuously triggered.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'receiveData' } type - Event type. The value **receiveData** indicates the data receiving event.
   * @param { number } channelId -  Proxy channel ID obtained when the proxy channel is opened. The value ranges from
   *     1 to 2147483647. If an invalid or closed channel ID is used, error code 32390004 will be returned. If the
   *     value is out of range, error code 32390006 will be returned. This parameter takes effect only when the proxy
   *     channel is available. After the channel is closed or disconnected, the channel ID becomes unavailable.
   * @param { Callback<DataInfo> } callback - Callback used to receive data from the proxy channel. The callback
   *     parameter is a [DataInfo]{@link proxyChannelManager.DataInfo} object, which contains the
   *     **channelId** (channel ID) and **data** (received data, in bytes) fields. You can receive data only after the
   *     proxy channel is opened by calling **openProxyChannel**. If the callback function is registered multiple times,
   *     only the last registered one takes effect.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   */
  function on(type: 'receiveData', channelId: number, callback: Callback<DataInfo>): void;

  /**
   * Unsubscribes from data receiving events. Data will no longer be received through a callback. This method is
   * applicable when the phone app no longer needs to receive data from the wearable app, for example, when the user
   * switches to another function module. You can unsubscribe from data receiving events only after the proxy channel
   * is successfully opened by calling [openProxyChannel]{@link proxyChannelManager.openProxyChannel}. This method must
   * be used together with [on('receiveData')]{@link proxyChannelManager.on(type: 'receiveData', channelId: number, callback: Callback<DataInfo>)}
   * to unregister the data receiving callback registered using **on('receiveData')**.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'receiveData' } type - Event type. The value **receiveData** indicates the data receiving event.
   * @param { number } channelId - Proxy channel ID obtained when the proxy channel is opened. The value ranges from
   *     1 to 2147483647. If an invalid or closed channel ID is used, error code 32390004 will be returned. If the
   *     value is out of range, error code 32390006 will be returned. This parameter takes effect only when the proxy
   *     channel is available. After the channel is closed or disconnected, the channel ID becomes unavailable.
   * @param { Callback<DataInfo> } [callback] - Registered callback. If this parameter is not passed, all data
   *     receiving events are unsubscribed from. This parameter is not passed by default. The callback last registered
   *     using **on** needs to be passed to unsubscribe from the data receiving events. If any other callback function
   *     is passed, the unsubscription will fail.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   */
  function off(type: 'receiveData', channelId: number, callback?: Callback<DataInfo>): void;

  /**
   * Subscribes to data receiving events. This API uses an asynchronous callback to return the result. This method is
   * applicable when the phone app needs to continuously receive data reported by the wearable app, for example,
   * receiving the wearable app data. The proxy module receives data from the peer device based on the peer UUID
   * configured when **openProxyChannel** is called, and transfers the received wearable app data to the subscriber
   * through a callback. You can subscribe to data receiving events only after the proxy channel is successfully opened
   * by calling [openProxyChannel]{@link proxyChannelManager.openProxyChannel}. To enable the proxy channel to wake up
   * the phone app process to receive and process data from the peer device, set the **action** field to
   * **action.ohos.pull.listener** in the **module.json5** file. After the subscription, call
   * [off('receiveData')]{@link proxyChannelManager.off(type: 'receiveData', channelId: number, callback?: Callback<DataInfo>)}
   * to cancel the subscription to prevent the callback from being continuously triggered.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId -  Proxy channel ID obtained when the proxy channel is opened. The value ranges from
   *     1 to 2147483647. If an invalid or closed channel ID is used, error code 32390004 will be returned. If the
   *     value is out of range, error code 32390006 will be returned. This parameter takes effect only when the proxy
   *     channel is available. After the channel is closed or disconnected, the channel ID becomes unavailable.
   * @param { Callback<DataInfo> } callback - Callback used to receive data from the proxy channel. The callback
   *     parameter is a [DataInfo]{@link proxyChannelManager.DataInfo} object, which contains the
   *     **channelId** (channel ID) and **data** (received data, in bytes) fields. You can receive data only after the
   *     proxy channel is opened by calling **openProxyChannel**. If the callback function is registered multiple times,
   *     only the last registered one takes effect.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onReceiveData(channelId: int, callback: Callback<DataInfo>): void;

  /**
   * Unsubscribes from data receiving events. Data will no longer be received through a callback. This method is
   * applicable when the phone app no longer needs to receive data from the wearable app, for example, when the user
   * switches to another function module. You can unsubscribe from data receiving events only after the proxy channel
   * is successfully opened by calling [openProxyChannel]{@link proxyChannelManager.openProxyChannel}. This method must
   * be used together with [on('receiveData')]{@link proxyChannelManager.on(type: 'receiveData', channelId: number, callback: Callback<DataInfo>)}
   * to unregister the data receiving callback registered using **on('receiveData')**.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - Proxy channel ID obtained when the proxy channel is opened. The value ranges from
   *     1 to 2147483647. If an invalid or closed channel ID is used, error code 32390004 will be returned. If the
   *     value is out of range, error code 32390006 will be returned. This parameter takes effect only when the proxy
   *     channel is available. After the channel is closed or disconnected, the channel ID becomes unavailable.
   * @param { Callback<DataInfo> } [callback] - Registered callback. If this parameter is not passed, all data
   *     receiving events are unsubscribed from. This parameter is not passed by default. The callback last registered
   *     using **on** needs to be passed to unsubscribe from the data receiving events. If any other callback function
   *     is passed, the unsubscription will fail.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offReceiveData(channelId: int, callback?: Callback<DataInfo>): void;

  /**
   * Subscribes to channel state change events. This API uses an asynchronous callback to return the result. This
   * method is applicable to scenarios where the phone app needs to detect the proxy channel connection state in real
   * time. For example, the app can pause data transmission after the channel is disconnected and automatically retry
   * services after the channel is reconnected. The proxy module monitors the BR link status in real time. When an
   * event such as connection restoration, abnormal disconnection, or pairing relationship deletion occurs, the proxy
   * module reports **ChannelStateInfo** using a callback. You can subscribe to channel state change events only after
   * the proxy channel is successfully opened by calling [openProxyChannel]{@link proxyChannelManager.openProxyChannel}.
   * After the subscription, call [off('channelStateChange')]{@link proxyChannelManager.off(type: 'channelStateChange', channelId: number, callback?: Callback<ChannelStateInfo>)}
   * to cancel the subscription to prevent the callback from being continuously triggered. After the channel is closed
   * by calling [closeProxyChannel]{@link proxyChannelManager.closeProxyChannel}, the registered **channelStateChange**
   * callback will be automatically unsubscribed from.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'channelStateChange' } type - Event type. The value **channelStateChange** indicates the channel state
   *     change event.
   * @param { number } channelId - Proxy channel ID obtained when the proxy channel is opened. The value ranges from
   *     1 to 2147483647. If an invalid or closed channel ID is used, error code 32390004 will be returned. If the
   *     value is out of range, error code 32390006 will be returned. This parameter takes effect only when the proxy
   *     channel is available. After the channel is closed or disconnected, the channel ID becomes unavailable.
   * @param { Callback<ChannelStateInfo> } callback - Callback used to receive the proxy channel state change
   *     information. The callback parameter is a [ChannelStateInfo]{@link proxyChannelManager.ChannelStateInfo} object,
   *     which contains the **channelId** (channel ID) and **state** (channel connection status) fields. You can receive
   *     the channel state information only after the proxy channel is opened by calling **openProxyChannel**. If the
   *     callback function is registered for multiple times, only the last registered callback function takes effect.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   */
  function on(type: 'channelStateChange', channelId: number, callback: Callback<ChannelStateInfo>): void;

  /**
   * Unsubscribes from channel state change events. This method is applicable when the phone app no longer needs to
   * listen for the proxy channel connection state change events, for example, when the user exits the related service
   * page or the data transmission process is completed. You can unsubscribe from data receiving events only after the
   * proxy channel is successfully opened by calling [openProxyChannel]{@link proxyChannelManager.openProxyChannel}.
   * This method must be used together with [on('channelStateChange')]{@link proxyChannelManager.on(type: 'channelStateChange', channelId: number, callback: Callback<ChannelStateInfo>)}
   * to unregister the channel state change callback registered using **on('channelStateChange')**.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'channelStateChange' } type - Event type. The value is fixed to **'channelStateChange'**.
   * @param { number } channelId - Proxy channel ID obtained when the proxy channel is opened. The value ranges from
   *     1 to 2147483647. If an invalid or closed channel ID is used, error code 32390004 will be returned. If the
   *     value is out of range, error code 32390006 will be returned. This parameter takes effect only when the proxy
   *     channel is available. After the channel is closed or disconnected, the channel ID becomes unavailable.
   * @param { Callback<ChannelStateInfo> } [callback] - Registered callback. If this parameter is not passed, all
   *     channel state events are unsubscribed from. This parameter is not passed by default. The callback last
   *     registered using **on** needs to be passed to unsubscribe from the channel state events. If any other callback
   *     function is passed, the unsubscription will fail.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   */
  function off(type: 'channelStateChange', channelId: number, callback?: Callback<ChannelStateInfo>): void;

  /**
   * Subscribes to channel state change events. This API uses an asynchronous callback to return the result. This
   * method is applicable to scenarios where the phone app needs to detect the proxy channel connection state in real
   * time. For example, the app can pause data transmission after the channel is disconnected and automatically retry
   * services after the channel is reconnected. The proxy module monitors the BR link status in real time. When an
   * event such as connection restoration, abnormal disconnection, or pairing relationship deletion occurs, the proxy
   * module reports **ChannelStateInfo** using a callback. You can subscribe to channel state change events only after
   * the proxy channel is successfully opened by calling [openProxyChannel]{@link proxyChannelManager.openProxyChannel}.
   * After the subscription, call [off('channelStateChange')]{@link proxyChannelManager.off(type: 'channelStateChange', channelId: number, callback?: Callback<ChannelStateInfo>)}
   * to cancel the subscription to prevent the callback from being continuously triggered. After the channel is closed
   * by calling [closeProxyChannel]{@link proxyChannelManager.closeProxyChannel}, the registered **channelStateChange**
   * callback will be automatically unsubscribed from.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - Proxy channel ID obtained when the proxy channel is opened. The value ranges from
   *     1 to 2147483647. If an invalid or closed channel ID is used, error code 32390004 will be returned. If the
   *     value is out of range, error code 32390006 will be returned. This parameter takes effect only when the proxy
   *     channel is available. After the channel is closed or disconnected, the channel ID becomes unavailable.
   * @param { Callback<ChannelStateInfo> } callback - Callback used to receive the proxy channel state change
   *     information. The callback parameter is a [ChannelStateInfo]{@link proxyChannelManager.ChannelStateInfo} object,
   *     which contains the **channelId** (channel ID) and **state** (channel connection status) fields. You can receive
   *     the channel state information only after the proxy channel is opened by calling **openProxyChannel**. If the
   *     callback function is registered for multiple times, only the last registered callback function takes effect.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onChannelStateChange(channelId: int, callback: Callback<ChannelStateInfo>): void;

  /**
   * Unsubscribes from channel state change events. This method is applicable when the phone app no longer needs to
   * listen for the proxy channel connection state change events, for example, when the user exits the related service
   * page or the data transmission process is completed. You can unsubscribe from data receiving events only after the
   * proxy channel is successfully opened by calling [openProxyChannel]{@link proxyChannelManager.openProxyChannel}.
   * This method must be used together with [on('channelStateChange')]{@link proxyChannelManager.on(type: 'channelStateChange', channelId: number, callback: Callback<ChannelStateInfo>)}
   * to unregister the channel state change callback registered using **on('channelStateChange')**.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - Proxy channel ID obtained when the proxy channel is opened. The value ranges from
   *     1 to 2147483647. If an invalid or closed channel ID is used, error code 32390004 will be returned. If the
   *     value is out of range, error code 32390006 will be returned. This parameter takes effect only when the proxy
   *     channel is available. After the channel is closed or disconnected, the channel ID becomes unavailable.
   * @param { Callback<ChannelStateInfo> } [callback] - Registered callback. If this parameter is not passed, all
   *     channel state events are unsubscribed from. This parameter is not passed by default. The callback last
   *     registered using **on** needs to be passed to unsubscribe from the channel state events. If any other callback
   *     function is passed, the unsubscription will fail.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offChannelStateChange(channelId: int, callback?: Callback<ChannelStateInfo>): void;

  /**
   * Represents the received data, including the channel ID and data.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataInfo {
    /**
     * Proxy channel ID. The value ranges from 1 to 2147483647.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    channelId: int;

    /**
     * Received data, in bytes. The maximum value is **4096**.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    data: ArrayBuffer;
  }

  /**
   * Enumerates the link types.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum LinkType {
    /**
     * BR protocol, which is used to establish a bidirectional data channel with a wearable device through a BR link.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    LINK_BR = 0
  }

  /**
   * Represents the proxy channel information, including the link type of the proxy channel, MAC address of the peer
   * device, and service UUID.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface ChannelInfo {
    /**
     * Link type of the proxy channel. For details about the value range, see
     * [LinkType]{@link proxyChannelManager.LinkType}. Currently, only **LINK_BR** (BR protocol) is supported.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    linkType: LinkType;

    /**
     * MAC address of the peer device, in the format of **XX:XX:XX:XX:XX:XX**, where **XX** is a hexadecimal character
     * (0 to 9, A to F, or a to f). The peer device must have been paired. If not, error code 32390002 will be returned.
     * If the format does not meet requirements, error code 32390006 will be returned.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    peerDevAddr: string;

    /**
     * Service UUID of the peer device. The value is a standard UUID string, for example,
     * **xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx**. If the format does not meet requirements,
     * error code 32390006 will be returned.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    peerUuid: string;
  }

  /**
   * Enumerates the connection states of the proxy channel.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum ChannelState {
    /**
     * The connection is disconnected, and the channel is unavailable.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    CHANNEL_WAIT_RESUME = 0,

    /**
     * The connection is restored, and the channel is available.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    CHANNEL_RESUME = 1,

    /**
     * The channel is unavailable due to a software exception, such as an internal protocol stack error or resource
     * allocation failure. You are advised to check the logs to locate the cause.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    CHANNEL_EXCEPTION_SOFTWARE_FAILED = 2,

    /**
     * The Bluetooth pairing relationship is deleted, and the channel is unavailable.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    CHANNEL_BR_NO_PAIRED = 3
  }

  /**
   * Represents the connection state information of the proxy channel.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface ChannelStateInfo {
    /**
     * Proxy channel ID. The value ranges from 1 to 2147483647.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    channelId: int;

    /**
     * Channel connection states. For details, see [ChannelState]{@link proxyChannelManager.ChannelState}. You are
     * advised to adjust service policies based on different status values. For example, suspend data transmission when
     * the channel is disconnected and retry services after the channel is reconnected.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    state: ChannelState;
  }
}
export default proxyChannelManager;