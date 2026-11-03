'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * The exception prompt component is used to show an error message when an error arises.
 * 
 * > **NOTE**
 * >
 * > - If the **ExceptionPrompt** component has [universal attributes]{@link common} and 
 * > [universal events]{@link common} configured, the compiler toolchain automatically generates an additional 
 * > \_\_Common\_\_ node and mounts the universal attributes and universal events on this node rather than 
 * > the **ExceptionPrompt** component itself. As a result, the configured universal attributes and universal events 
 * > may fail to take effect or behave as intended. For this reason, avoid using universal attributes 
 * > and events with the **ExceptionPrompt** component.
 * 
 * ###### Child Components
 * 
 * Not supported
 * 
 * @file
 * @kit ArkUI
 */
import { ResourceStr, Dimension } from '@ohos.arkui.component';
import { PropRef } from '@ohos.arkui.stateManagement';
import { Component } from '@ohos.arkui.component';
import { SymbolGlyphModifier } from 'arkui.SymbolGlyphModifier';
import { Builder } from '@ohos.arkui.component';
/**
 * Control margin status of  ExceptionPrompt.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum MarginType {
  /**
   * Default margin of MarginType, Margin 1: references ohos_id_card_margin_start,
   * margin 2: references ohos_id_card_margin_end.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DEFAULT_MARGIN = 0,
  /**
   * Margins can be adapted of MarginType, Margin 1: references ohos_id_max_padding_start,
   * margin 2: references ohos_id_max_padding_end.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FIT_MARGIN = 1,
}
/**
 * Configuration parameter of ExceptionPrompt.
 *
 * @interface PromptOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface PromptOptions {
  /**
   * Icon of PromptOptions.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: ResourceStr;
  /**
   * SymbolGlyphModifier of PromptOptions.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  symbolStyle?: SymbolGlyphModifier;
  /**
   * Tip text of PromptOptions.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  tip?: ResourceStr;
  /**
   * Margin Type  of ExceptionPrompt.
   *
   * @type { MarginType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  marginType: MarginType;
  /**
   * Right icon button text of PromptOptions.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  actionText?: ResourceStr;
  /**
   * Distance from the top of PromptOptions.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  marginTop: Dimension
  /**
   * Control concealment of PromptOptions.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isShown?: boolean
}
/**
 * Declare struct ExceptionPrompt higher-order component.
 * 
 * @struct { ExceptionPrompt }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct ExceptionPrompt {
  /**
   * Configuration information of ExceptionPrompt.
   *
   * @type { PromptOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef options: PromptOptions;
  /**
   * Callback when clicking the text on the left.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onTipClick?: () => void;
  /**
   * Callback when click the icon button.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onActionTextClick?: () => void;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}