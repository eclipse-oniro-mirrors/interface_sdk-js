/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit BasicServicesKit
 * @arkts 1.1&1.2
 */

import { AsyncCallback } from './@ohos.base';

/**
 * Provides file path related APIS.
 *
 * @namespace configPolicy
 * @syscap SystemCapability.Customization.ConfigPolicy
 * @systemapi
 * @since arkts {'1.1':'8','1.2':'20'}
 */
declare namespace configPolicy {
  /**
   * Define followXMode.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   */
  export enum FollowXMode {
    /**
     * Default mode.
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     */
    DEFAULT = 0,

    /**
     * No rules are followed, will not use any follow rule, even if the followx_file_list.cfg exists.
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     */
    NO_RULE_FOLLOWED = 1,

    /**
     * Follow rule by default SIM card.
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     */
    SIM_DEFAULT = 10,

    /**
     * Follow rule by slot 1 SIM card.
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     */
    SIM_1 = 11,

    /**
     * Follow rule by slot 2 SIM card.
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     */
    SIM_2 = 12,

    /**
     * Follow rule by user defined, get follow rule add path from @param extra.
     * Follow rule in followx_file_list.cfg will be ignored.
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     */
    USER_DEFINED = 100
  }

  /**
   * Gets the file from the highest priority config path containing the given file name.
   *
   * @param { string } relPath - the relative path of the config file.
   * @param { AsyncCallback<string> } callback - contains the path of the highest priority config file.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'8','1.2':'20'}
   */
  function getOneCfgFile(relPath: string, callback: AsyncCallback<string>): void;

  /**
   * Gets the file from the highest priority config path containing the given file name in follow mode.
   *
   * @param { string } relPath - the relative path of the config file.
   * @param { FollowXMode } followMode - the follow mode.
   * @param { AsyncCallback<string> } callback - contains the path of the highest priority config file.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'11','1.2':'20'}
   */
  function getOneCfgFile(relPath: string, followMode: FollowXMode, callback: AsyncCallback<string>): void;

  /**
   * Gets the file from the highest priority config path containing the given file name in follow mode.
   *
   * @param { string } relPath - the relative path of the config file.
   * @param { FollowXMode } followMode - the follow mode.
   * @param { string } extra - set follow rule add path, only valid when followMode is USER_DEFINED.
   * @param { AsyncCallback<string> } callback - contains the path of the highest priority config file.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'11','1.2':'20'}
   */
  function getOneCfgFile(relPath: string, followMode: FollowXMode, extra: string, callback: AsyncCallback<string>): void;

  /**
   * Gets the file from the highest priority config path containing the given file name.
   *
   * @param { string } relPath - the relative path of the config file.
   * @returns { Promise<string> } the promise returns the path of the highest priority config file.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'8','1.2':'20'}
   */
  function getOneCfgFile(relPath: string): Promise<string>;

  /**
   * Gets the file from the highest priority config path containing the given file name in follow mode.
   *
   * @param { string } relPath - the relative path of the config file.
   * @param { FollowXMode } followMode - the follow mode.
   * @param { string } extra - set follow rule add path, must be set when followMode is USER_DEFINED.
   * @returns { Promise<string> } the promise returns the path of the highest priority config file.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'11','1.2':'20'}
   */
  function getOneCfgFile(relPath: string, followMode: FollowXMode, extra?: string): Promise<string>;

  /**
   * Gets the file from the highest priority config path containing the given file name, can set follow mode or not.
   *
   * @param { string } relPath - the relative path of the config file.
   * @param { FollowXMode } followMode - the follow mode.
   * @param { string } extra - set follow rule add path, must be set when followMode is USER_DEFINED.
   * @returns { string } the path of the highest priority config file.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'11','1.2':'20'}
   */
  function getOneCfgFileSync(relPath: string, followMode?: FollowXMode, extra?: string): string;

  /**
   * Gets the config files in device architecture, ordered by priority from low to high.
   *
   * @param { string } relPath - the relative path of the config file.
   * @param { AsyncCallback<Array<string>> } callback - contains paths of config files.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'8','1.2':'20'}
   */
  function getCfgFiles(relPath: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * Gets the config files in device architecture in follow mode, ordered by priority from low to high.
   *
   * @param { string } relPath - the relative path of the config file.
   * @param { FollowXMode } followMode - the follow mode.
   * @param { AsyncCallback<Array<string>> } callback - contains paths of config files.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'11','1.2':'20'}
   */
  function getCfgFiles(relPath: string, followMode: FollowXMode, callback: AsyncCallback<Array<string>>): void;

  /**
   * Gets the config files in device architecture in follow mode, ordered by priority from low to high.
   *
   * @param { string } relPath - the relative path of the config file.
   * @param { FollowXMode } followMode - the follow mode.
   * @param { string } extra - set follow rule add path, only valid when followMode is USER_DEFINED.
   * @param { AsyncCallback<Array<string>> } callback - contains paths of config files.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'11','1.2':'20'}
   */
  function getCfgFiles(relPath: string, followMode: FollowXMode, extra: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * Gets the config files in device architecture, ordered by priority from low to high.
   *
   * @param { string } relPath - the relative path of the config file.
   * @returns { Promise<Array<string>> } the promise returns paths of config files.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'8','1.2':'20'}
   */
  function getCfgFiles(relPath: string): Promise<Array<string>>;

  /**
   * Gets the config files in device architecture in follow mode, ordered by priority from low to high, can set follow mode or not.
   *
   * @param { string } relPath - the relative path of the config file.
   * @param { FollowXMode } followMode - the follow mode.
   * @param { string } extra - set follow rule add path, must be set when followMode is USER_DEFINED.
   * @returns { Promise<Array<string>> } the promise returns paths of config files.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'11','1.2':'20'}
   */
  function getCfgFiles(relPath: string, followMode: FollowXMode, extra?: string): Promise<Array<string>>;

  /**
   * Gets the config files in device architecture, ordered by priority from low to high.
   *
   * @param { string } relPath - the relative path of the config file.
   * @param { FollowXMode } followMode - the follow mode.
   * @param { string } extra - set follow rule add path, must be set when followMode is USER_DEFINED.
   * @returns { Array<string> } the paths of config files.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'11','1.2':'20'}
   */
  function getCfgFilesSync(relPath: string, followMode?: FollowXMode, extra?: string): Array<string>;

  /**
   * Gets the config directory in the device architecture, ordered by priority from low to high.
   *
   * @param { AsyncCallback<Array<string>> } callback - contains paths of config directories.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'8','1.2':'20'}
   */
  function getCfgDirList(callback: AsyncCallback<Array<string>>): void;

  /**
   * Gets the config directory in the device architecture, ordered by priority from low to high.
   *
   * @returns { Promise<Array<string>> } the promise returns paths of config directories.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  /**
   * Gets the list of configuration level directories, sorted in ascending order of priority.
   *
   * @returns { Promise<Array<string>> } the promise returns the list of configuration level directories.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'12','1.2':'20'}
   */
  function getCfgDirList(): Promise<Array<string>>;

  /**
   * Gets the config directory in the device architecture, ordered by priority from low to high.
   *
   * @returns { Array<string> } the paths of config directories.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  /**
   * Gets the list of configuration level directories, sorted in ascending order of priority.
   *
   * @returns { Array<string> } the list of configuration level directories.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'12','1.2':'20'}
   */
  function getCfgDirListSync(): Array<string>;
}

export default configPolicy;
