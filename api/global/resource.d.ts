/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit LocalizationKit
 */

/**
 * Contains resource descriptor information.
 *
 * @interface Resource
 * @syscap SystemCapability.Global.ResourceManager
 * @since 9
 */
/**
 * Contains resource descriptor information.
 *
 * @interface Resource
 * @syscap SystemCapability.Global.ResourceManager
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface Resource {
  /**
   * bundle name in hap
   *
   * @type { string }
   * @syscap SystemCapability.Global.ResourceManager
   * @since 9
   */
  /**
   * bundle name in hap
   *
   * @type { string }
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  bundleName: string;

  /**
   * module name in hap
   *
   * @type { string }
   * @syscap SystemCapability.Global.ResourceManager
   * @since 9
   */
  /**
   * module name in hap
   *
   * @type { string }
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  moduleName: string;

  /**
   * resource id in hap
   *
   * @type { number }
   * @syscap SystemCapability.Global.ResourceManager
   * @since 9
   */
  /**
   * resource id in hap
   *
   * @type { number }
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  id: number;

  /**
   * Set params.
   *
   * @type { ?Array<Object | undefined> }
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  params?: Array<Object | undefined>;

  /**
   * Set params.
   *
   * @type { ?any[] }
   * @syscap SystemCapability.Global.ResourceManager
   * @since 9
   */

  /**
   * Set params.
   *
   * @type { ?any[] }
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  params?: any[];

  /**
   * Set type.
   *
   * @type { ?number }
   * @syscap SystemCapability.Global.ResourceManager
   * @since 9
   */
  /**
   * Set type.
   *
   * @type { ?number }
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  type?: number;
}