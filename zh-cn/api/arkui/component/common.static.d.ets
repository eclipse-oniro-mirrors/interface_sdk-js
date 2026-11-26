'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { ComponentBuilder } from './builder';
import OriginalContext from '../../application/Context';
import { Resource } from '../../global/resource';
import pointer from '../../@ohos.multimodalInput.pointer';
import image from '../../@ohos.multimedia.image';
import unifiedDataChannel from '../../@ohos.data.unifiedDataChannel';
import promptAction, { LevelMode } from '../../@ohos.promptAction';
import uniformTypeDescriptor from '../../@ohos.data.uniformTypeDescriptor';
import Want from '../../@ohos.app.ability.Want';
import { IntentionCode } from '../../@ohos.multimodalInput.intentionCode';
import { SymbolGlyphModifier } from '../../arkui/SymbolGlyphModifier';
import { ImageModifier } from '../../arkui/ImageModifier';
import { CircleShape, EllipseShape, PathShape, RectShape } from '../../@ohos.arkui.shape';
import uiObserver from '@ohos.arkui.observer';
import { UIContext as _UIContext } from '../../@ohos.arkui.UIContext';
import { DrawContext as _DrawContext, LengthMetrics } from '../../arkui/Graphics';
import uiEffect from '../../@ohos.graphics.uiEffect';
import { FocusBoxStyle, FocusPriority } from "./focus";
import { ComponentContent } from '../../arkui/ComponentContent';
import { ResizableOptions } from "./image";
import intl from '../../@ohos.intl';
import { ButtonType, ButtonStyleMode, ButtonRole } from "./button";
import { Area, ResourceColor, Dimension, ResourceStr, Font, Length, EdgeColors, LocalizedEdgeColors, BorderRadiuses, EdgeWidths, LocalizedEdgeWidths, SizeOptions, Bias, EdgeStyles, Position, LocalizedBorderRadiuses, Margin, ChainWeightOptions, Padding, LocalizedPadding, LocalizedMargin, BorderOptions, OutlineOptions, EdgeOutlineStyles, EdgeOutlineWidths, OutlineRadiuses, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions, ConstraintSizeOptions, EdgeWidth, DirectionalEdgesT, VoidCallback, ColorMetrics, ColorFilter, AccessibilityActionOptions, ScrollBarMargin, Coordinate2D, AccessibilityCustomAction, AccessibilityNextFocusParams } from "./units";
import { BaseGestureEvent, GestureRecognizer, TouchRecognizer, GestureJudgeResult, GestureType, GestureMask, GestureHandler, GesturePriority, GestureInfo } from "./gesture";
import { ScrollState } from "./list";
import { AccessibilityHoverType, GestureCollectIntervention, Curve, PlayMode, SharedTransitionEffectType, KeySource, BorderStyle, HorizontalAlign, LocalizedAlignment, RenderStrategy, VerticalAlign, MouseButton, MouseAction, FontWeight, TouchType, FontStyle, Color, ColoringStrategy, Placement, ArrowPointPosition, ClickEffectLevel, NestedScrollMode, HitTestMode, AgentControlMode, Alignment, ImageRepeat, ImageSize, HoverEffect, Visibility, ItemAlign, Direction, Axis, GradientDirection, FunctionKey, ModifierKey, ObscuredReasons, RenderFit, LineCapStyle, LineJoinStyle, PixelRoundCalcPolicy, TextDecorationType, TextDecorationStyle, TextOverflow, KeyType, ResponseType, BarState, EdgeEffect, ScrollSource, InteractionHand, AxisAction, AxisType, AxisModel, CrownAction, FocusDrawLevel, CrownSensitivity, IlluminatedType, ResponseRegionSupportedTool, InputEventInterceptAction, GestureShortcut } from './enums';
import { TextRange } from "./textCommon";
import { StyledString } from "./styledString";
import { CustomBuilder, WrappedBuilder, CustomBuilderT } from './builder';
import { RecordData } from '../../@ohos.base';
import curves from '../../@ohos.curves';
import { TipsAnchorType, EdgeLightPosition, ShadowClipMode, VibrancyMode } from './enums';
import matrix4 from '../../@ohos.matrix4';
import { AvoidanceMode } from './select';
import uiMaterial from '../../@ohos.arkui.uiMaterial';
import { OnScrollFrameBeginCallback } from "./scroll";
import dragController from '../../@ohos.arkui.dragController';
/**
 * 计数器的配置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface InputCounterOptions {
    /**
     * thresholdPercentage是可输入字符数占最大字符限制的百分比值。字符计数器显示的样式为当前输入字符数/最大字符数。当输入字符数大于最大字符数乘百分比值时，显示字符计数器。
     * thresholdPercentage值的有效
     * 值区间为[1,100]，数值为小数时，向下取整，如果设置的number超出有效值区间内，不显示字符计数器。thresholdPercentage设置为undefined，显示字符计数器，但此参数不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    thresholdPercentage?: double;
    /**
     * 如果用户设置计数器时不设置InputCounterOptions，那么当前输入字符数达到最大字符数时，边框和计数器下标将变为红色。如果用户设置显示字符计数器同时thresholdPercentage参数数值在有效区间内，
     * 那么当输入
     * 字符数超过最大字符数时，边框和计数器下标将变成红色。如果此参数为true，则显示红色边框，参数为false则不显示。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    highlightBorder?: boolean;
    /**
     * 设置组件中字符计数器的文本颜色。当用户输入字符数大于最大字符数乘百分比值时，计数器会显示当前输入的字符数，并且计数器的文本颜色为counterTextColor指定的颜色。如果不设置counterTextColor，
     * 则计数器的文本
     * 颜色为默认颜色，默认颜色为灰色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    counterTextColor?: ColorMetrics

    /**
     * 设置组件中字符计数器在溢出时的文本颜色。当用户输入的字符数超过计数器最大长度时，计数器的文本颜色和边框的颜色会切换为counterTextOverflowColor指定的颜色，以提醒用户输入已超出限制。
     * 如果不设置counterTextOverflowColor，则计数器和边框在溢出时的文本颜色为默认颜色，默认颜色为红色。
     * **说明：**
     * 当设置了[InputCounterOptions]{@link InputCounterOptions}的highlightBorder属性时，边框颜色才会被同步更改。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    counterTextOverflowColor?: ColorMetrics
}
/**
 * 文本装饰线的配置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextDecorationOptions {
    /**
     * 文本装饰线类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: TextDecorationType | undefined;
    /**
     * 文本装饰线颜色。
     * 默认值：Color.Black。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * 文本装饰线样式。
     * 默认值：TextDecorationStyle.SOLID。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style?: TextDecorationStyle;
    /**
     * 文本装饰线的粗细缩放比例。
     * 取值约束：负值按默认值处理。默认值：1。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    thicknessScale?: double;
}
/**
 * 分割线样式对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DividerStyle {
    /**
     * 分割线的线宽（不支持百分比设置）。
     *
     * 默认值：0.0
     *
     * 单位：vp
     *
     * 取值范围：[0, +∞)。设置为小于0的值时，按默认值显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeWidth: Length | undefined;
    /**
     * 分割线的颜色。
     *
     * 默认值：#33182431
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * 分割线与侧边栏顶端的距离（不支持百分比设置）。
     *
     * 默认值：0.0
     *
     * 单位：vp
     *
     * 取值范围：[0, +∞)。设置为小于0的值时，按默认值显示。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    startMargin?: Length;
    /**
     * 分割线与侧边栏底端的距离（不支持百分比设置）。
     *
     * 默认值：0.0
     *
     * 单位：vp
     *
     * 取值范围：[0, +∞)。设置为小于0的值时，按默认值显示。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    endMargin?: Length;
}
/**
 * 该接口定义非number数据类型的动画运算规则。对非number类型的数据（如数组、结构体、颜色等）做动画，需要实现AnimatableArithmetic\<T\>接口中加法、减法、乘法和判断相等函数，使得该数据能参与动画的插值运算
 * 和识别该数据是否发生改变。即定义它们为实现了AnimatableArithmetic\<T\>接口的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AnimatableArithmetic<T> {
    /**
     * 定义数据类型的加法运算规则。
     *
     * @param { AnimatableArithmetic<T> } rhs - 加法运算的对象。
     * @returns { AnimatableArithmetic<T> } 加法运算的结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    plus(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;
    /**
     * 定义该数据类型的减法运算规则。
     *
     * @param { AnimatableArithmetic<T> } rhs - 减法运算的对象。
     * @returns { AnimatableArithmetic<T> } 减法运算的结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    subtract(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;
    /**
     * 定义该数据类型的乘法运算规则。
     *
     * @param { double } scale - 乘法运算的系数。
     * @returns { AnimatableArithmetic<T> } 乘法运算的结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    multiply(scale: double): AnimatableArithmetic<T>;
    /**
     * 定义该数据类型的相等判断规则。
     *
     * @param { AnimatableArithmetic<T> } rhs - 和自身比较相等的另一个数据对象。
     * @returns { boolean } 是否相等。返回true表示相等，返回false表示不相等。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    equals(rhs: AnimatableArithmetic<T>): boolean;
}
/**
  * 获取复用标识ID的回调方法。
  *
  * @returns { string } 复用标识ID，由开发者指定。
  *     未指定或使用空字符串`''`作为复用标识ID时，将默认使用自定义组件名。
  *     在API版本26.0.0之前，当该回调不是显式返回字符串字面量时，实际复用标识ID将为自定义组件名，回调返回值不生效；在API版本26.0.0及以后，回调的实际返回结果将作为复用标识ID。
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
export type ReuseIdCallback = () => string;
/**
 * 定义复用的配置参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ReuseOptions {
    /**
     * 定义reuseId函数。默认的reuseId为自定义组件名。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reuseId?: ReuseIdCallback;
}
/**
 * Export Context.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Context = OriginalContext;
/**
 * 数据类型。用于设置颜色模式和字体缩放倍数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Configuration {
    /**
     * 颜色模式。
     *
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly colorMode: string;
    /**
     * 字体缩放。
     *
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly fontScale: double;
}
/**
 * 矩形区域类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Rectangle {
    /**
     * 触摸点相对于组件左上角的x轴坐标。
     * 默认值：0vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: Length;
    /**
     * 触摸点相对于组件左上角的y轴坐标。
     * 默认值：0vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: Length;
    /**
     * 触摸热区的宽度。
     * 默认值：'100%'
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Length;
    /**
     * 触摸热区的高度。
     * 默认值：'100%'
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: Length;
}
/**
 * 由输入工具类型、触摸位置和大小组成的触摸热区。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ResponseRegion {
  /**
   * 触摸热区适用的输入工具类型。
   * 默认值：ResponseRegionSupportedTool.ALL
   *
   * @default ResponseRegionSupportedTool.ALL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  tool?: ResponseRegionSupportedTool;

  /**
   * 触摸点相对于组件左上角的x轴坐标。
   * 默认值：LengthMetrics.vp(0)
   *
   * @default LengthMetrics.vp(0)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  x?: LengthMetrics;

  /**
   * 触摸点相对于组件左上角的y轴坐标。
   * 默认值：LengthMetrics.vp(0)
   *
   * @default LengthMetrics.vp(0)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  y?: LengthMetrics;

  /**
   * 触摸热区的宽度。
   * 默认值：LengthMetrics.percent(1)
   *
   * @default LengthMetrics.percent(1)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width?: LengthMetrics | string;

  /**
   * 触摸热区的高度。
   * 默认值：LengthMetrics.percent(1)
   *
   * @default LengthMetrics.percent(1)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height?: LengthMetrics | string;
}
/**
 * 设置动画期望的帧率。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ExpectedFrameRateRange {
    /**
     * 期望的最小帧率，单位为帧/秒（fps）。
     * 
     * 取值范围为[0, 设备最大帧率]。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    min: int;
    /**
     * 期望的最大帧率，单位为帧/秒（fps）。
     * 
     * 取值范围为[min, 设备最大帧率]。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    max: int;
    /**
     * 期望的最优帧率，单位为帧/秒（fps）。
     * 
     * 取值范围为[min, max]。设置为0时，将跟随应用的帧率。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    expected: int;
}
/**
 * 全局$r函数。
 *
 * @param { string } value
 * @param { RecordData[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function $r(value: string, ...params: RecordData[]): Resource;
/**
 * 全局$rawfile函数。
 *
 * @param { string } value 项目resources/rawfile目录下文件的名称。
 *     引用Resource类型的资源时，需确保数据类型与属性方法的数据类型一致。
 *     例如，属性方法支持string | Resource类型时，Resource类型的数据类型必须为string。
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function $rawfile(value: string): Resource;
/**
 * 当前跨进程嵌入式显示的组件和宿主应用的同page模式。
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AccessibilitySamePageMode {
    /**
    * 跨进程嵌入式显示的组件拉起来的进程的page事件中如果是首次加载页面或者该事件页面的根节点发送的page事件会被忽略。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SEMI_SILENT = 0,
    /**
     * 跨进程嵌入式显示的组件将忽略所有的page事件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FULL_SILENT = 1
}
/**
 * 定义组件的屏幕朗读功能角色类型。
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AccessibilityRoleType {
    /**
    * 列表弹窗。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ACTION_SHEET = 0,
    /**
    * 显示警告弹窗组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ALERT_DIALOG = 1,
    /**
    * 索引器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    INDEXER_COMPONENT = 2,
    /**
    * 信息标记组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    BADGE_COMPONENT = 3,
    /**
    * 空白填充组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    BLANK = 4,
    /**
    * 按钮。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    BUTTON = 5,
    /**
    * 大图页返回按钮。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    BACK_BUTTON = 6,
    /**
    * 滑动条。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SHEET_DRAG_BAR = 7,
    /**
    * 日历选择器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CALENDAR_PICKER = 8,
    /**
    * 日历。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CALENDAR = 9,
    /**
    * 提供画布组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CANVAS = 10,
    /**
    * 渐变对象。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CANVAS_GRADIENT = 11,
    /**
    * 通过指定图像和重复方式创建图片填充的模板。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CANVAS_PATTERN = 12,
    /**
    * 提供多选框组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CHECKBOX = 13,
    /**
    * 多选框群组。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CHECKBOX_GROUP = 14,
    /**
    * 用于绘制圆形的组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CIRCLE = 15,
    /**
    * 将子组件纵向布局，并在每个子组件之间插入一根横向的分割线。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    COLUMN_SPLIT = 16,
    /**
    * 沿垂直方向布局的容器。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    COLUMN = 17,
    /**
    * 用于在画布组件上绘制矩形、文本、图片等。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CANVAS_RENDERING_CONTEXT_2D = 18,
    /**
    * 图表组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CHART = 19,
    /**
    * 计数器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
     * @since 23 static
    */
    COUNTER = 20,
    /**
    * 模态容器。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CONTAINER_MODAL = 21,
    /**
    * 数据面板组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    DATA_PANEL = 22,
    /**
    * 选择日期的滑动选择器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    DATE_PICKER = 23,
    /**
    * 弹出框。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    DIALOG = 24,
    /**
    * 提供分隔器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    DIVIDER = 25,
    /**
    * 拖拽条。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    DRAG_BAR = 26,
    /**
    * 特效合并容器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    EFFECT_COMPONENT = 27,
    /**
    * 椭圆绘制组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ELLIPSE = 28,
    /**
    * 以弹性方式布局子组件的容器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    FLEX = 29,
    /**
    * 瀑布流组件的子组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    FLOW_ITEM = 30,
    /**
    * 提供卡片组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    FORM_COMPONENT = 31,
    /**
    * 静态卡片交互组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    FORM_LINK = 32,
    /**
    * 数据量规图表组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    GAUGE = 33,
    /**
    * 网格容器。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    GRID = 34,
    /**
    * 栅格子组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    GRID_COL = 35,
    /**
    * 纵向排布栅格布局容器。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    GRID_CONTAINER = 36,
    /**
    * 网格容器中单项内容容器。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    GRID_ITEM = 37,
    /**
    * 栅格容器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    GRID_ROW = 38,
    /**
    * 超链接组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    HYPERLINK = 39,
    /**
    * 图片组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    IMAGE = 40,
    /**
    * 提供帧动画组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    IMAGE_ANIMATOR = 41,
    /**
    * 存储canvas渲染的像素数据。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    IMAGE_BITMAP = 42,
    /**
    * 存储canvas渲染的像素数据。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    IMAGE_DATA = 43,
    /**
    * 用于显示行内图片。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    IMAGE_SPAN = 44,
    /**
    * 标签。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    LABEL = 45,
    /**
    * 线型。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    LINE = 46,
    /**
    * 列表。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    LIST = 47,
    /**
    * 用来展示列表具体item。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    LIST_ITEM = 48,
    /**
    * 用来展示列表item分组。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    LIST_ITEM_GROUP = 49,
    /**
    * 用于显示加载动效的组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    LOADING_PROGRESS = 50,
    /**
    * 跑马灯组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    MARQUEE = 51,
    /**
    * 矩阵对象。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    MATRIX2D = 52,
    /**
    * 菜单。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    MENU = 53,
    /**
    * 菜单项。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    MENU_ITEM = 54,
    /**
    * 菜单项分组。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    MENU_ITEM_GROUP = 55,
    /**
    * 显示Navigation的内容区。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    NAV_DESTINATION = 56,
    /**
    * 导航组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    NAV_ROUTER = 57,
    /**
    * 路由导航的根视图容器。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    NAVIGATION = 58,
    /**
    * 导航栏。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    NAVIGATION_BAR = 59,
    /**
    * 导航菜单。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    NAVIGATION_MENU = 60,
    /**
    * 路由容器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    NAVIGATOR = 61,
    /**
    * 用于自定义绘制图形。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    OFFSCREEN_CANVAS = 62,
    /**
    * 2D绘制对象，用于在画布组件上绘制矩形、文本、图片等。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    OFFSCREEN_CANVAS_RENDERING_CONTEXT2D = 63,
    /**
    * 具体项目。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    OPTION = 64,
    /**
    * 可滑动面板。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PANEL = 65,
    /**
    * 页面。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PAPER_PAGE = 66,
    /**
    * 路径绘制组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PATH = 67,
    /**
    * 路径对象。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PATH2D = 68,
    /**
    * 图案密码锁组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PATTERN_LOCK = 69,
    /**
    * 选择器。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PICKER = 70,
    /**
    * 选择器视图。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PICKER_VIEW = 71,
    /**
    * 新增插件组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PLUGIN_COMPONENT = 72,
    /**
    * 多边形绘制组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    POLYGON = 73,
    /**
    * 折线绘制组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    POLYLINE = 74,
    /**
    * 显示特定样式气泡。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    POPUP = 75,
    /**
    * 进度条组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PROGRESS = 76,
    /**
    * 二维码。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    QRCODE = 77,
    /**
    * 单选框。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    RADIO = 78,
    /**
    * 提供在给定范围内选择评分的组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    RATING = 79,
    /**
    * 矩形绘制组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    RECT = 80,
    /**
    * 下拉刷新容器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    REFRESH = 81,
    /**
    * 相对布局组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    RELATIVE_CONTAINER = 82,
    /**
    * 远程控制窗口组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    REMOTE_WINDOW = 83,
    /**
    * 支持图文混排和文本交互式编辑的组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    RICH_EDITOR = 84,
    /**
    * 富文本组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    RICH_TEXT = 85,
    /**
    * 分页。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ROLE_PAGER = 86,
    /**
    * 沿水平方向布局容器。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ROW = 87,
    /**
    * 将子组件横向布局，并在每个子组件之间插入一根纵向的分割线。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ROW_SPLIT = 88,
    /**
    * 可滚动的容器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SCROLL = 89,
    /**
    * 滚动条。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SCROLL_BAR = 90,
    /**
    * 搜索框组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SEARCH = 91,
    /**
    * 搜索框。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SEARCH_FIELD = 92,
    /**
    * 下拉选择菜单组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SELECT = 93,
    /**
    * 绘制组件的父组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SHAPE = 94,
    /**
    * 提供侧边栏可以显示和隐藏的侧边栏容器。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SIDEBAR_CONTAINER = 95,
    /**
    * 滑动条组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SLIDER = 96,
    /**
    * 用于显示行内文本的组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SPAN = 97,
    /**
    * 堆叠容器。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    STACK = 98,
    /**
    * 步骤导航器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    STEPPER = 99,
    /**
    * 用作Stepper组件的页面子组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    STEPPER_ITEM = 100,
    /**
    * 滑块视图容器。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SWIPER = 101,
    /**
    * 定义 Swiper 组件的导航指示器。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SWIPER_INDICATOR = 102,
    /**
    * 开关。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SWITCH = 103,
    /**
    * 显示图标小符号的组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SYMBOL_GLYPH = 104,
    /**
    * 仅在Tabs中使用，对应一个切换页签的内容视图。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TAB_CONTENT = 105,
    /**
    * 页签栏。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TAB_BAR = 106,
    /**
    * 通过页签进行内容视图切换的容器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TABS = 107,
    /**
    * 文本。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT = 108,
    /**
    * 文本时钟组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_CLOCK = 109,
    /**
    * 文本输入。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_ENTRY = 110,
    /**
    * 输入框组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_INPUT = 111,
    /**
    * 文本类滑动选择器组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_PICKER = 112,
    /**
    * 通过文本显示计时信息并控制其计时器状态的组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_TIMER = 113,
    /**
    * 输入区域组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_AREA = 114,
    /**
    * 文本框。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_FIELD = 115,
    /**
    * 时间选择组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TIME_PICKER = 116,
    /**
    * 标题栏。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TITLE_BAR = 117,
    /**
    * 状态组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TOGGLER = 118,
    /**
    * 用户界面扩展组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    UI_EXTENSION_COMPONENT = 119,
    /**
    * 用于播放视频文件并控制其播放状态的组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    VIDEO = 120,
    /**
    * 瀑布流容器。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    WATER_FLOW = 121,
    /**
    * 加载网页组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    WEB = 122,
    /**
    * 自定义渲染。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    XCOMPONENT = 123,
    /**
    * 不设置特定的无障碍组件类型，组件按照自身默认类型进行屏幕朗读播报。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ROLE_NONE = 124
}
/**
 * 定义onAccessibilityFocus中使用的回调类型。
 * @param {boolean} isFocus - 用于表示组件是否获焦。<br>true：当前组件获焦。<br>false：当前组件失焦。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type AccessibilityFocusCallback = (isFocus: boolean) => void;

/**
 * 辅助功能操作类型的枚举
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AccessibilityAction {
  /**
  * 未定义的操作类型
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
  UNDEFINED_ACTION = 0,
  /**
  * 辅助功能单击操作
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
  ACCESSIBILITY_CLICK = 1,
}

/**
 * intercept action的枚举
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AccessibilityActionInterceptResult {
  /**
  * 拦截无障碍Action
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
  ACTION_INTERCEPT = 0,
  /**
  * continue action动作
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
  ACTION_CONTINUE = 1,
  /**
  * 需要冒泡向上透传的类型枚举
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
  ACTION_RISE = 2,
}

/**
 * 定义onAccessibilityActionIntercept中使用的回调类型。
 * @param { AccessibilityAction } action - 当前触发的无障碍控制操作类型。
 * @returns { AccessibilityActionInterceptResult } - 无障碍控制操作拦截结果，用于决定是否拦截当前组件的无障碍控制操作及后续处理方式。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type AccessibilityActionInterceptCallback = (action: AccessibilityAction) => AccessibilityActionInterceptResult;

/**
 * 动画中定义onFinish回调的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FinishCallbackType {
    /**
     * 当整个动画结束并立即删除时，将触发回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    REMOVED = 0,
    /**
     * 当动画在逻辑上处于下降状态，但可能仍处于其长尾状态时，将触发回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LOGICALLY = 1
}
/**
 * 事件派发策略。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TouchTestStrategy {
    /**
     * 自定义分发不产生影响，系统按当前节点命中状态分发事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 应用指定将事件分发到某个子节点，系统决定是否继续向其他兄弟节点分发事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FORWARD_COMPETITION = 1,
    /**
     * 应用指定将事件分发到某个子节点，系统不再将事件分发到其他兄弟节点。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FORWARD = 2
}
/**
 * 动画效果相关参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AnimateParam {
    /**
     * 动画持续时间，单位为毫秒。
     * 
     * 默认值：1000
     * 
     * **说明**：1. API版本26.0.0之前，在ArkTS卡片上最大动画持续时间为1000毫秒，若超出则固定为1000毫秒。从API版本26.0.0开始，在ArkTS卡片上最大动画持续时间调整为2000毫秒。
     * 
     * 2. 可以通过在持续时间为0的动画闭包函数中改变属性，以实现停止该属性动画的效果。
     * 3. 设置小于0的值时按0处理。
     * 4. 设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
     * 5. curve配置[springMotion]{@link @ohos.curves:curves.springMotion}、[responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}、[interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}曲线时，duration不生效。
     *
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    duration?: int;
    /**
     * 动画播放速度，值越大动画播放越快，值越小播放越慢，为0时无动画效果。
     * 
     * 当设置为+∞时，动画会在当帧结束，动画结束回调会立即执行。
     * 
     * 默认值：1.0
     * 
     * 取值范围：[0, +∞)
     * 
     * **说明**：当设置小于0的值时按1处理。
     *
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tempo?: double;
    /**
     * 动画曲线。
     * 
     * 推荐以Curve或ICurve形式指定。
     * 
     * 当类型为string时，为动画插值曲线，仅支持以下可选值：
     * 
     * "linear"：动画线性变化。
     * 
     * "ease"：动画开始和结束时的速度较慢，cubic-bezier(0.25, 0.1, 0.25, 1.0)。
     * 
     * "ease-in"：动画播放速度先慢后快，cubic-bezier(0.42, 0.0, 1.0, 1.0)。
     * 
     * "ease-out"：动画播放速度先快后慢，cubic-bezier(0.0, 0.0, 0.58, 1.0)。
     * 
     * "ease-in-out"：动画播放速度先加速后减速，cubic-bezier(0.42, 0.0, 0.58, 1.0)。
     * 
     * "fast-out-slow-in"：标准曲线，cubic-bezier(0.4, 0.0, 0.2, 1.0)。
     * 
     * "linear-out-slow-in"：减速曲线，cubic-bezier(0.0, 0.0, 0.2, 1.0)。
     * 
     * "fast-out-linear-in"：加速曲线，cubic-bezier(0.4, 0.0, 1.0, 1.0)。
     * 
     * "friction"：阻尼曲线，cubic-bezier(0.2, 0.0, 0.2, 1.0)。
     * 
     * "extreme-deceleration"：急缓曲线，cubic-bezier(0.0, 0.0, 0.0, 1.0)。
     * 
     * "rhythm"：节奏曲线，cubic-bezier(0.7, 0.0, 0.2, 1.0)。
     * 
     * "sharp"：锐利曲线，cubic-bezier(0.33, 0.0, 0.67, 1.0)。
     * 
     * "smooth"：平滑曲线，cubic-bezier(0.4, 0.0, 0.4, 1.0)。
     * 
     * "cubic-bezier(x1, y1, x2, y2)"：三次贝塞尔曲线，x1、x2的值必须处于0-1之间。例如"cubic-bezier(0.42, 0.0, 0.58, 1.0)"。
     * 
     * "steps(number,step-position)"：阶梯曲线，number必须设置，为正整数，step-position参数可选，支持设置start或end，默认值为end。例如"steps(3,start)"。
     * 
     * "interpolating-spring(velocity,mass,stiffness,damping)"：具体参数含义参考
     * [interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}。
     * 
     * "responsive-spring-motion(response,dampingFraction,overlapDuration)"：具体参数含义参考
     * [responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}。
     * 
     * "spring(velocity,mass,stiffness,damping)"：具体参数含义参考[springCurve]{@link @ohos.curves:curves.springCurve}。
     * 
     * "spring-motion(response,dampingFraction,overlapDuration)"：具体参数含义参考
     * [springMotion]{@link @ohos.curves:curves.springMotion}。
     * 
     * 默认值：Curve.EaseInOut
     *
     * @default Curve.EaseInOut
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    curve?: Curve | string | ICurve;
    /**
     * 动画延迟播放时间，单位为ms(毫秒)，默认不延时播放。
     * 
     * 默认值：0
     * 
     * 取值范围：(-∞, +∞)
     * 
     * **说明**：1.delay>=0为延迟播放，delay<0表示提前播放。对于delay<0的情况：当delay的绝对值小于实际动画时长，动画将在开始后第一帧直接运动到delay绝对值的时刻的状态；当delay的绝对值大于等于
     * 实际动画时长，动画将在开始后第一帧直接运动到终点状态。其中实际动画时长等于单次动画时长乘以动画播放次数。
     * 
     * 2. 设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    delay?: int;
    /**
     * 动画播放次数。默认播放一次，设置为-1时表示无限次播放。设置为0时表示无动画效果。
     * 
     * 默认值：1 
     * 
     * 取值范围：[-1, +∞)
     * 
     * **说明**：设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    iterations?: int;
    /**
     * 动画播放模式，默认播放完成后从头开始播放。
     * 
     * 默认值：PlayMode.Normal
     * 
     * 相关使用约束请参考PlayMode说明。
     *
     * > **PlayMode说明：**
     * >
     * > - PlayMode推荐使用PlayMode.Normal和PlayMode.Alternate，此场景下动画的第一轮是正向播放的。如使用PlayMode.Reverse和PlayMode.AlternateReverse，则动画
     * > 的第一轮是逆向播放的，在动画刚开始时会跳变到终止状态，然后逆向播放动画。
     * >
     * > - 使用PlayMode.Alternate或PlayMode.AlternateReverse时，开发者应保证动画最终状态和状态变量的取值一致，即应保证动画的最后一轮是正向播放的。使用PlayMode.Alternate时，
     * > iterations应为奇数。使用PlayMode.AlternateReverse时，iterations应为偶数。
     * >
     * > - 不推荐使用PlayMode.Reverse，此场景下不仅会导致动画刚开始就跳变到终止状态，也会导致动画最终状态和状态变量的取值不同。
     *
     * @default PlayMode.Normal
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    playMode?: PlayMode;
    /**
     * 动画播放完成回调。UIAbility从前台切换至后台时会立即结束仍在步进中的有限循环动画，触发播放完成回调。
     * 
     * 在设置的开发者选项中关闭过渡动画，以及tempo设置为+∞时，动画播放完成回调会立即执行。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onFinish?: () => void;
    /**
     * 在动画中定义onFinish回调的类型。
     * 
     * 默认值：FinishCallbackType.REMOVED
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    finishCallbackType?: FinishCallbackType;
    /**
     * 设置动画的期望帧率。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    expectedFrameRateRange?: ExpectedFrameRateRange;
}
/**
 * 曲线对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ICurve = curves.ICurve;
/**
 * 矩阵对象接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Matrix4Transit = matrix4.Matrix4Transit;
/**
 * 设置组件的运动路径。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MotionPathOptions {
    /**
     * 位移动画的运动路径，使用[SVG路径描述规范]{@link ./path#svg路径描述规范}。path中支持使
     * 用start和end进行起点和终点的替代，如：'Mstart.x start.y L50 50 Lend.x end.y Z'，更多说明请参考
     * [绘制路径](docroot://ui/ui-js-components-svg-path.md)。
     * 
     * 设置为空字符串时相当于不设置路径动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    path: string;
    /**
     * 运动路径的起点。
     * 
     * 默认值：0.0
     * 
     * 取值范围：[0.0, 1.0]
     * 
     * 设置小于0.0或大于1.0的值时，按默认值0.0处理。
     *
     * @default 0.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    from?: double;
    /**
     * 运动路径的终点。
     * 
     * 默认值：1.0
     * 
     * 取值范围：[0.0, 1.0]
     * 
     * 设置小于0.0或大于1.0的值时，按默认值1.0处理，且满足to值 >= 异常值处理后的from值。
     *
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    to?: double;
    /**
     * 是否跟随路径进行旋转。true代表跟随路径进行旋转，false代表不跟随路径进行旋转。
     * 
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rotatable?: boolean;
}
/**
 * 共享元素转场动画参数。
 * 
 * > **说明：**
 * >
 * > type为SharedTransitionEffectType.Exchange时motionPath才会生效。
 * >
 * > type为SharedTransitionEffectType.Exchange时，效果为对匹配的共享元素产生位置、大小的过渡（可通过配置组件的border观察），不支持内容的过渡效果。例如，Text组件在两个页面上使用不同的
 * > fontSize属性值，即绘制内容有大小差异，在sharedTransition动画结束后的最后一帧，Text的fontSize效果会突变为跳转目标页fontSize的效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface sharedTransitionOptions {
    /**
     * 描述共享元素转场动效播放时长。
     * 
     * 默认值：1000 
     * 
     * 单位：毫秒
     * 
     * 取值范围：[0, +∞)
     *
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    duration?: int;
    /**
     * 动画曲线。
     * 
     * 推荐以Curve或ICurve形式指定。
     * 
     * 当类型为string时，为动画插值曲线，取值参考
     * [AnimateParam]{@link AnimateParam}的curve参数。
     * 
     * 默认值：Curve.Linear
     *
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    curve?: Curve | string | ICurve;
    /**
     * 延迟播放时间。
     * 
     * 取值范围：[0, +∞)
     * 
     * 默认值：0 
     * 
     * 单位：毫秒
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    delay?: int;
    /**
     * 运动路径信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    motionPath?: MotionPathOptions;
    /**
     * 设置Z轴。
     * 
     * 取值范围：(-∞, +∞)
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    zIndex?: int;
    /**
     * 动画类型。
     * 
     * 默认值：SharedTransitionEffectType.Exchange
     *
     * @default SharedTransitionEffectType.Exchange
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type?: SharedTransitionEffectType;
}
/**
 * Defines the options of geometry transition.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GeometryTransitionOptions {
    /**
     * 仅用于if范式下标记始终在组件树上的组件是否跟随做共享动画。true代表跟随做共享动画，false代表不跟随做共享动画。
     * 
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    follow?: boolean;

    /**
     * 决定共享元素动画过程中in/out组件在组件树上层级位置的移动策略，默认值：TransitionHierarchyStrategy.ADAPTIVE。
     * 
     * 实际影响绑定的in/out组件相对其他组件的前后重叠关系，常规情况下慎重修改。
     * 
     * 建议在发现共享元素动画过程中出现组件前后重叠关系错误时需要调整再设置此参数。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @default TransitionHierarchyStrategy.ADAPTIVE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    hierarchyStrategy?: TransitionHierarchyStrategy
}
/**
 * 线性渐变的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LinearGradientOptions {
    /**
     * 线性渐变的角度，number类型时单位为度（°）。角度为0度时渐变方向从下往上，顺时针旋转为正向角度。
     *
     * 取值范围：(-∞,+∞)，设置的值大于0时，按顺时针方向，小于0时，按逆时针方向。
     * @default 180
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angle?: double | string;
    /**
     * 线性渐变的方向，设置angle为非undefined后，direction不生效。设置为GradientDirection.None时，按默认方向渐变。默认值：GradientDirection.Bottom。
     * @default GradientDirection.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction?: GradientDirection;
    /**
     * 指定渐变色颜色和其对应的百分比位置的数组，设置非法颜色直接跳过。ResourceColor表示颜色，number表示该颜色所处的位置，
     * 取值范围为[0, 1.0]，设置的值小于0时，按0处理，设置的值大于1.0时，按1.0处理。0表示需要设置渐变色的开始处，1.0表示渐变色的结束处。
     * 为了实现多个颜色渐变效果，多个数组中的number类型参数应递增设置。如果后一个数组中的number类型参数小于前一个数组的number类型参数，
     * 将按照等于前一个数组number值处理。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    colors: Array<[
        ResourceColor,
        double
    ]>;
    /**
     * 设置渐变颜色是否在组件范围内循环重复填充。
     *
     * 默认值：false。
     *
     * true：渐变效果在组件范围内循环重复。
     *
     * false：渐变效果仅在指定范围内显示一次。
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeating?: boolean;
}

/**
 * 共享元素动画过程中in/out组件层级位置移动策略枚举。
 * 
 * | 名称   | 值 | 说明 |
 * | ------ | - | ---- |
 * | NONE  | 0 | 无层级提拉，in/out组件保持原来的层级位置，受父组件scale、position影响。 |
 * | ADAPTIVE | 1 | 有层级提拉，in/out组件中相对低层级的组件被提拉至组件树上in/out组件相对高层级的位置上。
 * 
 * 此模式还会导致被提拉的组件与父组件解绑，不受父组件scale、position影响。
 * 
 * 例如in组件层级高于out组件，开启层级提拉后会在动画过程中将out组件从自己的父组件处解耦，并提拉至in组件的层级位置处，in组件层级位置不变。|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TransitionHierarchyStrategy {

  /**
   * None mode.
   * Source and target staty in the original level in the hierarchy during geometry transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,

  /**
   * ADAPTIVE mode.
   * Lower level one of source and target is elevated to higher level of both,
   * indicating that two elements are in same high level.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  ADAPTIVE = 1,
}

/**
 * 角度渐变参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SweepGradientOptions {
    /**
     * 为角度渐变的中心点，即相对于当前组件左上角的坐标，number类型时单位为vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    center: [
        Length,
        Length
    ];
    /**
     * 角度渐变的起点。未设置start时，默认值为0，即起始角度为0度。
     *
     * 角度为字符串时，合法的取值为数字（默认单位为度，即deg）或数字后带"deg"（度）、"rad"（弧度）、"grad"（梯度）、"turn"（圈）单位。例如："90"、 "90deg"、"1.57rad"。传入非法格式的字符串时，
     * 按默认值0处理。取值有0到360度的限制，转换为度的单位之后，值在0到360度之间，设置为小于0度的值时，按值为0度处理，设置为大于360度的值时，按值为360度处理。
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: double | string;
    /**
     * 角度渐变的终点。取值范围：[0, 360]。转换为度的单位之后，设置为小于0度的值时，按值为0度处理，设置为大于360度的值时，按值为360度处理。默认值：0。
     *
     * 角度为字符串时，合法的取值为数字（默认单位为度，即deg）或数字后带"deg"（度）、"rad"（弧度）、"grad"（梯度）、"turn"（圈）单位。例如："90"、 "90deg"、"1.57rad"。传入非法格式的字符串时，
     * 按默认值0处理。
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: double | string;
    /**
     * 角度渐变的旋转角度。未设置rotation时，默认值为0，即不旋转。
     *
     * 角度为字符串时，合法的取值为数字或数字后带"deg"（度）、"rad"（弧度）、"grad"（梯度）、"turn"（圈）单位。例如："90"、 "90deg"、"1.57rad"。传入非法格式的字符串时，按默认值0处理。取值有0到
     * 360度的限制，转换为度的单位之后，值在0到360度之间，设置为小于0度的值时，按值为0度处理，设置为大于360度的值时，按值为360度处理。
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rotation?: double | string;
    /**
     * 指定渐变色和其对应的百分比位置的数组，设置不符合ResourceColor格式要求的颜色值时，该颜色项直接跳过不生效。设置metricsColors时此参数失效。ResourceColor表示颜色。number表示该颜色所处的位
     * 置，取值范围为[0, 1.0]，设置的值小于0时，按0处理，设置的值大于1.0时，按1.0处理。0表示需要设置渐变色的开始处，1.0表示渐变色的结束处。为了实现多个颜色渐变效果，多个数组中的number类型参数应递增设置。如果后一
     * 个数组中的number类型参数小于前一个数组的number类型参数，将按照等于前一个数组number值处理。
     *
     * 默认值：[]，无渐变效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    colors: Array<[
        ResourceColor,
        double
    ]>;
    /**
     * 指定渐变颜色和其对应的百分比位置的数组，设置非法颜色直接跳过。当需要使用广色域（如P3色域）颜色时，应使用metricsColors代替colors。设置metricsColors时colors失效。每个渐变
     * ColorMetrics的色域属性应当统一，设置不同色域属性则认为非法。使用广色域（如DISPLAY_P3）时，需先通过setColorSpace接口将当前窗口设置为广色域。默认不设置，不设置时使用colors参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    metricsColors?: Array<[
        ColorMetrics,
        double
    ]>;
    /**
     * 设置渐变颜色是否在组件范围内循环重复填充。
     *
     * 默认值：false。
     *
     * true：渐变效果在组件范围内循环重复。
     *
     * false：渐变效果仅在指定范围内显示一次。
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeating?: boolean;
}
/**
 * 径向渐变参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RadialGradientOptions {
    /**
     * 径向渐变的中心点，即相对于当前组件左上角的坐标，number类型时单位为vp。第一个元素为x坐标，第二个元素为y坐标。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    center: [
        Length,
        Length
    ];
    /**
     * 径向渐变的半径，number类型时单位为vp。
     *
     * 取值范围：[0,+∞)。设置的值小于0时，按值为0处理。设置的值为undefined时，系统将根据组件尺寸自动计算渐变半径。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius: Length;
    /**
     * 指定渐变色和其对应的百分比位置的数组，设置非法颜色直接跳过。ResourceColor表示颜色，number表示该颜色所处的位置，取值范围为[0, 1.0]，设置的值小于0时，按0处理，设置的值大于1.0时，按1.0处理。0表示需
     * 要设置渐变色的开始处，1.0表示渐变色的结束处。为了实现多个颜色渐变效果，多个数组中的number类型参数应递增设置。如果后一个数组中的number类型参数小于前一个数组的number类型参数，将按照等于前一个数组number值处
     * 理。
     *
     * 默认值：[]，无渐变效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    colors: Array<[
        ResourceColor,
        double
    ]>;
    /**
     * 设置渐变颜色是否在组件范围内循环重复填充。
     *
     * 默认值：false。
     *
     * true：渐变效果在组件范围内循环重复。
     *
     * false：渐变效果仅在指定范围内显示一次。
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeating?: boolean;
}
/**
 * 定义平移选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TranslateOptions {
    /**
     * x轴的平移距离。
     * 
     * 类型为number时，单位为vp，取值范围为(-∞, +∞)。
     * 
     * 默认值：0
     * 
     * 类型为string时，形式参考[Length]{@link Length}的string类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: double | string;
    /**
     * y轴的平移距离。
     * 
     * 类型为number时，单位为vp，取值范围为(-∞, +∞)。
     * 
     * 默认值：0
     * 
     * 类型为string时，形式参考[Length]{@link Length}的string类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: double | string;
    /**
     * z轴的平移距离。
     * 
     * 类型为number时，单位为vp，取值范围为(-∞, +∞)。
     * 
     * 默认值：0
     * 
     * 类型为string时，形式参考[Length]{@link Length}的string类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    z?: double | string;
}
/**
 * > **说明：**
 * >
 * > 当组件同时设置了[rotate]{@link CommonMethod.rotate}和[scale]{@link CommonMethod.scale}属性时，centerX和centerY的取值会发生冲突，此时centerX和
 * > centerY的值以最后设定的属性的值为准。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ScaleOptions {
    /**
     * x轴的缩放倍数。x>1时以x轴方向放大，0<x<1时以x轴方向缩小，x<0时沿x轴反向并缩放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: double;
    /**
     * y轴的缩放倍数。y>1时以y轴方向放大，0<y<1时以y轴方向缩小，y<0时沿y轴反向并缩放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: double;
    /**
     * z轴的缩放倍数。z>1时以z轴方向放大，0<z<1时以z轴方向缩小，z<0时沿z轴反向并缩放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    z?: double;
    /**
     * 变换中心点x轴坐标。表示组件变换中心点（即锚点）的x方向坐标。取值可为string类型，如'50'，'50%'。
     * 
     * 单位：vp
     * 
     * 默认值：'50%'
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerX?: double | string;
    /**
     * 变换中心点y轴坐标。表示组件变换中心点（即锚点）的y方向坐标。取值可为string类型，如'50'，'50%'。
     * 
     * 单位：vp
     * 
     * 默认值：'50%'
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerY?: double | string;
}
/**
 * 定义相对容器的垂直对齐规则。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface VerticalAlignParam {
    /**
     * 设置作为锚点的组件的id值。
     *
     * Anonymous Object Rectification
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: string;
    /**
     * 设置相对于锚点组件的纵向对齐方式。
     *
     * Anonymous Object Rectification
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align: VerticalAlign;
}
/**
 * 定义相对容器的水平对齐规则。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface HorizontalAlignParam {

    /**
     * 设置作为锚点的组件的id值。
     *
     * Anonymous Object Rectification
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: string;
    /**
     * 设置相对于锚点组件的水平对齐方式。
     *
     * Anonymous Object Rectification
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align: HorizontalAlign;
}
/**
 * 相对布局组件中子组件的对齐规则。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AlignRuleOption {
    /**
     * 设置左对齐参数。<br/>API version 23之前，入参类型为{ anchor: string, align: HorizontalAlign }
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    left?: HorizontalAlignParam;
    /**
     * 设置右对齐参数。<br/>API version 23之前，入参类型为{ anchor: string, align: HorizontalAlign}
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    right?: HorizontalAlignParam;
    /**
     * 设置横向居中对齐方式的参数。<br/>API version 23之前，入参类型为{ anchor: string, align: HorizontalAlign }
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    middle?: HorizontalAlignParam;
    /**
     * 设置顶部对齐的参数。<br/>API version 23之前，入参类型为{ anchor: string, align: VerticalAlign}
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    top?: VerticalAlignParam;
    /**
     * 设置底部对齐的参数。<br/>API version 23之前，入参类型为{ anchor: string, align: VerticalAlign}
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bottom?: VerticalAlignParam;
    /**
     * 设置纵向居中对齐方式的参数。<br/>API version 23，之前入参类型为{ anchor: string, align: VerticalAlign }
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    center?: VerticalAlignParam;
    /**
     * 设置组件在锚点约束下的偏移参数，其值为到左/上侧锚点的距离与锚点间总距离的比值。
     *
     * @default {horizontal:0.5,vertical:0.5}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bias?: Bias;
}
/**
 * 定义相对容器的水平对齐规则。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedHorizontalAlignParam {
    /**
     * 设置作为锚点的组件的id值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: string;
    /**
     * 设置相对于锚点组件的水平对齐方式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align: HorizontalAlign;
}
/**
 * 定义相对容器的纵向对齐规则。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedVerticalAlignParam {
    /**
     * 设置作为锚点的组件的id值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: string;
    /**
     * 设置相对于锚点组件的纵向对齐方式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align: VerticalAlign;
}
/**
 * 相对布局组件中子组件的对齐规则。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedAlignRuleOptions {
    /**
     * 设置横向对齐方式的参数，LTR模式时为左对齐，RTL模式时为右对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: LocalizedHorizontalAlignParam;
    /**
     * 设置横向对齐方式的参数，LTR模式时为右对齐，RTL模式时为左对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: LocalizedHorizontalAlignParam;
    /**
     * 设置横向居中对齐方式的参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    middle?: LocalizedHorizontalAlignParam;
    /**
     * 设置纵向顶部对齐的参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    top?: LocalizedVerticalAlignParam;
    /**
     * 设置纵向底部对齐的参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bottom?: LocalizedVerticalAlignParam;
    /**
     * 设置纵向居中对齐方式的参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    center?: LocalizedVerticalAlignParam;
    /**
     * 设置组件在锚点约束下的偏移参数，其值为到左/上侧锚点的距离与锚点间总距离的比值。
     *
     * @default {horizontal:0.5,vertical:0.5}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bias?: Bias;
}
/**
 * 定义链的风格，支持attributeModifier动态设置属性方法。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ChainStyle {
    /**
     * 组件在约束锚点间均匀分布。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SPREAD = 0,
    /**
     * 除首尾2个子组件的其他组件在约束锚点间均匀分布。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SPREAD_INSIDE = 1,
    /**
     * 链内子组件无间隙。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PACKED = 2
}
/**
 * 组件旋转参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RotateOptions {
    /**
     * 旋转轴向量x坐标。
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: double;
    /**
     * 旋转轴向量y坐标。
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: double;
    /**
     * 旋转轴向量z坐标。
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    z?: double;
    /**
     * 变换中心点x轴坐标。表示组件变换中心点（即锚点）的x方向坐标。取值可为string类型，如'50'，'50%'。
     * 
     * 单位：vp
     * 
     * 默认值：'50%'
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerX?: double | string;
    /**
     * 变换中心点y轴坐标。表示组件变换中心点（即锚点）的y方向坐标。取值可为string类型，如'50'，'50%'。
     * 
     * 单位：vp
     * 
     * 默认值：'50%'
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerY?: double | string;
    /**
     * z轴锚点，即3D旋转中心点的z轴分量。
     * 
     * 默认值：0
     * 
     * 单位：px
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerZ?: double;
    /**
     * 相机放置的z轴坐标。数值大小表示视距，即相机到z=0平面的距离。取值的正负决定了相机观察的方向。当perspective=0，系统会自动计算适合的相机z轴位置，取值为负数。
     * 
     * 默认值：0
     * 
     * 单位：px
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    perspective?: double;
    /**
     * 旋转角度。取值为正时相对于旋转轴方向顺时针转动，取值为负时相对于旋转轴方向逆时针转动。取值可为string类型，如'90deg'。
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angle: double | string;
}
/**
 * 指定各轴旋转角的旋转参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RotateAngleOptions {
  /**
   * X轴方向上的旋转角。取值为正时相对于旋转轴方向顺时针转动，取值为负时逆时针转动。取值可为string类型，如'90deg'。
   * 
   * 默认值：0
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  angleX?: double | string;

  /**
   * Y轴方向上的旋转角。取值为正时相对于旋转轴方向顺时针转动，取值为负时逆时针转动。取值可为string类型，如'90deg'。
   * 
   * 默认值：0
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  angleY?: double | string;

  /**
   * Z轴方向上的旋转角。取值为正时相对于旋转轴方向顺时针转动，取值为负时逆时针转动。取值可为string类型，如'90deg'。
   * 
   * 默认值：0
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  angleZ?: double | string;

  /**
   * 变换中心点x轴坐标。表示组件变换中心点（即锚点）的x方向坐标。
   * 
   * 单位：vp
   * 
   * 默认值：'50%'
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default '50%'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  centerX?: double | string;

  /**
   * 变换中心点y轴坐标。表示组件变换中心点（即锚点）的y方向坐标。
   * 
   * 单位：vp
   * 
   * 默认值：'50%'
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default '50%'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  centerY?: double | string;

  /**
   * z轴锚点，即3D旋转中心点的z轴分量。
   * 
   * 默认值：0
   * 
   * 单位：px
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  centerZ?: double;

  /**
   * 相机放置的z轴坐标。数值大小表示视距，即相机到z=0平面的距离。取值的正负决定了相机观察的方向。当perspective=0，系统会自动计算适合的相机z轴位置，取值为负数。
   * 
   * 默认值：0
   * 
   * 单位：px
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  perspective?: double;
}
/**
 * 转场边缘类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TransitionEdge {
    /**
     * 窗口的上边缘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP = 0,
    /**
     * 窗口的下边缘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOTTOM = 1,
    /**
     * 窗口的起始边缘，LTR时为左边缘，RTL时为右边缘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    START = 2,
    /**
     * 窗口的终止边缘，LTR时为右边缘，RTL时为左边缘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    END = 3
}
/**
 * 定义非对称转场选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AsymmetricTransitionOption {
    /**
     * 组件出现时使用的转场效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    appear: TransitionEffect;
    /**
     * 组件消失时使用的转场效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disappear: TransitionEffect;
}
/**
 * 定义节点的绘制修饰器，为关联的Node提供绘制回调。
 * 每个DrawModifier实例只能设置给一个组件，不允许重复设置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class DrawModifier {
    /**
     * drawBehind方法，在绘制关联的Node之前执行。
     *
     * @param { DrawContext } drawContext - 用于绘制的drawContext。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    drawBehind(drawContext: DrawContext): void;

    /**
     * drawContent方法，在关联的Node绘制时执行，若设置了该方法，
     * 默认的drawContent方法将被替换。
     *
     * @param { DrawContext } drawContext - 用于绘制的drawContext。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    drawContent(drawContext: DrawContext): void;

    /**
     * drawFront方法，在绘制完关联的Node及其子节点之后执行。
     * @param { DrawContext } drawContext - 用于绘制的drawContext。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    drawFront(drawContext: DrawContext): void;

    /**
     * drawForeground方法，该方法在绘制完关联的Node及其子节点之后执行。
     * 它允许在已渲染的内容之上执行额外的绘制操作。
     * 这对于添加需要显示在主内容之上的可视元素很有用。
     *
     * @param { DrawContext } drawContext - 用于绘制的drawContext。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    drawForeground(drawContext: DrawContext): void;

    /**
     * 在关联的Node及其所有子节点绘制完成后，在overlay层绘制内容。
     *
     * 自定义绘制由Behind、Content、Front、Foreground和Overlay五层组成。
     * - Foreground层和Overlay层在子节点之后绘制。
     * - Overlay层与Foreground层的区别在于，它可以在组件边界之外绘制。
     * @param { DrawContext } drawContext - 用于绘制的drawContext
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    drawOverlay(drawContext: DrawContext): void;
    /**
     * 使组件失效，这将导致组件重新渲染。
     * 不允许也不需要重载该方法。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    invalidate(): void;
}
/**
 * 定义TransitionEffect类指定转场效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TransitionEffect {
    /**
     * 禁用转场效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static get IDENTITY(): TransitionEffect;
    /**
     * 为组件添加透明度转场效果，出现时透明度从0到1、消失时透明度从1到0，相当于TransitionEffect.opacity(0)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static get OPACITY(): TransitionEffect;
    /**
     * 相当于TransitionEffect.asymmetric(TransitionEffect.move(TransitionEdge.START), TransitionEffect.move(
     * TransitionEdge.END))。从START边滑入，END边滑出。即在LTR模式下，从左侧滑入，右侧滑出；在RTL模式下，从右侧滑入，左侧滑出。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static get SLIDE(): TransitionEffect;
    /**
     * 指定出现时从右侧先缩小再放大滑入、消失时从左侧先缩小再放大滑出的转场效果。自带动画参数，也可覆盖动画参数，自带的动画参数时长600ms，指定动画曲线cubicBezierCurve(0.24, 0.0, 0.50, 1.0)，
     * 最小缩放比例为0.8。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static get SLIDE_SWITCH(): TransitionEffect;
    /**
     * 设置组件转场时的平移效果。
     *
     * @param { TranslateOptions } options - 组件转场时的平移效果，为插入时起点和删除时终点的值。<br/>-x：横向的平移距离。<br/>-y：纵向的平移距离。<br/>-z：竖向的平移距离。
     * @returns { TransitionEffect } 当前动画平移效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static translate(options: TranslateOptions): TransitionEffect;
    /**
     * 设置组件转场时的旋转效果。
     *
     * @param { RotateOptions } options - 组件转场时的旋转效果，为插入时起点和删除时终点的值。<br/>-x：横向的旋转向量分量。<br/>-y：纵向的旋转向量分量。<br/>-z：竖向的旋转向量分
     *     量。<br/>- centerX、centerY指旋转中心点，centerX和centerY默认值是"50%"，即默认以组件的中心点为旋转中心点。<br/>- 中心点为(0, 0)代表组件的左上角。<br/>-
     *     centerZ指z轴锚点，即3D旋转中心点的z轴分量，centerZ默认值是0。<br/>-perspective指视距，不支持perspective属性做转场动画。
     * @returns { TransitionEffect } 当前动画旋转效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static rotate(options: RotateOptions): TransitionEffect;
    /**
     * 设置组件转场时的缩放效果。
     *
     * @param { ScaleOptions } options - 组件转场时的缩放效果，为插入时起点和删除时终点的值。设置的缩放值在组件当前的scale属性上进行叠加，如组件当前scale值为0.8，当转场缩放值设置为0.5
     *     时，组件入场动画的缩放值将从0.4开始执行。<br/>-x：横向放大倍数（或缩小比例）。<br/>-y：纵向放大倍数（或缩小比例）。<br/>-z：当前为二维显示，该参数无效。<br/>- centerX、
     *     centerY指缩放中心点，centerX和centerY默认值是"50%"，即默认以组件的中心点为缩放中心点。<br/>- 中心点为(0, 0)代表组件的左上角。<br>**说明：** <br>设置centerX、
     *     centerY为非法字符串时（例如，"illegalString"），默认值为"0"。
     * @returns { TransitionEffect } 当前动画缩放效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static scale(options: ScaleOptions): TransitionEffect;
    /**
     * 设置组件转场时的透明度效果。
     *
     * @param { double } alpha - 组件转场时的透明度效果，为插入时起点和删除时终点的值。<br/>取值范围：[0, 1]<br/>**说明：** <br/>设置小于0的非法值按0处理，大于1的非法值按1处理。
     * @returns { TransitionEffect } 当前动画透明度效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static opacity(alpha: double): TransitionEffect;
    /**
     * 设置组件转场时从屏幕边缘滑入和滑出的效果。
     *
     * @param { TransitionEdge } edge - 组件转场时从屏幕边缘滑入和滑出的效果，本质为平移效果，为插入时起点和删除时终点的值。
     * @returns { TransitionEffect } 当前动画从屏幕边缘滑入和滑出的效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static move(edge: TransitionEdge): TransitionEffect;
    /**
     * 设置非对称的转场效果。
     *
     * @param { TransitionEffect } appear - 指定出现的转场效果。<br/>如不通过asymmetric函数构造TransitionEffect，则表明该效果在组件出现和消失时均生效。
     * @param { TransitionEffect } disappear - 指定消失的转场效果。<br/>如不通过asymmetric函数构造TransitionEffect，则表明该效果在组件出现和消失时均生效。
     * @returns { TransitionEffect } 当前动画非对称的转场效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static asymmetric(appear: TransitionEffect, disappear: TransitionEffect): TransitionEffect;
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'identity' | 'slideSwitch' } type - 转场类型。
     * @param { undefined } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'identity' | 'slideSwitch', effect: undefined);
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'opacity' } type - 转场类型。
     * @param { double } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'opacity', effect: double);
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'move' } type - 转场类型。
     * @param { TransitionEdge } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'move', effect: TransitionEdge);
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'translate' } type - 转场类型。
     * @param { TranslateOptions } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'translate', effect: TranslateOptions);
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'rotate' } type - 转场类型。
     * @param { RotateOptions } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'rotate', effect: RotateOptions);
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'scale' } type - 转场类型。
     * @param { ScaleOptions } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'scale', effect: ScaleOptions);
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'asymmetric' } type - 转场类型。
     * @param { AsymmetricTransitionOption } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'asymmetric', effect: AsymmetricTransitionOption);
    /**
     * 指定该TransitionEffect的动画参数。
     *
     * @param { AnimateParam } value - 动画参数。</br>该参数只用来指定动画参数，其入参AnimateParam的onFinish回调不生效。</br>如果通过combine进行
     *     TransitionEffect的组合，前一TransitionEffect的动画参数也可用于后一TransitionEffect。
     * @returns { TransitionEffect } 当前动画效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    animation(value: AnimateParam): TransitionEffect;
    /**
     * 对TransitionEffect进行链式组合，以形成包含多种转场效果的TransitionEffect。
     *
     * @param { TransitionEffect } transitionEffect - 被组合的过渡效果。
     * @returns { TransitionEffect } 组合过渡效应。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    combine(transitionEffect: TransitionEffect): TransitionEffect;
}
/**
 * 拖拽点信息对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ItemDragInfo {
    /**
     * 当前拖拽点的x坐标，单位vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 当前拖拽点的y坐标，单位vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
}
/**
 * 使用效果模板种类的枚举值。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum EffectType {
    /**
     * 使用父级EffectComponent定义的效果模板来渲染组件特效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 使用窗口定义的效果模板来渲染组件特效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    WINDOW_EFFECT = 1
}
/**
 * 定义拖拽手势触发前的各阶段状态。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PreDragStatus {
    /**
     * 拖拽手势启动阶段。(按下50ms时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ACTION_DETECTING_STATUS = 0,
    /**
     * 拖拽准备完成，可发起拖拽阶段。(按下500ms时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    READY_TO_TRIGGER_DRAG_ACTION = 1,
    /**
     * 拖拽浮起动效发起阶段。(按下800ms时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREVIEW_LIFT_STARTED = 2,
    /**
     * 拖拽浮起动效结束阶段。(浮起动效完全结束时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREVIEW_LIFT_FINISHED = 3,
    /**
     * 拖拽落回动效发起阶段。(落回动效发起时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREVIEW_LANDING_STARTED = 4,
    /**
     * 拖拽落回动效结束阶段。(落回动效结束时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREVIEW_LANDING_FINISHED = 5,
    /**
     * 拖拽浮起落位动效中断。(已满足READY_TO_TRIGGER_DRAG_ACTION状态后，未达到动效阶段，手指抬手时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ACTION_CANCELED_BEFORE_DRAG = 6,
    /**
     * 拖拽准备完成，可发起拖拽阶段。（按下350ms时触发）
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREPARING_FOR_DRAG_DETECTION = 7
}
/**
 * 定义拖拽过程中拖拽项的相关信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DragItemInfo {
    /**
     * 设置拖拽过程中显示的图片。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pixelMap?: PixelMap;
    /**
     * 拖拽过程中显示自定义组件，如果设置了pixelMap，则忽略此值。
     * **说明：**
     * 不支持全局builder。如果builder中使用了[Image]{@link Image}组件，应尽量开启同步加载，即配置Image的[syncLoad]{@link syncLoad}为true。该builder只用于生成当次拖拽中显示的图片，builder的修改不会同步到当前正在拖拽的图片，对builder的修改需要在下一次拖拽时生效。
     * builder传参时，建议传参格式为builder: ()=>{this.customBuilder()}，用以保证this指向的正确性。具体请参考将@Builder装饰的函数当作CustomBuilder类型使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    builder?: CustomBuilder;
    /**
     * 拖拽项的附加信息，用于描述拖拽项。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    extraInfo?: string;
}

/**
 * 提供显式动画立即下发功能。该接口仅支持渲染层上的属性动画提前执行，无法用于UI侧的逐帧动画。建议开发者优先使用[animateTo]{@link @ohos.arkui.UIContext:UIContext.animateTo}，以
 * 防止干扰框架的显示时序，避免在动画启动时因状态设置不完整而导致的显示错误。务必确保调用时所有涉及动画的属性值已正确设置，否则动画开始的少量帧可能出现渲染异常。
 *
 * @param { AnimateParam } value - 设置动画效果相关参数，动画参数将作用于event闭包函数中状态变化产生的过渡动效。各属性的取值范围及含义详见 [AnimateParam]{@link AnimateParam}。 animateToImmediately接口对AnimateParam各属性的使用与[animateTo]{@link @ohos.arkui.UIContext:UIContext.animateTo}一致，但仅支持渲染层上 的属性动画，无法用于UI侧的逐帧动画。
 * @param { VoidCallback } processor - 回调函数。指定显示动效的闭包函数，在闭包函数中导致的状态变化系统会自动插入过渡动画。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function animateToImmediately(value: AnimateParam, processor: VoidCallback): void;

/**
 * 焦点控制模块。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare namespace focusControl {
    /**
     * 全局接口，使焦点在下一帧渲染时转移至参数指定的组件上。
     * 如果需要指定组件立刻获焦，推荐使用FocusController中的焦点同步转移接口[requestFocus]{@link requestFocus}。
     *
     * @param { string } value - 目标组件使用接口key(value: string)或id(value: string)绑定的字符串。
     * @returns { boolean } 返回值表示是否成功给目标组件申请到焦点。若参数指向的目标组件存在且已挂载组件树，并具备获焦能力，则返回true，否则返回false。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    function requestFocus(value: string): boolean;
}
/**
 * 鼠标光标样式类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PointerStyle = pointer.PointerStyle;
/**
 * CursorControl
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare namespace cursorControl {
    /**
     * 在组件方法或事件回调中可使用的全局接口，调用该接口可设置当前的鼠标光标样式，例如在文本编辑区域悬浮时显示I型光标、在可拖拽元素上显示移动光标或在地图标记点悬浮时显示手指光标。
     *
     * @param { PointerStyle } value - 设置的鼠标光标样式。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    function setCursor(value: PointerStyle): void;
    /**
     * 在组件方法或事件回调中可使用的全局接口，调用该接口可将鼠标光标恢复成默认箭头样式，例如在鼠标离开悬浮区域、组件失焦或交互结束时恢复默认光标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    function restoreDefault(): void;
}
/**
 * [BaseEvent]{@link BaseEvent}中参数target的类型。
 * 触发事件的元素对象的显示区域。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EventTarget {
    /**
     * 目标元素的区域信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    area: Area;
    /**
     * 开发者设置的节点[id]{@link id}。默认值：undefined
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id?: string;
}
/**
 * 定义输入源对应的设备类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SourceType {
    /**
     * 未知输入源。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Unknown = 0,
    /**
     * 鼠标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Mouse = 1,
    /**
     * 触摸屏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TouchScreen = 2,
    /**
     * 按键。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    KEY = 4,
    /**
     * 手柄。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    JOYSTICK = 5
}
/**
 * 定义输入源对应的工具类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SourceTool {
    /**
     * 未知输入源。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Unknown = 0,
    /**
     * 手指输入。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Finger = 1,
    /**
     * 手写笔输入。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Pen = 2,
    /**
     * 鼠标输入。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MOUSE = 7,
    /**
     * 触控板输入。触控板单指输入被视为鼠标输入操作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOUCHPAD = 9,
    /**
     * 手柄输入。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    JOYSTICK = 10
}
/**
 * 用于设置被切割的图片在边框上的重复方式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum RepeatMode {
    /**
     * 被切割的图片会重复铺平在图片边框上，超出部分会被剪裁。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Repeat = 0,
    /**
     * 被切割的图片会以拉伸填充的方式铺满图片边框。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Stretch = 1,
    /**
     * 被切割的图片会以整数次平铺在图片边框上，无法以整数次平铺时会压缩图片。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Round = 2,
    /**
     * 被切割的图片会以整数次平铺在图片边框上，无法以整数次平铺时会以空白填充。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Space = 3
}
/**
 * 模糊样式类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BlurStyle {
    /**
     * 轻薄材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Thin = 0,
    /**
     * 普通厚度材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Regular = 1,
    /**
     * 厚材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Thick = 2,
    /**
     * 近距景深模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BACKGROUND_THIN = 3,
    /**
     * 中距景深模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BACKGROUND_REGULAR = 4,
    /**
     * 远距景深模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BACKGROUND_THICK = 5,
    /**
     * 超远距景深模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BACKGROUND_ULTRA_THICK = 6,
    /**
     * 关闭模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 7,
    /**
     * 组件超轻薄材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COMPONENT_ULTRA_THIN = 8,
    /**
     * 组件轻薄材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COMPONENT_THIN = 9,
    /**
     * 组件普通材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COMPONENT_REGULAR = 10,
    /**
     * 组件厚材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COMPONENT_THICK = 11,
    /**
     * 组件超厚材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COMPONENT_ULTRA_THICK = 12
}
/**
 * 定义背景模糊激活策略。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BlurStyleActivePolicy {
    /**
     * 模糊效果跟随窗口焦点状态变化，非焦点不模糊，焦点模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FOLLOWS_WINDOW_ACTIVE_STATE = 0,
    /**
     * 一直有模糊效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ALWAYS_ACTIVE = 1,
    /**
     * 一直无模糊效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ALWAYS_INACTIVE = 2
}
/**
 * 颜色模式枚举。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ThemeColorMode {
    /**
     * 跟随系统深浅色模式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SYSTEM = 0,
    /**
     * 固定使用浅色模式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LIGHT = 1,
    /**
     * 固定使用深色模式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DARK = 2
}

/**
 * 配置组件主题跟随的颜色模式。

 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum AnchoredColorMode {
    /**
     * 颜色模式跟随系统
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
    */
    FOLLOW_SYSTEM = 0,
    /**
     * 颜色模式跟随目标组件
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
    */
    FOLLOW_TARGET = 1
}

/**
 * 取色模式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AdaptiveColor {
    /**
     * 不使用取色模糊。使用系统预设颜色作为蒙版颜色。采用非DEFAULT方式的取色计算耗时高于DEFAULT方式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 使用取色模糊。将取色区域的颜色平均值作为蒙版颜色。采用AVERAGE方式较DEFAULT方式耗时，在性能敏感场景建议使用DEFAULT。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AVERAGE = 1
}
/**
 * 全屏模态转场方式枚举类型，用于设置全屏模态转场类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ModalTransition {
    /**
     * 全屏模态上下切换动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 全屏模态无转场动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 1,
    /**
     * 全屏模态透明度渐变动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ALPHA = 2
}
/**
 * 继承自[BlurStyleOptions]{@link BlurStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BackgroundBlurStyleOptions extends BlurStyleOptions {
    /**
     * 模糊激活策略。
     * 
     * 默认值：BlurStyleActivePolicy.ALWAYS_ACTIVE
     *
     * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    policy?: BlurStyleActivePolicy;
    /**
     * 模糊不生效时使用的背景色。该参数需配合policy参数使用。当policy使模糊失效时，控件模糊效果会被移除，如果设置了inactiveColor会使用inactiveColor作为控件背景色。
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    inactiveColor?: ResourceColor;
}
/**
 * 继承自[BlurStyleOptions]{@link BlurStyleOptions}。
 *
 * @extends BlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ForegroundBlurStyleOptions extends BlurStyleOptions {
}
/**
 * 灰阶模糊参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BlurOptions {
    /**
     * 灰阶模糊参数，两参数取值范围均为[0,127]。对图像中的黑白色进行色阶调整，使其趋于灰色，视觉过渡更加柔和，对图像中的彩色调整没有效果。
     * 参数一表示对黑色的提亮程度，参数二表示对白色的压暗程度，参数值越大调整效果越明显（黑白色变得越灰）。undefined表示不进行灰阶调整。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    grayscale: [
        double,
        double
    ] | undefined;
}
/**
 * 系统自适应调节参数，系统会默认开启根据芯片算力进行自适应效果调节的能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SystemAdaptiveOptions {
    /**
     * 系统自适应调节参数，推荐不携带该参数。该参数只影响低算力设备，低算力设备的定义由设备厂商决定。在低芯片算力的设备上，会根据算力和负载等条件，自动决策是否使用低算力的近似效果替代原有效果，比如模糊效果会结合接口中携带的模糊相关参
     * 数值及其他低算力处理逻辑，进行自适应效果降级处理。如果想关闭该功能，可以将该标志置为true。
     * 
     * 默认值：false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disableSystemAdaptation?: boolean;
}
/**
 * 模糊样式选项，用于配置模糊效果的深浅色模式、取色模式、灰阶模糊参数和模糊程度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BlurStyleOptions {
    /**
     * 内容模糊效果使用的深浅色模式。
     * <br>默认值：**ThemeColorMode.SYSTEM**。
     *
     * @default ThemeColorMode.SYSTEM
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    colorMode?: ThemeColorMode;
    /**
     * 内容模糊效果使用的自适应取色模式。
     * <br>默认值：**AdaptiveColor.DEFAULT**。
     *
     * @default AdaptiveColor.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    adaptiveColor?: AdaptiveColor;
    /**
     * 内容模糊效果程度。
     * <br>默认值：**1.0**。
     * <br>取值范围：[0.0, 1.0]。
     *
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale?: double;
    /**
     * 灰阶模糊参数，仅对图像中的黑白色生效，对彩色无效果。
     *
     * @default { grayScale: [0,0] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    blurOptions?: BlurOptions;
}
/**
 * 背景效果参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BackgroundEffectOptions {
    /**
     * 模糊半径，取值范围：[0, +∞)，默认为0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius: double | undefined;
    /**
     * 饱和度，取值范围：[0, +∞)，默认为1。推荐取值范围：[0, 50]。
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    saturation?: double;
    /**
     * 亮度，取值范围：[0, +∞)，默认为1。推荐取值范围：[0, 2]。
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    brightness?: double;
    /**
     * 颜色，默认透明色。
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * 背景模糊效果使用的取色模式，默认为DEFAULT。使用AVERAGE时color必须带有透明度，取色模式才生效。
     *
     * @default AdaptiveColor.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    adaptiveColor?: AdaptiveColor;
    /**
     * 灰阶模糊参数，默认为[0,0]。
     *
     * @default { grayScale: [0,0] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    blurOptions?: BlurOptions;
    /**
     * 模糊激活策略。
     * 
     * 默认值：BlurStyleActivePolicy.ALWAYS_ACTIVE
     *
     * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    policy?: BlurStyleActivePolicy;
    /**
     * 模糊不生效时使用的背景色。该参数需配合policy参数使用。当policy使模糊失效时，控件模糊效果会被移除，如果设置了inactiveColor会使用inactiveColor作为控件背景色。
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    inactiveColor?: ResourceColor;
}
/**
 * 前景效果参数，用于配置组件前景的模糊半径，控制前景内容的模糊程度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ForegroundEffectOptions {
    /**
     * 模糊半径，设置后组件前景呈现模糊效果，数值越大模糊程度越高。取值范围：[0, +∞)，0表示不产生模糊效果。传入负数时自动修正为0。
     * 仅在组件范围内生效，与backgroundBlur等效果类接口连用时超出组件范围的效果无法生效。undefined表示不产生模糊效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius: double | undefined;
}
/**
 * 选择器组件的文本样式，用于配置选择器中显示文本的外观属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PickerTextStyle {
    /**
     * 文本颜色，用于自定义选择器中文字的颜色。当需要使用特定颜色时传入，不传入时使用系统默认文本颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * 文本样式，包括字体大小、字体粗细、字体族等属性。当需要自定义选择器中文字的字体样式时传入，不传入时使用系统默认文本样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    font?: Font;
}
/**
 * 选择器弹窗的按钮样式，用于配置日期选择器、时间选择器等弹窗中确认和取消按钮的显示样式、角色和行为。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PickerDialogButtonStyle {
    /**
     * 按钮显示样式，用于设置按钮的显示类型。当需要自定义按钮显示样式时传入，不传入时使用默认按钮显示样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type?: ButtonType;
    /**
     * 按钮的样式和重要程度，用于设置按钮的视觉样式和交互重要级别。当需要自定义按钮样式时传入，不传入时使用默认按钮样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style?: ButtonStyleMode;
    /**
     * 按钮角色，用于定义按钮在对话框中的语义角色。可选值包括Normal（正常按钮）、Error（警示按钮），详见ButtonRole枚举说明。
     *默认值：ButtonRole.NORMAL。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    role?: ButtonRole;
    /**
     * 文本显示字号，用于自定义按钮文字的大小。单位：fp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontSize?: Length;
    /**
     * 文本显示颜色，用于自定义按钮文字的颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontColor?: ResourceColor;
    /**
     * 文本的字体粗细。number类型取值[100, 900]，取值间隔为100，取值越大，字体越粗。
     * string类型仅支持number类型取值的字符串形式，例如"200"，以及"bold"、"bolder"、
     * "lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。默认值：FontWeight.Normal。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontWeight?: FontWeight | int | string;
    /**
     * 文本的字体样式，用于指定文本是否使用斜体显示。可选值包括Normal（正常样式）、
     * Italic（斜体样式），详见FontStyle枚举说明。默认值：FontStyle.Normal。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontStyle?: FontStyle;
    /**
     * 字体列表，用于设置按钮文字使用的字体。支持传入单个字体名称字符串，或使用逗号分隔的
     * 多个字体名称（优先级从左到右，例如'Arial,HarmonyOS Sans'）。默认字体为'HarmonyOS Sans'，
     * 支持注册自定义字体。不传入时使用默认字体。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontFamily?: Resource | string;
    /**
     * 按钮背景色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * 圆角半径，用于设置按钮的圆角大小。单位：vp。当需要自定义按钮圆角样式时传入，不传入时使用默认圆角半径。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderRadius?: Length | BorderRadiuses;
    /**
     * 控制弹出弹窗后，Enter键是否默认由该按钮响应。弹出弹窗后，若未使用Tab键切换焦点，
     * primary为true的按钮将默认响应Enter键；若使用Tab键切换了焦点，则Enter键由当前获得焦点的按钮响应。
     * true：弹出弹窗后，未使用Tab键切换焦点时，按下Enter键会触发该按钮绑定的事件。
     * false：弹出弹窗后，未使用Tab键切换焦点时，按下Enter键不会触发该按钮绑定的事件。
     * 默认值：false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    primary?: boolean;
}
/**
 * 阴影类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ShadowType {
    /**
     * 颜色阴影，基于指定颜色值绘制阴影效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COLOR = 0,
    /**
     * 模糊阴影，基于组件内容模糊绘制阴影效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BLUR = 1
}
/**
 * 阴影属性集合，用于设置阴影的模糊半径、阴影的颜色、X轴和Y轴的偏移量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ShadowOptions {
    /**
     * 阴影模糊半径。
     * 默认值：0px。
     *
     *     undefined表示设置为默认值。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius: double | Resource | undefined;
    /**
     * 阴影类型。
     * <br>默认值：**COLOR**。
     *
     * @default ShadowType.COLOR
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type?: ShadowType;
    /**
     * 阴影的颜色。默认为黑色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: Color | string | Resource | ColoringStrategy;
    /**
     * 阴影的X轴偏移量。单位：px。默认值：0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetX?: double | Resource;
    /**
     * 阴影的Y轴偏移量。单位：px。默认值：0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetY?: double | Resource;
    /**
     * 阴影是否内部填充。**true**: 阴影在内部填充。
     * <br>**false**: 阴影不在内部填充。
     * <br>默认值：**false**。
     * <br>**说明**<br>该属性在textShadow中不生效。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fill?: boolean;
}
/**
 * 组件阴影效果。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ShadowStyle {
    /**
     * 超小阴影。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OUTER_DEFAULT_XS = 0,
    /**
     * 小阴影。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OUTER_DEFAULT_SM = 1,
    /**
     * 中阴影。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OUTER_DEFAULT_MD = 2,
    /**
     * 大阴影。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OUTER_DEFAULT_LG = 3,
    /**
     * 浮动小阴影。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OUTER_FLOATING_SM = 4,
    /**
     * 浮动中阴影。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OUTER_FLOATING_MD = 5
}
/**
 * 投影样式参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MultiShadowOptions {
    /**
     * 投影模糊半径。
     * API version 10及以前，5；API version 11及以后，。
     * 单位为：vp。取值约束：(0, +∞)。默认值：20。
     * <br>设置小于等于0的值时，按默认值显示。
     *
     * @default 20
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: double | Resource;
    /**
     * X轴偏移量。
     * 单位为：vp。默认值：5。
     *
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetX?: double | Resource;
    /**
     * Y轴偏移量。
     * 单位为：vp。默认值：5。
     *
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetY?: double | Resource;
}
/**
 * 扩展安全区域的枚举类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SafeAreaType {
    /**
     * 系统默认非安全区域，包括状态栏、导航栏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SYSTEM = 0,
    /**
     * 设备的非安全区域，例如刘海屏或挖孔屏区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CUTOUT = 1,
    /**
     * 软键盘区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    KEYBOARD = 2
}
/**
 * 扩展安全区域的边缘。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SafeAreaEdge {
    /**
     * 上方区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP = 0,
    /**
     * 下方区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOTTOM = 1,
    /**
     * 前部区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    START = 2,
    /**
     * 尾部区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    END = 3
}
/**
 * 沿边方向的内容对齐方式。
 * 上、下边沿水平方向对齐；起始边、结束边沿垂直方向对齐。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 static
 */
export declare enum SafeAreaInsetAlignment {
    /**
     * 对齐到沿边方向的起点。
     * 上、下边在从左到右布局时靠左，在从右到左布局时靠右；起始边、结束边靠上。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    START = 0,

    /**
     * 在沿边方向居中对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    CENTER = 1,

    /**
     * 对齐到沿边方向的终点。
     * 上、下边在从左到右布局时靠右，在从右到左布局时靠左；起始边、结束边靠下。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    END = 2
}

/**
 * 单个边缘内容及其布局配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 static
 */
export declare interface SafeAreaInsetEdgeConfig {
    /**
     * 用于创建该边内容的必填构建函数。
     * 构建结果为空时清除该边，不影响其他有效边。
     * 该边预留的空间等于内容在垂直于附着边方向上的实测尺寸加上 `spacing`。
     *
     * 每边 builder 应生成一个根组件，可以是普通组件或自定义组件。
     * 多个组件应由容器组成单根；多根构建结果不作保证。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    content: CustomBuilder;

    /**
     * 边缘内容与主体内容之间、指向容器内部的间隔。
     * 支持的单位为 vp、px、fp、lpx，取值须为非负有限值；不支持百分比或资源值。
     * 默认值：`0vp`。省略或传入非法值时回退为 `0vp`，不清除有效内容。
     * 间隔在内容测量之后计入占用，不预先扣减内容的测量空间。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    spacing?: LengthMetrics;

    /**
     * 内容沿附着边的对齐方式。
     * 默认值：`SafeAreaInsetAlignment.CENTER`。
     * 省略时使用 `SafeAreaInsetAlignment.CENTER`，不清除有效内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    alignment?: SafeAreaInsetAlignment;
}

/**
 * 组件四边的完整边缘内容配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 static
 */
export declare interface SafeAreaInsetOptions {
    /**
     * 附着在物理上边的内容配置。
     * 默认值：`undefined`，不设置该边内容。
     * 省略该边或传入 `undefined` 时清除该边原有内容，不影响其他有效边。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    top?: SafeAreaInsetEdgeConfig;

    /**
     * 附着在逻辑结束边的内容配置：从左到右布局时为右边，从右到左布局时为左边。
     * 默认值：`undefined`，不设置该边内容。
     * 省略该边或传入 `undefined` 时清除该边原有内容，不影响其他有效边。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    end?: SafeAreaInsetEdgeConfig;

    /**
     * 附着在物理下边的内容配置。
     * 默认值：`undefined`，不设置该边内容。
     * 省略该边或传入 `undefined` 时清除该边原有内容，不影响其他有效边。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    bottom?: SafeAreaInsetEdgeConfig;

    /**
     * 附着在逻辑起始边的内容配置：从左到右布局时为左边，从右到左布局时为右边。
     * 默认值：`undefined`，不设置该边内容。
     * 省略该边或传入 `undefined` 时清除该边原有内容，不影响其他有效边。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    start?: SafeAreaInsetEdgeConfig;
}
/**
 * 扩展布局安全区域的枚举类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LayoutSafeAreaType {
    /**
     * 设置后，组件的布局范围可扩展至组件级安全区([safeAreaPadding]{@link CommonMethod#safeAreaPadding})和页面级安全区（状态栏、导航栏、挖孔区）。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SYSTEM = 0
}
/**
 * 扩展安全区域的边缘。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LayoutSafeAreaEdge {
    /**
     * 上方区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP = 0,
    /**
     * 下方区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOTTOM = 1,
    /**
     * 前部区域。LTR模式时表示左侧区域，RTL模式表示右侧区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    START = 2,
    /**
     * 尾部区域。LTR模式时表示右侧区域，RTL模式表示左侧区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    END = 3,
    /**
     * 垂直区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    VERTICAL = 4,
    /**
     * 水平区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    HORIZONTAL = 5,
    /**
     * 全部区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ALL = 6
}
/**
 * 指定半模态的高度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SheetSize {
    /**
     * 指定半模态高度为半模态所在窗口的60%。
     * 
     * 在TV设备上半模态高度为半模态所在窗口的50%。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MEDIUM = 0,
    /**
     * 指定半模态高度几乎为半模态所在窗口的高度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LARGE = 1,
    /**
     * 指定半模态高度为适应内容的高度。
     * 
     * **说明：**
     * 
     * 1. FIT_CONTENT是半模态容器高度去适应孩子builder根节点的布局。此场景下builder根节点的高度不能使用百分比，两者不能相互依赖彼此的布局。
     * 2. 如果半模态使用SheetSize.FIT_CONTENT自适应模式，且类型设置为居中弹窗或跟手弹窗，API version 22及之前版本，高度大于最大高度，则显示最大高度，高度小于最小高度，则显示最小高度。
     * 
     * API version 23开始，高度大于最大高度，则显示最大高度，高度小于最小高度，按照实际自适应高度生效。
     * 
     * 其中居中弹窗和跟手弹窗最小高度为320vp，最大高度为窗口短边的90%。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FIT_CONTENT = 2
}
/**
 * 修饰键状态查询函数类型。
 *
 * @param { Array<string> } keys - 表示待查询的功能键。
 * @returns { boolean } 返回功能键状态的查询结果。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ModifierKeyStateGetter = (keys: Array<string>) => boolean;
/**
 * 基础事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BaseEvent {
    /**
     * 触发手势事件的元素对象。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    target: EventTarget;
    /**
     * 事件时间戳，触发事件时距离系统启动的时间间隔。
     * 单位：ns
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timestamp: long;
    /**
     * 事件输入设备的类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    source: SourceType;
    /**
     * 水平轴值。
     * 默认值：0
     * **说明：**
     * 当前仅在鼠标滚轮或触控板双指滑动触发的Pan手势，或使用Ctrl+鼠标滚轮触发的Pinch手势中可以获取。
     * 对于Shift+鼠标滚轮触发的横向滚动场景，axisHorizontal为0，滚动值体现在axisVertical中。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    axisHorizontal?: double;
    /**
     * 垂直轴值。
     * 默认值：0
     * **说明：**
     * 当前仅在鼠标滚轮或触控板双指滑动触发的Pan手势，或使用Ctrl+鼠标滚轮触发的Pinch手势中可以获取。
     * 对于Shift+鼠标滚轮触发的横向滚动场景，滚动值体现在axisVertical中。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    axisVertical?: double;
    /**
     * 按压的压力大小。
     * 默认值：0
     * 取值范围：[0,1]，典型值0.913168，压感大小与数值正相关。在部分设备中，由于设备的硬件参数配置不同，可能会返回大于1的值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressure: double;
    /**
     * 手写笔在设备平面上的投影与设备平面X轴的夹角。
     * 单位：deg
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tiltX: double;
    /**
     * 手写笔在设备平面上的投影与设备平面Y轴的夹角。
     * 单位：deg
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tiltY: double;
    /**
     * 手写笔绕笔身长轴方向旋转的角度，类似于螺丝刀使用时旋转的角度。取值范围：[-179, 179]，其中[0, 179]对应正角度值为[0, 179]，[-179, -1]的部分实际值为[65357, 65535]。0为硬件参考基准，不代表笔身无旋转。正值表示从基准方向顺时针旋转（指从笔身指向笔尖方向，使用右手定则确定的旋转方向为顺时针方向），负值表示从基准方向逆时针旋转。当持续旋转超过±179时，数值跳变到对侧边界继续变化。
     * 单位：deg
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rollAngle?: double;
    /**
     * 事件输入源的类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    sourceTool: SourceTool;
    /**
     * 获取功能键按压状态。支持功能键'Ctrl'|'Alt'|'Shift'。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getModifierKeyState?: ModifierKeyStateGetter;
    /**
     * 触发当前事件的输入设备ID。
     * 默认值：0
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deviceId?: int;
    /**
     * 事件发生的屏幕ID。
     * 默认值：0
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    targetDisplayId?: int;
    /**
     * 双指缩放比例。
     * 默认值：0
     * **说明：**
     * 仅在触控板上通过双指缩放操作触发的Pinch手势，或在轴事件中，可以获取该值；在其他场景下，获取到的将是默认值。
     * 缩放比例是指在双指缩放事件触发过程中，双指当前距离与最初按下时距离的比值。
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    axisPinch?: double;
}
/**
 * 图片边框或者渐变色边框设置接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BorderImageOption {
    /**
     * 设置边框图片左上角、右上角、左下角以及右下角的切割宽高。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    slice?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * 设置被切割的图片在边框上的重复方式。
     *
     * @default RepeatMode.Stretch
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeat?: RepeatMode;
    /**
     * 边框图源或者渐变色设置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    source?: string | Resource | LinearGradientOptions;
    /**
     * 设置图片边框宽度。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * 设置边框图片向外延伸距离。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outset?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * 设置边框图片是否中心填充。
     * true: 中心填充。
     * false: 非中心填充。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fill?: boolean;
}
/**
 * 用于组件宽度和高度的布局策略。提供matchParent、wrapContent、fixAtIdealSize三种布局策略选项，分别用于组件自适应父组件布局、根据内容自适应但不超过父组件尺寸、根据内容自适应且可超过父组件尺寸的场景。
 *
 * > **说明：**
 * >
 * > - LayoutPolicy支持设置三种布局策略：matchParent（自适应父组件布局）、wrapContent（根据内容自适应但不超过父组件尺寸的布局）和fixAtIdealSize（根据内容自适应，可能超过父组件尺寸的布局
 * > ）。具体示例代码参见[设置布局策略](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#示例5设置布局策略)。
 * >
 * > - wrapContent和fixAtIdealSize场景，组件无法通过内容确定大小时，如果组件大小有默认值，则按照默认值进行测算，组件最终以默认大小显示；如果没有默认值，则按照宽高(0,0)进行测算，组件最终以零尺寸显示。
 * >
 * > - 容器设置wrapContent，并且有子组件设置matchParent时（包括仅一边设置matchParent），容器先由确定大小的子组件撑大，设置matchParent的子组件再匹配容器大小；如果没有确定大小的子组件，容器和
 * > 子组件大小均为0。
 * >
 * > - LayoutPolicy的设置会被constraintSize约束，即当同时设置LayoutPolicy和constraintSize时，constraintSize的约束优先生效。
 * >
 * > - 从API version 15开始，仅Row和Column组件的width和height属性支持设置LayoutPolicy类型参数，其他组件设置LayoutPolicy类型参数后与不设置宽度或高度表现一致；从API
 * > version 20开始，所有基础组件均支持设置LayoutPolicy类型参数。
 * >
 * > - 当Row、Column、Flex组件主轴尺寸自适应子组件，且子组件A仅交叉轴设置matchParent时，API版本26.0.0之前，子组件A不参与Row、Column、Flex组件的主轴尺寸测量过程，此时Row、Column
 * > 、Flex组件主轴方向不自适应子组件A的尺寸；从API版本26.0.0开始，子组件A会参与Row、Column、Flex组件的主轴尺寸测量过程，此时Row、Column、Flex组件主轴方向会自适应子组件A的尺寸。交叉轴方向同理。
 * > 具体变更效果参见
 * > [示例6（子组件单方向设置matchParent效果）](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#示例6子组件单方向设置matchparent效果)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class LayoutPolicy {
    /**
     * 当前组件自适应父组件布局时，其大小与父组件内容区相等，不包括padding，border和safeAreaPadding。适用于需要组件填满父容器内容区的场景，例如列表项、卡片容器等。
     *
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly matchParent: LayoutPolicy;

    /**
     * 当前组件自适应子组件（内容）时，其大小与子组件（内容）相等，并且其大小受父组件内容区大小约束。适用于需要根据内容自动调整大小但不能超出父容器的场景，例如文本容器、弹窗内容区等。
     *
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly wrapContent: LayoutPolicy;

    /**
     * 当前组件自适应子组件（内容）时，其大小与子组件（内容）相等，并且其大小不受父组件内容区大小约束。适用于需要根据内容自动调整大小且可以超出父容器的场景，例如悬浮提示、下拉菜单等。
     *
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly fixAtIdealSize: LayoutPolicy;
}
/**
 * 继承于[BaseEvent]{@link BaseEvent}。
 *
 * @extends BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ClickEvent extends BaseEvent {
    /**
     * 点击位置在当前应用屏幕坐标系中的X坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * 点击位置在当前应用屏幕坐标系中的Y坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * 点击位置在当前应用窗口坐标系中的X坐标。onClick的distanceThreshold设置后，点击位置为抬手点。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * 点击位置在当前应用窗口坐标系中的Y坐标。onClick的distanceThreshold设置后，点击位置为抬手点。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * 点击位置在被点击元素为基准的组件坐标系中的X坐标。onClick的[distanceThreshold]{@link distanceThreshold}设置后，点击位置为抬手点。触发事件的是键盘或手柄时，点击位置为被点击元素的中心点。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 点击位置在被点击元素为基准的组件坐标系中的Y坐标。onClick的distanceThreshold设置后，点击位置为抬手点。触发事件的是键盘或手柄时，点击位置为被点击元素的中心点。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 表示事件是由左手点击还是右手点击触发。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hand?: InteractionHand;
    /**
     * 阻止默认事件。
     * > **说明：**
     * >
     * > 该接口仅支持部分组件使用，当前支持组件：[RichEditor]{@link RichEditor}、[Hyperlink]{@link Hyperlink}，不支持的组件在使用时会抛出异常。暂不支持异步调用和提供Modifier接口。
     *
     * @throws { BusinessError } 100017 - Component does not support prevent function.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preventDefault(): void;
    /**
     * 点击位置在全局坐标系中的X坐标。
     * 单位：vp
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;
    /**
     * 点击位置在全局坐标系中的Y坐标。
     * 单位：vp
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;

 	/**
 	 * 获取点击位置相对于当前组件实时位置的左上角坐标。在事件无法提供有效的实时组件坐标时，返回空值，使用前请进行判空处理。
 	 *
 	 * @returns { Coordinate2D } 获取点击位置相对于当前组件实时位置的左上角坐标。
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	default getCurrentLocalPosition(): Coordinate2D;
}
/**
 * 继承于[BaseEvent]{@link BaseEvent}。
 *
 * @extends BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface HoverEvent extends BaseEvent {
    /**
     * 鼠标光标或手写笔位置在当前组件为基准的组件坐标系中的X坐标。
     * 单位：vp
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: double;
    /**
     * 鼠标光标或手写笔位置在当前组件为基准的组件坐标系中的Y坐标。
     * 单位：vp
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: double;
    /**
     * 鼠标光标或手写笔位置在当前应用窗口坐标系中的X坐标。
     * 单位：vp
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX?: double;
    /**
     * 鼠标光标或手写笔位置在当前应用窗口坐标系中的Y坐标。
     * 单位：vp
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY?: double;
    /**
     * 鼠标光标或手写笔位置在当前应用屏幕坐标系中的X坐标。
     * 单位：vp
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX?: double;
    /**
     * 鼠标光标或手写笔位置在当前应用屏幕坐标系中的Y坐标。
     * 单位：vp
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY?: double;
    /**
     * 阻塞事件冒泡。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
    /**
     * 鼠标光标或手写笔位置在全局坐标系中的X坐标。
     * 单位：vp
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;
    /**
     * 鼠标光标或手写笔位置在全局坐标系中的Y坐标。
     * 单位：vp
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;
}
/**
 * 继承于[BaseEvent]{@link BaseEvent}。
 *
 * @extends BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MouseEvent extends BaseEvent {
    /**
     * 鼠标按键。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    button: MouseButton;
    /**
     * 鼠标动作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: MouseAction;
    /**
     * 鼠标位置在当前应用屏幕坐标系中的X坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * 鼠标位置在当前应用屏幕坐标系中的Y坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * 鼠标位置在当前应用窗口坐标系中的X坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * 鼠标位置在当前应用窗口坐标系中的Y坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * 鼠标位置在事件响应组件为基准的组件坐标系中的X坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 鼠标位置在事件响应组件为基准的组件坐标系中的Y坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 阻塞事件冒泡。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
    /**
     * 鼠标设备在二维平面X轴的移动增量。其数值为鼠标硬件的原始移动数据，使用物理世界中鼠标移动的距离单位进行表示。上报数值由硬件本身决定，并非屏幕的物理/逻辑像素。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rawDeltaX?: double;
    /**
     * 鼠标设备在二维平面Y轴的移动增量。其数值为鼠标硬件的原始移动数据，使用物理世界中鼠标移动的距离单位进行表示。上报数值由硬件本身决定，并非屏幕的物理/逻辑像素。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rawDeltaY?: double;
    /**
     * 当前按下的鼠标按键集合。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressedButtons?: MouseButton[];
    /**
     * 鼠标位置在全局坐标系中的X坐标。
     * 单位：vp
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * 鼠标位置在全局坐标系中的Y坐标。
     * 单位：vp
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;
    /**
     * 用于事件处理的唯一标识。
     * 取值范围：[0, +∞)
     * **说明：** 在使用[postInputEventWithStrategy]{@link postInputEventWithStrategy}接口分发事件时会使用该字段，事件每分发一次字段会增加100000。
     * 多次使用相同的eventHandleId进行事件分发将导致事件响应异常。仅在构造事件的时候需要对此字段赋值，其余情况开发者无需处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    eventHandleId?: int;
    /**
     * 获取鼠标位置相对于当前组件实时位置的左上角坐标。在事件无法提供有效的实时组件坐标时，返回空值，使用前请进行判空处理。
     *
     * @returns { Coordinate2D } 获取鼠标位置相对于当前组件实时位置的左上角坐标。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default getCurrentLocalPosition(): Coordinate2D;
    /**
     * 获取当前帧的所有历史点信息。历史点可用于实现更平滑的绘制效果。
     * 该接口仅能在[MouseEvent]{@link MouseEvent}中调用，用于获取触发[onMouse]{@link onMouse}时当前帧历史点的相关信息，不同设备每帧的鼠标事件上报频率不同，一帧通常只会上报一个鼠标事件，如果当前帧收到的[MouseEvent]{@link MouseEvent}数目大于1，会将该帧最后一个点通过[onMouse]{@link onMouse}返回，其余点作为历史点。
     *
     * @returns { MouseHistoricalPoint[] | undefined } 当前帧的所有历史点信息组成的数组。当系统内部运行环境损坏时，将返回undefined。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default getHistoricalPoints(): MouseHistoricalPoint[] | undefined;
}
/**
 * 鼠标事件历史点信息。
 * 历史点按时间顺序排列，获取到的第一个历史点是最早发生的事件的信息，最后一个是最新发生事件的信息。历史点的数量取决于系统事件队列的配置和硬件性能。历史点主要用于如下场景：
 * 1. 平滑绘制：使用历史点可以实现更平滑的绘制效果，特别是在鼠标快速移动时。
 * 2. 手势识别：通过分析历史点的轨迹，可以识别各种鼠标手势。
 * 3. 性能优化：在一个事件回调中处理多个历史点，减少事件处理频率，提升性能。
 * 4. 轨迹分析：分析鼠标移动轨迹，用于绘图应用或手势控制。
 * 5. 数据分析：历史点中的timestamp可用于计算鼠标移动速度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface MouseHistoricalPoint {
  /**
   * 鼠标指针相对于事件响应组件左上角的X坐标。
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  x: double;
  
  /**
   * 鼠标指针相对于事件响应组件左上角的Y坐标。
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  y: double;
  
  /**
   * 鼠标指针相对于当前应用左上角的X坐标。
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayX: double;
  
  /**
   * 鼠标指针相对于当前应用左上角的Y坐标。
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayY: double;
  
  /**
   * 鼠标指针相对于应用窗口左上角的X坐标。
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  windowX: double;
  
  /**
   * 鼠标指针相对于应用窗口左上角的Y坐标。
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  windowY: double;
 
  /**
   * 鼠标位置在全局坐标系中的X坐标。
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  globalDisplayX: double;
 
  /**
   * 鼠标位置在全局坐标系中的Y坐标。
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  globalDisplayY: double;
  
  /**
   * 鼠标事件的时间戳。
   * 单位：ns
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  timestamp: long;
}
/**
 * 无障碍悬浮事件对象，用于获取触发无障碍悬浮事件时的详细信息，包括无障碍悬浮动作类型（type）、手指相对于组件/窗口/屏幕的坐标（x、y、windowX、windowY、displayX、displayY、globalDisplayX、globalDisplayY）等属性。
 *
 * @extends BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AccessibilityHoverEvent extends BaseEvent {
    /**
     * 无障碍悬浮动作类型，包括HOVER_ENTER（手指按下时触发）、HOVER_MOVE（触摸移动时触发）、HOVER_EXIT（手指抬起时触发）和HOVER_CANCEL（打断取消当前触发的事件）。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: AccessibilityHoverType;
    /**
     * 手指位置相对于当前组件左上角的x轴坐标。
     * 单位：vp
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 手指位置相对于当前组件左上角的y轴坐标。
     * 单位：vp
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 手指位置相对于应用屏幕左上角的x轴坐标。
     * 单位：vp
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * 手指位置相对于应用屏幕左上角的y轴坐标。
     * 单位：vp
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * 手指位置相对于应用窗口左上角的x轴坐标。
     * 单位：vp
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * 手指位置相对于应用窗口左上角的y轴坐标。
     * 单位：vp
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * 点相对于全局显示的 X 坐标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * 相对于全局显示的点的 Y 坐标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;
}
/**
 * 触摸事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TouchObject {
    /**
     * 触摸事件的类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: TouchType;
    /**
     * 触摸点唯一标识符。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: int;
    /**
     * 触摸点在当前应用屏幕坐标系中的X坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * 触摸点在当前应用屏幕坐标系中的Y坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * 触摸点在当前应用窗口坐标系中的X坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * 触摸点在当前应用窗口坐标系中的Y坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * 触摸点在事件响应组件为基准的组件坐标系中的X坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 触摸点在事件响应组件为基准的组件坐标系中的Y坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 表示事件是由左手点击还是右手点击触发。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hand?: InteractionHand;
    /**
     * 当前手指按下的时间。
     * 单位：ns
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressedTime?: long;
    /**
     * 当前手指按压的压力值。
     * 取值范围：[0,65535)，压力越大，值越大。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressure?: double;
    /**
     * 当前手指按压区域的宽度。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: double;
    /**
     * 当前手指按压区域的高度。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: double;
    /**
     * 触摸点在全局坐标系中的X坐标。
     * 单位：vp
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * 触摸点在全局坐标系中的Y坐标。
     * 单位：vp
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;

 	/**
 	 * 获取触摸位置相对于当前组件实时位置的左上角坐标。在事件无法提供有效的实时组件坐标时，返回空值，使用前请进行判空处理。
 	 *
 	 * @returns { Coordinate2D } 获取触摸位置相对于当前组件实时位置的左上角坐标。
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	default getCurrentLocalPosition(): Coordinate2D;
}
/**
 * 历史点信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface HistoricalPoint {
    /**
     * 历史点对应触摸事件的基础信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    touchObject: TouchObject;
    /**
     * 历史点对应触摸事件中手指与屏幕的触摸区域大小。
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size: int;
    /**
     * 历史点对应触摸事件的压力大小。
     * 默认值：0
     * 取值范围：[0,65535)，压力越大，值越大。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    force: double;
    /**
     * 历史点对应触摸事件的时间戳，表示触发事件时距离系统启动的时间间隔。
     * 单位：ns
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timestamp: long;
}
/**
 * Touch Action Function Parameters
 *
 * @extends BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TouchEvent extends BaseEvent {
    /**
     * 触摸事件的类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: TouchType;
    /**
     * 全部屏幕触点（多指）的信息，每个元素代表一个触点。在使用该属性时，需要校验是否为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    touches: TouchObject[];
    /**
     * 发生变化而产生事件的触点信息。在使用该属性时，需要校验是否为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    changedTouches: TouchObject[];
    /**
     * 阻塞事件冒泡。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
    /**
     * 获取当前帧的所有历史点。不同设备每帧的触摸事件频率不同，且该接口仅能在[TouchEvent]{@link TouchEvent}中调用，用于获取触发[onTouch]{@link onTouch}时当前帧历史点的相关信息。[onTouch]{@link onTouch}一帧通常只会调用一次，如果当前帧收到的[TouchEvent]{@link TouchEvent}数目大于1，会将该帧最后一个点通过[onTouch]{@link onTouch}返回，其余点作为历史点。如果多指在同一帧上报事件，可能触发多次onTouch。
     *
     * @returns { Array<HistoricalPoint> | undefined } 由历史点组成的数组。ArkTS-Sta版本下，如果内部运行时环境异常，可能返回undefined。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getHistoricalPoints(): Array<HistoricalPoint> | undefined;
    /**
     * 阻止默认事件。
     * > **说明：**
     * >
     * > 该接口仅支持部分组件使用，当前支持组件：[Hyperlink]{@link Hyperlink}，不支持的组件在使用时会抛出异常。暂不支持异步调用和提供Modifier接口。
     *
     * @throws { BusinessError } 100017 - Component does not support prevent function.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preventDefault(): void;
    /**
     * 用于事件处理的唯一标识。
     * 取值范围：[0, +∞)
     * **说明：** 在使用[postInputEventWithStrategy]{@link postInputEventWithStrategy}接口分发事件时会使用该字段，事件每分发一次字段会增加100000。
     * 多次使用相同的eventHandleId进行事件分发将导致事件响应异常。仅在构造事件的时候需要对此字段赋值，其余情况开发者无需处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    eventHandleId?: int;
}
/**
 * 轴事件的对象说明，继承于[BaseEvent]{@link BaseEvent}。
 *
 * @extends BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AxisEvent extends BaseEvent {
    /**
     * 轴事件的动作类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: AxisAction;
    /**
     * 鼠标光标在当前应用屏幕坐标系中的X坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * 鼠标光标在当前应用屏幕坐标系中的Y坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * 鼠标光标在当前应用窗口坐标系中的X坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * 鼠标光标在当前应用窗口坐标系中的Y坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * 鼠标光标以目标组件为基准的组件坐标系中的X坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 鼠标光标以目标组件为基准的组件坐标系中的Y坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 鼠标轴滚动步长配置。
     * **说明：** 仅支持鼠标滚轮，取值范围：[0~65535]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollStep?: int;
    /**
     * 用于事件处理的唯一标识。
     * 取值范围：[0, +∞)
     * **说明：** 在使用[postInputEventWithStrategy]{@link postInputEventWithStrategy}接口分发事件时会使用该字段，事件每分发一次字段会增加100000。
     * 多次使用相同的eventHandleId进行事件分发将导致事件响应异常。仅在构造事件的时候需要对此字段赋值，其余情况开发者无需处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    eventHandleId?: int;
    /**
     * 激活事件冒泡。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    propagation(): void;
    /**
     * 获取此次轴事件的水平轴值。
     *
     * @returns { double } 水平轴值。<br>单位：vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getHorizontalAxisValue(): double;
    /**
     * 获取此次轴事件的垂直轴值。
     *
     * @returns { double } 垂直轴值。<br>单位：vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getVerticalAxisValue(): double;
    /**
     * 返回此次轴事件双指缩放的比例。
     *
     * @returns { double } 双指缩放比例。<br/> **说明：** 缩放比例指的是触控板双指缩放事件触发过程中双指当前的距离与双指最初按下时的距离的比值。<br/>默认值：0<br/>取值范围：[0, +∞)<br/>
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPinchAxisScaleValue(): double;
    /**
     * 检测此轴事件是否包含指定的轴类型。
     *
     * @param { AxisType } axisType - 轴事件的轴类型。
     * @returns { boolean } 此轴事件是否包含指定的轴类型。<br>true：包含指定的轴类型；false：不包含指定的轴类型。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hasAxis(axisType: AxisType): boolean;
    /**
     * 鼠标光标在全局坐标系中的X坐标。
     * 单位：vp
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * 鼠标光标在全局坐标系中的Y坐标。
     * 单位：vp
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;

 	/**
 	 * 获取鼠标光标位置相对于当前组件实时位置的左上角坐标。在事件无法提供有效的实时组件坐标时，返回空值，使用前请进行判空处理。
 	 *
 	 * @returns { Coordinate2D } 获取鼠标光标位置相对于当前组件实时位置的左上角坐标。
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	default getCurrentLocalPosition(): Coordinate2D;
}
/**
 * 组件尺寸变化时的回调类型。
 *
 * @param { SizeOptions } oldValue - 目标元素变化之前的宽高。
 * @param { SizeOptions } newValue - 目标元素变化之后的宽高。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SizeChangeCallback = (oldValue: SizeOptions, newValue: SizeOptions) => void;
/**
 * 自定义手势识别器判定回调类型。
 *
 * @param { BaseGestureEvent } event - 当前基础手势事件信息。<br/>**原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。<br/>**ArkTS-Dyn起始版本：** 12<br/>**ArkTS-Sta起始版本：** 24
 * @param { GestureRecognizer } current - 当前即将要响应的识别器对象。<br/>**原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。<br/>**ArkTS-Dyn起始版本：** 12<br/>**ArkTS-Sta起始版本：** 24
 * @param { Array<GestureRecognizer> } recognizers - 响应链上的其他手势识别器对象。<br/>**原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。<br/>**ArkTS-Dyn起始版本：** 12<br/>**ArkTS-Sta起始版本：** 24
 * @param { Array<TouchRecognizer> } [touchRecognizers] - 响应链上的Touch识别器对象。 默认值为null，表示在当前手势绑定组件及其子孙组件没有可响应的Touch识别 器。 [since 20]
 * @returns { GestureJudgeResult } 手势是否裁决成功的判定结果。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type GestureRecognizerJudgeBeginCallback = (event: BaseGestureEvent, current: GestureRecognizer, recognizers: Array<GestureRecognizer>, touchRecognizers?: Array<TouchRecognizer>) => GestureJudgeResult;
/**
 * 系统内置手势与响应链上其他组件的手势设置并行关系的回调事件类型。
 *
 * @param { GestureRecognizer } current - 当前组件的系统内置手势识别器，当前版本只提供内置的[GestureType]{@link GestureType}.PAN_GESTURE类型的手势识别器。
 * @param { Array<GestureRecognizer> } others - 响应链上更高优先级的其他组件相同类别的手势识别器。
 * @returns { GestureRecognizer } 与current识别器绑定并行关系的某个手势识别器。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ShouldBuiltInRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer;
/**
 * 手势与响应链上其他组件的手势设置并行关系的回调事件类型。
 *
 * @param { GestureRecognizer } current - 当前组件的手势识别器，当前仅支持[GestureType]{@link GestureType}.PAN_GESTURE类型的手势识别器。
 * @param { Array<GestureRecognizer> } others - 响应链上优先级高于当前组件的其他组件所持有的同类型[GestureType]{@link GestureType}的手势识别器。
 * @returns { GestureRecognizer } 与current识别器绑定并行关系的某个手势识别器。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ShouldRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer;
/**
 * 组件转场动画的结束回调类型。
 *
 * @param { boolean } transitionIn - 该入参表示转场动画的结束回调类型。<br/>该参数为true表示该转场回调是出现动画的结束回调，该参数为false表示该转场回调是消失动画的结束回调。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TransitionFinishCallback = (transitionIn: boolean) => void;
/**
 * 动态指定手势识别器是否参与手势处理的回调事件类型，回调内参数的生命周期跟随回调本身，参数内的方法仅支持在回调内同步使用。
 *
 * @param { BaseGestureEvent } event - 触摸测试结束后的基础手势事件的信息。 <br/>**说明：** <br/>仅包含BaseGestureEvent的信息，不包含其子类扩展信息。<br/>axisHorizontal和axisVertical的值为0。
 * @param { Array<GestureRecognizer> } recognizers - 触摸测试结束后，所有手势识别器对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TouchTestDoneCallback = (event: BaseGestureEvent, recognizers: Array<GestureRecognizer>) => void;
/**
 * 定义在[onGestureCollectIntercept]{@link onGestureCollectIntercept}中使用的回调类型。
 *
 * @param { Array<GestureRecognizer> } recognizers - 响应链上组件的手势识别器对象。
 * @param { Array<TouchRecognizer> } [touchRecognizers] - 响应链上组件的触摸识别器对象。<br/>默认值为null。
 * @returns { GestureCollectIntervention } 手势收集干预结果。<br/>取值为异常值时按照GestureCollectIntervention.[CONTINUE]{@link CONTINUE}处理。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type GestureCollectInterceptCallback = (recognizers: Array<GestureRecognizer>,
    touchRecognizers?: Array<TouchRecognizer>) => GestureCollectIntervention;
/**
 * 当绑定该方法的组件判断是否需要键盘时，将触发此回调。前提条件：组件需可获焦，否则本接口不生效。
 *
 * @returns { boolean } 是否需要键盘。<br>若此回调的返回值为`true`，则表明该组件需要键盘；返回值为`false`，则表明该组件不需要键盘。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export type OnNeedSoftkeyboardCallback = () => boolean;
/**
 * 图像像素类，用于读取或写入图像数据以及获取图像信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PixelMap = image.PixelMap;


/**
 * 带有release函数的像素图对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
declare interface PixelMapMock {
  /**
   * 释放函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  release(): void;
}

/**
 * 当设置[DragResult]{@link DragResult}为DROP_ENABLED后，可设置DragBehavior为复制（COPY）或剪切（MOVE）。当DragBehavior为复制（COPY）时，拖拽对象的角标会显示加号；为剪切（MOVE）时，拖拽对象的角标不会显示加号。DragBehavior用来向开发者描述数据的处理方式是复制（COPY）还是剪切（MOVE），但无法最终决定对数据的实际处理方式。DragBehavior会通过onDragEnd带回给数据拖出方，发起拖拽的一方可通过DragBehavior来区分做出的是复制（COPY）还是剪切（MOVE）数据的不同行为。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DragBehavior {
    /**
     * 指定对数据的处理方式为复制。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COPY = 0,
    /**
     * 指定对数据的处理方式为剪切。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MOVE = 1
}
/**
 * 拖拽动画类型。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DragAnimationType {
    /**
     * 使用默认拖拽动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    DEFAULT = 0,
    /**
     * 使用跟手变形拖拽动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    FOLLOW_HAND_MORPH = 1
}
/**
 * 定义统一数据对象中所有数据记录的属性，包含时间戳、标签、粘贴范围以及一些附加数据等。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type UnifiedData = unifiedDataChannel.UnifiedData;
/**
 * 描述统一数据对象的数据摘要，包括数据类型和大小。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Summary = unifiedDataChannel.Summary;
/**
 * 标准化数据类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type UniformDataType = uniformTypeDescriptor.UniformDataType;
/**
 * 作为startDataLoading的入参对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DataSyncOptions = unifiedDataChannel.GetDataParams;
/**
 * 落入操作时使用的数据加载参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type DataLoadParams = unifiedDataChannel.DataLoadParams;
/**
 * 定义回调上下文信息的类，用于在悬停检测回调中传递给应用程序，使其能访问拖拽状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type SpringLoadingContext = dragController.SpringLoadingContext;
/**
 * 定义拖拽的悬停检测配置参数的接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type DragSpringLoadingConfiguration = dragController.DragSpringLoadingConfiguration;
/**
 * 定义拖拽操作的结果及组件的落入选定状态。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DragResult {
    /**
     * 拖拽结果尚未设置，在[onDragStart]{@link onDragStart}，[onDragEnter]{@link onDragEnter}，[onDragMove]{@link onDragMove}，[onDragLeave]{@link onDragLeave}，[onDrop]{@link onDrop}中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    UNKNOWN = -1,
    /**
     * 拖拽成功，在[onDrop]{@link onDrop}中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DRAG_SUCCESSFUL = 0,
    /**
     * 拖拽失败，在[onDrop]{@link onDrop}中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DRAG_FAILED = 1,
    /**
     * 拖拽取消，在[onDrop]{@link onDrop}中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DRAG_CANCELED = 2,
    /**
     * 组件允许落入，在[onDragEnter]{@link onDragEnter}，[onDragMove]{@link onDragMove}，[onDragLeave]{@link onDragLeave}中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DROP_ENABLED = 3,
    /**
     * 组件不允许落入，在[onDragEnter]{@link onDragEnter}，[onDragMove]{@link onDragMove}，[onDragLeave]{@link onDragLeave}中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DROP_DISABLED = 4
}
/**
 * 混合模式。
 *
 * > **说明：**
 * >
 * > blendMode枚举中，s表示源像素，d表示目标像素，sa表示源像素透明度，da表示目标像素透明度，r表示混合后像素，ra表示混合后像素透明度。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BlendMode {
    /**
     * 将上层图像直接覆盖到下层图像上，不进行任何混合操作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 0,
    /**
     * 将源像素覆盖的目标像素清除为完全透明。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CLEAR = 1,
    /**
     * r = s，只显示源像素。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SRC = 2,
    /**
     * r = d，只显示目标像素。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DST = 3,
    /**
     * r = s + (1 - sa) * d，将源像素按照透明度进行混合，覆盖在目标像素上。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SRC_OVER = 4,
    /**
     * r = d + (1 - da) * s，将目标像素按照透明度进行混合，覆盖在源像素上。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DST_OVER = 5,
    /**
     * r = s * da，只显示源像素中与目标像素重叠的部分。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SRC_IN = 6,
    /**
     * r = d * sa，只显示目标像素中与源像素重叠的部分。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DST_IN = 7,
    /**
     * r = s * (1 - da)，只显示源像素中与目标像素不重叠的部分。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SRC_OUT = 8,
    /**
     * r = d * (1 - sa)，只显示目标像素中与源像素不重叠的部分。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DST_OUT = 9,
    /**
     * r = s * da + d * (1 - sa)，在源像素和目标像素重叠的地方绘制源像素，在源像素和目标像素不重叠的地方绘制目标像素。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SRC_ATOP = 10,
    /**
     * r = d * sa + s * (1 - da)，在源像素和目标像素重叠的地方绘制目标像素，在源像素和目标像素不重叠的地方绘制源像素。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DST_ATOP = 11,
    /**
     * r = s * (1 - da) + d * (1 - sa)，在源像素和目标像素重叠的地方不显示像素，不重叠的地方显示源像素和目标像素。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    XOR = 12,
    /**
     * r = min(s + d, 1)，将源像素值与目标像素值相加，并将结果作为新的像素值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PLUS = 13,
    /**
     * r = s * d，将源像素与目标像素进行乘法运算，并将结果作为新的像素值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MODULATE = 14,
    /**
     * r = s + d - s * d，将两个图像的像素值相加，然后减去它们的乘积来实现混合。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SCREEN = 15,
    /**
     * 根据目标像素来决定使用MULTIPLY混合模式还是SCREEN混合模式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OVERLAY = 16,
    /**
     * rc = s + d - max(s * da, d * sa), ra = kSrcOver，当两个颜色重叠时，较暗的颜色会覆盖较亮的颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DARKEN = 17,
    /**
     * rc = s + d - min(s * da, d * sa), ra = kSrcOver，将源图像和目标图像中的像素进行比较，选取两者中较亮的像素作为最终的混合结果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LIGHTEN = 18,
    /**
     * 使目标像素变得更亮来反映源像素。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COLOR_DODGE = 19,
    /**
     * 使目标像素变得更暗来反映源像素。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COLOR_BURN = 20,
    /**
     * 根据源像素的值来决定目标像素变得更亮或者更暗。根据源像素来决定使用MULTIPLY混合模式还是SCREEN混合模式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    HARD_LIGHT = 21,
    /**
     * 根据源像素来决定使用LIGHTEN混合模式还是DARKEN混合模式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SOFT_LIGHT = 22,
    /**
     * rc = s + d - 2 * (min(s * da, d * sa)), ra = kSrcOver，对比源像素和目标像素，亮度更高的像素减去亮度更低的像素，产生高对比度的效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DIFFERENCE = 23,
    /**
     * rc = s + d - 2 * (s * d), ra = kSrcOver，对比源像素和目标像素，亮度更高的像素减去亮度更低的像素，产生柔和的效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    EXCLUSION = 24,
    /**
     * r = s * (1 - da) + d * (1 - sa) + s * d，将源图像与目标图像进行乘法混合，得到一张新的图像。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MULTIPLY = 25,
    /**
     * 保留源图像的亮度和饱和度，但会使用目标图像的色调来替换源图像的色调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    HUE = 26,
    /**
     * 保留目标像素的亮度和色调，但会使用源像素的饱和度来替换目标像素的饱和度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SATURATION = 27,
    /**
     * 保留源像素的饱和度和色调，但会使用目标像素的亮度来替换源像素的亮度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COLOR = 28,
    /**
     * 保留目标像素的色调和饱和度，但会用源像素的亮度替换目标像素的亮度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LUMINOSITY = 29
}
/**
 * 标识如何将指定的混合模式应用于视图的内容。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BlendApplyType {
    /**
     * 在目标图像上按顺序混合视图的内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FAST = 0,
    /**
     * 将此组件和子组件内容绘制到离屏画布上，然后整体进行混合。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OFFSCREEN = 1,
    /**
     * 创建离屏画布时，先拷贝一份带有背景的画布作为初始化底色（BlendApplyType.OFFSCREEN类型的画布初始为透明背景），再将此组件和子组件内容绘制到离屏画布上，然后整体进行混合。两者在其他功能特性上与
     * BlendApplyType.OFFSCREEN保持一致。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    OFFSCREEN_WITH_BACKGROUND = 2
}
/**
 * 拖拽事件信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DragEvent {
    /**
     * 获取当前拖拽点相对于屏幕左上角的x轴坐标。
     *
     * @returns { double } 当前拖拽点相对于屏幕左上角的x轴坐标，单位为vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDisplayX(): double;
    /**
     * 获取当前拖拽点相对于屏幕左上角的y轴坐标。
     *
     * @returns { double } 当前拖拽点相对于屏幕左上角的y轴坐标，单位为vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDisplayY(): double;
    /**
     * 获取拖拽点相对于窗口左上角的x轴坐标。
     *
     * @returns { double } 当前拖拽点相对于窗口左上角的x轴坐标，单位为vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getWindowX(): double;
    /**
     * 获取拖拽点相对于窗口左上角的y轴坐标。
     *
     * @returns { double } 当前拖拽点相对于窗口左上角的y轴坐标，单位为vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getWindowY(): double;
    /**
     * 切换复制和剪贴模式的角标显示状态。
     * 默认值：DragBehavior.COPY。
     *
     * @default COPY
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dragBehavior: DragBehavior;
    /**
     * 当拖拽结束时，是否禁用系统默认落位动效。
     * 应用可将该值设定为true来禁用系统默认落位动效，并实现自己的自定义落位动效。
     * 当不配置或设置为false时，系统默认落位动效生效，当[setResult]{@link setResult}设置为DRAG_SUCCESSFUL时，落位为缩小消失动效，不为DRAG_SUCCESSFUL时，则为放大消失动效。
     * 当未禁用系统默认落位动效时，应用不应再实现自定义动效，以避免动效上的冲突。
     * 默认值：false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    useCustomDropAnimation: boolean;
    /**
     * 设置拖拽过程中需要自动隐藏的组件uniqueId，支持传入单个uniqueId或数组。
     * 仅在[onDragStart]{@link onDragStart}回调中设置生效。拖拽成功发起后，系统会在显示拖拽预览窗口前隐藏目标组件。
     * 若拖拽源本身也需要隐藏，需要同时传入拖拽源组件的uniqueId。
     * 组件的uniqueId可通过UIContext.getFrameNodeById()配合FrameNode.getUniqueId()获取。
     * 开发者应在[onDragEnd]{@link onDragEnd}或[onDrop]{@link onDrop}中恢复组件显示状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    autoHideComponentUniqueIds?: int | int[];
    /**
     * 设置拖拽动画类型。该属性仅支持在[onDragStart]{@link onDragStart}阶段设置，可在[onDragStart]{@link onDragStart}、[onDragEnter]{@link onDragEnter}、[onDragMove]{@link onDragMove}、[onDragLeave]{@link onDragLeave}、[onDrop]{@link onDrop}、[onDragEnd]{@link onDragEnd}回调中获取。
     * 默认值为DEFAULT。
     *
     * @default DragAnimationType.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    dragAnimationType?: DragAnimationType;
    /**
     * 向DragEvent中设置用于拖拽的数据。
     *
     * @param { UnifiedData } unifiedData - 拖拽相关的数据。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setData(unifiedData: UnifiedData): void;
    /**
     * 获取拖拽相关数据。
     *
     * @returns { UnifiedData | undefined } 从DragEvent中获取拖拽相关数据。数据获取结果请参考错误码说明。
     * @throws { BusinessError } 190001 - Data not found.
     * @throws { BusinessError } 190002 - Data error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getData(): UnifiedData | undefined;
    /**
     * 获取所拖拽数据的概要，包括数据类型及大小信息；在延迟拖拽场景下，只能获取到数据类型信息。
     *
     * @returns { Summary | undefined } 拖拽相关数据的概要。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getSummary(): Summary | undefined;
    /**
     * 在DragEvent中设置拖拽结果。
     *
     * @param { DragResult } dragResult - 拖拽结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setResult(dragResult: DragResult): void;
    /**
     * 获取拖拽结果。
     *
     * @returns { DragResult } 从DragEvent中获取的拖拽结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getResult(): DragResult;
    /**
     * 获取拖拽预览图相对于当前窗口的位置，以及预览图尺寸信息。
     *
     * @returns { Rectangle } 拖拽预览图相对于当前窗口的位置，以及预览图尺寸信息，单位vp，其中x和y代表预览图左上角的窗口坐标，width和height代表预览图的尺寸。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPreviewRect(): Rectangle;
    /**
     * 获取当前拖拽的x轴方向拖动速度。
     *
     * @returns { double } 当前拖拽的x轴方向拖动速度。坐标轴原点为屏幕左上角，单位为vp，分正负方向速度，从左往右为正，反之为负。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getVelocityX(): double;
    /**
     * 获取当前拖拽的y轴方向拖动速度。
     *
     * @returns { double } 当前拖拽的y轴方向拖动速度。坐标轴原点为屏幕左上角，单位为vp，分正负方向速度，从上往下为正，反之为负。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getVelocityY(): double;
    /**
     * 获取当前拖拽的主方向拖动速度。
     *
     * @returns { double } 当前拖拽的主方向拖动速度。为xy轴方向速度的平方和的算术平方根，单位为vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getVelocity(): double;
    /**
     * 获取功能键按压状态。支持功能键 'Ctrl' | 'Alt' | 'Shift'。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getModifierKeyState?: ModifierKeyStateGetter;
    /**
     * 设置自定义落位动效的执行函数，仅在[useCustomDropAnimation]{@link useCustomDropAnimation}为true时有效。
     *
     * @param { VoidCallback } customDropAnimation - 在此回调函数中实现自定义落位动效。<br/> **说明：** <br/>1. 该接口仅在onDrop回调中使用有效。<br/> 2. 使用前需设置useCustomDropAnimation为true，否则该接口不生效。<br/> 3. 不要在动画callback中实现与动效无关的逻辑，避免影响执行效率。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    executeDropAnimation(customDropAnimation: VoidCallback): void;
    /**
     * 执行跟手变形落位动效，动效执行完成后触发回调，该回调由系统在拖拽框架动效结束后触发。使用callback异步回调。
     * > **说明：**
     * >
     * > 1. 该接口仅在[dragAnimationType]{@link dragAnimationType}设置为DragAnimationType.FOLLOW_HAND_MORPH时生效。
     * > 2. 不要在回调中实现与动效无关的逻辑，避免影响执行效率。
     *
     * @param { VoidCallback } onAnimationFinished - 拖拽框架动效结束后触发的回调。
     * @param { string } [animationOption] - 落位动效参数。<br> 参数为JSON字符串格式，包含以下字段：<br> **CubicCurveEnable**: boolean，表示是否启用三次曲线动画。设置为true时启用三次曲线动画，设置为false时不启用。<br> **SpringEnable**: boolean，表示是否启用弹簧动画。设置为true时启用弹簧动画效果，设置为false时不启用。<br> **dropAnimationCurve**: number[]，表示落位动画曲线参数，其含义由SpringEnable和CubicCurveEnable决定（SpringEnable优先级更高）。当SpringEnable为true时，数组长度为3，格式为[response, dampingRatio, blendDuration]，对应[curves.springMotion]{@link curves.springMotion}的弹簧曲线参数；当SpringEnable为false且CubicCurveEnable为true时，数组长度为4，格式为[x1, y1, x2, y2]，对应[curves.cubicBezierCurve]{@link curves.cubicBezierCurve}的三次贝塞尔曲线控制点参数。<br> **说明：** SpringEnable优先级高于CubicCurveEnable，当两者同时为true时，以弹簧动画为准。当SpringEnable和CubicCurveEnable均未正确设置时，使用默认弹簧动效。<br> **dropPosition**: number[]，落位位置坐标。数组长度为2，格式为[x, y]，单位为px，表示拖拽元素落位时的目标位置坐标，取值范围为(-∞, +∞)。<br> **dropSize**: number[]，落位尺寸。数组长度为2，格式为[width, height]，单位为px，表示拖拽元素落位时的目标尺寸，取值范围为(0, +∞)。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    executeFollowHandMorphDropAnimation(onAnimationFinished: VoidCallback, animationOption?: string): void;
    /**
     * 异步获取拖拽数据，并通知开发者当前数据同步进度，仅支持在onDrop阶段使用。
     *
     * @param { DataSyncOptions } options - 获取拖拽数据时的参数，包含目标路径、文件冲突选项、进度条类型等。数据传输过程中可使用[cancelDataLoading]{@link cancelDataLoading}接口取消数据加载。
     * @returns { string | undefined } 拖拽数据的标识，用于区分每次拖拽。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 190003 - Operation not allowed for current phase.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    startDataLoading(options: DataSyncOptions): string | undefined;
    /**
     * 获取当前拖拽事件发生时所在的屏幕ID，不支持在[onDragEnd]{@link onDragEnd}阶段使用。
     *
     * @returns { int } 当前拖拽事件发生时所在的屏幕ID。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDisplayId(): int;
    /**
     * 获取拖起方包名。
     *
     * @returns { string } 拖起方的包名。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getDragSource(): string;
    /**
     * 获取是否是跨设备拖拽，跨设备拖拽时为true。
     *
     * @returns { boolean } 是否是跨设备拖拽，返回true表示是跨设备拖拽，返回false表示不是跨设备拖拽。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isRemote(): boolean;
    /**
     * 设置起拖方延迟提供数据。使用此方法向系统提供数据加载参数，而不是直接提供完整的数据对象。当用户在目标应用程序上落入时，系统将使用此参数从起拖方请求实际数据。与[setData]{@link setData}方法同时使用，以最后调用的方法为准。该接口仅在[onDragStart]{@link onDragStart}回调中生效。
     *
     * @param { DataLoadParams } dataLoadParams - 落入操作时使用的数据加载参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    setDataLoadParams(dataLoadParams: DataLoadParams): void;
    /**
     * 使用系统的内置动效，且该动效只有系统应用可使用。仅支持在onDrop阶段使用。
     *
     * @param { string } configuration - 动效配置参数，字符串内容为json格式。
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 190003 - Operation not allowed for current phase.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    enableInternalDropAnimation(configuration: string): void;
    /**
     * 当前拖拽点相对于全局屏幕的左上角的X坐标。
     *
     * @returns { double } 返回当前拖拽点相对于全局屏幕的左上角的X坐标。<br/>单位：vp，取值范围：(-∞, +∞)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getGlobalDisplayX(): double;

    /**
     * 当前拖拽点相对于全局屏幕的左上角的Y坐标。
     *
     * @returns { double } 返回当前拖拽点相对于全局屏幕的左上角的Y坐标。<br/>单位：vp<br/>取值范围：(-∞, +∞)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getGlobalDisplayY(): double;

    /**
     * 设置拖拽背板是否可见。
     * 在[onDragStart]{@link CommonMethod#onDragStart}、[onDragEnter]{@link CommonMethod#onDragEnter}、[onDragMove]{@link CommonMethod#onDragMove}回调中调用。
     * 调用接口设为false后，拖拽背板立即隐藏，不影响事件分发和数据传输。
     * 离开目标组件区域或者拖拽结束时拖拽背板自动恢复显示。
     * 当开发者未调用该接口设置是否可见时，系统默认会显示拖拽背板。
     * @param { boolean } visible - 设置拖拽背板是否可见。true：显示拖拽背板；false：隐藏拖拽背板。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    setDragWindowVisible(visible: boolean): void;
}
/**
 * 拖拽事件的回调函数。
 *
 * @param { DragEvent } event - event为拖拽事件信息，包括拖拽点坐标。
 * @param { string } [extraParams] - extraParams为拖拽事件额外信息，需要解析为JSON格式，参考[extraParams]{@link extraParams}说明。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnDragEventCallback = (event: DragEvent, extraParams?: string) => void;
/**
 * 设置落入过程的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DropOptions {
    /**
     * 设置拖拽是否提前获取数据。true表示不提前获取数据，false表示提前获取数据，默认值为false。
     * **说明：**
     * 当使用[startDataLoading]{@link startDataLoading}获取数据时需设置该参数为true，防止拖拽提前获取数据。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disableDataPrefetch?: boolean;
}
/**
 * 按键事件信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface KeyEvent {
    /**
     * 按键的类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: KeyType;
    /**
     * 按键的键值。按键设备提供的键值请参考[KeyCode]{@link KeyCode}。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyCode: int;
    /**
     * 按键的名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyText: string;
    /**
     * 触发当前按键的输入设备类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keySource: KeySource;
    /**
     * 触发当前按键的输入设备ID。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deviceId: int;
    /**
     * 按键发生时元键（即键盘左下角紧挨Ctrl键或Fn标记了窗口logo的按键）的状态，1表示按压态，0表示未按压态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    metaKey: int;
    /**
     * 事件时间戳。触发事件时距离系统启动的时间间隔，单位：ns。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timestamp: long;
    /**
     * 阻塞事件冒泡传递。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
    /**
     * 按键对应的意图。
     * 默认值：IntentionCode.INTENTION_UNKNOWN。
     *
     * @default IntentionCode.INTENTION_UNKNOWN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    intentionCode: IntentionCode;
    /**
     * 获取功能键按压状态。支持功能键 'Ctrl'|'Alt'|'Shift'。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getModifierKeyState?: ModifierKeyStateGetter;
    /**
     * 按键的Unicode码值。支持范围为非空格的基本拉丁字符：0x0021-0x007E，不支持字符为0。组合键场景下，返回当前keyEvent对应按键的Unicode码值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    unicode?: long;
    /**
     * Whether Num Lock is on
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isNumLockOn?: boolean;
    /**
     * Whether Caps Lock is on
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isCapsLockOn?: boolean;
    /**
     * Whether Scroll Lock is on
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isScrollLockOn?: boolean;
}
/**
 * 焦点轴事件的对象说明，继承于[BaseEvent]{@link BaseEvent}。
 *
 * @extends BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FocusAxisEvent extends BaseEvent {
    /**
     * 焦点轴事件的轴值表。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    axisMap: Map<AxisModel, double>;
    /**
     * 阻止事件冒泡。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
}
/**
 * 组件接收表冠事件的数据结构。内容包括时间戳、旋转角速度、旋转角度、表冠动作和阻止事件冒泡。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CrownEvent {
    /**
     * 时间戳。触发事件时距离系统启动的时间间隔。
     * 单位：ns
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timestamp: long;
    /**
     * 旋转角速度。
     * 单位：deg/s
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angularVelocity: double;
    /**
     * 相对旋转角度。
     * 单位：deg
     * 取值范围:[-360, 360]。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    degree: double;
    /**
     * 表冠动作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: CrownAction;
    /**
     * 阻塞事件冒泡。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
}
/**
 * 半模态、全模态的公共配置接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BindOptions {
    /**
     * 半模态页面的背板颜色。
     * 
     * 默认值：Color.White。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * 半模态页面显示（动画结束后）回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAppear?: VoidCallback;
    /**
     * 半模态页面回退（动画结束后）回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDisappear?: VoidCallback;
    /**
     * 半模态页面显示（动画开始前）回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillAppear?: VoidCallback;
    /**
     * 半模态页面回退（动画开始前）回调函数。
     * 
     * **说明：**
     * 
     * 不允许在onWillDisappear函数中修改状态变量，可能会导致组件行为不稳定。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDisappear?: VoidCallback;
}
/**
 * 全屏模态页面关闭操作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DismissContentCoverAction {
    /**
     * 全屏模态页面关闭回调函数。开发者需要退出页面时调用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dismiss(): void;
    /**
     * 返回本次拦截全屏模态页面退出的事件原因。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reason: DismissReason;
}
/**
 * 继承自[BindOptions]{@link BindOptions}。
 * 
 * 全屏模态页面内容选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ContentCoverOptions extends BindOptions {
    /**
     * 全屏模态页面的系统转场方式。
     * 
     * 默认值：ModalTransition.DEFAULT。
     * 
     * **说明：**
     * 
     * 同transition同时设置时，此属性不生效。
     *
     * @default ModalTransition.Default
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    modalTransition?: ModalTransition;
    /**
     * 全屏模态页面交互式关闭回调函数。
     * 
     * **说明：**
     * 
     * 当用户执行back事件关闭交互操作时，如果注册该回调函数，则不会立刻关闭。在回调函数中可以通过reason得到阻拦关闭页面的操作类型，从而根据原因选择是否关闭全屏模态页面。在onWillDismiss回调中，不能再做
     * onWillDismiss拦截。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: Callback<DismissContentCoverAction>;
    /**
     * 全屏模态页面的自定义转场方式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * 全屏模态是否适配安全区域，true表示全屏模态适配安全区域，将内容限制在安全区内，避让导航条和状态栏，false表示不做处理，和之前的样式保持一致。默认值为false。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableSafeArea?: boolean;
}
/**
 * 半模态面板的标题。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SheetTitleOptions {
    /**
     * 半模态面板的主标题。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    title: ResourceStr;
    /**
     * 半模态面板的副标题。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    subtitle?: ResourceStr;
}
/**
 * 半模态弹窗的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SheetType {
    /**
     * 底部弹窗。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOTTOM = 0,
    /**
     * 居中弹窗。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CENTER = 1,
    /**
     * 跟手弹窗。跟手弹窗面板不支持跟手滑动，下滑面板不关闭。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    POPUP = 2,
    /**
     * 侧边弹窗。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SIDE = 3,
    /**
     * 全屏弹窗。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CONTENT_COVER = 4
}
/**
 * 半模态的显示层级模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SheetMode {
    /**
     * 设置半模态面板在当前UIContext内顶层显示，在所有页面之上。和弹窗类组件显示在一个层级。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OVERLAY = 0,
    /**
     * 设置半模态面板在当前页面内的顶层显示。 
     * 
     * **说明：**
     * 
     * 目前只支持挂载在Page或者NavDestination节点上，若有NavDestination优先挂载在NavDestination上。只支持在这两种页面内顶层显示。
     * 
     * 该模式下新起的页面可以覆盖在半模态弹窗上，页面返回后该半模态依旧存在，半模态面板内容不丢失。 
     * 
     * 该模式下需确保目标页面节点如Page节点已挂载上树，再拉起半模态，否则半模态将无法挂载到对应的页面节点内。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    EMBEDDED = 1
}
/**
 * 半模态面板上下滑动时的内容更新方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ScrollSizeMode {
    /**
     * 设置半模态面板跟手滑动结束后更新内容显示区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FOLLOW_DETENT = 0,
    /**
     * 设置半模态面板在滑动过程中持续更新内容显示区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CONTINUOUS = 1
}
/**
 * 半模态激活输入法时对软键盘的避让方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SheetKeyboardAvoidMode {
    /**
     * 设置半模态不避让软键盘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 0,
    /**
     * 设置半模态先上抬面板避让软键盘；
     * 
     * 当上抬至最大高度仍不足以避让软键盘时，则通过压缩整体内容完成避让。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TRANSLATE_AND_RESIZE = 1,
    /**
     * 设置半模态通过压缩整体内容避让软键盘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RESIZE_ONLY = 2,
    /**
     * 设置半模态先上抬面板避让软键盘；
     * 
     * 当上抬至最大高度仍不足以避让软键盘时，则通过滚动内容完成避让。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TRANSLATE_AND_SCROLL = 3,
    /**
     * 设置半模态popup样式弹窗避让软键盘。
     * 
     * 1. 避让软键盘时，在popup样式弹窗当前显示位置无法容纳弹窗尺寸的前提下，遵循先垂直翻转避让，后尝试90°水平旋转避让的规则调整显示位置，以预设方向为下方为例，调整避让顺序依次为：下、上、右、左。
     * 2. 如果设置的对齐方式导致组件布局超出窗口范围，将根据该对齐方式在水平或垂直方向上进行位移，直至组件完全显示在窗口内。
     * 3. 避让软键盘时，如果在四个方向上均无法容纳当前的popup样式弹窗，处理方式遵循开发者设置的placementOnTarget属性：
     * 
     * （1）若属性值为true，将依据设定的placement，向其镜像方向平移，直至弹窗能够完全显示。
     * 
     * （2）若属性值为false，则在四个方向中，选择能够完全展示弹窗宽度且剩余高度最大的方向，通过调整半模态高度以适应当前方向，确保弹窗能够放下，同时保持预设placement对应的对齐方式不变。
     * 
     * 4. 若此时半模态不是跟手样式，则不具备避让软键盘能力。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    POPUP_SHEET = 4
}
/**
 * 控制半模态的关闭。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SheetDismiss {
    /**
     * 半模态面板关闭回调函数。开发者需要退出时调用，不需要退出时无需调用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dismiss(): void;
}
/**
 * 控制半模态的关闭。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DismissSheetAction {
    /**
     * 半模态面板关闭回调函数。开发者需要退出时调用，不需要退出时无需调用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dismiss(): void;
    /**
     * 返回本次半模态页面退出的操作类型。
     * 
     * **说明：**
     * 
     * DismissReason.SLIDE只生效半模态侧边弹窗形态，表示右滑退出。若镜像场景则表示左滑退出。
     * 
     * DismissReason.SLIDE_DOWN生效半模态底部弹窗形态和居中弹窗形态，表示下滑退出。
     * 
     * 半模态气泡弹窗形态无滑动退出能力。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reason: DismissReason;
}
/**
 * 控制半模态关闭前的回弹。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SpringBackAction {
    /**
     * 半模态页面关闭前控制回弹函数，开发者需要半模态回弹时调用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    springBack(): void;
}
/**
 * 定义了单个高度的挡位。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SingleLengthDetent = [
    SheetSize | Length
];
/**
 * 定义了两个高度的挡位。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DoubleLengthDetents = [
    (SheetSize | Length),
    SheetSize | Length | undefined
];
/**
 * 定义了三个高度的挡位。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TripleLengthDetents = [
    (SheetSize | Length),
    SheetSize | Length | undefined,
    SheetSize | Length | undefined
];
/**
 * 模糊快照优化选项。设置该对象后，将开启模糊优化。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface BlurSnapshotOptions {
  /**
   * 设置模糊快照是否开启冻结优化。开启后，在模糊快照时应用冻结优化以降低渲染开销；未设置或设置为false时，冻结优化关闭，采用常规渲染方式。
   *
   * 拉起半模态后支持动态切换该参数值。
   *
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableFreeze?: boolean;
}
/**
 * 继承自[BindOptions]{@link BindOptions}。
 * 
 * 半模态页面内容选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SheetOptions extends BindOptions {
    /**
     * 半模态高度，默认是LARGE。
     * 
     * **说明：**
     * 
     * 1. API version 14开始，底部弹窗横屏时，无状态栏则最大高度为距离屏幕顶部8vp，有状态栏则最大高度为距离状态栏8vp。
     * 2. 底部弹窗时，当设置detents时，该属性设置无效。
     * 3. 底部弹窗竖屏时，最大高度为距离状态栏8vp。
     * 4. 居中弹窗和跟手弹窗设置类型为SheetSize.LARGE和SheetSize.MEDIUM无效，显示默认高度560vp。
     * 5. 居中弹窗和跟手弹窗最小高度为320vp，最大高度为窗口短边的90%。
     * 6. 居中弹窗和跟手弹窗当使用Length设置的高度时，高度大于最大高度，则显示最大高度，小于最小高度，则显示最小高度。
     * 7. 如果半模态使用SheetSize.FIT_CONTENT自适应模式，且类型设置为居中弹窗或跟手弹窗，API version 22及之前版本，高度大于最大高度时显示最大高度，高度小于最小高度时显示最小高度。从API version 23开始，高度大于最大高度时显示最大高度，高度小于最小高度时按照实际自适应高度生效。
     *
     * @default Sheet.LARGE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: SheetSize | Length;
    /**
     * 是否显示控制条。
     * 
     * 默认值：true 
     * 
     * true：显示控制条。
     * 
     * false：不显示控制条。
     * 
     * **说明：**
     * 
     * 半模态面板的detents属性设置多个不同高度并且设置生效时，默认显示控制条。否则不显示控制条。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dragBar?: boolean;
    /**
     * 控制条是否悬浮显示，true为悬浮显示，false为不悬浮显示。
     * 
     * 默认值：false 
     * 
     * **说明：** 
     * 
     * 悬浮效果只在控制条显示的场景生效，且控制条不占位。
     * 
     * title传入[CustomBuilder]{@link CustomBuilder}时enableFloatingDragBar始
     * 终为false。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableFloatingDragBar?: boolean;
    /**
     * bindSheet全屏模态样式的系统转场方式。
     * 
     * 默认值：ModalTransition.DEFAULT
     *
     * @default ModalTransition.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    modalTransition?: ModalTransition;
    /**
     * 设置组件绘制圆角的模式。
     * 
     * 默认值：RenderStrategy.FAST 
     * 
     * **说明**: 当半模态设置模糊时，可通过设置为OFFSCREEN离屏模式解决半模态顶部或顶部圆角区域内显示效果异常问题。popup样式不支持设置组件绘制圆角模式。
     *
     * @default RenderStrategy.FAST
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radiusRenderStrategy?: RenderStrategy;
    /**
     * 设置组件的系统材质。
     * 
     * 默认值：undefined，会清除由该接口设置的材质效果。 
     * 
     * **说明**: 不同系统材质对应不同的属性影响效果，该接口影响背景色
     * [backgroundColor]{@link CommonMethod#backgroundColor}、
     * 边框颜色[borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
     * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}，不建议与上述接口一起使用。使用示例请参考
     * [示例10（半模态设置系统材质）](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sheet-transition_static.md#示例10半模态设置系统材质)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;
    /**
     * 半模态页面的背景蒙层颜色。
     * 
     * 默认值：$r('sys.color.ohos_id_color_mask_thin')。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    maskColor?: ResourceColor;
    /**
     * 半模态页面的切换高度挡位。
     * 
     * **说明：**
     * 
     * 从API version 12开始，底部弹窗横屏时该属性设置生效。
     * 
     * 底部弹窗竖屏生效，元组中第一个高度为初始高度。
     * 
     * 面板可跟手滑动切换挡位，松手后是否滑动至目标挡位有两个判断条件：速度和距离。速度超过阈值，则执行滑动至与手速方向一致的目标挡位；速度小于阈值，则引入距离判断条件，当位移距离>当前位置与目标位置的1/2，滑动至与手速方向一致的目
     * 标挡位，位移距离当前位置与目标位置的1/2，返回至当前挡位。速度阈值：1000，距离阈值：50%。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    detents?: SingleLengthDetent | DoubleLengthDetents | TripleLengthDetents;
    /**
     * 半模态面板的模糊背景。默认无模糊背景。
     *
     * @default BlurStyle.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    blurStyle?: BlurStyle;
    /**
     * 是否显示关闭图标。
     * 
     * 2in1设备默认无按钮底板。
     * 
     * 默认值：true。
     * 
     * true：显示关闭图标。
     * 
     * false：不显示关闭图标。
     * 
     * **说明：**
     * 
     * Resource需要为boolean类型。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showClose?: boolean | Resource;
    /**
     * 半模态页面的样式。
     * 
     * **说明：**
     * 
     * 半模态在不同窗口所支持的显示类型：
     * 
     * 1. 宽度 < 600vp：底部、全屏。默认底部样式。
     * 2. 600vp <= 宽度 < 840vp：底部、居中、跟手、侧边、全屏。默认居中样式。
     * 3. 宽度 >= 840vp：底部、居中、跟手、侧边、全屏。默认跟手样式。
     * 4. API version 20开始，窗口宽度大于600vp时，preferType支持设置为SheetType.SIDE。
     * 5. API version 20开始，preferType支持设置为SheetType.CONTENT_COVER，支持设置为全屏模态样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preferType?: SheetType;
    /**
     * 半模态面板的标题。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    title?: SheetTitleOptions | CustomBuilder;
    /**
     * 半模态页面交互式关闭回调函数。
     * 
     * **说明：**
     * 
     * 当用户执行下拉关闭、侧拉关闭、点击遮罩层关闭、点击关闭按钮的交互操作时，如果已注册回调函数，模态窗口将不会立即关闭。要关闭半模态，需在回调函数中调用shouldDismiss.dismiss()方法来实现。
     * 
     * 如果不注册该回调函数，则用户执行下拉关闭、侧拉关闭、点击遮罩层关闭、点击关闭按钮的交互操作时，正常关闭半模态，无其他行为。
     * 
     * 侧拉关闭又包含侧滑（左滑/右滑）、三键back、键盘ESC关闭。
     * 
     * 建议在[二次确认](docroot://ui/arkts-sheet-page.md#二次确认能力)场景使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shouldDismiss?: (sheetDismiss: SheetDismiss) => void;
    /**
     * 半模态页面的交互式关闭回调函数。允许开发者注册，以获取关闭操作的类型，并决定是否关闭半模态状态。
     * 
     * **说明：**
     * 
     * 当用户执行下拉关闭、侧拉关闭、点击遮罩层关闭、点击关闭按钮的交互操作时，若已注册回调函数，则不会立即关闭页面，而是由开发者通过回调函数[DismissSheetAction]{@link DismissSheetAction}
     * 中的reason参数判断关闭操作的类型，进而根据具体原因自主选择是否关闭半模态页面。
     * 
     * 如果不注册该回调函数，则用户执行关闭操作时，正常关闭半模态，无其他行为。
     * 
     * 侧拉关闭又包含侧滑（左滑/右滑）、三键back、键盘ESC关闭。
     * 
     * 在onWillDismiss回调中，不能再做onWillDismiss拦截。
     * 
     * 建议在[二次确认](docroot://ui/arkts-sheet-page.md#二次确认能力)场景使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: Callback<DismissSheetAction>;
    /**
     * 半模态页面交互式关闭前控制回弹函数。允许开发者注册，以控制半模态页面交互式关闭时的回弹效果。
     * 
     * **说明：**
     * 
     * 当用户触发执行下拉关闭操作并同时注册该回调函数与shouldDismiss或onWillDismiss时，由开发者控制下滑关闭时是否回弹。在回调函数中可以通过调用springBack来实现回弹效果。也可以通过不调用
     * springBack来取消回弹效果。
     * 
     * 若不注册该回调函数，但注册shouldDismiss或onWillDismiss时，则默认在下拉关闭时，会触发回弹效果，回弹后再根据shouldDismiss或onWillDismiss内的回调行为决定半模态是否关闭。
     * 
     * 如果不注册该回调函数，且未注册shouldDismiss或onWillDismiss时，默认在下滑关闭时，触发半模态关闭。
     * 
     * 侧边弹窗样式则是在侧拉关闭场景生效springBack。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillSpringBackWhenDismiss?: Callback<SpringBackAction>;
    /**
     * 半模态页面显示时，其下层页面是否允许交互。
     * 
     * **说明：**
     * 
     * 设置为true时允许交互，不显示蒙层；设置为false时不允许交互，显示蒙层；若不进行设置，默认底部弹窗与居中弹窗不允许交互，跟手弹窗允许交互。当设置为true时，maskColor设置无效。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableOutsideInteractive?: boolean;
    /**
     * 设置半模态页面的宽度。
     * 
     * 百分比参数方式：以父元素宽的百分比来设置半模态页面的宽度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Dimension;
    /**
     * 设置半模态页面的边框宽度。
     * 
     * 可分别设置4个边框宽度。
     * 
     * 默认值：0
     * 
     * 百分比参数方式：以父元素半模态页面宽的百分比来设置半模态页面的边框宽度。
     * 
     * 当半模态页面左边框和右边框大于半模态页面宽度，半模态页面上边框和下边框大于半模态页面高度，显示可能不符合预期。
     * 
     * **说明：**
     * 
     * 底部弹窗时，底部边框宽度设置无效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;
    /**
     * 设置半模态页面的边框颜色。
     * 
     * 默认值：Color.Black
     * 
     * 如果使用borderColor属性，需要和borderWidth属性一起使用。 
     * 
     * **说明：**
     * 
     * 底部弹窗时，底部边框颜色设置无效。
     *
     * @default Color.Black
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;
    /**
     * 设置半模态页面的边框样式。
     * 
     * 默认值：BorderStyle.Solid
     * 
     * 如果使用borderStyle属性，需要和borderWidth属性一起使用。 
     * 
     * **说明：**
     * 
     * 底部弹窗时，底部边框样式设置无效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderStyle?: BorderStyle | EdgeStyles;
    /**
     * 设置半模态页面的阴影。
     * 
     * 2in1设备默认值：ShadowStyle.OUTER_FLOATING_SM。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * 半模态页面高度变化回调函数。
     * 
     * **说明：**
     * 
     * 底部弹窗时，只有挡位变化和拖拽跟手才返回每一帧高度，拉起半模态和避让软键盘只返回最后的高度，其他弹窗只在半模态拉起返回最后高度。
     * 
     * 返回值为px。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onHeightDidChange?: Callback<int>;
    /**
     * 设置半模态页面的显示层级。
     * 
     * 默认值：SheetMode.OVERLAY
     * 
     * **说明：**
     * 
     * 1. 半模态显示期间mode属性不支持动态切换，两种模式的显示层级完全不同，无法做到显示期间同一个半模态从一个层级变换到另一个层级。建议在使用时明确诉求固定mode值。 
     *  2. 设置SheetMode.EMBEDDED时不支持设置UIContext属性，两者对应的半模态显示层级效果互相冲突。
     * 3. 使用[openBindSheet]{@link UIContext#openBindSheet}启动半模态页面，若未传入有效的targetId，则不支持设置为SheetMode.EMBEDDED，默认为SheetMode.OVERLAY。
     *
     * @default SheetMode.OVERLAY
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mode?: SheetMode;
    /**
     * 设置半模态面板滑动时，内容区域刷新时机。
     * 
     * 默认值：ScrollSizeMode.FOLLOW_DETENT
     *
     * @default ScrollSizeMode.FELLOW_DETEND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollSizeMode?: ScrollSizeMode;
    /**
     * 半模态页面挡位变化回调函数。
     * 
     * **说明：**
     * 
     * 底部弹窗时，挡位变化返回最后的高度。
     * 
     * 返回值为px。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDetentsDidChange?: Callback<int>;
    /**
     * 半模态页面宽度变化回调函数。
     * 
     * **说明：**
     * 
     * 宽度变化时返回最后的宽度。
     * 
     * 返回值为px。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWidthDidChange?: Callback<int>;
    /**
     * 半模态页面形态变化回调函数。
     * 
     * **说明：**
     * 
     * 形态变化时返回最后的形态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onTypeDidChange?: Callback<SheetType>;
    /**
     * 在UIContext实例对应的窗口中显示半模态。
     * 
     * **说明：**
     * 
     * 使用[openBindSheet]{@link UIContext#openBindSheet}启动的半模态页面，不支持设置
     * 、更新该属性。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    uiContext?: UIContext;
    /**
     * 设置半模态激活输入法时对软键盘的避让方式。
     * 
     * **默认值：** TRANSLATE_AND_SCROLL
     *
     * @default SheetKeyboardAvoidMode.TRANSLATE_AND_SCROLL
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyboardAvoidMode?: SheetKeyboardAvoidMode;
    /**
     * 是否响应悬停态。
     * 
     * 默认值：false，默认不响应。
     * 
     * 2in1设备默认值：true 
     * 
     * true：响应悬停态。
     * 
     * false：不响应悬停态。
     * 
     * **说明：**
     * 
     * 底部弹窗样式和跟手弹窗样式不响应悬停态。子窗模式不支持悬停态。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableHoverMode?: boolean;
    /**
     * 悬停态下弹窗默认展示区域。
     * 
     * 默认值：HoverModeAreaType.BOTTOM_SCREEN 
     * 
     * 2in1设备默认值：HoverModeAreaType.TOP_SCREEN
     *
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hoverModeArea?: HoverModeAreaType;

    /**
     * 设置半模态弹窗偏移量。当半模态为底部弹窗时，支持设置底部间距。不支持设置半模态的[SheetOptions]{@link SheetOptions}中的detents属性。y轴设置为负数的时候不生效。
     * 
     * 默认值：x轴为0vp，y轴坐标为0vp。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * 设置半模态面板内容区边缘回弹效果，支持单边生效。
     * 
     * **默认值**：默认双边生效，即[EffectEdge]{@link EffectEdge}.START | [EffectEdge]{@link EffectEdge}.END（即数值3）。
     * 
     * **说明：**
     * 
     * 1. 仅上边缘生效：[EffectEdge]{@link EffectEdge}.START。
     * 2. 仅下边缘生效：[EffectEdge]{@link EffectEdge}.END。
     * 3. 双边生效：[EffectEdge]{@link EffectEdge}.START | [EffectEdge]{@link EffectEdge}.END（即数值3）。
     * 4. 双边不生效：[EffectEdge]{@link EffectEdge}.START & [EffectEdge]{@link EffectEdge}.END（即数值0）。
     *
     * @default 3
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    effectEdge?: int;
    /**
     * 设置半模态页面圆角半径。
     * 
     * 不建议设置4个圆角大小不相等，圆角大小相等时面板视觉体验最佳。
     * 
     * **默认值**：32vp
     * 
     * **说明：**
     * 
     * 1. 根据设置的圆角半径值显示，如果未设置，则使用默认值。底部样式不显示半模态底部2个圆角，即使设置了底部2个圆角也不生效。
     * 2. 分别设置4个方向的圆角半径后，如果某个方向的值异常，异常方向的圆角值重置为默认值，非异常方向的圆角值为已设置的值。统一设置4个方向的圆角时，如果设置的值异常，4个方向的圆角都重置为默认值。
     * 3. 半径设置为百分比时，以半模态页面的宽度为基准。
     * 4. 当圆角的半径大于半模态页面宽度一半时，圆角的半径取值为半模态页面宽度的一半。
     * 5. 当半模态页面高度过小且圆角半径设置过大时，可能导致显示异常。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
    /**
     * 支持非手势切换挡位。
     * 
     * **默认值：** detents[0]。
     * 
     * **说明：**
     * 
     * 1. 该接口取值范围为detents数组范围，若设值非detents范围，该接口无效。
     * 2. 当设置SheetSize.FIT_CONTENT时，该接口无效。
     * 3. 不建议手势切换挡位与该接口切换挡位同时生效使用。
     *
     * @default detents[0]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    detentSelection?: SheetSize | Length;
    /**
     * 半模态是否在独立子窗中显示。
     * 
     * 默认值：false
     * 
     * **说明：** 
     * 
     * 1. 若属性值为true，半模态可以在独立子窗口中展示，并且可以超过应用窗口范围。
     * 2. 若属性值为false，半模态只能在应用窗口范围内展示。
     * 3. 不建议在showInSubWindow为true的弹窗嵌套显示另一个showInSubWindow为true的弹窗，半模态可能会影响其他组件行为。
     * 4. 不建议在showInSubWindow为true的弹窗中使用CalendarPicker、CalendarPickerDialog、DatePickerDialog、TextPickerDialog、TimePickerDialog等picker组件，半模态会影响上述组件行为。
     * 5. 半模态显示期间该属性不支持动态切换。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
    /**
     * 设置半模态popup样式弹窗相对于目标的显示位置。
     * 
     * 默认值：Placement.Bottom
     * 
     * **说明：** 
     * 
     * 1. popup样式弹窗在确保指定位置能容纳弹窗尺寸的前提下，优先依据设定的placement展示弹窗。若不可行，则遵循先垂直翻转，后尝试90°水平旋转的规则调整显示位置，以预设方向为下方为例，调整顺序依次为：下、上、右、左。
     * 2. 如果设置的对齐方式导致组件布局超出窗口范围，将根据该对齐方式在水平或垂直方向上进行位移，直至组件完全显示在窗口内。
     * 3. 如果在四个方向上均无法容纳当前的popup样式弹窗，处理方式遵循开发者设置的placementOnTarget属性：
     * 
     * 1）若属性值为true，将依据设定的placement，向其镜像方向平移，直至弹窗能够完全显示。
     * 
     * 2）若属性值为false，则在四个方向中，选择能够完全展示弹窗宽度且剩余高度最大的方向，通过调整半模态高度以适应当前方向，确保弹窗能够放下，同时保持预设placement对应的对齐方式不变。
     *
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * 半模态popup样式弹窗在当前窗口下，四个方向均无法容纳该弹窗大小时，设置是否允许其覆盖在目标节点上。
     * 
     * 默认值：true 
     * 
     * true：允许其覆盖在目标节点上。
     * 
     * false：不允许其覆盖在目标节点上。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placementOnTarget?: boolean;
    /**
     * 设置半模态弹窗边缘光效动画模式。
     * 
     * 默认值：EdgeLightMode.EDGELIGHT_DISABLED
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @default EdgeLightMode.EDGELIGHT_DISABLED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    edgeLightMode?: EdgeLightMode;
    /**
     * 半模态模糊快照优化选项，用于降低模糊渲染的计算开销。当使用blurStyle或systemMaterial设置模糊或材质效果时发现功耗明显增加时，可开启模糊优化。开启后，若半模态配置了blurStyle或systemMaterial，其模糊效果将使用快照渲染以降低计算开销；若未设置blurStyle或systemMaterial，则开启enableBlurSnapshot不产生模糊优化效果。该属性在半模态展示后不支持和undefined之间的动态切换，若在展示后尝试切换则设置不生效。半模态的POPUP类型不支持模糊优化，若在POPUP类型上设置enableBlurSnapshot=true则该设置不生效。
     *
     * 默认值：undefined，关闭模糊优化
     *
     * @default undefined
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    blurSnapshot?: BlurSnapshotOptions;
    /**
     * 标题栏悬浮模式。
     * - STANDARD：标题栏与内容上下排布，无重叠。
     * - STACK：标题栏悬浮于内容之上。开发者需要在内容顶部添加padding以避免遮挡。
     * - SAFE_AREA_PADDING：标题栏放置在安全区域padding区域。内容扩展到安全区域，
     * 滚动内容裁剪到安全区域。
     * 默认值为**SheetTitleBarHoverMode.STANDARD**。通过UIContext.applyDefaultImmersiveStrategy
     * 成功设置ImmersiveStrategy.BIND_SHEET_EXPAND_SAFE_AREA后，默认值为
     * **SheetTitleBarHoverMode.SAFE_AREA_PADDING**。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    titleBarHoverMode?: SheetTitleBarHoverMode;

    /**
     * 为组件添加颜色滤镜效果。颜色滤镜通过4x5颜色矩阵对组件像素进行颜色变换，可用于实现护眼模式、色温调节等视觉效果。
     * 参数类型为[ColorFilter]{@link ColorFilter}对象。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    colorFilterEffect?: ColorFilter;

    /**
     * 标题栏提亮压暗模式。
     * 设置后标题栏内容（主标题、副标题、关闭按钮）提亮或压暗，以提升通透材质背景下的可读性。
     * 其中主标题、副标题仅对[SheetTitleOptions]{@link SheetTitleOptions}形式的系统标题生效，
     * 对[CustomBuilder]{@link CustomBuilder}自定义标题不生效。
     * 仅对高算力和中算力设备生效，设备算力等级可通过
     * [uiMaterial.getGlobalMaterialLevel]{@link @ohos.arkui.uiMaterial:uiMaterial.getGlobalMaterialLevel}接口获取。
     * 默认值：undefined，表示不使用提亮压暗效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    titleBarVibrancyMode?: VibrancyMode;
}
/**
 * 标题栏悬浮模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.1.0 static
 */
export declare enum SheetTitleBarHoverMode {
    /**
     * 标准模式：标题栏与内容上下排布，无重叠。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    STANDARD = 0,
    /**
     * 堆叠模式：标题栏悬浮于内容之上。
     * 开发者需要在内容顶部添加padding以避免遮挡。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    STACK = 1,
    /**
     * 安全区域填充模式：标题栏放置在安全区域padding区域。
     * 内容扩展到安全区域，滚动内容裁剪到安全区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    SAFE_AREA_PADDING = 2
}
/**
 * 定义用于多态样式的回调类型。
 *
 * @param { CommonMethod } instance - 用于设置通用属性的组件实例。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CustomStyles = (instance: CommonMethod) => void;
/**
 * Component State Styles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface StateStyles {
    /**
     * 组件无状态时的样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    normal?: CustomStyles;
    /**
     * 组件按下状态的样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressed?: CustomStyles;
    /**
     * 组件禁用状态的样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disabled?: CustomStyles;
    /**
     * 组件获焦状态的样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    focused?: CustomStyles;
    /**
     * 组件点击状态的样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    clicked?: CustomStyles;
    /**
     * 组件选中状态的样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    selected?: CustomStyles;

    /**
     * 组件悬浮状态的样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    hovered?: CustomStyles;
}
/**
 * 气泡文本的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupMessageOptions {
    /**
     * 设置气泡信息文本颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textColor?: ResourceColor;
    /**
     * 设置气泡信息字体属性。
     *
     * **说明：**
     *
     * 1. 不支持设置family。
     * 2. Font中的weight属性不支持传入number类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    font?: Font;
}
/**
 * 关闭原因类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DismissReason {
    /**
     * 点击三键back、侧滑（左滑/右滑）、键盘ESC。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PRESS_BACK = 0,
    /**
     * 点击遮障层时。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOUCH_OUTSIDE = 1,
    /**
     * 点击关闭按钮。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CLOSE_BUTTON = 2,
    /**
     * 下拉关闭。
     * 
     * **说明：** 
     * 
     * 该接口仅支持在[半模态转场]{@link ../../@internal/component/ets/common}中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SLIDE_DOWN = 3,
    /**
     * 侧滑（左滑/右滑）关闭。默认表示向右滑动关闭，镜像场景表示向左滑动关闭，不支持选择向左或向右滑动。
     * 
     * **说明：** 
     * 
     * 该接口仅支持在[半模态转场]{@link ../../@internal/component/ets/common}中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SLIDE = 4
}
/**
 * 气泡关闭的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DismissPopupAction {
    /**
     * Popup关闭回调函数。开发者需要退出时调用，不需要退出时无需调用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dismiss(): void;
    /**
     * 关闭原因，返回本次拦截Popup消失的事件原因。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reason: DismissReason;
}
/**
 * 气泡的显示状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupStateChangeParam {
    /**
     * is Visible.
     * Anonymous Object Rectification.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isVisible: boolean;
}
/**
 * 气泡状态变化事件回调。
 *
 * @param { PopupStateChangeParam } event - The parameter of state change callback.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PopupStateChangeCallback = (event: PopupStateChangeParam) => void;
/**
 * 设置遮罩层颜色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupMaskType {
    /**
     * Color.
     * Anonymous Object Rectification.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color: ResourceColor;
}
/**
 * 设置描边线性渐变的颜色和方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupBorderLinearGradient {
    /**
     * 线性渐变的方向。
     *
     * 默认值：GradientDirection.Bottom
     *
     * **说明：**
     *
     * 当线性渐变的方向设置为GradientDirection.None时，显示默认值。
     *
     * @default GradientDirection.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction?: GradientDirection;
    /**
     * 指定渐变色颜色和其对应的百分比位置的数组，设置非法颜色直接跳过。
     *
     * **说明：**
     *
     * 颜色设置方式可参考：ResourceColor，非ResourceColor范围内的颜色值即为非法颜色。
     * 数组内颜色设置为undefined或者null时，默认为黑色。
     *
     * colors参数的约束：
     * ResourceColor表示填充的颜色，number表示指定颜色所处的位置，取值范围为[0,1.0]，0表示需要设置渐变色的容器的起始位置，1.0表示容器的结束位置。
     * 为实现多个颜色渐变效果，建议多个数组中number参数递增设置，如后一个数组number参数比前一个数组number参数小时，按照等于前一个数组number参数的值处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    colors: Array<[ResourceColor | undefined, double]>;
}
/**
 * 配置弹出气泡的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupCommonOptions {
    /**
     * 气泡组件优先显示的位置，当前位置显示不下时，会自动调整位置。
     *
     * 默认值：Placement.Bottom
     *
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * 气泡的颜色。如需去除模糊背景填充效果，需将backgroundBlurStyle设置为BlurStyle.NONE。
     *
     * 默认值：透明色TRANSPARENT加模糊背景填充效果COMPONENT_ULTRA_THICK。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    popupColor?: ResourceColor;
    /**
     * 设置是否显示箭头。值为true时显示箭头，值为false时不显示箭头。
     *
     * 如果箭头所在方位侧的气泡长度不足以显示下箭头，则会默认不显示箭头。比如：placement设置为Left，此时如果气泡高度小于箭头的宽度（32vp）与气泡圆角两倍（48vp）之和（80vp），则实际不会显示箭头。
     *
     * 默认值：true
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * 页面有操作时，气泡是否自动关闭。
     *
     * true：自动关闭气泡；false：气泡不会自动关闭。
     *
     * 默认值：true
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    autoCancel?: boolean;
    /**
     * on State Change
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onStateChange?: PopupStateChangeCallback;
    /**
     * Popup箭头在气泡处的偏移。
     *
     * 箭头在气泡上下方时，数值为0表示箭头居最左侧，偏移量为箭头至最左侧的距离，默认居中。
     * 箭头在气泡左右侧时，偏移量为箭头至最上侧的距离，默认居中。
     * 显示在屏幕边缘时，气泡会自动左右偏移，数值为0时箭头始终指向绑定组件。
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 1. 没设置arrowOffset的情况下，气泡箭头与四个角的距离不能小于圆角半径。
     * 2. 只有arrowPointPosition不设置或者设置为null、undefined时，arrowOffset属性才生效。
     * 3. 不支持设置百分比。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowOffset?: Length;
    /**
     * 气泡是否显示在创建的子窗里。
     *
     * true：气泡会显示在创建的子窗里；false：气泡会显示在对应的主窗中。
     *
     * 默认值：false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
    /**
     * 设置气泡是否有遮罩层及遮罩颜色。设置为false时不显示遮罩层，设置为true时显示透明色遮罩层，设置为PopupMaskType时显示指定颜色的遮罩层。
     *
     * 默认值：true
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mask?: boolean | PopupMaskType;
    /**
     * 设置Popup与宿主节点的间隙。不支持设置百分比。
     *
     * 默认值：8
     *
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    targetSpace?: Length;
    /**
     * 设置Popup组件相对于placement设置的显示位置的偏移。
     *
     * 默认值：{ x: 0, y: 0 }
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * 气泡宽度，未设置或者异常值场景下，气泡自适应内容宽度。
     *
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Dimension;
    /**
     * 气泡箭头相对于父组件显示位置，气泡箭头在垂直和水平方向上有Start、Center、End三个位置点可选。以上所有位置点均位于父组件区域的范围内，不会超出父组件的边界范围。
     *
     * 默认值：ArrowPointPosition.CENTER
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * 设置箭头宽度。若所设置的箭头宽度超过所在边的长度减去两倍的气泡圆角大小，则不绘制气泡箭头。
     *
     * 默认值：16
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowWidth?: Dimension;
    /**
     * 设置箭头高度。
     *
     * 默认值：8
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowHeight?: Dimension;
    /**
     * 设置气泡圆角半径。
     *
     * 默认值：20
     *
     * 单位：vp
     *
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: Dimension;
    /**
     * 设置气泡阴影。
     *
     * 默认值：ShadowStyle.OUTER_DEFAULT_MD
     *
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * 设置气泡模糊背景参数。
     *
     * 默认值：BlurStyle.COMPONENT_ULTRA_THICK
     *
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * 设置气泡弹出后是否获焦。
     *
     * true：气泡可以获焦；false：气泡不会获焦。
     *
     * 默认值：false
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    focusable?: boolean;
    /**
     * 自定义设置Popup气泡显示和退出的动画效果。
     *
     * **说明：**
     *
     * 1. 如果不设置，则使用默认的显示/退出动效。
     * 2. 显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。
     * 3. 退出动效中按back键，不会打断退出动效，退出动效继续执行，back键不被响应。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * 设置Popup交互式关闭拦截开关及拦截回调函数，默认值为true，Popup响应点击、侧滑（左滑/右滑）、三键back。
     *
     * 1. 当为boolean类型时，如果设置为false，则不响应点击、侧滑（左滑/右滑）、三键back、路由跳转或键盘ESC退出事件，仅当设置“气泡显示状态”参数show值为false时才退出；如果设置为true，则正常响应退出事件；
     *
     * 2. 如果设置为函数类型，则拦截退出事件且执行回调函数。侧滑（左滑/右滑）、三键back、路由跳转或键盘ESC在回调函数中返回的reason为PRESS_BACK，点击为TOUCH_OUTSIDE。
     *
     * **说明：**
     *
     * 在onWillDismiss回调中，不能再做onWillDismiss拦截。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
     * Popup组件是否响应悬停态（半折叠状态）变化，即在悬停态下是否触发避让折痕区域。
     *
     * 默认值：false，2in1设备默认为true。未设置或者值为非法值时，生效默认值。
     *
     * **说明：**
     *
     * 1. 如果Popup的弹出位置在悬停态折痕区域，Popup组件不会响应悬停态。
     * 2. 2in1设备从API version 20开始生效。
     * 3. 2in1设备仅在窗口瀑布模式下生效。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableHoverMode?: boolean;
    /**
     * 气泡绑定的宿主组件或其宿主组件的父容器添加了旋转、缩放等变换时，气泡是否跟随宿主组件变换。
     *
     * true：气泡可以拿到变换后宿主的位置，显示到相应位置；false：气泡拿不到宿主变换后的位置，可能显示异常。
     *
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    followTransformOfTarget?: boolean;
    /**
     * 设置Popup避让时是否覆盖指向组件。
     *
     * 默认值：AvoidanceMode.COVER_TARGET
     *
     * @default AvoidanceMode.COVER_TARGET
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    avoidTarget?: AvoidanceMode;
    /**
     * 设置Popup组件外描边的宽度。
     *
     * 默认值：1
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 1. 不支持设置百分比，设置百分比时按0处理。
     * 2. 在没有设置Popup组件外描边的情况下，该接口需要和outlineLinearGradient配合使用。
     * 3. 当设置双描边时，建议外描边宽度不超过10vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineWidth?: Dimension;
    /**
     * 设置Popup组件内描边的宽度。
     *
     * 默认值：1
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 1. 不支持设置百分比，设置百分比时按0处理。
     * 2. 在没有设置Popup组件内描边的情况下，该接口需要和borderLinearGradient配合使用。
     * 3. 当设置双描边时，建议内描边宽度不超过10vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Dimension;
    /**
     * 设置Popup组件外描边线性渐变的颜色。
     *
     * **说明：**
     *
     * 1. outlineLinearGradient不设置或者设置为null、undefined时，外描边没有线性渐变效果。
     * 2. outlineLinearGradient设置时，direction默认值是：GradientDirection.Bottom。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineLinearGradient?: PopupBorderLinearGradient;
    /**
     * 设置Popup组件内描边线性渐变的颜色。
     *
     * **说明：**
     *
     * 1. borderLinearGradient不设置或者设置为null、undefined时，内描边没有线性渐变效果。
     * 2. borderLinearGradient设置时，direction默认值是：GradientDirection.Bottom。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderLinearGradient?: PopupBorderLinearGradient;
    /**
 	 * 设置气泡深浅色模式，默认跟随绑定组件深浅色模式。
 	 *
 	 * 默认值：AnchoredColorMode.FOLLOW_TARGET
 	 *
 	 * **说明：**
 	 *
 	 * 1. 仅当绑定组件使用了WithTheme标签时，该属性才会生效。
 	 * 2. 该属性仅影响组件的默认样式，以及开发者设置的涉及深浅色资源的属性。
 	 * 3. 设置为AnchoredColorMode.FOLLOW_SYSTEM时，模糊材质可以跟随，文字颜色以及涉及深浅色资源的属性仍保持跟随绑定组件的深浅色配置。
 	 * 
 	 * @default AnchoredColorMode.FOLLOW_TARGET
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	colorMode?: AnchoredColorMode;
    /**
     * 设置组件的系统材质。
     *
     * 默认值：undefined，会清除由该接口设置的材质效果。
     *
     * **说明：**
     *
     * 不同系统材质对应不同的属性影响效果，该接口影响背景色backgroundColor、边框颜色borderColor、边框宽度borderWidth、阴影shadow，当设置系统材质时，上述接口不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;
    /**
     * 背景模糊效果。默认值请参考BackgroundBlurStyleOptions类型说明。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * 背景效果参数。默认值请参考BackgroundEffectOptions类型说明。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundEffect?: BackgroundEffectOptions;

    /**
     * 设置气泡的显示层级模式。
     *
     * 默认值：LevelMode.OVERLAY
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    levelMode?: LevelMode;

  /**
   * 气泡消失后的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidDisappear?: VoidCallback;

  /**
   * 气泡退出动效前的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillDisappear?: VoidCallback;

  /**
   * 气泡显示动效前的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillAppear?: VoidCallback;

  /**
   * 气泡弹出后的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidAppear?: VoidCallback;
}
/**
 * 悬浮气泡自定义参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TipsOptions {
    /**
     * 设置悬浮气泡的显示时延。显示时延的最大值为4000ms，设置超过4000ms的值以4000ms为准。
     *
     * 默认值：700
     *
     * 单位：ms
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    appearingTime?: int;
    /**
     * 设置悬浮气泡的隐藏时延。隐藏时延的最大值为4000ms，设置超过4000ms的值以4000ms为准。
     *
     * 默认值：300
     *
     * 单位：ms
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disappearingTime?: int;
    /**
     * 多个组件连续弹出悬浮气泡时，悬浮气泡的显示时延。显示时延的最大值为4000ms，设置超过4000ms的值以4000ms为准。
     *
     * 默认值：300
     *
     * 单位：ms
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    appearingTimeWithContinuousOperation?: int;
    /**
     * 多个组件连续弹出悬浮气泡时，悬浮气泡的隐藏时延。隐藏时延的最大值为4000ms，设置超过4000ms的值以4000ms为准。
     *
     * 默认值：0
     *
     * 单位：ms
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disappearingTimeWithContinuousOperation?: int;
    /**
     * 设置是否显示气泡箭头。
     *
     * true：显示箭头；false：不显示箭头。
     *
     * 默认值：true
     *
     * **说明：**
     *
     * 当页面可用空间无法让气泡完全避让时，气泡会覆盖到组件上并且不显示气泡箭头。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * 气泡箭头相对于父组件显示位置，气泡箭头在垂直和水平方向上有Start、Center、End三个位置点可选。所有位置点均位于父组件区域范围内，不会超出父组件的边界范围，也不会覆盖圆角范围。
     *
     * 默认值：ArrowPointPosition.CENTER
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * 设置气泡箭头宽度。若所设置的宽度超过所在边的长度减去两倍的气泡圆角大小，则不绘制气泡箭头。
     *
     * 默认值：16
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowWidth?: Dimension;
    /**
     * 设置气泡箭头高度。
     *
     * 默认值：8
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowHeight?: Dimension;
    /**
     * 设置Tips跟随类型。
     *
     * 默认值：TipsAnchorType.TARGET
     *
     * **说明：**
     *
     * Tips的跟随类型为TipsAnchorType.CURSOR时，Tips不显示箭头。
     *
     * @default TipsAnchorType.TARGET
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showAtAnchor?: TipsAnchorType;
    /**
     * 设置悬浮气泡的系统材质。
     *
     * 默认值：undefined，会清除由该接口设置的材质效果。
     *
     * **说明：**
     *
     * 不同系统材质对应不同的属性影响效果，该接口影响背景色backgroundColor、边框颜色borderColor、边框宽度borderWidth、阴影shadow，当设置系统材质时，上述接口不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;
}
/**
 * 定义Popup按钮。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupButton {
    /**
     * 气泡按钮的文本。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: string;
    /**
     * action
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: VoidCallback;
}
/**
 * 基础气泡的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupOptions {
    /**
     * 气泡信息内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    message: string;
    /**
     * 设置Popup组件相对于宿主节点的显示位置，默认值为Placement.Bottom。
     *
     * 支持Placement中定义的所有位置。
     *
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * 主按钮。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    primaryButton?: PopupButton;
    /**
     * 辅助按钮。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    secondaryButton?: PopupButton;
    /**
     * on State Change
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onStateChange?: PopupStateChangeCallback;
    /**
     * Popup箭头在气泡处的偏移。
     *
     * 箭头在气泡上下方时，数值为0表示箭头居最左侧，偏移量为箭头至最左侧的距离，默认居中。
     * 箭头在气泡左右侧时，偏移量为箭头至最上侧的距离，默认居中。
     * 显示在屏幕边缘时，气泡会自动左右偏移，数值为0时箭头始终指向绑定组件。
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 1. 没设置arrowOffset的情况下，气泡箭头与四个角的距离不能小于圆角半径。
     * 2. 只有arrowPointPosition不设置或者设置为null、undefined时，arrowOffset属性才生效。
     * 3. 不支持设置百分比。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowOffset?: Length;
    /**
     * 气泡是否显示在创建的子窗里。
     *
     * true：气泡会显示在创建的子窗里；false：气泡会显示在对应的主窗中。
     *
     * 默认值：false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
    /**
     * 设置气泡是否有遮罩层及遮罩颜色。
     *
     * true：显示透明色遮罩层；false：不显示遮罩层。Color：显示指定颜色的遮罩层。
     *
     * 默认值：true
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mask?: boolean | PopupMaskType;
    /**
     * 设置气泡信息文本参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    messageOptions?: PopupMessageOptions;
    /**
     * 设置Popup与宿主节点的间隙。不支持设置百分比。
     *
     * 默认值：8
     *
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    targetSpace?: Length;
    /**
     * 设置是否显示箭头。
     *
     * true：显示箭头；false：不显示箭头。
     *
     * 默认值：true
     *
     * **说明：**
     *
     * 当页面可用空间无法让气泡完全避让时，气泡会覆盖到组件上并且不显示箭头。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * 设置Popup组件相对于placement设置的显示位置的偏移。
     *
     * 默认值：{ x: 0, y: 0 }
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * 气泡的颜色。如需去除模糊背景填充效果，需将backgroundBlurStyle设置为BlurStyle.NONE。
     *
     * 默认值：透明色TRANSPARENT加模糊背景填充效果COMPONENT_ULTRA_THICK。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    popupColor?: Color | string | Resource | long;
    /**
     * 页面有操作时，气泡是否自动关闭。
     *
     * true：自动关闭气泡；false：气泡不会自动关闭。
     *
     * 默认值：true
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    autoCancel?: boolean;
    /**
     * 气泡宽度，未设置或者异常值场景下，气泡自适应内容宽度。
     *
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Dimension;
    /**
     * 气泡箭头相对于父组件显示位置，气泡箭头在垂直和水平方向上有Start、Center、End三个位置点可选。以上所有位置点均位于父组件区域的范围内，不会超出父组件的边界范围。
     *
     * 默认值：ArrowPointPosition.CENTER
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * 设置气泡箭头宽度。若所设置的宽度超过所在边的长度减去两倍的气泡圆角大小，则不绘制气泡箭头。
     *
     * 默认值：16
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowWidth?: Dimension;
    /**
     * 设置气泡箭头高度。
     *
     * 默认值：8
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowHeight?: Dimension;
    /**
     * 设置气泡圆角半径。
     *
     * 默认值：20
     *
     * 单位：vp
     *
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: Dimension;
    /**
     * 设置气泡阴影。
     *
     * 默认值：ShadowStyle.OUTER_DEFAULT_MD
     *
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * 设置气泡模糊背景参数。
     *
     * 默认值：BlurStyle.COMPONENT_ULTRA_THICK
     *
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * 自定义设置Popup气泡显示和退出的动画效果。
     *
     * **说明：**
     *
     * 1. 不设置时使用默认的显示/退出动效。
     * 2. 显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。
     * 3. 退出动效中按back键，不会打断退出动效，back键不被响应。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * 设置Popup交互式关闭拦截开关及拦截回调函数，默认值为true，Popup响应点击、侧滑（左滑/右滑）、三键back。
     *
     * 1. 当为boolean类型时，如果设置为false，则不响应点击、侧滑（左滑/右滑）、三键back、路由跳转或键盘ESC退出事件，仅当设置“气泡显示状态”参数show值为false时才退出；如果设置为true，则正常响应退出事件；
     *
     * 2. 如果设置为函数类型，则拦截退出事件且执行回调函数。侧滑（左滑/右滑）、三键back、路由跳转或键盘ESC在回调函数中返回的reason为PRESS_BACK，点击为TOUCH_OUTSIDE。
     *
     * **说明：**
     *
     * 在onWillDismiss回调中，不能再做onWillDismiss拦截。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
     * Popup组件是否响应悬停态（半折叠状态）变化，即在悬停态下是否触发避让折痕区域。
     *
     * 默认值：false，2in1设备默认为true。未设置或者值为非法值时，生效默认值。
     *
     * **说明：**
     *
     * 1. 如果Popup的弹出位置在悬停态折痕区域，Popup组件不会响应悬停态。
     * 2. 2in1设备从API version 20开始生效。
     * 3. 2in1设备仅在窗口瀑布模式下生效。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableHoverMode?: boolean;
    /**
     * 气泡绑定的宿主组件或其宿主组件的父容器添加了旋转、缩放等变换时，气泡是否跟随宿主组件变换。
     *
     * true：气泡可以拿到变换后宿主的位置，显示到相应位置；false：气泡拿不到宿主变换后的位置，可能显示异常。
     *
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    followTransformOfTarget?: boolean;
    /**
     * 气泡是否避让软键盘，默认不避让。设置为避让后，气泡显示空间不足时，由原先居中覆盖父组件的方式改为平移覆盖父组件，且气泡箭头不指向宿主时，不再显示箭头。
     *
     * 默认值：KeyboardAvoidMode.NONE
     *
     * @default KeyboardAvoidMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyboardAvoidMode?: KeyboardAvoidMode;
    /**
     * 设置Popup避让时是否覆盖指向组件。
     *
     * 默认值：AvoidanceMode.COVER_TARGET
     *
     * **说明：**
     *
     * 设置avoidTarget为AvoidanceMode.AVOID_AROUND_TARGET时，气泡在剩余显示空间不足的情况下会进行压缩，此时气泡内容需结合Scroll使用，否则气泡内容会出现遮挡。
     *
     * @default AvoidanceMode.COVER_TARGET
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    avoidTarget?: AvoidanceMode;
    /**
     * 设置Popup组件外描边的宽度。
     *
     * 默认值：1
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 1. 不支持设置百分比，设置百分比时按0处理。
     * 2. 在没有设置Popup组件外描边的情况下，该接口需要和outlineLinearGradient配合使用。
     * 3. 当设置双描边时，建议外描边宽度不超过10vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineWidth?: Dimension;
    /**
     * 设置Popup组件内描边的宽度。
     *
     * 默认值：1
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 1. 不支持设置百分比，设置百分比时按0处理。
     * 2. 在没有设置Popup组件内描边的情况下，该接口需要和borderLinearGradient配合使用。
     * 3. 当设置双描边时，建议内描边宽度不超过10vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Dimension;
    /**
     * 设置Popup组件外描边线性渐变的颜色。
     *
     * **说明：**
     *
     * 1. outlineLinearGradient不设置或者设置为null、undefined时，外描边没有线性渐变效果。
     * 2. outlineLinearGradient设置时，direction默认值是：GradientDirection.Bottom。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineLinearGradient?: PopupBorderLinearGradient;
    /**
     * 设置Popup组件内描边线性渐变的颜色。
     *
     * **说明：**
     *
     * 1. borderLinearGradient不设置或者设置为null、undefined时，内描边没有线性渐变效果。
     * 2. borderLinearGradient设置时，direction默认值是：GradientDirection.Bottom。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderLinearGradient?: PopupBorderLinearGradient;
    /**
 	 * 设置气泡深浅色模式，默认跟随绑定组件深浅色模式。
 	 *
 	 * 默认值：AnchoredColorMode.FOLLOW_TARGET
 	 *
 	 * **说明：**
 	 *
 	 * 1. 仅当绑定组件使用了WithTheme标签时，该属性才会生效。
 	 * 2. 该属性仅影响组件的默认样式，以及开发者设置的涉及深浅色资源的属性。
 	 * 3. 设置为AnchoredColorMode.FOLLOW_SYSTEM时，模糊材质可以跟随，文字颜色以及涉及深浅色资源的属性仍保持跟随绑定组件的深浅色配置。
 	 * 
 	 * @default AnchoredColorMode.FOLLOW_TARGET
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	colorMode?: AnchoredColorMode;
    /**
     * 设置组件的系统材质。
     *
     * 默认值：undefined，会清除由该接口设置的材质效果。
     *
     * **说明：**
     *
     * 不同系统材质对应不同的属性影响效果，该接口影响背景色backgroundColor、边框颜色borderColor、边框宽度borderWidth、阴影shadow，当设置系统材质时，上述接口不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;
    /**
     * 背景模糊效果。默认值请参考BackgroundBlurStyleOptions类型说明。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * 背景效果参数。默认值请参考BackgroundEffectOptions类型说明。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundEffect?: BackgroundEffectOptions;

    /**
     * 设置气泡的显示层级模式。
     *
     * 默认值：LevelMode.OVERLAY
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    levelMode?: LevelMode;

  /**
   * 气泡退出动效前的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillDisappear?: VoidCallback;

  /**
   * 气泡弹出后的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidAppear?: VoidCallback;

  /**
   * 气泡显示动效前的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillAppear?: VoidCallback;

  /**
   * 气泡消失后的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidDisappear?: VoidCallback;
}
/**
 * 弹出自定义气泡的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CustomPopupOptions {
    /**
     * 提示气泡内容的构造器。
     *
     * **说明：**
     *
     * 1. Popup为通用属性，自定义Popup中不支持再次弹出Popup。对builder下的第一层容器组件不支持使用position属性，如果使用将导致气泡不显示。
     * 2. builder中若使用自定义组件，自定义组件的aboutToAppear和aboutToDisappear生命周期与Popup气泡的显隐无关，不能使用其生命周期判断Popup气泡的显隐。
     * 3. 该构造器的builder仅支持定义在UI组件中，例如可以定义在Builder函数、方法或者build方法里。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    builder: CustomBuilder;
    /**
     * 气泡组件优先显示的位置，当前位置显示不下时，会自动调整位置。
     *
     * 默认值：Placement.Bottom
     *
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * 气泡的颜色。如需去除模糊背景填充效果，需将backgroundBlurStyle设置为BlurStyle.NONE。
     *
     * 默认值：透明色TRANSPARENT加模糊背景填充效果COMPONENT_ULTRA_THICK。
     *
     * @default TRANSPARENT plus COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    popupColor?: Color | string | Resource | long;
    /**
     * 是否显示箭头。
     *
     * true：显示箭头；false：不显示箭头。
     *
     * 如果箭头所在方位侧的气泡长度不足以显示下箭头，则会默认不显示箭头。比如：placement设置为Left，此时如果气泡高度小于箭头的宽度（32vp）与气泡圆角两倍（48vp）之和（80vp），则实际不会显示箭头。
     *
     * 默认值：true
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * 页面有操作时，气泡是否自动关闭。
     *
     * true：自动关闭气泡；false：气泡不会自动关闭。
     *
     * 默认值：true
     *
     * **说明：**
     *
     * 如果要实现点击气泡内消失需要在builder中先放一个布局组件，然后再将Popup高级组件放在布局组件里面，再在布局组件的onClick事件中修改控制显隐的状态变量show为false。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    autoCancel?: boolean;
    /**
     * on State Change
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onStateChange?: PopupStateChangeCallback;
    /**
     * Popup箭头在气泡处的偏移。
     *
     * 箭头在气泡上下方时，数值为0表示箭头居最左侧，偏移量为箭头至最左侧的距离，默认居中。
     * 箭头在气泡左右侧时，偏移量为箭头至最上侧的距离，默认居中。
     * 显示在屏幕边缘时，气泡会自动左右偏移，数值为0时箭头始终指向绑定组件。
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 1. 没设置arrowOffset的情况下，气泡箭头与四个角的距离不能小于圆角半径。
     * 2. 只有arrowPointPosition不设置或者设置为null、undefined时，arrowOffset属性才生效。
     * 3. 不支持设置百分比。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowOffset?: Length;
    /**
     * 气泡是否显示在创建的子窗里。
     *
     * true：气泡会显示在创建的子窗里；false：气泡会显示在对应的主窗中。
     *
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
    /**
     * 设置气泡是否有遮罩层及遮罩颜色。如果设置为false，则没有遮罩层；如果设置为true，则设置有遮罩层并且颜色为透明色；如果设置为Color，则为遮罩层的颜色。
     *
     * 默认值：true
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mask?: boolean | PopupMaskType;
    /**
     * 设置Popup与宿主节点的间隙。不支持设置百分比。
     *
     * 默认值：8
     *
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    targetSpace?: Length;
    /**
     * 设置Popup组件相对于placement设置的显示位置的偏移。
     *
     * 默认值：{ x: 0, y: 0 }
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * 气泡宽度，未设置或者异常值场景下，气泡自适应内容宽度。
     *
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Dimension;
    /**
     * 气泡箭头相对于父组件显示位置，气泡箭头在垂直和水平方向上有Start、Center、End三个位置点可选。以上所有位置点均位于父组件区域的范围内，不会超出父组件的边界范围。
     *
     * 默认值：ArrowPointPosition.CENTER
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * 设置箭头宽度。若所设置的箭头宽度超过所在边的长度减去两倍的气泡圆角大小，则不绘制气泡箭头。
     *
     * 默认值：16
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowWidth?: Dimension;
    /**
     * 设置箭头高度。
     *
     * 默认值：8
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowHeight?: Dimension;
    /**
     * 设置气泡圆角半径。
     *
     * 默认值：20
     *
     * 单位：vp
     *
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: Dimension;
    /**
     * 设置气泡阴影。
     *
     * 默认值：ShadowStyle.OUTER_DEFAULT_MD
     *
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * 设置气泡模糊背景参数。
     *
     * 默认值：BlurStyle.COMPONENT_ULTRA_THICK
     *
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * 设置气泡弹出后是否获焦。
     *
     * true：气泡可以获焦；false：气泡不会获焦。
     *
     * 默认值：false
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    focusable?: boolean;
    /**
     * 自定义设置Popup气泡显示和退出的动画效果。
     *
     * **说明：**
     *
     * 1. 如果不设置，则使用默认的显示/退出动效。
     * 2. 显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。
     * 3. 退出动效中按back键，不会打断退出动效，退出动效继续执行，back键不被响应。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * 设置Popup交互式关闭拦截开关及拦截回调函数，默认值为true，Popup响应点击、侧滑（左滑/右滑）、三键back。
     *
     * 1. 当为boolean类型时，如果设置为false，则不响应点击、侧滑（左滑/右滑）、三键back、路由跳转或键盘ESC退出事件，仅当设置“气泡显示状态”参数show值为false时才退出；如果设置为true，则正常响应退出事件；
     *
     * 2. 如果设置为函数类型，则拦截退出事件且执行回调函数。侧滑（左滑/右滑）、三键back、路由跳转或键盘ESC在回调函数中返回的reason为PRESS_BACK，点击为TOUCH_OUTSIDE。
     *
     * **说明：**
     *
     * 在onWillDismiss回调中，不能再做onWillDismiss拦截。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
      * Popup组件是否响应悬停态（半折叠状态）变化，即在悬停态下是否触发避让折痕区域。
      *
      * 默认值：false，2in1设备默认为true。未设置或者值为非法值时，生效默认值。
      *
      * **说明：**
      *
      * 1. 如果Popup的弹出位置在悬停态折痕区域，Popup组件不会响应悬停态。
      * 2. 2in1设备从API version 20开始生效。
      * 3. 2in1设备仅在窗口瀑布模式下生效。
      *
      * @default false
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @since 23 static
      */
    enableHoverMode?: boolean;
    /**
     * 气泡绑定的宿主组件或其宿主组件的父容器添加了旋转、缩放等变换时，气泡是否跟随宿主组件变换。
     *
     * true：气泡可以拿到变换后宿主的位置，显示到相应位置；false：气泡拿不到宿主变换后的位置，可能显示异常。
     *
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    followTransformOfTarget?: boolean;
    /**
     * 气泡是否避让软键盘，默认不避让。设置为避让后，气泡显示空间不足时，由原先居中覆盖父组件的方式改为平移覆盖父组件，且气泡箭头不指向宿主时，不再显示箭头。
     *
     * 默认值：KeyboardAvoidMode.NONE
     *
     * @default KeyboardAvoidMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyboardAvoidMode?: KeyboardAvoidMode;
    /**
     * 设置Popup避让时是否覆盖指向组件。
     *
     * 默认值：AvoidanceMode.COVER_TARGET
     *
     * **说明：**
     *
     * 设置avoidTarget为AvoidanceMode.AVOID_AROUND_TARGET时，气泡在剩余显示空间不足的情况下会进行压缩，此时气泡内容需结合Scroll使用，否则气泡内容会出现遮挡。
     *
     * @default AvoidanceMode.COVER_TARGET
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    avoidTarget?: AvoidanceMode;
    /**
     * 设置Popup组件外描边的宽度。
     *
     * 默认值：1
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 1. 不支持设置百分比，设置百分比时按0处理。
     * 2. 在没有设置Popup组件外描边的情况下，该接口需要和outlineLinearGradient配合使用。
     * 3. 当设置双描边时，建议外描边宽度不超过10vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineWidth?: Dimension;
    /**
     * 设置Popup组件内描边的宽度。
     *
     * 默认值：1
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 1. 不支持设置百分比，设置百分比时按0处理。
     * 2. 在没有设置Popup组件内描边的情况下，该接口需要和borderLinearGradient配合使用。
     * 3. 当设置双描边时，建议内描边宽度不超过10vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Dimension;
    /**
     * 设置Popup组件外描边线性渐变的颜色。
     *
     * **说明：**
     *
     * 1. outlineLinearGradient不设置或者设置为null、undefined时，外描边没有线性渐变效果。
     * 2. outlineLinearGradient设置时，direction默认值是：GradientDirection.Bottom。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineLinearGradient?: PopupBorderLinearGradient;
    /**
     * 设置Popup组件内描边线性渐变的颜色。
     *
     * **说明：**
     *
     * 1. borderLinearGradient不设置或者设置为null、undefined时，内描边没有线性渐变效果。
     * 2. borderLinearGradient设置时，direction默认值是：GradientDirection.Bottom。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderLinearGradient?: PopupBorderLinearGradient;
    /**
 	 * 设置气泡深浅色模式，默认跟随绑定组件深浅色模式。
 	 *
 	 * 默认值：AnchoredColorMode.FOLLOW_TARGET
 	 *
 	 * **说明：**
 	 *
 	 * 1. 仅当绑定组件使用了WithTheme标签时，该属性才会生效。
 	 * 2. 该属性仅影响组件的默认样式，以及开发者设置的涉及深浅色资源的属性。
 	 * 3. 设置为AnchoredColorMode.FOLLOW_SYSTEM时，模糊材质可以跟随，文字颜色以及涉及深浅色资源的属性仍保持跟随绑定组件的深浅色配置。
 	 * 
 	 * @default AnchoredColorMode.FOLLOW_TARGET
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	colorMode?: AnchoredColorMode;
    /**
     * 设置组件的系统材质。
     *
     * 默认值：undefined，会清除由该接口设置的材质效果。
     *
     * **说明：**
     *
     * 不同系统材质对应不同的属性影响效果，该接口影响背景色backgroundColor、边框颜色borderColor、边框宽度borderWidth、阴影shadow，当设置系统材质时，上述接口不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;
    /**
     * 背景模糊效果。默认值请参考BackgroundBlurStyleOptions类型说明。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * 背景效果参数。默认值请参考BackgroundEffectOptions类型说明。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundEffect?: BackgroundEffectOptions;

    /**
     * 设置气泡的显示层级模式。
     *
     * 默认值：LevelMode.OVERLAY
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    levelMode?: LevelMode;

  /**
   * 气泡弹出后的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidAppear?: VoidCallback;

  /**
   * 气泡退出动效前的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillDisappear?: VoidCallback;

  /**
   * 气泡消失后的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidDisappear?: VoidCallback;

  /**
   * 气泡显示动效前的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillAppear?: VoidCallback;
}

/**
 * 定义菜单的预览模式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MenuPreviewMode {
    /**
     * 不显示预览内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 0,
    /**
     * 预览内容为触发长按上下文菜单的组件的截图。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    IMAGE = 1
}
/**
 * 定义起始和结束属性的动画器范围。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type AnimationNumberRange = [
    double,
    double
];
/**
 * 定义上下文菜单的预览动画器选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ContextMenuAnimationOptions {
    /**
     * 设置起始动画器缩放比例和结束动画器缩放比例。
     *
     * @default -
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale?: AnimationNumberRange;
    /**
     * 定义菜单预览打开和关闭时的过渡效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * 设置自定义builder预览显示前所显示图片的缩放起始和结束动画器。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hoverScale?: AnimationNumberRange;
    /**
     * 设置是否支持中断悬停缩放过程。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hoverScaleInterruption?: boolean;
}
/**
 * 定义上下文菜单自定义预览的缩放模式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PreviewScaleMode {
    /**
     * 根据布局区域自动调整预览图大小。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 0,
    /**
     * 保持预览内容的原始大小，不进行缩放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CONSTANT = 1,
    /**
     * 缩放时保持预览的宽高比。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MAINTAIN = 2
}
/**
 * 定义内容切换时的过渡效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ContentTransitionEffect {
  /**
   * 内容切换时无过渡动画效果。
   *
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static get IDENTITY(): ContentTransitionEffect;

  /**
   * 内容切换时采用淡入淡出过渡动画。
   *
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static get OPACITY(): ContentTransitionEffect;
}
/**
 * Defines the type of border radius.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type BorderRadiusType = Length | BorderRadiuses | LocalizedBorderRadiuses;
/**
 * 定义菜单弹出时的振动效果模式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum HapticFeedbackMode {
    /**
     * 菜单弹出时不振动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DISABLED = 0,
    /**
     * 定义菜单弹出时始终振动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLED = 1,
    /**
     * 定义菜单振动效果跟随系统。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 2
}

/**
 * 定义菜单避让软键盘的方式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MenuKeyboardAvoidMode {
  /**
   * 菜单不避让软键盘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,

  /**
   * 菜单避让软键盘。如果空间不足，会平移或重新调整菜单大小来避让软键盘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TRANSLATE_AND_RESIZE = 1
}

/**
 * 定义菜单栅格位置。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum MenuGridPosition {
   /**
    * 栅格位于菜单顶部。
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
   TOP = 0,
   /**
    * 栅格位于菜单底部。
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
   BOTTOM = 1
}
 
/**
 * 定义菜单的栅格样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface MenuGridStyleOptions {
   /**
    * 栅格中元素的数量。
    *
    * @default 3
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
   count?: int;
   /**
    * 栅格中元素的水平尺寸。
    *
    * @default 3
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
   horizontalSize?: int;
   /**
    * 栅格在菜单中的位置。
    *
    * @default MenuGridPosition.TOP
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
   position?: MenuGridPosition;
}

/**
 * 定义上下文菜单选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ContextMenuOptions {
    /**
     * 显示上下文菜单的偏移量，该偏移量不应使菜单超出屏幕。
     * <p><strong>注意</strong>：
     * <br>当菜单相对于父组件区域显示时，区域的宽度或高度会根据菜单的placement属性自动计入偏移量。当菜单
     * 显示在父组件上方（即placement设置为Placement.TopLeft、Placement.Top或
     * Placement.TopRight）时，x为正值表示相对于父组件向右移动，
     * y为正值表示向上移动。当菜单显示在父组件下方
     * （即placement设置为Placement.BottomLeft、Placement.Bottom或Placement.BottomRight）时，x为
     * 正值表示相对于父组件向右移动，y为正值表示
     * 向下移动。当菜单显示在父组件左侧（即placement设置为
     * Placement.LeftTop、Placement.Left或Placement.LeftBottom）时，x为正值表示向左
     * 移动，y为正值表示向下移动。当
     * 菜单显示在父组件右侧（即placement设置为Placement.RightTop、
     * Placement.Right或Placement.RightBottom）时，x为正值表示相对于
     * 父组件向右移动，y为正值表示向下移动。如果菜单的显示位置
     * 被调整（与初始placement值的主方向不同），则偏移值无效。
     * </p>
     *
     * @default {x:0,y:0} - Percentage values are not supported.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * 上下文菜单的优先显示位置。如果设置的位置放不下该组件，将自动
     * 调整位置。
     * <p><strong>注意</strong>：
     * <br>如果通过长按或右键单击显示菜单，则菜单显示在点击
     * 位置。
     * </p>
     *
     * @default Placement.BottomLeft
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * 是否显示菜单的箭头。
     * <p><strong>注意</strong>：
     * <br>当enableArrow为true时，在placement指定的位置显示箭头。
     * <br>如果未设置placement或其值无效，箭头显示在目标上方。
     * <br>如果位置放不下箭头，将自动调整。
     * <br>当enableArrow为undefined时，不显示箭头。
     * <br>该接口从API version 10开始在bindContextMenu中支持，从API version 12开始在bindMenu中支持。
     * </p>
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * 箭头相对于上下文菜单的偏移量。偏移设置仅在值为有效值、
     * 可转换为大于0的数字、且不会使箭头超出上下文菜单的安全区域时
     * 才生效。
     * <p><strong>注意</strong>：
     * <br>箭头与菜单四条边的安全距离为菜单圆角半径与箭头宽度一半
     * 之和。placement的值决定偏移方向是水平还是垂直。
     * 当箭头处于菜单的水平方向时，偏移量为箭头到最左侧箭头
     * 安全距离的距离。当箭头处于菜单的垂直方向时，偏移量为
     * 箭头到最顶部箭头安全距离的距离。箭头显示的默认位置
     * 随placement的值而变化：在菜单未做任何避让的情况下，当placement设置为
     * Placement.Top或Placement.Bottom时，箭头水平显示且默认居中；当
     * placement设置为Placement.Left或Placement.Right时，箭头垂直显示且默认
     * 居中；当placement设置为Placement.TopLeft或Placement.BottomLeft时，箭头默认
     * 水平显示，且箭头到菜单左边缘的距离为箭头的安全
     * 距离；当placement设置为Placement.TopRight或Placement.BottomRight时，箭头默认
     * 水平显示，且箭头到菜单右边缘的距离为箭头的安全
     * 距离；当placement设置为Placement.LeftTop或Placement.RightTop时，箭头默认垂直
     * 显示，且箭头到菜单上边缘的距离为箭头的安全距离；当
     * placement设置为Placement.LeftBottom或Placement.RightBottom时，箭头默认垂直
     * 显示，且箭头到菜单下边缘的距离为箭头的安全距离。
     * <br>该接口从API version 10开始在bindContextMenu中支持，从API version 12开始在bindMenu中支持。
     * </p>
     *
     * @default 0vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowOffset?: Length;
    /**
     * 长按触发上下文菜单时显示的预览，或通过bindContextMenu的isShown变量
     * 显示菜单的预览内容样式。
     * <p><strong>注意</strong>：
     * <br>当responseType设置为ResponseType.RightClick时，该参数不生效。
     * <br>如果preview设置为MenuPreviewMode.NONE或未设置，enableArrow参数生效。
     * <br>如果preview设置为MenuPreviewMode.IMAGE或CustomBuilder，即使
     * enableArrow为true，也不会显示箭头。
     * </p>
     *
     * @default MenuPreviewMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preview?: MenuPreviewMode | CustomBuilder;
    /**
     * 定义菜单预览的圆角半径。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewBorderRadius?: BorderRadiusType;
    /**
     * 菜单的圆角半径。
     * <p><strong>注意</strong>：
     * <br>值可以为百分比。
     * <br>如果水平方向两个最大圆角半径之和超过菜单的宽度，或者
     * 垂直方向两个最大圆角半径之和超过菜单的高度，则使用
     * 菜单的默认圆角半径。
     * </p>
     *
     * @default 8vp for 2-in-1 devices and 20vp for other devices
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;
    /**
     * 菜单显示时触发的回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAppear?: () => void;
    /**
     * 上下文菜单消失时的回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDisappear?: () => void;
    /**
     * 菜单即将出现时触发的回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    aboutToAppear?: () => void;
    /**
     * 菜单即将消失时触发的回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    aboutToDisappear?: () => void;
    /**
     * 菜单布局区域的边距。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    layoutRegionMargin?: Margin;
    /**
     * 预览动画器选项。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewAnimationOptions?: ContextMenuAnimationOptions;
    /**
     * 菜单的背景色。
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * 菜单的背景模糊样式。
     *
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * 定义带选项的菜单背景模糊样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * 定义带选项的菜单背景效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundEffect?: BackgroundEffectOptions;
    /**
     * 定义菜单打开和关闭时的过渡效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
      * 决定是否兼容菜单的半折叠状态。
      *
      * @default false
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @since 23 static
      */
    enableHoverMode?: boolean;
    /**
     * 定义菜单弹出时的振动效果模式。
     *
     * @default HapticFeedbackMode.DISABLED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hapticFeedbackMode?: HapticFeedbackMode;
    /**
     * 菜单外边框的颜色。
     *
     * @default '#19ffffff'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineColor?: ResourceColor | EdgeColors;
    /**
     * 菜单外边框的宽度。
     * 如果需要描边效果，则需要设置outlineWidth。
     *
     * @default 0vp - Percentage values are not supported.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineWidth?: Dimension | EdgeOutlineWidths;
    /**
     * 是否为无蒙层的菜单。
     *
     * @default true when preview is enabled, or is false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mask?: boolean | MenuMaskType;
    /**
     * 定义菜单的模态模式。
     *
     * @default ModalMode.AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    modalMode?: ModalMode;
    /**
     * 菜单出现时的回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDidAppear?: VoidCallback;
    /**
     * 菜单消失时的回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDidDisappear?: VoidCallback;
    /**
     * 菜单打开动画开始前的回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillAppear?: VoidCallback;
    /**
     * 菜单关闭动画开始前的回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDisappear?: VoidCallback;
    /**
     * 定义上下文菜单自定义预览的缩放模式。
     *
     * @default PreviewScaleMode.AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewScaleMode?: PreviewScaleMode;
    /**
     * 定义预览的可用布局区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    availableLayoutArea?: AvailableLayoutArea;
    /**
     * 定义菜单位置。
     *
     * @default { x: 0, y: 0 }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchorPosition?: Position;
    /**
 	 * 定义菜单的主题颜色模式。
 	 * 
 	 * @default AnchoredColorMode.FOLLOW_TARGET
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	colorMode?: AnchoredColorMode;
    /**
     * 决定菜单避让软键盘的方式。
     *
     * 默认不避让
     *
     * @default MenuKeyboardAvoidMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyboardAvoidMode?: MenuKeyboardAvoidMode;

    /**
     * 定义菜单与软键盘之间的最小距离。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    minKeyboardAvoidDistance?: LengthMetrics;
    /**
 	 * 设置菜单与目标之间的间距。
 	 * 当同时设置targetSpace和offset时，二者叠加生效。建议使用targetSpace
 	 * 设置菜单与目标之间的间距，使用offset进行额外偏移。
 	 *
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	targetSpace?: LengthMetrics;
    /**
     * 设置菜单的系统材质。不同的材质具有不同的效果，可以影响
     * 菜单的backgroundColor、border、shadow等视觉属性。
     *
     * 设备行为差异：相同材质的效果可能因设备的计算能力不同而有所
     * 差异。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    /**
     * 设置菜单的系统材质。材质效果在不同计算能力
     * 的设备上表现不同。在计算能力较低的设备上，它会影响
     * backgroundColor、borderWidth、borderColor、shadow等属性。在计算能力较高的设备上，它会在系统材质层
     * 添加滤镜效果，可产生类似玻璃的效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;
    /**
     * 定义菜单的最大高度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    maxHeight?: LengthMetrics;
    /**
     * 定义菜单的滚动条状态。
     *
     * @default BarState.Auto
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    scrollBar?: BarState;
    /**
     * 设置菜单的扭曲动画模式。
     *
     * @default DistortionMode.DISTORTION_AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    distortionMode?: DistortionMode;
    /**
     * 设置菜单的流光动画模式。
     *
     * @default DistortionMode.EDGELIGHT_DISABLED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    edgeLightMode?: EdgeLightMode;
    /**
     * 定义菜单的栅格样式。仅对固定样式菜单生效。
     * 例如，在bindMenu/bindContextMenu中使用MenuElement，或在MenuItem中使用MenuItemOptions。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    gridStyle?: MenuGridStyleOptions;
    /**
     * 为组件添加颜色滤镜效果。颜色滤镜通过4x5颜色矩阵对组件像素进行颜色变换，可用于实现护眼模式、色温调节等视觉效果。
     * 参数类型为[ColorFilter]{@link ColorFilter}对象。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    colorFilterEffect?: ColorFilter;
}
/**
 * 定义菜单选项。
 *
 * @extends ContextMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuOptions extends ContextMenuOptions {
    /**
     * 设置菜单窗口的标题。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    title?: ResourceStr;
    /**
     * 是否在子窗口中显示。
     *
     * @default true for 2-in-1 devices and false for other devices
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
}
/**
 * ProgressMask设置遮罩的进度、最大值和颜色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ProgressMask {
    /**
     * constructor.
     *
     * @param { double } value - Current value of the progress mask. Value range: [0.0, +∞).
     * @param { double } total - Maximum value of the progress mask. Value range: [0.0, +∞).
     * @param { ResourceColor } color - Color of the progress mask.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(value: double, total: double, color: ResourceColor);
    /**
     * 更新进度遮罩的进度值。
     *
     * @param { double } value - 进度遮罩的当前值。<br/> 取值范围：[0.0, +∞)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    updateProgress(value: double): void;
    /**
     * 更新进度遮罩的颜色。
     *
     * @param { ResourceColor } value - 进度遮罩的颜色。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    updateColor(value: ResourceColor): void;
    /**
     * 进度满时的呼吸光晕动画开关。不设置该接口时，默认关闭呼吸光晕动画。
     *
     * @param { boolean } value - 是否开启呼吸光晕动画。<br/>true：开启呼吸光晕动画。<br/>false：关闭呼吸光晕动画。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableBreathingAnimation(value: boolean): void;
}
/**
 * 当前屏幕触点相对于窗口、父组件和子组件的坐标，以及子组件的id、位置和尺寸相关信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TouchTestInfo {
   /**
    * 按压点相对于窗口左上角的x轴坐标。
    * 单位：vp
    *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
    */
    windowX: double;
    /**
     * 按压点相对于窗口左上角的y轴坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * 按压点相对于父组件左上角的x轴坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    parentX: double;
    /**
     * 按压点相对于父组件左上角的y轴坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    parentY: double;
    /**
     * 按压点相对于子组件左上角的x轴坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 按压点相对于子组件左上角的y轴坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 子组件的位置和宽高。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rect: RectResult;
    /**
     * 子组件的唯一标识。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: string;
}
/**
 * 自定义事件分发结果，开发者通过返回结果来影响事件分发。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TouchResult {
    /**
     * 事件派发策略。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strategy: TouchTestStrategy;
    /**
     * 子组件的唯一标识。
     * 当strategy为TouchTestStrategy.DEFAULT时，id是可选的；当strategy是TouchTestStrategy.FORWARD_COMPETITION或TouchTestStrategy.FORWARD时，id是必需的（如果没有返回id，则视为TouchTestStrategy.DEFAULT处理）。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id?: string;
}

/**
 * 深度空间的三维向量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthVector3 {
  /**
   * X分量。
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  x: double;

  /**
   * Y分量。
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  y: double;

  /**
   * Z分量。
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  z: double;
}

/**
 * 深度空间的四维向量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthVector4 {
  /**
   * X分量。
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  x: double;

  /**
   * Y分量。
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  y: double;

  /**
   * Z分量。
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  z: double;

  /**
   * W分量。
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  w: double;
}

/**
 * 深度空间的RGB颜色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthColorRGB {
  /**
   * 红色分量（0-255）。
   *
   * @default 255
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  red: int;

  /**
   * 绿色分量（0-255）。
   *
   * @default 255
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  green: int;

  /**
   * 蓝色分量（0-255）。
   *
   * @default 255
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  blue: int;
}

/**
 * 空间位置模式。表示角点位置所使用的坐标系。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum SpatialPositionMode {
  /**
   * 世界坐标系XYZ模式。X、Y、Z分量均使用世界坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  WORLD_XYZ = 0,

  /**
   * NDC XY与世界Z坐标模式。X、Y分量使用NDC（归一化设备坐标），
   * Z分量使用世界坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NDC_XY_WORLD_Z = 1
}

/**
 * 三维空间中的角点位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SpatialPosition {
  /**
   * 三维空间中的左上角位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  leftTop: DepthVector3;

  /**
   * 三维空间中的右上角位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  rightTop: DepthVector3;

  /**
   * 三维空间中的左下角位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  leftBottom: DepthVector3;

  /**
   * 三维空间中的右下角位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  rightBottom: DepthVector3;

  /**
   * 角点位置的坐标系模式。
   *
   * @default SpatialPositionMode.WORLD_XYZ
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  positionMode?: SpatialPositionMode;
}

/**
 * 景深效果参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SpatialEffectParams {
  /**
   * 由角点定义的空间位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  position: SpatialPosition | double;

  /**
   * 景深效果的遮挡权重。
   * 取值范围：[0, 1]，默认值：0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  occlusionWeight?: double;
}

/**
 * Set the edge blur effect distance of the corresponding defense line of the component
 * When the component expand out, no re-layout is triggered
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PixelStretchEffectOptions {
    /**
     * top property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    top?: Length;
    /**
     * bottom property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bottom?: Length;
    /**
     * left property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    left?: Length;
    /**
     * right property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    right?: Length;
}
/**
 * 定义点击效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ClickEffect {
    /**
     * 设置当前组件的点击回弹效果。
     * 
     * 默认值：ClickEffectLevel.LIGHT
     * 
     * **说明：**
     * 
     * 当level为undefined或者null时， ClickEffect采用ClickEffectLevel.LIGHT对应的回弹效果，缩放比参照scale说明。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    level: ClickEffectLevel;
    /**
     * 回弹缩放比例，支持在设置ClickEffectLevel的基础上微调。
     * 
     * **说明：**
     * 
     * 当level为ClickEffectLevel.LIGHT时，默认值：0.90 
     * 
     * 当level为ClickEffectLevel.MIDDLE或者ClickEffectLevel.HEAVY时，默认值：0.95 
     * 
     * 当level为undefined或者null时，level为ClickEffectLevel.LIGHT，默认值：0.90 
     * 
     * 当scale为undefined或者null时，使用当前level对应的默认缩放比例。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale?: double;
}
/**
 * fadingEdge属性边缘渐隐参数对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FadingEdgeOptions {
    /**
     * 设置边缘渐隐长度。
     *
     * @default 32vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fadingEdgeLength?: LengthMetrics;
}
/**
 * 定义嵌套滚动选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NestedScrollOptions {
    /**
     * 滚动组件往末尾端滚动时的嵌套滚动选项。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollForward: NestedScrollMode;
    /**
     * 滚动组件往起始端滚动时的嵌套滚动选项。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollBackward: NestedScrollMode;
}
/**
 * 定义菜单项元素。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuElement {
    /**
     * 设置菜单项元素的值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: ResourceStr;
    /**
     * 设置菜单项元素的图标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    icon?: ResourceStr;
    /**
     * 设置菜单项元素的符号图标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    symbolIcon?: SymbolGlyphModifier;
    /**
     * 当值为true时，菜单项元素可用，可以响应点击等操作。
     * 当值为false时，菜单项元素不可用，不响应点击操作。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enabled?: boolean;
    /**
     * 点击菜单项时执行的回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: () => void;
}

/**
 * 定义属性修饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AttributeModifier<T> {
  /**
   * 定义正常状态的属性更新函数。
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default applyNormalAttribute(instance: T) : void;

  /**
   * 定义按下状态的属性更新函数。
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default applyPressedAttribute(instance: T) : void;

  /**
   * 定义获焦状态的属性更新函数。
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default applyFocusedAttribute(instance: T) : void;

  /**
   * 定义禁用状态的属性更新函数。
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default applyDisabledAttribute(instance: T) : void;

  /**
   * 定义选中状态的属性更新函数。
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default applySelectedAttribute(instance: T) : void;

  /**
   * 定义悬停状态的属性更新函数。
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default applyHoveredAttribute(instance: T) : void;

  /**
   * 指定需要监听的状态。
   * 重写该方法，通过返回ModifierState枚举值组成的位掩码来指定需要监听哪些状态
   * （Normal、Pressed、Focused、Disabled、Selected）。
   *
   * @returns { int } - 需要监听的状态的位掩码组合
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  default monitoredStates(): int;
}
/**
 * 开发者需要自定义class实现ContentModifier接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ContentModifier<T> {
    /**
     * 定制内容区的Builder。
     *
     * @returns { WrappedBuilder<CustomBuilderT<T>> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    applyContent(): WrappedBuilder<CustomBuilderT<T>>;
}
/**
 * 开发者需要自定义class实现ContentModifier接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CommonConfiguration<T> {
    /**
     * 如果该值为true，则contentModifier可用，并且可以响应triggerChange等操作，如果设置为false，则不会响应triggerChange等操作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enabled: boolean;
    /**
     * 用于将用户需要的组件信息发送到自定义内容区。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    contentModifier: ContentModifier<T>;
}
/**
 * Outline Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum OutlineStyle {
    /**
     * Solid border.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SOLID = 0,
    /**
     * Dashed border.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DASHED = 1,
    /**
     * Dotted border. The radius of a dot is half of **outlineWidth**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DOTTED = 2
}
/**
 * 设置拖拽预览图的显示模式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DragPreviewMode {
    /**
     * 系统根据拖拽场景自动改变跟手点位置，根据规则自动对拖拽背板图进行缩放变换等。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 1,
    /**
     * 禁用系统对拖拽背板图的缩放行为。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DISABLE_SCALE = 2,
    /**
     * 启用非文本类组件默认阴影效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_DEFAULT_SHADOW = 3,
    /**
     * 启用非文本类组件统一圆角效果，默认值12vp。当应用自身设置的圆角值大于默认值或modifier设置的圆角时，则显示应用自定义圆角效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_DEFAULT_RADIUS = 4,
    /**
     * 启用支持原拖拽对象灰显（透明度）效果，对文本内容拖拽不生效。用户拖起时原对象显示灰显效果，释放时原对象恢复原有效果。开启默认灰显效果后，不建议在拖拽开始后自行修改透明度，如果开发者在拖拽发起后自行修改应用透明度，则灰显效果将被覆盖，且在结束拖拽时无法正确恢复原始透明度效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_DRAG_ITEM_GRAY_EFFECT = 5,
    /**
     * 启用支持多选对象鼠标拖拽不聚拢效果，各拖拽图显示在其原始位置的相对位置，当满足多选的情况下且isMultiSelectionEnabled为true时该参数才生效。不聚拢效果优先级高于[dragPreview]{@link dragPreview}。不支持二次拖拽、圆角和缩放设置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_MULTI_TILE_EFFECT = 6,
    /**
     * 启用支持以拖拽预览图初始尺寸计算跟手点位置，长按浮起图和拖拽图不一致时使用。鼠标拖拽，设置DragPreviewMode.ENABLE_MULTI_TILE_EFFECT时不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW = 7
}
/**
 * 当一个节点上同时设置长按浮起预览（参考[bindContextMenu]{@link bindContextMenu}）与拖拽时，使用该字段设置长按浮起预览图与拖拽预览图过渡动效方式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DraggingSizeChangeEffect {
    /**
     * 发起拖拽时直接从菜单预览图切换为最终尺寸的拖拽预览图。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 发起拖拽时，由菜单预览图直接切换为拖拽预览图，尺寸逐步从菜单预览图尺寸过渡到最终预览图尺寸，设置了[DragPreviewMode]{@link DragPreviewMode}中的DISABLE_SCALE枚举值时尺寸过渡不生效。这在长按浮起预览图与拖拽预览图相同时使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SIZE_TRANSITION = 1,
    /**
     * 发起拖拽时，由菜单预览图逐步过渡切换为最终拖拽预览图，设置[DragPreviewMode]{@link DragPreviewMode}中的DISABLE_SCALE时尺寸过渡不生效。这常用于菜单预览图与拖拽预览图差异较大时使用，过渡效果包含内容透明度及尺寸变化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SIZE_CONTENT_TRANSITION = 2
}
/**
 * 定义菜单的弹出策略。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MenuPolicy {
    /**
     * 默认值。是否弹出菜单的默认逻辑取决于场景。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 菜单始终隐藏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    HIDE = 1,
    /**
     * 菜单始终显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SHOW = 2
}
/**
 * 设置拖拽过程中预览图处理模式及数量角标的显示。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DragPreviewOptions {
    /**
     * 表示拖拽过程中背板图处理模式。
     * 默认值：DragPreviewMode.AUTO
     * 当组件同时设置DragPreviewMode.AUTO和其它枚举值时，以DragPreviewMode.AUTO为准，其它枚举值设置无效。
     *
     * @default DragPreviewMode.AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mode?: DragPreviewMode | Array<DragPreviewMode>;
    /**
     * 用于配置拖拽背板图的样式Modifier对象，可使用图片组件所支持的属性和样式来配置背板图样式（参考示例6），当前支持透明度，阴影，背景模糊度，圆角，材质效果。文本拖拽只支持默认效果，不支持通过modifier进行自定义。
     * 1.透明度。
     * 通过[opacity]{@link opacity}设置不透明度，不透明度的取值范围为0-1。设置0或不设置时采用背板图透明度的默认值0.95，设置1或异常值时不透明。
     * 2.阴影。
     * 通过[shadow]{@link shadow}设置阴影。
     * 3.背景模糊度。
     * 通过[backgroundEffect]{@link backgroundEffect}或[backgroundBlurStyle]{@link backgroundBlurStyle}设置背景模糊度，如果两者同时设置，以后设置的属性为准。
     * 4.圆角。
     * 通过[border]{@link border}或[borderRadius]{@link borderRadius}设置圆角，当同时在mode和modifier中设置圆角，mode设置的圆角显示优先级低于modifier设置。
     * 5.材质效果，从API版本26.0.0开始支持。
     * 通过systemMaterial设置系统材质效果。
     * 默认值：空，拖拽背板不设置背板图样式。
     * **说明：**
     * 1.若节点已设置背景模糊或材质效果，直接用作拖拽预览会导致截图包含这些效果，与拖拽modifier属性冲突。建议使用[dragPreview]{@link dragPreview}自定义不包含背景模糊和材质效果的预览。
     * 2.ImmersiveMaterial的colorInvert参数在拖拽中不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    modifier?: ImageModifier;
    /**
     * 控制数量角标是否显示，或强制设置显示的数量。当设置数量角标时取值范围为[0，2<sup>31</sup>-1]，超过取值范围时会按默认状态处理。当设置为浮点数时，只显示整数部分。
     * **说明：**
     * 在多选拖拽场景，需通过该接口设置拖拽对象的数量。
     * 默认值：true。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    numberBadge?: boolean | long;
    /**
     * 用于选择长按浮起图与拖拽预览图过渡效果。
     * 默认值：DraggingSizeChangeEffect.DEFAULT。
     *
     * @default DraggingSizeChangeEffect.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    sizeChangeEffect?: DraggingSizeChangeEffect;
}
/**
 * 设置拖拽过程中预览图浮起的交互模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DragInteractionOptions {
    /**
     * 表示拖拽过程中背板图是否支持多选聚拢效果。true表示支持多选聚拢效果，false表示不支持多选聚拢效果。该参数只在[Grid]{@link Grid}和[List]{@link List}组件中的[GridItem]{@link GridItem}组件和[ListItem]{@link ListItem}组件生效。
     * 当一个item组件设置为多选拖拽时，该组件的子组件不可拖拽。聚拢组件预览图设置的优先级为[dragPreview]{@link dragPreview}中的string，dragPreview中的PixelMap，组件自截图，不支持dragPreview中的Builder形式。
     * 不支持组件绑定[bindContextMenu]{@link bindContextMenu}中参数存在isShown的模式。
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isMultiSelectionEnabled?: boolean;
    /**
     * 表示是否启用长按浮起阶段组件自身的默认点按效果（缩小）。true表示启用默认点按效果，false表示不启用默认点按效果。
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    defaultAnimationBeforeLifting?: boolean;
    /**
     * 设置在拖拽至可滚动组件边缘时是否触发自动滚屏。true表示触发自动滚屏，false表示不触发自动滚屏。
     * 默认值：true
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableEdgeAutoScroll?: boolean;
    /**
     * 表示拖拽时是否启用震动。true表示启用震动，false表示不启用震动。仅在存在蒙层的预览（通过[bindContextMenu]{@link bindContextMenu}）场景生效。
     * **注意：** 仅当应用具备 ohos.permission.VIBRATE 权限，且用户启用了触感反馈时才会生效。
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableHapticFeedback?: boolean;
    /**
     * 表示长按拖拽时，是否禁用浮起效果。true表示禁用浮起效果，false表示不禁用浮起效果。
     * 如果设置为true，当组件支持拖拽并同时设置[bindContextMenu]{@link bindContextMenu}时，仅弹出配置的自定义菜单预览。
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isLiftingDisabled?: boolean;
}
/**
 * Defines the drag preview configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PreviewConfiguration {
    /**
    * Define whether to only use for lifting.
    *
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    onlyForLifting?: boolean;
    /**
    * Define whether to delay create builder.
    *
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    delayCreating?: boolean;
}
/**
 * 前景智能取反色。基于灰度阈值区间决定反色取值，参见[invert]{@link CommonMethod#invert(value: number | InvertOptions | undefined)}中的详细机制说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface InvertOptions {
    /**
     * 背景颜色灰度值大于阈值区间时的取值。
     *
     * 取值范围：[0, 1]。设置小于0的值时，按值为0处理。设置大于1的值时，按值为1处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    low: double;
    /**
     * 背景颜色灰度值小于阈值区间时的取值。
     *
     * 取值范围：[0, 1]。设置小于0的值时，按值为0处理。设置大于1的值时，按值为1处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    high: double;
    /**
     * 灰度阈值。与thresholdRange配合使用，灰度阈值上下偏移thresholdRange构成阈值区间。
     *
     * 取值范围：[0, 1]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    threshold: double;
    /**
     * 阈值范围。
     *
     * 取值范围：[0, 1]。设置小于0的值时，按值为0处理；设置大于1的值时，按值为1处理。
     *
     * **说明：**
     *
     * 灰度阈值上下偏移thresholdRange构成阈值区间，背景颜色灰度值在区间内取值由high线性渐变到low。
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    thresholdRange: double;
}
/**
 * 定义可选类型，其值可以是undefined。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Optional<T> = T | undefined;
/**
 * 悬浮气泡信息类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TipsMessageType = ResourceStr | StyledString;
/**
 * 定义菜单的模态模式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ModalMode {
    /**
     * 自动模式，菜单组件采用当前设备的默认行为。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 0,
    /**
     * 操作在菜单周围生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 1,
    /**
     * 在目标窗口中，操作在菜单周围不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TARGET_WINDOW = 2
}
/**
 * 菜单蒙层类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuMaskType {
    /**
     * 菜单的蒙层颜色。
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * 设置菜单蒙层的背景模糊样式。
     *
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
}
/**
 * 预览图宽高设置为百分比时的参考可布局区域大小。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AvailableLayoutArea {
    /**
     * 参考可布局区域大小为窗口大小减去上下左右安全边距。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SAFE_AREA = 0
}
/**
 * 定义背景图选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface BackgroundImageOptions {
    /**
     * 是否同步加载图片，默认是异步加载。同步加载时阻塞UI线程，不会显示占位图。
     * 默认值：false
     * false：异步加载图片。
     * true：同步加载图片。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    syncLoad?: boolean;
    /**
     * 设置背景图片的重复样式。默认值为ImageRepeat.NoRepeat。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeat?: ImageRepeat;
}
/**
 * background配置选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BackgroundOptions {
    /**
     * 自定义背景与组件的对齐方式。该属性仅对CustomBuilder类型的背景生效。如果设置了ignoresLayoutSafeAreaEdges，则背景的布局区域为包含了扩展安全区的范围。如果设置null/undefined，则使用Alignment.TopStart值。
     * 默认值：Alignment.Center
     *
     * @default Alignment.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align?: Alignment;
    /**
     * 配置背景要扩展到的安全区，包括：状态栏，导航栏和[safeAreaPadding]{@link safeAreaPadding}。
     * 默认值：
     * - CustomBuilder背景：[]，不扩展。
     * - ResourceColor背景：[LayoutSafeAreaEdge.ALL]，扩展至所有方向。
     *
     * @default The default value is LayoutSafeAreaEdge.ALL when background is ResourceColor, otherwise
     *     it is an empty array [].
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ignoresLayoutSafeAreaEdges?: Array<LayoutSafeAreaEdge>;
}
/**
 * 设置组件的自定义属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type CustomProperty = undefined | null | Object | Record<string, CustomProperty> | Array<CustomProperty>;

/**
 * CommonMethod
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CommonMethod {
    /**
     * 设置组件自身的宽度或水平方向布局策略，缺省时使用子组件自身内容需要的宽度。若子组件的宽大于父组件的宽，则子组件会溢出显示在父组件外部。
     *
     * 从API version 15开始，当参数为Length类型时，该接口支持calc计算特性。
     *
     * @param { Length | LayoutPolicy | undefined } widthValue - 要设置的组件宽度或水平方向布局策略。
     *    <br>单位：vp
     *    <br>设置百分比时，以父容器的宽度作为基础值。
     * @returns { this } 返回当前组件对象，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default width(widthValue: Length | LayoutPolicy | undefined): this;
    /**
     * 设置组件自身的高度或垂直方向布局策略，缺省时使用子组件自身内容需要的高度。若子组件的高大于父组件的高，则子组件会溢出显示在父组件外部。
     *
     * 从API version 15开始，当参数为Length类型时，该接口支持calc计算特性。
     *
     * @param { Length | LayoutPolicy | undefined } heightValue - 要设置的组件高度或垂直方向布局策略。
     *    <br>单位：vp
     *    <br>设置百分比时，以父容器的高度作为基础值。
     * @returns { this } 返回当前组件对象，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default height(heightValue: Length | LayoutPolicy | undefined): this;
    /**
     * 设置当前组件的drawModifier。
     *
     * @param { DrawModifier | undefined } modifier - 用于绘制的drawModifier，不可用时为undefined。
     * 默认值：undefined
     * 自定义修饰器仅应用于当前绑定组件的FrameNode，不应用于其子节点。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default drawModifier(modifier: DrawModifier | undefined): this;
    /**
     * 设置组件的自定义属性。
     *
     * API版本26.0.0之前，[自定义组件](docroot://ui/state-management/arkts-create-custom-components.md)不支持设置自定义属性。
     *
     * 从API版本26.0.0开始，自定义组件支持设置并读取自定义属性。
     *
     * @param { string } name - 自定义属性的名称。
     * @param { CustomProperty } value - 自定义属性的值。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default customProperty(name: string, value: CustomProperty): this;
    /**
     * 控制组件扩展其安全区域，实现沉浸式效果。
     *
     * >  **说明：**
     * >
     * > - 设置expandSafeArea属性进行组件绘制扩展时，建议组件尺寸不要设置固定宽高（百分比除外），当设置固定宽高（包括设置'auto'）时，扩展安全区域的方向只支持[SafeAreaEdge.TOP,
     * SafeAreaEdge.START]，扩展后的组件尺寸保持不变。
     * >
     * > - 安全区域不会限制内部组件的布局和大小，不会裁剪内部组件。
     * >
     * > - 当父容器为滚动容器时，组件设置expandSafeArea属性后，自身不会延伸，但仍可触发其子节点中设置了expandSafeArea的延伸范围更新。
     * >
     * > - 设置expandSafeArea()时，不传参，走默认值处理；设置expandSafeArea([],[])时，相当于入参是空数组，此时expandSafeArea属性设置无效。
     * >
     * > - 组件设置expandSafeArea生效的条件为：
     * >  1.type为SafeAreaType.KEYBOARD时默认生效，表现为组件不避让键盘。<br/>
     * >  2.设置其他type，组件的边界与安全区域重合时组件能够延伸到安全区域下。例如：设备顶部状态栏高度100，那么组件在屏幕中的绝对位置需要为0 <= y <= 100。
     * >
     * > - 组件延伸到避让区时，在避让区的事件如点击事件等可能会被系统拦截，优先给状态栏等系统组件响应。
     * >
     * > - 滚动类容器内的组件不建议设置expandSafeArea属性，如果设置，需要按照组件嵌套关系，将当前节点到滚动类祖先容器间所有直接节点设置expandSafeArea属性，
     * 否则expandSafeArea属性在滚动后可能会失效，写法参考[示例7](#示例7滚动类容器扩展安全区)。
     * >
     * > - expandSafeArea属性仅作用于当前组件，不会向父组件或子组件传递，因此使用过程中，所有相关组件均需配置。
     * >
     * > - 同时设置expandSafeArea和position属性时，position属性会优先生效，expandSafeArea属性会后生效。
     * 对于未设置position、offset等绘制属性的组件，如果其边界未与避让区重叠，设置expandSafeArea属性将不生效，如弹窗和半模态组件。
     * >
     * > - 对于expandSafeArea属性无法生效的场景，若要将组件部署在避让区，需要手动调整组件的坐标。
     *
     * @param { Array<SafeAreaType> } types - 配置扩展安全区域的类型。默认值包含SafeAreaType.CUTOUT，
     *    但未添加[Metadata](docroot:../../apis-ability-kit/js-apis-bundleManager-metadata.md)配置项时，页面不避让挖孔，CUTOUT类型不生效。
     *    <br>默认值：[SafeAreaType.SYSTEM, SafeAreaType.CUTOUT, SafeAreaType.KEYBOARD]
     *    <br>非法值：按默认值处理。
     * @param { Array<SafeAreaEdge> } edges - 配置扩展安全区域的边缘，默认扩展至所有避让区域。
     *    <br>默认值：[SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM, SafeAreaEdge.START, SafeAreaEdge.END]。
     *    <br>非法值：按默认值处理。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default expandSafeArea(types?: Array<SafeAreaType>, edges?: Array<SafeAreaEdge>): this;
    /**
     * 扩展组件布局时的安全区。
     *
     * >  **说明：**
     * >
     * >
     * 忽略布局安全区边缘的组件，如果其宽度或高度设置了 [LayoutPolicy.matchParent]{@link LayoutPolicy.matchParent}，其大小和位置都会改变，否则仅改变
     * 其位置。
     * >
     * > 依据safeAreaPadding累积功能，组件可扩展其安全区边缘到所有能感知的连续安全区域。
     * >
     * > 滚动类组件的子元素忽略布局安全区边缘时在滚动方向不考虑滚动组件自身及其父组件的安全区域，包括：List、ArcListItem、Grid、WaterFlow、Swiper和Tabs。
     * >
     * > 忽略布局安全区属性.ignoreLayoutSafeArea和忽略渲染安全区属性.expandSafeArea都设置时，.ignoreLayoutSafeArea先生效，.expandSafeArea在前者基础上再生效。
     *
     * @param { Array<LayoutSafeAreaType> | undefined } types - 扩展布局安全区域的类型。<br
     *    />默认值：[LayoutSafeAreaType.SYSTEM]，扩展至所有安全区域，比如：状态栏，导航栏和组件级安全区（safeAreaPadding）。<br/>非法值：按默认值处理。
     * @param { Array<LayoutSafeAreaEdge> | undefined } edges - 扩展布局安全区的边缘，并且支持镜像能力。<br />默认值：[LayoutSafeAreaEdge.ALL]，扩展组件所有边缘。<br
     *    />非法值：按默认值处理。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType> | undefined, edges?: Array<LayoutSafeAreaEdge> | undefined): this;
    /**
     * 设置一个或多个触摸热区。从API版本26.0.0开始，未主动设置时[Button]{@link Button}、Button模式的Toggle、[Select]{@link Select}、[Chip]{@link Chip}和[ChipGroup]{@link ChipGroup}组件的触摸热区默认最小高度从28vp变更为32vp。该变更仅影响触摸命中范围，不影响组件实际显示高度。
     *
     * @param { Array<Rectangle> | Rectangle | undefined } value - 触摸热区，包括位置和大小。<br/>默认触摸热区为整个组件，默认值：<br/>{<br/>x：0,<br/>y：0,<br/>width：'100%',<br/>height：'100%'<br/>}<br/>异常值：参数为undefined或null时，按默认值处理。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default responseRegion(value: Array<Rectangle> | Rectangle | undefined): this;
    /**
     * 设置一个或多个触摸热区。
     * 设置一个或多个鼠标触摸热区。
     *
     * @param { Array<Rectangle> | Rectangle | undefined } value - 鼠标触摸热区，包括位置和大小。<br/>默认触摸热区为整个组件，默认值：<br/>{<br/>x：0,<br/>y：0,<br/>width：'100%',<br/>height：'100%'<br/>}
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default mouseResponseRegion(value: Array<Rectangle> | Rectangle | undefined): this;
    /**
     * 设置组件的触摸热区列表。调用该接口时，[responseRegion]{@link responseRegion}与[mouseResponseRegion]{@link mouseResponseRegion}接口不再生效。
     *
     * @param { Array<ResponseRegion> | undefined } regions - 组件的触摸热区数组。<br/>每个触摸热区均包括输入工具类型、位置和大小。<br/>默认值：<br/>[{<br/>tool：ResponseRegionSupportedTool.ALL,<br/>x：LengthMetrics.vp(0),<br/>y：LengthMetrics.vp(0),<br/>width：LengthMetrics.percent(1),<br/>height：LengthMetrics.percent(1)<br/>}]<br>异常值：参数为undefined或null时，按默认值处理。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default responseRegionList(regions: Array<ResponseRegion> | undefined): this;
    /**
     * 设置组件自身的宽高尺寸。设置后会影响组件在父容器中的布局和显示大小。
     *
     * 从API version 10开始，该接口支持calc计算特性。
     *
     * @param { SizeOptions | undefined } value - 设置宽高尺寸。
     *    <br>异常值：参数为undefined时，属性设置不生效；其它异常值时，size属性恢复到不配置时的默认行为。
     *    <br>单位：vp
     * @returns { this } 返回当前组件对象，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default size(value: SizeOptions | undefined): this;
    /**
     * 设置约束尺寸，组件布局时进行尺寸范围限制。设置后组件的宽度和高度将被限制在指定的最小值和最大值范围内，constraintSize的优先级高于width和height属性。
     *
     * 从API version 10开始，该接口支持calc计算特性。
     *
     * @param { ConstraintSizeOptions | undefined } value - 设置约束尺寸。constraintSize的优先级高于
     *    [width]{@link CommonMethod#width(value: Length)}和[height]{@link CommonMethod#height(value: Length)}。取值结果参考
     *    constraintSize取值对width/height影响。
     *    <br>默认值：
     *    <br>{
     *    <br>minWidth: 0,
     *    <br>maxWidth: Infinity,
     *    <br>minHeight: 0,
     *    <br>maxHeight: Infinity
     *    <br>}
     *    <br>异常值：数值开头的字符串仅解析出数字部分，非数值开头的字符串解析为0；其它异常值时，constraintSize属性恢复到不配置时的默认行为。
     *    <br>单位：vp
     * @returns { this } 返回当前组件对象，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default constraintSize(value: ConstraintSizeOptions | undefined): this;
    /**
     * 设置组件的触摸测试类型。如果组件不设置hitTestBehavior，其默认触摸测试类型为HitTestMode.Default。
     *
     * @param { HitTestMode | undefined } value - 设置当前组件的触摸测试类型。
     * @default HitTestMode.default - Both the node and its child nodes respond to the hit test of a touch event,
     *     but its sibling nodes are blocked from the hit test. The hit test for ancestor nodes is not affected.
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default hitTestBehavior(value: HitTestMode | undefined): this;

    /**
     * 设置组件对Agent生成事件的输入管控级别。
     *
     * Agent生成的事件包括系统Agent生成的事件，以及具有ohos.permission.CONTROL_COMPONENT权限的应用
     * 注入的事件。该设置适用于支持的Agent生成输入事件，例如触摸和鼠标事件，不影响用户生成的
     * 输入事件或其他注入事件。
     *
     * @param { AgentControlMode | undefined } value - 系统Agent生成事件的输入管控级别。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    default agentControlMode(value: AgentControlMode | undefined): this;

    /**
     * 当前组件通过设置回调，可自定义触摸测试并控制触摸测试中的子节点行为。
     * > **说明：**
     * >
     * > - 子节点信息数组中仅包含命名节点的信息，即开发者通过id属性设置了id的节点。
     * >
     * > - 从API version 20开始，该接口支持在[attributeModifier]{@link attributeModifier}中调用。
     *
     * @param { ((value: Array<TouchTestInfo>) => TouchResult) | undefined } event - 触摸事件信息。value的值为包含子节点信息的数组。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onChildTouchTest(event: ((value: Array<TouchTestInfo>) => TouchResult) | undefined): this;
    /**
     * 设置组件的布局权重，使组件在父容器（[Row]{@link @global:Row}/[Column]{@link @global:Column}/[Flex]{@link @global:Flex}）的主轴方向按照权重分配尺寸。适用于父容器尺寸确定、需要多个子组件
     * 按比例分配剩余空间的场景。
     *
     * @param { double | string | undefined } value - 父容器尺寸确定时，不设置layoutWeight属性或者layoutWeight属性生效值为0的子组件优先占位，这些子组件占位后在主轴留下的空间称为主轴剩余空
     *    间。设置了layoutWeight属性且layoutWeight属性生效值大于0的子组件会从主轴剩余空间中按照各自所设置的权重占比分配尺寸，分配时会忽略子组件本身的width/height设置，但保留minWidth/
     *    minHeight约束。
     *    <br>默认值：0
     *    <br>取值范围：[0, +∞)
     *    <br>超出范围时：传入小于0的值时，按0处理。
     *    <br>**说明：**
     *    <br>仅在[Row]{@link @global:Row}/[Column]{@link @global:Column}/[Flex]{@link @global:Flex}布局中生效。
     *    <br>可选值为大于等于0的数字，或者可以转换为数字的字符串（支持整数、小数格式）。
     *    <br>如果容器中有子组件设置了layoutWeight属性，且设置的属性值大于0，则所有子组件不会再基于[flexShrink]{@link CommonMethod#flexShrink}和
     *    [flexGrow]{@link CommonMethod#flexGrow}布局。
     * @returns { this } 返回当前组件对象，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default layoutWeight(value: double | string | undefined): this;
    /**
     * 对形成链的组件进行重新布局。仅当父组件为[RelativeContainer]{@link @global:RelativeContainer}时生效。
     *
     * > **说明：**
     * >
     * > 从API version 23开始，支持 [attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
     *
     * @param { ChainWeightOptions | undefined } chainWeight - 设置了chainWeight属性的组件与同一条链上的兄弟组件在水平或竖直方向的尺寸会按照设置的权重进行分配，分配时会忽略组件本身尺寸设置，按分配的权重自适应占满剩余空间。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default chainWeight(chainWeight: ChainWeightOptions | undefined): this;
    /**
     * 设置组件的内边距属性。设置后会在组件内容和边框之间创建额外空间，影响组件内部内容的布局区域。
     *
     * 从API version 10开始，该接口支持calc计算特性。
     *
     * @param { Padding | Length | LocalizedPadding | undefined } value - 设置组件的内边距。
     *    <br>参数为Length类型时，四个方向内边距同时生效。
     *    <br>默认值：0
     *    <br>单位：vp
     *    <br>padding设置百分比时，上下左右内边距均以父容器的width作为基础值。 [since 12]
     * @returns { this } 返回当前组件对象，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default padding(value: Padding | Length | LocalizedPadding | undefined): this;
    /**
     * 设置安全区边距属性。允许容器向自身添加组件级安全区域，供子组件延伸，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。与padding不同，
     * safeAreaPadding用于设置组件级安全区域供子组件延伸使用，而padding用于设置组件内容区域的内边距，两者可同时设置、分别生效。
     *
     * > **说明：**
     * >
     * > 从API version 18开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { Padding | LengthMetrics | LocalizedPadding | undefined } paddingValue - 设置组件的安全区边距，用于在组件内部创建组件级安全区域供子组件延伸使用。
     *    <br>默认值：0
     *    <br>单位：vp
     *    <br>paddingValue设置百分比时，上下左右内边距均以父容器的width作为基础值。
     * @returns { this } 返回当前组件对象，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default safeAreaPadding(paddingValue: Padding | LengthMetrics | LocalizedPadding | undefined): this;
    /**
     * 在组件的一个或多个边缘放置自定义内容，并按其实际占用为主体内容留出组件级安全区域。
     * 适用于边缘工具栏、操作区或占位内容。再次调用时整体替换四边配置，未提供的边不保留旧内容。
     * 内容从宿主普通 `padding` 的内边界附着；同宿主同物理边的有效安全区取已有 `safeAreaPadding`
     * 与边缘内容占用的较大值，不将两者相加。跨祖先和系统安全区沿用既有累计规则。
     * 计算组件在垂直于附着边方向上的自适应尺寸时，会计入有效安全区。
     *
     * @param { SafeAreaInsetOptions } [options] - 四边完整配置。默认值：`undefined`，重置四边。
     *     空配置也重置四边；省略的边或构建结果为空的边只清除该边。
     *     不支持的 `spacing` 值回退为 `0vp`，不清除有效内容。
     * @returns { this } 当前组件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    default safeAreaInset(options?: SafeAreaInsetOptions): this;
    /**
     * 设置组件的外边距属性。在计算位置时外边距视为组件大小的一部分，从而影响组件位置。
     *
     * 从API version 10开始，该接口支持calc计算特性。
     *
     * @param { Margin | Length | LocalizedMargin | undefined } value - 设置组件的外边距。
     *    <br>参数为Length类型时，四个方向外边距同时生效。
     *    <br>默认值：0
     *    <br>单位：vp
     *    <br>margin设置百分比时，上下左右外边距均以父容器的width作为基础值。在[Row]{@link @global:Row}、[Column]{@link @global:Column}、[Flex]{@link @global:Flex}交叉轴上布
     *    局时，子组件在交叉轴方向占用的空间包含子组件本身尺寸和margin值。
     *    <br>例如Column容器宽100，其中子组件宽50，margin left为10，right为20，子组件宽度与左右margin之和为50+10+20=80，小于容器宽度100，子组件在交叉轴方向居中对齐，此时水平方向
     *    左侧和右侧各有(100-80)/2=10的空白区域。 [since 12]
     * @returns { this } 返回当前组件对象，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default margin(value: Margin | Length | LocalizedMargin | undefined): this;
    /**
     * 设置组件背景。从API version 20开始，content参数新增了对[ResourceColor]{@link ResourceColor}类型的支持，并新增了背景向父组件的安全区扩展的能力。
     * >**说明：**
     * >
     * > - 不支持[onAppear]{@link onAppear}和[onDisAppear]{@link onDisAppear}等和节点挂载/卸载相关的事件。
     * >
     * > - 从API version 20开始，该接口仅当content的入参类型为ResourceColor时支持在[attributeModifier]{@link attributeModifier}中调用。
     *
     * @param { CustomBuilder | ResourceColor | undefined } content - 自定义背景。
     * @param { BackgroundOptions } [options] - 设置自定义背景选项。<br/>**说明：**<br/>API version 20之前，options: <br/>{<br/>align?:&nbsp;[Alignment]{@link Alignment}<br/>}
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default background(content: CustomBuilder | ResourceColor | undefined, options?: BackgroundOptions): this;
    /**
     * 设置组件背景色。
     *
     * @param { ResourceColor | ColorMetrics | undefined } value - 设置组件的背景色。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundColor(value: ResourceColor | ColorMetrics | undefined): this;
    /**
     * 指定当前组件在指定方向上的像素取整对齐方式，使用后组件边界坐标将按指定策略取整，从而避免因浮点数绘制产生的视觉异常（如1px缝隙、组件重叠、分割线消失）。从API version 12开始，某方向不设置时默认在该方向进行四舍五入取整。
     *
     * > **说明：**
     * >
     * > - 在API version 11，本接口采用半像素对齐方式（即0\~0.25取0，0.25\~0.75取0.5，0.75\~1.0取1）。该方式通过保留0.5像素值来减少连续取整可能带来的累积误差。从API version 12开始，未设置取整策略的方向默认采用四舍五入的取整方式，并支持通过PixelRoundCalcPolicy.NO_FORCE_ROUND关闭指定方向的像素取整。
     * >
     * > - 从API version12开始，该接口支持在[attributeModifier](ts-universal-attributes-attribute-modifier.md#attributemodifier)中调用。
     *
     * 正常计算时，上下方向与组件高度相对应，左右方向（镜像的起始方向称为左）与宽度相对应。为方便描述将两组方向称为左上和右下。
     *
     * - 计算当前组件左上角坐标： 左上角相对父容器偏移量。
     * - 计算当前组件右下角坐标： 左上角相对于父容器偏移量 + 组件自身尺寸。
     * - 重新计算当前组件尺寸： 右下角坐标四舍五入取整 - 左上角坐标四舍五入取整（API version 11采用半像素对齐方式，API version 12采用四舍五入方式）。
     *
     * @param { PixelRoundPolicy | undefined } value - 指定当前组件边界取整策略。[PixelRoundPolicy]{@link PixelRoundPolicy}包含start、top、end、bottom四个可选属性，分别对应组件前部、上部、尾部、底部边界。每个属性可设置[PixelRoundCalcPolicy]{@link PixelRoundCalcPolicy}枚举值。设置PixelRoundCalcPolicy.NO_FORCE_ROUND可关闭对应方向上的像素取整，未设置的属性默认按四舍五入规则取整。
     *    <br>**说明：**<br/>该属性用于因浮点数绘制产生视觉异常的场景。取整结果不仅和组件的宽高有关，也与组件的位置有关。即使设置组件的宽高相同，由于以浮点数描述的组件位置不同，舍入后组件的最终宽高也可能不同。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default pixelRound(value: PixelRoundPolicy | undefined): this;
    /**
     * 设置组件的背景图片。
     *
     * @param { ResourceStr | PixelMap | undefined } src - 图片地址。API version 22及之前版本，支持网络图片资源地址、本地图片资源地址、Base64和PixelMap资源，不支持svg图片、gif和webp等类型的动图。 从API version 23开始，新增支持webp和gif类型的动图，显示动图第一帧，不支持其他类型的动图。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundImage(src: ResourceStr | PixelMap | undefined): this;
    /**
     * 设置组件的背景图片。
     *
     * @param { ResourceStr | PixelMap | undefined } src - 图片地址。API version 22及之前版本，支持网络图片资源地址、本地图片资源地址、Base64和PixelMap资源，不支持svg图片、gif和webp等类型的动图。 从API version 23开始，新增支持webp和gif类型的动图，显示动图第一帧，不支持其他类型的动图。
     * @param { BackgroundImageOptions } options - config the options
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundImage(src: ResourceStr | PixelMap | undefined, options: BackgroundImageOptions): this;
    /**
     * 设置组件的背景图片。
     *
     * @param { ResourceStr | PixelMap | undefined } src - 图片地址。API version 22及之前版本，支持网络图片资源地址、本地图片资源地址、Base64和PixelMap资源，不支持svg图片、gif和webp等类型的动图。 从API version 23开始，新增支持webp和gif类型的动图，显示动图第一帧，不支持其他类型的动图。
     * @param { ImageRepeat } repeat - 设置背景图片的重复样式，默认不重复。当设置的背景图片为透明底色图片，且同时设置了backgroundColor时，二者叠加显示，背景颜色在最底部。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundImage(src: ResourceStr | PixelMap | undefined, repeat: ImageRepeat): this;
    /**
     * 设置组件背景图片的宽度和高度。当未设置backgroundImageSize时，默认组件背景图片宽高效果为[ImageSize.Auto]{@link ImageSize.Auto}。
     *
     * @param { SizeOptions | ImageSize | undefined } value - 设置背景图像的高度和宽度。默认保持原图的比例不变。<br/>width和height取值范围： [0, +∞)<br/>ImageSize用于控制图片缩放显示模式，如保持比例、填充边界等。<br/>**说明：** <br/>width和height均设置为小于或等于0的值时，按值为0显示。当width和height中只有一个值未设置或者设置为小于等于0的值时，另一个会根据图片原始宽高比进行调整。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundImageSize(value: SizeOptions | ImageSize | undefined): this;
    /**
     * 设置背景图的位置。当未设置backgroundImagePosition时，组件默认背景图位置为当前组件左上角。
     *
     * @param { Position | Alignment | undefined } value - 设置背景图在组件中显示位置，即相对于组件左上角的坐标。<br/> x和y值设置百分比时，偏移量是相对组件自身宽高计算的。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundImagePosition(value: Position | Alignment | undefined): this;
    /**
     * 为当前组件提供一种背景材质模糊能力，通过枚举值的方式封装了不同的模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度。
     *
     * @param { BlurStyle | undefined } style - 背景模糊样式。模糊样式中封装了模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度五个参数。<br/>当style的值为undefined时，恢复为默认
     *     关闭模糊的背景。
     * @param { BackgroundBlurStyleOptions } [options] - 背景模糊选项。<br/>该参数在ArkTS卡片中，暂不支持使用。
     * @param { SystemAdaptiveOptions } [sysOptions] - 系统自适应调节参数。<br/>默认值：{ disableSystemAdaptation: false }
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundBlurStyle(style: BlurStyle | undefined, options?: BackgroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): this;
    /**
     * 设置组件背景属性，包括背景模糊半径、亮度、饱和度和颜色等参数。
     * 
     * > **说明：**
     * >
     * > backgroundEffect接口为实时接口，每帧对模糊等效果执行实时渲染，性能负载较大。当组件背景模糊效果无需变动时，推荐采用静态模糊接口
     * > [blur]{@link @ohos.effectKit:effectKit.Filter.blur(radius: double)}实现模糊效果。最佳实践请参考：
     * > [图像模糊动效优化-使用场景](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-fuzzy-scene-performance-optimization#section4945532519)。
     *
     * @param { BackgroundEffectOptions | undefined } options - 设置组件背景属性包括：饱和度，亮度，颜色。<br/>当options的值为undefined时，恢复为无效果的背
     *     景。
     * @param { SystemAdaptiveOptions } [ sysOptions ] - 系统自适应调节参数。<br/>默认值：{ disableSystemAdaptation: false }
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundEffect(options: BackgroundEffectOptions | undefined, sysOptions?: SystemAdaptiveOptions): this;
    /**
     * 设置背景图在拉伸时可调整大小的图像选项。
     * 设置合法的ResizableOptions时，[backgroundImage]{@link backgroundImage}属性中的repeat参数设置不生效。
     * 当设置top+bottom大于原图的高或者left+right大于原图的宽时，ResizableOptions属性设置不生效。
     *
     * @param { ResizableOptions | undefined } value - 图像拉伸时可调整大小的图像选项。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundImageResizable(value: ResizableOptions | undefined): this;
    /**
     * 设置前景效果。
     *
     * @param { ForegroundEffectOptions | undefined } options - 设置组件前景效果，包括：模糊半径。效果仅在组件范围内生效，与backgroundEffect、blur等接口连用时超出组件范围的效果无法生效。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default foregroundEffect(options: ForegroundEffectOptions | undefined): this;
    /**
     * 设置非滤镜视觉效果。
     *
     * @param { VisualEffect | undefined } effect - 非滤镜视觉效果。<br/>当effect的值为undefined时，无非滤镜视觉效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default visualEffect(effect: VisualEffect | undefined): this;
    /**
     * 设置背景滤镜视觉效果。
     *
     * @param { Filter | undefined } filter - 背景滤镜视觉效果。<br/>当filter的值为undefined时，无背景滤镜视觉效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundFilter(filter: Filter | undefined): this;
    /**
     * 设置前景滤镜（内容）视觉效果。
     *
     * @param { Filter | undefined } filter - 前景滤镜（内容）视觉效果。<br/>当filter的值为undefined时，无前景滤镜（内容）视觉效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default foregroundFilter(filter: Filter | undefined): this;
    /**
     * 设置合成滤镜视觉效果。
     *
     * @param { Filter | undefined } filter - 合成滤镜视觉效果。<br/>当filter的值为undefined时，无合成滤镜视觉效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default compositingFilter(filter: Filter | undefined): this;
    /**
     * 设置系统材质滤镜效果，系统材质滤镜的绘制早于[backgroundFilter]{@link CommonMethod.backgroundFilter}绘制，即位于backgroundFilter的更底层。
     *
     * @param { Filter | undefined } filter - 系统材质滤镜视觉效果。设置为undefined时恢复为无系统材质滤镜效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default materialFilter(filter: Filter | undefined): this;
    /**
     * 为组件设置内容模糊效果。
     *
     * @param { BlurStyle | undefined } style - 内容模糊样式。
     * @param { ForegroundBlurStyleOptions } [options] - 内容模糊选项。不传入时使用系统默认模糊效果配置。
     * @param { SystemAdaptiveOptions } [sysOptions] - 系统自适应调节参数。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default foregroundBlurStyle(style: BlurStyle | undefined, options?: ForegroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): this;
    /**
     * 设置组件的不透明度。
     *
     * @param { double | Resource | undefined } value - 元素的不透明度，取值范围为0到1，若设置的值小于0时，则取值为0，若设置的值大于1时，则取值为1，1表示不透明，0表示完全透明，
     *     达到隐藏组件效果，但是在布局中占位。 <br> 默认值：1 <br/>**说明：** <br/> 子组件会继承父组件的透明度，并与自身的透明度属性叠加。如：父组件透明度为0.1，子组件设置透明度为0.8，则子组件实际透
     *     明度为0.1*0.8=0.08。<br/>当opacity的值为undefined时，恢复为默认不透明度为1的状态。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default opacity(value: double | Resource | undefined): this;
    /**
     * 设置边框样式。
     *
     * @param { BorderOptions | undefined } value - 统一边框样式设置接口。<br/>**说明：** <br/>边框宽度默认值为0，即不显示边框。边框圆角半径默认值为0，即不显示圆角。边框颜色默认值为Color.Black。<br/>从API version 9开始，父节点的border显示在子节点内容之上。<br/>color、radius缺省时，为了保证borderColor、borderRadius生效，需要将borderColor、borderRadius设置在border后。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default border(value: BorderOptions | undefined): this;
    /**
     * 设置元素的边框线条样式。
     *
     * @param { BorderStyle | EdgeStyles | undefined } value - 设置元素的边框样式。<br/>默认值：BorderStyle.Solid
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default borderStyle(value: BorderStyle | EdgeStyles | undefined): this;
    /**
     * 设置元素的边框宽度。
     *
     * @param { Length | EdgeWidths | LocalizedEdgeWidths | undefined } value - 设置元素的边框宽度，不支持百分比。默认单位：vp。<br/>默认值：0。<br/>**说明：** 使用LocalizedEdgeWidths类型时，在不同语言方向下边框宽度设置会有差异。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths | undefined): this;
    /**
     * 设置元素的边框颜色。
     *
     * @param { ResourceColor | EdgeColors | LocalizedEdgeColors | undefined } value - 设置元素的边框颜色，设置后边框显示为相应颜色。<br/>默认值：Color.Black<br/>**说明：** <br/>使用LocalizedEdgeColors类型时，在不同语言方向下边框颜色设置会有差异。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors | undefined): this;
    /**
     * 设置元素的边框圆角半径。
     * 圆角半径受组件尺寸限制，最大值为组件宽度或高度的一半。
     *
     * @param { Length | BorderRadiuses | LocalizedBorderRadiuses | undefined } value - 设置元素的边框圆角半径，支持百分比，百分比依据组件宽度，默认单位：vp。<br/>默认值：0。设置圆角后，可搭配clip属性进行裁剪，避免子组件超出组件自身。
     * @param { RenderStrategy | undefined } [type] - 绘制圆角的应用类型。<br/>默认值：RenderStrategy.FAST。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses | undefined, type?: RenderStrategy | undefined): this;
    /**
     * 设置组件的边框图片。
     *
     * @param { BorderImageOption | undefined } value - 边框图片或边框渐变。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default borderImage(value: BorderImageOption | undefined): this;
    /**
     * 统一外描边样式设置接口。
     *
     * @param { OutlineOptions | undefined } value - 外描边样式。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default outline(value: OutlineOptions | undefined): this;
    /**
     * 设置元素的外描边样式。不设置该接口时，默认显示为一条实线。
     *
     * @param { OutlineStyle | EdgeOutlineStyles | undefined } value - 设置元素的外描边样式。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default outlineStyle(value: OutlineStyle | EdgeOutlineStyles | undefined): this;
    /**
     * 设置元素的外描边宽度。不设置该接口时，默认无变化。
     *
     * @param { Dimension | EdgeOutlineWidths | undefined } value - 设置元素的外描边宽度，不支持百分比。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default outlineWidth(value: Dimension | EdgeOutlineWidths | undefined): this;
    /**
     * 设置元素的外描边颜色。不设置该接口时，默认显示为黑色。
     *
     * @param { ResourceColor | EdgeColors | LocalizedEdgeColors | undefined } value - 设置元素的外描边颜色。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors | undefined): this;
    /**
     * 设置元素的外描边圆角半径。不设置该接口时，默认无变化。
     *
     * @param { Dimension | OutlineRadiuses | undefined } value - 设置元素的外描边圆角半径，不支持百分比。<br/>最大生效值：组件width/2 + outlineWidth或组件height/2 + outlineWidth。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default outlineRadius(value: Dimension | OutlineRadiuses | undefined): this;
    /**
     * 设置组件的前景色。当组件未设置前景色，默认继承父组件。
     *
     * @param { ResourceColor | ColoringStrategy | undefined } value - 设置组件的前景颜色或者根据智能取色策略设置前景颜色。不支持属性动画。<br/>当value的值为
     *     undefined时，维持之前取值或组件默认取值，具体行为不同组件可能会有差异，建议开发者使用确定颜色或[ColoringStrategy]{@link ColoringStrategy}。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default foregroundColor(value: ResourceColor | ColoringStrategy | undefined): this;
    /**
     * 点击动作触发该回调。
     * 当触发点击事件的设备类型为键盘或手柄时，事件的[SourceTool]{@link SourceTool}值为Unknown，事件的[SourceType]{@link SourceType}值为KEY，JOYSTICK。
     * 新增distanceThreshold参数，设置点击手势移动阈值。手指移动超出阈值时，点击手势识别失败。
     * 对于无手指移动距离限制的点击场景，建议使用[onClick]{@link onClick}接口。若需限制点击时手指移动范围，建议使用该接口。
     *
     * @param { ((event: ClickEvent) => void) | undefined } event - 点击事件的回调函数。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onClick(event: ((event: ClickEvent) => void) | undefined): this;
    /**
     * 点击动作触发该回调。
     * 当触发点击事件的设备类型为键盘或手柄时，事件的[SourceTool]{@link SourceTool}值为Unknown，事件的[SourceType]{@link SourceType}值为KEY，JOYSTICK。
     * 新增distanceThreshold参数，设置点击手势移动阈值。手指移动超出阈值时，点击手势识别失败。
     * 对于无手指移动距离限制的点击场景，建议使用[onClick]{@link onClick}接口。若需限制点击时手指移动范围，建议使用该接口。
     *
     * @param { Callback<ClickEvent> | undefined } event - 点击事件的回调函数。<br/>传入undefined时无效果。
     * @param { double | undefined } distanceThreshold - 点击事件移动阈值。当设置的值小于等于0时，会被转化为默认值。<br/>传入undefined时，会被转化为默认值。<br/>默认值：2^31-1<br/>单位：vp<br/>**说明：**<br/>当手指的移动距离超出开发者预设的移动阈值时，点击识别失败。如果初始化为默认阈值时，手指移动超过组件热区范围，点击识别失败。
     * @default (2^31-1)vp
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onClick(event: Callback<ClickEvent> | undefined, distanceThreshold: double | undefined): this;
    /**
     * 鼠标或手写笔进入或退出组件时，触发悬浮事件。
     *
     * @param { ((isHover: boolean, event: HoverEvent) => void) | undefined } event - 鼠标或手写笔的状态信息。<br />event表示设置阻塞事件冒泡属性，并获取鼠标或手写笔悬浮的位置坐标，从API version 11开始支持。<br />isHover表示鼠标或手写笔是否悬浮在组件上，进入时为true，&nbsp;离开时为false。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onHover(event: ((isHover: boolean, event: HoverEvent) => void) | undefined): this;
    /**
     * 手写笔悬浮于组件上方时触发悬浮移动事件。
     *
     * @param { Callback<HoverEvent> | undefined } event - 设置阻塞事件冒泡属性，并获取手写笔悬浮的位置坐标。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onHoverMove(event: Callback<HoverEvent> | undefined): this;
    /**
     * 开启无障碍模式后，单指触摸绑定了该回调且可被无障碍聚焦的组件时，触发该回调。
     *
     * @param { AccessibilityCallback | undefined } callback - 提供开启无障碍模式后的无障碍悬浮回调事件，当单指触摸绑定该回调的可被无障碍识别为可聚焦的组件时触发该回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAccessibilityHover(callback: AccessibilityCallback | undefined): this;

    /**
     * 当开启朗读类辅助应用（如屏幕朗读器）且手指触摸在组件区域，同时该组件及子组件全部没有被无障碍悬浮识别为可聚焦时，会触发该回调，并通过回调参数返回该触摸事件对应的TouchEvent。仅支持手指触摸。
     * 不支持触摸位置位于以下组件区域内的场景，包括UIExtension、Web、FormComponent、XComponent，以及与第三方UI框架对接的场景。在上述场景下，该回调接口无法生效。
     * 组件无法被无障碍悬浮识别为可聚焦的主要原因包括，组件的无障碍重要性accessibilityLevel为"no"或者"no-hide-descendants"；
     * 组件无文本且未配置无障碍文本accessibilityText，同时不支持点击或长按操作。
     *
     * @param { AccessibilityTransparentCallback | undefined } callback - 提供开启朗读类辅助应用后未能被无障碍悬浮响应的触摸事件。
     *             当手指触摸在组件区域，且该组件及子组件全部没有被无障碍悬浮识别为可聚焦时，触发该回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAccessibilityHoverTransparent(callback: AccessibilityTransparentCallback | undefined): this;
    /**
     * 设置组件的鼠标悬浮态显示效果。当未设置hoverEffect时，组件默认鼠标悬浮态效果为HoverEffect.Auto。对于设置了悬浮态效果的组件，当鼠标悬浮于组件上并按下时，悬浮态效果会消失；松开鼠标且鼠标指针仍悬浮于组件上方时，悬浮态效果会恢复。
     *
     * @param { HoverEffect | undefined } value - 设置当前组件悬浮态下的悬浮效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default hoverEffect(value: HoverEffect | undefined): this;
    /**
     * 当前组件被鼠标按键点击时或者鼠标在组件上悬浮移动时，触发该回调。
     *
     * @param { ((event: MouseEvent) => void) | undefined } event - 返回触发事件时的时间戳、鼠标按键、动作、鼠标位置在整个屏幕上的坐标和相对于当前组件的坐标。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onMouse(event: ((event: MouseEvent) => void) | undefined): this;
    /**
     * 手指触摸动作触发该回调。触摸事件默认冒泡，会被多个组件消费，如果需阻止冒泡，可参考[TouchEvent]{@link TouchEvent}的stopPropagation方法。鼠标左键按下时，对应的事件也会转换成触摸事件并触发该回调。
     *
     * @param { ((event: TouchEvent) => void) | undefined } event - 获得TouchEvent对象。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onTouch(event: ((event: TouchEvent) => void) | undefined): this;
    /**
     * 绑定该方法的组件获焦后，按键动作触发该回调。
     *
     * @param { Callback<KeyEvent, boolean> | undefined } event - 获得KeyEvent对象。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onKeyEvent(event: Callback<KeyEvent, boolean> | undefined): this;
    /**
     * 组件获焦以后旋转表冠时触发该回调。
     * > **说明：**
     * >
     * > 该接口不支持在[attributeModifier]{@link attributeModifier}中调用。
     *
     * @param { Callback<CrownEvent> | undefined } event
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDigitalCrown(handler: Callback<CrownEvent> | undefined): this;
    /**
     * 绑定该方法的组件获焦后，按键动作优先触发该回调。
     * 该回调的返回值为`true`时，视作该按键事件已被消费，后续的事件回调（`keyboardShortcut`、输入法事件、`onKeyEventDispatch`、`onKeyEvent`）会被拦截，不再触发。
     *
     * @param { Callback<KeyEvent, boolean> | undefined } event - 处理按键事件的回调。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onKeyPreIme(event: Callback<KeyEvent, boolean> | undefined): this;
    /**
     * 对应组件收到按键事件时，会触发该回调，该按键事件不会分发给其子组件。从API version 23开始，支持构造KeyEvent进行分发。API version 22及之前版本，不支持构造KeyEvent进行分发，只支持分发已有的按键事件。
     * 该回调的返回值为`true`时，视作该按键事件已被消费，不会冒泡给父组件处理。
     *
     * @param { Callback<KeyEvent, boolean> | undefined } event - 处理按键事件分发的回调。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onKeyEventDispatch(event: Callback<KeyEvent, boolean> | undefined): this;
    /**
     * Trigger a FocusAxisEvent.
     *
     * @param { Callback<FocusAxisEvent> | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onFocusAxisEvent(event: Callback<FocusAxisEvent> | undefined): this;
    /**
     * 鼠标滚轮滚动或触控板双指轻触滑动、双指捏合时触发该回调。
     *
     * @param { Callback<AxisEvent> | undefined } event - 获得[AxisEvent]{@link AxisEvent}对象。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAxisEvent(event: Callback<AxisEvent> | undefined): this;
    /**
     * 设置当前组件是否可以获焦。
     *
     * @param { boolean | undefined } value - 设置当前组件是否可以获焦，true表示组件可以获焦，false表示组件不可获焦。<br/>**说明：**<br/>存在默认交互逻辑的组件例如[Button]{@link Button}、[TextInput]{@link TextInput}等，默认即为可获焦，[Text]{@link Text}、[Image]{@link Image}等组件则默认状态为不可获焦。不可获焦状态下，无法触发焦点事件。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default focusable(value: boolean | undefined): this;
    /**
     * 设置组件的自定义焦点走焦逻辑。
     *
     * @param { FocusMovement | undefined } nextStep - 设置当前容器组件的自定义走焦规则。<br/>**说明：** <br/>默认值为重置nextStep为空。<br/>没设置自定义走焦或者设置自定义组件容器不存在，仍进行默认走焦规则。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default nextFocus(nextStep: FocusMovement | undefined): this;
    /**
     * 设置当前容器组件的tabStop，可决定焦点在走焦时是否会停留在当前容器。
     *
     * @param { boolean | undefined } isTabStop
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default tabStop(isTabStop: boolean | undefined): this;
    /**
     * 当前组件获取焦点时触发的回调。
     *
     * @param { (() => void) | undefined } event - onFocus的回调函数，表示组件已获焦。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onFocus(event: (() => void) | undefined): this;
    /**
     * 当前组件失去焦点时触发的回调。
     *
     * @param { (() => void) | undefined } event - onBlur的回调函数，表示组件已失焦。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onBlur(event: (() => void) | undefined): this;
    /**
     * 自定义组件tab键走焦能力。当组件未设置tabIndex时，默认按照预设的焦点移动规则进行焦点移动。
     * >  **说明：**
     * >
     * >  - tabIndex只能够自定义Tab键走焦，若想同时自定义方向键等走焦能力，建议使用[nextFocus]{@link nextFocus}。
     *
     * @param { int | undefined } index - 自定义组件tab键走焦能力。若有配置了tabIndex大于0的组件，则tab键走焦只会在tabIndex大于0的组件内按照tabIndex的值从小到大并循环依次走焦。若没有配置tabIndex大于0的组件，则tabIndex等于0的组件按照组件预设的走焦规则走焦。<br />[UiExtension]{@link UiExtension}组件未适配tabIndex，在含有[UiExtension]{@link UiExtension}组件的层级页面使用tabIndex会导致走焦错乱。<br />- tabIndex >= 0：表示元素是可聚焦的，并且可以通过tab键走焦来访问到该元素。<br />- tabIndex < 0（通常是tabIndex = -1）：表示元素是可聚焦的，但是不能通过tab键走焦来访问到该元素。<br/> **说明：**<br/> tabIndex与focusScopeId不能混用。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default tabIndex(index: int | undefined): this;
    /**
     * 设置当前组件是否为当前层级页面上的默认焦点。当未设置defaultFocus时，组件默认不为当前层级页面的默认焦点。
     * >  **说明：**
     * >
     * >  可以设置默认焦点的页面指的是支持页面路由或是弹窗类的容器组件，例如Page、NavDestination、NavBar、PopUp、Dialog等。
     *
     * @param { boolean | undefined } value - 设置当前组件是否为当前层级页面上的默认焦点，仅在初次创建的层级页面第一次进入时生效。<br/>**说明：** <br/>值为true则表示为默认焦点，值为false时无效。<br/>若层级页面内无任何组件设置defaultFocus(true)，API version 11及之前，层级页面的默认焦点是当前层级页面上首个可获焦的非容器组件，API version 11之后，层级页面的默认焦点就是层级页面的根容器。<br/>若某层级页面内有多个组件设置了defaultFocus(true)，则以组件树深度遍历找到的第一个组件为默认焦点。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default defaultFocus(value: boolean | undefined): this;
    /**
     * 设置当前组件是否为当前组件所在容器获焦时的默认焦点。当组件未设置groupDefaultFocus时，组件默认不为当前组件所在容器获焦时的默认焦点。
     *
     * @param { boolean | undefined } value - 设置当前组件是否为当前组件所在容器获焦时的默认焦点，仅在初次创建容器节点第一次获焦时生效。true表示当前组件为所在容器获焦时的默认焦点，false表示当前组件不是所在容器获焦时的默认焦点。<br/>**说明：** <br/>必须与[tabIndex]{@link tabIndex}联合使用，当某个容器设置了tabIndex，且容器内某子组件或容器自身设置了groupDefaultFocus(true)，当该容器首次TAB键获焦时，会自动将焦点转移至该指定的组件上。若容器内（包含容器本身）有多个组件设置了groupDefaultFocus(true)，则以组件树深度遍历找到的第一个组件为最终结果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default groupDefaultFocus(value: boolean | undefined): this;
    /**
     * 设置当前组件是否支持点击获焦能力。当组件未设置focusOnTouch时，组件默认不支持点击获焦能力。
     *
     * @param { boolean | undefined } value - 设置当前组件是否支持点击获焦能力。true表示组件支持点击获焦，false表示不支持点击获焦。<br/>**说明：** <br/>仅在组件可点击时才能正常获取焦点。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default focusOnTouch(value: boolean | undefined): this;
    /**
     * 设置当前组件系统焦点框样式。
     *
     * @param { FocusBoxStyle | undefined } style - 设置当前组件系统焦点框样式。<br/>**说明：** <br/>仅影响走焦状态下展示了系统焦点框的组件。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default focusBox(style: FocusBoxStyle | undefined): this;
    /**
     * 设置当前容器组件的id标识，以及是否为焦点组。
     *
     * @param { string | undefined } id - 设置当前容器组件的id标识。<br/>**说明：** <br/>单个层级页面下，id标识全局唯一，不可重复。
     * @param { boolean } [isGroup] - 设置当前容器组件是否为焦点组。true表示容器组件为焦点组，false表示容器组件不是焦点组。默认值为false。<br/>**说明：** <br/>焦点组不可嵌套，不可重复配置。<br/> 焦点组不能和tabIndex混用。<br/>配置焦点组的目的是使得容器及容器内的元素可以按照焦点组规则走焦。焦点组走焦规则：<br/>1.焦点组容器内只能通过方向键走焦，tab键会使焦点跳出焦点组容器。<br/>2.通过方向键使焦点从焦点组容器外切换到焦点组容器内时，若焦点组容器内存在优先级为PREVIOUS的组件，则优先级为PREVIOUS的组件获焦，否则，由焦点组容器内上次获焦的组件获焦。
     * @param { boolean } [arrowStepOut] - 设置方向键是否可以将焦点从焦点组内移动到焦点组外，仅在isGroup为true时生效。<br/>默认值：true
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default focusScopeId(id: string | undefined, isGroup?: boolean, arrowStepOut?: boolean): this;
    /**
     * 设置当前组件在指定容器内获焦的优先级。需要配合[focusScopeId]{@link focusScopeId}一起使用。
     *
     * @param { string | undefined } scopeId - 当前组件设置的获焦优先级生效的容器组件的id标识。<br/>**说明：** <br/>1.当前组件必须在scopeId所标识的容器内，或其所属容器在scopeId所标识的容器内。<br/>2.组件不可重复设置多个优先级。<br/>3.设置了focusScopeId的容器组件不可设置优先级。
     * @param { FocusPriority } [priority] - 获焦优先级。<br/>**说明：** <br/>未设置priority时，默认为AUTO优先级。<br/>优先级对走焦以及获焦组件的影响：<br/>1.容器整体获焦（层级页面切换/焦点切换到焦点组/容器组件使用requestFocus申请焦点）时，若容器内存在优先级为PREVIOUS的组件，则优先级为PREVIOUS的组件获焦，否则，由容器内上次获焦的组件获焦。<br/>2.容器非整体获焦（非焦点组场景下使用tab键/方向键走焦）时，若容器为首次获焦，则容器内优先级最高的组件获焦，若容器非首次获焦，不考虑优先级按照位置顺序走焦。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default focusScopePriority(scopeId: string | undefined, priority?: FocusPriority): this;
    /**
     * animation
     *
     * @param { AnimateParam | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default animation(value: AnimateParam | undefined): this;
    /**
     * 设置组件插入时显示和删除时隐藏的过渡效果。
     *
     * @param { TransitionEffect | undefined } value - 设置组件插入时显示和删除时隐藏的过渡效果。<br/>**说明：** <br/>详细描述
     *     [TransitionEffect]{@link TransitionEffect}对象说明。<br/>当value的值为undefined时，无过渡效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default transition(value: TransitionEffect | undefined): this;
    /**
     * 设置组件插入时显示和删除时隐藏的过渡效果。
     *
     * @param { TransitionEffect | undefined } effect - 设置组件插入时显示和删除时隐藏的过渡效果。<br/>**说明：** <br/>详细描述
     *     [TransitionEffect]{@link TransitionEffect}对象说明。<br/>当value的值为undefined时，无过渡效果。
     * @param { TransitionFinishCallback | undefined } onFinish - 转场动画结束回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default transition(effect: TransitionEffect | undefined, onFinish: TransitionFinishCallback | undefined): this;
    /**
     * 绑定手势。
     * > **说明：**
     * >
     * > 该接口不支持在[attributeModifier]{@link attributeModifier}中调用。
     *
     * @param { GestureType } gesture - 绑定的手势类型。
     * @param { GestureMask } [mask] - 事件响应设置。<br/>默认值：GestureMask.Normal
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default gesture(gesture: GestureType, mask?: GestureMask): this;
    /**
     * 绑定优先识别手势。
     * 1. 默认情况下，子组件优先识别通过gesture绑定的手势，当父组件配置priorityGesture时，父组件优先识别priorityGesture绑定的手势。
     * 2. 绑定长按手势时，触发长按的最短时间较短的手势会优先响应，会忽略priorityGesture设置。
     * > **说明：**
     * >
     * > 该接口不支持在[attributeModifier]{@link attributeModifier}中调用。
     *
     * @param { GestureType } gesture - 绑定的手势对象。
     * @param { GestureMask } [mask] - 事件响应设置。<br/>默认值：GestureMask.Normal
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default priorityGesture(gesture: GestureType, mask?: GestureMask): this;
    /**
     * 绑定可与子组件手势同时触发的手势。手势事件为非冒泡事件。父组件设置parallelGesture时，父子组件相同的手势事件都可以触发，实现类似冒泡效果。
     * > **说明：**
     * >
     * > 该接口不支持在[attributeModifier]{@link attributeModifier}中调用。
     *
     * @param { GestureType } gesture - 绑定的手势对象。
     * @param { GestureMask } [mask] - 事件响应设置。<br/>默认值：GestureMask.Normal
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default parallelGesture(gesture: GestureType, mask?: GestureMask): this;
    /**
     * 为组件添加内容模糊效果。入参为模糊半径，模糊半径越大内容越模糊，为0时不模糊。
     *
     * @param { double | undefined } blurRadius - 模糊半径，模糊半径越大越模糊，值小于等于0时不模糊。
     *     <br>单位：px
     *     <br>当blurRadius的值为undefined时，维持之前取值。从未设置该属性时，默认值为0，表示不模糊。
     * @param { BlurOptions } [options] - 灰阶模糊参数。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。
     *     <br>默认值：grayscale: [0,0]
     * @param { SystemAdaptiveOptions } [sysOptions] - 系统自适应调节参数。
     *     <br>默认值：{ disableSystemAdaptation: false }
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default blur(blurRadius: double | undefined, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): this;
    /**
     * 为组件添加内容线性渐变模糊效果。
     *
     * @param { double | undefined } value - 模糊半径，模糊半径越大越模糊，为0时不模糊。
     *     <br>单位：px
     *     <br>取值范围：[0, 1000]
     *     <br>当value的值为undefined时，恢复为渐变模糊为0的效果。
     * @param { LinearGradientBlurOptions | undefined } options - 设置线性渐变模糊效果。
     *     <br>线性渐变参数，包含模糊程度和模糊位置数组fractionStops，及渐变模糊方向direction。
     *     <br>当options的值为undefined时，恢复为无线性渐变模糊的效果。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default linearGradientBlur(value: double | undefined, options: LinearGradientBlurOptions | undefined): this;
    /**
     * 在当前组件由缩放大小或位移变化引起的运动过程中，增加运动模糊效果。
     *
     * > **说明：**
     * >
     * > - 不建议在组件内转场、共享元素转场、组件内隐式元素转场和粒子动画场景中使用该属性，否则会产生非预期效果。
     * >
     * > - 该属性需要在组件初始状态将motionBlur的参数radius设置为0，否则冷启动时会有非预期效果。
     * >
     * > - 该属性需要与动画的[AnimateParam]{@link AnimateParam}的onFinish参数配合使用，需要在运动模糊动画结束后将motionBlur的参数radius置为0，否则会产生非预期效果。
     * >
     * > - 使用该属性时，不要频繁更改同一个组件的模糊半径，否则会产生非预期效果。
     * >
     * > - 运动模糊锚点坐标需要与动画缩放[scale]{@link CommonMethod#scale(value: ScaleOptions)}属性的锚点（centerX/centerY）保持一致，否则会产生非预期效果。
     * >
     * > - 模糊半径建议取值不超过1.0，否则会产生非预期效果。
     *
     * @param { MotionBlurOptions | undefined } value - 定义运动模糊参数。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default motionBlur(value: MotionBlurOptions | undefined): this;
    /**
     * 设置组件的亮度效果。
     *
     * @param { double | undefined } value - 为当前组件添加高光效果，入参为高光比例，值为1时没有效果，小于1时亮度变暗，小于或等于0为全黑，大于1时亮度增加，数值越大亮度越大，亮度大于或等于2时会变为全白。
     *     <br>取值范围：[0, +∞)
     *     <br>推荐取值范围：[0, 2]
     *     <br>**说明：**
     *     <br>设置小于0的值时，按值为0处理。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default brightness(value: double | undefined): this;
    /**
     * 设置组件的对比度效果。
     *
     * @param { double | undefined } value - 为当前组件添加对比度效果，入参为对比度的值。值为1时，显示原图，大于1时，值越大对比度越高，图像越清晰醒目，小于1时，值越小对比度越低，当对比度为0时，图像变为全灰。
     *     <br>取值范围：[0, +∞)
     *     <br>推荐取值范围：[0, 10)
     *     <br>**说明：**
     *     <br>设置小于0的值时，按值为0处理。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contrast(value: double | undefined): this;
    /**
     * 为组件添加灰度效果。
     *
     * @param { double | undefined } value - 为当前组件添加灰度效果。值定义为灰度转换的比例，入参1.0则完全转为灰度图像，入参0.0则图像无变化，入参在0.0和1.0之间时，效果呈线性变化。
     *     <br>取值范围：[0.0, 1.0]
     *     <br>**说明：**
     *     <br>设置小于0.0的值时，按值为0.0处理，设置大于1.0的值时，按值为1.0处理。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default grayscale(value: double | undefined): this;
    /**
     * 为组件添加颜色叠加效果。
     *
     * @param { Color | string | Resource | undefined } value - 为当前组件添加颜色叠加效果，入参为叠加的颜色。取值可为Color类型、string类型或Resource类型。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default colorBlend(value: Color | string | Resource | undefined): this;
    /**
     * 为组件添加饱和度效果。
     *
     * @param { double | undefined } value - 为当前组件添加饱和度效果，饱和度为颜色中的含色成分和消色成分（灰）的比例，入参为1时，显示原图像，大于1时含色成分越大，饱和度越大，小于1时消色成分越大，饱和度越小。
     *     <br>取值范围：[0, +∞)
     *     <br>推荐取值范围：[0, 50)
     *     <br>**说明：**
     *     <br>设置小于0的值时，按值为0处理。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default saturate(value: double | undefined): this;
    /**
     * 将图像转换为深褐色。
     *
     * @param { double | undefined } value - 将图像转换为深褐色，降低色彩度，产生温暖复古的图像风格。入参为褐色滤镜强度，值为1则完全是深褐色的，值小于等于0则图像无变化，值大于1会进一步放大色彩偏移比例，图像整体会变得更亮。
     *     <br>取值范围：[0, +∞)
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default sepia(value: double | undefined): this;
    /**
     * 反色输入图像。value定义反色比例，值为100%时完全反色，值为0%时图像无变化。（百分比）
     *
     * @param { double | InvertOptions | undefined } value - 反转输入的图像。
     *     <br>入参对象为number时，入参为图像反转的比例，值为1时完全反转，值为0则图像无变化。
     *     <br>取值范围：[0, 1]。
     *     <br>设置小于0的值时，按值为0处理。设置大于1的值时，按值为1处理。
     *     <br>入参对象为InvertOptions时，对比背景颜色灰度值和阈值区间，背景颜色灰度值小于阈值区间时反色取high值，当背景颜色灰度值大于阈值区间时反色取low值，背景颜色灰度值在阈值区间内取值由high线性渐变到low。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default invert(value: double | InvertOptions | undefined): this;
    /**
     * 根据背景颜色自动判断反色区域和反色程度，并叠加模糊效果。智能反色基于背景内容的颜色与亮度特征自动确定反色策略，使组件在不同背景下保持内容可视性；模糊效果对背景内容进行模糊处理，增强系统栏与背景的视觉融合效果。
     *
     * @returns { this } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default systemBarEffect(): this;
    /**
     * 色相旋转效果。
     *
     * @param { double | string | undefined } value - 色相旋转效果，输入参数为旋转角度。
     *     <br>色相旋转360度会显示原始颜色。先将色相旋转180度，然后再旋转-180度会显示原始颜色。数据类型为number时，值为90和'90deg'效果一致。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default hueRotate(value: double | string | undefined): this;
    /**
     * 设置是否将组件的子节点阴影绘制在同一图层上，使同一图层上的元素阴影重叠。
     *
     * @param { boolean | undefined } value - 控件内部子节点的阴影是否进行同层绘制。
     *     <br>默认值：false
     *     <br> true：控件内部子节点的阴影进行同层绘制，子节点的阴影不会产生重叠覆盖效果。
     *     <br> false：控件内部子节点的阴影不进行同层绘制，子节点的阴影重叠区域有覆盖效果。
     *     <br>**说明：**
     *     <br>1. 默认不开启，如果子节点的阴影半径较大，阴影有重叠区域，后绘制的子节点阴影会覆盖在之前绘制的子节点阴影之上。当开启时，子节点的阴影将同时绘制，不会产生覆盖效果。
     *     <br>2. 不推荐useShadowBatching嵌套使用，如果嵌套使用，只会对当前的子节点生效，无法递推。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default useShadowBatching(value: boolean | undefined): this;
    /**
    * 用于设置组件是否应用父级EffectComponent或窗口定义的效果模板。
    *
    * @param { boolean | undefined } useEffect - 是否应用父级EffectComponent或窗口定义的效果模板。
    *     <br>true表示应用，false表示不应用。
    *     <br>默认值：false。
    * @param { EffectType | undefined } effectType - 应用到组件的效果模板类型，由父级EffectComponent或窗口定义。
    *     <br>默认值：EffectType.DEFAULT。
    * @returns { this } 返回当前组件，用于链式调用。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    default useEffect(useEffect: boolean | undefined, effectType: EffectType | undefined): this;
    /**
     * 用于设置组件是否合并特效绘制，如背景模糊。
     *
     * @param { boolean | undefined } value - 组件是否继承EffectComponent组件的特效设置。<br>true表示继承，false表示不继承。
     *     <br>默认值：false。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default useEffect(value: boolean | undefined): this;
    /**
     * 设置当前组件是否参与祖先组件UnionEffectContainer的融合效果。
     *
     * @param { boolean | undefined } value - 表示是否使用祖先组件UnionEffectContainer的融合效果。
     *     <br>取值为true时，当前组件使用祖先组件UnionEffectContainer的融合效果，在祖先组件UnionEffectContainer计算形状时会作为UnionEffectContainer的一部分；若当前组件不存在祖先UnionEffectContainer，则设置useUnionEffect为true不产生融合效果。
     *     <br>取值为false时，当前组件不使用祖先组件UnionEffectContainer的融合效果。
     *     <br>设置为undefined时恢复为不使用祖先组件UnionEffectContainer的融合效果。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default useUnionEffect(value: boolean | undefined): this;
    /**
     * 设置当前组件是否参与祖先组件UnionEffectContainer的融合效果。
     *
     * @param { boolean | undefined } value - 表示是否使用祖先组件UnionEffectContainer的融合效果。
     *     <br>取值为true时，当前组件使用祖先组件UnionEffectContainer的融合效果，在祖先组件UnionEffectContainer计算形状时会作为UnionEffectContainer的一部分；若当前组件不存在祖先UnionEffectContainer，则取值为true不产生融合效果。
     *     <br>取值为false时，当前组件不使用祖先组件UnionEffectContainer的融合效果。
     *     <br>设置为undefined时，恢复为不使用祖先组件UnionEffectContainer的融合效果。
     * @param { GravityCenterOptions } [options] - 引力中心参数。
     *     此参数必须与UnionMode.GRAVITY_UNION一起使用。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default useUnionEffect(value: boolean | undefined, options?: GravityCenterOptions): this;
    /**
     * 为组件添加背景模糊效果，支持自定义设置模糊半径和灰阶参数。
     *
     * @param { double | undefined } radius - 为当前组件添加背景模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。<br/>当radius的值为undefined时，恢复为默认无模糊的
     *     背景。
     * @param { BlurOptions } [options] - 灰阶模糊参数。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。<br/>默认值：grayscale: [0,0]
     * @param { SystemAdaptiveOptions } [sysOptions] - 系统自适应调节参数。<br/>默认值：{ disableSystemAdaptation: false }
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backdropBlur(radius: double | undefined, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): this;
    /**
     * 设置组件及其子组件是否整体离屏渲染后再与父组件混合。
     *
     * @param { boolean | undefined } value - 设置当前组件和子组件是否组成节点组。
     *     <br> false表示不组成节点组，不进行离屏渲染直接绘制。
     *     <br> true表示当前组件和子组件组成节点组，进行离屏渲染后再与父组件融合绘制。
     *     <br>当value的值为undefined时，按照不组成节点组处理。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default renderGroup(value: boolean | undefined): this;
    /**
     * 设置组件及其子组件不跟随父组件离屏渲染。需与renderGroup配合使用。
     *
     * @param { boolean | undefined } exclude - 组件及其子组件是否不跟随父组件离屏渲染。
     *     true表示不跟随父组件。
     *     默认值：false。
     *     undefined表示默认值。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    default excludeFromRenderGroup(exclude: boolean | undefined): this;
    /**
     * 设置当前控件和子控件是否整体离屏渲染绘制后重复绘制缓存，不再进行内部属性更新。当freeze设置为true时，组件属性更新将被冻结；若需恢复属性更新，需先将freeze设置为false。
     *
     * @param { boolean | undefined } value - 设置当前控件和子控件是否整体离屏渲染绘制后重复绘制缓存，不再进行内部属性更新。当前控件的不透明度不为1时绘制效果可能有差异。
     *     <br>默认值：false
     *     <br> true时离屏渲染绘制后重复绘制缓存，false时离屏渲染绘制后不重复绘制缓存。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default freeze(value: boolean | undefined): this;
    /**
     * 设置组件平移。
     *
     * @param { TranslateOptions | undefined } value - 可使组件在以组件左上角为坐标原点的坐标系中进行移动。其中，x，y，z的值分别表示在对应轴移动的距离，值为正时表示向对应轴的正向移
     *     动，值为负时表示向对应轴的反向移动。<br/>默认值：{<br/>x: 0,<br/>y: 0,<br/>z: 0<br/>}<br/>当value的值为undefined时，恢复为无平移效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default translate(value: TranslateOptions | undefined): this;
    /**
     * 设置组件缩放。
     *
     * @param { ScaleOptions | undefined } value - 可以分别设置X轴、Y轴、Z轴的缩放比例，默认值为1，同时可以通过centerX和centerY设置缩放的中心点。<br/>默认值：{<br
     *     />x: 1,<br/>y: 1,<br/>z: 1,<br/>centerX:'50%',<br/>centerY:'50%'<br/>}<br/>当value的值为undefined时，恢复为无缩放效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default scale(value: ScaleOptions | undefined): this;
    /**
     * 设置组件旋转。
     *
     * @param { RotateOptions | RotateAngleOptions | undefined } value - 可使组件在以组件左上角为坐标原点的坐标系中进行旋转。其中，(x, y, z）指定一个矢量，作为
     *     旋转轴；或使用(angleX, angleY, angleZ）指定三个轴方向上的旋转角。<br/>默认值：{<br/>centerX: '50%',<br/>centerY: '50%',<br/>centerZ: 0
     *     ,<br/>perspective: 0<br/>}<br/>当value的值为undefined时，恢复为无旋转效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default rotate(value: RotateOptions | RotateAngleOptions | undefined): this;
    /**
     * 可用于显示二维变换时的矩阵变换。包含三维变换时应使用[transform3D]{@link CommonMethod.transform3D}接口。
     *
     * @param { Matrix4Transit | undefined } value - 设置当前组件的变换矩阵。<br/>当value的值为undefined时，恢复为单位矩阵的效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default transform(value: Matrix4Transit | undefined): this;
    /**
     * 设置组件的三维变换矩阵。当涉及包含透视效果的三维变换时，transform接口显示效果可能有误，推荐使用transform3D接口。
     *
     * @param { Matrix4Transit | undefined } transform - 三维变换矩阵。<br/>当transform的值为undefined时，恢复为单位矩阵的效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default transform3D(transform: Matrix4Transit | undefined): this;
    /**
     * 组件挂载后触发此回调。
     * > **说明：**
     * >
     * > 回调的调用时机有可能发生在组件布局渲染后。
     *
     * @param { (() => void) | undefined } event - onAppear事件的回调函数，表示组件已挂载显示。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAppear(event: (() => void) | undefined): this;
    /**
     * 组件消失时触发此回调。
     *
     * @param { (() => void) | undefined } event - onDisAppear事件的回调函数，表示组件已消失。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDisAppear(event: (() => void) | undefined): this;
    /**
     * 组件挂载到组件树时触发此回调。由于以下说明中的限制，建议使用[onAppear]{@link onAppear}替代此接口。
     * > **说明：**
     * >
     * > - 回调在组件布局渲染前调用。
     * >
     * > - 不允许在回调中对组件树进行变更，例如启动动画或使用if-else变更组件树结构。
     *
     * @param { VoidCallback | undefined } callback - onAttach事件的回调函数，表示组件已经挂载至组件树。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAttach(callback: VoidCallback | undefined): this;
    /**
     * 组件从组件树卸载时触发此回调。如果需要在回调中对组件树进行变更，建议使用[onDisAppear]{@link onDisAppear}替代此接口。
     *
     * @param { VoidCallback | undefined } callback - onDetach事件的回调函数，表示组件已经从组件树卸载。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDetach(callback: VoidCallback | undefined): this;
    /**
     * 组件区域变化时触发该回调。仅会响应由布局变化所导致的组件大小、位置发生变化时的回调。
     * 由绘制变化所导致的渲染属性变化不会响应回调，如[translate]{@link translate}、[offset]{@link offset}、[markAnchor]{@link markAnchor}、[scale]{@link scale}、[transform]{@link transform}。若组件自身位置由绘制变化决定也不会响应回调，如[bindSheet]{@link bindSheet}。
     * >  **说明：**
     * >
     * > 当组件同时绑定onAreaChange事件和[position]{@link position}属性时，onAreaChange事件响应设置[Position]{@link Position}类型的position属性变化，不响应设置[Edges]{@link Edges}和[LocalizedEdges]{@link LocalizedEdges}类型的position属性变化。
     *
     * @param { ((oldValue: Area, newValue: Area) => void) | undefined } event - 组件区域变化时触发的回调，oldValue为目标元素变化之前的宽高、相对于父元素的坐标，以及目标元素左上角在当前窗口坐标系中的位置坐标。newValue为目标元素变化之后的宽高、相对于父元素的坐标，以及目标元素左上角在当前窗口坐标系中的位置坐标。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAreaChange(event: ((oldValue: Area, newValue: Area) => void) | undefined): this;
    /**
     * 组件区域变化时触发该回调。仅会响应由布局变化所导致的组件大小、位置发生变化时的回调。
     * 由绘制变化所导致的渲染属性变化不会响应回调，如[translate]{@link translate}、[offset]{@link offset}、[markAnchor]{@link markAnchor}、[scale]{@link scale}、[transform]{@link transform}。若组件自身位置由绘制变化决定也不会响应回调，如[bindSheet]{@link bindSheet}。
     * >  **说明：**
     * >
     * > 当组件同时绑定onAreaChange事件和[position]{@link position}属性时，onAreaChange事件响应设置[Position]{@link Position}类型的position属性变化，不响应设置[Edges]{@link Edges}和[LocalizedEdges]{@link LocalizedEdges}类型的position属性变化。
     *
     * @param { AreaChangeCallback } event - 组件区域变化时触发的回调，oldValue为目标元素变化之前的宽高、相对于父元素的坐标，以及目标元素左上角在当前窗口坐标系中的位置坐标。newValue为目标元素变化之后的宽高、相对于父元素的坐标，以及目标元素左上角在当前窗口坐标系中的位置坐标。
     * @param { AreaChangeOptions } [options] - 区域变化相关的参数。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onAreaChange (event: AreaChangeCallback, options?: AreaChangeOptions): this;
    /**
     * 控制组件的显示或隐藏。当未设置visibility时，组件默认为显示。
     *
     * @param { Visibility | undefined } value - 控制当前组件显示或隐藏。根据具体场景需要可使用条件渲染代替。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default visibility(value: Visibility | undefined): this;
    /**
     * 设置组件在父容器剩余空间中所占的比例。设置该属性会触发二次布局，在对性能有严格要求的场景下建议使用layoutWeight替代。
     *
     * @param { double | undefined } value - 设置父容器在主轴方向上的剩余空间分配给此属性所在组件的比例。值为0表示不参与剩余空间分配，保持原有尺寸；值大于0时，按照比例分配父容器的剩余空间，值越大分配的空间越多。<br/>取值范围：[0, +∞)<br/>默认值：0
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default flexGrow(value: double | undefined): this;
    /**
     * 设置父容器空间不足时，压缩尺寸分配给此属性所在组件的比例。设置该属性会触发二次布局，在对性能有严格要求的场景下建议使用layoutWeight替代。
     *
     * @param { double | undefined } value - 设置父容器空间不足时，压缩尺寸分配给此属性所在组件的比例。<br/>默认值：0（父容器为Column或Row时），1（父容器为Flex时）
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default flexShrink(value: double | undefined): this;
    /**
     * 设置组件在父容器主轴方向上的基准尺寸。
     *
     * @param { double | string | undefined } value - 设置组件在父容器主轴方向上的基准尺寸。<br/>默认值：'auto'（表示组件在主轴方向上的基准尺寸为组件原本的大小）。<br/>string类型：不允许设置百分比字符串。可选值：可以转化为数字的字符串（如'10'）、带长度单位的字符串（如'10px'）或'auto'。传入不符合要求的字符串时，按默认值'auto'处理。<br/>number：取值范围(0, +∞)，单位为vp。<br/>设置异常值时，该属性按默认值'auto'处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default flexBasis(value: double | string | undefined): this;
    /**
     * 子组件在父容器交叉轴的对齐格式，设置后会覆盖父容器的alignItems设置。
     * 当父容器为Flex时，alignSelf仅在父容器设置FlexWrap.NoWrap时生效；设置FlexWrap.Wrap或FlexWrap.WrapReverse时不生效。
     *
     * @param { ItemAlign | undefined } value - 子组件在父容器交叉轴的对齐格式，会覆盖Flex、Column、Row、DynamicLayout、GridRow布局容器中的alignItems设置。<br/>默认值：ItemAlign.Auto（表示继承父容器的对齐设置）
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default alignSelf(value: ItemAlign | undefined): this;
    /**
     * 单独设置Stack组件中子组件的对齐规则，仅当父组件为Stack时生效。与align属性同时使用时，layoutGravity优先级更高，支持[attributeModifier]{@link
     * attributeModifier}动态设置属性方法。
     *
     * @param { LocalizedAlignment | undefined } alignment - 指定设置在Stack组件中子组件的对齐规则。<br/>默认值：LocalizedAlignment.CENTER
     *    。说明：当传入异常值时，按默认值处理。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default layoutGravity(alignment: LocalizedAlignment | undefined): this;
    /**
     * 设置当前组件在布局容器中显示的优先级。
     * <br>仅在Row、Column、Flex(单行)容器组件中生效。
     *
     * @param { double | undefined } value - 设置当前组件在布局容器中显示的优先级，取值范围[0, +∞)。<br/>默认值：1<br/>**说明：**<br/>仅在Row/Column/Flex(单行)容器组件中生效。<br/>当容器空间有限，需要控制组件显示顺序或隐藏低优先级组件时使用。建议根据组件重要性设置优先级，关键组件设置较大的值（如2-10），次要组件设置较小的值（如1）。<br/>小数点后的数字不影响优先级。不大于1的所有值优先级相同。大于1时，displayPriority的整数部分越大，优先级越高；同一整数区间内的值优先级相同。<br/>若父容器空间不足，隐藏低优先级子组件。若某一优先级级别的子组件被隐藏，则所有更低优先级的子组件也都会被隐藏。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default displayPriority(value: double | undefined): this;
    /**
     * 设置组件的堆叠顺序。
     *
     * @param { int | undefined } value - 同一容器中兄弟组件显示层级关系。zIndex值越大，显示层级越高，即zIndex值大的组件会覆盖在zIndex值小的组件上方。当不涉及新增或减少兄弟节点，动态改变zIndex时会在zIndex改变前层级顺序的基础上进行稳定排序。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default zIndex(value: int | undefined): this;
    /**
     * 设置共享元素转场动效。
     *
     * @param { string | undefined } id - 两个页面中id值相同且不为空字符串的组件即为共享元素，在页面转场时可显示共享元素转场动效。当id的值为undefined时，共享元素转场不生效。
     * @param { sharedTransitionOptions } [options] - 共享元素转场动画参数。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default sharedTransition(id: string | undefined, options?: sharedTransitionOptions): this;
    /**
     * 设置当前组件绘制区域内主轴方向上的布局，支持[attributeModifier]{@link attributeModifier}动态设置属性方法。
     *
     * @param { Direction | undefined } value - 设置当前组件绘制区域内主轴方向上的布局。<br/>属性配置为auto的时候，按照系统语言方向进行布局。<br/>该属性在Column组件上不生效。<br/>默认值：Direction.Auto
     *    <br/>direction取undefined或null时按默认值处理。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default direction(value: Direction | undefined): this;
    /**
     * 设置当前组件绘制区域内的子组件的对齐方式，增加支持镜像的能力，支持[attributeModifier]{@link attributeModifier}。
     *
     * @param { Alignment | LocalizedAlignment | undefined } alignment - 设置当前组件绘制区域内的子组件的对齐方式，增加支持镜像的能力。<br/>[LocalizedAlignment]{@link LocalizedAlignment}只在[Shape]{@link Shape},
     *    [Button]{@link Button},
     *    [GridItem]{@link GridItem},
     *    [FlowItem]{@link FlowItem},
     *    [ImageAnimator]{@link ImageAnimator},
     *    [LoadingProgress]{@link LoadingProgress},
     *    [PatternLock]{@link PatternLock},
     *    [Progress]{@link Progress},
     *    [QRCode]{@link QRCode},
     *    [TextClock]{@link TextClock},
     *    [TextTimer]{@link TextTimer},
     *    [StepperItem]{@link StepperItem},
     *    [MenuItem]{@link MenuItem},
     *    [Toggle]{@link MenuItem},
     *    [Checkbox]{@link Checkbox}, and
     *    [ListItem]{@link
     *    ListItem}中有效果。<br/>其中，除ListItem与Alignment的效果保持一致以外，其他组件镜像切换均生效；其他设置LocalizedAlignment无效果的组件按其默认效果显示。<br/>默认值：Al
     *    ignment.Center、LocalizedAlignment.CENTER<br/>设置异常值按默认值处理，效果为居中显示。<br/>**说明：**
     *    <br/>Alignment类型不支持镜像能力；LocalizedAlignment类型支持镜像能力，选择LocalizedAlignment中的枚举值，根据direction或系统语言方向的改变实现镜像切换。其中dire
     *    ction的优先级高于系统语言方向，当设置direction且不为auto时，LocalizedAlignment的镜像按照direction进行布局；当设置direction为auto或未设置时，LocalizedAli
     *    gnment的镜像按照系统语言方向进行布局。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default align(alignment: Alignment | LocalizedAlignment | undefined): this;
    /**
     * 绝对定位，确定子组件相对父组件内容区的位置，支持[attributeModifier]{@link attributeModifier}动态设置属性方法。
     *
     * > **说明：**
     * >
     * > - position对位置的影响作用在组件的尺寸测量完成之后。
     * > - 当父组件为[Row]{@link @global:Row}、[Column]{@link @global:Column}或[Flex]{@link
     * Flex}时，设置position的子组件不占位。在上述场景中，如果父组件包含的所有子组件均设置了position，此时父组件尺寸无法通过其他子组件确定，将基于尺寸(0, 0)进行布局测算。
     * > -
     * Position类型基于父组件内容区左上角确定位置；Edges类型基于父组件内容区四边确定位置，top/left/right/bottom分别为组件各边距离父组件内容区相应边的边距，通过边距来确定组件相对于父组件内容区的位置；Lo
     * calizedEdges类型基于父组件内容区四边确定位置，支持镜像模式。
     * > - 本属性适用于置顶显示、悬浮按钮等组件在父组件中位置固定的场景。
     * > - 本属性不支持在宽高为零的布局组件上设置。
     * > - 当父组件为[RelativeContainer]{@link @global:RelativeContainer}，且子组件设置了alignRules属性时，子组件的position属性不生效。
     * > - 若本属性所在组件的父组件未设置固定宽高，那么本组件会参考第一个设置固定宽高的祖先组件进行绝对定位。
     *
     * @param { Position | Edges | LocalizedEdges | undefined } value - 绝对定位，确定子组件相对父组件内容区的位置，父组件内容区的大小为
     *    父组件大小减去[border]{@link border}、[padding]{@link padding}、[safeAreaPadding]{@link safeAreaPadding}后提供给子组件可布局的内容区域大小。
     *    <br/>设置异常值时该属性不生效。[since 12].
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default position(value: Position | Edges | LocalizedEdges | undefined): this;
    /**
     * 设置元素在位置定位时的锚点，支持[attributeModifier]{@link attributeModifier}动态设置属性方法。
     *
     * @param { Position | LocalizedPosition | undefined } value - 设置元素在位置定位时的锚点，基于position或offset的初始位置，进行进一步的偏移调整。
     *    <br/>设置.position({x: value1, y: value2}).markAnchor({x: value3, y: value4})，效果等于设置.position({x: value1 - value3, y: value2 - value4})，offset同理。
     *    <br/>单独设置.markAnchor({x: value1, y: value2})，效果等于设置.offset({x: -value1, y: -value2})。
     *    <br/>API version 9及以前，默认值为：{x: 0, y: 0}
     *    <br/>API version 10：无默认值。
     *    <br/>设置异常值时该属性不生效。 [since 12]
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default markAnchor(value: Position | LocalizedPosition | undefined): this;
    /**
     * 相对偏移，组件相对原本的布局位置进行偏移。和position一起使用时，position生效，offset不生效，支持[attributeModifier]{@link attributeModifier}动态设置属性方法。
     *
     * @param { Position | Edges | LocalizedEdges | undefined } value - 相对偏移，组件基于原本的布局位置进行偏移。offset属性不影响父组件布局，仅在绘制时调整位置。
     *    <br/>Position类型基于组件自身左上角偏移，Edges类型基于组件自身四边偏移。 offset属性设置{x: x, y: y}与设置{left: x, top: y}以及{right: -x, bottom: -y}效果相同，类型LocalizedEdges支持镜像模式：LTR模式下start等同于x，RTL模式下start等同于-x。
     *    <br/>API version 9及以前，默认值为：{x: 0, y: 0}
     *    <br/>默认单位：vp
     *    <br/>API version 10：无默认值。
     *    <br/>设置异常值时该属性不生效。[since 12]
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default offset(value: Position | Edges | LocalizedEdges | undefined): this;
    /**
     * 设置组件是否可交互。当未设置enabled时，组件默认可交互。
     *
     * @param { boolean | undefined } value - 值为true表示组件可交互，响应点击等操作。<br/>值为false表示组件不可交互，不响应点击等操作。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enabled(value: boolean | undefined): this;
    /**
     * 指定设置在相对布局组件中子组件的对齐规则，仅当父组件为[RelativeContainer]{@link @global:RelativeContainer}时生效，支持[attributeModifier]{@link
     * attributeModifier}动态设置属性方法。
     *
     * @param { AlignRuleOption | LocalizedAlignRuleOptions | undefined } value - 指定设置在相对布局组件中子组件的对齐规则。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default alignRules(value: AlignRuleOption | LocalizedAlignRuleOptions | undefined): this;
    /**
     * 指定以该组件为链头所构成的链的参数，仅当父组件为RelativeContainer时生效。链头指满足成链规则时链的第一个组件（水平方向从左边起始，镜像语言下从右边起始；竖直方向从上边起始）。
     *
     * @param { Axis | undefined } direction - 链的方向。
     * @param { ChainStyle | undefined } style - 链的样式。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default chainMode(direction: Axis | undefined, style: ChainStyle | undefined): this;
    /**
     * 指定当前组件的宽高比，aspectRatio=width/height。
     * <br>仅设置width、aspectRatio时，height=width/aspectRatio。
     * <br>仅设置height、aspectRatio时，width=height*aspectRatio。
     * <br>同时设置width、height和aspectRatio时，height会被重新计算为width/aspectRatio，显式设置的height值不生效。
     * <br>设置aspectRatio属性后，组件宽高会受父组件内容区大小限制，constraintSize的maxWidth/maxHeight优先级高于aspectRatio。当constraintSize设置的maxWidth/maxHeight约束与aspectRatio计算结果冲突时，组件将优先遵循constraintSize的maxWidth/maxHeight约束，此时aspectRatio可能无法生效。
     *
     * @param { double | undefined } value - 指定当前组件的宽高比，取值范围(0, +∞)。<br/>API version 9及以前，默认值：1.0。<br/>API version 10及以后，默认值：无。<br/>**说明：**<br/>该属性设置为非法值（小于等于0）时不生效。API version 10及以后，未设置值时该属性不生效。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default aspectRatio(value: double | undefined): this;
    /**
     * 设置当前组件的点击回弹效果。
     *
     * @param { ClickEffect | null | undefined } value - 设置当前组件点击回弹效果。<br/>**说明：**<br/>可通过undefined或者null取消点击回弹效果。<br/>不
     *     建议在组件大小动态变化的场景中使用该功能。<br/>当组件无法触发通用事件时，不支持该属性。<br/>回弹触发缩放后可能造成触摸点不在控件上，控件上无法响应手势事件。
     * @returns { this } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default clickEffect(value: ClickEffect | null | undefined): this;
    /**
     * 设置组件是否启用默认点击音效。是否能够播放音效依赖设备声音相关的设置，如静音模式下不会播放音效。
     *
     * @param { boolean | undefined } enabled - 设置此组件是否启用默认点击音效。<br/>true表示启用默认点击音效；false表示禁用默认点击音效。<br/>值为undefined时，启用默认点击音效。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default enableClickSoundEffect(enabled: boolean | undefined): this
    /**
     * 在手势拖拽场景中，在可拖拽的组件上长按时间超过500ms，然后手指移动距离大于10vp时触发此回调；在鼠标拖拽场景中，鼠标左键在可拖拽的组件上按下并移动超过1vp时，即可触发此回调。
     * 针对默认支持拖拽能力的组件，如果开发者设置了onDragStart，优先执行onDragStart，并根据执行情况决定是否使用系统默认的拖拽能力，具体规则为：
     * - 如果开发者返回了自定义预览图，则不再使用系统默认的拖拽预览图；
     * - 如果开发者设置了拖拽数据，则不再使用系统默认填充的拖拽数据。
     * 文本类组件[Text]{@link Text}、[Search]{@link Search}、[TextInput]{@link TextInput}、[TextArea]{@link TextArea}、[RichEditor]{@link RichEditor}对选中的文本内容进行拖拽时，不支持自定义预览图。当onDragStart与菜单预览一起使用或使用了默认支持拖拽能力的组件时，预览及菜单项上的自定义内容不支持拖拽。
     * > **说明：**
     * >
     * > 从API version 13开始，该接口支持在[attributeModifier]{@link attributeModifier}中调用。
     *
     * @param { ((event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo) | undefined } event - 回调函数。<br/> **说明：**<br/> event参数为拖拽事件的信息。<br/> extraParams参数为拖拽事件的额外信息，需要解析为JSON格式，参考[extraParams]{@link extraParams}说明。<br/> CustomBuilder为拖拽过程中显示的组件信息，不支持全局builder。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDragStart(event: ((event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo) | undefined): this;
    /**
     * 拖拽进入组件范围内时，触发回调，当监听了[onDrop]{@link onDrop}事件时，此事件才有效。
     *
     * @param { ((event: DragEvent, extraParams?: string) => void) | undefined } event - 回调函数。<br/>**说明：**<br/> event为拖拽事件信息，包括拖拽点坐标。<br/> extraParams为拖拽事件额外信息，需要解析为Json格式，参考[extraParams]{@link extraParams}说明。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDragEnter(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * 拖拽在组件范围内移动时，触发回调，当监听了[onDrop]{@link onDrop}事件时，此事件才有效。
     *
     * @param { ((event: DragEvent, extraParams?: string) => void) | undefined } event - 回调函数。<br/>**说明：**<br/> event为拖拽事件信息，包括拖拽点坐标。<br/> extraParams为拖拽事件额外信息，需要解析为JSON格式，参考[extraParams]{@link extraParams}说明。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDragMove(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * 拖拽离开组件范围内时，触发回调，当监听了[onDrop]{@link onDrop}事件时，此事件才有效。
     *
     * @param { ((event: DragEvent, extraParams?: string) => void) | undefined } event - 回调函数。<br/>**说明：**<br/> event为拖拽事件信息，包括拖拽点坐标。<br/> extraParams为拖拽事件额外信息，需要解析为JSON格式，参考[extraParams]{@link extraParams}说明。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDragLeave(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * 绑定此事件的组件可作为释放目标。当在本组件范围内停止拖放行为时，将触发回调。如果开发者未在onDrop中主动调用event.setResult()来设置拖拽接收的结果，对于系统支持的默认可拖入组件，处理结果将以系统实际处理的数据为准。对于其他组件，系统将默认视为数据接收成功。
     *
     * @param { ((event: DragEvent, extraParams?: string) => void) | undefined } event - 回调函数。<br/>**说明：**<br/> event为拖拽事件信息，包括拖拽点坐标。<br/> extraParams为拖拽事件额外信息，需要解析为JSON格式，参考[extraParams]{@link extraParams}说明。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDrop(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * 绑定此事件的组件可作为释放目标。当在本组件范围内停止拖放行为时，将触发回调。如果开发者未在onDrop中主动调用event.setResult()来设置拖拽接收的结果，对于系统支持的默认可拖入组件，处理结果将以系统实际处理的数据为准。对于其他组件，系统将默认视为数据接收成功。
     *
     * @param { OnDragEventCallback | undefined } eventCallback - 拖拽事件的回调函数。
     * @param { DropOptions } dropOptions - 设置落入过程的参数。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDrop(eventCallback: OnDragEventCallback | undefined, dropOptions: DropOptions): this;
    /**
     * 绑定此事件的组件可作为具有悬停检测功能的拖拽响应目标。当拖拽对象悬停在目标上时，触发回调通知。此时只有一个目标可以成为响应方，并且子组件始终具有更高的响应优先级。
     * 关于悬停检测的触发机制及详细使用方法，请参考开发指南支持悬停检测。
     *
     * @param { Callback<SpringLoadingContext> | null | undefined } callback - 悬停检测回调函数，为null时禁用悬停检测。<br/>传入undefined时无效果。
     * @param { DragSpringLoadingConfiguration } [configuration] - 悬停检测配置信息，为undefined时取[DragSpringLoadingConfiguration]{@link DragSpringLoadingConfiguration}默认值。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onDragSpringLoading(callback: Callback<SpringLoadingContext> | null | undefined, configuration?: DragSpringLoadingConfiguration): this;
    /**
     * 绑定此事件的组件触发的拖拽结束后，触发回调。
     *
     * @param { ((event: DragEvent, extraParams?: string) => void) | undefined } event - 回调函数。<br/>**说明：**<br/> event为拖拽事件信息，在onDragEnd调用中不包括拖拽点坐标。<br/> extraParams为拖拽事件额外信息，需要解析为JSON格式，参考[extraParams]{@link extraParams}说明。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDragEnd(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * 设置该组件允许落入的uniformData数据类型。
     *
     * @param { Array<UniformDataType> | null | Array<string> | undefined } value - the uniformData type for this node.
     * @returns { this } - return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default allowDrop(value: Array<UniformDataType> | null | Array<string> | undefined): this;
    /**
     * 设置该组件是否允许拖拽。默认情况下，组件不允许拖拽。
     * > **说明：**
     * >
     * > 在[attributeModifier]{@link attributeModifier}中调用该接口时，不支持为preview参数传入[CustomBuilder]{@link CustomBuilder}类型的值，也不支持设置[DragItemInfo]{@link DragItemInfo}中的builder字段。
     *
     * @param { boolean | undefined } value - 设置该组件是否允许进行拖拽。true表示允许拖拽，false表示不允许拖拽。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default draggable(value: boolean | undefined): this;
    /**
     * 设置组件浮起和拖拽过程中的预览图。
     *
     * @param { CustomBuilder | DragItemInfo | string | undefined } preview - 设置组件浮起和拖拽过程中的预览图，仅在[onDragStart]{@link onDragStart}拖拽方式中有效。<br/>当组件支持拖拽并同时设置[bindContextMenu]{@link bindContextMenu}的预览图时，则长按浮起的预览图以[bindContextMenu]{@link bindContextMenu}设置的预览图为准。
     * @param { PreviewConfiguration } [config] - 拖拽预览图配置。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default dragPreview(preview: CustomBuilder | DragItemInfo | string | undefined, config?: PreviewConfiguration): this;
    /**
     * 设置拖拽过程中预览图处理模式，数量角标的显示以及预览图浮起的交互模式。不支持通过Grid的[onItemDragStart]{@link onItemDragStart}拖拽GridItem，也不支持通过List的[onItemDragStart]{@link onItemDragStart}拖拽ListItem。
     * >**说明：**
     * >
     * > 从API version 20开始，该接口支持在[attributeModifier]{@link attributeModifier}中调用。
     *
     * @param { DragPreviewOptions | undefined } value - 设置拖拽过程中预览图处理模式及数量角标的显示。
     * @param { DragInteractionOptions } [options] - 设置拖拽过程中预览图浮起的交互模式。<br/>默认值：空
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default dragPreviewOptions(value: DragPreviewOptions | undefined, options?: DragInteractionOptions): this;
    /**
     * 绑定此事件的组件，当处于手势拖拽发起前的不同阶段时，触发回调。拖拽发起前的各阶段可参考[PreDragStatus]{@link PreDragStatus}。此接口不支持在鼠标拖拽中触发。
     * > **说明：**
     * >
     * > 从API version 20开始，该接口支持在[attributeModifier]{@link attributeModifier}中调用。
     *
     * @param { Callback<PreDragStatus> | undefined } callback - 回调函数。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onPreDrag(callback: Callback<PreDragStatus> | undefined): this;
    /**
     * 在当前组件上，增加遮罩文本或者叠加自定义组件以及[ComponentContent]{@link ComponentContent}作为该组件的浮层。浮层的定位同样基于当前组件进行计算。浮层不通过组件树进行渲染，部分接口（例如[getRectangleById]{@link getRectangleById}）不支持获取浮层中的组件。
     * >**说明：**
     * >
     * > - overlay会将浮层组件覆盖在所绑定的组件上方，阻塞用户对浮层下方组件的所有交互操作。若需用户可操作下方组件，应参照示例2（通过builder设置浮层）中的实现，在浮层builder的最外层组件上配置`.hitTestBehavior(HitTestMode.Transparent)`。此配置在通过浮层实现水印时尤其重要，因为水印显示不应妨碍用户对下层组件的操作。
     * >
     * > - 多次调用overlay接口时，如果同时传入string类型和[CustomBuilder]{@link CustomBuilder}类型，或者同时传入string类型和[ComponentContent]{@link ComponentContent}类型，浮层内容会叠加显示。
     *
     * @param { string | CustomBuilder | ComponentContent<T> | undefined } value - 遮罩文本内容或自定义组件构造函数。<br/>**说明：**<br/>自定义组件作为浮层时，不支持键盘走焦到自定义组件中。通过CustomBuilder设置浮层时，浮层中的内容会在页面刷新时销毁并重新创建，存在一定的性能损耗，页面频繁刷新的场景推荐使用ComponentContent方式设置浮层。<br/>取值为undefined时，与不设置表现一致。
     * @param { OverlayOptions } [options] - 浮层的定位。<br/>**说明：**<br/>API version 12之前，options: <br/>{<br/>align?:&nbsp;[Alignment]{@link Alignment},&nbsp;<br/>offset?:&nbsp;{x?:&nbsp;number, y?:&nbsp;number}<br/>}
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    /**
     * 在当前组件上，增加遮罩文本或者叠加自定义组件以及[ComponentContent]{@link ComponentContent}作为该组件的浮层。浮层的定位同样基于当前组件进行计算。浮层不通过组件树进行渲染，部分接口（例如[getRectangleById]{@link getRectangleById}）不支持获取浮层中的组件。
     * >**说明：**
     * >
     * > - overlay会将浮层组件覆盖在所绑定的组件上方，阻塞用户对浮层下方组件的所有交互操作。若需用户可操作下方组件，应参照示例2（通过builder设置浮层）中的实现，在浮层builder的最外层组件上配置`.hitTestBehavior(HitTestMode.Transparent)`。此配置在通过浮层实现水印时尤其重要，因为水印显示不应妨碍用户对下层组件的操作。
     * >
     * > - 多次调用overlay接口时，如果同时传入string类型和[CustomBuilder]{@link CustomBuilder}类型，或者同时传入string类型和[ComponentContent]{@link ComponentContent}类型，浮层内容会叠加显示。
     *
     * @param { string | CustomBuilder | ComponentContent<Object> | undefined } value - 遮罩文本内容或自定义组件构造函数。<br/>**说明：**<br/>自定义组件作为浮层时，不支持键盘走焦到自定义组件中。通过CustomBuilder设置浮层时，浮层中的内容会在页面刷新时销毁并重新创建，存在一定的性能损耗，页面频繁刷新的场景推荐使用ComponentContent方式设置浮层。<br/>取值为undefined时，与不设置表现一致。
     * @param { OverlayOptions } [options] - 浮层的定位。<br/>**说明：**<br/>API version 12之前，options: <br/>{<br/>align?:&nbsp;[Alignment]{@link Alignment},&nbsp;<br/>offset?:&nbsp;{x?:&nbsp;number, y?:&nbsp;number}<br/>}
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default overlay(value: string | CustomBuilder | ComponentContent<Object> | undefined, options?: OverlayOptions): this;
    /**
     * 为绑定该属性的组件，在窗口顶部标题栏相应分栏创建由[ToolBarItem]{@link ToolBarItem}构成的工具栏，分栏位置由绑定该属性的组件所在分栏决定。[CustomBuilder]{@link CustomBuilder}必须由[ToolBarItem]{@link ToolBarItem}构成，该工具栏才能生效。适用于在分栏导航场景下，需要在标题栏区域集成快捷操作入口（如收藏、分享、编辑等操作按钮）的应用。
     * > **说明：**
     * >
     * > 该接口不支持在[attributeModifier]{@link attributeModifier}中调用。
     *
     * @param { CustomBuilder | undefined } value - 为当前组件配置CustomBuilder类型的自定义工具栏。CustomBuilder必须由[ToolBarItem]{@link ToolBarItem}构成，该工具栏才能生效。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default toolbar(value: CustomBuilder | undefined): this;
    /**
     * 设置组件的线性渐变效果。
     *
     * @param { LinearGradientOptions | undefined } value - 线性渐变的配置选项。
     *     <br>当options的值为undefined时，恢复为无线性渐变的效果。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default linearGradient(value: LinearGradientOptions | undefined): this;
    /**
     * 设置组件的角度渐变效果。
     *
     * @param { SweepGradientOptions | undefined } value - 角度渐变的配置选项。仅绘制0-360度范围内的角度，超出0-360度范围时不绘制渐变过渡效果，仅以渐变边界处对应的颜色填充。
     *     <br>- **center**: 角度渐变的中心点，即相对于当前组件左上角的坐标。
     *     <br>- **start**: 角度渐变的起始角度。
     *     <br> 默认值：**0**<br>角度为字符串时，支持deg、grad、rad、turn类型。
     *     <br>- **end**: 角度渐变的终止角度。
     *     <br> 默认值：**0**<br>角度为字符串时，支持deg、grad、rad、turn类型。
     *     <br>- **rotation**: 角度渐变的旋转角度。
     *     <br> 默认值：**0**<br>角度为字符串时，支持deg、grad、rad、turn类型。
     *     <br>- colors: 颜色数组，每个颜色由颜色值和位置组成。非法颜色自动跳过。
     *     <br>- **repeating**: 颜色是否重复。
     *     <br> 默认值：**false**。
     *     <br>**说明**
     *     <br>设置小于0的值时按**0**处理，设置大于360的值时按**360**处理。
     *     <br>当**start**、**end**或**rotation**为字符串时，字符串必须为数字或数字后带deg、rad、grad、turn单位。合法取值示例："90"、"90deg"、"1.57rad"。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default sweepGradient(value: SweepGradientOptions | undefined): this;
    /**
     * 设置组件的径向渐变效果。
     * @param { RadialGradientOptions | undefined } value - 径向渐变的配置选项。
     *     <br>- **center**: 径向渐变的中心点，即相对于当前组件左上角的坐标。
     *     <br>- **radius**: 径向渐变的半径。
     *     <br> 取值范围：[0, +∞)。
     *     <br>**说明**
     *     <br>设置小于0的值时按**0**处理。
     *     <br>- colors: 颜色数组，每个颜色由颜色值和位置组成。非法颜色自动跳过。
     *     <br>- **repeating**: 颜色是否重复。
     *     <br> 默认值：**false**。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default radialGradient(value: RadialGradientOptions | undefined): this;
    /**
     * 设置组件的路径动画。
     *
     * @param { MotionPathOptions | undefined } value - 设置组件的运动路径。<br/>当value的值为undefined时，使用默认值{ MotionPathOptions: {
     *     path: " ", from: 0, to: 1, rotatable: false } }。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default motionPath(value: MotionPathOptions | undefined): this;
    /**
     * 为组件添加阴影效果。
     *
     * @param { ShadowOptions | ShadowStyle | undefined } value - 组件的阴影。
     *     <br>当值类型为**ShadowOptions**时，可指定模糊半径、阴影颜色和X轴、Y轴偏移量。
     *     <br>当值类型为**ShadowStyle**时，可指定阴影样式。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default shadow(value: ShadowOptions | ShadowStyle | undefined): this;
    /**
     * 设置组件的阴影形状。阴影按指定形状渲染。
     *
     * 此接口与[shadow]{@link CommonMethod#shadow}属性配合使用。组件大小变化时阴影形状会重新计算。
     *
     * @param { CircleShape | EllipseShape | PathShape | RectShape | undefined } shape - 阴影形状。
     *     当值类型为 {@link CircleShape}、{@link EllipseShape}、
     *     {@link PathShape} 或 {@link RectShape} 时，阴影渲染为对应形状。
     *     当值为 **undefined** 时，清除阴影形状。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    default shadowShape(shape: CircleShape | EllipseShape | PathShape | RectShape | undefined): this;
    /**
     * 设置[阴影]{@link CommonMethod#shadow}不填充时的裁切方式。仅在[ShadowOptions#fill]{@link ShadowOptions#fill}设为 **false** 时生效。
     *
     * @param { ShadowClipMode | undefined } mode - 阴影裁切方式。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    default shadowClipMode(mode: ShadowClipMode | undefined): this;
    /**
     * 为组件设置边缘光效。
     *
     * <p><strong>说明</strong>：
     * <br>边缘光效沿组件边缘产生发光效果，从指定位置开始沿边缘延伸。
     * <br>该效果可以增强视觉吸引力并突出重要组件。
     * </p>
     *
     * @param { EdgeLightParams | undefined } params - 边缘光效参数。
     *     定义边缘光效的位置、长度、强度、颜色和粗细。如果params为undefined，则移除边缘光效。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default edgeLight(params: EdgeLightParams | undefined): this;
    /**
     * 设置组件内容（含子组件内容）与画布上已有内容（可能是离屏画布）的混合方式。
     *
     * @param { BlendMode | undefined } value - 混合模式。
     *     <br>默认值：**BlendMode.NONE**。
     *     <br>**说明**
     *     <br>当使用**BlendMode.NONE**时，混合效果默认为**BlendMode.SRC_OVER**，且**BlendApplyType**不生效。
     * @param { BlendApplyType } [type] - 混合模式是否离屏实现。
     *     <br>默认值：**BlendApplyType.FAST**。
     *     <br>**NOTE**
     *     <br>1. **BlendApplyType.FAST**: The blend mode is not implemented offscreen.
     *     <br>2. **BlendApplyType.OFFSCREEN**: An offscreen canvas of the size of the current component
     *     is created. The content of the current component (including child components) is then drawn
     *     onto the offscreen canvas, and blended with the existing content on the canvas below using
     *     the specified blend mode. This approach may cause issues with screen capture for APIs such
     *     as linearGradientBlur<sup>12+</sup>, backgroundEffect, and brightness.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default blendMode(value: BlendMode | undefined, type?: BlendApplyType): this;


    /**
     * 为当前组件添加混合模式效果。不能与blendMode接口同时使用。
     *
     * @param { BlendMode | Blender | undefined } effect - 当effect类型为BlendMode时，定义不同的混合模式。
     * @param { BlendApplyType } [type] - 不同的混合应用类型。
     *     默认值：BlendApplyType.FAST。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default advancedBlendMode(effect: BlendMode | Blender | undefined, type?: BlendApplyType): this;
    /**
     * 使用BlenderBase实例为当前组件添加颜色混合效果。不能与blenderMode接口同时使用。
     *
     * @param { BlenderBase | undefined } effect - Blender基础类型，创建各类Blender效果的入口。
     *     BlenderBase实例必须通过BlenderBase类成员方法创建。
     * @param { BlendApplyType } [type] - 混合效果的实现方式是否离屏。
     *     默认值: BlendApplyType.FAST。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    default advancedBlendMode(effect: BlenderBase | undefined, type?: BlendApplyType): this;
    /**
     * 是否对子组件超出当前组件范围外的区域进行裁剪。
     *
     * @param { boolean | undefined } value - 参数为boolean类型，设置是否按照父容器边缘轮廓进行裁剪。<br/>默认值：false <br/>true表示按照父容器边缘轮廓进行裁剪，
     *     false表示不对子组件进行裁剪。 <br/>**说明：** 设置为true后，子组件超出当前组件范围外的区域将不响应绑定的手势事件。<br/>当value的值为undefined时，恢复为不对子组件超出当前组件范围外
     *     的区域进行裁剪。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default clip(value: boolean | undefined): this;
    /**
     * 按指定的形状（形状中可包含位置信息）对当前组件进行裁剪。
     * 
     * > **说明：**  
     * >
     * > 不同的形状支持的属性范围不同，路径是一种形状，除此之外还有椭圆、矩形等形状。
     * >
     * > 路径的形状不支持设置宽度和高度。具体形状支持的属性参考具体形状的文档。
     * >
     * > 形状中的[fill]{@link @ohos.arkui.shape:CommonShapeMethod#fill}属性对clipShape接口不生效。
     *
     * @param { CircleShape | EllipseShape | PathShape | RectShape | undefined } value - 参数为相应类型的组件，按指定的形状（形状中可包含位置信息）对当
     *     前组件进行裁剪。<br/>**说明：** 裁剪不会导致被裁剪区域无法响应绑定的手势事件。<br/>当value的值为undefined时，会重置为当前值。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default clipShape(value: CircleShape | EllipseShape | PathShape | RectShape | undefined): this;
    /**
     * 为组件上添加可调节进度的遮罩。
     *
     * @param { ProgressMask | undefined } value - 在当前组件上加上可动态设置进度、最大值和颜色的遮罩。<br/>当value的值为undefined时，恢复为无进度遮罩效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default mask(value: ProgressMask | undefined): this;
    /**
     * 为组件上添加指定形状的遮罩。
     *
     * @param { CircleShape | EllipseShape | PathShape | RectShape | undefined } value - 在当前组件上加上指定形状的遮罩。<br/>当value的值为
     *     undefined时，会重置为当前值。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default maskShape(value: CircleShape | EllipseShape | PathShape | RectShape | undefined): this;
    /**
     * 组件的唯一标识，唯一性由使用者保证。
     * 此接口仅用于对应用的测试。与id同时使用时，后赋值的属性会覆盖先赋值的属性，建议仅设置id。
     *
     * @param { string | undefined } value - 组件的唯一标识，唯一性由使用者保证。与id同时使用时，后赋值的属性会覆盖先赋值的属性，建议仅设置id。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     * @test
     */
    default key(value: string | undefined): this;
    /**
     * 组件的唯一标识，唯一性由使用者保证。若同一个组件设置了多个id，最后设置的生效。当未设置id时，组件默认id为空。与key同时使用时，后赋值的属性会覆盖先赋值的属性。
     *
     * @param { string | undefined } value - 组件的唯一标识，唯一性由使用者保证。与key同时使用时，后赋值的属性会覆盖先赋值的属性。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default id(value: string | undefined): this;
    /**
     * 组件内隐式共享元素转场。
     *
     * @param { string | undefined } id - geometry transition id
     * @param { GeometryTransitionOptions } [options] - 组件内共享元素转场动画参数。<br>默认值为 { follow: false }。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default geometryTransition(id: string | undefined, options?: GeometryTransitionOptions): this;
    /**
    * 为组件绑定Tips悬浮气泡。
    *
    * @param { TipsMessageType | undefined } message
    * @param { TipsOptions } [options]
    * @returns { this }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    default bindTips(message: TipsMessageType | undefined, options?: TipsOptions): this;
    /**
     * 为组件绑定Popup气泡。
     *
     * **说明：**
     *
     * 请等待页面全部构建完成后再展示Popup气泡，不要在页面构建中将show设置为true，否则会导致Popup气泡显示位置及形状错误。
     *
     * @param { boolean | undefined } show - Whether to show the popup, default is false.
     * @param { PopupOptions | CustomPopupOptions | undefined } popup
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindPopup(show: boolean | undefined, popup: PopupOptions | CustomPopupOptions | undefined): this;
    /**
     * 菜单组件。
     *
     * @param { Array<MenuElement> | CustomBuilder | undefined } content - 表示菜单的内容。
     * @param { MenuOptions } [options] - 表示菜单的选项。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindMenu(content: Array<MenuElement> | CustomBuilder | undefined, options?: MenuOptions): this;
    /**
     * 菜单组件。
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - 菜单显示开关，
     *     支持传入双向绑定参数。
     *     true表示显示菜单，false表示隐藏菜单，默认值为false。
     * @param { Array<MenuElement> | CustomBuilder | undefined } content - 表示菜单的内容。
     * @param { MenuOptions } [options] - 表示菜单的选项。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindMenu(isShow: boolean | Bindable<boolean> | undefined, content: Array<MenuElement> | CustomBuilder | undefined, options?: MenuOptions): this;
    /**
     * 为组件绑定上下文菜单，当用户长按或右键单击该组件时显示。
     * 仅支持自定义菜单项。
     *
     * @param { CustomBuilder | undefined } content - 表示上下文菜单的内容。
     * @param { ResponseType | undefined } responseType - 表示上下文菜单的响应类型。用鼠标设备长按
     *     不支持。
     * @param { ContextMenuOptions } [options] - 表示上下文菜单的选项。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindContextMenu(content: CustomBuilder | undefined, responseType: ResponseType | undefined, options?: ContextMenuOptions): this;
    /**
     * 为组件绑定上下文菜单，当用户长按或右键单击该组件时显示。
     * 仅支持自定义菜单项。
     *
     * @param { CustomBuilder | Array<MenuElement> | undefined } content - 表示上下文菜单的内容。
     * @param { ResponseType | undefined } responseType - 表示上下文菜单的响应类型。用鼠标设备长按
     *     不支持。
     * @param { ContextMenuOptions } [options] - 表示上下文菜单的选项。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default bindContextMenuByResponseType(content: CustomBuilder | Array<MenuElement> | undefined,
        responseType: ResponseType | undefined, options?: ContextMenuOptions): this;
    /**
     * 为组件绑定上下文菜单，当用户长按或右键单击该组件时显示。
     * 仅支持自定义菜单项。用鼠标设备长按不支持。
     *
     * @param { CustomBuilderT<ResponseType> | undefined } content - 表示上下文菜单的内容。undefined
     *     表示解除绑定。
     * @param { ContextMenuOptions } [options] - 表示上下文菜单的选项。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | undefined, options?: ContextMenuOptions): this;
    /**
     * 为组件绑定上下文菜单，当用户长按或右键单击该组件时显示。
     * 仅支持自定义菜单项。用鼠标设备长按不支持。
     *
     * @param { CustomBuilderT<ResponseType> | Array<MenuElement> | undefined } content - 表示
     *     上下文菜单的内容。undefined表示解除绑定。
     * @param { ContextMenuOptions } [options] - 表示上下文菜单的选项。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | Array<MenuElement> | undefined,
        options?: ContextMenuOptions): this;
    /**
     * 为组件绑定上下文菜单，其可见性由isShow设置决定。
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - 菜单显示开关，
     *     支持传入双向绑定参数。
     *     true表示显示内容，false表示隐藏内容，默认值为false。
     *     <p><strong>注意</strong>：
     *     <br>只有在相关页面构建完成后，菜单才能正常显示。如果在构建完成前将该参数设置
     *     为true，可能会出现显示异常，如位置偏移、变形或无法弹出
     *     等问题。不支持通过长按触发拖拽。
     *     </p>
     * @param { CustomBuilder | undefined } content - 表示上下文菜单的内容。
     * @param { ContextMenuOptions } [options] - 表示上下文菜单的选项。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindContextMenu(isShow: boolean | Bindable<boolean> | undefined, content: CustomBuilder | undefined, options?: ContextMenuOptions): this;
    /**
     * 为组件绑定上下文菜单，其可见性由isShow设置决定。
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - 菜单显示开关，
     *     支持传入双向绑定参数。
     *     true表示显示内容，false表示隐藏内容，默认值为false。
     *     <p><strong>注意</strong>：
     *     <br>只有在相关页面构建完成后，菜单才能正常显示。如果在构建完成前将该参数设置
     *     为true，可能会出现显示异常，如位置偏移、变形或无法弹出
     *     等问题。不支持通过长按触发拖拽。
     *     </p>
     * @param { CustomBuilder | Array<MenuElement> | undefined } content - 表示上下文菜单的内容。
     * @param { ContextMenuOptions } [options] - 表示上下文菜单的选项。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default bindContextMenuByIsShow(isShow: boolean | Bindable<boolean> | undefined,
        content: CustomBuilder | Array<MenuElement> | undefined, options?: ContextMenuOptions): this;
    /**
     * 给组件绑定全屏模态页面，点击后显示模态页面。模态页面内容自定义，显示方式可设置无动画过渡，上下切换过渡以及透明渐变过渡。
     * 
     * > **说明：**
     * >
     * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - 是否显示全屏模态页面。<br/>-true：显示全屏模态页面。<br/>-false：隐藏全屏模态页面。
     * @param { CustomBuilder | undefined } builder - 配置全屏模态页面内容。<!--RP1--><!--RP1End-->
     * @param { ModalTransition } [type] - 全屏模态页面的系统转场方式。<br/> 默认值：ModalTransition.DEFAULT。<br/>**说明：**<br /> 同
     *     transition同时设置时，此属性不生效。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindContentCover(isShow: boolean | Bindable<boolean> | undefined, builder: CustomBuilder | undefined, type?: ModalTransition): this;
    /**
     * 给组件绑定全屏模态页面，点击后显示模态页面。模态页面内容自定义，可自定义设置转场方式。
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - 是否显示全屏模态页面。<br/>-true：显示全屏模态页面。<br/>-false：隐藏全屏模态页面。
     * @param { CustomBuilder | undefined } builder - 配置全屏模态页面内容。<!--RP1--><!--RP1End-->
     * @param { ContentCoverOptions } [options] - 配置全屏模态页面的可选属性。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindContentCover(isShow: boolean | Bindable<boolean> | undefined, builder: CustomBuilder | undefined, options?: ContentCoverOptions): this;
    /**
     * 给组件绑定半模态页面，点击后显示模态页面。
     * 
     * > **说明：**
     * >
     * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - 是否显示半模态页面。<br/>true：显示半模态页面。<br/>false：隐藏半模态页面。
     * @param { CustomBuilder | undefined } builder - 配置半模态页面内容。
     * @param { SheetOptions } [options] - 配置半模态页面的可选属性。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindSheet(isShow: boolean | Bindable<boolean> | undefined, builder: CustomBuilder | undefined, options?: SheetOptions): this;
    /**
     * 设置组件不同状态的样式。
     * > **说明：**
     * >
     * > 该接口不支持在[attributeModifier]{@link attributeModifier}中调用。
     *
     * @param { StateStyles | undefined } value - 设置组件不同状态的样式。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default stateStyles(value: StateStyles | undefined): this;
    /**
     * 标记支持分布式迁移的组件Id，系统通过该Id匹配两端设备上的对应组件，并据此恢复组件的特定状态。不同组件的迁移效果和限制有所不同：Grid的ScrollBar位置无法迁移；Scroll在两端设备显示规格不同或布局参数差异导致布局不一致时会影响迁移效果；WaterFlow还会迁移顶部FlowItem相对WaterFlow的主轴偏移值（单位为vp）。
     *
     * @param { int | undefined } value - 标记支持分布式迁移的组件Id，用于两端设备组件的配对。取值为整数，具体范围以接口实现约束为准。同一个应用中各个支持分布式迁移组件的Id必须不同；否则可能导致两端设备组件无法正确配对，影响分布式迁移时的状态恢复。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default restoreId(value: int | undefined): this;
    /**
     * 组件可见区域变化时触发该回调。开发指导及常见问题请参考感知组件可见性指南。
     * > **说明：**
     * >
     * >- 从API version 20开始，该接口支持在[attributeModifier]{@link attributeModifier}中调用。
     * >
     * >- 仅提供自身节点相对于所有祖先节点（直到window边界）的相对裁切面积与自身面积的比值及其变化趋势。
     * >
     * >- 不支持兄弟组件对自身节点的遮挡计算，不支持所有祖先的兄弟节点对自身节点的遮挡计算，不支持窗口遮挡计算，不支持组件旋转计算，如[Stack]{@link Stack}、Z序控制、[rotate]{@link rotate}等。
     * >
     * >- 不支持非挂树节点的可见面积变化计算。例如，预加载的节点、通过[overlay]{@link overlay}能力挂载的自定义节点。
     * >
     * >- 不支持[scale]{@link scale}属性，如果想要支持[scale]{@link scale}，则需使用onVisibleAreaChange<sup>22+</sup>，将measureFromViewport设置为true。
     *
     * @param { Array<double> | undefined } ratios - 阈值数组。其中，每个阈值代表组件可见面积（即组件在屏幕显示区的面积，只计算父组件内的面积，超出父组件部分不会计算）与组件自身面积的比值。当组件可见面积与自身面积的比值接近阈值时，均会触发该回调。每个阈值的取值范围为[0.0, 1.0]，如果开发者设置的阈值小于0.0，则实际取值为0.0；如果设置的阈值大于1.0，则实际取值为1.0。<br/>**说明：** <br/>当数值接近边界0和1时，将会按照误差不超过0.001的规则进行舍入。例如，0.9997会被近似为1。
     * @param { VisibleAreaChangeCallback | undefined } event - 组件可见区域变化事件的回调。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onVisibleAreaChange(ratios: Array<double> | undefined, event: VisibleAreaChangeCallback | undefined): this;

    /**
     * 组件可见区域变化时触发该回调。开发指导及常见问题请参考感知组件可见性指南。
     * > **说明：**
     * >
     * >- 从API version 20开始，该接口支持在[attributeModifier]{@link attributeModifier}中调用。
     * >
     * >- 仅提供自身节点相对于所有祖先节点（直到window边界）的相对裁切面积与自身面积的比值及其变化趋势。
     * >
     * >- 不支持兄弟组件对自身节点的遮挡计算，不支持所有祖先的兄弟节点对自身节点的遮挡计算，不支持窗口遮挡计算，不支持组件旋转计算，如[Stack]{@link Stack}、Z序控制、[rotate]{@link rotate}等。
     * >
     * >- 不支持非挂树节点的可见面积变化计算。例如，预加载的节点、通过[overlay]{@link overlay}能力挂载的自定义节点。
     * >
     * >- 不支持[scale]{@link scale}属性，如果想要支持[scale]{@link scale}，则需使用onVisibleAreaChange<sup>22+</sup>，将measureFromViewport设置为true。
     *
     * @param { Array<double> | undefined } ratios - 阈值数组。其中，每个阈值代表组件可见面积（即组件在屏幕显示区的面积，只计算父组件内的面积，超出父组件部分不会计算）与组件自身面积的比值。当组件可见面积与自身面积的比值接近阈值时，均会触发该回调。每个阈值的取值范围为[0.0, 1.0]，如果开发者设置的阈值小于0.0，则实际取值为0.0；如果设置的阈值大于1.0，则实际取值为1.0。<br/>**说明：** <br/>当数值接近边界0和1时，将会按照误差不超过0.001的规则进行舍入。例如，0.9997会被近似为1。
     * @param { VisibleAreaChangeCallback | undefined } event - 组件可见区域变化事件的回调。
     * @param { boolean | undefined } measureFromViewport - 设置可见区域计算模式。<br/>当measureFromViewport设置为true时，系统在计算该组件的可见区域时，会考虑父组件的[clip]{@link clip}属性设置。如果父组件的[clip]{@link clip}为false，则认为其内的子组件可以超出其区域进行显示，因此超出父组件的区域也将被视为可见区域纳入计算；如果父组件的[clip]{@link clip}设置为true，则组件超出父组件的区域会被裁剪，无法显示，因此会被视为不可见区域进行计算。<br/>默认值：false
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onVisibleAreaChange(ratios: Array<double> | undefined, event: VisibleAreaChangeCallback | undefined, measureFromViewport: boolean | undefined): this;

    /**
     * 设置onVisibleAreaApproximateChange事件的回调参数，限制它的执行间隔。
     * > **说明：**
     * >
     * > 从API version 23开始，该接口支持在[attributeModifier]{@link attributeModifier}中调用。
     *
     * @param { VisibleAreaEventOptions | undefined } options - 可见区域变化相关的参数。
     * @param { VisibleAreaChangeCallback | undefined } event - onVisibleAreaChange事件的回调函数。当组件可见面积与自身面积的比值接近options中设置的阈值时触发该回调。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onVisibleAreaApproximateChange(options: VisibleAreaEventOptions | undefined, event: VisibleAreaChangeCallback | undefined): this;
    /**
     * 为组件添加球面效果。
     *
     * @param { double | undefined } value - 组件的球面程度。
     *     <br>取值范围：[0, 1]。
     *     <p>**说明**：
     *     <br>1. 值为0时组件保持不变，值为1时组件完全球面化。0到1之间，值越大球面程度越高。设置小于0的值时按0处理，设置大于1的值时按1处理。
     *     <br>2. 组件的阴影和外描边不支持球面效果。
     *     <br>3. 值大于0时，组件会被冻结不更新，其内容绘制到透明离屏缓冲区。更新组件属性时需将值设为0。
     *     </p>
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default sphericalEffect(value: double | undefined): this;
    /**
     * 为组件添加提亮效果。
     *
     * @param { double | undefined } value - 组件的提亮程度。
     *     <br>取值范围：[0, 1]。
     *     <br>值为0时组件为暗，值为1时组件完全点亮。0到1之间，值越大亮度越高。
     *     <br>设置小于0的值时按0处理，设置大于1的值时按1处理。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default lightUpEffect(value: double | undefined): this;

    /**
     * 为组件应用景深效果。
     *
     * @param { SpatialEffectParams | undefined } params - 景深效果参数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default spatialEffect(params: SpatialEffectParams | undefined): this;

    /**
     * 设置组件的图像边缘像素扩展距离。
     *
     * @param { PixelStretchEffectOptions | undefined } options - 设置组件的图像边缘像素扩展距离。
     *     <br>参数`options`包括上下左右四个方向的边缘像素扩展距离。
     *     <br>**说明：**
     *     <br>1. 如果距离为正值，表示向外扩展，放大原来图像大小。上下左右四个方向分别用边缘像素填充，填充的距离即为设置的边缘扩展的距离。
     *     <br>2. 如果距离为负值，表示内缩，但是最终图像大小不变。
     *     <br>内缩方式：
     *     <br>图像根据`options`的设置缩小，缩小大小为四个方向边缘扩展距离的绝对值。
     *     <br>图像用边缘像素扩展到原来大小。
     *     <br>3. 对`options`的输入约束：
     *     <br>上下左右四个方向的扩展统一为非正值或者非负值。即四个边同时向外扩或者内缩，方向一致。
     *     <br>所有方向的输入均为百分比或者具体值，不支持百分比和具体值混用。
     *     <br>所有异常情况下，显示为{0, 0, 0, 0}效果，即跟原图保持一致。
     *     <br>当options的值为undefined时，恢复为无像素扩展效果。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default pixelStretchEffect(options: PixelStretchEffectOptions | undefined): this;
    /**
     * 设置组件的自定义组合键。
     *
     * @param { string | FunctionKey | undefined } value - 热键的单个字符（可以通过键盘输入的字符）或[FunctionKey]{@link @global:FunctionKey}。<br />空字符串意为取消快捷键绑定。<br/>
     * @param { Array<ModifierKey> | undefined } keys - 热键组合。<br />仅当value为[FunctionKey]{@link @global:FunctionKey}的情况下keys的值可以为空。<br/>
     * @param { function } action - 组合快捷键触发成功后的自定义事件回调。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default keyboardShortcut(value: string | FunctionKey | undefined, keys: Array<ModifierKey> | undefined, action?: () => void): this;
    /**
     * 设置是否启用无障碍分组。启用无障碍分组后，组件及其子组件作为一整个可选中组件，无障碍服务不再关注子组件内容。
     * 若组件启用无障碍分组，当组件不包含通用文本属性，同时未设置无障碍文本accessibilityText时，将默认拼接其子组件的通用文本属性作为组件的合并文本。
     * 若某一子组件没有通用文本属性，则忽略该子组件不进行拼接，此时合并文本不使用子组件的无障碍文本。
     * 当子组件accessibilityLevel设置为"yes"时则不受accessibilityGroup约束，在满足屏幕朗读其他规则下，子组件可聚焦。
     * 通过accessibilityPreferred启用优先拼接无障碍文本进行朗读后，将优先拼接其子组件的无障碍文本属性作为组件的合并文本。
     * 若某一子组件未设置无障碍文本，则继续拼接该子组件的通用文本属性，若该子组件没有通用文本属性，则忽略该子组件不进行拼接。
     * 从API version 23开始，通过accessibilityOptions中的相关配置项（stateControllerRoleType或stateControllerId、
     * actionControllerRoleType或actionControllerId），可以指定一个特定子组件，由该子组件的状态信息和点击事件来接管当前聚合组件的无障碍能力。
     *
     * @param { boolean | undefined } isGroup - 无障碍分组，设置为true时表示该组件及其所有子组件为一整个可以选中的组件，无障碍服务将不再关注其子组件内容，会合并子组件的文本与无障碍信息，并将其发送至无障碍服务；设置为false表示不启用无障碍分组。
     *     <br>默认值：false
     * @param { ?AccessibilityOptions } [accessibilityOptions] - 无障碍分组的配置选项对象，包含以下属性：
     *     <br>- accessibilityPreferred：设置为true时，使应用优先拼接无障碍文本进行朗读；设置为false时，应用进行屏幕朗读时不会优先使用无障碍文本。
     *     <br>- stateControllerRoleType或stateControllerId：从API version 23开始支持，指定一个特定子组件，使用该子组件的状态信息作为当前聚合组件的无障碍状态。
     *     <br>- actionControllerRoleType或actionControllerId：从API version 23开始支持，指定一个特定子组件，使用该子组件的点击事件作为当前聚合组件的无障碍操作。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityGroup(isGroup: boolean | undefined, accessibilityOptions?: AccessibilityOptions): this;
    /**
     * 指定屏幕朗读扫动走焦过程中组件的下一个焦点，并支持配置详细参数。
     * 通过AccessibilityNextFocusParams参数，可以配置是否在无障碍下一个焦点处理过程中查找后代节点中的焦点。
     * @param { string | undefined } nextId - 下一个被指定聚焦组件的唯一标识id。若唯一标识id无对应组件，则设置的accessibilityNextFocusId不存在，设置无效。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityNextFocusId(nextId: string | undefined): this;
    /**
     * 为页面设置屏幕朗读初始焦点。屏幕朗读首次进入当前页面时，会将焦点定位到设置为true的组件，便于开发者引导用户优先关注页面核心内容。
     * @param { boolean | undefined } focus - 为页面设置屏幕朗读初始焦点。值为true则表示该组件为当前页默认首焦点，值为false则不设置该组件为默认首焦点。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityDefaultFocus(focus: boolean | undefined): this;
    /**
     * 设置当前组件和宿主应用为同page模式。
     * 针对跨进程嵌入式显示的组件，例如EmbeddedComponent，其子树场景中出现的跳焦问题，可通过设置accessibilityUseSamePage属性解决。
     * 因跨进程嵌入式显示的组件启动进程的页面变化事件与宿主页面变化事件发送时序不一致，可能导致焦点从当前组件移至另一组件，此现象称为“跳焦”。
     * @param { AccessibilitySamePageMode | undefined } pageMode - 当前跨进程嵌入式显示的组件和宿主应用的同page模式。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityUseSamePage(pageMode: AccessibilitySamePageMode | undefined): this;
    /**
     * 设置无障碍节点是否支持屏幕朗读滚动操作。当屏幕朗读在扫动走焦时，若容器内当前页面无可聚焦的组件，会发起一次自动滚动操作。
     * @param { boolean | undefined } isTriggerable - 用于表示组件是否支持该能力。<br/>支持的值为：<br/>true：屏幕朗读焦点切换而容器内当前页面无可聚焦的组件时，需要自动滚动操作。
     *         false：屏幕朗读焦点切换而容器内当前页面无可聚焦的组件时，不需要自动滚动操作。<br/>undefined：还原默认值。<br/>默认值：true。<br/>**说明：**
     *         1. 该属性不影响原先无障碍节点属性ElementAttributeValues中的scrollable。<br/>2. 组件在屏幕朗读下的滚动逻辑由屏幕朗读根据该属性和组件是否支持scroll来决定。
     *         3. 该属性为通用属性，所有基础组件均可配置。建议配置的滚动组件类型，如List、Grid、Scroll、WaterFlow等。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityScrollTriggerable(isTriggerable: boolean | undefined): this;
    /**
     * 设置无障碍文本，支持通过Resource引用资源文件。当组件不包含文本属性时，开发人员可通过设置无障碍文本属性，使不包含文字信息的组件能够播报无障碍文本的内容；当组件同时包含文本属性时，在朗读场景仅播报无障碍文本。
     * @param { Resource | string | undefined } text - 无障碍文本引用资源，当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。
     *     <br>**说明：**
     *     <br>若组件既拥有文本属性，又拥有无障碍文本属性，则组件被选中时，仅播报无障碍文本内容。
     *     <br>若组件设置了无障碍分组属性为true，但是既没有无障碍文本属性，也没有文本属性，会对其子节点的组件进行文本拼接（深度优先）。
     *     <br>不对无障碍文本属性进行拼接，如需优先拼接无障碍文本，则需设置accessibilityGroup的accessibilityPreferred。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityText(text: Resource | string | undefined): this;
    /**
     * 设置无障碍组件类型，不同组件类型有对应的朗读方式，可以根据应用诉求，修改组件类型，用于控制无障碍模式下对组件的朗读方式和朗读内容。
     * @param { AccessibilityRoleType | undefined } role - 屏幕朗读播报的组件类型，如按钮、图表。具体类型可由开发者根据需要选择。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityRole(role: AccessibilityRoleType | undefined): this;
    /**
     * 该接口在无障碍模式下，设置无障碍节点获焦、失焦状态的回调函数。当无障碍焦点移入或移出当前组件，导致获焦、失焦状态发生变化时，触发回调函数。
     * @param { AccessibilityFocusCallback | undefined } callback - 在无障碍模式下，当组件获焦、失焦状态发生变化时，向注册方通知当前状态。入参设置为undefined时，取消回调注册。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAccessibilityFocus(callback: AccessibilityFocusCallback | undefined): this;
    /**
     * 该接口在无障碍模式下，可在无障碍控制操作触发前通知注册的回调函数，由注册方决定是否拦截该次无障碍控制操作。对不支持点击操作的组件，即使注册该回调也不会被触发。
     * @param { AccessibilityActionInterceptCallback | undefined } callback - 在无障碍模式且组件支持点击的前提下，在无障碍控制操作触发前通知注册方该次无障碍控制操作，
     *             由注册方决定是否拦截该操作。未开启无障碍模式或组件不支持点击时，回调均不会触发。<br> 入参设置为undefined时，取消回调注册。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAccessibilityActionIntercept(callback: AccessibilityActionInterceptCallback | undefined): this;
    /**
     * 设置组件的文本提示信息，仅在与车机交互的场景下供车机的无障碍服务监听并响应。
     *
     * @param { string | undefined } value - 组件的文本提示信息，仅在与车机交互的场景下供车机的无障碍服务监听并响应。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityTextHint(value: string | undefined): this;
    /**
     * 设置无障碍说明，支持通过Resource引用资源文件。该属性用于为用户进一步说明当前组件，开发人员可为组件设置相对较详细的解释文本，帮助用户理解将要执行的操作。
     * @param { Resource | string | undefined } description - 无障碍说明引用资源，用于为用户进一步说明当前组件，开发人员可为组件的该属性设置相对较详细的解释文本，帮助用户理解将要执行的操作。如帮助用户理解将要执行的操作可能导致什么后果，尤其是当这些后果无法从组件本身属性与无障碍文本中了解到时。若组件既拥有文本属性又拥有无障碍说明属性，则组件被选中时，先播报组件的文本属性，再播报无障碍说明属性的内容。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityDescription(description: Resource | string | undefined): this;
    /**
     * 设置无障碍重要性。该属性用于控制某个组件是否可被无障碍辅助服务所识别。
     * @param { string | undefined } value - 无障碍重要性，用于控制某个组件是否可被无障碍辅助服务所识别。<br/>支持的值为：<br/>
     *             "auto"：当前组件由无障碍辅助服务和ArkUI进行综合判断组件是否可被无障碍辅助服务所识别。
     *         "yes"：当前组件可被无障碍辅助服务所识别。当父组件启用无障碍分组时，设置为"yes"的子组件不受分组约束，在满足屏幕朗读其他规则下仍可聚焦。<br/>"no"：当前组件不可被无障碍辅助服务所识别。
     *         "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。<br/>默认值："auto"<br/>**说明：**
     *         当accessibilityLevel设置成"auto"时，组件是否可被无障碍辅助服务所识别取决于以下多方面因素：<br/>1. 组件是否可被识别由无障碍辅助服务内部判断，自行选择。
     *         2. 若组件的父组件accessibilityGroup属性中isGroup设置为true，无障碍服务将不再关注其子组件内容，组件不可被无障碍辅助服务所识别。
     *         3. 若组件的父组件accessibilityLevel属性设置为"no-hide-descendants"，组件不可被无障碍辅助服务所识别。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityLevel(value: string | undefined): this;
    /**
     * 设置无障碍虚拟子节点。对自绘制组件传入一个CustomBuilder，该CustomBuilder中的组件在后端仅做布局不做显示，辅助应用获取无障碍节点信息时会返回CustomBuilder中的节点信息。
     * 如使用画布组件Canvas时，可以通过虚拟节点设置相应位置和大小匹配的占位组件，让无障碍服务识别到对应区域的自绘制信息。
     *
     * @param { CustomBuilder | undefined } builder - 无障碍虚拟子节点，使开发者可以对自绘制组件传入一个CustomBuilder，该CustomBuilder中的组件在后端仅做布局不做显示，
     *             辅助应用获取无障碍节点信息时会返回CustomBuilder中的节点信息。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
   default accessibilityVirtualNode(builder: CustomBuilder | undefined): this;
    /**
     * 无障碍节点是否选中的状态维护，用于支持多选，表示组件是否被选中。此接口只影响屏幕朗读场景下的组件状态播报信息。
     *
     * @param { boolean | undefined } isCheck - 用于表示组件是否被选中。<br/>支持的值为：<br/>true：当前组件被选中。<br/>false：当前组件未被选中。<br/>
     *             undefined：由组件自行确定选中状态。<br/>默认值：undefined
     *         **说明：**<br/>1. 使用该接口设置true或false后，会默认修改该组件的checkable属性为true。
     *         2. accessibilityChecked属性代表组件是多选模式，而accessibilitySelected属性代表组件是单选模式。
     *     组件不能同时存在两种选择模式，会造成无障碍状态冲突，导致屏幕朗读等无障碍辅助应用无法正确识别选中状态。如使用当前接口设置组件为多选模式（设置为true、false），
     *     则需要保证未使用accessibilitySelected函数设置属性为true或者false，如果已设置，需使用accessibilitySelected函数设置accessibilitySelected属性为undefined
     *     模式。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityChecked(isCheck: boolean | undefined): this;
    /**
     * 无障碍节点是否选中的状态维护，用于支持单选，表示组件是否被选中。此接口只影响屏幕朗读场景下的组件状态播报信息。
     *
     * @param { boolean | undefined } isSelect - 用于表示组件是否被选中。<br/>支持的值为：<br/>true：当前组件被选中。<br/>false：当前组件未被选中。<br/>
     *             undefined：由组件自行确定选中状态。<br/>默认值：undefined
     *         **说明：**
     *         1. accessibilityChecked属性代表组件是多选模式，而accessibilitySelected属性代表组件是单选模式。
     *     组件不能同时存在两种选择模式，会造成无障碍状态冲突，导致屏幕朗读等无障碍辅助应用无法正确识别选中状态。
     *         如使用当前接口设置组件为单选模式（true、false），则需要保证未使用accessibilityChecked函数设置属性为true或者false；
     *         如果已设置，需使用accessibilityChecked函数设置accessibilityChecked属性为undefined模式。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilitySelected(isSelect: boolean | undefined): this;
    /**
     * 设置组件内容的隐私遮罩类型，在屏幕录制或屏幕共享等场景下对组件内容进行隐私遮挡。
     *
     * @param { Array<ObscuredReasons> | undefined } reasons - 设置组件内容的遮罩类型，在屏幕录制或屏幕共享等场景下对组件内容进行隐私遮挡。取值原则：请参考
     *    [ObscuredReasons]{@link ObscuredReasons}枚举定义，如PLACEHOLDER表示使用占位图遮罩。
     *    <br>默认值：[]，未设置遮罩原因时，不对组件内容进行隐私遮罩处理。
     *    <br>隐私遮罩效果仅在[Image]{@link @global:Image}组件、[Text]{@link @global:Text}组件<!--Del-->和[FormComponent]{@link @global:FormComponent}组件
     *    <sup>12+</sup><!--DelEnd-->上生效。
     *    <br>**说明：**
     *    <br>如需在图片加载过程中显示隐私遮罩，需要设置Image组件的宽度和高度；若未设置宽度和高度，图片加载过程中将不会显示隐私遮罩效果。
     *    <br>Text组件设置子组件或设置[属性字符串]{@link @global:StyledString}时，不支持隐私遮罩。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default obscured(reasons: Array<ObscuredReasons> | undefined): this;
    /**
     * 复用id用于标识每个自定义节点的复用类型。
     *
     * @param { string | undefined } id - 可复用自定义节点的id。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default reuseId(id: string | undefined): this;
    /**
    * 复用id用于标识每个@ComponentV2自定义组件的复用类型，用户可以通过它控制子组件的回收和复用。
    *
    * @param { ReuseOptions | undefined } options - 可复用自定义组件的配置参数。
    * @returns { this }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    default reuse(options: ReuseOptions | undefined): this;
    /**
     * 设置宽高动画过程中的组件内容填充方式。
     *
     * @param { RenderFit | undefined } fitMode - 设置宽高动画过程中的组件内容填充方式。<br/>当fitMode的值为undefined时，取默认值。恢复为内容填充方式为
     *     RenderFit.TOP_LEFT的效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default renderFit(fitMode: RenderFit | undefined): this;
    /**
     * Sets the gesture modifier.
     *
     * @param { GestureModifier | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default gestureModifier(modifier: GestureModifier | undefined): this;
    /**
     * 设置组件背景提亮效果。
     *
     * @param { BackgroundBrightnessOptions | undefined } params - 设置组件背景提亮效果，包括：亮度变化速率，提亮程度。<br/>当params的值为undefined时，恢
     *     复为无提亮效果的背景。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundBrightness(params: BackgroundBrightnessOptions | undefined): this;
    /**
     * 为组件绑定自定义手势判定回调。当手势即将成功时，触发用户定义的回调获取结果。
     * >  **说明：**
     * >
     * >  在Text组件中使用该接口时，不支持对点击事件进行自定义手势判定。
     *
     * @param { ((gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult) | undefined } callback - 自定义手势判定回调。当手势即将成功时，触发用户定义的回调获取结果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onGestureJudgeBegin(callback: ((gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult) | undefined): this;
    /**
     * 给组件绑定自定义手势识别器判定回调。
     * 新增exposeInnerGesture参数，用于标识是否将ArkUI系统组合组件中内置组件的手势暴露给开发者。当该参数设置为true时，将ArkUI系统组合组件中内置组件的手势暴露给开发者。
     * 对于不需要暴露ArkUI系统组合组件中内置组件手势的场景，建议采用原有[onGestureRecognizerJudgeBegin]{@link onGestureRecognizerJudgeBegin}接口。若需要暴露该手势，建议使用该接口并将exposeInnerGesture设置为true。
     *
     * @param { GestureRecognizerJudgeBeginCallback | undefined } callback - 给组件绑定自定义手势识别器判定回调，当绑定到该组件的手势即将成功时，会触发用户定义的回调来获取结果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback | undefined): this;
    /**
     * 给组件绑定自定义手势识别器判定回调。
     * 新增exposeInnerGesture参数，用于标识是否将ArkUI系统组合组件中内置组件的手势暴露给开发者。当该参数设置为true时，将ArkUI系统组合组件中内置组件的手势暴露给开发者。
     * 对于不需要暴露ArkUI系统组合组件中内置组件手势的场景，建议采用原有[onGestureRecognizerJudgeBegin]{@link onGestureRecognizerJudgeBegin}接口。若需要暴露该手势，建议使用该接口并将exposeInnerGesture设置为true。
     *
     * @param { GestureRecognizerJudgeBeginCallback | undefined } callback - 给组件绑定自定义手势识别器判定回调，当绑定到该组件的手势即将成功时，会触发用户定义的回调来获取结果。
     * @param { boolean | undefined } exposeInnerGesture - 暴露内部手势标识。<br/>**说明：** <br/>如果是组合组件，此参数设置true，回调中的current参数则会包含组合组件内部的手势识别器。<br>当前仅支持[Tabs]{@link Tabs}，其他组件请不要设置此参数为true。<br/>设置为false时，功能与原接口[onGestureRecognizerJudgeBegin]{@link onGestureRecognizerJudgeBegin}相同。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback | undefined, exposeInnerGesture: boolean | undefined): this;
    /**
     * 提供系统内置手势与响应链上其他组件的手势设置并行关系的回调事件。此接口对应的C API接口为[setInnerGestureParallelTo]{@link setInnerGestureParallelTo}。
     * 当前该接口不支持将系统组合组件中的内置手势（如[Tabs]{@link Tabs}组件等）与其他手势设置并行关系。
     *
     * @param { ShouldBuiltInRecognizerParallelWithCallback | undefined } callback - 系统内置手势与响应链上其他组件的手势设置并行关系的回调事件，当该组件进行触摸碰撞测试时，会触发用户定义的回调来形成手势并行关系。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback | undefined): this;
    /**
     * 提供手势与响应链上其他组件的手势设置并行关系的回调事件。使用callback异步回调。此接口对应的C API接口为[setGestureParallelTo]{@link setGestureParallelTo}。
     *
     * @param { ShouldRecognizerParallelWithCallback | undefined } callback - 手势与响应链上其他组件的手势设置并行关系的回调事件，当该组件进行触摸测试时，会触发用户定义的回调来形成手势并行关系。设置为undefined时取消事件注册。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default shouldRecognizerParallelWith(callback: ShouldRecognizerParallelWithCallback | undefined): this;
    /**
     * 设置组件是否独占事件。
     *
     * @param { boolean | undefined } monopolize - 组件是否独占事件。true表示组件独占事件，false表示组件不独占事件。<br/>默认值：false<br/>**说明：**<br/>1、如果第一根手指触发了组件事件独占，在抬起前又按下了一根手指，则第二根手指的交互继续处于组件独占状态，依次类推。<br/>2、如果开发者通过[parallelGesture]{@link parallelGesture}绑定了与子组件同时触发的手势，如[PanGesture]{@link PanGesture}，子组件设置了独占控制且首个响应事件，则父组件的手势不会响应。
     * @default false
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default monopolizeEvents(monopolize: boolean | undefined): this;
    /**
     * 给组件绑定自定义事件拦截回调。
     * > **说明：**
     * >
     * > 从API version 20开始，该接口支持在[attributeModifier]{@link attributeModifier}中调用。
     *
     * @param { Callback<TouchEvent, HitTestMode> | undefined } callback - 自定义事件拦截回调。在做触摸测试时回调此函数。通过返回值设置组件的[HitTestMode]{@link HitTestMode}。<br/>传入undefined时无效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onTouchIntercept(callback: Callback<TouchEvent, HitTestMode> | undefined): this;
    /**
     * 组件尺寸变化时触发该回调。该回调仅在布局变化导致组件尺寸发生变化时触发。
     * >**说明：**
     * >
     * > 1. 该接口在布局变化导致组件尺寸发生变化时触发，由于计算精度的关系，回调参数中的尺寸值可能与真实物理尺寸存在细微的差异。
     * >
     * > 2. onSizeChange是布局过程中触发的同步回调，直接在其中更改状态变量存在被纳入动画闭包的风险。具体而言，动画会对比动画前的布局与动画闭包后的布局，若onSizeChange的回调在动画前的布局中同步触发，那么onSizeChange回调中所做的变更将与动画闭包中的变更一同纳入动画过程。为了避免此类问题，可在onSizeChange中使用延迟时间为0的[setTimeout]{@link setTimeout}或[postFrameCallback]{@link postFrameCallback}，将UI处理逻辑延后至异步执行。
     *
     * @param { SizeChangeCallback | undefined } event - 目标元素变化前后的尺寸。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onSizeChange(event: SizeChangeCallback | undefined): this;
    /**
     * 设置无障碍焦点绿框的绘制层级。
     *
     * @param { FocusDrawLevel | undefined } drawLevel - 无障碍焦点绿框的绘制层级，用于控制绿框的绘制位置。默认情况下在聚焦节点层级绘制（即绘制聚焦节点本身）。
     *             可选值及含义参见FocusDrawLevel枚举，包括在聚焦节点层级绘制和在Z序控制顶层绘制两种模式。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityFocusDrawLevel(drawLevel: FocusDrawLevel | undefined): this;
    /**
     * 提供在触摸测试结束后，指定手势识别器是否参与后续处理的能力。
     *
     * @param { TouchTestDoneCallback | undefined } callback - 回调函数，用于指定手势识别器是否参与后续处理。在触摸测试结束后，开始识别用户手势之前，会触发该回调来动态指定手势识别器是否参与后续处理。<br/>参数设置undefined时不设置回调。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onTouchTestDone(callback: TouchTestDoneCallback | undefined): this;
    /**
     * 在当前节点及更高优先级节点上的事件和手势被收集完成后触发该回调。该回调可用于干预事件和手势的收集结果。使用callback异步回调。
     *
     * @param { GestureCollectInterceptCallback } callback - 组件进行触摸测试时使用的回调函数。在当前节点及更高优先级节点上的事件和手势收集完成后执行，以干预收集结果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onGestureCollectIntercept(callback: GestureCollectInterceptCallback): this;
    /**
     * 设置组件的系统材质。不同系统材质对应不同的属性影响效果，该接口可以影响背景色backgroundColor、边框颜色borderColor、边框宽度borderWidth、
     * 阴影shadow、材质层滤镜materialFilter效果，影响的属性与设备材质等级相关，参考ImmersiveMaterial。
     *
     * > **说明：**
     * >
     * > - 通过该属性设置组件的系统材质时，仅在Navigation或NavDestination的标题栏，或横向Tabs中barPosition为BarPosition.End的底部TabBar中生效。
     * > - ImmersiveMaterial只有在支持沉浸式材质的设备上设置才有效果，在不支持沉浸式材质的设备上可设置但无效果，
     *     可通过isImmersiveMaterialSupported判断设备是否支持沉浸式材质。在不支持沉浸式材质的设备上，设置ImmersiveMaterial后，组件的样式仍由已设置的通用属性决定，
     *     ImmersiveMaterial不会覆盖任何通用属性。
     * > - 当systemMaterial与其影响的通用属性（背景色backgroundColor、边框颜色borderColor、边框宽度borderWidth、阴影shadow、材质层滤镜materialFilter）同时设置时，
     *     二者会发生冲突。除阴影外，总体原则为后设置的生效；对于阴影属性，哪个生效取决于ImmersiveMaterial的applyShadow参数。
     * > - 对于所有设备算力档位均需要材质颜色的场景，可以通过ImmersiveMaterial的materialColor参数承载，不再设置backgroundColor属性。
     * > - 该样式仅限当前组件使用，不会影响或继承至子组件。
     *
     * @param { SystemUiMaterial | undefined } material - 组件的系统材质对象。仅在支持沉浸式材质的设备上设置才有效果，在不支持沉浸式材质的设备上可设置但无效果，
     *   可通过isImmersiveMaterialSupported判断设备是否支持沉浸式材质。设置为undefined时恢复为无材质的效果，
     *   若同时设置了材质对象影响的通用属性，会恢复至对应通用属性设置的值，冲突的属性由材质对象决定，参考ImmersiveMaterial。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @since 23 static
     */
    default systemMaterial(material: SystemUiMaterial | undefined): this;
    /**
     * 设置组件判断是否需要键盘时触发的回调。主要用于键盘接续场景。当组件获得焦点时，系统会调用该组件绑定的[OnNeedSoftkeyboardCallback]{@link OnNeedSoftkeyboardCallback}回调函数，根据返回值判断是否需要键盘：如果返回值为`true`，则表示该组件需要键盘，键盘将不会收起；如果返回值为`false`，则表示该组件不需要键盘，键盘将收起。
     * 对于不能获焦的组件，本接口不生效。
     * 输入框组件使用该接口并将返回值设置为`false`时，点击输入框将不会拉起键盘。
     * Web组件使用该方法时，如果返回值为`true`，Web组件会判断组件中是否有可编辑节点，如果有可编辑节点才会保留键盘，如果返回值为`false`，无论是否有可编辑节点，键盘都不会保留。
     * XComponent组件使用该方法时，如果返回值为`true`且XComponent组件使用OH_ArkUI_XComponent_SetNeedSoftKeyboard()设置了需要键盘，才会保留键盘，如果返回值为`false`，无论组件如何设置，键盘都不会保留。
     * 当返回值为`true`时，应用的自绘制输入框需要在获焦时主动调用[attach]{@link attach}方法，建立输入法框架和输入法应用的通信，否则点击键盘会失去响应。说明：失焦时输入法框架和输入法应用的通信会断开，获焦时需要重新建立通信。
     * 该接口只适用于对输入法应用接续的场景，对自定义键盘不生效。自定义键盘接续详见[setCustomKeyboardContinueFeature]{@link setCustomKeyboardContinueFeature}。
     *
     * @param { OnNeedSoftkeyboardCallback | undefined } onNeedSoftkeyboardCallback - 事件触发时执行的回调，系统会根据回调的返回值决定是否需要键盘。<br>设置为undefined时，不会触发回调，输入框类组件行为等同返回true。其他组件行为等同返回false。前提条件：组件需可获焦，否则本接口不生效。当返回值为true时，自绘制输入框需在获焦时主动调用[attach]{@link attach}方法建立输入法通信，否则点击键盘会失去响应。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default onNeedSoftkeyboard(onNeedSoftkeyboardCallback: OnNeedSoftkeyboardCallback | undefined): this;
    /**
     * 设置组件的状态播报文本，用于屏幕朗读场景下清晰说明组件当前的实时状态。屏幕朗读时会优先播报该状态文本。
     *
     * @param { string | Resource | undefined } description - 需要播报组件当前状态的语音播报文本。<br/>设置文本超过1000字符时，截取前1000字符进行播报。<br/>
     *             undefined：播报文本默认为空。
     * @returns { this } - 返回当前对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityStateDescription(description: string | Resource | undefined): this;
    /**
     * 设置组件无障碍操作的可选参数，用于限制或修改屏幕朗读等辅助应用发起的操作行为。
     *
     * @param { AccessibilityActionOptions | undefined } option - 无障碍操作的参数，用于限制或者修改无障碍操作下的滑动行为。<br/>
     *             AccessibilityActionOptions中的scrollStep用于设置无障碍操作下的滑动步数。
     *         取值为undefined时scrollStep按1处理。
     * @returns { this } - 返回当前对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityActionOptions(option: AccessibilityActionOptions | undefined): this;
    /**
     * 设置组件的自定义无障碍操作，支持开发者设置一个自定义actions的数组，用于给组件按操作名进行自定义操作的回调绑定。
     *
     * @param { Array<AccessibilityCustomAction> | undefined } actions - 自定义无障碍操作数组，每个操作包含操作名称和回调，用于给组件按操作名进行自定义操作的回调绑定。
     *             <br/>**说明：**<br/>数组长度最大支持16个，超出部分将不生效。
     *         取值为undefined时，不设置自定义操作。
     * @returns { this } - 返回当前对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default accessibilityCustomActions(actions: Array<AccessibilityCustomAction> | undefined): this;
    /**
     * 设置组件源码重定向信息。
     *
     * @param { string } sourceLine - 源码行号。
     * @param { string } [moduleName] - 组件所属模块名。
     * @returns { this } 返回当前组件，用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default debugLine(sourceLine: string, moduleName?: string): this;
    /**
     * 设置组件智慧手势响应行为配置。
     *
     * @param { SmartGestureShortcutOptions } [options] - 组件智慧手势响应配置。<br/>SmartGestureShortcutOptions中enabled用于配置组件是否响应智慧手势。<br/>selectable用于设置组件被智慧手势操作选中后是否展示并保留选中态。<br/>action用于设置智慧手势响应优先级，当前仅支持GestureShortcut.PRIMARY，会使组件在智慧手势的滑动，点击等操作中作为首选响应目标。<br/>建议显式传入，避免因缺省配置导致预期不一致，缺省配置处理参考[SmartGestureShortcutOptions]{@link SmartGestureShortcutOptions}。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default smartGestureShortcut(options?: SmartGestureShortcutOptions): this;
    /**
     * 设置组件的调测标签。未设置时，组件调测标签默认为空字符串。对同一组件多次调用本接口时，后设置的标签会覆盖先前的标签。
     *
     * @param { string | undefined } label - 组件的调测标签，需在整个应用内保持唯一，以便在调测时准确定位和区分节点。对同一组件多次调用本接口时，后设置的标签会覆盖先前的标签。传入undefined时清除调测标签，调测标签默认为空字符串。
     * @returns { this } 返回当前组件，可用于链式调用。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default inspectorLabel(label: string | undefined): this;
    /**
     * 指定屏幕朗读扫动走焦过程中组件的下一个焦点，并支持配置详细参数。
     * 通过AccessibilityNextFocusParams参数，可以配置是否在无障碍下一个焦点处理过程中查找后代节点中的焦点。
     *
     * @param { string } nextId - 下一个被指定聚焦组件的唯一标识id。若唯一标识id无对应组件，则设置的accessibilityNextFocusId不存在，设置无效。
     * @param { AccessibilityNextFocusParams | undefined } nextFocusParams - 无障碍下一个焦点处理的详细参数，用于配置是否在后代节点中查找可聚焦节点。
     *     <br>取值为undefined时，不配置下一个焦点处理的详细参数，不在后代节点中查找焦点。
     * @returns { this } - 返回当前对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default accessibilityNextFocusId(nextId: string, nextFocusParams: AccessibilityNextFocusParams | undefined): this;
    /**
     * 是否绘制组件的双面。
     *
     * @param { boolean | undefined } value - 是否绘制组件的双面。<br/>设置为true表示组件的正面和背面都是可见的。<br/>设置为false表示组件的正面是可见的，旋转时组件的背面是不可见的。<br/>设置为undefined时效果和设置为true时保持一致，默认开启双面绘制。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default doubleSided(value: boolean | undefined): this;
}
/**
 * IDE使用的CommonAttribute
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CommonAttribute = CommonMethod;
/**
 * 浮层的定位。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface OverlayOptions {
    /**
     * 定义对齐方式。
     *
     * @default TopStart
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align?: Alignment;
    /**
     * 设置浮层基于自身左上角的偏移量。浮层默认处于组件左上角。
     *
     * @default - the overlay is in the upper left corner of the component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: OverlayOffset;
}
/**
 * 设置浮层基于自身左上角的偏移量。浮层默认处于组件左上角。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface OverlayOffset {
    /**
     * 横向偏移量。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: double;
    /**
     * 纵向偏移量。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: double;
}
/**
 * 定义模糊段。
 * 元组中第一个元素表示分数。
 * 取值范围为[0,1]，值1表示不透明，0表示完全透明。
 * 第二个元素表示停止位置。
 * 取值范围为[0,1]，值1表示区域结束位置，0表示区域开始位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type FractionStop = [
    double,
    double
];

/**
 * CommonShapeMethod
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface CommonShapeMethod extends CommonMethod {
    /**
     * 设置边框颜色，支持attributeModifier动态设置属性方法，不设置时，默认边框透明度为0，即无边框。
     *
     * @param { ResourceColor | undefined } value - 边框颜色。
     *    <br>默认值：Color.Transparent<br/>异常值undefined和null按照默认值处理，NaN和Infinity按照Color.Black处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default stroke(value: ResourceColor | undefined): this;
    /**
     * 设置填充区域的颜色，支持attributeModifier动态设置属性方法，异常值按照默认值处理。与通用属性foregroundColor同时设置时，后设置的属性生效。
     *
     * @param { ResourceColor | undefined } value - 填充区域颜色。
     *    <br>默认值：Color.Black
     *    <br>异常值undefined、null、NaN和Infinity按照默认值处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fill(value: ResourceColor | undefined): this;
    /**
     * 设置边框绘制起点的偏移量，支持attributeModifier动态设置属性方法。异常值按照默认值处理。
     *
     * @param { double | string | undefined } value - 边框绘制起点的偏移量。
     *    <br>默认值：0<br/>默认单位：vp
     *    <br>异常值undefined和null按照默认值处理，NaN和Infinity会导致strokeDashArray失效。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeDashOffset(value: double | string | undefined): this;
    /**
     * 设置边框端点绘制样式，支持attributeModifier动态设置属性方法。
     *
     * @param { LineCapStyle | undefined } value - 边框端点绘制样式。
     *    <br>默认值：LineCapStyle.Butt
     *    <br>异常值undefined、null、NaN和Infinity按照默认值处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeLineCap(value: LineCapStyle | undefined): this;
    /**
     * 设置边框拐角绘制样式，支持attributeModifier动态设置属性方法。
     *
     * @param { LineJoinStyle | undefined } value - 边框拐角绘制样式。
     *    <br>默认值：LineJoinStyle.Miter
     *    <br>异常值undefined、null、NaN和Infinity按照默认值处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeLineJoin(value: LineJoinStyle | undefined): this;
    /**
     * 设置斜接长度与边框宽度比值的极限值，支持attributeModifier动态设置属性方法。斜接长度表示外边框外边交点到内边交点的距离，边框宽度即strokeWidth属性的值。该属性取值需在strokeLineJoin属性取值LineJoinStyle.Miter时生效。该属性的合法值范围应当大于等于1.0，当取值范围在[0,1)时按1.0处理，其余异常值按默认值处理。
     *
     * @param { double | string | undefined } value - 斜接长度与边框宽度比值的极限值。
     *    <br>默认值：4
     *    <br>异常值undefined、null和NaN按照默认值处理，Infinity会导致stroke失效。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeMiterLimit(value: double | string | undefined): this;
    /**
     * 设置边框透明度，支持attributeModifier动态设置属性方法。该属性的取值范围是[0.0, 1.0]，若给定值小于0.0，则取值为0.0；若给定值大于1.0，则取值为1.0。
     *
     * @param { double | string | Resource | undefined } value - 边框透明度。
     *    <br>默认值：stroke接口设置的透明度
     *    <br>异常值NaN按0.0处理，undefined、null和Infinity按1.0处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeOpacity(value: double | string | Resource | undefined): this;
    /**
     * 设置填充区域透明度，支持attributeModifier动态设置属性方法。
     *
     * @param { double | string | Resource | undefined } value - 填充区域透明度。
     *    <br>默认值：1.0
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fillOpacity(value: double | string | Resource | undefined): this;
    /**
     * 设置边框宽度，支持attributeModifier动态设置属性方法。该属性若为string类型，暂不支持百分比，百分比按照1px处理。
     *
     * @param { Length | undefined } value - 边框宽度，取值范围≥0。
     *    <br>默认值：1
     *    <br>默认单位：vp<br/>异常值undefined、null和NaN按照默认值处理，Infinity按0处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeWidth(value: Length | undefined): this;
    /**
     * 设置是否开启抗锯齿效果，支持attributeModifier动态设置属性方法。
     *
     * @param { boolean | undefined } value - 是否开启抗锯齿效果。
     *    <br>true：开启抗锯齿；false：关闭抗锯齿。
     *    <br>默认值：true
     *    <br>异常值undefined和null按照false处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default antiAlias(value: boolean | undefined): this;
    /**
     * 设置边框的虚线长度和虚线间隙长度，支持attributeModifier动态设置属性方法。取值范围≥0。异常值将按默认值处理。
     *
     * @param { Array<Length> | undefined } value - 定义Rect边框的虚线模式的数组，数组元素交替表示线段长度和间隙长度。
     *    <br>默认值：[]（空数组）
     *    <br>默认单位：vp
     *    <br>异常值undefined和null按照默认值处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeDashArray(value: Array<Length> | undefined): this;
    /**
     * 设置组件是否允许强制深色。该接口需要设置为组件的第一个属性。
     *
     * @param { boolean } value - value表示组件是否允许强制深色。
     *    <br>设置为true时，组件使用强制深色能力。
     *    设置为false时，组件及其子组件不使用强制深色能力，且不受父组件或祖先组件设置的影响。默认值为true。
     * @returns { this }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
     */
    default allowForceDark(value: boolean): this;
}
/**
 * 指定组件级像素取整的方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PixelRoundPolicy {
    /**
     * 组件前部边界取整对齐方式。
     * <br>不设置pixelRound或者设置异常值时按四舍五入规则取整。
     *
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: PixelRoundCalcPolicy;
    /**
     * 组件上部边界取整对齐方式。
     * <br>不设置pixelRound或者设置异常值时按四舍五入规则取整。
     *
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    top?: PixelRoundCalcPolicy;
    /**
     * 组件尾部边界取整对齐方式。
     * <br>不设置pixelRound或者设置异常值时按四舍五入规则取整。
     *
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: PixelRoundCalcPolicy;
    /**
     * 组件底部边界取整对齐方式。
     * <br>不设置pixelRound或者设置异常值时按四舍五入规则取整。
     *
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bottom?: PixelRoundCalcPolicy;
}
/**
 * 线性渐变模糊选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LinearGradientBlurOptions {
    /**
     * 数组中保存的每一个二元数组（取值0-1，小于0则为0，大于1则为1）表示[模糊分数, 模糊位置]；模糊位置需严格递增，开发者传入的数据不符合规范会记录日志，渐变模糊数组中二元数组个数必须大于等于2，否则渐变模糊不生效。undefined表示无fractionStops。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fractionStops: FractionStop[] | undefined;
    /**
     * 渐变模糊方向。undefined表示GradientDirection.Left。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction: GradientDirection | undefined;
}
/**
 * 运动模糊锚点坐标。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MotionBlurAnchor {
    /**
     * 锚点坐标x值，取值范围[0.0, 1.0]，0.0表示组件左边缘，1.0表示组件右边缘，0.5表示水平中心。undefined表示0.0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double | undefined;
    /**
     * 锚点坐标y值，取值范围[0.0, 1.0]，0.0表示组件上边缘，1.0表示组件下边缘，0.5表示垂直中心。undefined表示0.0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double | undefined;
}
/**
 * 运动模糊选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MotionBlurOptions {
    /**
     * 模糊半径，单位：vp，取值范围[0.0, +∞)，建议取值不超过1.0来实现较为美观的效果。传入负数时自动修正为0.0，超出建议值1.0时可能产生非预期效果。undefined表示0.0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius: double | undefined;
    /**
     * 运动模糊锚点坐标，需要与动画缩放[scale]{@link CommonMethod#scale(value: ScaleOptions)}属性的锚点（centerX/centerY）保持一致，否则会产生非预期效果。undefined表示默认MotionBlurAnchor。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: MotionBlurAnchor | undefined;
}
/**
 * 父组件（自定义组件）布局信息。
 *
 * @extends SizeResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GeometryInfo extends SizeResult {
    /**
     * 父组件（自定义组件）边框宽度。
     * 单位为： vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth: EdgeWidth;
    /**
     * 父组件（自定义组件）margin信息。
     * 单位为： vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    margin: Margin;
    /**
     * 父组件（自定义组件）padding信息。
     * 单位为： vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    padding: Padding;
}
/**
 * 子组件布局信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Layoutable {
    /**
     * 子组件测量后的尺寸信息。
     * 单位为： vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    measureResult: MeasureResult;
    /**
     * 系统为子组件分配的唯一标识UniqueID。
     * 取值应为≥0的整数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    uniqueId?: int;
    /**
     * 调用此方法设置子组件的位置信息。
     *
     * @param { Position | undefined } position - 绝对位置，包含x和y坐标（原点为父组件左上角，x轴向右为正，y轴向下为正）。单位：vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    layout(position: Position | undefined): void;
    /**
     * 调用此方法获取子组件的margin信息，返回其外边距。
     *
     * @returns { DirectionalEdgesT<double> | undefined } 子组件的外边距对象，包含四个方向的边距值。单位：vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getMargin(): DirectionalEdgesT<double> | undefined;
    /**
     * 调用此方法获取子组件的padding信息，返回其内边距。
     *
     * @returns { DirectionalEdgesT<double> | undefined } 子组件的内边距对象，包含四个方向的内边距值。单位：vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPadding(): DirectionalEdgesT<double> | undefined;
    /**
     * 调用此方法获取子组件的borderWidth信息，返回其边框宽度。
     *
     * @returns { DirectionalEdgesT<double> | undefined } 子组件的边框宽度对象，包含四个方向的边框宽度值。单位：vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getBorderWidth(): DirectionalEdgesT<double> | undefined;
}
/**
 * 子组件位置信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Measurable {
    /**
     * 系统为子组件分配的唯一标识UniqueID。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    uniqueId?: int;
    /**
     * 调用此方法限制子组件的尺寸范围，返回测量后的组件布局信息。
     *
     * @param { ConstraintSizeOptions | undefined } constraint - 约束尺寸，包含minWidth、maxWidth、minHeight、maxHeight等约束条件，用于限制子组件的尺寸范围。取值原则：minWidth≤maxWidth，minHeight≤maxHeight；单位：vp。
     * @returns { MeasureResult | undefined } 测量后的组件布局信息，包含测量后的宽度和高度。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    measure(constraint: ConstraintSizeOptions | undefined): MeasureResult | undefined;
    /**
     * 获取子组件的margin信息，返回其外边距。
     *
     * @returns { DirectionalEdgesT<double> | undefined } 子组件的外边距对象，包含四个方向的边距值。单位：vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getMargin(): DirectionalEdgesT<double> | undefined;
    /**
     * 获取子组件的padding信息，返回其内边距。
     *
     * @returns { DirectionalEdgesT<double> | undefined } 子组件的内边距对象，包含四个方向的内边距值。单位：vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPadding(): DirectionalEdgesT<double> | undefined;
    /**
     * 获取子组件的borderWidth信息，返回其边框宽度。
     *
     * @returns { DirectionalEdgesT<double> | undefined } 子组件的边框宽度对象，包含四个方向的边框宽度值。单位：vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getBorderWidth(): DirectionalEdgesT<double> | undefined;
}
/**
 * 组件尺寸信息。
 * > **说明：**
 * >
 * >- 自定义布局暂不支持LazyForEach写法。
 * >- 使用builder形式的自定义布局创建，自定义组件的build()方法内只允许存在this.builder()，即示例的推荐用法。
 * >- 父容器（自定义组件）上设置的尺寸信息，除aspectRatio之外，优先级小于onMeasureSize设置的尺寸信息。
 * >- 子组件设置的位置信息，offset、position、markAnchor优先级大于onPlaceChildren设置的位置信息，其他位置设置属性不生效。
 * >- 使用自定义布局方法时，需要同时调用onMeasureSize和onPlaceChildren方法，否则可能出现布局异常。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SizeResult {
    /**
     * 测量后的宽。
     * 单位为： vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width: double;
    /**
     * 测量后的高。
     * 单位为： vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height: double;
}
/**
 * 测量后的组件布局信息。
 *
 * @extends SizeResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MeasureResult extends SizeResult {
}
/**
 * NavDestination组件信息，由系统返回给开发者。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NavDestinationInfo = uiObserver.NavDestinationInfo;
/**
 * NavigationInfo实例对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NavigationInfo = uiObserver.NavigationInfo;
/**
 * RouterPageInfo实例对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type RouterPageInfo = uiObserver.RouterPageInfo;
/**
 * UIContext.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type UIContext = _UIContext;
/**
 * DrawContext.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DrawContext = _DrawContext;
/**
 * 导入VisualEffect类型对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type VisualEffect = uiEffect.VisualEffect;
/**
 * 导入Filter类型对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Filter = uiEffect.Filter;
/**
 * 系统材质对象基类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi [since 23 - 24]
 * @publicapi [since 26.0.0]
 * @stagemodelonly
 * @since 23 static
 */
export type SystemUiMaterial = uiMaterial.Material;

/**
 * Blender
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type Blender = uiEffect.Blender;
/**
 * Blender基础类型，创建各类Blender效果的入口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 static
 */
export type BlenderBase = uiEffect.BlenderBase;
/**
 * 从promptAction导入弹出框控制器类型
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PromptActionDialogController = promptAction.DialogController;
/**
 * 位置和尺寸类型，用于描述组件的位置和宽高。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RectResult {
    /**
     * 水平方向横坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 竖直方向纵坐标。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 内容宽度大小。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width: double;
    /**
     * 内容高度大小。
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height: double;
}
/**
 * 区域变化相关的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface AreaChangeOptions {
    /**
     * 区域变化的预期更新时间间隔，单位为ms。当该字段大于2^31-1时，默认取值为2^31-1。
     * 默认值：1000
     *
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    expectedUpdateInterval?: int;
}
/**
 * 组件区域变化事件的回调类型。
 *
 * @param { Area } oldValue - 区域变化前的信息，包括：目标元素的宽度、高度、相对于父元素的坐标和目标元素左上角在当前窗口坐标系中的位置坐标。
 * @param { Area } newValue - 区域变化后的信息，包括：目标元素的宽度、高度、相对于父元素的坐标和目标元素左上角在当前窗口坐标系中的位置坐标。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type AreaChangeCallback = (oldValue: Area, newValue: Area) => void;
/**
 * 光标相对输入框的位置信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CaretOffset {
    /**
     * 光标所在位置的索引值，从0开始计数，取值范围为[0, 文本长度]。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    index: int;
    /**
     * 光标相对输入框的x坐标值，单位px。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: int;
    /**
     * 光标相对输入框的y坐标值，单位px。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: int;
}
/**
 * 用于设置输入框插入字符时的配置选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextContentControllerOptions {
    /**
     * 插入文本的位置，取值范围[0, 文本长度]。超出范围时自动修正到有效边界位置。
     *
     * > **说明：**
     * >
     * > 当需要在指定位置（而非末尾）插入文本时传入此参数。不传入时默认插入到文本末尾。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: int;
}
/**
 * TextContentControllerBase
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class TextContentControllerBase {
    /**
     * 返回当前光标所在位置信息。
     *
     * > **说明**
     * >
     * > - 在当前帧更新光标位置同时调用该接口，该接口不生效。
     * >
     * > - 在Search组件中，返回的位置信息是相对Search组件中搜索图标的偏移值。
     * >
     * > - 在Search组件中，不输入文本时，返回值中有相对Search组件的位置信息。
     * >
     * > - 返回值中的位置信息是光标相对于可编辑组件的位置。
     * >
     * > - 当无法获取光标位置时（例如[TextInputController]{@link TextInputController}未与[TextInput]{@link @global:TextInput}组件绑定时），
     * 该接口返回undefined。
     *
     * @returns { CaretOffset | undefined } 光标相对输入框的位置。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getCaretOffset(): CaretOffset | undefined;
    /**
     * 获取已编辑文本内容区域相对于组件的位置和大小，返回值的单位为像素。
     * > **说明**
     * > - 初始不输入文本时，返回值中有相对组件的位置信息，大小为0。
     * > - 返回值中的位置信息是第一个字符相对于可编辑组件的位置。
     * > - 在Search组件中，返回的位置信息是相对Search组件中搜索图标的偏移值。
     * > - 有输入时，返回信息中的宽度是组件编辑区域的固定宽度。
     *
     * @returns { RectResult | undefined } 获取已编辑文本内容区域相对组件的位置和大小。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getTextContentRect(): RectResult | undefined;
    /**
     * 获取已编辑文本内容的行数。
     *
     * @returns { int | undefined } 已编辑文本内容行数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getTextContentLineCount(): int | undefined;
    /**
     * 在已编辑文本的指定位置插入文本，默认插入至文本末尾。
     *
     * 拖拽文本的状态下不生效。
     *
     * `addText`仅影响应用内部的UI表现，不影响输入法应用的内部逻辑。预上屏状态由输入法管理，应用层调用`addText`/`deleteText`会破坏输入法的状态管理，因此应避免在预上屏状态下调用`addText`。
     *
     * > **说明**
     * >
     * > 当controller未绑定组件或绑定controller的组件被释放时，该接口不生效。
     *
     * @param { string } text - 插入的文本内容。
     * @param { TextContentControllerOptions } [textOperationOptions] - 插入文本的配置选项，用于自定义插入位置等参数。
     * @returns { int | undefined } 插入文本后光标的位置。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    addText(text: string, textOperationOptions?: TextContentControllerOptions): int | undefined;
    /**
     * 触发属性字符串的绑定或更新。
     *
     * > **说明：**
     * >
     * > 当controller未绑定组件或绑定controller的组件被释放时，该接口不生效。
     *
     * @param { StyledString } styledString - 设置属性字符串样式的Placeholder，其优先级高于纯文本的placeholder属性。<br>Placeholder不支持属性字符串事件手势，
     * 超链接跳转。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setStyledPlaceholder(styledString: StyledString): void;
    /**
     * 删除已编辑文本的指定区域的内容。
     *
     * 拖拽文本的状态下不生效。
     *
     * `deleteText`仅影响应用内部的UI表现，不影响输入法应用的内部逻辑。预上屏状态由输入法管理，应用层调用`addText`/`deleteText`会破坏输入法的状态管理，
     * 因此应避免在预上屏状态下调用`deleteText`。
     *
     * > **说明**
     * >
     * > 当controller未绑定组件或绑定controller的组件被释放时，该接口不生效。
     * > **与[deleteBackward]{@link TextContentControllerBase#deleteBackward}的差异：**
     * > - deleteText支持范围删除，可删除任意指定区域的文本；deleteBackward模拟用户删除操作，删除光标前一个字符或已选中文本。
     * > - deleteText在预上屏状态下应避免调用，deleteBackward在预上屏场景下不支持使用。
     * > - 建议根据删除需求选择：需要删除指定范围文本时使用deleteText，需要删除光标前字符时使用deleteBackward。
     *
     * @param { TextRange } [range] - 删除文本的范围，包括删除文本的起始位置和终止位置。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deleteText(range?: TextRange): void;
    /**
     * 返回当前文本的选择范围。
     *
     * @returns { TextRange | undefined } 文本当前的选择范围，未选中返回光标位置。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getSelection(): TextRange | undefined;
    /**
     * 通知输入法清除当前的预上屏文本内容。
     *
     * > **说明**
     * > 当controller未绑定组件或绑定controller的组件被释放时，该接口不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    clearPreviewText(): void;
    /**
     * 获取指定范围的文本内容。可用于以下场景：
     * - 文本编辑器中获取用户选中的文本内容进行处理。
     * - 内容校验时获取特定范围的文本进行检查。
     * - 文本处理应用中提取部分文本内容进行分析或转换。
     *
     * @param { TextRange } [range] - 获取文本的范围，包括需要获取文本的起始位置和终止位置。<br>
     * 未指定范围时，默认将获取全部文本。未指定获取文本的起始位置，则默认从下标0开始；未指定获取文本的终止位置，则默认以文本末尾作为结束点。
     * @returns { string | undefined } 指定范围的文本内容。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    getText(range?: TextRange): string | undefined;

    /**
     * 删除基础控制器`controller`绑定的文本输入框内文本光标前的一个字符。如果在调用此功能前已用鼠标或键盘选中了部分文本，则会删除被选中的文本。
     *
     * 拖拽文本的状态下不生效。
     *
     * `deleteBackward`仅影响应用内部的UI表现，不影响输入法应用的内部逻辑，不支持在预上屏场景下使用。
     *
     * > **说明**
     * > 当controller未绑定组件或绑定controller的组件被释放时，该接口不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deleteBackward(): void;

    /**
     * 将起始索引与结束索引传递给与其绑定的输入框（TextInput、TextArea、Search）组件，并将此范围内的文字滚动到可视区域。
     *
     * > **说明**
     * > 当controller未绑定组件或绑定controller的组件被释放时，该接口不生效。
     *
     * @param { TextRange } [range] - 滚动到可视区域的文本范围，包括文本起始位置和终止位置。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollToVisible(range?: TextRange): void
}
/**
 * 表示滚动容器的内容裁剪模式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ContentClipMode {
    /**
     * 按内容区裁剪，对应图中的绿色区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CONTENT_ONLY = 0,
    /**
     * 按组件区域裁剪，对应图中的整个蓝色区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOUNDARY = 1,
    /**
     * 按组件配置的SafeArea区域裁剪，对应图中的整个黄色区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SAFE_AREA = 2
}

/**
 * CommonScrollableMethod
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ScrollableCommonMethod extends CommonMethod {
    /**
     * 设置滚动条状态。
     *
     * @param { BarState | undefined } barState - 滚动条状态。<br>默认值：<em>BarState.Auto</em>
     *     适用于<em>List</em>、<em>Grid</em>和<em>Scroll</em>组件，以及<em>BarState.Off</em>
     *     适用于<em>WaterFlow</em>组件。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default scrollBar(barState: BarState | undefined): this;
    /**
     * 设置滚动条的颜色。
     *
     * @param { Color | int | string | Resource | undefined } color - 滚动条的颜色。
     *     <br>儿童智能表的默认值颜色为'#ffffff'，表示白色（100%不透明度）。其他设备默认值为'#182431'，表示深蓝灰色（40%不透明度）。
     *     <br>number为HEX格式颜色，支持rgb或者argb，示例：0xffffff。string为rgb或者argb格式颜色，示例：'#ffffff'。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default scrollBarColor(color: Color | int | string | Resource | undefined): this;
    /**
     * 设置滚动条的宽度。
     *
     * @param { double | string | undefined } value - 滚动条的宽度。<br>默认值：<em>4</em>
     *     <br>单位：vp
     *     <br>设置为小于0的值时，按默认值处理。
     *     设置为<em>0</em>时，不显示滚动条。
     *     <br/>取值为undefined时，按默认值处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default scrollBarWidth(value: double | string | undefined): this;
    /**
     * 设置滚动条的宽度。
     *
     * @param { Resource | undefined } value  - 滚动条的宽度。
     *     <br>单位：vp
     *     <br>默认值：<em>4</em>
     *     <br>设置为小于0的值时，按默认值处理。
     *     设置为<em>0</em>时，不显示滚动条。
     *     <br/>取值为undefined时，按默认值处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default scrollBarWidth(value: Resource | undefined): this;
    /**
     * 设置滚动条的边距。
     *
     * @param { ScrollBarMargin | undefined } margin - 滚动条起始、末尾边距。
     *     <br>儿童智能表默认值：{start: LengthMetrics.vp(42), end: LengthMetrics.vp(0)}
     *     <br>其他设备默认值：{start: LengthMetrics.vp(0), end: LengthMetrics.vp(0)}
     *     <br>取值为undefined时，滚动条起始、末尾边距默认为0。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default scrollBarMargin(margin: ScrollBarMargin | undefined): this;
    /**
     * 设置滚动条自动调整边距，以避让组件的padding、safeAreaPadding和
     * contentStartOffset/contentEndOffset区域。
     *
     * @param { boolean | undefined } enable - 是否自动调整边距。
     *     <br>默认值：false。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default autoAdjustScrollBarMargin(enable: boolean | undefined): this;
    /**
     * 设置边缘滑动效果。
     *
     * @param { EdgeEffect | undefined } edgeEffect - 滚动组件的边缘滑动效果，支持弹簧效果和阴影效果。
     *     <br>默认值：Grid、Scroll、WaterFlow组件默认为EdgeEffect.None，List组件默认EdgeEffect.Spring。
     *     <br>取值为undefined时，按默认值处理。
     * @param { EdgeEffectOptions } [options] - 组件内容大小小于组件自身时，是否开启滑动效果。从API version 18开始，支持设置边缘效果生效的边缘。设置为{ alwaysEnabled：true }会开启滑动效果，{ alwaysEnabled：false }不开启。
     *     <br>默认值：List、Grid、WaterFlow组件默认{ alwaysEnabled：false }，Scroll组件默认{ alwaysEnabled：true }。从API version 18开始，默认增加effectEdge字段，取值为EffectEdge.START | EffectEdge.END。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default edgeEffect(edgeEffect: EdgeEffect | undefined, options?: EdgeEffectOptions): this;
    /**
     * 设置是否开启边缘渐隐效果。
     *
     * @param { boolean | undefined } enabled - 是否开启边缘渐隐效果。
     * @param { FadingEdgeOptions } [options] - 边缘渐隐参数对象。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fadingEdge(enabled: boolean | undefined, options?: FadingEdgeOptions): this;
    /**
     * 设置嵌套滚动选项。
     *
     * @param { NestedScrollOptions | undefined } value - 嵌套滚动选项。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default nestedScroll(value: NestedScrollOptions | undefined): this;
    /**
     * 设置是否支持滚动手势。
     *
     * @param { boolean | undefined } value - 是否支持手指或鼠标滚动手势。设置为true时支持，设置为false时不支持，但不影响控制器[Scroller](ts-container-scroll.md#scroller)的滚动接口和[backToTop](#backtotop15)属性。
     *     <br>默认值：true
     *     <br/>取值为undefined时，按默认值处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableScrollInteraction(value: boolean | undefined): this;
    /**
     * 设置摩擦系数。
     *
     * @param { double | Resource | undefined } value - 摩擦系数。
     *     <br/>默认值：非Wearable设备为0.6，Wearable设备为0.9。
     *     <br/>从API version 11开始，非Wearable设备默认值为0.7。
     *     <br/>从API version 12开始，非Wearable设备默认值为0.75。
     *     <br/>取值范围：(0, +∞)，设置为小于等于0的值时，按默认值处理。
     *     <br/>取值为undefined时，按默认值处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default friction(value: double | Resource | undefined): this;
    /**
     * 设置从内容起始位置到可滚动显示区域边界的偏移量。
     *
     * @param { double | Resource | undefined } offset - 内容区域起始偏移量。滚动组件滚动到起始位置时，
     *     内容与组件显示区域边界保留指定距离。
     *     <br>默认值：0
     *     <br>单位：vp
     *     <br>取值范围：[0, +∞)
     *     <br>取值为undefined时，按默认值处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default contentStartOffset(offset: double | Resource | undefined): this;
    /**
     * 设置从内容末尾位置到可滚动显示区域边界的偏移量。
     *
     * @param { double | Resource | undefined } offset - 内容区末尾偏移量。滚动组件滚动到末尾位置时，
     *     内容与组件显示区域边界保留指定距离。
     *     <br>单位：vp，<br>取值为undefined时，按默认值处理。默认值：<em>0</em>。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default contentEndOffset(offset: double | Resource | undefined): this;
    /**
     * 滚动组件开始拖动时触发。
     *
     * @param { VoidCallback | undefined } handler - 滚动组件开始拖动时触发的回调。<br/>当设置为undefined时，重置该事件回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onWillStartDragging(handler: VoidCallback | undefined): this;
    /**
     * 滚动组件滑动离手时触发，使用鼠标滚轮滑动时不会触发。
     *
     * @param { OnWillStopDraggingCallback | undefined } handler - 滚动组件滑动离手时触发的回调。<br/>当设置为undefined时，重置该事件回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onWillStopDragging(handler: OnWillStopDraggingCallback | undefined): this;
    /**
     * 滚动组件结束拖动时触发。
     *
     * @param { OnDidStopDraggingCallback | undefined } handler - 滚动组件结束拖动时触发的回调。<br/>当设置为undefined时，重置该事件回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onDidStopDragging(handler: OnDidStopDraggingCallback | undefined): this;
    /**
     * 滚动组件将要开始惯性动效时触发。
     *
     * @param { VoidCallback | undefined } handler - 滚动组件将要开始惯性动效时触发的回调。
     *     <br>当设置为undefined时，重置该事件回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onWillStartFling(handler: VoidCallback | undefined): this;
    /**
     * 滚动组件结束惯性动效后触发。
     *
     * @param { VoidCallback | undefined } handler - 滚动组件结束惯性动效后触发的回调。
     *     <br>当设置为undefined时，重置该事件回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onDidStopFling(handler: VoidCallback | undefined): this;
    /**
     * 设置是否支持左键按下拖动滚动。
     * 
     * @param { boolean | undefined } enabled - 是否支持左键按下拖动滚动。
     *    <br>true：支持鼠标左键按下拖动滚动。
     *    <br>false：不支持鼠标左键按下拖动滚动。
     *    <br>undefined：使用默认值。
     *    <br>默认值：API版本26.1.0之前为false。从API版本26.1.0开始，当可滚动组件水平滚动时为true，否则为false。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default enableScrollWithMouse(enabled: boolean | undefined): this;
    /**
     * 滚动组件到达起始位置时触发。
     *
     * @param { function | undefined } event - 滚动组件到达起始位置时触发的回调。
     *     <br>当设置为undefined时，重置该事件回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onReachStart(event: (() => void) | undefined): this;
    /**
     * 滚动组件到达末尾位置时触发。
     *
     * @param { function | undefined } event - 滚动组件到达末尾位置时的回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onReachEnd(event: (() => void) | undefined): this;
    /**
     * 当用户手指拖动滚动组件或其滚动条，滚动组件开始滚动时
     * 触发。
     *
     * @param { function | undefined } event - 滚动开始时的回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onScrollStart(event: (() => void) | undefined): this;
    /**
     * 用户手指离开屏幕后，滚动停止时触发。
     *
     * @param { function | undefined } event - 滚动停止时的回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onScrollStop(event: (() => void) | undefined): this;
    /**
     * 限制跟手滑动结束后，惯性动效开始时的最大初始速度。
     *
     * @param { double | undefined } speedLimit - 惯性动效开始时的最大初始速度。
     *     <br>默认值：<em>9000</em>
     *     <br>单位：vp/s
     *     <br>取值范围：(0, +∞)，设置为小于等于0的值时，按默认值处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default flingSpeedLimit(speedLimit: double | undefined): this;
    /**
     * 设置滚动容器的内容层裁剪区域。
     *
     * @param { ContentClipMode | RectShape | undefined } clip - ContentClipMode枚举值或自定义裁剪区域。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default clipContent(clip: ContentClipMode | RectShape | undefined): this;
    /**
     * 设置表冠响应事件灵敏度。
     *
     * @param { CrownSensitivity | undefined } sensitivity - 表冠响应灵敏度，默认值为{ MEDIUM }。
     * @returns { this } 返回当前滚动组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    /**
     * 设置滚动组件是否支持点击状态栏回到顶部。
     *
     * @param { boolean | undefined } backToTop - 设置滚动组件是否支持点击状态栏
     *     回到顶部。<br>默认值：<em>false</em>
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backToTop(backToTop: boolean | undefined): this;
    /**
     * 设置滚动条滑轨高度。
     *
     * @param { LengthMetrics | undefined } height - 滚动条滑轨高度。
     *     <br>值必须大于等于0。设置为undefined或小于0时，按默认值
     *     处理；设置为0时，不显示滚动条。
     *     <br>默认值：自适应滚动组件高度。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default scrollBarHeight(height: LengthMetrics | undefined): this;

    /**
     * 设置滚动组件是否支持键盘方向键滚动。开启后，滚动组件在获焦且未激活焦点态时会响应键盘方向键滚动。未通过该接口设置时，默认不支持键盘方向键滚动。
     *
     * @param { boolean | undefined } enabled - 是否支持键盘方向键滚动。
     *     <br/>true：支持键盘方向键滚动。
     *     <br/>false：不支持键盘方向键滚动。
     *     <br/>undefined：不支持键盘方向键滚动。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    default enableScrollWithKeyboard(enabled: boolean | undefined): this;
}
/**
 * 滚动组件实际滚动的偏移量。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ScrollResult {
    /**
     * 获取滚动组件实际滚动的偏移量，单位为vp。
     * @returns { double } 滚动组件实际滚动的偏移量，单位vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    get offsetRemain(): double;

    /**
     * 设置滚动组件实际滚动的偏移量，单位为vp。
     * @param { double } offsetRemain - 滚动组件实际滚动的偏移量，单位vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    set offsetRemain(offsetRemain: double);
}
/**
 * 在滚动前调用，以允许开发者控制滚动组件的实际滚动偏移量。
 *
 * @param { double } scrollOffset - 相对于上一帧的偏移量，滚动组件的内容向上滚动时偏移量为正，向下滚动时偏移量为负。单位vp。
 * @param { ScrollState } scrollState - 当前滑动状态。
 * @param { ScrollSource } scrollSource - 当前滑动操作的来源。
 * @returns { undefined | ScrollResult } 返回ScrollResult时按照开发者指定的相对上一帧的偏移量滑动；
 *     不返回时按回调参数scrollOffset滑动。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnWillScrollCallback = (scrollOffset: double, scrollState: ScrollState, scrollSource: ScrollSource) => (undefined | ScrollResult);
/**
  * 滚动组件滑动时触发的回调。
  *
  * @param { double } scrollOffset - 相对于上一帧的偏移量，滚动组件的内容向上滚动时偏移量为正，向下滚动时偏移量为负。单位vp。
  * @param { ScrollState } scrollState - 当前滑动状态。
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
export type OnScrollCallback = (scrollOffset: double, scrollState: ScrollState) => void;
/**
 * 滚动组件滑动离手时触发的回调。
 *
 * @param { double } velocity - 滑动离手速度，滚动组件的内容向上滚动时速度为正，向下滚动时速度为负。<br/>单位vp/s。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnWillStopDraggingCallback = (velocity: double) => void;
/**
 * 滚动组件在结束拖拽时触发的回调。
 *
 * @param { boolean } willFling - 结束拖拽后是否会有惯性动效。返回true代表拖拽结束后有惯性动效，返回false代表没有惯性动效。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnDidStopDraggingCallback = (willFling: boolean) => void;
/**
 * 开始拖拽列表或网格元素时触发的回调。
 *
 * @param { ItemDragInfo } event - 拖拽点的信息。
 * @param { int } itemIndex - 被拖拽列表元素索引值。
 * @returns { CustomBuilder | undefined } 返回CustomBuilder用于构建被拖拽元素的拖拽图。返回void表示不能拖拽。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnItemDragStartCallback = (event: ItemDragInfo, itemIndex: int) => (CustomBuilder | undefined);
/**
  * 即将启动多选长按聚拢动画时，触发用于获取选中数量的回调。
  *
  * @returns { boolean | int }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
export type OnGetPreviewBadgeCallback = () => (boolean | int);
/**
 * 定义OnVisibleIndexesChange使用的回调类型。
 *
 * @param { int } start - 可视区域起始位置的索引值。
 * @param { int } end - 可视区域终止位置的索引值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnVisibleIndexesChangeCallback = (start: int, end: int) => void;
/**
 * 定义数据源拖拽回调。
 *
 * @param { int } from - 数据源拖拽起始索引号。取值范围是[0, 数据源长度-1]。
 * @param { int } to - 数据源拖拽目标索引号。取值范围是[0, 数据源长度-1]。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnMoveHandler = (from: int, to: int) => void;
/**
 * 定义数据源拖拽事件回调。用于响应不同的拖拽操作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ItemDragEventHandler {
    /**
     * 长按时触发的回调，不设置时不触发该回调。
     * - 参数index为长按时当前目标的索引号，取值范围是[0, 数据源长度-1]。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onLongPress?: Callback<int>;
    /**
     * 在页面跟手滑动开始时触发的回调，不设置时不触发该回调。
     * - 参数index为拖拽开始时当前目标的索引号，取值范围是[0, 数据源长度-1]。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDragStart?: Callback<int>;
    /**
     * 在页面跟手滑动过程中经过其他组件时触发的回调，不设置时不触发该回调。
     * - 参数from为拖拽起始索引号，参数to为当前经过的目标索引号，取值范围均是[0, 数据源长度-1]。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onMoveThrough?: OnMoveHandler;
    /**
     * 在页面跟手滑动结束时触发的回调，不设置时不触发该回调。
     * - 参数index为拖拽结束时当前目标的索引号，取值范围是[0, 数据源长度-1]。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDrop?: Callback<int>;
}
/**
 * Define DynamicNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DynamicNode {
    /**
     * 设置拖拽排序数据移动回调。
     *
     * @param { OnMoveHandler | undefined } handler
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onMove(handler: OnMoveHandler | undefined): this;
    /**
     * 拖拽排序数据移动回调。当父容器组件为[List]{@link List}或[Grid]{@link Grid}，并且ForEach/LazyForEach/Repeat每次迭代都生成一个ListItem或GridItem组件时才生效。调用后开启拖拽排序功能；拖拽排序离手后，如果数据位置发生变化，将触发handler回调，上报数据移动起始索引号和目标索引号。需要在回调中修改数据源，并确保数据仅顺序发生变化，才能正常执行落位动画。
     *
     * @param { OnMoveHandler | undefined } handler - 拖拽排序数据移动回调。当数据位置因拖拽发生变化时触发，需在回调中根据起始索引号和目标索引号修改数据源。
     * @param { ItemDragEventHandler } eventHandler
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onMove(handler: OnMoveHandler | undefined, eventHandler: ItemDragEventHandler): this;
}
/**
 * edgeEffect属性参数对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EdgeEffectOptions {
    /**
     * 组件内容大小小于组件自身时，设置是否开启滑动效果。设置为true开启滑动效果，设置为false关闭滑动效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    alwaysEnabled: boolean;
    /**
     * 设置边缘效果生效的边缘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    effectEdge?: int;
}
/**
 * 表示当前边缘效果要生效的边缘。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum EffectEdge {
    /**
     * 起始边生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    START = 1,
    /**
     * 末尾边生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    END = 2
}
/**
 * 维护List组件或ListItemGroup组件的子组件在主轴方向的大小信息，仅支持一对一绑定到List组件或ListItemGroup组件。
 *
 * > **说明：**
 * >
 * > - 提供的主轴方向大小信息必须与子组件实际在主轴方向的大小一致，子组件在主轴方向大小变化或者增删子组件时都必须通过ChildrenMainSize对象方法通知List组件或ListItemGroup组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ChildrenMainSize {
    /**
     * ChildrenMainSize有参构造函数。
     *
     * @param { double } childDefaultSize - 子组件在主轴方向的默认大小。<br/>单位：vp<br/>**说明：** <br/>必须是有限的非负数值，否则抛出异常。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(childDefaultSize: double);
    /**
     * 修改子组件在主轴方向的默认大小。
     *
     * @param { double } value - 子组件在主轴方向的默认大小。<br/>单位：vp<br/>**说明：** <br/>必须是有限的非负数值，否则抛出异常。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    set childDefaultSize(value: double);
    /**
     * 获取子组件在主轴方向的默认大小。
     *
     * @returns { double } - 子组件在主轴方向的默认大小。<br/>单位：vp <br/>取值范围：[0, +∞)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    get childDefaultSize(): double;
    /**
     * 批量增删改子组件在主轴方向的大小信息。
     *
     * @param { int } start - 从0开始计算的索引值，表示要开始修改子组件在主轴方向大小信息的位置。<br/>**说明：** <br/>1. 必须是有限的非负数值，否则抛出异常。<br/>2. 非整数会被截断为
     *     整数。<br/>3. 超过最大索引值不生效。<br/>取值范围：[0, +∞)
     * @param { int } [deleteCount] - 从start开始删除的大小信息的数量。<br/>**说明：** <br/>1. 必须是有限的非负数值，否则处理为0。<br/>2. 非整数会被截断为整数。
     *     <br/>3. start + deleteCount - 1可以超过最大索引值，会删除索引值start开始之后的所有子组件的大小信息。<br/>默认值为+∞。 <br/>取值范围：[0, +∞)
     * @param { Array<double> } [childrenSize] - 要在start位置插入的所有子组件的主轴方向的大小。<br/>Array中各个数值单位：vp
     *     <br/>**说明：** <br/>1.数组中数值如果是有限的非负值，则认为是指定的大小，后续不随默认大小的变化而变化。
     *     <br/>2. 数组中数值如果不是有限的非负值，会被处理成默认大小，后续会随默认大小的变化而变化。<br/>默认值为空数组。 <br/>取值范围：[0, +∞)
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     * @example splice(1, 0, [100])，在第一个子组件后插入一个主轴大小为100vp的子组件。
     * splice(1, 1)，删除第二个子组件。
     * splice(1, 2, [100, 100])，将第二个和第三个子组件的主轴大小修改为100vp。
     */
    splice(start: int, deleteCount?: int, childrenSize?: Array<double>): void;
    /**
     * 修改指定索引值对应的子组件的主轴方向的大小信息。
     *
     * @param { int } index - 从0开始计算的索引值，表示要开始修改子组件在主轴方向大小信息的位置。<br/>**说明：** <br/>1. 必须是有限的非负数值，否则抛出异常。<br/>2. 非整数会被截断为
     *     整数。<br/>3. 超过最大索引值不生效。 <br/>取值范围：[0, +∞)
     * @param { double } childSize - 要更新成的大小。<br/>单位：vp <br/>**说明：** <br/>1.数值如果是有限的非负值，则认为是指定的大小，后续不随默认大小的变化而变化。
     *     <br/>2. 数值如果不是有限的非负值，会被处理成默认大小，后续会随默认大小的变化而变化。 <br/>取值范围：[0, +∞)
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    update(index: int, childSize: double): void;
}

/**
 * List/Grid组件编辑模式选项属性参数对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EditModeOptions {
    /**
     * 是否启用多选聚拢动画。设置true时启用聚拢动画，设置为false时关闭聚拢动画。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableGatherSelectedItemsAnimation?: boolean;

    /**
     * 即将启动多选长按聚拢动画时，触发用于获取选中数量的回调。缺省时用Grid或List显示范围内选中item的数量作为
     * 多选长按聚拢动画后菜单预览图的角标。
     * 返回false表示不显示角标。
     * 返回true表示显示选中数量角标，对应Grid或List显示范围内选中item数量。
     * 返回数字时默认显示角标，该数字表示角标中需要显示的数量。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onGetPreviewBadge?: OnGetPreviewBadgeCallback;

    /**
     * 是否使用默认多选样式。
     * {@code true}表示GridItem或ListItem进入多选状态后
     * 显示勾选框。
     * {@code false}表示进入多选状态后无默认样式。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    useDefaultMultiSelectStyle?: boolean;

    /**
     * 是否开启双指滑动多选。
     * {@code true}表示双指滑动可以进入编辑模式并进行多选。
     * {@code false}表示双指滑动不可进行多选。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    enableTwoFingerMultiSelect?: boolean;
}

/**
 * 背景亮度选项。
 * 
 * > **说明：**
 * >
 * > 对于组件背景内容，每个像素自身的亮度（灰阶值）的计算公式为：
 * > >  `Y = （0.299R + 0.587G + 0.114B）/ 255.0`（R、G、B分别表示像素红色、绿色和蓝色通道的值，Y表示灰阶值），通过上述公式将像素点的灰阶值归一化至0~1的范围。
 * > >  每个像素的亮度提升计算公式为：`ΔY = -rate*Y + lightUpDegree`。例如，当rate=0.5，lightUpDegree=0.5时，对于灰阶值为0.2的像素点，亮度增加值为
 * > `-0.5*0.2 + 0.5 = 0.4`，对于灰阶值为1的像素点，亮度增加值为`-0.5*1 + 0.5 = 0`。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BackgroundBrightnessOptions {
    /**
     * 亮度变化速率。亮度变化速率越大，提亮程度下降速度越快。若rate为0，则lightUpDegree将不生效，即不会产生任何提亮效果。
     * 
     * 默认值：0.0 
     * 
     * 取值范围：(0.0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rate: double;
    /**
     * 提亮程度。提亮程度越大，亮度提升程度越大。
     * 
     * 默认值：0.0 
     * 
     * 取值范围：[-1.0, 1.0]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    lightUpDegree: double;
}

/**
 * 通过设置光源和被照亮的类型实现点光源照亮周围组件的UI效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PointLightStyle {
  /**
   * 设置光源属性，光源会影响到周围标记为可以被照亮的组件，并在组件上产生光效。
   *
   * 默认值：无光源
   *
   * @type { ?LightSource }
   * @default undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  lightSource?: LightSource;
  /**
   * 设置当前组件是否可以被光源照亮，以及被照亮的类型。
   *
   * 默认值：IlluminatedType.NONE
   *
   * @type { ?IlluminatedType }
   * @default IlluminatedType.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  illuminated?: IlluminatedType;
  /**
   * 设置组件的发光强度，取值范围为[0, 1]，超出取值范围时会转换为默认值。
   *
   * 默认值：0
   *
   * @type { ?double }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  bloom?: double;
}

/**
 * 一个组件支持添加1个光源。
 *
 * @interface LightSource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
declare interface LightSource {
  /**
   * 光源相对于当前组件的X坐标。
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  positionX: Dimension;
  /**
   * 光源相对于当前组件的Y坐标。
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  positionY: Dimension;
  /**
   * 光源高度。光源越高，照射范围越大。
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  positionZ: Dimension;
  /**
   * 光源强度，建议取值范围0-1。当光源强度为0时，光源不发光。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  intensity: double;
  /**
   * 光源颜色。
   *
   * 默认值：Color.White
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  color?: ResourceColor;
}

/**
 * 动画选项设置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface KeyframeAnimateParam {
    /**
     * 动画的整体延时时间，单位为ms（毫秒），默认不延时播放。
     * 
     * 默认值：0
     * 
     * **说明：** 
     * 
     *  delay>=0为延迟播放，delay<0表示提前播放。对于delay<0的情况：当delay的绝对值小于实际动画时长，动画将在开始后第一帧直接运动到delay绝对值的时刻的状态；当delay的绝对值大于等于实际动画时长，动
     * 画将在开始后第一帧直接运动到终点状态。其中实际动画时长等于单次动画时长乘以动画播放次数。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    delay?: int;
    /**
     * 动画播放次数。默认播放一次，设置为-1时表示无限次播放。设置为0时表示无动画效果。
     * 
     * 默认值：1
     * 
     * **取值范围：**[-1, +∞)
     * 
     * **说明：**
     * 
     * - 设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    iterations?: int;
    /**
     * 动画播放完成回调。当keyframe动画所有次数播放完成后调用。在设置的开发者选项中关闭过渡动画，或UIAbility从前台切换至后台时会立即结束仍在播放中的有限循环keyframe动画，触发播放完成回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onFinish?: () => void;
    /**
     * 设置动画的期望帧率。
     * 
     * **默认值：**{min:0, max:0, expected:0}，即跟随应用帧率。
     * 
     * **说明：** 
     * 
     * 开发者通过设置有效的期望帧率后，系统会收集设置的请求帧率，进行决策和分发，在渲染管线上进行分频，尽量能够满足开发者的期望帧率。开发者设置的期望帧率值不能代表最终实际效果，会受限于系统能力和屏幕刷新率。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    expectedFrameRateRange?: ExpectedFrameRateRange;
}
/**
 * 设置关键帧选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface KeyframeState {
    /**
     * 该段关键帧动画的持续时间，单位为毫秒。
     * 
     * 取值范围：[0, +∞)
     * 
     * **说明：**
     * 
     * - 设置小于0的值时按0处理。
     * 
     * - 设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    duration: int;
    /**
     * 该关键帧使用的动画曲线。
     * 
     * 推荐以Curve或ICurve形式指定。
     * 
     * 当类型为string时，为动画插值曲线，取值参考
     * [AnimateParam]{@link AnimateParam}的curve参数。
     * 
     * 默认值：Curve.EaseInOut
     * 
     * **说明：**
     * 
     * 由于[springMotion]{@link @ohos.curves:curves.springMotion}、
     * [responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}、
     * [interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}曲线时长不生效，故不支持这三种曲线。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    curve?: Curve | string | ICurve;
    /**
     * 指定在该关键帧时刻状态的闭包函数，即在该关键帧时刻要达到的状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    event: () => void;
}
/**
 * 带参数的函数回调。
 *
 * @param { T } data
 * @returns { V }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Callback<T, V = void> = (data: T) => V;
/**
 * 悬浮事件的回调类型。
 *
 * @param { boolean } isHover - 是否处于悬浮状态，true 表示处于悬浮状态，false 表示不处于悬浮状态。
 * @param { HoverEvent } event - 鼠标或手写笔悬浮事件对象，用于提供悬浮位置坐标等事件信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type HoverCallback = (isHover: boolean, event: HoverEvent) => void;
/**
 * 提供开启无障碍模式后的无障碍悬浮回调事件类型。
 *
 * @param { boolean } isHover
 * @param { AccessibilityHoverEvent } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type AccessibilityCallback = (isHover: boolean, event: AccessibilityHoverEvent) => void;

/**
 * 提供开启朗读类辅助应用后未能被无障碍悬浮响应的触摸事件回调类型。
 *
 * @param { TouchEvent } event - 原始Touch事件对象，用于获取无法被无障碍悬浮识别为可聚焦组件的触摸事件的详细信息，包括触摸点坐标、触摸类型等属性。
 *             <br>**说明：** TouchEvent对象的触摸事件类型TouchType为四种无障碍悬浮事件类型中的一种，分别为HOVER_ENTER、HOVER_MOVE、HOVER_EXIT和HOVER_CANCEL。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type AccessibilityTransparentCallback = (event: TouchEvent) => void

/**
 * 关于可见区域变化相关的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface VisibleAreaEventOptions {
    /**
     * 阈值数组。其中，每个阈值代表组件可见面积与组件自身面积的比值。当measureFromViewport未设置或设置为false时，只计算父组件内的面积，超出父组件部分不会计算；当measureFromViewport设置为true时，可见区域的计算还会根据父组件的clip属性确定是否纳入超出父组件区域的部分。每个阈值的取值范围为[0.0, 1.0]，如果开发者设置的阈值小于0.0，则实际取值为0.0；如果设置的阈值大于1.0，则实际取值为1.0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ratios: Array<double>;
    /**
     * 定义了开发者期望的计算间隔，单位为ms。当该字段小于100或为NaN时，默认取值为100；当该字段大于2^31-1时，默认取值为2^31-1。
     * 默认值：1000
     *
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    expectedUpdateInterval?: int;
    /**
     * 设置可见区域计算模式。
     * 当measureFromViewport设置为true时，系统在计算该组件的可见区域时，会考虑父组件的[clip]{@link clip} 属性设置。如果父组件的[clip]{@link clip}为false，则认为其内的子组件可以超出其区域进行显示，因此超出父组件的区域也将被视为可见区域纳入计算；如果父组件的[clip]{@link clip}设置为true，则组件超出父组件的区域会被裁剪，无法显示，因此会被视为不可见区域进行计算。而当measureFromViewport设置为false时，则不考虑[clip]{@link clip}的影响，直接将组件超出父组件的部分视为不可见区域。
     * 默认值：false
     * measureFromViewport设置为true时，祖先节点设置[scale]{@link scale}属性，组件可见比例会被正确计算。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    measureFromViewport?: boolean;
}
/**
 * 组件可见区域变化事件的回调类型。
 *
 * @param { boolean } isExpanding - 视组件的可见面积与自身面积的比值与上一次回调相比的情况而定，比值变大为true，比值变小为false。 [since 13]
 * @param { double } currentRatio - 触发回调时，组件可见面积与自身面积的比值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type VisibleAreaChangeCallback = (isExpanding: boolean, currentRatio: double) => void;
/**
 * 用于设置组件基础事件回调，覆盖点击、触摸、显示/消失、按键、焦点、悬浮、鼠标、组件区域变化和可见区域变化等事件；方法入参为undefined时，重置对应的事件回调，适用于集中配置和清理组件基础事件处理逻辑的场景。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UICommonEvent {
    /**
     * 设置点击事件的回调。
     *
     * @param { Callback<ClickEvent> | undefined } callback - 点击事件的回调函数，签名为 (event: ClickEvent) => void，用于在组件触发点击事件时接收点击事件对象。当callback为undefined时，重置点击事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnClick(callback: Callback<ClickEvent> | undefined): void;
    /**
     * 设置触摸事件的回调。
     *
     * @param { Callback<TouchEvent> | undefined } callback - 触摸事件的回调函数。当callback为undefined时，重置触摸事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnTouch(callback: Callback<TouchEvent> | undefined): void;
    /**
     * 设置[onAppear]{@link onAppear}挂载显示事件的回调。
     *
     * @param { VoidCallback | undefined } callback - 挂载显示事件的回调函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnAppear(callback: VoidCallback | undefined): void;
    /**
     * 设置[onDisAppear]{@link onDisAppear}卸载消失事件的回调。
     *
     * @param { VoidCallback | undefined } callback - 卸载消失事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnDisappear(callback: VoidCallback | undefined): void;
    /**
     * 设置按键事件的回调。
     *
     * @param { Callback<KeyEvent> | undefined } callback - 按键事件的回调函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void;
    /**
     * 设置[onFocus]{@link onFocus}获焦事件的回调。
     *
     * @param { VoidCallback | undefined } callback - 获焦事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnFocus(callback: VoidCallback | undefined): void;
    /**
     * 设置[onBlur]{@link onBlur}失焦事件的回调。
     *
     * @param { VoidCallback | undefined } callback - 失焦事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnBlur(callback: VoidCallback | undefined): void;
    /**
     * 设置[onHover]{@link onHover}悬浮事件的回调。
     *
     * @param { HoverCallback | undefined } callback - 悬浮事件的回调函数，签名为`(isHover: boolean, event: HoverEvent) => void`，用于组件进入或退出悬浮状态时接收悬浮状态和事件对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnHover(callback: HoverCallback | undefined): void;
    /**
     * 设置[onMouse]{@link onMouse}鼠标事件的回调。当callback为undefined时，重置鼠标事件的回调。
     *
     * @param { Callback<MouseEvent> | undefined } callback - 鼠标事件的回调函数，签名为 (event: MouseEvent) => void，用于在组件触发鼠标事件时接收鼠标事件对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnMouse(callback: Callback<MouseEvent> | undefined): void;
    /**
     * 设置[onSizeChange]{@link onSizeChange}组件区域变化事件的回调。当callback为undefined时，重置组件区域变化事件的回调。
     *
     * @param { SizeChangeCallback | undefined } callback - 组件区域变化事件的回调函数，签名为 (oldValue: SizeOptions, newValue: SizeOptions) => void，用于在组件区域尺寸发生变化时接收变化前后的尺寸信息。其中 oldValue 表示变化前的尺寸信息，newValue 表示变化后的尺寸信息。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnSizeChange(callback: SizeChangeCallback | undefined): void;
    /**
     * 设置限制回调间隔的[onVisibleAreaChange]{@link onVisibleAreaChange}可见区域变化事件的回调。当event为undefined时，重置可见区域变化事件的回调。
     *
     * @param { VisibleAreaEventOptions } options - 可见区域变化事件的配置参数，用于设置可见面积比例阈值和期望更新间隔；当前接口的可见区域回调阈值默认包含0，当组件可见面积与自身面积的比值接近实际生效的阈值时触发event回调。
     * @param { VisibleAreaChangeCallback | undefined } event - 可见区域变化事件的回调函数，签名为 (isExpanding: boolean, currentRatio: number) => void。当组件可见面积与自身面积的比值接近options中设置的阈值时触发该回调，其中isExpanding表示可见区域比例是否正在增大，currentRatio表示当前可见面积与组件自身面积的比值。为undefined时，重置可见区域变化事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void;
}
/**
 * 用于设置滚动事件回调。
 *
 * @extends UICommonEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface UIScrollableCommonEvent extends UICommonEvent {
  /**
   * 设置或重置滚动到达起始位置时触发的回调。
   *
   * @param { VoidCallback | undefined } callback - onReachStart事件的回调函数，滚动组件到达起始位置时
   *     触发。
   *     <br>方法入参为undefined时，会重置事件回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnReachStart(callback: VoidCallback | undefined): void;
  /**
   * 设置或重置滚动到达末尾位置时触发的回调。
   *
   * @param { VoidCallback | undefined } callback - onReachEnd事件的回调函数，滚动组件到达末尾位置时
   *     触发。
   *     <br>方法入参为undefined时，会重置事件回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnReachEnd(callback: VoidCallback | undefined): void;
  /**
   * 设置或重置滚动开始时触发的回调。
   *
   * @param { VoidCallback | undefined } callback - onScrollStart事件的回调函数。
   *     <br>方法入参为undefined时，会重置事件回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnScrollStart(callback: VoidCallback | undefined): void;
  /**
   * 设置或重置滚动停止时触发的回调。
   *
   * @param { VoidCallback | undefined } callback - onScrollStop事件的回调函数。
   *     <br>方法入参为undefined时，会重置事件回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnScrollStop(callback: VoidCallback | undefined): void;
  /**
   * 设置或重置每帧滚动开始时触发的回调。
   *
   * @param { OnScrollFrameBeginCallback | undefined } callback - onScrollFrameBegin事件的回调函数，每帧滚动开始时
   *     触发。
   *     <br>方法入参为undefined时，会重置事件回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnScrollFrameBegin(callback: OnScrollFrameBeginCallback | undefined): void;
}
/**
 * 用于设置组件绑定的手势。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UIGestureEvent {
    /**
     * 添加手势。
     *
     * @param { GestureHandler } gesture - 手势处理器对象。
     * @param { GesturePriority } [priority] - 绑定手势的优先级。<br>默认值：GesturePriority.NORMAL
     * @param { GestureMask } [mask] - 事件响应设置。<br>默认值：GestureMask.Normal
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    addGesture(gesture: GestureHandler, priority?: GesturePriority, mask?: GestureMask): void;
    /**
     * 绑定可与子组件手势同时触发的手势。
     *
     * @param { GestureHandler } gesture - 手势处理器对象。
     * @param { GestureMask } [mask] - 事件响应设置。<br>默认值：GestureMask.Normal
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    addParallelGesture(gesture: GestureHandler, mask?: GestureMask): void;
    /**
     * 移除该组件上通过modifier绑定且设置了指定标志的手势。
     *
     * @param { string } tag - 要移除的手势处理器标志，用于匹配并移除当前组件上通过 modifier 绑定且设置了该标志的手势。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    removeGestureByTag(tag: string): void;
    /**
     * 清除该组件上通过modifier绑定的所有手势，适用于组件交互模式切换或需要禁用全部动态手势的场景。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    clearGestures(): void;
}
/**
 * Defines the gesture modifier.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GestureModifier {
    /**
     * Defines the gesture update function.
     *
     * @param { UIGestureEvent } event
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    applyGesture(event: UIGestureEvent): void;
}
/**
 * setTextSelection选中文字时的配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SelectionOptions {
    /**
     * 菜单弹出的策略。 默认值：MenuPolicy.DEFAULT。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    menuPolicy?: MenuPolicy;
}
/**
 * 设置按键对应的走焦目的组件，缺省则遵循默认走焦规则。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FocusMovement {
    /**
     * 通过tab键走焦到组件的id。
     * 默认值为重置forward为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    forward?: string;
    /**
     * 通过shift+tab键走焦到组件的id。
     * 默认值为重置backward为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backward?: string;
    /**
     * 通过方向键上键走焦到组件的id。
     * 默认值为重置up为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    up?: string;
    /**
     * 通过方向键下键走焦到组件的id。
     * 默认值为重置down为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    down?: string;
    /**
     * 通过方向键左键走焦到组件的id。
     * 默认值为重置left为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    left?: string;
    /**
     * 通过方向键右键走焦到组件的id。
     * 默认值为重置right为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    right?: string;
}
/**
 * 弹窗避让键盘时，避让模式的枚举类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum KeyboardAvoidMode {
    /**
     * 默认避让软键盘并在到达极限高度之后进行高度压缩。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 不避让软键盘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 1
}
/**
 * 悬停态显示区域类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum HoverModeAreaType {
    /**
     * 上半屏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP_SCREEN = 0,
    /**
     * 下半屏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOTTOM_SCREEN = 1
}
/**
 * 日期区间，用于描述起止日期区间。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DateRange {
    /**
     * 设置日期区间的开始日期，应不晚于结束日期。不传入、日期格式错误、日期超出系统支持范围或start晚于end时，该日期区间无效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: Date;
    /**
     * 设置日期区间的结束日期。不传入、日期格式错误、日期超出系统支持范围或end早于start时，该日期区间无效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: Date;
}
/**
 * 用于表示被拉起的EmbeddedUIExtensionAbility的返回结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TerminationInfo {
    /**
     * 被拉起的EmbeddedUIExtensionAbility退出时返回的结果码。若通过`terminateSelfWithResult`退出，code由调用时传入的resultCode决定；若通过`terminateSelf`退出，code取默认值0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    code: int;
    /**
     * 被拉起的EmbeddedUIExtensionAbility退出时返回的数据。若通过`terminateSelf`退出，则该值为undefined。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    want?: Want;
}
/**
 * 时间、日期格式化时可设置的配置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DateTimeOptions = intl.DateTimeOptions;

/**
 * $$()双向绑定函数的返回值类型。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Bindable<T> {
    /**
     * 支持双向绑定的值。
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly value: T;
    /**
     * 定义可绑定属性的回调，该属性将在属性更改时调用。
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly onChange: Callback<T>;
}

/**
 * 智慧手势响应行为配置对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SmartGestureShortcutOptions {
    /**
     * 智慧手势响应优先级。当前仅支持GestureShortcut.PRIMARY，表示组件在智慧手势的滑动，点击等操作中作为首选响应目标。
     * 默认值为GestureShortcut.PRIMARY。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    action?: GestureShortcut;

    /**
     * 当前组件是否响应智慧手势。
     * true表示组件响应智慧手势，false表示组件不响应智慧手势。
     * 默认值为false。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    enabled?: boolean;

    /**
     * 组件被智慧手势操作选中后是否展示并保留选中态。
     * true表示显示选中框，false表示不显示选中框。
     * 当enabled为true时，默认值为true；当enabled为false时，默认值为false。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    selectable?: boolean;
}

/**
 * Create a bindable property instance.
 *
 * @param { T } value - indicates the value of a state property.
 * @param { Callback<T> } onChange - indicates the invoked callback when the property is changed.
 * @returns { Bindable<T> } bindable property instance.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function makeBindable<T>(value: T, onChange: Callback<T>): Bindable<T>;

/**
 * Defines the Two-way binding type of ResourceStr.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type BindableResourceStr = ResourceStr | Bindable<ResourceStr> | Bindable<Resource> | Bindable<string>;

/**
 * Defines the Two-way binding type of ResourceStr[].
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type BindableResourceStrArray = ResourceStr[] | Bindable<ResourceStr[]> | Bindable<Resource[]> | Bindable<string[]>;

/**
 * 将支持双向绑定的组件属性转换成Bindable的绑定对象。
 *
 * @param { T } value - 支持双向绑定的属性。
 * @returns { Bindable<T> } 将支持双向绑定的属性转成绑定对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function $$<T>(value: T): Bindable<T>;
/**
 * 方法applyStyles将多条样式设置提炼成一个Styles方法，直接在组件声明的位置调用。
 * 通过applyStyles可以快速定义并复用自定义样式。
 * 开发指南见[applyStyles：定义组件重用样式](docroot://ui/state-management/arkts-apply-styles.md)。
 *
 * @param { T } this - UI组件。
 * @param { CustomStyles } customStyles - 给UI组件添加样式的回调函数。
 * @returns { T } 返回添加样式后的UI组件
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function applyStyles<T extends CommonMethod>(this: T, customStyles: CustomStyles): T;

/**
 * 输入事件拦截结果接口，用于监听器回调[InputEventListener]{@link InputEventListener}返回是否阻止事件传递的决策。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface InputEventInterceptResult {
  /**
   * 输入事件拦截动作。
   * CONTINUE：允许事件继续传递到UI框架。
   * BLOCK：阻止事件传递到UI框架。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  action: InputEventInterceptAction;
}

/**
 * 输入事件监听器标识对象。
 * 此对象由系统创建并返回，作为监听器的唯一标识。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface InputEventMonitor {
  // Empty interface, no members
  // Used only as an identifier
}

/**
 * 原始输入事件包装器类。
 * 提供统一的接口来访问不同类型的输入事件，确保类型安全和向后兼容性。
 * 此类封装了原始的MouseEvent、TouchEvent或KeyEvent对象，并通过类型安全的方法访问。
 * 此类为抽象类，开发者无法自行创建实例。系统会在触发输入事件监听器时自动创建实例并传递回调函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare abstract class RawInputEventWrapper {
  /**
   * 判断是否为鼠标事件。
   *
   * @returns { boolean } 判断是否为鼠标事件，如果是鼠标事件则返回true，否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isMouseEvent(): boolean;

  /**
   * 判断是否为触摸事件。
   *
   * @returns { boolean } 判断是否为触摸事件，如果是触摸事件则返回true，否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isTouchEvent(): boolean;

  /**
   * 判断是否为按键事件。
   *
   * @returns { boolean } 判断是否为按键事件，如果是按键事件则返回true，否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isKeyEvent(): boolean;

  /**
   * 获取鼠标事件。
   *
   * @returns { MouseEvent | null } 获取鼠标事件，如果是鼠标事件则返回事件对象，否则返回null。由于监听器在事件派发给具体组件之前执行，返回的MouseEvent中触发对象target、相对于组件的坐标x和y等字段无法提供有效值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  asMouseEvent(): MouseEvent | null;

  /**
   * 获取触摸事件。
   *
   * @returns { TouchEvent | null } 获取触摸事件，如果是触摸事件则返回事件对象，否则返回null。由于监听器在事件派发给具体组件之前执行，返回的TouchEvent中getCurrentLocalPosition、stopPropagation、preventDefault和getHistoricalPoints等方法无法提供有效值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  asTouchEvent(): TouchEvent | null;

  /**
   * 获取按键事件。
   *
   * @returns { KeyEvent | null } 获取按键事件，如果是按键事件则返回事件对象，否则返回null。由于监听器在事件派发给具体组件之前执行，返回的KeyEvent中metaKey属性和getModifierKeyState方法无法提供有效值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  asKeyEvent(): KeyEvent | null;
}

/**
 * 输入事件监听器回调函数类型。
 * > **说明：**
 * >
 * > - RawInputEventWrapper是抽象类，开发者无法使用`new`运算符创建实例。
 * > - 系统会在事件触发时自动创建实例并通过此参数传递给回调函数。
 * > - 当前回调参数event仅会封装以下原始输入事件类型：[MouseEvent]{@link MouseEvent}、[TouchEvent]{@link TouchEvent}、[KeyEvent]{@link KeyEvent}。开发者可通过[asMouseEvent]{@link asMouseEvent}、[asTouchEvent]{@link asTouchEvent}、[asKeyEvent]{@link asKeyEvent}获取对应事件对象。
 * > - 请勿在回调中执行耗时操作（如复杂计算或网络请求），否则可能导致应用卡顿。
 * > - 监听器在UI线程中同步执行会直接阻塞事件处理流程。建议仅执行不会阻塞UI线程的本地条件判断和简单计算。
 *
 * @param { RawInputEventWrapper } event - 输入事件包装器，系统自动创建和传递，开发者无需手动创建。
 * @returns { InputEventInterceptResult } 事件拦截结果。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type InputEventListener = (
  event: RawInputEventWrapper
) => InputEventInterceptResult;

/**
 * 边缘光效动画模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum EdgeLightMode {
  /**
   * 自适应边缘光效动画。
   * 
   * 根据设备运算能力，在低算力设备上关闭，在中高算力设备上开启。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  EDGELIGHT_AUTO = 0,
  /**
   * 开启边缘光效动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  EDGELIGHT_ENABLED = 1,
  /**
   * 关闭边缘光效动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  EDGELIGHT_DISABLED = 2
}

/**
 * 非线性形变动画模式的枚举。
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DistortionMode {

  /**
   * distortion动画自适应实现
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DISTORTION_AUTO = 0,

  /**
   * distortion动画一直使能。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DISTORTION_ENABLED = 1,

  /**
   * 禁用distortion动画。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DISTORTION_DISABLED = 2,
}
/**
 * 定义边缘流光效果参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface EdgeLightParams {
  /**
   * 边缘流光位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  position: EdgeLightPosition;
 
  /**
   * 沿流动方向的边缘流光的投影长度（不支持百分比，传入百分比时不生效）。
   * <br>取值范围：[0, +∞)
   * <br>单位：vp
   * <br>**说明：**
   * <br>length为0时，无边缘流光投影效果。
   * <br>设置小于0的值时，按值为0处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  length: Length;
 
  /**
   * 边缘流光效果的发光强度。
   * <br>取值范围：[0, 1]
   * <br>默认值：1
   * <br>**说明：**
   * <br>值为0时，流光效果完全不可见。
   * <br>值为1时，流光效果达到最大亮度。
   * <br>设置大于1的值时，按值为1处理。
   * <br>设置小于0的值时，按值为0处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intensity?: double;
 
  /**
   * 边缘流光颜色。
   * <br>默认值：#FFFFFF，显示为白色。
   *
   * @default #FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  color?: ResourceColor;
 
  /**
   * 边缘流光线条粗细（不支持百分比，传入百分比时不生效）。
   * <br>取值范围：[0, +∞)
   * <br>单位：vp
   * <br>默认值：0
   * <br>**说明：**
   * <br>thickness为0时，边缘流光线条不可见。
   * <br>设置小于0的值时，按值为0处理。
   *
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  thickness?: Length;
}
 
/**
 * 定义引力中心参数。
 *
 * > **说明：**
 * >
 * > 此参数必须与[unionMode]{@link UnionEffectContainerAttribute#unionMode}一起使用，且unionMode须为UnionMode.GRAVITY_UNION，
 * > 同时useUnionEffect的value须为true时才生效，单独设置不生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface GravityCenterOptions {
  /**
   * 指定当前组件是否为引力中心。
   * <br>设置为true表示当前组件是引力中心；设置为false表示当前组件不是引力中心。
   * <br>默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  gravityCenter?: boolean;
 
  /**
   * 定义引力中心处吸引力或排斥力的强度。
   * <br>仅在gravityCenter为true时生效。
   * <br>默认值：0
   * <br>负数表示排斥力，正数表示吸引力。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  gravityIntensity?: double;
}

/**
 * 定义DatePickerComponent与UIPickerComponent共用的文本样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.1.0 static
 */
export declare interface PickerComponentTextStyle {
  /**
   * 字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.1.0 static
   */
  color?: ResourceColor;

  /**
   * 文本样式。仅支持size与weight。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.1.0 static
   */
  font?: Font;

  /**
   * 文本最小字号，与maxFontSize配合使用以启用字号缩放。当minFontSize与maxFontSize同时设置时，font中的size不生效。
   * 详见TextAttribute的minFontSize。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.1.0 static
   */
  minFontSize?: double | ResourceStr;

  /**
   * 文本最大字号，与minFontSize配合使用以启用字号缩放。当minFontSize与maxFontSize同时设置时，font中的size不生效。详见TextAttribute的maxFontSize。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.1.0 static
   */
  maxFontSize?: double | ResourceStr;

  /**
   * 设置文本超长时的显示方式。设置为MARQUEE时不生效。详见TextAttribute的textOverflow。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.1.0 static
   */
  overflow?: TextOverflow;
}