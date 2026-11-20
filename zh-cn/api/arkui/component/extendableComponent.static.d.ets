'use static'
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

import { Builder } from './builder';

import { Theme } from '@ohos.arkui.theme';

import { UIContext } from '@ohos.arkui.UIContext';

import { NavDestinationInfo, NavigationInfo, RouterPageInfo } from './common';

import { IVariableOwner } from '../stateManagement/decorator';

import promptAction from '@ohos.promptAction';

/**
 * 自定义组件和自定义对话框的生命周期接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LifeCycle {

  /**
   * aboutToAppear函数在创建自定义组件的新实例后，在其build()函数执行前调用。允许在aboutToAppear函数中改变状态变量，更改将在后续执行build()函数中生效。实现自定义布局的自定义组件的aboutToAppear生命周期在布局过程中触发。具体使用说明，详见自定义组件生命周期指南。
   * > **说明：**
   * >
   * > * 在该回调函数内，建议仅执行当前节点组件的初始化逻辑，避免高耗时操作阻塞主线程。对于高耗时操作，推荐采用缓存或异步方案替代。最佳实践请参考UI组件性能优化-避免在自定义组件的生命周期内执行高耗时操作。
   * > * 在需要频繁创建和销毁组件的场景中，将会频繁调用该回调函数。最佳实践请参考主线程耗时操作优化指导-组件生命周期回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default aboutToAppear(): void;

  /**
   * aboutToDisappear函数在自定义组件析构销毁时执行。不允许在aboutToDisappear函数中改变状态变量，特别是\@Link变量的修改可能会导致应用行为不稳定。具体使用说明，详见自定义组件生命周期指南。不建议在aboutToDisappear函数调用后再触发例如自定义弹窗的创建等逻辑，这可能会因为组件树信息丢失导致应用行为异常，例如@Consume找不到对应的@Provide、弹窗内白屏不显示组件等。
   * > **说明：**
   * >
   * > 在需要频繁创建和销毁组件的场景中，将会频繁调用该回调函数。最佳实践请参考主线程耗时操作优化指导-组件生命周期回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default aboutToDisappear(): void;

  /**
     * onDidBuild函数在执行自定义组件的build()函数之后执行，开发者可以在这个阶段进行埋点数据上报等不影响实际UI的功能。不建议在onDidBuild函数中更改状态变量、使用animateTo等功能，这可能会导致不稳定
     * 的UI表现。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDidBuild(): void;

  /**
   * build()函数用于定义自定义组件的声明式UI描述，自定义组件必须定义build()函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Builder
  build(): void;
}

/**
 * 可扩展组件，是自定义组件和自定义对话框的基类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class ExtendableComponent implements LifeCycle, IVariableOwner {

  /**
     * onWillApplyTheme函数用于获取当前组件上下文的Theme对象，在创建自定义组件的新实例后，在执行其build()函数之前执行。允许在onWillApplyTheme函数中改变状态变量，
     * 更改将在后续执行build()函数中生效。
     *
   * @param { Theme } theme - 自定义组件当前生效的Theme对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillApplyTheme(theme: Theme): void;

  /**
     * 获取UIContext对象。
     *
   * @returns { UIContext } 返回UIContext实例对象。在异步调用的回调方法中使用该接口，或者该接口的起始调用不在当前页面时，可能导致接口调用发生在自定义组件销毁之后，返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getUIContext(): UIContext;

  /**
     * 获取当前组件的UniqueId。UniqueId为系统为每个组件分配的Id，可保证当前应用中的唯一性。若在组件对应的节点未创建或已销毁时获取，返回无效UniqueId：-1。
     *
   * @returns { int } - 返回当前Component的UniqueId。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getUniqueId(): int;

  /**
     * 查询自定义组件所属的NavDestination信息，仅当自定义组件在NavDestination的内部时才生效。
     *
   * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not
   *     available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  queryNavDestinationInfo(): NavDestinationInfo | undefined;

  /**
     * 查询当前自定义组件距离最近的NavDestination信息（要求该NavDestination是Navigation的导航页或子页），isInner为true表示向内查找，false表示向外查找。
     *
   * @param { boolean | undefined } isInner
   * @returns { NavDestinationInfo | undefined } - The navigation destination information,
   *     or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  queryNavDestinationInfo(isInner: boolean | undefined): NavDestinationInfo | undefined;

  /**
     * 查询自定义组件所属的Navigation信息。
     *
   * @returns { NavigationInfo | undefined } The navigation information, or undefined if it is not available
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  queryNavigationInfo(): NavigationInfo | undefined;

  /**
     * 获取RouterPageInfo实例对象。
     *
   * @returns { RouterPageInfo | undefined } The router page information, or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  queryRouterPageInfo(): RouterPageInfo | undefined;

  /**
   * 获取PromptActionDialogController实例对象。
   *
   * @returns { promptAction.DialogController | undefined } 返回PromptActionDialogController实例对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getDialogController(): promptAction.DialogController | undefined;
}