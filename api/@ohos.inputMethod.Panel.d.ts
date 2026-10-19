/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * The **@ohos.inputMethod.Panel** module provides data definitions for input method panel attributes, supporting
 * configuration of the panel type and display state. It is applicable to scenarios that require fine-grained control
 * over the display behavior of the input method panel.
 * <br>
 * <br>This module serves as a data module for input method panel attributes. It defines the **PanelInfo** interface and two
 * enum types, **PanelType** and **PanelFlag**, to specify the input method panel type (soft keyboard or status bar) and
 * display state (fixed, floating, or candidate).
 * <br>
 * <br>This module offers capabilities to configure input method panel attributes. An input method app can specify the panel
 * type and state via **PanelInfo** to implement panels in different forms: fixed soft keyboard (default, anchored at
 * the bottom of the screen), floating soft keyboard (freely draggable), and candidate word panel (displays candidate
 * words in an independent window, with visibility controlled by you).
 * <br>
 * <br>Use this module when an input method app needs to create and configure an input method panel. Typical scenarios
 * include creating a default fixed soft keyboard panel, creating a floating keyboard that supports free dragging, or
 * creating a candidate word panel to show input candidates.
 * <br>
 * <br>The data type must be used in combination with the APIs of the **@ohos.inputMethodEngine** module. Pass **PanelInfo**
 * when creating a panel using **InputMethodAbility.createPanel()**, to specify the panel type and state. Typical usage
 * process: construct **PanelInfo** → pass it through **createPanel()** → the system creates a panel of the
 * corresponding type accordingly. Different **PanelFlag** values correspond to distinct panel behaviors: a fixed panel
 * stays anchored at the screen bottom, a floating panel can be dragged freely, and the visibility of a candidate word
 * panel is controlled by you.
 * <br>
 * <br>Key interfaces and enums defined in this module are as follows:
 * <br>
 * | Interface/Type | Description |
 * |---|---|
 * | PanelInfo | Interface for input method panel attribute information. Contains two **properties**: **type** (panel type) and
 * **flag** (panel state type, default value: **FLAG_FIXED**), 
 * used to describe the type and display form of an input method panel. |
 * | PanelType | Enum for input method panel types, which defines panel categories: **SOFT_KEYBOARD** (soft keyboard, value **0**) and
 * **STATUS_BAR** (status bar, value **1**). |
 * | PanelFlag | Enum for input method panel state types, which defines panel display states: **FLAG_FIXED** (fixed, value **0**),
 * **FLAG_FLOATING** (floating, value **1**), **FLAG_CANDIDATE** (candidate, value **2**). The visibility of a candidate‑state panel is controlled by you. |
 * <br>
 * <br>This module is a pure data definition module. **PanelInfo**, as the panel attribute configuration, must be used in
 * combination with APIs of other modules. A typical combination is: in the **@ohos.inputMethodEngine** module, pass
 * **PanelInfo** to specify the panel type and state when creating a panel through **InputMethodAbility.createPanel()**.
 * <br>
 * <br> > **NOTE**
 * <br> >
 * <br> > The visibility of a `FLAG_CANDIDATE` (candidate word state) panel is not controlled by the system. You need to
 * <br> > manage the timing for showing and hiding the candidate word panel based on app scenarios.
 *
 * @file Input Method Panel
 * @kit IMEKit
 */

/**
 * Attribute information of the input method panel. It is used to describe the type and display state of the input
 * method panel and is passed as a configuration parameter when you create an input method panel.
 * <br>
 * <br>- Meaning/Function: Defines the type (soft keyboard or status bar) and display state (fixed, floating, or candidate
 * state) of the input method panel, and serves as the configuration parameter of **InputMethodAbility.createPanel()**
 * to determine the form of the created panel.
 * <br>- Usage scenarios: Used when an input method app needs to create an input method panel through **createPanel()** and
 * specify its type and state. Examples include creating a default fixed-state soft keyboard panel, creating a freely
 * draggable floating-state soft keyboard panel, and creating a candidate-state panel that displays candidate words in
 * an independent window.
 * <br>- Use effect: The set **type** and **flag** determine the type and display form of the created panel. After the
 * settings are complete, the system creates the panel according to the specified type and state. The visibility
 * behavior of the panel is determined by **flag**. The fixed state and floating state are controlled by the system,
 * while the candidate state is controlled by you.
 * <br>
 * <br>Suggestions for the **PanelInfo** parameter:
 * <br>
 * <br>- **type** parameter:
 * <br>- Value range: [PanelType]{@link PanelType} enum values, that is, **SOFT_KEYBOARD** (**0**) or **STATUS_BAR** (**1**
 * ).
 * <br>- Default value: **SOFT_KEYBOARD** (**0**). A soft keyboard panel is created by default if this parameter is not
 * specified.
 * <br>- Usage with related parameters: The **flag** property is currently used only to describe the state of a
 * **SOFT_KEYBOARD** panel. Setting **flag** takes no effect when **type** is set to **STATUS_BAR**.
 * <br>- **flag** parameter:
 * <br>- Value range: [PanelFlag]{@link PanelFlag} enum values, that is, **FLAG_FIXED** (**0**), **FLAG_FLOATING** (**1**),
 * or **FLAG_CANDIDATE** (**2**).
 * <br>- Default value: **FLAG_FIXED** (**0**). A fixed‑state panel is used by default if this parameter is not specified.
 * <br>- Usage scenarios: Select different **flag** values for different scenarios:
 * <br>- **FLAG_FIXED** (**0**): Applies to most default input scenarios. The panel is anchored at the bottom of the
 * screen, and its visibility is managed by the system.
 * <br>- **FLAG_FLOATING** (**1**): Applies to scenarios where the panel position needs to be adjusted freely (for
 * example, landscape‑mode input or multi‑window environments). The panel is draggable, and its visibility is managed by
 * the system.
 * <br>- **FLAG_CANDIDATE** (**2**): Applies to scenarios that require candidate words to be displayed independently. The
 * panel serves as a candidate word window, and the timing for showing and hiding it shall be managed by you.
 * <br>- Use effect:
 * <br>- When **FLAG_FIXED** is set: The panel is anchored at the bottom of the screen, and the system manages its
 * visibility behaviors.
 * <br>- When **FLAG_FLOATING** is set: The panel acts as a floating window that can be dragged freely, and the system
 * manages its visibility behaviors.
 * <br>- When **FLAG_CANDIDATE** is set: The panel acts as a candidate word window. The system does not actively manage
 * its visibility. You must control the timing for showing and hiding the panel by calling **Panel.show()** and
 * **Panel.hide()**.
 * <br>- Specification limits: This parameter applies only to **SOFT_KEYBOARD** panels. Setting **flag** for a
 * **STATUS_BAR** panel takes no effect.
 * <br>- Precautions: When **FLAG_CANDIDATE** is selected, you must manage the visibility of the candidate word panel. This
 * includes calling **Panel.show()** to display the panel when the user starts input, and calling **Panel.hide()** to
 * hide the panel after input ends or the user selects a candidate word.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export interface PanelInfo {
  /**
   * Type of the input method panel. Determines whether the panel is a soft keyboard or a status bar. When the parameter
   * is not specified, the default value is `SOFT_KEYBOARD`(0).
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  type: PanelType;

  /**
   * State type of the input method panel.
   * <br>
   * <br>- The default value is `FLAG_FIXED`(0), indicating a fixed state panel type.
   * <br>- Currently used only to describe the state of a soft keyboard type panel. Setting it for a `STATUS_BAR` type panel
   * has no actual effect.
   * <br>- The show/hide behavior of the panel differs under different state types: `FLAG_FIXED` and `FLAG_FLOATING` are
   * controlled by the system, while `FLAG_CANDIDATE` is controlled by you.
   *
   * @default FLG_FIXED
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  flag?: PanelFlag;
}

/**
 * Enumerates the input method panel state types. Defines the display form of a panel and determines whether the panel
 * is in fixed, floating, or candidate state.
 * <br>
 * <br> > **NOTE**
 * <br> >
 * <br> > This enumeration applies only to **SOFT_KEYBOARD** panels. Setting **PanelFlag** for a **STATUS_BAR** panel takes
 * <br> > no effect.
 * <br> > Suggestions for the **PanelFlag** parameter:
 * <br>
 * <br>- Selection principles:
 * <br>- **FLAG_FIXED** (**0**) is preferred for default scenarios. It is the most commonly‑used panel state, with
 * visibility automatically managed by the system and no extra processing required from you.
 * <br>- Select **FLAG_FLOATING** (**1**) for flexible‑layout scenarios (such as landscape mode or multi‑window
 * environments). Panel position can be adjusted via **Panel.moveTo()**.
 * <br>- Select **FLAG_CANDIDATE** (**2**) when independent candidate word display is required. You are responsible for
 * implementing visibility management logic.
 * <br>- Default configuration: The default value is **FLAG_FIXED** (**0**). When **flag** is not set in **PanelInfo**, the
 * panel is in the fixed state by default.
 * <br>- Precautions: When **FLAG_CANDIDATE** is selected, you must implement the visibility management logic of the
 * candidate word panel; otherwise, the panel will not be shown or hidden automatically. You are advised to show the
 * panel when the user starts input and hide it after input ends or a candidate word is selected.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export enum PanelFlag {
  /**
   * Fixed-state panel type.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  FLAG_FIXED = 0,

  /**
   * Floating-state panel type.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  FLAG_FLOATING,

  /**
   * Candidate-word state panel type.
   * <br>
   * <br>‑ When the input panel is in candidate-word state, it serves as a window for displaying user input candidates.
   * <br>
   * <br>‑ The system does not actively control showing and hiding of the candidate‑word state panel. You need to control
   * its visibility based on app scenarios.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  FLAG_CANDIDATE
}

/**
 * Enumerates the input method panel types. Defines the panel category and determines whether the panel is a soft
 * keyboard or a status bar.
 * <br>
 * <br>Suggestions for the **PanelType** parameter:
 * <br>
 * <br>- Selection principle: An input method app usually needs to create a **SOFT_KEYBOARD** panel as the main keyboard
 * interface. The **STATUS_BAR** panel is optional and is created only when input method status information needs to be
 * displayed.
 * <br>- Specification limits: A single input method app can create only one panel of the **SOFT_KEYBOARD** type and one
 * panel of the **STATUS_BAR** type. An error will be returned if panels of the same type are created repeatedly.
 * <br>- Usage with related APIs: **PanelType** must be used together with **PanelFlag**. Currently, **PanelFlag** is only
 * used to describe the state of a **SOFT_KEYBOARD** panel; for a **STATUS_BAR** panel, the setting of **PanelFlag** has
 * no actual effect.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export enum PanelType {
  /**
   * Soft keyboard.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  SOFT_KEYBOARD = 0,

  /**
   * Status bar.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  STATUS_BAR
}