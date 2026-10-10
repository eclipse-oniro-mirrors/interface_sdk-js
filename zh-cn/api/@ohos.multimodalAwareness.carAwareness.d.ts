/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 车辆感知
 * @kit MultimodalAwarenessKit
 */
import { Callback } from './@ohos.base';

/**
 * 本模块提供车辆感知能力，包括隔空手势交互、实时天气识别、补能状态识别等功能。
 *
 * @syscap SystemCapability.MultimodalAwareness.CarAwareness
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.1
 */
declare namespace carAwareness {
  /**
   * 表示车辆感知支持的能力类型枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  enum Capability {
    /**
     * 隔空手势感知能力，支持识别用户隔空操作屏幕的动作。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    SPATIAL_MOTION = 'SpatialMotion',
    /**
     * 指向识别能力，支持识别用户指向的车内零部件。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    SPATIAL_POINT = 'SpatialPoint',
    /**
     * 肢体动作感知能力，支持识别用户特定姿势动作。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    SPATIAL_GESTURE = 'SpatialGesture',
    /**
     * 实时天气感知能力，支持识别车辆当前所处环境的天气状态。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    REALTIME_WEATHER = 'RealTimeWeather',
    /**
     * 补能识别能力，支持识别车辆加油的开始与结束状态。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    REFUELING = 'Refueling',
    /**
     * 车辆状态感知能力，支持获取车辆相关状态信息。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    CAR_STATUS = 'CarStatus',
    /**
     * 习惯推荐感知能力，支持基于用户习惯生成推荐。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    HABIT_RECOMMENDATION = 'HabitRecommendation',
    /**
     * 空间绘画能力，支持识别用户隔空画画的动作。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    SPATIAL_DRAW = 'SpatialDraw',
    /**
     * 挥手关门识别能力，支持识别用户手部关门动作。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    GESTURE_CLOSEDOOR = 'GestureCloseDoor',
    /**
     * 乘员感知能力，支持识别车内乘员布局和分类。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    OCCUPANT_SENSE = 'OccupantSense'
  }

  /**
   * 隔空手势感知的结果信息接口。
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  export interface SpatialMotionInfo {
    /**
     * 识别结果的时间戳。
     * 单位为：ms。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    timestamp: number;

    /**
     * 手部在屏幕上的 X 轴坐标。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    pointX: number;

    /**
     * 手部在屏幕上的 Y 轴坐标。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    pointY: number;

    /**
     * 手势事件类型。
     * -1：无效
     * 0：准备就绪
     * 1：移动
     * 2：点击。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    event: number;
  }

  /**
   * 订阅隔空手势感知结果。设备不支持该能力时抛出34000002错误码，可调用 getAllCapabilityList查询设备可用能力。通过callback异步返回数据。
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { Callback<SpatialMotionInfo> } callback - 回调函数，用于返回隔空手势感知数据。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  function onSpatialMotion(callback: Callback<SpatialMotionInfo>): void;

  /**
   * 取消订阅隔空手势结果。
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { Callback<SpatialMotionInfo> } [callback] - 回调函数。传入指定回调则注销对应监听，不传入则注销所有监听。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  function offSpatialMotion(callback?: Callback<SpatialMotionInfo>): void;

  /**
   * 实时天气感知的结果信息接口。
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  export interface RealTimeWeatherInfo {
    /**
     * 识别结果的时间戳。
     * 单位为：ms。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    timestamp: number;

    /**
     * 天气状态。
     * -1：无效
     * 0：其他
     * 1：雾
     * 2：浓雾
     * 3：雪
     * 4：大雪
     * 5：雨
     * 6：大雨。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.0.1
     */
    weather: number;
  }

  /**
   * 订阅实时天气感知结果。设备不支持该能力时抛出34000002错误码，可调用getAllCapabilityList查询设备可用能力。通过callback异步返回数据。
   *
   * @permission ohos.permission.vehicle.MMA_WEATHER
   * @param { Callback<RealTimeWeatherInfo> } callback - 回调函数，用于返回实时天气感知数据。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  function onRealTimeWeather(callback: Callback<RealTimeWeatherInfo>): void;

  /**
   * 取消订阅实时天气结果。
   *
   * @permission ohos.permission.vehicle.MMA_WEATHER
   * @param { Callback<RealTimeWeatherInfo> } [callback] - 回调函数。传入指定回调则注销对应监听，不传入则注销所有监听。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  function offRealTimeWeather(callback?: Callback<RealTimeWeatherInfo>): void;

  /**
   * 补能识别的结果信息接口。
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.1
   */
  export interface RefuelingInfo {
    /**
     * 识别结果的时间戳。
     * 单位为：ms。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.1
     */
    timestamp: number;

    /**
     * 加油状态。
     * -1：无效
     * 0：空闲（未开始加油）
     * 1：开始加油
     * 2：加油结束。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.1
     */
    status: number;
  }

  /**
   * 订阅补能状态感知结果。设备不支持该能力时抛出34000002错误码，可调用 getAllCapabilityList查询设备可用能力。通过callback异步返回数据。
   *
   * @permission ohos.permission.vehicle.MMA_ENERGYREFILL
   * @param { Callback<RefuelingInfo> } callback - 回调函数，用于返回补能识别数据。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.1
   */
  function onRefueling(callback: Callback<RefuelingInfo>): void;

  /**
   * 取消订阅加油状态结果。
   *
   * @permission ohos.permission.vehicle.MMA_ENERGYREFILL
   * @param { Callback<RefuelingInfo> } [callback] - 回调函数。传入指定回调则注销对应监听，不传入则注销所有监听。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.1
   */
  function offRefueling(callback?: Callback<RefuelingInfo>): void;

  /**
   * 车辆感知通用结果信息接口。
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  export interface CarAwarenessInfo {
    /**
     * 识别结果的时间戳。
     * 单位为：ms。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    timestamp: number;
    /**
     * 指定的感知能力类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    capability: Capability;
    /**
     * 感知结果数据键值对，不同能力返回不同字段。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    awarenessEvent?:Record<string, Object>;
  }

  /**
   * 车辆感知订阅配置选项接口。
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  export interface CarAwarenessOptions {
    /**
     * 自定义感知参数键值对，用于传入特定能力的配置项。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1
     */
    parameters?: Record<string, Object>;
  }

  /**
   * 订阅车辆感知结果。设备不支持该能力时抛出34000002错误码，可调用getAllCapabilityList查询设备可用能力。通过callback异步返回数据。
   *
   * @param { Capability } capability - 指定订阅的感知能力类型。
   * @param { Callback<CarAwarenessInfo[]> } callback - 回调函数，用于返回感知结果数据数组。
   * @param { CarAwarenessOptions } [options] - 感知能力的可选配置项。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  function onCarAwareness(capability: Capability, callback: Callback<CarAwarenessInfo[]>, options?:
  CarAwarenessOptions): void;

  /**
   * 取消订阅指定类型的车辆感知结果。
   *
   * @param { Capability } capability - 指定取消订阅的感知能力类型。
   * @param { Callback<CarAwarenessInfo[]> } [callback] - 回调函数。传入指定回调则注销对应监听，不传入则注销所有监听。
   * @param { CarAwarenessOptions } [options] - 感知能力的可选配置项。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  function offCarAwareness(capability: Capability, callback?: Callback<CarAwarenessInfo[]>, options?:
  CarAwarenessOptions): void;

  /**
   * 获取当前设备支持的所有车辆感知能力列表。
   *
   * @returns { Promise<Capability[]> } Promise对象，返回设备支持的感知能力枚举列表。
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.0.1
   */
  function getAllCapabilityList(): Promise<Capability[]>;

  /**
   * 更新空间动作感知的启停状态。
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { number } event - 启停状态值。
   *     0：结束
   *     1：开始
   *     取值应为整数。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  function updateSpatialActionEnableStatus(event: number): void;

  /**
   * 更新空间动作感知的音区信息。
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { number } zone - 音区编号。
   *     3：左后
   *     4：右后
   *     取值应为整数。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  function updateSpatialActionZone(zone: number): void;

  /**
   * 单次获取指定类型的车辆感知结果。
   *
   * @param { Capability } capability - 指定获取的感知能力类型。
   * @param { CarAwarenessOptions } [options] - 感知能力的可选配置项。
   * @returns { Promise<CarAwarenessInfo[]> } Promise对象，返回感知结果数据数组。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1
   */
  function getCarAwareness(capability: Capability, options?: CarAwarenessOptions): Promise<CarAwarenessInfo[]>;
}

export default carAwareness;