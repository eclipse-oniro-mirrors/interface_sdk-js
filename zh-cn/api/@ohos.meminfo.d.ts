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
 * @file Memory Hardware Info
 * @kit KernelEnhanceKit
 */

/**
 * 提供内存硬件信息查询能力，包括内存容量、频率等。
 *
 * @syscap SystemCapability.Kernel.Memory
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace meminfo {
  /**
   * 获取系统总内存容量。
   *
   * @returns { int } 内存总容量，单位为MB。如果不存在，则返回0。
   * @syscap SystemCapability.Kernel.Memory
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getMemoryCapacity(): int;

  /**
   * 获取内存频率。
   *
   * @returns { int } 内存频率，单位为MHz。如果不存在，则返回0。
   * @syscap SystemCapability.Kernel.Memory
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getMemoryFrequency(): int;
}

export default meminfo;