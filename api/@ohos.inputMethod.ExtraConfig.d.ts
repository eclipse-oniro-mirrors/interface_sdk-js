/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * The **@ohos.inputMethod.ExtraConfig** module provides data definitions for input method extension information. It
 * enables the ArkUI edit box to pass custom configuration information to the input method app when the input method is
 * launched.
 * <br>
 * <br>This module is the extension information data module of the input method framework. It defines the
 * **InputMethodExtraConfig** and **CustomValueType** APIs which carry the custom key-value configuration data passed
 * from the edit box app to the input method app.
 * <br>
 * <br>This module provides the capability for the edit box app to pass personalized configuration to the input method app.
 * The edit box app can encapsulate custom information such as the user's input habits, shortcut key settings, theme
 * color, and input mode preferences into key-value pairs, and pass them to the input method app when attaching to the
 * input method app. This enables the input method app to provide a personalized experience. The total length of the
 * information cannot exceed 32 KB.
 * <br>
 * <br>This module is used when the edit box app needs to pass additional configuration information to the input method app
 * to customize input behaviors. Typical scenarios include: a chat app that expects the input method to display the
 * emoji panel by default, a search app that expects the input method to use a specific input mode, and a note app that
 * is expected to configure the shortcut key behavior of the input method.
 * <br>
 * <br>Key interfaces and data types defined in this module are as follows:
 * <br>
 * | Interface/Type | Description |
 * |---|---|
 * | InputMethodExtraConfig | Input method extension information interface,
 * containing the **customSettings** property and used to store custom key-value pairs.
 * These key-value pairs can be any input method-related configuration information (such as user input habits, shortcut key settings, and theme color),
 * which will be loaded when the input method app is attached to provide a personalized user experience.
 * The total length of the information cannot exceed 32 KB. |
 * | CustomValueType | Union type of extension information values, supporting three value types: **number**,
 * **string**, and **boolean**. The specific type of the parameter depends on its functionality. |
 * <br>
 * <br>This module is a pure data definition module. As a data type, `InputMethodExtraConfig` must be used in combination
 * with APIs from other modules. A typical combination is as follows: in the `onWillAttachIME` method of the `TextInput`
 * component, pass `InputMethodExtraConfig` to the input method app through `IMEClient.setExtraConfig`. On the input
 * method app side, the configuration is received and processed through `EditorAttribute` of the
 * `@ohos.inputMethodEngine` module.
 *
 * @file Input Method Extension Information
 * @kit IMEKit
 */

/**
 * Represents the value type of extension information. The specific type of the parameter depends on its function. You
 * can select an appropriate value type based on the meaning of the configuration item: numeric configurations (such as
 * font size and weight coefficient) use the number type; text configurations (such as input mode name and theme
 * identifier) use the string type; switch configurations (such as whether to enable a feature and whether to display a
 * panel) use the boolean type.
 *
 * @unionmember { int } Number.
 * @unionmember { string } String.
 * @unionmember { boolean } Boolean.
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 22 dynamic
 * @since 23 static
 */
export type CustomValueType = int | string | boolean;

/**
 * Represents input method extension information. It is used by the edit box app to pass custom key-value pair
 * configuration data to the input method app, enabling the edit box app to personalize input method behaviors.
 * <br>
 * <br>- Meaning/Function: Defines custom configuration key‑value pairs passed from the edit box app to the input method
 * app, stored in the **Record<string, CustomValueType>** format. A **key** is the name of a configuration item, and a
 * **value** is the content of the configuration item. Values support three types: number, string, and boolean.
 * <br>- Usage scenarios: Used when an edit box app needs to pass additional personalized configuration information to the
 * input method app to customize input behaviors. Examples include a chat app that expects the input method to display
 * the emoji panel by default, a search app that expects the input method to use a specific input mode, and a note app
 * that is expected to configure the shortcut key behavior of the input method.
 * <br>- Use effect: The configured extension information is loaded and delivered to the input method app when the input
 * method app attaches to the edit box app. The input method app can adjust input behaviors accordingly to deliver a
 * personalized user experience. If no extension information is set, the input method app uses the default
 * configuration.
 * <br>
 * <br>Suggestions for the **customSettings** parameter:
 * <br>
 * <br>- Value range: A key is any non-empty string. The value type is [CustomValueType]{@link CustomValueType} which can be
 * number, string, or boolean. A key can correspond to only one value.
 * <br>- Specification limits: The total size of information cannot exceed 32 KB. Any data exceeding the 32 KB limit will
 * not be transmitted. You can determine whether the limit is exceeded by calculating the JSON‑serialized length of all
 * key‑value pairs.
 * <br>- Take‑effect mechanism: The extension information takes effect when the edit box app attaches to the input method
 * via **InputMethodController.attach()** of the **@ohos.inputMethod** module. It is passed to the input method app
 * together with **TextConfig.extraConfig**. The extension information will not be transmitted if **attach()** is not
 * invoked or **extraConfig** is not set in **TextConfig**.
 * <br>- **NOTE**
 * <br>- Development suggestions: Use meaningful naming conventions for key names (such as **'inputMode'** and
 * **'showEmojiPanel'**) so that the input method app can parse and use them easily. Avoid using overly short or
 * meaningless key names (such as **'a'** and **'x1'**), which reduces readability and maintainability.
 * <br>- Development suggestions: Prevent key names from conflicting with those used internally by the input method
 * framework. Use app‑specific prefixes (for example, **'com.example.chat.inputMode'**) to avoid naming conflicts.
 * <br>- Usage with related APIs: A typical combination is to pass `InputMethodExtraConfig` to the input method app through
 * `IMEClient.setExtraConfig` in the `onWillAttachIME` method of the `TextInput` component. The input method app then
 * receives and processes the configuration through the `EditorAttribute` of the `@ohos.inputMethodEngine` module.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 22 dynamic
 * @since 23 static
 */
export interface InputMethodExtraConfig {
    /**
     * Input method extension information for storing custom key‑value pairs. These key‑value pairs can hold any input
     * method‑related configuration information, such as user input habits, shortcut key settings, and theme colors.
     * These settings are loaded when the input method app attaches, to deliver a personalized user experience. If this
     * field is not set, the input method app uses the default configuration.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    customSettings: Record<string, CustomValueType>;
}