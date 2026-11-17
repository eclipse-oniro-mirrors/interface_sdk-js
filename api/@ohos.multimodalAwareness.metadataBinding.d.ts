/*
  * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file Metadata Binding
 * @kit MultimodalAwarenessKit
 */

import type image from '@ohos.multimedia.image';
import type { Callback } from './@ohos.base';
 
/**
 * This module provides metadata binding capability invocation, including encoded content transfer, event subscription,
 * and event unsubscription. Metadata binding allows system applications to obtain encoded content from third-party
 * applications, supports real-time event listening and callback mechanisms, and is suitable for scenarios where a
 * system application makes a request (such as a screenshot) and obtains application binding data, improving user
 * experience through cross-application data transfer.
 *
 * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
 * @atomicservice
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace metadataBinding {
  /**
   * Embeds information into an image. This API embeds metadata into the image using a specific encoding algorithm.
   * The encoding process has minimal impact on the visual presentation of the image, and the embedded information
   * can be parsed through the decodeImage API. It can be used in scenarios such as anti-counterfeiting and
   * copyright protection. This API uses a promise to return the result asynchronously.
   *
   * @param { image.PixelMap } srcImage - Original image to be encoded, used to embed metadata.
   * @param { string } metadata - Information to be embedded. The string encoding format is recommended to be
   *     UTF-8, the length should not exceed 128 bytes, and non-printable characters should be avoided.
   * @returns { Promise<image.PixelMap> } Promise object, which is used to return the image with encoded metadata.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100002 - Encode process fail. Possible causes:
   *     <br>1. Image processing error.
   *     <br>2. Channel coding error.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function encodeImage(srcImage: image.PixelMap, metadata: string): Promise<image.PixelMap>;

  /**
   * Decodes the information carried in the image. This API uses a promise to return the result.
   *
   * @param { image.PixelMap } encodedImage - Image carrying information, which must be an encoded
   *     image processed by the encodeImage API.
   * @returns { Promise<string> } Promise object, which is used to return the encoded metadata of the image.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100003 - Decode process fail. Possible causes:
   *     <br>1. Image is not an encoded Image.
   *     <br>2. Image destroyed, decoding failed.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function decodeImage(encodedImage: image.PixelMap): Promise<string>;

  /**
   * Pushes the metadata to be embedded to the application or service that calls the encoding API. The system
   * pushes the information to the application with the specified bundle name and returns the applink
   * information of the current page for subsequent encoding. This API uses a promise to return the result
   * asynchronously.
   *
   * @param { string } bundleName - Application bundle name, which must be the bundle name of an
   *     installed application.
   * @returns { Promise<string> } Promise used to return the application link information of the current page.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function notifyMetadataBindingEvent(bundleName: string): Promise<string>;

  /**
   * A third-party application passes the content to be encoded to the API service, which then passes the content to the
   * system application or service that invokes the encoding API. This API is called by third-party applications for
   * system applications to subscribe to and obtain data. The system application must first subscribe to the event
   * through the on('operationSubmitMetadata') method before it can receive the encoded content.
   *
   * @param { string } metadata - Content to be encoded. The string length does not exceed 128 bytes.
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function submitMetadata(metadata: string): void;

  /**
   * Subscribes to the event of a system application requesting to obtain encoded content. This event is triggered when
   * a system application (such as a screenshot) requests to obtain the encoded content of an application. After the
   * application registers a callback, it is notified through the callback when the event occurs. After subscribing to
   * the event by calling on(), the application must call off() to unsubscribe and release the listening resources when
   * the event no longer needs to be listened for.
   *
   * @param { 'operationSubmitMetadata' } type - Event type. This parameter has a fixed value of
   *     **operationSubmitMetadata**, indicating the system application's attempt to obtain the encoded metadata.
   * @param { string } bundleName - Application bundle name, used to identify the third-party application that
   *     registers the subscription event. When the event occurs, the system identifies and notifies the corresponding
   *     registered application by this bundle name. Ensure that the passed bundle name is a valid application bundle
   *     name.
   * @param { Callback<int> } callback - Callback function, used to return the event code. When the event value is 1,
   *     it indicates a screenshot event. Currently, only the screenshot event is supported.
   *     Value range: 1 (screenshot event). Note: The callback function should execute quickly to avoid blocking the
   *     UI thread.
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100004 - Subscribe Failed. Possible causes:
   *     <br>1. Abnormal system capability.
   *     <br>2. IPC communication abnormality.
   *     <br>3. Algorithm loading exception.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @atomicservice
   * @since 18 dynamic
   */
  function on(type: 'operationSubmitMetadata', bundleName: string, callback: Callback<int>): void;
 
  /**
   * Unsubscribes from the event of the system obtaining encoded content. The on('operationSubmitMetadata') method
   * must be called first to subscribe to the event. Calling this API without a subscription has no effect.
   * After unsubscribing, the application will no longer receive encoded content transfer events.
   *
   * @param { 'operationSubmitMetadata' } type - Event type. This parameter has a fixed value of
   *     **operationSubmitMetadata**, indicating the system application's attempt to obtain the encoded metadata.
   * @param { string } bundleName - Application bundle name, which identifies the bundle name of the registered
   *     application. It must be the same as the bundle name passed in during subscription.
   * @param { Callback<int> } [callback] - Callback function used to return the event code. The callback function
   *     to be unsubscribed must be the same as the one passed in during subscription. It is recommended that you
   *     save the callback function reference during subscription and use the same reference when unsubscribing.
   *     If this parameter is not specified, all callback functions currently listening for this event are
   *     unsubscribed.
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100005 - Unsubscribe Failed. Possible causes:
   *     <br> 1. Abnormal system capability.
   *     <br> 2. IPC communication abnormality.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @atomicservice
   * @since 18 dynamic
   */
  function off(type: 'operationSubmitMetadata', bundleName: string, callback?: Callback<int>): void;

  /**
   * Subscribes to a system event to obtain the encoded metadata.
   *
   * @param { string } bundleName - Bundle name of a third-party application
   * @param { Callback<int> } callback - Call back the screenshot event
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100004 - Subscribe Failed. Possible causes:
   *     <br>1. Abnormal system capability.
   *     <br>2. IPC communication abnormality.
   *     <br>3. Algorithm loading exception.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @since 23 static
   */
  function onOperationSubmitMetadata(bundleName: string, callback: Callback<int>): void;

  /**
   * Unsubscribes from system events that are used to obtain the encoded metadata.
   *
   * @param { string } bundleName - Bundle name of a third-party application
   * @param { Callback<int> } [callback] - Call back the screenshot event
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100005 - Unsubscribe Failed. Possible causes:
   *     <br>1. Abnormal system capability.
   *     <br>2. IPC communication abnormality.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @since 23 static
   */
  function offOperationSubmitMetadata(bundleName: string, callback?: Callback<int>): void;
}

export default metadataBinding;
