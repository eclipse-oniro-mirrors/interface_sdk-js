/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file 行为感知
 * @kit MultimodalAwarenessKit
 */

import { Callback } from './@ohos.base';

/**
 * **behaviorAwareness** 本模块提供 MSDP 设备状态感知能力，支持用户行为数据采集、序列模式聚类、感知事件判断。
 *
 * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace behaviorAwareness {

  /**
   * 感知领域类型。用于区分不同的感知领域，每个领域有独立的 payload 结构。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum PerceptionDomain {
    /**
     * 习惯感知领域类型能力。
     * 用于识别用户日常使用习惯，例如应用使用习惯、设备操作习惯等。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    HABIT_AWARENESS = 'habitAwareness'
  }

  /**
   * 感知模式类型。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum PatternType {
    /**
     * 时间模式：基于时间触发动作的感知模式。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    TIME_PATTERN = 'timePattern',
    /**
     * 位置模式：基于地理位置触发动作组合的感知模式。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    LOCATION_PATTERN = 'locationPattern',
    /**
     * 事件序列模式：基于事件触发动作组合的感知模式。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    EVENT_PATTERN = 'eventPattern',
  }

  /**
   * 事件类型枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum EventType {
    /**
     * 每日时间点。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    DAILY_TIME = 'dailyTime',
    /**
     * 每周时间点。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    WEEKLY_TIME = 'weeklyTime',
    /**
     * 每月时间点。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    MONTHLY_TIME = 'monthlyTime',
    /**
     * 法定工作日时间点。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    WORKDAY_TIME = 'workdayTime',
    /**
     * 位置信息，包含位置以及进出围栏状态。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    LOCATION = 'location',
    /**
     * 打开应用。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    APP_LAUNCH = 'appLaunch',
    /**
     * 退出应用。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    APP_EXIT = 'appExit',
    /**
     * 单次使用应用。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    APP_USAGE_SINGLE = 'appUsageSingle',
    /**
     * 当日使用应用。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    APP_USAGE_DAILY = 'appUsageDaily',
    /**
     * 关闭闹钟。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    ALARM_DISMISS = 'alarmDismiss',
    /**
     * 开始充电。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    CHARGE_START = 'chargeStart',
    /**
     * 结束充电。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    CHARGE_END = 'chargeEnd',
    /**
     * 充满电。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    CHARGE_FULL = 'chargeFull',
    /**
     * 电量高于指定值。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    BATTERY_ABOVE = 'batteryAbove',
    /**
     * 电量低于指定值。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    BATTERY_BELOW = 'batteryBelow',
    /**
     * 连接蓝牙。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    BLUETOOTH_CONNECT = 'bluetoothConnect',
    /**
     * 断开蓝牙。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    BLUETOOTH_DISCONNECT = 'bluetoothDisconnect',
    /**
     * 本机来电响铃。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    PHONE_RING = 'phoneRing',
  }

  /**
   * 动作类型枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum ActionType {
    /**
     * 关闭应用。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    APP_CLOSE = 'appClose',
    /**
     * 打开应用。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    APP_OPEN = 'appOpen',
    /**
     * 护眼模式。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    EYE_PROTECT_MODE = 'eyeProtectMode',
    /**
     * 深色模式。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    DARK_MODE = 'darkMode',
    /**
     * 个人热点。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    PERSONAL_HOTSPOT = 'personalHotspot',
    /**
     * 移动数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    MOBILE_DATA = 'mobileData',
    /**
     * 无线网络。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    WIFI = 'wifi',
    /**
     * 飞行模式。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    AIRPLANE_MODE = 'airplaneMode',
    /**
     * 蓝牙。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    BLUETOOTH = 'bluetooth',
    /**
     * NFC。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    NFC = 'nfc',
    /**
     * 旋转锁定。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    ROTATION_LOCK = 'rotationLock',
    /**
     * 省电模式。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    POWER_SAVING = 'powerSaving',
    /**
     * 声音模式。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SOUND_MODE = 'soundMode',
    /**
     * 屏幕亮度。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SCREEN_BRIGHTNESS = 'screenBrightness',
    /**
     * 音量。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    VOLUME = 'volume',
    /**
     * 关机。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SHUTDOWN = 'shutdown',
    /**
     * 重启。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    REBOOT = 'reboot',
  }

  /**
   * 声音模式枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum SoundMode {
    /**
     * 振动模式。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    VIBRATE = 'vibrate',
    /**
     * 静音模式。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SILENT = 'silent',
    /**
     * 响铃模式。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    RING = 'ring',
  }

  /**
   * 蓝牙设备类型枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum BluetoothDeviceType {
    /**
     * 默认/未分类设备。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    DEFAULT = 0,
    /**
     * 车载设备。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    CAR = 1,
    /**
     * 耳机。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    HEADSET = 2,
    /**
     * 助听器。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    HEARING = 3,
    /**
     * 眼镜。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    GLASSES = 4,
    /**
     * 手表。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    WATCH = 5,
    /**
     * 音箱。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SPEAKER = 6,
    /**
     * 其他。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    OTHERS = 7,
  }

  /**
   * 事件推送后用户反馈事件状态类型枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum FeedbackType {
    /**
     * 接受事件。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    ACCEPT = 0,
    /**
     * 忽略事件。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    IGNORE = 1,
    /**
     * 拒绝事件。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    REJECT = 2,
    /**
     * 编辑事件。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    EDIT = 3,
    /**
     * 事件未推送。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    NOT_PUSHED = 4
  }

  /**
   * 重复周期枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum RecurrenceType {
    /**
     * 每天。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    DAILY = 'daily',
    /**
     * 每周。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    WEEKLY = 'weekly',
    /**
     * 每月。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    MONTHLY = 'monthly',
    /**
     * 法定工作日。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    WORKDAY = 'workday',
  }

  /**
   * 位置类型枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum LocationType {
    /**
     * 家。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    HOME = 'home',
    /**
     * 公司。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    COMPANY = 'company',
    /**
     * 自定义。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    CUSTOM = 'custom',
  }

  /**
   * 位置状态类型枚举。用于区分进入或离开地理围栏。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum LocationStatusType {
    /**
     * 进入地理围栏。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    ENTER = 'enter',
    /**
     * 离开地理围栏。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    EXIT = 'exit',
  }

  /**
   * 操作目标枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum Operation {
    /**
     * 开启。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    ON = 'on',
    /**
     * 关闭。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    OFF = 'off',
    /**
     * 切换。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    TOGGLE = 'toggle',
  }

  /**
   * 调节方向枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum AdjustmentDirection {
    /**
     * 增大。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    UP = 'up',
    /**
     * 减小。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    DOWN = 'down',
  }

  /**
   * 时间类场景属性。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface TimeAttributes {
    /**
     * 判别字段，固定为 'time'。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    kind: 'time';
    /**
     * 时间点（HH:mm 格式，如 "08:30"）。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    timePoint: string;
    /**
     * 重复周期。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    recurrence: RecurrenceType;
    /**
     * 星期几。
     * 取值需为 [1,7] 范围内的整数。默认值：默认值为 0。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    dayOfWeek?: int;
    /**
     * 每月的第几天。
     * 单位：天。取值需为 [1,31] 范围内的整数。默认值：默认值为 0。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    dayOfMonth?: int;
  }

  /**
   * 地理坐标。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface Coordinates {
    /**
     * 纬度。
     * 单位：度。取值范围：[-90,90]。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    latitude: double;
    /**
     * 经度。
     * 单位：度。取值范围：[-180,180]。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    longitude: double;
  }

  /**
   * 位置类场景属性。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface LocationAttributes {
    /**
     * 判别字段，固定为 'location'。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    kind: 'location';
    /**
     * 位置类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    locationType?: LocationType;
    /**
     * 位置名称。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    locationName?: string;
    /**
     * 地理坐标。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    coordinates: Coordinates;
  }

  /**
   * 系统事件类场景属性。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface SystemEventAttributes {
    /**
     * 判别字段，固定为 'systemEvent'。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    kind: 'systemEvent';
    /**
     * 应用包名。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    packageName?: string;
    /**
     * 应用名称。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    appName?: string;
    /**
     * 应用 ID（用于应用相关事件）。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    appId?: string;
    /**
     * 单次使用时长阈值。
     * 单位：分钟。取值应为整数。默认值：默认值为 0。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    durationThreshold?: int;
    /**
     * 当日使用时长阈值。
     * 单位：分钟。取值需为 [0,1440] 范围内的整数。默认值：默认值为 0。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    dailyDurationThreshold?: int;
    /**
     * 电量阈值。
     * 单位：百分比。取值需为 [0,100] 范围内的整数。默认值：默认值为 0。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    batteryThreshold?: int;
    /**
     * 电量百分比。
     * 单位：百分比。取值需为 [0,100] 范围内的整数。默认值：默认值为 0。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    level?: int;
    /**
     * 蓝牙设备类型。
     * 默认值：默认值为 0。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    bluetoothDeviceType?: BluetoothDeviceType;
    /**
     * 蓝牙设备名称。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    bluetoothDeviceName?: string;
  }

  /**
   * 系统控制类场景属性。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface SystemActionAttributes {
    /**
     * 判别字段，固定为 'systemAction'。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    kind: 'systemAction';
    /**
     * 操作目标（开启/关闭/切换）。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    operation: Operation;
    /**
     * 应用包名。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    packageName?: string;
    /**
     * 应用名称。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    appName?: string;
    /**
     * 调节方向。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    adjustment?: AdjustmentDirection;
    /**
     * 绝对值，表示亮度或音量的固定值。
     * 单位：百分比。取值需为 [0,100] 范围内的整数。默认值：默认值为 0。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    value?: int;
    /**
     * 声音模式。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    soundMode?: SoundMode;
  }

  /**
   * 事件数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface EventData {
    /**
     * 事件 ID。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    eventId: string;
    /**
     * 事件类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    eventType: EventType;
    /**
     * 事件名称。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    name: string;
    /**
     * 发生时间戳。
     * 单位：毫秒。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    timestamp: long;
    /**
     * 附加参数。
     * 默认值：无附加参数时的默认行为。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    params?: Record<string, string | int | boolean>;
    /**
     * 场景属性。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    attributes?: TimeAttributes | LocationAttributes | SystemEventAttributes;
  }

  /**
   * 操作动作数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface ActionData {
    /**
     * 动作 ID（特定前缀格式）。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    actionId: string;
    /**
     * 动作类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    actionType: ActionType;
    /**
     * 动作名称。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    name: string;
    /**
     * 附加参数。
     * 默认值：无附加参数时的默认行为。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    params?: Record<string, string | int | boolean>;
    /**
     * 场景属性。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    attributes?: SystemActionAttributes;
  }

  /**
   * 习惯感知领域 payload。HABIT_AWARENESS 领域的具体数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface BehaviorAwarenessPayload {
    /**
     * 感知模式类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    patternType: PatternType;
    /**
     * 触发事件。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    triggerEvent: EventData[];
    /**
     * 关联动作。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    action: ActionData[];
  }

  /**
   * 感知事件数据。MSDP 融合感知聚类后生成的事件，推送给业务侧。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface PerceptionEvent<T = BehaviorAwarenessPayload> {
    /**
     * 感知事件唯一标识。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    perceptionEventId: string;
    /**
     * 感知领域类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    domain: PerceptionDomain;
    /**
     * 置信度。值 0 表示无置信度，值 100 表示完全确定。
     * 单位：百分比。取值需为 [0,100] 范围内的整数。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    confidence: int;
    /**
     * 生成时间戳。
     * 单位：毫秒。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    generateTime: long;
    /**
     * 领域特定数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    payload: T;
  }

  /**
   * 订阅选项。定义订阅的过滤条件。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface SubscribeInfo {
    /**
     * 感知领域类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    domain: PerceptionDomain;
    /**
     * 子类型过滤（可选。不指定时订阅该领域下所有模式。）。
     * 默认值：不过滤，订阅该领域下所有子类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    patternTypes?: PatternType[];
  }

  /**
   * 反馈数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface FeedbackData {
    /**
     * 感知事件 ID。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    perceptionEventId: string;
    /**
     * 反馈类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    feedbackType: FeedbackType;
    /**
     * 反馈时间戳。
     * 单位：毫秒。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    feedbackTime: long;
  }

  /**
   * 发起订阅。业务侧向 MSDP 注册订阅关系，同时注册感知事件回调。
   *
   * 当用户执行动作时，MSDP 从感知事件表过滤匹配项并通过回调实时推送。
   * 同一订阅目标重复订阅时，后传入的回调覆盖之前的回调。
   *
   * @param { SubscribeInfo } info - 订阅选项。
   * @param { Callback<PerceptionEvent<BehaviorAwarenessPayload>> } callback - 用于返回感知事件的回调。
   * @returns { Promise<void> } 无返回值的 Promise。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability.
   *     <br>2. The chip does not support the capability.
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 32500001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export function onPerception(
    info: SubscribeInfo,
    callback: Callback<PerceptionEvent<BehaviorAwarenessPayload>>
  ): Promise<void>;

  /**
   * 取消订阅。业务侧向 MSDP 注销订阅关系。
   *
   * 如果传入回调，则仅取消与该回调匹配的订阅；如果不传回调，则取消当前包名下的所有订阅。
   *
   * @param { Callback<PerceptionEvent<BehaviorAwarenessPayload>> } [callback] - 用于返回感知事件的回调。
   *     用于清除所有订阅的感知事件。
   *     <br>默认值：不指定时，取消当前包的所有订阅。
   * @returns { Promise<void> } 无返回值的 Promise。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability.
   *     <br>2. The chip does not support the capability.
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 32500001 - Service exception.
   * @throws { BusinessError } 32500003 - Unsubscription failed.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export function offPerception(
    callback?: Callback<PerceptionEvent<BehaviorAwarenessPayload>>
  ): Promise<void>;

  /**
   * 提交用户反馈。业务侧将用户反馈发送给 MSDP。
   *
   * @param { FeedbackData } feedback - 反馈数据。
   * @returns { Promise<void> } 无返回值的 Promise。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability.
   *     <br>2. The chip does not support the capability.
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 32500001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export function submitFeedback(feedback: FeedbackData): Promise<void>;

}

export default behaviorAwareness;
