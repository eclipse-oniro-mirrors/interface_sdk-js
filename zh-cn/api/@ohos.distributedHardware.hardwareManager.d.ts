/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * @file 分布式硬件管理
 * @kit DistributedServiceKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * 分布式硬件管理模块提供控制分布式硬件的能力，包括暂停、恢复和停止被控端分布式硬件业务。
 *
 * @namespace hardwareManager
 * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace hardwareManager {
  /**
   * 指定要操作的分布式硬件类型，决定暂停、恢复或停止操作的硬件范围。例如，设置为CAMERA时仅操作分布式相机，设置为ALL时操作所有分布式硬件。使用该参数前需确保对应的分布式硬件服务已启动。
   *
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum DistributedHardwareType {
    /**
     * 表示所有分布式硬件。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ALL = 0,
    /**
     * 表示分布式相机。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    CAMERA = 1,
    /**
     * 表示分布式屏幕。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SCREEN = 8,
    /**
     * 表示分布式移动通话的麦克风。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    MODEM_MIC = 256,
    /**
     * 表示分布式移动通话的扬声器。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    MODEM_SPEAKER = 512,
    /**
     * 表示分布式麦克风。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    MIC = 1024,
    /**
     * 表示分布式扬声器。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPEAKER = 2048
  }

  /**
   * 分布式硬件错误码的枚举。
   *
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum DistributedHardwareErrorCode {
    /**
     * 表示指定的分布式硬件服务未启动。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ERR_CODE_DISTRIBUTED_HARDWARE_NOT_STARTED = 24200101,

    /**
     * 表示指定的源端设备未建立连接。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ERR_CODE_DEVICE_NOT_CONNECTED = 24200102
  }

  /**
   * 表示分布式硬件的描述信息。
   *
   * @typedef HardwareDescriptor
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface HardwareDescriptor {
    /**
     * 分布式硬件类型。
     *
     * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    type: DistributedHardwareType;

    /**
     * 表示源端设备，为有效设备网络ID字符串时操作指定源端设备的指定类型硬件，未提供或传空字符串时表示所有源端设备。传入无效值时返回错误码401。
     *
     * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    srcNetworkId?: string;
  }

  /**
   * 暂停被控端分布式硬件业务。被控端指通过分布式能力连接的远端设备，分布式硬件业务指通过分布式能力调用的相机、麦克风等硬件功能。使用promise异步回调，暂停后可以调用resumeDistributedHardware恢复业务或
   * stopDistributedHardware停止业务。调用此方法前需确保分布式硬件已启动。使用场景：在多设备协同场景下临时暂停某些设备的硬件功能（如暂停远端相机以节省带宽）；当系统资源紧张时暂停非关键的分布式硬件以释放资源；
   * 切换设备配置时暂时停止当前硬件同步。
   *
   * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
   * @param { HardwareDescriptor } description - 硬件描述信息，用于指定要操作的分布式硬件类型和源端设备。
   * @returns {Promise<void>} Promise对象，异步操作成功时无返回结果，失败时返回错误码和错误信息。
   * @throws {BusinessError} 201 - Permission verification failed.
   * @throws {BusinessError} 202 - Permission denied, non-system app called system api.
   * @throws {BusinessError} 401 - Input parameter error.
   * @throws {BusinessError} 24200101 - The specified distributed hardware is not started.
   * @throws {BusinessError} 24200102 - The specified source device is not connected.
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function pauseDistributedHardware(description: HardwareDescriptor): Promise<void>;

  /**
   * 恢复被控端分布式硬件业务。被控端对应的分布式硬件业务恢复正常运行。使用promise异步回调，必须在pauseDistributedHardware暂停后调用，用于恢复已暂停的业务。调用此方法前需确保分布式硬件已启动。使用场景：
   * 当多设备协同场景下需要重新启用已暂停的硬件功能时；当系统资源恢复后重新激活非关键分布式硬件时；切换设备配置完成时恢复硬件同步功能。
   *
   * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
   * @param { HardwareDescriptor } description - 硬件描述信息，用于指定要操作的分布式硬件类型和源端设备。
   * @returns {Promise<void>} Promise对象，异步操作成功时无返回结果，失败时返回错误码和错误信息。
   * @throws {BusinessError} 201 - Permission verification failed.
   * @throws {BusinessError} 202 - Permission denied, non-system app called system api.
   * @throws {BusinessError} 401 - Input parameter error.
   * @throws {BusinessError} 24200101 - The specified distributed hardware is not started.
   * @throws {BusinessError} 24200102 - The specified source device is not connected.
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function resumeDistributedHardware(description: HardwareDescriptor): Promise<void>;

  /**
   * 停止被控端分布式硬件业务。被控端对应的分布式硬件业务停止。使用promise异步回调。停止后无法通过resumeDistributedHardware恢复业务，需要重新启动分布式硬件服务，不能再调用
   * pauseDistributedHardware或resumeDistributedHardware。调用此方法前需确保分布式硬件已启动。使用场景：当应用退出或不再需要分布式硬件功能时；当用户主动关闭分布式硬件服务时；
   * 当设备断开连接需要释放分布式硬件资源时。
   *
   * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
   * @param { HardwareDescriptor } description - 硬件描述信息，用于指定要操作的分布式硬件类型和源端设备。
   * @returns {Promise<void>} Promise对象，异步操作成功时无返回结果，失败时返回错误码和错误信息。
   * @throws {BusinessError} 201 - Permission verification failed.
   * @throws {BusinessError} 202 - Permission denied, non-system app called system api.
   * @throws {BusinessError} 401 - Input parameter error.
   * @throws {BusinessError} 24200101 - The specified distributed hardware is not started.
   * @throws {BusinessError} 24200102 - The specified source device is not connected.
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function stopDistributedHardware(description: HardwareDescriptor): Promise<void>;
}

export default hardwareManager;
