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
 * The **@ohos.inputMethodList** module is a UI control module oriented to system apps and input method apps. It
 * provides an input method list dialog component.
 * <br>
 * <br>This module is a declarative UI component module. It provides the `InputMethodListDialog`
 * custom dialog component, which is used to display the default input method subtypes and the list of
 * third-party input method apps. It optionally provides an entry for switching input method modes
 * (such as one-handed mode and full-screen mode).
 * <br>
 * <br>Through the dialog component provided by this module, users can view all input methods installed in the current
 * system in the input method list and switch from the default input method to another input method. For preset system
 * input methods, mode options (such as one-handed mode and full-screen mode) can also be displayed in the list for
 * users to switch the display mode of the input method keyboard.
 * <br>
 * <br>This module is used when a system app or an input method app needs to provide an entry for
 * input method switching. Typical scenarios include the input method management page in the system settings app,
 * the settings interface of an input method app, or other system-level interfaces that require users to select and
 * switch input methods. This component can be called only by system apps and input method apps. The `patternOptions`
 * parameter is supported only by preset system input methods.
 * <br>
 * <br>The relationship between this module and other modules in the input method framework is as follows:
 * <br>
 * <br>- [@ohos.inputMethod]{@link @ohos.inputMethod:inputMethod}: Targeted at general foreground apps. Provides input
 * method control and management capabilities (such as showing/hiding the soft keyboard and switching input methods).
 * It can switch input methods through the `switchInputMethod` API, and is suitable for scenarios that do not require
 * an interactive selection interface.
 * <br>- [@ohos.inputMethodEngine]{@link @ohos.inputMethodEngine:inputMethodEngine}:
 * Targeted at input method apps. Provides input method server capabilities such as creating soft keyboard windows and
 * inserting/deleting characters.
 * <br>- **@ohos.inputMethodList** (this module): Targeted at system apps and input method apps.
 * Provides a visualized input method list dialog component, and is suitable for scenarios that require
 * an interactive selection interface.
 * <br>
 * <br> > NOTE
 * <br> >
 * <br> > This component is supported since API version 11. New APIs in later versions are marked with a superscript to
 * <br> > indicate their initial version.
 * <br> > This module contains the following key components and interfaces:
 * <br>
 * | Interface/Struct | Description |
 * |---|---|
 * | InputMethodListDialog | Input method list dialog component, declared using the `@CustomDialog` decorator.
 * Displays the input method list and an optional mode switching entry, which is the core UI component of this module.
 * A `CustomDialogController` must be passed in to control the opening and closing of the dialog,
 * and `PatternOptions` can be optionally passed in to configure the mode switching feature. |
 * | PatternOptions | Input method mode option configuration interface, which defines the resource array of
 * mode options, the index of the mode selected by default, and the mode switching callback.
 * Only preset system input methods support passing in this parameter. |
 * | Pattern | Icon definition interface for a single input method mode,
 * containing two resource properties: the default icon and the selected-state icon. |
 * <br>
 * <br>Using `InputMethodListDialog` requires the combination of multiple APIs: create a `CustomDialogController` >
 * configure `PatternOptions` (optional) > build `InputMethodListDialog` in the builder of `CustomDialogController` >
 * open the dialog through `CustomDialogController.open()`.
 * <br>
 * <br>###### Attributes
 * <br>
 * <br>The [universal attributes]{@link CommonMethod} are not supported.
 * <br>
 * <br>######  Events
 * <br>
 * <br>The [universal events]{@link CommonMethod} are not supported.
 *
 * @file Input Method List
 * @kit IMEKit
 */

 /*** if arkts static */
 import { CustomDialogController, CustomDialog } from '@ohos.arkui.component';
 import { Resource } from './global/resource';
 /*** endif */

/**
 * Represents the configuration of input method mode options, used to define the switching options for keyboard modes.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export interface PatternOptions {
  /**
   * Index of the mode selected by default, corresponding to the index value in the patterns array.
   * <br>
   * <br>Usage scenario: Use this parameter when the default input method needs to preset an initially selected
   * keyboard mode.
   * <br>
   * <br>Use effect: After being set, the mode option corresponding to this index is selected by default when the input
   * method list dialog opens.
   * <br>
   * <br>Value range: [0, **patterns.length** - 1]. If the value is out of this range, it does not take effect,
   * and no mode option is selected when the dialog opens.
   * <br>
   * <br>Default value: If not set, no mode option is selected when the dialog opens.
   * <br>
   * <br>Note: This index value must be within the valid range of the **patterns** array; otherwise,
   * the setting does not take effect.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  defaultSelected?: int;
  /**
   * Array of mode option resources. Each **Pattern** defines the icon and selected-state icon of a keyboard mode.
   * <br>
   * <br>Usage scenario: Configure this parameter when the default input method needs to provide multiple keyboard
   * modes (such as one-handed mode and full-screen mode) for users to choose from.
   * <br>
   * <br>Use effect: After being set, all mode options defined in this array are displayed
   * in the default input method area of the input method list dialog for users to select.
   * <br>
   * <br>Note: The **icon** and **selectedIcon** of each **Pattern** in the **patterns** array must be valid
   * [Resource]{@link Resource} resource references. It is recommended that you configure at least two mode options to
   * provide a meaningful selection function.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  patterns: Array<Pattern>;
  /**
   * Callback function invoked when the mode option changes.
   * <br>
   * <br>Usage scenario: Set this callback when corresponding logic (such as updating the keyboard layout or saving
   * user preferences) needs to be executed when the user switches the keyboard mode.
   * <br>
   * <br>Use effect: When the user taps a mode option in the input method list dialog, the system invokes this callback
   * and passes the index value of the selected mode in the **patterns** array.
   * <br>
   * <br>Note: The callback parameter index is the index value of the selected mode in the **patterns** array,
   * consistent with the value range of **defaultSelected**. In the callback, **defaultSelected** can be updated
   * based on the index value to keep the selected state consistent with the user's choice the next time the
   * dialog opens.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  action: (index: int) => void;
}

/**
 * Represents the definition of the icon resources for input method mode options, used to configure the visual
 * representation of keyboard modes in the dialog. Available only to the current input method (that is, the preset
 * system input method).
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export interface Pattern {
  /**
   * Icon resource for the default (unselected) state of the input method mode option.
   * <br>
   * <br>Usage scenarios: Identify the visual representation of each keyboard mode when it is unselected,
   * allowing users to recognize different mode options in the dialog.
   * <br>
   * <br>Use effect: After setting, this icon is displayed for the mode option in the dialog
   * when it is in the unselected state.
   * <br>
   * <br>Note: A Resource type reference such as **$r('app.media.xxx')** must be used,
   * and the corresponding icon resource file must be added to the project's resource directory.
   * Image resources of the string and PixelMap types are not supported.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  icon: Resource;
  /**
   * Icon resource for the selected state of the input method mode option.
   * <br>
   * <br>Usage scenarios: Identify the visual representation of each keyboard mode when it is selected,
   * forming a selected/unselected visual distinction with **icon** to help users recognize the currently selected mode.
   * <br>
   * <br>Use effect: After setting, this icon is displayed for the mode option in the dialog when it is in the selected
   * state.
   * <br>
   * <br>Usage with related parameters: **selectedIcon** should remain visually consistent with **icon**,
   * differing only by the selected state indicator (such as adding highlighting or a border),
   * so users can recognize the currently selected mode. The **icon** and **selectedIcon** in each **Pattern**
   * must be set at the same time; neither can be omitted.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  selectedIcon: Resource;
}

/**
 * InputMethodListDialog({controller: CustomDialogController, patternOptions?: PatternOptions})
 * <br>
 * <br>Represents the input method list dialog component. It displays the list of input method apps installed in the
 * current system in the form of a dialog, allowing users to switch between input methods.
 * For the default input method, it also provides an entry for 
 * switching keyboard modes (such as one-handed mode and full-screen mode).
 * <br>
 * <br>Usage scenarios: This component is used when a system app or an input method app needs to provide users with a
 * visualized input method selection and switching feature. For example, in the system settings app, users are allowed
 * to select different input methods, or in an input method app, users are allowed to switch to another input method or
 * switch the keyboard mode of the current input method.
 * <br>
 * <br>Use effect: After this component is invoked, an input method list dialog is displayed. After the user selects an
 * input method in the dialog, the system switches to the specified input method. If the user selects a mode option of
 * the default input method, the system displays the keyboard layout in the specified mode.
 * <br>
 * <br>Differences between similar APIs and selection principles: Compared with the
 * [inputMethod.switchInputMethod]{@link @ohos.inputMethod:inputMethod.switchInputMethod} API, this component provides a
 * visualized input method selection interface, which is suitable for scenarios that require an interactive selection
 * interface. The **switchInputMethod** API is suitable for scenarios where the input method is switched
 * programmatically without requiring manual selection by the user.
 * <br>
 * <br>Usage restrictions: This component can be called only by system apps and input method apps.
 * The **patternOptions** parameter is supported only by preset input methods.
 * <br>
 * <br>NOTE
 * <br>
 * <br>- Preconditions: Create a [CustomDialogController]{@link CustomDialogController} instance and associate it with
 * **InputMethodListDialog**, and then open the dialog through the **open()** method of the **controller**.
 * <br>- This component does not support universal attributes and universal events.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
@CustomDialog
export declare struct InputMethodListDialog {
  /**
   * Sets the controller.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * Sets the pattern options. This parameter can be left blank when it is not default input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  patternOptions?: PatternOptions;

  /**
   * The method to build component.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}