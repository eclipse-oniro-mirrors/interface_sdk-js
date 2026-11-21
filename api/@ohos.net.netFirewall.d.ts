/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Network Firewall
 * @kit NetworkKit
 */

/**
 * The **netFirewall** module implements the network firewall functionality for applications. It allows applications to
 * query the firewall interception records of the device.
 *
 * @syscap SystemCapability.Communication.NetManager.NetFirewall
 * @since 14 dynamic
 * @since 26.0.1 static
 */
declare namespace netFirewall {
  /**
   * Sets the firewall policy for a system user ID, including the firewall switch status and default inbound or outbound
   * behavior (allow or deny). Different firewall policies can be configured for different system user IDs. This API
   * uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > If this API is called by multiple applications under the same system user, the latest delivered policy prevails.
   *
   * @permission ohos.permission.MANAGE_NET_FIREWALL
   * @param { int } userId - System user ID, which must exist.
   * @param { NetFirewallPolicy } policy - Firewall policy.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  function setNetFirewallPolicy(userId: int, policy: NetFirewallPolicy): Promise<void>;

  /**
   * Queries the firewall policy for a system user ID, including the firewall switch status and default inbound or
   * outbound behavior (allow or deny). This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_NET_FIREWALL
   * @param { int } userId - System user ID, which must exist.
   * @returns { Promise<NetFirewallPolicy> } Promise used to return the firewall policy of the current user.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  function getNetFirewallPolicy(userId: int): Promise<NetFirewallPolicy>;

  /**
   * Adds a firewall rule for the system user ID. The supported rule types are IP, Domain, and DNS. This API uses a
   * promise to return the result.
   *
   * > **NOTE**
   * >
   * > 1. Firewall rule priority description (no call order is required between
   * > [setNetFirewallPolicy]{@link netFirewall.setNetFirewallPolicy} and
   * > [addNetFirewallRule]{@link netFirewall.addNetFirewallRule}):
   * >
   * > - When [setNetFirewallPolicy]{@link netFirewall.setNetFirewallPolicy} is called to set the default policy to deny
   * >   and [addNetFirewallRule]{@link netFirewall.addNetFirewallRule} is called to add explicit rules, the rule
   * >   priority from high to low is as follows:
   * >
   * > - Explicit deny rule
   * >
   * > - Explicit allow rule
   * >
   * > - Default deny policy
   * >
   * > - When [setNetFirewallPolicy]{@link netFirewall.setNetFirewallPolicy} is called to set the default policy to
   * >   allow and [addNetFirewallRule]{@link netFirewall.addNetFirewallRule} is called to add explicit rules, the rule
   * >   priority from high to low is as follows:
   * >
   * > - Explicit allow rule
   * >
   * > - Explicit deny rule
   * >
   * > - Default allow policy
   * >
   * > - When a firewall IP rule conflicts with a domain rule (the IP resolved from the domain is the same as the IP in
   * >   the IP rule, and the rule actions conflict):
   * >
   * > - If the access is performed by domain name, the domain rule takes precedence over the IP rule and is not
   * >   affected by the rule of the IP resolved from the domain.
   * >
   * > - If the access is performed by IP address, the following principles apply:
   * >
   * > - When the domain rule allows access, neither the IP rule nor the default policy can block the access, and the
   * >   access by IP address is ultimately allowed.
   * >
   * > - When the domain rule denies access, the allow action of the IP rule or the default policy still takes effect,
   * >   and the access by IP address is ultimately allowed.
   * >
   * > - The system identifies domain-based access and IP-based access as follows:
   * >
   * > - If the destination IP matches an IP address in the system network-layer domain cache table, the application is
   * >   considered to access by domain name.
   * >
   * > - If the destination IP does not match any IP address in the system network-layer domain cache table, the
   * >   application is considered to access by IP address.
   * >
   * > - The system network layer proactively queries the DNS information configured in the firewall and caches the
   * >   corresponding IP addresses so that the domain allow rule takes effect.
   * >
   * > 2. Supplementary description of rule types:
   * >
   * > - When **rule.type** of **addNetFirewallRule** is set to **RULE_IP**:
   * >
   * > - If **rule.action** is **RULE_ALLOW** and neither **rule.localIps** nor **rule.remoteIps** is configured, the
   * >   rule takes effect as allowing all IP segments.
   * >
   * > - If **rule.action** is **RULE_DENY** and neither **rule.localIps** nor **rule.remoteIps** is configured, the
   * >   rule takes effect as blocking all IP segments.
   * >
   * > - When **rule.type** of **addNetFirewallRule** is set to **RULE_DOMAIN**, if **rule.domains** is not configured,
   * >   the rule does not take effect.
   * >
   * > 3. Description of the upper limit for adding firewall rules:
   * >
   * > - The upper limit of firewall rules added for a single system user ID is 1000. If this limit is exceeded, error
   * >   code **29400001** is reported.
   * >
   * > - The upper limit of the total number of firewall rules added for all system user IDs is 2000. If this limit is
   * >   exceeded, error code 29400001 is reported.
   * >
   * > - The upper limit of the total number of wildcard domain rules added for all system user IDs is 100. If this
   * >   limit is exceeded, error code 29400005 is reported.
   *
   * @permission ohos.permission.MANAGE_NET_FIREWALL
   * @param { NetFirewallRule } rule - Firewall rule.
   * @returns { Promise<int> } Promise used to return the firewall rule ID, which is automatically generated by the
   *     system.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @throws { BusinessError } 29400001 - The number of firewall rules exceeds the maximum.
   * @throws { BusinessError } 29400002 - The number of IP address rules in the firewall rule exceeds the maximum.
   * @throws { BusinessError } 29400003 - The number of port rules in the firewall rule exceeds the maximum.
   * @throws { BusinessError } 29400004 - The number of domain rules in the firewall rule exceeds the maximum.
   * @throws { BusinessError } 29400005 - The number of domain rules exceeds the maximum.
   * @throws { BusinessError } 29400007 - The dns rule is duplication.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  function addNetFirewallRule(rule: NetFirewallRule): Promise<int>;

  /**
   * Updates a firewall rule. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_FIREWALL
   * @param { NetFirewallRule } rule - Firewall rule.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @throws { BusinessError } 29400002 - The number of IP address rules in the firewall rule exceeds the maximum.
   * @throws { BusinessError } 29400003 - The number of port rules in the firewall rule exceeds the maximum.
   * @throws { BusinessError } 29400004 - The number of domain rules in the firewall rule exceeds the maximum.
   * @throws { BusinessError } 29400005 - The number of domain rules exceeds the maximum.
   * @throws { BusinessError } 29400006 - The specified rule does not exist.
   * @throws { BusinessError } 29400007 - The dns rule is duplication.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  function updateNetFirewallRule(rule: NetFirewallRule): Promise<void>;

  /**
   * Deletes a specified firewall rule of a system user ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_FIREWALL
   * @param { int } userId - System user ID, which must exist.
   * @param { int } ruleId - ID of the firewall rule.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @throws { BusinessError } 29400006 - The specified rule does not exist.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  function removeNetFirewallRule(userId: int, ruleId: int): Promise<void>;

  /**
   * Obtains firewall rules by user ID. You need to specify the pagination query parameter when calling this API.
   * Currently, firewall rules can be sorted by name. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_NET_FIREWALL
   * @param { int } userId - System user ID, which must exist.
   * @param { RequestParam } requestParam - Pagination query parameter. The **orderField** field can be sorted only by
   *     firewall rule name.
   * @returns { Promise<FirewallRulePage> } Promise used to return the paginated firewall rule list.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  function getNetFirewallRules(userId: int, requestParam: RequestParam): Promise<FirewallRulePage>;

  /**
   * Obtains a firewall rule based on the specified user ID and rule ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_NET_FIREWALL
   * @param { int } userId - System user ID, which must exist.
   * @param { int } ruleId - ID of the firewall rule.
   * @returns { Promise<NetFirewallRule> } Promise used to return the firewall rule.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @throws { BusinessError } 29400006 - The specified rule does not exist.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  function getNetFirewallRule(userId: int, ruleId: int): Promise<NetFirewallRule>;

  /**
   * Obtains the interception records by **userId**. You need to specify the pagination query parameters. This API uses
   * a promise to return the result.
   *
   * @permission ohos.permission.GET_NET_FIREWALL
   * @param { int } userId - User ID. The value must be an existing user ID in the system.
   * @param { RequestParam } requestParam - Query parameter.
   * @returns { Promise<InterceptedRecordPage> } Promise used to return the list of intercepted records.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   * @since 26.0.1 static
   */
  function getInterceptedRecords(userId: int, requestParam: RequestParam): Promise<InterceptedRecordPage>;

  /**
   * Enumerates the firewall rule directions, including inbound and outbound.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  enum NetFirewallRuleDirection {
    /**
     * Inbound direction.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_IN = 1,
    /**
     * Outbound direction.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_OUT = 2
  }

  /**
   * Enumerates the firewall rule actions, including allowing or denying network connections.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  enum FirewallRuleAction {
    /**
     * Allowing network connection.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_ALLOW = 0,
    /**
     * Denying network connection.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_DENY = 1
  }

  /**
   * Enumerates the firewall rule types, including IP, Domain, and DNS.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  enum NetFirewallRuleType {
    /**
     * IP address-based firewall rule.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_IP = 1,
    /**
     * Domain name-based rule.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_DOMAIN = 2,
    /**
     * DNS-based firewall rule.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_DNS = 3
  }

  /**
   * Enumeration type, the sorting method of firewall rules.
   *
   * > **Description**
   * >
   * > [getNetFirewallRules]{@link netFirewall.getNetFirewallRules} supports only the **ORDER_BY_RULE_NAME** field.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  enum NetFirewallOrderField {
    /**
     * Sorting of firewall rules by name.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    ORDER_BY_RULE_NAME = 1,
    /**
     * Sorting of firewall rules by time.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    ORDER_BY_RECORD_TIME = 100
  }

  /**
   * Enumerates the sorting order of firewall rules, which can be ascending or descending.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  enum NetFirewallOrderType {
    /**
     * Sorting in ascending order.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    ORDER_ASC = 1,
    /**
     * Sorting in descending order.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    ORDER_DESC = 100
  }

  /**
   * Defines the firewall policy, including the firewall switch status and default inbound or outbound action (allow or
   * deny).
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface NetFirewallPolicy {
    /**
     * Whether to enable the firewall. The value **true** means to enable the firewall, and the value **false** means
     * the opposite.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    isOpen: boolean;

    /**
     * Inbound action.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    inAction: FirewallRuleAction;

    /**
     * Outbound action.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    outAction: FirewallRuleAction;
  }

  /**
   * Defines the IP parameters of the firewall rule. The IP address type can be IPv4 or IPv6. A single IP address or IP
   * address segment is supported.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface NetFirewallIpParams {
    /**
     * **1**: IP address or subnet. In this case, the **address** and **mask** fields must be specified. When a single
     * IP address is used, the **mask** field must be set to **32**.
     *
     * **2**: IP address segment. In this case, the **startIp** and **endIp** fields must be specified.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    type: int;
    /**
     * **1**: IPv4.
     *
     * **2**: IPv6.
     *
     * The default value is **IPv4**. Other values are not supported currently.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    family?: int;
    /**
     * IP address. This parameter is mandatory and valid only when type is set to **1**.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    address?: string;
    /**
     * IPv4: subnet mask.
     *
     * IPv6: address prefix.
     *
     * This parameter is mandatory and valid only when type is set to **1**.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    mask?: int;
    /**
     * Start IP address. This parameter is mandatory and valid only when type is set to **2**. The value ranges from 0.0
     * .0.1 to 255.255.255.254. Otherwise, this parameter will be ignored.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    startIp?: string;
    /**
     * End IP address. This parameter is mandatory and valid only when type is set to **2**. The value ranges from 0.0.0
     * .1 to 255.255.255.254. Otherwise, this parameter will be ignored.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    endIp?: string;
  }

  /**
   * Defines the port parameters of a firewall rule.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface NetFirewallPortParams {
    /**
     * Start port number.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    startPort: int;
    /**
     * End port number.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    endPort: int;
  }

  /**
   * Defines domain name parameters of a firewall rule. Currently, Chinese domain names are not supported.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface NetFirewallDomainParams {
    /**
     * Whether to contain wildcards. The value **true** means to contain wildcards; and the value **false** means the
     * opposite.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    isWildcard: boolean;
    /**
     * When **isWildcard** is **false**, a complete domain is required, for example, "www.example.com"; when
     * **isWildcard** is **true**, wildcard rules are supported. For details about the format, see the description
     * below.
     * When **isWildcard** is **true**, **domain** supports the wildcard character *"*"*, which can appear at the
     * beginning, the end, or both the beginning and the end of a domain name, indicating that it matches any character
     * of any length (including zero). The following wildcard formats are supported:
     * - `"*.xxx.xxx"`: prefix wildcard, matching xxx.xxx and all its subdomains. For example, "*.example.com" can
     * match "example.com", "www.example.com", and "a.b.example.com". (Supported since API version 21)
     * - `"*xx.xxx.xxx"`: prefix wildcard, matching domain names ending with "xx.xxx.xxx". For example,
     * "*a.example.com" can match "a.example.com" and "www.a.example.com". (Supported since API version 26.0.1)
     * - `"xxx.xxx.xxx.*"`: suffix wildcard, matching domain names starting with "xxx.xxx.xxx.". For example,
     * "www.example.*" can match "www.example.com" and "www.example.cn". (Supported since API version 26.0.1)
     * - `"xxx.xxx.xxx.xx*"`: suffix wildcard, matching domain names starting with "xxx.xxx.xxx.xx". For example,
     * "www.example.co*" can match "www.example.com" and "www.example.com.cn". (Supported since API version 26.0.1).
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    domain: string;
  }

  /**
   * Defines the DNS information of a firewall rule.
   *
   * > **Description**
   * >
   * > This parameter cannot be empty when **rule.type** of [addNetFirewallRule]{@link netFirewall.addNetFirewallRule}
   * > is set to RULE_DNS.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface NetFirewallDnsParams {
    /**
     * Active DNS server.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    primaryDns: string;
    /**
     * Standby DNS server.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    standbyDns?: string;
  }

  /**
   * Defines a firewall rule.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface NetFirewallRule {
    /**
     * System user ID, which must exist.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    userId: int;
    /**
     * Rule name. This parameter is mandatory and can contain a maximum of 128 characters.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    name: string;
    /**
     * Rule direction, which can be inbound or outbound.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    direction: NetFirewallRuleDirection;
    /**
     * Action, which can be allowing or denying.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    action: FirewallRuleAction;
    /**
     * Rule type, which can be IP, Domain, or DNS.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    type: NetFirewallRuleType;
    /**
     * Whether to enable the rule. The value **true** means to enable the rule, and the value **false** means the
     * opposite.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    isEnabled: boolean;
    /**
     * ID of the firewall rule.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    id?: int;
    /**
     * Firewall rule description. This parameter is optional and can contain a maximum of 256 characters.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    description?: string;
    /**
     * Application or service UID.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    appUid?: int;
    /**
     * Local IP addresses. This parameter is valid only when **type** is set to **RULE_IP**. Otherwise, it will be
     * ignored. A maximum of 10 IP addresses can be specified.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    localIps?: Array<NetFirewallIpParams>;
    /**
     * Remote IP addresses. This parameter is valid only when **type** is set to **RULE_IP**. Otherwise, it will be
     * ignored. A maximum of 10 IP addresses can be specified.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    remoteIps?: Array<NetFirewallIpParams>;
    /**
     * Protocol, including TCP: 6, UDP: 17, ICMP: 1, and ICMPv6: 58. Valid when **type=RULE_IP**.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    protocol?: int;
    /**
     * Local ports. This parameter is valid only when **type** is set to **RULE_IP**. Otherwise, it will be ignored. A
     * maximum of 10 port ranges can be specified.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    localPorts?: Array<NetFirewallPortParams>;
    /**
     * Remote ports. This parameter is valid only when **type** is set to **RULE_IP**. Otherwise, it will be ignored. A
     * maximum of 10 port ranges can be specified.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    remotePorts?: Array<NetFirewallPortParams>;
    /**
     * List of domain names. This parameter is valid only when **type** is set to **RULE_DOMAIN**. Currently, domain
     * names cannot contain Chinese characters.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    domains?: Array<NetFirewallDomainParams>;
    /**
     * List of DNS server names. This parameter is valid only when **type** is set to **RULE_DNS**. This parameter
     * cannot be empty when **type** is set to **RULE_DNS**.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    dns?: NetFirewallDnsParams;
    /**
     * Name of the physical network interface card, for example, wlan0. Valid when **type=RULE_IP**; otherwise, it is
     * ignored. Optional, with a maximum of 16 characters.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    interface?: string;
    /**
     * Interface name: valid when type = RULE_IP, otherwise it will be ignored.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @stagemodelonly
     * @since 26.0.1 static
     */
    iface?: string;
  }

  /**
   * Defines an interception record.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   * @since 26.0.1 static
   */
  interface InterceptedRecord {
    /**
     * Time stamp.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    time: int;
    /**
     * Local IP address.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    localIp?: string;
    /**
     * Remote IP address.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    remoteIp?: string;
    /**
     * Local port. The default value is **0**.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    localPort?: int;
    /**
     * Remote port. The default value is **0**.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    remotePort?: int;
    /**
     * Transport layer protocol. The default value is **0**.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    protocol?: int;
    /**
     * Application or service UID. The default value is **0**.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    appUid?: int;
    /**
     * Domain name.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    domain?: string;
  }

  /**
   * Defines query parameters.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface RequestParam {
    /**
     * Page number. The value range is [1,1000].
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    page: int;
    /**
     * Page size. The value range is [1,50].
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    pageSize: int;
    /**
     * Sorting method. This parameter can be used to sort firewall rules only by name.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    orderField: NetFirewallOrderField;
    /**
     * Sorting order type.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    orderType: NetFirewallOrderType;
  }

  /**
   * Defines the pagination structure for firewall rules.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface FirewallRulePage {
    /**
     * Current page number. The value range is [1,1000].
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    page: int;
    /**
     * Page size. The value range is [1,50].
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    pageSize: int;
    /**
     * Total number of pages. The value range is [1,1000].
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    totalPage: int;
    /**
     * Page data.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    data: Array<NetFirewallRule>;
  }

  /**
   * Defines the pagination structure for interception records.
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   * @since 26.0.1 static
   */
  interface InterceptedRecordPage {
    /**
     * Current page.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    page: int;
    /**
     * Page size.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    pageSize: int;
    /**
     * Total number of pages.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    totalPage: int;
    /**
     * Page data.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    data: Array<InterceptedRecord>;
  }
}

export default netFirewall;