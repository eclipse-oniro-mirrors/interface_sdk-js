/**
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 */

import base from '@ohos.base';

/**
 * Enumerates the types of pages in **MultiNavigation**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export declare enum SplitPolicy {
  /**
   * Home page type. Displayed in full-screen mode. Used as the navigation start page of an app.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  HOME_PAGE = 0,

  /**
   * Detail page type. Displayed in split-screen mode. Used for detail pages, forming a left-right split-screen layout
   * with the home page on large-screen devices.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  DETAIL_PAGE = 1,

  /**
   * Full-screen page type. Displayed in full-screen mode. Used for pages that require full-screen display, such as
   * video playback and image browsing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  FULL_PAGE = 2
}

/**
 * The **MultiNavigation** component is a component that supports multi-column navigation, providing multi-layer page
 * stack management capabilities. It uses **MultiNavPathStack** to uniformly manage the navigation stacks of different
 * page types such as the home page, detail page, and full-screen page. It supports intelligent routing strategies such
 * as left-to-right stack clearing, making it suitable for complex navigation scenarios on large-screen devices such as
 * tablets and foldables, optimizing the page transition experience and improving user operation efficiency.
 *
 * > **NOTE**
 * >
 * > - Due to the multi-level page stack structure of **MultiNavigation** (the home page, detail page, and full-screen
 * > page each maintain their own sub-stacks, which are managed by **MultiNavPathStack**), calling APIs that are
 * > explicitly stated as unsupported in this document or APIs not listed in the supported API list (such as
 * > [getParent]{@link NavPathStack#getParent}, [setInterception]{@link NavPathStack#setInterception},
 * > [pushDestination]{@link NavPathStack#pushDestination(info: NavPathInfo, animated?: boolean)}, etc.) may cause
 * > unexpected issues.
 * >
 * > - In deep nesting scenarios, **MultiNavigation** may experience abnormal routing animation effects.
 *
 * @struct { MultiNavigation }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
@Component
export declare struct MultiNavigation {
  /**
   * Route stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  @State
  multiStack: MultiNavPathStack;

  /**
   * Routing rule for loading the target page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  @BuilderParam
  navDestination: NavDestinationBuildFunction;

  /**
   * Callback invoked when the **MultiNavigation** mode changes. Pass in this callback when specific business logic (
   * such as adjusting the page layout or updating the UI state) needs to be executed upon a navigation mode change. If
   * not passed in, the navigation mode change event is not listened for, and no callback is triggered upon a navigation
   * mode change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onNavigationModeChange?: OnNavigationModeChangeCallback;

  /**
   * Callback invoked when the home page is at the top of the stack. If not passed in, the home page top-of-stack state
   * change is not listened for.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onHomeShowOnTop?: OnHomeShowOnTopCallback;
}

/**
 * The route stack of **MultiNavigation** can only be created by the user and cannot be obtained through callbacks. Do
 * not use events or APIs such as [onReady]{@link NavDestinationAttribute#onReady} of
 * [NavDestination]{@link ./@internal/component/ets/nav_destination} to obtain **NavPathStack** and perform stack
 * operations, as this may cause unpredictable issues.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export declare class MultiNavPathStack extends NavPathStack {
  /**
   * Creates a **MultiNavPathStack** route stack instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  constructor();

  /**
   * Pushes the specified navigation destination page to the navigation stack.
   *
   * @param { NavPathInfo } info - Information about the navigation destination page.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @param { SplitPolicy } [policy] - Policy for the current page pushed to the stack.<br/>Default value:
   *     **DETAIL_PAGE**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pushPath(info: NavPathInfo, animated?: boolean, policy?: SplitPolicy): void;

  /**
   * Pushes the specified navigation destination page to the navigation stack, with stack operation settings through
   * **NavigationOptions**.
   *
   * @param { NavPathInfo } info - Information about the navigation destination page.
   * @param { NavigationOptions } [options] - Page stack operation options. Only the **animated** field is supported;
   *     other fields are ignored. The default animation configuration is used when this parameter is omitted.
   * @param { SplitPolicy } [policy] - Policy for the current page pushed to the stack.<br/>Default value:
   *     **DETAIL_PAGE**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pushPath(info: NavPathInfo, options?: NavigationOptions, policy?: SplitPolicy): void;

  /**
   * Pushes the navigation destination page specified by **name** to the navigation stack, passing the data specified by
   * **param**.
   *
   * @param { string } name - **NavDestination** page name, which must be consistent with the page name registered in
   *     **NavDestinationBuildFunction**.
   * @param { Object } param - Detailed parameters of the **NavDestination** page, used to pass custom data to the
   *     target page. For details about the field specifications, see the **NavDestination** documentation.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @param { SplitPolicy } [policy] - Policy for the current page pushed to the stack.<br/>Default value:
   *     **DETAIL_PAGE**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pushPathByName(name: string, param: Object, animated?: boolean, policy?: SplitPolicy): void;

  /**
   * Pushes the navigation destination page specified by **name** to the navigation stack, passing the data specified by
   * **param**. This API uses the **onPop** callback to handle the result returned when the page is popped out of the
   * stack.
   *
   * @param { string } name - Name of the **NavDestination** page. It must be consistent with the page name registered
   *     in **NavDestinationBuildFunction**.
   * @param { Object } param - Detailed parameters of the **NavDestination** page, used to pass custom data to the
   *     target page. For details about the field specifications, see the **NavDestination** documentation.
   * @param { base.Callback<PopInfo> } [onPop] - Callback invoked when the page is popped from the stack to process the
   *     return result. If this parameter is omitted, the callback is not triggered. Data can be passed to this callback
   *     through the result parameter of the **pop**, **popToName**, and **popToIndex** methods.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @param { SplitPolicy } [policy] - Policy for the current page pushed to the stack.<br/>Default value:
   *     **DETAIL_PAGE**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pushPathByName(
    name: string, param: Object, onPop?: base.Callback<PopInfo>, animated?: boolean, policy?: SplitPolicy): void;

  /**
   * Replaces the current top page on the stack with the specified navigation destination page. The new page inherits
   * the split policy of the original top page.
   *
   * @param { NavPathInfo } info - Information about the navigation destination page.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  replacePath(info: NavPathInfo, animated?: boolean): void;

  /**
   * Replaces the current top page on the stack with the specified navigation destination page, with stack operation
   * settings through **NavigationOptions**. The new page inherits the split policy of the original top page.
   *
   * @param { NavPathInfo } info - Information about the navigation destination page.
   * @param { NavigationOptions } [options] - Page stack operation options. Only the **animated** field is supported.
   *     Other fields are ignored. If this parameter is omitted, the default animation configuration is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  replacePath(info: NavPathInfo, options?: NavigationOptions): void;

  /**
   * Replaces the current top page on the stack with the navigation destination page specified by **name**. The new page
   * inherits the split policy of the original top page.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { Object } param - **NavDestination** page detailed parameters, used to pass custom data to the target page.
   *     For specific field specifications, see the **NavDestination** documentation.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  replacePathByName(name: string, param: Object, animated?: boolean): void;

  /**
   * Removes the navigation destination pages specified by **indexes** from the navigation stack.
   *
   * @param { Array<number> } indexes - Array of index values of the **NavDestination** pages to be deleted.<br/>Value
   *     range of the number type: [0, +∞). The operation does not take effect if the value is out of range.
   * @returns { number } Number of the navigation destination pages removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  removeByIndexes(indexes: Array<number>): number;

  /**
   * Removes the navigation destination page specified by **name** from the navigation stack.
   *
   * @param { string } name - Name of the **NavDestination** page to be deleted.
   * @returns { number } Number of the navigation destination pages removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  removeByName(name: string): number;

  /**
   * Pops the top element out of the navigation stack.
   *
   * > **NOTE**
   * >
   * > If [keepBottomPage]{@link MultiNavPathStack#keepBottomPage} is called with **true**, the bottom page of the
   * > navigation stack is retained.
   *
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @returns { NavPathInfo | undefined } Information about the **NavDestination** page at the top of the stack. If the
   *     stack is empty, **undefined** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pop(animated?: boolean): NavPathInfo | undefined;

  /**
   * Pops the top element out of the navigation stack and invokes the **onPop** callback to pass the page processing
   * result.
   *
   * > **NOTE**
   * >
   * > If [keepBottomPage]{@link MultiNavPathStack#keepBottomPage} is called with **true**, the bottom page of the
   * > navigation stack is retained.
   *
   * @param { Object } [result] - Custom page processing result. The specific content is defined by the developer. It is
   *     recommended to include a clear business identifier and processing result data. This result will be passed to
   *     the **onPop** callback function set when pushing to the stack. If omitted, no result data is passed.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @returns { NavPathInfo | undefined } Information about the **NavDestination** page at the top of the stack. If the
   *     stack is empty, **undefined** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pop(result?: Object, animated?: boolean): NavPathInfo | undefined;

  /**
   * Pops pages until the first navigation destination page that matches **name** from the bottom of the navigation
   * stack is at the top of the stack.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @returns { number } Returns the index of the first navigation destination page that matches **name** from the
   *     bottom of the navigation stack; returns **-1** if no such a page is found.
   *     <br>Value range: [-1, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  popToName(name: string, animated?: boolean): number;

  /**
   * Pops pages until the first navigation destination page that matches **name** from the bottom of the navigation
   * stack is at the top of the stack. This API uses the **onPop** callback to pass in the page processing result.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { Object } result - Custom page processing result. The specific content is defined by the developer. It is
   *     recommended to include a clear business identifier and processing result data. This result will be passed to
   *     the **onPop** callback function set when the page is pushed onto the stack.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @returns { number } Returns the index of the first navigation destination page that matches **name** from the
   *     bottom of the navigation stack; returns **-1** if no such a page is found.
   *     <br>Value range: [-1, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  popToName(name: string, result: Object, animated?: boolean): number;

  /**
   * Pops the route stack back to the **NavDestination** page specified by **index**. If **index** is invalid (out of
   * range), no pop operation is performed.
   *
   * @param { number } index - Position index of the **NavDestination** page.<br/>Value range:
   *     [0, +∞). The operation does not take effect when the value is out of range.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  popToIndex(index: number, animated?: boolean): void;

  /**
   * Pops the route stack back to the **NavDestination** page specified by **index**, and triggers the **onPop**
   * callback to return the page processing result. If **index** is invalid (out of range), no pop operation is
   * performed.
   *
   * @param { number } index - Index of the navigation destination page.
   *     <br>Value range: [0, +∞).
   * @param { Object } result - Custom page processing result. The specific content is defined by the developer. It is
   *     recommended to include an explicit business identifier and processing result data.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  popToIndex(index: number, result: Object, animated?: boolean): void;

  /**
   * Moves the first navigation destination page that matches **name** from the bottom of the navigation stack to the
   * top of the stack.
   *
   * > **NOTE**
   * >
   * > Depending on the first page found with the specified name, **MultiNavigation** performs different processing:
   * >
   * > 1) If the found page is the topmost home page or full-screen page, no processing is performed.
   * >
   * > 2) If the found page is a detail page corresponding to the topmost home page, the corresponding detail page is
   * > moved to the top of the stack.
   * >
   * > 3) If the found page is a non-topmost home page, the home page and all its corresponding detail pages are moved
   * > to the top of the stack, with the relative stack relationship of the detail pages unchanged.
   * >
   * > 4) If the found page is a non-topmost detail page, the home page and all its corresponding detail pages are moved
   * > to the top of the stack, and the target detail page is moved to the top of all its corresponding detail pages.
   * >
   * > 5) If the found page is a non-topmost full-screen page, the full-screen page is moved to the top of the stack.
   * >
   * > **Scenario summary:** When the page is already at the top of the stack, no operation is performed. When a detail
   * > page is at the top of the stack, only that detail page is moved. When a non-topmost home page or detail page is
   * > moved, its associated detail page group is also moved. When a non-topmost full-screen page is moved, only itself
   * > is moved.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @returns { number } Returns the index of the first navigation destination page that matches **name** from the
   *     bottom of the navigation stack; returns **-1** if no such a page is found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  moveToTop(name: string, animated?: boolean): number;

  /**
   * Moves the navigation destination page specified by **index** to the top of the navigation stack.
   *
   * > **NOTE**
   * >
   * > Depending on the page found at the specified index, **MultiNavigation** performs different processing:
   * >
   * > 1) If the specified index points to the topmost home page or full-screen page, no processing is performed.
   * >
   * > 2) If the specified index points to a detail page corresponding to the topmost home page, the corresponding
   * > detail page is moved to the top of the stack.
   * >
   * > 3) If the specified index points to a non-topmost home page, the home page and all its corresponding detail pages
   * > are moved to the top of the stack, with the relative stack relationship of the detail pages unchanged.
   * >
   * > 4) If the specified index points to a non-topmost detail page, the home page and all its corresponding detail
   * > pages are moved to the top of the stack, and the target detail page is moved to the top of all its corresponding
   * > detail pages.
   * >
   * > 5) If the specified index points to a non-topmost full-screen page, the full-screen page is moved to the top of
   * > the stack.
   *
   * @param { number } index - Position index of the **NavDestination** page.<br/>Value range:
   *     [0, +∞). The operation does not take effect if the value is out of range.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  moveIndexToTop(index: number, animated?: boolean): void;

  /**
   * Clears the navigation stack.
   *
   * > **NOTE**
   * >
   * > If [keepBottomPage]{@link MultiNavPathStack#keepBottomPage} is called with **true**, the bottom page of the
   * > navigation stack is retained.
   *
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  clear(animated?: boolean): void;

  /**
   * Obtains the names of all navigation destination pages in the navigation stack.
   *
   * @returns { Array<string> } Returns the names of all **NavDestination** pages in the stack. The array elements are
   *     arranged from the bottom to the top of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getAllPathName(): Array<string>;

  /**
   * Obtains the parameter information of the navigation destination page specified by **index**.
   *
   * @param { number } index - Index of the navigation destination page.
   *     <br>Value range: [0, +∞).
   * @returns { unknown | undefined } **Object**: Returns the parameter information of the corresponding
   *     **NavDestination** page. The specific fields are determined by the **param** passed in **pushPath** or
   *     **pushPathByName**.<br/>**undefined**: Returns **undefined** when the passed **index** is invalid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getParamByIndex(index: number): Object | undefined;

  /**
   * Obtains the parameter information of all the navigation destination pages that match **name**.
   *
   * @param { string } name - Name of the navigation destination page.
   * @returns { Array<Object> } Parameter information of all the matching navigation destination pages.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getParamByName(name: string): Array<Object>;

  /**
   * Obtains the indexes of all the navigation destination pages that match **name**.
   *
   * @param { string } name - Name of the navigation destination page.
   * @returns { Array<number> } Indexes of all the matching navigation destination pages.
   *     <br>Value range of the number type: [0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getIndexByName(name: string): Array<number>;

  /**
   * Obtains the stack size.
   *
   * @returns { number } Stack size.
   *     <br>Value range: [0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  size(): number;

  /**
   * Disables (**true**) or enables (**false**) all transition animations in the current **MultiNavigation**. This is
   * suitable for scenarios where page switching performance needs to be improved or custom transition effects need to
   * be implemented.
   *
   * > **NOTE**
   * >
   * > This configuration affects the animation effects of the following stack operation methods: **pushPath**,
   * > **pushPathByName**, **replacePath**, **replacePathByName**, **pop**, **popToName**, **popToIndex**,
   * > **moveToTop**, **moveIndexToTop**, and **clear**. The configuration takes effect immediately and remains
   * > effective throughout the lifecycle of **MultiNavigation**. It is recommended to call **disableAnimation(true)**
   * > to disable animations before batch stack operations to improve performance, and call **disableAnimation(false)**
   * > to restore animations after the operations are complete.
   *
   * @param { boolean } disable - Whether to disable the transition animation.
   *     <br>Default value: **false**.
   *     <br>**true**:The transition animation is disabled.
   *     <br>**false**: The transition animation is not disabled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  disableAnimation(disable: boolean): void;

  /**
   * Switches the display mode of the detail page at the top of the current stack. This is suitable for scenarios such
   * as video playback and image browsing that require full-screen display.
   *
   * @param { boolean } [isFullScreen] - Whether to switch to full-screen mode.<br/>Default value: false<br/>**true**:
   *     full-screen mode; **false**: split-screen mode.
   * @returns { boolean } Whether the switching is successful.
   *     <br>**true**: The switching is successful.
   *     <br>**false**: The switching failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  switchFullScreenState(isFullScreen?: boolean): boolean;

  /**
   * Sets the draggable range for the home page width. If not set, the width defaults to 50% and is not draggable.
   *
   * @param { number } minPercent - Minimum main page width percentage.<br/>Value range: [0, 100], and must be less than
   *     or equal to **maxPercent**.
   * @param { number } maxPercent - Maximum main page width percentage.<br/>Value range: [0, 100], and must be greater
   *     than or equal to **minPercent**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  setHomeWidthRange(minPercent: number, maxPercent: number): void;

  /**
   * Sets whether to retain the bottom page when the **pop** or **clear** APIs is called.
   *
   * > **NOTE**
   * >
   * > **MultiNavigation** also pushes the home page onto the stack as a **NavDestination** page, so calling the **pop**
   * > or **clear** API will also pop the bottom page of the stack.
   * >
   * > When an app calls this API and sets it to **true**, **MultiNavigation** retains the bottom page of the stack when
   * > the **pop** and **clear** APIs are called.
   *
   * @param { boolean } keepBottom - Whether to retain the bottom page.
   *     <br>Default value: **false**.
   *     <br>**true**: The bottom page is retained.
   *     <br>**false**: The bottom page is not retained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  keepBottomPage(keepBottom: boolean): void;

  /**
   * Sets a placeholder page.
   *
   * > **NOTE**
   * >
   * > The placeholder page is a special page type. After being set by the app, it forms a left-right multi-column
   * > layout with the home page by default on large-screen devices that support multi-column display, that is, the home
   * > page on the left and the placeholder page on the right.
   * >
   * > When the app drawable area is less than 600 vp, a foldable switches from the expanded state to the folded state,
   * > or a tablet switches from landscape to portrait orientation, the placeholder page is automatically popped from
   * > the stack, and only the home page is displayed.
   * >
   * > When the app drawable area is greater than or equal to 600 vp, a foldable switches from the folded state to the
   * > expanded state, or a tablet switches from portrait to landscape orientation, the placeholder page is
   * > automatically added to form a multi-column layout.
   *
   * @param { NavPathInfo } info - Page information of the placeholder page, used to set the placeholder page. On a
   *     large-screen device, the placeholder page and the main page form a left-right column layout.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  setPlaceholderPage(info: NavPathInfo): void;
}

/**
 * Represents the function used by the **MultiNavigation** component to load navigation destination pages.
 *
 * @param { string } name - ID of the navigation destination page.
 * @param { object } [param] - Parameter passed when creating a page through route navigation. Default: no parameter is
 *     passed when not provided.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
declare type NavDestinationBuildFunction = (name: string, param?: object) => void;

/**
 * Represents the callback invoked when the mode of the **MultiNavigation** component changes.
 *
 * @param { NavigationMode } mode - Navigation mode when the callback is invoked.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
declare type OnNavigationModeChangeCallback = (mode: NavigationMode) => void;

/**
 * Represents the callback invoked when the home page is displayed at the top of the stack.
 *
 * @param { string } name - ID of the page displayed at the top of the stack.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
declare type OnHomeShowOnTopCallback = (name: string) => void;