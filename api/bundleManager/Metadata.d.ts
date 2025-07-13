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
 * @kit AbilityKit
 */

/**
 * Indicates the Metadata
 *
 * @typedef Metadata
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * Indicates the Metadata
 *
 * @typedef Metadata
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @since 10
 */
/**
 * Indicates the Metadata
 *
 * @typedef Metadata
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface Metadata {
  /**
   * Indicates the metadata name
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the metadata name
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the metadata name
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  name: string;

  /**
   * Indicates the metadata value
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the metadata value
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the metadata value
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  value: string;

  /**
   * Indicates the metadata resource
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the metadata resource
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the metadata resource
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  resource: string;

  /**
   * Indicates the value id of the metadata
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly valueId?: number;
}
