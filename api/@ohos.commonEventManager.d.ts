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
 * @file
 * @kit BasicServicesKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import { CommonEventData as _CommonEventData } from './commonEvent/commonEventData';
import { CommonEventSubscriber as _CommonEventSubscriber } from './commonEvent/commonEventSubscriber';
import { CommonEventSubscribeInfo as _CommonEventSubscribeInfo } from './commonEvent/commonEventSubscribeInfo';
import { CommonEventPublishData as _CommonEventPublishData } from './commonEvent/commonEventPublishData';

/**
 * The CommonEventManager module provides common event capabilities, including the capabilities to publish, subscribe to, and unsubscribe from common events.
 *
 * @namespace commonEventManager
 * @syscap SystemCapability.Notification.CommonEvent
 * @since 9
 */
/**
 * The CommonEventManager module provides common event capabilities, including the capabilities to publish, subscribe to, and unsubscribe from common events.
 *
 * @namespace commonEventManager
 * @syscap SystemCapability.Notification.CommonEvent
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace commonEventManager {
  /**
   * Publishes a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { string } event - Name of the common event to publish. For details, see System Common Events.
   * @param { AsyncCallback<void> } callback - Callback to execute after the event is published.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  /**
   * Publishes a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { string } event - Name of the common event to publish. For details, see System Common Events.
   * @param { AsyncCallback<void> } callback - Callback to execute after the event is published.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since 11
   */
  /**
   * Publishes a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { string } event - Name of the common event to publish. For details, see System Common Events.
   * @param { AsyncCallback<void> } callback - Callback to execute after the event is published.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Publishes a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { string } event - Name of the common event to publish. For details, see System Common Events.
   * @param { AsyncCallback<void> } callback - Callback to execute after the event is published.
   * @throws { BusinessError } 1500003 - The common event sending frequency too high.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function publish(event: string, callback: AsyncCallback<void>): void;

  /**
   * Publishes a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { string } event - Name of the common event to publish. For details, see System Common Events.
   * @param { CommonEventPublishData } options - Attributes of the common event to publish.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  /**
   * Publishes a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { string } event - Name of the common event to publish. For details, see System Common Events.
   * @param { CommonEventPublishData } options - Attributes of the common event to publish.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since 11
   */
  /**
   * Publishes a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { string } event - Name of the common event to publish. For details, see System Common Events.
   * @param { CommonEventPublishData } options - Attributes of the common event to publish.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Publishes a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { string } event - Name of the common event to publish. For details, see System Common Events.
   * @param { CommonEventPublishData } options - Attributes of the common event to publish.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 1500003 - The common event sending frequency too high.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>): void;

  /**
   * Publishes an ordered, sticky, or standard common event to a specified user.
   *
   * @param { string } event - Specified the names of the common events.
   * @param { number } userId - Specified the user to receive the common events.
   * @param { AsyncCallback<void> } callback - The callback of publishAsUser.
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since 9
   */
  /**
   * Publishes an ordered, sticky, or standard common event to a specified user.
   *
   * @param { string } event - Specified the names of the common events.
   * @param { number } userId - Specified the user to receive the common events.
   * @param { AsyncCallback<void> } callback - The callback of publishAsUser.
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 1500003 - The common event sending frequency too high.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function publishAsUser(event: string, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Publishes an ordered, sticky, or standard common event to a specified user.
   *
   * @param { string } event - Specified the names of the common events.
   * @param { number } userId - Specified the user to receive the common events.
   * @param { CommonEventPublishData } options - Indicates the CommonEventPublishData containing the common event
   *                                             content and attributes.
   * @param { AsyncCallback<void> } callback - The callback of publishAsUser.
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since 9
   */
    /**
   * Publishes an ordered, sticky, or standard common event to a specified user.
   *
   * @param { string } event - Specified the names of the common events.
   * @param { number } userId - Specified the user to receive the common events.
   * @param { CommonEventPublishData } options - Indicates the CommonEventPublishData containing the common event
   *                                             content and attributes.
   * @param { AsyncCallback<void> } callback - The callback of publishAsUser.
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 1500003 - The common event sending frequency too high.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function publishAsUser(
    event: string,
    userId: number,
    options: CommonEventPublishData,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Creates a subscriber. This API uses an asynchronous callback to return the result.
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - Subscriber information.
   * @param { AsyncCallback<CommonEventSubscriber> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  /**
   * Creates a subscriber. This API uses an asynchronous callback to return the result.
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - Subscriber information.
   * @param { AsyncCallback<CommonEventSubscriber> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createSubscriber(
    subscribeInfo: CommonEventSubscribeInfo,
    callback: AsyncCallback<CommonEventSubscriber>
  ): void;

  /**
   * Creates a subscriber. This API uses a promise to return the result.
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - Subscriber information.
   * @returns { Promise<CommonEventSubscriber> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  /**
   * Creates a subscriber. This API uses a promise to return the result.
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - Subscriber information.
   * @returns { Promise<CommonEventSubscriber> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createSubscriber(subscribeInfo: CommonEventSubscribeInfo): Promise<CommonEventSubscriber>;

  /**
   * Creates a subscriber. The API returns the result synchronously.
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - Subscriber information.
   * @returns { CommonEventSubscriber } Promise used to return the subscriber object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Creates a subscriber. The API returns the result synchronously.
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - Subscriber information.
   * @returns { CommonEventSubscriber } Promise used to return the subscriber object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createSubscriberSync(subscribeInfo: CommonEventSubscribeInfo): CommonEventSubscriber;

  /**
   * Subscribes to a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { CommonEventSubscriber } subscriber - Subscriber object.
   * @param { AsyncCallback<CommonEventData> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - capability not supported
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  /**
   * Subscribes to a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { CommonEventSubscriber } subscriber - Subscriber object.
   * @param { AsyncCallback<CommonEventData> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - capability not supported
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Subscribes to a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { CommonEventSubscriber } subscriber - Subscriber object.
   * @param { AsyncCallback<CommonEventData> } callback - Callback used to return the result.
   * @throws { BusinessError } 801 - capability not supported
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500010 - The count of subscriber exceed system specification.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function subscribe(subscriber: CommonEventSubscriber, callback: AsyncCallback<CommonEventData>): void;

  /**
   * Subscribes to a common event, and returns the result by promise that resolves with a success or
   * <br> rejects with a failure code.
   *
   * @param { CommonEventSubscriber } subscriber - Indicate the subscriber of the common event.
   * @param { Callback<CommonEventData> } callback - The callback function used to receive the CommonEventData object.
   * @returns { Promise<void> } A promise that indicates whether the subscription was successful.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500010 - The count of subscriber exceed system specification.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  function subscribeToEvent(subscriber: CommonEventSubscriber, callback: Callback<CommonEventData>): Promise<void>;

  /**
   * Unsubscribes from a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { CommonEventSubscriber } subscriber - Subscriber object.
   * @param { AsyncCallback<void> } [callback] - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - capability not supported
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  /**
   * Unsubscribes from a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { CommonEventSubscriber } subscriber - Subscriber object.
   * @param { AsyncCallback<void> } [callback] - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - capability not supported
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function unsubscribe(subscriber: CommonEventSubscriber, callback?: AsyncCallback<void>): void;

  /**
   * Remove sticky common event.
   *
   * @permission ohos.permission.COMMONEVENT_STICKY
   * @param { string } event - name of the common event.
   * @param { AsyncCallback<void> } callback - The callback of removeStickyCommonEvent.
   * @throws { BusinessError } 201 - The application dose not have permission to call the interface
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500004 - A third-party application cannot send system common events.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function removeStickyCommonEvent(event: string, callback: AsyncCallback<void>): void;

  /**
   * Remove sticky common event.
   *
   * @permission ohos.permission.COMMONEVENT_STICKY
   * @param { string } event - name of the common event.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - The application dose not have permission to call the interface
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500004 - A third-party application cannot send system common events.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function removeStickyCommonEvent(event: string): Promise<void>;

  /**
   * Set static subscriber state.
   *
   * @param { boolean } enable - static subscribe event enable/disable state.
   * @param { AsyncCallback<void> } callback - Specified callback method.
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function setStaticSubscriberState(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set static subscriber state.
   *
   * @param { boolean } enable - static subscribe event enable/disable state.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function setStaticSubscriberState(enable: boolean): Promise<void>;

  /**
   * Set static subscriber state.
   *
   * @param { boolean } enable - static subscribe event enable/disable state.
   * @param { Array<string> } events - The events array.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function setStaticSubscriberState(enable: boolean, events?: Array<string>): Promise<void>;

  /**
   * The event type that the commonEvent supported.
   *
   * @enum { string }
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  /**
   * The event type that the commonEvent supported.
   *
   * @enum { string }
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum Support {
    /**
     * This commonEvent means when the device is booted or system upgrade completed, and only be sent by system.
     * This API can be called only by system applications.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_BOOT_COMPLETED = 'usual.event.BOOT_COMPLETED',

    /**
     * This commonEvent means when the device finnish booting, but still in the locked state.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_LOCKED_BOOT_COMPLETED = 'usual.event.LOCKED_BOOT_COMPLETED',

    /**
     * This commonEvent means when the device is shutting down, note: turn off, not sleeping.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SHUTDOWN = 'usual.event.SHUTDOWN',

    /**
     * This commonEvent means when the charging state, level and so on about the battery.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_BATTERY_CHANGED = 'usual.event.BATTERY_CHANGED',

    /**
     * This commonEvent means when the device in low battery state..
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_BATTERY_LOW = 'usual.event.BATTERY_LOW',

    /**
     * This commonEvent means when the battery level is an ok state.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_BATTERY_OKAY = 'usual.event.BATTERY_OKAY',

    /**
     * This commonEvent means when the other power is connected to the device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_POWER_CONNECTED = 'usual.event.POWER_CONNECTED',

    /**
     * This commonEvent means when the other power is removed from the device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_POWER_DISCONNECTED = 'usual.event.POWER_DISCONNECTED',

    /**
     * This commonEvent means when the screen is turned off.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SCREEN_OFF = 'usual.event.SCREEN_OFF',

    /**
     * This commonEvent means when the device is awakened and interactive.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SCREEN_ON = 'usual.event.SCREEN_ON',

    /**
     * This commonEvent means when the thermal state level change
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_THERMAL_LEVEL_CHANGED = 'usual.event.THERMAL_LEVEL_CHANGED',

    /**
     * This commonEvent means when the device is about to enter the force sleep mode
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_ENTER_FORCE_SLEEP = 'usual.event.ENTER_FORCE_SLEEP',

    /**
     * This commonEvent means when the device exits the force sleep mode
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_EXIT_FORCE_SLEEP = 'usual.event.EXIT_FORCE_SLEEP',

    /**
     * This commonEvent means when the device is about to enter the hibernate mode
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'15', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_ENTER_HIBERNATE = 'usual.event.ENTER_HIBERNATE',

    /**
     * This commonEvent means when the device exits the hibernate mode
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'15', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_EXIT_HIBERNATE = 'usual.event.EXIT_HIBERNATE',

    /**
     * This commonEvent means when the user is present after the device is awakened.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 10
     */
    COMMON_EVENT_USER_PRESENT = 'usual.event.USER_PRESENT',

    /**
     * This commonEvent means when the current time is changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_TIME_TICK = 'usual.event.TIME_TICK',

    /**
     * This commonEvent means when the time is set.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_TIME_CHANGED = 'usual.event.TIME_CHANGED',

    /**
     * This commonEvent means when the current date is changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DATE_CHANGED = 'usual.event.DATE_CHANGED',

    /**
     * This commonEvent means when the time zone is changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_TIMEZONE_CHANGED = 'usual.event.TIMEZONE_CHANGED',

    /**
     * This commonEvent means when the dialog to dismiss.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_CLOSE_SYSTEM_DIALOGS = 'usual.event.CLOSE_SYSTEM_DIALOGS',

    /**
     * This commonEvent means when a new application package is installed on the device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGE_ADDED = 'usual.event.PACKAGE_ADDED',

    /**
     * This commonEvent means when a new version application package is installed on the device and
     * replace the old version.the data contains the name of the package.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGE_REPLACED = 'usual.event.PACKAGE_REPLACED',

    /**
     * This commonEvent means when a new version application package is installed on the device and
     * replace the old version, it does not contain additional data and only be sent to the replaced application.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_MY_PACKAGE_REPLACED = 'usual.event.MY_PACKAGE_REPLACED',

    /**
     * This commonEvent means when an existing application package is removed from the device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGE_REMOVED = 'usual.event.PACKAGE_REMOVED',

    /**
     * This commonEvent means when an existing application package is removed from the device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_BUNDLE_REMOVED = 'usual.event.BUNDLE_REMOVED',

    /**
     * This commonEvent means when an existing application package is completely removed from the device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGE_FULLY_REMOVED = 'usual.event.PACKAGE_FULLY_REMOVED',

    /**
     * This commonEvent means when an existing application package has been changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGE_CHANGED = 'usual.event.PACKAGE_CHANGED',

    /**
     * This commonEvent means the user has restarted a package, and all of its processes have been killed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGE_RESTARTED = 'usual.event.PACKAGE_RESTARTED',

    /**
     * This commonEvent means the user has cleared the package data.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGE_DATA_CLEARED = 'usual.event.PACKAGE_DATA_CLEARED',

    /**
     * This commonEvent means the user has cleared the package cache.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGE_CACHE_CLEARED = 'usual.event.PACKAGE_CACHE_CLEARED',

    /**
     * This commonEvent means the packages have been suspended.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGES_SUSPENDED = 'usual.event.PACKAGES_SUSPENDED',

    /**
     * This commonEvent means the packages have been un-suspended.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGES_UNSUSPENDED = 'usual.event.PACKAGES_UNSUSPENDED',

    /**
     * This commonEvent Sent to a package that has been suspended by the system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_MY_PACKAGE_SUSPENDED = 'usual.event.MY_PACKAGE_SUSPENDED',

    /**
     * Sent to a package that has been un-suspended.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_MY_PACKAGE_UNSUSPENDED = 'usual.event.MY_PACKAGE_UNSUSPENDED',

    /**
     * A user id has been removed from the system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_UID_REMOVED = 'usual.event.UID_REMOVED',

    /**
     * The application is first launched after installed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGE_FIRST_LAUNCH = 'usual.event.PACKAGE_FIRST_LAUNCH',

    /**
     * Sent by system package verifier when a package need to be verified.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGE_NEEDS_VERIFICATION = 'usual.event.PACKAGE_NEEDS_VERIFICATION',

    /**
     * Sent by system package verifier when a package is verified.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGE_VERIFIED = 'usual.event.PACKAGE_VERIFIED',

    /**
     * Resources for a set of packages (which were previously unavailable) are currently
     * available since the media on which they exist is available.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_EXTERNAL_APPLICATIONS_AVAILABLE = 'usual.event.EXTERNAL_APPLICATIONS_AVAILABLE',

    /**
     * Resources for a set of packages are currently unavailable since the media on which they exist is unavailable.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_EXTERNAL_APPLICATIONS_UNAVAILABLE = 'usual.event.EXTERNAL_APPLICATIONS_UNAVAILABLE',

    /**
     * The device configuration such as orientation,locale have been changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_CONFIGURATION_CHANGED = 'usual.event.CONFIGURATION_CHANGED',

    /**
     * The current device's locale has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_LOCALE_CHANGED = 'usual.event.LOCALE_CHANGED',

    /**
     *  Indicates low memory condition notification acknowledged by user and package management should be started.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_MANAGE_PACKAGE_STORAGE = 'usual.event.MANAGE_PACKAGE_STORAGE',

    /**
     * Send by the smart function when the system in drive mode.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DRIVE_MODE = 'common.event.DRIVE_MODE',

    /**
     * Send by the smart function when the system in home mode.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_HOME_MODE = 'common.event.HOME_MODE',

    /**
     * Send by the smart function when the system in office mode.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_OFFICE_MODE = 'common.event.OFFICE_MODE',

    /**
     * Remind new user of preparing to start.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USER_STARTED = 'usual.event.USER_STARTED',

    /**
     * Remind previous user of that the service has been the background.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USER_BACKGROUND = 'usual.event.USER_BACKGROUND',

    /**
     * Remind new user of that the service has been the foreground.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USER_FOREGROUND = 'usual.event.USER_FOREGROUND',

    /**
     * Remind new user of that the service has been switched to new user.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * This API can be called only by system applications.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USER_SWITCHED = 'usual.event.USER_SWITCHED',

    /**
     * Remind new user of that the service has been starting.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * This API can be called only by system applications.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USER_STARTING = 'usual.event.USER_STARTING',

    /**
     * Remind new user of that the service has been unlocked.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USER_UNLOCKED = 'usual.event.USER_UNLOCKED',

    /**
     * Indicates the target user (i.e the OS account) is going to be locked.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USER_LOCKING = 'usual.event.USER_LOCKING',

    /**
     * Indicates the target user (i.e the OS acount) is locked.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USER_LOCKED = 'usual.event.USER_LOCKED',

    /**
     * Remind new user of that the service has been stopping.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * This API can be called only by system applications.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USER_STOPPING = 'usual.event.USER_STOPPING',

    /**
     * Remind new user of that the service has stopped.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USER_STOPPED = 'usual.event.USER_STOPPED',

    /**
     * Distributed account login successfully.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     */
    /**
     * Distributed account login successfully.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGIN = 'common.event.DISTRIBUTED_ACCOUNT_LOGIN',

    /**
     * Distributed account logout successfully.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     */
    /**
     * Distributed account logout successfully.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGOUT = 'common.event.DISTRIBUTED_ACCOUNT_LOGOUT',

    /**
     * Distributed account is invalid.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     */
    /**
     * Distributed account is invalid.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_TOKEN_INVALID = 'common.event.DISTRIBUTED_ACCOUNT_TOKEN_INVALID',

    /**
     * Distributed account logs off.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     */
    /**
     * Distributed account logs off.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGOFF = 'common.event.DISTRIBUTED_ACCOUNT_LOGOFF',

    /**
     * WIFI state.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_POWER_STATE = 'usual.event.wifi.POWER_STATE',

    /**
     * WIFI scan results.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_SCAN_FINISHED = 'usual.event.wifi.SCAN_FINISHED',

    /**
     * WIFI RSSI change.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_RSSI_VALUE = 'usual.event.wifi.RSSI_VALUE',

    /**
     * WIFI connect state.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_CONN_STATE = 'usual.event.wifi.CONN_STATE',

    /**
     * WIFI hotspot state.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_HOTSPOT_STATE = 'usual.event.wifi.HOTSPOT_STATE',

    /**
     * WIFI ap sta join.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_AP_STA_JOIN = 'usual.event.wifi.WIFI_HS_STA_JOIN',

    /**
     * WIFI ap sta join.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_AP_STA_LEAVE = 'usual.event.wifi.WIFI_HS_STA_LEAVE',

    /**
     * Indicates Wi-Fi MpLink state notification acknowledged by binding or unbinding MpLink.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_MPLINK_STATE_CHANGE = 'usual.event.wifi.mplink.STATE_CHANGE',

    /**
     * Indicates Wi-Fi P2P connection state notification acknowledged by connecting or disconnected P2P.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_P2P_CONN_STATE = 'usual.event.wifi.p2p.CONN_STATE_CHANGE',

    /**
     * Indicates that the Wi-Fi P2P state change.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_P2P_STATE_CHANGED = 'usual.event.wifi.p2p.STATE_CHANGE',

    /**
     * Indicates that the Wi-Fi P2P peers state change.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_P2P_PEERS_STATE_CHANGED = 'usual.event.wifi.p2p.DEVICES_CHANGE',

    /**
     * Indicates that the Wi-Fi P2P discovery state change.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_P2P_PEERS_DISCOVERY_STATE_CHANGED = 'usual.event.wifi.p2p.PEER_DISCOVERY_STATE_CHANGE',

    /**
     * Indicates that the Wi-Fi P2P current device state change.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_P2P_CURRENT_DEVICE_STATE_CHANGED = 'usual.event.wifi.p2p.CURRENT_DEVICE_CHANGE',

    /**
     * Indicates that the Wi-Fi P2P group info is changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_WIFI_P2P_GROUP_STATE_CHANGED = 'usual.event.wifi.p2p.GROUP_STATE_CHANGED',

    /**
     * Bluetooth.handsfree.ag.connect.state.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CONNECT_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CONNECT_STATE_UPDATE =
        "usual.event.bluetooth.handsfree.ag.CONNECT_STATE_UPDATE",

    /**
     * Bluetooth.handsfree.ag.current.device.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CURRENT_DEVICE_UPDATE =
        "usual.event.bluetooth.handsfree.ag.CURRENT_DEVICE_UPDATE",

    /**
     * Bluetooth.handsfree.ag.audio.state.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_AUDIO_STATE_UPDATE =
        "usual.event.bluetooth.handsfree.ag.AUDIO_STATE_UPDATE",

    /**
     * Bluetooth.a2dpsource.connect.state.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CONNECT_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CONNECT_STATE_UPDATE =
        "usual.event.bluetooth.a2dpsource.CONNECT_STATE_UPDATE",

    /**
     * Bluetooth.a2dpsource.current.device.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CURRENT_DEVICE_UPDATE =
        "usual.event.bluetooth.a2dpsource.CURRENT_DEVICE_UPDATE",

    /**
     * Bluetooth.a2dpsource.playing.state.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_PLAYING_STATE_UPDATE =
        "usual.event.bluetooth.a2dpsource.PLAYING_STATE_UPDATE",

    /**
     * Bluetooth.a2dpsource.avrcp.connect.state.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_AVRCP_CONNECT_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_AVRCP_CONNECT_STATE_UPDATE =
        "usual.event.bluetooth.a2dpsource.AVRCP_CONNECT_STATE_UPDATE",

    /**
     * Bluetooth.a2dpsource.codec.value.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CODEC_VALUE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CODEC_VALUE_UPDATE =
        "usual.event.bluetooth.a2dpsource.CODEC_VALUE_UPDATE",

    /**
     * Bluetooth.remotedevice.discovered.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_DISCOVERED =
        "usual.event.bluetooth.remotedevice.DISCOVERED",

    /**
     * Bluetooth.remotedevice.class.value.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CLASS_VALUE_UPDATE =
        "usual.event.bluetooth.remotedevice.CLASS_VALUE_UPDATE",

    /**
     * Bluetooth.remotedevice.acl.connected.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_CONNECTED =
        "usual.event.bluetooth.remotedevice.ACL_CONNECTED",

    /**
     * Bluetooth.remotedevice.acl.disconnected.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_DISCONNECTED =
        "usual.event.bluetooth.remotedevice.ACL_DISCONNECTED",

    /**
     * Bluetooth.remotedevice.name.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_NAME_UPDATE =
        "usual.event.bluetooth.remotedevice.NAME_UPDATE",

    /**
     * Bluetooth.remotedevice.pair.state.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIR_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIR_STATE =
        "usual.event.bluetooth.remotedevice.PAIR_STATE",

    /**
     * Bluetooth.remotedevice.battery.value.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_BATTERY_VALUE_UPDATE =
        "usual.event.bluetooth.remotedevice.BATTERY_VALUE_UPDATE",

    /**
     * Bluetooth.remotedevice.sdp.result.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_SDP_RESULT =
        "usual.event.bluetooth.remotedevice.SDP_RESULT",

    /**
     * Bluetooth.remotedevice.uuid.value.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_UUID_VALUE =
        "usual.event.bluetooth.remotedevice.UUID_VALUE",

    /**
     * Bluetooth.remotedevice.pairing.req.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_REQ =
        "usual.event.bluetooth.remotedevice.PAIRING_REQ",

    /**
     * Bluetooth.remotedevice.pairing.cancel.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_CANCEL =
        "usual.event.bluetooth.remotedevice.PAIRING_CANCEL",

    /**
     * Bluetooth.remotedevice.connect.req.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REQ =
        "usual.event.bluetooth.remotedevice.CONNECT_REQ",

    /**
     * Bluetooth.remotedevice.connect.reply.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REPLY =
        "usual.event.bluetooth.remotedevice.CONNECT_REPLY",

    /**
     * Bluetooth.remotedevice.connect.cancel.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_CANCEL =
        "usual.event.bluetooth.remotedevice.CONNECT_CANCEL",

    /**
     * Bluetooth.handsfreeunit.connect.state.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_CONNECT_STATE_UPDATE =
        "usual.event.bluetooth.handsfreeunit.CONNECT_STATE_UPDATE",

    /**
     * Bluetooth.handsfreeunit.audio.state.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AUDIO_STATE_UPDATE =
        "usual.event.bluetooth.handsfreeunit.AUDIO_STATE_UPDATE",

    /**
     * Bluetooth.handsfreeunit.ag.common.event.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_COMMON_EVENT =
        "usual.event.bluetooth.handsfreeunit.AG_COMMON_EVENT",

    /**
     * Bluetooth.handsfreeunit.ag.call.state.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_CALL_STATE_UPDATE =
        "usual.event.bluetooth.handsfreeunit.AG_CALL_STATE_UPDATE",

    /**
     * Bluetooth.host.state.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_STATE_UPDATE =
        "usual.event.bluetooth.host.STATE_UPDATE",

    /**
     * Bluetooth.host.req.discoverable.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_DISCOVERABLE =
        "usual.event.bluetooth.host.REQ_DISCOVERABLE",

    /**
     * Bluetooth.host.req.enable.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_ENABLE = "usual.event.bluetooth.host.REQ_ENABLE",

    /**
     * Bluetooth.host.req.disable.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_DISABLE =
        "usual.event.bluetooth.host.REQ_DISABLE",

    /**
     * Bluetooth.host.scan.mode.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_SCAN_MODE_UPDATE =
        "usual.event.bluetooth.host.SCAN_MODE_UPDATE",

    /**
     * Bluetooth.host.discovery.stated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_STARTED =
        "usual.event.bluetooth.host.DISCOVERY_STARTED",

    /**
     * Bluetooth.host.discovery.finished.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_FINISHED =
        "usual.event.bluetooth.host.DISCOVERY_FINISHED",

    /**
     * Bluetooth.host.name.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_NAME_UPDATE =
        "usual.event.bluetooth.host.NAME_UPDATE",

    /**
     * Bluetooth.a2dp.connect.state.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_CONNECT_STATE_UPDATE =
        "usual.event.bluetooth.a2dpsink.CONNECT_STATE_UPDATE",

    /**
     * Bluetooth.a2dp.playing.state.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_PLAYING_STATE_UPDATE =
        "usual.event.bluetooth.a2dpsink.PLAYING_STATE_UPDATE",

    /**
     * Bluetooth.a2dp.audio.state.update.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_AUDIO_STATE_UPDATE =
        "usual.event.bluetooth.a2dpsink.AUDIO_STATE_UPDATE",

    /**
     * Nfc state change.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_NFC_ACTION_ADAPTER_STATE_CHANGED = 'usual.event.nfc.action.ADAPTER_STATE_CHANGED',

    /**
     * Nfc field on detected.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_NFC_ACTION_RF_FIELD_ON_DETECTED = 'usual.event.nfc.action.RF_FIELD_ON_DETECTED',

    /**
     * Nfc field off detected.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_NFC_ACTION_RF_FIELD_OFF_DETECTED = 'usual.event.nfc.action.RF_FIELD_OFF_DETECTED',

    /**
     * Sent when stop charging battery.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DISCHARGING = 'usual.event.DISCHARGING',

    /**
     * Sent when start charging battery.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_CHARGING = 'usual.event.CHARGING',

    /**
     * Sent when charge type changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_CHARGE_TYPE_CHANGED = 'usual.event.CHARGE_TYPE_CHANGED',

    /**
     * Sent when device's idle mode changed
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DEVICE_IDLE_MODE_CHANGED = 'usual.event.DEVICE_IDLE_MODE_CHANGED',

    /**
     * Sent when device's charge idle mode changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_CHARGE_IDLE_MODE_CHANGED = 'usual.event.CHARGE_IDLE_MODE_CHANGED',

    /**
     * Sent when the list of exempt applications in idle mode is updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DEVICE_IDLE_EXEMPTION_LIST_UPDATED = 'usual.event.DEVICE_IDLE_EXEMPTION_LIST_UPDATED',

    /**
     * Sent when device's power save mode changed
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_POWER_SAVE_MODE_CHANGED = 'usual.event.POWER_SAVE_MODE_CHANGED',

    /**
     * User added.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * This API can be called only by system applications.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USER_ADDED = 'usual.event.USER_ADDED',

    /**
     * User removed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * This API can be called only by system applications.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USER_REMOVED = 'usual.event.USER_REMOVED',

    /**
     * Sent when ability is added.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_ABILITY_ADDED = 'common.event.ABILITY_ADDED',

    /**
     * Sent when ability is removed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_ABILITY_REMOVED = 'common.event.ABILITY_REMOVED',

    /**
     * Sent when ability is updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_ABILITY_UPDATED = 'common.event.ABILITY_UPDATED',

    /**
     * Gps mode state changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_LOCATION_MODE_STATE_CHANGED = 'usual.event.location.MODE_STATE_CHANGED',

    /**
     * The ivi is about to go into sleep state when the ivi is turned off power.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_IVI_SLEEP = 'common.event.IVI_SLEEP',

    /**
     * The ivi is slept and notify the app stop playing.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_IVI_PAUSE = 'common.event.IVI_PAUSE',

    /**
     * The ivi is standby and notify the app stop playing.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_IVI_STANDBY = 'common.event.IVI_STANDBY',

    /**
     * The app stop playing and save state.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_IVI_LASTMODE_SAVE = 'common.event.IVI_LASTMODE_SAVE',

    /**
     * The ivi is voltage abnormal.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_IVI_VOLTAGE_ABNORMAL = 'common.event.IVI_VOLTAGE_ABNORMAL',

    /**
     * The ivi temperature is too high.
     * This is a protected common event that can only be sent by system.this common event will be delete later,
     * please use COMMON_EVENT_IVI_TEMPERATURE_ABNORMAL.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_IVI_HIGH_TEMPERATURE = 'common.event.IVI_HIGH_TEMPERATURE',

    /**
     * The ivi temperature is extreme high.
     * This is a protected common event that can only be sent by system.this common event will be delete later,
     * please use COMMON_EVENT_IVI_TEMPERATURE_ABNORMAL.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_IVI_EXTREME_TEMPERATURE = 'common.event.IVI_EXTREME_TEMPERATURE',

    /**
     * The ivi temperature is abnormal.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_IVI_TEMPERATURE_ABNORMAL = 'common.event.IVI_TEMPERATURE_ABNORMAL',

    /**
     * The ivi voltage is recovery.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_IVI_VOLTAGE_RECOVERY = 'common.event.IVI_VOLTAGE_RECOVERY',

    /**
     * The ivi temperature is recovery.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_IVI_TEMPERATURE_RECOVERY = 'common.event.IVI_TEMPERATURE_RECOVERY',

    /**
     * The battery service is active.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_IVI_ACTIVE = 'common.event.IVI_ACTIVE',

    /**
     * The usb state change events.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USB_STATE = 'usual.event.hardware.usb.action.USB_STATE',

    /**
     * The usb port changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USB_PORT_CHANGED = 'usual.event.hardware.usb.action.USB_PORT_CHANGED',

    /**
     * The usb device attached.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USB_DEVICE_ATTACHED = 'usual.event.hardware.usb.action.USB_DEVICE_ATTACHED',

    /**
     * The usb device detached.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USB_DEVICE_DETACHED = 'usual.event.hardware.usb.action.USB_DEVICE_DETACHED',

    /**
     * The usb accessory attached.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USB_ACCESSORY_ATTACHED = 'usual.event.hardware.usb.action.USB_ACCESSORY_ATTACHED',

    /**
     * The usb accessory detached.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USB_ACCESSORY_DETACHED = 'usual.event.hardware.usb.action.USB_ACCESSORY_DETACHED',

    /**
     * The external storage was removed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DISK_REMOVED = 'usual.event.data.DISK_REMOVED',

    /**
     * The external storage was unmounted.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DISK_UNMOUNTED = 'usual.event.data.DISK_UNMOUNTED',

    /**
     * The external storage was mounted.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DISK_MOUNTED = 'usual.event.data.DISK_MOUNTED',

    /**
     * The external storage was bad removal.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DISK_BAD_REMOVAL = 'usual.event.data.DISK_BAD_REMOVAL',

    /**
     * The external storage was unmountable.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DISK_UNMOUNTABLE = 'usual.event.data.DISK_UNMOUNTABLE',

    /**
     * The external storage was eject.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DISK_EJECT = 'usual.event.data.DISK_EJECT',

    /**
     * The external storage was removed.
     * This is a protected common event that can only be sent by system.
     * This API can be called only by system applications.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_VOLUME_REMOVED = 'usual.event.data.VOLUME_REMOVED',

    /**
     * The external storage was unmounted.
     * This is a protected common event that can only be sent by system.
     * This API can be called only by system applications.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_VOLUME_UNMOUNTED = 'usual.event.data.VOLUME_UNMOUNTED',

    /**
     * The external storage was mounted.
     * This is a protected common event that can only be sent by system.
     * This API can be called only by system applications.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_VOLUME_MOUNTED = 'usual.event.data.VOLUME_MOUNTED',

    /**
     * The external storage was bad removal.
     * This is a protected common event that can only be sent by system.
     * This API can be called only by system applications.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_VOLUME_BAD_REMOVAL = 'usual.event.data.VOLUME_BAD_REMOVAL',

    /**
     * The external storage was eject.
     * This is a protected common event that can only be sent by system.
     * This API can be called only by system applications.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_VOLUME_EJECT = 'usual.event.data.VOLUME_EJECT',

    /**
     * The visible of account was updated.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_VISIBLE_ACCOUNTS_UPDATED = 'usual.event.data.VISIBLE_ACCOUNTS_UPDATED',

    /**
     * Account was deleted.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * This API can be called only by system applications.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_ACCOUNT_DELETED = 'usual.event.data.ACCOUNT_DELETED',

    /**
     * Foundation was ready.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_FOUNDATION_READY = 'common.event.FOUNDATION_READY',

    /**
     * Indicates the common event Action indicating that the airplane mode status of the device changes.
     * Users can register this event to listen to the change of the airplane mode status of the device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_AIRPLANE_MODE_CHANGED = 'usual.event.AIRPLANE_MODE',

    /**
     * sent by the window manager service when the window mode is split.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    /**
     * sent by the window manager service when the window mode is split.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SPLIT_SCREEN = 'common.event.SPLIT_SCREEN',

    /**
     * The notification slot has been updated.
     * This is a protected common event that can only be sent by system.
     * This API can be called only by system applications.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SLOT_CHANGE = 'usual.event.SLOT_CHANGE',

    /**
     * Indicate the action of a common event that the spn display information has been updated.
     * This common event can be triggered only by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SPN_INFO_CHANGED = 'usual.event.SPN_INFO_CHANGED',

    /**
     * Indicate the result of quick fix apply.
     * This common event can be triggered only by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_QUICK_FIX_APPLY_RESULT = 'usual.event.QUICK_FIX_APPLY_RESULT',

    /**
     * Indicate the result of quick fix revoke.
     * This common event can be triggered only by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_QUICK_FIX_REVOKE_RESULT = 'usual.event.QUICK_FIX_REVOKE_RESULT',

    /**
     * Indicate the action of a common event that the user information has been updated.
     * This common event can be triggered only by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_USER_INFO_UPDATED = 'usual.event.USER_INFO_UPDATED',

    /**
     * Indicate http proxy has been changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_HTTP_PROXY_CHANGE = 'usual.event.HTTP_PROXY_CHANGE',

    /**
     * Indicates the action of a common event that the phone SIM card state has changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SIM_STATE_CHANGED = 'usual.event.SIM_STATE_CHANGED',

    /**
     * Indicate the action of a common event that a new sms bas been received by the device.
     * To subscribe to this common event, your application must have the ohos.permission.RECEIVE_SMS permission.
     * This common event can be triggered only by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SMS_RECEIVE_COMPLETED = 'usual.event.SMS_RECEIVE_COMPLETED',

    /**
     * Indicate the action of a common event that a new sms emergency cell broadcast bas been received by the device.
     * This common event can be triggered only by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SMS_EMERGENCY_CB_RECEIVE_COMPLETED = 'usual.event.SMS_EMERGENCY_CB_RECEIVE_COMPLETED',

    /**
     * Indicate the action of a common event that a new sms normal cell broadcast bas been received by the device.
     * This common event can be triggered only by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SMS_CB_RECEIVE_COMPLETED = 'usual.event.SMS_CB_RECEIVE_COMPLETED',

    /**
     * Indicate the action of a common event that a STK command has been received by the device.
     * To subscribe to this protected common event, your application must have the ohos.permission.STK_MESSAGES_RECEIVED
     * permission.
     * This common event can be triggered only by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_STK_COMMAND = 'usual.event.STK_COMMAND',

    /**
     * Indicate the action of a common event that STK session end.
     * To subscribe to this protected common event, your application must have the ohos.permission.STK_MESSAGES_RECEIVED
     * permission.
     * This common event can be triggered only by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_STK_SESSION_END = 'usual.event.STK_SESSION_END',

    /**
     * Indicate the action of a common event that the STK phone card state has changed.
     * To subscribe to this protected common event, your application must have the ohos.permission.STK_MESSAGES_RECEIVED
     * permission.
     * This common event can be triggered only by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_STK_CARD_STATE_CHANGED = 'usual.event.STK_CARD_STATE_CHANGED',

    /**
     * Indicate the action of a common event that an alpha string during call control has been received by the device.
     * To subscribe to this protected common event, your application must have the ohos.permission.STK_MESSAGES_RECEIVED
     * permission.
     * This common event can be triggered only by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_STK_ALPHA_IDENTIFIER = 'usual.event.STK_ALPHA_IDENTIFIER',

    /**
     * Indicate the action of a common event that a new sms wappush has been received by the device.
     * This common event can be triggered only by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SMS_WAPPUSH_RECEIVE_COMPLETED = 'usual.event.SMS_WAPPUSH_RECEIVE_COMPLETED',

    /**
     * Indicate the action of a common event that the operator config has been updated.
     * This common event can be triggered only by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_OPERATOR_CONFIG_CHANGED = 'usual.event.OPERATOR_CONFIG_CHANGED',

    /**
     * Indicates the action of a common event that the default SMS subscription has been changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_SMS_SUBSCRIPTION_CHANGED = 'usual.event.SIM.DEFAULT_SMS_SUBSCRIPTION_CHANGED',

    /**
     * Indicates the action of a common event that the default data subscription has been changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_DATA_SUBSCRIPTION_CHANGED = 'usual.event.SIM.DEFAULT_DATA_SUBSCRIPTION_CHANGED',

    /**
     * Indicates the action of a common event that the default main subscription has been changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_MAIN_SUBSCRIPTION_CHANGED = 'usual.event.SIM.DEFAULT_MAIN_SUBSCRIPTION_CHANGED',

    /**
     * Indicates the action of a common event that the status of setting primary slot has been changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SET_PRIMARY_SLOT_STATUS = 'usual.event.SET_PRIMARY_SLOT_STATUS',

    /**
     * Indicates the action of a common event that the roaming status of main card has been changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PRIMARY_SLOT_ROAMING = 'usual.event.PRIMARY_SLOT_ROAMING',

    /**
     * Indicates the action of a common event that the default voice subscription has been changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_VOICE_SUBSCRIPTION_CHANGED = 'usual.event.SIM.DEFAULT_VOICE_SUBSCRIPTION_CHANGED',

    /**
     * Indicates the action of a common event that the call state has been changed.
     * To subscribe to this protected common event, your application must have the ohos.permission.GET_TELEPHONY_STATE
     * permission.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_CALL_STATE_CHANGED = 'usual.event.CALL_STATE_CHANGED',

    /**
     * Indicates the action of a common event that the cellular data state has been changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_CELLULAR_DATA_STATE_CHANGED = 'usual.event.CELLULAR_DATA_STATE_CHANGED',

    /**
     * Indicates the action of a common event that the network state has been changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_NETWORK_STATE_CHANGED = 'usual.event.NETWORK_STATE_CHANGED',

    /**
     * Indicates the action of a common event that the signal info has been changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SIGNAL_INFO_CHANGED = 'usual.event.SIGNAL_INFO_CHANGED',

    /**
     * Indicates the action of a common event that the incoming call has been missed.
     * To subscribe to this protected common event, your application must have the ohos.permission.GET_TELEPHONY_STATE
     * permission.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_INCOMING_CALL_MISSED = 'usual.event.INCOMING_CALL_MISSED',

    /**
     * Indicates the action of a common event that radio state change.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_RADIO_STATE_CHANGE = 'usual.event.RADIO_STATE_CHANGE',

    /**
     * Indicate the action of a common event that domain account status has been changed.
     * To subscribe to this protected common event, your application must have the ohos.permission.GET_LOCAL_ACCOUNTS
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DOMAIN_ACCOUNT_STATUS_CHANGED = 'usual.event.DOMAIN_ACCOUNT_STATUS_CHANGED',

    /**
     * This commonEvent means when the screen is unlocked.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10
     */
    /**
     * This commonEvent means when the screen is unlocked.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SCREEN_UNLOCKED = 'usual.event.SCREEN_UNLOCKED',

    /**
     * This commonEvent means when the screen is locked.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10
     */
    /**
     * This commonEvent means when the screen is locked.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SCREEN_LOCKED = 'usual.event.SCREEN_LOCKED',

    /**
     * Indicates the action of a common event that the network connectivity changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10
     */
    /**
     * Indicates the action of a common event that the network connectivity changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_CONNECTIVITY_CHANGE = 'usual.event.CONNECTIVITY_CHANGE',

    /**
     * Indicates the action of a common event that special number has been entered by dialer
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'10', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SPECIAL_CODE = 'common.event.SPECIAL_CODE',

    /**
      * Indicates the action of a common event that audio quality change.
      * This is a protected common event that can only be sent by system.
      *
      * @syscap SystemCapability.Notification.CommonEvent
      * @systemapi
      * @since arkts {'1.1':'10', '1.2':'20'}
      * @arkts 1.1&1.2
      */
    COMMON_EVENT_AUDIO_QUALITY_CHANGE = 'usual.event.AUDIO_QUALITY_CHANGE',

    /**
     * Indicates the action of a common event that bluetooth handsfree ag connection state change.
     * To subscribe to this protected common event, your application must have the ohos.permission.ACCESS_BLUETOOTH
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CONNECT_STATE_CHANGE =
        "usual.event.bluetooth.handsfree.ag.CONNECT_STATE_CHANGE",

    /**
      * Indicates that the privacy status is changed.
      * This is a protected common event that can only be sent by system.
      *
      * @syscap SystemCapability.Notification.CommonEvent
      * @systemapi
      * @since arkts {'1.1':'11', '1.2':'20'}
      * @arkts 1.1&1.2
      */
    COMMON_EVENT_PRIVACY_STATE_CHANGED = 'usual.event.PRIVACY_STATE_CHANGED',

    /**
     * This commonEvent means when a new application package start to install on the device.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_PACKAGE_INSTALLATION_STARTED = 'usual.event.PACKAGE_INSTALLATION_STARTED',

    /**
     * This common event means an application package enables or disables a dynamic icon.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DYNAMIC_ICON_CHANGED = 'usual.event.DYNAMIC_ICON_CHANGED',

    /**
     * This common event means that minors mode is enabled.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_MINORSMODE_ON = 'usual.event.MINORSMODE_ON',

    /**
     * This common event means that minors mode is disabled.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_MINORSMODE_OFF = 'usual.event.MINORSMODE_OFF',

    /**
     * Indicates the action of a common event that the bundle resources have been changed.
     * To subscribe to this common event, your application must have the ohos.permission.GET_BUNDLE_RESOURCES
     * permission.
     * This is a protected common event, which can be sent only by the system.
     * 
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'15', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_BUNDLE_RESOURCES_CHANGED = 'usual.event.BUNDLE_RESOURCES_CHANGED',    

    /**
     * This common event means that datashare is ready.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DATA_SHARE_READY = 'usual.event.DATA_SHARE_READY',

    /**
     * This common event means that vpn connection status has been changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_VPN_CONNECTION_STATUS_CHANGED = 'usual.event.VPN_CONNECTION_STATUS_CHANGED',

    /**
     * Indicates that an application begins to restored.
     * To subscribe to this common event, your application must have the ohos.permission.START_RESTORE_NOTIFICATION
     * permission.
     * This is a protected common event that can only be sent by system.
     * 
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'13', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_RESTORE_START = 'usual.event.RESTORE_START',

    /**
     * Indicates the action of a common event that bluetooth a2dp source connection state change.
     * To subscribe to this protected common event, your application must have the ohos.permission.ACCESS_BLUETOOTH
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CONNECT_STATE_CHANGE =
        "usual.event.bluetooth.a2dpsource.CONNECT_STATE_CHANGE",

    /**
     * Indicates the action of a common event that bluetooth avrcp connection state change.
     * To subscribe to this protected common event, your application must have the ohos.permission.ACCESS_BLUETOOTH
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_AVRCP_CONNECT_STATE_CHANGE =
        "usual.event.bluetooth.a2dpsource.AVRCP_CONNECT_STATE_CHANGE",

    /**
     * Indicates the action of a common event that bluetooth codec change.
     * To subscribe to this protected common event, your application must have the ohos.permission.ACCESS_BLUETOOTH
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CODEC_VALUE_CHANGE =
        "usual.event.bluetooth.a2dpsource.CODEC_VALUE_CHANGE",

    /**
     * Indicates the action of a common event that bluetooth remote device acl state change.
     * To subscribe to this protected common event, your application must have the ohos.permission.ACCESS_BLUETOOTH
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_STATE_CHANGE = 
        "usual.event.bluetooth.remotedevice.ACL_STATE_CHANGE",

    /**
     * Indicates the action of a common event that bluetooth pair state change.
     * To subscribe to this protected common event, your application must have the ohos.permission.ACCESS_BLUETOOTH
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIR_STATE_CHANGE =
        "usual.event.bluetooth.remotedevice.PAIR_STATE_CHANGE",

    /**
     * Indicates that the managed browser policy is changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since arkts {'1.1':'15', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_MANAGED_BROWSER_POLICY_CHANGED = 'usual.event.MANAGED_BROWSER_POLICY_CHANGED',

    /**
     * Indicates that the default application is changed.
     * To subscribe to this common event, your application must have the ohos.permission.CHANGE_DEFAULT_APPLICATION
     * permission.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since arkts {'1.1':'19', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_DEFAULT_APPLICATION_CHANGED = 'usual.event.DEFAULT_APPLICATION_CHANGED',

    /**
     * This common event means that shortcut has been changed.
     * To subscribe to this common event, your application must have the ohos.permission.MANAGE_SHORTCUTS permission.
     * This is a protected common event that can only be sent by system.
     * 
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_SHORTCUT_CHANGED = 'usual.event.SHORTCUT_CHANGED',

    /**
     * This common event means that kiosk mode is on.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_KIOSK_MODE_ON = 'usual.event.KIOSK_MODE_ON',

    /**
     * This common event means that kiosk mode is off.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_KIOSK_MODE_OFF = 'usual.event.KIOSK_MODE_OFF',

    /**
     * This common event means that the config policy of customazation subsystem has been updated.
     * This is a protected common event that can only be sent by system.
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_CUSTOM_CONFIG_POLICY_UPDATED = 'usual.event.CUSTOM_CONFIG_POLICY_UPDATED',

    /**
     * This common event means that the custom roaming region of device has been updated.
     * This is a protected common event that can only be sent by system.
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    COMMON_EVENT_CUSTOM_ROAMING_REGION_UPDATED = 'usual.event.CUSTOM_ROAMING_REGION_UPDATED',
  }

  /**
   * Describes the data of the common event
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Describes the data of the common event
   *
   * @typedef { _CommonEventData } CommonEventData
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export type CommonEventData = _CommonEventData;

  /**
   * Describes the subscriber of common event
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Describes the subscriber of common event
   *
   * @typedef { _CommonEventSubscriber } CommonEventSubscriber
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export type CommonEventSubscriber = _CommonEventSubscriber;

  /**
   * Describes the information of the subscriber
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Describes the information of the subscriber
   *
   * @typedef { _CommonEventSubscribeInfo } CommonEventSubscribeInfo
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export type CommonEventSubscribeInfo = _CommonEventSubscribeInfo;

  /**
   * Describes the information of the subscriber
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Describes the information of the subscriber
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  /**
   * Describes the information of the subscriber
   *
   * @typedef { _CommonEventPublishData } CommonEventPublishData
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export type CommonEventPublishData = _CommonEventPublishData;
}

export default commonEventManager;
