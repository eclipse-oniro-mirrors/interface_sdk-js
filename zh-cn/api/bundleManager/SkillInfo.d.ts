/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file SkillInfo
 * @kit AbilityKit
 */

/**
 * 提供Skill的相关信息。Skill是一个可安装的能力单位，可以被发现并由Agent框架调用。
 *
 * @typedef SkillInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 * @since 26.1.0 static
 */
export interface SkillInfo {
  /**
   * Skill的应用名称。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  readonly bundleName: string;

  /**
   * Skill的模块名称。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  readonly moduleName: string;

  /**
   * Skill名称。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  readonly skillName: string;

  /**
   * Skill类型。
   *
   * @type { SkillType }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  readonly skillType: SkillType;

  /**
   * Skill的安装包路径。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  readonly skillPath: string;

  /**
   * Skill关联的ability名称。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  readonly abilityName: string;

  /**
   * Skill的版本号。
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  readonly versionCode: long;

  /**
   * Skill的描述信息。
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  readonly description?: string;

  /**
   * Skill的srcEntries信息。
   *
   * @type { ?Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  readonly srcEntries?: Array<string>;

  /**
   * Skill所需的权限。
   *
   * @type { ?Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  readonly permissions?: Array<string>;

  /**
   * 表示应用包中requestPermissions下声明的权限。
   *
   * @type { ?Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  readonly requestPermissions?: Array<string>;
}

/**
 * 枚举Skill类型。
 *
 * @enum { int }
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 * @since 26.1.0 static
 */
export enum SkillType {
  /**
   * 应用Skill。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  APP_SKILL = 0,
  /**
   * 独立Skill
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  INDEPENDENT_SKILL = 1
}