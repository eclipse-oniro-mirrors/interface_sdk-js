"use static"
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

/**
 * 本模块提供板级硬件信息查询能力，支持获取CPU、主板、BIOS等硬件信息，
 * 适用于设备识别、资产管理、兼容性判断等场景。开发者不可配置这些信息。
 *
 * > **说明：**
 * >
 * > 本模块首批接口从API version 26.0.1开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * > 本模块接口在执行期间会拉起临时进程，当系统负载较高时，可能引发阻塞风险。
 * > 为确保应用主线程的响应性能，建议避免在主线程中调用。硬件信息因设备而异且固定不变，
 * > 可在首次获取后缓存在本地，避免每次使用时重复获取，以提升性能。
 *
 * @syscap SystemCapability.Startup.BoardInfo
 * @stagemodelonly
 * @since 26.0.1 static
 */
declare namespace boardInfo {
  /**
   * CPU ID。
   *
   * 示例：AA AA AA AA 00 00 00 00（十六进制字符串）
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 static
   */
  get cpuId(): string;

  /**
   * CPU架构。
   *
   * 示例：aarch64
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 static
   */
  get cpuArch(): string;

  /**
   * CPU厂商信息。
   *
   * 示例：HISILICON
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 static
   */
  get cpuVendor(): string;

  /**
   * 主板序列号。
   *
   * **需要权限**：ohos.permission.ACCESS_BOARD_INFO
   *
   * 示例：0123456789ABCDEF
   *
   * @permission ohos.permission.ACCESS_BOARD_INFO
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 static
   */
  get boardSn(): string;

  /**
   * 主板厂商。
   *
   * 示例：HUAWEI
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 static
   */
  get boardVendor(): string;

  /**
   * 主板产品名称。
   *
   * 示例：HAD-PCB
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 static
   */
  get boardName(): string;

  /**
   * BIOS厂商。
   *
   * 示例：HUAWEI
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 static
   */
  get biosVendor(): string;

  /**
   * BIOS版本。
   *
   * 示例：1.00
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 static
   */
  get biosVersion(): string;

  /**
   * BIOS发布日期。
   *
   * 示例：2026/01/01 08:00:00
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 static
   */
  get biosDate(): string;
}

export default boardInfo;
