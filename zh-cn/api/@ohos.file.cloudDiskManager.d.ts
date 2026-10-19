/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
 * @file 云盘管理
 * @kit CoreFileKit
 */

import type { Callback } from './@ohos.base';

/**
 * 本模块是为系统文件管理应用提供获取三方网盘注册的同步根信息的能力。
 *
 * @syscap SystemCapability.FileManagement.CloudDiskManager
 * @systemapi
 * @since 21 dynamic
 * @since 23 static
 */
declare namespace cloudDiskManager {
  /**
   * 枚举，云盘的同步根的状态。
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  enum SyncFolderState {
    /**
     * 表示同步根处于未激活状态。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    INACTIVE = 0,

    /**
     * 表示同步根处于激活状态。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ACTIVE = 1
  }

  /**
   * 表示同步根信息。
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  interface SyncFolder {
    /**
     * 同步根对应的URI。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    path: string;

    /**
     * 同步根对应的包名。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 同步根对应的状态信息。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    state: SyncFolderState;

    /**
     * 资源ID，可以映射到文管列表显示的别名。默认值为undefined。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    displayNameResId?: int;

    /**
     * 在文管列表显示的别名。默认值为undefined。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    customAlias?: string;

    /**
     * 同步根是否支持占位符。
     * true：表示同步根支持占位符。  默认值：false，表示同步根不支持占位符。 
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    isSupportPlaceHolder?: boolean;
  }

  /**
   * 同步根管理类，负责为系统文件管理应用提供获取三方网盘注册的同步根信息的能力。
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  class SyncFolderAccessor {
    /**
     * SyncFolderAccessor的构造函数，用于获取SyncFolderAccessor类的实例。
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @throws { BusinessError } 201 - Permission verification failed,
     * @throws { BusinessError } 202 - Permission verification failed.
     *     application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 获取所有注册的同步根信息。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @returns { Promise<Array<SyncFolder>> } Promise对象。返回所有网盘应用的同步根列表。
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Device not supported.
     * @throws { BusinessError } 34400003 - IPC communication failed.
     * @throws { BusinessError } 34400014 - Temporary failure. Retry is recommended (e.g., network issues).
     * @throws { BusinessError } 34400015 - Cloud disk is not allowed on this device.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    getAllSyncFolders(): Promise<Array<SyncFolder>>;
  }

  /**
   * 枚举云文件数据获取的回调类型。
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  enum CallbackType {
    /**
     * 获取云端文件数据。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    FETCH_DATA = 0,
 
    /**
     * 取消抓取云文件数据（解压缩）。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    CANCEL_FETCH_DATA = 1,
 
    /**
     * 脱水的授权。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    DEHYDRATE = 2
  }
 
  /**
   * 枚举任务的优先级。
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  enum HydratePriority {
    /**
     * 低优先级。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    LOW = 0,
 
    /**
     * 普通优先级。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    NORMAL = 1,
 
    /**
     * 高优先级。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    HIGH = 2
  }
 
  /**
   * 枚举进度的状态。
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  enum HydrateProgressState {
    /**
     * 已经创建了任务，但是FFRT worker还没有被调度。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    PENDING = 0,
 
    /**
     * 水合物正在进行中。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    IN_PROGRESS = 1,
 
    /**
     * 水合作用完成。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    COMPLETED = 2,
 
    /**
     * 由用户取消，崩溃，或应用程序放弃。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    CANCELLED = 3
  }
 
  /**
   * 封装水合进度信息。
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface HydrateProgress {
    /**
     * 文件的原始绝对路径，与传入的占位符一致。
     * 最大长度为4096且不能为空。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    filePath: string;
 
    /**
     * 水合物进展情况。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    state: HydrateProgressState;
 
    /**
     * 下载的字节数。仅当state为IN_PROGRESS时有效。
     * 单位为：字节。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    processedSize: long;
 
    /**
     * 正在处理的文件的总大小，以字节为单位。
     * 单位为：字节。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    totalSize: long;
  }
 
  /**
   * 文件管理器访问云盘系统能力的类，如
   * 补水和脱水文件。
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  class CloudDiskSystemAccessor {
    /**
     * 用于创建**CloudDiskSystemAccessor**实例的构造函数。
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 34400014 - Temporary failure. Failed to initialize the native accessor instance.
     *     Please try again.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    constructor();
 
    /**
     * 为在此实例上调用的初始化和取消操作订阅进度事件。
     * 回调由调用实例选择，而不考虑目标文件。
     * 一次只能为该实例注册一个回调。
     * 具有有效参数的重复订阅保留现有回调而不报告
     * 重复登记错误。
     * 在任务开始后订阅，或者在调用offHydrateProgress后再次订阅，接收后续的
     * 路由到此实例的事件。较早的事件不会重播。
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @param { Callback<HydrateProgress> } callback - 进度变化时调用的回调。
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 801 - This feature is not supported on the device.
     * @throws { BusinessError } 34400003 - IPC communication failed.
     * @throws { BusinessError } 34400008 - No sync root is registered,
     *     or the registered sync roots cannot be queried.
     * @throws { BusinessError } 34400014 - Temporary failure. Failed to initialize the callback,
     *     resolve the user account, or complete an internal operation. Please try again.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    onHydrateProgress(callback: Callback<HydrateProgress>): void;
 
    /**
     * 取消订阅此实例的水合进度事件，而不取消其水合任务。
     * 其他实例注册的订阅不受影响。
     * 如果没有注册回调，则此方法在权限和参数检查后会成功。
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @param { Callback<HydrateProgress> } [callback] - 进度变化时调用的回调。
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     *     This method does not accept arguments.
     * @throws { BusinessError } 801 - This feature is not supported on the device.
     * @throws { BusinessError } 34400003 - IPC communication failed.
     * @throws { BusinessError } 34400008 - No sync root is registered,
     *     or the registered sync roots cannot be queried when unregistering this instance's callback from the service.
     * @throws { BusinessError } 34400014 - Temporary failure while unregistering the callback. Please try again.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    offHydrateProgress(callback?: Callback<HydrateProgress>): void;
 
    /**
     * 填充占位符文件。该接口使用promise返回结果。
     * Hydration进度会传递给启动任务的实例的Hydration progress回调。
     * 如果该实例取消任务成功，则只向该实例下发CANCELLED事件。
     * 即使其他实例启动了该任务。调用的结果也通过它的promise返回。
     * 在开始或取消任务之前，无需注册回调。如果取消实例
     * 没有注册的回调，它的取消事件不会传递到另一个实例，也不会在以后重播。
     * 服务的自动取消被路由到启动任务的实例。
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @param { string } filePath - 要添加的占位符文件的路径。
     *     <br>最大长度为4096且不能为空。
     * @param { CallbackType } callbackType - 云端文件取数回调类型。
     * @param { HydratePriority } priority - 水合物任务的优先级。
     * @returns { Promise<void> } 不返回任何值的Promise。
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 801 - This feature is not supported on the device or file system.
     * @throws { BusinessError } 34400001 - The input parameter is invalid.
     *     The service rejected the path, callback type, or file metadata.
     *     CallbackType.DEHYDRATE is not supported by this operation.
     * @throws { BusinessError } 34400003 - IPC communication failed.
     * @throws { BusinessError } 34400008 - No sync root is registered,
     *     or the registered sync roots cannot be queried.
     * @throws { BusinessError } 34400010 - The sync root path does not exist, or the target file
     *     or sync root mount path is missing during path resolution.
     * @throws { BusinessError } 34400014 - Temporary failure. Failed to resolve the user account, access the file,
     *     prepare a hydrate task, schedule the request, or complete an internal operation. Please try again.
     * @throws { BusinessError } 34400017 - The target path is not a placeholder file.
     * @throws { BusinessError } 34400019 - A hydrate task for the target file is already pending or in progress.
     * @throws { BusinessError } 34400021 - The cloud disk provider's callback table is not registered,
     *     or no usable sync root matches the path.
     * @throws { BusinessError } 34400023 - A path component that must be a directory is not a directory.
     * @throws { BusinessError } 34400024 - A required file or directory does not exist while resolving
     *     or accessing the target path.
     * @throws { BusinessError } 34400025 - The file name or path is too long.
     * @throws { BusinessError } 34400031 - The placeholder is already fully hydrated.
     * @throws { BusinessError } 34400032 - Cancellation was requested, but no hydrate task is pending or in progress.
     * @throws { BusinessError } 34400033 - The placeholder state or its stored attribute is invalid.
     * @throws { BusinessError } 34400034 - The limit on pending hydrate tasks has been reached.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    hydratePlaceholder(filePath: string, callbackType: CallbackType, priority: HydratePriority): Promise<void>;
 
    /**
     * 对文件进行脱水。该接口使用promise返回结果。
     * 该文件可能已被另一个实例删除。此操作不会发出delegateProgress事件。
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @param { string } filePath - 要去水化的文件的路径。
     *     <br>最大长度为4096且不能为空。
     * @returns { Promise<void> } 不返回任何值的Promise。
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 801 - This feature is not supported on the device or file system.
     * @throws { BusinessError } 34400001 - The input parameter is invalid.
     *     The service rejected the path or a file operation argument,
     *     the target is a directory, or the provider request could not be serialized.
     * @throws { BusinessError } 34400003 - IPC communication with the service or cloud disk provider failed.
     * @throws { BusinessError } 34400008 - No sync root is registered,
     *     or the registered sync roots cannot be queried.
     * @throws { BusinessError } 34400010 - The sync root path does not exist, or the target file
     *     or sync root mount path is missing during path resolution.
     * @throws { BusinessError } 34400014 - Temporary failure. Failed to resolve the user account, access the file,
     *     restore its logical size, schedule the request, or complete an internal operation. Please try again.
     * @throws { BusinessError } 34400017 - The target path is not a placeholder file.
     * @throws { BusinessError } 34400019 - A hydrate task for the target file is pending or in progress.
     * @throws { BusinessError } 34400020 - The available disk space is insufficient,
     *     or the disk quota has been exhausted.
     * @throws { BusinessError } 34400021 - The cloud disk provider's callback table is not registered,
     *     or no usable sync root matches the path.
     * @throws { BusinessError } 34400023 - A path component that must be a directory is not a directory.
     * @throws { BusinessError } 34400024 - A required file or directory does not exist while resolving
     *     or accessing the target path.
     * @throws { BusinessError } 34400025 - The file name or path is too long.
     * @throws { BusinessError } 34400029 - The cloud disk provider did not approve the dehydration request.
     * @throws { BusinessError } 34400033 - The placeholder state or its stored attribute is invalid.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    dehydrateFile(filePath: string): Promise<void>;
  }
}

export default cloudDiskManager;