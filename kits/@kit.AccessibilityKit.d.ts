/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit AccessibilityKit
 */

/*** if arkts 1.1&1.2 */
import config from '@ohos.accessibility.config';
import accessibility from '@ohos.accessibility';
/*** endif */
import { GesturePath } from '@ohos.accessibility.GesturePath';
import { GesturePoint } from '@ohos.accessibility.GesturePoint';
import AccessibilityExtensionAbility, {
  AccessibilityElement, AccessibilityExtensionContext, ElementAttributeKeys,
  ElementAttributeValues, FocusDirection, FocusType, Rect, WindowType, AccessibilityEvent, AccessibilityEventInfo,
  Parameter
} from '@ohos.application.AccessibilityExtensionAbility';
import { AccessibilityAction, AccessibilityEventType } from '@ohos.accessibility';
export {
  AccessibilityElement, AccessibilityExtensionAbility, AccessibilityExtensionContext,
  ElementAttributeKeys, ElementAttributeValues, FocusDirection, FocusType, GesturePath,
  GesturePoint, Rect, WindowType, accessibility, config, AccessibilityEvent, AccessibilityEventInfo,
  AccessibilityAction, AccessibilityEventType, Parameter
};

/*** if arkts 1.2 */
export { accessibility, config };
/*** endif */