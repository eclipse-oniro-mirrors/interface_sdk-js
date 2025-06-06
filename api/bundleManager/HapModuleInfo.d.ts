/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

import { AbilityInfo } from './AbilityInfo';
import { ExtensionAbilityInfo } from './ExtensionAbilityInfo';
import { Metadata } from './Metadata';
import bundleManager from './../@ohos.bundle.bundleManager';

/**
 * Obtains configuration information about a hap module.
 *
 * @typedef HapModuleInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * Obtains configuration information about a hap module.
 *
 * @typedef HapModuleInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @since 10
 */
/**
 * Obtains configuration information about a hap module.
 *
 * @typedef HapModuleInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface HapModuleInfo {
  /**
   * Indicates the name of this hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the name of this hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the name of this hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly name: string;

  /**
   * Indicates the icon of this hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the icon of this hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the icon of this hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly icon: string;

  /**
   * Indicates the icon id of this hap module
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the icon id of this hap module
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the icon id of this hap module
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly iconId: number;

  /**
   * Indicates the label of this hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the label of this hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the label of this hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly label: string;

  /**
   * Indicates the label id of this hap module
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the label id of this hap module
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the label id of this hap module
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly labelId: number;

  /**
   * Describes the hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Describes the hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Describes the hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly description: string;

  /**
   * Indicates the description of this hap module
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the description of this hap module
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the description of this hap module
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly descriptionId: number;

  /**
   * Indicates main elementName of the hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates main elementName of the hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates main elementName of the hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly mainElementName: string;

  /**
   * Obtains configuration information about abilities
   *
   * @type { Array<AbilityInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Obtains configuration information about abilities
   *
   * @type { Array<AbilityInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains configuration information about abilities
   *
   * @type { Array<AbilityInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly abilitiesInfo: Array<AbilityInfo>;

  /**
   * Obtains configuration information about extension abilities
   *
   * @type { Array<ExtensionAbilityInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Obtains configuration information about extension abilities
   *
   * @type { Array<ExtensionAbilityInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly extensionAbilitiesInfo: Array<ExtensionAbilityInfo>;

  /**
   * Indicates the metadata of ability
   *
   * @type { Array<Metadata> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the metadata of ability
   *
   * @type { Array<Metadata> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the metadata of ability
   *
   * @type { Array<Metadata> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly metadata: Array<Metadata>;

  /**
   * The device types that this hap module can run on
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * The device types that this hap module can run on
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * The device types that this hap module can run on
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly deviceTypes: Array<string>;

  /**
   * Indicates whether free installation of the hap module is supported
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates whether free installation of the hap module is supported
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates whether free installation of the hap module is supported
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly installationFree: boolean;

  /**
   * Indicates the hash value of the hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the hash value of the hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the hash value of the hap module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly hashValue: string;

  /**
   * Indicates the type of the module
   *
   * @type { bundleManager.ModuleType }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the type of the module
   *
   * @type { bundleManager.ModuleType }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the type of the module
   *
   * @type { bundleManager.ModuleType }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  readonly type: bundleManager.ModuleType;

  /**
   * Indicates the dependency module that this module depends on
   *
   * @type { Array<Dependency> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the dependency module that this module depends on
   *
   * @type { Array<Dependency> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly dependencies: Array<Dependency>;

  /**
   * Indicates the preload module
   *
   * @type { Array<PreloadItem> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the preload module
   *
   * @type { Array<PreloadItem> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly preloads: Array<PreloadItem>;

  /**
   * Indicates the menu configuration
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly fileContextMenuConfig: string;

  /**
   * Indicates the router information of the module
   *
   * @type { Array<RouterItem> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly routerMap: Array<RouterItem>;

  /**
   * Indicates native library path.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly nativeLibraryPath: string;

  /**
   * Indicates the code path
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly codePath: string;
}

/**
 * Indicates the dependency
 *
 * @typedef Dependency
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * Indicates the dependency
 *
 * @typedef Dependency
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface Dependency {
  /**
   * Indicates the module name
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the module name
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly moduleName: string;

  /**
   * Indicates the bundle name of the dependency
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  /**
   * Indicates the bundle name of the dependency
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly bundleName: string;

  /**
   * Indicates the version code of the dependency
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  /**
   * Indicates the version code of the dependency
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly versionCode: number;
}

/**
 * Indicates the preloadItem
 *
 * @typedef PreloadItem
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * Indicates the preloadItem
 *
 * @typedef PreloadItem
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface PreloadItem {
  /**
   * Indicates the module name need preload
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the module name need preload
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly moduleName: string;
}

/**
 * Indicates the router item
 *
 * @typedef RouterItem
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface RouterItem {
  /**
   * Indicates the name of the module to which the current page belongs
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly name: string;
  /**
   * Indicates the file path of the current page within the module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly pageSourceFile: string;
  /**
   * Indicates the name of the function @Builder decorated
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly buildFunction: string;
  /**
   * Indicates the json string of custom data
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly customData: string;
  /**
   * Indicates the data
   *
   * @type { Array<DataItem> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly data: Array<DataItem>;
}

/**
 * Indicates the data item defined in router item
 *
 * @typedef DataItem
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface DataItem {
  /**
   * Indicates the key of the custom data item
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly key: string;
  /**
   * Indicates the value of the custom data item
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly value: string;
}