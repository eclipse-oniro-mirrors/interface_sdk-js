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
 */

import { Position } from './units';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';

/**
 * WindowScene 属性
 *
 * @extends CommonMethod
 * @interface WindowSceneAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface WindowSceneAttribute extends CommonMethod {
  /**
   * 设置 WindowScene 的吸引变形效果。
   * 
   * @param { Position | undefined } destination - The position of the
   *     attraction target point in the component coordinate system.
   * @param { double | undefined } fraction - indicates the fraction of WindowScene.
   * @returns { WindowSceneAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default attractionEffect(destination: Position | undefined, fraction: double | undefined): this;

  /**
   * 设置属性修饰符
   * 
   * @param { AttributeModifier<WindowSceneAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { WindowSceneAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier:
    AttributeModifier<WindowSceneAttribute> | AttributeModifier<CommonMethod> | undefined) : this;
}

/**
 * 定义 WindowScene 组件。
 *
 * @param { int } persistentId
 * @param { CustomBuilder } [content_] - container
 * @returns { WindowSceneAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function WindowScene(
    persistentId: int,
    content_?: CustomBuilder,
): WindowSceneAttribute;