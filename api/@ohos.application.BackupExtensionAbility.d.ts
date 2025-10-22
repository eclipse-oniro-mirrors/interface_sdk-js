/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit CoreFileKit
 */

/*** if arkts dynamic */
import type BackupExtensionContext from './@ohos.file.BackupExtensionContext';
/*** endif */

/**
 * Describe bundle version
 *
 * @interface BundleVersion
 * @syscap SystemCapability.FileManagement.StorageService.Backup
 * @StageModelOnly
 * @since 10 dynamic
 * @since 20 static
 */
export interface BundleVersion {
  /**
   * Indicates bundle's version code.
   *
   * @type { number }
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 10 dynamic
   * @since 20 static
   */
  code: number;

  /**
   * Indicates bundle's version name.
   *
   * @type { string }
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 10 dynamic
   * @since 20 static
   */
  name: string;
}

/**
 * Class to be override for backup extension ability.
 *
 * @syscap SystemCapability.FileManagement.StorageService.Backup
 * @StageModelOnly
 * @since 10 dynamic
 * @since 20 static
 */
declare class BackupExtensionAbility {
  /**
   * Indicates backup extension ability context.
   *
   * @type { ExtensionContext }
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 11
   */
    /**
   * Indicates backup extension ability context.
   *
   * @type { BackupExtensionContext }
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 12 dynamic
   */
  context: BackupExtensionContext;

  /**
   * Callback to be called when the backup procedure is started.
   * Developer could override this method to build files to be backup.
   *
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 10 dynamic
   * @since 20 static
   */
  onBackup(): void;

  /**
   * Callback to be called when the backup procedure is started.
   * Developer could override this method to restore.
   *
   * @param { string } backupInfo BackupInfo to be backup, the param is a JSON string,
   * it is an array, each array element includes detail and type now.
   * @returns { string | Promise<string> } Return backup result, support promise, the result is a JSON string,
   * it includes type, errorCode and errorInfo now.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 12 dynamic
   */
  onBackupEx(backupInfo: string): string | Promise<string>;

  /**
   * Callback to be called when the restore procedure is started.
   * Developer could override this method to restore from copies for various bundle versions.
   *
   * @param { BundleVersion } bundleVersion Bundle version to be restore.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 10 dynamic
   * @since 20 static
   */
  onRestore(bundleVersion: BundleVersion): void;

  /**
   * Callback to be called when the restore procedure is started.
   * Developer could override this method to restore.
   *
   * @param { BundleVersion } bundleVersion Bundle version to be restore.
   * @param { string } restoreInfo RestoreInfo to be restore, the param is a JSON string,
   * it is an array, each array element includes detail and type now.
   * @returns { string | Promise<string> } Return restore result, support promise. the result is a JSON string,
   * it includes type, errorCode and errorInfo now.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 12 dynamic
   */
  onRestoreEx(bundleVersion: BundleVersion, restoreInfo: string): string | Promise<string>;

  /**
    * Callback to be called when getting application backupInfo.
    * Developer could override this method to provide the backupInfo.
    *
    * @returns { string } Return the backup application's info.
    * @syscap SystemCapability.FileManagement.StorageService.Backup
    * @systemapi
    * @StageModelOnly
    * @since 12 dynamic
    */
  getBackupInfo(): string;

  /**
    * Callback to be called when getting backup/restore process info.
    * Developer could override this method to provide the backup/restore process info.
    * 
    * @returns { string } Return the backup/restore process info.
    * @syscap SystemCapability.FileManagement.StorageService.Backup
    * @StageModelOnly
    * @since 12 dynamic
    */
  onProcess(): string;
  
  /**
   * Callback to be called before extension ability exits.
   * Developer could override this method to clean abnormal data.
   *
   * @param { number } scenario - The value 1 indicates backup and the value 2 indicates restoration.
   * @returns { Promise<void> } the promise returned by the function
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 20 dynamic
   */
  onRelease(scenario: number): Promise<void>;

  /**
   * Callback to be called when getting application backup compatibilityInfo.
   * Developer could override this method to provide the backup compatibilityInfo.
   *
   * @param { string } extInfo Information about the capabilities of the peer.
   * @returns { Promise<string> } Return backup compatibilityInfo, support promise.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @StageModelOnly
   * @since 20 dynamic
   */
  getBackupCompatibilityInfo(extInfo: string) : Promise<string>;

  /**
   * Callback to be called when getting application restore compatibilityInfo.
   * Developer could override this method to provide the restore compatibilityInfo.
   *
   * @param { string } extInfo Information about the capabilities of the peer.
   * @returns { Promise<string> } Return restore compatibilityInfo, support promise.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @StageModelOnly
   * @since 20 dynamic
   */
  getRestoreCompatibilityInfo(extInfo: string) : Promise<string>;
}

export default BackupExtensionAbility;
