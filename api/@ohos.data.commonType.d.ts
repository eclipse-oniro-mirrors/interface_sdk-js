/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @file Common Data Types
 * @kit ArkData
 */

/**
 * The commonType module defines common data types in data management. It provides basic data types such
 * as asset status enum, asset information, and key-value pair storage to support unified data
 * representation and transfer in distributed data management scenarios.
 *
 * @syscap SystemCapability.DistributedDataManager.CommonType
 * @crossplatform
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace commonType {
  /**
   * Enumerates the asset statuses. Use the enum name rather than the enum value.
   *
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  enum AssetStatus {
    /**
     * The asset is in normal status.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_NORMAL,

    /**
     * The asset is to be inserted to the cloud.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_INSERT,

    /**
     * The asset is to be updated to the cloud.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_UPDATE,

    /**
     * The asset is to be deleted from the cloud.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_DELETE,

    /**
     * The asset is in abnormal status.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_ABNORMAL,

    /**
     * The asset is being downloaded to a local device.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_DOWNLOADING
  }

  /**
   * Represents asset (such as a file, image, or video) information. For details, see the sample code in
   * [Using Distributed Data Objects in Cross-Device Migration]
   * (../../database/data-sync-of-distributed-data-object.md#using-distributed-data-objects-in-cross-device-migration).
   *
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  interface Asset {
    /**
     * Asset name.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Asset URI, which is an absolute path in the system.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Application sandbox path of the asset.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    path: string;

    /**
     * Time when the asset was created.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    createTime: string;

    /**
     * Time when the asset was last modified.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    modifyTime: string;

    /**
     * Size of the space occupied by the asset, in bytes. The value is a non-negative integer.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    size: string;

    /**
     * Asset status. The default value is **ASSET_NORMAL**.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    status?: AssetStatus;
  }

  /**
   * Represents an array of Assets.
   *
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  type Assets = Array<Asset>;

  /**
   * Enumerates the data field types, which are determined by API parameter functions.
   *
   * @unionmember { null } The value is null.
   * @unionmember { long } The value is a 64-bit integer (int64_t).
   * @unionmember { double } The value is a floating-point number (float).
   * @unionmember { string } The value is a string.
   * @unionmember { boolean } The value is true or false.
   * @unionmember { Uint8Array } The value is a Uint8 array.
   * @unionmember { Asset } The value is an Asset.
   * @unionmember { Assets } The value is an array of Assets.
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  type ValueType = null | long | double | string | boolean | Uint8Array | Asset | Assets;

  /**
   * Defines the types of the key and value in a KV pair. This type is not concurrency-safe. If multiple
   * threads in an application operate instances derived from this class at the same time, use a lock for
   * protection.
   *
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  type ValuesBucket = Record<string, ValueType>;
}

export default commonType;
