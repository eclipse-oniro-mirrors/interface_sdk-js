/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * ###### Constraints
 * <br>
 * <br>To ensure system security and stability and prevent **InputMethodExtensionAbility** from abusing system resources,
 * the system imposes capability control. References to certain modules are not supported. For details, see
 * [Appendix](docroot://reference/apis-ime-kit/js-apis-inputmethod-extension-ability.md#appendix).
 * <br>
 * <br>In addition, input method apps are classified into basic mode and full experience mode. The two modes are described
 * as follows:
 * <br>
 * <br>**Basic mode:**
 * In basic mode, the input method extension (**InputMethodExtensionAbility**) process cannot launch other UIAbilities
 * or ExtensionAbilities.
 * <br>
 * <br>In basic mode, the input method extension is subject to system control. It cannot use various APIs that access or
 * expose users' personal data, nor can it transfer data out of the process. The controlled features include but are not
 * limited to: network, SMS, telephony, microphone, location, camera, Bluetooth, wallpaper, payment, calendar, game,
 * speaker, Wi-Fi, clipboard, multimedia, contacts, common events, system accounts, health data, map services, push
 * services, unified search, shared memory, distributed features, advertising device identifiers, and vibration.
 * <br>
 * <br>In basic mode, the input method extension can use the system capabilities necessary for basic input features, such as
 * IME Kit, ArkUI, window, graphics, and screen management.
 * <br>
 * <br>In basic mode, the input method extension has read-only access to the shared sandbox and read/write access to its
 * dedicated sandbox. The main app entry has read/write access to both the shared sandbox and its dedicated sandbox.
 * <br>
 * <br>**Full experience mode:**
 * <br>
 * <br>In full experience mode, the input method extension is not subject to the restrictions of basic mode. For example, it
 * can launch other UIAbilities or ExtensionAbilities and call APIs that access user data.
 * <br>
 * <br>In full experience mode, the input method extension has read/write access to the shared sandbox.
 * <br>
 * <br>###### Appendix
 * <br>
 * <br>**InputMethodExtensionAbility** does not support references to the following modules.
 * | Kit | Module |
 * | -------- | -------- |
 * | Ability Kit |  [@ohos.ability.featureAbility (FeatureAbility Module)]{@link @ohos.ability.featureAbility:featureAbility}
 * </br>[@ohos.ability.particleAbility (ParticleAbility Module)]{@link @ohos.ability.particleAbility:particleAbility} |
 * | Background Tasks Kit |
 * [@ohos.resourceschedule.backgroundTaskManager (Background Task Management)]{@link @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager}
 * </br>[@ohos.reminderAgentManager (Agent-powered Reminder)]{@link @ohos.reminderAgentManager:reminderAgentManager}
 * </br> [@ohos.reminderAgent (Agent-powered Reminder)]{@link @ohos.reminderAgent:reminderAgent} |
 * | Basic Services Kit | [@ohos.account.osAccount (OS Account Management)]{@link @ohos.account.osAccount:osAccount}
 * </br>[@ohos.account.distributedAccount (Distributed Account Management)]{@link @ohos.account.distributedAccount:distributedAccount}
 * </br>[@ohos.wallpaper (Wallpaper)]{@link @ohos.wallpaper:wallpaper} |
 * | Connectivity Kit |  [@ohos.bluetooth (Bluetooth)]{@link @ohos.bluetooth:bluetooth}
 * </br>[@ohos.bluetoothManager (Bluetooth)]{@link @ohos.bluetoothManager:bluetoothManager}
 * </br>[nfctech (Standard NFC Technology)]{@link ./tag/nfctech}</br>[@ohos.nfc.controller (Standard NFC)]{@link @ohos.nfc.controller:nfcController}
 * </br>[@ohos.nfc.cardEmulation (Standard NFC Card Emulation)]{@link @ohos.nfc.cardEmulation:cardEmulation}
 * </br>[@ohos.connectedTag (Active Tags)]{@link @ohos.connectedTag:connectedTag}
 * </br>[@ohos.wifiext (WLAN Extension)]{@link @ohos.wifiext:wifiext}</br>[@ohos.wifiManager (WLAN)]{@link @ohos.wifiManager:wifiManager}
 * </br>[@ohos.wifiManagerExt (WLAN Extension)]{@link @ohos.wifiManagerExt:wifiManagerExt}
 * </br>[tagSession (Standard NFC Tag Session)]{@link ./tag/tagSession:TagSession} |
 * | Location Kit | [@ohos.geolocation (Geolocation)]{@link @ohos.geolocation:geolocation}
 * </br>[@ohos.geoLocationManager (Geolocation Manager)]{@link @ohos.geoLocationManager:geoLocationManager} |
 * | Telephony Kit | [@ohos.telephony.call (Call)]{@link @ohos.telephony.call:call}</br>[@ohos.telephony.data (Cellular Data)]{@link @ohos.telephony.data:data}
 * </br>[@ohos.telephony.observer (Telephony Status Observer)]{@link @ohos.telephony.observer:observer}
 * </br>[@ohos.telephony.radio (Network Search)]{@link @ohos.telephony.radio:radio}
 * </br>[@ohos.telephony.sms (SMS)]{@link @ohos.telephony.sms:sms}</br>[@ohos.telephony.sim (SIM Management)]{@link @ohos.telephony.sim:sim} |
 *
 * @file InputMethodExtensionAbility
 * @kit IMEKit
 */

import Want from './@ohos.app.ability.Want';
import type InputMethodExtensionContext from './@ohos.InputMethodExtensionContext';

/**
 * The **@ohos.InputMethodExtensionAbility** module provides the base class definition for the input method
 * ExtensionAbility. It serves as the entry point and lifecycle management framework for developing input method apps.
 * <br>
 * <br>As the core class module for input method ExtensionAbility, this module defines the **InputMethodExtensionAbility**
 * class which acts as the base extension class for input method apps. You need to inherit this class and implement the
 * **onCreate** and **onDestroy** lifecycle callbacks. The system invokes these callbacks automatically when starting or
 * destroying the input method extension.
 * <br>
 * <br>This module provides two core capabilities: (1) initialization of the input method app via the **onCreate(want)**
 * callback. This callback is invoked when the system launches the input method extension, where you complete
 * initialization tasks such as resource loading and panel creation. (2) resource cleanup for the input method app via
 * the **onDestroy()** callback. This callback is invoked when the system destroys the input method extension, where you
 * release resources. In addition, the **context** property provides an **InputMethodExtensionContext** object, allowing
 * you to perform context-level operations such as destroying the context and launching other apps during the lifecycle.
 * <br>
 * <br>This module is mandatory for input method app development. The workflow is as follows: inherit
 * **InputMethodExtensionAbility** → configure ExtensionAbility information in **module.json5** → **onCreate** (
 * initialization) is triggered upon system startup → **onDestroy** (cleanup) is triggered by system destruction or a
 * proactive developer call to **context.destroy()**.
 * <br>
 * <br> > **NOTE**
 * <br> >
 * <br> > `InputMethodExtensionAbility` defines only the basic lifecycle callbacks `onCreate` and `onDestroy`. The core
 * <br> > interaction capabilities of the input method (such as panel creation/destruction, keyboard event listening, and
 * <br> > client attachment) are obtained from the `InputMethodAbility` object provided by the `@ohos.inputMethodEngine`
 * <br> > module inside the `onCreate` callback. `onCreate` is the only entry for acquiring all key objects and creating
 * <br> > panels, and initialization must be completed within this callback.
 * <br> >
 * <br> > The type of the `context` property of `InputMethodExtensionAbility` is `InputMethodExtensionContext` (from the
 * <br> > `@ohos.InputMethodExtensionContext` module). This represents an association relationship:
 * <br> > `InputMethodExtensionAbility` owns the context capability of `InputMethodExtensionContext`.
 * <br>
 * <!-- | Name | Description |
 * |---|---|
 * | InputMethodExtensionAbility | Base class of the input method ExtensionAbility, providing the lifecycle management framework for input method apps.
 * Key members include: the **context** property (an **InputMethodExtensionContext** object), the **onCreate(want)** method (initialization callback),
 * and the **onDestroy()** method (destruction callback). You need to inherit this class and override the lifecycle method. | -->
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare class InputMethodExtensionAbility {
  /**
   * Context of the **InputMethodExtensionAbility**, inherited from **ExtensionContext**.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  context: InputMethodExtensionContext;

  /**
   * Lifecycle callback invoked when the input method extension is started for initializing the input method app.
   * <br>
   * <br>- Meaning/Function: Initialization callback triggered when the system starts the input method ExtensionAbility. In
   * this callback, you perform all key initialization work for the input method app, including obtaining core
   * capability objects, creating the input method panel, and subscribing to events.
   * <br>- Usage scenarios: Automatically triggered when the system starts the input method ExtensionAbility according to
   * **module.json5**. This is the only entry for initializing the input method app. Acquisition of all key objects and
   * panel creation must be completed within this callback.
   * <br>- Use effect: After the callback finishes execution, the input method app enters the normal running state. The
   * system subsequently triggers events such as keyboard show/hide requests and client attachment. The input method app
   * must finish initialization (for example, subscribing to the **on('inputStart')** event and creating panels) before
   * these events arrive; otherwise, subsequent events may not be responded to properly.
   *
   * @param { Want } want - Want type information related to the current Extension, including the Ability name, bundle
   * name, and so on.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * Lifecycle callback invoked when the input method app is destroyed for resource cleanup.
   * <br>
   * <br>- Meaning/Function: Cleanup callback triggered when the system destroys the input method ExtensionAbility. In this
   * callback, you release panels, cancel event subscriptions, and perform other resource cleanup work.
   * <br>-  Usage scenarios: Automatically triggered when the system proactively destroys the input method ExtensionAbility
   * (for example, when the system reclaims resources or the user switches to another input method) or when you
   * proactively call **context.destroy()** to trigger destruction. Note: After the **onDestroy** callback is executed,
   * **context** becomes unavailable, and the **context** object should not be used during or after the callback.
   * <br>- Use effect: After the callback execution completes, the input method ExtensionAbility process is terminated, and
   * all resources are released. Any subsequent operations will have no effect.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  onDestroy(): void;
}

export default InputMethodExtensionAbility;