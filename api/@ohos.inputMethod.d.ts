/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * ###### Constant
 * <br>
 * <br>Provides the constants.
 * <br>
 * | Name | Type | Value | Description |
 * | -------- | -------- | -------- | -------- |
 * | MAX_TYPE_NUM<sup>8+</sup> | number | 128 | Maximum number of supported input methods. |
 *
 * @file Input Method Framework
 * @kit IMEKit
 */
import type { Callback, AsyncCallback } from './@ohos.base';
import InputMethodSubtype from './@ohos.InputMethodSubtype';
import { UIContext } from "./@ohos.arkui.UIContext";
/*** if arkts dynamic */
import type { ElementName } from './bundleManager/ElementName';
import type { PanelInfo } from './@ohos.inputMethod.Panel';
/*** endif */
/*** if arkts static */
import { ElementName } from './bundleManager/ElementName';
import { PanelInfo } from './@ohos.inputMethod.Panel';
/*** endif */

/**
 * The **@ohos.inputMethod** module is the input method client module for common foreground applications (such as Notes,
 * Messaging, and Settings). It provides input method control and management capabilities.
 * <br>
 * <br>This module is the client interface of the input method framework. It provides edit box applications with the ability
 * to interact with the input method service, including input method attachment/detachment, soft keyboard showing/
 * hiding, input method switching, input method list query, edit box attribute and cursor update, text selection and
 * operation event listening, and custom message communication.
 * <br>
 * <br>This module provides two core capability sets: (1) Through `InputMethodController`, it enables attachment,
 * interaction, and event listening between edit box applications and the input method. After an edit box application
 * attaches to the input method, it can control the showing and hiding of the keyboard, update the cursor and edit
 * attributes, listen to text operation events sent by the input method (insert/delete/select text, move cursor, send
 * function keys and extended actions, etc.), and communicate bidirectionally with the input method application through
 * a custom message channel. (2) Through `InputMethodSetting`, it implements input method management, including
 * obtaining the input method list, querying the current input method and subtype, subscribing to input method switching
 * events, switching input methods and subtypes, and querying the panel display status.
 * <br>
 * <br>Use this module when developing applications with text edit boxes (which need to interact with the input method) or
 * system applications (which need to manage input methods). Typical scenarios include: attaching to the input method
 * and showing the keyboard when an edit box in the application gains focus, detaching from the input method and hiding
 * the keyboard when the edit box loses focus, and switching and configuring input methods in the system Settings
 * application.
 * <br>
 * <br>This module is the client control module in IME Kit. It works together with other modules in IME Kit:
 * <br>
 * <br>- **@ohos.inputMethodEngine**: A server-side module for input method applications. It provides capabilities such as
 * soft keyboard window creation, text insertion/deletion, and physical key listening. Requests sent by the
 * **@ohos.inputMethod** module, such as showing the keyboard and switching input methods, are ultimately responded to
 * and processed by the input method application on the **@ohos.inputMethodEngine** side.
 * <br>- **@ohos.inputMethodList**: Provides the display and management capabilities of the input method list dialog.
 * <br>- **@ohos.inputMethod.Panel**: Defines the input method panel type and status information, used to query panel
 * visibility and more information.
 * <br>
 * <br>The typical call sequence for a client application (such as Notes or Settings) to interact with the input method is
 * as follows:
 * <br>
 * <br>1. Obtain the client controller instance `InputMethodController` through `inputMethod.getController()`.
 * 2. Attach to the input method through `InputMethodController.attach()` (for self-drawn control scenarios),
 * or rely on the system native edit box to attach automatically.
 * 3. Bring up the soft keyboard through `InputMethodController.showTextInput()` to enter the text editing state.
 * 4. During editing, synchronize the edit box state to the input method through APIs such as `updateCursor`, `changeSelection`, and `updateAttribute`.
 * 5. Hide the soft keyboard through `InputMethodController.hideTextInput()` to exit the editing state.
 * 6. Detach from the input method through `InputMethodController.detach()`.
 * <br>
 * <br>Pairing constraints:
 * <br>
 * <br>- `attach` and `detach` must be used in pairs. Exiting directly without calling `detach` may cause resource leaks.
 * <br>- `showTextInput` and `hideTextInput` must be used in pairs to avoid inconsistent input method states.
 * <br>
 * <br>The core open capabilities of this module are implemented by the following key interfaces:
 * <br>
 * | Interface | Description |
 * |---|---|
 * | InputMethodController | The input method controller, which is the core object for interaction between the edit box application and the input method.
 * It provides capabilities such as attaching to or detaching from the input method (**attach**\/**detach**),
 * showing/hiding the keyboard (**showTextInput**\/**hideTextInput**), updating the cursor and 
 * edit attributes (**updateCursor**\/**updateAttribute**\/**changeSelection**), listening for input method operation events
 * (**insertText**\/**deleteLeft**\/**deleteRight**\/**selectByRange**\/**selectByMovement**\/**moveCursor**\/**sendFunctionKey**\/**sendKeyboardStatus**\/
 * **handleExtendAction**\/**setPreviewText**\/**finishTextPreview**), custom message communication (**sendMessage**\/**recvMessage**),
 * and stopping the input session. Obtain an instance through `getController()`. |
 * | InputMethodSetting | The input method setting management object, which provides input method query and management capabilities.
 * It includes obtaining the list of enabled/disabled/all input methods (**getInputMethods**\/**getAllInputMethods**),
 * querying the subtype list of a specified input method (**listInputMethodSubtype**), obtaining the current input method and subtype,
 * subscribing to input method switching events (**on('imeChange')**), subscribing to panel showing/hiding events (**on('imeShow')**\/**on('imeHide')**),
 * querying the panel display state (**isPanelShown**), enabling/disabling an input method (**enableInputMethod**),
 * and obtaining the enabled state of the input method itself (**getInputMethodState**). Obtain an instance through `getSetting()`. |
 * <br>
 * <br>In addition, this module defines multiple key data types:
 * <br>
 * | Type | Description |
 * |---|---|
 * | InputMethodProperty | Input method property information, describing the name, ID, label, icon, enabled status, and other properties of an input method. |
 * | InputMethodSubtype | Input method subtype, describing the language, mode, and other subtype properties of an input method. |
 * | TextConfig | Text configuration of the edit box, including the input attribute (**InputAttribute**), cursor information (**CursorInfo**),
 * selection information, window ID, and more. |
 * | InputAttribute | Input attribute, defining the text input type (**TextInputType**) and the Enter key type (**EnterKeyType**). |
 * | CursorInfo | Cursor information, defining the position and size of the cursor. |
 * | MessageHandler | Custom message handler, used to receive messages sent by the input method application and provide termination notifications. |
 * <br>
 * <br>The typical process of interaction between an edit box application and the input method involves the combined
 * invocation of multiple APIs of **InputMethodController**: obtain the controller -> attach to the input method ->
 * subscribe to input method operation events -> process text operations in the callback -> detach from the input
 * method.
 * <br>
 * <br> > **NOTE:**
 * <br> >
 * <br> > Subscription to input method operation events (such as **insertText** and **deleteLeft**) should be completed
 * <br> > before `attach` is called to avoid missing events. `attach` is the prerequisite for an edit box application to use
 * <br> > input method capabilities. The input method must be attached before subsequent operations can be performed.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace inputMethod {
  /**
   * Keyboard max number. Max value is 128.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const MAX_TYPE_NUM: int;

  /**
   * Obtains an [InputMethodSetting]{@link inputMethod.InputMethodSetting} instance.
   *
   * @returns { InputMethodSetting } **InputMethodSetting** instance.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethod#getSetting
   */
  function getInputMethodSetting(): InputMethodSetting;

  /**
   * Obtains an [InputMethodController]{@link inputMethod.InputMethodController} instance.
   *
   * @returns { InputMethodController } Current **InputMethodController** instance.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethod#getController
   */
  function getInputMethodController(): InputMethodController;

  /**
   * Obtains an [InputMethodSetting]{@link inputMethod.InputMethodSetting} instance.
   * <br>
   * <br>Meaning/Function: Obtains the input method setting instance, which is used for configuration management operations
   * such as querying the input method list, subscribing to input method change events, and querying panel visibility.
   * <br>
   * <br>Usage scenarios: When an application needs to query the installed/activated input method list, subscribe to input
   * method switching events, or display the input method selection dialog, it must first obtain the
   * **InputMethodSetting** instance through this API.
   * <br>
   * <br>Use effect: Returns an **InputMethodSetting** instance. Subsequently, the instance can be used to call APIs such as
   * **getInputMethods**, **listInputMethodSubtype**, and **on('imeChange')**.
   *
   * @returns { InputMethodSetting } **InputMethodSetting** instance.
   * @throws { BusinessError } 12800007 - input method setter error. Possible cause:
   * create InputMethodSetting object failed.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getSetting(): InputMethodSetting;

  /**
   * Obtains an [InputMethodController]{@link inputMethod.InputMethodController} instance.
   * <br>
   * <br>Meaning/Function: Obtains the input method client controller instance of the current application, which is used for
   * subsequent interaction with the input method (such as attaching to the input method, showing/hiding the keyboard,
   * and synchronizing the edit box status).
   * <br>
   * <br>Usage scenarios: When a foreground application (such as a memo or chat application) needs to control the showing/
   * hiding of the input method, attach to or detach from the input method, or synchronize edit box information, it must
   * first obtain the **InputMethodController** instance through this API.
   * <br>
   * <br>Use effect: Returns an **InputMethodController** instance. Subsequently, the instance can be used to call a series
   * of APIs such as **attach**, **showTextInput**, **hideTextInput**, and **detach** to interact with the input method.
   *
   * @returns { InputMethodController } **InputMethodController** instance.
   * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
   * create InputMethodController object failed.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getController(): InputMethodController;

  /**
   * Obtains the default input method.
   *
   * @returns { InputMethodProperty } Default input method property object.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function getDefaultInputMethod(): InputMethodProperty;

  /**
   * Obtains the default input method of a specified user.
   *
   * @param { int } [userId] - User ID. The value is the ID of a valid user. If this parameter is not provided:
   * <br>    - If the caller is not an application of user 0, the value defaults to the caller's user ID.
   * <br>    - If the caller is an application of user 0, the value defaults to the foreground user ID of the home
   * screen.
   * @returns { InputMethodProperty } Default input method property object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @throws { BusinessError } 12800023 - the specified user does not exist.
   * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
   * @throws { BusinessError } 12800025 - cross-user operation denied.
   * Only user 0 applications are authorized for this operation.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getDefaultInputMethod(userId?: int): InputMethodProperty;

  /**
   * Obtains the information about the system input method configuration ability.
   *
   * @returns { ElementName } Element name of the input method configuration page ability.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function getSystemInputMethodConfigAbility(): ElementName;

  /**
   * Obtains ability information for the system input method configuration page of a specified user. Used to launch the
   * system input method configuration page.
   *
   * @param { int } [userId] - User ID. The value is the ID of a valid user. If this parameter is not provided:
   * <br>    - If the caller is not an application of user 0, the value defaults to the caller's user ID.
   * <br>    - If the caller is an application of user 0, the value defaults to the foreground user ID of the home
   * screen.
   * @returns { ElementName } Element name of the input method configuration page ability.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @throws { BusinessError } 12800023 - the specified user does not exist.
   * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
   * @throws { BusinessError } 12800025 - cross-user operation denied.
   * Only user 0 applications are authorized for this operation.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getSystemInputMethodConfigAbility(userId?: int): ElementName;

  /**
   * Switches the input method. This API uses an asynchronous callback to return the result.
   * <br>
   * <br>Meaning/Function: Switches the current input method to the specified target input method.
   * <br>
   * <br>Usage scenarios: Used when the current input method application needs to switch to another input method (for
   * example, when the user selects a new input method in the input method settings).
   * <br>
   * <br>Use effect: On success, the system switches the current input method to the target input method, and the target
   * input method becomes the new current input method; on failure, the current input method remains unchanged.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } target - Target input method.Usage scenario: specifies the target input method
   * to switch to, uniquely determined by **name** and **id**.<br/>Note: only the **name** and **id** fields need to
   * be filled in to uniquely specify an input method; optional fields such as **label** and **icon** do not need to
   * be filled in.
   * @param { AsyncCallback<boolean> } callback - Callback function. When the input method switch succeeds, **err** is
   * **undefined** and data is **true**; otherwise, it is an error object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   * required to call the API. [since 9 - 10]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function switchInputMethod(target: InputMethodProperty, callback: AsyncCallback<boolean>): void;

  /**
   * Switches the input method. This API uses a promise to return the result.
   * <br>
   * <br>Meaning/Function: Switches the current input method to the specified target input method.
   * <br>
   * <br>Usage scenarios: Used when the current input method application needs to switch to another input method.
   * <br>
   * <br>Use effect: On success, the system switches the current input method to the target input method; on failure, the
   * current input method remains unchanged.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } target - Target input method.Usage scenario: specifies the target input method
   * to switch to, uniquely determined by **name** and **id**.<br/>Note: only the **name** and **id** fields need to
   * be filled in to uniquely specify an input method.
   * @returns { Promise<boolean> } Promise object. When resolved, returns **true** if the input method is switched
   * successfully, and returns **false** if the input method fails to be switched; when rejected, returns an error
   * object, indicating that an error occurs during input method switching.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   * required to call the API. [since 9 - 10]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function switchInputMethod(target: InputMethodProperty): Promise<boolean>;

  /**
   * Obtains the current input method. This API returns the result synchronously.
   * <br>
   * <br>Meaning/Function: Obtains the property information of the input method currently in use.
   * <br>
   * <br>Usage scenarios: Used when an application needs to know which input method is currently active (for example, to
   * determine the input method name or obtain the input method ID for subsequent switching operations).
   * <br>
   * <br>Use effect: Returns the **InputMethodProperty** object of the current input method.
   *
   * @returns { InputMethodProperty } Input method property object.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentInputMethod(): InputMethodProperty;

  /**
   * Obtains the current input method of a specified user.
   *
   * @param { int } [userId] - User ID. The value is the ID of a valid user. If this parameter is not provided:
   * <br>    - If the caller is not an application of user 0, the value defaults to the caller's user ID.
   * <br>    - If the caller is an application of user 0, the value defaults to the foreground user ID of the home
   * screen.
   * @returns { InputMethodProperty } Input method property object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @throws { BusinessError } 12800023 - the specified user does not exist.
   * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
   * @throws { BusinessError } 12800025 - cross-user operation denied.
   * Only user 0 applications are authorized for this operation.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getCurrentInputMethod(userId?: int): InputMethodProperty;

  /**
   * Switches to another subtype of this input method. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodSubtype } target - Target input method subtype.
   * @param { AsyncCallback<boolean> } callback - Callback function. When the input method subtype is switched
   * successfully, **err** is **undefined** and data is **true**; otherwise, it is an error object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   * required to call the API. [since 9 - 10]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function switchCurrentInputMethodSubtype(target: InputMethodSubtype, callback: AsyncCallback<boolean>): void;

  /**
   * Switches to another subtype of this input method. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodSubtype } target - Target input method subtype.
   * @returns { Promise<boolean> } Promise object. When resolved, **true** indicates that the current input method
   * subtype is switched successfully, and **false** indicates that the current input method subtype fails to be
   * switched; when rejected, an error object is returned, indicating that an error occurs during input method
   * subtype switching.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   * required to call the API. [since 9 - 10]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function switchCurrentInputMethodSubtype(target: InputMethodSubtype): Promise<boolean>;

  /**
   * Obtains the current input method subtype.
   *
   * @returns { InputMethodSubtype } Current input method subtype.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentInputMethodSubtype(): InputMethodSubtype;

  /**
   * Obtains the current input method subtype of a specified user.
   *
   * @param { int } [userId] - User ID. The value is the ID of a valid user. If this parameter is not provided:
   * <br>    - If the caller is not an application of user 0, the value defaults to the caller's user ID.
   * <br>    - If the caller is an application of user 0, the value defaults to the foreground user ID of the home
   * screen.
   * @returns { InputMethodSubtype } Current input method subtype.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @throws { BusinessError } 12800023 - the specified user does not exist.
   * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
   * @throws { BusinessError } 12800025 - cross-user operation denied.
   * Only user 0 applications are authorized for this operation.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getCurrentInputMethodSubtype(userId?: int): InputMethodSubtype;

  /**
   * Switches to a specified subtype of a specified input method. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } inputMethodProperty - Target input method.
   * @param { InputMethodSubtype } inputMethodSubtype - Target input method subtype.
   * @param { AsyncCallback<boolean> } callback - Callback function. When the input method subtype is switched
   * successfully, **err** is **undefined** and data is **true**; otherwise, it is an error object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   * required to call the API. [since 9 - 10]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function switchCurrentInputMethodAndSubtype(
    inputMethodProperty: InputMethodProperty,
    inputMethodSubtype: InputMethodSubtype,
    callback: AsyncCallback<boolean>
  ): void;

  /**
   * Switches to a specified subtype of a specified input method. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } inputMethodProperty - Target input method.
   * @param { InputMethodSubtype } inputMethodSubtype - Target input method subtype.
   * @returns { Promise<boolean> } Promise object. When resolved, **true** is returned if switching to the specified
   * subtype of the specified input method succeeds, and **false** is returned if switching to the specified subtype
   * of the specified input method fails; when rejected, an error object is returned, indicating that an error
   * occurred while switching to the specified subtype of the specified input method.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   * required to call the API. [since 9 - 10]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function switchCurrentInputMethodAndSubtype(
    inputMethodProperty: InputMethodProperty,
    inputMethodSubtype: InputMethodSubtype
  ): Promise<boolean>;

  /**
   * Switches the input method. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { string } bundleName - Bundle name of the target input method.
   * @param { string } [subtypeId] - Input method subtype.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   * required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function switchInputMethod(bundleName: string, subtypeId?: string): Promise<void>;

  /**
   * Switches the input method. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { string } bundleName - Bundle name of the target input method.
   * @param { string } [subtypeId] - ID of the input method subtype. If this parameter is not set, the system switches
   * to the target input method that uses the default subtype.
   * @param { int } [userId] - User ID. The value range is the ID of a valid user. If this parameter is not provided:
   * <br>    - If the caller is not an application of user 0, this value defaults to the user ID of the caller.
   * <br>    - If the caller is an application of user 0, this value defaults to the foreground user ID of the home
   * screen.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   * required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   * a system error, such as null pointer, IPC exception.
   * @throws { BusinessError } 12800023 - the specified user does not exist.
   * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
   * @throws { BusinessError } 12800025 - cross-user operation denied.
   * Only user 0 applications are authorized for this operation.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function switchInputMethodWithUserId(bundleName: string, subtypeId?: string, userId?: int): Promise<void>;

  /**
   * Enables or disables the simple keyboard.
   *
   * @param { boolean } enable - Flag indicating whether the simple keyboard is enabled. The value **true** indicates
   * that the simple keyboard is enabled, and **false** indicates that it is disabled.<br/> For a native text box
   * component, this takes effect the next time the component is clicked to gain focus. For a custom-drawn control,
   * this takes effect the next time
   * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
   * is called to bind the input method.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function setSimpleKeyboardEnabled(enable: boolean): void;
  
  /**
   * Subscribes to attachment failure events. This API uses an asynchronous callback to return the result.
   *
   * @param { Callback<AttachFailureReason> } callback - Callback used to return the reason for the attachment failure.
   * It is invoked only when the attachment failure is triggered by the process that registers the callback.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  function onAttachmentDidFail(callback: Callback<AttachFailureReason>): void;

  /**
   * Unsubscribes from attachment failure events. This API uses an asynchronous callback to return the result.
   *
   * @param { Callback<AttachFailureReason> } [callback] - Callback used for unsubscription, which must be the same as
   * that passed by the subscription API. If no parameter is specified, all callback functions for this event will
   * be unsubscribed.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  function offAttachmentDidFail(callback?: Callback<AttachFailureReason>): void;

  /**
   * The callback of 'imeChange' event.
   *
   * @param { InputMethodProperty } inputMethodProperty - the property of current inputmethod.
   * @param { InputMethodSubtype } inputMethodSubtype - the subtype of current inputmethod.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type ImeChangeCallback = (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void;

  /**
   * Callback for input method change events, carrying the user ID where the input method change occurs.
   *
   * @param { InputMethodProperty } inputMethodProperty - Property of the current input method.
   * @param { InputMethodSubtype } inputMethodSubtype - Subtype of the current input method.
   * @param { int } userId - ID of the user whose input method changes.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type ImeChangeWithUserIdCallback =
      (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype, userId: int) => void;

  /**
   * The callback of 'getLeftTextOfCursor' or 'getRightTextOfCursor' event.
   *
   * @param { int } length - the length of text.
   * @returns { string } represents the text in edit box.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type GetTextCallback = (length: int) => string;

  /**
   * The callback of 'getTextIndexAtCursor' event.
   *
   * @returns { int } represents theindex number of text at cursor.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type GetTextIndexAtCursorCallback = () => int;

  /**
   * **InputMethodSetting** provides input method configuration and query capabilities, and offers the following
   * features for foreground applications:
   * <br>
   * <br>- Input method change subscription: subscribe to input method and subtype change events through
   * [on('imeChange')]{@link inputMethod.InputMethodSetting.on( type: 'imeChange', callback: (inputMethodProperty: InputMethodProperty,
   * inputMethodSubtype: InputMethodSubtype) => void )},
   * and receive a notification when the user switches the input method.
   * <br>- Input method list query: query the list of enabled/disabled input methods through
   * [getInputMethods]{@link inputMethod.InputMethodSetting.getInputMethods(enable: boolean, callback: AsyncCallback<Array<InputMethodProperty>>)},
   * query the list of all installed input methods through
   * [getAllInputMethods]{@link inputMethod.InputMethodSetting.getAllInputMethods(callback: AsyncCallback<Array<InputMethodProperty>>)},
   * and query the subtype list of a specified input method through
   * [listInputMethodSubtype]{@link inputMethod.InputMethodSetting.listInputMethodSubtype( inputMethodProperty: InputMethodProperty,
   * callback: AsyncCallback<Array<InputMethodSubtype>> )}.
   * <br>- Panel visibility query: query whether the input method panel is displayed through **isPanelShown**.
   * <br>- Input method selection dialog: display the input method selection dialog through **showOptionalInputMethods** (
   * deprecated; **InputMethodListDialog** is recommended).
   * <br>
   * <br>It must be used after you obtain the **InputMethodSetting** instance through
   * [getSetting]{@link inputMethod.getSetting}.
   * <br>
   * <br>For the following APIs, you must first use [getSetting]{@link inputMethod.getSetting} to obtain an
   * **InputMethodSetting** instance, and then call the APIs using the obtained instance.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface InputMethodSetting {
    /**
     * Enables listening for the input method and subtype change event. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { 'imeChange' } type - Type of the listener to set. The value is fixed at 'imeChange'.
     * @param { function } callback - Callback used to return the input method attribute object and subtype object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(
      type: 'imeChange',
      callback: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void;

    /**
     * Disables listening for the input method and subtype change event. This API uses an asynchronous callback to
     * return the result.
     *
     * @param { 'imeChange' } type - Set the listening type. The value is fixed to 'imeChange'.
     * @param { function } [callback] - Callback used to return the unsubscribed input method attribute object and
     * subtype object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(
      type: 'imeChange',
      callback?: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void;

    /**
     * Subscribes to the soft keyboard show event of the
     * [input method panel]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel} in the fixed state. This API uses an
     * asynchronous callback to return the result.
     * <br>
     * <br>Paired calls:
     * <br>
     * <br>- After subscribing to events by calling **on('imeShow')**, you must call the corresponding **off('imeShow')** to
     * unsubscribe when finished using it.
     * <br>- When unsubscribing, you can pass the callback parameter to cancel the specified callback, or pass no parameter
     * to cancel all callbacks corresponding to **type**.
     * <br>- Failing to unsubscribe may lead to continuous callback invocations and memory leaks.
     *
     * @param { 'imeShow' } type - Type of the listener to set. The value is fixed to 'imeShow'.
     * @param { function } callback - Callback function, which returns the fixed-state soft keyboard information of the
     * input method.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    on(type: 'imeShow', callback: (info: Array<InputWindowInfo>) => void): void;

    /**
     * Unsubscribes from the soft keyboard show event of the
     * [input method panel]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel} in the fixed state.
     *
     * @param { 'imeShow' } type - Type of the listener to set. The value is fixed at 'imeShow'.
     * @param { function } [callback] - Callback function to unsubscribe.
     *     If this parameter is not specified, all callback events corresponding to the type are unsubscribed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'imeShow', callback?: (info: Array<InputWindowInfo>) => void): void;

    /**
     * Subscribes to the soft keyboard hide event of the
     * [input method panel]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel} in the fixed state. This API uses an
     * asynchronous callback to return the result.
     * <br>
     * <br>Paired calls:
     * <br>
     * <br>- After subscribing to events by calling **on('imeHide')**, you must call the corresponding **off('imeHide')** to
     * unsubscribe when finished using it.
     * <br>- When unsubscribing, you can pass the callback parameter to cancel the specified callback, or pass no parameter
     * to cancel all callbacks corresponding to **type**.
     * <br>- Failing to unsubscribe may lead to continuous callback invocations and memory leaks.
     *
     * @param { 'imeHide' } type - Type of the listener to set. The value is fixed at 'imeHide'.
     * @param { function } callback - Callback function, which returns the information about the fixed-state soft
     * keyboard of the input method.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    on(type: 'imeHide', callback: (info: Array<InputWindowInfo>) => void): void;

    /**
     * Unsubscribes from the soft keyboard hide event of the
     * [input method panel]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel} in the fixed state.
     *
     * @param { 'imeHide' } type - Type of the listener to set. The value is fixed at 'imeHide'.
     * @param { function } [callback] - Callback function to unsubscribe.
     *     If this parameter is not specified, all callback events corresponding to the type are unsubscribed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'imeHide', callback?: (info: Array<InputWindowInfo>) => void): void;

    /**
     * Checks whether the input method panel of a specified type is shown.
     *
     * @param { PanelInfo } panelInfo - Attribute of the input method panel.
     * @returns { boolean } Whether the input method panel is shown.
     * <br>    - The value **true** means that the input method panel is shown.
     * <br>    - The value **false** means that the input method panel is hidden.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isPanelShown(panelInfo: PanelInfo): boolean;

    /**
     * Checks whether the input method panel of a specified type is shown on a specified screen.
     *
     * @param { PanelInfo } panelInfo - Property of the input method panel.
     * @param { long } displayId - Screen ID.
     * @returns { boolean } Whether the input method panel is shown.
     * <br>    - The value **true** means that the input method panel is shown.
     * <br>    - The value **false** means that the input method panel is hidden.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isPanelShown(panelInfo: PanelInfo, displayId: long): boolean;

    /**
     * Obtains all subtypes of a specified input method. This API uses an asynchronous callback to return the result.
     *
     * @param { InputMethodProperty } inputMethodProperty - Input method application.
     * @param { AsyncCallback<Array<InputMethodSubtype>> } callback - Callback used to return all subtypes of the
     * specified input method application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listInputMethodSubtype(
      inputMethodProperty: InputMethodProperty,
      callback: AsyncCallback<Array<InputMethodSubtype>>
    ): void;

    /**
     * Obtains all subtypes of a specified input method. This API uses a promise to return the result.
     *
     * @param { InputMethodProperty } inputMethodProperty - Input method application.
     * @returns { Promise<Array<InputMethodSubtype>> } Promise object, which returns all subtypes of the specified input
     * method application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listInputMethodSubtype(inputMethodProperty: InputMethodProperty): Promise<Array<InputMethodSubtype>>;

    /**
     * Obtains all subtypes of this input method. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<InputMethodSubtype>> } callback - Callback function. When all subtypes of the
     * current input method application are returned successfully, err is undefined and data is the obtained list of
     * InputMethodSubtype; otherwise, it is an error object.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listCurrentInputMethodSubtype(callback: AsyncCallback<Array<InputMethodSubtype>>): void;

    /**
     * Obtains all subtypes of this input method. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<InputMethodSubtype>> } Promise object, which returns all subtypes of the current input
     * method application.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listCurrentInputMethodSubtype(): Promise<Array<InputMethodSubtype>>;

    /**
     * Obtains the list of input method subtypes for a specified user. This is a synchronous API.
     *
     * @param { string } bundleName - Bundle name of the specified input method.
     * @param { int } [userId] - User ID. The value ranges over the IDs of valid users. If not provided:
     * <br>    - If the caller is not an application of user 0, this value defaults to the user ID of the caller.
     * <br>    - If the caller is an application of user 0, this value defaults to the foreground user ID of the home
     * screen.
     * @returns { Array<InputMethodSubtype> } Returns the list of specified input method subtypes.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800023 - the specified user does not exist.
     * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
     * @throws { BusinessError } 12800025 - cross-user operation denied.
     * Only user 0 applications are authorized for this operation.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getInputMethodSubtypes(bundleName: string, userId?: int): Array<InputMethodSubtype>;

    /**
     * Obtains a list of activated or deactivated input methods. This API uses an asynchronous callback to return the
     * result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An activated input method refers to an input method that is enabled. The default input method is enabled by
     * <br> > default. Other input methods can be enabled or disabled as needed.
     * <br> >
     * <br> > The list of activated input methods includes the default input method and enabled input methods. The list of
     * <br> > deactivated input methods includes all installed input methods except the enabled ones.
     *
     * @param { boolean } enable - The value **true** indicates returning the list of activated input methods, and the
     * value **false** indicates returning the list of inactivated input methods.
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - Callback used to return the result. If the list
     * of activated/inactivated input methods is obtained successfully, **err** is **undefined** and data is the
     * obtained list of **InputMethodProperty** objects; otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getInputMethods(enable: boolean, callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     * Obtains a list of activated or deactivated input methods. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An activated input method refers to an input method that is enabled. The default input method is enabled by
     * <br> > default. Other input methods can be enabled or disabled as needed.
     * <br> >
     * <br> > The list of activated input methods includes the default input method and enabled input methods. The list of
     * <br> > deactivated input methods includes all installed input methods except the enabled ones.
     *
     * @param { boolean } enable - - **true** indicates returning the list of activated input methods, and **false**
     * indicates returning the list of inactivated input methods.
     * @returns { Promise<Array<InputMethodProperty>> } Promise object, returns the list of activated/inactivated input
     * methods.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getInputMethods(enable: boolean): Promise<Array<InputMethodProperty>>;

    /**
     * Obtains a list of activated or deactivated input methods. This API returns the result synchronously.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > The synchronous API blocks the main thread and may easily affect UI interaction. Use it with caution.
     * <br> >
     * <br> > Enabled input methods are input method applications that are enabled. The default input method is enabled by
     * <br> > default, and other input methods can be set to enabled or disabled.
     * <br> >
     * <br> > The enabled input method list includes the default input method and input method applications that have been
     * <br> > set to enabled. The disabled input method list includes other installed input methods except the enabled input
     * <br> > methods.
     *
     * @param { boolean } enable - - **true** indicates returning the enabled input method list, and **false** indicates
     * returning the disabled input method list.
     * @returns { Array<InputMethodProperty> } List of activated or deactivated input methods.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getInputMethodsSync(enable: boolean): Array<InputMethodProperty>;

    /**
     * Obtains the list of activated/deactivated input method applications for a specified user. This is a synchronous
     * API.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An activated input method is an enabled input method application. The default input method is enabled by
     * <br> > default, and other input methods can be set to enabled or disabled.
     * <br> >
     * <br> > The activated input method list includes the default input method and input method applications that have been
     * <br> > enabled, while the deactivated input method list includes other installed input methods except the enabled
     * <br> > ones.
     *
     * @param { boolean } enable - Whether to activate the input method list:
     * <br>    - **true** indicates returning the activated input method list.
     * <br>    - **false** indicates returning the deactivated input method list.
     * @param { int } [userId] - User ID. The value ranges over the IDs of valid users. If not provided:
     * <br>    - If the caller is not an application of user 0, this value defaults to the caller's user ID.
     * <br>    - If the caller is an application of user 0, this value defaults to the foreground user ID of the home
     * screen.
     * @returns { Array<InputMethodProperty> } List of activated or deactivated input methods.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800023 - the specified user does not exist.
     * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
     * @throws { BusinessError } 12800025 - cross-user operation denied.
     * Only user 0 applications are authorized for this operation.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getInputMethodsSync(enable: boolean, userId?: int): Array<InputMethodProperty>;

    /**
     * Obtains a list of all input methods. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - Callback function. When the list of all input
     * methods is returned successfully, **err** is **undefined** and data is the obtained list of
     * **InputMethodProperty** objects; otherwise, it is an error object.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethods(callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     * Obtains a list of all input methods. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<InputMethodProperty>> } Promise object, returns the list of all input methods.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethods(): Promise<Array<InputMethodProperty>>;

    /**
     * Obtains a list of all input methods. This API returns the result synchronously.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > The synchronous API blocks the main thread and may easily affect UI interaction. Use it with caution.
     *
     * @returns { Array<InputMethodProperty> } List of all input methods.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethodsSync(): Array<InputMethodProperty>;

    /**
     * Obtains the list of all input method applications of a specified user. This is a synchronous API.
     *
     * @param { int } [userId] - User ID. The value is the ID of a valid user. If this parameter is not provided:
     * <br>    - If the caller is not an application of user 0, the value defaults to the caller's user ID.
     * <br>    - If the caller is an application of user 0, the value defaults to the foreground user ID of the home
     * screen.
     * @returns { Array<InputMethodProperty> } Returns the list of all input methods.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800023 - the specified user does not exist.
     * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
     * @throws { BusinessError } 12800025 - cross-user operation denied.
     * Only user 0 applications are authorized for this operation.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getAllInputMethodsSync(userId?: int): Array<InputMethodProperty>;

    /**
     * Obtains a list of installed input methods. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - Callback used to return the result. If the list
     * of installed input methods is returned successfully, **err** is **undefined** and data is the obtained list
     * of **InputMethodProperty** objects; otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#getInputMethods
     */
    listInputMethod(callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     * Obtains a list of installed input methods. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<InputMethodProperty>> } Promise object, which returns the list of installed input
     * methods.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#getInputMethods
     */
    listInputMethod(): Promise<Array<InputMethodProperty>>;

    /**
     * Displays a dialog box for selecting an input method. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the input method selection
     * dialog box is displayed successfully, err is undefined and data is true; otherwise, err is an error object.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    showOptionalInputMethods(callback: AsyncCallback<boolean>): void;

    /**
     * Displays a dialog box for selecting an input method. This API uses a promise to return the result.
     *
     * @returns { Promise<boolean> } Promise object. Returns **true** if the input method selection dialog is displayed
     * successfully, and **false** otherwise.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    showOptionalInputMethods(): Promise<boolean>;

    /**
     * Displays a dialog box for selecting an input method. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the input method selection
     * dialog box is displayed successfully, **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    displayOptionalInputMethod(callback: AsyncCallback<void>): void;

    /**
     * Displays a dialog box for selecting an input method. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    displayOptionalInputMethod(): Promise<void>;

    /**
     * Obtains the input method state. This API uses a promise to return the result.
     *
     * @returns { Promise<EnabledState> } Promise object. Returns **EnabledState.DISABLED** to indicate that the input
     * method is not enabled; returns **EnabledState.BASIC_MODE** to indicate basic mode; returns
     * **EnabledState.FULL_EXPERIENCE_MODE** to indicate full experience mode.
     * @throws { BusinessError } 12800004 - not an input method application.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    getInputMethodState(): Promise<EnabledState>;

    /**
     * Enables or disables an input method. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { string } bundleName - Bundle name of the input method.
     * @param { string } extensionName - Extension name of the input method.
     * @param { EnabledState } enabledState - Enabled state of the input method. BASIC_MODE indicates that the basic
     * mode is enabled, and FULL_EXPERIENCE_MODE indicates that the full experience mode is enabled.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     * required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800018 - input method is not found.
     * @throws { BusinessError } 12800019 - current operation cannot be applied to the preconfigured default input
     * method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    enableInputMethod(bundleName: string, extensionName: string, enabledState: EnabledState): Promise<void>;

    /**
     * Modifies the enabled state of the input method for a specified user.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { string } bundleName - Bundle name of the input method.
     * @param { string } extensionName - Extension name of the input method.
     * @param { EnabledState } enabledState - Enabled state to be modified.
     * @param { int } [userId] - User ID. The value range is the IDs of valid users. If not provided:
     * <br>    - If the caller is not an application of user 0, this value defaults to the user ID of the caller.
     * <br>    - If the caller is an application of user 0, this value defaults to the foreground user ID of the home
     * screen.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     * required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800018 - input method is not found.
     * @throws { BusinessError } 12800019 - current operation cannot be applied to the preconfigured
     * default input method.
     * @throws { BusinessError } 12800023 - the specified user does not exist.
     * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
     * @throws { BusinessError } 12800025 - cross-user operation denied.
     * Only user 0 applications are authorized for this operation.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enableInputMethod(
      bundleName: string, extensionName: string, enabledState: EnabledState, userId?: int): Promise<void>;

    /**
     * Subscribe input method or subtype change.
     *
     * @param { ImeChangeCallback } callback - the callback called when the current input method changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onImeChange(callback: ImeChangeCallback): void;

    /**
     * Unsubscribe input method or subtype change.
     *
     * @param { ImeChangeCallback } [callback] - the callback called when the current input method changes,
     * when subscriber unsubscribes all callback functions, this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offImeChange(callback?: ImeChangeCallback): void;

    /**
     * Subscribes to input method and subtype change events, carrying the user ID of the input method change. This API
     * uses an asynchronous callback.
     * <br>
     * <br>Paired calls:
     * <br>
     * <br>- After subscribing to events by calling **onImeChangeWithUserId**, you must call **offImeChangeWithUserId** to
     * unsubscribe upon completion of the subscription.
     * <br>- When unsubscribing, you can pass the callback parameter to cancel the specified callback, or pass no parameter
     * to cancel all corresponding listener events.
     * <br>- Failing to unsubscribe may lead to continuous callback invocations and memory leaks.
     *
     * @param { ImeChangeWithUserIdCallback } callback - Callback function, which returns the input method property
     * object, subtype object, and user ID.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onImeChangeWithUserId(callback: ImeChangeWithUserIdCallback): void;

    /**
     * Unsubscribes from the input method and subtype change listener events, carrying the user ID of the input method
     * change. This API uses an asynchronous callback.
     *
     * @param { ImeChangeWithUserIdCallback } [callback] - Callback that returns the unsubscribed input method property
     * object, subtype object, and user ID.
     *     When the parameter is not specified, all callback events are unsubscribed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offImeChangeWithUserId(callback?: ImeChangeWithUserIdCallback): void;

    /**
     * Subscribes to input window show events.
     *
     * @param { Callback<Array<InputWindowInfo>> } callback - the callback called when input method shows.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onImeShow(callback: Callback<Array<InputWindowInfo>>):void;

    /**
     * Unsubscribe input window show event.
     *
     * @param { Callback<Array<InputWindowInfo>> } [callback] - the callback called when input method shows,
     * when subscriber unsubscribes all callback functions, this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offImeShow(callback?: Callback<Array<InputWindowInfo>>):void;

    /**
     * Subscribes to input window hidden events.
     *
     * @param { Callback<Array<InputWindowInfo>>} callback - the callback called when input method hides.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    onImeHide(callback: Callback<Array<InputWindowInfo>>): void;

    /**
     * Unsubscribe input window hide event.
     *
     * @param { Callback<Array<InputWindowInfo>> } [callback] - the callback called when input method hides,
     * when subscriber unsubscribes all callback functions, this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    offImeHide(callback?: Callback<Array<InputWindowInfo>>): void;

    /**
     * Obtains the default input method capabilities. To optimize performance, the returned **InputMethodProperty**
     * object ensures that only the `name` and `id` attributes that uniquely identify the input method capability are
     * correct. Other attributes may be empty.
     *
     * @returns { InputMethodProperty } Default input method properties. Only the `name` and `id` attributes are
     * guaranteed to be correct. Other attributes may be empty.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDefaultInputMethodAbility(): InputMethodProperty;

    /**
     * Obtains the cursor information of a specified user. If the edit box does not notify the input method service of
     * the cursor information, all attribute values returned are **0**.
     *
     * @param { int } [userId] - User ID.
     *     If the caller is not an application of user 0, the value of this parameter is the user ID of the caller
     * by default.
     *     If the caller is an application of user 0, the value of this parameter is the foreground user ID of the
     * home screen.
     * @returns { CursorInfo } Cursor information of the specified user.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1. No edit box is bound to the current input method application under the specified user.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible causes:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800023 - the specified user does not exist.
     * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
     * @throws { BusinessError } 12800025 - cross-user operation denied.
     * Only user 0 applications are authorized for this operation.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getCursorInfo(userId?: int): CursorInfo;
  }

  /**
   * In the following API examples, you must first use [getController]{@link inputMethod.getController} to obtain an
   * **InputMethodController** instance, and then call the APIs using the obtained instance.
   * <br>
   * <br>**InputMethodController** is the input method client controller, which provides foreground applications with core
   * capabilities for interacting with the input method. After obtaining an instance through
   * `inputMethod.getController()`, you can perform the following operations:
   * <br>
   * <br>- Attachment management: Use
   * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
   * to establish attachment to the input method, and use
   * [detach]{@link inputMethod.InputMethodController.detach(callback: AsyncCallback<void>)} to perform detachment.
   * **attach** and **detach** must be used in pairs.
   * <br>- Keyboard control: Use
   * [showTextInput]{@link inputMethod.InputMethodController.showTextInput(callback: AsyncCallback<void>)} to start the
   * soft keyboard and enter the editing state, and use
   * [hideTextInput]{@link inputMethod.InputMethodController.hideTextInput(callback: AsyncCallback<void>)} to hide the
   * soft keyboard and exit the editing state. **showTextInput** and **hideTextInput** must be used in pairs.
   * <br>- Edit box state synchronization: Use APIs such as
   * [updateCursor]{@link inputMethod.InputMethodController.updateCursor(cursorInfo: CursorInfo, callback: AsyncCallback<void>)},
   * <br>
   * <br>[changeSelection]{@link inputMethod.InputMethodController.changeSelection(text: string, start: int, end: int, callback: AsyncCallback<void>)},
   * and
   * [updateAttribute]{@link inputMethod.InputMethodController.updateAttribute(attribute: InputAttribute, callback: AsyncCallback<void>)}
   * to synchronize edit box state information such as the cursor, selection, and attributes with the input method.
   * <br>- Event subscription: Use APIs such as **on('insertText')** and **on('deleteLeft')** to subscribe to text operation
   * events sent by the input method application.
   * <br>
   * <br>Typical call sequence: `getController()` → `attach()` → `showTextInput()`/`hideTextInput()` → `detach()`
   * <br>
   * <br> > **NOTE**
   * <br> >
   * <br> > **attach** and **detach** must be used in pairs, and **showTextInput** and **hideTextInput** must be used in
   * <br> > pairs. Otherwise, resource leaks or inconsistent states may occur.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 6 dynamic
   * @since 23 static
   */
  interface InputMethodController {
    /**
     * Attaches a self-drawn component to the input method. This API uses an asynchronous callback to return the result.
     * <br>
     * <br>Meaning/Function: Establishes attachment between a self-drawn control and the input method application. This is
     * the prerequisite for a self-drawn control to use input method features.
     * <br>
     * <br>Usage scenarios: When a self-drawn control (not a system native edit box) needs to interact with the input
     * method, this API must be called first to establish attachment. When a native edit box gains focus, the system
     * performs attachment automatically, and there is no need to call this API.
     * <br>
     * <br>Use effect: After the attachment succeeds, the self-drawn control can call **showTextInput**\/**hideTextInput** to
     * control the keyboard visibility, and call **updateCursor**\/**changeSelection** to synchronize the edit box state,
     * subscribe to input method events, and implement more features.
     * <br>
     * <br>Preconditions: The window where the self-drawn control resides must be in the focused state; otherwise, the
     * attachment fails.
     * <br>
     * <br>Usage with related APIs: **attach** must be used in pairs with **detach**. Only after **attach** is called can
     * APIs such as **showTextInput**, **hideTextInput**, and **updateCursor** be called.
     * <br>
     * <br>Differences between similar APIs and selection principles:
     * <br>
     * <br>- **attach**: does not require passing in a UIContext, and is applicable to self-drawn control attachment
     * scenarios of API version 10+.
     * <br>- **attachWithUIContext**: requires passing in a UIContext, and is applicable to stage model scenarios of API
     * version 23+, supporting more attachment options.
     * <br>- Selection principle: For stage model applications of API version 23+, use **attachWithUIContext** first to
     * obtain more complete attachment option support.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An input method can use the following features only when it has a self-drawn component attached to it: showing
     * <br> > or hiding the keyboard, updating the cursor information, changing the selection range of the edit box, saving
     * <br> > the configuration information, and listening for and processing information or commands sent by the input
     * <br> > method.
     * <br> >
     * <br> > If the window where the self-drawn component is located is set to be non-focusable via
     * <br> > [setWindowFocusable]{@link @ohos.window:window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)},
     * <br> > the system cannot guarantee proper interaction between the self-drawing input component and the input method.
     * <br> > If you want to draw an input box in a non-focusable window, refer to
     * <br> > [Input Box and Input Method Interaction in Non-Focusable Windows](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md).
     *
     * @param { boolean } showKeyboard - Whether to show the input method keyboard after the input method is bound.
     * <br>    - true: show the keyboard.
     * <br>    - false: do not show the keyboard.
     * @param { TextConfig } textConfig - Configuration information of the text box.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the input method is bound
     * successfully, err is undefined; otherwise, err is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>): void;
    /**
     * Attaches a self-drawn component to the input method. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An input method can use the following features only when it has a self-drawn component attached to it: showing
     * <br> > or hiding the keyboard, updating the cursor information, changing the selection range of the edit box, saving
     * <br> > the configuration information, and listening for and processing information or commands sent by the input
     * <br> > method.
     * <br> >
     * <br> > If the window where the self-drawn component is located is set to be non-focusable via
     * <br> > [setWindowFocusable]{@link @ohos.window:window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)},
     * <br> > the system cannot guarantee proper interaction between the self-drawing input component and the input method.
     * <br> > If you want to draw an input box in a non-focusable window, refer to
     * <br> > [Input Box and Input Method Interaction in Non-Focusable Windows](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md).
     *
     * @param { boolean } showKeyboard - Whether to show the input method keyboard after the input method is bound
     * successfully.
     * <br>    - **true**: Show the keyboard.
     * <br>    - **false**: Do not show the keyboard.
     * @param { TextConfig } textConfig - Configuration information of the text box.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    attach(showKeyboard: boolean, textConfig: TextConfig): Promise<void>;
    /**
     * Attaches a self-drawn component to the input method. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An input method can use the following features only when it has a self-drawn component attached to it: showing
     * <br> > or hiding the keyboard, updating the cursor information, changing the selection range of the edit box, saving
     * <br> > the configuration information, and listening for and processing information or commands sent by the input
     * <br> > method.
     * <br> >
     * <br> > If the window where the self-drawn component is located is set to be non-focusable via
     * <br> > [setWindowFocusable]{@link @ohos.window:window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)},
     * <br> > the system cannot guarantee proper interaction between the self-drawing input component and the input method.
     * <br> > If you want to draw an input box in a non-focusable window, refer to
     * <br> > [Input Box and Input Method Interaction in Non-Focusable Windows](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md).
     *
     * @param { boolean } showKeyboard - Whether to show the input method keyboard after the input method is bound
     * successfully.
     * <br>    - **true**: Show the keyboard.
     * <br>    - **false**: Do not show the keyboard.
     * @param { TextConfig } textConfig - Configuration information of the text box.
     * @param { RequestKeyboardReason } requestKeyboardReason - Reason for requesting keyboard input.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    attach(showKeyboard: boolean, textConfig: TextConfig, requestKeyboardReason: RequestKeyboardReason): Promise<void>;
    /**
     * Attaches a self-drawn component to the input method. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An input method can use the following features only when it has a self-drawn component attached to it: showing
     * <br> > or hiding the keyboard, updating the cursor information, changing the selection range of the edit box, saving
     * <br> > the configuration information, and listening for and processing the information or commands sent by the input
     * <br> > method.
     *
     * @param { UIContext } uiContext - UIContext instance.
     * @param { TextConfig } textConfig - Configuration information of the text box.
     * @param { AttachOptions } [attachOptions] - Additional options for attaching.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    attachWithUIContext(uiContext: UIContext, textConfig: TextConfig, attachOptions?: AttachOptions): Promise<void>;

    /**
     * Discards the text that is being typed. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called after the edit box is attached to an input method.
     *
     * @returns { Promise<void> } Promise object that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @throws { BusinessError } 12800015 - the other side does not accept the request.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    discardTypingText(): Promise<void>;

    /**
     * Enters the text editing mode. This API uses an asynchronous callback to return the result.
     * <br>
     * <br>Meaning/Function: Pulls up the soft keyboard and puts the edit box into the text editing state.
     * <br>
     * <br>Usage scenarios: Called when a self-drawn control needs to display the soft keyboard to start text input after
     * being attached to the input method.
     * <br>
     * <br>Use effect: The soft keyboard is displayed, and the edit box enters the editable text input state.
     * <br>
     * <br>Preconditions: Call
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * to complete the attachment first. Otherwise, error code 12800009 is reported.
     * <br>
     * <br>Usage with related APIs: **showTextInput** and **hideTextInput** must be used in pairs. After **hideTextInput**
     * is called to exit the editing state, **showTextInput** must be called again to re-enter the editing state.
     * <br>
     * <br>Differences between similar APIs and selection principles:
     * <br>
     * <br>- **showTextInput**: For self-drawn controls. It must be called after **attach** completes the binding. It
     * applies to self-drawn control scenarios and is the standard way to display the keyboard.
     * <br>- **showSoftKeyboard**: For system applications. It requires the **ohos.permission.CONNECT_IME_ABILITY**
     * permission. It applies to scenarios where a system application needs to forcibly display the keyboard.
     * <br>- Selection principle: For self-drawn controls, use **showTextInput** preferentially. Use **showSoftKeyboard**
     * only for system applications with special requirements.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > After the edit box is attached to an input method, this API can be called to start the soft keyboard and enter
     * <br> > the text editing state.
     *
     * @param { AsyncCallback<void> } callback - Callback function. If the editing state is entered successfully, err is
     * undefined; otherwise, it is an error object.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    showTextInput(callback: AsyncCallback<void>): void;
    /**
     * Enters the text editing mode. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > After the edit box is attached to an input method, this API can be called to start the soft keyboard and enter
     * <br> > the text editing state.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    showTextInput(): Promise<void>;
    /**
     * Enters the text editing mode. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > After the edit box is attached to an input method, this API can be called to start the soft keyboard and enter
     * <br> > the text editing state.
     *
     * @param { RequestKeyboardReason } requestKeyboardReason - Reason for requesting keyboard input.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    showTextInput(requestKeyboardReason: RequestKeyboardReason): Promise<void>;
    /**
     * Exits the text editing mode. This API uses an asynchronous callback to return the result.
     * <br>
     * <br>Meaning/Function: Hides the soft keyboard and makes the edit box exit the text editing state.
     * <br>
     * <br>Usage scenarios: Called when a self-drawn control no longer needs input, for example, when the user taps an area
     * outside the edit box or switches to another page.
     * <br>
     * <br>Use effect: The soft keyboard is hidden, and the edit box exits the editing state. Calling this API does not
     * unbind the input method. Calling **showTextInput** again can re-enter the editing state.
     * <br>
     * <br>Preconditions: Call
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * to complete the attachment first, and call **showTextInput** to enter the editing state.
     * <br>
     * <br>Usage with related APIs: **hideTextInput** and **showTextInput** must be used in pairs. If input is needed again
     * after **hideTextInput** is called, you must call **showTextInput** first to re-enter the editing state; other
     * editing operations cannot be called directly.
     * <br>
     * <br>Differences between similar APIs and selection principles:
     * <br>
     * <br>- **hideTextInput**: For self-drawn controls, exits the editing state without detachment, and can re-enter via
     * **showTextInput**. It is suitable for scenarios where a self-drawn control needs to temporarily hide the
     * keyboard.
     * <br>- **hideSoftKeyboard**: For system applications, requires the **ohos.permission.CONNECT_IME_ABILITY** permission.
     * It only hides the keyboard without changing the editing state.
     * <br>- Selection principle: Self-drawn controls should preferentially use **hideTextInput**; system applications with
     * special requirements should use **hideSoftKeyboard**.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > If the soft keyboard is displayed when this API is called, it will be hidden.
     * <br> >
     * <br> > Calling this API does not detach the edit box from the input method. The edit box can call
     * <br> > [showTextInput]{@link inputMethod.InputMethodController.showTextInput(callback: AsyncCallback<void>)} again to
     * <br> > reenter the text editing mode.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     * **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hideTextInput(callback: AsyncCallback<void>): void;

    /**
     * Exits the text editing mode. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > If the soft keyboard is displayed when this API is called, it will be hidden.
     * <br> >
     * <br> > Calling this API does not detach the edit box from the input method. The edit box can call
     * <br> > [showTextInput]{@link inputMethod.InputMethodController.showTextInput(callback: AsyncCallback<void>)} again to
     * <br> > reenter the text editing mode.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hideTextInput(): Promise<void>;

    /**
     * Detaches the self-drawn component from the input method. This API uses an asynchronous callback to return the
     * result.
     * <br>
     * <br>Meaning/Function: Detaches the self-drawn control from the input method application and releases related
     * resources.
     * <br>
     * <br>Usage scenarios: Called when the self-drawn control no longer needs to interact with the input method (for
     * example, page switching, edit box destruction, etc.).
     * <br>
     * <br>Use effect: After detachment, APIs that require the attached state, such as **showTextInput**, **hideTextInput**,
     * and **updateCursor**, can no longer be called. The input method soft keyboard will be hidden.
     * <br>
     * <br>Usage with related APIs: **detach** must be used in pairs with **attach**. It is recommended that you call
     * **detach** after **hideTextInput**. The complete flow is: **attach** → **showTextInput** → **hideTextInput** →
     * **detach**.
     *
     * @param { AsyncCallback<void> } callback - Callback function. When the input method is unbound successfully, err
     * is undefined; otherwise, it is an error object.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    detach(callback: AsyncCallback<void>): void;

    /**
     * Detaches the self-drawn component from the input method. This API uses a promise to return the result.
     * <br>
     * <br>Meaning/Function: Detaches the self-drawn control from the input method application and releases related
     * resources.
     * <br>
     * <br>Usage scenarios: Called when the self-drawn control no longer needs to interact with the input method.
     * <br>
     * <br>Use effect: After detachment, APIs that require the attached state can no longer be called. The input method soft
     * keyboard will be hidden.
     * <br>
     * <br>Usage with related APIs: **detach** must be used in pairs with **attach**.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    detach(): Promise<void>;

    /**
     * Sets the window to be avoided by the input method. This API uses an asynchronous callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called to set the window that avoids the soft keyboard only after the edit box is attached to
     * <br> > the input method.
     * <br> >
     * <br> > Pass in the window ID of the application attached to the input method. This window can avoid the input method
     * <br> > window.
     *
     * @param { int } windowId - Window ID of the application attached to the input method. This parameter must be an
     * integer.
     * @param { AsyncCallback<void> } callback - Callback function. If the setting is successful, err is undefined;
     * otherwise, it is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setCallingWindow(windowId: int, callback: AsyncCallback<void>): void;

    /**
     * Sets the window to avoid the soft keyboard. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > After the window ID of the application bound to the input method is passed in the API, the input method window
     * <br> > will not cover the window holding the application.
     *
     * @param { int } windowId - ID of the window holding the application bound to the input method application. The
     * value must be an integer.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setCallingWindow(windowId: int): Promise<void>;

    /**
     * Updates the cursor information in this edit box. This API can be called to notify the input method of the cursor
     * changes. This API uses an asynchronous callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called to update the cursor information only after the edit box is attached to the input
     * <br> > method.
     *
     * @param { CursorInfo } cursorInfo - Cursor information.
     * @param { AsyncCallback<void> } callback - Callback function. If the cursor information is updated successfully,
     * err is undefined; otherwise, it is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    updateCursor(cursorInfo: CursorInfo, callback: AsyncCallback<void>): void;

    /**
     * Updates the cursor information in this edit box. This API can be called to notify the input method of the cursor
     * changes. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called to update the cursor information only after the edit box is attached to the input
     * <br> > method.
     *
     * @param { CursorInfo } cursorInfo - Cursor information.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    updateCursor(cursorInfo: CursorInfo): Promise<void>;

    /**
     * Updates the information about the selected text in this edit box, to notify the input method when the selected
     * text content or text range changes. This API uses an asynchronous callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called to update the text selection information only after the edit box is attached to the
     * <br> > input method.
     *
     * @param { string } text - Entire input text.
     * @param { int } start - Start position of the selected text. This parameter must be an integer greater than or
     * equal to 0.
     * @param { int } end - End position of the selected text. This parameter must be an integer greater than or equal
     * to 0.
     * @param { AsyncCallback<void> } callback - Callback function. If the text information is updated successfully, err
     * is undefined; otherwise, it is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    changeSelection(text: string, start: int, end: int, callback: AsyncCallback<void>): void;

    /**
     * Updates the information about the selected text in this edit box, to notify the input method when the selected
     * text content or text range changes. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called to update the text selection information only after the edit box is attached to the
     * <br> > input method.
     *
     * @param { string } text - Entire input text.
     * @param { int } start - Start position of the selected text. This parameter must be an integer greater than or
     * equal to 0.
     * @param { int } end - End position of the selected text. This parameter must be an integer greater than or equal
     * to 0.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    changeSelection(text: string, start: int, end: int): Promise<void>;

    /**
     * Updates the attribute information of this edit box. This API uses an asynchronous callback to return the result.
     *
     * @param { InputAttribute } attribute - Text box attribute object.
     * @param { AsyncCallback<void> } callback - Callback function. When the text box attribute information is updated
     * successfully, err is undefined; otherwise, it is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    updateAttribute(attribute: InputAttribute, callback: AsyncCallback<void>): void;

    /**
     * Updates the attribute information of this edit box. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called to update the text box attribute information only after the text box is attached to the
     * <br> > input method.
     *
     * @param { InputAttribute } attribute - Text box attribute object.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    updateAttribute(attribute: InputAttribute): Promise<void>;
    /**
     * Ends this input session. This API uses an asynchronous callback to return the result.
     * <br>
     * <br>Meaning/Function: Ends the current input session and hides the soft keyboard.
     * <br>
     * <br>Usage scenarios: Called when an application needs to proactively end the input session (for example, when the
     * user has completed the input operation).
     * <br>
     * <br>Use effect: The soft keyboard is hidden and the input session ends.
     * <br>
     * <br>Preconditions: This API can be called only when the edit box is attached to the input method, that is, after the
     * edit control is tapped.
     * <br>
     * <br>Usage with related APIs: **stopInputSession** hides the soft keyboard and ends the input session. If the
     * **attach**\/**showTextInput**\/**hideTextInput**\/**detach** flow of a self-drawn control is used, it is recommended
     * that you use **hideTextInput** instead of **stopInputSession**.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the text box is bound to the input method. That is, it can be called to end
     * <br> > the input session only when the text box is focused.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the input session is ended
     * successfully, err is undefined and data is true. Otherwise, err is an error object.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    stopInputSession(callback: AsyncCallback<boolean>): void;

    /**
     * Ends this input session. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to end
     * <br> > the input session only when the edit box is focused.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the input
     * session is ended successfully, and **false** indicates the opposite.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    stopInputSession(): Promise<boolean>;

    /**
     * Ends this input session. This API uses an asynchronous callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to end
     * <br> > the input session only when the edit box is focused.
     *
     * @param { AsyncCallback<boolean> } callback - Callback function. When the session ends successfully, err is
     * undefined and data is true; otherwise, it is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodController#stopInputSession
     */
    stopInput(callback: AsyncCallback<boolean>): void;

    /**
     * Ends this input session. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to end
     * <br> > the input session only when the edit box is focused.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the operation is
     * successful, and **false** means the opposite.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodController#stopInputSession
     */
    stopInput(): Promise<boolean>;

    /**
     * Shows the soft keyboard. This API uses an asynchronous callback to return the result.
     * <br>
     * <br>Meaning/Function: Forcibly displays the soft keyboard of the current input method.
     * <br>
     * <br>Usage scenarios: Used when a system application needs to forcibly display the input method soft keyboard (for
     * example, a Settings application testing an input method).
     * <br>
     * <br>Use effect: The input method soft keyboard is displayed.
     * <br>
     * <br>Preconditions: This API can be called only when the edit box is attached to the input method.
     * <br>
     * <br>Differences between similar APIs and selection principles:
     * <br>
     * <br>- **showSoftKeyboard**: for system applications, requires the **ohos.permission.CONNECT_IME_ABILITY** permission,
     * and only displays the keyboard without changing the editing state.
     * <br>- **showTextInput**: for self-drawn controls, requires attachment first, and pulls up the keyboard and enters the
     * editing state.
     * <br>- Selection principle: use **showTextInput** for self-drawn controls; use **showSoftKeyboard** for system
     * applications with the required permission.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the text box is bound to the input method. That is, it can be called to show
     * <br> > the soft keyboard of the current input method only when the text box is focused.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the soft keyboard is displayed
     * successfully, err is undefined. Otherwise, err is an error object.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     * required to call the API.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    showSoftKeyboard(callback: AsyncCallback<void>): void;

    /**
     * Shows the soft keyboard. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to
     * <br> > show the soft keyboard only when the edit box is focused.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     * required to call the API.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    showSoftKeyboard(): Promise<void>;

    /**
     * Shows the soft keyboard on a specified screen. This API uses a promise to return the result.
     * <br>
     * <br>Paired calls:
     * <br>
     * <br>- This method is used together with **hideSoftKeyboard** to control the showing and hiding of the soft keyboard.
     * <br>- Generally, after calling **showSoftKeyboard** to show the soft keyboard, you can call **hideSoftKeyboard** to
     * hide the soft keyboard when needed.
     * <br>- This API can be called only when the edit box is attached to the input method.
     * <br>
     * <br> > **NOTE:**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to
     * <br> > show the soft keyboard only when the edit box is focused.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { long } displayId - Screen ID.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     * required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    showSoftKeyboard(displayId: long): Promise<void>;

    /**
     * Hides the soft keyboard. This API uses an asynchronous callback to return the result.
     * <br>
     * <br>Meaning/Function: Forcibly hides the soft keyboard of the current input method.
     * <br>
     * <br>Usage scenarios: Used when a system application needs to forcibly hide the input method soft keyboard.
     * <br>
     * <br>Use effect: The input method soft keyboard is hidden.
     * <br>
     * <br>Preconditions: This API can be called only when the edit box is attached to the input method.
     * <br>
     * <br>Differences between similar APIs and selection principles:
     * <br>
     * <br>- **hideSoftKeyboard**: for system applications, requires the **ohos.permission.CONNECT_IME_ABILITY** permission,
     * and only hides the keyboard without exiting the editing state.
     * <br>- **hideTextInput**: for self-drawn controls, hides the keyboard and exits the editing state, and can re-enter
     * the editing state by calling **showTextInput** again.
     * <br>- Selection principle: self-drawn controls use **hideTextInput**; system applications with the required
     * permission use **hideSoftKeyboard**.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the text box is attached to the input method. That is, it can be called to
     * <br> > hide the soft keyboard only when the text box is focused.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the soft keyboard is hidden
     * successfully, err is undefined. Otherwise, err is an error object.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     * required to call the API.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hideSoftKeyboard(callback: AsyncCallback<void>): void;

    /**
     * Hides the soft keyboard. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to
     * <br> > hide the soft keyboard only when the edit box is focused.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     * required to call the API.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hideSoftKeyboard(): Promise<void>;

    /**
     * Hides the soft keyboard on a specified screen. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to
     * <br> > hide the soft keyboard only when the edit box is focused.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { long } displayId - Screen ID.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     * required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     * a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    hideSoftKeyboard(displayId: long): Promise<void>;

    /**
     * Sends the custom communication to the input method application. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method and enters the edit mode, and the
     * <br> > input method application is in full experience mode.
     * <br> >
     * <br> > The maximum length of **msgId** is 256 B, and the maximum length of **msgParam** is 128 KB.
     *
     * @param { string } msgId - Identifier of the custom data to be sent to the input method application.
     * @param { ArrayBuffer } [msgParam] - Message body of the custom data to be sent to the input method application.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1. Incorrect parameter types. 2. Incorrect parameter length.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     * 1.the edit box is not focused. 2.no edit box is bound to current input method application.
     * 3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @throws { BusinessError } 12800014 - the input method is in basic mode.
     * @throws { BusinessError } 12800015 - the other side does not accept the request.
     * @throws { BusinessError } 12800016 - input method client is not editable.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    sendMessage(msgId: string, msgParam?: ArrayBuffer): Promise<void>;

    /**
     * Registers or unregisters MessageHandler.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > The [MessageHandler]{@link inputMethod.MessageHandler} object is globally unique. After multiple registrations,
     * <br> > only the last registered object is valid and retained, and the
     * <br> > [onTerminated]{@link inputMethod.MessageHandler.onTerminated()} callback of the penultimate registered object
     * <br> > is triggered.
     * <br> >
     * <br> > If no parameter is set, unregister [MessageHandler]{@link inputMethod.MessageHandler}. Its
     * <br> > [onTerminated]{@link inputMethod.MessageHandler.onTerminated()} callback will be triggered.
     *
     * @param { MessageHandler } [msgHandler] - This object receives custom communication data from the input method
     * application through
     * [onMessage]{@link inputMethod.MessageHandler.onMessage(msgId: string, msgParam?: ArrayBuffer)} and receives a
     * message for terminating the subscription to this object through
     * [onTerminated]{@link inputMethod.MessageHandler.onTerminated()}.
     *     If no parameter is set, unregister [MessageHandler]{@link inputMethod.MessageHandler}. Its
     * [onTerminated]{@link inputMethod.MessageHandler.onTerminated()} callback will be triggered.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    recvMessage(msgHandler?: MessageHandler): void;

    /**
     * Enables listening for the select-by-range event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'selectByRange' } type - Type of the listener to set. The value is fixed at 'selectByRange'.
     * @param { Callback<Range> } callback - Callback used to return the text range to be selected.Based on the
     * returned text range, the developer selects the corresponding text in the text box in the callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'selectByRange', callback: Callback<Range>): void;

    /**
     * Disables listening for the select-by-range event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'selectByRange' } type - Sets the listening type. The value is fixed at 'selectByRange'.
     * @param { Callback<Range> } [callback] - Callback function to unsubscribe from. It must be the same as the one
     * passed to the on API.
     *     If this parameter is not specified, all callback events corresponding to the type are unsubscribed from.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'selectByRange', callback?: Callback<Range>): void;

    /**
     * Enables listening for the select-by-cursor-movement event. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'selectByMovement' } type - Type of the listener to set. The value is fixed at 'selectByMovement'.
     * @param { Callback<Movement> } callback - Callback used to return the direction of cursor movement.Selects
     * the corresponding text in the text box based on the passed cursor movement direction.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'selectByMovement', callback: Callback<Movement>): void;

    /**
     * Disables listening for the select-by-cursor-movement event. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'selectByMovement' } type - Sets the listening type. The value is fixed to 'selectByMovement'.
     * @param { Callback<Movement> } [callback] - Callback to unsubscribe. It must be the same as the one passed in the
     * on API.
     *     If this parameter is not specified, all callback events corresponding to the type are unsubscribed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'selectByMovement', callback?: Callback<Movement>): void;

    /**
     * Enables listening for the text insertion event of the input method. This API uses an asynchronous callback to
     * return the result.
     *
     * @param { 'insertText' } type - Sets the listening type. The value is fixed to 'insertText'.
     * @param { function } callback - Callback function that returns the text content to be inserted.Operate on the
     * content in the text box based on the passed-in text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'insertText', callback: (text: string) => void): void;

    /**
     * Disables listening for the text insertion event of the input method.
     *
     * @param { 'insertText' } type - Sets the listening type. The value is fixed to 'insertText'.
     * @param { function } [callback] - Callback function to unsubscribe from. It must be the same as the one passed to
     * the on API.<br/>If this parameter is not specified, all callback events corresponding to the type are
     * unsubscribed from.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'insertText', callback?: (text: string) => void): void;

    /**
     * Enables listening for the leftward delete event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'deleteLeft' } type - Sets the listening type. The value is fixed to 'deleteLeft'.
     * @param { function } callback - Callback function, which returns the length of text to be deleted to the left.<br/
     * <br>     >Based on the passed deletion length, operates on the text in the text box in the callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'deleteLeft', callback: (length: number) => void): void;

    /**
     * Disables listening for the leftward delete event.
     *
     * @param { 'deleteLeft' } type - Sets the listener. The value is fixed to 'deleteLeft'.
     * @param { function } [callback] - Callback function to unsubscribe from. It must be the same as the one passed to
     * the on API.
     *     If this parameter is not specified, all callback events corresponding to type are unsubscribed from.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'deleteLeft', callback?: (length: number) => void): void;

    /**
     * Enables listening for the rightward delete event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'deleteRight' } type - Type of the listener to set. The value is fixed at 'deleteRight'.
     * @param { function } callback - Callback used to return the length of text to be deleted to the right.Based
     * on the returned deletion length, operate the text in the text box in the callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'deleteRight', callback: (length: number) => void): void;

    /**
     * Disables listening for the rightward delete event.
     *
     * @param { 'deleteRight' } type - Listening type. The value is fixed to `deleteRight`.
     * @param { function } [callback] - Callback function to unsubscribe. It must be the same as the one passed to the
     * on API.
     *     If this parameter is not specified, all callback events corresponding to the type are unsubscribed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'deleteRight', callback?: (length: number) => void): void;

    /**
     * Enables listening for the soft keyboard status event of the input method. This API uses an asynchronous callback
     * to return the result.
     *
     * @param { 'sendKeyboardStatus' } type - Type of the listener to set. The value is fixed at 'sendKeyboardStatus'.
     * @param { function } callback - Callback used to return the soft keyboard status.Perform the corresponding
     * operation in the callback based on the returned soft keyboard status.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'sendKeyboardStatus', callback: (keyboardStatus: KeyboardStatus) => void): void;

    /**
     * Disables listening for the input method soft keyboard status event of the input method.
     *
     * @param { 'sendKeyboardStatus' } type - Sets the listening type. The value is fixed to 'sendKeyboardStatus'.
     * @param { function } [callback] - Callback function to unsubscribe from. If this parameter is not specified, all
     * callback events corresponding to the type are unsubscribed from.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'sendKeyboardStatus', callback?: (keyboardStatus: KeyboardStatus) => void): void;

    /**
     * Enables listening for the function key sending event of the input method. This API uses an asynchronous callback
     * to return the result.
     *
     * @param { 'sendFunctionKey' } type - Sets the listening type. The value is fixed to 'sendFunctionKey'.
     * @param { function } callback - Callback used to return the function key information sent by the input method
     * application.<br/>Performs the corresponding operation based on the returned function key information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'sendFunctionKey', callback: (functionKey: FunctionKey) => void): void;

    /**
     * Disables listening for the function key sending event of the input method.
     *
     * @param { 'sendFunctionKey' } type - Sets the listening type, which is fixed to 'sendFunctionKey'.
     * @param { function } [callback] - Callback function to unsubscribe from. It must be the same as the one passed in
     * the on interface.
     *     If this parameter is not specified, all callback events corresponding to the type are unsubscribed from.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'sendFunctionKey', callback?: (functionKey: FunctionKey) => void): void;

    /**
     * Enables listening for the cursor movement event of the input method. This API uses an asynchronous callback to
     * return the result.
     *
     * @param { 'moveCursor' } type - Type of the listener to set. The value is fixed at 'moveCursor'.
     * @param { function } callback - Callback used to return the cursor information.Changes the cursor position
     * based on the returned cursor movement direction, for example, moving the cursor up or down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'moveCursor', callback: (direction: Direction) => void): void;

    /**
     * Disables listening for the cursor movement event of the input method.
     *
     * @param { 'moveCursor' } type - Type of the listener to set. The value is fixed at 'moveCursor'.
     * @param { function } [callback] - Callback function to unsubscribe from. It must be the same as the one passed to
     * the on API.
     *     If this parameter is not specified, all callback events corresponding to the type are unsubscribed from.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'moveCursor', callback?: (direction: Direction) => void): void;

    /**
     * Enables listening for the extended action handling event of the input method. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'handleExtendAction' } type - Type of the listener to set. The value is fixed at 'handleExtendAction'.
     * @param { function } callback - Callback used to return the extended editing operation type.Performs the
     * corresponding operation, such as cut or copy, based on the passed extended editing operation type.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'handleExtendAction', callback: (action: ExtendAction) => void): void;

    /**
     * Disables listening for the extended action handling event of the input method. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'handleExtendAction' } type - Sets the listening type. The value is fixed at 'handleExtendAction'.
     * @param { function } [callback] - Callback function to unsubscribe. It must be the same as the one passed to the
     * on API.
     *     If this parameter is not specified, all callback events corresponding to the type are unsubscribed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'handleExtendAction', callback?: (action: ExtendAction) => void): void;

    /**
     * Enables listening for the event of obtaining the length of text deleted leftward. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'getLeftTextOfCursor' } type - Type of the listener to set. The value is fixed at 'getLeftTextOfCursor'.
     * @param { function } callback - Callback used to obtain and return the text content of the specified length to the
     * left of the cursor in the latest state of the text box.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getLeftTextOfCursor', callback: (length: number) => string): void;

    /**
     * Disables listening for the event of obtaining the length of text deleted leftward. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'getLeftTextOfCursor' } type - Sets the listening type. The value is fixed to 'getLeftTextOfCursor'.
     * @param { function } [callback] - Callback function to unsubscribe from. It must be the same as the one passed to
     * the on API.
     *     If this parameter is not specified, all callback events corresponding to the type are unsubscribed from.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getLeftTextOfCursor', callback?: (length: number) => string): void;

    /**
     * Enables listening for the event of obtaining the length of text deleted rightward. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'getRightTextOfCursor' } type - Sets the listening type. The value is fixed to 'getRightTextOfCursor'.
     * @param { function } callback - Callback function that obtains and returns the text content of the specified
     * length to the right of the cursor in the latest state of the text box.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getRightTextOfCursor', callback: (length: number) => string): void;

    /**
     * Disables listening for the event of obtaining the length of text deleted rightward. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'getRightTextOfCursor' } type - Sets the listening type. The value is fixed to 'getRightTextOfCursor'.
     * @param { function } [callback] - Callback function to unsubscribe from. It must be the same as the one passed to
     * the on API.
     *     If this parameter is not specified, all callback events corresponding to the type are unsubscribed from.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getRightTextOfCursor', callback?: (length: number) => string): void;

    /**
     * Enables listening for the event of obtaining the index of text at the cursor. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'getTextIndexAtCursor' } type - Type of the listener to set. The value is fixed at 'getTextIndexAtCursor
     * '.
     * @param { function } callback - Callback used to obtain and return the text index at the cursor in the latest
     * state of the text box.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getTextIndexAtCursor', callback: () => number): void;

    /**
     * Disables listening for the event of obtaining the index of text at the cursor. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'getTextIndexAtCursor' } type - Type of the listener to set. The value is fixed to 'getTextIndexAtCursor
     * '.
     * @param { function } [callback] - Callback function to unsubscribe from. It must be the same as the one passed to
     * the on API.
     *     If this parameter is not specified, all callback events corresponding to the type are unsubscribed from.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getTextIndexAtCursor', callback?: () => number): void;

    /**
     * Subscribes to the event for text preview operations in an input method application. This API uses an asynchronous
     * callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > To use the text preview function, you need to subscribe to this event before calling
     * <br> > [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * <br> > and subscribe to this event together with
     * <br> > [on('finishTextPreview')]{@link inputMethod.InputMethodController.on(type: 'finishTextPreview', callback: Callback<void>)}.
     *
     * @param { 'setPreviewText' } type - Type of the listener to set. The value is fixed at 'setPreviewText'.
     * @param { SetPreviewTextCallback } callback - Callback used to receive the preview text content and return it.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    on(type: 'setPreviewText', callback: SetPreviewTextCallback): void;

    /**
     * Unsubscribes from the event for text preview operations in an input method application. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { 'setPreviewText' } type - Listening type. The value is fixed at 'setPreviewText'.
     * @param { SetPreviewTextCallback } [callback] - Callback function to unsubscribe from. It must be the same as the
     * one passed in the on API.
     *     If this parameter is not specified, all callback events of the corresponding type are unsubscribed from.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    off(type: 'setPreviewText', callback?: SetPreviewTextCallback): void;

    /**
     * Subscribes to the event of finishing text preview. This API uses an asynchronous callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > To use the text preview function, you need to subscribe to this event before calling
     * <br> > [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * <br> > and subscribe to this event together with
     * <br> > [on('setPreviewText')]{@link inputMethod.InputMethodController.on(type: 'setPreviewText', callback: SetPreviewTextCallback)}.
     *
     * @param { 'finishTextPreview' } type - Type of the listener to set. The value is fixed at 'finishTextPreview'.
     * @param { Callback<void> } callback - Callback function. When the logic for finishing preview text processing
     * succeeds, err is undefined; otherwise, it is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    on(type: 'finishTextPreview', callback: Callback<void>): void;

    /**
     * Unsubscribes from the event of finishing text preview. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'finishTextPreview' } type - Sets the listening type. The value is fixed at 'finishTextPreview'.
     * @param { Callback<void> } [callback] - Callback function to unsubscribe from. It must be the same as the one
     * passed in the on API.
     *     If this parameter is not specified, all callback events corresponding to the type are unsubscribed from.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    off(type: 'finishTextPreview', callback?: Callback<void>): void;

    /**
     * Register a callback and when IME sends select event with range of selection,
     * the callback will be invoked.
     *
     * @param { Callback<Range> } callback - the callback called when the input method selects text by range.
     * The range of selection is provided for this callback, and subscribers are expected to select
     * corresponding text in callback according to the range.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectByRange(callback: Callback<Range>): void;
    /**
     * Unregister the callback of selectedByRange.
     *
     * @param { Callback<Range> } [callback] - the callback called when the input method selects text by range.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectByRange(callback?: Callback<Range>): void;

    /**
     * Register a callback and when IME sends select event witch movement of cursor,
     * the callback will be invoked.
     *
     * @param { Callback<Movement> } callback - the callback called when the input method selects text by movement.
     * The movement of the cursor is provided for this callback, and subscribers are expected to select
     * corresponding text in callback according to themovement.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectByMovement(callback: Callback<Movement>): void;
    /**
     * Unregister the callback of selectedByMovement.
     *
     * @param { Callback<Movement> } [callback] - the callback called when the input method selects text by movement.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectByMovement(callback?: Callback<Movement>): void;

   /**
     * Register a callback and when IME sends insert text event, the callback will be invoked.
     *
     * @param { Callback<string> } callback - the callback called when the input method inserts text.
     * Subscribers are expected to process the inserted text and update changes in editor by
     * changeSelection and updateCursor as needed.
     * @throws  { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onInsertText(callback: Callback<string>): void;
  /**
     * Unregister the callback of insertText.
     *
     * @param { Callback<string> } [callback] - the callback called when the input method inserts text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offInsertText(callback?: Callback<string>): void;

   /**
     * Register a callback and when IME sends delete left event with length,
     * the callback will be invoked.
     *
     * @param { Callback<int> } callback - the callback called when the input method deletes text
     * to the left of the cursor. The length of delete is provided for this callback.
     * Subscribers are expected to delete specified length of text to the left of the cursor and
     * update changes in editor by changeSelection and updateCursor as needed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onDeleteLeft(callback: Callback<int>): void;
   /**
     * Unregister the callback of deleteLeft.
     *
     * @param { Callback<int> } [callback] - the callback called when the input method deletes text
     * to the left of the cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offDeleteLeft(callback?: Callback<int>): void;

    /**
     * Register a callback and when IME sends delete right event with length,
     * the callback will beinvoked.
     *
     * @param { Callback<int> } callback - the callback called whenthe input method deletes text
     * to theright of the cursor. The length of delete is provided for this callback.
     * Subscribers are expected to delete specified length of text to the right of the cursor and
     * update changes in editor by changeSelection and updateCursor as needed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onDeleteRight(callback: Callback<int>): void;
  /**
     * Unregister the callback of deleteRight.
     *
     * @param { Callback<int> } [callback] - the callback called when the input method deletes text
     * to the right of the cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offDeleteRight(callback?: Callback<int>): void;

    /**
     * Register a callback and when IME sends keyboard status, the callback will be invoked.
     *
     * @param { Callback<KeyboardStatus> } callback - the callback called when the input method send keyboard's status.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSendKeyboardStatus(callback: Callback<KeyboardStatus>): void;
   /**
     * Unregister the callback of sendKeyboardStatus.
     *
     * @param { Callback<KeyboardStatus> } [callback] - the callback called when the inputmethod send
     * keyboard's status.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSendKeyboardStatus(callback?: Callback<KeyboardStatus>): void;

   /**
     * Register a callback and whenIME sends functionKey, the callback will be invoked.
     *
     * @param { Callback<FunctionKey> } callback - the callback called when the input method send function key.
     * The functionKey is provided for this callback. Subscribers are expected to complete the
     * corresponding task based on the value of functionKey.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSendFunctionKey(callback: Callback<FunctionKey>): void;
    /**
     * Unregister the callback of sendFunctionKey.
     *
     * @param { Callback<FunctionKey> } [callback] - the callback called when the input method send function key.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSendFunctionKey(callback?: Callback<FunctionKey>): void;

    /**
     * Register a callback and when IME sends move cursor, the callback will be invoked.
     *
     * @param { Callback<Direction> } callback - the callback called when the input method moves cursor.
     * The direction of cursor is provided for this callback. Subscribers are expected to move the cursor and
     * update changes in editor by changeSelection and updateCursor.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onMoveCursor(callback: Callback<Direction>): void;
  /**
     * Unregister the callback of moveCursor.
     *
     * @param { Callback<Direction> } [callback] - the callback called when the input method moves cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offMoveCursor(callback?: Callback<Direction>): void;

  /**
     * Register a callback and when IME sends extend action code, the callback will be invoked.
     *
     * @param { Callback<ExtendAction> } callback - the callback called when the input method sends extend action.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onHandleExtendAction(callback: Callback<ExtendAction>): void;
  /**
     * Unregister the callback of handleExtendAction.
     *
     * @param { Callback<ExtendAction> } [callback] - the callback called when the input method sends extend action.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offHandleExtendAction(callback?: Callback<ExtendAction>): void;

  /**
     * Register a callback and when input method ability gets left text of cursor, the callback will be invoked.
     *
     * @param { GetTextCallback } callback - the callback called when the input method gets text to the left
     * of the cursor. The callback must be a synchronization method and will block the input method application.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onGetLeftTextOfCursor(callback: GetTextCallback): void;
   /**
     * Unregister the callback of getLeftTextofCursor event.
     *
     * @param { GetTextCallback } [callback] - the callback called when the input method gets text to the left
     * of the cursor. The callback must be a synchronization method and will block the input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offGetLeftTextOfCursor(callback?: GetTextCallback): void;

   /**
     * Register a callback and when input method ability gets right text of cursor, the callback will be invoked.
     *
     * @param { GetTextCallback } callback - the callback called when the input method gets text to the right
     * of the cursor. The callback must be a synchronization method and will block the input method application.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onGetRightTextOfCursor(callback: GetTextCallback): void;
   /**
     * Unregister the callback of getRightTextOfCursor event.
     *
     * @param { GetTextCallback } [callback] - the callback called when the input method gets text to the right
     * of the cursor. The callback must be a synchronization method and will block the input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offGetRightTextOfCursor(callback?: GetTextCallback): void;

   /**
     * Register a callback and when input method ability gets the text index at cursor, the callback will be invoked.
     *
     * @param { GetTextIndexAtCursorCallback } callback - the callback called when input method the gets cursor index.
     * The callback must be a synchronization method, and should return the text index at the cursor.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onGetTextIndexAtCursor(callback: GetTextIndexAtCursorCallback): void;
   /**
     * Unregister the callback of getTextIndexAtCursor.
     *
     * @param { GetTextIndexAtCursorCallback } [callback] - the callback called when the input method gets cursor index.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 static
     */
    offGetTextIndexAtCursor(callback?:GetTextIndexAtCursorCallback): void;

   /**
     * <p>Subscribe 'setPreviewText' event.</p>
     * <p>To support the preview text feature, developers should subscribe to this event before calling attach.</p>
     *
     * @param { SetPreviewTextCallback } callback - the callback called when the input method setspreview text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSetPreviewText(callback: SetPreviewTextCallback): void;
   /**
     * Unsubscribe 'setPreviewText' event.
     *
     * @param { SetPreviewTextCallback } [callback] - optional, the callback called when the input method
     * sets preview text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 static
     */
    offSetPreviewText(callback?:SetPreviewTextCallback): void;

   /**
     * <p>Subscribe 'finishTextPreview' event.</p>
     * <p>To support the preview text feature, developers should subscribe to this event before calling attach.</p>
     *
     * @param { Callback<void> } callback - the callback called when the input method finishes text preview.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onFinishTextPreview(callback: Callback<void>): void;
    /**
     * Unsubscribe 'finishTextPreview' event.
     *
     * @param { Callback<void> } [callback] - optional, the callback called when the input method finishes text preview.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offFinishTextPreview(callback?: Callback<void>): void;
  }

  /**
   * Describes the input method application properties.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface InputMethodProperty {
    /**
     * Input method package name. Mandatory.
     * <br>
     * <br>Note: This API is supported since API version 8 and deprecated since API version 9. Use **name** instead.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodProperty#name
     */
    readonly packageName: string;

    /**
     * Unique identifier of the input method. Mandatory.
     * <br>
     * <br>Note: This API is supported since API version 8 and deprecated since API version 9. Use **id** instead.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodProperty#id
     */
    readonly methodId: string;

    /**
     * Mandatory. Input method package name.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly name: string;

    /**
     * Mandatory. Unique identifier of the input method extension within the application. Together with name, it forms
     * the globally unique identifier of the input method extension.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly id: string;

    /**
     * Optional.
     * <br>
     * <br>- When **InputMethodProperty** is used as an input parameter of APIs such as switch and query, you may omit this
     * field, and an input method extension can be uniquely specified by **name** and **id**.
     * <br>- When **InputMethodProperty** is used as the return value of a query API (such as
     * [getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}), this field indicates the display name of the
     * input method extension. The label configured in **InputMethodExtensionAbility** is used first; if it is not
     * configured, the label of the application entry ability is automatically used; if the application entry ability
     * does not configure a label, the label configured in the application **AppScope** is automatically used.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly label?: string;

    /**
     * Optional.
     * <br>
     * <br>- When **InputMethodProperty** is used as an input parameter of APIs such as switch and query, you may omit this
     * field, and an input method extension can be uniquely specified by **name** and **id**.
     * <br>- When **InputMethodProperty** is used as the return value of a query API (such as
     * [getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}), this field indicates the resource ID of the
     * **label** field.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    readonly labelId?: long;

    /**
     * Optional.
     * <br>
     * <br>- When **InputMethodProperty** is used as an input parameter of APIs such as switch and query, you may omit this
     * field, and an input method extension can be uniquely specified by **name** and **id**.
     * <br>- When **InputMethodProperty** is used as the return value of a query API (such as
     * [getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}), this field indicates the input method icon
     * data, which can be obtained by querying **iconId**.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly icon?: string;

    /**
     * Optional.
     * <br>
     * <br>- When **InputMethodProperty** is used as an input parameter of APIs such as switch and query, you may omit this
     * field, and an input method extension can be uniquely specified by **name** and **id**.
     * <br>- When **InputMethodProperty** is used as the return value of a query API (such as
     * [getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}), this field indicates the resource ID of the
     * **icon** field.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly iconId?: long;

    /**
     * Optional.
     * <br>
     * <br>- When **InputMethodProperty** is used as an input parameter of APIs such as switch and query, you may omit this
     * field, and an input method extension can be uniquely specified by **name** and **id**.
     * <br>- When **InputMethodProperty** is used as the return value of a query API (such as
     * [getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}), this field indicates the enabled state of the
     * input method.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly enabledState?: EnabledState;

    /**
     * Input method extension information.
     * <br>
     * <br>- Since API version 10: optional
     * <br>- API version 9: mandatory
     *
     * @type { object } [since 9 - 9]
     * @type { ?object } [since 10]
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    extra?: object;
  }

  /**
   * Enumerates the directions of cursor movement of the input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum Direction {
    /**
     * Upward.
     * <br>
     * <br>Usage scenarios: Used when the input method requests to move the cursor upward, such as moving the cursor up in
     * multi-line text.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_UP = 1,

    /**
     * Downward.
     * <br>
     * <br>Usage scenarios: Used when the input method requests to move the cursor downward.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_DOWN,

    /**
     * Leftward.
     * <br>
     * <br>Usage scenarios: Used when the input method requests to move the cursor leftward, such as moving the cursor
     * before deleting the character to the left of the cursor.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_LEFT,

    /**
     * Rightward.
     * <br>
     * <br>Usage scenarios: Used when the input method requests to move the cursor rightward.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_RIGHT
  }

  /**
   * Describes the range of the selected text.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Range {
    /**
     * Index of the first selected character in the edit box. The value is an integer greater than or equal to 0, and
     * cannot exceed the actual text length.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    start: int;

    /**
     * Index of the last selected character in the edit box. The value is an integer greater than or equal to 0, and
     * cannot exceed the actual text length. The **end** value must be greater than the **start** value.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    end: int;
  }

  /**
   * Describes the direction in which the cursor moves when the text is selected.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Movement {
    /**
     * Direction in which the cursor moves when the text is selected.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    direction: Direction;
  }

  /**
   * Enumerates the text input types.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum TextInputType {
    /**
     * NONE.
     * <br>
     * <br>Usage scenarios: used when the edit box does not want to specify a particular input type, and the input method
     * uses the default keyboard layout.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE = -1,

    /**
     * Text type.
     * <br>
     * <br>Usage scenarios: applicable to ordinary text input boxes, such as chat and memo, and the input method displays a
     * full-featured keyboard.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    TEXT = 0,

    /**
     * Multiline type.
     * <br>
     * <br>Usage scenarios: applicable to scenarios that require multiline text input, such as long text editing and comment
     * boxes.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    MULTILINE,

    /**
     * Number type.
     * <br>
     * <br>Usage scenarios: applicable to scenarios that require only numeric input, such as quantity input and age input,
     * and the input method displays a numeric keyboard.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NUMBER,

    /**
     * Phone number type.
     * <br>
     * <br>Usage scenarios: applicable to phone number input boxes, and the input method displays a phone number keyboard (
     * including digits and common phone symbols).
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PHONE,

    /**
     * Date type.
     * <br>
     * <br>Usage scenarios: applicable to date and time input boxes, and the input method displays a date-related keyboard
     * layout.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    DATETIME,

    /**
     * Email address type.
     * <br>
     * <br>Usage scenarios: applicable to email input boxes, and the input method keyboard highlights common email symbols
     * such as "@" and ".".
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    EMAIL_ADDRESS,

    /**
     * Link type.
     * <br>
     * <br>Usage scenarios: applicable to URL input boxes, and the input method keyboard highlights common URL symbols such
     * as "/" and ".".
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    URL,

    /**
     * Password type.
     * <br>
     * <br>Usage scenarios: applicable to password input boxes, and the input method displays a visible password keyboard
     * without automatic suggestions.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    VISIBLE_PASSWORD,

    /**
     * Numeric password type.
     * <br>
     * <br>Usage scenarios: applicable to scenarios that require only numeric password input, such as PIN code input.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    NUMBER_PASSWORD,

    /**
     * Screen lock password type.
     * <br>
     * <br>Usage scenarios: applicable to the password input box on the lock screen.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCREEN_LOCK_PASSWORD,

    /**
     * Username type.
     * <br>
     * <br>Usage scenarios: applicable to username input boxes, and the input method can provide optimized suggestions based
     * on username characteristics.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    USER_NAME,

    /**
     * New password type.
     * <br>
     * <br>Usage scenarios: applicable to input boxes for setting a new password, and the input method can provide password
     * strength hints.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NEW_PASSWORD,

    /**
     * Number type with a decimal point.
     * <br>
     * <br>Usage scenarios: applicable to scenarios that require input of numbers with a decimal point, such as amount
     * input.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NUMBER_DECIMAL,

    /**
     * Verification code type.
     * <br>
     * <br>Usage scenarios: applicable to verification code input boxes, and the input method can optimize the verification
     * code input experience.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    ONE_TIME_CODE
  }

  /**
   * Enumerates the function types represented by the Enter key of the input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum EnterKeyType {
    /**
     * Unspecified.
     * <br>
     * <br>Usage scenarios: used when the edit box does not specify a specific function for the Enter key.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * NONE.
     * <br>
     * <br>Usage scenarios: the Enter key has no specific behavior and is used only as a line break or a normal key.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE,

    /**
     * Go.
     * <br>
     * <br>Usage scenarios: applicable to URL input boxes, where the Enter key triggers the "Go" action, such as opening a
     * link.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    GO,

    /**
     * Search.
     * <br>
     * <br>Usage scenarios: applicable to search boxes, where the Enter key triggers the search action.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SEARCH,

    /**
     * Send.
     * <br>
     * <br>Usage scenarios: applicable to message sending boxes, where the Enter key triggers the send action.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SEND,

    /**
     * Next.
     * <br>
     * <br>Usage scenarios: applicable to multi-step forms, where the Enter key jumps to the next input box.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NEXT,

    /**
     * Done.
     * <br>
     * <br>Usage scenarios: applicable to the last input box of a single-step form, where the Enter key indicates that input
     * is complete.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    DONE,

    /**
     * Previous.
     * <br>
     * <br>Usage scenarios: applicable to multi-step forms, where the Enter key jumps to the previous input box.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PREVIOUS,

    /**
     * Line break.
     * <br>
     * <br>Usage scenarios: applicable to multi-line text edit boxes, where the Enter key inserts a line break.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    NEWLINE
  }

  /**
   * Enumerates the soft keyboard states of the input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum KeyboardStatus {
    /**
     * NONE.
     * <br>
     * <br>Usage scenarios: used when the keyboard status is not determined or cannot be determined.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Hidden state.
     * <br>
     * <br>Usage scenarios: indicates that the soft keyboard is currently hidden.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    HIDE = 1,

    /**
     * Shown state.
     * <br>
     * <br>Usage scenarios: indicates that the soft keyboard is currently shown.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SHOW = 2
  }

  /**
   * Describes the attributes of the edit box, including the text input type and Enter key function type.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface InputAttribute {
    /**
     * Text input type.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    textInputType: TextInputType;

    /**
     * Enter key function type.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    enterKeyType: EnterKeyType;

    /**
     * Placeholder information set for the text box.
     * <br>
     * <br>- When the text box sets placeholder information, the length does not exceed 255 characters (if it exceeds, it is
     * automatically truncated to 255 characters), used to prompt or guide the user to enter temporary text or symbols.
     * (For example, prompting the input result feedback of an input item being "mandatory" or "optional".)
     * <br>- When the text box does not set placeholder information, it defaults to an empty string.
     * <br>- This field is provided to the input method application when
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * is called.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    placeholder?: string;

    /**
     * Whether the text box has full capability to handle keys such as letters, characters, and function keys. The
     * default value is **false**.
     * <br>
     * <br>- The value **true** indicates that this capability is available.
     * <br>- The value **false** indicates that this capability is not available.
     * <br>- This field is provided to the input method application when
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * /
     * [updateAttribute]{@link inputMethod.InputMethodController.updateAttribute(attribute: InputAttribute, callback: AsyncCallback<void>)}
     * is called.
     * <br>
     * <br>**Model restriction:** This parameter can be used only in the stage model.
     *
     * @default false
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    consumeKeyEvents?: boolean;

    /**
     * Ability name set for the text box.
     * <br>
     * <br>- When the text box sets an ability name, the length does not exceed 127 characters (if it exceeds, it is
     * automatically truncated to 127 characters).
     * <br>- When the text box does not set an ability name, it defaults to an empty string.
     * <br>- This field is provided to the input method application when
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * is called.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    abilityName?: string;
  }

  /**
   * Describes the type of the input method function key.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface FunctionKey {
    /**
     * Function type represented by the Enter key of the input method.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    enterKeyType: EnterKeyType;
  }

  /**
   * Cursor information.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface CursorInfo {
    /**
     * Horizontal coordinate of the cursor, in px. This parameter must be an integer, with a minimum value of 0 and a
     * maximum value of the current screen width.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    left: double;

    /**
     * Vertical coordinate of the cursor, in px. This parameter must be an integer, with a minimum value of 0 and a
     * maximum value of the current screen height.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    top: double;

    /**
     * Width of the cursor, in px. This parameter must be an integer, with a minimum value of 0 and a maximum value of
     * the current screen width.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    width: double;

    /**
     * Height of the cursor, in px. This parameter must be an integer, with a minimum value of 0 and a maximum value of
     * the current screen height.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    height: double;

    /**
     * ID of the display where the cursor is located. This parameter must be an integer, with a minimum value of 0 and a
     * default value of 0.
     * <br>
     * <br>**Initial version:** 26.0.0
     * <br>
     * <br>**Model restriction:** This parameter can be used only in the Stage model.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayId?: long;
  }

  /**
   * Describes the configuration of the edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface TextConfig {
    /**
     * Text box attribute.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    inputAttribute: InputAttribute;

    /**
     * Cursor information.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    cursorInfo?: CursorInfo;

    /**
     * Selected text range.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selection?: Range;

    /**
     * ID of the window where the text box is located. This parameter must be an integer.
     * <br>
     * <br>It is recommended that you use [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties} to
     * obtain the window ID attribute.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    windowId?: int;

    /**
     * Whether it is a new text box. The value **true** indicates a new text box, and **false** indicates a non-new text
     * box. The default value is **false**.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    newEditBox?: boolean;

    /**
     * Capitalization mode set for the text box. If no value is set or an invalid value is set, no initial
     * capitalization is performed by default.
     *
     * @default CapitalizeMode.NONE
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    capitalizeMode?: CapitalizeMode;
  }

  /**
   * Enumerates the types of extended edit actions on the edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ExtendAction {
    /**
     * Select all.
     * <br>
     * <br>Usage scenarios: used when the input method requests to select all text in the edit box.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SELECT_ALL = 0,

    /**
     * Cut.
     * <br>
     * <br>Usage scenarios: used when the input method requests to cut the selected text, copying the selected text to the
     * clipboard and deleting the original text.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CUT = 3,

    /**
     * Copy.
     * <br>
     * <br>Usage scenarios: used when the input method requests to copy the selected text, copying the selected text to the
     * clipboard.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    COPY = 4,

    /**
     * Paste.
     * <br>
     * <br>Usage scenarios: used when the input method requests to paste the clipboard content.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PASTE = 5
  }

  /**
   * Window information of the input method soft keyboard (system API extended properties).
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface InputWindowInfo {
    /**
     * Name of the input method window.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Horizontal coordinate of the upper left vertex of the input method window, in px. This parameter must be an
     * integer, with a minimum value of 0 and a maximum value of the current screen width.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    left: int;

    /**
     * Vertical coordinate of the upper left vertex of the input method window, in px. This parameter must be an
     * integer, with a minimum value of 0 and a maximum value of the current screen height.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * Width of the input method window, in px. This parameter must be an integer, with a minimum value of 0 and a
     * maximum value of the current screen width.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * Height of the input method window, in px. This parameter must be an integer, with a minimum value of 0 and a
     * maximum value of the current screen height.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * ID of the screen where the input method soft keyboard window is located.
     * <br>
     * <br>**Model restriction:** This parameter can be used only in the stage model.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    displayId?: long;

    /**
     * ID of the user that displays the input method window.
     * <br>
     * <br>This attribute can be used only by system applications.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    userId?: int;
  }

  /**
   * Callback function on receiving a custom message.
   *
   * @param { string } msgId - the identifier of the message.
   * @param { ArrayBuffer } [msgParam] - the parameter of the custom message.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  type OnMessageCallback = (msgId: string, msgParam?: ArrayBuffer) => void;

  /**
   * Represents a custom communication object.
   * <br>
   * <br> > **NOTE**
   * <br> >
   * <br> > You can register this object to receive custom communication data sent by the input method application. When the
   * <br> > custom communication data is received, the
   * <br> > [onMessage]{@link inputMethod.MessageHandler.onMessage(msgId: string, msgParam?: ArrayBuffer)} callback in this
   * <br> > object is triggered.
   * <br> >
   * <br> > This object is globally unique. After multiple registrations, only the last registered object is valid and
   * <br> > retained, and the [onTerminated]{@link inputMethod.MessageHandler.onTerminated()} callback of the penultimate
   * <br> > registered object is triggered.
   * <br> >
   * <br> > If this object is unregistered, its [onTerminated]{@link inputMethod.MessageHandler.onTerminated()} callback will
   * <br> > be triggered.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  interface MessageHandler {
    /**
     * onMessage(msgId: string, msgParam?: ArrayBuffer): void
     * <br>
     * <br>Receives custom data sent by the input method application.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This callback is triggered when the registered **MessageHandler** receives custom communication data sent by
     * <br> > the input method application.
     * <br> >
     * <br> > The **msgId** parameter is mandatory, and the **msgParam** parameter is optional. If only the custom **msgId**
     * <br> > data is received, confirm it with the data sender.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onMessage: OnMessageCallback;

    /**
     * onTerminated(): void
     * <br>
     * <br>Listens for MessageHandler termination.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > When an application registers a new MessageHandler object, the **OnTerminated** callback of the previous
     * <br> > registered MessageHandler object is triggered.
     * <br> >
     * <br> > When an application unregisters a MessageHandler object, the **OnTerminated** callback of the current
     * <br> > registered MessageHandler object is triggered.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onTerminated: Callback<void>;

    /**
     * This method is called when a custom message is received.
     *
     * @param { string } msgId - the identifier of the message.
     * @param { ArrayBuffer } [msgParam] - the parameter of the custom message.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */	
    onMessage(msgId: string, msgParam?: ArrayBuffer): void;	

    /**
     * This method is called when a new message handler is set.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */
    onTerminated(): void;
  }

  /**
   * Indicates whether the input method is enabled.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum EnabledState {
    /**
     * Not enabled.
     * <br>
     * <br>Usage scenarios: The input method is disabled and cannot be used as the current input method.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    DISABLED = 0,

    /**
     * Basic mode.
     * <br>
     * <br>Usage scenarios: The input method is enabled but in basic mode, providing only basic input capabilities and not
     * supporting advanced features (such as custom communication).
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    BASIC_MODE,

    /**
     * Full experience mode.
     * <br>
     * <br>Usage scenarios: The input method is enabled and in full experience mode, supporting all features (including
     * custom communication and text preview).
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    FULL_EXPERIENCE_MODE
  }

  /**
   * Enumerates the reasons for requesting the keyboard.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum RequestKeyboardReason {
    /**
     * Indicates that no specific reason triggers the keyboard request.
     * <br>
     * <br>Usage scenarios: default value, used when no specific trigger reason is specified.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * Indicates that the keyboard request is triggered by a mouse operation.
     * <br>
     * <br>Usage scenarios: used when the user clicks the edit box with a mouse to trigger the keyboard to pop up.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    MOUSE = 1,
    /**
     * Indicates that the keyboard request is triggered by a touch operation.
     * <br>
     * <br>Usage scenarios: used when the user taps the edit box to trigger the keyboard to pop up.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    TOUCH = 2,
    /**
     * Indicates that the keyboard request is triggered by other reasons.
     * <br>
     * <br>Usage scenarios: used when the trigger reason for the keyboard to pop up is neither mouse nor touch.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    OTHER = 20
  }

  /**
   * Callback triggered when the input method framework needs to display the text preview.
   *
   * @param { string } text - Preview text content.
   * @param { Range } range - Selected range of the text.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 17 dynamic
   * @since 23 static
   */
  export type SetPreviewTextCallback = (text: string, range: Range) => void;

 /**
   * Enumerates the modes of capitalizing the first letter of a text.
   * <br>
   * | Name | Value | Description |
   * | -------- | -- | -------- |
   * | NONE | 0 | No initial capitalization is performed.
   * <br>
   * <br>Usage scenarios: Applicable to input boxes that do not require automatic capitalization, such as password input and
   * verification code input.|
   * | SENTENCES | 1 | The first letter of each sentence is capitalized.
   * <br>
   * <br>Usage scenarios: Applicable to ordinary text input boxes, such as chat and memo, where the first letter is
   * automatically capitalized following punctuation marks such as a period.|
   * | WORDS | 2 | The first letter of each word is capitalized.
   * <br>
   * <br>Usage scenarios: Applicable to scenarios where the first letter of each word needs to be capitalized, such as
   * titles and personal names.|
   * | CHARACTERS | 3 | Every letter is capitalized.
   * <br>
   * <br>Usage scenarios: Applicable to all uppercase input scenarios, such as abbreviation input (for example, the domain
   * name part in a URL).|
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  export enum CapitalizeMode {
    /**
     * Capitalize nothing.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Capitalize the first letter of each sentence.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SENTENCES,

    /**
     * Capitalize the first letter of each word.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    WORDS,

    /**
     * Capitalize each letter.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    CHARACTERS
  }
  
  /**
   * Enumerates the reasons for attachment failure.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  export enum AttachFailureReason {
    /**
     * Indicates a failure caused because the caller is not the application that owns the focused window.
     * <br>
     * <br>Usage scenarios: When **attach** is called while the application window is not focused, this failure reason is
     * returned.
     * <br>
     * <br>Note: Ensure that the application window is focused before calling attach.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    CALLER_NOT_FOCUSED = 0,

    /**
     * Indicates a failure caused by an input method application exception.
     * <br>
     * <br>Usage scenarios: When the input method application process crashes or is not running normally, **attach** returns
     * this failure reason.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    IME_ABNORMAL,

    /**
     * Indicates a failure caused by an input method framework service exception.
     * <br>
     * <br>Usage scenarios: When the input method framework service process is abnormal, **attach** returns this failure
     * reason.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    SERVICE_ABNORMAL
  }
  /**
   * Defines additional options for binding an input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface AttachOptions {
    /**
     * Whether to show the input method keyboard after the input method is bound successfully.
     * <br>
     * <br>- true: Show the keyboard.
     * <br>- false: Do not show the keyboard.
     *
     * @default true
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    showKeyboard?: boolean;
    /**
     * Reason for requesting keyboard input.
     *
     * @default RequestKeyboardReason.NONE
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    requestKeyboardReason?: RequestKeyboardReason;
  }
}

export default inputMethod;