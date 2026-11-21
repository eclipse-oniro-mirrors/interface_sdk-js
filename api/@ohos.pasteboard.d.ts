/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
 * @file Pasteboard
 * @kit BasicServicesKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import image from './@ohos.multimedia.image';
import unifiedDataChannel from './@ohos.data.unifiedDataChannel';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * This module provides the capabilities of managing the system pasteboard to support the copy and paste functions. You
 * can use the APIs of this module to operate pasteboard content of the plain text, HTML, URI, Want, PixelMap, and
 * other types.
 *
 * @syscap SystemCapability.MiscServices.Pasteboard
 * @crossplatform [since 24]
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace pasteboard {
  /**
   * Maximum number of records in a **PasteData** object. In versions earlier than API version 10, the value is 512,
   * indicating that no more records can be added once the number of records reaches 512.
   * Since API version 10, no limit is placed on the number of records in a **PasteData** object.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  const MAX_RECORD_NUM = 512;

  /**
   * Maximum number of records in a **PasteData** object. In versions earlier than API version 10, the value is 512,
   * indicating that no more records can be added once the number of records reaches 512.
   * Since API version 10, no limit is placed on the number of records in a **PasteData** object.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @since 23 static
   */
  const MAX_RECORD_NUM: int;

  /**
   * MIME type of the HTML content.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  const MIMETYPE_TEXT_HTML = 'text/html';

  /**
   * MIME type of the HTML content. The value is 'text/html'.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @since 23 static
   */
  const MIMETYPE_TEXT_HTML: string;

  /**
   * MIME type of the Want content.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  const MIMETYPE_TEXT_WANT = 'text/want';

  /**
   * MIME type of the Want content. The value is 'text/want'.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @since 23 static
   */
  const MIMETYPE_TEXT_WANT: string;

  /**
   * MIME type of the plain text content.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  const MIMETYPE_TEXT_PLAIN = 'text/plain';

  /**
   * MIME type of the plain text content. The value is 'text/plain'.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @since 23 static
   */
  const MIMETYPE_TEXT_PLAIN: string;

  /**
   * MIME type of the URI content.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  const MIMETYPE_TEXT_URI = 'text/uri';

  /**
   * MIME type of the URI content. The value is 'text/uri'.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @since 23 static
   */
  const MIMETYPE_TEXT_URI: string;

  /**
   * MIME type of the PixelMap content.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  const MIMETYPE_PIXELMAP = 'pixelMap';

  /**
   * MIME type of the PixelMap content. The value is 'pixelMap'.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @since 23 static
   */
  const MIMETYPE_PIXELMAP: string;

  /**
   * Enumerates the supported virtual file types.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  enum VirtualItemType {
    /**
     * Indicates the virtual file type.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    FILE = 0,
    /**
     * Indicates the virtual directory type.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    DIR = 1
  }

  /**
   * Base type for virtual file and directory items.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  class VirtualBaseItem {
    /**
     * File or directory name.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    name: string;
    /**
     * File type.
     * The value of [type]{@link pasteboard.VirtualFileItem.type} for
     * [VirtualFileItem]{@link pasteboard.VirtualFileItem} is [FILE]{@link pasteboard.VirtualItemType.FILE};
     * the value of [type]{@link pasteboard.VirtualDirItem.type} for
     * [VirtualDirItem]{@link pasteboard.VirtualDirItem} is [DIR]{@link pasteboard.VirtualItemType.DIR}.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    readonly type: VirtualItemType;
    /**
     * Last modification time.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    modifyTime: Date;
  }

  /**
   * Metadata of a virtual file.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  class VirtualFileItem extends VirtualBaseItem {
    /**
     * Unique file identifier, used in [onStat]{@link pasteboard.VirtualFileInfo.onStat},
     * [onRead]{@link pasteboard.VirtualFileInfo.onRead}, and [onCancel]{@link pasteboard.VirtualFileInfo.onCancel}
     * to identify the virtual file to be processed.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    id: string;
    /**
     * File type, with the value [FILE]{@link pasteboard.VirtualItemType.FILE}.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    readonly type: VirtualItemType = VirtualItemType.FILE;
    /**
     * File size (unit: bytes). This parameter is optional. If left unspecified, the file size information
     * must be returned at runtime through [onStat]{@link pasteboard.VirtualFileInfo.onStat}.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    size?: long;
  }

  /**
   * Metadata of a virtual directory.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  class VirtualDirItem extends VirtualBaseItem {
    /**
     * File type, with the value [DIR]{@link pasteboard.VirtualItemType.DIR}.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    readonly type: VirtualItemType = VirtualItemType.DIR;
    /**
     * Child items of the directory. This parameter is optional.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    subItems?: Array<VirtualFileItem | VirtualDirItem>;
  }

  /**
   * Used to query the metadata of a specified virtual file.
   *
   * @param { string } id - Unique identifier of the virtual file to query.
   * @returns { Promise<VirtualFileItem> } Promise used to return the metadata object of the virtual file.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  type VirtualFileOnStat = (id: string) => Promise<VirtualFileItem>;

  /**
   * Used to query the content of a specified virtual file.
   *
   * @param { string } id - Unique identifier of the virtual file to query.
   * @param { long } offset - Start position of the virtual file content to query (unit: bytes).
   * @param { int } length - Length of the virtual file content to query (unit: bytes).
   * @returns { Promise<Uint8Array> } Promise used to return the virtual file data starting from **offset** with
   *         the specified **length**.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  type VirtualFileOnRead = (id: string, offset: long, length: int) => Promise<Uint8Array>;

  /**
   * Used to cancel the operation for specified virtual files.
   *
   * @param { Array<string> } idList - List of unique identifiers of the virtual files to be cancelled.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  type VirtualFileOnCancel = (idList: Array<string>) => Promise<void>;

  /**
   * Virtual file information.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  class VirtualFileInfo {
    /**
     * Metadata of a file or directory.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    itemInfo: VirtualFileItem | VirtualDirItem;
    /**
     * Callback invoked to obtain the metadata of a specified virtual file. This parameter is optional.
     * If left unspecified, when [itemInfo]{@link pasteboard.VirtualFileInfo.itemInfo} contains a
     * [VirtualFileItem]{@link pasteboard.VirtualFileItem}, the file size must be specified through
     * [size]{@link pasteboard.VirtualFileItem.size} at copy time.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    onStat?: VirtualFileOnStat;
    /**
     * Callback invoked to read the content of a specified virtual file.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    onRead: VirtualFileOnRead;
    /**
     * Callback invoked to cancel the operation of specified virtual files.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    onCancel: VirtualFileOnCancel;
  }

  /**
   * Indicates type of value.
   * On API 26.1.0 and above, it can also support using [VirtualFileInfo]{@link pasteboard.VirtualFileInfo} in
   * [createData]{@link pasteboard.createData(mimeType: string, value: ValueType)},
   * [createRecord]{@link pasteboard.createRecord(mimeType: string, value: ValueType)} and
   * [addEntry]{@link PasteDataRecord.addEntry(type: string, value: ValueType)}.
   *
   * @unionmember { string } The value is of the string type.
   * @unionmember { image.PixelMap } The value is of the [image.PixelMap]{@link @ohos.multimedia.image:image.PixelMap} type.
   * @unionmember { Want } The value is of the [Want]{@link @ohos.app.ability.Want:Want} type.
   * @unionmember { ArrayBuffer } The value is of the **ArrayBuffer** type.
   * @unionmember { VirtualFileInfo } The value is of the [VirtualFileInfo]{@link pasteboard.VirtualFileInfo} type.
   *     [since 26.1.0]
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  type ValueType = string | image.PixelMap | Want | ArrayBuffer | VirtualFileInfo;

  /**
   * Creates a **PasteData** object of the HTML type.
   *
   * @param { string } htmlText - HTML text. The value must comply with the standard HTML format.
   * @returns { PasteData } **PasteData** object.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createData(mimeType: string, value: ValueType)
   */
  function createHtmlData(htmlText: string): PasteData;

  /**
   * Creates a **PasteData** object of the Want type.
   *
   * @param { Want } want - Want content.
   * @returns { PasteData } **PasteData** object.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createData(mimeType: string, value: ValueType)
   */
  function createWantData(want: Want): PasteData;

  /**
   * Creates a **PasteData** object of the plain text type.
   *
   * @param { string } text - Plain text.
   * @returns { PasteData } **PasteData** object.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createData(mimeType: string, value: ValueType)
   */
  function createPlainTextData(text: string): PasteData;

  /**
   * Creates a **PasteData** object of the URI type.
   *
   * @param { string } uri - URI text. The value must comply with the standard URI format.
   * @returns { PasteData } **PasteData** object.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createData(mimeType: string, value: ValueType)
   */
  function createUriData(uri: string): PasteData;

  /**
   * Creates a **PasteData** object of the specified type and creates a **PasteData** instance based on the input MIME
   * type and data content. After this API is called, the system verifies the MIME type, encapsulates the data content,
   * and returns a **PasteData** object that can be used in subsequent pasteboard operations. The value of **mimeType**
   * can contain a maximum of 1024 bytes, and the value type must match the MIME type. Use this method when you need to
   * save data of a single type (such as plain text, HTML, or images) to the pasteboard. Use the defined constant types
   * (for example, **MIMETYPE_TEXT_PLAIN**) for **mimeType**. If you need to pass data in a custom format, you can use a
   * custom MIME type.
   * On API 26.1.0 and above, it can also support creating a URI-type **PasteData** object with a value of
   * [VirtualFileInfo]{@link pasteboard.VirtualFileInfo}.
   *
   * @param { string } mimeType - MIME type of custom data. The value can be a predefined MIME type listed in
   *     [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants),
   *     including HTML, Want, plain text, URI, and pixel map, or a custom MIME type. The value of **mimeType** cannot
   *     exceed 1024 bytes.
   * @param { ValueType } value - Content of custom data. You are advised to select a proper data type based on the
   *     actual scenario. Using a large data object will affect the app's copy and paste performance and memory usage.
   *     For the **ArrayBuffer** type, you are advised to set a proper data size. For the **PixelMap** type, you are
   *     advised to release objects that are no longer used in a timely manner.
   * @returns { PasteData } **PasteData** object.
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function createData(mimeType: string, value: ValueType): PasteData;

  /**
   * Creates a **PasteData** object that contains multiple types of data. Multiple MIME data records can be created at a
   * time. After this API is called, the system parses multiple key-value pairs in the record and creates multiple
   * **PasteDataRecord** records. The first MIME type is used as the default type. Data of non-default types is read
   * using [getData]{@link pasteboard.PasteDataRecord.getData}. When an application needs to copy multiple types of data
   * (such as text, URI, and HTML) to the pasteboard at the same time, this API can be used to create a **PasteData**
   * object that contains data of multiple MIME types.
   *
   * @param { [Record](docroot://quick-start/arkts-language-guide-collection-types.md#recordkv-type)<string,
   * 	 [ValueType]{@link ValueType}> } data - The key of **Record** can be the MIME type corresponding to the
   *     pasteboard data, including HTML, Want, plain text, URI, and pixel map defined in
   *     [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants).
   *     Alternatively, the key could be a custom MIME type, whose parameter, the length of **mimeType**, cannot exceed
   *     1024 bytes.
   *     <br>The value of **Record** is the data corresponding to the MIME type specified in the key.
   *     <br>The first MIME type specified by the key-value in **Record** is used as the default MIME type of the first
   *     **PasteDataRecord** in the **PasteData** object. Data of non-default types can be read only by using the
   *     [getData]{@link pasteboard.PasteDataRecord.getData} API.
   * @returns { PasteData } **PasteData** object.
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @since 14 dynamic
   * @since 23 static
   */
  function createData(data: Record<string, ValueType>): PasteData;

  /**
   * Creates a **PasteDataRecord** object of the HTML text type.
   *
   * @param { string } htmlText - HTML text. The value must comply with the standard HTML format.
   * @returns { PasteDataRecord } **PasteDataRecord** object of the HTML text type.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createRecord(mimeType: string, value: ValueType)
   */
  function createHtmlTextRecord(htmlText: string): PasteDataRecord;

  /**
   * Creates a **PasteDataRecord** object of the Want type.
   *
   * @param { Want } want - Want content.
   * @returns { PasteDataRecord } New **PasteDataRecord** object of the Want type.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createRecord(mimeType: string, value: ValueType)
   */
  function createWantRecord(want: Want): PasteDataRecord;

  /**
   * Creates a **PasteDataRecord** object of the plain text type.
   *
   * @param { string } text - Plain text.
   * @returns { PasteDataRecord } New **PasteDataRecord** object of the plain text type.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createRecord(mimeType: string, value: ValueType)
   */
  function createPlainTextRecord(text: string): PasteDataRecord;

  /**
   * Creates a **PasteDataRecord** object of the URI type.
   *
   * @param { string } uri - URI text. The value must comply with the standard URI format.
   * @returns { PasteDataRecord } New **PasteDataRecord** object of the URI type.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createRecord(mimeType: string, value: ValueType)
   */
  function createUriRecord(uri: string): PasteDataRecord;

  /**
   * Creates a data record of the specified type and encapsulates the data record into a **PasteDataRecord** object.
   * After this API is called, the system encapsulates data of the specified MIME type and returns records that can be
   * added to the **PasteData** object. The value of **mimeType** contains a maximum of 1024 bytes. The value type must
   * match the MIME type. For example, if the MIME type is **MIMETYPE_TEXT_PLAIN**, the value must be of the string
   * type. The parameter cannot be empty.
   *
   * - The created record takes effect only after being added to the [PasteData]{@link pasteboard.PasteData} object
   * using [addRecord]{@link pasteboard.PasteData.addRecord(record: PasteDataRecord)}.
   * - The typical process is as follows: Use [createData]{@link pasteboard.createData} to create a **PasteData**
   * object, use **createRecord** to create a record, and then use **addRecord** to add the record.
   *
   * On API 26.1.0 and above, it can also support creating a URI-type data record with a value of
   * [VirtualFileInfo]{@link pasteboard.VirtualFileInfo}.
   *
   * @param { string } mimeType - MIME type of custom data. The value can be a predefined MIME type listed in
   *     [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants),
   *     including HTML, Want, plain text, URI, and pixel map, or a custom MIME type. The value of **mimeType** cannot
   *     exceed 1024 bytes.
   * @param { ValueType } value - Data content of the specified type. You are advised to select a proper data type based
   *     on the actual scenario. Using a large data object will affect the pasteboard performance and memory usage. For
   *     the **ArrayBuffer** type, you are advised to set a proper data size. For the **PixelMap** type, you are advised
   *     to release objects that are no longer used in a timely manner.
   * @returns { PasteDataRecord } A new paste data record of a specified type.
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function createRecord(mimeType: string, value: ValueType): PasteDataRecord;

  /**
   * Obtains a **SystemPasteboard** object and returns a singleton instance of the pasteboard service. After this API is
   * called, the **SystemPasteboard** object can be used to access the read, write, and listening functions of the
   * pasteboard. The same instance is returned each time this API is called. Before calling this API, ensure that the
   * pasteboard service is running properly. Before performing any read or write operation on the pasteboard, you need
   * to call this API to obtain the **SystemPasteboard** object.
   *
   * @returns { SystemPasteboard } **SystemPasteboard** object.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  function getSystemPasteboard(): SystemPasteboard;

  /**
   * Enumerates the pasteable ranges of pasteboard data.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum ShareOption {
    /**
     * Only intra-application pasting is allowed.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    INAPP = 0,
    /**
     * Indicates that paste is allowed within any application. <!--RP1--><!--RP1End-->
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    LOCALDEVICE = 1,
    /**
     * Indicates that pasting is allowed within any application. Discarded in API version 12 and later versions. There
     * is no substitute interface or alternative method. <!--RP2--><!--RP2End-->
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 12
     */
    CROSSDEVICE = 2
  }

  /**
   * Describes the patterns supported by the pasteboard.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 13 dynamic
   * @since 23 static
   */
  enum Pattern {
    /**
     * URL.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 13 dynamic
     * @since 23 static
     */
    URL = 0,
    /**
     * Number.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 13 dynamic
     * @since 23 static
     */
    NUMBER = 1,
    /**
     * Email address.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 13 dynamic
     * @since 23 static
     */
    EMAIL_ADDRESS = 2,
    /**
     * HTTP URL.
     * This API can be used only in the stage model.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    HTTP_URL = 3,
    /**
     * Flight number.
     * This API can be used only in the stage model.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    FLIGHT_NUMBER = 4
  }

  /**
   * Defines the properties of all data records on the pasteboard, including the timestamp, data type, pasteable range,
   * and additional data. The defined properties can be applied to the pasteboard only with the
   * [setProperty]{@link pasteboard.PasteData.setProperty(property: PasteDataProperty)} method.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface PasteDataProperty {
    /**
     * Additional property data. It does not allow for dynamic adding of properties. Properties can be added only by
     * re-assigning values. This parameter is left empty by default. For details, see the example of **setProperty**.
     *
     * @type { object } [since 7 - 22]
     * @type { Record<string, object> } [since 23]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    additions: Record<string, object>;
    /**
     * Additional property data. It does not allow for dynamic adding of properties. Properties can be added only by
     * re-assigning values. This parameter is left empty by default. For details, see the example of **setProperty**.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 23 static
     */
    additions: Record<string, RecordData>;
    /**
     * Non-repeating data types of the data records on the pasteboard.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly mimeTypes: Array<string>;
    /**
     * Custom tag. This parameter is left empty by default.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    tag: string;
    /**
     * Timestamp when data is written to the pasteboard (unit: nanoseconds since the device is powered on).
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly timestamp: long;
    /**
     * Whether the pasteboard content is for local access only. The value **true** indicates that content is for local
     * access only, and the value **false** indicates that cross-device data transfer is allowed. The default value is
     * **false**. The value will be overwritten by the value of the **shareOption** attribute. You are advised to use
     * the [ShareOption]{@link pasteboard.ShareOption} attribute instead.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    localOnly: boolean;
    /**
     * Pasteable ranges of pasteboard data. The default value is **CROSSDEVICE**. This parameter is mutually exclusive
     * with **localOnly**. Setting **shareOption** affects the actual value of **localOnly**.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    shareOption: ShareOption;
  }

  /**
   * Provides **PasteDataRecord** APIs. A **PasteDataRecord** is an abstract definition of the content on the
   * pasteboard. The pasteboard content consists of one or more plain text, HTML, URI, or Want records. The default data
   * type of a **PasteDataRecord** cannot be changed after the record is created. You must specify the correct default
   * data type when creating a **PasteDataRecord**. To update the attributes of a **PasteDataRecord**, use
   * [addEntry]{@link pasteboard.PasteDataRecord.addEntry}.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface PasteDataRecord {
    /**
     * HTML text. The value must comply with the standard HTML format. Modifications to this attribute are invalid.
     * To update the attribute value, use [addEntry]{@link pasteboard.PasteDataRecord.addEntry}.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    htmlText: string;
    /**
     * Want content. Modifications to this attribute are invalid.
     * To update the attribute value, use [addEntry]{@link pasteboard.PasteDataRecord.addEntry}.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    want: Want;
    /**
     * Default data type. Modifications to this attribute are invalid.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    mimeType: string;
    /**
     * Plain text. Modifications to this attribute are invalid.
     * To update the attribute value, use [addEntry]{@link pasteboard.PasteDataRecord.addEntry}.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    plainText: string;
    /**
     * URI text. The value must comply with the standard URI format. Modifications to this attribute are invalid.
     * To update the attribute value, use [addEntry]{@link pasteboard.PasteDataRecord.addEntry}.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * Pixel map. Modifications to this attribute are invalid.
     * To update the attribute value, use [addEntry]{@link pasteboard.PasteDataRecord.addEntry}.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    pixelMap: image.PixelMap;
    /**
     * Content of custom data. Modifications to this attribute are invalid.
     *
     * @type { object } [since 9 - 22]
     * @type { Record<string, ArrayBuffer> } [since 23]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    data: Record<string, ArrayBuffer>;

    /**
     * Forcibly converts the content in a **PasteData** object to text. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { AsyncCallback<string> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the text obtained from the conversion. Otherwise, **err** is error
     *     information.
     * @throws { BusinessError } 401 - Possible causes: Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteDataRecord.toPlainText()
     */
    convertToText(callback: AsyncCallback<string>): void;

    /**
     * Forcibly converts the content in a **PasteData** object to text. This API uses a promise to return the result.
     *
     * @returns { Promise<string> } Promise used to return the text obtained from the conversion.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteDataRecord.toPlainText()
     */
    convertToText(): Promise<string>;

    /**
     * Forcibly converts HTML, plain, and URI content in **PasteDataRecord** to the plain text. If **PasteDataRecord**
     * contains other data types (such as PixelMap and Want), the conversion result is an empty string.
     *
     * @returns { string } Plain text.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    toPlainText(): string;

    /**
     * Adds data of an extra type to **PasteDataRecord**. The MIME type added using this method is not the default type
     * of **Record**. You can only use the [getData]{@link pasteboard.PasteDataRecord.getData} API to read the
     * corresponding data.
     * On API 26.1.0 and above, it can also support adding URI-type data with a value of
     * [VirtualFileInfo]{@link pasteboard.VirtualFileInfo}.
     *
     * @param { string } type - MIME type of custom data. The value can be a predefined MIME type listed in
     *     [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants),
     *     including HTML, Want, plain text, URI, and pixel map, or a custom MIME type. The value of **mimeType** cannot
     *     exceed 1024 bytes.
     * @param { ValueType } value - Content of custom data.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @since 14 dynamic
     * @since 23 static
     */
    addEntry(type: string, value: ValueType): void;

    /**
     * Obtains the intersection of the input MIME type and the MIME type of the pasteboard data. Before pasting, check
     * whether the pasteboard data formats include the formats supported by the app. For example, if the app supports
     * only plain text and HTML, you can call this API to check whether the pasteboard data formats include these
     * formats and determine whether to perform the paste operation based on the returned result.
     *
     * @param { Array<string> } types - MIME types. The value can be compared with the MIME types of the pasteboard
     *     data, and the matched MIME types are returned.
     * @returns { Array<string> } Intersection of the input MIME type and the MIME type of the pasteboard data obtained.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @since 14 dynamic
     * @since 23 static
     */
    getValidTypes(types: Array<string>): Array<string>;

    /**
     * Obtains custom data of the specified MIME type from **PasteDataRecord**. This API uses a promise to return the
     * result.
     *
     * @param { string } type - MIME type. The value contains a maximum of 1024 bytes. If the value is out of range,
     *     error code 401 is returned.
     * @returns { Promise<ValueType> } Promise used to return the custom data of the specified MIME type in
     *     **PasteDataRecord**.
     *     If **PasteDataRecord** contains data of multiple MIME types, the non-**PasteDataRecord** data of the
     *     default MIME type can be obtained only through this API.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @since 14 dynamic
     * @since 23 static
     */
    getData(type: string): Promise<ValueType>;
  }

  /**
   * Implements a **PasteData** object. Paste data contains one or more data records (
   * [PasteDataRecord]{@link pasteboard.PasteDataRecord}) and property description objects (
   * [PasteDataProperty]{@link pasteboard.PasteDataProperty}).
   *
   * Before calling any API in **PasteData**, you must use **[createData()]{@link pasteboard.createData}** or
   * **[getData()]{@link pasteboard.SystemPasteboard.getData(callback: AsyncCallback<PasteData>)}** to create a
   * **PasteData** object.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface PasteData {
    /**
     * Adds an HTML record to this pasteboard, and adds **MIMETYPE_TEXT_HTML** to **mimeTypes** in
     * [PasteDataProperty]{@link pasteboard.PasteDataProperty}. The parameters cannot be empty. Otherwise, the operation
     * fails.
     *
     * @param { string } htmlText - HTML text. The value must comply with the standard HTML format.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.addRecord(mimeType: string, value: ValueType)
     */
    addHtmlRecord(htmlText: string): void;

    /**
     * Adds a Want record to this pasteboard, and adds **MIMETYPE_TEXT_WANT** to **mimeTypes** in
     * [PasteDataProperty]{@link pasteboard.PasteDataProperty}. The parameters cannot be empty. Otherwise, the operation
     * fails.
     *
     * @param { Want } want - Want object.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.addRecord(mimeType: string, value: ValueType)
     */
    addWantRecord(want: Want): void;

    /**
     * Adds a data record to this pasteboard, and adds its type to **mimeTypes** in
     * [PasteDataProperty]{@link pasteboard.PasteDataProperty}. The parameters cannot be empty. Otherwise, the operation
     * fails.
     *
     * @param { PasteDataRecord } record - Record to be added. After this parameter is set, the record is added to the
     *     pasteboard and the **mimeTypes** attribute list is updated.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    addRecord(record: PasteDataRecord): void;

    /**
     * Adds a plain text record to this pasteboard, and adds **MIMETYPE_TEXT_PLAIN** to **mimeTypes** in
     * [PasteDataProperty]{@link pasteboard.PasteDataProperty}. The parameters cannot be empty. Otherwise, the operation
     * fails.
     *
     * @param { string } text - Plain text.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.addRecord(mimeType: string, value: ValueType)
     */
    addTextRecord(text: string): void;

    /**
     * Adds a URI record to this pasteboard, and adds **MIMETYPE_TEXT_URI** to **mimeTypes** in
     * [PasteDataProperty]{@link pasteboard.PasteDataProperty}. The parameters cannot be empty. Otherwise, the operation
     * fails.
     *
     * @param { string } uri - URI content.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.addRecord(mimeType: string, value: ValueType)
     */
    addUriRecord(uri: string): void;

    /**
     * Adds a data record to this pasteboard, and adds its type to **mimeTypes** in
     * [PasteDataProperty]{@link pasteboard.PasteDataProperty}. The parameters cannot be empty. Otherwise, the operation
     * fails. Use this method to add additional data records to an existing **PasteData** object when the pasteboard
     * needs to contain multiple types of data, for example, plain text and HTML.
     *
     * @param { string } mimeType - MIME type of data. The value contains a maximum of 1024 bytes. If the value is out
     *     of range, error code 401 is returned.
     * @param { ValueType } value - Data content. After this parameter is set, the pasteboard data properties are
     *     updated, including the timestamp, data type, and pasteable scope.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900002 - The number of records exceeds the upper limit. [since 9 - 9]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    addRecord(mimeType: string, value: ValueType): void;

    /**
     * Obtains MIME types of [PasteDataProperty]{@link pasteboard.PasteDataProperty} on the pasteboard. If an exception
     * occurs during API invoking, **undefined** is returned.
     *
     * @returns { Array<string> } Non-repeating data types of the data records on the pasteboard.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getMimeTypes(): Array<string>;

    /**
     * Obtains the HTML content of the primary record.
     *
     * @returns { string } HTML content. If the **PasteData** object does not contain HTML content, **undefined** is
     *     returned by default.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getPrimaryHtml(): string;

    /**
     * Obtains the **Want** object of the primary record.
     *
     * @returns { Want } Want object. If the **PasteData** object does not contain the **Want** object, **undefined** is
     *     returned by default.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getPrimaryWant(): Want;

    /**
     * Obtains the data type of the primary record in this pasteboard.
     *
     * @returns { string } Data type of the primary record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getPrimaryMimeType(): string;

    /**
     * Obtains the plain text of the primary record.
     *
     * @returns { string } Plain text. If the **PasteData** object does not contain plain text, **undefined** is
     *     returned by default.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    getPrimaryText(): string;

    /**
     * Obtains the URI of the primary record.
     *
     * @returns { string } URI content. If the **PasteData** object does not contain the URI, **undefined** is returned
     *     by default.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getPrimaryUri(): string;

    /**
     * Obtains the pixel map of the primary record.
     *
     * @returns { image.PixelMap } Pixel map. If the **PasteData** object does not contain the pixel map, **undefined**
     *     is returned by default.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getPrimaryPixelMap(): image.PixelMap;

    /**
     * Obtains the property of the pasteboard data.
     *
     * @returns { PasteDataProperty } Property of the pasteboard data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getProperty(): PasteDataProperty;

    /**
     * Sets a [PasteDataProperty]{@link pasteboard.PasteDataProperty} object.
     *
     * @param { PasteDataProperty } property - Data properties. After this parameter is set, the pasteboard data
     *     properties updated, including the timestamp, data type, and pasteable scope.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setProperty(property: PasteDataProperty): void;

    /**
     * Obtains the record with a specific index from the pasteboard.
     *
     * @param { number } index - Index of the target record. The value ranges from 0 to the value of
     *     **getRecordCount()** minus 1. If the value is out of range, error code 401 is returned.
     * @returns { PasteDataRecord } Record with the specified index.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.getRecord(index: int)
     */
    getRecordAt(index: number): PasteDataRecord;

    /**
     * Obtains the record with a specific index from the pasteboard.
     *
     * @param { int } index - Index of the target record. The value ranges from 0 to the value of **getRecordCount()**
     *     minus 1. If the value is out of range, error code 12900001 is triggered.
     * @returns { PasteDataRecord } Record with the specified index.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900001 - The index is out of range.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getRecord(index: int): PasteDataRecord;

    /**
     * Obtains the number of records in the pasteboard.
     *
     * @returns { int } Number of records.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getRecordCount(): int;

    /**
     * Obtains the custom tag from the pasteboard. If no custom tag is set, empty string is returned.
     *
     * @returns { string } Custom tag. If no custom tag is set, empty string is returned.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]This API uses an asynchronous callback to ret
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getTag(): string;

    /**
     * Checks whether the pasteboard contains data of the specified type.
     *
     * @param { string } mimeType - Type of the data to query. The value can be a predefined type listed in
     *     [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants),
     *     including HTML, Want, plain text, URI, and pixel map, or a custom MIME type. The length cannot exceed 1024
     *     bytes.
     * @returns { boolean } Returns **true** if the specified data type exists; returns **false** otherwise.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.hasType(mimeType: string)
     */
    hasMimeType(mimeType: string): boolean;

    /**
     * Checks whether the pasteboard contains data of the specified MIME type.
     *
     * @param { string } mimeType - Type of the data to query. The value can be a predefined type listed in
     *     [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants),
     *     including HTML, Want, plain text, URI, and pixel map, or a custom MIME type. The length of the data type
     *     string cannot exceed 1024 bytes.
     * @returns { boolean } Returns **true** if the specified data type exists; returns **false** otherwise.
     * @throws { BusinessError } 401 - Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    hasType(mimeType: string): boolean;

    /**
     * Removes the record with a specific index from the pasteboard.
     *
     * @param { number } index - Specified index. The value ranges from 0 to the value of **getRecordCount()** minus 1.
     *     If the value is out of range, error code 401 is returned.
     * @returns { boolean } The value **true** is returned if the record with the specified index is successfully
     *     removed; the value **false** is returned if the record fails to be removed (for example, the specified index
     *     does not exist or is out of range).
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.removeRecord(index: int)
     */
    removeRecordAt(index: number): boolean;

    /**
     * Removes the record with a specific index from the pasteboard.
     *
     * @param { int } index - Specified index. The value ranges from 0 to the value of **getRecordCount()** minus 1. If
     *     the value is out of range, error code 12900001 is triggered.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900001 - The index is out of range.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    removeRecord(index: int): void;

    /**
     * Replaces the record with a specific index from the pasteboard.
     *
     * @param { number } index - Specified index. The value ranges from 0 to the value of **getRecordCount()** minus 1.
     *     If the value is out of range, error code 401 is returned.
     * @param { PasteDataRecord } record - New record.
     * @returns { boolean } The value **true** is returned if the record with the specified index is successfully
     *     replaced; the value **false** is returned if the record fails to be removed (for example, the specified index
     *     does not exist or is out of range, or the parameter is empty).
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.replaceRecord(index: int, record: PasteDataRecord)
     */
    replaceRecordAt(index: number, record: PasteDataRecord): boolean;

    /**
     * Replaces the record with a specific index from the pasteboard.
     *
     * @param { int } index - Specified index. The value ranges from 0 to the value of **getRecordCount()** minus 1. If
     *     the value is out of range, error code 12900001 is triggered.
     * @param { PasteDataRecord } record - New record. After this parameter is set, the original record with the
     *     specified index is replaced.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900001 - The index is out of range.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    replaceRecord(index: int, record: PasteDataRecord): void;

    /**
     * Notifies the pasteboard service to retain the cross-device channel before reading data from the pasteboard.
     * The cross-device link is used to connect to the peer device and transfer files from the peer device
     * to the local device. If this API is not called, the cross-device link will be automatically disconnected 30
     * seconds later. It is applicable to the cross-device pasting scenario. This API is used when you need to ensure
     * that the cross-device channel for pasteboard data transfer remains connected for subsequent reading of the
     * pasteboard data from the peer device.
     *
     * - This API must be used with [pasteComplete]{@link pasteboard.PasteData.pasteComplete} in pairs.
     * - Calling sequence: Call **pasteStart()** to notify the system to reserve the channel. After data processing is
     * complete, call **pasteComplete()** to notify the system that the processing is complete.
     * - If **pasteComplete()** is not called, the cross-device channel will not be correctly closed, affecting
     * subsequent cross-device pasteboard operations.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 12 dynamic
     * @since 23 static
     */
    pasteStart(): void;

    /**
     * Notifies the pasteboard service that the paste is complete, and resources such as the cross-device channel can be
     * released. This API should be called after **pasteStart()** is called and data processing is complete to prevent
     * resource waste. If this API is not called, the cross-device channel may be occupied for a long time, affecting
     * subsequent cross-device paste operations.
     *
     * For details about how to use **pasteComplete()** and other APIs, see the following:
     *
     * 1. Obtain the pasteboard data by calling **getData()**.
     * 2. Reserve the cross-device channel by calling **pasteStart()**.
     * 3. Use the pasteboard data.
     * 4. Release the channel by calling **pasteComplete()**.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 12 dynamic
     * @since 23 static
     */
    pasteComplete(): void;
  }

  /**
   * Enumerates the options used to resolve file copy conflicts.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum FileConflictOptions {
    /**
     * Overwrites the file with the same name in the destination path.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    OVERWRITE = 0,

    /**
     * Skips the file with the same name in the destination path. If **SKIP** is set, the copied data of the skipped
     * file is not pasted to the application.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    SKIP = 1
  }

  /**
   * Enumerates the progress indicator options. You can use the default progress indicator as required.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ProgressIndicator {
    /**
     * The default progress indicator is not used.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * The default progress indicator is used.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    DEFAULT = 1
  }

  /**
   * Defines the progress information. This information is reported only when
   * [ProgressIndicator]{@link pasteboard.ProgressIndicator} is set to **NONE**.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface ProgressInfo {
    /**
     * If the progress indicator provided by the system is not used, the system reports the progress percentage of the
     * copy-and-paste task.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progress: int;
  }

  /**
   * Defines a listener for progress data changes. If the default progress indicator is not used, you can set this API
   * to obtain the paste progress.
   *
   * @param { ProgressInfo } progress - Defines the progress information. This information is reported only when
   *     [ProgressIndicator]{@link pasteboard.ProgressIndicator} is set to **NONE**.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  type ProgressListener = (progress: ProgressInfo) => void;

  /**
   * Defines a function for canceling the progress indicator. The task can be canceled during pasting. The pasteboard
   * progress indicator is valid only when [ProgressIndicator]{@link pasteboard.ProgressIndicator} is set to **NONE**.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   * @class ProgressSignal
   */
  export class ProgressSignal {
    /**
     * Cancels an ongoing copy-and-paste task.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    cancel(): void;
  }

  /**
   * Obtains parameters when an application uses the file copy capability provided by the pasteboard, including the
   * destination path, file conflict options, and progress indicator types. Before calling this API, ensure that no
   * other copy or paste operation is in progress.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface GetDataParams {
    /**
     * URI of the destination directory for the file copied. If file processing is not supported, this parameter is not
     * required. If the application involves complex file processing policies or needs to distinguish file multipathing
     * storage, you are advised not to set this parameter but let the application copy files by itself. This parameter
     * is left empty by default.
     *
     * @default -
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    destUri?: string;

    /**
     * Options used to resolve file copy conflicts. Set this parameter to **OVERWRITE** when the latest file content
     * must be used in the destination URI. Set this parameter to **SKIP** when the original file in the destination URI
     * needs to be retained to prevent accidental overwriting. The default value is **OVERWRITE**.
     *
     * @default FileConflictOptions.OVERWRITE
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    fileConflictOptions?: FileConflictOptions;

    /**
     * Progress indicator options. You can use the default progress indicator as required. If this parameter is set to
     * **DEFAULT**, the default system progress indicator is used. If this parameter is set to **NONE**, the app
     * progress indicator is used. Only in the second case, the **progressListener** and **progressSignal** parameters
     * are valid.
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progressIndicator: ProgressIndicator;

    /**
     * Listener for progress data changes, which is used to obtain the pasting progress. This parameter is valid only
     * when **progressIndicator** is set to **NONE**. When **progressIndicator** is set to **DEFAULT**, this parameter
     * is invalid. By default, this parameter is left empty (the progress is not listened to).
     *
     * @default -
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progressListener?: ProgressListener;

    /**
     * Function for canceling the paste task. This parameter is valid only when
     * [ProgressIndicator]{@link pasteboard.ProgressIndicator} is set to **NONE**. This parameter is left empty by
     * default.
     *
     * @default -
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progressSignal?: ProgressSignal;
  }

  /**
   * Callback to be invoked when the pasteboard content changes.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @since 22 dynamic
   * @since 23 static
   */
  type UpdateCallback = () => void;

  /**
   * Provides **SystemPasteboard** APIs.
   *
   * Before calling any **SystemPasteboard** API, you must obtain a **SystemPasteboard** object using
   * [getSystemPasteboard]{@link pasteboard.getSystemPasteboard()}.
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface SystemPasteboard {
    /**
     * Subscribes to the content change event of the system pasteboard. After this method is called, the system
     * registers a listener in the pasteboard service. The callback is triggered when content is written, cleared, or
     * modified in the pasteboard. Multiple listeners can be registered. You need to call **off('update')** to
     * unsubscribe from the content change event at a proper time to release resources. This API is called when an app
     * needs to respond to pasteboard content changes in real time, for example, to automatically detect data in a
     * specific format or to implement intelligent paste suggestions.
     *
     * - Call [off('update')]{@link pasteboard.SystemPasteboard.off(type: 'update', callback?: () => void)} to
     * unsubscribe from the content change event of the system pasteboard when it is no longer needed.
     * - If the event is not unsubscribed from, the callback function will continuously listen for pasteboard changes,
     * which may cause memory leaks or the callback being triggered from multiple times.
     * - You are advised to unsubscribe from the event when the component or page is destroyed.
     *
     * @param { 'update' } type - Event type. The value **'update'** indicates changes in the pasteboard content. Other
     *     values are invalid.
     * @param { function } callback - Callback invoked when the pasteboard content changes.
     * @throws { BusinessError }  401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @since 7 dynamic
     */
    on(type: 'update', callback: () => void): void;

    /**
     * Add a callback invoked when pasteboard content changes.
     *
     * @param { UpdateCallback } callback - the callback to add.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 23 static
     */
    onUpdate(callback: UpdateCallback): void;

    /**
     * Subscribes to the content change events of the pasteboard on a remote device. This callback is triggered when the
     * pasteboard content on the remote device changes.
     *
     * - Call
     * [offRemoteUpdate](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#offremoteupdatecallback-updatecallback22)
     * to unsubscribe from the content change event of the pasteboard when it is no longer needed.
     * - If the event is not unsubscribed from, the callback function will continuously listen for remote changes, which
     * may cause memory leaks.
     * - You are advised to unsubscribe from the event when the component or page is destroyed.
     *
     * @param { UpdateCallback } callback - Callback invoked when the pasteboard content changes. The listener
     *     parameters are not specified. The callback is used to listen for cross-device pasteboard data update events,
     *     which is triggered when the pasteboard data on a remote device changes.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 22 dynamic
     * @since 23 static
     */
    onRemoteUpdate(callback: UpdateCallback): void;

    /**
     * Unsubscribes from the system pasteboard content change event.
     *
     * - This API is used to unsubscribe from the event subscribed to by **on('update')**.
     * - This API can be called only after an event has been subscribed to.
     * - If the **callback** parameter is not specified, listening will be disabled for all callbacks registered by the
     * current application.
     *
     * @param { 'update' } type - Event type. The value **'update'** indicates changes in the pasteboard content.
     * @param { function } [callback] - Callback invoked when the pasteboard content changes. If this parameter is not
     *     specified, listening will be disabled for all callbacks registered by the current application.
     * @throws { BusinessError }  401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @since 7 dynamic
     */
    off(type: 'update', callback?: () => void): void;

    /**
     * Unsubscribes from the content change events of the pasteboard on a remote device.
     *
     * @param { UpdateCallback } [callback] - allback to be invoked when the pasteboard content on the
     * remote device changes. If this parameter is not specified, remote listening will be disabled for all callbacks
     * registered by the current application.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 22 dynamic
     * @since 23 static
     */
    offRemoteUpdate(callback?: UpdateCallback): void;

    /**
     * Remove a callback invoked when pasteboard content changes.
     *
     * @param { UpdateCallback } [callback] - the callback to remove. If this parameter is not filled in, it indicates
     *     that all callbacks for this application will be cleared. Otherwise, it indicates that the specified callback
     *     will be cleared.
     *     <br>Default value: Clear all callbacks of this application.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 23 static
     */
    offUpdate(callback?: UpdateCallback): void;

    /**
     * Checks whether the data in the pasteboard is from another device. Transferring data across devices takes time. If
     * the pasteboard data is on a remote device, do not check for custom data types or read the pasteboard data on the
     * UI thread.
     *
     * @returns { boolean } Checks whether the data in the pasteboard is from another device. The value **true**
     *     indicates the data in the pasteboard is from another device; the value **false** indicates the data is from
     *     the local device.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    isRemoteData(): boolean;

    /**
     * Checks whether the pasteboard data is on a remote device. Transferring data across devices takes time. If the
     * pasteboard data is on a remote device, do not check for custom data types or read the pasteboard data on the UI
     * thread.
     *
     * @returns { boolean } Returns the check result. The value **true** indicates that the pasteboard data is on a
     *     remote device, and **false** indicates the opposite. Default value: **false**.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 24 dynamic&static
     */
    hasRemoteData(): boolean;
    /**
     * Obtains the name of the app that provides the pasteboard data. This method is applicable to scenarios such as
     * security audit, data tracking, and notifying users of the data source.
     *
     * @returns { string } Application name.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getDataSource(): string;

    /**
     * Checks whether the pasteboard contains data of the specified type.
     *
     * @param { string } mimeType - Data type, which is used to check whether specific data of this type exists in the
     *     pasteboard. The length of **mimeType** cannot exceed 1024 bytes. If the length exceeds 1024 bytes, error code
     *     401 is returned.
     * @returns { boolean } Checks whether the pasteboard contains data of the specified type. The value **true**
     *     indicates the pasteboard contains data of the specified type; the value **false** indicates the opposite.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    hasDataType(mimeType: string): boolean;

    /**
     * Clears the system pasteboard. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.clearData(callback: AsyncCallback<void>)
     */
    clear(callback: AsyncCallback<void>): void;

    /**
     * Clears the system pasteboard. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.clearData()
     */
    clear(): Promise<void>;

    /**
     * Clears the system pasteboard. This API uses an asynchronous callback to return the result. After this API is
     * called, the system deletes all data from the pasteboard and triggers the registered listener callback
     * **'update'**. After the pasteboard is cleared, it will contain no data, and **false** will be returned for
     * **hasData**. This API can be used to clear the pasteboard asynchronously without blocking the main thread, such
     * as the interaction process that requires the UI response. Unlike the synchronous API
     * [clearDataSync]{@link pasteboard.SystemPasteboard.clearDataSync}, this API does not block the UI thread and is
     * more suitable for UI interactions.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    clearData(callback: AsyncCallback<void>): void;

    /**
     * Clears the system pasteboard. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    clearData(): Promise<void>;

    /**
     * Clears data in the system pasteboard. This API returns the result synchronously. This API is used to clear the
     * pasteboard data synchronously in a key service process or confirm the clearing result immediately.
     *
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    clearDataSync(): void;

    /**
     * Obtains a **PasteData** object from the pasteboard. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<PasteData> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the system pasteboard data. Otherwise, **err** is an
     *     error object.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.getData(callback: AsyncCallback<PasteData>)
     */
    getPasteData(callback: AsyncCallback<PasteData>): void;

    /**
     * Obtains a **PasteData** object from the pasteboard. This API uses a promise to return the result.
     *
     * @returns { Promise<PasteData> } Promise used to return the system pasteboard data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.getData()
     */
    getPasteData(): Promise<PasteData>;

    /**
     * Obtains a **PasteData** object from the pasteboard. This API uses an asynchronous callback to return the result.
     * After this API is called, the system reads the current content from the pasteboard service and
     * returns a **PasteData** object using a callback. After the data is read successfully,
     * the app can obtain the specific data content (such as text, HTML, and URI) using the **PasteData** object.
     * This API can be used to read data from the pasteboard asynchronously, such as when the UI
     * response is required or the main thread should not be blocked. Compared with
     * [getDataSync]{@link pasteboard.SystemPasteboard.getDataSync}, **getData** does not block the UI thread and is
     * suitable for processing a large amount of data or remote data.
     *
     * To use the custom control to access the pasteboard content, you must
     * [request the permission to access the pasteboard](docroot://basic-services/pasteboard/get-pastedata-permission-guidelines.md).
     * Those using [PasteButton](docroot://security/AccessToken/pastebutton.md) can access the pasteboard content
     * without permission requests.
     *
     * @permission ohos.permission.READ_PASTEBOARD [since 12]
     * @param { AsyncCallback<PasteData> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the system pasteboard data. Otherwise, **err** is an
     *     error object.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API. [since 12]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getData(callback: AsyncCallback<PasteData>): void;

    /**
     * Obtains data from the system pasteboard and encapsulates the data into a **PasteData** object. This API uses a
     * promise to return the result. This API can be used to read data from the pasteboard asynchronously, such as when
     * the UI response is required or the main thread should not be blocked.
     *
     * To use the custom control to access the pasteboard content, you must
     * [request the permission to access the pasteboard](docroot://basic-services/pasteboard/get-pastedata-permission-guidelines.md).
     * Those using [PasteButton](docroot://security/AccessToken/pastebutton.md) can access the pasteboard content
     * without permission requests.
     *
     * @permission ohos.permission.READ_PASTEBOARD [since 12]
     * @returns { Promise<PasteData> } Promise used to return the system pasteboard data.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API. [since 12]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getData(): Promise<PasteData>;

    /**
     * Reads data in the system pasteboard. This API returns the result synchronously. This API is used to obtain
     * pasteboard data synchronously in key service processes or process pasteboard data immediately. Do not call this
     * API on the UI thread to prevent blocking the UI. Use the asynchronous API
     * [getData]{@link pasteboard.SystemPasteboard.getData(callback: AsyncCallback<PasteData>)} to process a large
     * amount of data or remote data.
     *
     * To use the custom control to access the pasteboard content, you must
     * [request the permission to access the pasteboard](docroot://basic-services/pasteboard/get-pastedata-permission-guidelines.md).
     * Those using [PasteButton](docroot://security/AccessToken/pastebutton.md) can access the pasteboard content
     * without permission requests.
     *
     * @permission ohos.permission.READ_PASTEBOARD [since 12]
     * @returns { PasteData } Data in the system pasteboard.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API. [since 12]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getDataSync(): PasteData;

    /**
     * Checks whether the system pasteboard contains data. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. Returns **true** if the system
     *     pasteboard contains data; returns **false** otherwise.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.hasData(callback: AsyncCallback<boolean>)
     */
    hasPasteData(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether the system pasteboard contains data. This API uses a promise to return the result.
     *
     * @returns { Promise<boolean> } Callback used to return the result. Returns **true** if the system pasteboard
     *     contains data; returns **false** otherwise.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.hasData()
     */
    hasPasteData(): Promise<boolean>;

    /**
     * Checks whether the system pasteboard contains data. This API uses an asynchronous callback to return the result.
     * This API can be used to check whether the pasteboard contains data asynchronously without blocking the main
     * thread, such as the interaction process that requires the UI response. Unlike the synchronous API
     * [hasDataSync]{@link pasteboard.SystemPasteboard.hasDataSync}, this API does not block the UI thread and is more
     * suitable for UI interactions.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result of whether pasteboard contains
     *     data. Callback used to return the result. Returns **true** if the system pasteboard contains data; returns
     *     **false** otherwise.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    hasData(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether the system pasteboard contains data. This API uses a promise to return the result.
     *
     * @returns { Promise<boolean> } Callback used to return the result. Returns **true** if the system pasteboard
     *     contains data; returns **false** otherwise.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    hasData(): Promise<boolean>;

    /**
     * Checks whether the system pasteboard contains data. This API returns the result synchronously.
     *
     * @returns { boolean } Callback used to return the result. Returns **true** if the system pasteboard contains data;
     *     returns **false** otherwise.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    hasDataSync(): boolean;

    /**
     * Writes a **PasteData** object to the pasteboard. This API uses an asynchronous callback to return the result.
     *
     * @param { PasteData } data - **PasteData** object.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Possible causes: 1.  Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.setData(data: PasteData, callback: AsyncCallback<void>)
     */
    setPasteData(data: PasteData, callback: AsyncCallback<void>): void;

    /**
     * Writes a **PasteData** object to the pasteboard. This API uses a promise to return the result.
     *
     * @param { PasteData } data - **PasteData** object.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.setData(data: PasteData)
     */
    setPasteData(data: PasteData): Promise<void>;

    /**
     * Writes a **PasteData** object to the pasteboard. This API uses an asynchronous callback to return the result.
     * After this API is called, the system writes the data of the **PasteData** object to the pasteboard. After the
     * data is written successfully, other apps can read the data from the pasteboard. The written data will replace the
     * existing data in the pasteboard. This API can be used to write data to the pasteboard asynchronously, such as
     * when the UI response is required or the main thread should not be blocked. Unlike
     * [setDataSync]{@link pasteboard.SystemPasteboard.setDataSync}, **setData** does not block the UI thread.
     *
     * @param { PasteData } data - **PasteData** object. After this parameter is set, the data is written to the system
     *     pasteboard for the app to read and paste.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setData(data: PasteData, callback: AsyncCallback<void>): void;

    /**
     * Writes a **PasteData** object to the pasteboard. This API uses a promise to return the result. This API can be
     * used to write data to the pasteboard asynchronously without blocking the main thread, such as the interaction
     * process that requires the UI response. Unlike the synchronous API
     * [setDataSync]{@link pasteboard.SystemPasteboard.setDataSync}, this API does not block the UI thread and is more
     * suitable for UI interactions.
     *
     * @param { PasteData } data - **PasteData** object. Before calling this API, ensure that no other copy or paste
     *     operation is in progress.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setData(data: PasteData): Promise<void>;

    /**
     * Writes data to the system pasteboard. This API returns the result synchronously. This API can be used to write
     * data to the pasteboard synchronously in key service processes or confirm the write result immediately.
     *
     * @param { PasteData } data - Data to be written to the pasteboard.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setDataSync(data: PasteData): void;

    /**
     * Obtains a **PasteData** object from the pasteboard. This API uses a promise to return the result. This API is
     * used for cross-app data exchange using
     * [UnifiedData]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.UnifiedData}. This API can be used to share
     * data with other apps that support **UnifiedData** or process complex data of multiple types. Compared with
     * [getData]{@link pasteboard.SystemPasteboard.getData(callback: AsyncCallback<PasteData>)}, **getUnifiedData**
     * provides more standard data formats.
     *
     * To use the custom control to access the pasteboard content, you must
     * [request the permission to access the pasteboard](docroot://basic-services/pasteboard/get-pastedata-permission-guidelines.md).
     * Those using [PasteButton](docroot://security/AccessToken/pastebutton.md) can access the pasteboard content
     * without permission requests.
     *
     * @permission ohos.permission.READ_PASTEBOARD
     * @returns { Promise<unifiedDataChannel.UnifiedData> } Promise used to return the system pasteboard data.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getUnifiedData(): Promise<unifiedDataChannel.UnifiedData>;

    /**
     * Reads data in the system pasteboard. This API returns the result synchronously. This API is used for cross-app
     * data exchange using **UnifiedData**. This API can be used to immediately obtain data from the pasteboard in key
     * service processes and share the data with other apps that support **UnifiedData**. The delay in obtaining data
     * from the pasteboard is affected by the data volume and network environment. Therefore, calling this API may take
     * a long time. You are advised to call this API in non-UI threads.
     *
     * To use the custom control to access the pasteboard content, you must
     * [request the permission to access the pasteboard](docroot://basic-services/pasteboard/get-pastedata-permission-guidelines.md).
     * Those using [PasteButton](docroot://security/AccessToken/pastebutton.md) can access the pasteboard content
     * without permission requests.
     *
     * @permission ohos.permission.READ_PASTEBOARD
     * @returns { unifiedDataChannel.UnifiedData } Data in the system pasteboard.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getUnifiedDataSync(): unifiedDataChannel.UnifiedData;

    /**
     * Writes a **PasteData** object to the pasteboard. This API uses a promise to return the result. This API can be
     * used to write data to the pasteboard asynchronously without blocking the main thread, such as the interaction
     * process that requires the UI response. Unlike the synchronous API
     * [setUnifiedDataSync]{@link pasteboard.SystemPasteboard.setUnifiedDataSync}, this API does not block the UI thread
     * and is more suitable for UI interactions.
     *
     * @param { unifiedDataChannel.UnifiedData } data - Data to be written to the pasteboard. Before calling this API,
     *     ensure that no other copy or paste operation is in progress.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setUnifiedData(data: unifiedDataChannel.UnifiedData): Promise<void>;

    /**
     * Writes data to the system pasteboard. This API returns the result synchronously. This API is used for cross-app
     * data exchange using **UnifiedData**. This API can be used to immediately write data to the pasteboard in key
     * service processes and share the data with other apps that support
     * [UnifiedData]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.UnifiedData}.
     *
     * @param { unifiedDataChannel.UnifiedData } data - Data to be written to the pasteboard. Cross-app data exchange is
     *     supported. Other apps can read the data using **unifiedDataChannel**.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setUnifiedDataSync(data: unifiedDataChannel.UnifiedData): void;

    /**
     * Sets pasteable range of pasteboard data for applications. This API can be used to globally restrict the pasteable
     * scope of pasteboard data generated by the app. For example, a financial app needs to protect sensitive user
     * information.
     *
     * - This API is used together with **removeAppShareOptions()**.
     * - To delete the configured sharing scope, call **removeAppShareOptions()**.
     *
     * @permission ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION [since 14]
     * @param { ShareOption } shareOptions - Pasteable range. Only the enumeration values ​​defined in
     * **pasteboard.ShareOption** are allowed. If other values are passed, error code 401 is returned.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12 - 13]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900006 - Settings already exist.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API. [since 14]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @systemapi [since 12 - 13]
     * @publicapi [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    setAppShareOptions(shareOptions: ShareOption): void;

    /**
     * Deletes the global pasteable range of the application. This API can be used to delete the previously set
     * pasteable scope and restore the default pasteable scope for pasteboard data.
     *
     * - This API must be used together with **setAppShareOptions()**.
     * - The sharing scope set by **setAppShareOptions()** is deleted.
     * - This API can be called only after the sharing scope has been set.
     *
     * @permission ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION [since 14]
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12 - 13]
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API. [since 14]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @systemapi [since 12 - 13]
     * @publicapi [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    removeAppShareOptions(): void;

    /**
     * Detects [patterns](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#pattern13) on the local
     * pasteboard. This API uses a promise to return the result. The local pasteboard data refers to the pasteboard data
     * on the current device, excluding the pasteboard data transferred across devices. This API can be used to check
     * whether the pasteboard contains specific types of data (such as URLs, email addresses, and phone numbers) before
     * pasting, so that the app can perform corresponding processing or provide intelligent prompts.
     *
     * @param { Array<Pattern> } patterns - Patterns to be detected in the pasteboard, which is used to check whether
     *     the pasteboard data complies with a specific format. The options are **URL**, **NUMBER**, and
     *     **EMAIL_ADDRESS**. The number of elements in the array is not limited, and the element value must be an
     *     enumerated value of **Pattern**. If an invalid value is passed, error code 401 is returned.
     * @returns { Promise<Array<Pattern>> } Promise used to return the detected pattern.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 13 dynamic
     * @since 23 static
     */
    detectPatterns(patterns: Array<Pattern>): Promise<Array<Pattern>>;

    /**
     * Obtains the MIME type from the pasteboard. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<string>> } Promise used to return the read MIME type.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getMimeTypes(): Promise<Array<string>>;

    /**
     * Obtains the number of pasteboard content changes.
     *
     * Returns the number of pasteboard content changes if this API is called successfully; returns **0** otherwise.
     *
     * Even though the pasteboard data expires, or the data becomes empty because of the called
     * [clearDataSync]{@link pasteboard.SystemPasteboard.clearDataSync} API, the number of data changes remains.
     *
     * When the system is restarted, or the pasteboard service is restarted due to an exception, the number of
     * pasteboard data changes counts from 0. If the same data is copied repeatedly, multiple changes will be recorded.
     *
     * @returns { long } The number of pasteboard content changes obtained.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getChangeCount(): long;

    /**
     * Obtains the pasteboard data and progress. This API uses a promise to return the result. Folders cannot be copied.
     * For the copy operation of large files, you are advised to register a listener to track the copy progress and
     * prevent long waiting time on the UI thread. You are also advised to set a proper destination path to ensure
     * sufficient storage space. This method is applicable to the large file pasting scenario. In this scenario, you can
     * use this callback to display the copy progress or monitor the copy process to cancel the operation when
     * necessary.
     *
     * To use the custom control to access the pasteboard content, you must
     * [request the permission to access the pasteboard](docroot://basic-services/pasteboard/get-pastedata-permission-guidelines.md).
     * Those using [PasteButton](docroot://security/AccessToken/pastebutton.md) can access the pasteboard content
     * without permission requests.
     *
     * @permission ohos.permission.READ_PASTEBOARD
     * @param { GetDataParams } params - Parameters required when an application uses the file copy capability provided
     *     by the pasteboard, including the destination path, file conflict options, and progress indicator types.
     * @returns { Promise<PasteData> } Promise used to return the system pasteboard data.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 12900003 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 12900007 - Invalid destUri or file system error.
     * @throws { BusinessError } 12900008 - Failed to start progress.
     * @throws { BusinessError } 12900009 - Progress exits abnormally.
     * @throws { BusinessError } 12900010 - System error occurred during paste execution.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getDataWithProgress(params: GetDataParams): Promise<PasteData>;
  }
}

export default pasteboard;