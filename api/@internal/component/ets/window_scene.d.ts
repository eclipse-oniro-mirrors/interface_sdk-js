/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * Defines the interface of WindowScene.
 *
 * @interface WindowSceneInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
interface WindowSceneInterface {
  /**
   * Called when the WindowScene is used.
   *
   * @param { number } persistentId - indicates the persistent identifier of WindowScene.
   * @returns { WindowSceneAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  (persistentId: number): WindowSceneAttribute;
}

/**
 * Defines the attribute functions of WindowScene.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare class WindowSceneAttribute extends CommonMethod<WindowSceneAttribute> {
}

/**
 * Defines the WindowScene component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare const WindowScene: WindowSceneInterface;

/**
 * Defines the WindowScene instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare const WindowSceneInstance: WindowSceneAttribute;
