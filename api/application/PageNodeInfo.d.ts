/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * @file Page Node Info
 * @kit AbilityKit
 */

/*** if arkts dynamic */
import type { AutoFillType } from './AutoFillType';
import type AutoFillRect from './AutoFillRect';
/*** endif */
/*** if arkts static */
import { AutoFillType } from './AutoFillType';
import AutoFillRect from './AutoFillRect';
/*** endif */

/**
 * PageNodeInfo defines the page node information used for auto-fill.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi [since 11 - 24]
 * @publicapi [since 26.0.0]
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
export default interface PageNodeInfo {
  /**
   * The id of page node.
   * The value should be an integer
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 11 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  id: int;

  /**
   * Depth of the page node, in px.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  depth: int;

  /**
   * The auto fill type of page node.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 11 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  autoFillType: AutoFillType;

  /**
   * Tag name of the page node, used to identify the component type of the node.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  tag: string;

  /**
   * Value currently displayed on the page node or entered by the user. This value is filled into the
   * corresponding node during auto-fill.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 11 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  value: string;

  /**
   * Placeholder text of the page node, usually displayed in the input control to prompt the user for
   * the expected input. It can help the auto-fill service identify the fill type.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 11 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  placeholder?: string;

  /**
   * Rule for auto-generating a password, used to specify the format and constraints of the generated password
   * (such as length and character types). It takes effect only when the auto-fill type is password.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  passwordRules?: string;

  /**
   * Status of the auto-fill feature. true if enabled, false otherwise.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  enableAutoFill: boolean;

  /**
   * The rect of page node.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 12 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  rect: AutoFillRect;

  /**
   * Whether the current node has focus. The value true indicates that the current node has focus,
   * and false indicates the opposite.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 12 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  isFocus: boolean;

  /**
   * Metadata of the page node, used to carry custom attributes or configuration information of the node to
   * help the auto-fill service perform more precise matching and filling. The default value is an empty string.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  metadata?: string;
}