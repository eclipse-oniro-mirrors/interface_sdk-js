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
   * Defines the authorization event information.
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface AuthEventInfo {
    /**
     * Event type ID.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    eventId: number;

    /**
     * Event version number.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    version: string;

    /**
     * Event content, in JSON string format.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    content: string;

    /**
     * Client session status list.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    clientStatus?: AuthClientStatus[];
  }

  /**
   * Defines the client session status.
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface AuthClientStatus {
    /**
     * Unique ID of a client session.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    clientId: string;

    /**
     * Indicates whether an event is downgraded. A downgraded event is only reported, and the authorization result does not need to be received.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    isDegraded: boolean;
  }

  /**
   * Defines the client session information.
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface AuthClientInfo {
    /**
     * Unique ID of a client session.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    clientId: string;

    /**
     * App bundle name.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    bundleName: string;

    /**
     * ID list of event types subscribed to by the client.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    subscribedEvents: number[];

    /**
     * Default authorization policy upon timeout.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    defaultTimeoutStrategy: AuthStrategy;

    /**
     * Client response timeout interval.
     * Unit: millisecond.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    defaultTimeoutMs: number;
  }

  /**
   * Represents the authorization result of a single client.
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface ClientAuthResult {
    /**
     * Unique ID of a client session.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    clientId: string;

    /**
     * Authorization policy.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    authStrategy: AuthStrategy;
  }

  /**
   * Represents the authorization results of all clients.
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface AuthResult {
    /**
     * Aggregated authorization policies of all clients.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    mergedAuthStrategy: AuthStrategy;

    /**
     * List of client authorization results.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    clientAuthResult: ClientAuthResult[];
  }

  /**
   * Enumerates authorization policies.
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  enum AuthStrategy {
    /**
     * Allowed.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    ALLOW = 0,

    /**
     * Denied.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    DENY = 1,

    /**
     * Timeout.
     *
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    TIMEOUT = 2
  }

  /**
   * Represents the **AuthProvider** callback, which is passed when **createAuthProvider** is called.
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface AuthProviderCallback {
    /**
     * Callback triggered when the status of the associated client session changes.
     *
     * @param { AuthClientInfo[] } clientInfos - List of all client session information.
     * @throws { BusinessError } 202 - Non-system application attempted to use a system API.
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0
     */
    onClientStatusChanged: (clientInfos: AuthClientInfo[]) => void;
  }

  /**
   * Authorization service provider class, which is created by the **createAuthProvider** factory function.
   *
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0
   */
  interface AuthProvider {
    /**
     * Authorization result of a request event.
     *
     * @permission ohos.permission.AUTH_SERVICE_ACCESS
     * @param { AuthEventInfo } event - Authorization event information.
     * @returns { Promise<AuthResult> } Promise used to return the authorization result.
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
   * Creates an **AuthProvider** session.
   * A maximum of one **AuthProvider** instance is allowed in a process, and a maximum of 16 instances are allowed globally.
   * After the creation succeeds, the **onClientStatusChanged** callback will be used to receive information about existing clients.
   *
   * @permission ohos.permission.AUTH_SERVICE_ACCESS
   * @param { AuthProviderCallback } callback - **AuthProvider** callback.
   * @param { string } serviceId - Service ID.
   * @returns { AuthProvider } **AuthProvider** instance.
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
   * Destroys an **AuthProvider** session.
   *
   * @permission ohos.permission.AUTH_SERVICE_ACCESS
   * @param { AuthProvider } provider - **AuthProvider** instance to be destroyed. It cannot be used after being destroyed.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - Non-system application attempted to use a system API.
   * @throws { BusinessError } 27000001 - Internal system error.
   *     <br>The possible causes are as follows:
   *     <br>1. The inter-process IPC call fails.
   *     <br>2. The system service process is faulty.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @see [createAuthProvider]{@link securityAudit.createAuthProvider} Creates an **AuthProvider** session.
   * @stagemodelonly
   * @since 26.1.0
   */
  function destroyAuthProvider(provider: AuthProvider): void;
}

export default securityGuard;