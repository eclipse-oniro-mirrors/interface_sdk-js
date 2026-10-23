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
 * @file
 * @kit MechanicKit
 */

import type { Callback } from './@ohos.base';

/**
 * 提供与本设备连接的机械设备的控制和交互能力。
 * 包括连接管理、控制和监控功能
 *
 * @namespace mechanicManager
 * @syscap SystemCapability.Mechanic.Core
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace mechanicManager {

  /**
   * 注册连接状态变化事件的回调监听，等待连接状态变化。使用callback异步回调。
   * @param { 'attachStateChange' } type Event type.
   * @param { Callback<AttachStateChangeInfo> } callback Callback used to return the state change.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   */
  function on(type: 'attachStateChange', callback: Callback<AttachStateChangeInfo>): void;

  /**
   * 注册连接状态变化事件的回调监听，等待连接状态变化。使用callback异步回调。
   * @param { Callback<AttachStateChangeInfo> } callback Callback used to return the state change.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 23 static
   */
  function onAttachStateChange(callback: Callback<AttachStateChangeInfo>): void;

  /**
   * 取消注册连接状态变化事件的回调监听。使用callback异步回调。
   * @param { 'attachStateChange' } type Event type.
   * @param { Callback<AttachStateChangeInfo> } [callback] Callback used to return the state change.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   */
  function off(type: 'attachStateChange', callback?: Callback<AttachStateChangeInfo>): void;

  /**
   * 取消注册连接状态变化事件的回调监听。使用callback异步回调。
   * @param { Callback<AttachStateChangeInfo> } [callback] Callback used to return the state change.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 23 static
   */
  function offAttachStateChange(callback?: Callback<AttachStateChangeInfo>): void;

  /**
   * 获取已连接的机械设备列表
   * @returns { MechInfo[] } 返回已连接的机械设备列表
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function getAttachedMechDevices(): MechInfo[];

  /**
   * 设置用户操作
   *
   * @permission ohos.permission.CONNECT_MECHANIC_HARDWARE
   * @param { Operation } operation 操作类型
   * @param { string } mac MAC address.
   * @param { string } params Operation parameters.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setUserOperation(operation: Operation, mac: string, params: string): void;

  /**
   * 启用或禁用摄像机跟踪
   * @param { boolean } isEnabled 是否启用摄像机跟踪
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function setCameraTrackingEnabled(isEnabled: boolean): void;

  /**
   * 获取相机跟踪状态
   * @returns { boolean } 返回是否启用摄像机跟踪
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function getCameraTrackingEnabled(): boolean;

  /**
   * 注册跟踪状态变化事件的回调监听。使用callback异步回调。
   * @param { 'trackingStateChange' } type Event type.
   * @param { Callback<TrackingEventInfo> } callback Callback used to return the tracking event information.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   */
  function on(type: 'trackingStateChange', callback: Callback<TrackingEventInfo>): void;

  /**
   * 注册跟踪状态变化事件的回调监听。使用callback异步回调。
   * @param { Callback<TrackingEventInfo> } callback Callback used to return the tracking event information.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 23 static
   */
  function onTrackingStateChange(callback: Callback<TrackingEventInfo>): void;

  /**
   * 设置相机跟踪布局
   * @param { 'trackingStateChange' } type Event type.
   * @param { Callback<TrackingEventInfo> } [callback] Callback used to return the tracking event information.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   */
  function off(type: 'trackingStateChange', callback?: Callback<TrackingEventInfo>): void;

  /**
   * 设置相机跟踪布局
   * @param { Callback<TrackingEventInfo> } [callback] Callback used to return the tracking event information.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 23 static
   */
  function offTrackingStateChange(callback?: Callback<TrackingEventInfo>): void;

  /**
   * 设置相机跟踪布局
   * @param { CameraTrackingLayout } trackingLayout 跟踪布局
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setCameraTrackingLayout(trackingLayout: CameraTrackingLayout): void;

  /**
   * 获取当前摄像头跟踪布局
   * @returns { CameraTrackingLayout } 返回当前布局
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function getCameraTrackingLayout(): CameraTrackingLayout;

  /**
   * 将机械设备旋转到相对角度
   * @param { int } mechId ID of the mechanical device.
   * @param { RotationAngles } angles Relative angles.
   * @param { int } duration Rotation duration. Unit: millisecond.
   * @returns { Promise<Result> } Promise that return the execution result.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function rotate(mechId: int, angles: RotationAngles, duration: int): Promise<Result>;

  /**
   * 将机械设备旋转到绝对角度
   * @param { int } mechId 机械设备ID
   * @param { EulerAngles } angles 绝对角度位置
   * @param { int } duration 执行时间
   * @returns { Promise<Result> } 返回执行结果
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function rotateToEulerAngles(mechId: int, angles: EulerAngles, duration: int): Promise<Result>;

  /**
   * Obtains the maximum continuous rotation duration of a mechanical device.
   *
   * @param { int } mechId 机械设备ID
   * @returns { int } Maximum rotation duration. Unit: millisecond.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getMaxRotationTime(mechId: int): int;

  /**
   * Obtains the maximum rotation speed of a mechanical device.
   *
   * @param { int } mechId 机械设备ID
   * @returns { RotationSpeed } 返回最大速度，只返回速度的绝对值
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getMaxRotationSpeed(mechId: int): RotationSpeed;

  /**
   * 以指定的速度旋转机械设备
   * @param { int } mechId 机械设备ID
   * @param { RotationSpeed } speed 旋转速度
   * @param { int } duration 执行时间
   * @returns { Promise<Result> } 返回执行结果
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function rotateBySpeed(mechId: int, speed: RotationSpeed, duration: int): Promise<Result>;

  /**
   * 停止转动
   * @param { int } mechId 机械设备ID
   * @returns { Promise<void> } 返回操作结果
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function stopMoving(mechId: int): Promise<void>;

  /**
   * 获取机械设备的当前角度
   * @param { int } mechId 机械设备ID
   * @returns { EulerAngles } 返回当前角度
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getCurrentAngles(mechId: int): EulerAngles;

  /**
   * Obtains the maximum rotation angles relative to the reference point for the specified mechanical device.
   *
   * @param { int } mechId 机械设备ID
   * @returns { RotationLimits } 最大旋转角度
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getRotationLimits(mechId: int): RotationLimits;

  /**
   * 获取当前转轴状态
   * @param { int } mechId 机械设备ID
   * @returns { RotationAxesStatus } Rotation axis status.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getRotationAxesStatus(mechId: int): RotationAxesStatus;


  /**
   * 注册旋转轴状态变化事件的回调监听。使用callback异步回调。
   *
   * @param { 'rotationAxesStatusChange' } type - Event type.
   * @param { Callback<RotationAxesStateChangeInfo> } callback - Rotate axis state changes callback.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   */
  function on(type: 'rotationAxesStatusChange', callback: Callback<RotationAxesStateChangeInfo>): void;

  /**
   * 注册旋转轴状态变化事件的回调监听。使用callback异步回调。
   *
   * @param { Callback<RotationAxesStateChangeInfo> } callback - Rotate axis state changes callback.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 23 static
   */
  function onRotationAxesStatusChange(callback: Callback<RotationAxesStateChangeInfo>): void;

  /**
   * 取消注册旋转轴状态变化事件的回调监听。使用callback异步回调。
   *
   * @param { 'rotationAxesStatusChange' } type - Event type.
   * @param { Callback<RotationAxesStateChangeInfo> } [callback] - Rotate axis state changes callback.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   */
  function off(type: 'rotationAxesStatusChange', callback?: Callback<RotationAxesStateChangeInfo>): void;

  /**
   * 取消注册旋转轴状态变化事件的回调监听。使用callback异步回调。
   *
   * @param { Callback<RotationAxesStateChangeInfo> } [callback] - Rotate axis state changes callback.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 23 static
   */
  function offRotationAxesStatusChange(callback?: Callback<RotationAxesStateChangeInfo>): void;

  /**
   * 旋转机械体一周搜索目标。使用Promise异步回调。
   *
   * @param { TargetInfo } target - Target infomation.
   * @param { SearchParams } params - Parameters to use when searching.
   * @returns { Promise<SearchResult> } Promise that return the Search result.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @throws { BusinessError } 33300004 - Camera not opened.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function searchTarget(target: TargetInfo, params: SearchParams): Promise<SearchResult>;

  /**
   * 以特定参数移动一个具身设备
   *
   * @param { int } mechId - 具身设备ID。
   *     <br>取值限定为整数。
   * @param { MoveParams } params - 移动参数。
   * @returns { Promise<Result> } 202 - 非系统应用
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function move(mechId: int, params: MoveParams): Promise<Result>;

  /**
   * 以特定速度移动一个具身设备
   *
   * @param { int } mechId - 具身设备ID。
   *     <br>取值限定为整数。
   * @param { SpeedParams } params - 移动参数。
   * @param { int } duration - 移动时长，单位ms。
   *     <br>取值限定为整数。
   * @returns { Promise<Result> } 202 - 非系统应用
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function moveBySpeed(mechId: int, params: SpeedParams, duration: int): Promise<Result>;

  /**
   * 以固定速度原地旋转
   *
   * @param { int } mechId - 具身设备ID。
   *     <br>取值限定为整数。
   * @param { double } angleSpeed - 角速度。
   * @param { int } duration - 转动时长，单位ms。
   *     <br>取值限定为整数。
   * @returns { Promise<Result> } 202 - 非系统应用
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function turnBySpeed(mechId: int, angleSpeed: double, duration: int): Promise<Result>;

  /**
   * 判断是否支持某个动作
   *
   * @param { int } mechId - 具身设备ID。
   *     <br>取值限定为整数。
   * @param { ActionType } actionType - 动作序列类型。
   * @returns { boolean } 是否支持该特定动作
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function isSupportAction(mechId: int, actionType: ActionType): boolean;

  /**
   * 执行一个动作序列
   *
   * @param { int } mechId - 具身设备ID。
   *     <br>取值限定为整数。
   * @param { ActionType } actionType - 动作序列类型。
   * @returns { Promise<Result> } 202 - 非系统应用
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function doAction(mechId: int, actionType: ActionType): Promise<Result>;

  /**
   * 订阅具身设备事件回调
   *
   * @param { MechEventType[] } events - 订阅的事件列表。
   * @param { Callback<MechEvent> } callback - 事件回调函数。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function subscribe(events: MechEventType[], callback: Callback<MechEvent>): void;

  /**
   * 取消事件注册
   *
   * @param { MechEventType[] } events - 取消注册的事件列表。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function unSubscribe(events: MechEventType[]): void;

  /**
   * 判断当前设备是否支持某类设备的具身控制
   *
   * @param { MechDeviceType } [mechDeviceType]  - 关联的设备类型
   *     <br>默认值:如果未提供该参数，则代表所有类型设备，只要支持其中一种以上则返回支持
   * @returns { boolean } 当前设备是否支持某类设备的机械体设备控制。true表示支持，false表示不支持。
   * @syscap SystemCapability.Mechanic.Core
   * @since 26.0.0 dynamic&static
   */
  function isControlSupported(mechDeviceType?: MechDeviceType): boolean;

  /**
   * 基于地址连接设备
   *
   * @permission ohos.permission.CONNECT_MECHANIC_HARDWARE
   * @param { AddressInfo } addrInfo - 地址信息。
   * @param { ConnectParam } params - 操作参数。
   * @returns { Promise<AttachStateChangeInfo> } Promise used to return the attach state change information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function connectDevice(addrInfo: AddressInfo, params: ConnectParam): Promise<AttachStateChangeInfo>;

  /**
   * 基于具身设备ID断开设备
   *
   * @permission ohos.permission.CONNECT_MECHANIC_HARDWARE
   * @param { int } mechId - 具身设备ID。
   *     <br>取值限定为整数。
   * @returns { Promise<Result> } Promise used to return the execution result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function disconnectDevice(mechId: int): Promise<Result>;

  /**
   * 订阅目标设备的电池电量变化信息
   *
   * @param { int } mechId - 需要订阅的设备id。
   *     <br>取值限定为整数。
   * @param { Callback<BatteryLevelInfo> } callback - 电池电量变化的回调函数。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function onBatteryLevelChange(mechId: int, callback: Callback<BatteryLevelInfo>): void;

  /**
   * 取消订阅电池电量变化信息
   *
   * @param { int } mechId - ID of the mechanical device.
   * @param { Callback<BatteryLevelInfo> } [callback] - Callback function that returns the current battery level.
   *      <br>If not specified, all callbacks registered for this mechId will be removed.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function offBatteryLevelChange(mechId: int, callback?: Callback<BatteryLevelInfo>): void;

  /**
   * 获取对应的设备吸附状态
   *
   * @param { int } mechId - 机械体设备ID。
   *     <br>取值限定为整数。
   * @returns { AdsorbState } 返回机械体设备是否被吸附
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getDeviceAdsorbState(mechId: int): AdsorbState;

  /**
   * 机械设备信息
   * @typedef MechInfo
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export interface MechInfo {
    /**
     * 机械设备ID
     *
     * @type { int }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    mechId: int;


    /**
     * 机械设备类型
     *
     *
     * @type { MechDeviceType }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    mechDeviceType: MechDeviceType;

    /**
     * 机械设备名称
     * @type { string }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    mechName: string;
  }


  /**
   * 相对当前位置的旋转角度
   * @typedef RotationAngles
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface RotationAngles {
    /**
     * 偏航角，范围从-2π到2*π，以弧度为单位。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yaw?: double;

    /**
     * 滚动角度，范围从-2π到2*π，以弧度为单位。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    roll?: double;

    /**
     * 俯仰角，范围从-2π到2*π，以弧度为单位。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pitch?: double;
  }

  /**
   * 相对于初始位置的绝对欧拉角
   *
   * @typedef EulerAngles
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface EulerAngles {
    /**
     * 偏航角，范围从-π到π，以弧度为单位。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yaw?: double;

    /**
     * 滚动角，范围从-π到π，以弧度为单位。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    roll?: double;

    /**
     * 俯仰角，范围从-π到π，以弧度为单位。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pitch?: double;
  }

  /**
   * 转速，负值表示顺时针旋转。正值表示逆时针旋转。
   * @typedef RotationSpeed
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface RotationSpeed {
    /**
     * 偏航速度，单位为弧度每秒。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yawSpeed?: double;

    /**
     * 滚动速度，单位为弧度每秒。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    rollSpeed?: double;

    /**
     * 俯仰速度，单位为弧度每秒。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pitchSpeed?: double;
  }


  /**
   * 相对于参考点的旋转角度限制
   * @typedef RotationLimits
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface RotationLimits {
    /**
     * 最大偏航旋转角度（负方向），范围为[-2*Math.PI， 0]，以弧度为单位
     * 如果值小于或等于 -2*Math.PI，则没有限制。
     * @type { double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    negativeYawMax: double;

    /**
     * 最大偏航旋转角度（正方向），范围为[0， 2*Math.PI]，以弧度为单位。
     * 如果值大于或等于 2*Math.PI，则没有限制。
     * @type { double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    positiveYawMax: double;

    /**
     * 最大横滚旋转角度（负方向），范围为[-2*Math.PI, 0]，以弧度为单位。
     * 如果值小于或等于 -2*Math.PI，则没有限制。
     * @type { double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    negativeRollMax: double;

    /**
     * 最大横滚旋转角度（正方向），范围为[0， 2*Math.PI]，以弧度为单位。
     * 如果值大于或等于 2*Math.PI，则没有限制。
     * @type { double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    positiveRollMax: double;

    /**
     * 最大俯仰旋转角度（负方向），范围为[-2*Math.PI， 0]，以弧度为单位。
     * 如果值小于或等于 -2*Math.PI，则没有限制。
     * @type { double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    negativePitchMax: double;

    /**
     * 最大俯仰旋转角度（正方向），范围为[0， 2*Math.PI]，以弧度为单位。
     * 如果值大于或等于 2*Math.PI，则没有限制。
     * @type { double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    positivePitchMax: double;
  }

  /**
   * 旋转轴状态
   *
   * @typedef RotationAxesStatus
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface RotationAxesStatus {
    /**
     * 是否启用了偏航轴，true表示已启用，false表示已禁用。
     * @type { boolean }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yawEnabled: boolean;

    /**
     * 是否启用了横滚轴，true表示已启用，false表示已禁用。
     * @type { boolean }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    rollEnabled: boolean;

    /**
     * 是否启用了俯仰轴，true表示已启用，false表示已禁用。
     * @type { boolean }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pitchEnabled: boolean;

    /**
     * 偏航轴限位状态
     * @type { ?RotationAxisLimited } RotationAxisLimited
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yawLimited?: RotationAxisLimited;

    /**
     * 横滚轴限位状态
     * @type { ?RotationAxisLimited }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    rollLimited?: RotationAxisLimited;

    /**
     * 俯仰轴限位状态
     * @type { ?RotationAxisLimited }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pitchLimited?: RotationAxisLimited;
  }

  /**
   * 旋转轴限位状态
   *
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum RotationAxisLimited {
    /**
     * 不限位
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NOT_LIMITED = 0,

    /**
     * 负限位
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NEGATIVE_LIMITED = 1,

    /**
     * Positive limited.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    POSITIVE_LIMITED = 2
  }

  /**
   * 旋转轴状态变更信息
   * @typedef RotationAxesStateChangeInfo
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface RotationAxesStateChangeInfo {
    /**
     * 机械设备唯一ID
     *
     * @type { int }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    mechId: int;

    /**
     * Rotate axis status.
     * @type { RotationAxesStatus }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    status: RotationAxesStatus;
  }

  /**
   * 跟踪事件信息
   *
   * @typedef TrackingEventInfo
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export interface TrackingEventInfo {
    /**
     * 跟踪事件
     * @type { TrackingEvent } Tracking event.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    event: TrackingEvent;
  }

  /**
   * 设备吸附状态回调信息
   * @typedef AttachStateChangeInfo
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export interface AttachStateChangeInfo {

    /**
     * 吸附状态
     * @type { AttachState }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    state: AttachState;

    /**
     * 机械体设备信息
     * @type { MechInfo }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    mechInfo: MechInfo;
  }

  /**
   * 搜索目标的相关信息
   *
   * @typedef TargetInfo
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface TargetInfo {
    /**
     * Target type.
     * @type { TargetType }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    targetType: TargetType;
  }

  /**
   * 指定搜索的方向
   *
   * @typedef SearchParams
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface SearchParams {

    /**
     * 搜索的方向
     * @type { SearchDirection }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    direction: SearchDirection;
  }

  /**
   * 显示搜索命令的执行结果
   *
   * @typedef SearchResult
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface SearchResult {
    /**
    * 搜索到的目标数量
     * @type { int }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    targetCount: int;
  }

  /**
   * 用户操作
   *
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum Operation {
    /**
     * 连接操作
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    CONNECT = 0,

    /**
     * 断开操作
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    DISCONNECT = 1
  }

  /**
   * 跟踪事件
   *
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export enum TrackingEvent {
    /**
     * 用户操作相机跟踪使能
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    CAMERA_TRACKING_USER_ENABLED = 0,

    /**
     * 用户操作相机跟踪关闭
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    CAMERA_TRACKING_USER_DISABLED = 1,

    /**
     * Camera tracking layout changed. You can call getCameraTrackingLayout to obtain the new layout.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    CAMERA_TRACKING_LAYOUT_CHANGED = 2
  }

  /**
   * 旋转执行结果的枚举
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum Result {
    /**
     * 执行完成
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMPLETED = 0,

    /**
     * 执行被打断
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    INTERRUPTED = 1,

    /**
     * 执行受最大旋转角度限制
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    LIMITED = 2,

    /**
     * 执行超时
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    TIMEOUT = 3,

    /**
     * 障碍物导致终止
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    TERMINATE_OBSTACLE  = 4,

    /**
     * 悬崖导致终止
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    TERMINATE_CLIFF = 5,

    /**
     * 系统错误
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_ERROR = 100
  }

  /**
   * 机械体设备类型的枚举
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export enum MechDeviceType {
    /**
     * 云台设备类型
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    GIMBAL_DEVICE = 0,

    /**
     * 桌面云台
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    DESKTOP_GIMBAL_DEVICE = 1,

    /**
     * 轮式底座
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    WHEELED_BASE_DEVICE = 2,

    /**
     * 口袋云台相机
     *
     * @syscap SystemCapability.Mechanic.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    POCKET_GIMBAL_CAMERA_DEVICE = 3
  }

  /**
   * 设备连接状态的枚举
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export enum AttachState {

    /**
     * 设备挂载
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    ATTACHED = 0,

    /**
     * 设备卸载
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DETACHED = 1
  }

  /**
   * 相机跟踪布局
   *
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export enum CameraTrackingLayout {
    /**
     * 系统默认布局
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * 左侧布局
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    LEFT = 1,

    /**
     * 中间布局
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    MIDDLE = 2,

    /**
     * 右侧布局
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    RIGHT = 3
  }

  /**
   * 目标人脸信息的枚举
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum TargetType {
    /**
     * 目标人脸信息
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    HUMAN_FACE = 0
  }

  /**
   * 系统默认的搜索方向
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum SearchDirection {
    /**
     * 系统默认方向
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * 左向，即顺时针方向。
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    LEFTWARD = 1,

    /**
     * 右向，即逆时针方向。
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RIGHTWARD = 2
  }

  /**
   * 设备移动参数
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export interface MoveParams {
    /**
     * 移动距离。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    distance: int;

    /**
     * 转动角度。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    angle: double;

    /**
     * 速度档位。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    speedGear?: SpeedGear;

    /**
     * 行进方式。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    mode?: MarchingMode;
  }

  /**
   * 速度档位定义
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export enum SpeedGear {
    /**
     * 低速档定义
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    LOW_SPEED = 0,

    /**
     * 中速档定义，默认值即为中速
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    MIDDLE_SPEED = 1,

    /**
     * 高速档定义
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HIGH_SPEED = 2
  }

  /**
   * 行进模式定义
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export enum MarchingMode {
    /**
     * 先转动再移动
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    TURN_THEN_MOVE = 0,

    /**
     * 边移动边转动
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    TURNING_MOVING = 1
  }

  /**
   * 速度控制参数
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export interface SpeedParams {
    /**
     * 转动或移动速度。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    speed: int;

    /**
     * 转动角度。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    angle: double;

    /**
     * 行进方式。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    mode?: MarchingMode;
  }

  /**
   * 动作序列类型
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export enum ActionType {
    /**
     * 横竖屏旋转
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    LANDSCAPE_PORTRAIT_SWITCH = 0,

    /**
     * 巡桌模式
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    PATROL_MODE = 1,

    /**
     * 迎人模式
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    GREET_MODE = 2,

    /**
     * 仰头
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HEAD_UP = 3,

    /**
     * 微抬
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HEAD_UP_SLIGHTLY = 4,

    /**
     * 平视
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    EYE_LEVEL = 5,

    /**
     * 微低
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HEAD_DOWN_SLIGHTLY = 6,

    /**
     * 下俯到底
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HEAD_DOWN = 7,

    /**
     * 晃头
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HEAD_WIGGLE = 8,

    /**
     * 点头
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    NOD = 9,

    /**
     * 摇头
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HEAD_SHAKE = 10,

    /**
     * 头向底座回正
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    HEAD_TURN_TO_BASE = 11,

    /**
     * 底座向头回正
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    BASE_TURN_TO_HEAD = 12,

    /**
     * 云台前后方向翻转
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    FRONT_TO_BACK_FLIP = 13,

    /**
     * 开心动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HAPPY = 1000,

    /**
     * 生气动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    ANGRY = 1001,

    /**
     * 悲伤动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    SAD = 1002,

    /**
     * 惊吓动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    SCARED = 1003,

    /**
     * 舞蹈动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    DANCE = 2000,

    /**
     * 卖萌动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    ACTING_CUTE = 2001,

    /**
     * 庆祝动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    CELEBRATE = 2002,

    /**
     * 唤醒动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    WAKEUP = 2003,

    /**
     * 休眠动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    SLEEP = 2004,

    /**
     * 低电量动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    LOW_POWER = 2005,

    /**
     * 思考中动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    THINKING = 2006
  }

  /**
   * 具身设备事件定义
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export enum MechEventType {
    /**
     * 吸附事件
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    DEVICE_ADSORBED = 0,

    /**
     * 未吸附事件
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    DEVICE_UNADSORBED = 1,

    /**
     * 移动中遇到悬崖
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    REACH_CLIFF = 2,

    /**
     * 移动中遇到障碍
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    REACH_OBSTACLE = 3,

    /**
     * 设备低电量
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    LOW_POWER = 4
  }

  /**
   * 具身设备事件定义
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export interface MechEvent {
    /**
     * 具身设备ID。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    mechId: int;

    /**
     * 事件类型
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    event: MechEventType;
  }

  /**
   * 具身设备地址类型
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum AddressType {
    /**
     * 具身设备蓝牙地址类型
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    BLE_ADDR = 0
  }

  /**
   * 配件设备信息定义
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface AddressInfo {
    /**
     * 配件设备地址。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;

    /**
     * 地址类型。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    addressType: AddressType;
  }

  /**
   * 连接参数定义
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface ConnectParam {
    /**
     * 具身设备名称。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceName?: string;

    /**
     * 当前设备标识。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    identifier?: int;

    /**
     * 发现设备时携带的数据
     * 数据必须符合以下格式：|类型|值|类型|值|。
     * 每个特定类型的value'len是预定义的长度
     * 支持的类型和版本如下表所示。
     * -----------------------------------------------------------------
     * 类型|值|值len |api级别
     * -----------------------------------------------------------------
     * 0x01 |三轴重力传感器值| 3Byte |26.0.0
     * -----------------------------------------------------------------
     * 0x02|MAC地址第1字节偏移|1字节|26.0.0
     * -----------------------------------------------------------------
     * 0x03 |配对广播|1字节|26.0.0
     * -----------------------------------------------------------------
     * 0x04 |目标设备标识|4字节|26.0.0
     * -----------------------------------------------------------------。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    custdata: string;
  }

  /**
   * 手机吸附状态
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum AdsorbState {
    /**
     * 未知状态
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    UNKNOWN = -1,

    /**
     * 吸附态
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    ADSORBED = 0,

    /**
     * 设备未被吸附
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    UNADSORBED = 1
  }


  /**
   * 设备电池电量信息
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface BatteryLevelInfo {
    /**
     * ID of the mechanical device.
     *        ID of the mechanical device.
     *      ID of the mechanical device.
     * 设备ID。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    mechId: int;

    /**
     * 电池电量值的百分比。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    batteryLevel: int;

    /**
     * 是否在充电。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    isCharging: boolean;
  }

}

export default mechanicManager;