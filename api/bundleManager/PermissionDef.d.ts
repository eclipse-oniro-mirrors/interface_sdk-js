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
 * Indicates the defined permission details in file config.json
 *
 * @typedef PermissionDef
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 9 dynamic
 * @since 20 static
 */
export interface PermissionDef {
  /**
   * Indicates the name of this permission
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 20 static
   */
  readonly permissionName: string;

  /**
   * Indicates the grant mode of this permission
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 20 static
   */
  readonly grantMode: int;

  /**
   * Indicates the labelId of this permission
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 20 static
   */
  readonly labelId: long;

  /**
   * Indicates the descriptionId of this permission
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 20 static
   */
  readonly descriptionId: long;
}
