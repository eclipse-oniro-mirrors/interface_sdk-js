/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import { LengthMetrics, ColorMetrics } from '@ohos.arkui.node';
import { SymbolGlyphModifier } from 'ohos.arkui.modifier';
import { AdvancedToolBarV2Item, AdvancedToolBarV2Modifier } from '@ohos.arkui.advanced.ToolBarV2';

/**
 * 工具栏的拖拽状态回调，拖拽开始或结束时触发时使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare type ToolBarDragStateCallback = () => void;
/**
 * 相对于ToolBarContainer容器的拖拽偏移量回调。
 *
 * @param { number } x - X 轴偏移量，单位为 vp。
 * @param { number } y - Y 轴偏移量，单位为 vp。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare type ToolBarDragOffsetCallback = (x: number, y: number) => void;
/**
 *  工具栏状态变化时的回调。
 *
 * @param { ToolBarState } state - 当前工具栏状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare type ToolBarStateCallback = (state: ToolBarState) => void;
/**
 *  工具栏停靠到指定区域和方向时的回调。
 *
 * @param { DockArea } area - 工具栏停靠的区域。
 * @param { Axis } direction - 停靠方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare type ToolBarDockCallback = (area: DockArea, direction: Axis) => void;
/**
 * 定义工具栏接入智感握姿模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum HandednessAdaptationMode {
  /**
   * 工具栏不启用智感握姿。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  NONE = 0,
  /**
   * 工具栏适配启用默认智感握姿适配。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  DEFAULT = 1,
}
/**
 * 定义工具栏状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum ToolBarState {
  /**
   * 工具栏固定在当前位置
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  FIXED = 0,
  /**
   * 工具栏处于浮动状态，可被拖拽。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  FLOATING = 1,
  /**
   * 工具栏固定在当前位置
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  MINIMIZED = 2
}

/**
 * 定义浮动工具栏可停靠的区域。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum DockArea {
  /**
   * 停靠在顶部边缘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TOP = 0,
  /**
   * 停靠在底部边缘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  BOTTOM = 1,
  /**
   * 停靠在左侧边缘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  LEFT = 2,
  /**
   * 停靠在右侧边缘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  RIGHT = 3,
  /**
   * 停靠在左上角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TOP_LEFT = 4,
  /**
   * 停靠在右上角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TOP_RIGHT = 5,
  /**
   * 停靠在左下角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  BOTTOM_LEFT = 6,
  /**
   * 停靠在右下角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  BOTTOM_RIGHT = 7
}

/**
 * 定义浮动工具栏拖拽到角落时的吸附模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum DockCornerMode {
  /**
   * 吸附到角落并最小化；点击角落后跟随所在边缘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  MINIMIZED = 0,
  /**
   * 保持拖拽方向，不进行最小化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  EXPAND = 1
}

/**
 * 定义工具栏的安全区的内边距模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum ToolBarSafeAreaMode {
  /**
   *  不应用安全区内边距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  NONE = 0,
  /**
   * 应用等于安全区内边距的 padding。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  PADDING = 1,
  /**
   * 同时应用安全区内边距和额外的 padding。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  SAFEAREA_PADDING = 2
}

/**
 * 配置工具栏浮动行为的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarFloatingOptions {
  /**
   * 浮动工具栏是否可拖拽。默认值：true。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  draggable?: boolean;
  /**
   * 浮动工具栏允许停靠的区域。
   * 默认值：全部 8 个区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  dockAreas?: DockArea[];
  /**
   * 浮动工具栏悬浮球的最小化配置。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  minimizeConfigs?: ToolBarMinimizeConfigs;
  /**
   * 角落吸附模式：MINIMIZE（默认）吸附到角落并跟随所在边缘；EXPAND 保持拖拽方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  cornerMode?: DockCornerMode;
}

/**
 * 浮动工具栏行为的可观察配置存储，
 * 与 {@link ToolBarFloatingOptions} 对应。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export class ToolBarFloatingConfigs {
  /**
   * 浮动工具栏是否可拖拽。默认值：true。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  draggable?: boolean;
  /**
   * 浮动工具栏允许停靠的区域。
   * 默认值：全部 8 个区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  dockAreas?: DockArea[];
  /**
   * 最小化配置。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  minimizeConfigs?: ToolBarMinimizeConfigs;
  /**
   * 角落吸附模式：MINIMIZE（默认）吸附到角落并跟随所在边缘；EXPAND 保持拖拽方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  cornerMode?: DockCornerMode;
  /**
   * 构造函数。当 options 省略时，所有字段使用各自的默认值。
   *
   * @param { ToolBarFloatingOptions } [options] - 浮动行为选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarFloatingOptions);
}

/**
 * 配置工具栏最小化悬浮球的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarMinimizeOptions {
  /**
   * 文本标签。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  text?: ResourceStr;
  /**
   * 图标。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  icon?: ResourceStr | SymbolGlyphModifier;
  /**
   * 文本颜色。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  textColor?: ColorMetrics;
  /**
   * 图标颜色。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  iconColor?: ColorMetrics;
  /**
   * 自定义构建器。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  builder?: CustomBuilder;
  /**
   * 图标尺寸，单位为 vp。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  iconSize?: LengthMetrics;
  /**
   * 最小化悬浮球的直径。默认值：undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  buoySize?: LengthMetrics;
}

/**
 * 最小化悬浮球的可观察配置存储，
 * 与 {@link ToolBarMinimizeOptions} 对应。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export class ToolBarMinimizeConfigs {
  /**
   * 文本标签。默认值为空的 ResourceStr。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  text?: ResourceStr;
  /**
   * 图标。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  icon?: ResourceStr | SymbolGlyphModifier;
  /**
   * 文本颜色。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  textColor?: ColorMetrics;
  /**
   * 图标颜色。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  iconColor?: ColorMetrics;
  /**
   * 自定义构建器。默认值为 undefined。
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
   * 图标尺寸，单位为 vp。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  iconSize?: LengthMetrics;
  /**
   * 最小化悬浮球的直径。默认值：undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  buoySize?: LengthMetrics;
  /**
   * 构造函数.当 options 省略时，所有字段使用各自的默认值。
   *
   * @param { ToolBarMinimizeOptions } [options] - 最小化悬浮球选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarMinimizeOptions);
}

/**
 * 用于命令式操作工具栏停靠、固定和最小化状态控制器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export class ToolBarController {
  /**
   * 将浮动工具栏停靠到指定区域，可指定停靠方向。
   *
   * @param { DockArea } area - 要设置的停靠区域。
   * @param { Axis } [direction] - 停靠方向（可选）。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  setDock(area: DockArea, direction?: Axis): void;
  /**
   * 将工具栏固定为 FIXED 状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  pin(): void;
  /**
   * 取消固定工具栏，从 FIXED 状态切换为 FLOATING 状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  unpin(): void;
  /**
   * 将浮动工具栏最小化为悬浮球，从 FLOATING 切换为 MINIMIZED。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  minimize(): void;
  /**
   * 将最小化悬浮球恢复为浮动工具栏，从 MINIMIZED 切换为 FLOATING。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  restore(): void;
  /**
   * 获取当前工具栏状态。
   *
   * @returns { ToolBarState } 当前工具栏状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  getState(): ToolBarState;
  /**
   * 获取浮动工具栏当前停靠的区域。
   *
   * @returns { DockArea } 工具栏当前停靠的区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  getDockArea(): DockArea;
  /**
   * 获取浮动工具栏的停靠方向。
   *
   * @returns { Axis } 浮动工具栏的停靠方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  getDirection(): Axis;
}

/**
 * 工具栏初始位置参数，指定创建时的停靠区域、方向和状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarInitialParams {
  /**
   * 工具栏初始停靠的区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  dockArea: DockArea;
  /**
   * 工具栏初始停靠方向。默认值：由 {@link DockArea} 推导，角落默认为水平方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  direction?: Axis;
  /**
   * 工具栏初始状态。默认值：{@link ToolBarState.FLOATING}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  state?: ToolBarState;
}

/**
 * 用于工具栏拖拽、吸附以及状态回调合集。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export class ToolBarCallbacks {
  /**
   * 工具栏停靠到新区域时的回调。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onDock?: ToolBarDockCallback;
  /**
   * 用户开始拖拽工具栏时的回调。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onDragStart?: ToolBarDragStateCallback;
  /**
   * 拖拽过程中的回调，返回 X/Y 轴偏移量，单位为 vp。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onDrag?: ToolBarDragOffsetCallback;
  /**
   * 用户结束拖拽时的回调。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onDragEnd?: ToolBarDragStateCallback;
  /**
   * 工具栏状态变化时的回调。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onStateChange?: ToolBarStateCallback;
}

/**
 * 构造工具栏的参数，包括项列表、modifier、浮动配置和回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarParams {
  /**
   * 要显示的高级工具栏项列表。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  toolBarList: AdvancedToolBarV2Item[];
  /**
   * 初始位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  initialParams: ToolBarInitialParams;
  /**
   * 高级工具栏的 modifier。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  advancedToolBarModifier?: AdvancedToolBarV2Modifier;
  /**
   * 工具栏浮动行为配置。默认值：按 {@link ToolBarFloatingConfigs} 各字段默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  floatingConfigs?: ToolBarFloatingConfigs;
  /**
   * 控制器。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  controller?: ToolBarController;
  /**
   * 工具栏回调合集。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  callbacks?: ToolBarCallbacks;
}

/**
 * 工具栏的可观察配置存储，
 * 与 {@link ToolBarParams} 对应。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export class ToolBarConfigs {
  /**
   * 要显示的高级工具栏项列表。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  toolBarList: AdvancedToolBarV2Item[];
  /**
   * 高级工具栏的初始位置。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  initialParams: ToolBarInitialParams;
  /**
   * 高级工具栏的 modifier。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  advancedToolBarModifier?: AdvancedToolBarV2Modifier;
  /**
   * 高级工具栏的浮动配置。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  floatingConfigs?: ToolBarFloatingConfigs;
  /**
   * 控制器。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  controller?: ToolBarController;
  /**
   * 工具栏回调合集。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  callbacks?: ToolBarCallbacks;
  /**
   * 从给定参数构造工具栏配置。
   *
   * @param { ToolBarParams } params - 工具栏构造参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(params: ToolBarParams);
}

/**
 * 配置浮动工具栏各边停靠偏移量的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarDockOffsetOptions {
  /**
   * 顶部停靠偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  top?: LengthMetrics;
  /**
   * 右侧停靠偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  right?: LengthMetrics;
  /**
   * 底部停靠偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  bottom?: LengthMetrics;
  /**
   * 左侧停靠偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  left?: LengthMetrics;
}

/**
 * 配置工具栏各边安全区避让模式的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarSafeAreaOptions {
  /**
   * 顶部边缘的安全区避让模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  top?: ToolBarSafeAreaMode;
  /**
   * 右侧边缘的安全区避让模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  right?: ToolBarSafeAreaMode;
  /**
   * 底部边缘的安全区避让模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  bottom?: ToolBarSafeAreaMode;
  /**
   * 左侧边缘的安全区避让模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  left?: ToolBarSafeAreaMode;
}

/**
 * 配置工具栏容器的布局、安全区避让和握姿适配的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarContainerOptions {
  /**
   * 浮动工具栏的停靠偏移量。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  dockOffset?: ToolBarDockOffsetOptions;
  /**
   * 工具栏超长溢出时的避让间隔。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  gutter?: LengthMetrics;
  /**
   * 安全区避让模式。默认值：各边为 {@link ToolBarSafeAreaMode.NONE}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  safeArea?: ToolBarSafeAreaOptions;
  /**
   * 接入智感握姿模式。默认值：HandednessAdaptationMode.NONE。仅在单工具栏时生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  adaptToHandedness?: HandednessAdaptationMode;
}

/**
 * 工具栏容器的可观察配置存储，
 * 与 {@link ToolBarContainerOptions} 对应。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export class ToolBarContainerConfigs {
  /**
   * 停靠偏移量，单位为 vp。默认值：各边为 16vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  dockOffset?: ToolBarDockOffsetOptions;
  /**
   * 工具栏溢出时间隔，单位为 vp。默认值为 undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  gutter?: LengthMetrics;
  /**
   * 安全区模式。默认值：各边为 ToolBarSafeAreaMode.NONE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  safeArea?: ToolBarSafeAreaOptions;
  /**
   * 接入智感握姿模式。默认值：HandednessAdaptationMode.NONE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  adaptToHandedness?: HandednessAdaptationMode;
  /**
   * 构造函数。当 options 省略时，所有字段使用各自的默认值。
   *
   * @param { ToolBarContainerOptions } [options] - 容器选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarContainerOptions);
}

/**
 * ToolBarContainer 组件，用于承载一个或多个浮动工具栏，
 * 支持停靠、安全区避让和握姿适配。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ComponentV2
export struct ToolBarContainer {
  /**
   * 工具栏配置列表。最多支持 4 个工具栏，超出部分不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Require
  @Param
  toolbars: ToolBarConfigs[];
  /**
   * 容器级配置，包括停靠偏移量、安全区避让和握姿适配。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Param
  containerConfigs?: ToolBarContainerConfigs;
  /**
   * 组件中显示的内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @BuilderParam
  content: Callback<void>;
}
