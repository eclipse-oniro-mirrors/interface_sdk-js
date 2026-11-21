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
 * @kit AbilityKit
 */

/**
 * **taskManager**模块提供任务生命周期管理接口。任务是用户意图执行的归因单元。在任务存活期间，
 * 所有归因至该任务的进程均由系统统一调度。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace taskManager {
  /**
   * 以指定任务ID启动任务。任务立即激活，归因到该任务的进程由系统统一调度。
   * 任务持续存活，直至调用finishTask或系统自动结束（如任务超时、创建者进程退出）。
   * 若指定任务ID的任务已存在，该promise被拒绝。
   *
   * @param { string } taskId - 任务ID，作为任务执行期间所拉起进程的归因主键。长度范围为 1~256 个字符。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 16000301 - Task already exists.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function startTask(taskId: string): Promise<void>;

  /**
   * 以指定任务ID结束任务。撤销对归因到该任务的进程施加的资源管控，恢复进程的调度状态。
   * 任务不存在或已结束时，该promise被拒绝。
   *
   * @param { string } taskId - 任务ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 16000302 - Task not found.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function finishTask(taskId: string): Promise<void>;
}

export default taskManager;
