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
import { Resource } from './../../../api/global/resource';
import { CommonMethod, AttributeModifier } from "./common";
import { ResourceColor, ResourceStr } from "./units";
import { FontWeight } from "./enums";
import { SymbolEffectStrategy, SymbolRenderingStrategy } from './symbolglyph';
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { FontWeightConfigs } from "./textCommon";

/**
 * SymbolSpan组件定义
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface SymbolSpanAttribute {
  /**
   * 设置SymbolSpan组件大小。设置string类型时，支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。未通过该接口设置时，默认组件大小为16fp。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { double | string | Resource | undefined } value - SymbolSpan组件大小。 <br>取值范围：[0, +∞) <br>单位：
   * [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * <br>取值为undefined时，按默认值处理。
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontSize(value: double | string | Resource | undefined): this;
  /**
   * 设置SymbolSpan组件颜色。未通过该接口设置时，默认颜色随[renderingStrategy]{@link SymbolSpanAttribute#renderingStrategy}变化，单色渲染策略（SINGLE）下默
   * 认为单色；多色渲染策略（MULTIPLE_COLOR）和分层渲染策略（MULTIPLE_OPACITY）下默认取图标资源预设的多色配置。具体说明请参考
   * [SymbolRenderingStrategy]{@link SymbolRenderingStrategy}。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Array<ResourceColor> | undefined } value - SymbolSpan组件颜色。具体颜色渲染模式及其说明请参考
   * [SymbolRenderingStrategy]{@link SymbolRenderingStrategy}。
   * <br>取值为undefined时，按默认值处理。
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontColor(value: Array<ResourceColor> | undefined): this;
  /**
   * 设置SymbolSpan组件字体粗细。未通过该接口设置时，默认字体粗细为FontWeight.Normal（正常粗细，对应数值400）。
   *
   * @param { int | FontWeight | string | undefined } value - SymbolSpan组件字体粗细。
   * <br>number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。
   * string类型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。
   * 设置过大可能会在不同字体下有截断。传入超出取值范围或不符合间隔要求的值时取默认值。
   * <br>取值为undefined时，按默认值处理。
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontWeight(value: int | FontWeight | string | undefined): this;
  /**
   * 设置SymbolSpan的字体粗细。
   *
   * @param { int | FontWeight | ResourceStr | undefined } value - SymbolSpan字体粗细。
   *     对于int类型，取值范围为【100,900】。当在fontWeightConfigs中enableVariableFontWeight为**false**时
   *     ，必须是100的倍数；当为**true**时，
   *     支持【100,900】范围内的任意整数。
   *     默认值为**FontWeight.Normal**。传递`undefined`会将其重置为默认值。
   * @param { FontWeightConfigs } [fontWeightConfigs] - 字体粗细的配置。
   *     如果未指定，则使用FontWeightConfigs的默认值：
   *     enableVariableFontWeight默认为**false**,enableDeviceFontWeightCategory默认为**true**。
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default fontWeight(value: int | FontWeight | ResourceStr | undefined, fontWeightConfigs?: FontWeightConfigs): this;
  /**
   * 设置SymbolSpan动效策略。未通过该接口设置时，默认动效策略为SymbolEffectStrategy.NONE。
   *
   * NONE表示无动效，适用于静态展示场景；SCALE表示整体缩放动效，适用于需要吸引用户注意力的场景，如按钮点击反馈；HIERARCHICAL表示层级动效，适用于需要突出图标层次感的场景。
   *
   * 不同动效策略效果可以参考
   * [示例1（设置渲染和动效策略）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolSpan.md#示例1设置渲染和动效策略)。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { SymbolEffectStrategy | undefined } value - SymbolSpan动效策略。
   * <br>取值为undefined时，按默认值处理。
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default effectStrategy(value: SymbolEffectStrategy | undefined): this;
  /**
   * 设置SymbolSpan渲染策略。未通过该接口设置时，默认渲染策略为SymbolRenderingStrategy.SINGLE。
   *
   * SINGLE表示单色渲染，适用于需要统一颜色的图标显示场景；MULTIPLE_COLOR表示多色渲染，适用于需要展示图标多层不同颜色的场景；MULTIPLE_OPACITY表示分层渲染，适用于需要展示图标层次效果的场景。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { SymbolRenderingStrategy | undefined } value - SymbolSpan渲染策略。
   * <br>取值为undefined时，按默认值处理。
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default renderingStrategy(value: SymbolRenderingStrategy | undefined): this;
  /**
   * 组件的唯一标识，唯一性由使用者保证。
   * 此接口仅用于对应用的测试。与id同时使用时，后赋值的属性会覆盖先赋值的属性，建议仅设置id。
   *
   * @param { string | undefined } value - 组件的唯一标识，唯一性由使用者保证。
   * <br>默认值：''
   * <br>取值为undefined时，按默认值处理。
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
   * @param { string | undefined } value - 组件的唯一标识，唯一性由使用者保证。
   * <br>默认值：''
   * <br>取值为undefined时，按默认值处理。
   * @returns { this } 返回当前组件，用于链式调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default id(value: string | undefined): this;
  /**
   * 设置组件的动态属性。
   *
   * @param { AttributeModifier<SymbolSpanAttribute> | undefined } modifier - 动态设置组件的属性。
   * <br>取值为undefined时，按当前组件的属性方法默认值处理。
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<SymbolSpanAttribute> | undefined): this;
  /**
   * 设置组件的源码跳转信息。
   *
   * @param { string } sourceLine - 源代码行。
   * @param { string } [moduleName] - 组件所属的模块。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default debugLine(sourceLine: string, moduleName?: string): this;

  /**
   * 设置SymbolSpan组件选项。
   *
   * @param { Resource } value - SymbolSpan组件资源内容。
   * @returns { SymbolSpanAttribute } 返回SymbolSpan选项的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @unpublished
   * @stagemodelonly
   * @since 26.0.1 staticonly
   */
  default setSymbolSpanOptions(value: Resource): this;

  /**
   * 通知组件已完成其属性的设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @unpublished
   * @stagemodelonly
   * @since 26.0.1 staticonly
   */
  default applyAttributesFinish(): void;
}

/**
 * 定义SymbolSpan组件。
 *
 * @param { Resource } value - 符号图标资源。
 * @returns { SymbolSpanAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function SymbolSpan(
    value: Resource
): SymbolSpanAttribute;

/**
 * 定义SymbolSpan组件。
 *
 * @param { CustomBuilderT<SymbolSpanAttribute> } style - SymbolSpan属性的实例。
 * @returns { SymbolSpanAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @unpublished
 * @stagemodelonly
 * @since 26.0.1 staticonly
 * @noninterop
 */
@Builder
export declare function SymbolSpan(
    style: CustomBuilderT<SymbolSpanAttribute>,
): SymbolSpanAttribute;