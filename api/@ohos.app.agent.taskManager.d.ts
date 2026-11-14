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
 * The **taskManager** module provides APIs for managing the lifecycle of tasks. A task is the
 * attribution unit for the execution of user intents. During the lifetime of a task, all
 * processes attributed to the task are centrally scheduled by the system.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace taskManager {
  /**
   * Starts a task with the specified task ID. The task is activated immediately, and the
   * processes attributed to the task are centrally scheduled by the system. The task remains active
   * until finishTask is called or the task is automatically ended by the system (for example,
   * when the task times out or the creator process exits). If a task with the specified task
   * ID already exists, this promise is rejected.
   *
   * @param { string } taskId - ID of the task, which is used as the attribution key for the
   * processes launched during the task execution. The value must contain 1 to 256 characters.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 16000301 - Task already exists.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function startTask(taskId: string): Promise<void>;

  /**
   * Ends the task with the specified task ID. The resource management applied to the processes
   * attributed to the task is revoked, and the scheduling state of the processes is restored.
   * If the task does not exist or has already ended, this promise is rejected.
   *
   * @param { string } taskId - ID of the task.
   * @returns { Promise<void> } Promise that returns no value.
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
