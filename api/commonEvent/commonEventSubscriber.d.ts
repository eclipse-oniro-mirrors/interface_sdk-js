/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file The subscriber of common event
 * @kit BasicServicesKit
 */

/*** if arkts 1.1 */
import { AsyncCallback } from './../@ohos.base';
import { CommonEventSubscribeInfo } from './commonEventSubscribeInfo';
/*** endif */
/*** if arkts 1.2 */
import { AsyncCallback } from './../@ohos.base';
import { CommonEventSubscribeInfo } from './commonEventSubscribeInfo';
/*** endif */

/**
 * the subscriber of common event
 *
 * @interface CommonEventSubscriber
 * @syscap SystemCapability.Notification.CommonEvent
 * @since 7
 */
/**
 * the subscriber of common event
 *
 * @interface CommonEventSubscriber
 * @syscap SystemCapability.Notification.CommonEvent
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface CommonEventSubscriber {
  /**
   * Obtains the result code of the current ordered common event.
   *
   * @param { AsyncCallback<number> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Obtains the result code of the current ordered common event.
   *
   * @param { AsyncCallback<number> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getCode(callback: AsyncCallback<number>): void;

  /**
   * Obtains the result code of the current ordered common event.
   *
   * @returns { Promise<number> } Returns code of this common event
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Obtains the result code of the current ordered common event.
   *
   * @returns { Promise<number> } Returns code of this common event
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getCode(): Promise<number>;

  /**
   * Obtains the result code of the current ordered common event.
   *
   * @returns { number } Returns code of this common event
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Obtains the result code of the current ordered common event.
   *
   * @returns { number } Returns code of this common event
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getCodeSync(): number;

  /**
   * Sets the result code of the current ordered common event.
   *
   * @param { number } code - Indicates the custom result code to set. You can set it to any value.
   * @param { AsyncCallback<void> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Sets the result code of the current ordered common event.
   *
   * @param { number } code - Indicates the custom result code to set. You can set it to any value.
   * @param { AsyncCallback<void> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCode(code: number, callback: AsyncCallback<void>): void;

  /**
   * Sets the result code of the current ordered common event.
   *
   * @param { number } code - Indicates the custom result code to set. You can set it to any value.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Sets the result code of the current ordered common event.
   *
   * @param { number } code - Indicates the custom result code to set. You can set it to any value.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCode(code: number): Promise<void>;

  /**
   * Sets the result code of the current ordered common event.
   *
   * @param { number } code - Indicates the custom result code to set. You can set it to any value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Sets the result code of the current ordered common event.
   *
   * @param { number } code - Indicates the custom result code to set. You can set it to any value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCodeSync(code: number): void;

  /**
   * Obtains the result data of the current ordered common event.
   *
   * @param { AsyncCallback<string> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Obtains the result data of the current ordered common event.
   *
   * @param { AsyncCallback<string> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getData(callback: AsyncCallback<string>): void;

  /**
   * Obtains the result data of the current ordered common event.
   *
   * @returns { Promise<string> } Returns data of this common event
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Obtains the result data of the current ordered common event.
   *
   * @returns { Promise<string> } Returns data of this common event
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getData(): Promise<string>;

  /**
   * Obtains the result data of the current ordered common event.
   *
   * @returns { string } Returns data of this common event
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Obtains the result data of the current ordered common event.
   *
   * @returns { string } Returns data of this common event
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getDataSync(): string;

  /**
   * Sets the result data of the current ordered common event.
   *
   * @param { string } data - Indicates the custom result data to set. You can set it to any character string.
   * @param { AsyncCallback<void> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Sets the result data of the current ordered common event.
   *
   * @param { string } data - Indicates the custom result data to set. You can set it to any character string.
   * @param { AsyncCallback<void> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setData(data: string, callback: AsyncCallback<void>): void;

  /**
   * Sets the result data of the current ordered common event.
   *
   * @param { string } data - Indicates the custom result data to set. You can set it to any character string.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Sets the result data of the current ordered common event.
   *
   * @param { string } data - Indicates the custom result data to set. You can set it to any character string.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setData(data: string): Promise<void>;

  /**
   * Sets the result data of the current ordered common event.
   *
   * @param { string } data - Indicates the custom result data to set. You can set it to any character string.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Sets the result data of the current ordered common event.
   *
   * @param { string } data - Indicates the custom result data to set. You can set it to any character string.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setDataSync(data: string): void;

  /**
   * Sets the result of the current ordered common event.
   *
   * @param { number } code - Indicates the custom result code to set. You can set it to any value.
   * @param { string } data - Indicates the custom result data to set. You can set it to any character string.
   * @param { AsyncCallback<void> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Sets the result of the current ordered common event.
   *
   * @param { number } code - Indicates the custom result code to set. You can set it to any value.
   * @param { string } data - Indicates the custom result data to set. You can set it to any character string.
   * @param { AsyncCallback<void> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCodeAndData(code: number, data: string, callback: AsyncCallback<void>): void;

  /**
   * Sets the result of the current ordered common event.
   *
   * @param { number } code - Indicates the custom result code to set. You can set it to any value.
   * @param { string } data - Indicates the custom result data to set. You can set it to any character string.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Sets the result of the current ordered common event.
   *
   * @param { number } code - Indicates the custom result code to set. You can set it to any value.
   * @param { string } data - Indicates the custom result data to set. You can set it to any character string.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCodeAndData(code: number, data: string): Promise<void>;

  /**
   * Sets the result of the current ordered common event.
   *
   * @param { number } code - Indicates the custom result code to set. You can set it to any value.
   * @param { string } data - Indicates the custom result data to set. You can set it to any character string.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Sets the result of the current ordered common event.
   *
   * @param { number } code - Indicates the custom result code to set. You can set it to any value.
   * @param { string } data - Indicates the custom result data to set. You can set it to any character string.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCodeAndDataSync(code: number, data: string): void;

  /**
   * Checks whether the current common event is an ordered common event.
   *
   * @param { AsyncCallback<boolean> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isOrderedCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the current common event is an ordered common event.
   *
   * @returns { Promise<boolean> } Returns true if this common event is ordered, false otherwise
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isOrderedCommonEvent(): Promise<boolean>;

  /**
   * Checks whether the current common event is an ordered common event.
   *
   * @returns { boolean } Returns true if this common event is ordered, false otherwise
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isOrderedCommonEventSync(): boolean;

  /**
   * Checks whether the current common event is a sticky common event.
   *
   * @param { AsyncCallback<boolean> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isStickyCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the current common event is a sticky common event.
   *
   * @returns { Promise<boolean> } Returns true if this common event is sticky, false otherwise
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isStickyCommonEvent(): Promise<boolean>;

  /**
   * Checks whether the current common event is a sticky common event.
   *
   * @returns { boolean } Returns true if this common event is sticky, false otherwise
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isStickyCommonEventSync(): boolean;

  /**
   * Abort the current ordered common event.
   *
   * @param { AsyncCallback<void> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  abortCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * Abort the current ordered common event.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  abortCommonEvent(): Promise<void>;

  /**
   * Abort the current ordered common event.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  abortCommonEventSync(): void;

  /**
   * Clears the abort state of the current ordered common event
   *
   * @param { AsyncCallback<void> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  clearAbortCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * Clears the abort state of the current ordered common event
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  clearAbortCommonEvent(): Promise<void>;

  /**
   * Clears the abort state of the current ordered common event
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  clearAbortCommonEventSync(): void;

  /**
   * Checks whether the current ordered common event should be aborted.
   *
   * @param { AsyncCallback<boolean> } callback - Indicate the callback function to receive the common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getAbortCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the current ordered common event should be aborted.
   *
   * @returns { Promise<boolean> } Returns true if this common event is aborted, false otherwise
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getAbortCommonEvent(): Promise<boolean>;

  /**
   * Checks whether the current ordered common event should be aborted.
   *
   * @returns { boolean } Returns true if this common event is aborted, false otherwise
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getAbortCommonEventSync(): boolean;

  /**
   * get the CommonEventSubscribeInfo of this CommonEventSubscriber.
   *
   * @param { AsyncCallback<CommonEventSubscribeInfo> } callback - Indicate callback function to receive common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * get the CommonEventSubscribeInfo of this CommonEventSubscriber.
   *
   * @param { AsyncCallback<CommonEventSubscribeInfo> } callback - Indicate callback function to receive common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getSubscribeInfo(callback: AsyncCallback<CommonEventSubscribeInfo>): void;

  /**
   * get the CommonEventSubscribeInfo of this CommonEventSubscriber.
   *
   * @returns { Promise<CommonEventSubscribeInfo> } Returns the commonEvent subscribe information
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * get the CommonEventSubscribeInfo of this CommonEventSubscriber.
   *
   * @returns { Promise<CommonEventSubscribeInfo> } Returns the commonEvent subscribe information
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getSubscribeInfo(): Promise<CommonEventSubscribeInfo>;

  /**
   * Get the CommonEventSubscribeInfo of this CommonEventSubscriber.
   *
   * @returns { CommonEventSubscribeInfo } Returns the commonEvent subscribe information
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Get the CommonEventSubscribeInfo of this CommonEventSubscriber.
   *
   * @returns { CommonEventSubscribeInfo } Returns the commonEvent subscribe information
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getSubscribeInfoSync(): CommonEventSubscribeInfo;

  /**
   * finish the current ordered common event.
   *
   * @param { AsyncCallback<void> } callback - Indicate the callback function after ordered common event is finished.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  finishCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * finish the current ordered common event.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  finishCommonEvent(): Promise<void>;
}
