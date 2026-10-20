/*
 * Copyright (C) 2022-2026 Huawei Device Co., Ltd.
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
 * @file 卷管理
 * @kit CoreFileKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';

/**
 * 该模块提供卷设备、磁盘设备查询和管理的相关功能：包括查询卷设备信息，对卷设备的挂载卸载、对磁盘设备分区以及卷设备的格式化等功能。
 *
 * @syscap SystemCapability.FileManagement.StorageService.Volume
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace volumeManager {
  /**
   * 获取所有卷。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface Volume {
    /**
     * 卷设备ID的格式为vol-{主设备号}-{次设备号}，主设备号用来区分不同种类的设备，
     * 次设备号用来区分同一类型的多个设备，卷设备ID会随着插卡顺序不同而变化。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * 卷设备uuid是卷设备的通用唯一识别码，不会随着插卡顺序变化而变化，但是卷设备的格式化会改变卷设备的uuid。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    uuid: string;

    /**
     * 卷设备所属的磁盘ID，一个磁盘可以有一个或者多个卷设备。磁盘设备ID的格式为disk-{主设备号}-{次设备号}，与卷设备ID相似。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    diskId: string;

    /**
     * 卷设备描述。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    description: string;

    /**
     * 表示卷设备是否可移除，当前仅支持可移除存储设备。true为可移除；false为不可移除。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    removable: boolean;

    /**
     * 卷设备状态标识：
     * 
     * 0：卸载状态 UNMOUNTED。
     * 
     * 1：检查状态 CHECKING。
     * 
     * 2：挂载状态 MOUNTED。
     * 
     * 3：正在弹出状态 EJECTING。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    state: int;

    /**
     * 卷设备的挂载地址，一般为/mnt/data/external/{uuid}。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    path: string;

    /**
     * 文件系统的类型，常见有ext2、vfat、NTFS等。
     * 
     * **说明**：从API version 24开始，支持ISO9660、UDF。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    fsType: string;

    /**
     * 分区号。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    partitionNum?: int;

    /**
     * 卷设备的扩展信息。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    extraInfo?: string;
  }

  /**
   * 磁盘类型。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum DiskType {
    /**
     * SD卡类型。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SD_CARD = 1,

    /**
     * U盘类型。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USB_FLASH = 2,

    /**
     * 光盘类型。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CD_DVD_BD = 3,

    /**
     * SSD数据盘类型。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DATA_DISK_SSD = 4,

    /**
     * HDD数据盘类型。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DATA_DISK_HDD = 5,

    /**
     * 行车记录仪U盘类型。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DVR_USB =  6,

    /**
     * 未知磁盘类型。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN_DISK_TYPE = 255
  }

  /**
   * 磁盘信息。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface Disk {
    /**
     * 磁盘ID，格式为disk-{主设备号}-{次设备号}。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    diskId: string;

    /**
     * 磁盘总大小。
     * <br>单位：Byte。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sizeBytes: long;

    /**
     * 磁盘类型。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    diskType: DiskType;

    /**
     * 磁盘是否可移除。true表示磁盘可移除。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    removable: boolean;

    /**
     * 磁盘的卷设备列表。一个磁盘可能包含多个卷设备。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    volumeIds: Array<string>;

    /**
     * 磁盘信息扩展字段。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    extraInfo: string;
  }

  /**
   * 分区信息。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface PartitionInfo {
    /**
     * 分区号。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    partitionNum: int;

    /**
     * 磁盘ID。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    diskId: string;

    /**
     * 分区的起始扇区。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    startSector: long;

    /**
     * 分区的结束扇区。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    endSector: long;

    /**
     * 分区总大小。
     * <br>单位：Byte。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sizeBytes: long;

    /**
     * 文件系统类型，常见有ext4、vfat、exfat、NTFS、f2fs和hmfs等。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fsType: string;
  }

  /**
   * 分区表信息。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface PartitionTableInfo {
    /**
     * 磁盘ID。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    diskId: string;

    /**
     * 分区表类型，如'gpt'或'mbr'。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    tableType: string;

    /**
     * 分区数量。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    partitionCount: int;

    /**
     * 总扇区数。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    totalSector: long;

    /**
     * 扇区大小（单位：Byte）。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sectorSize: int;

    /**
     * 对齐扇区。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    alignSector: int;

    /**
     * 分区信息数组。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    partitions: Array<PartitionInfo>;
  }

  /**
   * 分区创建参数。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface PartitionParams {
    /**
     * 分区号。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    partitionNum: int;

    /**
     * 分区的起始扇区。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    startSector: long;

    /**
     * 分区的结束扇区。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    endSector: long;

    /**
     * 文件系统代码，常见有ext4、vfat、exfat、NTFS、f2fs和hmfs等。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    typeCode: string;
  }

  /**
   * 分区格式化的参数。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface FormatParams {
    /**
     * 文件系统类型，常见有ext4、vfat和exfat等。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fsType: string;

    /**
     * 是否进行快速格式化，默认值为true。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    quickFormat?: boolean;

    /**
     * 格式化后的卷设备名称。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    volumeName?: string;
  }

  /**
   * 获取当前外置存储中所有卷设备信息，使用callback异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { AsyncCallback<Array<Volume>> } callback - 获取当前所有可获得的卷设备信息之后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
   *     parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllVolumes(callback: AsyncCallback<Array<Volume>>): void;

  /**
   * 获取当前外置存储中所有卷设备信息，使用Promise异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<Array<Volume>> } Promise对象，返回当前所有可获得的卷设备信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
   *     parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllVolumes(): Promise<Array<Volume>>;

  /**
   * 挂载指定卷设备，使用callback异步回调。当前仅支持vfat、exfat以及ntfs三种文件系统的卷设备挂载。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @param { AsyncCallback<void> } callback - 挂载指定卷设备之后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600003 - Failed to mount.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function mount(volumeId: string, callback: AsyncCallback<void>): void;

  /**
   * 挂载指定卷设备，使用Promise异步回调。当前仅支持vfat、exfat以及ntfs三种文件系统的卷设备挂载。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600003 - Failed to mount.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function mount(volumeId: string): Promise<void>;

  /**
   * 卸载指定卷设备，使用callback异步回调。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @param { AsyncCallback<void> } callback - 卸载指定卷设备之后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600004 - Failed to unmount.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function unmount(volumeId: string, callback: AsyncCallback<void>): void;

  /**
   * 卸载指定卷设备，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600004 - Failed to unmount.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function unmount(volumeId: string): Promise<void>;

  /**
   * 通过卷设备uuid获得指定卷设备信息，使用callback异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } uuid - 卷设备uuid。
   * @param { AsyncCallback<Volume> } callback - 获取卷设备信息之后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getVolumeByUuid(uuid: string, callback: AsyncCallback<Volume>): void;

  /**
   * 通过卷设备uuid获得指定卷设备信息，使用Promise异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } uuid - 卷设备uuid。
   * @returns { Promise<Volume> } Promise对象，返回当前uuid的卷设备信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getVolumeByUuid(uuid: string): Promise<Volume>;

  /**
   * 通过指定卷设备id获得卷设备信息，使用callback异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @param { AsyncCallback<Volume> } callback - 获取卷设备信息之后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getVolumeById(volumeId: string, callback: AsyncCallback<Volume>): void;

  /**
   * 通过卷设备id获得指定卷设备信息，使用Promise异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @returns { Promise<Volume> } Promise对象，返回当前id的卷设备信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getVolumeById(volumeId: string): Promise<Volume>;

  /**
   * 修改指定卷设备描述，使用callback异步回调。当前仅支持修改ntfs和exfat两种文件系统类型的设备描述，
   * 只有处于卸载状态的卷设备可以修改设备描述。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } uuid - 卷设备uuid。
   * @param { string } description - 卷设备描述。
   * @param { AsyncCallback<void> } callback - 设置卷描述之后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setVolumeDescription(uuid: string, description: string, callback: AsyncCallback<void>): void;

  /**
   * 修改指定卷设备描述，使用Promise异步回调。当前仅支持修改ntfs和exfat两种文件系统类型的设备描述，
   * 只有处于卸载状态的卷设备可以修改设备描述。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } uuid - 卷设备uuid。
   * @param { string } description - 卷设备描述。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setVolumeDescription(uuid: string, description: string): Promise<void>;

  /**
   * 对指定卷设备进行格式化，使用callback异步回调。当前仅支持vfat和exfat两种文件系统类型的格式化，只有处于卸载状态的
   * 卷设备可以进行格式化，格式化后卷设备的uuid、挂载路径和卷设备描述均会发生变化。
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @param { string } fsType - 文件系统类型(vfat或者exfat)。
   * @param { AsyncCallback<void> } callback - 对指定卷设备格式化后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function format(volumeId: string, fsType: string, callback: AsyncCallback<void>): void;

  /**
   * 对指定卷设备进行格式化，使用Promise异步回调。当前仅支持vfat和exfat两种文件系统类型的格式化，只有处于卸载状态的
   * 卷设备可以进行格式化，格式化后卷设备的uuid、挂载路径和卷设备描述均会发生变化。
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @param { string } fsType - 文件系统类型（vfat或者exfat）。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function format(volumeId: string, fsType: string): Promise<void>;

  /**
   * 对磁盘进行分区，使用callback异步回调。当前仅支持将磁盘设备重新分区为一个分区，系统是支持读取多分区的磁盘设备。
   * 不支持对光盘进行分区。
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - 卷设备所属的磁盘id。
   * @param { int } type - 分区类型。
   * @param { AsyncCallback<void> } callback - 对磁盘设备进行分区。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function partition(diskId: string, type: int, callback: AsyncCallback<void>): void;

  /**
   * 对磁盘设备进行分区，使用Promise异步回调。当前仅支持将磁盘设备重新分区为一个分区，系统是支持读取多分区的磁盘设备。
   * 不支持对光盘进行分区。
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - 卷设备所属的磁盘设备id。
   * @param { int } type - 分区类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function partition(diskId: string, type: int): Promise<void>;

  /**
   * 擦除卷设备，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600026 - Erase operation failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function erase(volumeId: string): Promise<void>;

  /**
   * 弹出卷设备，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } diskId - 磁盘id。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600027 - Eject operation failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function eject(diskId: string): Promise<void>;

  /**
   * 从卷设备创建ISO镜像文件，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @param { string } filePath - ISO镜像文件的路径。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600024 - Empty disc.
   * @throws { BusinessError } 13600025 - Failed to write the ISO file.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createIsoImage(volumeId: string, filePath: string): Promise<void>;

  /**
   * 向卷设备刻录数据，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @param { Want } want - 目标能力的Want信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600028 - Burn operation failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function burn(volumeId: string, want: Want): Promise<void>;

  /**
   * 获取卷设备的操作进度，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @returns { Promise<int> } Promise对象，返回操作进度。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getOpProcess(volumeId: string): Promise<int>;

  /**
   * 查询所有磁盘信息，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @returns { Promise<Array<Disk>> } Promise对象，返回所有磁盘信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getAllDisks(): Promise<Array<Disk>>;

  /**
   * 根据磁盘ID查询磁盘信息，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } diskId - 磁盘id。
   * @returns { Promise<Disk> } Promise对象，返回当前磁盘ID对应的磁盘信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getDiskById(diskId: string): Promise<Disk>;

  /**
   * 根据磁盘ID获取分区表信息，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - 磁盘ID。
   * @returns { Promise<PartitionTableInfo> } Promise对象，返回当前磁盘ID对应的分区表信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600021 - Get partition table failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getPartitionTable(diskId: string): Promise<PartitionTableInfo>;

  /**
   * 在磁盘上创建分区，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - 磁盘ID。
   * @param { PartitionParams } params - 分区创建参数。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600022 - Create partition failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createPartition(diskId: string, params: PartitionParams): Promise<void>;

  /**
   * 删除磁盘上的分区，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - 磁盘ID。
   * @param { number } partitionNum - 分区号。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600023 - Delete partition failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function deletePartition(diskId: string, partitionNum: int): Promise<void>;

  /**
   * 格式化磁盘上的分区，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - 磁盘ID。
   * @param { number } partitionNum - 分区号。
   * @param { FormatParams } params - 格式化参数。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600032 - Format partition failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function formatPartition(diskId: string, partitionNum: int, params: FormatParams): Promise<void>;

  /**
   * 查询指定卷设备是否正在使用，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumePath - 卷设备路径。
   * @returns { Promise<boolean> } Promise对象，返回指定卷设备是否正在使用。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600033 - Failed to query whether the specified volume is currently in use.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isVolumeInUse(volumePath: string): Promise<boolean>;

  /**
   * 外置磁盘信息。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  export interface ExternalDiskInfo {
    /**
     * 磁盘ID，格式为disk-{主设备号}-{次设备号}，如**disk-8-0**。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    diskId: string;

    /**
     * 磁盘设备类型。
     * **1**：SD卡。
     * **2**：U盘。
     * **3**：CD/DVD/BD。
     * 取值应为整数。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    diskType: int;

    /**
     * 磁盘上的卷设备ID列表。一个磁盘可以包含多个卷设备，如**["vol-8-1", "vol-8-2"]**。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    volumeIds: Array<string>;

    /**
     * USB设备的厂商ID，由USB-IF分配，用于标识设备制造商。
     * 取值应为整数。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    vendorId: int;

    /**
     * USB设备的产品ID，由制造商分配，用于标识特定产品型号。
     * 取值应为整数。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    productId: int;
  }

  /**
   * 外置卷设备信息。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  export interface ExternalVolumeInfo {
    /**
     * 卷设备ID，格式为vol-{主设备号}-{次设备号}，如**vol-8-1**。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    volumeId: string;

    /**
     * 卷设备uuid是卷设备的通用唯一识别码，不会随着插卡顺序变化而变化，但是卷设备的格式化会改变卷设备的uuid，如**3C16-F61F**。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    uuid: string;

    /**
     * 卷设备所属的磁盘ID，一个磁盘可以有一个或者多个卷设备。磁盘设备ID的格式为disk-{主设备号}-{次设备号}，如**disk-8-0**。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    diskId: string;

    /**
     * 卷设备描述。格式化卷设备会改变其描述，如**"MyUSB"**。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    description: string;

    /**
     * 卷设备状态。
     * **0**：卸载状态。
     * **1**：检查状态。
     * **2**：挂载状态。
     * **3**：正在弹出状态。
     * 取值应为整数。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    state: int;

    /**
     * 卷设备的总大小。
     * 单位：Byte。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    totalSize: long;

    /**
     * 卷设备的可用大小。
     * 单位：Byte。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    freeSize: long;

    /**
     * 卷设备的挂载地址，一般为/mnt/data/external/{uuid}。格式化卷设备会改变其挂载路径。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    path: string;

    /**
     * 文件系统类型，常见有fat32、ntfs、exfat、ext4、udf和iso9660等。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    fsType: string;
  }

  /**
   * 获取所有外置存储物理磁盘信息，使用Promise异步回调。
   *
   * @permission ohos.permission.GET_STORAGE_VOLUME_INFO
   * @returns { Promise<Array<ExternalDiskInfo>> } Promise对象，返回外置存储物理磁盘信息列表。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 13600001 - IPC error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function getExternalDiskInfos(): Promise<Array<ExternalDiskInfo>>;

  /**
   * 获取所有外置存储卷设备信息，使用Promise异步回调。
   *
   * @permission ohos.permission.GET_STORAGE_VOLUME_INFO
   * @returns { Promise<Array<ExternalVolumeInfo>> } Promise对象，返回外置存储卷设备信息列表。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 13600001 - IPC error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function getExternalVolumeInfos(): Promise<Array<ExternalVolumeInfo>>;
}

export default volumeManager;