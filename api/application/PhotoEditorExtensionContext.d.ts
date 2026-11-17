/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit AbilityKit
 */

import ExtensionContext from './ExtensionContext';
import type { AbilityResult } from '../ability/abilityResult';
import image from '../@ohos.multimedia.image';

/**
 * The context of Photo Editor extension. It allows access to PhotoEditorExtension-specific resources.
 *
 * @syscap SystemCapability.Ability.AppExtension.PhotoEditorExtension
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
declare class PhotoEditorExtensionContext extends ExtensionContext {
  /**
   * Save image data by uri.
   *
   * @param { string } uri Image editing URI.
   * @returns { Promise<AbilityResult> } Returns the result of save.
   * @throws { BusinessError } 401 - [Async] Params error. Possible causes: 
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 29600001 - Internal error.
   * @throws { BusinessError } 29600002 - Image input error.
   * @throws { BusinessError } 29600003 - Image too big.
   * @syscap SystemCapability.Ability.AppExtension.PhotoEditorExtension
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  saveEditedContentWithUri(uri: string): Promise<AbilityResult>;

  /**
   * Save image data by image pixelMap.
   *
   * @param { image.PixelMap } pixelMap Image pixelMap.
   * @param { image.PackingOption } option Option for image packing.
   * @returns { Promise<AbilityResult> } Promise used to return the result of save.
   * @throws { BusinessError } 401 - [Async] Parameter error. Possible causes: 
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 29600001 - Internal error.
   * @throws { BusinessError } 29600002 - Image input error.
   * @throws { BusinessError } 29600003 - Image too big.
   * @syscap SystemCapability.Ability.AppExtension.PhotoEditorExtension
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  saveEditedContentWithImage(pixelMap: image.PixelMap, option: image.PackingOption): Promise<AbilityResult>;
}

export default PhotoEditorExtensionContext;