'use static'
/*
 * Copyright (C) 2026 Huawei Device Co., Ltd.
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
 * 异常提示V2组件，适用于有异常需要提示异常内容的情况。
 * 
 * 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，相较于
 * [状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)，状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组
 * 件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制异常提示的数据和状态，实现更高效的用户界面刷新。
 * 
 * > **说明：**
 * >
 * > - 如果ExceptionPromptV2设置[通用属性]{@link CommonMethod}和
 * > [通用事件]{@link CommonMethod}，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到
 * > ExceptionPromptV2本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议ExceptionPromptV2设置通用属性和通用事件。
 * 
 * ###### 子组件
 * 
 * 无
 * 
 * @file
 * @kit ArkUI
 */
import { ComponentV2 } from './arkui/component/customComponent';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { ResourceStr, Builder,
   Dimension, Length, BorderRadiuses, Direction } from '@ohos.arkui.component';
import { Param, ObservedV2, Trace, Event } from '@ohos.arkui.stateManagement';


/**
 * 异常提示的边距样式类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum MarginTypeV2 {
  /**
   * MarginTypeV2的默认边距。
   * 左边距：引用$r('sys.float.ohos_id_card_margin_start')。
   * 右边距：引用$r('sys.float.ohos_id_card_margin_end')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DEFAULT_MARGIN = 0,

  /**
   * 可适配边距，比默认边距更宽。
   * 左边距：引用$r('sys.float.ohos_id_max_padding_start')。
   * 右边距：引用$r('sys.float.ohos_id_max_padding_end')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FIT_MARGIN = 1
}

/**
 * PromptOptionsV2Config定义用于构造PromptOptionsV2对象的配置信息接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface PromptOptionsV2Config {
  /**
   * 指定当前异常提示的边距样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  marginType: MarginTypeV2;

  /**
   * 指定当前异常提示的距离顶部的位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  marginTop: Dimension;

  /**
   * 指定当前异常提示的异常图标样式。
   * 默认不设置或设置为undefined，不显示异常图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon?: ResourceStr;

  /**
   * 指定当前异常提示的异常Symbol图标样式，优先级大于icon。
   * 默认不设置或设置为undefined，Symbol图标不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * 指定当前异常提示的文字提示内容。
   * 支持自定义资源，或如下四种状态文字系统资源：
   * 
   * 1. 无网络状态：显示网络未连接，引用$r('sys.string.ohos_network_not_connected')。
   * 2. 网络差状态：显示网络连接不稳定，请点击重试，引用$r('sys.string.ohos_network_connected_unstable')。
   * 3. 连不上服务器状态：显示无法连接到服务器，请点击重试，引用$r('sys.string.ohos_unstable_connect_server')。
   * 4. 有网但是获取不到位置状态：显示无法获取位置，请点击重试，引用$r('sys.string.ohos_custom_network_tips_left')。
   * 默认不设置或设置为undefined，文字提示内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  tip?: ResourceStr;

  /**
   * 指定当前异常提示的右侧图标按钮的文字内容。
   * 默认不设置或设置为undefined，文字内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  actionText?: ResourceStr;

  /**
   * 指定当前异常提示的显隐状态。
   * true：显示状态。
   * false：隐藏状态。
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isShown?: boolean;
}

/**
 * PromptOptionsV2用于定义异常提示组件的配置信息。
 * 使用@ObservedV2和@Trace支持属性的深度观察和动态刷新。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export declare class PromptOptionsV2 {
  /**
   * 指定当前异常提示的异常图标样式。
   * 默认不设置或设置为undefined，不显示异常图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public icon?: ResourceStr;

  /**
   * 指定当前异常提示的异常Symbol图标样式，优先级大于icon。
   * 默认不设置或设置为undefined，Symbol图标不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * 指定当前异常提示的文字提示内容。
   * 支持自定义资源，或如下四种状态文字系统资源：
   * 
   * 1. 无网络状态：显示网络未连接，引用$r('sys.string.ohos_network_not_connected')。
   * 2. 网络差状态：显示网络连接不稳定，请点击重试，引用$r('sys.string.ohos_network_connected_unstable')。
   * 3. 连不上服务器状态：显示无法连接到服务器，请点击重试，引用$r('sys.string.ohos_unstable_connect_server')。
   * 4. 有网但是获取不到位置状态：显示无法获取位置，请点击重试，引用$r('sys.string.ohos_custom_network_tips_left')。
   * 默认不设置或设置为undefined，文字提示内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public tip?: ResourceStr;

  /**
   * 指定当前异常提示的边距样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public marginType: MarginTypeV2;

  /**
   * 指定当前异常提示的右侧图标按钮的文字内容。
   * 默认不设置或设置为undefined，文字内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public actionText?: ResourceStr;

  /**
   * 指定当前异常提示的距离顶部的位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public marginTop: Dimension;

  /**
   * 指定当前异常提示的显隐状态。
   * true：显示状态。
   * false：隐藏状态。
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public isShown?: boolean;

  /**
   * PromptOptionsV2的构造函数。
   *
   * @param { PromptOptionsV2Config } [config] - PromptOptionsV2的配置信息。如果不传入config，则使用默认值：marginType为MarginTypeV2.DEFAULT_MARGIN，marginTop为0。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(config?: PromptOptionsV2Config);
}

/**
 * OnTipClickCallback定义点击左侧提示文本的回调函数类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type OnTipClickCallback = () => void;

/**
 * OnActionTextClickCallback定义点击右侧图标按钮的回调函数类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type OnActionTextClickCallback = () => void;

/**
 * 异常提示，适用于有异常需要提示异常内容的情况。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentV2
export declare struct ExceptionPromptV2 {

  /**
   * 指定当前异常提示的配置信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Param
  options: PromptOptionsV2;

  /**
   * 点击左侧提示文本的回调函数，缺省时不执行任何操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Event
  onTipClick?: OnTipClickCallback;

  /**
   * 点击右侧图标按钮的回调函数，缺省时不执行任何操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Event
  onActionTextClick?: OnActionTextClickCallback;

  /**
   * 构建组件的方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @Builder
  build(): void;
}
