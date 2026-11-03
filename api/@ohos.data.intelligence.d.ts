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
 * @file ArkData Intelligence Platform
 * @kit ArkData
 */

/**
 * The ArkData Intelligence Platform (AIP) provides on-device intelligent data construction, enabling application data
 * vectorization. It uses embedding models to convert multi-modal data such as unstructured text and images into semantic
 * vectors. It applies to scenarios such as intelligent retrieval, content understanding, and similarity matching,
 * helping developers solve the problem that unstructured data is difficult to compute and compare, and improving the
 * processing efficiency and accuracy of applications in scenarios such as recommendation systems, intelligent Q&A, and
 * image recognition.
 *
 * > **NOTE**
 * >
 * > The initial APIs of this module are supported since API version 15. Newly added APIs will be marked with a
 * superscript to indicate their earliest API version.
 *
 * @namespace intelligence
 * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
 * @since 15 dynamic
 * @since 23 static
 */
declare namespace intelligence {
  /**
   * Obtains a text embedding model. This API uses a promise to return the result.
   *
   * **Device Behavior Difference:** Before API version 26.0.0, this API can be called normally on PC/2in1 devices,
   * and returns error code 801 on other device types. Since API version 26.0.0, this API can be called normally on
   * PC/2in1, Phone, and Tablet devices, and returns error code 801 on other device types.
   *
   * @param { ModelConfig } config - Configuration of the embedded model to obtain.
   * @returns { Promise<TextEmbedding> } Promise used to return the text embedding model for text vectorization.
   * @throws { BusinessError } 401 - [Sync] Parameter error. Possible causes: 
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
   * @throws { BusinessError } 31300000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  function getTextEmbeddingModel(config: ModelConfig): Promise<TextEmbedding>;

  /**
   * Obtains an image embedding model. This API uses a promise to return the result.
   *
   * **Device behavior differences:** This API can be properly called on PC/2-in-1 devices. If it is called on other
   * device types, error code 801 is returned.
   *
   * @param { ModelConfig } config - Configuration of the embedded model to obtain.
   * @returns { Promise<ImageEmbedding> } Promise used to return the image embedding model for image vectorization.
   * @throws { BusinessError } 401 - [Sync] Parameter error. Possible causes: 
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
   * @throws { BusinessError } 31300000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  function getImageEmbeddingModel(config: ModelConfig): Promise<ImageEmbedding>;

  /**
   * Defines the configuration information of the cloud-side model, which is configured when using the cloud-side text
   * embedding model. You can obtain the cloud-side model information supported by the current device through
   * {@link getSupportedCloudModel}.
   *
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface CloudModelInfo {
    /**
     * Model type name, for example, "arkdata_text_embedding" indicates the cloud-side text embedding model.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    modelType: string;

    /**
     * Model version. The default value is empty.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    modelVersionCode?: string;
  }

  /**
   * Enumerates the network policies for downloading cloud-side models.
   *
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum NetworkPolicy {
    /**
     * Download the model only over Wi-Fi. This policy applies to scenarios where mobile data traffic needs to be saved.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WIFI_ONLY = 0,

    /**
     * Download the model over both Wi-Fi and cellular networks. This policy applies to scenarios where the model needs
     * to be obtained quickly and mobile data usage is allowed.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WIFI_AND_CELLULAR = 1
  }

  /**
   * Represents the configuration an embedded model.
   *
   * @interface ModelConfig
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface ModelConfig {
    /**
     * Version of the model.
     * The outputs of text or image embedding models with the same version are in the same vector space.
     *
     * @type { ModelVersion }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    version: ModelVersion;

    /**
     * Whether to use the NPU to accelerate the vectorization process. The value **true** means to use the NPU, and the
     * value **false** means the opposite. If this parameter is set to **true** but the device does not support NPUs,
     * loading an embedding model will trigger error 31300000.
     *
     * @type { boolean }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    isNpuAvailable: boolean;

    /**
     * If NPU is used for acceleration, a local path is required for model caching. The format is /xxx/xxx/xxx, where
     * xxx is the path address, for example, "/data". The maximum length is 512 characters. The default value is "". An
     * exception is thrown when the length exceeds the limit.
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    cachePath?: string;

    /**
     * Type and version information of the cloud-side model. Configure this parameter when a text embedding model is
     * used. The supported model information is obtained through the {@link intelligence.getSupportedCloudModel } API.
     * The default value is empty.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    modelInfo?: CloudModelInfo;

    /**
     * Network policy used when downloading the cloud-side model. The default value is WIFI_ONLY. This parameter takes
     * effect only when a text embedding model is used, and does not take effect when an image embedding model is used.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    networkPolicy?: NetworkPolicy;
  }

  /**
   * Version of the model.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  enum ModelVersion {
    /**
     * The basic embedding model.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    BASIC_MODEL = 0
  }

  /**
   * Describes the text embedding function of the text embedding model.
   *
   * Before calling any of the following APIs, you must obtain a **TextEmbedding** instance by using
   * {@link getTextEmbeddingModel}
   *
   * **Device behavior differences:** This API can be properly called on PC/2-in-1, Phone, and Tablet devices. If it is
   * called on other device types, error code 801 is returned.
   *
   * @interface TextEmbedding
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface TextEmbedding {
    /**
     * Loads this text embedding model. This API uses a promise to return the result.
     *
     * **Paired call**
     * - After calling **loadModel()**, you must call [releaseModel()](#releasemodel) to release the model resources
     *  when they are no longer needed.
     * - Failure to call **releaseModel()** causes resource leakage and affects system performance.
     * - It is recommended that **releaseModel()** be placed in a **finally** block to ensure that resources are
     *  properly released.
     *
     * **Device Behavior:** Before API version 26.0.0, this API can be called normally on PC/2in1 devices and returns
     * error code 801 on other device types. Starting from API version 26.0.0, this API can be called normally on
     * PC/2in1, Phone, and Tablet devices and returns error code 801 on other device types.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
     *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    loadModel(): Promise<void>;

    /**
     * Releases this text embedding model. This API uses a promise to return the result.
     *
     * **Device Behavior:** Before API version 26.0.0, this API can be called normally on PC/2in1 devices and returns
     * error code 801 on other device types. Starting from API version 26.0.0, this API can be called normally on
     * PC/2in1, Phone, and Tablet devices and returns error code 801 on other device types.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
     *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    releaseModel(): Promise<void>;

    /**
     * Obtains the embedding vector of the given text. This API uses a promise to return the result.
     *
     * Before calling this API, ensure that an embedding model is successfully loaded by using {@link loadModel}.
     *
     * **Device Behavior:** Before API version 26.0.0, this API can be called normally on PC/2in1 devices and returns
     * error code 801 on other device types. Starting from API version 26.0.0, this API can be called normally on
     * PC/2in1, Phone, and Tablet devices and returns error code 801 on other device types.
     *
     * @param { string } text - Text for the embedding model, which cannot exceed 512 characters.
     * @returns { Promise<Array<double>> } Promise used to return the array of vectorization results.
     * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
     *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    getEmbedding(text: string): Promise<Array<double>>;

    /**
     * Obtains the embedding vectors of a given batch of texts. Batch processing improves performance and is suitable
     * for scenarios where multiple texts need to be processed simultaneously. This API uses a Promise to return the
     * result asynchronously.
     *
     * Before calling this API, ensure that an embedding model is successfully loaded by using {@link loadModel}
     *
     * **Device Behavior:** Before API version 26.0.0, this API can be called normally on PC/2in1 devices and returns
     * error code 801 on other device types. Starting from API version 26.0.0, this API can be called normally on
     * PC/2in1, Phone, and Tablet devices and returns error code 801 on other device types.
     *
     * @param { Array<string> } batchTexts - The input batch of texts of the embedding model.
     * @returns { Promise<Array<Array<double>>> } The promise used to return the embedding result.
     * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
     *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    getEmbedding(batchTexts: Array<string>): Promise<Array<Array<double>>>;
  }

  /**
   * Provides APIs for manipulating image embedding models.
   * Before calling any of the following APIs, you must obtain an **ImageEmbedding** instance by using
   * {@link getImageEmbeddingModel}
   *
   * @interface ImageEmbedding
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface ImageEmbedding {
    /**
     * Loads this image embedding model. This API uses a promise to return the result.
     *
     * **Paired call**
     * - After calling **loadModel()**, you must call [releaseModel()](#releasemodel-1) to release the model resources
     * when they are no longer needed.
     * - Failure to call **releaseModel()** causes resource leakage and affects system performance.
     * - It is recommended that **releaseModel()** be placed in a **finally** block to ensure that resources are
     * released correctly.
     *
     * **Device Behavior:** This API can be called normally on PC/2in1 devices and returns error code 801 on other
     * device types.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
     *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    loadModel(): Promise<void>;

    /**
     * Releases this image embedding model. This API uses a promise to return the result.
     *
     * **Device Behavior:** This API can be called normally on PC/2in1 devices and returns error code 801 on other
     * device types.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
     *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    releaseModel(): Promise<void>;

    /**
     * Obtains the embedding vector of the given image. This API uses a promise to return the result.
     *
     * Before calling this API, ensure that an embedding model is successfully loaded by using {@link loadModel}
     *
     * **Device Behavior:** This API can be called normally on PC/2in1 devices, and returns error code 801 on other
     * device types.
     *
     * @param { Image } image - URI of the input image for the embedding model.
     * @returns { Promise<Array<double>> } Promise used to return the vectorization result.
     * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
     *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    getEmbedding(image: Image): Promise<Array<double>>;
  }

  /**
   * Defines the URI of the image, which is a string. URI of the image. The maximum length is 512 characters.
   * An exception is thrown when the length exceeds the limit.
   *
   * @typedef { string } Image
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 15 dynamic
   * @since 23 static
   */
  type Image = string;

  /**
   * Splits text. This API uses a promise to return the result.
   *
   * **Device behavior differences:** This API can be properly called on PC/2-in-1 devices. If it is called on other
   * device types, error code 801 is returned.
   *
   * @param { string } text - Text to be chunked. The maximum length of a single text is 100000 characters. An exception
   *     is thrown when the length exceeds the limit.
   * @param { SplitConfig } config - Configuration for splitting the text.
   * @returns { Promise<Array<string>> } Promise object that returns an array of chunking results.
   * @throws { BusinessError } 401 - [Sync] Parameter error. Possible causes: 
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
   * @throws { BusinessError } 31300000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  function splitText(text: string, config: SplitConfig): Promise<Array<string>>;

  /**
   * Obtains the supported cloud model information. This API uses a promise to return the result.
   *
   * **Device behavior differences:** This API can be properly called on PC/2-in-1, Phone, and Tablet devices. If it is
   * called on other device types, error code 801 is returned.
   *
   * @returns { Promise<Array<CloudModelInfo>> } Promise object, which returns the supported cloud model information.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getSupportedCloudModel(): Promise<Array<CloudModelInfo>>;

  /**
   * Represents the configuration for text splitting.
   *
   * @interface SplitConfig
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface SplitConfig {
    /**
     * Maximum size of a chunk, which is a non-negative integer. A smaller size value is suitable for scenarios that
     * require fine-grained chunking or have memory constraints, while a larger size value is suitable for reducing the
     * number of chunks when processing large amounts of data.
     *
     * @type { int }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    size: int;

    /**
     * Overlap ratio between adjacent chunks. The value ranges from 0 to 1, where **0** indicates the lowest overlap
     * ratio and **1** indicates the highest overlap ratio. A higher overlap ratio is suitable for long-text scenarios
     * that require semantic continuity, while a lower ratio is suitable for short-text scenarios that require reduced
     * duplicate computation.
     *
     * @type { double }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    overlapRatio: double;
  }
}

export default intelligence;