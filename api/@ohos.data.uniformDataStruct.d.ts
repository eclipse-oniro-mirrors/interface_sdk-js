/*
 * Copyright (c) 2024-2026 Huawei Device Co., Ltd.
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
 * @file Uniform Data Structs
 * @kit ArkData
 */

import image from './@ohos.multimedia.image';

/**
 * As a part of the Unified Data Management Framework (UDMF), the **uniformDataStruct** module provides data structs
 * corresponding to certain
 * [UniformDataTypes]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType} for service
 * scenarios of many-to-many data sharing across applications. It helps simplify data interaction and reduce the data
 * type adaptation workload.
 *
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace uniformDataStruct {
  /**
   * Represents data of the plain text type.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface PlainText {
    /**
     * Uniform data type, which has a fixed value of **general.plain-text**. For details, see
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.plain-text';
    /**
     * Plaintext content.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    textContent: string;

    /**
     * Text abstract. It is an empty string by default.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     */
    abstract?: string;

    /**
     * Indicates the abstract of the PlainText.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 static
     */
    textAbstract?: string;

    /**
     * Object of the dictionary type used to describe the attributes of the text content. Both the key and value of the
     * object are of the string type. For example, the following is a **details** object used to describe the properties
     * of a file:
     *
     * {
     *
     * "title":"Title of the file",
     *
     * "content":"Content of the file"
     *
     * }
     *
     * By default, it is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    details?: Record<string, string>;
  }

  /**
   * Defines the hyperlink typed data, which is used to describe and manage hyperlink information. After a Hyperlink
   * object is created, it can be used in scenarios such as drag-and-drop and sharing to implement cross-application
   * hyperlink data transfer and redirection.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface Hyperlink {
    /**
     * Uniform data type, which has a fixed value of **general.hyperlink**. For details, see
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.hyperlink';
    /**
     * URL of the link. It supports protocols such as http and https and must conform to the standard URL format.
     * For example, `https://www.example.com` or `file:///path/to/file`.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    url: string;
    /**
     * Description of the link content. This is an optional field. Pass this parameter when a text description needs to
     * be provided for the hyperlink (for example, for accessibility, link preview, and other scenarios). If it is not
     * passed, the default value is an empty string, and no description information is provided.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    description?: string;
    /**
     * Dictionary type object whose keys and values are all of the string type. It is used to describe the detailed
     * attribute content of Hyperlink. This is an optional field, and the default value is an empty dictionary object.
     * For example, a data object whose details content is
     *
     * {
     *
     * "title":"Title of the file",
     *
     * "content":"Content of the file"
     *
     * }
     *
     * By default, it is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    details?: Record<string, string>;
  }

  /**
   * Defines the HTML typed data, which is used to describe HyperText Markup Language data. After an HTML object is
   * created, it can be used to transfer rich text content in scenarios such as drag-and-drop and copy-paste, support
   * cross-application HTML format data interaction, and control the URI authorization policy through
   * **uriAuthorizationPolicies**.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface HTML {
    /**
     * Uniform data type, which has a fixed value of **general.html**. For details, see
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.html';

    /**
     * Content text in HTML format, supporting standard HTML tags. It can be a complete HTML document or an HTML
     * fragment. The length limit is 20 MB. UTF-8 encoding is recommended. For example: \<div>\<p> title <\/p><\/div>.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    htmlContent: string;
    /**
     * Plain text content after removing HTML tags. This is an optional field. Pass this parameter when a plain text
     * version of the HTML content is required (for example, for text search, display in environments without HTML
     * rendering, and other scenarios). If not passed, the default value is an empty string, and no plain text version
     * is provided.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    plainContent?: string;
    /**
     * Object of dictionary type, where both the key and value are of string type, used to describe the detailed
     * attribute content of the HTML. This is an optional field, and the default value is an empty dictionary object.
     * For example, a data object can be generated with the details content as
     *
     * {
     *
     * "title":"Title of the file",
     *
     * "content":"Content of the file"
     *
     * }
     *
     * By default, it is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    details?: Record<string, string>;

    /**
     * URI authorization policy for drag-and-drop scenarios. The default value is READ (read-only authorization), which
     * takes effect only in scenarios such as the img tag. It applies only to a single record and has the highest
     * priority. For details about the policy, see [UriPermission]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.UriPermission}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uriAuthorizationPolicies?: Array<int>;
  }

  /**
   * Represents the system-defined desktop icon typed data, which is used to share desktop icon information across
   * applications. Typical usage scenarios include dragging icons on the home screen launcher, sharing application icons
   * in the app store, or creating shortcuts.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface OpenHarmonyAppItem {
    /**
     * Uniform data type, which has a fixed value of **openharmony.app-item**. For details, see
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'openharmony.app-item';
    /**
     * ID of the application, for which the icon is used.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    appId: string;
    /**
     * Name of the application, for which the icon is used.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    appName: string;
    /**
     * Image ID of the icon.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    appIconId: string;
    /**
     * Label ID corresponding to the icon name.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    appLabelId: string;
    /**
     * Bundle name of the application corresponding to the icon. The format must comply with the application package
     * name specification.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    bundleName: string;
    /**
     * Ability name of the application corresponding to the icon. It is recommended that the name follow the Ability
     * component naming convention: a string no longer than 127 bytes that starts with a letter and can contain letters,
     * digits, underscores (_), or periods (.). Ensure that the name is unique within the entire application. The
     * "package name.Ability name" format is recommended (for example, **"com.example.myapplication.MainAbility"**).
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    abilityName: string;
    /**
     * Dictionary type object. The key is of the string type, and the value can contain data of the number (numeric
     * type), string (string type), or Uint8Array (binary byte array) type. This is an optional field, and the default
     * value is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    details?: Record<string, int | long | double | string | Uint8Array>;
  }

  /**
   * Defines the content card typed data, which is used to share content card information across applications. Typical
   * usage scenarios include sharing article cards in news applications, sharing product cards in e-commerce
   * applications, and sharing content previews in social applications.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  interface ContentForm {
    /**
     * Uniform data type, which has a fixed value of **general.content-form**.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.content-form';

    /**
     * Image data corresponding to the content card. The default value is empty.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    thumbData?: Uint8Array;

    /**
     * Description information in the content card. The default value is an empty string.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * Title of the content widget.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    title: string;

    /**
     * Application icon data in the content card. The default value is empty.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    appIcon?: Uint8Array;

    /**
     * Application name in the content card. The default value is an empty string.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    appName?: string;

    /**
     * Redirect hyperlink corresponding to the content card, which must comply with the URI format specification. The
     * default value is an empty string.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    linkUri?: string;
  }

  /**
   * Represents the system-defined card typed data, which is used to share card information across applications. Typical
   * usage scenarios include card drag-and-drop sharing, cross-application transfer of card content, and data sharing of
   * home screen widgets.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  interface Form {
    /**
     * Uniform data type, which has a fixed value of **openharmony.form**. For details, see
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'openharmony.form';

    /**
     * Widget ID.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    formId: int;

    /**
     * Widget name.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    formName: string;

    /**
     * Bundle name of the card. The format must comply with the application package name specification.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Ability name corresponding to the card. It is recommended that the name follow the Ability component naming
     * convention: a string no longer than 127 bytes, starting with a letter and containing letters, digits,
     * underscores (_), or periods (.). Ensure that the name is unique within the entire application. The "package
     * name.Ability name" format is recommended (for example, "com.example.myapplication.MainAbility").
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * Module to which the widget belongs.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    module: string;

    /**
     * Dictionary type object. The key is of the string type, and the value can contain data of the number (numeric
     * type), string (string type), or Uint8Array (binary byte array) type. This is an optional field, and the default
     * value is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    details?: Record<string, int | long | double | string | Uint8Array>;
  }

  /**
   * Defines the file URI typed data, which is used to describe the URI address information of a file. After a FileUri
   * object is created, it can be used in scenarios such as file drag-and-drop and file sharing, support controlling
   * file access permissions through uriAuthorizationPolicies, and implement cross-application file data transfer and
   * permission management.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  interface FileUri {
    /**
     * Uniform data type, which has a fixed value of **general.file-uri**. For details, see
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.file-uri';

    /**
     * Original URI path of the file. Supports local file absolute paths, the file:// protocol, and http/https network
     * URL formats. The length limit is 4096 bytes. For example: `/data/local/tmp/test.txt`,
     * `file:///data/local/tmp/test.txt`, or `http://example.com/file.txt`.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    oriUri: string;

    /**
     * The file type must be a standardized data type (that is, the UTD-ID corresponding to each type in the
     * [Prebuilt UTDs](docroot://database/uniform-data-type-list.md) or a custom UTD-ID). The maximum length limit of fileType is 1024 bytes. An exception is thrown
     * when the limit is exceeded.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    fileType: string;

    /**
     * Dictionary type object. The key is of the string type, and the value can contain data of the number (numeric
     * type), string (string type), or Uint8Array (binary byte array) type. This is an optional field, and the default
     * value is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    details?: Record<string, int | long | double | string | Uint8Array>;

    /**
     * URI authorization policy used in drag-and-drop scenarios. The default value is **READ+WRITE+PERSIST** (read +
     * write + persistent authorization). It applies only to a single record and has the highest priority. For details
     * about the policies, see [UriPermission]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.UriPermission}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uriAuthorizationPolicies?: Array<int>;
  }

  /**
   * Represents the system-defined pixel map typed data, used to describe image pixel data. After a PixelMap object is
   * created, it can be used in scenarios such as image drag-and-drop and image sharing to implement cross-application
   * image data transfer.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  interface PixelMap {
    /**
     * Unified data type identifier of the pixel map typed data, fixed to "openharmony.pixel-map". For details about the
     * data type description information, see
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'openharmony.pixel-map';

    /**
     * Pixel map object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    pixelMap: image.PixelMap;

    /**
     * Dictionary type object. The key is of the string type, and the value can contain data of the number (numeric
     * type), string (string type), or Uint8Array (binary byte array) type. This is an optional field, and the default
     * value is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    details?: Record<string, int | long | double | string | Uint8Array>;
  }
}

export default uniformDataStruct;