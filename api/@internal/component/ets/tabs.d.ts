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
 * @file
 * @kit ArkUI
 */

/**
 * Defines the system material module. Use the **ImmersiveMaterial** type in it when setting the system material
 * attribute of the tab bar floating style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type UIMaterial = import('../api/@ohos.arkui.uiMaterial').uiMaterial;

/**
 * Enumerates the layout modes of the tab bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum BarMode {
  /**
   * Each tab bar uses its actual layout width. When the total length exceeds the
   * [barWidth]{@link TabsAttribute#barWidth} of a horizontal **Tabs** or the
   * [barHeight]{@link TabsAttribute#barHeight(value: Length)} of a vertical **Tabs**, the tab bar can be scrolled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Scrollable = 0,

  /**
   * All **TabBars** evenly share the **barWidth** (or the **barHeight** for a vertical **Tabs**).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Fixed = 1
}

/**
 * Enumerates the animation forms for switching **TabContent** when a
 * [TabBar]{@link TabContentAttribute#tabBar(options: string | Resource | CustomBuilder | TabBarOptions)} tab is tapped.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum AnimationMode {
  /**
   * Loads the content of the target page first, and then starts the switching animation. This is suitable for scenarios
   * where the content must be loaded before the animation is displayed, avoiding blank content during the animation. It
   * is recommended for scenarios where content loads quickly and a smooth transition is required.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CONTENT_FIRST = 0,

  /**
   * Starts the switching animation first, and then loads the content of the target page. For this to take effect, both
   * the height and width of **Tabs** must not be set to **auto**. This is suitable for scenarios where the user
   * operation must be responded to immediately and the animation starts quickly. It is recommended for scenarios where
   * content loads slowly but quick visual feedback is desired.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ACTION_FIRST = 1,

  /**
   * Disables the default animation. This enum value does not take effect when the
   * [changeIndex]{@link TabsController#changeIndex} API of **TabsController** is called to switch **TabContent**.
   *
   * You can set [animationDuration]{@link TabsAttribute#animationDuration} to **0** to switch without animation when
   * calling the **changeIndex** API of **TabsController**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NO_ANIMATION = 2,

  /**
   * Loads the content of the target page first, then jumps to the vicinity of the target page without animation, and
   * finally jumps to the target page with animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  CONTENT_FIRST_WITH_JUMP = 3,

  /**
   * Jumps to the vicinity of the target page without animation first, then jumps to the target page with animation, and
   * finally loads the content of the target page. For this to take effect, both the **height** and **width** of
   * **Tabs** must not be set to **auto**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  ACTION_FIRST_WITH_JUMP = 4
}

/**
 * Enumerates the positions of the **Tabs** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum BarPosition {
  /**
   * When **vertical** is set to **true**, the tab is on the left of the container; when **vertical** is set to
   * **false**, the tab is at the top of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start,

  /**
   * When **vertical** is set to **true**, the tab is on the right of the container; when **vertical** is set to
   * **false**, the tab is at the bottom of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End
}

/**
 * Enumerates the tab layout modes when the tab bar is not scrolled in
 * [Scrollable]{@link TabsAttribute#barMode(value: BarMode, options?: ScrollableBarModeOptions)} mode.
 *
 * | Name         | Value | Description                                     |
 * | ---------- | -- | ---------------------------------------- |
 * | ALWAYS_CENTER | 0 | When the tab content exceeds the tab bar width, the tab bar is scrollable.
 *
 * When the tab content does not exceed the tab bar width, the tab bar is not scrollable and the tabs are compactly
 * centered.|
 * | ALWAYS_AVERAGE_SPLIT | 1 | When the tab content exceeds the tab bar width, the tab bar is scrollable.
 *
 * When the tab content does not exceed the tab bar width, the tab bar is not scrollable and all tabs evenly share the
 * tab bar width.|
 * | SPACE_BETWEEN_OR_CENTER      | 2 | When the tab content exceeds the tab bar width, the tab bar is scrollable.
 *
 * When the tab content does not exceed the tab bar width but exceeds half of the tab bar width, the tab bar is not
 * scrollable and the tabs are compactly centered.
 *
 * When the tab content does not exceed half of the tab bar width, the tab bar is not scrollable, the tabs are centered,
 * the spacing between tabs is equal, and the total width of all tabs occupies half of the tab bar width.|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum LayoutStyle {
  /**
   * If the tab content exceeds the tab bar width, the tabs are scrollable.
   *
   * If not, the tabs are compactly centered on the tab bar and not scrollable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ALWAYS_CENTER = 0,
  /**
   * If the tab content exceeds the tab bar width, the tabs are scrollable.
   * If not, the tabs are not scrollable, and the width of the tab bar is evenly distributed among all tabs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ALWAYS_AVERAGE_SPLIT = 1,
  /**
   *  If the tab content exceeds the tab bar width, the tabs are scrollable.
   *
   * If the tab content exceeds half the width of the tab bar but is still within the tab bar width, the tabs are
   * compactly centered and not scrollable.
   *
   * If the tab content does not exceed half the width of the tab bar, the tabs are centered within half the width of the
   * tab bar with even spacing between them and are not scrollable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SPACE_BETWEEN_OR_CENTER = 2
}

/**
 * Enumerates the caching modes for child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare enum TabsCacheMode {

  /**
   * Cache the currently displayed child component and the child components on both sides.
   *     For example, if **cachedMaxCount** is set to **n**, up to 2n+1 child components will be cached.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  CACHE_BOTH_SIDE = 0,

  /**
   * Cache the currently displayed child component and the most recently switched child component.
   *    For example, if **cachedMaxCount** is set to **n**, up to n+1 child components will be cached.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  CACHE_LATEST_SWITCHED = 1
}

/**
 * Enumerates the display styles of the tab side bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.2.0 dynamic
 */
declare enum TabsSidebarDisplayStyle {
  /**
   * The embedded style. The tab bar is embedded in the content area of the **Tabs** container,
   * taking up space within it.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  EMBED = 0,

  /**
   * The displaced style. The tab bar is displayed as a sidebar,
   * pushing the content area of the **Tabs** container aside.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  DISPLACE = 1
}

/**
 * Enumerates the nested scrolling modes of the **Tabs** component and its parent container.
 *
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
declare enum TabsNestedScrollMode {

  /**
   * The scrolling is contained within the **Tabs** component, and no scroll chaining occurs, that is,
   *     the parent component does not scroll when the component scrolling reaches the boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  SELF_ONLY = 0,

  /**
   * The **Tabs** component scrolls first, and when it hits the boundary, the parent component scrolls.
   *     When the parent container hits the boundary, its edge effect is displayed. If no edge effect is specified
   *     for the parent container, the edge effect of the **Tabs** component is displayed instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  SELF_FIRST = 1
}

/**
 * Defines the controller of the **Tabs** component, used to control the **Tabs** component to perform tab switching. A
 * single **TabsController** cannot control multiple **Tabs** components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class TabsController {
  /**
   * Constructor of **TabsController**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constructor();

  /**
   * Controls **Tabs** to switch to a specified tab. Use this API when you need to implement tab switching through
   * buttons, drop-down menus, or other controls, for example, tapping the "Previous"/"Next" button to switch tabs.
   *
   * > **NOTE**
   * >
   * > When **animationMode** is set to [AnimationMode.NO_ANIMATION]{@link TabsAttribute#animationMode}, the default
   * > animation does not take effect when this API is called to switch **TabContent**. You can set
   * > [animationDuration]{@link TabsAttribute#animationDuration} to **0** to switch without animation.
   *
   * @param { number } value - Index of the tab, starting from 0. Value range: [0, total number of tabs - 1]. If the
   *     value is out of range, it is processed as 0.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  changeIndex(value: number): void;

  /**
   * Controls the preloading of specified child nodes in **Tabs**. After this API is called, all specified child nodes
   * are loaded at once. Therefore, for performance considerations, it is recommended to load child nodes in batches.
   * This API is applicable to scenarios where certain tabs need to be loaded in advance to improve switching
   * performance, for example, when the content of some tabs is complex or resource-intensive, preloading can be used to
   * optimize user experience.
   *
   * > **NOTE**
   * >
   * > - The **preloadItems** API of **Tabs** must be called after **Tabs** is created. For the first preloading, it is
   * > recommended to control it in the [onAppear]{@link CommonMethod#onAppear} lifecycle of **Tabs**.
   * >
   * > - If the **TabsController** object is not bound to any **Tabs** component, calling this API directly throws a JS
   * > exception. Therefore, when using this API, it is recommended to catch the exception through try-catch.
   * >
   * > - When using **preloadItems** to preload tab pages, if you need to customize the content displayed on the tab
   * > bar, it is recommended to use **ComponentContent**. For a usage example, see
   * > [Example 10](docroot://reference/apis-arkui/arkui-ts/ts-container-tabcontent.md#example-10-preloading-child-nodes-using-componentcontent).
   *
   * @param { Optional<Array<number>> } indices - Array of indices of the child nodes to be preloaded.<br/>Default
   *     value: empty array.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter invalid. Possible causes:
   *     <br> 1. The parameter type is not Array<number>.
   *     <br> 2. The parameter is an empty array.
   *     <br> 3. The parameter contains an invalid index.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  preloadItems(indices: Optional<Array<number>>): Promise<void>;

  /**
   * Sets the translation distance of the tab bar. This API is applicable to scenarios where the tab bar position needs
   * to be adjusted dynamically, such as the slide-to-hide/show effect of the tab bar and immersive experience achieved
   * by scrolling the page together with the tab bar.
   *
   * > **NOTE**
   * >
   * > After the **Tabs** component is bound to a scrollable container component through APIs such as
   * > [bindTabsToScrollable](@link bindtabstoscrollable13) or
   * > [bindTabsToNestedScrollable](@link bindtabstonestedscrollable13),
   * > scrolling the scrollable container component triggers the show/hide animation of the tab bar of all **Tabs**
   * > components bound to it. In this case, the tab bar translation distance set by calling **setTabBarTranslate**
   * > becomes invalid. Therefore, it is not recommended to use **bindTabsToScrollable**,
   * > **bindTabsToNestedScrollable**, and **setTabBarTranslate** at the same time.
   *
   * @param { TranslateOptions } translate - Translation distance of the tab bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  setTabBarTranslate(translate: TranslateOptions): void;

  /**
   * Sets the opacity of the tab bar. This API is suitable for scenarios where the tab bar display transparency needs to
   * be adjusted, such as the fade-in and fade-out effect of the tab bar and reducing the visual interference of the tab
   * bar to highlight content.
   *
   * > **NOTE**
   * >
   * > After the **Tabs** component is bound to a scrollable container component using APIs such as
   * > [bindTabsToScrollable](@link bindTabsToScrollable) or
   * > [bindTabsToNestedScrollable](@link bindTabsToNestedScrollable),
   * > when the scrollable container component is swiped, the show and hide animations of the tab bar of all **Tabs**
   * > components bound to it are triggered, and the tab bar opacity set by calling **setTabBarOpacity** becomes
   * > invalid. Therefore, it is not recommended to use **bindTabsToScrollable**, **bindTabsToNestedScrollable**, and
   * > **setTabBarOpacity** at the same time.
   *
   * @param { number } opacity - Opacity of the tab bar. The value **1.0** indicates fully opaque, and the value 0.0
   *     indicates fully transparent. The value range is [0.0, 1.0]. If the set value is less than 0.0, it is processed
   *     as 0.0. If the set value is greater than 1.0, it is processed as 1.0.
   *     <br> Default value: **1.0**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  setTabBarOpacity(opacity: number): void;

  /**
   * Get the current display mode of the Tabs.
   *
   * @returns { TabBarDisplayMode } The current display mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  getBarDisplayMode(): TabBarDisplayMode;
}

/**
 * Provides parameters for configuring the **Tabs** component, including tab positions, the current index of the
 * displayed tab, the **Tabs** controller, and [universal attributes]{@link ./common} for the **TabBar**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 * @noninterop
 */
declare interface TabsOptions {
  /**
   * Position of **Tabs**. The specific position of the tab is affected by the **vertical** attribute: when **vertical**
   * is **true**, **Start** is on the left and **End** is on the right; when **vertical** is **false**, **Start** is at
   * the top and **End** is at the bottom.
   *
   * Default value: **BarPosition.Start**.
   *
   * @default BarPosition.Start [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  barPosition?: BarPosition;

  /**
   * Index of the currently displayed tab.
   *
   * Default value: **0**
   *
   * **NOTE**
   *
   * When set to a value less than 0, the default value is used.
   *
   * The value range is [0, number of child nodes of **TabContent** - 1].
   *
   * When **index** is directly modified to switch pages, the switching animation does not take effect. When
   * [changeIndex]{@link TabsController#changeIndex} of **TabsController** is used, the switching animation takes effect
   * by default. You can set [animationDuration]{@link TabsAttribute#animationDuration} to **0** to disable the
   * animation.
   *
   * Since API version 10, this parameter supports two-way binding with
   * [$](docroot://ui/state-management/arkts-two-way-sync.md) variables.
   *
   * When **Tabs** is rebuilt, system resources are switched (such as system font switching or system light/dark mode
   * switching), or component attributes change, the page corresponding to index is jumped to. If you do not want to
   * jump in the preceding cases, use two-way binding.
   *
   * @default 0 [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  index?: number;

  /**
   * **Tabs** controller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  controller?: TabsController;

  /**
   * Used to set the [universal attributes]{@link ./common} of tab bar, used to uniformly manage the style, layout, and
   * other universal attributes of tab bar through **CommonModifier**. Pass this parameter when you need to dynamically
   * modify the universal attributes of **TabBar** or implement state management of attributes. When it is not passed,
   * tab bar uses the default style and layout without additional universal attribute settings.
   *
   * **NOTE**
   *
   * When dynamically set to undefined, the current state remains unchanged and the universal attributes are not reset.
   *
   * When switching from one **CommonModifier** to another, duplicate attributes are overwritten, and non-duplicate
   * attributes take effect at the same time without resetting the universal attributes of the previous
   * **CommonModifier**.
   *
   * The [barWidth]{@link TabsAttribute#barWidth}, [barHeight]{@link TabsAttribute#barHeight(value: Length)},
   * [barBackgroundColor]{@link TabsAttribute#barBackgroundColor},
   * [barBackgroundBlurStyle]{@link TabsAttribute#barBackgroundBlurStyle(style: BlurStyle, options: BackgroundBlurStyleOptions)},
   * and [barBackgroundEffect]{@link TabsAttribute#barBackgroundEffect} attributes of **Tabs** override the
   * [width]{@link CommonMethod#width(value: Length)}, [height]{@link CommonMethod#height(value: Length)},
   * [backgroundColor]{@link CommonMethod#backgroundColor(color: Optional<ResourceColor>)},
   * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions)},
   * and [backgroundEffect]{@link CommonMethod#backgroundEffect(options: Optional<BackgroundEffectOptions>)} attributes
   * of CommonModifier.
   *
   * The [align]{@link CommonMethod#align(value: Alignment)} attribute takes effect only in
   * [BarMode.Scrollable]{@link TabsAttribute#barMode(value: BarMode.Scrollable, options: ScrollableBarModeOptions)}
   * mode, and when **Tabs** is horizontal, it takes effect only when
   * [nonScrollableLayoutStyle]{@link ScrollableBarModeOptions} is not set or is set to an abnormal value.
   *
   * The
   * [tabBar]{@link TabContentAttribute#tabBar(content: ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder |  TabBarOptions)}
   * attribute of the [TabContent]{@link ./tab_content} component does not support the drag function when it is in the
   * bottom tab style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  barModifier?: CommonModifier;
}

/**
 * A container component that switches between content views via tabs, with each tab corresponding to a content view. It
 * is suitable for scenarios that require quick switching between different content views, such as the bottom navigation
 * bar of an app, top tab switching, and sidebar navigation. Using the **Tabs** component simplifies the implementation
 * of multi-view navigation and improves user switching efficiency.
 *
 * > **NOTE**
 * >
 * > - Since API version 11, this component supports the safe area avoidance feature. The default value of its
 * > [expandSafeArea]{@link CommonMethod#expandSafeArea} attribute is expandSafeArea([SafeAreaType.SYSTEM],
 * > [SafeAreaEdge.BOTTOM]). Developers can override this attribute to change the default behavior. For versions earlier
 * > than API version 11, the **expandSafeArea** attribute must be used to manually implement safe area avoidance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface TabsInterface {
  /**
   * Creates a **Tabs** container.
   *
   * @param { object } value [since 7 - 14]
   * @param { TabsOptions } [options] - Component parameter of **Tabs**. Default value: **undefined**, which means the
   *     default configuration is used when no parameter is set. [since 15]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: TabsOptions): TabsAttribute;
  /**
   * Called when the view is switched.
   *
   * @param { object } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the view is switched.
   *
   * @param { object } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the view is switched.
   *
   * @param { object } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the view is switched.
   *
   * @param { TabsOptions } [options] - Tabs options.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  (options?: TabsOptions): TabsAttribute;
}

/**
 * Defines a divider style object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
interface DividerStyle {
  /**
   * Line width of the divider (percentage setting is not supported).
   *
   * Default value: **0.0**
   *
   * Unit: vp
   *
   * Value range: [0, +∞). When the value is set to less than 0, the default value is used.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth: Length;

  /**
   * Color of the divider.
   *
   * Default value: **#33182431**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color?: ResourceColor;

  /**
   * Distance between the divider and the top of the sidebar (percentage setting is not supported).
   *
   * Default value: **0.0**
   *
   * Unit: vp
   *
   * Value range: [0, +∞). When the value is set to less than 0, the default value is used.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  startMargin?: Length;

  /**
   * Distance between the divider and the bottom of the sidebar (percentage setting is not supported).
   *
   * Default value: **0.0**
   *
   * Unit: vp
   *
   * Value range: [0, +∞). When the value is set to less than 0, the default value is used.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  endMargin?: Length;
}

/**
 * Defines a collection of animation-related information of the **Tabs** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TabsAnimationEvent {
  /**
   * Offset of the currently displayed element of **Tabs** relative to the start position of **Tabs** along the main
   * axis. Unit: vp. Default value: **0**. A positive value indicates an offset to the right (horizontal) or downward (
   * vertical), and a negative value indicates an offset to the left (horizontal) or upward (vertical).
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  currentOffset: number;

  /**
   * Offset of the animation target element of **Tabs** relative to the start position of **Tabs** along the main axis.
   * Unit: vp. Default value: **0**. A positive value indicates an offset to the right (horizontal) or downward (
   * vertical), and a negative value indicates an offset to the left (horizontal) or upward (vertical).
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  targetOffset: number;

  /**
   * Release velocity of **Tabs** when the release animation starts. Unit: vp/s. Default value: **0**. A positive value
   * indicates sliding to the right (horizontal) or downward (vertical), and a negative value indicates sliding to the
   * left (horizontal) or upward (vertical). A larger velocity value indicates faster sliding. This parameter can be
   * used to implement the inertial scrolling effect.
   *
   * @default 0.0 vp/s
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  velocity: number;
}

/**
 * Defines an object for setting the grid layout of the tab bar, including the column margin and gutter in grid mode,
 * and the number of columns occupied by tabs on small, medium, and large screens.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface BarGridColumnOptions {
  /**
   * Number of columns occupied by tabs on a small screen. A non-negative even number or -1 (-1 indicates that the tabs
   * occupy the full width of the tab bar). A small screen is greater than or equal to 320 vp but less than 600 vp.
   *
   * Default value: **-1**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  sm?: number;

  /**
   * Number of columns occupied by tabs on a medium screen. A non-negative even number or -1 (-1 indicates that the tabs
   * occupy the full width of the tab bar). A medium screen is greater than or equal to 600 vp but less than 800 vp.
   *
   * Default value: **-1**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  md?: number;

  /**
   * Number of columns occupied by tabs on a large screen. A non-negative even number or -1 (-1 indicates that the tabs
   * occupy the full width of the tab bar). A large screen is greater than or equal to 840 vp but less than 1024 vp.
   *
   * Default value: **-1**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  lg?: number;

  /**
   * Column margin in grid mode. Percentage setting is not supported. Value range: [0, +∞). Default value: **24.0**
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  margin?: Dimension;

  /**
   * Column gutter in grid mode. Percentage setting is not supported. Value range: [0, +∞). Default value: **24.0**
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  gutter?: Dimension;
}

/**
 * Defines a layout style object of the tab bar in Scrollable mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ScrollableBarModeOptions {
  /**
   * Left and right margins of the tab bar in Scrollable mode (percentage setting is not supported).
   *
   * Default value: **0.0**
   *
   * Unit: vp
   *
   * Value range: [0, +∞). When the value is set to less than 0, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  margin?: Dimension;

  /**
   * Arrangement of tabs when not scrolling in Scrollable mode. This attribute is valid only in horizontal mode.
   *
   * Default value: **LayoutStyle.ALWAYS_CENTER**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  nonScrollableLayoutStyle?: LayoutStyle;
}

/**
 * Defines the width of the tab bar under different **Tabs** widths.
 *
 * > **NOTE**
 * >
 * > - [barWidth]{@link TabsAttribute#barWidth} takes precedence over this API. When neither **barWidth** nor this API
 * > takes effect, the tab bar width uses the default calculation rule.
 * >
 * > - The default calculation rule of the tab bar width is as follows. When the number of child nodes is 4, the maximum
 * > tab bar width is 328 vp. When the number of child nodes is greater than or equal to 5, the maximum tab bar width is
 * > 360 vp. When the **Tabs** width is greater than or equal to 1140 vp, the tab bar width and height are scaled up by
 * > 1.15 times.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
interface FloatingTabBarWidth {
  /**
   * Width of the tab bar when the **Tabs** width is less than 440 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  smallBarWidth?: Length;
  /**
   * Width of the tab bar when the **Tabs** width is between 440 vp and 600 vp, or when the width is between 600 vp and
   * 840 vp and the height-to-width ratio is less than 0.8.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  mediumBarWidth?: Length;
  /**
   * Width of the tab bar when the **Tabs** width is greater than 840 vp, or when the width is between 600 vp and 840 vp
   * and the height-to-width ratio is greater than 0.8.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  largeBarWidth?: Length;
}

/**
 * Defines the floating style of the tab bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
interface FloatingTabBarStyle {
  /**
   * Width of the tab bar at different **Tabs** widths. For the default width calculation rule, see
   * [FloatingTabBarWidth]{@link FloatingTabBarWidth}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  barWidth?: FloatingTabBarWidth;
  /**
   * Left and right margins in the default width calculation rule of the tab bar.
   *
   * Value range: [0, +∞)
   *
   * When the **Tabs** width is less than 600 vp, the default value is 16 vp. When the **Tabs** width is between 600 vp
   * and 840 vp, the default value is 24 vp. When the **Tabs** width is greater than 840 vp, the default value is 32 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  barSideMargin?: Length;
  /**
   * Distance from the tab bar to the bottom of the **Tabs**.
   *
   * Value range: [0, +∞)
   *
   * Default value: 28 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  barBottomMargin?: Length;
  /**
   * Color of the mask. The mask display area is rendered with a transparency gradient based on the mask color, with the
   * opacity decreasing from bottom to top. In light mode, the default value is **#CCF1F3F5**, displayed as white. In
   * dark mode, the default value is **#99000000**, displayed as black.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maskColor?: ResourceColor;
  /**
   * Height of the mask. The upper edge of the mask display is 16 vp higher than the upper edge of the tab bar by
   * default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maskHeight?: Length;
  /**
   * Whether to follow the left-right layout of the operating hand.
   *
   * The value **true** means to follow the left-right layout of the operating hand; the value **false** means not to
   * follow the left-right layout of the operating hand.
   *
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  adaptToHandedness?: boolean;
  /**
   * Immersive material style of the tab bar backplate.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: UIMaterial.ImmersiveMaterial;
}

/**
 * Defines the callback triggered when the page transition animation starts.
 *
 * @param { number } index - Index of the currently displayed element. The index starts from 0.
 * @param { number } targetIndex - Index of the target element of the switching animation. The index starts from 0.
 * @param { TabsAnimationEvent } extraInfo - Animation-related information, including the displacement of the currently
 *     displayed element and the target element relative to the start position of **Tabs** along the main axis, and the
 *     release velocity.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTabsAnimationStartCallback = (index: number, targetIndex: number, extraInfo: TabsAnimationEvent) => void;

/**
 * Defines the callback triggered when the page transition animation ends.
 *
 * @param { number } index - Index of the currently displayed element, starting from 0.
 * @param { TabsAnimationEvent } extraInfo - Animation information, which returns only the offset of the currently
 *     displayed element relative to the start position of **Tabs** along the main axis.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTabsAnimationEndCallback = (index: number, extraInfo: TabsAnimationEvent) => void;

/**
 * Defines the callback triggered on a frame-by-frame basis when the page is turned by a swipe.
 *
 * @param { number } index - Index of the currently displayed element, starting from 0. <br/>Value range:
 *     [0, total number of tabs - 1]
 * @param { TabsAnimationEvent } extraInfo - Animation-related information, which returns only the offset of the
 *     currently displayed element relative to the start position of **Tabs** along the main axis.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTabsGestureSwipeCallback = (index: number, extraInfo: TabsAnimationEvent) => void;

/**
 * Callback invoked when the custom page switching animation of **Tabs** starts.
 *
 * @param { number } from - Index of the currently displayed page when the animation starts. The index starts from 0.<br
 *     />Value range: [0, total number of tabs - 1]. If the value exceeds the maximum index or is less than 0, no
 *     transition animation is applied.
 * @param { number } to - Index of the target page when the animation starts. The index starts from 0.<br/>Value range:
 *     [0, total number of tabs - 1]. If the value exceeds the maximum index or is less than 0, no transition animation
 *     is applied.
 * @returns { TabContentAnimatedTransition | undefined } Information about the custom switching animation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type TabsCustomContentTransitionCallback = (from: number, to: number) => TabContentAnimatedTransition | undefined;

/**
 * Custom callback for intercepting **Tabs** page switching, triggered when a new page is about to be displayed.
 *
 * @param { number } currentIndex - Index of the currently displayed page. The index starts from 0.
 * @param { number } comingIndex - Index of the new page to be displayed. The index starts from 0.
 * @returns { boolean } When the return value of the callback handler is **true**, **Tabs** can switch to the new page.<
 *     br/>When the return value of the callback handler is **false**, **Tabs** cannot switch to the new page and still
 *     displays the original page content.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTabsContentWillChangeCallback = (currentIndex: number, comingIndex: number) => boolean;

/**
 * Triggered when the **Tabs** is swiped.
 *
 * > **NOTE**
 * >
 * > - For example, when the index of the currently selected tab is 0, during a transition animation from page 0 to page
 * > 1, the callback is triggered for all pages within the viewport on every frame. When pages 0 and 1 are both in the
 * > viewport, the callback is triggered twice per frame. The first callback has **selectedIndex** as **0**, **index**
 * > as **0**, **position** as the ratio of how much page 0 has moved relative to its position before the animation
 * > started on the current frame, and **mainAxisLength** as the length of page 0 on the main axis. The second callback
 * > has **selectedIndex** as **0**, **index** as **1**, **position** as the ratio of how much page 1 has moved relative
 * > to page 0 before the animation started on the current frame, and **mainAxisLength** as the length of page 1 on the
 * > main axis.
 * >
 * > - If the animation curve is a spring interpolation curve, during the transition animation from page 0 to page 1,
 * > due to the position and velocity when the user lifts their finger off the screen, animation may overshoot and slide
 * > past to page 2, then bounce back to page 1. Throughout this process, a callback is triggered for pages 1 and 2
 * > within the viewport on every frame.
 *
 * @param { number } selectedIndex - Index of the currently selected page. For example, when the index of the currently
 *     selected tab is 0, during a transition animation from page 0 to page 1, **selectedIndex** is **0** in every
 *     callback.
 * @param { number } index - Index of the page within the viewport. For example, during page swiping, when pages 0 and 1
 *     are both in the viewport, the callback is triggered twice per frame. The first callback has **index** as **0**,
 *     and the second callback has **index** as **1**.
 * @param { number } position - Ratio of how much the page indicated by **index** has moved relative to the start
 *     position of the **Tabs** main axis (the start position of the page corresponding to **selectedIndex**). For
 *     example, in a horizontal **Tabs**, when the index of the currently selected tab is 0, during a transition
 *     animation from page 0 to page 1 by swiping left, if on a certain frame pages 0 and 1 occupy 30% and 70% of the
 *     viewport respectively, the callback is triggered twice on the current frame. The first callback has **position**
 *     as **-0.7**, indicating that page 0 is on the left of the start position of the **Tabs** main axis on the current
 *     frame, and the left edge of page 0 is 70% of the viewport away from the start position of the **Tabs** main axis,
 *     that is, page 0 has moved left by 70% of the viewport. The second callback has **position** as **0.3**,
 *     indicating that page 1 is on the right of the start position of the **Tabs** main axis on the current frame, and
 *     the left edge of page 1 is 30% of the viewport away from the start position of the **Tabs** main axis. In fact,
 *     page 1 has also moved left by 70% of the viewport.
 * @param { number } mainAxisLength - Length of the page corresponding to **index** on the main axis, in vp. For
 *     example, if **index** is **0** in a callback and **mainAxisLength** is **360** in that callback, the length of
 *     page 0 on the main axis on the current frame is 360 vp. For a horizontal **Tabs**, this represents the page
 *     width; for a vertical **Tabs**, this represents the page height.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare type OnTabsContentDidScrollCallback = (selectedIndex: number, index: number, position: number, mainAxisLength: number) => void;

/**
 * Enumerates the display styles of the tab bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.2.0 dynamic
 */
declare enum TabBarStyle {
  /**
   * The bottom tab bar style. The tab bar position can be adjusted through the **vertical** attribute of **Tabs**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  BOTTOM = 0,

  /**
   * The sidebar style. The tab bar is displayed as a sidebar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  SIDEBAR = 1,

  /**
   * The adaptable sidebar style. The tab bar can switch between bottom tab bar and sidebar modes
   * based on the Tabs container size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  SIDEBAR_ADAPTABLE = 2,
}

/**
 * Search filter callback.
 *
 * @param { number } tabIndex - Index of the tab to filter.
 * @param { string } text - The current search text.
 * @returns { boolean } Returns **true** if the tab matches the search criteria, **false** otherwise.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.2.0 dynamic
 */
declare type TabsSidebarSearchFilterCallback = (tabIndex: number, text: string) => boolean;

/**
 * Defines the options for the searchable sidebar tab bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.2.0 dynamic
 */
declare interface TabsSidebarSearchableOptions {
  /**
   * Sets the text input in the search text box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  searchText?: ResourceStr;

  /**
   * Placeholder text displayed when the search input is empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  placeholder?: ResourceStr;

  /**
   * Callback triggered when the search text changes.
   *
   * @param { string } text - The current search text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  searchCallback?: (text: string) => void;

  /**
   * Filter function to determine whether a tab should be displayed based on the search text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  searchFilter?: TabsSidebarSearchFilterCallback;
}

/**
 * Enumerates the actual display modes of the tab bar under different Tabs container sizes.
 * This enum is used in [barDisplayModeBreakpoint]{@link TabsAttribute#barDisplayModeBreakpoint} to specify
 * the display mode for different breakpoint sizes. It is only meaningful when **TabBarStyle** is set to
 * **SIDEBAR_ADAPTABLE** or **SIDEBAR**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.2.0 dynamic
 */
declare enum TabBarDisplayMode {
  /**
   * The tab bar is displayed at the bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  BOTTOM_TABBAR = 0,

  /**
   * The tab bar is displayed as a sidebar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  SIDEBAR = 1,
}

/**
 * Defines the value type for different Tabs container sizes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.2.0 dynamic
 */
declare interface TabsBreakpointType<T> {
  /**
   * Value for small Tabs container size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sm?: T;

  /**
   * Value for medium Tabs container size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  md?: T;

  /**
   * Value for large Tabs container size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  lg?: T;
}



/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link ./common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class TabsAttribute extends CommonMethod<TabsAttribute> {
  /**
   * Sets whether the **Tabs** is vertical. A horizontal **Tabs** (default) is suitable for scenarios such as bottom
   * navigation bars and top tab switching; a vertical **Tabs** is suitable for scenarios such as sidebar navigation and
   * settings page categories.
   *
   * @param { boolean } value - Whether the **Tabs** is vertical.<br/>Default value: **false**, indicating a horizontal
   *     **Tabs**; **true** indicates a vertical **Tabs**.<br/>When **height** of a horizontal **Tabs** is set to
   *     **auto**, the component height of the **Tabs** adapts to the height of its child components, that is, the
   *     height of
   *     [tabBar]{@link TabContentAttribute#tabBar(options: string | Resource | CustomBuilder | TabBarOptions)} + the
   *     width of the **divider** + the height of **TabContent** + the top and bottom **padding** values of the **Tabs**
   *     component + the top and bottom border widths of the **Tabs** component.<br/>When **width** of a vertical
   *     **Tabs** is set to **auto**, the component width of the **Tabs** adapts to the width of its child components,
   *     that is, the width of **tabBar** + the width of the **divider** + the width of **TabContent** + the left and
   *     right **padding** values + the left and right **border** widths.<br/>Keep the sizes of child components on each
   *     page as consistent as possible to avoid the page switching animation jumping when swiping pages.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  vertical(value: boolean): TabsAttribute;

  /**
   * Sets the tab position of **Tabs**.
   *
   * @param { BarPosition } value - Sets the tab position of **Tabs**. The specific position of the tab is affected by
   *     the **vertical** attribute: when **vertical** is **true**, **Start** is on the left and **End** is on the
   *     right; when **vertical** is **false**, **Start** is at the top and **End** is at the bottom.<br/>Default value:
   *     **BarPosition.Start**
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  barPosition(value: BarPosition): TabsAttribute;

  /**
   * Sets whether the page can be switched by swiping the page. When used with custom navigation buttons or tab bar tabs
   * to control switching, it is recommended to set this parameter to false to avoid conflicts between swipe gestures
   * and custom navigation logic.
   *
   * @param { boolean } value - Whether the page can be switched by swiping the page.<br/>Default value: **true**, the
   *     page can be switched by swiping the page. When set to **false**, the page cannot be switched by swiping.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollable(value: boolean): TabsAttribute;

  /**
   * Sets the tab bar layout mode to BarMode.Fixed.
   *
   * @param { BarMode.Fixed } value - All tab bars evenly share the bar width (evenly share the bar height in vertical
   *     mode).
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barMode(value: BarMode.Fixed): TabsAttribute;

  /**
   * Sets the tab bar layout mode to **BarMode.Scrollable**.
   *
   * @param { BarMode.Scrollable } value - All tab bars use the actual layout width and can be scrolled when the total
   *     width (**barWidth** of horizontal **Tabs**, **barHeight** of vertical **Tabs**) is exceeded.
   * @param { ScrollableBarModeOptions } [options] - Layout style of the tab bar in Scrollable mode.<br/>**Note:** <br/>
   *     Valid only in Scrollable and horizontal mode.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barMode(value: BarMode.Scrollable, options: ScrollableBarModeOptions): TabsAttribute;

  /**
   * Sets the layout mode of the tab bar. The Fixed mode is suitable for scenarios with a fixed and small number of
   * tabs; the Scrollable mode is suitable for scenarios with a large number of tabs or unfixed text length.
   *
   * @param { BarMode } value - Layout mode.<br/>Default value: **BarMode.Fixed**
   * @param { ScrollableBarModeOptions } [options] - Layout style of the tab bar in Scrollable mode.<br/>**Note:** <br/>
   *     This parameter is valid only when **value** is **Scrollable** and the mode is horizontal.<br/> [since 10]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  barMode(value: BarMode, options?: ScrollableBarModeOptions): TabsAttribute;

  /**
   * Sets the width of the tab bar. If the set value is less than 0 or greater than the width of the **Tabs** component,
   * the default value is used.
   *
   * @param { number } value - Width of the tab bar.<br/>Default value:<br/>If [SubTabBarStyle]{@link SubTabBarStyle}
   *     and [BottomTabBarStyle]{@link BottomTabBarStyle} are not set for the tab bar and the **vertical** attribute is
   *     **false**, the default value is the width of the **Tabs**.<br/>If **SubTabBarStyle** and **BottomTabBarStyle**
   *     are not set for the tab bar and the **vertical** attribute is **true**, the default value is 56 vp.<br/>If
   *     **SubTabBarStyle** is set and the **vertical** attribute is **false**, the default value is the width of the
   *     **Tabs**.<br/>If **SubTabBarStyle** is set and the **vertical** attribute is **true**, the default value is 56
   *     vp.<br/>If **BottomTabBarStyle** is set and the **vertical** attribute is **true**, the default value is 96 vp.
   *     <br/>If **BottomTabBarStyle** is set and the **vertical** attribute is **false**, the default value is the
   *     width of the **Tabs**. [since 7 - 7]
   * @param { Length } value - Width of the tab bar.<br/>Default value:<br/>If [SubTabBarStyle]{@link SubTabBarStyle}
   *     and [BottomTabBarStyle]{@link BottomTabBarStyle} are not set for the tab bar and the **vertical** attribute is
   *     **false**, the default value is the width of the **Tabs**.<br/>If **SubTabBarStyle** and **BottomTabBarStyle**
   *     are not set for the tab bar and the **vertical** attribute is **true**, the default value is 56 vp.<br/>If
   *     **SubTabBarStyle** is set and the **vertical** attribute is **false**, the default value is the width of the
   *     **Tabs**.<br/>If **SubTabBarStyle** is set and the **vertical** attribute is **true**, the default value is 56
   *     vp.<br/>If **BottomTabBarStyle** is set and the **vertical** attribute is **true**, the default value is 96 vp.
   *     <br/>If **BottomTabBarStyle** is set and the **vertical** attribute is **false**, the default value is the
   *     width of the **Tabs**. [since 8]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  barWidth(value: Length): TabsAttribute;

  /**
   * Sets the height value of the tab bar. For a horizontal **Tabs**, height can be set to 'auto' so that the tab bar
   * adaptively fits the child component height. If height is set to a value less than 0 or greater than the **Tabs**
   * height, it is displayed by default value.
   *
   * In versions earlier than API version 14, if **barHeight** is set to a fixed value, the tab bar cannot extend the
   * bottom safe area. Starting from API version 14, it can be used together with the
   * [safeAreaPadding]{@link CommonMethod#safeAreaPadding} attribute. When **safeAreaPadding** does not set bottom or
   * bottom is set to 0, the safe area can be extended.
   *
   * @param { number } value - Height value of the tab bar.<br/>Default value:<br/>When the style is not set or a custom
   *     style is set through **CustomBuilder** and the **vertical** attribute is **false**, the default value is 56vp.<
   *     br/>When the style is not set or a custom style is set through **CustomBuilder** and the **vertical** attribute
   *     is **true**, the default value is the height of the **Tabs**.<br/>When the
   *     [SubTabBarStyle]{@link SubTabBarStyle} style is set and the **vertical** attribute is **false**, the default
   *     value is 56vp.<br/>When the **SubTabBarStyle** style is set and the **vertical** attribute is **true**, the
   *     default value is the height of the **Tabs**.<br/>When the [BottomTabBarStyle]{@link BottomTabBarStyle} style is
   *     set and the **vertical** attribute is **true**, the default value is the height of the **Tabs**.<br/>When the
   *     BottomTabBarStyle style is set and the **vertical** attribute is **false**, the default value is 56vp. Starting
   *     from API version 12, the default value changes to 48vp. [since 7 - 7]
   * @param { Length } value - Height value of the tab bar.<br/>Default value:<br/>When the style is not set or a custom
   *     style is set through **CustomBuilder** and the **vertical** attribute is **false**, the default value is 56vp.<
   *     br/>When the style is not set or a custom style is set through **CustomBuilder** and the **vertical** attribute
   *     is **true**, the default value is the height of the **Tabs**.<br/>When the
   *     [SubTabBarStyle]{@link SubTabBarStyle} style is set and the **vertical** attribute is **false**, the default
   *     value is 56vp.<br/>When the **SubTabBarStyle** style is set and the **vertical** attribute is **true**, the
   *     default value is the height of the **Tabs**.<br/>When the [BottomTabBarStyle]{@link BottomTabBarStyle} style is
   *     set and the **vertical** attribute is **true**, the default value is the height of the **Tabs**.<br/>When the
   *     BottomTabBarStyle style is set and the **vertical** attribute is **false**, the default value is 56vp. Starting
   *     from API version 12, the default value changes to 48vp. [since 8]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  barHeight(value: Length): TabsAttribute;

  /**
   * Sets the height value of the tab bar. For horizontal **Tabs**, you can set height to 'auto' so that the tab bar
   * adapts to the height of its child components, and set **noMinHeightLimit** to true so that the adaptive height can
   * be smaller than the default height of the **TabBar**. If height is set to a value smaller than 0 or greater than
   * the height of **Tabs**, it is displayed by default value.
   *
   * @param { Length } height - Height value of the tab bar.<br/>Default value:<br/>If no style is set or a custom style
   *     is set through **CustomBuilder** and **vertical** is **false**, the default value is 56vp.<br/>If no style is
   *     set or a custom style is set through **CustomBuilder** and **vertical** is **true**, the default value is the
   *     height of **Tabs**.<br/>If the [SubTabBarStyle]{@link SubTabBarStyle} style is set and **vertical** is
   *     **false**, the default value is 56vp.<br/>If the **SubTabBarStyle** style is set and **vertical** is **true**,
   *     the default value is the height of **Tabs**.<br/>If the [BottomTabBarStyle]{@link BottomTabBarStyle} style is
   *     set and **vertical** is **true**, the default value is the height of **Tabs**.<br/>If the BottomTabBarStyle
   *     style is set and **vertical** is **false**, the default value is 48vp.
   * @param { boolean } noMinHeightLimit - Whether to cancel the minimum height limit of the tab bar when height is set
   *     to 'auto'. The default value is **false**.<br/>**Note:** <br/>The value true means to cancel the minimum height
   *     limit of the tab bar, that is, the height value of the tab bar can be smaller than the default value.<br/>The
   *     value false means to limit the minimum height of the tab bar, that is, the minimum height value of the tab bar
   *     is equal to the default value.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  barHeight(height: Length, noMinHeightLimit: boolean): TabsAttribute;

  /**
   * Sets the animation curve for page turning of the **Tabs**. For common curves, see [Curve]{@link Curve}. You can
   * also create a custom interpolation curve object through the APIs provided by the
   * [interpolation calculation]{@link @ohos.curves:curves} module.
   *
   * @param { Curve | ICurve } curve - Animation curve for page turning of the **Tabs**.<br/>Default value:<br/>When a
   *     **TabContent** is swiped to turn pages, the default value is **interpolatingSpring(-1, 1, 228, 30)**.<br/>When
   *     a tab bar tab is tapped or the **changeIndex** API of **TabsController** is called to turn pages, the default
   *     value is **cubicBezierCurve(0.2, 0.0, 0.1, 1.0)**.<br/>When a custom animation curve is set, the set animation
   *     curve is used for both swiping to turn pages and tapping a tab or calling **changeIndex** to turn pages.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  animationCurve(curve: Curve | ICurve): TabsAttribute;

  /**
   * Sets the duration of the page switching animation for **Tabs**.
   *
   * When animationCurve is not set, the duration of the page switching animation curve interpolatingSpring(-1, 1, 228,
   * 30) for swiping **TabContent** is affected only by the curve's own parameters. Therefore, animationDuration can
   * only control the animation duration for switching **TabContent** by tapping the tab bar tab or calling the
   * **changeIndex** API of **TabsController**.
   *
   * For curves not controlled by animationDuration, see the [Interpolation calculation]{@link @ohos.curves:curves}
   * module, such as [springMotion]{@link @ohos.curves:curves.springMotion},
   * [responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}, and
   * [interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}.
   *
   * @param { number } value - Animation duration for page switching of **Tabs**.<br/>Default value:<br/>Since API
   *     version 10, when this attribute is not set or is set to null, the default value is 0, that is, no animation is
   *     applied to page switching of **Tabs**. When it is set to a value less than 0 or undefined, the default value is
   *     300.<br/>Since API version 11, when this attribute is not set or is set to an abnormal value, and tab bar is
   *     set to the BottomTabBarStyle style, the default value is 0. When tab bar is set to another style, the default
   *     value is 300.<br/>Unit: ms<br/>Value range: [0, +∞)
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  animationDuration(value: number): TabsAttribute;

  /**
   * Sets the animation form for switching **TabContent** when a tab bar tab is tapped or the **changeIndex** API of
   * **TabsController** is called.
   *
   * > **NOTE**
   * >
   * > This attribute cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Optional<AnimationMode> } mode - Animation form for switching **TabContent** when a tab bar tab is tapped
   *     or the **changeIndex** API of **TabsController** is called.<br/>Default value: **AnimationMode.CONTENT_FIRST**,
   *     which means that when a tab bar tab is tapped or the **changeIndex** API of **TabsController** is called to
   *     switch TabContent, the content of the target page is loaded first, and then the switching animation starts.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  animationMode(mode: Optional<AnimationMode>): TabsAttribute;

  /**
   * Sets the edge swipe effect. When the content is swiped to the edge, a rebound action is performed based on the
   * specified edge effect type: the Spring mode uses a spring curve to implement an elastic rebound effect, the Fade
   * mode uses gradient opacity to provide visual feedback, and the None mode does not perform any edge effect. The edge
   * effect is triggered when the swiped content exceeds the container boundary.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 17.
   *
   * @param { Optional<EdgeEffect> } edgeEffect - Edge swipe effect.<br/>Default value: EdgeEffect.Spring
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  edgeEffect(edgeEffect: Optional<EdgeEffect>): TabsAttribute;

  /**
   * Triggered after the tab is switched.
   *
   * This event is triggered when any of the following conditions is met:
   *
   * 1. Triggered after the component sliding animation ends when the page is switched by swiping.
   * 2. Triggered after the tab is switched by calling [changeIndex]{@link TabsController#changeIndex} through the [controller]{@link TabsController}.
   * 3. Triggered after the tab is switched when the **index** attribute value constructed by the [state variable](docroot://ui/state-management/arkts-state.md) is dynamically changed.
   * 4. Triggered after the tab is switched when a tab bar tab is tapped.
   *
   * > **NOTE**
   * >
   * > When a custom tab is used, linking in the **onChange** event may cause the tab linkage to be executed only after
   * > the swipe page is switched, resulting in a delayed custom tab switching effect. It is recommended that you listen
   * > for and refresh the current index in [onAnimationStart]{@link TabsAttribute#onAnimationStart} to ensure that the
   * > animation is triggered in a timely manner. For details, see
   * > [Example 3](docroot://reference/apis-arkui/arkui-ts/ts-container-tabs.md#example-3-implementing-custom-tab-switching-synchronization).
   *
   * @param { function } event - Index of the currently displayed tab, starting from 0. [since 7 - 17]
   * @param { Callback<number> } event - Index of the currently displayed tab, starting from 0. [since 18]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(event: Callback<number>): TabsAttribute;

  /**
   * Triggered when the selected element changes. The index of the element that is about to be hidden is returned.
   *
   * This event is triggered when any of the following conditions is met:
   *
   * 1. When the swipe is released and the page-turning threshold is met, the event is triggered
   *    when the switching animation starts.
   * 2. When the [changeIndex]{@link TabsController#changeIndex} API is called through the
   *    [TabsController]{@link TabsController} controller, the event is triggered when the switching animation starts.
   * 3. Triggered after the **index** attribute constructed by dynamically modifying the
   *    [state variable](docroot://ui/state-management/arkts-state.md).
   * 4. Triggered by tapping a tab.
   *
   * > **NOTE**
   * >
   * > In the **onUnselected** callback, you cannot set the index of the currently displayed page through the **index**
   * > of **TabsOptions**, nor call the **TabsController.changeIndex()** method.
   *
   * @param { Callback<number> } event - Index of the element to be hidden, starting from 0.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onUnselected(event: Callback<number>): TabsAttribute;

  /**
   * Triggered when a tab is tapped.
   *
   * @param { function } event - Index of the tapped tab, starting from 0. [since 10 - 17]
   * @param { Callback<number> } event - Index of the tapped tab, starting from 0. [since 18]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onTabBarClick(event: Callback<number>): TabsAttribute;

  /**
   * Triggered when the switching animation starts. When [animationDuration]{@link TabsAttribute#animationDuration} is
   * **0**, the animation is disabled, and when [scrollable]{@link TabsAttribute#scrollable} is **false**, this callback
   * is not triggered.
   *
   * @param { function } handler - Callback triggered when the switching animation starts. [since 11 - 17]
   * @param { OnTabsAnimationStartCallback } handler - Callback triggered when the switching animation starts. [since 18]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onAnimationStart(handler: OnTabsAnimationStartCallback): TabsAttribute;

  /**
   * Triggered when the switching animation ends, including when the gesture is interrupted during the animation. When
   * [animationDuration]{@link TabsAttribute#animationDuration} is **0** (animation disabled), this callback is not
   * triggered.
   *
   * @param { function } handler - Callback invoked when the switching animation ends. [since 11 - 17]
   * @param { OnTabsAnimationEndCallback } handler - Callback invoked when the switching animation ends. [since 18]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onAnimationEnd(handler: OnTabsAnimationEndCallback): TabsAttribute;

  /**
   * Triggered frame by frame during the swipe of the page, used to listen for the real-time swipe state of the
   * currently displayed page.
   *
   * > **NOTE**
   * >
   * > When [customContentTransition]{@link TabsAttribute#customContentTransition} is used to customize the switching
   * > animation, this event is not triggered.
   *
   * @param { function } handler - Callback triggered frame by frame during the swipe of the page. [since 11 - 17]
   * @param { OnTabsGestureSwipeCallback } handler - Callback triggered frame by frame during the swipe of the
   *     page. [since 18]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onGestureSwipe(handler: OnTabsGestureSwipeCallback): TabsAttribute;

  /**
   * Sets whether tabs fade out when they exceed the container width. It is recommended to use this attribute together
   * with [barBackgroundColor]{@link TabsAttribute#barBackgroundColor}. When the **barBackgroundColor** attribute is not
   * defined, a white fading effect is displayed at the end of the tab by default.
   *
   * @param { boolean } value - Whether tabs fade out when they exceed the container width.<br />Default value:
   *     **true**, tabs fade out when they exceed the container width. When set to **false**, tabs are directly
   *     truncated when they exceed the container width. If the
   *     [barBackgroundColor]{@link TabsAttribute#barBackgroundColor} attribute is not set, the default white fading
   *     effect is still displayed at the end of the tab.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fadingEdge(value: boolean): TabsAttribute;

  /**
   * Sets the style of the divider that separates the tab bar from the **TabContent**. If a visual separation is
   * required between the tab bar and the **TabContent**, a divider can be added through this attribute.
   *
   * @param { DividerStyle | null } value - Style of the divider. By default, no divider is displayed.<br/>DividerStyle:
   *     style of the divider;<br/>null: no divider is displayed.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  divider(value: DividerStyle | null): TabsAttribute;

  /**
   * Sets whether the tab bar is blurred behind and overlaid on the **TabContent**. This is suitable for scenarios that
   * require an immersive UI effect.
   *
   * @param { boolean } value - Whether the tab bar is blurred behind and overlaid on the TabContent. When barOverlap is
   *     set to true, the tab bar is blurred behind and overlaid on the TabContent, and the default blur material
   *     [BlurStyle]{@link BlurStyle} value of the tab bar is changed to 'BlurStyle.COMPONENT_THICK'. When barOverlap is
   *     set to false, there is no blur or overlay effect.<br />Default value: false
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barOverlap(value: boolean): TabsAttribute;

  /**
   * Sets the background color of the tab bar.
   *
   * @param { ResourceColor } value - Background color of the tab bar.<br/>**Note:**<br/>It is recommended to use this
   *     attribute together with [fadingEdge]{@link TabsAttribute#fadingEdge} to avoid the white fade effect at the end
   *     of the tab.<br/>Default value: **Color.Transparent**, transparent
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barBackgroundColor(value: ResourceColor): TabsAttribute;

  /**
   * Sets the visible area of the tab bar in a grid-based manner. For details, see BarGridColumnOptions. This attribute
   * is valid only in horizontal mode and is not applicable to XS, XL, and XXL devices (see
   * [Grid Container Breakpoints](docroot://ui/arkts-layout-development-grid-layout.md#breakpoints)).
   *
   * @param { BarGridColumnOptions } value - Sets the visible area of the tab bar in a grid-based manner.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barGridAlign(value: BarGridColumnOptions): TabsAttribute;

  /**
   * Customizes the page switching animation of **Tabs**. This is applicable when you need personalized tab switching
   * effects, such as flipping, fade in and fade out, and scaling.
   *
   * Instructions:
   *
   * 1. When a custom switching animation is used, the default switching animation of the **Tabs** component is
   *    disabled, and the page cannot be swiped along with the finger.
   * 2. When this attribute is set to **undefined**, the custom switching animation is not used, and the default
   *    switching animation of the component is used instead.
   * 3. The custom switching animation does not support interruption.
   * 4. Currently, the custom switching animation can be triggered only in two scenarios: tapping a tab and calling
   *    the **TabsController.changeIndex()** API.
   * 5. When the custom switching animation is used, all events supported by the **Tabs** component are available
   *    except **onGestureSwipe**.
   * 6. The triggering timing of the [onChange]{@link TabsAttribute#onChange} and
   *    [onAnimationEnd]{@link TabsAttribute#onAnimationEnd} events requires special explanation:
   *    if a second custom animation is triggered while the first custom animation is still in progress,
   *    the **onChange** and **onAnimationEnd** events of the first custom animation are triggered
   *    when the second custom animation starts.
   * 7. When the custom animation is used, the layout mode of the pages participating in the animation is
   *    changed to [Stack]{@link ./stack} layout. If the developer does not proactively set the
   *    [zIndex]{@link CommonMethod#zIndex} attribute of the related pages, all pages have the same **zIndex** value,
   *    and the rendering hierarchy of the pages is determined by their order in the component tree (that is,
   *    the order of the page index values). Therefore, the developer needs to proactively modify the **zIndex**
   *    attribute of the pages to control the rendering hierarchy.
   * 8. This attribute cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { function } delegate - Callback invoked when the custom **Tabs** page switching animation
   *     starts. [since 11 - 17]
   * @param { TabsCustomContentTransitionCallback } delegate - Callback invoked when the custom **Tabs** page switching
   *     animation starts. [since 18]
   * @returns { TabsAttribute } The attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  customContentTransition(delegate: TabsCustomContentTransitionCallback): TabsAttribute;

  /**
   * Sets the background blur material of the tab bar. This is applicable to scenarios where a blur background effect
   * needs to be added to the tab bar.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { BlurStyle } value - Background blur material of the tab bar.<br />Default value: **BlurStyle.NONE**
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  barBackgroundBlurStyle(value: BlurStyle): TabsAttribute;

  /**
   * Sets the mode for flipping pages using the mouse wheel.
   *
   * @param { Optional<PageFlipMode> } mode - Mode for flipping pages using the mouse wheel.<br/>Default value:
   *     **PageFlipMode.CONTINUOUS**
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  pageFlipMode(mode: Optional<PageFlipMode>): TabsAttribute;

  /**
   * Sets the background blur capability of the tab bar, encapsulating different blur radii, mask colors, mask opacity,
   * saturation, and brightness through enum values.
   *
   * @param { BlurStyle } style - Background blur style. The blur style encapsulates five parameters: blur radius, mask
   *     color, mask opacity, saturation, and brightness.
   * @param { BackgroundBlurStyleOptions } options - Background blur options, used to customize the blur effect.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  barBackgroundBlurStyle(style: BlurStyle, options: BackgroundBlurStyleOptions): TabsAttribute;

  /**
   * Sets the background attributes of the tab bar, including the background blur radius, brightness, saturation, and
   * color. This is applicable to scenarios where fine-grained control over the tab bar background visual effect is
   * required.
   *
   * @param { BackgroundEffectOptions } options - Sets the background attributes of the tab bar, including the blur
   *     radius, brightness, saturation, and color.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  barBackgroundEffect(options: BackgroundEffectOptions): TabsAttribute;

  /**
   * Sets the maximum number of cached child components and the cache mode. If this attribute is not set, all child
   * components are cached by default and are not released after caching. You are advised to set the value of **count**
   * based on the number of tabs and the complexity of the child component content.
   *
   * @param { number } count - Maximum number of cached child components.<br/>Value range:
   *     [0, +∞). If the value is set to a number less than 0, the child components are not subject to cache management.
   *     When the number of cached child components exceeds this value, the child components that are no longer
   *     needed are automatically released.
   * @param { TabsCacheMode } mode - Cache mode of the child components.<br/>Default value:
   *     **TabsCacheMode.CACHE_BOTH_SIDE**
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  cachedMaxCount(count: number, mode: TabsCacheMode): TabsAttribute;

  /**
   * Customizes the capability of intercepting **Tabs** page switching. This callback is triggered when a new page is
   * about to be displayed.
   *
   * This event is triggered when any of the following conditions is met:
   *
   * 1. A new page is switched to by swiping the **TabContent**.
   * 2. Triggered when a new page is switched to through the
   *    **TabsController**.[changeIndex]{@link TabsController#changeIndex} API.
   * 3. Triggered when a new page is switched to by dynamically changing the **index** attribute value.
   * 4. Triggered when a new page is switched to by tapping a tab bar tab.
   * 5. Triggered when a new page is switched to through the left and right arrow keys on
   *    the keyboard after a tab bar tab gains focus.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { function } handler - Callback for customizing the **Tabs** page switching interception capability,
   *     triggered when a new page is about to be displayed. [since 12 - 17]
   * @param { OnTabsContentWillChangeCallback } handler - Callback for customizing the **Tabs** page switching
   *     interception capability, triggered when a new page is about to be displayed. [since 18]
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onContentWillChange(handler: OnTabsContentWillChangeCallback): TabsAttribute;

  /**
   * Triggered when the selected element changes. The index of the currently selected element is returned.
   *
   * This event is triggered when any of the following conditions is met:
   *
   * 1. The page switching threshold is reached when the finger is released after swiping,
   *    and the switching animation starts.
   * 2. The [changeIndex]{@link TabsController#changeIndex} API is called through the
   *    [TabsController]{@link TabsController} controller, and the switching animation starts.
   * 3. Triggered after the [state variable](docroot://ui/state-management/arkts-state.md)
   *    that constructs the index attribute is dynamically modified.
   * 4. Triggered by tapping a tab.
   *
   * > **NOTE**
   * >
   * > In the onSelected callback, you cannot set the index of the currently displayed page through
   * > [TabsOptions]{@link TabsOptions}, nor call the **TabsController.changeIndex()** method.
   *
   * @param { Callback<number> } event - Index of the currently selected element, starting from 0.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onSelected(event: Callback<number>): TabsAttribute;

  /**
   * Sets the nested scrolling mode between the **Tabs** component and its parent component. If not set, the default
   * nested scrolling mode is [SELF_ONLY]{@link TabsNestedScrollMode}.
   *
   * @param { TabsNestedScrollMode | undefined } value - Nested scrolling mode between the **Tabs** component and its
   *     parent component.<br/>When set to undefined, the **Tabs** component scrolls on its own and does not interact
   *     with the parent component.
   * @returns { TabsAttribute } -the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  nestedScroll(value: TabsNestedScrollMode | undefined): TabsAttribute;

  /**
   * Listens for the page swipe event of **Tabs**.
   *
   * During page swiping, the [OnTabsContentDidScrollCallback]{@link OnTabsContentDidScrollCallback} callback is
   * triggered frame by frame for all pages in the viewport. For example, when there are two pages with indexes 0 and 1
   * in the viewport, the callback is triggered twice per frame, with the index values 0 and 1 respectively.
   *
   * @param { OnTabsContentDidScrollCallback | undefined } handler - Callback triggered when **Tabs** is swiped. The
   *     value **undefined** unbinds the original callback.
   * @returns { TabsAttribute } - the attribute of the Tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onContentDidScroll(handler: OnTabsContentDidScrollCallback | undefined): TabsAttribute;

  /**
   * Sets the floating style of the tab bar.
   *
   * > **NOTE**
   * >
   * > The floating style allows the tab bar to be displayed in a floating manner at the bottom of the **Tabs**. This
   * > API takes effect only when [barOverlap]{@link TabsAttribute#barOverlap(value: boolean)} is **true**,
   * > [vertical]{@link TabsAttribute#vertical} is **false**, and [barPosition]{@link TabsAttribute#barPosition} is
   * > **BarPosition.End**.
   *
   * @param { Optional<FloatingTabBarStyle> } style - Floating style configuration of the tab bar.<br/>When set to
   *     **undefined**, the floating style is canceled and the default style is restored.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  barFloatingStyle(style: Optional<FloatingTabBarStyle>): TabsAttribute;

  /**
   * Sets the display style of the tab bar.
   *
   * @param { Optional<TabBarStyle> } style - Display style of the tab bar.
   *     <br>Default value: **TabBarStyle.BOTTOM**.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  barStyle(style: Optional<TabBarStyle>): TabsAttribute;

  /**
   * Sets the position of the sidebar tab bar.
   * The sidebar tab bar position is not affected by the **vertical** attribute.
   * It is always on the start or end side of the Tabs container, regardless of the **vertical** setting.
   *
   * @param { Optional<BarPosition> } position - Position of the sidebar tab bar.Start**.
   *     <br>Default value: **BarPosition.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarPosition(position: Optional<BarPosition>): TabsAttribute;

  /**
   * Sets the header content of the sidebar tab bar.
   *
   * @param { Optional<ComponentContent> } header - Header content of the sidebar tab bar.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarHeader(header: Optional<ComponentContent>): TabsAttribute;

  /**
   * Sets the search options for the sidebar tab bar.
   *
   * @param { TabsSidebarSearchableOptions } [searchOptions] - Search options for the sidebar tab bar.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarSearchable(searchOptions?: TabsSidebarSearchableOptions): TabsAttribute;

  /**
   * Sets the display mode of the tab bar for different Tabs container sizes.
   *
   * @param { Optional<TabsBreakpointType<TabBarDisplayMode>> } style - Display mode of the tab bar for different Tabs
   *     container sizes.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  barDisplayModeBreakpoint(style: Optional<TabsBreakpointType<TabBarDisplayMode>>): TabsAttribute;

  /**
   * Triggered after the TabBar display mode changes.
   *
   * @param { Optional<Callback<TabBarDisplayMode>> } callback - Display mode change callback.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  onBarDisplayModeChange(callback: Optional<Callback<TabBarDisplayMode>>): TabsAttribute;

  /**
   * Sets the selected color of the tab icon in sidebar mode.
   *
   * @param { Optional<ResourceColor> } value - Selected color of the tab icon in sidebar mode.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarSelectedIconColor(value: Optional<ResourceColor>): TabsAttribute;

  /**
   * Sets the selected color of the tab text in sidebar mode.
   *
   * @param { Optional<ResourceColor> } value - Selected color of the tab text in sidebar mode.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarSelectedTextColor(value: Optional<ResourceColor>): TabsAttribute;

  /**
   * Sets the unselected color of the tab icon in sidebar mode.
   *
   * @param { Optional<ResourceColor> } value - Unselected color of the tab icon in sidebar mode.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarUnselectedIconColor(value: Optional<ResourceColor>): TabsAttribute;

  /**
   * Sets the unselected color of the tab text in sidebar mode.
   *
   * @param { Optional<ResourceColor> } value - Unselected color of the tab text in sidebar mode.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarUnselectedTextColor(value: Optional<ResourceColor>): TabsAttribute;

  /**
   * Sets the selected color of the tab board in sidebar mode.
   *
   * @param { Optional<ResourceColor> } value - Selected color of the tab board in sidebar mode.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarSelectedBoardColor(value: Optional<ResourceColor>): TabsAttribute;

  /**
   * Sets the display style of the sidebar for the **Tabs** component.
   *
   * @param { Optional<TabsSidebarDisplayStyle> } style - Display style of the sidebar for the **Tabs** component.
   *     <br>Default value: **SidebarDisplayStyle.EMBED**.
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarDisplayStyle(style: Optional<TabsSidebarDisplayStyle>): TabsAttribute;

  /**
   * Sets the footer content of the sidebar tab bar.
   *
   * @param { Optional<ComponentContent> } footer - footer content of the sidebar tab bar.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarFooter(footer: Optional<ComponentContent>): TabsAttribute;

  /**
   * Sets the bottom bar content of the sidebar tab bar.
   *
   * @param { Optional<ComponentContent> } bottomBar - bottom bar content of the sidebar tab bar.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarBottomBar(bottomBar: Optional<ComponentContent>): TabsAttribute;

  /**
   * Sets the width of the sidebar tab bar.
   * This attribute takes effect only when the tab bar is displayed as a sidebar.
   *
   * @param { Optional<Length> } value - Width of the sidebar tab bar.
   *     <br>Default value: **240vp**.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarWidth(value: Optional<Length>): TabsAttribute;

  /**
   * Sets the minimum width of the sidebar tab bar.
   * This attribute takes effect only when the tab bar is displayed as a sidebar.
   *
   * @param { Optional<Length> } value - Minimum width of the sidebar tab bar. The width of the sidebar tab bar does
   *     not become smaller than this value.
   *     <br>If this attribute is not set or is set to **undefined**, no minimum width is imposed on the sidebar tab
   *     bar, which means the sidebar tab bar can be compressed to **0vp**.
   *     <br>The set value is expected to be less than or equal to that of
   *     [maxSidebarWidth]{@link TabsAttribute#maxSidebarWidth}.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  minSidebarWidth(value: Optional<Length>): TabsAttribute;

  /**
   * Sets the maximum width of the sidebar tab bar.
   * This attribute takes effect only when the tab bar is displayed as a sidebar.
   *
   * @param { Optional<Length> } value - Maximum width of the sidebar tab bar. The width of the sidebar tab bar does
   *     not exceed this value.
   *     <br>If this attribute is not set or is set to **undefined**, no maximum width is imposed on the sidebar tab
   *     bar, which means the sidebar tab bar can be as wide as the **Tabs** component.
   *     <br>The set value is expected to be greater than or equal to that of
   *     [minSidebarWidth]{@link TabsAttribute#minSidebarWidth}.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  maxSidebarWidth(value: Optional<Length>): TabsAttribute;

  /**
   * Sets the minimum width of the content area of the **Tabs** component.
   * This attribute takes effect only when the tab bar is displayed as a sidebar.
   *
   * @param { Optional<Length> } value - Minimum width of the content area. The width of the content area does not
   *     become smaller than this value; if the remaining space is insufficient, the content area is clipped.
   *     <br>If this attribute is not set or is set to **undefined**, no minimum width is imposed on the content
   *     area, which means the content area can be compressed to **0vp**.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  minContentWidth(value: Optional<Length>): TabsAttribute;

  /**
   * Sets the background color of the sidebar tab bar.
   * This attribute takes effect only when the tab bar is displayed as a sidebar.
   *
   * @param { Optional<ResourceColor> } value - Background color of the sidebar tab bar.
   *     <br>Default value: **Color.Transparent**.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarBackgroundColor(value: Optional<ResourceColor>): TabsAttribute;

  /**
   * Sets the background blur style of the sidebar tab bar.
   * This attribute takes effect only when the tab bar is displayed as a sidebar.
   *
   * @param { Optional<BlurStyle> } value - Background blur style of the sidebar tab bar.
   *     <br>Default value: **BlurStyle.NONE**.
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarBackgroundBlurStyle(value: Optional<BlurStyle>): TabsAttribute;

  /**
   * Sets the divider between the sidebar tab bar and the content area.
   * This attribute takes effect only when the tab bar is displayed as a sidebar.
   *
   * @param { Optional<DividerStyle> } value - Divider style between the sidebar tab bar and the content area.
   *     The divider is displayed vertically, where **strokeWidth** is its width, and **startMargin** and
   *     **endMargin** are the distances from the top and bottom of the sidebar, respectively.
   *     <br>**DividerStyle**: divider style.<br>**undefined**: no divider is displayed (default).
   * @returns { TabsAttribute } - the attribute of the tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  sidebarDivider(value: Optional<DividerStyle>): TabsAttribute;
}

/**
 * Defines the information about the custom switching animation of **Tabs**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TabContentAnimatedTransition {
  /**
   * Timeout duration of the custom switching animation. If the developer has not called the **finishTransition** API of
   * [TabContentTransitionProxy]{@link TabContentTransitionProxy} to notify the **Tabs** component that the custom
   * animation has ended after this duration elapses, the component considers the custom animation ended and directly
   * performs subsequent operations.
   *
   * Default value: **1000**
   *
   * Unit: ms
   *
   * Value range: [0, +∞). If a value less than 0 is set, the default value is used.
   *
   * @default 1000 ms
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  timeout?: number;

  /**
   * Specific content of the custom switching animation.
   *
   * @type { function } [since 11 - 17]
   * @type { Callback<TabContentTransitionProxy> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  transition: Callback<TabContentTransitionProxy>;
}

/**
 * Implements the proxy object returned during the execution of the custom switching animation of the **Tabs**
 * component. You can use this object to obtain the information about the start and target pages of the custom
 * animation. You can also call the **finishTransition** API of this object to notify the **Tabs** component that the
 * custom animation has finished playing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TabContentTransitionProxy {
  /**
   * Index of the start page of the custom animation. The index starts from 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  from: number;

  /**
   * Index of the target page of the custom animation. The index starts from 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  to: number;

  /**
   * Notifies the **Tabs** component that the custom animation of this page has ended.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  finishTransition(): void;
}

/**
 * A container component that switches between content views via tabs, with each tab corresponding to a content view. It
 * is suitable for scenarios that require quick switching between different content views, such as the bottom navigation
 * bar of an app, top tab switching, and sidebar navigation. Using the **Tabs** component simplifies the implementation
 * of multi-view navigation and improves user switching efficiency.
 *
 * > **NOTE**
 * >
 * > - Since API version 11, this component supports the safe area avoidance feature. The default value of its
 * > [expandSafeArea]{@link CommonMethod#expandSafeArea} attribute is expandSafeArea([SafeAreaType.SYSTEM],
 * > [SafeAreaEdge.BOTTOM]). Developers can override this attribute to change the default behavior. For versions earlier
 * > than API version 11, the **expandSafeArea** attribute must be used to manually implement safe area avoidance.
 *
 * ###### Child Components
 *
 * Only the child component [TabContent]{@link ./tab_content} and the rendering control types
 * [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) and
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md) are supported. Custom components are not
 * recommended as child components. In addition, under **if/else** and **ForEach**, only **TabContent** is supported as
 * the child component, and custom components are not recommended as child components.
 *
 * > **NOTE**
 * >
 * > When the universal attribute [visibility]{@link CommonMethod#visibility} of a **Tabs** child component is set to
 * > None or Hidden, the corresponding child component is not displayed but still occupies space in the viewport.
 * >
 * > A displayed **Tabs** child component **TabContent** is not destroyed when it is subsequently hidden. If page lazy
 * > loading and release are required, see
 * > [Example 13](docroot://reference/apis-arkui/arkui-ts/ts-container-tabs.md#example-13-implementing-lazy-loading-and-resource-release-of-pages).
 * >
 * > When [height]{@link CommonMethod#height(value: Length)} of **Tabs** is set to auto, the height adapts to the child
 * > component height. When [width]{@link CommonMethod#width(value: Length)} is set to auto, the width adapts to the
 * > child component width.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Tabs: TabsInterface;

/**
 * Defines Tabs Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const TabsInstance: TabsAttribute;

/**
 * Sets the parameters of the **Tabs** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 * @noninterop
 */
declare type CommonModifier = import('../api/arkui/CommonModifier').CommonModifier;