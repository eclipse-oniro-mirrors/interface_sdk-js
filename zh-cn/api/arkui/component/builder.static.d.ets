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

import { Callback } from '@ohos.base';

/**
 * \@Builder装饰的函数也称为"自定义构建函数"。
 * 开发指南见[\@Builder装饰器：自定义构建函数](docroot://ui/state-management/arkts-builder.md)。
 *
 * \@Builder装饰器的配置接口，声明\@Builder装饰器的配置项（如占位构建函数标记isPlaceholder）。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Retention({policy: "SOURCE"})
@Target([
  AnnotationTargets.FUNCTION,
  AnnotationTargets.CLASS_METHOD,
  AnnotationTargets.CLASS_FIELD,
  AnnotationTargets.TYPE,
  AnnotationTargets.PARAMETER,
  AnnotationTargets.TYPE_ALIAS,
  AnnotationTargets.LAMBDA,
  AnnotationTargets.INTERFACE_METHOD
])
export declare @interface Builder {}

/**
 * \@BuilderParam用于装饰指向[@Builder](./ts-universal-builder-static.md)方法的变量。
 * 开发指南见[\@BuilderParam装饰器：引用\@Builder函数](docroot://ui/state-management/arkts-builderparam.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface BuilderParam {}

/**
 * 组件属性方法参数可使用CustomBuilder类型来自定义UI描述。
 * 生成用户自定义组件，在使用时结合[@Builder](docroot://ui/state-management/arkts-builder.md)使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type CustomBuilder = @Builder (() => void);

/**
 * 自定义UI描述，相比于CustomBuilder，本接口支持传入一个参数。
 *
 * t：生成用户自定义组件，在使用时结合[@Builder](docroot://ui/state-management/arkts-builder.md)使用，并允许传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type CustomBuilderT<T> = @Builder ((t: T) => void);

/**
 * Navigation路由的构造方式类型。
 *
 * name：NavDestination页面名称。
 * param：NavDestination页面详细参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type PageMapBuilder = @Builder ((name: string, param: Object | null | undefined) => void);

/**
 * wrapBuilder是一个模板函数，返回一个`WrappedBuilder`对象。模板参数`T`是@Builder的函数类型。
 *
 * @param { T } builder
 * @returns { WrappedBuilder<T> }
 WrappedBuilder对象。
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare function wrapBuilder<T>(builder: T): WrappedBuilder<T>;

/**
 * \@Builder函数的包装类。模板参数`T`应传入@Builder函数类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class WrappedBuilder<T> {

  /**
   * \@Builder修饰的全局函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Builder
  public builder: T;

  /**
   * WrappedBuilder的构造函数。
   *
   * @param { T } builder
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public constructor(builder: T);
}

/**
 * Type for property getter in Builder parameter proxy.
 *
 * @returns { Any } parameter value
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type BuilderParameterCallback = () => Any;

/**
 * Make Proxy for Builder parameter.
 *
 * @param { T } instance Builder parameter instance
 * @param { Map<string, BuilderParameterCallback> } propertyGetters getter callbacks for each property name
 * @param { Callback<T> } [initializer] optional callback to initialize proxied instance
 * @returns { T } proxied parameter instance
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function makeBuilderParameterProxy<T>(
    instance: T,
    propertyGetters: Map<string, BuilderParameterCallback>,
    initializer?: Callback<T>
): T;

/**
 * Defines ComponentBuilder Annotation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface ComponentBuilder {}

/**
 * 定义对象构造器类型
 *
 * @returns { T }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type ConstructorT<T> = (() => T);