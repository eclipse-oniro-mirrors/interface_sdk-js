/*
 * Copyright (c) 2024-2026 Huawei Device Co., Ltd.
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
import uiMaterial from './@ohos.arkui.uiMaterial';
/**
 * 工具栏子项状态枚举。
 *
 * | 名称       | 值 | 说明              |
 * | -------- | - | --------------- |
 * | ENABLE   | 1 | 工具栏子项为正常可点击状态。  |
 * | DISABLE  | 2 | 工具栏子项为不可点击状态。   |
 * | ACTIVATE | 3 | 工具栏子项为激活状态，可点击。 |
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
   * Enable type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLE = 1,
  /**
   * Disable type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  DISABLE = 2,
  /**
   * Activate type.
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
 * ToolBarV2SymbolGlyph定义Symbol图标的属性。
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
   * 工具栏symbol图标普通态样式。
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
   * 工具栏symbol图标激活态样式。
   *
   * 默认值：fontColor：$r('sys.color.icon_emphasize')，fontSize：24vp。
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
   * ToolBarV2SymbolGlyph的构造函数。
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
 * ToolBarV2SymbolGlyphOptions定义Symbol图标的属性。
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
   * Modifier of toolbarV2's normal symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  normal: SymbolGlyphModifier;
  /**
   * Modifier of toolbarV2's activated symbol.
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
 * 定义工具栏子项的文本。
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
   * 工具栏子项的文本。
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
   * 工具栏子项的文本的颜色。
   *
   * 默认值：$r('sys.color.font_primary')
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
   * 工具栏子项在激活态下文本的颜色。
   *
   * </div>默认值：$r('sys.color.font_emphasize')
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
 * 用于构建ToolBarV2ItemText对象。
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
   * 工具栏子项的文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  text: ResourceStr;
  /**
   * 工具栏子项的文本的颜色。
   *
   * 默认值：$r('sys.color.font_primary')
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  color?: ColorMetrics;
  /**
   * 工具栏子项在激活态下文本的颜色。
   *
   * 默认值：$r('sys.color.font_emphasize')
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
 * 工具栏子项图标内容的联合类型。
 *
 * @unionmember { ToolBarV2ItemImage } 用于定义普通图标。
 * @unionmember { ToolBarV2SymbolGlyph } 用于定义Symbol图标。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export declare type ToolBarV2ItemIconType = ToolBarV2ItemImage | ToolBarV2SymbolGlyph;

/**
 * 定义工具栏子项的普通图标。
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
   * 工具栏子项的图标。
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
   * 工具栏子项的图标的颜色。
   *
   * 默认值：$r('sys.color.icon_primary')
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
   * 工具栏子项在激活态下图标的颜色。
   *
   * 默认值：$r('sys.color.icon_emphasize')
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
   * @param { ToolBarV2ItemImageOptions } options - image info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: ToolBarV2ItemImageOptions);
}

/**
 * 用于构建ToolBarV2ItemImage对象。
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
   * 工具栏子项的图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  src: ResourceStr;
  /**
   * 工具栏子项的图标的颜色。
   *
   * 默认值：$r('sys.color.icon_primary')
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  color?: ColorMetrics;
  /**
   * 工具栏子项在激活态下图标的颜色。
   *
   * 默认值：$r('sys.color.icon_emphasize')
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
 * 定义工具栏子项。
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
   * Define text content.
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
   * Define the action event.
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
   * Define icon resource.
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
   * Define item type.
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
   * The accessibilityText of item.
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
   * The accessibilityDescription of item.
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
   * The accessibilityLevel of item.
   * 默认值："自动"。
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
   * @param { ToolBarV2ItemOptions } options - item info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: ToolBarV2ItemOptions);
}

/**
 * 用于构建ToolBarV2Item对象。
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
   * 工具栏子项的文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  content: ToolBarV2ItemText;
  /**
   * 工具栏子项点击事件。
   *
   * 默认无点击事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  action?: ToolBarV2ItemAction;
  /**
   * 工具栏子项的图标。
   *
   * 默认不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  icon?: ToolBarV2ItemIconType;
  /**
   * 工具栏子项的状态。
   *
   * 默认为ToolBarV2ItemState.ENABLE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  state?: ToolBarV2ItemState;
  /**
   * 工具栏子项的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本的内容，帮
   * 助屏幕朗读的使用者清楚地知道自己选中了什么组件。
   *
   * 默认值为当前项content属性内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;
  /**
   * 工具栏子项的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具
   * 备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值为“单指双击即可执行”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;
  /**
   * 工具栏子项无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   *
   * </div>支持的值为：
   *
   * "auto"：当前值转换为"yes"。
   *
   * "yes"：当前组件可被无障碍辅助服务所识别。
   *
   * "no"：当前组件不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值："auto"
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
 * 工具栏子项点击事件回调类型。
 *
 * @param { number } index - 触发点击事件的工具栏子项索引。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export type ToolBarV2ItemAction = (index: number) => void;

/**
 * ToolBarV2Modifier提供设置工具栏高度(height)、背景色(backgroundColor)、左右内边距（padding，仅在子项数量小于5个时生效）、是否显示按压态（stateEffect）的方法。
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
   * 设置工具栏高度的接口，调用该方法可自定义绘制，此高度不包含分割线高度。
   *
   * @param { LengthMetrics } height - toolBarV2's height.
   * @returns { ToolBarV2Modifier } 设置高度后的ToolBarV2Modifier对象，可用于链式调用其他方法进一步自定义工具栏样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  height(height: LengthMetrics): ToolBarV2Modifier;
  /**
   * 设置工具栏背景色的接口，调用该方法可自定义绘制。
   *
   * @param { ColorMetrics } backgroundColor - toolBarV2's backgroundColor.
   * @returns { ToolBarV2Modifier } 设置背景色后的ToolBarV2Modifier对象，可用于链式调用其他方法进一步自定义工具栏样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundColor(backgroundColor: ColorMetrics): ToolBarV2Modifier;
  /**
   * 设置工具栏左右内边距的接口，调用该方法可自定义绘制。
   *
   * @param { LengthMetrics } padding - left and right padding.
   * @returns { ToolBarV2Modifier } 设置内边距后的ToolBarV2Modifier对象，可用于链式调用其他方法进一步自定义工具栏样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  padding(padding: LengthMetrics): ToolBarV2Modifier;
  /**
   * 设置是否显示按压态效果的接口。
   *
   * @param { boolean } stateEffect - press status effect.
   * @returns { ToolBarV2Modifier } 设置按压态效果后的ToolBarV2Modifier对象，可用于链式调用其他方法进一步自定义工具栏样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  stateEffect(stateEffect: boolean): ToolBarV2Modifier;
}

/**
 * 定义工具栏项在工具栏中的放置位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare enum ToolBarV2ItemPlacement {
  /**
   * 中心区域。适用于主内容区域中显示的主要工具栏操作。一般项的默认位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  MAIN = 0,
  /**
   * 前半区。适合于导航或放置在主要内容之前的主要操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  LEADING = 1,
  /**
   * 后半区。适用于放置在主要内容之后的次要或溢出操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TRAILING = 2
}

/**
 * 定义高级工具栏项。
 *
 * 扩展{@link ToolBarV2Item}以高级布局功能，例如
 * 自定义生成器、标题配置、位置、显示优先级、
 * 激活的背景色、项目大小、分隔符、文本可见性、
 * 溢出菜单和项目分组。
 *
 * > **说明**
 * > 具有相同非空groupID的项组成一个组，组级
 * > 配置（位置、间距、容器样式）从
 * > 数组中包含groupID的第一项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class AdvancedToolBarV2Item extends ToolBarV2Item {
  /**
   * 工具栏项的自定义内容生成器。
   * 默认值：undefined。设置时，内容和图标将被忽略。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  builder?: CustomBuilder;
  /**
   * 定义高级工具栏V2标题设置。如果不提供，则不显示标题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  titleConfigs?: ToolBarV2TitleConfigs;
  /**
   * 工具栏项的放置位置。
   * 默认值：ToolBarV2ItemPlacement.MAIN。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  placement?: ToolBarV2ItemPlacement;
  /**
   * 布局容器中工具栏项的显示优先级。
   * 值越高，显示优先级越高。
   * 默认值：1。取值范围：[0, 10]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  displayPriority?: number;
  /**
   * 处于ACTIVATE状态的项目背景色（激活的背景色）。
   * 仅适用于仅有图标的项目，图标+文本项目不能设置背景颜色。
   * 默认值：undefined。未设置时无颜色。建议使用
   * $r（'sys.color.comp_background_emphasize'） （鸿蒙蓝色）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  activatedBackgroundColor?: ColorMetrics;
  /**
   * 工具栏项的唯一标识符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  id?: string;
  /**
   * 工具栏项的项大小（宽×高）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  itemSize?: Size;
  /**
   * 是否在该项后显示分隔符。
   * 如果为true，则在该项之后呈现分隔符（而不是在工具栏中的最后一项之后）。
   * 默认值：undefined。不设置时，默认为false，不显示分隔符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  isShowSeparator?: boolean;
  /**
   * 是否显示工具栏项的文本内容。
   * 当设置为false时，由content指定的文本不会在工具栏中呈现。
   * 针对项中仅需图标显示的场景使用。
   * 默认值：undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  isShowText?: boolean;
  /**
   * 此项中是否显示为工具栏的溢出菜单。
   * 默认值：undefined。不设置时默认为false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  isShowOverflowMenu?: boolean;
  /**
   * 组标识。相同非空groupID的项作为一个视觉群体。
   * 同一groupID的第一个项决定组的位置。
   * 默认值：undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  groupID?: string;
  /**
   * 此项目所属组的样式配置。
   * 相同groupID下第一个设置了groupStyle的样式配置生效；
   * 具有相同groupID的后续项上的值将被忽略。
   * 默认值：undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  groupStyle?: ToolBarV2ItemGroupStyle;
  /**
   * 用于创建AdvancedToolBarV2Item对象的构造函数。
   *
   * @param { AdvancedToolBarV2ItemParams } params - 构造参数信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: AdvancedToolBarV2ItemParams);
}

/**
 * 声明AdvancedToolBarV2Item的选项。
 *
 * 使用高级字段扩展按{@link ToolBarV2ItemOptions}。内容是
 * 作为必填字段继承；在项上使用isShowText来控制
 * 文本是否被渲染。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface AdvancedToolBarV2ItemParams extends ToolBarV2ItemOptions {
  /**
   * 工具栏项的自定义内容生成器。设置时，内容和图标将被忽略。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  builder?: CustomBuilder;
  /**
   * 定义高级工具栏V2标题设置。如果不提供，则不显示标题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  titleConfigs?: ToolBarV2TitleConfigs;
  /**
   * 工具栏项的放置位置。
   * 默认值：ToolBarV2ItemPlacement.MAIN。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  placement?: ToolBarV2ItemPlacement;
  /**
   * 布局容器中工具栏项的显示优先级。
   * 值越高，显示优先级越高。
   * 取值范围[0, 10]。
   * 默认值：1。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  displayPriority?: number;
  /**
   * 处于ACTIVATE状态的项目背景色（激活的背景色）。
   * 仅适用于仅有图标的项目，图标+文本项目不能设置背景颜色。
   * 建议使用$r('sys.color.comp_background_emphasize')。
   * 默认值：undefined，表示无颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  activatedBackgroundColor?: ColorMetrics;
  /**
   * 工具栏项的唯一标识符。
   * 默认值：undefined，表示未设置id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  id?: string;
  /**
   * 工具栏项的项大小（宽×高）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  itemSize?: Size;
  /**
   * 是否在该项后显示分隔符。
   * 如果为true，则在该项之后呈现分隔符（而不是在工具栏中的最后一项之后）。
   * 默认值：false，表示不显示分隔符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  isShowSeparator?: boolean;
  /**
   * 是否显示工具栏项的文本内容。
   * 当设置为false时，由content指定的文本不会在工具栏中呈现。
   * 针对项中仅需图标显示的场景使用。
   * 默认值：undefined。值为undefined或不设置时默认为true，表示同时存在图标和文本时文本可显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  isShowText?: boolean;
  /**
   * 此项中是否显示为工具栏的溢出菜单。
   * 默认值：undefined。值为undefined或不设置时默认为false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  isShowOverflowMenu?: boolean;
  /**
   * 组标识。相同非空groupID的项作为一个视觉群体。
   * 同一groupID的第一个项决定组的位置。
   * 默认值：undefined，表示没有groupID。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  groupID?: string;
  /**
   * 此项目所属组的样式配置。
   * 相同groupID下第一个设置了groupStyle的样式配置生效；
   * 具有相同groupID的后续项上的值将被忽略。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  groupStyle?: ToolBarV2ItemGroupStyle;
}

/**
 * ToolBar沿主轴的padding配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarV2PaddingOptions {
  /**
   * 主轴起点的Padding。
   * 水平时：左填充。垂直时：顶部填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  mainAxisStart?: LengthMetrics;
  /**
   * 主轴末端的Padding。
   * 水平时：右填充。垂直时：底部填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  mainAxisEnd?: LengthMetrics;
}

/**
 * 溢出菜单弹出窗口的样式配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarV2OverflowMenuStyle {
  /**
   * 溢出菜单项的字体配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  font?: Font;
  /**
   * 溢出菜单项的字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  fontColor?: ColorMetrics;
  /**
   * 溢出菜单圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  radius?: Dimension | BorderRadiuses;
  /**
   * 单个溢出菜单项之间的分隔线样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  menuItemDivider?: DividerStyleOptions;
  /**
   * 溢出菜单项组之间的分隔线样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  menuItemGroupDivider?: DividerStyleOptions;
}

/**
 * 定义ToolBarV2TitleStyle的构造函数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarV2TitleStyleOptions {
  /**
   * 标题文本的字体大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  fontSize?: LengthMetrics;
  /**
   * 标题文本颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  fontColor?: ColorMetrics;
  /**
   * 标题文本字重。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  fontWeight?: FontWeight;
  /**
   * 标题最小长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  minLength?: LengthMetrics;
}

/**
 * 标题文本样式配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class ToolBarV2TitleStyle {
  /**
   * 标题文本的字体大小。
   * 默认值为：undefined。值为undefined或不设置时，标题文本的默认颜色字体大小为20fp，
   * 副标题文本的默认颜色字体大小为14fp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  fontSize?: LengthMetrics;
  /**
   * 标题文本颜色。
   * 默认值：undefined。值为undefined或不设置时，标题文本的默认颜色为$r('sys.color.font_primary')，
   * 副标题文本的默认颜色为$r('sys.color.font_secondary')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  fontColor?: ColorMetrics;
  /**
   * 标题文本字重。
   * 默认值：undefined。值为undefined或不设置时，标题文本的默认颜色字重为FontWeight.Bold，
   * 副标题文本的默认颜色字重为FontWeight.Regular。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  fontWeight?: FontWeight;
  /**
   * 标题最小长度。
   * 默认值：undefined。值为undefined或不设置时默认为48vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  minLength?: LengthMetrics;
  /**
   * 构造ToolBarV2TitleStyle实例。
   *
   * @param { ToolBarV2TitleStyleOptions } [options] - 构造函数选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarV2TitleStyleOptions);
}

/**
 * 定义ToolBarV2TitleConfigs的构造函数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarV2TitleOptions {
  /**
   * 标题文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  content?: ResourceStr;
  /**
   * 副标题文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  subTitleContent?: ResourceStr;
  /**
   * 标题位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  placement?: ToolBarV2ItemPlacement;
  /**
   * 标题是否可见。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  visible?: boolean;
  /**
   * 标题文字样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  style?: ToolBarV2TitleStyle;
  /**
   * 副标题文字样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  subTitleStyle?: ToolBarV2TitleStyle;
}

/**
 * 标题配置。如果不提供，则不会渲染标题。
 *
 * 标题参与布局，与工具栏项处于同一级别。
 * 标题重用ToolBarV2ItemPlacement
 * 来确定渲染区域，并与具有相同位置的项目排列在同一区域。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class ToolBarV2TitleConfigs {
  /**
   * 标题文本内容。在构造ToolBarV2TitleConfigs时需要。
   * 默认值：undefined。不设置时，无内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  content: ResourceStr;
  /**
   * 副标题文本内容。
   * 默认值：undefined。不设置时，无内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  subTitleContent?: ResourceStr;
  /**
   * 标题位置。
   * 默认值：ToolBarV2ItemPlacement.LEADING。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  placement?: ToolBarV2ItemPlacement;
  /**
   * 标题是否可见。
   * 默认值: true。true表示标题可见，false表示标题不可见。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  visible?: boolean;
  /**
   * 标题文字样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  style?: ToolBarV2TitleStyle;
  /**
   * 副标题文字样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  subTitleStyle?: ToolBarV2TitleStyle;
  /**
   * 构造ToolBarV2TitleConfigs实例。
   *
   * @param { ToolBarV2TitleOptions } [options] - 构造函数选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarV2TitleOptions);
}

/**
 * 定义ToolBarV2ItemGroupStyle的构造函数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarV2ItemGroupStyleOptions {
  /**
   * 组在工具栏中的放置位置。
   * 组放置优先于组中单个项目的放置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  placement?: ToolBarV2ItemPlacement;
  /**
   * 组内项目之间的间距。
   * 默认值：0vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  space?: LengthMetrics;
  /**
   * 组容器的背景颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  backgroundColor?: ColorMetrics;
  /**
   * group容器的Padding。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  padding?: ToolBarV2PaddingOptions;
  /**
   * 组容器的边界边框圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderRadius?: LengthMetrics;
  /**
   * 组容器的边框宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderWidth?: LengthMetrics;
  /**
   * 组容器的圆角颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderColor?: ColorMetrics;
  /**
   * 是否显示组内项目的按压状态效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  stateEffect?: boolean;
}

/**
 * 定义工具栏项组的样式配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class ToolBarV2ItemGroupStyle {
  /**
   * 组在工具栏中的放置位置。
   * 组放置优先于组中单个项目的放置。
   * 默认值：ToolBarV2ItemPlacement.MAIN。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  placement?: ToolBarV2ItemPlacement;
  /**
   * 组内项目之间的间距。
   * 默认值：0vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  space?: LengthMetrics;
  /**
   * 组容器的背景颜色。
   * 默认值：值为undefined或不设置时，值为$r('sys.color.comp_background_primary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  backgroundColor?: ColorMetrics;
  /**
   * group容器的Padding。
   * 默认值：undefined。值为undefined或不设置时，默认值为12vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  padding?: ToolBarV2PaddingOptions;
  /**
   * 组容器的边界边框圆角半径。
   * 默认值：undefined。值为undefined或不设置时，默认值为工具栏交叉轴长度的一半。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  borderRadius?: LengthMetrics;
  /**
   * 组容器的边框宽度。
   * 默认值：undefined。值为undefined或不设置时，默认无宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  borderWidth?: LengthMetrics;
  /**
   * 组容器的圆角颜色。
   * 默认值：undefined。值为undefined或不设置时，默认无颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  borderColor?: ColorMetrics;
  /**
   * 是否显示组内项目的按压状态效果。
   * 默认值：true。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  stateEffect?: boolean;
  /**
   * 构造ToolBarV2ItemGroupStyle实例。
   *
   * @param { ToolBarV2ItemGroupStyleOptions } [options] - 构造函数选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarV2ItemGroupStyleOptions);
}

/**
 * 工具栏的系统材质样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @crossplatform
 * @since 26.1.0 dynamic
 */
export declare enum ToolBarV2MaterialStyle {
  /**
   * 无系统材质效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamic
   */
  NONE = 0,
  /**
   * 默认材质样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamic
   */
  DEFAULT = 1
}

/**
 * 定义ToolBarV2StyleConfigs的构造函数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarV2StyleOptions {
  /**
   * 工具栏内边距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  padding?: ToolBarV2PaddingOptions;
  /**
   * 工具栏背景颜色。
   * 默认值：undefined。不设置时，默认为$r('sys.color.comp_background_primary')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  backgroundColor?: ColorMetrics;
  /**
   * 工具栏背景模糊样式。
   * 默认值：undefined。不设置时，无模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  backgroundBlurStyle?: BlurStyle;
  /**
   * 工具栏的系统材质效果。
   * 默认值：undefined。值为undefined或不设置时，不开启系统材质。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamic
   */
  systemBackgroundMaterial?: uiMaterial.Material;
  /**
   * 工具栏的简化系统材质样式。
   * 如果两者systemBackgroundMaterial和systemMaterialStyle都设置了，
   * systemBackgroundMaterial优先生效。
   * 默认值：undefined。值为undefined或不设置时，默认为ToolBarV2MaterialStyle.NONE效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamic
   */
  systemMaterialStyle?: ToolBarV2MaterialStyle;
  /**
   * 工具栏的组间距。工具栏分组与分组之间、分组与独立项之间的间距。
   * 默认值: undefined。值为undefined或不设置时，默认间距为12vp，取值范围在[8vp, 20vp]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  groupSpace?: LengthMetrics;
  /**
   * 工具栏的项的大小。
   * 默认值：undefined。值为undefined或不设置时，主轴长56vp，交叉轴长48vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  itemSize?: Size;
  /**
   * 工具栏项里的文本的默认字体大小。
   * 默认值：undefined。值为undefined或不设置时，字体大小为$r('sys.float.ohos_id_text_size_caption')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  fontSize?: LengthMetrics;
  /**
   * 工具栏的边框宽度。
   * 默认值：undefined。值为undefined或不设置时，无宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderWidth?: LengthMetrics;
  /**
   * 工具栏的边框颜色。
   * 默认值：undefined。值为undefined或不设置时，无颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderColor?: ColorMetrics;
  /**
   * 工具栏的边框圆角半径。
   * 默认值：undefined。值为undefined或不设置时，圆角半径为工具栏交叉轴长度的一半。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  borderRadius?: LengthMetrics;
  /**
   * 是否使能按压效果。
   * 默认值：true。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  stateEffect?: boolean;
}

/**
 * 定义工具栏的样式配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class ToolBarV2StyleConfigs {
  /**
   * 工具栏内边距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  padding?: ToolBarV2PaddingOptions;
  /**
   * 工具栏背景颜色。
   * 默认值：undefined。值为undefined或不设置时，
   * 默认为$r('sys.color.comp_background_primary')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  backgroundColor?: ColorMetrics;
  /**
   * 工具栏背景模糊样式。
   * 默认值：undefined。值为undefined或不设置时，无模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  backgroundBlurStyle?: BlurStyle;
  /**
   * 工具栏的系统材质效果。
   * 默认值：undefined。不设置时，不系统材质。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamic
   */
  @Trace
  systemBackgroundMaterial?: uiMaterial.Material;
  /**
   * 工具栏的简化材质样式。
   * 如果两者systemBackgroundMaterial和systemMaterialStyle都设置了，
   * systemBackgroundMaterial优先生效。
   * 默认值：undefined。不设置时，默认为ToolBarV2MaterialStyle.NONE效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamic
   */
  @Trace
  systemMaterialStyle?: ToolBarV2MaterialStyle;
  /**
   * 工具栏的组间距。工具栏分组与分组之间、分组与独立项之间的间距。
   * 默认值: undefined。值为undefined或不设置时,默认间距为12vp，取值范围在[8vp, 20vp]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  groupSpace?: LengthMetrics;
  /**
   * 工具栏的项的大小。
   * 默认值：undefined。值为undefined或不设置时，主轴长56vp，交叉轴长48vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  itemSize?: Size;
  /**
   * 工具栏项里的文本的默认字体大小。
   * 默认值：undefined。值为undefined或不设置时，字体大小为$r('sys.float.ohos_id_text_size_caption')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  fontSize?: LengthMetrics;
  /**
   * 工具栏的边框宽度。
   * 默认值：undefined。值为undefined或不设置时，无宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  borderWidth?: LengthMetrics;
  /**
   * 工具栏的边框颜色。
   * 默认值：undefined。值为undefined或不设置时，无颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  borderColor?: ColorMetrics;
  /**
   * 工具栏的边框圆角半径。
   * 默认值：undefined。值为undefined或不设置时，圆角半径为工具栏交叉轴长度的一半。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  borderRadius?: LengthMetrics;
  /**
   * 是否使能按压效果。
   * 默认值：true。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  stateEffect?: boolean;
  /**
   * 构造ToolBarV2StyleOptions实例。
   *
   * @param { ToolBarV2StyleOptions } [options] - 构造函数选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarV2StyleOptions);
}

/**
 * ToolBarV2的高级修饰符。合并布局属性、样式配置、
 * 和溢出菜单样式到单个修饰符类中。
 *
 * 使用可链接的setter方法，这些方法接受原始配置对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export declare class AdvancedToolBarV2Modifier {
  /**
   * 设置工具栏沿布局方向的长度。
   *
   * 水平：控制宽度。垂直：控制高度。
   * 默认值：undefined。值为undefined或不设置时，默认占满。
   *
   * @param { LengthMetrics } value - 沿布局方向的长度值。
   * @returns { AdvancedToolBarV2Modifier } 返回用于链接的此修饰符。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  mainAxisLength(value: LengthMetrics): AdvancedToolBarV2Modifier;
  /**
   * 设置工具栏垂直于布局方向的宽度。
   *
   * 水平：控制高度。垂直：控制宽度。
   * 默认值：undefined。值为undefined或未设置时，值为56vp。
   *
   * @param { LengthMetrics } value - 垂直于布局方向的宽度值。
   * @returns { AdvancedToolBarV2Modifier } 返回用于链接的此修饰符。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  crossAxisLength(value: LengthMetrics): AdvancedToolBarV2Modifier;
  /**
   * 设置工具栏的布局方向。
   *
   * 默认值：undefined。值为undefined或未设置时，水平排列。
   *
   * @param { Axis } value - 方向值。
   * @returns { AdvancedToolBarV2Modifier } 返回用于链接的此修饰符。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  direction(value: Axis): AdvancedToolBarV2Modifier;
  /**
   * 设置工具栏样式配置。
   *
   * 控制背景、填充、groupSpace、边框和项目活动/禁用的颜色。
   *
   * @param { ToolBarV2StyleConfigs } styleConfigs - 样式配置对象。
   * @returns { AdvancedToolBarV2Modifier } 返回用于链接的此修饰符。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  style(styleConfigs: ToolBarV2StyleConfigs): AdvancedToolBarV2Modifier;
  /**
   * 设置溢出菜单弹出窗口的样式配置。
   *
   * @param { ToolBarV2OverflowMenuStyle } menuStyle - 溢出菜单样式配置对象。
   * @returns { AdvancedToolBarV2Modifier } 返回用于链接的此修饰符。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  overflowMenuStyle(menuStyle: ToolBarV2OverflowMenuStyle): AdvancedToolBarV2Modifier;
}

/**
 * 工具栏用于显示当前界面内容的操作选项。它显示在屏幕底部，适合需要为用户提供快速操作入口的场景。
 * 普通工具栏最多可以显示五个条目，超过的条目会被收起到“更多”项中，显示在最右侧。
 * 它适用于需要对当前页面内容进行快速操作的场景，帮助用户快速访问常用功能，提高操作效率。
 * ToolBarV2支持通过AdvancedToolBarV2Item（继承自ToolBarV2Item）配置高级工具栏项。
 * 配置了高级项的哦工具栏更加灵活，可以自定义标题、溢出菜单、条目分组等。
 * 该组件基于
 * [状态管理 （V2）](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2)实现。
 *  *与
 * [状态管理 （V1）](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1)相比，
 * 状态管理（V2）增强了对数据对象的深度观察和管理能力，不再局限于组件级别。使用状态管理（V2），开发者可以通过这个组件
 * 更灵活地控制工具栏的数据和状态，实现更高效的UI刷新。
 * <br>
 *
 * > **说明**
 * >
 * > - 该组件只能用于Stage模型。
 * >
 * > - 如果[通用属性]{@link ./@internal/component/ets/common}且
 * > [通用事件]{@link ./@internal/component/ets/common}为设置给**ToolBarV2**，编译工具链设置
 * > 会生成一个额外的节点__Common__，并将通用属性或通用事件附加到__Common__，而不是直接应用到**ToolBarV2**本身。
 * > 这可能导致通用属性或开发者设定的普遍事件不会生效或表现出意料之外的行为。因此，
 * > 不推荐为**ToolBarV2**设置通用属性和通用事件。
 * >
 * > - 当系统在明暗模式切换时，工具栏的背景颜色不会自动跟随开关。
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
   * 定义toolbarV2项目列表。使用ToolBarV2Item可构建普通工具栏。
   * AdvancedToolBarV2Item（继承自ToolBarV2Item）可用于更高级的布局场景，比如标题、溢出菜单以及项目分组。
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
   * 定义toolbarV2激活项的索引，默认值是-1。仅用于ToolBarV2Item组成的普通工具栏。
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
   * 定义toolbarV2分隔符修改器。仅用于ToolBarV2Item组成的普通工具栏。
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
   * 定义toolbarV2修改器，仅用于ToolBarV2Item组成的普通工具栏。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  toolBarModifier?: ToolBarV2Modifier;
  /**
   * 定义高级工具栏V2修饰符。合并布局属性、样式配置、
   * 和溢出菜单样式到单个修改器中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Param
  advancedToolBarModifier?: AdvancedToolBarV2Modifier;
}
