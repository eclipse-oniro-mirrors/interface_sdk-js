/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file Defines the context of driver extension
 * @kit DriverDevelopmentKit
 */

import ExtensionContext from './ExtensionContext';

/**
 * The context of driver extension. It allows access to
 * driverExtension-specific resources.
 * 
 * @extends ExtensionContext
 * @syscap SystemCapability.Driver.ExternalDevice
 * @StageModelOnly
 * @since arkts {'1.1':'10', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class DriverExtensionContext extends ExtensionContext {
  /**
   * update the state of driver extension.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  updateDriverState(): void;
}
/**
 * Define a DriverExtensionContext.
 *
 * @typedef { DriverExtensionContext }
 * @syscap SystemCapability.Driver.ExternalDevice
 * @stagemodelonly
 * @since arkts {'1.1':'10', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export default DriverExtensionContext;
