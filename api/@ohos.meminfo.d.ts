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
 * Query memory hardware information, including the memory capacity and frequency.
 *
 * @syscap SystemCapability.Kernel.Memory
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace meminfo {
  /**
   * Obtain the total memory capacity of the system.
   *
   * @returns { int }Total memory capacity, in MB. If it does not exist, 0 is returned.
   * @syscap SystemCapability.Kernel.Memory
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getMemoryCapacity(): int;

  /**
   * Obtain the memory frequency.
   *
   * @returns { int }Memory frequency, in MHz. If it does not exist, 0 is returned.
   * @syscap SystemCapability.Kernel.Memory
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getMemoryFrequency(): int;
}

export default meminfo;