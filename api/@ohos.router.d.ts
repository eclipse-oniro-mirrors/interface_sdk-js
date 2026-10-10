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
 * @file Page Routing
 * @kit ArkUI
 */

import { Callback } from './@ohos.base';
import { AsyncCallback } from './@ohos.base';

/**
 * This module provides page routing capabilities, including supporting page navigation and replacement via URLs or
 * named routes, returning to the previous page or a specified page, managing the page stack, obtaining page states and
 * navigation parameters, and setting page return confirm dialog boxes. It is applicable to scenarios where page
 * navigation and flow are required within an application.
 *
 * For routing management, it is recommended that you use the
 * [Navigation](docroot://ui/arkts-navigation-architecture.md) component instead as your application routing framework.
 *
 * > **NOTE**
 * >
 * > - Page routing APIs can be invoked only after page rendering is complete. Do not call these APIs in **onInit** and
 * > **onReady** when the page is still in the rendering phase.
 * >
 * > - The functionality of this module depends on UI context. This means that the APIs of this module cannot be used
 * > where [the UI context is ambiguous](docroot://ui/arkts-global-interface.md#ambiguous-ui-context). For details, see
 * > [UIContext]{@link @ohos.arkui.UIContext}.
 * >
 * > - When using [pushUrl]{@link @ohos.arkui.UIContext:Router.pushUrl} or
 * > [pushNamedRoute]{@link @ohos.arkui.UIContext:Router.pushNamedRoute} with a callback to return the result, be aware
 * > that the stack information obtained through the callback using APIs such as
 * > [getStackSize]{@link @ohos.arkui.UIContext:Router.getStackSize} represents an intermediate state during the
 * > navigation operation. This temporary state might differ from the final stack information obtained through
 * > [getStackSize]{@link @ohos.arkui.UIContext:Router.getStackSize} after the stack operation is complete.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare namespace router {
  /**
   * Enumerates the routing modes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export enum RouterMode {
    /**
     * Multi-instance mode, which is also the default page navigation mode.
     *
     * The target page is added to the top of the page stack, regardless of whether a page with the same URL already
     * exists in the stack. This mode is suitable for scenarios where multiple identical pages need to be retained, for
     * example, when product detail pages are browsed, each product requires an independent page instance.
     *
     * **NOTE**
     *
     * If no routing mode is specified, the default multi-instance mode is used for page navigation.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Standard,

    /**
     * Singleton mode.
     *
     * If the URL of the target page already exists in the page stack, the page with that URL is moved to the top of the
     * stack.
     *
     * If the URL of the target page has no matching page in the page stack, the default multi-instance mode is used for
     * page navigation. This mode is suitable for scenarios where a unique page instance needs to be maintained, for
     * example, pages such as the home page and login page that should not appear repeatedly in the stack.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Single
  }

  /**
   * Describes the page routing options.
   *
   * > **NOTE**
   * >  > The page routing stack supports a maximum of 32 pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  interface RouterOptions {
    /**
     * URL of the target page, which can be in either of the following formats:
     *
     * - Absolute page path, provided by the **pages** list in the configuration file, for example:
     *
     *   - pages/index/index
     *
     *   - pages/detail/detail
     *
     * - Special value. If the value of **url** is **"/"**, the home page is redirected to. The home page defaults to
     * the first data item in the **src** array of the page navigation configuration.
     *
     * If a nonexistent or invalid URL path is passed in, the navigation fails. For details about the error codes, see
     * the error code description of each API.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Lite
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    url: string;

    /**
     * Data that needs to be passed to the target page during redirection. The received data becomes invalid when the
     * page is switched to another page. After navigation to the target page, use **router.getParams()** to obtain the
     * passed parameters. In addition, in the web-like paradigm, parameters can also be used directly on the page, for
     * example, **this.keyValue** (where **keyValue** is the value of a key in the **params** parameter during
     * navigation). If the target page already has this parameter, its value will be overwritten by the passed parameter
     * value.
     *
     * **NOTE**
     *
     * The **params** parameter can only pass serializable parameters. It cannot pass methods or objects returned by
     * system APIs (for example, the **PixelMap** object defined and returned by media APIs). Passing non-serializable
     * parameters may cause parameter transfer failure or application running exceptions. You are advised to extract the
     * basic-type attributes that need to be passed from the objects returned by system APIs, and construct an object-
     * type object for passing.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Lite
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    params?: Object;

    /**
     * Whether the corresponding page is recoverable.
     *
     * Default value: **true**.
     *
     * **true**: The corresponding page is recoverable.
     *
     * **false**: The corresponding page is not recoverable.
     *
     * **NOTE**
     *
     * If an application is switched to the background and is later closed by the system due to resource constraints or
     * other reasons, a page marked as recoverable can be restored by the system when the application is brought back to
     * the foreground. For more details, see
     * [UIAbility Backup and Restore](docroot://application-models/ability-recover-guideline.md).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Lite
     * @since 14 dynamic
     */
    recoverable?: boolean;
  }

  /**
   * Describes the page routing state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  interface RouterState {
    /**
     * Index of the current page in the stack. The index starts from 1 from the bottom to the top of the stack.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    index: number;

    /**
     * Name of the current page, that is, the file name.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    name: string;

    /**
     * Path of the current page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    path: string;

    /**
     * Parameters carried by the current page.
     *
     * **Note**
     *
     * The **params** parameter can only pass serializable parameters. It cannot pass methods or objects returned by
     * system APIs (for example, the **PixelMap** object defined and returned by media APIs). You are advised to extract
     * the basic-type attributes that need to be passed from the objects returned by system APIs, and construct an
     * object for passing.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    params: Object;
  }

  /**
   * Describes the confirm dialog box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  interface EnableAlertOptions {
    /**
     * Content displayed in the confirm dialog box.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    message: string;
  }

  /**
   * Navigates to a specified page in the application.
   *
   * @param { RouterOptions } options - Page routing parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions)
   */
  function push(options: RouterOptions): void;

  /**
   * Navigates to a specified page in the application.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { RouterOptions } options - Page routing parameters.
   * @param { AsyncCallback<void> } callback - Callback used to return the page routing result.
   *     <br>When the page redirection is successful, the value of **error** is **undefined**. When the page redirection
   *     fails, the value of **error** is the error object returned by the system.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions, callback: AsyncCallback<void>)
   */
  function pushUrl(options: RouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a specified page in the application.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { RouterOptions } options - Page routing parameters.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions)
   */
  function pushUrl(options: RouterOptions): Promise<void>;

  /**
   * Navigates to a specified page in the application.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { RouterOptions } options - Page routing parameters.
   * @param { RouterMode } mode - Routing mode.
   * @param { AsyncCallback<void> } callback - Callback used to return the page navigation result.<br/>When the page
   *     navigation is successful, **error** is **undefined**. When the page navigation fails, **error** is the error
   *     object returned by the system.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>)
   */
  function pushUrl(options: RouterOptions, mode: RouterMode, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a specified page in the application.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { RouterOptions } options - Page routing parameters.
   * @param { RouterMode } mode - Routing mode.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions, mode: router.RouterMode)
   */
  function pushUrl(options: RouterOptions, mode: RouterMode): Promise<void>;

  /**
   * Replaces the current page with a page within the application and destroys the current page. Page transition
   * animation is not supported. If you need to set the animation, you are advised to use the
   * [Navigation](docroot://ui/arkts-navigation-architecture.md) component.
   *
   * @param { RouterOptions } options - Description of the new page.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions)
   */
  function replace(options: RouterOptions): void;

  /**
   * Replaces the current page with another one in the application and destroys the current page. This API cannot be
   * used to configure page transition effects. To configure page transition effects, use the
   * [Navigation](docroot://ui/arkts-navigation-architecture.md) component.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { RouterOptions } options - Description of the new page.
   * @param { AsyncCallback<void> } callback - Callback used to return the page replacement result.
   *     <br>When the page replacement is successful, the value of **error** is **undefined**. When the page replacement
   *     fails, the value of **error** is the error object returned by the system.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @reserved ["liteWearable"] [since 11]
   * @useinstead @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions, callback: AsyncCallback<void>)
   */
  function replaceUrl(options: RouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Replaces the current page with another one in the application and destroys the current page. This API cannot be
   * used to configure page transition effects. To configure page transition effects, use the
   * [Navigation](docroot://ui/arkts-navigation-architecture.md) component.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { RouterOptions } options - Description of the new page.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @reserved ["liteWearable"] [since 11]
   * @useinstead @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions)
   */
  function replaceUrl(options: RouterOptions): Promise<void>;

  /**
   * Replaces the current page with another one in the application and destroys the current page. This API cannot be
   * used to configure page transition effects. To configure page transition effects, use the
   * [Navigation](docroot://ui/arkts-navigation-architecture.md) component.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { RouterOptions } options - Description of the new page.
   * @param { RouterMode } mode - Mode used for replacing the page.
   * @param { AsyncCallback<void> } callback - Callback used to return the page replacement result.
   *     <br>When the page replacement is successful, the value of **error** is **undefined**. When the page replacement
   *     fails, the value of **error** is the error object returned by the system.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @reserved ["liteWearable"] [since 11]
   * @useinstead @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>)
   */
  function replaceUrl(options: RouterOptions, mode: RouterMode, callback: AsyncCallback<void>): void;

  /**
   * Replaces the current page with another one in the application and destroys the current page. This API cannot be
   * used to configure page transition effects. To configure page transition effects, use the
   * [Navigation](docroot://ui/arkts-navigation-architecture.md) component.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { RouterOptions } options - Description of the new page.
   * @param { RouterMode } mode - Mode for page replacement.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Failed to get the delegate. This error code is thrown only in the standard
   *     system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @reserved ["liteWearable"] [since 11]
   * @useinstead @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions, mode: router.RouterMode)
   */
  function replaceUrl(options: RouterOptions, mode: RouterMode): Promise<void>;

  /**
   * Returns to the previous page or a specified page, and removes all pages between the current page and the specified
   * page. If [showAlertBeforeBackPage]{@link router.showAlertBeforeBackPage} has been called to enable the return
   * confirm dialog box, a confirm dialog box will be displayed before the return operation is executed. The return is
   * performed only after the user confirms; if the user cancels, the return is not performed.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { RouterOptions } options - Description of the target page, where **url** indicates the route address of the
   *     target page to return to. If the page with the specified URL does not exist in the page stack, the current back
   *     request will not be responded to. If **url** is not set, the previous page is returned, the page will not be
   *     rebuilt, and the page in the page stack will not be reclaimed, but will be reclaimed after being popped out of
   *     the stack. **back** indicates the back API, and setting **url** to the special value **"/"** does not take
   *     effect. If the page is navigated to using a named route, the **url** passed in must be the name of the named
   *     route.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#back(options?: router.RouterOptions)
   */
  function back(options?: RouterOptions): void;

  /**
   * Returns to a specified page, and removes all pages between the current page and the specified page. If
   * [showAlertBeforeBackPage]{@link router.showAlertBeforeBackPage} has been called to enable the return confirm dialog
   * box, a confirm dialog box will be displayed before the return operation is executed. The return is performed only
   * after the user confirms; if the user cancels, the return is not performed.
   *
   * > **NOTE**
   * >
   * > - Since API version 12, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { number } index - Index of the target page to return to. The value range is [1, Page stack size], and the
   *     maximum page stack size is 32. The index starts from 1 from the bottom to the top of the stack. No response is
   *     returned if the index does not exist or exceeds the valid range of the page stack.
   * @param { Object } [params] - Parameters carried when returning to the page.<br/>**NOTE**<br/>The **params**
   *     parameter can only pass serializable parameters. It cannot pass methods or objects returned by system APIs (for
   *     example, the **PixelMap** object defined and returned by media APIs). You are advised to extract the basic-type
   *     attributes that need to be passed from the objects returned by system APIs, and construct an object-type object
   *     for passing.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#back(index: number, params?: Object)
   */
  function back(index: number, params?: Object): void;

  /**
   * Clears all historical pages in the stack and retains only the current page at the top of the stack.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#clear
   */
  function clear(): void;

  /**
   * Obtains the number of pages in the current stack.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @returns { string } Number of pages in the stack. The maximum value is **32**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#getLength
   */
  function getLength(): string;

  /**
   * Obtains state information about the page at the top of the navigation stack.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @returns { RouterState } State of the page at the top of the stack, including the page index, name, path, and
   *     parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#getState
   */
  function getState(): RouterState;

  /**
   * Obtains the status information about a page by its index.
   *
   * > **NOTE**
   * >
   * > - Since API version 12, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { number } index - Index of the page to obtain. The value range is [1, Page stack size], and the maximum
   *     page stack size is 32. The index starts from 1 from the bottom to the top of the stack. If the index does not
   *     exist, **undefined** is returned.
   * @returns { RouterState | undefined } State of the page at the corresponding index, including the page index, name,
   *     path, and parameters. **undefined** is returned if the index does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#getStateByIndex
   */
  function getStateByIndex(index: number): RouterState | undefined;

  /**
   * Obtains the status information about a page by its URL.
   *
   * > **NOTE**
   * >
   * > - Since API version 12, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { string } url - URL of the page whose information is to be obtained. The URL is an absolute page path
   *     provided in the **pages** list of the configuration file, for example, **pages/index/index**.
   * @returns { Array<RouterState> } Array of page state information matching the specified URL. Each element contains
   *     the page index, name, path, and parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#getStateByUrl
   */
  function getStateByUrl(url: string): Array<RouterState>;

  /**
   * Enables the display of a confirm dialog box before returning to the previous page. After this API is called, a
   * confirm dialog box will be displayed when [back]{@link router.back} is executed to return to a page. The page
   * return operation is performed only after the user confirms; if the user cancels, the return is not performed. This
   * is applicable to scenarios where you need to prevent data loss caused by accidental return operations, for example,
   * when the user is filling in a form, editing a document, or making a payment, a confirm dialog box is displayed to
   * avoid accidental exit.
   *
   * @param { EnableAlertOptions } options - Description of the dialog box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.arkui.UIContext:Router#showAlertBeforeBackPage
   */
  function enableAlertBeforeBackPage(options: EnableAlertOptions): void;

  /**
   * Enables the display of a confirm dialog box before returning to the previous page. After this API is called, a
   * confirm dialog box will be displayed when [back]{@link router.back} is executed to return to a page. The page
   * return operation is performed only after the user confirms. This is applicable to scenarios where you need to
   * prevent data loss caused by accidental return operations, for example, when the user is filling in a form, editing
   * a document, or making a payment, a confirm dialog box is displayed to avoid accidental exit.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { EnableAlertOptions } options - Description of the dialog box.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#showAlertBeforeBackPage
   */
  function showAlertBeforeBackPage(options: EnableAlertOptions): void;

  /**
   * Disables the display of a confirm dialog box before returning to the previous page. After this API is called, the
   * return confirm dialog box enabled by [enableAlertBeforeBackPage]{@link router.enableAlertBeforeBackPage} will be
   * closed, and the [back]{@link router.back} operation will no longer display a confirm dialog box but will directly
   * perform the page return.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.arkui.UIContext:Router#hideAlertBeforeBackPage
   */
  function disableAlertBeforeBackPage(): void;

  /**
   * Disables the display of a confirm dialog box before returning to the previous page. After this API is called, the
   * return confirm dialog box enabled by [showAlertBeforeBackPage]{@link router.showAlertBeforeBackPage} will be
   * closed, and the [back]{@link router.back} operation will no longer display a confirm dialog box but will directly
   * perform the page return.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#hideAlertBeforeBackPage
   */
  function hideAlertBeforeBackPage(): void;

  /**
   * Obtains the parameters passed from the page that initiates redirection to the current page.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   * >
   * > **getParams** obtains only the parameters of the current page and does not clear the parameters associated with
   * > the page.
   *
   * @returns { Object } Parameters passed from the page that initiates redirection to the current page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#getParams
   */
  function getParams(): Object;

  /**
   * Describes the named route options.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface NamedRouterOptions {
    /**
     * Name of the target named route page, which must be a registered named route name.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    name: string;

    /**
     * Data that needs to be passed to the target page during redirection. The received data becomes invalid when the
     * page is switched to another page. After navigating to the target page, use **router.getParams()** to obtain the
     * passed parameters. In addition, in the web-like paradigm, parameters can also be used directly on the page, for
     * example, **this.keyValue** (where **keyValue** is the value of a key in the **params** parameter during
     * navigation). If the target page already has this parameter, its value will be overwritten by the passed parameter
     * value.
     *
     * **NOTE**
     *
     * The **params** parameter can only pass serializable parameters. It cannot pass methods or objects returned by
     * system APIs (for example, the **PixelMap** object defined and returned by media APIs). Passing non-serializable
     * parameters may cause parameter transfer failure or application running exceptions. You are advised to extract the
     * basic-type attributes that need to be passed from objects returned by system APIs, and construct an object-type
     * object for passing.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    params?: Object;

    /**
     * Whether the corresponding page is recoverable.
     *
     * Default value: **true**.
     *
     * **true**: The corresponding page is recoverable.
     *
     * **false**: The corresponding page is not recoverable.
     *
     * **NOTE**
     *
     * If an application is switched to the background and is later closed by the system due to resource constraints or
     * other reasons, a page marked as recoverable can be restored by the system when the application is brought back to
     * the foreground. For more details, see
     * [UIAbility Backup and Restore](docroot://application-models/ability-recover-guideline.md).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Lite
     * @since 14 dynamic
     */
    recoverable?: boolean;
  }

  /**
   * Navigates to a page using the named route.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { NamedRouterOptions } options - Page routing parameters.
   * @param { AsyncCallback<void> } callback - Callback used to return the page routing result.
   *     <br>When the page redirection is successful, the value of **error** is **undefined**. When the page redirection
   *     fails, the value of **error** is the error object returned by the system.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>)
   */
  function pushNamedRoute(options: NamedRouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a page using the named route.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { NamedRouterOptions } options - Page routing parameters.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushNamedRoute(options: router.NamedRouterOptions)
   */
  function pushNamedRoute(options: NamedRouterOptions): Promise<void>;

  /**
   * Navigates to a page using the named route.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { NamedRouterOptions } options - Page routing parameters.
   * @param { RouterMode } mode - Routing mode.
   * @param { AsyncCallback<void> } callback - Callback used to return the page routing result.
   *     <br>When the page redirection is successful, the value of **error** is **undefined**. When the page redirection
   *     fails, the value of **error** is the error object returned by the system.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>)
   */
  function pushNamedRoute(options: NamedRouterOptions, mode: RouterMode, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a page using the named route.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { NamedRouterOptions } options - Page routing parameters.
   * @param { RouterMode } mode - Routing mode.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode)
   */
  function pushNamedRoute(options: NamedRouterOptions, mode: RouterMode): Promise<void>;

  /**
   * Replaces the current page with the specified named route page and destroys the current page. Page transition
   * animation is not supported. If you need to set the animation, you are advised to use the
   * [Navigation](docroot://ui/arkts-navigation-architecture.md) component.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { NamedRouterOptions } options - Description of the new page.
   * @param { AsyncCallback<void> } callback - Callback used to return the page replacement result.
   *     <br>When the page replacement is successful, the value of **error** is **undefined**. When the page replacement
   *     fails, the value of **error** is the error object returned by the system.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#replaceNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>)
   */
  function replaceNamedRoute(options: NamedRouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Replaces the current page with the specified named route page and destroys the current page. Page transition
   * animation is not supported. If you need to set the animation, you are advised to use the
   * [Navigation](docroot://ui/arkts-navigation-architecture.md) component.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { NamedRouterOptions } options - Description of the new page.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#replaceNamedRoute(options: router.NamedRouterOptions)
   */
  function replaceNamedRoute(options: NamedRouterOptions): Promise<void>;

  /**
   * Replaces the current page with the specified named route page and destroys the current page. Page transition
   * animation is not supported. If you need to set the animation, you are advised to use the
   * [Navigation](docroot://ui/arkts-navigation-architecture.md) component.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { NamedRouterOptions } options - Description of the new page.
   * @param { RouterMode } mode - Mode used for replacing the page.
   * @param { AsyncCallback<void> } callback - Callback used to return the page replacement result.
   *     <br>When the page replacement is successful, the value of **error** is **undefined**. When the page replacement
   *     fails, the value of **error** is the error object returned by the system.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>)
   */
  function replaceNamedRoute(options: NamedRouterOptions, mode: RouterMode, callback: AsyncCallback<void>): void;

  /**
   * Replaces the current page with the specified named route page and destroys the current page. Page transition
   * animation is not supported. If you need to set the animation, you are advised to use the
   * [Navigation](docroot://ui/arkts-navigation-architecture.md) component.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [Router]{@link @ohos.arkui.UIContext} object associated
   * > with the current UI context.
   *
   * @param { NamedRouterOptions } options - Description of the new page.
   * @param { RouterMode } mode - Mode for page replacement.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Failed to get the delegate. This error code is thrown only in the standard
   *     system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode)
   */
  function replaceNamedRoute(options: NamedRouterOptions, mode: RouterMode): Promise<void>;
}

export default router;