/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * @file Unified Data Channel
 * @kit ArkData
 */

import { AsyncCallback } from './@ohos.base';
import image from "./@ohos.multimedia.image";
import Want from "./@ohos.app.ability.Want";

/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * This module is a part of the Unified Data Management Framework (UDMF). It provides a standardized data channel for
 * various many-to-many cross-application data sharing scenarios, and offers standardized data access and read APIs. It
 * also provides standardized definitions for data types such as text and images, facilitating data exchange between
 * different applications and reducing the workload of data type adaptation.
 *
 * **Design logic:** UDMF adopts a unified data model, encapsulating different types of data into UnifiedData objects.
 * It identifies different data channel types (such as DATA_HUB and DRAG) through Intention to implement
 * cross-application data sharing. A unique identifier key is generated when data is written, and data is queried by key
 * or intention when read.
 *
 * When processing data, UDMF does not parse the content of user data, and the storage path has low security. Therefore,
 * it is not recommended to transmit sensitive personal data or private data.
 *
 * > **NOTE**
 * >
 * > The initial APIs of this module are supported since API version 10. Newly added APIs will be marked with a
 * superscript to indicate their earliest API version.
 * >
 * > The APIs of this module can be used only in the stage model.
 *
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @stagemodelonly
 * @crossplatform [since 14]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace unifiedDataChannel {
  /**
   * Enumerates the usage scope types supported by UDMF within a device.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum ShareOptions {
    /**
     * Indicates that the data can be used within the same application on this device.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    IN_APP = 0,
    /**
     * Indicates that the data can be used across applications on this device.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    CROSS_APP = 1
  }

  /**
   * A deferred wrapper for UnifiedData that supports deferred data retrieval. When the data receiver requests a
   * specific type of data, the system triggers this callback, and the data sender can dynamically generate the data in
   * the callback instead of preparing all data in advance. Currently, only the same-device clipboard scenario is
   * supported.
   *
   * @param { string } type - Identifier of the deferred data type, used to distinguish different types of data. For the
   *     values, see [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
   *     For example, 'general.plain-text' indicates the plain text type.
   * @returns { UnifiedData } UnifiedData object that contains the data of the corresponding type and is returned when
   *     the deferred callback is triggered. It can be used for cross-application data sharing and transfer.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type GetDelayData = (type: string) => UnifiedData;

  /**
   * Represents the data field types allowed for a unified data record.
   *
   * @unionmember { int } Int.
   * @unionmember { long } Long.
   * @unionmember { double } Double.
   * @unionmember { string } String.
   * @unionmember { boolean } Boolean.
   * @unionmember { image.PixelMap } The [image.PixelMap]{@link @ohos.multimedia.image:image} type.
   * @unionmember { Want } The [Want]{@link @ohos.app.ability.Want:Want} type.
   * @unionmember { ArrayBuffer } The ArrayBuffer type.
   * @unionmember { object } The object type.
   * @unionmember { null } Null.
   * @unionmember { undefined } Undefined.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice
   * @since 12 dynamic
   */
  type ValueType = int | long | double | string | boolean | image.PixelMap | Want | ArrayBuffer | object | null | undefined;

  /**
   * Indicates type of value.
   *
   * @unionmember { int } Int.
   * @unionmember { long } Long.
   * @unionmember { double } Double.
   * @unionmember { string } String.
   * @unionmember { boolean } Boolean.
   * @unionmember { image.PixelMap } The value is of the [image.PixelMap]{@link @ohos.multimedia.image:image} type.
   * @unionmember { Want } [Want]{@link @ohos.app.ability.Want:Want}.
   * @unionmember { ArrayBuffer } ArrayBuffer.
   * @unionmember { RecordData } RecordData.
   * @unionmember { null } Null.
   * @unionmember { undefined } Undefined.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  type ValueType = int | long | double | string | boolean | image.PixelMap | Want | ArrayBuffer | RecordData | null | undefined;

  /**
   * URI authorization policy in drag-and-drop scenarios.
   *
   * >**NOTE**
   * >
   * >This authorization policy takes effect only in drag-and-drop scenarios and does not take effect in other scenarios.
   *
   * **Implementation mechanism** During drag-and-drop data transfer, the system grants temporary authorization to the
   * target URI based on the UriPermission configuration. The authorization lifecycle is bound to the drag-and-drop
   * session, and the temporary authorization is automatically cleared after the drag-and-drop is complete. When the
   * receiving application accesses the URI, the system verifies the permission configuration to determine whether
   * access is allowed. The PERSIST permission converts the temporary authorization into persistent authorization.
   *
   * Four permission policies are supported: no authorization, read, write, and persist. They can be used in
   * combination, and only the following combinations take effect:
   * - NONE only: no file authorization is granted.
   * - READ only: only one-time read-only authorization is granted.
   * - WRITE only: one-time read and write authorization is granted (write authorization includes read authorization).
   * - READ+WRITE: one-time read and write authorization is granted, with the same effect as using WRITE only.
   * - READ+PERSIST: persistent read authorization is granted.
   * - WRITE+PERSIST: grants persistent read and write authorization.
   * - READ+WRITE+PERSIST: grants persistent read and write authorization.
   *
   * Rules for applying the drag-and-drop authorization policy (in descending order of priority):
   * - Single data level: The FileUri and HTML Unified Data Structures (UDS) and the File, Image, Video, Audio, Folder,
   * and HTML Unified Data Content (UDC) structures support configuring authorization policy parameters, which take
   * effect only for a single record at a time and have the highest priority.
   * - UnifiedData level: The authorization parameters provided in UnifiedDataProperties take effect for a single
   * drag-and-drop operation. If an authorization policy is configured for a piece of data, the configuration of that
   * data takes precedence, with the next highest priority.
   * - Default level: If no authorization policy is configured for either a single piece of data or
   * UnifiedDataProperties, proxy authorization is performed according to the default drag-and-drop logic. The default
   * logic is as follows:
   *
   *     - FileUri data (FileUri UDS or the File, Image, Video, Audio, and Folder UDC types): In the drag-and-drop
   * scenario, the default authorization is READ+WRITE+PERSIST (read + write + persistent authorization).
   *     - HTML data: read authorization is granted only for the URIs under the img tag in the HTML text.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  export const enum UriPermission {
    /**
     * No permissions granted.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    NONE = 0,

    /**
     * Permission to read or view data.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    READ = 1,

    /**
     * Permission to modify data.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    WRITE = 2,

    /**
     * Permission to persist files.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    PERSIST = 3
  }

  /**
   * Defines the properties of the data records in the unified data object, including the timestamp, tag, pasting range,
   * and additional data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class UnifiedDataProperties {
    /**
     * Object of the dictionary type used to set other properties. The default value is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     */
    extras?: Record<string, object>;

    /**
     * extra property data. key-value pairs.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 static
     */
    extras?: Record<string, RecordData>;

    /**
     * Customized tag. The default value is an empty string.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    tag?: string;
    /**
     * Timestamp when [UnifiedData]{@link unifiedDataChannel.UnifiedDataProperties} is generated. The default value is
     * January 1, 1970 (UTC).
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly timestamp?: Date;
    /**
     * Range, in which [UnifiedData]{@link unifiedDataChannel.UnifiedDataProperties} can be used. The default value is
     * **CROSS_APP**.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    shareOptions?: ShareOptions;

    /**
     * Callback for obtaining the deferred data. Currently, it can be used only in the pasteboard application of the
     * same device. The default value is **undefined**.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getDelayData?: GetDelayData;

    /**
     * URI authorization policies for the drag-and-drop scenario. The default value is READ+WRITE+PERSIST. This field
     * takes effect only for a single data operation and has a lower priority. For details about the policies,
     * see {@link unifiedDataChannel.UriPermission}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    uriAuthorizationPolicies?: Array<UriPermission>;
  }

  /**
   * Represents the Unified Data Object of UDMF, which provides methods to encapsulate a group of data records.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class UnifiedData {
    /**
     * Creates a unified data object that contains a data record. After the call is successful, a UnifiedData object
     * containing the specified data record is returned.
     *
     * @param { UnifiedRecord } record - Data record to add to the unified data object. The record is a UnifiedRecord
     *     object or an object of its subclass.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    constructor(record: UnifiedRecord);
    /**
     * Creates a unified data object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * Adds a data record to the current unified data object. After the call is successful, the specified data record
     * is added to the current unified data object.
     *
     * @param { UnifiedRecord } record - Data record to add to the unified data object. The record is a UnifiedRecord
     *     object or an object of its subclass.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    addRecord(record: UnifiedRecord): void;
    /**
     * Obtains all data records in the current unified data object. The data obtained through this API is of the
     * UnifiedRecord type. You need to obtain the data type through
     * [getType]{@link unifiedDataChannel.UnifiedRecord#getType} and then convert it to a subclass before use.
     *
     * @returns { Array<UnifiedRecord> } Array of all data records contained in the current unified data object. Each
     *     record can be converted to a specific subclass after its type is obtained through getType, for reading and 
     *     processing various types of data in the unified data.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getRecords(): Array<UnifiedRecord>;

    /**
     * Checks whether the current unified data object contains the specified data type. The check scope includes the
     * data types added by using {@link unifiedDataChannel.UnifiedRecord.addEntry} function.
     *
     * For file types, if the type set of the UnifiedData object contains "general.jpeg", the result is true when
     * hasType is called to check whether the type "general.image" is included (the type "general.jpeg" belongs to the
     * type "general.image").
     *
     * @param { string } type - Data type to query. For details, see
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     * @returns { boolean } Returns true if the specified data type exists; returns false otherwise.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hasType(type: string): boolean;

    /**
     * Obtains the types of all data records in the current unified data object.
     *
     * @returns { Array<string> } Array of
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}, which
     *     represents the set of data types of the current records. The element values include 'general.plain-text',
     *     'general.hyperlink', 'openharmony.form', and so on.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getTypes(): Array<string>;

    /**
     * Properties of all data records in the current unified data object, including the timestamp, tag, paste scope, and
     * some additional data.
     *
     * @returns { UnifiedDataProperties } Properties of all data records in a unified data. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get properties(): UnifiedDataProperties;

    /**
     * Properties of all data records in the current unified data object, including the timestamp, tag, paste scope, and
     * some additional data.
     *
     * @param { UnifiedDataProperties } Properties of all data records in a unified data. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    set properties(value: UnifiedDataProperties);
  }

  /**
   * Describes the data summary of a unified data object, including the data type and size.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Summary {
    /**
     * dictionary object whose key indicates the data type
     * (see {@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}) and whose value is the total
     * size (in bytes) of the records of that type in the unified data object.
     *
     * @returns { Record<string, long> } Type and size information of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get summary(): Record<string, long>;

    /**
     * dictionary object whose key indicates the data type
     * (see {@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}) and whose value is the total
     * size (in bytes) of the records of that type in the unified data object.
     *
     * @param { Record<string, long> } Type and size information of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set summary(value: Record<string, long>);

    /**
     * Total size (in bytes) of the records in the unified data object.
     *
     * @returns { long } Total size information of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get totalSize(): long;

    /**
     * Total size (in bytes) of the records in the unified data object.
     *
     * @param { long } Total size information of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set totalSize(value: long);

    /**
     * Mapping between all data types in the unified data object and the sizes of the records of each type, where the
     * data size is in bytes. When the obtained unified data object is empty, the value of this overview attribute is
     * empty.
     *
     * @returns { Record<string, long> } Key represents the data type, and value represents the corresponding data
     *     size. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    get overview(): Record<string, long>;

    /**
     * File name extensions of file records in the unified data.
     *
     * The extensions are unique, include the leading period, and use lowercase ASCII letters. For example, the file
     * name extension of **myphoto.png** is **.png**. If no valid file name extension is available, an empty array is
     * returned.
     *
     * @returns { Array<string> } File name extensions in the order in which they first occur.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.1 dynamic&static
     */
    get filenameExtensions(): Array<string>;
  }

  /**
   * An abstract definition of the data content supported by UDMF, called a data record. A unified data object contains
   * one or more data records, for example, a text record, an image record, and an HTML record. Since API version 15,
   * different data formats of the same content can be added to a data record (for example, the same text can be stored
   * in plain text, HTML, or hyperlink formats at the same time). Data consumers can obtain the corresponding format
   * through the getEntry method based on their service requirements.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class UnifiedRecord {
    /**
     * Obtains the type of the current data record. Since the data obtained by calling [getRecords](#getrecords) from a
     * unified data object is a UnifiedRecord object, you need to use this API to query the specific type of the record,
     * and then convert the UnifiedRecord object to its subclass and call the subclass APIs.
     *
     * @returns { string } Specific data type corresponding to the current data record. For details, see
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getType(): string;

    /**
     * Creates a data record. After the call is successful, an empty UnifiedRecord object is returned.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Creates a data record of the specified type and value. After the call is successful, a UnifiedRecord object
     * containing the specified type and value is returned.<br/>When the parameter **value** is of the
     * [image.PixelMap]{@link @ohos.multimedia.image:image} type, the parameter **type** must correspond to the value of
     * OPENHARMONY_PIXEL_MAP in
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * When the parameter **value** is of the [Want]{@link @ohos.app.ability.Want:Want} type, the parameter
     * **type** must correspond to the value of OPENHARMONY_WANT in
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @param { string } type - Type of the data record to create, used to identify the specific type of the data record.
     *     For details about the values, see [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType},
     *     for example, 'general.plain-text' and 'general.hyperlink'.
     * @param { ValueType } value - Value of the data record to create.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(type: string, value: ValueType);

    /**
     * Obtains the value of the current data record.
     *
     * @returns { ValueType } Value corresponding to the current data record.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getValue(): ValueType;

    /**
     * Obtains the types of all data records in the current unified data object.
     *
     * @returns { Array<string> } Array of
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}, which
     *     represents the set of data types of the current records. The element values include 'general.plain-text',
     *     'general.hyperlink', 'openharmony.form', and so on.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getTypes(): Array<string>;

    /**
     * Adds a data entry with the specified data type and content to the current data record. The data type and content
     * added through this method are different representations of the same content. After the call is successful, the
     * specified data type and content are added to the current data record.
     *
     * @param { string } type - Data type to create. For details, see
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     * @param { ValueType } value - Value of the data to create.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    addEntry(type: string, value: ValueType): void;

    /**
     * Obtains the data content in a data record by data type.
     *
     * @param { string } type - Type of the data to obtain. For details, see
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     * @returns { ValueType } Value corresponding to the current data record.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getEntry(type: string): ValueType;

    /**
     * Obtains the types and contents of all data in the current data record.
     *
     * @returns { Record<string, ValueType> } Types and contents corresponding to the current data record.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getEntries(): Record<string, ValueType>;
  }

  /**
   * Represents text data. It is a subclass of [UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord} and the base
   * class of text data, used to describe text data. You are advised to use subclasses of Text, such as
   * [PlainText]{@link unifiedDataChannel.PlainText}, [Hyperlink]{@link unifiedDataChannel.Hyperlink}, and
   * [HTML]{@link unifiedDataChannel.HTML}, to describe data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Text extends UnifiedRecord {
    /**
     * A dictionary object whose keys and values are both strings, used to describe the text content. For example, you
     * can create a data object whose details are
     *
     * {
     *
     * "title":"Title",
     *
     * "content":"Content"
     *
     *}
     *
     * to describe an article. This is an optional field, and the default value is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    details?: Record<string, string>;

    /**
     * A dictionary object whose keys and values are both strings, used to describe the text content. For example, you
     * can create a data object whose details are
     *
     * {
     *
     * "title":"Title",
     *
     * "content":"Content"
     *
     * }
     *
     * to describe an article. This is an optional field, and the default value is an empty dictionary object.
     *
     * @returns { Record<string, string> | undefined } the details of unified text [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get details(): Record<string, string> | undefined;

    /**
     * A dictionary object whose keys and values are both strings, used to describe the text content. For example, you
     * can create a data object whose details are
     *
     * {
     *
     * "title":"Title",
     *
     * "content":"Content"
     *
     * }
     *
     * to describe an article. This is an optional field, and the default value is an empty dictionary object.
     *
     * @param { Record<string, string> | undefined } the details of unified text [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set details(value: Record<string, string> | undefined);
  }

  /**
   * A subclass of [Text]{@link unifiedDataChannel.Text} that describes plain text data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class PlainText extends Text {
    /**
     * Plain text content.
     *
     * @returns { string } the content of text [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get textContent(): string;

    /**
     * Plain text content.
     *
     * @param { string } the content of text [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set textContent(value: string);

    /**
     * Plain text abstract. This is an optional field, and the default value is an empty string.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    abstract?: string;

    /**
     * Plain text abstract. This is an optional field, and the default value is an empty string.
     *
     * @returns { string | undefined } the abstract of text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 static
     */
    get textAbstract(): string | undefined;

    /**
     * Plain text abstract. This is an optional field, and the default value is an empty string.
     *
     * @param { string | undefined } the abstract of text.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 static
     */
    set textAbstract(value: string | undefined);
  }

  /**
   * A subclass of [Text]{@link unifiedDataChannel.Text} that describes hyperlink data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Hyperlink extends Text {
    /**
     * URL of the link.
     *
     * @returns { string } the url of a link [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get url(): string;

    /**
     * URL of the link.
     *
     * @param { string } the url of a link [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set url(value: string);

    /**
     * Description of the link content. This is an optional field, and the default value is an empty string.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    description?: string;

    /**
     * Description of the link content. This is an optional field, and the default value is an empty string.
     *
     * @returns { string | undefined } the description of a link. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get description(): string | undefined;

    /**
     * Description of the link content. This is an optional field, and the default value is an empty string.
     *
     * @param { string | undefined } the description of a link [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set description(value: string | undefined);
  }

  /**
   * The HTML type data, a subclass of [Text]{@link unifiedDataChannel.Text}, is used to describe HyperText Markup
   * Language data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class HTML extends Text {
    /**
     * Content in HTML format.
     *
     * @returns { string } the content of html. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get htmlContent(): string;

    /**
     * Content in HTML format.
     *
     * @param { string } the content of html. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set htmlContent(value: string);

    /**
     * Plain text content after HTML tags are removed. This is an optional field, and the default value is an empty
     * string.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    plainContent?: string;

    /**
     * Plain text content after HTML tags are removed. This is an optional field, and the default value is an empty
     * string.
     *
     * @returns { string | undefined } the plain content of html [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get plainContent(): string | undefined;

    /**
     * Plain text content after HTML tags are removed. This is an optional field, and the default value is an empty
     * string.
     *
     * @param { string | undefined } the plain content of html [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set plainContent(value: string | undefined);

    /**
     * URI authorization policy used in drag-and-drop scenarios. The default value is READ (read-only authorization),
     * which takes effect only in scenarios such as the img tag. It applies only to a single record and has the highest
     * priority. For details about the policies, see {@link unifiedDataChannel.UriPermission}.
     *
     * @param { Array<UriPermission> | undefined } value - URI authorization policies.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    set uriAuthorizationPolicies(value: Array<UriPermission> | undefined);
  }

  /**
   * The File type data is a subclass of [UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord} and the base class of
   * file type data. It is used to describe file type data. You are advised to use subclasses of File, such as
   * [Image]{@link unifiedDataChannel.Image}, [Video]{@link unifiedDataChannel.Video}, and
   * [Folder]{@link unifiedDataChannel.Folder}, to describe data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class File extends UnifiedRecord {
    /**
     * A dictionary object whose keys and values are both of the string type. It is used to describe file-related
     * information. For example, you can create a data object with the following details to describe a file:
     *
     * {
     *
     * "name":"file name",
     *
     * "type":"file type"
     *
     * }.
     *
     * This is an optional field, and the default value is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    details?: Record<string, string>;

    /**
     * A dictionary object whose keys and values are both of the string type. It is used to describe file-related
     * information. For example, you can create a data object with the following details to describe a file:
     *
     * {
     *
     * "name":"file name",
     *
     * "type":"file type"
     *
     * }.
     *
     * This is an optional field, and the default value is an empty dictionary object.
     *
     * @returns { Record<string, string> | undefined } the details of unified File [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get details(): Record<string, string> | undefined;

    /**
     * A dictionary object whose keys and values are both of the string type. It is used to describe file-related
     * information. For example, you can create a data object with the following details to describe a file:
     *
     * {
     *
     * "name":"file name",
     *
     * "type":"file type"
     *
     * }.
     *
     * This is an optional field, and the default value is an empty dictionary object.
     *
     * @param { Record<string, string> } the details of unified File. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set details(value: Record<string, string> | undefined);

    /**
     * URI of a local file or a network file. The URI of a local file can be obtained by calling
     * [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}
     *
     * @returns { string } the uri of file. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get uri(): string;

    /**
     * URI of a local file or a network file. The URI of a local file can be obtained by calling
     * [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}
     *
     * @param { string } the uri of file. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set uri(value: string);

    /**
     * URI authorization policy used in drag-and-drop scenarios. The default value is READ+WRITE+PERSIST
     * (read + write + persistent authorization). It applies only to a single record and has the highest priority. For
     * details about the policies, see {@link unifiedDataChannel.UriPermission}.
     *
     * @param { Array<UriPermission> | undefined } value - URI authorization policies.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    set uriAuthorizationPolicies(value: Array<UriPermission> | undefined);
  }

  /**
   * Represents image data. It is a subclass of [File]{@link unifiedDataChannel.File} and is used to describe an image
   * file.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Image extends File {
    /**
     * URI of the local image data or network image. The URI of the local image data can be obtained by calling
     * [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}.
     *
     * @returns { string } the uri of image. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get imageUri(): string;

    /**
     * URI of the local image data or network image. The URI of the local image data can be obtained by calling
     * [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}.
     *
     * @param { string } the uri of image. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set imageUri(value: string);
  }

  /**
   * Video data, a subclass of [File]{@link unifiedDataChannel.File}, used to describe a video file.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Video extends File {
    /**
     * URI of the local video data or network video. The URI of the local video data can be obtained by calling
     * [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}.
     *
     * @returns { string } the uri of video. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get videoUri(): string;

    /**
     * URI of the local video data or network video. The URI of the local video data can be obtained by calling
     * [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}.
     *
     * @param { string } the uri of video. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set videoUri(value: string);
  }

  /**
   * Audio data, a subclass of [File]{@link unifiedDataChannel.File}, used to describe an audio file.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Audio extends File {
    /**
     * URI of the local audio data or network audio data. The URI of the local audio data can be obtained by calling
     * [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}.
     *
     * @returns { string } the uri of audio. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get audioUri(): string;

    /**
     * URI of the local audio data or network audio data. The URI of the local audio data can be obtained by calling
     * [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}.
     *
     * @param { string } the uri of audio. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set audioUri(value: string);
  }

  /**
   * Folder type data, a subclass of [File]{@link unifiedDataChannel.File}, used to describe a folder.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Folder extends File {
    /**
     * URI of a local folder or a network folder. The URI of a local folder can be obtained by
     * [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}.
     *
     * @returns { string } the uri of folder [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get folderUri(): string;

    /**
     * URI of a local folder or a network folder. The URI of a local folder can be obtained by
     * [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}.
     *
     * @param { string } the uri of folder [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set folderUri(value: string);
  }

  /**
   * SystemDefinedRecord is a subclass of [UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord} and the base class of
   * OpenHarmony system-specific data types. It is used to describe data types that circulate only within the OpenHarmony
   * system. You are advised to use subclasses of SystemDefinedRecord, such as
   * [SystemDefinedForm]{@link unifiedDataChannel.SystemDefinedForm},
   * [SystemDefinedAppItem]{@link unifiedDataChannel.SystemDefinedAppItem}, and
   * [SystemDefinedPixelMap]{@link unifiedDataChannel.SystemDefinedPixelMap}, to describe data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class SystemDefinedRecord extends UnifiedRecord {
    /**
     * A dictionary object whose key is of the string type and whose value can be of the number, string, or Uint8Array
     * (binary byte array) type. This is an optional field, and the default value is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    details?: Record<string, int | long | double | string | Uint8Array>;

    /**
     * A dictionary object whose key is of the string type and whose value can be of the number, string, or Uint8Array
     * (binary byte array) type. This is an optional field, and the default value is an empty dictionary object.
     *
     * @returns { Record<string, int | long | double | string | Uint8Array> | undefined } the details of system defined
     *     data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get details(): Record<string, int | long | double | string | Uint8Array> | undefined;

    /**
     * A dictionary object whose key is of the string type and whose value can be of the number, string, or Uint8Array
     * (binary byte array) type. This is an optional field, and the default value is an empty dictionary object.
     *
     * @param { Record<string, int | long | double | string | Uint8Array> | undefined } the details of system defined
     *     data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set details(value: Record<string, int | long | double | string | Uint8Array> | undefined);
  }

  /**
   * Represents the system-defined widget data, which is a subclass of
   * [SystemDefinedRecord]{@link unifiedDataChannel.SystemDefinedRecord}.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class SystemDefinedForm extends SystemDefinedRecord {
    /**
     * Widget ID.
     *
     * @returns { int } the id of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get formId(): int;

    /**
     * Widget ID.
     *
     * @param { int } the id of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set formId(value: int);

    /**
     * Widget name.
     *
     * @returns { string } the name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get formName(): string;

    /**
     * Widget name.
     *
     * @param { string } the name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set formName(value: string);

    /**
     * Name of the bundle to which the widget belongs.
     *
     * @returns { string } the bundle name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get bundleName(): string;

    /**
     * Name of the bundle to which the widget belongs.
     *
     * @param { string } the bundle name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set bundleName(value: string);

    /**
     * Name of the ability corresponding to the widget.
     *
     * @returns { string } the ability name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get abilityName(): string;

    /**
     * Name of the ability corresponding to the widget.
     *
     * @param { string } the ability name of form [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set abilityName(value: string);

    /**
     * Name of the module to which the widget belongs.
     *
     * @returns { string } the module of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get module(): string;

    /**
     * Name of the module to which the widget belongs.
     *
     * @param { string } the module of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set module(value: string);
  }

  /**
   * System-defined desktop icon data, which is a subclass of
   * [SystemDefinedRecord]{@link unifiedDataChannel.SystemDefinedRecord}.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class SystemDefinedAppItem extends SystemDefinedRecord {
    /**
     * Application ID corresponding to the icon.
     *
     * @returns { string } the app id. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get appId(): string;

    /**
     * Application ID corresponding to the icon.
     *
     * @param { string } the app id. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set appId(value: string);

    /**
     * Application name corresponding to the icon.
     *
     * @returns { string } the app name. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get appName(): string;

    /**
     * Application name corresponding to the icon.
     *
     * @param { string } the app name. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set appName(value: string);

    /**
     * Image ID of the icon.
     *
     * @returns { string } the id of app icon [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get appIconId(): string;

    /**
     * Image ID of the icon.
     *
     * @param { string } the id of app icon [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set appIconId(value: string);

    /**
     * Label ID corresponding to the icon name.
     *
     * @returns { string } the id of app label [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get appLabelId(): string;

    /**
     * Label ID corresponding to the icon name.
     *
     * @param { string } the id of app label [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set appLabelId(value: string);

    /**
     * Bundle name of the application corresponding to the icon.
     *
     * @returns { string } the bundle name of app. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get bundleName(): string;

    /**
     * Bundle name of the application corresponding to the icon.
     *
     * @param { string } the bundle name of app. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set bundleName(value: string);

    /**
     * Ability name of the application corresponding to the icon.
     *
     * @returns { string } the ability name of app. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get abilityName(): string;

    /**
     * Ability name of the application corresponding to the icon.
     *
     * @param { string } the ability name of app. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set abilityName(value: string);
  }

  /**
   * An image data type corresponding to the system-defined [PixelMap]{@link @ohos.multimedia.image:image} data type.
   * It is a subclass of [SystemDefinedRecord]{@link unifiedDataChannel.SystemDefinedRecord} and stores only the binary
   * data of a PixelMap.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class SystemDefinedPixelMap extends SystemDefinedRecord {
    /**
     * Binary data of the PixelMap object.
     *
     * @returns { Uint8Array } the raw data of pixel map. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get rawData(): Uint8Array;

    /**
     * Binary data of the PixelMap object.
     *
     * @param { Uint8Array } the raw data of pixel map. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set rawData(value: Uint8Array);
  }

  /**
   * ApplicationDefinedRecord is a subclass of [UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord} and the base
   * class of application-defined data types. It describes custom data types that circulate only within the application
   * ecosystem. Applications can extend custom data types based on this class.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class ApplicationDefinedRecord extends UnifiedRecord {
    /**
     * Identifier of the application-defined type. It must start with 'ApplicationDefined'.
     *
     * @returns { string } the type of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get applicationDefinedType(): string;

    /**
     * Identifier of the application-defined type. It must start with 'ApplicationDefined'.
     *
     * @param { string } the type of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set applicationDefinedType(value: string);

    /**
     * Binary data of the application-defined data type.
     *
     * @returns { Uint8Array } the raw data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get rawData(): Uint8Array;

    /**
     * Binary data of the application-defined data type.
     *
     * @param { Uint8Array } the raw data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set rawData(value: Uint8Array);
  }

  /**
   * Enumerates the data channels supported by UDMF. It is mainly used to identify the different business scenarios
   * targeted by various UDMF data channels.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  enum Intention {
    /**
     * Public data channel.
     *
     * **Applicable scenario:** Suitable for cross-application data sharing using UDMF in public data sharing scenarios.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    DATA_HUB = 'DataHub',

    /**
     * Drag-and-drop data channel.
     *
     * **Applicable scenario:** Suitable for cross-application data sharing using UDMF in drag-and-drop scenarios.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @systemapi [since 12 - 13]
     * @publicapi [since 14]
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG = 'Drag',

    /**
     * System sharing data channel.
     *
     * **Applicable scenario:** Suitable for cross-application data sharing using UDMF in system sharing scenarios.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SHARE = 'SystemShare',

    /**
     * Picker data channel.
     *
     * **Applicable scenario:** Suitable for cross-application data sharing using UDMF in picker scenarios.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    PICKER = 'Picker',

    /**
     * Menu data channel.
     *
     * **Applicable scenario:** Suitable for cross-application data sharing using UDMF in right-click menu scenarios.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    MENU = 'Menu'
  }

  /**
   * Enumerates the visibility levels of data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum Visibility {
    /**
     * Visibility level, visible to all applications.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    ALL,

    /**
     * Visibility level, visible only to the data provider.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    OWN_PROCESS
  }

  /**
   * The data operation APIs provided by UDMF include three optional parameters: intention, key, and visibility. If an
   * API does not require these parameters, they can be left unspecified. For details, see the parameter description of
   * the specific API.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Options {
    /**
     * Data channel type related to the data operation. The value is an [Intention](#intention) enum, including DATA_HUB
     * and DRAG. If not specified, the value is empty by default. For details about whether this parameter is mandatory,
     * see the parameter description of the specific API.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    intention?: Intention;

    /**
     * Unique identifier of the data object in UDMF. It can be obtained from the return value of
     * [insertData]{@link unifiedDataChannel.insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>)}.
     *
     * If not specified, the value is empty by default. For details about whether this parameter is mandatory, see the
     * parameter description of the specific API.<br>It consists of four parts: udmf:/, intention, bundleName, and
     * groupId, which are connected by '/', for example, udmf://DataHub/com.ohos.test/0123456789.<br>Among them, udmf:/
     * is fixed, DataHub is the value of the corresponding enum, com.ohos.test is the bundle name, and 0123456789 is the
     * randomly generated groupId.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    key?: string;

    /**
     * Visibility level of the data. It is available only for public data channels. The value is a
     * [Visibility](#visibility20) enum. It takes effect only when specified during data writing. If not specified,
     * the default value is Visibility.ALL.<br/>**Atomic service API:** This API is supported in atomic services since
     * API version 20.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    visibility?: Visibility;
  }

  /**
   * Enumerates the optional policies for file copy conflicts.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum FileConflictOptions {
    /**
     * Overwrites the file when a file with the same name exists in the destination path.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    OVERWRITE = 0,

    /**
     * Skips the file when a file with the same name exists in the destination path.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    SKIP = 1
  }

  /**
   * Enumerates the progress indicator options, which determine whether to use the system default progress display.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ProgressIndicator {
    /**
     * Does not use the system default progress display.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Uses the system default progress display. If data is obtained within 500 ms, the default progress bar will not be
     * displayed.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    DEFAULT = 1
  }

  /**
   * Enumerates the status codes returned when obtaining data from UDMF.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ListenerStatus {
    /**
     * Finished.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FINISHED = 0,

    /**
     * Processing.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    PROCESSING = 1,

    /**
     * Canceled.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    CANCELED = 2,

    /**
     * An internal error occurred.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    INNER_ERROR = 200,

    /**
     * [GetDataParams]{@link unifiedDataChannel.GetDataParams} contains invalid parameters.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    INVALID_PARAMETERS = 201,

    /**
     * No data is obtained.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    DATA_NOT_FOUND = 202,

    /**
     * An error occurred during synchronization.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    SYNC_FAILED = 203,

    /**
     * An error occurred during file copy.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    COPY_FILE_FAILED = 204,
  }

  /**
   * Defines the data for progress reporting.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface ProgressInfo {
    /**
     * Progress percentage of the drag-and-drop task reported by the system.
     *
     * The value is an integer in the range [-1, 100], where -1 indicates that data acquisition failed this time, and
     * 100 indicates that data acquisition is complete.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progress: int;

    /**
     * Status code of the drag-and-drop task reported by the system.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    status: ListenerStatus;
  }

  /**
   * Defines the listener callback used to obtain progress information and data.
   *
   * @param { ProgressInfo } progressInfo - Progress information reported for the drag-and-drop task, including the
   *     progress status and progress percentage. It contains two fields: progress (progress percentage, ranging from -1
   *     to 100) and status (task status code). A progress value of -1 indicates a failure to obtain data, and 100
   *     indicates that data obtaining is complete.
   * @param { UnifiedData | null } data - Data obtained when the progress reaches 100. Returns null when the progress
   *     has not reached 100.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  type DataProgressListener = (progressInfo: ProgressInfo, data: UnifiedData | null) => void;

  /**
   * Represents the parameters used to obtain data from UDMF, including the destination path, file conflict options, and
   * progress bar type.
   * 
   * For details about how to use it, see 
   * [Obtaining Data Asynchronously Through Drag-and-Drop].
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface GetDataParams {
    /**
     * Defines the progress bar indicator options, which determine whether to use the system default progress display.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progressIndicator: ProgressIndicator;

    /**
     * Represents the progress and data listener used when obtaining unified data.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    dataProgressListener: DataProgressListener;

    /**
     * Destination path for copying files. If file processing is not supported, this parameter does not need to be set
     * and defaults to empty. If file processing is supported, it must be set to an existing directory. If the
     * application involves complex file processing policies or needs to distinguish multi-path storage of files, it is
     * recommended not to set this parameter and let the application complete the file copy processing on its own. When
     * this parameter is not set, the obtained URI is the source path URI; when it is set, the obtained URI is the
     * destination path URI.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    destUri?: string;

    /**
     * Defines the options for file copy conflicts. The default value is OVERWRITE.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    fileConflictOptions?: FileConflictOptions;

    /**
     * efines the receiver's capability to accept data types and the number of data records. In lazy loading scenarios,
     * the sender can generate and return more appropriate data content based on this information. It defaults to empty,
     * indicating that the receiver's data acceptance capability is not provided.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    acceptableInfo?: DataLoadInfo;
  }

  /**
   * Describes the type and quantity of the data to be loaded.
   *
   * - Used on the **data sender** side to indicate the range of data that can actually be provided. This field must be
   * set.
   * - Used on the **data receiver** side to indicate the type and quantity of data expected to be loaded. This field
   * can be set as needed.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataLoadInfo {
    /**
     * Set of data types. The default value is an empty set.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    types?: Set<string>;

    /**
     * Maximum number of data records expected or that can be provided. The default value is **0**, and the value range
     * is [0, 2<sup>32</sup>-1]. If the value exceeds the range, the default value is used. If the value is a
     * floating-point number, only the integer part is used. When used for drag-and-drop, this value is displayed as the
     * badge count, with a maximum of 2<sup>31</sup>-1. If the value exceeds this maximum, the badge is not displayed.
     * When used as the badge count, its priority is lower than that of the numberBadge method in
     * [DragPreviewOptions]{@link DragPreviewOptions}
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    recordCount?: long;
  }

  /**
   * Defines the handler for delayed data loading. It allows the data sender to dynamically generate data based on the
   * information passed in by the receiver, enabling more flexible and precise data interaction strategies.
   * This handler is a synchronous function and is suitable for simple business logic. If the business logic is complex
   * or takes a long time to execute (more than 3 seconds), use the asynchronous handler
   * [DelayedDataLoadHandler]{@link unifiedDataChannel.DelayedDataLoadHandler}.
   *
   * @param { DataLoadInfo } acceptableInfo - Data types and quantity that the data receiver can accept. The default
   *     value is empty.
   * @returns { UnifiedData | null } UnifiedData object generated based on the receiver information when the delayed
   *     handler is triggered, used for data transfer. If the data cannot be generated or generation fails, null is
   *     returned.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  type DataLoadHandler = (acceptableInfo?: DataLoadInfo) => UnifiedData | null;

  /**
   * Defines the handler for delayed data loading. It allows the data sender to dynamically generate data based on the
   * information passed in by the receiver, enabling a more flexible and precise data interaction strategy. The result
   * is returned asynchronously through a promise.
   *
   * This handler is an asynchronous function that does not block the main thread. It can handle complex business logic
   * and execute long-running tasks.
   *
   * @param { DataLoadInfo } [acceptableInfo] - Data types and quantity that the data receiver can accept. The default
   *     value is empty.
   * @returns { Promise<UnifiedData | null> } Promise used to return the UnifiedData object generated based on the
   *     receiver information, or null. Rejects with error information on failure.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  type DelayedDataLoadHandler = (acceptableInfo?: DataLoadInfo) => Promise<UnifiedData | null>;

  /**
   * Describes the data loading policy of the sender in delayed loading scenarios.

   * When both loadHandler and delayedDataLoadHandler are passed in, delayedDataLoadHandler takes precedence and
   * loadHandler does not take effect.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataLoadParams {
    /**
     * Handler used to load data in a delayed manner. This handler is a synchronous function and is suitable for
     * processing simple service logic. If the function involves complex service logic and takes a long time to
     * execute (more than 3s), you are advised to use
     * [DelayedDataLoadHandler]{@link unifiedDataChannel.DelayedDataLoadHandler}.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    loadHandler: DataLoadHandler;

    /**
     * Describes the data types and quantities that the current sender can generate.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    dataLoadInfo: DataLoadInfo;

    /**
     * Asynchronous handler used to load data in a delayed manner. The default value is undefined. If this parameter is
     * not set, only loadHandler is used.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    delayedDataLoadHandler?: DelayedDataLoadHandler;
  }

  /**
   * Writes data to the public data channel of the UDMF and generates a unique identifier for the data. This API uses an
   * asynchronous callback to return the result.
   * **Implementation mechanism** After receiving the UnifiedData object, the system verifies data integrity and serializes
   * the data for storage. It routes the data to the corresponding storage space based on the intention value and
   * generates a unique identifier key. The validity period of the data in the public data channel is managed by the
   * system, and the default policy is to automatically clear the data after the application exits.
   *
   * @param { Options } options - Configuration parameters. The **intention** field is mandatory and does not support
   *     **DRAG**. If it is not specified, error code 401 is returned. Whether other fields are specified does not
   *     affect the use of this API.
   * @param { UnifiedData } data - Unified data object to write or update, used to store data records and their
   *     attribute information.
   * @param { AsyncCallback<string> } callback - Callback invoked to return the unique identifier key of the data
   *     written to the UDMF.
   * @throws { BusinessError } 401 - [Sync/Async] Parameter error. Possible causes: 
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>): void;

  /**
   * Writes data to the public data channel of UDMF and generates a unique identifier for the data. This API uses a
   * promise to return the result asynchronously.
   *
   * @param { Options } options - Configuration options. The **intention** field is mandatory and does not support DRAG.
   *     If it is not specified, error code 401 is returned. Whether other fields are specified does not affect the use
   *     of this API
   * @param { UnifiedData } data - Target data.
   * @returns { Promise<string> } Promise used to return the unique identifier key of the data written to UDMF.
   * @throws { BusinessError } 401 - [Sync/Async] Parameter error. Possible causes: 
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function insertData(options: Options, data: UnifiedData): Promise<string>;

  /**
   * Updates the data in the public data channel that has been written to UDMF. This API uses an asynchronous callback
   * to return the result.
   *
   * @param { Options } options - Configuration parameters. The **key** field is mandatory. If it is not specified,
   *     error code 401 is returned. The **intention** parameter supports only DATA_HUB. Whether other fields are
   *     specified does not affect the use of this API.
   * @param { UnifiedData } data - Target data.
   * @param { AsyncCallback<void> } callback Callback used to return the result. If the data update is successful, 
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - [Sync/Async] Parameter error. Possible causes: 
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function updateData(options: Options, data: UnifiedData, callback: AsyncCallback<void>): void;

  /**
   * Updates the data in the public data channel that has been written to UDMF. 
   * This API uses a promise to return the result.
   *
   * @param { Options } options - Configuration options. The **key** field is mandatory. If it is not specified, error
   *     code 401 is returned. The **intention** parameter supports only DATA_HUB. Other fields do not affect the use of
   *     this API.
   * @param { UnifiedData } data - Target data.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - [Sync/Async] Parameter error. Possible causes: 
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function updateData(options: Options, data: UnifiedData): Promise<void>;

  /**
   * Queries data in the UDMF public data channel. This API uses an asynchronous callback to return the result.
   *
   * @param { Options } options - Configuration options. Both key and intention are optional, and intention does not
   *     support DRAG. Corresponding validation is performed based on the passed parameters to return different values.
   * @param { AsyncCallback<Array<UnifiedData>> } callback - Callback invoked to return all the queried data.<br>If key
   *     is specified in options, the data corresponding to the key is returned.<br>If intention is specified in
   *     options, all data under the intention is returned.<br>If both intention and key are specified, the intersection
   *     of the data queried by the two is returned, which is consistent with the result obtained when only key is
   *     specified in options. If there is no intersection, an error is reported.
   * @throws { BusinessError } 401 - [Sync/Async] Parameter error. Possible causes: 
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function queryData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void;

  /**
   * Queries data in the UDMF public data channel. This API uses a promise to return the result asynchronously.
   *
   * @param { Options } options - Configuration parameters. Both key and intention are optional, and the intention
   *     parameter does not support DRAG. Corresponding verification is performed based on the passed parameters to
   *     return different values.
   * @returns { Promise<Array<UnifiedData>> } Promise used to return the queried data. When a key is specified in
   *     options, the data corresponding to the key is returned. When an intention is specified, all data under that
   *     intention is returned. When both are specified, the intersection of the two query results is returned;
   *     the promise rejects if no intersection exists.
   * @throws { BusinessError } 401 - [Sync/Async] Parameter error. Possible causes: 
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function queryData(options: Options): Promise<Array<UnifiedData>>;

  /**
   * Deletes data from the UDMF public data channel and returns the deleted data set. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { Options } options - Configuration parameters. Both key and intention are optional, and intention supports
   *     only DATA_HUB. The corresponding verification is performed based on the passed parameters to return different
   *     values.
   * @param { AsyncCallback<Array<UnifiedData>> } callback - Callback invoked to return all the deleted data.<br>If key
   *     is specified in options, the data corresponding to the key is deleted and returned.<br>If intention is
   *     specified in options, all data under the intention is deleted and returned.<br>If both intention and key are
   *     specified, the intersection of the two is deleted and returned, which is consistent with the result when only
   *     key is specified in options; an error is reported if there is no intersection.
   * @throws { BusinessError } 401 - [Sync/Async] Parameter error. Possible causes: 
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function deleteData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void;

  /**
   * Deletes data from the UDMF public data channel and returns the deleted data set. This API uses a promise to return
   * the result asynchronously.
   *
   * @param { Options } options - Configuration parameters. Both key and intention are optional, and intention supports
   *     only DATA_HUB. The parameters are verified based on the values passed in to return different results.
   * @returns { Promise<Array<UnifiedData>> } Promise used to return all deleted data.<br>If key is specified in
   *     options, the data corresponding to key is deleted and returned.<br>If intention is specified in options, all
   *     data under intention is deleted and returned.<br>If both intention and key are specified, the intersection of
   *     the two data sets is deleted and returned, which is the same as the result when only key is specified in
   *     options. An error is reported if there is no intersection.
   * @throws { BusinessError } 401 - [Sync/Async] Parameter error. Possible causes: 
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function deleteData(options: Options): Promise<Array<UnifiedData>>;

  /**
    * Sets the usage scope of the data in the in-app drag-and-drop data channel, as defined by
    * [ShareOptions]{@link unifiedDataChannel.ShareOptions}. Currently, only the DRAG data channel supports this
    * management setting. After the call succeeds, the usage scope of the data in the in-app drag-and-drop data channel
    * is set to the specified ShareOptions value.
    *
    * @permission ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION [since 14]
    * @param { Intention } intention - Data channel type related to the data operation. Currently, only the DRAG data
    *     channel is supported.
    * @param { ShareOptions } shareOptions - Usage scope of
    *     [UnifiedData]{@link unifiedDataChannel.UnifiedDataProperties} within the device.
    * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
    *     API. [since 12 - 13]
    * @throws { BusinessError } 401 - [Sync] Parameter error. Possible causes: 
    *     <br>1. Mandatory parameters are left unspecified;
    *     <br>2. Incorrect parameter types;
    *     <br>3. Parameter verification failed. 
    * @throws { BusinessError } 20400001 - Settings already exist. To reconfigure, remove the existing sharing options.
    * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
    *      required to call the API. [since 14]
    * @syscap SystemCapability.DistributedDataManager.UDMF.Core
    * @systemapi [since 12 - 13]
    * @publicapi [since 14]
    * @stagemodelonly
    * @since 12 dynamic
    * @since 23 static
    */
   function setAppShareOptions(intention: Intention, shareOptions: ShareOptions): void;

   /**
    * Clears the control information set by [setAppShareOptions]{@link unifiedDataChannel.setAppShareOptions}. After
    * this API is called successfully, the control information set by setAppShareOptions is cleared, and the in-app
    * drag-and-drop channel data is restored to the default usage scope.
    * @permission ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION [since 14]
    * @param { Intention } intention - Data channel type related to the data operation. Currently, only the DRAG data
    *     channel is supported.
    * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
    *     API. [since 12 - 13]
    * @throws { BusinessError } 401 - [Sync] Parameter error. Possible causes: 
    *     <br>1. Mandatory parameters are left unspecified;
    *     <br>2. Incorrect parameter types;
    *     <br>3. Parameter verification failed.
    * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
    *     required to call the API. [since 14]
    * @syscap SystemCapability.DistributedDataManager.UDMF.Core
    * @systemapi [since 12 - 13]
    * @publicapi [since 14]
    * @stagemodelonly
    * @since 12 dynamic
    * @since 23 static
    */
   function removeAppShareOptions(intention: Intention): void;

  /**
    * Converts the passed-in data into a multi-style data structure. If the original data uses multiple records to carry
    * different data formats of the same data, you can use this API to convert the original data into a multi-style
    * data structure.
    * The conversion is performed and the passed-in data is converted into a multi-style data structure when the
    * following rules are met:
    * 1. The number of records in the data is greater than 1.
    * 2. The value of the tag in the properties of the data is "records_to_entries_data_format".
    *
    * Otherwise, no action is taken.
    *
    * @param { UnifiedData } data - Unified data object to be converted into a multi-style data structure.
    * @syscap SystemCapability.DistributedDataManager.UDMF.Core
    * @stagemodelonly
    * @atomicservice
    * @since 17 dynamic
    * @since 23 static
    */
   function convertRecordsToEntries(data: UnifiedData): void;
}

export default unifiedDataChannel;
