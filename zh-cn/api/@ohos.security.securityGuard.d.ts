/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @file This module provides the capabilities to security guard.
 * @kit SecurityGuardKit
 */

import type { Callback } from '@ohos.base';

/**
 * Provides security event management and security model management.
 * Based on event information, you will be able to analyze the running status of devices.
 *
 * @namespace securityGuard
 * @syscap SystemCapability.Security.SecurityGuard
 * @systemapi Hide this for inner system use.
 * @since 12
 */
declare namespace securityGuard {

  /**
   * Provides the SecurityEvent type, including the event id, version info, report content.
   *
   * @typedef SecurityEvent
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface SecurityEvent {
    /**
     * The event id
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    eventId: number;

    /**
     * The version of a security event. Different versions indicate different data formats.
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    version: string;

    /**
     * The report content
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    content: string;

    /**
     * The event timestamp, format is YYYYMMDDHHMMSS.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    timestamp?: string;
  }

  /**
   * Report security information to the security guard.
   *
   * @permission ohos.permission.REPORT_SECURITY_EVENT
   * @param { SecurityEvent } securityEvent - indicates the information to be reported.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters.
   * Possible causes:
   *   1. Mandatory parameters are left unspecified.
   *   2. Incorrect parameter types.
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function reportSecurityEvent(securityEvent: SecurityEvent): void;

  /**
   * Provides the conditions of querySecurityEvent.
   *
   * @interface SecurityEventRule
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface SecurityEventRule {
    /**
     * The security event ids.
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    eventId: number;

    /**
     * The begin time, format is YYYYMMDDHHMMSS.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    beginTime?: string;

    /**
     * The end time, format is YYYYMMDDHHMMSS.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    endTime?: string;

    /**
     * The query condition.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    param?: string;
  }

  /**
   * Definition callback of receiving the query data.
   *
   * @interface Querier
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface Querier {
    /**
     * Triggered when data is returned.
     *
     * @type { function }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    onQuery: (events: Array<SecurityEvent>) => void;

    /**
     * Triggered when data is complete.
     *
     * @type { function }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    onComplete: () => void;

    /**
     * Triggered when error.
     *
     * @type { function }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    onError: (message: string) => void;
  }

  /**
   * Query security event information from security guard.
   *
   * @permission ohos.permission.QUERY_SECURITY_EVENT
   * @param { Array<SecurityEventRule> } rules - rule of get security event information.
   * @param { Querier } querier - callback of receiving the query data.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters.
   * Possible causes:
   *   1. Mandatory parameters are left unspecified.
   *   2. Incorrect parameter types.
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function querySecurityEvent(rules: Array<SecurityEventRule>, querier: Querier): void;

  /**
   * Provides the conditions of Collector.
   *
   * @typedef CollectorRule
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface CollectorRule {
    /**
     * The event id
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    eventId: number;

    /**
     * The query condition.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    param?: string;
  }

  /**
   * start the collector to collect data
   *
   * @permission ohos.permission.QUERY_SECURITY_EVENT
   * @param { CollectorRule } rule - rule of collect security event information.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters.
   * Possible causes:
   *   1. Mandatory parameters are left unspecified.
   *   2. Incorrect parameter types.
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function startSecurityEventCollector(rule: CollectorRule): void;

  /**
   * stop the collector.
   *
   * @permission ohos.permission.QUERY_SECURITY_EVENT
   * @param { CollectorRule } rule - rule of collect security event information.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters.
   * Possible causes:
   *   1. Mandatory parameters are left unspecified.
   *   2. Incorrect parameter types.
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function stopSecurityEventCollector(rule: CollectorRule): void;

  /**
   * Provides the ModelRule type.
   *
   * @typedef ModelRule
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface ModelRule {
    /**
     * The security model rule
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    modelName: string;

    /**
     * The model param.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    param?: string;
  }

  /**
   * Provides the ModelResult type.
   *
   * @typedef ModelResult
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface ModelResult {
    /**
     * The result of security model.
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    result: string;
  }

  /**
   * Request security model result from security guard.
   *
   * @permission ohos.permission.QUERY_SECURITY_MODEL_RESULT
   * @param { ModelRule } rule -  indicates the security model rule.
   * @returns { Promise<ModelResult> } model Results with Promises.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters.
   * Possible causes:
   *   1. Mandatory parameters are left unspecified.
   *   2. Incorrect parameter types.
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function getModelResult(rule: ModelRule): Promise<ModelResult>;

  /**
   * Provides the conditions of on/off.
   *
   * @interface SecurityEventInfo
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface SecurityEventInfo {
    /**
     * The security event id.
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    eventId: number;
  }

  /**
   * Subscribe the security event.
   *
   * @permission ohos.permission.QUERY_SECURITY_EVENT
   * @param {'securityEventOccur'} type
   * @param { SecurityEventInfo } securityEventInfo - Indicates the subscribed event information.
   * @param { Callback<SecurityEvent> } callback - Indicates the listener when the security event occurs.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters.
   * Possible causes:
   *   1. Mandatory parameters are left unspecified.
   *   2. Incorrect parameter types.
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function on(type: 'securityEventOccur', securityEventInfo: SecurityEventInfo, callback: Callback<SecurityEvent>): void;

  /**
   * Unsubscribe the security event.
   *
   * @permission ohos.permission.QUERY_SECURITY_EVENT
   * @param {'securityEventOccur'} type
   * @param { SecurityEventInfo } securityEventInfo - Indicates the subscribed event information.
   * @param { Callback<SecurityEvent> } callback - Indicates the listener when the security event occurs.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters.
   * Possible causes:
   *   1. Mandatory parameters are left unspecified.
   *   2. Incorrect parameter types.
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function off(type: 'securityEventOccur', securityEventInfo: SecurityEventInfo, callback?: Callback<SecurityEvent>): void;

  /**
   * Provides policy file information.
   *
   * @interface PolicyFile
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface PolicyFile {
    /**
     * The policy file name.
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    name: string;

    /**
     * The policy file descriptor.
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    fd: number;
  }

  /**
   * Update the policy file.
   *
   * @permission ohos.permission.MANAGE_SECURITY_GUARD_CONFIG
   * @param { PolicyFile } policyFile - Indicates the policy file information.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters.
   * Possible causes:
   *   1. Mandatory parameters are left unspecified.
   *   2. Incorrect parameter types.
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function updatePolicyFile(policyFile: PolicyFile): Promise<void>;

  /**
   * 阻断事件信息。
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface AuthEventInfo {
    /**
     * 事件类型ID。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    eventId: number;

    /**
     * 事件版本号。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    version: string;

    /**
     * 事件内容，JSON字符串格式。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    content: string;

    /**
     * 客户端会话状态列表。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    clientStatus?: AuthClientStatus[];
  }

  /**
   * 客户端会话状态。
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface AuthClientStatus {
    /**
     * 客户端会话唯一标识。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    clientId: string;

    /**
     * 事件是否降级，降级的事件仅上报通知，不需要接收阻断结果。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    isDegraded: boolean;
  }

  /**
   * 客户端会话信息。
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface AuthClientInfo {
    /**
     * 客户端会话唯一标识。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    clientId: string;

    /**
     * 应用包名。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    bundleName: string;

    /**
     * 客户端订阅的事件类型ID列表。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    subscribedEvents: number[];

    /**
     * 超时默认阻断策略。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    defaultTimeoutStrategy: AuthStrategy;

    /**
     * 客户端响应超时时间。
     * 单位为：毫秒。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    defaultTimeoutMs: number;
  }

  /**
   * 单个客户端阻断结果。
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface ClientAuthResult {
    /**
     * 客户端会话唯一标识。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    clientId: string;

    /**
     * 阻断策略。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    authStrategy: AuthStrategy;
  }

  /**
   * 所有客户端阻断结果。
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface AuthResult {
    /**
     * 所有客户端汇聚后的阻断策略。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    mergedAuthStrategy: AuthStrategy;

    /**
     * 客户端阻断结果列表。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    clientAuthResult: ClientAuthResult[];
  }

  /**
   * 阻断策略枚举。
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  enum AuthStrategy {
    /**
     * 允许通过。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    ALLOW = 0,

    /**
     * 拒绝阻断。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    DENY = 1,

    /**
     * 超时。
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    TIMEOUT = 2
  }

  /**
   * Provider 回调接口，在 createAuthProvider 时传入。
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface AuthProviderCallback {
    /**
     * 关联的客户端会话状态变更时回调。
     *
     * @param { AuthClientInfo[] } clientInfos - 全部客户端会话信息列表。
     * @throws { BusinessError } 202 - Non-system application attempted to use a system API.
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    onClientStatusChanged: (clientInfos: AuthClientInfo[]) => void;
  }

  /**
   * AuthProvider 接口，由 createAuthProvider 工厂函数创建。
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface AuthProvider {
    /**
     * 请求事件的阻断结果。
     *
     * @permission ohos.permission.AUTH_SERVICE_ACCESS
     * @param { AuthEventInfo } event - 阻断事件信息。
     * @returns { Promise<AuthResult> } Promise对象，返回事件阻断结果。
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - Non-system application attempted to use a system API.
     * @throws { BusinessError } 27000001 - Internal system error.
     *     <br>The possible causes are as follows:
     *     <br>1. The inter-process IPC call fails.
     *     <br>2. The system service process is faulty.
     * @throws { BusinessError } 27000004 - Concurrent request count has reached the upper limit.
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    requestAuthResult(event: AuthEventInfo): Promise<AuthResult>;
  }

  /**
   * 创建 AuthProvider 会话。
   * 同一进程最多 1 个 Provider 实例，全局最多 16 个。
   * 成功后 onClientStatusChanged 回调可收到已有客户端的信息。
   *
   * @permission ohos.permission.AUTH_SERVICE_ACCESS
   * @param { AuthProviderCallback } callback - Provider 回调接口。
   * @param { string } serviceId - 服务标识。
   * @returns { AuthProvider } AuthProvider 实例。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - Non-system application attempted to use a system API.
   * @throws { BusinessError } 27000001 - Internal system error.
   *     <br>The possible causes are as follows:
   *     <br>1. The inter-process IPC call fails.
   *     <br>2. The system service process is faulty.
   * @throws { BusinessError } 27000002 - Provider count of the current process has reached the upper limit.
   * @throws { BusinessError } 27000003 - Global provider count has reached the upper limit.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @see [destroyAuthProvider]{@link securityAudit.destroyAuthProvider} Destroys an **AuthProvider** session.
   * @stagemodelonly
   * @since 26.1.0
   */
  function createAuthProvider(callback: AuthProviderCallback, serviceId: string): AuthProvider;

  /**
   * 销毁 AuthProvider 会话。
   *
   * @permission ohos.permission.AUTH_SERVICE_ACCESS
   * @param { AuthProvider } provider - 要销毁的 AuthProvider 实例，销毁后不可再用。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - Non-system application attempted to use a system API.
   * @throws { BusinessError } 27000001 - Internal system error.
   *     <br>The possible causes are as follows:
   *     <br>1. The inter-process IPC call fails.
   *     <br>2. The system service process is faulty.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @see [createAuthProvider]{@link securityAudit.createAuthProvider} 创建 AuthProvider 会话。
   * @stagemodelonly
   * @since 26.1.0
   */
  function destroyAuthProvider(provider: AuthProvider): void;
}

export default securityGuard;