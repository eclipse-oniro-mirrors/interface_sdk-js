/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file 扩展认证
 * @kit NetworkKit
 */

import { Callback } from './@ohos.base';
/**
 * 该模块提供了第三方客户端接入802.1X认证（一种基于端口的网络接入控制协议）流程的机制，支撑客户端的定制认证等功能。
 *
 * @syscap SystemCapability.Communication.NetManager.Eap
 * @since 20 dynamic
 * @since 26.0.1 static
 */
declare namespace eap {
  /**
   * 用于指定需要定制化处理的EAP报文类型和对应的处理callback。使用callback异步回调。
   * 
   * 系统会将符合条件的EAP报文送入callback函数中供企业应用获取。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { int } netType - 网络类型，取值为1或2。
   *     <br>netType=1表示WLAN，netType=2表示以太网。
   * @param { int } eapCode - 需要进行定制的EAP code，取值为1、2、3、4 。
   *     <br>code=1 Request、 code=2 Response、 code=3 Success、 code=4 Failure。
   * @param { int } eapType - 需要进行定制处理的EAP method类型，取值范围[0, 255]。
   *     <br>常用取值包括：eapType=1 Identity，eapType=2 Notification，eapType=3 NAK，eapType=4 MD5-Challenge，eapType=5 OTP（One-
   *     Time Password），eapType=6 GTC（Generic Token Card），eapType=13 EAP-TLS，eapType=21 EAP-TTLS，eapType=25 EAP-PEAP，
   *     eapType=254 Expanded Types，eapType=255 Experimental use。
   * @param { Callback<EapData> } callback - 回调函数，返回指定的eapCode+eapType的报文。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 33200006 - Invalid net type
   * @throws { BusinessError } 33200007 - Invalid eap code
   * @throws { BusinessError } 33200008 - Invalid eap type
   * @throws { BusinessError } 33200009 - netmanager stop
   * @throws { BusinessError } 33200099 - internal error
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   * @since 26.0.1 static
   */
  function regCustomEapHandler(netType: int, eapCode: int, eapType: int, callback: Callback<EapData>): void;

  /**
   * 用于指定需要取消定制化处理的EAP报文类型和对应的处理callback。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { int } netType - 网络类型，取值为1或2。
   *     <br>netType=1表示WLAN，netType=2表示以太网。
   * @param { int } eapCode - 需要进行定制的EAP code，取值为1、2、3、4 。
   *     <br>code=1 Request、 code=2 Response、 code=3 Success、 code=4 Failure。
   * @param { int } eapType - 需要进行定制处理的EAP method类型，取值范围[0, 255]。
   *     <br>常用取值包括：eapType=1 Identity，eapType=2 Notification，eapType=3 NAK，eapType=4 MD5-Challenge，eapType=5 OTP（One-
   *     Time Password），eapType=6 GTC（Generic Token Card），eapType=13 EAP-TLS，eapType=21 EAP-TTLS，eapType=25 EAP-PEAP，
   *     eapType=254 Expanded Types，eapType=255 Experimental use。
   * @param { Callback<EapData> } callback - 回调函数，返回指定的eapCode+eapType的报文。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 33200006 - Invalid net type
   * @throws { BusinessError } 33200007 - Invalid eap code
   * @throws { BusinessError } 33200008 - Invalid eap type
   * @throws { BusinessError } 33200009 - netmanager stop
   * @throws { BusinessError } 33200099 - internal error
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   * @since 26.0.1 static
   */
  function unregCustomEapHandler(netType:int, eapCode: int, eapType: int, callback: Callback<EapData>): void;

  /**
   * 该接口用于通知系统已完成该步定制化处理。
   * 
   * > **说明**:
   * >
   * > - 若用于处理收EAP数据包(rx)时的callback，传给系统的EAP数据需要剥离服务器添加的定制部分。
   * >
   * > - 若用于处理发EAP数据包(tx)时的callback，传给系统的EAP数据为经过添加定制部分后的EAP数据。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { CustomResult } result - 定制化判定结果。
   * @param { EapData } data - 经过定制化的EAP数据。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 33200004 - Invalid result
   * @throws { BusinessError } 33200005 - Invalid size of eap data
   * @throws { BusinessError } 33200009 - netmanager stop
   * @throws { BusinessError } 33200099 - internal error
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   * @since 26.0.1 static
   */
  function replyCustomEapData(result: CustomResult, data: EapData): void;

  /**
   * 该接口用于指定一个以太网卡发起EAP认证。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { int } netId - 以太网卡Id。（传入默认参数-1，系统将自动匹配以太网卡发起EAP认证）
   * @param { EthEapProfile } profile - EAP配置信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 33200001 - Invalid netId
   * @throws { BusinessError } 33200003 - Invalid profile
   * @throws { BusinessError } 33200009 - netmanager stop
   * @throws { BusinessError } 33200010 - invalid eth state
   * @throws { BusinessError } 33200099 - internal error
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   * @since 26.0.1 static
   */
  function startEthEap(netId: int, profile: EthEapProfile): void;

  /**
   * 该接口用于指定一个以太网卡从EAP已认证状态退出。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { int } netId - 以太网卡Id。（传入默认参数-1，系统将自动匹配以太网卡发起EAP认证）
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 33200001 - Invalid netId
   * @throws { BusinessError } 33200002 - Log off fail
   * @throws { BusinessError } 33200009 - netmanager stop
   * @throws { BusinessError } 33200010 - invalid eth state
   * @throws { BusinessError } 33200099 - internal error
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   * @since 26.0.1 static
   */
  function logOffEthEap(netId: int): void;

  /**
   * EAP信息。
   * 
   * ​**系统能力**​：SystemCapability.Communication.NetManager.Eap
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   * @since 26.0.1 static
   */
  interface EapData {
    /**
     * 伪随机数，用于关联处理前后的EAP数据。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    msgId: int;
    /**
     * 从EAP header开始的EAP原始数据，未加密。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    eapBuffer: Uint8Array;
    /**
     * 数据长度。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    bufferLen: int;
  }

  /**
   * 表示EAP认证处理结果的枚举。
   * 
   * ​**系统能力**​：SystemCapability.Communication.NetManager.Eap
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   * @since 26.0.1 static
   */
  enum CustomResult {
    /**
     * 认证流程结束，结果失败。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    RESULT_FAIL = 0,

    /**
     * 本部分校验成功，校验下一步骤
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    RESULT_NEXT = 1,

    /**
     * 校验结束且成功
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    RESULT_FINISH = 2
  }

  /**
   * 表示EAP认证方式的枚举。
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   * @since 26.0.1 static
   */
  enum EapMethod {
    /**
     * 不指定。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    EAP_NONE = 0,

    /**
     * Protected extensible authentication protocol
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    EAP_PEAP = 1,

    /**
     * Transport layer security
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    EAP_TLS = 2,
  
    /**
     * Tunneled transport layer security
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    EAP_TTLS = 3,

    /**
     * Password
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    EAP_PWD = 4,

    /**
     * Subscriber identity module
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    EAP_SIM = 5,

    /**
     * Authentication and key agreement
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    EAP_AKA = 6,

    /**
     * AKA prime
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    EAP_AKA_PRIME = 7,

    /**
     * Unauth TLS
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    EAP_UNAUTH_TLS = 8
  }

  /**
   * 表示第二阶段认证方式的枚举。
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   * @since 26.0.1 static
   */
  enum Phase2Method {
    /**
     * 不指定。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    PHASE2_NONE = 0,

    /**
     * Password authentication protocol
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    PHASE2_PAP = 1,

    /**
     * Microsoft challenge handshake authentication protocol
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    PHASE2_MSCHAP = 2,

    /**
     * Microsoft challenge handshake authentication protocol version 2
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    PHASE2_MSCHAPV2 = 3,

    /**
     * Generic token card
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    PHASE2_GTC = 4,

    /**
     * Subscriber identity module
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    PHASE2_SIM = 5,

    /**
     * Authentication and key agreement
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    PHASE2_AKA = 6,

    /**
     * AKA prime
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    PHASE2_AKA_PRIME = 7
  }

  /**
   * 可扩展身份验证协议配置信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   * @since 26.0.1 static
   */
  interface EthEapProfile {
    /**
     * AP认证方式。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    eapMethod: EapMethod;

    /**
     * 第二阶段认证方式。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    phase2Method: Phase2Method;

    /**
     * 身份信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    identity: string;

    /**
     * 匿名身份。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    anonymousIdentity: string;

    /**
     * Password
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    password: string;

    /**
     * CA证书别名。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    caCertAliases: string;

    /**
     * CA证书路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    caPath: string;

    /**
     * 客户端证书别名。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    clientCertAliases: string;

    /**
     * CA证书内容。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    certEntry: Uint8Array;

    /**
     * CA证书密码。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    certPassword: string;

    /**
     * 替代主题匹配。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    altSubjectMatch: string;

    /**
     * 域后缀匹配。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    domainSuffixMatch: string;

    /**
     * 通行证凭证的领域。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    realm: string;

    /**
     * 公共陆地移动网的直通凭证提供商。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    plmn: string;

    /**
     * SIM卡的子ID。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     * @since 26.0.1 static
     */
    eapSubId: int;
  }
  /**
   * 表示802.1X以太网EAP配置，包括EAP配置文件和功能切换。
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface EthEapConfig {  
    /**
     * EAP配置文件信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    profile: EthEapProfile;

    /**
     * 802.1X特性是否使能。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    enabled: boolean;

    /**
     * 是否在连接网线或启动时自动启动身份验证。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    autoAuth: boolean;

    /**
     * 配置是否被锁定。锁定时，除解锁外，其他修改均被拒绝。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    locked: boolean;
  }

  /**
   * 枚举802.1X EAP身份验证状态。
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  enum EthEapState {  
    /**
     * 空闲：未发起鉴权。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    STATE_IDLE = 0,

    /**
     * 正在认证：802.1X认证正在进行中。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    STATE_AUTHENTICATING = 1,

    /**
     * Authenticated：鉴权成功。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    STATE_AUTHENTICATED = 2,

    /**
     * 失败：已达到最大重试计数。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    STATE_FAILED = 3,

    /**
     * 重试：等待下一次重试。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    STATE_RETRYING = 4
  }

  /**
   * 表示通过stateChange回调传递的802.1X EAP身份验证状态信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface EthEapStateInfo {  
    /**
     * 当前鉴权状态。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    state: EthEapState;

    /**
     * 当前重试计数（成功时重置为0）。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    retryCount: int;

    /**
     * 补充消息，如失败原因等。成功时为空。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    message?: string;
  }

  /**
   * 设置以太网的802.1X EAP配置。配置是持久化的，并且是加密的。
   *
   * 任何字段更改都会触发一个自动身份验证周期，除非该功能被禁用或
   * 认证是由企业应用占用的(那么config只有
   * 企业应用保持控制。身份验证结果通过
   * stateChange回调，而不是通过此API的返回。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_EAP
   * @param { EthEapConfig } config - 要设置的802.1X EAP配置。敏感字段(密码、certPassword、
   *     作为空字符串/空数组传递的certEntry表示“保留原始值”。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function setEthEapConfig(config: EthEapConfig): void;

  /**
   * 获取以太网的802.1X EAP配置。敏感字段（密码、certPassword、certEntry）
   * 总是返回空。如果尚未存储任何配置，则以**null**进行解析。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_EAP
   * @returns { Promise<EthEapConfig> } Promise用于返回${EthEapConfig}
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function getEthEapConfig(): Promise<EthEapConfig>;

  /**
   * 删除保留的802.1X EAP配置并停止任何正在进行的自动身份验证。
   * 幂等性：即使没有存储任何配置，也能成功解析。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_EAP
   * @returns { Promise<void> } 当配置被删除时解析的Promise。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function deleteEthEapConfig(): Promise<void>;

  /**
   * 查询当前802.1X EAP认证状态信息。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_EAP
   * @returns { EthEapStateInfo } 当前身份验证状态、重试次数和补充消息。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function getEthEapStateInfo(): EthEapStateInfo;

  /**
   * 订阅802.1X EAP认证状态变化。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_EAP
   * @param { Callback<EthEapStateInfo> } callback - 鉴权状态改变时调用的回调。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function onStateChange(callback: Callback<EthEapStateInfo>): void;

  /**
   * 取消订阅802.1X EAP身份验证状态更改。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_EAP
   * @param { Callback<EthEapStateInfo> } [callback] - 移除的回调。如果省略，则删除所有回调。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function offStateChange(callback?: Callback<EthEapStateInfo>): void;

  /**
   * 枚举以太网802.1X EAP认证的手动连接动作。
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  enum EthEapConnectAction {  
    /**
     * 使用保存的配置重新触发身份验证。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    ACTION_CONNECT = 0,
    /**
     * 停止自动身份验证并注销底层802.1X身份验证。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    ACTION_DISCONNECT = 1
  }

  /**
   * 手动触发或断开以太网的802.1X EAP认证。
   *
   * 当**action**为**Action_CONNECT***时，将使用保存的
   * 配置(自动身份验证触发器的手动对应项；如果没有配置，则失败
   * 已存储)。如果鉴权被企业应用占用，则该接口
   * 不会中断它；结果通过stateChange回调传递。
   * 当**action**为**Action_DISCONNECT**时，自动身份验证将停止，并且底层
   * 802.1X认证已注销。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_EAP
   * @param { EthEapConnectAction } action - 手动连接动作：重新触发认证
   *     （**Action_CONNECT**）或断开连接(**ACTION_DISCONNECT**)。
   * @returns { Promise<void> } 不返回任何值的Promise。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function connect(action: EthEapConnectAction): Promise<void>;
}

export default eap;
