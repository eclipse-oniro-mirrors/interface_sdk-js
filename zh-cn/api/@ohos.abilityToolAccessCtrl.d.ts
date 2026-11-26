/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
 * @file 工具访问控制
 * @kit AbilityKit
 */

import { Permissions }  from './permissions';
import abilityAccessCtrl from './@ohos.abilityAccessCtrl';
/**
 * 工具访问控制模块提供工具（CLI命令和API接口）的权限管理能力，包括权限查询、用户授权、远程授权等功能。
 * 当需要查询CLI命令或API接口的权限状态、进行工具权限授权、或管理远程设备的授权时，使用本模块接口。
 *
 * @syscap SystemCapability.Security.Asset
 * @FaAndStageModel
 * @since 26.0.0 dynamiconly
 */
declare namespace abilityToolAccessCtrl {
  /**
   * 表示CLI（Command Line Interface，命令行界面）命令信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface CliCmdInfo {
    /**
     * CLI命令名称，用于指定CLI命令。
     * 需传入系统支持的CLI命令名称，如'ohos-batteryManager'。长度不超过512字节，不能为空。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    cliCmdName: string;

    /**
     * CLI子命令名称，用于指定CLI子命令。
     * 需传入指定CLI命令支持的子命令名称，如'total-energy'。长度不超过512字节，可为空字符串。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    subCliCmdName: string;
  }

  /**
   * 表示远程控制交互参数。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.1 dynamiconly
   */
  interface RemoteControlParams {
    /**
     * 防重放挑战值，用于防止重放攻击。
     * 合法的挑战值由generateControlledDevicePackage接口获取。
     * 默认值：空字符串。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    challenge?: string;
    /**
     * 可信设备的远程控制凭证，用于远程控制场景同账号下可信设备的身份验证。
     * 默认值：空字符串。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    remoteControlTicket?: string;
    /**
     * 被控设备的设备名称。
     * 默认值：空字符串。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    controlledDeviceName?: string;
    /**
     * 主控设备的设备名称。
     * 默认值：空字符串。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    controllerDeviceName?: string;
    /**
     * 签名认证需要的额外信息，如调用方包名、模块名等。
     * 默认值：空字符串。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    signVerifyMsg?: string;
  }
  /**
   * 表示权限查询信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface PermissionQuery {

    /**
     * 操作信息列表，指定待查询的CLI命令或API接口。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    operationInfo: OperationInfo[];

    /**
     * 是否需要生成ticket用于本地或远程授权。true表示需要生成ticket，false表示不需要。
     * 当设置为true时，仅在本次查询结果通过的情况下才会返回ticket信息。
     * 默认值：false
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    needTicket?: boolean;

    /**
     * ticket过期时间，单位为毫秒。需配合needTicket参数使用，仅当needTicket为true时本参数生效。
     * 常规授权场景取值范围：1~60000（60秒），长时间远程授权场景取值范围：1~86400000（24小时），
     * 超过最大值将返回错误码24010000。
     * 默认值：10000
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    ticketExpireTimeMs?: long;

    /**
     * 远端设备信息，包含设备角色、设备ID、域标识等。用于远程授权场景。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    remoteInfo?: RemoteInfo;

    /**
     * 调用方进程的tokenId。当需要为其他进程查询或授权时，可指定目标进程的tokenId。
     * 如果未传入该参数，默认获取调用方进程的tokenId。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    callerTokenId?: long;

    /**
     * 域标识。如果未传入该参数，则默认使用调用方当前的域标识。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    domainId?: string;

    /**
     * 任务标识，用于智能体命令的任务身份验证。可通过generateTaskIdentity获取。
     * 默认值：空。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    taskIdentity?: TaskIdentity;
  }

  /**
   * 表示远端设备信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.1 dynamiconly
   */
  interface RemoteInfo {

    /**
     * 设备角色，表示设备是主控设备还是被控设备。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    role: Role;

    /**
     * 远端设备ID，用于唯一标识远端设备。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    remoteId: string;

    /**
     * 域标识。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    domainId: string;

    /**
     * 远程控制中的交互参数，包含防重放挑战值、远程控制凭证等信息。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    remoteControlParams?: RemoteControlParams;
  }

  /**
   * 表示操作信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface OperationInfo {
    /**
     * 操作类型，表示操作是CLI命令还是API接口。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    operationType: OperationType;

    /**
     * 操作具体信息。当operationType为CLI时，info为CliCmdInfo；当operationType为API时，info为权限名称。
     * 如果operationType和info的类型不匹配，会导致参数错误。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    info: CliCmdInfo | Permissions;
  }

  /**
   * 表示权限信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface PermissionInfo {

    /**
     * 权限名称，合法的权限名取值可在应用权限列表中查询。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permission: string;

    /**
     * 权限状态。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permissionStatus: abilityAccessCtrl.PermissionStatus;

    /**
     * 授权状态信息。
     * 该项作为出参；当PermissionInfo作为入参时，该项无需传入，若传入会被忽略。
     * 默认值：undefined。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    authStatusInfo?: AuthStatusInfo;
  }

  /**
   * 表示授权状态信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface AuthStatusInfo {
    /**
     * 授权状态。
     * 作为入参时，该项无需传入，如果传入会被忽略；作为出参时，该项返回实际的授权状态，表示权限的授权结果。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    authStatus?: AuthStatus;

    /**
     * 授权标志，用于标识权限授权的相关属性（如授权类型、授权持久性等）。
     * 作为入参时无需传入，若传入将被忽略，默认值为0；作为出参时返回实际授权标志。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    flag?: long;
  }

  /**
   * 表示权限查询结果。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface PermissionQueryResult {

    /**
     * 是否需要弹窗。true表示需要弹窗请求用户授权，false表示不需要弹窗。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    needDialog: boolean;

    /**
     * 权限状态结果列表。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permissionResults: PermissionInfo[];

    /**
     * ticket信息。
     * 当入参permissionQuery.needTicket为true且本次查询结果通过时，返回ticket信息。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    ticket?: TicketInfo;
  }

  /**
   * 表示ticket信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface TicketInfo {

    /**
     * ticket消息，用于传递授权信息、提示信息和状态描述。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    message: string;

    /**
     * 挑战值，用于验证ticket的合法性。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    challenge: string;

    /**
     * ticket字符串，用于权限验证。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    ticket: string;
  }

  /**
   * 表示远程授权包。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.1 dynamiconly
   */
  interface RemoteAuthPackage {

    /**
     * 远程消息，用于传递远程授权信息。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    remoteMessage: string;

    /**
     * 防重放挑战值，用于验证ticket的合法性。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    challenge: string;

    /**
     * ticket字符串，用于权限验证。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    ticket: string;
  }

  /**
   * 表示用户授权结果。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface UserAuthResult {

    /**
     * 权限信息列表，包含权限名称和授权状态。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permissionInfo: PermissionInfo[];

    /**
     * 对应的权限查询信息。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permissionQuery: PermissionQuery;
  }

  /**
   * 表示远程用户授权结果。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.1 dynamiconly
   */
  interface RemoteUserAuthResults {

    /**
     * 授权结果列表，包含权限名称和授权结果。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    results: RemoteUserAuthItem[];

    /**
     * 权限查询信息，用于关联授权结果与查询请求。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    permissionQuery: PermissionQuery;
  }

  /**
   * 表示远程用户授权项。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.1 dynamiconly
   */
  interface RemoteUserAuthItem {

    /**
     * 权限名称，合法的权限名取值可在应用权限列表中查询。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    permission: string;

    /**
     * 授权结果，表示权限的授权状态。
     * 支持的取值包括"DENIED"（用户未授权）、"GRANTED"（已授权）、"NOT_DETERMINED"（未操作授权）、
     * INVALID（无效权限）、RESTRICTED（限制授权）。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    authResult: string;
  }

  /**
   * 表示生成ticket的参数。各字段均为可选，未传入的字段使用默认值。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  interface TicketParams {

    /**
     * ticket过期时间，单位为毫秒。取值范围：1~60000（60秒）。
     * 默认值：10000
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    ticketExpireTimeMs?: long;
  }

  /**
   * 表示ticket查询结果。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  interface TicketQueryResult {

    /**
     * 权限状态结果列表。当用户尚未授权CLI工具所需的权限时，返回需要授权的权限列表及其状态。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    permissionResults: PermissionInfo[];

    /**
     * ticket字符串，用于权限验证。
     * 当用户已授权所有所需权限时，返回已认证的ticket；当用户尚未授权所有权限时，该项为空字符串。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    ticket: string;
  }

  /**
   * 表示授权状态枚举。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  enum AuthStatus {
    /**
     * 需要授权。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    REQUIRE_AUTH = 0,

    /**
     * 禁止授权。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    FORBIDDEN = 1,

    /**
     * 已授权。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    AUTHORIZED = 2,

    /**
     * 受系统或策略限制，当前授权被拒绝。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    RESTRICTED = 3,

    /**
     * 远程首先，不允许在远程授权场景下授予权限。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    REMOTE_RESTRICTED = 4
  }

  /**
   * 表示设备角色枚举。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.1 dynamiconly
   */
  enum Role {
    /**
     * 主控设备，发起远程控制的设备。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    CONTROLLER = 0x01,

    /**
     * 被控设备，接受远程控制指令的设备。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    CONTROLLED = 0x02
  }

  /**
   * 表示操作类型枚举。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  enum OperationType {
    /**
     * CLI命令操作。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    CLI = 0x01,

    /**
     * API接口操作。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    API = 0x02
  }

  /**
   * 表示远程授权状态枚举。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.1 dynamiconly
   */
  enum RemoteGrantStatus {
    /**
     * 启用远程授权，允许设备向远程设备授予权限。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    ENABLE = 0x01,

    /**
     * 禁用远程授权，不允许远程授权。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.1 dynamiconly
     */
    DISABLE = 0x02
  }

  /**
   * 表示应用控制权限状态枚举。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  enum ControlAppStatus {
    /**
     * 控制权限被授予。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    ALLOW = 0x01,

    /**
     * 控制权限被拒绝。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    DENY = 0x02
  }

  /**
   * 任务标识。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  interface TaskIdentity {
    /**
     * 任务属性。为JSON格式的字符串，包含taskId、taskExpireTime、executeType、allowScreenLockExecution等字段。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    taskAttributes: string;
    /**
     * 任务属性的标识信息。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    identity: string;

    /**
     * 挑战值。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    challenge: string;
  }

  /**
   * 任务执行类别。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  enum ExecuteType {
    /**
     * 即时任务，任务立即执行。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    INSTANT = 0x01,
    /**
     * 延时任务，任务在指定条件下延后执行。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    DELAYED = 0x02
  }

  /**
   * 任务标识的输入参数，包含任务ID、过期时间、执行类型等信息，用于生成任务挑战值或任务标识。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  interface TaskIdentityInfo {
    /**
     * 任务ID。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    taskId: string;
    /**
     * 任务过期时间。单位为：秒。取值范围：-1或正整数。-1表示无过期时间。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    taskExpireTime: number;
    /**
     * 任务执行类别。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    executeType: ExecuteType;
    /**
     * 任务是否允许在锁屏下执行。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    allowScreenLockExecution: boolean;
    /**
     * 可信持有物的认证凭据。长度不超过4096字节。
     * 默认值：空。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    authToken?: Uint8Array;
    /**
     * 可信持有物认证凭据的有效时长。单位为：毫秒。取值范围：(0,86400000]。
     * 默认值：600000。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    allowableDuration?: number;
  }

  /**
   * 表示应用信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  interface AppInfo {
    /**
     * 应用包名，用于唯一标识一个应用。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    bundleName: string;
    /**
     * 应用分身索引。0表示主应用，大于0表示对应的分身应用。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    index: number;
  }

  /**
   * 表示应用控制权限状态查询结果。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  interface ControlAppStatusResult {
    /**
     * 应用信息。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    appInfo: AppInfo;

    /**
     * 控制权限状态。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    status: ControlAppStatus;
  }

  /**
   * 根据指定操作查询工具权限。
   * 检查入参permissionQuery的operationInfo属性中指定的CLI命令或API接口的权限状态，
   * 返回每个操作的权限状态、授权状态以及是否需要用户弹窗。
   * 当permissionQuery.needTicket设置为true时，将生成用于远程授权的ticket。使用Promise异步回调。
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { PermissionQuery } permissionQuery - 权限查询信息，包含操作信息列表、是否需要生成ticket、远程设备信息等。
   * @returns { Promise<PermissionQueryResult> } Promise对象，返回权限查询结果，包含是否需要弹窗、权限状态信息和ticket信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 24010000 - Invalid parameter. OperationType and operationInfo do not match,
   *     specified callerTokenId does not exist, ticketExpireTime exceeds 24h, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @throws { BusinessError } 24010003 - The account is not logged in, network is unavailable, timeout, etc.
   * @throws { BusinessError } 24010006 - The requested operation is not allowed to be executed
   *     while the device is locked.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  export function requestToolPermissions(permissionQuery: PermissionQuery): Promise<PermissionQueryResult>;

  /**
   * 根据用户授权结果，为工具（CLI命令或API接口）授予权限。授权成功后，生成可用于权限验证的ticket。
   * 使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS
   * @param { UserAuthResult[] } userAuthResult - 用户授权结果列表，包含权限信息和权限查询信息。
   * @returns { Promise<TicketInfo[]> } Promise对象，返回授权成功后生成的ticket信息列表。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 24010000 - Invalid parameter. PermissionName exceeds 256 characters,
   *     permissionStatus is invalid, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @throws { BusinessError } 24010003 - The account is not logged in, network is unavailable, timeout, etc.
   * @throws { BusinessError } 24010004 - Invalid permission. A permission in permissionInfo does not exist.
   * @throws { BusinessError } 24010005 - Grant permission failed. The application specified by the tokenID is not
   *     allowed to be granted with the specified permission, the specified permission cannot be granted by user, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  export function grantToolPermissionsByUser(userAuthResult: UserAuthResult[]): Promise<TicketInfo[]>;

  /**
   * 在主控设备上，生成远程授权结果包。生成的包可以发送到被控设备上，完成完整性校验后，执行权限授权。
   * 使用Promise异步回调。
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { RemoteUserAuthResults[] } remoteUserAuthResult - 用户远程授权结果列表，包含授权结果和权限信息。
   * @returns { Promise<RemoteAuthPackage[]> } Promise对象，返回远程授权结果包列表。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 24010000 - Invalid parameter. OperationType and operationInfo do not match,
   *     specified callerTokenId does not exist, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @throws { BusinessError } 24010003 - The account is not logged in, network is unavailable, timeout, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.1 dynamiconly
   */
  export function generateControllerDevicePackage(remoteUserAuthResult: RemoteUserAuthResults[]):
    Promise<RemoteAuthPackage[]>;

  /**
   * 在被控设备上，根据权限查询列表生成远程授权请求包。生成的包可以发送到主控设备上，
   * 完成完整性校验后，发起用户授权确认。使用Promise异步回调。
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { PermissionQuery[] } permissionQuery - 权限查询列表，包含CLI和API操作信息、远程授权交互信息等。
   * @returns { Promise<RemoteAuthPackage[]> } Promise对象，返回远程授权请求包列表。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 24010000 - Invalid parameter. Permission exceeds 256 characters,
   *     specified tokenId is invalid, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @throws { BusinessError } 24010003 - The account is not logged in, network is unavailable, timeout, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.1 dynamiconly
   */
  export function generateControlledDevicePackage(permissionQuery: PermissionQuery[]): Promise<RemoteAuthPackage[]>;

  /**
   * 验证主控设备发送的远程授权结果包，检查消息凭据和远程设备信息以确保授权结果合法。
   * 使用Promise异步回调。
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { RemoteAuthPackage[] } ticketInfo - 远程授权结果包列表，包含远程消息、防重放挑战值和消息完整性凭据。
   * @param { RemoteInfo } remoteInfo - 远端设备信息，包含设备角色、设备ID、域标识等。
   * @returns { Promise<boolean[]> } Promise对象，返回true表示验证通过；返回false表示验证失败。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 24010000 - Invalid parameter. Format of ticketInfo or remoteInfo is invalid.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @throws { BusinessError } 24010003 - The account is not logged in, network is unavailable, timeout, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.1 dynamiconly
   */
  export function verifyControllerDevicePackage(ticketInfo: RemoteAuthPackage[], remoteInfo: RemoteInfo):
    Promise<boolean[]>;

  /**
   * 验证被控设备发送的授权请求包，检查消息凭据以确保授权请求合法。使用Promise异步回调。
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { RemoteAuthPackage[] } ticketInfo - 远程授权请求包列表，包含远程消息、防重放挑战值和消息完整性凭据。
   * @returns { Promise<boolean[]> } Promise对象，返回true表示验证通过；返回false表示验证失败。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 24010000 - Invalid parameter. Format of ticketInfo is invalid.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @throws { BusinessError } 24010003 - The account is not logged in, network is unavailable, timeout, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.1 dynamiconly
   */
  export function verifyControlledDevicePackage(ticketInfo: RemoteAuthPackage[]): Promise<boolean[]>;

  /**
   * 查询远程授权开关的使能状态。启用时设备可以发起远程授权，禁用时不允许远程授权。
   * 使用Promise异步回调。
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @returns { Promise<RemoteGrantStatus> } Promise对象，返回远程授权开关状态。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.1 dynamiconly
   */
  export function getRemoteGrantStatus(): Promise<RemoteGrantStatus>;

  /**
   * 更新远程授权开关状态，开启或关闭远程授权使能开关。
   * 启用时设备可以发起远程授权，禁用时不允许远程授权。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS
   * @param { RemoteGrantStatus } remoteGrantStatus - 要设置的远程授权状态。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 24010000 - Invalid parameter. RemoteGrantStatus is invalid.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.1 dynamiconly
   */
  export function updateRemoteGrantStatus(remoteGrantStatus: RemoteGrantStatus): Promise<void>;

  /**
   * 获取CLI工具的执行认证ticket。
   * 传入CLI命令列表，如果用户尚未授权CLI工具所需的权限，返回需要授权的权限列表及其状态；
   * 如果用户已授权所有所需权限，返回已认证的ticket。使用Promise异步回调。
   *
   * @permission ohos.permission.EXEC_PUBLIC_CLI_TOOL
   * @param { CliCmdInfo[] } cliCmdInfos - CLI命令列表，指定需要获取执行认证ticket的CLI命令及其子命令。数组长度不超过300。
   * @param { TicketParams } ticketParams - 生成ticket的可选参数，包含ticket过期时间等。
   * @returns { Promise<TicketQueryResult> } Promise对象，返回ticket查询结果，包含权限状态信息和ticket字符串。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 24010000 - Invalid parameter. TicketExpireTime exceeds 60s, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @throws { BusinessError } 24010006 - The requested operation is not allowed to be executed while the device
   *     is locked.
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function requestToolTicket(cliCmdInfos: CliCmdInfo[], ticketParams: TicketParams): Promise<TicketQueryResult>;

  /**
   * 为智能体命令生成任务标识。
   * 该函数根据调用者身份和基本任务属性（例如任务ID和任务过期时间）生成该标识。使用Promise异步回调。
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { TaskIdentityInfo } taskIdentityInfo - 要生成任务标识的任务信息。
   * @returns { Promise<TaskIdentity> } Promise对象，返回生成的任务标识（TaskIdentity），包含任务属性、标识信息和挑战值。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 24010000 - Invalid parameter. TaskId is empty, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function generateTaskIdentity(taskIdentityInfo: TaskIdentityInfo): Promise<TaskIdentity>;

  /**
   * 批量撤销智能体命令的任务标识，并删除任务属性的本地缓存。使用Promise异步回调。
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { string[] } taskId - 待撤销的任务ID列表。列表的最大长度为100。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 24010000 - Invalid parameter. Task ID is invalid, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function revokeTaskIdentity(taskId: string[]): Promise<void>;

  /**
   * 查询指定应用的控制权限状态。使用Promise异步回调。
   * 检查输入列表中的每个应用是否被允许或拒绝被外部工具控制。结果列表与输入列表顺序一一对应。
   * 使用Promise异步回调。
   *
   * @permission ohos.permission.CONTROL_DEVICE
   * @param { AppInfo[] } appInfo - 应用信息列表，指定需要查询控制权限状态的应用。
   * @returns { Promise<ControlAppStatusResult[]> } Promise对象，返回控制权限状态结果列表，与输入列表顺序一一对应。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 24010000 - Invalid parameter. appInfo is empty, bundleName is invalid, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function queryControlAppStatus(appInfo: AppInfo[]): Promise<ControlAppStatusResult[]>;

  /**
   * 向用户请求指定应用的控制权限。
   * 弹出用户对话框，获取用户对每个应用的控制授权决定。返回结果反映用户对每个应用的允许或拒绝决策，
   * 与输入列表顺序一一对应。使用Promise异步回调。
   *
   * @permission ohos.permission.CONTROL_DEVICE
   * @param { Context } context - 应用上下文。
   * @param { AppInfo[] } appInfo - 应用信息列表，指定需要请求控制权限的应用。
   * @returns { Promise<ControlAppStatusResult[]> } Promise对象，返回控制权限状态结果列表，与输入列表顺序一一对应。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 24010000 - Invalid parameter. context is invalid, appInfo is empty,
   *     bundleName is invalid, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function requestControlAppPermissionFromUser(context: Context, appInfo: AppInfo[]):
    Promise<ControlAppStatusResult[]>;
  /**
   * 基于任务身份信息生成挑战值。使用Promise异步回调。
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { TaskIdentityInfo } taskIdentityInfo - 用于生成挑战值的任务身份信息。
   * @returns { Promise<Uint8Array> } Promise对象，返回Uint8Array格式的挑战值。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 24010000 - Invalid parameter. TaskId is empty, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function generateTaskChallenge(taskIdentityInfo: TaskIdentityInfo): Promise<Uint8Array>;

  /**
   * 注销控制组件模拟点击结果回调。用于在业务结束时释放回调资源。
   *
   * @permission ohos.permission.CONTROL_DEVICE
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function unregisterControlComponentResultCallback(): void;

  /**
   * 注册控制组件模拟点击结果回调。
   * 注册后，控制组件每次模拟点击的结果通过该回调返回。
   * 同一进程内仅支持注册一个回调，重复注册将覆盖先前注册的回调。
   *
   * @permission ohos.permission.CONTROL_DEVICE
   * @param { ResultCallback } callback - 用于接收模拟点击操作结果的回调函数。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 24010000 - Invalid parameter. callback is invalid.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function registerControlComponentResultCallback(callback: ResultCallback): void;

  /**
   * 用于接收每次模拟点击操作结果的回调函数类型。
   *
   * @param { ControlComponentClickResult } result - 用于回调业务方模拟点击结果。
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  type ResultCallback = (result: ControlComponentClickResult) => void;

  /**
   * 模拟点击操作结果。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  interface ControlComponentClickResult {
    /**
     * 模拟点击操作结果码。0表示成功，其他表示失败。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    code: number;

    /**
     * 模拟点击的目标应用信息。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    appInfo: AppInfo;

    /**
     * 被模拟点击的组件ID。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    componentId: string;

    /**
     * 模拟点击是否被允许。true表示允许， false表示被拒绝。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    isAllowed: boolean;

    /**
     * 模拟点击操作结果的原因描述。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    reason: string;
  }
}

export default abilityToolAccessCtrl;