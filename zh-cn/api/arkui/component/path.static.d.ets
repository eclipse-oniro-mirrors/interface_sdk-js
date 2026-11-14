'use static';
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
 * @arkts 1.2
 */
import { CommonShapeMethod, AttributeModifier, CommonMethod } from "./common";
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder} from './builder';
import { Length, ResourceStr } from './units';

/**
 * 用于描述Path组件绘制属性。
 *
 * @interface PathOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PathOptions {
    /**
     * 路径所在矩形的宽度。
     *
     * 值为异常值或缺省时按照自身内容需要的宽度处理。
     *
     * 默认单位：vp
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Length;
    /**
     * 路径所在矩形的高度。
     *
     * 值为异常值或缺省时按照自身内容需要的高度处理。
     *
     * 默认单位：vp
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: Length;
    /**
     * 路径绘制的命令字符串。
     *
     * 默认值：空字符串
     *
     * 异常值按照默认值处理。
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    commands?: ResourceStr;
}

/**
 * 路径绘制组件属性，用于设置路径的相关属性。
 *
 * @extends CommonShapeMethod
 * @interface PathAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PathAttribute extends CommonShapeMethod {
    /**
     * 设置符合
     * [SVG路径描述规范]{@link @global:Path}
     * 的命令字符串，单位为px。
     * 像素单位转换方法请参考
     * [像素单位转换]{@link Length}。
     *
     * @param { ResourceStr | undefined } value - 线条绘制的路径。
     *     <br>默认值：空字符串<br>默认单位：px
     *     <br>异常值undefined和null按照默认值处理。
     * @returns { PathAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default commands(value: ResourceStr | undefined): this;
    /**
     * 设置Path选项。
     *
     * @param { PathOptions } options - Path组件绘制属性的配置对象。
     *    <br>省略时不设置绘制属性，组件按默认尺寸显示。默认尺寸根据路径内容自动计算宽度和高度。
     *    <br>异常值undefined和null按照无效值处理，本次设置不生效。 [since 18]
     * @returns { PathAttribute } 返回PathAttribute实例。
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @unpublished
 	 * @stagemodelonly
 	 * @since 26.0.1 staticonly
     */
 	default setPathOptions(options?: PathOptions): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<PathAttribute> | AttributeModifier<CommonMethod> | undefined } modifier - 动态设置Path组件的属性。<br>
     *    取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { PathAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<PathAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 路径绘制组件，根据绘制路径生成封闭的自定义形状。
 *
 * @param { PathOptions } [options] - Path绘制区域。
 *     <br>异常值undefined和null按照无效值处理，本次设置不生效。
 * @returns { PathAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Path(
    options?: PathOptions
): PathAttribute;

/**
 * Defines Path Component.
 *
 * @param { CustomBuilderT<PathAttribute> } style - the callback to set up component's attributes.
 * @returns { PathAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @unpublished
 * @stagemodelonly
 * @since 26.0.1 staticonly
 * @noninterop
 */
@Builder
export declare function Path(
    style: CustomBuilderT<PathAttribute>,
): PathAttribute;
