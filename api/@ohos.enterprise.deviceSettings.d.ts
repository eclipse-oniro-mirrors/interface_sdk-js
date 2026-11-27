/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @file Device Settings Management
 * @kit MDMKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * This module provides enterprise device settings capabilities, including setting and obtaining the device screen-off
 * time, system time, power policy, Eye Comfort mode, default input method, wallpaper, and hidden setting items.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be called only by a device administrator application that is enabled. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi [since 10 - 11]
 * @publicapi [since 12]
 * @since 10
 */
declare namespace deviceSettings {
  /**
   * Represents the power policy.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  export interface PowerPolicy {
    /**
     * Action to apply the power policy.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    powerPolicyAction: PowerPolicyAction;

    /**
     * Delay, in ms.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    delayTime: number;
  }

  /**
   * Enumerates the actions that can be performed to apply the power policy.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 11
   */
  enum PowerPolicyAction {
    /**
     * No action is performed.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    NONE = 0,

    /**
     * Automatically enter the sleep mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    AUTO_SUSPEND = 1,

    /**
     * Forcibly enter the sleep mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    FORCE_SUSPEND = 2,

    /**
     * Enter the sleep mode. This policy does not take effect currently.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    HIBERNATE = 3,

    /**
     * Shut down the system.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    SHUTDOWN = 4
  }

  /**
   * Defines the scenario to which the power policy applies.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 11
   */
  enum PowerScene {
    /**
     * Timeout scenario.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    TIME_OUT = 0
  }

  /**
   * Represents the certificate information.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead @ohos.enterprise.securityManager:securityManager.CertBlob
   */
  export interface CertBlob {
    /**
     * Binary content of the certificate.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     * @deprecated since 26.0.0
     * @useinstead @ohos.enterprise.securityManager:securityManager.inData
     */
    inData: Uint8Array;

    /**
     * Certificate alias. The value length must be less than 40 characters.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     * @deprecated since 26.0.0
     * @useinstead @ohos.enterprise.securityManager:securityManager.alias
     */
    alias: string;
  }

  /**
   * Policy type.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  enum SettingsItem {
    /**
     * Device name.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DEVICE_NAME = 0,

    /**
     * Three-key navigation.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    FLOATING_NAVIGATION = 1,

    /**
     * Screen off policy for battery power supply scenario.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    SCREEN_OFF_DC = 2,

    /**
     * Screen off policy for AC power supply scenario.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    SCREEN_OFF_AC = 3,

    /**
     * Power policy for battery power supply scenario.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    POWER_POLICY_DC = 4,

    /**
     * Power policy for AC power supply scenario.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    POWER_POLICY_AC = 5
  }

  /**
   * Describes the setting item list.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  enum SettingsMenu {
    /**
     * Account.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ACCOUNT_ID = 0,

    /**
     * Wi-Fi.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    WIFI = 1,

    /**
     * WLAN proxy.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    WIFI_PROXY_SETTINGS = 2,

    /**
     * WLAN IP.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    WIFI_IP_SETTINGS = 3,

    /**
     * Bluetooth/NearLink & Bluetooth.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    BLUETOOTH = 4,

    /**
     * Network.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    NETWORK = 5,

    /**
     * Mobile network.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MOBILE_NETWORK = 6,

    /**
     * More connectivity options - Super Device.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SUPER_DEVICE = 7,

    /**
     * More connectivity options.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MORE_CONNECTIVITY_OPTIONS = 8,

    /**
     * Home screen & style.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    HOME_SCREEN_STYLE = 9,

    /**
     * Display & brightness.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DISPLAY_BRIGHTNESS = 10,

    /**
     * Sounds & vibration.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SOUND_VIBRATION = 11,

    /**
     * Notifications & status bar.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    NOTIFICATIONS = 12,

    /**
     * Biometrics & screen lock.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    BIOMETRICS_PASSWORD = 13,

    /**
     * Apps & services.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    APPS_AND_SERVICES = 14,

    /**
     * Battery.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    BATTERY = 15,

    /**
     * Storage.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    STORAGE = 16,

    /**
     * Privacy & security.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    PRIVACY_AND_SECURITY = 17,

    /**
     * Digital Balance.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DIGITAL_BALANCE = 18,

    /**
     * Smart assistant.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SMART_ASSISTANT = 19,

    /**
     * Accessibility.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ACCESSIBILITY = 20,

    /**
     * System.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SYSTEM = 21,

    /**
     * About.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ABOUT_DEVICE = 22,

    /**
     * System - system navigation.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SYSTEM_NAVIGATION = 23,

    /**
     * System - Language & region.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    LANGUAGE_REGION = 24,

    /**
     * System - Input method.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    INPUT_METHODS = 25,

    /**
     * System - Date & time.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DATE_TIME = 26,

    /**
     * System - Data Clone.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DATA_CLONE = 27,

    /**
     * System - Backup & Restore.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    BACKUP_SETTINGS = 28,

    /**
     * System - Reset.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    RESET = 29,

    /**
     * System - SuperHub.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SUPERHUB = 30,

    /**
     * System - User Experience Improvement Program.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    USER_EXPERIENCE = 31,

    /**
     * More connectivity options - ScreenCast.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SCREEN_CAST = 32,

    /**
     * Printers & scanners.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    PRINTERS_SCANNERS = 33,

    /**
     * Mobile network - Mobile data.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MOBILE_DATA = 34,

    /**
     * Mobile network - Personal hotspot.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    PERSONAL_HOTSPOT = 35,

    /**
     * Mobile network - SIM management.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SIM_MANAGEMENT = 36,

    /**
     * Mobile network - Airplane mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    AIRPLANE_MODE = 37,

    /**
     * Mobile network - Management data usage.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MANAGE_DATA_USAGE = 38,

    /**
     * Mobile network - VPN.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    VPN_SETTINGS = 39,

    /**
     * Display & brightness - Text & display size.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    TEXT_DISPLAY_SIZE = 40,

    /**
     * System - App duplicator.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    APP_DUPLICATOR = 41,

    /**
     * Search.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SEARCH = 42
  }

  /**
   * Enumerates switch names.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum SwitchKey {
    /**
     * NearLink.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    NEARLINK = 0,

    /**
     * Bluetooth.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    BLUETOOTH = 1,

    /**
     * Wi-Fi.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    WIFI = 2,

    /**
     * NFC.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    NFC = 3
  }

  /**
   * Enumerates switch states.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum SwitchStatus {
    /**
     * On.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    ON = 0,

    /**
     * Off.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    OFF = 1,

    /**
     * Forced-on.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    FORCE_ON = 2
  }

  /**
   * Enumerates control panel quick toggle list icons (1*1 area). Different devices may support
   * different toggles. If a toggle is not supported by the current device, the setting does not
   * take effect, and the control panel does not display the corresponding icon.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  enum ControlPanelQuickToggleType {
    /**
     * Flashlight.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    FLASHLIGHT = 0,

    /**
     * Ring mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    RING_MODE = 1,

    /**
     * Rotation lock.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    ROTATION_LOCK = 2,

    /**
     * Scan.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    SCAN = 3,

    /**
     * Harmony Share.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    HARMONY_SHARE = 4,

    /**
     * Airplane mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    AIRPLANE_MODE = 5,

    /**
     * Mobile data.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    MOBILE_DATA = 6,

    /**
     * Personal hotspot.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    PERSONAL_HOTSPOT = 7,

    /**
     * Screenshot.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    SCREENSHOT = 8,

    /**
     * Screen recording.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    SCREEN_RECORDING = 9,

    /**
     * Wireless cast.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    WIRELESS_CAST = 10,

    /**
     * Location.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    LOCATION = 11,

    /**
     * Music recognition.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    MUSIC_RECOGNITION = 12,

    /**
     * NFC.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    NFC = 13,

    /**
     * Eye comfort mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    EYE_COMFORT_MODE = 14,

    /**
     * Dark mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    DARK_MODE = 15,

    /**
     * Super privacy.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    SUPER_PRIVACY = 16,

    /**
     * Super hub.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    SUPER_HUB = 17,

    /**
     * Power saving mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    POWER_SAVING_MODE = 18,

    /**
     * Performance mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    PERFORMANCE_MODE = 19,

    /**
     * Youth mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    YOUTH_MODE = 20,

    /**
     * E-book mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    EBOOK_MODE = 21,

    /**
     * Sound recorder.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    SOUND_RECORDER = 22,

    /**
     * Calculator.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    CALCULATOR = 23,

    /**
     * Clock.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    CLOCK = 24,

    /**
     * Remote control.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    REMOTE_CONTROL = 25,

    /**
     * Camera.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    CAMERA = 26,

    /**
     * Wireless reverse charging.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    WIRELESS_REVERSE_CHARGING = 27,

    /**
     * Quick remind.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    QUICK_REMIND = 28,

    /**
     * Celia translate.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    CELIA_TRANSLATE = 29,

    /**
     * Quick note.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    QUICK_NOTE = 30,

    /**
     * Multi-window.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    MULTI_WINDOW = 31,

    /**
     * Extreme cooling.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    EXTREME_COOLING = 32,

    /**
     * Celia captions.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    CELIA_CAPTIONS = 33,

    /**
     * Single-hand mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    SINGLE_HAND_MODE = 34,

    /**
     * Celia meeting.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    CELIA_MEETING = 35,

    /**
     * Education space.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    EDUCATION_SPACE = 36,

    /**
     * Computer mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    COMPUTER_MODE = 37,

    /**
     * Anti-peeping.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    ANTI_PEEPING = 38,

    /**
     * Microphone.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    MICROPHONE = 39,

    /**
     * Keyboard and mouse sharing.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    KEYBOARD_MOUSE_SHARING = 40,

    /**
     * Display mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    DISPLAY_MODE = 41,

    /**
     * Partial screenshot.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    PARTIAL_SCREENSHOT = 42,

    /**
     * Clipboard history.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    CLIPBOARD_HISTORY = 43,

    /**
     * ECG measurement.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    ECG_MEASUREMENT = 44,

    /**
     * Heart rate measurement.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    HEART_RATE_MEASUREMENT = 45,

    /**
     * Virtual touchpad.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    VIRTUAL_TOUCHPAD = 46,

    /**
     * Select to speak.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    SELECT_TO_SPEAK = 47
  }

  /**
   * Enumerates control panel top toggle list icons (1*2 area). Different devices may support
   * different toggles. If a toggle is not supported by the current device, the setting does not
   * take effect, and the control panel does not display the corresponding icon.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  enum ControlPanelTopToggleType {
    /**
     * Super Device.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    SUPER_DEVICE = 0,

    /**
     * Brightness.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    BRIGHTNESS = 1,

    /**
     * Scenario mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    SCENARIO_MODE = 2,

    /**
     * Volume.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    VOLUME = 3,

    /**
     * Vertical volume and brightness slider.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    VOLUME_BRIGHTNESS_SLIDER = 4,

    /**
     * Hotspot.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    HOTSPOT = 5,

    /**
     * Mobile data.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    MOBILE_DATA = 6
  }


  /**
   * Enterprise display information. This interface is used to set or query the enterprise customized copywriting(
   * enterprise name) displayed on the lock screen and home page.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  interface DisPlayInfo {
    /**
     * Enterprise display information. The inner layer is the JSON text of the enterprise name configured by language.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.1.0
     */
    enterpriseName: string;
  }

  /**
   * Sets the device screen-off time.
   *
   * @permission ohos.permission.ENTERPRISE_SET_SCREENOFF_TIME
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } time - Screen-off time to set, in milliseconds. You are advised to set this parameter to the
   *     device's optional screen-off time.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead deviceSettings.setValue
   */
  function setScreenOffTime(admin: Want, time: number): void;

  /**
   * Obtains the device screen-off time. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<number> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null** and **data** is the screen-off time in ms. If the operation fails, **err** is an error
   *     object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead deviceSettings.getValue
   */
  function getScreenOffTime(admin: Want, callback: AsyncCallback<number>): void;

  /**
   * Obtains the device screen-off time. This API uses an asynchronous promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<number> } Promise used to return the screen-off time, in ms.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead deviceSettings.getValue
   */
  function getScreenOffTime(admin: Want): Promise<number>;

  /**
   * Installs a user certificate. This API uses a callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { CertBlob } certificate - Certificate information. The certificate file must be stored in the path that the
   *     app has the permission to access, such as the app sandbox path. For details about the mapping between the app
   *     sandbox path and the actual physical path, see
   *     [Mappings Between App Sandbox Paths and Physical Paths](docroot://file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths).
   * @param { AsyncCallback<string> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead @ohos.enterprise.securityManager:securityManager.installUserCertificate
   */
  function installUserCertificate(admin: Want, certificate: CertBlob, callback: AsyncCallback<string>): void;

  /**
   * Installs a user certificate. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { CertBlob } certificate - Certificate information. The certificate file must be stored in the path that the
   *     app has the permission to access, such as the app sandbox path. For details about the mapping between the app
   *     sandbox path and the actual physical path, see
   *     [Mappings Between App Sandbox Paths and Physical Paths](docroot://file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths).
   * @returns { Promise<string> } Promise used to return the URI of the installed certificate. This URI can be used to
   *     uninstall the certificate.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead @ohos.enterprise.securityManager:securityManager.installUserCertificate
   */
  function installUserCertificate(admin: Want, certificate: CertBlob): Promise<string>;

  /**
   * Uninstalls a user certificate. This API uses a callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } certUri - Certificate URI, which is set and returned by the user certification installation API
   *     [installUserCertificate]{@link deviceSettings.installUserCertificate}.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead @ohos.enterprise.securityManager:securityManager.uninstallUserCertificate
   */
  function uninstallUserCertificate(admin: Want, certUri: string, callback: AsyncCallback<void>): void;

  /**
   * Uninstalls a user certificate. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } certUri - Certificate URI, which is set and returned by the user certification installation API
   *     [installUserCertificate]{@link deviceSettings.installUserCertificate}.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when a user certificate fails
   *     to be uninstalled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead @ohos.enterprise.securityManager:securityManager.uninstallUserCertificate
   */
  function uninstallUserCertificate(admin: Want, certUri: string): Promise<void>;

  /**
   * Sets the power policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { PowerScene } powerScene - Scenario to which the power policy applies. Currently, only the timeout scenario
   *     is supported.
   * @param { PowerPolicy } powerPolicy - Power policy.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead deviceSettings.setValue
   */
  function setPowerPolicy(admin: Want, powerScene: PowerScene, powerPolicy: PowerPolicy): void;

  /**
   * Obtains the power policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { PowerScene } powerScene - Scenario to which the power policy applies. Currently, only the timeout scenario
   *     is supported.
   * @returns { PowerPolicy } Power policy.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead deviceSettings.getValue
   */
  function getPowerPolicy(admin: Want, powerScene: PowerScene): PowerPolicy;

  /**
   * Sets the device policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } item - Type of the policy to set.
   *     <br>- **screenOff**: device screen-off policy. For PCs/2-in-1 devices, the device power policy can be set for
   *     both battery and power modes.
   *     <br>- **dateTime**: system time settings.
   *     <br>- **powerPolicy**: device power policy. This capability is supported only on PCs/2-in-1 devices. After the
   *     policy is set, the **Settings** > **Power & battery** screen is not refreshed. The settings do not take effect
   *     on phones or tablets.
   *     <br>For PCs/2-in-1 devices, the device power policy can be set only for battery supply. When the sleep delay
   *     policy upon device screen-off due to timeout is set, the sleep action takes effect after the sleep time shown
   *     in the **Settings** > **Power & battery** screen, followed by an additional **delayTime**.
   *     <br>- **eyeComfort**: eye comfort mode. This parameter is supported since API version 23. This mode can only be
   *     enabled all day or disabled.
   *     <br>- **defaultInputMethod**: default input method. This parameter is supported since API version 23.
   * @param { string } value - Policy type value.
   *     <br>If **item** is **screenOff**, **value** is the screen-off time, in ms. It is recommended that **value** be
   *     consistent with the options in the drop-down list box on the settings page. Passing **-1** to set the screen to
   *     never turn off is supported only on PCs/2‑in‑1 devices. This value does not take effect on other device types.
   *     <br>If **item** is **dateTime**, **value** is the system time to set, in ms.
   *     <br>If **item** is **powerPolicy**, **value** is a JSON string in {"powerScene":xx,"powerPolicy":{"
   *     powerPolicyAction":xx,"delayTime":xx}} format.
   *     <br>**powerScene** indicates the power policy scenario. The following values are supported:
   *     <br>- **0**: screen-off due to timeout.
   *     <br>**powerPolicyAction** indicates the sleep action policy scenario. The following values are supported:
   *     <br>- **0**: No action is performed.
   *     <br>- **1**: enter sleep mode automatically.
   *     <br>- **2**: forcibly enter sleep mode.
   *     <br>- **3**: enter sleep mode. This policy does not take effect currently.
   *     <br>- **4**: power off.
   *     <br>**delayTime** indicates the delay time (unit: ms). The value cannot be **30000**. Other values are allowed.
   *     <br>If **item** is **eyeComfort**, **value** is a string indicating the status of the eye comfort mode.
   *     <br>- **on**: The eye comfort mode is enabled all day.
   *     <br>- **off**: The eye comfort mode is disabled.
   *     <br>If **item** is **defaultInputMethod**, **value** is a string indicating the name of the input method
   *     application bundle.
   *     <br>- You can use [getCurrentInputMethod]{@link @ohos.inputMethod:inputMethod.getCurrentInputMethod} to obtain
   *     the current input method application bundle name.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setValue(admin: Want, item: string, value: string): void;

  /**
   * Obtains a device setting policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } item - Type of the policy to set.
   *     <br>- **screenOff**: device screen-off policy. For PCs/2-in-1 devices, the screen-off policy for battery supply
   *     can be queried.
   *     <br>- **powerPolicy**: device power policy, which takes effect only for PCs/2-in-1 devices. Only the power
   *     policy for battery supply can be queried.
   *     <br>- **eyeComfort**: eye comfort mode. This parameter is supported since API version 23.
   * @returns { string } Policy type value.
   *     <br>If **item** is **screenOff**, the device screen-off time (in ms) is returned. For PCs/2-in-1 devices, the
   *     device screen-off time (in ms) in battery mode is returned.
   *     <br>If **item** is **powerPolicy**, the power policy is returned. For PCs/2-in-1 devices, the power policy in
   *     battery mode is returned. The power policy a JSON string in {"powerScene":xx,"powerPolicy":{"powerPolicyAction"
   *     :xx,"delayTime":xx}} format. **powerScene** indicates the power policy scenario, **delayTime** indicates the
   *     delay time (in milliseconds), and **powerPolicyAction** indicates the sleep policy.
   *     <br>The value of **powerScene** can be:
   *     <br>- **0**: timeout.
   *     <br>The value of **powerPolicyAction** can be:
   *     <br>- **0**: No action is performed.
   *     <br>- **1**: enter sleep mode automatically.
   *     <br>- **2**: forcibly enter sleep mode.
   *     <br>- **3**: enter sleep mode. This policy does not take effect currently.
   *     <br>- **4**: power off.
   *     <br>If **item** is **eyeComfort**, **value** is a string indicating the status of the eye comfort mode.
   *     <br>- **on**: The eye comfort mode is enabled all day.
   *     <br>- **off**: The eye comfort mode is disabled.
   *     <br>- **unknown**: other modes.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getValue(admin: Want, item: string): string;

  /**
   * Sets the home screen wallpaper. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_WALLPAPER
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } fd - File descriptor of the image to be set as the home screen wallpaper. The file descriptor of
   *     an image in the application's sandbox directory can be obtained via the file.fs.
   *     [openSync]{@link @ohos.file.fs:openSync} API. The size of the wallpaper image must not exceed 100 MB.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when the home screen wallpaper
   *     fails to be set.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setHomeWallpaper(admin: Want, fd: number):  Promise<void>;

  /**
   * Sets the lock screen wallpaper. This API uses a promise to return the result. Enterprise device administrator
   * applications can use this API to uniformly set the lock screen wallpaper for enterprise devices, for purposes such
   * as corporate branding or security control.
   *
   * @permission ohos.permission.ENTERPRISE_SET_WALLPAPER
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } fd - File descriptor of the image to be set as the lock screen wallpaper. The file descriptor of
   *     an image in the application's sandbox directory can be obtained via the file.fs.
   *     [openSync]{@link @ohos.file.fs:openSync} API. The size of the wallpaper image must not exceed 100 MB.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when the lock screen wallpaper
   *     fails to be set.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setUnlockWallpaper(admin: Want, fd: number):  Promise<void>;

  /**
   * Adds a setting item to the hidden setting item list of the current user. Then the setting item is hidden in the
   * current user's settings menu and cannot be found in settings search. Even if the setting item is located through
   * some means, it cannot be opened when tapped. The settings take effect immediately after the API is called. The
   * Settings application does not need to be restarted.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<SettingsMenu> } menusToHidden - Hidden setting item list.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function addHiddenSettingsMenu(admin: Want, menusToHidden: Array<SettingsMenu>): void;

  /**
   * Removes a setting item from the hidden setting item list of the current user. Setting items in the hidden setting
   * item list are hidden in the current user's settings menu and cannot be found in settings search. Even if a setting
   * item is located through some means, it cannot be opened when tapped. If the remaining hidden setting item list is
   * empty after the removal, all setting items are displayed. The settings take effect immediately after the API is
   * called. The Settings application does not need to be restarted.
   *
   * Since API version 26.0.0, if you call
   * [setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount} to
   * disable [SUPER_HUB]{@link @ohos.enterprise.restrictions:restrictions.FeatureForAccount} and then call this API to
   * remove SuperHub from the hidden setting item list, a policy conflict occurs and error code 9200010 is reported.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<SettingsMenu> } menusToHidden - Hidden setting item list.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured. [since 26.0.0]
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function removeHiddenSettingsMenu(admin: Want, menusToHidden: Array<SettingsMenu>): void;

  /**
   * Obtains the hidden setting item list of the current user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Array<SettingsMenu> } Hidden setting item list.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function getHiddenSettingsMenu(admin: Want): Array<SettingsMenu>;

  /**
   * Sets the device policy for a specified user. This API allows you to set a specific parameter for a given user, such
   * as setting the device name for user 100.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { SettingsItem } item - Type of the policy to set.
   * @param { number } accountId - User ID, which must be greater than or equal to 0.
   *     <br>**accountId** can be obtained via APIs such as
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}.
   * @param { string } value - Policy type value.
   *     <br>When **item** is set to [SettingsItem.DEVICE_NAME]{@link deviceSettings.SettingsItem}, **value** indicates
   *     the device name, which is a character string. The string length ranges from 1 to 100. Only the device name of
   *     the current user can be set. If the device name of another user is set, error code 9200012 is returned.
   *     <br>When **item** is set to [SettingsItem.FLOATING_NAVIGATION]{@link deviceSettings.SettingsItem}, this API can
   *     be called properly on phones and tablets but returns error code 801 on other devices. Only the three-button
   *     navigation of the current user can be set. Setting other users' three-button navigation does not take effect.
   *     The **value** parameter indicates the three-button navigation switch state.
   *     <br>- **'0'**: Three-button navigation is enabled. (If the Kiosk mode has been entered via
   *     [enterKioskMode]{@link @ohos.app.ability.kioskManager:kioskManager.enterKioskMode}, the display of three-button
   *     navigation requires that the bottom gesture is enabled. Specifically, three-button navigation is displayed only
   *     when both the three-button navigation switch and the bottom gesture switch are enabled. The bottom gesture can
   *     be enabled or disabled using the
   *     [applicationManager.setKioskFeatures]{@link @ohos.enterprise.applicationManager:applicationManager.setKioskFeatures}
   *     API.)
   *     <br>- **'1'**: Three-button navigation is disabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function setValueForAccount(admin: Want, item: SettingsItem, accountId: number, value: string): void;

  /**
   * Sets the device policy for a specified user without passing in the administrator **Want**.
   *
   * The caller must have been enabled as an enterprise administrator in advance, for example, by calling
   * [enableAdmin]{@link @ohos.enterprise.adminManager:adminManager.enableAdmin}. This API uses the caller's own
   * administrator information automatically. Only the policy items that support cross-account settings
   * (**SCREEN_OFF_DC**, **SCREEN_OFF_AC**, **POWER_POLICY_DC**, and **POWER_POLICY_AC**) can be set through
   * this overload.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { SettingsItem } item - Type of the policy to set. Only **SCREEN_OFF_DC**, **SCREEN_OFF_AC**,
   *     **POWER_POLICY_DC**, and **POWER_POLICY_AC** are supported.
   * @param { number } accountId - User ID, which must be greater than or equal to 100.
   *     <br>If **accountId** is less than 100, error code 9200006 is returned.
   * @param { string } value - device settings policy.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     <br>1. The hardware does not support the capability.
   *     <br>2. The chip does not support the capability.
   *     <br>3. A dependent service feature is not supported.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200006 - The specified account ID is invalid.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 9200020 - Cross-user configuration is not supported.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  function setValueForAccount(item: SettingsItem, accountId: number, value: string): void;

  /**
   * Obtains the device policy of a specified user. This API allows you to obtain a specific parameter of a given user,
   * such as obtaining the device name of user 100.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { SettingsItem } item - Type of the policy to set. The following policy types are supported: **DEVICE_NAME**
   *     (device name) and **FLOATING_NAVIGATION** (three-button navigation).
   * @param { number } accountId - User ID, which must be greater than or equal to 0.
   *     <br>**accountId** can be obtained via APIs such as
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}.
   * @returns { string } Policy type value.
   *     <br>When **item** is set to [SettingsItem.DEVICE_NAME]{@link deviceSettings.SettingsItem}, this API returns the
   *     device name of the current user. If the device name of another user is queried, error code 9200012 is returned.
   *     <br>When **item** is set to [SettingsItem.FLOATING_NAVIGATION]{@link deviceSettings.SettingsItem}, this API
   *     returns the three-key navigation switch state for the specified user.
   *     <br>When **item** is set to [SettingsItem.FLOATING_NAVIGATION]{@link deviceSettings.SettingsItem}, this API can
   *     be called properly on phones and tablets but returns error code 801 on other devices.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function getValueForAccount(admin: Want, item: SettingsItem, accountId: number): string;

  /**
   * Obtains the device policy of a specified user without passing in the administrator **Want**.
   *
   * The caller must have been enabled as an enterprise administrator in advance. This API uses the caller's own
   * administrator information automatically. Only the policy items that support cross-account settings
   * (**SCREEN_OFF_DC**, **SCREEN_OFF_AC**, **POWER_POLICY_DC**, and **POWER_POLICY_AC**) can be queried through
   * this overload.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { SettingsItem } item - Type of the policy to obtain. Only **SCREEN_OFF_DC**, **SCREEN_OFF_AC**,
   *     **POWER_POLICY_DC**, and **POWER_POLICY_AC** are supported.
   * @param { number } accountId - User ID, which must be greater than or equal to 100.
   *     <br>If **accountId** is less than 100, error code 9200006 is returned.
   * @returns { string } device settings policy.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200006 - The specified account ID is invalid.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 9200020 - Cross-user configuration is not supported.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  function getValueForAccount(item: SettingsItem, accountId: number): string;

  /**
   * Sets the state of a switch. This API can enable or disable NearLink, Bluetooth, Wi-Fi, and NFC. After the setting
   * is applied, users can manually enable or disable them. Bluetooth and NFC can be forced on. Once set, they cannot be
   * manually turned on or off by the user. If a switch has been disabled through the
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy} API, error code 203
   * will be reported when you attempt to set the state of the switch through this API. In this case, you need to use
   * the [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy} API to enable the
   * switch. When multiple MDM applications are present on the device, there are no conflicts among the switch states
   * set by different MDM applications. The policy set last takes effect. The three states, on (user can manually enable
   * /disable), off (user can manually enable/disable), and forced on (user cannot manually disable), can be switched
   * arbitrarily, and no conflict occurs.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { SwitchKey } key - Switch name. An application that has obtained the
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS permission and has been activated as the built-in device
   *     administrator application via
   *     [startAdminProvision]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision} can use this API to
   *     set the following switches: NearLink, Bluetooth, and Wi-Fi. Attempting to set the NFC switch will result in
   *     error code 9200002.
   * @param { SwitchStatus } status - Switch state. An application that has obtained the
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS permission and has been activated as the built-in device
   *     administrator application via
   *     [startAdminProvision]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision} can use this API to
   *     set the following states: ON and OFF. Attempting to set the FORCE_ON state will result in error code 9200002.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201042 - Failed to toggle the switch state.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setSwitchStatus(admin: Want, key: SwitchKey, status: SwitchStatus): void;

  /**
   * Obtains enterprise display information.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @returns { DisPlayInfo }This interface is used to obtain enterprise display information in JSON format.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  function getEnterpriseDisplayInfo(): DisPlayInfo;

  /**
   * Set enterprise display information.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { DisPlayInfo } displayInfo - Specifies the enterprise information to be displayed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  function setEnterpriseDisplayInfo(displayInfo: DisPlayInfo): void;

  /**
   * Sets whether to enable the control panel restricted mode. When enabled, the control panel
   * displays only the toggles in the whitelist. If no whitelist is configured, all croppable
   * icons in the area are hidden. When disabled, the whitelist does not take effect.
   *
   * This API is a device-level setting. It takes effect for all users and persists after a
   * restart. If multiple administrators call this API, the last successful setting takes effect.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { boolean } restricted - Whether to enable control panel restricted mode.
   *     The value **true** means enabling; the value **false** means disabling.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  function setControlPanelRestricted(restricted: boolean): Promise<void>;
  /**
   * Queries whether the control panel restricted mode is enabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @returns { Promise<boolean> } Promise used to return the restricted mode status. The value **true**
   *     means the restricted mode is enabled; the value **false** means the restricted mode is disabled.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  function getControlPanelRestricted(): Promise<boolean>;
  /**
   * Sets the control panel top toggle list (1*2 area) whitelist for a specified account.
   * The whitelist takes effect only when the restricted mode is enabled. If the restricted mode
   * is disabled, the whitelist is still saved but does not crop icons. The new list overwrites
   * the existing list. An empty array means all croppable icons in the area are hidden.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Array<ControlPanelTopToggleType> } toggleList - Toggle list whitelist for the 1*2 area.
   *     An empty array means all croppable icons in the area are hidden.
   * @param { number } accountId - User ID, which must be greater than or equal to 0. The specified user must exist.
   *     You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}
   *     to obtain the user ID. Whether cross-user setting is supported depends on the administrator type and the device.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200006 - The specified account ID is invalid.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  function setControlPanelTopToggleListForAccount(toggleList: Array<ControlPanelTopToggleType>,
    accountId: number): Promise<void>;
  /**
   * Queries the control panel top toggle list (1*2 area) whitelist for a specified account.
   * If no whitelist is configured or the configured whitelist is an empty array, an empty array
   * is returned.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { number } accountId - User ID, which must be greater than or equal to 0. The specified user must exist.
   *     You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}
   *     to obtain the user ID.
   * @returns { Promise<Array<ControlPanelTopToggleType>> } Promise used to return the control panel 1*2 area
   *     toggle whitelist. An empty array means no whitelist is configured or all croppable icons in the area
   *     are hidden.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200006 - The specified account ID is invalid.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  function getControlPanelTopToggleListForAccount(accountId: number): Promise<Array<ControlPanelTopToggleType>>;
  /**
   * Sets the control panel quick toggle list (1*1 area) whitelist for a specified account.
   * The whitelist takes effect only when the restricted mode is enabled. If the restricted mode
   * is disabled, the whitelist is still saved but does not crop icons. The new list overwrites
   * the existing list. An empty array means all croppable icons in the area are hidden.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Array<ControlPanelQuickToggleType> } toggleList - Toggle list whitelist for the 1*1 area.
   *     An empty array means all croppable icons in the area are hidden.
   * @param { number } accountId - User ID, which must be greater than or equal to 0. The specified user must exist.
   *     You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}
   *     to obtain the user ID. Whether cross-user setting is supported depends on the administrator type and the device.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200006 - The specified account ID is invalid.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  function setControlPanelQuickToggleListForAccount(toggleList: Array<ControlPanelQuickToggleType>,
    accountId: number): Promise<void>;
  /**
   * Queries the control panel quick toggle list (1*1 area) whitelist for a specified account.
   * If no whitelist is configured or the configured whitelist is an empty array, an empty array
   * is returned.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { number } accountId - User ID, which must be greater than or equal to 0. The specified user must exist.
   *     You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}
   *     to obtain the user ID.
   * @returns { Promise<Array<ControlPanelQuickToggleType>> } Promise used to return the control panel 1*1 area
   *     toggle whitelist. An empty array means no whitelist is configured or all croppable icons in the area
   *     are hidden.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200006 - The specified account ID is invalid.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.1.0
   */
  function getControlPanelQuickToggleListForAccount(accountId: number): Promise<Array<ControlPanelQuickToggleType>>;
}

export default deviceSettings;