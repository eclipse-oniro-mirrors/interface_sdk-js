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
 * @file 网络防火墙
 * @kit NetworkKit
 */

/**
 * 网络防火墙模块为应用程序提供查询防火墙能力。 通过配置防火墙策略，应用程序可以对机器进行防火墙策略管控，并提供防火墙拦截记录的查询。
 *
 * @syscap SystemCapability.Communication.NetManager.NetFirewall
 * @since 14 dynamic
 * @since 26.0.1 static
 */
declare namespace netFirewall {
  /**
   * 设置系统用户ID的防火墙策略，包含防火墙开关状态，默认的出站/入站行为（允许/阻止）。支持不同的系统用户ID配置不同的防火墙策略。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 同一系统用户下，多应用调用该接口下发策略，会以最新下发的策略为准。
   *
   * @permission ohos.permission.MANAGE_NET_FIREWALL
   * @param { int } userId - 系统用户ID，只能是存在的用户ID。
   * @param { NetFirewallPolicy } policy - 设置的防火墙策略。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 查询系统用户ID的防火墙策略，包含防火墙开关状态，默认出站入站行为（允许/阻止）。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NET_FIREWALL
   * @param { int } userId - 系统用户ID，只能是存在的用户ID。
   * @returns { Promise<NetFirewallPolicy> } Promise对象，返回当前用户防火墙策略。
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
   * 添加系统用户ID的防火墙规则，目前支持的规则类型有：IP、Domain、DNS。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 1. 防火墙规则优先级说明（[setNetFirewallPolicy]{@link netFirewall.setNetFirewallPolicy}和
   * > [addNetFirewallRule]{@link netFirewall.addNetFirewallRule}无调用顺序要求）：
   * >
   * > - 调用[setNetFirewallPolicy]{@link netFirewall.setNetFirewallPolicy}设置默认策略为阻止，调用
   * > [addNetFirewallRule]{@link netFirewall.addNetFirewallRule}新增显式规则，规则优先级由高到低为：
   * >
   * > - 显式阻止规则
   * >
   * > - 显式允许规则
   * >
   * > - 默认阻止策略
   * >
   * > - 调用[setNetFirewallPolicy]{@link netFirewall.setNetFirewallPolicy}设置默认策略为允许，调用
   * > [addNetFirewallRule]{@link netFirewall.addNetFirewallRule}新增显式规则，规则优先级由高到低为：
   * >
   * > - 显式允许规则
   * >
   * > - 显式阻止规则
   * >
   * > - 默认允许策略
   * >
   * > - 防火墙IP规则和域名规则冲突时（域名解析的IP与IP规则的IP相同，规则行为冲突）：
   * >
   * > - 若以域名方式访问，则域名规则优先级高于IP规则，不受域名解析出的IP的规则影响。
   * >
   * > - 若以IP方式访问，遵循以下原则：
   * >
   * > - 域名规则放行时，IP规则或默认策略的拦截均不生效，最终以IP方式访问放行。
   * >
   * > - 域名规则拦截时，IP规则或默认策略的放行仍生效，最终以IP方式访问放行。
   * >
   * > - 系统侧识别域名访问与IP访问的方式：
   * >
   * > - 若目标IP与系统网络层域名缓存表中的IP地址匹配，则认为应用侧以域名形式访问；
   * >
   * > - 若目标IP未匹配上系统网络层域名缓存表中的任意IP地址，则认为应用侧以IP形式访问；
   * >
   * > - 其中，系统网络层会主动查询防火墙配置的DNS信息，并缓存对应的IP地址，使域名放行规则生效。
   * >
   * > 2. 规则类型补充说明：
   * >
   * > - 当addNetFirewallRule的入参rule.type配置为RULE_IP时：
   * >
   * > - 若rule.action为RULE_ALLOW，且rule.localIps、rule.remoteIps均不配置，规则生效为全IP段允许通行；
   * >
   * > - 若rule.action 为RULE_DENY，且rule.localIps、rule.remoteIps均不配置，规则生效为全IP段拦截。
   * >
   * > - 当addNetFirewallRule的入参rule.type配置为RULE_DOMAIN时，若rule.domains未配置，该规则不生效。
   * >
   * > 3. 防火墙规则添加上限说明：
   * >
   * > - 单个系统用户ID添加的防火墙规则上限是1000，若超过该上限，则报错29400001。
   * >
   * > - 所有的系统用户ID添加的防火墙规则总和的上限是2000，若超过该上限，则报错29400001。
   * >
   * > - 所有的系统用户ID添加的模糊域名规则总和的上限是100，若超过该上限，则报错29400005。
   *
   * @permission ohos.permission.MANAGE_NET_FIREWALL
   * @param { NetFirewallRule } rule - 防火墙规则。
   * @returns { Promise<int> } Promise对象，返回防火墙规则ID，防火墙规则ID由系统自动生成。
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
   * 更新防火墙规则。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_FIREWALL
   * @param { NetFirewallRule } rule - 防火墙规则。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 删除系统用户ID的指定防火墙规则。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_FIREWALL
   * @param { int } userId - 系统用户ID，只能是存在的用户ID。
   * @param { int } ruleId - 防火墙规则ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 按用户ID获取防火墙规则，需要指定分页查询参数。目前支持根据防火墙规则名排序。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NET_FIREWALL
   * @param { int } userId - 系统用户ID，只能是存在的用户ID。
   * @param { RequestParam } requestParam - 分页查询参数，其中orderField字段仅支持根据防火墙规则名排序。
   * @returns { Promise<FirewallRulePage> } Promise对象，返回防火墙分页规则列表。
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
   * 通过userId和ruleId获取指定的防火墙规则。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NET_FIREWALL
   * @param { int } userId - 系统用户ID，只能是存在的用户ID。
   * @param { int } ruleId - 防火墙规则ID。
   * @returns { Promise<NetFirewallRule> } Promise对象，返回防火墙规则。
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
   * 按userId获取拦截记录，需要指定分页查询参数。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NET_FIREWALL
   * @param { int } userId - 用户ID，取值范围只能为系统中存在的用户ID。
   * @param { RequestParam } requestParam - 查询参数。
   * @returns { Promise<InterceptedRecordPage> } Promise对象，返回拦截记录列表。
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
   * 枚举类型，防火墙规则方向，包含入站、出站。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  enum NetFirewallRuleDirection {
    /**
     * 入站。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_IN = 1,
    /**
     * 出站。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_OUT = 2
  }

  /**
   * 枚举类型，防火墙规则行为，包含允许网络连接、阻止网络连接。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  enum FirewallRuleAction {
    /**
     * 允许。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_ALLOW = 0,
    /**
     * 阻止。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_DENY = 1
  }

  /**
   * 枚举类型，防火墙规则类型，包含IP、Domain、DNS。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  enum NetFirewallRuleType {
    /**
     * IP类规则。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_IP = 1,
    /**
     * 域名类规则。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_DOMAIN = 2,
    /**
     * DNS规则。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    RULE_DNS = 3
  }

  /**
   * 枚举类型，防火墙规则排序方法。
   *
   * > **说明：**
   * >
   * > [getNetFirewallRules]{@link netFirewall.getNetFirewallRules}接口，仅支持ORDER_BY_RULE_NAME字段。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  enum NetFirewallOrderField {
    /**
     * 根据防火墙规则名排序。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    ORDER_BY_RULE_NAME = 1,
    /**
     * 根据记录时间排序。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    ORDER_BY_RECORD_TIME = 100
  }

  /**
   * 枚举类型，防火墙规则排序顺序，包含升序或降序。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  enum NetFirewallOrderType {
    /**
     * 按防火墙规则排序类型升序排序。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    ORDER_ASC = 1,
    /**
     * 按防火墙规则排序类型降序排序。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    ORDER_DESC = 100
  }

  /**
   * 防火墙策略，包含防火墙开关状态，默认的出站/入站行为（允许/阻止）。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface NetFirewallPolicy {
    /**
     * 是否开启防火墙。true表示开启防火墙，false表示关闭防火墙。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    isOpen: boolean;

    /**
     * 入站行为。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    inAction: FirewallRuleAction;

    /**
     * 出站行为。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    outAction: FirewallRuleAction;
  }

  /**
   * 防火墙规则的IP参数，IP类型包括IPv4、IPv6，支持单个IP或IP段。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface NetFirewallIpParams {
    /**
     * 1：IP地址或子网。该场景下必须指定address和mask字段，当使用单个IP时，mask字段需设置为32。 
     * 
     * 2：IP段，该场景下必须指定startIp和endIp字段。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    type: int;
    /**
     * 1：表示family地址族设置为IPv4。
     * 
     * 2：表示family地址族设置为IPv6。  
     * 
     * 默认IPv4，其他当前不支持。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    family?: int;
    /**
     * IP地址。当type等于1时需要设置，并且仅在type等于1时有效，否则将被忽略。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    address?: string;
    /**
     * IPv4：子网掩码。
     * 
     * IPv6：前缀。
     * 
     * 当type等于1时需要设置，并且仅在type等于1时有效，否则将被忽略。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    mask?: int;
    /**
     * 起始IP。当type等于2时需要设置，并且仅在type等于2时有效，范围从0.0.0.1到255.255.255.254，否则将被忽略。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    startIp?: string;
    /**
     * 结束IP。当type等于2时需要设置，并且仅在type等于2时有效，范围从0.0.0.1到255.255.255.254，否则将被忽略。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    endIp?: string;
  }

  /**
   * 防火墙规则端口参数。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface NetFirewallPortParams {
    /**
     * 开始端口。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    startPort: int;
    /**
     * 结束端口。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    endPort: int;
  }

  /**
   * 防火墙规则域名参数，目前不支持中文域名。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface NetFirewallDomainParams {
    /**
     * 是否包含通配符。true表示包含，false表示不包含。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    isWildcard: boolean;
    /**
     * 当isWildcard为false时，需要确定的完整域名，例如"www.example.com"；当isWildcard为true时，支持通配符规则，具体格式见下文说明。
     * 当isWildcard为true时，domain支持使用通配符"*"，"*"可出现在域名的首部、尾部或首尾同时出现，表示匹配任意长度（包括零）的任意字符。支持以下通配符格式：
     * - `"*.xxx.xxx"`：前缀通配，匹配xxx.xxx及其所有子域名。例如"*.example.com"可匹配"example.com"、"www.example.com"、"a.b.example.com"。（从API版本21开始支持）
     * - `"*xx.xxx.xxx"`：前缀通配，匹配以"xx.xxx.xxx"结尾的域名。例如"*a.example.com"可匹配"a.example.com"、"www.a.example.com"。（从API版本26.0.1开始支持）
     * - `"xxx.xxx.xxx.*"`：后缀通配，匹配以"xxx.xxx.xxx."开头的域名。例如"www.example.*"可匹配"www.example.com"、"www.example.cn"。（从API版本26.0.1开始支持）
     * - `"xxx.xxx.xxx.xx*"`：后缀通配，匹配以"xxx.xxx.xxx.xx"开头的域名。例如"www.example.co*"可匹配"www.example.com"、"www.example.com.cn"。（从API版本26.0.1开始支持）。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    domain: string;
  }

  /**
   * 防火墙规则DNS信息。
   *
   * > **说明：**
   * >
   * > 当[addNetFirewallRule]{@link netFirewall.addNetFirewallRule}的入参rule.type配置为RULE_DNS时，该字段不能为空。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface NetFirewallDnsParams {
    /**
     * 主域名服务器。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    primaryDns: string;
    /**
     * 备份DNS。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    standbyDns?: string;
  }

  /**
   * 防火墙规则信息结构。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface NetFirewallRule {
    /**
     * 系统用户ID，只能是存在的用户ID。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    userId: int;
    /**
     * 规则名称，必填，最多128个字符。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    name: string;
    /**
     * 规则方向，包含入站和出站。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    direction: NetFirewallRuleDirection;
    /**
     * 行为，包含允许和阻止。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    action: FirewallRuleAction;
    /**
     * 规则类型，包含IP、Domain、DNS。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    type: NetFirewallRuleType;
    /**
     * 是否启用规则。true表示启用，false表示不启用。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    isEnabled: boolean;
    /**
     * 防火墙规则的ID。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    id?: int;
    /**
     * 规则描述，可选，最多256个字符。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    description?: string;
    /**
     * 应用程序或服务UID。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    appUid?: int;
    /**
     * 本地IP地址。当type=RULE_IP时有效，否则将被忽略，最多10个。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    localIps?: Array<NetFirewallIpParams>;
    /**
     * 远端IP地址。当type=RULE_IP时有效，否则将被忽略，最多10个。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    remoteIps?: Array<NetFirewallIpParams>;
    /**
     * 协议，包含TCP：6，UDP：17，ICMP：1，ICMPv6：58。当type=RULE_IP时有效。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    protocol?: int;
    /**
     * 本地端口。当type=RULE_IP时有效，否则将被忽略，最多10个。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    localPorts?: Array<NetFirewallPortParams>;
    /**
     * 远端端口。当type=RULE_IP时有效，否则将被忽略。最多10个。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    remotePorts?: Array<NetFirewallPortParams>;
    /**
     * 域名列表，当type=RULE_DOMAIN时有效，否则将被忽略，目前不支持中文域名。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    domains?: Array<NetFirewallDomainParams>;
    /**
     * DNS：当type=RULE_DNS时有效，否则将被忽略。当type=RULE_DNS时，该字段不能为空。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    dns?: NetFirewallDnsParams;
    /**
     * 物理网卡名称，例如wlan0。当type=RULE_IP时有效，否则将被忽略。可选，最多16个字符。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    interface?: string;
    /**
     * 接口名称：当type=RULE_IP时有效，否则忽略。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @stagemodelonly
     * @since 26.0.1 static
     */
    iface?: string;
  }

  /**
   * 拦截记录信息结构。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   * @since 26.0.1 static
   */
  interface InterceptedRecord {
    /**
     * 时间戳。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    time: int;
    /**
     * 本地IP。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    localIp?: string;
    /**
     * 远端IP。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    remoteIp?: string;
    /**
     * 本地端口，默认值为0。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    localPort?: int;
    /**
     * 远端端口，默认值为0。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    remotePort?: int;
    /**
     * 传输层协议，默认值为0。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    protocol?: int;
    /**
     * 应用程序或服务UID，默认值为0。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    appUid?: int;
    /**
     * 域名。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    domain?: string;
  }

  /**
   * 查询输入信息结构。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface RequestParam {
    /**
     * 页码，值范围：[1, 1000]。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    page: int;
    /**
     * 页面大小，值范围：[1, 50]。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    pageSize: int;
    /**
     * 排序方法。 该字段仅支持根据防火墙规则名排序。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    orderField: NetFirewallOrderField;
    /**
     * 排序顺序。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    orderType: NetFirewallOrderType;
  }

  /**
   * 防火墙规则页信息结构。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   * @since 26.0.1 static
   */
  interface FirewallRulePage {
    /**
     * 当前页码，值范围：[1,1000]。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    page: int;
    /**
     * 页面大小，值范围：[1, 50]。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    pageSize: int;
    /**
     * 总页数，值范围：[1,1000]。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    totalPage: int;
    /**
     * 页面数据。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     * @since 26.0.1 static
     */
    data: Array<NetFirewallRule>;
  }

  /**
   * 拦截记录分页信息结构。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   * @since 26.0.1 static
   */
  interface InterceptedRecordPage {
    /**
     * 当前页码。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    page: int;
    /**
     * 页面大小。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    pageSize: int;
    /**
     * 总页数。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 26.0.1 static
     */
    totalPage: int;
    /**
     * 页面数据。
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