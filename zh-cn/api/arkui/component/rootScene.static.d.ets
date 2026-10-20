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

import { AttributeModifier, CommonMethod } from './common';
import { ComponentBuilder, CustomBuilder } from './builder';

/**
 * 定义 RootScene 的会话。
 *
 * @interface RootSceneSession
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RootSceneSession {
}

/**
 * 定义 RootScene 的属性函数。
 *
 * @extends CommonMethod
 * @typedef { RootSceneAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RootSceneAttribute extends CommonMethod {
  /**
   * 设置属性修饰符
   * 
   * @param { AttributeModifier<RootSceneAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { RootSceneAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier:
    AttributeModifier<RootSceneAttribute> | AttributeModifier<CommonMethod> | undefined) : this;
}

/**
 * 定义 RootScene 组件。
 *
 * @param { RootSceneSession } session
 * @param { CustomBuilder } [content_] - container
 * @returns { RootSceneAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function RootScene(
    session: RootSceneSession,
    content_?: CustomBuilder,
): RootSceneAttribute;