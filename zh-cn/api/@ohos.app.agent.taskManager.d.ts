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
 * **taskManager**模块提供任务生命周期管理接口。任务是用户意图执行的归因单元：任务存活期间，
 * 系统按任务优先级对归因到该任务的进程进行管控。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @since 26.2.0 dynamic&static
 */
declare namespace taskManager {
  /**
   * 任务优先级枚举。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export enum TaskPriority {
    /**
     * 低优先级。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    LOW = 100,
    /**
     * 中优先级。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    MEDIUM = 200,
    /**
     * 高优先级。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    HIGH = 300,
  }

  /**
   * 以指定任务 ID 启动任务。任务立即激活，系统按指定优先级对归因到该任务的进程进行管控。
   * 任务持续存活，直至调用 finishTask 或系统自动结束（如任务超时、创建者进程退出）。
   * 若指定任务 ID 的任务已存在，该 promise 被拒绝。
   *
   * @param { string } taskId - 任务 ID，作为任务执行期间所拉起进程的归因主键。长度范围为 1~256 个字符。
   * @param { TaskPriority } [priority] - 任务优先级。默认值为**MEDIUM**。
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 16000301 - Task already exists.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  function startTask(taskId: string, priority?: TaskPriority): Promise<void>;

  /**
   * 以指定任务 ID 结束任务。撤销对归因到该任务的进程施加的资源管控，恢复进程的调度状态。
   * 任务不存在或已结束时，该 promise 被拒绝。
   *
   * @param { string } taskId - 任务 ID。
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 16000302 - Task not found.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  function finishTask(taskId: string): Promise<void>;
}

export default taskManager;
