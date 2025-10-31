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
 * @file
 * @kit CoreFileKit
 */

/**
 * Provides cloud disk manager APIs.
 *
 * @namespace cloudDiskManager
 * @syscap SystemCapability.FileManagement.CloudDiskManager
 * @systemapi
 * @since 21 dynamic
 */
declare namespace cloudDiskManager {
  /**
   * Enumerates the syncFolder state of the cloud disk.
   *
   * @enum {number}
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   */
  enum SyncFolderState {
    /**
     * Indicates the inactive syncFolder state.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     */
    INACTIVE = 0,

    /**
     * Indicates the active syncFolder state.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     */
    ACTIVE = 1
  }

  /**
   * Defines the syncFolder of the cloudDisk
   *
   * @typedef SyncFolder
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   */
  interface SyncFolder {
    /**
     * The path of the syncFolder.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     */
    path: string;

    /**
     * The bundleName of the syncFolder.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     */
    bundleName: string;

    /**
     * The state of the syncFolder.
     *
     * @type { SyncFolderState }
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     */
    state: SyncFolderState;

    /**
     * The displayNameResId of the syncFolder.
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     */
    displayNameResId?: number;

    /**
     * The alias of the syncFolder supports user customization.
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     */
    customAlias?: string;
  }

  /**
   * Provides the capability to access all cloud disk syncFolders.
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   */
  class SyncFolderAccessor {
    /**
     * A constructor used to create a SyncFolderAccessor object.
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @throws { BusinessError } 201 - Permission verification failed,
     * @throws { BusinessError } 202 - Permission verification failed.
     *    application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     */
    constructor();

    /**
     * Get all syncFolders for all bundles.
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @returns { Promise<Array<SyncFolder>> } Returns the syncFolder list for all bundles.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - Permission verification failed,
     *    application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Device not supported.
     * @throws { BusinessError } 34400003 - IPC communication failed.
     * @throws { BusinessError } 34400014 - Temporary failure, Retry is recommended (e.g., network issues).
     * @throws { BusinessError } 34400015 - Cloud disk not allowed on this device.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     */
    getAllSyncFolders(): Promise<Array<SyncFolder>>;
  }
}

export default cloudDiskManager;
