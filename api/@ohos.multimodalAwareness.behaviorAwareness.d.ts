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
 * @file behaviorAwareness
 * @kit MultimodalAwarenessKit
 */

import { Callback } from './@ohos.base';

/**
 * **Behavior Awareness** This module provides the MSDP device status awareness capability, user behavior data
 * collection, sequential pattern clustering, and awareness event judgment.
 *
 * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
 * @systemapi
 * @stagemodelonly
 * @since 26.2.0 dynamic&static
 */
declare namespace behaviorAwareness {

  /**
   * Perceived domain type. It is used to distinguish different perception domains, and each domain has an independent
   * payload structure.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export enum PerceptionDomain {  
    /**
     * Habit awareness domain type capability.
     * Used to recognize user daily usage habits, such as app usage habits, device operation habits, etc.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    HABIT_AWARENESS = 'habitAwareness'
  }

  /**
   * Perception pattern type.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export enum PatternType {
    /**
     * Time pattern: perception mode that triggers actions based on time.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    TIME_PATTERN = 'timePattern',
    /**
     * Location pattern: perception mode that triggers action combinations based on geographic location.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    LOCATION_PATTERN = 'locationPattern',
    /**
     * Event sequence pattern: perception mode that triggers action combinations based on events.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    EVENT_PATTERN = 'eventPattern',
  }

  /**
   * Event type enum.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export enum EventType {
    /**
     * Daily time point.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    DAILY_TIME = 'dailyTime',
    /**
     * Weekly time point.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    WEEKLY_TIME = 'weeklyTime',
    /**
     * Monthly time point.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    MONTHLY_TIME = 'monthlyTime',
    /**
     * Legal workday time point.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    WORKDAY_TIME = 'workdayTime',
    /**
     * Location information, including the location and fence entry and exit status.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    LOCATION = 'location',
    /**
     * App launch.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    APP_LAUNCH = 'appLaunch',
    /**
     * App exit.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    APP_EXIT = 'appExit',
    /**
     * Single app usage.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    APP_USAGE_SINGLE = 'appUsageSingle',
    /**
     * Daily app usage.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    APP_USAGE_DAILY = 'appUsageDaily',
    /**
     * Alarm dismiss.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    ALARM_DISMISS = 'alarmDismiss',
    /**
     * Charge start.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    CHARGE_START = 'chargeStart',
    /**
     * Charge end.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    CHARGE_END = 'chargeEnd',
    /**
     * Battery fully charged.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    CHARGE_FULL = 'chargeFull',
    /**
     * Battery above specified level.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    BATTERY_ABOVE = 'batteryAbove',
    /**
     * Battery below specified level.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    BATTERY_BELOW = 'batteryBelow',
    /**
     * Bluetooth connected.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    BLUETOOTH_CONNECT = 'bluetoothConnect',
    /**
     * Bluetooth disconnected.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    BLUETOOTH_DISCONNECT = 'bluetoothDisconnect',
    /**
     * Incoming phone ring.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    PHONE_RING = 'phoneRing',
  }

  /**
   * Action type enum.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export enum ActionType {
    /**
     * Close app.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    APP_CLOSE = 'appClose',
    /**
     * Open app.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    APP_OPEN = 'appOpen',
    /**
     * Eye protection mode.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    EYE_PROTECT_MODE = 'eyeProtectMode',
    /**
     * Dark mode.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    DARK_MODE = 'darkMode',
    /**
     * Personal hotspot.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    PERSONAL_HOTSPOT = 'personalHotspot',
    /**
     * Mobile data.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    MOBILE_DATA = 'mobileData',
    /**
     * Wi-Fi.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    WIFI = 'wifi',
    /**
     * Airplane mode.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    AIRPLANE_MODE = 'airplaneMode',
    /**
     * Bluetooth.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    BLUETOOTH = 'bluetooth',
    /**
     * NFC.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    NFC = 'nfc',
    /**
     * Rotation lock.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    ROTATION_LOCK = 'rotationLock',
    /**
     * Power saving mode.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    POWER_SAVING = 'powerSaving',
    /**
     * Sound mode.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    SOUND_MODE = 'soundMode',
    /**
     * Screen brightness.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    SCREEN_BRIGHTNESS = 'screenBrightness',
    /**
     * Volume.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    VOLUME = 'volume',
    /**
     * Shutdown.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    SHUTDOWN = 'shutdown',
    /**
     * Reboot.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    REBOOT = 'reboot',
  }

  /**
   * Sound mode enum.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export enum SoundMode {
    /**
     * Vibrate mode.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    VIBRATE = 'vibrate',
    /**
     * Silent mode.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    SILENT = 'silent',
    /**
     * Ring mode.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    RING = 'ring',
  }

  /**
   * Bluetooth device type enum.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export enum BluetoothDeviceType {
    /**
     * Default/uncategorized device.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    DEFAULT = 0,
    /**
     * Car device.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    CAR = 1,
    /**
     * Headset.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    HEADSET = 2,
    /**
     * Hearing aid.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    HEARING = 3,
    /**
     * Glasses.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    GLASSES = 4,
    /**
     * Watch.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    WATCH = 5,
    /**
     * Speaker.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    SPEAKER = 6,
    /**
     * Others.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    OTHERS = 7,
  }

  /**
   * User feedback event status type enum after an event is pushed.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export enum FeedbackType {
    /**
     * Accept event.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    ACCEPT = 0,
    /**
     * Ignore event.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    IGNORE = 1,
    /**
     * Reject event.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    REJECT = 2,
    /**
     * Edit event.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    EDIT = 3,
    /**
     * Event not pushed.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    NOT_PUSHED = 4
  }

  /**
   * Recurrence type enum.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export enum RecurrenceType {
    /**
     * Daily.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    DAILY = 'daily',
    /**
     * Weekly.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    WEEKLY = 'weekly',
    /**
     * Monthly.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    MONTHLY = 'monthly',
    /**
     * Legal workday.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    WORKDAY = 'workday',
  }

  /**
   * Location type enum.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export enum LocationType {
    /**
     * Home.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    HOME = 'home',
    /**
     * Company.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    COMPANY = 'company',
    /**
     * Custom.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    CUSTOM = 'custom',
  }

  /**
   * Location status type enum. Used to distinguish entering or exiting a geofence.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export enum LocationStatusType {
    /**
     * Enter geofence.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    ENTER = 'enter',
    /**
     * Exit geofence.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    EXIT = 'exit',
  }

  /**
   * Operation target enum.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export enum Operation {
    /**
     * Turn on.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    ON = 'on',
    /**
     * Turn off.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    OFF = 'off',
    /**
     * Toggle.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    TOGGLE = 'toggle',
  }

  /**
   * Adjustment direction enum.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export enum AdjustmentDirection {
    /**
     * Increase.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    UP = 'up',
    /**
     * Decrease.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    DOWN = 'down',
  }

  /**
   * Time-based scenario attributes.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export interface TimeAttributes {
    /**
     * Discriminator field, fixed as 'time'.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    kind: 'time';
    /**
     * Time point (HH:mm format, e.g. "08:30").
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    timePoint: string;
    /**
     * Recurrence type.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    recurrence: RecurrenceType;
    /**
     * Day of the week.
     * The value must be an integer within [1,7]. Default value: The default value is 0.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    dayOfWeek?: int;
    /**
     * Day of the month.
     * Unit: day. The value must be an integer within [1,31]. Default value: The default value is 0.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    dayOfMonth?: int;
  }

  /**
   * Geographic coordinates.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export interface Coordinates {
    /**
     * Latitude.
     * Unit: degree. Value range: [-90,90].
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    latitude: double;
    /**
     * Longitude.
     * Unit: degree. Value range: [-180,180].
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    longitude: double;
  }

  /**
   * Location-based scenario attributes.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export interface LocationAttributes {
    /**
     * Discriminator field, fixed as 'location'.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    kind: 'location';
    /**
     * Location type.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    locationType?: LocationType;
    /**
     * Location name.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    locationName?: string;
    /**
     * Geographic coordinates.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    coordinates: Coordinates;
  }

  /**
   * System event scenario attributes.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export interface SystemEventAttributes {
    /**
     * Discriminator field, fixed as 'systemEvent'.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    kind: 'systemEvent';
    /**
     * Application package name.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    packageName?: string;
    /**
     * Application name.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    appName?: string;
    /**
     * Application ID (for app-related events).
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    appId?: string;
    /**
     * Single-use duration threshold.
     * Unit: Minute. The value should be an integer. Default value: The default value is 0.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    durationThreshold?: int;
    /**
     * Daily usage duration threshold.
     * Unit: Minute. The value must be an integer within [0,1440]. Default value: The default value is 0.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    dailyDurationThreshold?: int;
    /**
     * Battery threshold.
     * Unit: Percentage. The value must be an integer within [0,100]. Default value: The default value is 0.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    batteryThreshold?: int;
    /**
     * Battery percentage.
     * Unit: Percentage. The value must be an integer within [0,100]. Default value: The default value is 0.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    level?: int;
    /**
     * Bluetooth device type.
     * Default value: The default value is 0.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    bluetoothDeviceType?: BluetoothDeviceType;
    /**
     * Bluetooth device name.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    bluetoothDeviceName?: string;
  }

  /**
   * System control scenario attributes.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export interface SystemActionAttributes {
    /**
     * Discriminator field, fixed as 'systemAction'.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    kind: 'systemAction';
    /**
     * Operation target (on/off/toggle).
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    operation: Operation;
    /**
     * Application package name.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    packageName?: string;
    /**
     * Application name.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    appName?: string;
    /**
     * Adjustment direction.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    adjustment?: AdjustmentDirection;
    /**
     * Absolute value indicates the fixed value of the brightness or volume.
     * Unit: Percentage. The value must be an integer within [0,100]. Default value: The default value is 0.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    value?: int;
    /**
     * Sound mode.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    soundMode?: SoundMode;
  }

  /**
   * Event event data.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export interface EventData {  
    /**
     * Event ID.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    eventId: string;
    /**
     * Event type.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    eventType: EventType;
    /**
     * Event Name.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    name: string;
    /**
     * Occurrence timestamp.
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    timestamp: long;
    /**
     * Additional Parameters.
     * Default value: Default behavior without additional parameters.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    params?: Record<string, string | int | boolean>;
    /**
     * Scenario Attributes.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    attributes?: TimeAttributes | LocationAttributes | SystemEventAttributes;
  }

  /**
   * Operation action data.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export interface ActionData {  
    /**
     * Action ID (specific prefix format).
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    actionId: string;
    /**
     * Action Type.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    actionType: ActionType;
    /**
     * Action Name.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    name: string;
    /**
     * Additional Parameters.
     * Default value: Default behavior: no additional parameters.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    params?: Record<string, string | int | boolean>;
    /**
     * Scenario Attributes.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    attributes?: SystemActionAttributes;
  }

  /**
   * Habit-aware domain payload. Specific data in the HABIT_Awareness domain.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export interface BehaviorAwarenessPayload {  
    /**
     * Perception mode type.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    patternType: PatternType;
    /**
     * Triggering event.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    triggerEvent: EventData[];
    /**
     * Associated Actions.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    action: ActionData[];
  }

  /**
   * Aware event data. Events generated after MSDP convergent awareness clustering are pushed to the service side.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export interface PerceptionEvent<T = BehaviorAwarenessPayload> {  
    /**
     * Unique ID of an awareness event.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    perceptionEventId: string;
    /**
     * Perceived domain type.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    domain: PerceptionDomain;
    /**
     * Confidence.The value 0 indicates no confidence, and the value 100 indicates
     * complete confidence.
     * Unit: Percentage. The value must be an integer within [0,100].
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    confidence: int;
    /**
     * Generate the timestamp.
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    generateTime: long;
    /**
     * Domain-specific data.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    payload: T;
  }

  /**
   * Subscription Options. Defines the filter criteria for subscriptions.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export interface SubscribeInfo {  
    /**
     * Perception domain type.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    domain: PerceptionDomain;
    /**
     * Subtype Filtering (Optional. If this parameter is not specified, all modes in the domain are subscribed.).
     * Default value: Subscribe to all subtypes in the domain without filtering.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    patternTypes?: PatternType[];
  }

  /**
   * Feedback data.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export interface FeedbackData {  
    /**
     * Awareness event ID.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    perceptionEventId: string;
    /**
     * Feedback Type.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    feedbackType: FeedbackType;
    /**
     * Feedback timestamp .
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.2.0 dynamic&static
     */
    feedbackTime: long;
  }

  /**
   * Initiate subscription. The service side registers the subscription relationship with the MSDP and registers the
   * awareness event callback.
   *
   * When a user performs an action, MSDP filters matches from the awareness event table and pushes them in real time
   * through callbacks.
   * When the same subscription target is subscribed repeatedly, the later callback overrides the previous callback.
   *
   * @param { SubscribeInfo } info - Subscription Options.
   * @param { Callback<PerceptionEvent<BehaviorAwarenessPayload>> } callback - Callback used to return the
   *     awareness event. 
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability.
   *     <br>2. The chip does not support the capability.
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 32500001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export function onPerception(
    info: SubscribeInfo,
    callback: Callback<PerceptionEvent<BehaviorAwarenessPayload>>
  ): Promise<void>;

  /**
   * The service cancels the subscription relationship on the MSDP.
   *
   * If a callback is passed, only the subscriptions that match the callback are canceled. If no callback is passed, all
   * subscriptions under the current package are canceled.
   *
   * @param { Callback<PerceptionEvent<BehaviorAwarenessPayload>> } [callback] - Callback used to return
   *     Awareness event. Used to clear the awareness of all subscriptions Events.
   *     <br>Default value: If this parameter is not specified, all subscriptions of the current package
   *     are canceled.
   * @returns { Promise<void> } Promise that returns no value.
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
   * @since 26.2.0 dynamic&static
   */
  export function offPerception(
    callback?: Callback<PerceptionEvent<BehaviorAwarenessPayload>>
  ): Promise<void>;

  /**
   * Submit user feedback. The service side sends the user feedback to the MSDP.
   *
   * @param { FeedbackData } feedback - Feedback data.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability.
   *     <br>2. The chip does not support the capability.
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 32500001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.2.0 dynamic&static
   */
  export function submitFeedback(feedback: FeedbackData): Promise<void>;

}

export default behaviorAwareness;
