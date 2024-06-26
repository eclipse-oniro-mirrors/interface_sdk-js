/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */


/**
 * @namespace abilityAccessCtrl
 * @syscap SystemCapability.Security.AccessToken
 * @since 12
 */
declare namespace abilityAccessCtrl {
  /**
   * Obtains the AtManager instance.
   * @param {object} name
   * @returns { string } returns the instance of the AtManager.
   * @syscap SystemCapability.Security.AccessToken
   * @since 11
   */
  function createManager(name: { [key: string]: string[] }): string;

}