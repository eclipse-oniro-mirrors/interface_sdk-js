/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit AccessibilityKit
 */

import type accessibility from './@ohos.accessibility';
import type { KeyEvent } from './@ohos.multimodalInput.keyEvent';
/*** if arkts dynamic */
import type {
  AccessibilityElement as _AccessibilityElement,
  ElementAttributeValues as _ElementAttributeValues,
  FocusDirection as _FocusDirection,
  FocusType as _FocusType,
  WindowType as _WindowType,
  Rect as _Rect,
} from './application/AccessibilityExtensionContext';
import type * as _AccessibilityExtensionContext from './application/AccessibilityExtensionContext';
/*** endif */
/*** if arkts static */
import type {
  AccessibilityElement as _AccessibilityElement,
  FocusDirection as _FocusDirection,
  WindowType as _WindowType,
  Rect as _Rect,
} from './application/AccessibilityExtensionContext';
import AccessibilityExtensionContext from './application/AccessibilityExtensionContext';
/*** endif */
import { AccessibilityEventType } from './@ohos.accessibility';

/**
 * Indicates an accessibility element.
 * Supports querying element attributes, requesting execution actions, and finding child elements by condition.
 *
 * @typedef {_AccessibilityElement}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 * @since 20 static
 */
export type AccessibilityElement = _AccessibilityElement;

/**
 * Indicates the possible attributes of the element and the type of the attribute value.
 *
 * @typedef {_ElementAttributeValues}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamiconly
 */
export type ElementAttributeValues = _ElementAttributeValues;

/**
 * Indicates the direction of the search focus.
 *
 * @typedef {_FocusDirection}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 * @since 20 static
 */
export type FocusDirection = _FocusDirection;

/**
 * Indicates the key of the attribute value.
 *
 * @typedef {keyof ElementAttributeValues}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamiconly
 */
export type ElementAttributeKeys = keyof ElementAttributeValues;

/**
 * Indicates the type of the focus.
 *
 * @typedef {_FocusType}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamiconly
 */
export type FocusType = _FocusType;

/**
 * Indicates the type of the window.
 *
 * @typedef {_WindowType}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 * @since 20 static
 */
export type WindowType = _WindowType;

/**
 * Indicates rectangle.
 *
 * @typedef {_Rect}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 * @since 20 static
 */
export type Rect = _Rect;

/**
 * Indicates the parameter of the AccessibiltyAction.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 */
export { Parameter } from './application/AccessibilityExtensionContext';

/**
 * The accessibility extension context. Used to configure, query information, and inject gestures.
 *
 * @typedef {_AccessibilityExtensionContext.default}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 */
export type AccessibilityExtensionContext = _AccessibilityExtensionContext.default;

/**
 * The accessibility extension context. Used to configure, query information, and inject gestures.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 20 static
 */
export { AccessibilityExtensionContext };

/**
 * class of accessibility extension ability.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 20 static
 */
declare class AccessibilityExtensionAbility {
  /**
   * Indicates accessibility extension ability context.
   *
   * @type {AccessibilityExtensionContext}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 20 static
   */
  context: AccessibilityExtensionContext;

  /**
   * Called when extension ability is connected.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  onConnect(): void;

  /**
   * Called when extension ability is disconnected.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  onDisconnect(): void;

  /**
   * Called when an accessibility event occurs, such as when the user touches the application interface.
   *
   * @param { AccessibilityEvent } event Indicates an accessibility event.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  onAccessibilityEvent(event: AccessibilityEvent): void;

  /**
   * Called when a physical key is pressed, such as when the user presses the volume button .
   *
   * @param { KeyEvent } keyEvent Indicates the physical key event.
   * @returns { boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  onKeyEvent(keyEvent: KeyEvent): boolean;

  /**
   * Called when extension ability is connected.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic&static
   */
  onAccessibilityConnect(): void;

  /**
   * Called when extension ability is disconnected.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic&static
   */
  onAccessibilityDisconnect(): void;

  /**
   * Called when an accessibility event occurs, such as when the user touches the application interface.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { AccessibilityEventInfo } event Indicates an accessibility event.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic&static
   */
  onAccessibilityEventInfo(event: AccessibilityEventInfo): void;

  /**
   * Called when a physical key is pressed, such as when the user presses the volume button .
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { KeyEvent } keyEvent Indicates the physical key event.
   * @returns { boolean }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   */
  onAccessibilityKeyEvent(keyEvent: KeyEvent): boolean;
}

export default AccessibilityExtensionAbility;

/**
 * Indicates the accessibility event.
 * It provides the event type and the target element of the event if any.
 *
 * @typedef AccessibilityEventInfo
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic&static
 */
export declare interface AccessibilityEventInfo {
  /**
   * EventType
   *
   * @type { AccessibilityEventType }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic&static
   */
  eventType: AccessibilityEventType;

  /**
   * Target
   *
   * @type { ?AccessibilityElement }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic&static
   */
  target?: AccessibilityElement;

  /**
   * TimeStamp
   *
   * @type { ?long }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic&static
   */
  timestamp?: long;

  /**
   * The content of add/remove accessibility extraInfo text.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic&static
   */
  extraInfo?: string;
}

/**
 * Indicates the accessibility event.
 * It provides the event type and the target element of the event if any.
 *
 * @typedef AccessibilityEvent
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
export declare interface AccessibilityEvent {
  /**
   * EventType
   *
   * @type { accessibility.EventType | accessibility.WindowUpdateType | TouchGuideType | GestureType | PageUpdateType }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  eventType: accessibility.EventType | accessibility.WindowUpdateType | TouchGuideType | GestureType | PageUpdateType;

  /**
   * Target
   *
   * @type { ?AccessibilityElement }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  target?: AccessibilityElement;

  /**
   * TimeStamp
   *
   * @type { ?long }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  timeStamp?: long;

  /**
   * ElementId
   *
   * @type { ?long }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  elementId?: long;

  /**
   * The content of announce accessibility text.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  textAnnouncedForAccessibility?: string;

  /**
   * The content of add/remove accessibility extraInfo text.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 20 dynamiconly
   */
  extraInfo?: string;
}

/**
 * Indicates the gesture type.
 * value range: { 'left' | 'leftThenRight' | 'leftThenUp' | 'leftThenDown' |
 * 'right' | 'rightThenLeft' | 'rightThenUp' | 'rightThenDown' |
 * 'up' | 'upThenLeft' | 'upThenRight' | 'upThenDown' |
 * 'down' | 'downThenLeft' | 'downThenRight' | 'downThenUp' }
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
/**
 * Indicates the gesture type.
 * value range: { 'left' | 'leftThenRight' | 'leftThenUp' | 'leftThenDown' |
 * 'right' | 'rightThenLeft' | 'rightThenUp' | 'rightThenDown' |
 * 'up' | 'upThenLeft' | 'upThenRight' | 'upThenDown' |
 * 'down' | 'downThenLeft' | 'downThenRight' | 'downThenUp' |
 * 'twoFingerSingleTap' | 'twoFingerDoubleTap' | 'twoFingerDoubleTapAndHold' | 'twoFingerTripleTap' |
 * 'twoFingerTripleTapAndHold' | 'threeFingerSingleTap' | 'threeFingerDoubleTap' | 'threeFingerDoubleTapAndHold' |
 * 'threeFingerTripleTap' | 'threeFingerTripleTapAndHold' | 'fourFingerSingleTap' | 'fourFingerDoubleTap' |
 * 'fourFingerDoubleTapAndHold' | 'fourFingerTripleTap' | 'fourFingerTripleTapAndHold' |
 * 'threeFingerSwipeUp' | 'threeFingerSwipeDown' | 'threeFingerSwipeLeft' | 'threeFingerSwipeRight' |
 * 'fourFingerSwipeUp' | 'fourFingerSwipeDown' | 'fourFingerSwipeLeft' | 'fourFingerSwipeRight' }
* @typedef {'left' | 'leftThenRight' | 'leftThenUp' | 'leftThenDown' | 'right' | 'rightThenLeft' | 'rightThenUp' | 'rightThenDown' | 'up' | 'upThenLeft' | 'upThenRight' | 'upThenDown' | 'down' | 'downThenLeft' | 'downThenRight' | 'downThenUp' | 'twoFingerSingleTap' | 'twoFingerDoubleTap' | 'twoFingerDoubleTapAndHold' | 'twoFingerTripleTap' | 'twoFingerTripleTapAndHold' | 'threeFingerSingleTap' | 'threeFingerDoubleTap' | 'threeFingerDoubleTapAndHold' | 'threeFingerTripleTap' | 'threeFingerTripleTapAndHold' | 'fourFingerSingleTap' | 'fourFingerDoubleTap' | 'fourFingerDoubleTapAndHold' | 'fourFingerTripleTap' | 'fourFingerTripleTapAndHold' | 'threeFingerSwipeUp' | 'threeFingerSwipeDown' | 'threeFingerSwipeLeft' | 'threeFingerSwipeRight' | 'fourFingerSwipeUp' | 'fourFingerSwipeDown' | 'fourFingerSwipeLeft' | 'fourFingerSwipeRight'}
* @syscap SystemCapability.BarrierFree.Accessibility.Core
* @since 11 dynamiconly
*/
type GestureType = 'left' | 'leftThenRight' | 'leftThenUp' | 'leftThenDown' |
  'right' | 'rightThenLeft' | 'rightThenUp' | 'rightThenDown' |
  'up' | 'upThenLeft' | 'upThenRight' | 'upThenDown' |
  'down' | 'downThenLeft' | 'downThenRight' | 'downThenUp' |
  'twoFingerSingleTap' | 'twoFingerDoubleTap' | 'twoFingerDoubleTapAndHold' | 'twoFingerTripleTap' |
  'twoFingerTripleTapAndHold' | 'threeFingerSingleTap' | 'threeFingerDoubleTap' | 'threeFingerDoubleTapAndHold' |
  'threeFingerTripleTap' | 'threeFingerTripleTapAndHold' | 'fourFingerSingleTap' | 'fourFingerDoubleTap' |
  'fourFingerDoubleTapAndHold' | 'fourFingerTripleTap' | 'fourFingerTripleTapAndHold' |
  'threeFingerSwipeUp' | 'threeFingerSwipeDown' | 'threeFingerSwipeLeft' | 'threeFingerSwipeRight' |
  'fourFingerSwipeUp' | 'fourFingerSwipeDown' | 'fourFingerSwipeLeft' | 'fourFingerSwipeRight';

/**
 * Indicates the page update type.
 *
 * @typedef {'pageContentUpdate' | 'pageStateUpdate'}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
type PageUpdateType = 'pageContentUpdate' | 'pageStateUpdate';

/**
 * Indicates the type of touch event during touch browsing.
 *
 * @typedef {'touchBegin' | 'touchEnd'}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
type TouchGuideType = 'touchBegin' | 'touchEnd';
