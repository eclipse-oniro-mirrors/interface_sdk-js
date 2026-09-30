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
 * Sets the interval for repeatedly calling a function.
 *
 * @param { Function } handler - Indicates the function to be called repeatedly at the interval.
 * @param { number } delay - Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @famodelonly
 * @since 5 dynamiconly
 */
export declare function setInterval(
  handler: Function,
  delay: number,
  ...arguments: any[]
): number;

/**
 * Sets a timer after which a function will be executed.
 *
 * @param { Function } handler - Indicates the function to be called after the timer goes off.
 * @param { number } [delay] - Indicates the delay (in milliseconds) after which the function will be called.
 * If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @famodelonly
 * @since 5 dynamiconly
 */
export declare function setTimeout(
  handler: Function,
  delay?: number,
  ...arguments: any[]
): number;

/**
 * Cancels the interval set by " setInterval()".
 *
 * @param { number } [intervalID] - Indicates the timer ID returned by "setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @famodelonly
 * @since 5 dynamiconly
 */
export declare function clearInterval(intervalID?: number): void;

/**
 * Cancels the timer set by " setTimeout()".
 *
 * @param { number } [timeoutID] - Indicates the timer ID returned by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @famodelonly
 * @since 5 dynamiconly
 */
export declare function clearTimeout(timeoutID?: number): void;

/**
 * Get the java interface instance. The java instance needs to register, otherwise it cannot be obtained.
 * After obtaining the instance, you can call the function with the same name on the Java side.
 *
 * @param { string } [name] - Java interface name, including package path, such as com.example.test.timeinterfaceimpl.
 * @returns { any } A promise object is returned. The resolve callback is the object of PA.
 * The reject callback returns the object containing code and error data.
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @famodelonly
 * @since 5 dynamiconly
 * @deprecated since 8
 */
export declare function createLocalParticleAbility(name?: string): any;

/**
 * Conditional compilation for rich equipment
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @famodelonly
 * @since 5 dynamiconly
 */
export declare const STANDARD: string;

/**
 * Conditional compilation for lite equipment
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @famodelonly
 * @since 5 dynamiconly
 */
export declare const LITE: string;

/**
 * Defining syscap function.
 *
 * @param { string } syscap
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @famodelonly
 * @since 8 dynamiconly
 */
export declare function canIUse(syscap: string): boolean;

/**
 * Obtain the objects exposed in app.js
 *
 * @returns { object }
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @famodelonly
 * @since 10 dynamiconly
 */
export declare function getApp(): object;

/**
 * Sets a rotary crown event monitor for the page. When a rotating crown event is triggered, the monitor triggers a
 * callback.
 *
 * This monitor is automatically removed when page routing occurs. It can be manually removed using the
 * **clearMonitorForCrownEvents** API.
 *
 * > **NOTE**
 * >
 * > - The monitor is automatically removed when page routing occurs. Therefore, it is recommended that this API be
 * > called in the **onShow** lifecycle callback of the page.
 * > - Only one monitor is supported per page. A newly registered monitor overwrites the previous one, and the system
 * > uses the monitor passed in the last call to this API.
 * > - Do not use this function in app.js, as its behavior is undefined.
 *
 * @param { Function } handler - Callback executed after a rotating crown event occurs. The callback format is
 * **(event)=>{ return false/true; }**.<br>If **true** is returned, the rotating crown event is no longer distributed
 * to the focused component.<br>If **false** is returned, the rotating crown event continues to be distributed to the
 * focused component. If the callback returns an abnormal value, such as **undefined** or no return value, the
 * default value is **false**.<br>The rotating crown event information can be obtained through the input parameter.
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @famodelonly
 * @since 24 dynamiconly
 */
export declare function setMonitorForCrownEvents(handler: Function): void;

/**
 * Clears the rotating crown event monitor for the page.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @famodelonly
 * @since 24 dynamiconly
 */
export declare function clearMonitorForCrownEvents(): void;