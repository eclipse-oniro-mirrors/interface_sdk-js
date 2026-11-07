'use static'
/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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

import { ResourceColor } from '@ohos.arkui.component';

/**
 * 本模块提供系统材质的接口定义。不同的系统材质对应不同的UI效果，包括背景色
 * [backgroundColor]{@link CommonMethod#backgroundColor}、边框颜色
 * [borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
 * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi [since 23 - 24]
 * @publicapi [since 26.0.0]
 * @stagemodelonly
 * @since 23 static
 */
declare namespace uiMaterial {
  /**
   * 系统材质类型枚举。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @since 23 static
   */
  export enum MaterialType {  
    /**
     * 无系统材质效果。对应的效果为背景色
     * [backgroundColor]{@link CommonMethod#backgroundColor}为
     * 透明色，边框颜色[borderColor]{@link CommonMethod#borderColor}为透明色，边框宽度[borderWidth]{@link CommonMethod#borderWidth}为0，无阴影
     * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 0,
    /**
     * 半透明系统材质效果。对应的效果为：
     * 
     * 背景色
     * [backgroundColor]{@link CommonMethod#backgroundColor}：
     * 浅色模式为"#f2f1f3f5"，深色模式为"#f2303131"。
     * 
     * 边框颜色[borderColor]{@link CommonMethod#borderColor}为混合10%的透明度的theme.colors.compForegroundPrimary的
     * [token](docroot://ui/theme_skinning.md#系统缺省token色值)值。
     * 
     * 边框宽度[borderWidth]{@link CommonMethod#borderWidth}为1vp。
     * 
     * 阴影[shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}为ShadowStyle.OUTER_DEFAULT_SM。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    SEMI_TRANSPARENT = 1,
    /**
     * 沉浸式材质类型。仅用于[MaterialInfo]{@link uiMaterial.MaterialInfo}接口的type属性标识当前配置的材质类型，不映射到底层功能。实际材质效果通过
     * [ImmersiveMaterial]{@link uiMaterial.ImmersiveMaterial}类实现。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    IMMERSIVE = 2
  }

  /**
   * 材质使能状态枚举，表示应用级沉浸式系统材质配置的状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export enum MaterialState {  
    /**
     * 默认模式。[弹出框Dialog](docroot://ui/arkts-base-dialog-overview.md)、[即时反馈（Toast）](docroot://ui/arkts-create-toast.md)、
     * [AlphabetIndexer]{@link alphabet_indexer}在组件本身未设置背景颜色、模糊参数和阴影参数时默认开启沉浸式系统材质；[Text]{@link text}设置
     * [copyOption]{@link TextAttribute#copyOption}后长按或双击触发的文本菜单默认开启沉浸式系统材质；其他组件由应用主动设置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    DEFAULT = 0,
    /**
     * 使能模式。[弹出框Dialog](docroot://ui/arkts-base-dialog-overview.md)、[即时反馈（Toast）](docroot://ui/arkts-create-toast.md)、
     * [AlphabetIndexer]{@link alphabet_indexer}、[ChipGroup]{@link @ohos.arkui.advanced.ChipGroup}、
     * [Chip]{@link @ohos.arkui.advanced.Chip}、[Select]{@link select}、[菜单控制]{@link CommonMethod}、[Toggle]{@link toggle}、
     * [SegmentButton]{@link @ohos.arkui.advanced.SegmentButton}、
     * [SegmentButtonV2]{@link @ohos.arkui.advanced.SegmentButtonV2}、[Slider]{@link slider}、
     * [bindSheet]{@link CommonMethod#bindSheet}、[SelectionMenu]{@link @ohos.arkui.advanced.SelectionMenu}组件默认开启沉浸式系统材质；
     * [Text]{@link text}设置[copyOption]{@link TextAttribute#copyOption}后长按或双击触发的文本菜单默认开启沉浸式系统材质。此模式下，沉浸式系统材质样式生效的优先级高于组件
     * 本身设置的背景色、模糊、阴影和边框样式。其他组件需开发者主动设置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ENABLE = 1,
    /**
     * 禁用模式。所有组件禁止开启沉浸式系统材质，即使主动为组件设置沉浸式系统材质参数也不会生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    DISABLE = 2
  }

  /**
   * 材质配置信息，包含材质使能状态和材质类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export interface MaterialInfo {  
    /**
     * 材质使能状态配置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    state: MaterialState;

    /**
     * 材质类型标识，表示当前配置对应的材质类型。该值仅用于类型标识，不映射到底层功能。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    type: MaterialType;
  }

  /**
   * 获取当前应用的材质配置信息。返回的配置信息来自应用在[module.json5](docroot://quick-start/module-configuration-file.md)中配置的metadata。
   *
   * @returns { MaterialInfo } 返回当前应用的材质配置信息，包含材质使能状态和材质类型。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getMaterialInfo(): MaterialInfo;

  /**
   * 沉浸式材质样式枚举。不同的材质样式对应不同的材质参数，主要包括材质的模糊程度、高光效果等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export enum ImmersiveStyle {  
    /**
     * 超薄样式。材质层超薄，具有很强的透明效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ULTRA_THIN = 0,
    /**
     * 薄样式。材质层薄，具有较强的透明效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    THIN = 1,
    /**
     * 常规样式。材质层的厚度常规，具有适度的透明和模糊效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    REGULAR = 2,
    /**
     * 厚样式。材质层厚，模糊效果较强。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    THICK = 3,
    /**
     * 超厚样式。材质层超厚，模糊效果很强。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ULTRA_THICK = 4,
    /**
     * 超薄样式。材质层超薄，具有很强的透明效果。
     *
     * 适用于EffectComponent。配合对应的ULTRA_THIN_EC_SUB后缀样式枚举一起使用，以实现材质效果绘制的合并优化。设置在EffectComponent上的材质模糊最终将生效在子组件上。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ULTRA_THIN_EC = 5,
    /**
     * 薄样式。材质层薄，具有较强的透明效果。
     *
     * 适用于EffectComponent。配合对应的THIN_EC_SUB后缀样式枚举一起使用，以实现材质效果绘制的合并优化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    THIN_EC = 6,
    /**
     * 常规样式。材质层厚度适中，具有适度的透明与模糊效果。
     *
     * 适用于EffectComponent。配合对应的REGULAR_EC_SUB后缀样式枚举一起使用，以实现材质效果绘制的合并优化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    REGULAR_EC = 7,
    /**
     * 厚样式。模糊效果强。
     *
     * 适用于EffectComponent。配合对应的THICK_EC_SUB后缀样式枚举一起使用，以实现材质效果绘制的合并优化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    THICK_EC = 8,
    /**
     * 超厚样式。模糊效果很强。
     *
     * 适用于EffectComponent。配合对应的ULTRA_THICK_EC_SUB后缀样式枚举一起使用，以实现材质效果绘制的合并优化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ULTRA_THICK_EC = 9,
    /**
     * 超薄样式。材质层超薄，具有很强的透明效果。
     *
     * 适用于EffectComponent的子组件。配合对应的ULTRA_THIN_EC样式枚举一起使用，以实现材质效果绘制的合并优化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ULTRA_THIN_EC_SUB = 10,
    /**
     * 薄样式。材质层薄，具有较强的透明效果。
     *
     * 适用于EffectComponent的子组件。配合对应的THIN_EC样式枚举一起使用，以实现材质效果绘制的合并优化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    THIN_EC_SUB = 11,
    /**
     * 常规样式。材质层厚度适中，具有适度的透明与模糊效果。
     *
     * 适用于EffectComponent的子组件。配合对应的REGULAR_EC样式枚举一起使用，以实现材质效果绘制的合并优化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    REGULAR_EC_SUB = 12,
    /**
     * 厚样式。模糊效果强。
     *
     * 适用于EffectComponent的子组件。配合对应的THICK_EC样式枚举一起使用，以实现材质效果绘制的合并优化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    THICK_EC_SUB = 13,
    /**
     * 超厚样式。模糊效果很强。
     *
     * 适用于EffectComponent的子组件。配合对应的ULTRA_THICK_EC样式枚举一起使用，以实现材质效果绘制的合并优化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ULTRA_THICK_EC_SUB = 14
  }

  /**
   * 材质等级枚举，表示设备的算力等级。可通过[getGlobalMaterialLevel]{@link uiMaterial.getGlobalMaterialLevel()}获取当前设备的材质等级。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export enum MaterialLevel {
    /**
     * 高算力设备的材质等级。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    EXQUISITE = 0,
    /**
     * 中算力设备的材质等级。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    GENTLE = 1,
    /**
     * 低算力设备的材质等级。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    SMOOTH = 2
  }

  /**
   * 获取全局材质等级，与设备算力相关。在需要根据设备算力等级选择不同材质效果实现方式时，可调用此方法获取材质等级。该配置项由设备定义，不可修改。
   *
   * @returns { MaterialLevel } 返回设备的材质等级，表示设备算力档次，不同等级对应沉浸式材质在当前设备上的不同渲染效果级别。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getGlobalMaterialLevel(): MaterialLevel;

  /**
   * 判断当前设备是否支持沉浸式系统材质ImmersiveMaterial。在开发需要沉浸式材质效果的功能时，可先调用此方法判断设备是否支持，以决定是否为组件设置沉浸式材质。
   * 该配置项由设备定义，不可修改。
   *
   * @returns { boolean } 当前设备是否支持ImmersiveMaterial。true表示当前设备支持ImmersiveMaterial，false表示不支持。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function isImmersiveMaterialSupported(): boolean;

  /**
   * 将一个ImmersiveMaterial材质转换为适用于EffectComponent的ImmersiveMaterial材质。
   * 与convertToECSubMaterial的区别：本方法转换后的材质适用于EffectComponent本身，且materialColor、applyShadow、interactive、lightEffect属性不会生效；
   * convertToECSubMaterial转换后的材质适用于EffectComponent的子组件。两者通常配合使用，以实现材质效果绘制的合并优化。
   *
   * EffectComponent组件上不生效材质中的materialColor、applyShadow、interactive、lightEffect属性，经过该接口转换后的材质若配置了上述属性，也将不会生效。
   *
   * @param { uiMaterial.ImmersiveMaterial } material - 待转换的沉浸式材质。注意：转换后材质中的materialColor、applyShadow、interactive、lightEffect属性将不会生效。
   * @returns { uiMaterial.ImmersiveMaterial } 经过转换后适用于EffectComponent的沉浸式材质。转换后的材质不生效materialColor、applyShadow、interactive、lightEffect属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function convertToECMaterial(material: uiMaterial.ImmersiveMaterial) : uiMaterial.ImmersiveMaterial;

  /**
   * 将一个ImmersiveMaterial材质转换为适用于EffectComponent子组件的ImmersiveMaterial材质。
   *
   * @param { uiMaterial.ImmersiveMaterial } material - 经过转换后适用于EffectComponent子组件的沉浸式材质，该材质配合EffectComponent使用以实现材质效果绘制的合并优化。
   * @returns { uiMaterial.ImmersiveMaterial } 经过转换后适用于EffectComponent子组件的沉浸式材质。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function convertToECSubMaterial(material: uiMaterial.ImmersiveMaterial) : uiMaterial.ImmersiveMaterial;

  /**
   * 沉浸式材质参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export interface ImmersiveOptions {
    /**
     * 材质样式。不同样式对应不同的材质参数，影响材质的厚度。
     * 
     * **说明**：该参数仅对高档和中档算力设备的显示效果生效。
     * 
     * 默认值：ImmersiveStyle.REGULAR
     *
     * @default uiMaterial.ImmersiveStyle.REGULAR
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    style?: ImmersiveStyle;
    /**
     * 材质层赋色，该参数会为材质滤镜再混合一层纯色效果。该颜色需要带一定的透明度值，不能为纯不透明的颜色，否则会将材质滤镜效果完全遮挡。
     * 
     * **说明**：该参数仅对高档和中档算力设备的显示效果生效。
     * 
     * 默认值：Color.Transparent
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    materialColor?: ResourceColor;
    /**
     * 设置了材质对象的节点的子树是否自动适配材质到背景色的反色。
     * 
     * 若为false，则不会自动反色。
     * 
     * 若为true，则只有材质参数足够薄时才会自动反色。具体能反色的材质由系统定义，材质样式至少为THIN或ULTRA_THIN，且与设置应用的沉浸光感的强弱配置相关。材质越薄、沉浸光感越强，越容易符合反色材质的要求。
     * 
     * 自动反色能力仅对部分属性接口设置特殊资源值时生效，生效的属性接口包括：Text组件的[fontColor]{@link TextAttribute#fontColor}，Button组件的
     * [fontColor]{@link ButtonAttribute#fontColor}，SymbolGlyph组件的
     * [fontColor]{@link SymbolGlyphAttribute#fontColor(value: Array<ResourceColor>)}，Image组件的
     * [fillColor]{@link ImageAttribute#fillColor(value: ResourceColor)}，Search组件的
     * [placeholderColor]{@link SearchAttribute#placeholderColor}、[fontColor]{@link SearchAttribute#fontColor}、
     * [searchIcon]{@link SearchAttribute#searchIcon}中的图标颜色、[cancelButton]{@link SearchAttribute#cancelButton}中的图标颜色、
     * [caretStyle]{@link SearchAttribute#caretStyle}中的光标颜色，TabContent组件的
     * [tabBar]{@link TabContentAttribute#tabBar(options: string | Resource | CustomBuilder | TabBarOptions)}属性使用
     * [BottomTabBarStyle]{@link BottomTabBarStyle}样式时其中的文本和图标颜色。
     * 
     * **说明**：该参数仅对高档和中档算力设备的显示效果生效。
     * 
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    colorInvert?: boolean;
    /**
     * 是否添加材质的阴影效果。
     * 
     * 当该参数为true时，材质中的阴影效果固定生效，优先于[shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}通用属性。当该参数为false
     * 时，shadow通用属性生效，材质的阴影效果不生效。
     * 
     * **说明**：该参数仅对所有档位的算力设备的显示效果生效。
     * 
     * 默认值：true
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    applyShadow?: boolean;
    /**
     * 是否为设置材质的组件设置交互形变效果。
     * 
     * **说明**：该参数对所有档位的算力设备的显示效果生效。
     * 
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    interactive?: boolean;
    /**
     * 是否为设置材质的组件设置光感交互反馈效果。当该参数为null时，禁用光感交互反馈效果。
     * 
     * **说明**：该参数对所有档位的算力设备的显示效果生效。
     * 
     * 默认值：undefined，不设置光感交互反馈效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    lightEffect?: LightEffectOptions | null;
  }

  /**
   * 沉浸式材质的光感交互反馈配置。用于自定义反馈光感的颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export interface LightEffectOptions {  
    /**
     * 自定义交互反馈光感的颜色。
     * 
     * 默认值：Color.White
     *
     * @default Color.White
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    color?: ResourceColor;
 	}

  /**
   * 系统材质选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export interface MaterialOptions {  
    /**
     * 材质类型。
     * 
     * 默认值：MaterialType.NONE
     *
     * @default uiMaterial.MaterialType.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    type?: MaterialType;
  }

  /**
   * UI侧的系统材质对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @since 23 static
   */
  export class Material {
    /**
     * Material的构造函数。
     *
     * @param { MaterialOptions } [options] - 系统材质配置选项，包括材质类型。<br/>默认值：{type:MaterialType.NONE}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: MaterialOptions);
    /**
     * 返回空材质对象，用于组件单独关闭沉浸式系统材质效果。使用方式为`uiMaterial.Material.empty`。
     * 
     * 在enable模式下，可通过设置`systemMaterial(uiMaterial.Material.empty)`来单独关闭某个组件的沉浸式系统材质效果。如果组件未支持组件级沉浸式系统材质接口，则无法通过此方法关闭材质效
     * 果。
     *
     * @returns { Material } 返回空材质对象，表示无材质效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    static get empty(): Material;
  }
  /**
   * 沉浸式材质类，继承自[Material]{@link uiMaterial.MaterialType}。
   * 
   * 沉浸式材质根据设备算力有分档表现，设备算力的高、中、低档由设备厂商决定，定义在系统配置文件中。在高档和中档算力设备上，影响材质层滤镜效果和阴影
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}效果。在低档算力设备上，影响背景色
   * [backgroundColor]{@link CommonMethod#backgroundColor}、边框
   * 颜色[borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}效果。且同一材质的效果，会受到设置应用中沉浸光感配置项的影响，不同强弱程度的沉浸光感配置
   * 下，材质的参数和效果存在差异。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export class ImmersiveMaterial extends Material {  
    /**
     * ImmersiveMaterial的构造函数。
     *
     * @param { ImmersiveOptions } [options] - 系统材质配置选项，包括材质样式、材质层赋色等。<br/>默认值参考ImmersiveOptions接口各参数的默认值，即{style:
     *     ImmersiveStyle.REGULAR, materialColor:Color.Transparent, colorInvert:false, applyShadow:true, interactive:
     *     false, lightEffect:undefined}。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    constructor(options?: ImmersiveOptions);
  }
}

/**
 * export uiMaterial namespace.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi [since 23 - 24]
 * @publicapi [since 26.0.0]
 * @stagemodelonly
 * @since 23 static
 */
export default uiMaterial;