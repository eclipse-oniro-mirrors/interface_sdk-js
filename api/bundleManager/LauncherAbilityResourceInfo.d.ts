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
 * @kit AbilityKit
 */

/*** if arkts 1.1 */
import { DrawableDescriptor } from './../@ohos.arkui.drawableDescriptor';
/*** endif */

/**
 * Obtains resource information about a launcher ability
 *
 * @typedef LauncherAbilityResourceInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Resource
 * @systemapi
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface LauncherAbilityResourceInfo {
  /**
   * Indicates the bundleName of this ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly bundleName: string;

  /**
   * Indicates the moduleName of this ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly moduleName: string;

  /**
   * Indicates the abilityName of this ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly abilityName: string;

  /**
   * Indicates the icon of this ability, which is base64 format
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly icon: string;

  /**
   * Indicates the label of this ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly label: string;

  /**
   * Indicates the drawable descriptor of this ability icon
   *
   * @type { DrawableDescriptor }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 12
   */
  readonly drawableDescriptor: DrawableDescriptor;

  /**
   * Indicates the index of the bundle
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly appIndex: number;
}
