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
 * @kit ArkData
 */

/**
 * Provides methods for intelligent data processing.
 *
 * @namespace intelligence
 * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
 * @since 16
 */
declare namespace intelligence {
  /**
   * Obtains a text embedding model.
   *
   * @param { ModelConfig } config - The configuration of the embedding model.
   * @returns { Promise<TextEmbedding> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 31300000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 16
   */
  function getTextEmbeddingModel(config: ModelConfig): Promise<TextEmbedding>;

  /**
   * Obtains an image embedding model.
   *
   * @param { ModelConfig } config - The configuration of the embedding model.
   * @returns { Promise<ImageEmbedding> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 31300000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 16
   */
  function getImageEmbeddingModel(config: ModelConfig): Promise<ImageEmbedding>;

  /**
   * Manages configurations of the embedding model.
   *
   * @interface ModelConfig
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 16
   */
  interface ModelConfig {
    /**
     * Version of the model.
     * The outputs of text or image embedding models with the same version are in the same vector space.
     *
     * @type { ModelVersion }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 16
     */
    version: ModelVersion;

    /**
     * Indicates whether NPU is used.
     *
     * @type { boolean }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 16
     */
    isNpuAvailable: boolean;

    /**
     * If NPU is used for accelerating, a local path is required for model caching.
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 16
     */
    cachePath?: string;
  }

  /**
   * Version of the model.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 16
   */
  enum ModelVersion {
    /**
     * The basic embedding model.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 16
     */
    BASIC_MODEL = 0
  }

  /**
   * Describes the text embedding functions of the multi-modal embedding model.
   * Chinese and English are supported.
   *
   * @interface TextEmbedding
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 16
   */
  interface TextEmbedding {
    /**
     * Loads the embedding model. If the loading fails, an error code is returned.
     *
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 16
     */
    loadModel(): Promise<void>;

    /**
     * Releases the embedding model. If the releasing fails, an error code is returned.
     *
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 16
     */
    releaseModel(): Promise<void>;

    /**
     * Obtains the embedding vector for the given text.
     * The text should be no longer than 512 tokens.
     *
     * @param { string } text - The input text of the embedding model.
     * @returns { Promise<Array<number>> } The promise used to return the embedding result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 16
     */
    getEmbedding(text: string): Promise<Array<number>>;

    /**
     * Obtains the embedding vector for the given batch of texts.
     * Each text should be no longer than 512 tokens.
     *
     * @param { Array<string> } batchTexts - The input batch of texts of the embedding model.
     * @returns { Promise<Array<Array<number>>> } The promise used to return the embedding result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 16
     */
    getEmbedding(batchTexts: Array<string>): Promise<Array<Array<number>>>;
  }

  /**
   * Describes the image embedding functions of the multi-modal embedding model.
   *
   * @interface ImageEmbedding
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 16
   */
  interface ImageEmbedding {
    /**
     * Loads the embedding model. If the loading fails, an error code is returned.
     *
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 16
     */
    loadModel(): Promise<void>;

    /**
     * Releases the embedding model. If the releasing fails, an error code is returned.
     *
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 16
     */
    releaseModel(): Promise<void>;

    /**
     * Obtains the embedding vector for the given image.
     * The image should be no larger than 20 MB.
     *
     * @param { Image } image - The input image of the embedding model.
     * @returns { Promise<Array<number>> } The promise used to return the embedding result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 16
     */
    getEmbedding(image: Image): Promise<Array<number>>;
  }

  /**
   * The type of the image can be its URI.
   *
   * @typedef { string } Image
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 16
   */
  type Image = string;

  /**
   * Chunking process for text.
   *
   * @param { string } text - Text for chunking. The length of the text is no longer then 100k tokens.
   * @param { SplitConfig } config - Configurations of text chunking.
   * @returns { Promise<Array<string>> } The promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 31300000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 16
   */
  function splitText(text: string, config: SplitConfig): Promise<Array<string>>;

  /**
   * Manages text chunk process configurations.
   *
   * @interface SplitConfig
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 16
   */
  interface SplitConfig {
    /**
     * The maximun size of chunks.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 16
     */
    size: number;

    /**
     * The ratio of overlap between adjacent chunks.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 16
     */
    overlapRatio: number;
  }
}

export default intelligence;