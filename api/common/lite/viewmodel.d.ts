/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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

/**
 * Defines the focus param.
 *
 * @interface FocusParamObj
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 3 dynamiconly
 */
export interface FocusParamObj {
  /**
   * Whether needs to focus
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3 dynamiconly
   */
  focus: boolean;
}


/**
 * View model
 * @interface ViewModel
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 4 dynamiconly
 */
export interface ViewModel {
  /**
   * Displays content based on the current system language and a path of the language resource key specified through $t.
   *
   * @param { string } path - Path of the language resource key
   * @param { object | Array<any> } [param] - Content used to replace placeholders during runtime. There are two types of placeholders available:
   *              1. Named placeholder, for example, {name}. The actual content must be of the object type, for example, $t('strings.object', {name: 'Hello world'}).
   *              2. Digit placeholder, for example, {0}. The actual content must be of the array type, for example, $t('strings.array', ['Hello world']).
   * @returns { string } content to display
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  $t(path: string, param?: object | Array<any>): string;

  /**
   * An object that holds all DOM elements and component instances that have been registered with the refs attribute
   *
   * @type { ElementReferences }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  $refs: ElementReferences;
}

/**
 * List scroll to options
 * @interface ListScrollToOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 4 dynamiconly
 */
export interface ListScrollToOptions {
  /**
   * specified position.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  index: number;
}

/**
 * List element
 * @interface ListElement
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 4 dynamiconly
 */
export interface ListElement {
  /**
   * Scrolls the list to the position of the item at the specified index.
   *
   * @param { ListScrollToOptions } position
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  scrollTo(position: ListScrollToOptions): void;

  /**
   * Requests or cancels the crown rotation focus for a component.
   * If focus is set to true, the crown event focus is requested.
   * If focus is set to false, the crown event focus is canceled.
   * This attribute can be defaulted to true.
   *
   * @param { FocusParamObj } [obj] - { focus: true | false }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  rotation(obj?: FocusParamObj): void;
}

/**
 * The <swiper> component provides a swiper container.
 *
 * @interface SwiperElement
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 4 dynamiconly
 */
export interface SwiperElement {
  /**
   * Requests or cancels the crown rotation focus for a component.
   * If focus is set to true, the crown event focus is requested.
   * If focus is set to false, the crown event focus is canceled.
   * This attribute can be defaulted to true.
   *
   * @param { FocusParamObj } [obj] - { focus: true | false }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  rotation(obj?: FocusParamObj): void;
}

/**
 * The <picker> component supports common, date, time, and multi-column text.
 *
 * @interface PickerElement
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 4 dynamiconly
 */
export interface PickerElement {
  /**
   * Requests or cancels the crown rotation focus for a component.
   * If focus is set to true, the crown event focus is requested.
   * If focus is set to false, the crown event focus is canceled.
   * This attribute can be defaulted to true.
   *
   * @param { FocusParamObj } [obj] - { focus: true | false }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  rotation(obj?: FocusParamObj): void;
}

/**
 * Image animator element
 * @interface ImageAnimatorElement
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 4 dynamiconly
 */
export interface ImageAnimatorElement {
  /**
   * Starts to play the frame animation of an image. If this method is called again, the playback starts from the first frame.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  start(): void;
  /**
   * Pauses the frame animation playback of an image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  pause(): void;
  /**
   * Stops the frame animation playback of an image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  stop(): void;
  /**
   * Resumes the frame animation playback of an image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  resume(): void;
  /**
   * Obtains the playback state. Available values are as follows:
   * Playing
   * Paused
   * Stopped
   *
   * @returns { "Playing" | "Paused" | "Stopped" }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  getState(): "Playing" | "Paused" | "Stopped";
}

/**
 * Element References
 * @interface ElementReferences
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 4 dynamiconly
 */
export interface ElementReferences {
  [k: string]: object & ListElement & ImageAnimatorElement;
}

/**
 * Options type
 * @interface Options
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 4 dynamiconly
 */
export interface Options<T extends ViewModel, Data = DefaultData<T>> {
  /**
   * Data model of the page that can be converted into a JSON object.
   * The attribute name cannot start with $ or an underscore (_) or contain the reserved words such as for, if, show, and tid.
   * For a function, the return value must be an object.
   * Set the value of data to the return value of the function during page initialization.
   *
   * @type { ?Data }
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  data?: Data;

  /**
   * Called when the page is initialized. This function can be called only once in a lifecycle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  onInit?(): void;

  /**
   * Called when the page is created. This function can be called only once in a lifecycle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  onReady?(): void;

  /**
   * Called when the page is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  onShow?(): void;

  /**
   * Called when the application is created
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  onCreate?(): void;

  /**
   * Called when the application is destroyed or called when the page is redirected to another one (without entering the navigation stack).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 4 dynamiconly
   */
  onDestroy?(): void;

  /**
   * Called when the user data need to be saved
   *
   * @param { Object } data - Indicates the user data to save.
   * @returns { boolean } Returns {@code true} if the data is successfully saved; returns {@code false} otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 10 dynamiconly
   */
  onSaveData?(data: Object): boolean;

  /**
   * Called when the user data need to be restored
   *
   * @param { Object } data - Indicates the user data to restore.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 10 dynamiconly
   */
  onRestoreData?(data: Object): void;
}

/**
 * Used for ide.
 *
 * @typedef { object } DefaultData<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @systemapi
 * @since 4 dynamiconly
 */
type DefaultData<T> = object;

/**
 * Used for ide.
 *
 * @typedef { object & Options<T, Data> & ThisType<T & ViewModel & Data> } CombinedOptions<T extends ViewModel, Data>
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @systemapi
 * @since 4 dynamiconly
 */
type CombinedOptions<T extends ViewModel, Data> = object &
  Options<T, Data> &
  ThisType<T & ViewModel & Data>;

/**
 * @param { CombinedOptions<T, Data> } options
 * @returns { ViewModel & Data }
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @systemapi
 * @since 4 dynamiconly
 */
export declare function extendViewModel<T extends ViewModel, Data>(
  options: CombinedOptions<T, Data>
): ViewModel & Data;
