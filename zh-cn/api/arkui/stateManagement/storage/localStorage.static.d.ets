'use static'
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

import { AbstractProperty, SubscribedAbstractProperty } from './storageProperty';

import { RecordData } from '@ohos.base';

/**
 * LocalStorage具体UI使用说明，详见[LocalStorage(页面级UI状态存储)](docroot://ui/state-management-static/arkts-static-localstorage.md)
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class LocalStorage {

  /**
   * 创建一个新的[LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)实例。
   * 使用initializingProperties中的属性和其数值，初始化LocalStorage实例。
   *
   * @param { RecordData } [initializingProperties] - 用initializingProperties包含的属性和数值初始化LocalStorage。
   *     initializingProperties不能为undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public constructor(initializingProperties?: RecordData);

  /**
   * 如果给定的propName在[LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)
   * 中存在，则获得LocalStorage中propName对应数据的引用。否则，返回undefined。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { AbstractProperty<T> | undefined } LocalStorage中propName对应属性的引用，
   *     如果LocalStorage中不存在对应的propName，则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public ref<T>(propName: string): AbstractProperty<T> | undefined;

  /**
   * 与[ref]{@link LocalStorage#ref}接口类似，如果给定的propName在
   * [LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)中存在，
   * 则获得LocalStorage中propName对应数据的引用。如果不存在，则使用defaultValue在LocalStorage中创建和初始化propName对应的属性，
   * 并返回其引用。defaultValue须为T类型，可以为null或undefined。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @param { T } defaultValue - 当propName在LocalStorage中不存在时，使用defaultValue在LocalStorage中初始化对应的propName，
   *     defaultValue可以为null或undefined。
   * @returns { AbstractProperty<T> } AbstractProperty<T>的实例，为LocalStorage中propName对应属性的引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>;

  /**
   * 如果给定的propName在[LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)
   * 实例中存在，则返回与LocalStorage中propName对应属性的双向绑定数据。
   * 双向绑定数据的修改会被同步回LocalStorage中，LocalStorage会将变化同步到所有绑定该propName的数据和Component中。
   * 如果LocalStorage中不存在propName，则返回undefined。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { SubscribedAbstractProperty<T> | undefined } SubscribedAbstractProperty<T>的实例，
   *     与LocalStorage中propName对应属性的双向绑定的数据，如果LocalStorage中不存在对应的propName，则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public link<T>(propName: string): SubscribedAbstractProperty<T> | undefined;

  /**
   * 与[link]{@link LocalStorage#link}接口类似，如果给定的propName在
   * [LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)中存在，
   * 则返回该propName对应的属性的双向绑定数据。如果不存在，则使用defaultValue在LocalStorage中创建和初始化propName对应的属性，
   * 返回其双向绑定数据。defaultValue必须为T类型。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @param { T } defaultValue - 当propName在LocalStorage中不存在时，使用defaultValue在LocalStorage中初始化对应的propName。
   * @returns { SubscribedAbstractProperty<T> } SubscribedAbstractProperty<T>的实例，
   *     与LocalStorage中propName对应属性的双向绑定的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * 判断propName对应的属性是否在[LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)中存在。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { boolean } 如果propName对应的属性在LocalStorage中存在，则返回true。不存在则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public has(propName: string): boolean;

  /**
   * 获取propName在[LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)中对应的属性值。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { T | undefined } LocalStorage中propName对应的属性值，如果不存在则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public get<T>(propName: string): T | undefined;

  /**
   * 在[LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)
   * 中设置propName对应属性的值。如果newValue的值和propName对应属性的值相同，
   * 即不需要做赋值操作，状态变量不会通知UI刷新propName对应属性的值。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @param { T } newValue - 属性值。
   * @returns { boolean } 如果LocalStorage中不存在propName对应的属性，返回false。设置成功返回true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public set<T>(propName: string, newValue: T): boolean;

  /**
   * 如果propName已经在[LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)
   * 中存在，并且newValue和propName对应属性的值不同，
   * 则设置propName对应属性的值为newValue，否则状态变量不会通知UI刷新propName对应属性的值。
   * 如果propName不存在，则创建propName属性，值为newValue。setOrCreate只可以创建单个LocalStorage的键值对，
   * 如果想创建多个LocalStorage键值对，可以多次调用此方法。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @param { T } newValue - 属性值。
   * @returns { boolean } 如果LocalStorage中存在propName，则更新其值为newValue，返回true。
   *     如果LocalStorage中不存在propName，则创建propName，并初始化其值为newValue，返回true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public setOrCreate<T>(propName: string, newValue: T): boolean;

  /**
   * 返回[LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)中所有的属性名。
   *
   * @returns { IterableIterator<string> } LocalStorage中所有的属性名。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public keys(): IterableIterator<string>;

  /**
   * 返回[LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)中的属性数量。
   *
   * @returns { int } LocalStorage中属性的数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public size(): int;

  /**
   * 在[LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)
   * 中删除propName对应的属性。在LocalStorage中删除属性的前提是该属性已经没有订阅者，
   * 如果有订阅者，则返回false。如果没有订阅者则删除成功并返回true。
   * 属性的订阅者为：
   * [\@LocalStorageLink](docroot://ui/state-management-static/arkts-static-localstorage.md#localstoragelink)、
   * [\@LocalStoragePropRef](docroot://ui/state-management-static/arkts-static-localstorage.md#localstoragepropref)
   * 装饰的变量。
   * 删除订阅者：
   * 需要等待使用\@LocalStorageLink/\@LocalStoragePropRef的自定义组件被垃圾回收。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { boolean } 如果LocalStorage中有对应的属性，且该属性已经没有订阅者，则删除成功，返回true。
   *     如果属性不存在，或者该属性还存在订阅者，则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public delete(propName: string): boolean;

  /**
   * 删除[LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)中所有的属性。删除所有属性的前提是已经没有任何订阅者。
   * 如果有订阅者，clear不会生效并返回false。如果没有订阅者则删除成功并返回true。
   * 订阅者的含义参考[delete]{@link LocalStorage#delete}。
   *
   * @returns { boolean } 如果LocalStorage中的属性已经没有任何订阅者，则删除成功，并返回true。否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public clear(): boolean;
}