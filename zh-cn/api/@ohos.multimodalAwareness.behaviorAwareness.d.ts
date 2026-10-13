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
 * @since 26.2.0
 * @stagemodelonly
 * @systemapi
 */

declare namespace behaviorAwareness {

  /**
   * 感知领域类型。用于区分不同的感知领域，每个领域有独立的 payload 结构。
   *
   * @enum { string }
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export enum PerceptionDomain {
    /** 习惯感知 */
    HABIT_AWARENESS = 'habitAwareness',
  }

  /**
   * 感知模式类型。
   *
   * @enum { string }
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export enum PatternType {
    /** 时间模式：时间 → 动作 */
    TIME_PATTERN = 'timePattern',
    /** 位置模式：位置 → 动作 */
    LOCATION_PATTERN = 'locationPattern',
    /** 动作序列模式：动作 → 动作 */
    EVENT_PATTERN = 'eventPattern',
  }

  /**
   * Event 类型枚举。
   *
   * @enum { string }
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export enum EventType {
    /** 时间点+每天 */
    TIME_DAILY = 'timeDaily',
    /** 时间点+每周 */
    TIME_WEEKLY = 'timeWeekly',
    /** 时间点+每月 */
    TIME_MONTHLY = 'timeMonthly',
    /** 时间点+法定工作日 */
    TIME_WORKDAY = 'timeWorkday',
    /** 到达位置 */
    LOCATION_ARRIVE = 'locationArrive',
    /** 打开应用 */
    APP_LAUNCH = 'appLaunch',
    /** 退出应用 */
    APP_EXIT = 'appExit',
    /** 单次使用应用 */
    APP_USAGE_SINGLE = 'appUsageSingle',
    /** 当日使用应用 */
    APP_USAGE_DAILY = 'appUsageDaily',
    /** 关闭闹钟 */
    ALARM_DISMISS = 'alarmDismiss',
    /** 开始充电 */
    CHARGE_START = 'chargeStart',
    /** 结束充电 */
    CHARGE_END = 'chargeEnd',
    /** 充满电 */
    CHARGE_FULL = 'chargeFull',
    /** 电量高于指定值 */
    BATTERY_ABOVE = 'batteryAbove',
    /** 电量低于指定值 */
    BATTERY_BELOW = 'batteryBelow',
    /** 连接蓝牙 */
    BLUETOOTH_CONNECT = 'bluetoothConnect',
    /** 断开蓝牙 */
    BLUETOOTH_DISCONNECT = 'bluetoothDisconnect',
    /** 本机来电 */
    PHONE_RING = 'phoneRing',
  }

  /**
   * Action 类型枚举。
   *
   * @enum { string }
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export enum ActionType {
    /** 关闭应用 */
    APP_CLOSE = 'appClose',
    /** 打开应用 */
    APP_OPEN = 'appOpen',
    /** 护眼模式 */
    EYE_PROTECT_MODE = 'eyeProtectMode',
    /** 深色模式 */
    DARK_MODE = 'darkMode',
    /** 个人热点 */
    PERSONAL_HOTSPOT = 'personalHotspot',
    /** 移动数据 */
    MOBILE_DATA = 'mobileData',
    /** 无线网络 */
    WIFI = 'wifi',
    /** 飞行模式 */
    AIRPLANE_MODE = 'airplaneMode',
    /** 蓝牙 */
    BLUETOOTH = 'bluetooth',
    /** NFC */
    NFC = 'nfc',
    /** 旋转锁定 */
    ROTATION_LOCK = 'rotationLock',
    /** 省电模式 */
    POWER_SAVING = 'powerSaving',
    /** 声音模式 */
    SOUND_MODE = 'soundMode',
    /** 屏幕亮度 */
    SCREEN_BRIGHTNESS = 'screenBrightness',
    /** 音量 */
    VOLUME = 'volume',
    /** 关机 */
    SHUTDOWN = 'shutdown',
    /** 重启 */
    REBOOT = 'reboot',
  }

  /**
   * 声音模式枚举。
   *
   * @enum { string }
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export enum SoundMode {
    /** 振动 */
    VIBRATE = 'vibrate',
    /** 静音 */
    SILENT = 'silent',
    /** 响铃 */
    RING = 'ring',
  }

  /**
   * 蓝牙设备类型枚举。
   *
   * @enum { number }
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export enum BluetoothDeviceType {
    /** 默认/未分类设备 */
    DEFAULT = 0,
    /** 车载设备 */
    CAR = 1,
    /** 耳机 */
    HEADSET = 2,
    /** 助听器 */
    HEARING = 3,
    /** 眼镜 */
    GLASSES = 4,
    /** 手表 */
    WATCH = 5,
    /** 音箱 */
    SPEAKER = 6,
    /** 其他 */
    OTHERS = 7,
  }

  /**
   * 反馈类型枚举。
   *
   * @enum { number }
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export enum FeedbackType {
    /** 接受 */
    ACCEPT = 1,
    /** 忽略 */
    IGNORE = 2,
    /** 拒绝 */
    REJECT = 3,
    /** 编辑 */
    EDIT = 4,
    /** 未推送 */
    NOT_PUSHED = 5,
  }

  /**
   * 重复周期枚举。
   *
   * @enum { string }
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export enum RecurrenceType {
    /** 每天 */
    DAILY = 'daily',
    /** 每周 */
    WEEKLY = 'weekly',
    /** 每月 */
    MONTHLY = 'monthly',
    /** 法定工作日 */
    WORKDAY = 'workday',
  }

  /**
   * 位置类型枚举。
   *
   * @enum { string }
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export enum LocationType {
    /** 家 */
    HOME = 'home',
    /** 公司 */
    COMPANY = 'company',
    /** 自定义 */
    CUSTOM = 'custom',
  }

  /**
   * 操作目标枚举。
   *
   * @enum { string }
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export enum Operation {
    /** 开启 */
    ON = 'on',
    /** 关闭 */
    OFF = 'off',
    /** 切换 */
    TOGGLE = 'toggle',
  }

  /**
   * 调节方向枚举。
   *
   * @enum { string }
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export enum AdjustmentDirection {
    /** 增大 */
    UP = 'up',
    /** 减小 */
    DOWN = 'down',
  }

  /**
   * 时间类场景属性。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export interface TimeAttributes {
    /** 判别字段，固定为 'time'。 */
    kind: 'time';
    /** 时间点（HH:mm 格式，如 "08:30"）。格式不合法时抛出 401 错误。 */
    timePoint: string;
    /** 重复周期。 */
    recurrence: RecurrenceType;
    /** 星期几（周重复时有效）。取值范围：1-7，1 表示周一。不填时默认值为0，表示不设置。超出范围时抛出 401 错误。 */
    dayOfWeek?: long;
    /** 每月哪一天（月重复时有效）。取值范围：1-31。不填时默认值为0，表示不设置。超出范围时抛出 401 错误。 */
    dayOfMonth?: long;
  }

  /**
   * 位置类场景属性。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export interface LocationAttributes {
    /** 判别字段，固定为 'location'。 */
    kind: 'location';
    /** 位置类型（预定义位置，可选）。 */
    locationType?: LocationType;
    /** 位置名称。 */
    locationName?: string;
    /** 经纬度坐标（必填，支持任意位置）。latitude 取值范围：-90~90；longitude 取值范围：-180~180。超出范围时抛出 401 错误。 */
    coordinates: { latitude: double; longitude: double };
  }

  /**
   * 系统事件类场景属性。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export interface SystemEventAttributes {
    /** 判别字段，固定为 'systemEvent'。 */
    kind: 'systemEvent';
    /** 应用包名（应用类事件）。 */
    packageName?: string;
    /** 应用名称。 */
    appName?: string;
    /** 应用 ID（应用类事件）。 */
    appId?: string;
    /** 单次使用时长阈值（分钟，应用时长类事件）。不填时默认值为0。@unit min */
    durationThreshold?: long;
    /** 当日使用时长阈值（分钟，应用时长类事件）。不填时默认值为0。@unit min */
    dailyDurationThreshold?: long;
    /** 电量阈值（系统事件类）。不填时默认值为0。@unit % */
    batteryThreshold?: long;
    /** 电量百分比。取值范围：0-100。不填时默认值为0。超出范围时抛出 401 错误。@unit % */
    level?: long;
    /** 蓝牙设备类型（蓝牙类事件）。 */
    bluetoothDeviceType?: BluetoothDeviceType;
    /** 蓝牙设备名称。 */
    bluetoothDeviceName?: string;
  }

  /**
   * 系统控制类场景属性。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export interface SystemActionAttributes {
    /** 判别字段，固定为 'systemAction'。 */
    kind: 'systemAction';
    /** 操作目标（开/关/切换）。 */
    operation: Operation;
    /** 应用包名（应用类操作）。 */
    packageName?: string;
    /** 应用名称。 */
    appName?: string;
    /** 调节方向（brightness/volume 增量调节时用）。 */
    adjustment?: AdjustmentDirection;
    /** 绝对值（brightness/volume 固定值时用）。取值范围：0-100。不填时默认值为0。超出范围时抛出 401 错误。@unit % */
    value?: long;
    /** 声音模式（soundMode 操作时用）。 */
    soundMode?: SoundMode;
  }

  /**
   * Event 事件数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export interface EventData {
    /** Event ID。 */
    eventId: string;
    /** Event 类型。 */
    eventType: EventType;
    /** Event 名称。 */
    name: string;
    /** 发生时间戳。@unit ms */
    timestamp: long;
    /** 附加参数。 */
    params?: Record<string, string | int | boolean>;
    /** 场景属性（根据 eventType 不同而不同，通过 kind 字段区分类型）。 */
    attributes?: TimeAttributes | LocationAttributes | SystemEventAttributes;
  }

  /**
   * Action 动作数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export interface ActionData {
    /** Action ID。 */
    actionId: string;
    /** Action 类型。 */
    actionType: ActionType;
    /** Action 名称。 */
    name: string;
    /** 附加参数。 */
    params?: Record<string, string | int | boolean>;
    /** 场景属性（根据 actionType 不同而不同）。 */
    attributes?: SystemActionAttributes;
  }

  /**
   * 习惯感知领域 payload。HABIT_AWARENESS 领域的具体数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export interface BehaviorAwarenessPayload {
    /** 感知模式类型。 */
    patternType: PatternType;
    /** 触发事件。当前只支持1个，便于扩展。 */
    triggerEvent: EventData[];
    /** 关联动作。当前只支持1个，便于扩展。 */
    action: ActionData[];
  }

  /**
   * 感知事件数据。MSDP 融合感知聚类后生成的事件，推送给业务侧。
   *
   * @template T - payload 类型，支持 BehaviorAwarenessPayload 或其他自定义类型。
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export interface PerceptionEvent<T = BehaviorAwarenessPayload> {
    /** 感知事件唯一标识。 */
    perceptionEventId: string;
    /** 感知领域类型。 */
    domain: PerceptionDomain;
    /** 置信度。取值范围：0-100，0 表示无置信度，100 表示完全确定。@unit % */
    confidence: long;
    /** 生成时间戳。@unit ms */
    generateTime: long;
    /** 领域特定数据（每个 domain 的结构不同）。 */
    payload: T;
  }

  /**
   * 订阅选项。定义订阅的过滤条件。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export interface SubscribeOptions {
    /** 感知领域类型（必填）。undefined 或 null 时抛出 401 错误。 */
    domain: PerceptionDomain;
    /** 子类型过滤（可选，不填则订阅该领域下所有模式）。 */
    patternTypes?: PatternType[];
  }

  /**
   * 反馈数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export interface FeedbackData {
    /** 感知事件 ID。undefined 或 null 时抛出 401 错误。 */
    perceptionEventId: string;
    /** 反馈类型。 */
    feedbackType: FeedbackType;
    /** 反馈时间戳（毫秒）。@unit ms */
    feedbackTime: long;
  }

  /**
   * 发起订阅。业务侧向 MSDP 注册订阅关系，同时注册感知事件回调。
   *
   * 当用户执行 Action 时，MSDP 从感知事件表过滤匹配项并通过 callback 实时推送。
   * 同一订阅目标重复订阅时，后传入的 callback 覆盖之前的 callback。
   *
   * @param { SubscribeOptions } options - 订阅选项。如果为 undefined 或 null，抛出 401 错误。
   * @param { Callback<PerceptionEvent<BehaviorAwarenessPayload>> } callback - 感知事件回调函数。
   *                   需保存此回调引用，用于 offPerception 时传入。
   *                   如果为 undefined 或 null，抛出 401 错误。
   * @returns { Promise<void> } 异步返回，无返回值。
   * @throws { BusinessError } 202 - 权限校验失败。非系统应用使用系统接口；
   *                           32500001 - 服务异常；
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export function onPerception(
    options: SubscribeOptions,
    callback: Callback<PerceptionEvent<BehaviorAwarenessPayload>>
  ): Promise<void>;

  /**
   * 取消订阅。业务侧向 MSDP 注销订阅关系。
   *
   * 如果传入 callback，则仅取消与该回调匹配的订阅；如果不传 callback，则取消当前包名下的所有订阅。
   *
   * @param { Callback<PerceptionEvent<BehaviorAwarenessPayload>> } [callback] - 可选，与 onPerception 时传入的回调函数需为同一引用。不传则取消所有订阅。
   * @returns { Promise<void> } 异步返回，无返回值。
   * @throws { BusinessError } 202 - 权限校验失败。非系统应用使用系统接口；
   *                           32500001 - 服务异常；
   *                           32500003 - 取消订阅失败；
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export function offPerception(
    callback?: Callback<PerceptionEvent<BehaviorAwarenessPayload>>
  ): Promise<void>;

  /**
   * 提交用户反馈。业务侧将用户对感知事件的反馈传递给 MSDP。
   *
   * @param { FeedbackData } feedback - 反馈数据。如果为 undefined 或 null，抛出 401 错误。
   * @returns { Promise<void> } 异步返回，无返回值。
   * @throws { BusinessError } 202 - 权限校验失败。非系统应用使用系统接口；
   *                           32500001 - 服务异常；
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 26.2.0
   * @stagemodelonly
   * @systemapi
   */
  export function submitFeedback(feedback: FeedbackData): Promise<void>;

}

export default behaviorAwareness;
