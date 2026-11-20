'use static';
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { ComponentBuilder } from "./builder";

import { ExtendableComponent } from './extendableComponent';

import { CommonAttribute, GeometryInfo, Layoutable, Measurable, SizeResult } from './common';

import { ConstraintSizeOptions } from './units';

import { Builder, WrappedBuilder, CustomBuilder } from './builder';

import { LocalStorage } from './../stateManagement/storage/localStorage';

import { CustomDialogController } from './customDialogController';

import { RecordData } from '@ohos.base';

/**
 * [aboutToReuse]{@link CustomComponent#aboutToReuse}接收的入参类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ReuseObject {

  /**
   * 获取ReuseObject的原始数据。
   *
   * @returns { RecordData } 返回ReuseObject的原始数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get raw(): RecordData;

  /**
   * 根据索引获取ReuseObject的数据。
   *
   * @param { string } key - 待获取数据的索引。
   * @returns { RecordData } 返回ReuseObject的原始数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  $_get(key: string): RecordData;

  /**
   * 返回当前索引是否在ReuseObject的数据范围内。
   *
   * @param { string } key - 待获取数据的索引。
   * @returns { boolean } 返回当前索引是否在ReuseObject的数据范围内。true表示在数据范围内，false表示不在数据范围内。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  has(key: string): boolean;

  /**
   * 获取当前ReuseObject的所有数据索引。
   *
   * @returns { string[] } 返回当前ReuseObject的所有数据索引。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  keys(): string[];
}

/**
 * \@Entry装饰的自定义组件将作为UI页面的入口。在单个UI页面中，仅允许存在一个由@Entry装饰的
 * 自定义组件作为页面的入口。开发指南参考：
 * [@Component装饰器：自定义组件](docroot://ui/state-management-static/arkts-static-create-component.md#entry)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface Entry {

  /**
   * 表示作为[命名路由](docroot://ui/arkts-routing.md#命名路由)页面的名字。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  routeName: string = "";

  /**
   * 返回[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)实例对象的函数名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  storage: string = "";

  /**
   * 是否使用UIContext.getSharedLocalStorage()接口返回的共享的
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)实例对象，默认值false。
   * true表示使用共享的LocalStorage实例对象。false表示不使用共享的LocalStorage实例对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  useSharedStorage: boolean = false;
}

/**
 * 重用池所有权的枚举
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ReusePoolOwnership {

  /**
   * 共享所有权。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SHARED = 'shared',

  /**
   * 重用池是每个实例拥有的，而不是共享的。
   * 这是自定义组件复用池的默认模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PER_INSTANCE = 'perInstance',

  /**
   * 复用池关闭。
   * 这是自定义组件复用池的默认模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  OFF = 'off'
}

/**
 * \@Component装饰器能装饰struct关键字声明的数据结构。struct被@Component装饰后具备组件化的能力，
 * 需要实现build方法描述UI，一个struct只能被一个@Component装饰。开发指南参考：
 * [@Component装饰器：自定义组件](docroot://ui/state-management-static/arkts-static-create-component.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface Component {

  /**
   * 自定义组件的重用类型。默认值为OFF。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  reusePool: ReusePoolOwnership = ReusePoolOwnership.OFF;

  /**
   * 要重用的自定义组件的集合。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  poolAccepts: string[] = [];
}

/**
 * \@ComponentV2主要配合状态管理V2使用。除非特别说明，@ComponentV2装饰的自定义组件将与@Component
 * 装饰的自定义组件保持相同的行为。开发指南参考：
 * [@ComponentV2装饰器：自定义组件](docroot://ui/state-management-static/arkts-static-componentv2.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface ComponentV2 {

  /**
   * 自定义组件的重用类型。默认值为OFF。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  reusePool: ReusePoolOwnership = ReusePoolOwnership.OFF;

  /**
   * 要重用的自定义组件的集合。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  poolAccepts: string[] = [];
}

 /**
 * 定义内存优化策略的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ReusableMemOptStrategy {
    /**
    * 无内存优化策略。
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
    DEFAULT = 0,
    /**
    * CustomComponent处理内存优化。
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
    ENABLE_AUTO_CACHE_OPTIMIZATION = 1 << 0,
}

/**
 * 定义Resuable ClassDecorator的可选参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface CustomComponentBaseOptions {
    /**
    * CustomComponent Reuse的内存优化策略
    *
    * @type { ?ReusableMemOptStrategy }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
    memoryOptimizationStrategy? : ReusableMemOptStrategy;
}

/**
 * 声明一个可复用的自定义组件。需与@Component搭配使用，用于装饰自定义组件，以实现组件复用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface Reusable {
  /**
   * 组件复用内存优化配置项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  memoryOptimizationStrategy: ReusableMemOptStrategy = ReusableMemOptStrategy.DEFAULT
}

/**
 * 声明一个可复用的自定义组件。该装饰器必须与@ComponentV2搭配使用，用于装饰自定义组件，以实现组件复用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface ReusableV2 {
  /**
   * 组件复用内存优化配置项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  memoryOptimizationStrategy: ReusableMemOptStrategy = ReusableMemOptStrategy.DEFAULT
}

/**
 * 在ArkTS-Sta中，自定义组件需要加上@CustomLayout装饰器，才能获得自定义布局能力。
 * 开发指南参考：
 * [自定义组件需要加上@CustomLayout装饰器以获得自定义布局能力](docroot://ui/arkts-dyn-sta-ui-rules.md#自定义组件需要加上customlayout装饰器以获得自定义布局能力)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface CustomLayout {}

/**
 * Defining of entry of page
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class EntryPoint {

  /**
     * Define entry function of page
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Builder
  entry(): void;
}

/**
 * 通过CustomDialogController类显示自定义弹窗。使用弹窗组件时，优先考虑自定义弹窗，便于弹窗样式与内容的自定义。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface CustomDialog {
}

/**
 * Definition of base custom dialog class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class BaseCustomDialog<T extends BaseCustomDialog<T, T_Options>, T_Options> extends ExtendableComponent {

  /**
    * Constructor to use to create a custom dialog instance.
   * @param {boolean} [useSharedStorage] - determine whether to use the LocalStorage instance object returned by UIContext.getSharedLocalStorage() interface.
   * @param {LocalStorage} [storage] - localStorage instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(useSharedStorage?: boolean, storage?: LocalStorage);

  /**
   * 创建自定义对话框的实现
   * @param { function } factory - 用于创建自定义对话框实例的工厂
   * @param { function } [initializers] - 自定义对话框中所有字段的初始数据
   * @param { CustomBuilder } [content] - 自定义对话框的尾随闭包
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Builder
  static _invokeImpl<S extends BaseCustomDialog<S, S_Options>, S_Options>(
        factory: () => S,
        initializers?: () => S_Options,
        content?: CustomBuilder
    ): void;
}

/**
 * 基础自定义组件的定义，它是所有自定义组件的基类。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class BaseCustomComponent<T_Options> extends ExtendableComponent implements CommonAttribute {

  /**
   * 组件复用在放入复用驰时，会触发回调
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  aboutToRecycle(): void;
}

/**
 * 定义自定义组件类
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class CustomComponent<T extends CustomComponent<T, T_Options>, T_Options> extends BaseCustomComponent<T_Options> {

  /**
   * Constructor to use to create a customComponent instance.
   *
   * @param { boolean } [useSharedStorage] - determine whether to use the LocalStorage instance object returned by 
   *     UIContext.getSharedLocalStorage() interface.
   * @param { LocalStorage } [storage] - localStorage instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(useSharedStorage?: boolean, storage?: LocalStorage);

  /**
   * Implementation for creating a custom component
   *
   * @param { function | undefined } styles - styles of custom component
   * @param { function } factory - factory to create instance of custom component
   * @param { function } [initializers] - initial data for all the fields in custom component
   * @param { string } [reuseId] - reuse id for reusable. Only valid if custom component decorated with @Reusable
   * @param { CustomBuilder } [content] - tail closure for custom component
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  static _invokeImpl<S extends CustomComponent<S, S_Options>, S_Options>(
        @Builder styles: ((instance: S) => void) | undefined,
        factory: () => S,
        initializers?: () => S_Options,
        reuseId?: string,
        content?: CustomBuilder
    ): void;

  /**
   * 当一个可复用的自定义组件从复用缓存中重新加入到节点树时，触发aboutToReuse生命周期回调，
   * 并将组件的构造参数传递给该回调。
   *
   * @param { ReuseObject } params - 自定义组件的构造参数。其中key为复用时外部传入的组件成员变量名，
   *     value为复用时外部传入的对应参数值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  aboutToReuse(params: ReuseObject): void;
}

/**
 * V2自定义组件类的定义。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class CustomComponentV2<T extends CustomComponentV2<T, T_Options>, T_Options> extends BaseCustomComponent<T_Options> {

  /**
   * Implementation for creating a v2 custom component
   *
   * @param { function | undefined } styles - styles of custom component
   * @param { function } factory - factory to create instance of custom component
   * @param { function } [initializers] - initial data for all the fields in custom component
   * @param { function } [reuseId] - reuse id for reusable. Only valid if custom component decorated with @ReusableV2
   * @param { CustomBuilder } [content] - tail closure for custom component
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  static _invokeImpl<S extends CustomComponentV2<S, S_Options>, S_Options>(
        @Builder styles: ((instance: S) => void) | undefined,
        factory: () => S,
        initializers?: () => S_Options,
        reuseId?: () => string,
        content?: CustomBuilder
    ): void;

  /**
   * Implementation for creating a v2 custom component
   *
   * @param { function | undefined } styles - styles of custom component
   * @param { function } factory - factory to create instance of custom component
   * @param { function } [initializers] - initial data for all the fields in custom component
   * @param { function } [reuseId] - reuse id for reusable. Only valid if custom component decorated with @ReusableV2
   * @param { CustomBuilder } [content] - tail closure for custom component
   * @param { CustomComponentInvokeOptions } [options] - additional invoke options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 staticonly
   */
  @Builder
  static _invokeImpl<S extends CustomComponentV2<S, S_Options>, S_Options>(
        @Builder styles: ((instance: S) => void) | undefined,
        factory: () => S,
        initializers?: () => S_Options,
        reuseId?: () => string,
        content?: CustomBuilder,
        options?: CustomComponentInvokeOptions
    ): void;

  /**
   * 组件复用时，触发回调
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  aboutToReuse(): void;

  /**
   * 重置状态变量
   *
   * @param { T_Options } [params] - 自定义组件成员变量的数据
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  resetStateVarsOnReuse(params?: T_Options): void;
}

/**
 * 页面生命周期。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PageLifeCycle {

  /**
   * router路由页面（即[@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)装饰的
   * 自定义组件）每次显示时触发一次，包括路由跳转、应用进入前台等场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onPageShow(): void {};

  /**
   * router路由页面（即[@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)装饰的
   * 自定义组件）每次隐藏时触发一次，包括路由跳转、应用进入后台等场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onPageHide(): void {};

  /**
   * 在router路由页面（即[@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)装饰的
   * 自定义组件）生效，当用户点击返回按钮时触发。返回true表示页面自己处理返回逻辑，不进行页面路由；
   * 返回false表示使用默认的路由返回逻辑，不设置返回值按照false处理。
   *
   * @returns { boolean } 返回按钮动作。返回true表示页面自己处理返回逻辑，不进行页面路由；
   *     返回false表示使用默认的路由返回逻辑，不设置返回值按照false处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onBackPress(): boolean { return false; };

  /**
   * pageTransition函数用于定义页面入场和页面退场的转场动效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pageTransition(): void {};

  /**
   * 该回调仅生效于由[@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)装饰的、
   * 作为[router]{@link router}路由页面存在的自定义组件。当之前存在于路由栈中的页面，通过单实例模式
   * [RouterMode]{@link RouterMode}移动到栈顶时触发该回调。
   *
   * @param { object | undefined | null } param - 路由跳转时传递到目标页面的数据，与router.pushUrl()中
   *     params字段传递的数据一致，数据结构由开发者自定义。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onNewParam(param: object | undefined | null): void {};
}

/**
 * 自定义组件的自定义布局允许开发者通过onMeasureSize和onPlaceChildren接口，以数据计算的方式精确控制子组件的位置和尺寸，实现更灵活的布局效果。适用于需要实现复杂非标准布局、内置布局组件无法满足特定排列需求、
 * 需要根据动态数据计算子组件位置和尺寸等场景。
 *
 * > **说明：**
 * >
 * > - 在自定义组件内实现onMeasureSize、onPlaceChildren任一方法即视为实现自定义布局。onMeasureSize负责测量并返回自定义组件的尺寸，onPlaceChildren负责布局子组件的位置。
 * > 为实现完整的自定义布局效果，推荐同时实现两种方法：onMeasureSize确定组件尺寸后，onPlaceChildren才能根据该尺寸正确布局子组件。具体参数说明请参见对应接口的详细描述。
 * >
 * > - 从API version 20开始，在自定义布局的自定义组件中，子组件若设置了[LayoutPolicy]{@link LayoutPolicy}对象的fixAtIdealSize属性，表示尺寸将不受父组件约束，
 * > 完全按照开发者自定义的尺寸范围布局。
 * >
 * > - 自定义布局内不支持使用懒加载（包含[Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)和
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)）。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface LayoutCallbacks {

   /**
    * ArkUI框架会在自定义组件确定位置时，将该自定义组件的子节点的布局信息通过onPlaceChildren传递给自定义组件。不允许在onPlaceChildren函数中改变状态变量。
    *
    * @param { GeometryInfo } selfLayoutInfo - 父组件（自定义组件）布局信息。
    * @param { Array<Layoutable> } children - 计算子组件大小后的子组件布局信息。
    * @param { ConstraintSizeOptions } constraint - 父组件传入的布局约束信息，包含minWidth、maxWidth、
    *     minHeight、maxHeight等约束条件。取值原则：minWidth≤maxWidth，minHeight≤maxHeight；单位：vp。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
  onPlaceChildren(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions): void {};

   /**
    * ArkUI（方舟UI框架）会在自定义组件确定尺寸时，将该自定义组件的节点信息和尺寸范围通过
    * onMeasureSize传递给开发者。不允许在onMeasureSize函数中改变状态变量。
    *
    * > **说明：**
    * >
    * > - 使用自定义布局方法时，推荐同时实现onMeasureSize和onPlaceChildren方法，否则可能出现布局异常。
    * > - 自定义布局内不支持使用懒加载（包含Repeat和LazyForEach）。
    * > - 父容器（自定义组件）上设置的尺寸信息，除aspectRatio之外，优先级小于onMeasureSize设置的尺寸信息。
    *
    * @param { GeometryInfo } selfLayoutInfo - 父组件（自定义组件）布局信息。
    *     **说明：**
    *     第一次布局时以自身设置的属性为准。
    * @param { Array<Measurable> } children - 计算子组件大小后的测量信息。
    *     **说明：**
    *     如果没有设置子组件的尺寸信息，子组件会维持上一次的尺寸，当子组件从来没有设置过尺寸时，尺寸默认为0。
    * @param { ConstraintSizeOptions } constraint - 父组件传入的布局约束信息，包含minWidth、maxWidth、
    *     minHeight、maxHeight等约束条件。取值原则：minWidth≤maxWidth，minHeight≤maxHeight；单位：vp。
    * @returns { SizeResult } 自定义组件自身的尺寸信息，包含测量后的宽度和高度。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
  onMeasureSize(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions): SizeResult {
        return {width: 0, height: 0} as SizeResult;
    };
}

/**
 * 定义_invokeImpl的配置选项
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export interface CustomComponentInvokeOptions extends CustomComponentBaseOptions {
    /**
     * 自定义组件自身的Class类型，用于生成默认的复用键
     *
     * @type { ?Class }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    sClass?: Class;
}

/**
 * 定义_invokeImpl选项的接口。
 *
 * @typedef CustomComponentV1InvokeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface CustomComponentV1InvokeOptions extends CustomComponentBaseOptions {}

/**
 * CustomComponentLifecycle用于监控自定义组件生命周期的变化，开发者可以通过
 * [UIUtils.getLifecycle]{@link @ohos.arkui.StateManagement:UIUtils#getLifecycle}获取CustomComponentLifecycle实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface CustomComponentLifecycle {

  /**
   * getCurrentState函数用于获得自定义组件当前的生命周期状态。
   *
   * @returns { CustomComponentLifecycleState } 自定义组件当前的生命周期状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  getCurrentState(): CustomComponentLifecycleState;

  /**
   * addObserver函数用于注册自定义组件生命周期监听器。当自定义组件的生命周期发生变化时，会触发监听器中相应的生命周期回调函数。
   *
   * @param { CustomComponentLifecycleObserver } observer - 监听自定义组件的监听器。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  addObserver(observer: CustomComponentLifecycleObserver): void;

  /**
   * removeObserver函数用于移除自定义组件生命周期监听器。解除注册后，即使自定义组件的生命周期状态发生变化，也不会触发监听器中相应的生命周期回调函数。
   *
   * @param { CustomComponentLifecycleObserver } observer - 监听自定义组件的监听器。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  removeObserver(observer: CustomComponentLifecycleObserver): void;
}

/**
 * 用户注册自定义组件生命周期回调后，当该自定义组件的生命周期发生变化时，将触发监听器中相应的生命周期回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface CustomComponentLifecycleObserver {

  /**
   * aboutToAppear函数在创建自定义组件的新实例后，执行其build()函数之前执行。开发者可以在此阶段修改状态变量。其功能与
   * [aboutToAppear]{@link aboutToAppear}类似，但是在自定义组件状
   * 态机的约束下触发的。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default aboutToAppear(): void;

  /**
   * onDidBuild函数在自定义组件的新实例构建完成后，执行其build()函数之后执行。开发者可以在此阶段实现一些不影响实际UI的功能，例如事件数据上报。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default onDidBuild(): void;

  /**
   * aboutToDisappear函数在自定义组件被销毁之前执行。不建议在aboutToDisappear函数中修改状态变量，特别是@Link变量的修改可能会导致应用程序行为不稳定。其功能与
   * [aboutToDisappear]{@link aboutToDisappear}类似，不同的
   * 是，CustomComponentLifecycleObserver中的aboutToDisappear函数受状态机约束，只有被监听的自定义组件状态向
   * CustomComponentLifecycleState.DISAPPEARED转变前触发回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default aboutToDisappear(): void;

  /**
   * 当可复用的自定义组件从缓存中重新添加到节点树时调用aboutToReuse函数，以接收组件的构造参数。当params存在时，表示V1组件的复用回调。
   *
   * @param { ReuseObject } [params] - 当params存在时，表示V1组件的复用回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default aboutToReuse(params?: ReuseObject): void;

  /**
   * 当组件被回收后触发，先执行应用程序中定义的必要回收操作，完成回收后调用aboutToRecycle函数。随后该组件被冻结，以避免该组件处于回收池时进行UI更新。最后，aboutToRecycle函数会递归遍历所有子组件，对每个完成
   * 回收的组件调用aboutToRecycle函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default aboutToRecycle(): void;
}

/**
 * 自定义组件当前的生命周期状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum CustomComponentLifecycleState {

  /**
   * 初始化状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  INIT = 0,

  /**
   * 准备展开状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  APPEARED = 1,

  /**
   * 已展开状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  BUILT = 2,

  /**
   * 回收状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  RECYCLED = 3,

  /**
   * 删除状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  DISAPPEARED = 4,
}