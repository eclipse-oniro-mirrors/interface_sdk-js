/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/*** if arkts 1.2 */
import { Scroller } from './scroll'
import { BarState } from './enums'
import { Optional, CommonMethod } from './common'
/*** endif */

/**
 * Content scroll direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Content scroll direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Content scroll direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum ScrollBarDirection {
  /**
   * Vertical scrolling is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Vertical scrolling is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Vertical scrolling is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Vertical,

  /**
   * Horizontal scrolling is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Horizontal scrolling is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Horizontal scrolling is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Horizontal,
}

/**
 * Defines the options of ScrollBar.
 *
 * @interface ScrollBarOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the options of ScrollBar.
 *
 * @interface ScrollBarOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of ScrollBar.
 *
 * @interface ScrollBarOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface ScrollBarOptions {
  /**
   * Sets the scroller of scroll bar.
   *
   * @type { Scroller }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the scroller of scroll bar.
   *
   * @type { Scroller }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the scroller of scroll bar.
   *
   * @type { Scroller }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  scroller: Scroller;

  /**
   * Sets the direction of scroll bar.
   *
   * @type { ?ScrollBarDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the direction of scroll bar.
   *
   * @type { ?ScrollBarDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the direction of scroll bar.
   *
   * @type { ?ScrollBarDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  direction?: ScrollBarDirection;

  /**
   * Sets the state of scroll bar.
   *
   * @type { ?BarState }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the state of scroll bar.
   *
   * @type { ?BarState }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the state of scroll bar.
   *
   * @type { ?BarState }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  state?: BarState;
}

/**
 * Provides interfaces for scroll bar.
 *
 * @interface ScrollBarInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides interfaces for scroll bar.
 *
 * @interface ScrollBarInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides interfaces for scroll bar.
 *
 * @interface ScrollBarInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ScrollBarInterface {
  /**
   * Called when a ScrollBar container is set.
   *
   * @param { ScrollBarOptions } value
   * @returns { ScrollBarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when a ScrollBar container is set.
   *
   * @param { ScrollBarOptions } value
   * @returns { ScrollBarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when a ScrollBar container is set.
   *
   * @param { ScrollBarOptions } value
   * @returns { ScrollBarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (value: ScrollBarOptions): ScrollBarAttribute;
}

/**
 * Defines the scrollbar attribute functions.
 *
 * @extends CommonMethod<ScrollBarAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the scrollbar attribute functions.
 *
 * @extends CommonMethod<ScrollBarAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the scrollbar attribute functions.
 *
 * @extends CommonMethod<ScrollBarAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class ScrollBarAttribute extends CommonMethod<ScrollBarAttribute> {
    /**
     * Called when setting whether to enable nested scroll.
     * @param { Optional<boolean> } enabled - Whether to enable nested scroll.
     * @returns { ScrollBarAttribute } The attribute of the scroll bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    enableNestedScroll(enabled: Optional<boolean>): ScrollBarAttribute;

    /**
     * Color of the scrollbar.
     *
     * @param { Optional<ColorMetrics> } color - Color of the scrollbar.
     * @returns { ScrollBarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollBarColor(color: Optional<ColorMetrics>): ScrollBarAttribute;
}

/**
 * Defines ScrollBar Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines ScrollBar Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines ScrollBar Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const ScrollBar: ScrollBarInterface;

/**
 * Defines ScrollBar Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines ScrollBar Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines ScrollBar Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const ScrollBarInstance: ScrollBarAttribute;
