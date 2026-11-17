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
 * @file
 * @kit ArkUI
 */

import { CommonMethod } from './common';
import { ComponentBuilder } from './../stateManagement/runtime';
import { AttributeModifier, CommonMethod } from './common';
import { CustomBuilder, CustomBuilderT } from './builder';

/**
 * EffectComponent的渲染层级。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum EffectLayer {
  /**
   * 无特效层。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,

  /**
   * 充电动画层。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  CHARGE_MOTION = 1,

  /**
   * 充电文字层。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  CHARGE_TEXT = 2
}

/**
 * 设置当前EffectComponent构造参数，包含EffectComponent的渲染层级。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EffectComponentOptions {

  /**
   * EffectComponent的渲染层级。
   * 
   * 默认值：EffectLayer.NONE
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  effectLayer?: EffectLayer;
}

/**
 * 支持通用属性，目前仅支持对backgroundBlurStyle属性做绘制合并优化。
 *
 * 不支持通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface EffectComponentAttribute extends CommonMethod {
  /**
   * 在Effect Component没有视觉效果时使用快照。
   *
   * @param { boolean | undefined } enable - <br>true表示使用快照方法，
   *     false表示不使用快照方法。
   *     undefined表示默认值false。
   * @returns { EffectComponentAttribute }
   * @throws { BusinessError } 202 - Permission verification failed. A nonsystem application calls a system API.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  alwaysSnapshot(enable: boolean | undefined): this;
  /**
   * 设置属性修饰符。
   *
   * @param { AttributeModifier<EffectComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { EffectComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<EffectComponentAttribute>
      | AttributeModifier<CommonMethod> | undefined): this;
  /**
   * 设置EffectComponent的选项。
   *
   * @param { EffectComponentOptions } [options] - 创建EffectComponent的选项。
   * @returns { EffectComponentAttribute } 返回EffectComponentAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @unpublished
   * @stagemodelonly
   * @since 26.0.1 staticonly
   */
  default setEffectComponentOptions(options?: EffectComponentOptions): this;
}

/**
 * 特效合并容器组件，用于子节点特效绘制的合并，实现特效的绘制性能优化。
 *
 * > **说明：**
 * >
 * > - 该组件从API Version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > - 本模块为系统接口。
 * >
 * > - 本模块接口仅可在Stage模型下使用。
 * >
 * > - 目前该组件仅支持子组件背景模糊效果的绘制合并优化。
 * >
 * > - 在对子组件的背景模糊特效进行绘制合并时，需要将子组件的backgroundBlurStyle(BlurStyle)属性替换成useEffect(true)。
 *
 * @param { EffectComponentOptions } [options] - EffectComponent构造参数。
 * @param { CustomBuilder } [content_] - EffectComponent的子组件。
 * @returns { EffectComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function EffectComponent(
    options?: EffectComponentOptions,
    content_?: CustomBuilder,
): EffectComponentAttribute;

/**
 * 特效合并容器组件，用于子节点特效绘制的合并，实现特效的绘制性能优化。
 *
 * @param { CustomBuilderT<EffectComponentAttribute> } style_ - EffectComponent属性实例
 * @param { CustomBuilder } [content_] - 容器内容
 * @returns { EffectComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function EffectComponent(
    style_: CustomBuilderT<EffectComponentAttribute>,
    content_?: CustomBuilder,
): EffectComponentAttribute;