/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import { SymbolGlyphModifier, DividerModifier } from './@ohos.arkui.modifier';
import { ColorMetrics, LengthMetrics } from './@ohos.arkui.node';
/**
 * 声明ToolBarV2ItemState枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export declare enum ToolBarV2ItemState {
  /**
   * 启用类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLE = 1,
  /**
   * 禁用类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  DISABLE = 2,
  /**
   * 激活类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ACTIVATE = 3
}

/**
 * 定义ToolBarV2的SymbolGlyph。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ObservedV2
export class ToolBarV2SymbolGlyph {
  /**
   * ToolBarV2普通图标的修饰符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  normal: SymbolGlyphModifier;
  /**
   * ToolBarV2激活图标的修饰符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  activated?: SymbolGlyphModifier;
  /**
   * 用于创建ToolBarV2SymbolGlyph对象的构造函数。
   *
   * @param { ToolBarV2SymbolGlyphOptions } options - symbol info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: ToolBarV2SymbolGlyphOptions);
}

/**
 * 声明ToolBarV2SymbolGlyph的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export interface ToolBarV2SymbolGlyphOptions {
  /**
   * ToolBarV2普通图标的修饰符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  normal: SymbolGlyphModifier;
  /**
   * ToolBarV2激活图标的修饰符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  activated?: SymbolGlyphModifier;
}

/**
 * 声明ToolBarV2ItemText类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 * @class ToolBarV2ItemText
 */
@ObservedV2
export declare class ToolBarV2ItemText {
  /**
   * 定义文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  text: ResourceStr;
  /**
   * 定义文本字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  color?: ColorMetrics;
  /**
   * 项被激活时的文本字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  activatedColor?: ColorMetrics;
  /**
   * ToolBarV2ItemText的构造函数。
   *
   * @param { ToolBarV2ItemTextOptions } options - text info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: ToolBarV2ItemTextOptions);
}

/**
 * 声明ToolBarV2ItemText的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export interface ToolBarV2ItemTextOptions {
  /**
   * 定义文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  text: ResourceStr;
  /**
   * 定义文本字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  color?: ColorMetrics;
  /**
   * 项被激活时的文本字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  activatedColor?: ColorMetrics;
}

/**
 * 定义ToolBarV2项的图标类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export declare type ToolBarV2ItemIconType = ToolBarV2ItemImage | ToolBarV2SymbolGlyph;

/**
 * 声明ToolBarV2ItemImage类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 * @class ToolBarV2ItemImage
 */
@ObservedV2
export declare class ToolBarV2ItemImage {
  /**
   * 定义图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  src: ResourceStr;
  /**
   * 定义图标填充颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  color?: ColorMetrics;
  /**
   * 项被激活时的图标填充颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  activatedColor?: ColorMetrics;
  /**
   * ToolBarV2ItemImage的构造函数。
   *
   * @param { ToolBarV2ItemImageOptions } options - 图标信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: ToolBarV2ItemImageOptions);
}

/**
 * 声明ToolBarV2ItemImage的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export interface ToolBarV2ItemImageOptions {
  /**
   * 定义图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  src: ResourceStr;
  /**
   * 定义图标填充颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  color?: ColorMetrics;
  /**
   * 项被激活时的图标填充颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  activatedColor?: ColorMetrics;
}

/**
 * 声明ToolBarV2Item类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 * @class ToolBarV2Item
 */
@ObservedV2
export declare class ToolBarV2Item {
  /**
   * 定义文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  content: ToolBarV2ItemText;
  /**
   * 定义点击事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  action?: ToolBarV2ItemAction;
  /**
   * 定义图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  icon?: ToolBarV2ItemIconType;
  /**
   * 定义项类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  state?: ToolBarV2ItemState;
  /**
   * 项的无障碍文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityText?: ResourceStr;
  /**
   * 项的无障碍描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityDescription?: ResourceStr;
  /**
   * 项的无障碍重要性级别。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityLevel?: string;
  /**
   * ToolBarV2Item的构造函数。
   *
   * @param { ToolBarV2ItemOptions } options - 子项信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: ToolBarV2ItemOptions);
}

/**
 * 声明ToolBarV2Item的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export interface ToolBarV2ItemOptions {
  /**
   * 定义文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  content: ToolBarV2ItemText;
  /**
   * 定义点击事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  action?: ToolBarV2ItemAction;
  /**
   * 定义图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  icon?: ToolBarV2ItemIconType;
  /**
   * 定义项类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  state?: ToolBarV2ItemState;
  /**
   * 项的无障碍文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;
  /**
   * 项的无障碍描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;
  /**
   * 项的无障碍重要性级别。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * 定义ToolBarV2Item的点击事件回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export type ToolBarV2ItemAction = (index: number) => void;

/**
 * 声明ToolBar中使用的ToolBarV2Modifier。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export declare class ToolBarV2Modifier {
  /**
   * 设置工具栏的高度。
   *
   * @param { LengthMetrics } height - toolBarV2's height.
   * @returns { ToolBarV2Modifier } returns the instance of the ToolBarV2Modifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  height(height: LengthMetrics): ToolBarV2Modifier;
  /**
   * 设置工具栏的背景色。
   *
   * @param { ColorMetrics } backgroundColor - toolBarV2's backgroundColor.
   * @returns { ToolBarV2Modifier } returns the instance of the ToolBarV2Modifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundColor(backgroundColor: ColorMetrics): ToolBarV2Modifier;
  /**
   * 设置工具栏的左右内边距。
   *
   * @param { LengthMetrics } padding - left and right padding.
   * @returns { ToolBarV2Modifier } returns the instance of the ToolBarV2Modifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  padding(padding: LengthMetrics): ToolBarV2Modifier;
  /**
   * 设置是否显示按压态效果。
   *
   * @param { boolean } stateEffect - press status effect.
   * @returns { ToolBarV2Modifier } returns the instance of the ToolBarV2Modifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  stateEffect(stateEffect: boolean): ToolBarV2Modifier;
}

/**
 * 工具栏用于展示针对当前界面内容的操作选项，在界面底部显示，适用于需要为用户提供快速操作入口的场景。底部最多显示5个入口，超过则收纳入“更多”子项中，在最右侧显示。
 * 适用于需要对当前页面内容进行快捷操作的场景，可帮助用户快速访问常用功能，提升操作效率。
 * 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，相较于
 * [状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)，状态管理（V2）增强了对数据对象的深度观察与管理能力，
 * 不再局限于组件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制工具栏的数据和状态，实现更高效的用户界面刷新。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 18开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果ToolBarV2设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，
 * >   编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到ToolBarV2本身。
 * >   这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议ToolBarV2设置通用属性和通用事件。
 * >
 * > - 当系统切换深浅色模式时，工具栏背景色不会自动跟随切换。
 *
 *
 * ###### 子组件
 *
 * 无
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ComponentV2
export declare struct ToolBarV2 {
  /**
   * 定义ToolBarV2项列表。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  toolBarList: ToolBarV2Item[];
  /**
   * 定义ToolBarV2激活项的索引，默认值为-1。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  activatedIndex?: number;
  /**
   * 定义分割线修饰符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  dividerModifier?: DividerModifier;
  /**
   * 定义ToolBarV2修饰符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  toolBarModifier?: ToolBarV2Modifier;
}