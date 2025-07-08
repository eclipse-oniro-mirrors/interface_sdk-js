/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * @kit CryptoArchitectureKit
 */
import type { AsyncCallback } from './@ohos.base';

/**
 * Provides a set of encryption and decryption algorithm library framework, shields the underlying differences,
 * encapsulate the relevant algorithm library, and provides a unified functional interface upward.
 *
 * @namespace cryptoFramework
 * @syscap SystemCapability.Security.CryptoFramework
 * @since 9
 */
/**
 * Provides a set of encryption and decryption algorithm library framework, shields the underlying differences,
 * encapsulate the relevant algorithm library, and provides a unified functional interface upward.
 *
 * @namespace cryptoFramework
 * @syscap SystemCapability.Security.CryptoFramework
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace cryptoFramework {
  /**
   * Enum for result code.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Enum for result code.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum Result {
    /**
     * Indicates that input parameters is invalid.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates that input parameters is invalid.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    INVALID_PARAMS = 401,

    /**
     * Indicates that function or algorithm is not supported.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates that function or algorithm is not supported.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates that function or algorithm is not supported.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NOT_SUPPORT = 801,

    /**
     * Indicates the memory operation failed.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the memory operation failed.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ERR_OUT_OF_MEMORY = 17620001,

    /**
     * Indicates that failed to convert parameters between arkts and c.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates that failed to convert parameters between arkts and c.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates that failed to convert parameters between arkts and c.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ERR_RUNTIME_ERROR = 17620002,

    /**
     * Indicates that parameter check failed.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @atomicservice
     * @since 20
     * @arkts 1.1&1.2
     */
    ERR_PARAMETER_CHECK_FAILED = 17620003,

    /**
     * Indicates that crypto operation error.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates that crypto operation error.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ERR_CRYPTO_OPERATION = 17630001
  }

  /**
   * Provides the data blob type.
   *
   * @typedef DataBlob
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Defines a buffer array of the Binary Large Object (BLOB) type.
   *
   * @typedef DataBlob
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface DataBlob {
    /**
     * Indicates the content of data blob.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the content of data blob.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    data: Uint8Array;
  }

  /**
   * Provides the ParamsSpec type, including the algorithm name.
   *
   * @typedef ParamsSpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the ParamsSpec type, including the algorithm name.
   *
   * @typedef ParamsSpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Encapsulates the parameters used for encryption or decryption.You need to construct its child class object and
   * pass it to init for symmetric encryption or decryption.
   *
   * @typedef ParamsSpec
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ParamsSpec {
    /**
     * Indicates the algorithm name. Should be set before initialization of a cipher object.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the algorithm name. Should be set before initialization of a cipher object.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name. Should be set before initialization of a cipher object.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    algName: string;
  }

  /**
   * Provides the IvParamsSpec type, including the parameter iv.
   *
   * @typedef IvParamsSpec
   * @extends ParamsSpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the IvParamsSpec type, including the parameter iv.
   *
   * @typedef IvParamsSpec
   * @extends ParamsSpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the child class of ParamsSpec. It is a parameter of init for symmetric encryption or decryption.
   * IvParamsSpec applies to the cipher modes such as CBC, CTR, OFB, and CFB, which use only the IV.
   *
   * @typedef IvParamsSpec
   * @extends ParamsSpec
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface IvParamsSpec extends ParamsSpec {
    /**
     * Indicates the algorithm parameters such as iv.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the algorithm parameters such as iv.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * IV for encryption or decryption.
     * Options:
     * - AES CBC, CTR, OFB, or CFB mode: 16-byte IV
     * - 3DES CBC, OFB, or CFB mode: 8-byte IV
     * - SM4 CBC, CTR, OFB, or CFB mode: 16-byte IV
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    iv: DataBlob;
  }

  /**
   * Provides the GcmParamsSpec type, including the parameter iv, aad and authTag.
   *
   * @typedef GcmParamsSpec
   * @extends ParamsSpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the GcmParamsSpec type, including the parameter iv, aad and authTag.
   *
   * @typedef GcmParamsSpec
   * @extends ParamsSpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides the GcmParamsSpec type, including the parameter iv, aad and authTag.
   *
   * @typedef GcmParamsSpec
   * @extends ParamsSpec
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'} 
   * @arkts 1.1&1.2
   */
  interface GcmParamsSpec extends ParamsSpec {
    /**
     * Indicates the GCM algorithm parameters such as iv.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the GCM algorithm parameters such as iv.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the GCM algorithm parameters such as iv.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    iv: DataBlob;

    /**
     * Indicates the additional Authenticated Data in GCM mode.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the additional Authenticated Data in GCM mode.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the additional Authenticated Data in GCM mode.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    aad: DataBlob;

    /**
     * Indicates the output tag from the encryption operation. The tag is used for integrity check.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the output tag from the encryption operation. The tag is used for integrity check.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the output tag from the encryption operation. The tag is used for integrity check.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    authTag: DataBlob;
  }

  /**
   * Provides the CcmParamsSpec type, including the parameter iv, aad and authTag.
   *
   * @typedef CcmParamsSpec
   * @extends ParamsSpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the CcmParamsSpec type, including the parameter iv, aad and authTag.
   *
   * @typedef CcmParamsSpec
   * @extends ParamsSpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides the CcmParamsSpec type, including the parameter iv, aad and authTag.
   *
   * @typedef CcmParamsSpec
   * @extends ParamsSpec
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface CcmParamsSpec extends ParamsSpec {
    /**
     * Indicates the GCM algorithm parameters such as IV.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the GCM algorithm parameters such as IV.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the GCM algorithm parameters such as IV.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    iv: DataBlob;

    /**
     * Indicates the Additional Authenticated Data in CCM mode.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the Additional Authenticated Data in CCM mode.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the Additional Authenticated Data in CCM mode.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    aad: DataBlob;

    /**
     * Indicates the output tag from the encryption operation. The tag is used for integrity check.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the output tag from the encryption operation. The tag is used for integrity check.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the output tag from the encryption operation. The tag is used for integrity check.
     *
     * @type { DataBlob }
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    authTag: DataBlob;
  }

  /**
   * Enum for obtain the crypto operation.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Enum for obtain the crypto operation.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Enumerates the cryptographic operations.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum CryptoMode {
    /**
     * The value of encryption operation for AES, 3DES and RSA.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * The value of encryption operation for AES, 3DES and RSA.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * The value of encryption operation for AES, 3DES and RSA.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ENCRYPT_MODE = 0,

    /**
     * The value of decryption operation for AES, 3DES and RSA.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * The value of decryption operation for AES, 3DES and RSA.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * The value of decryption operation for AES, 3DES and RSA.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DECRYPT_MODE = 1
  }

  /**
   * Represents the RSA private key encoding parameters. You can use it to generate an encoded private key string with the specified algorithm and password.
   *
   * @typedef KeyEncodingConfig
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface KeyEncodingConfig {
    /**
     * The password to encrypt the private key.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    password: string;

    /**
     * The symmetric cipher name to encrypt the private key, such as "AES-256-CBC".
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    cipherName: string;
  }


  /**
   * Provides the Key type, which is the common parent class of keys.
   *
   * @typedef Key
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the Key type, which is the common parent class of keys.
   *
   * @typedef Key
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides the Key type, which is the common parent class of keys.
   * Before performing cryptographic operations, you need to construct a child class object of Key and pass it to init of the Cipher instance.
   *
   * @typedef Key
   * @syscap SystemCapability.Security.CryptoFramework.Key
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Key {
    /**
     * Encode the key object to binary data.
     *
     * @returns { DataBlob } the binary data of the key object.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Encode the key object to binary data.
     *
     * @returns { DataBlob } the binary data of the key object.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Encode the key object to binary data.
     * The key can be a symmetric key, public key, or private key.
     * The public key must be in DER encoding format and comply with the ASN.1 syntax and X.509 specifications.
     * The private key must be in DER encoding format and comply with the ASN.1 syntax and PKCS#8 specifications.
     *
     * @returns { DataBlob } the binary data of the key object.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getEncoded(): DataBlob;

    /**
     * Indicates the format of the key object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the format of the key object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the format of the key object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.Key
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly format: string;

    /**
     * Indicates the algorithm name of the key object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the algorithm name of the key object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name of the key object. This parameter contains the key length if the key is a symmetric key.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.Key
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly algName: string;
  }

  /**
   * Provides the SymKey type, which is used for symmetric cryptography.
   *
   * @typedef SymKey
   * @extends Key
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the SymKey type, which is used for symmetric cryptography.
   *
   * @typedef SymKey
   * @extends Key
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides APIs for symmetric key operations.
   * Its objects need to be passed to init of the Cipher instance in symmetric encryption and decryption.
   *
   * @typedef SymKey
   * @extends Key
   * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface SymKey extends Key {
    /**
     * Reset the key data to zero in the memory.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Reset the key data to zero in the memory.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Clears the keys in the memory. This API returns the result synchronously.
     * You are advised to use this API when symmetric key instances are no longer used.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    clearMem(): void;
  }

  /**
   * Provides the private key type.
   *
   * @typedef PriKey
   * @extends Key
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the private key type.
   *
   * @typedef PriKey
   * @extends Key
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides the private key type. It needs to be passed in during asymmetric encryption and decryption, signing, and key agreement.
   *
   * @typedef PriKey
   * @extends Key
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface PriKey extends Key {
    /**
     * Clear memory of private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Clear memory of private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Clear memory of private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    clearMem(): void;

    /**
     * Get the specified parameter of the private key.
     *
     * @param { AsyKeySpecItem } itemType - indicates the specified parameters type.
     * @returns { bigint | string | int } the specified parameters value.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Get the specified parameter of the private key.
     *
     * @param { AsyKeySpecItem } itemType - indicates the specified parameters type.
     * @returns { bigint | string | int } the specified parameters value.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Get the specified parameter of the private key.
     *
     * @param { AsyKeySpecItem } itemType - indicates the specified parameters type.
     * @returns { bigint | string | int } the specified parameters value.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAsyKeySpec(itemType: AsyKeySpecItem): bigint | string | int;

    /**
     * Encode the private key object to binary data in DER format.
     *
     * @param { string } format - indicates the encoding format.
     * @returns { DataBlob } the binary data of the key object in DER format.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getEncodedDer(format: string): DataBlob;

    /**
     * Encode the private key object to string in PEM format.
     * The key can be an RSA public or private key. The private key must comply with PKCS8 or PKCS1 specifications and PEM encoding format.
     *
     * @param { string } format - indicates the encoding format.
     * @returns { string } the string of the key object in PEM format.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getEncodedPem(format: string): string;

    /**
     * Encode the private key object to string in PEM format.
     * The key can be an RSA public or private key. The private key must comply with PKCS8 or PKCS1 specifications and PEM encoding format.
     *
     * @param { string } format - indicates the encoding format.
     * @param { KeyEncodingConfig } config - indicates the encoding configuration.
     * @returns { string } the string of the key object in PEM format.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getEncodedPem(format: string, config: KeyEncodingConfig): string;
  }

  /**
   * Provides the public key interface for asymmetric keys.
   *
   * @typedef PubKey
   * @extends Key
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the public key interface for asymmetric keys.
   *
   * @typedef PubKey
   * @extends Key
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides the public key interface for asymmetric keys.
   *
   * @typedef PubKey
   * @extends Key
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface PubKey extends Key {
    /**
     * Get the specified parameter of the public key.
     *
     * @param { AsyKeySpecItem } itemType - indicates the specified parameters type.
     * @returns { bigint | string | int } the specified parameters value.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Get the specified parameter of the public key.
     *
     * @param { AsyKeySpecItem } itemType - indicates the specified parameters type.
     * @returns { bigint | string | int } the specified parameters value.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Get the specified parameter of the public key.
     *
     * @param { AsyKeySpecItem } itemType - indicates the specified parameters type.
     * @returns { bigint | string | int } the specified parameters value.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAsyKeySpec(itemType: AsyKeySpecItem): bigint | string | int;

    /**
     * Encode the public key object to binary data in DER format.
     * Currently, only compressed and uncompressed ECC public key data can be obtained.
     *
     * @param { string } format - indicates the encoding format.
     * @returns { DataBlob } the binary data of the key object in DER format.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getEncodedDer(format: string): DataBlob;

    /**
     * Encode the public key object to string in PEM format.
     * The public key must comply with the X.509 specifications, PKCS1 specifications, and PEM encoding format.
     *
     * @param { string } format - indicates the encoding format.
     * @returns { string } the string of the key object in PEM format.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getEncodedPem(format: string): string;
  }

  /**
   * Provides the keypair interface for asymmetric keys. A keyPair object contains both private key and public key.
   *
   * @typedef KeyPair
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the keypair interface for asymmetric keys. A keyPair object contains both private key and public key.
   *
   * @typedef KeyPair
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides the keypair interface for asymmetric keys. A keyPair object contains both private key and public key.
   *
   * @typedef KeyPair
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface KeyPair {
    /**
     * KeyPair's private key.
     *
     * @type { PriKey }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * KeyPair's private key.
     *
     * @type { PriKey }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * KeyPair's private key.
     *
     * @type { PriKey }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly priKey: PriKey;

    /**
     * KeyPair's public key.
     *
     * @type { PubKey }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * KeyPair's public key.
     *
     * @type { PubKey }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * KeyPair's public key.
     *
     * @type { PubKey }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly pubKey: PubKey;
  }

  /**
   * Provides the random interface.
   *
   * @typedef Random
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the random interface.
   *
   * @typedef Random
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Provides APIs for computing random numbers and setting seeds.
   *
   * @typedef Random
   * @syscap SystemCapability.Security.CryptoFramework.Rand
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Random {
    /**
     * Generate random DataBlob by given length.
     *
     * @param { int } len - indicates the length of random DataBlob.
     * @param { AsyncCallback<DataBlob> } callback - the callback used to return random DataBlob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Generate random DataBlob by given length.
     *
     * @param { int } len - indicates the length of random DataBlob.
     * @param { AsyncCallback<DataBlob> } callback - the callback used to return random DataBlob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Generate random DataBlob by given length.
     *
     * @param { int } len - indicates the length of random DataBlob.
     * @param { AsyncCallback<DataBlob> } callback - the callback used to return random DataBlob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Rand
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateRandom(len: int, callback: AsyncCallback<DataBlob>): void;

    /**
     * Generate random DataBlob by given length.
     *
     * @param { int } len - indicates the length of random DataBlob.
     * @returns { Promise<DataBlob> } the promise used to return the generated random blob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Generate random DataBlob by given length.
     *
     * @param { int } len - indicates the length of random DataBlob.
     * @returns { Promise<DataBlob> } the promise used to return the generated random blob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Generate random DataBlob by given length.
     *
     * @param { int } len - indicates the length of random DataBlob.
     * @returns { Promise<DataBlob> } the promise used to return the generated random blob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Rand
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateRandom(len: int): Promise<DataBlob>;

    /**
     * Generate random DataBlob by given length synchronously.
     *
     * @param { int } len - indicates the length of random DataBlob.
     * @returns { DataBlob } return the generated random blob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Generate random DataBlob by given length synchronously.
     *
     * @param { int } len - indicates the length of random DataBlob.
     * @returns { DataBlob } return the generated random blob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Generate random DataBlob by given length synchronously.
     *
     * @param { int } len - indicates the length of random DataBlob.
     * @returns { DataBlob } return the generated random blob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Rand
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateRandomSync(len: int): DataBlob;

    /**
     * Set seed by given DataBlob.
     *
     * @param { DataBlob } seed - indicates the seed DataBlob.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 9
     */
    /**
     * Set seed by given DataBlob.
     *
     * @param { DataBlob } seed - indicates the seed DataBlob.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Set seed by given DataBlob.
     *
     * @param { DataBlob } seed - indicates the seed DataBlob.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework.Rand
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setSeed(seed: DataBlob): void;

    /**
     * Indicates the random generation algorithm name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the random generation algorithm name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the random generation algorithm name. Currently, only CTR_DRBG is supported.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.Rand
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly algName: string;
  }

  /**
   * Create a random generator instance.
   *
   * @returns { Random } returns the created rand instance.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Create a random generator instance.
   *
   * @returns { Random } returns the created rand instance.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Create a random generator instance.
   *
   * @returns { Random } returns the created rand instance.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework.Rand
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createRandom(): Random;

  /**
   * The AsyKeyGenerator provides the ability to generate or convert keyPair.
   *
   * @typedef AsyKeyGenerator
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * The AsyKeyGenerator provides the ability to generate or convert keyPair.
   *
   * @typedef AsyKeyGenerator
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * The AsyKeyGenerator provides the ability to generate or convert keyPair.
   *
   * @typedef AsyKeyGenerator
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface AsyKeyGenerator {
    /**
     * Used to generate asymmetric keypair.
     *
     * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: Incorrect parameter types;
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to generate asymmetric keypair.
     *
     * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: Incorrect parameter types;
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to generate asymmetric keypair.
     *
     * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: Incorrect parameter types;
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateKeyPair(callback: AsyncCallback<KeyPair>): void;

    /**
     * Used to generate asymmetric keypair.
     *
     * @returns { Promise<KeyPair> } the promise used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to generate asymmetric keypair.
     *
     * @returns { Promise<KeyPair> } the promise used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to generate asymmetric keypair.
     *
     * @returns { Promise<KeyPair> } the promise used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateKeyPair(): Promise<KeyPair>;

    /**
     * Used to generate asymmetric keypair.
     *
     * @returns { KeyPair } return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateKeyPairSync(): KeyPair;

    /**
     * Used to convert asymmetric key data to keypair object.
     *
     * @param { DataBlob } pubKey - the public key data blob.
     * @param { DataBlob } priKey - the private key data blob.
     * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to convert asymmetric key data to keypair object.
     *
     * @param { DataBlob } pubKey - the public key data blob.
     * @param { DataBlob } priKey - the private key data blob.
     * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to convert asymmetric key data to keypair object.
     *
     * @param { DataBlob } pubKey - the public key data blob.
     * @param { DataBlob } priKey - the private key data blob.
     * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    convertKey(pubKey: DataBlob, priKey: DataBlob, callback: AsyncCallback<KeyPair>): void;

    /**
     * Used to convert asymmetric key data to keypair object.
     *
     * @param { DataBlob | null } pubKey - the public key data blob.
     * @param { DataBlob | null } priKey - the private key data blob.
     * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Used to convert asymmetric key data to keypair object.
     *
     * @param { DataBlob | null } pubKey - the public key data blob.
     * @param { DataBlob | null } priKey - the private key data blob.
     * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to convert asymmetric key data to keypair object.
     *
     * @param { DataBlob | null } pubKey - the public key data blob.
     * @param { DataBlob | null } priKey - the private key data blob.
     * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    convertKey(pubKey: DataBlob | null, priKey: DataBlob | null, callback: AsyncCallback<KeyPair>): void;

    /**
     * Used to convert asymmetric key data to keypair object.
     *
     * @param { DataBlob } pubKey - the public key data blob.
     * @param { DataBlob } priKey - the private key data blob.
     * @returns { Promise<KeyPair> } the promise used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to convert asymmetric key data to keypair object.
     *
     * @param { DataBlob } pubKey - the public key data blob.
     * @param { DataBlob } priKey - the private key data blob.
     * @returns { Promise<KeyPair> } the promise used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to convert asymmetric key data to keypair object.
     *
     * @param { DataBlob } pubKey - the public key data blob.
     * @param { DataBlob } priKey - the private key data blob.
     * @returns { Promise<KeyPair> } the promise used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    convertKey(pubKey: DataBlob, priKey: DataBlob): Promise<KeyPair>;

    /**
     * Used to convert asymmetric key data to keypair object.
     *
     * @param { DataBlob | null } pubKey - the public key data blob.
     * @param { DataBlob | null } priKey - the private key data blob.
     * @returns { Promise<KeyPair> } the promise used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Used to convert asymmetric key data to keypair object.
     *
     * @param { DataBlob | null } pubKey - the public key data blob.
     * @param { DataBlob | null } priKey - the private key data blob.
     * @returns { Promise<KeyPair> } the promise used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to convert asymmetric key data to keypair object.
     *
     * @param { DataBlob | null } pubKey - the public key data blob.
     * @param { DataBlob | null } priKey - the private key data blob.
     * @returns { Promise<KeyPair> } the promise used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    convertKey(pubKey: DataBlob | null, priKey: DataBlob | null): Promise<KeyPair>;

    /**
     * Used to convert asymmetric key data to keypair object.
     *
     * @param { DataBlob | null } pubKey - the public key data blob.
     * @param { DataBlob | null } priKey - the private key data blob.
     * @returns { KeyPair } return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    convertKeySync(pubKey: DataBlob | null, priKey: DataBlob | null): KeyPair;

    /**
     * Used to convert asymmetric key in PEM format to keypair object.
     *
     * @param { string | null } pubKey - the public key string in PEM format.
     * @param { string | null } priKey - the private key string in PEM format.
     * @returns { Promise<KeyPair> } return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    convertPemKey(pubKey: string | null, priKey: string | null): Promise<KeyPair>;

    /**
     * Used to convert asymmetric key in PEM format to keypair object.
     *
     * @param { string | null } pubKey - the public key string in PEM format.
     * @param { string | null } priKey - the private key string in PEM format.
     * @param { string } password - the password of private key.
     * @returns { Promise<KeyPair> } return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    convertPemKey(pubKey: string | null, priKey: string | null, password: string): Promise<KeyPair>;

    /**
     * Used to convert asymmetric key in PEM format to keypair object.
     *
     * @param { string | null } pubKey - the public key string in PEM format.
     * @param { string | null } priKey - the private key string in PEM format.
     * @returns { KeyPair } return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    convertPemKeySync(pubKey: string | null, priKey: string | null): KeyPair;

    /**
     * Used to convert asymmetric key in PEM format to keypair object.
     *
     * @param { string | null } pubKey - the public key string in PEM format.
     * @param { string | null } priKey - the private key string in PEM format.
     * @param { string } password - the password of private key.
     * @returns { KeyPair } return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    convertPemKeySync(pubKey: string | null, priKey: string | null, password: string): KeyPair;

    /**
     * The algName of the AsyKeyGenerator.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * The algName of the AsyKeyGenerator.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * The algName of the AsyKeyGenerator.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly algName: string;
  }

  /**
   * Provides the SymKeyGenerator type, which is used for generating symmetric key.
   *
   * @typedef SymKeyGenerator
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the SymKeyGenerator type, which is used for generating symmetric key.
   *
   * @typedef SymKeyGenerator
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides the SymKeyGenerator type, which is used for generating symmetric key.
   *
   * @typedef SymKeyGenerator
   * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface SymKeyGenerator {
    /**
     * Generate a symmetric key object randomly.
     *
     * @param { AsyncCallback<SymKey> } callback - the callback of generateSymKey.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Generate a symmetric key object randomly.
     *
     * @param { AsyncCallback<SymKey> } callback - the callback of generateSymKey.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generate a symmetric key object randomly.
     *
     * @param { AsyncCallback<SymKey> } callback - the callback of generateSymKey.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateSymKey(callback: AsyncCallback<SymKey>): void;

    /**
     * Generate a symmetric key object randomly.
     *
     * @returns { Promise<SymKey> } the promise returned by the function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Generate a symmetric key object randomly.
     *
     * @returns { Promise<SymKey> } the promise returned by the function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generate a symmetric key object randomly.
     *
     * @returns { Promise<SymKey> } the promise returned by the function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateSymKey(): Promise<SymKey>;

    /**
     * Generate a symmetric key object randomly.
     *
     * @returns { SymKey } return SymKey.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateSymKeySync(): SymKey;

    /**
     * Used to convert symmetric key data to a symmetric key object.
     *
     * @param { DataBlob } key - the key data blob.
     * @param { AsyncCallback<SymKey> } callback - the callback of generateSymKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to convert symmetric key data to a symmetric key object.
     *
     * @param { DataBlob } key - the key data blob.
     * @param { AsyncCallback<SymKey> } callback - the callback of generateSymKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to convert symmetric key data to a symmetric key object.
     *
     * @param { DataBlob } key - the key data blob.
     * @param { AsyncCallback<SymKey> } callback - the callback of generateSymKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    convertKey(key: DataBlob, callback: AsyncCallback<SymKey>): void;

    /**
     * Used to convert symmetric key data to a symmetric key object.
     *
     * @param { DataBlob } key - the key data blob.
     * @returns { Promise<SymKey> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to convert symmetric key data to a symmetric key object.
     *
     * @param { DataBlob } key - the key data blob.
     * @returns { Promise<SymKey> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to convert symmetric key data to a symmetric key object.
     *
     * @param { DataBlob } key - the key data blob.
     * @returns { Promise<SymKey> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    convertKey(key: DataBlob): Promise<SymKey>;

    /**
     * Used to convert symmetric key data to a symmetric key object.
     *
     * @param { DataBlob } key - the key data blob.
     * @returns { SymKey } return SymKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    convertKeySync(key: DataBlob): SymKey;

    /**
     * Indicates the algorithm name of the SymKeyGenerator object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the algorithm name of the SymKeyGenerator object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name of the SymKeyGenerator object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly algName: string;
  }

  /**
   * Create the asymmetric key generator instance according to the given algorithm name.
   *
   * @param { string } algName - indicates the algorithm name. Multiple parameters need to be concatenated by "|".
   * @returns { AsyKeyGenerator } the asymmetric key generator instance.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Create the asymmetric key generator instance according to the given algorithm name.
   *
   * @param { string } algName - indicates the algorithm name.
   * @returns { AsyKeyGenerator } the asymmetric key generator instance. Multiple parameters need to be concatenated by "|".
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Create the asymmetric key generator instance according to the given algorithm name.
   *
   * @param { string } algName - indicates the algorithm name. Multiple parameters need to be concatenated by "|".
   * @returns { AsyKeyGenerator } the asymmetric key generator instance.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createAsyKeyGenerator(algName: string): AsyKeyGenerator;

  /**
   * Create a symmetric key generator according to the given algorithm name.
   *
   * @param { string } algName - indicates the algorithm name.
   * @returns { SymKeyGenerator } the symmetric key generator instance. Multiple parameters need to be concatenated by "|".
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Create a symmetric key generator according to the given algorithm name.
   *
   * @param { string } algName - indicates the algorithm name. Multiple parameters need to be concatenated by "|".
   * @returns { SymKeyGenerator } the symmetric key generator instance.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Create a symmetric key generator according to the given algorithm name.
   *
   * @param { string } algName - indicates the algorithm name. Multiple parameters need to be concatenated by "|".
   * @returns { SymKeyGenerator } the symmetric key generator instance.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createSymKeyGenerator(algName: string): SymKeyGenerator;

  /**
   * Represents the message authentication code (MAC) parameters.
   * You need to construct a child class object and use it as a parameter when generating a HMAC or CMAC.
   *
   * @typedef MacSpec
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface MacSpec {
    /**
     * Indicates the algorithm name of the Mac.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    algName: string;
  }

  /**
   * Represents the child class of MacSpec. It is used as an input parameter for HMAC generation.
   *
   * @extends MacSpec
   * @typedef HmacSpec
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface HmacSpec extends MacSpec {
    /**
     * Indicates the message digest algorithm name of the HMAC.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'} 
     * @arkts 1.1&1.2
     */
    mdName: string;
  }

  /**
   * Represents the child class of MacSpec. It is used as an input parameter for CMAC generation.
   *
   * @extends MacSpec
   * @typedef CmacSpec
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface CmacSpec extends MacSpec {
    /**
     * Indicates the cipher algorithm name of the CMAC.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    cipherName: string;
  }

  /**
   * Provides the Mac type, which is used for Mac generation.
   *
   * @typedef Mac
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the Mac type, which is used for Mac generation.
   *
   * @typedef Mac
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides the Mac type, which is used for Mac generation.
   * Before using any API of the Mac class, you must create a Mac instance by using createMac.
   *
   * @typedef Mac
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Mac {
    /**
     * Init mac with given SymKey.
     *
     * @param { SymKey } key - indicates the SymKey.
     * @param { AsyncCallback<void> } callback - the callback of the init function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Init mac with given SymKey.
     *
     * @param { SymKey } key - indicates the SymKey.
     * @param { AsyncCallback<void> } callback - the callback of the init function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Init mac with given SymKey.
     * This API uses an asynchronous callback to return the result. init, update, and doFinal must be used together.
     * init and doFinal are mandatory, and update is optional.
     *
     * @param { SymKey } key - indicates the SymKey.
     * @param { AsyncCallback<void> } callback - the callback of the init function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    init(key: SymKey, callback: AsyncCallback<void>): void;

    /**
     * Init mac with given SymKey.
     *
     * @param { SymKey } key - indicates the SymKey.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Init mac with given SymKey.
     *
     * @param { SymKey } key - indicates the SymKey.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Init mac with given SymKey.
     * This API uses an asynchronous callback to return the result. init, update, and doFinal must be used together.
     * init and doFinal are mandatory, and update is optional.
     *
     * @param { SymKey } key - indicates the SymKey.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    init(key: SymKey): Promise<void>;

    /**
     * Init mac with given SymKey.
     * This API uses an asynchronous callback to return the result. init, update, and doFinal must be used together.
     * init and doFinal are mandatory, and update is optional.
     *
     * @param { SymKey } key - indicates the SymKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    initSync(key: SymKey): void;

    /**
     * Update mac with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @param { AsyncCallback<void> } callback - the callback of the update function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Update mac with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @param { AsyncCallback<void> } callback - the callback of the update function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Update mac with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @param { AsyncCallback<void> } callback - the callback of the update function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    update(input: DataBlob, callback: AsyncCallback<void>): void;

    /**
     * Update mac with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Update mac with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Update mac with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    update(input: DataBlob): Promise<void>;

    /**
     * Update mac with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    updateSync(input: DataBlob): void;

    /**
     * Output the result of mac calculation.
     *
     * @param { AsyncCallback<DataBlob> } callback - the callback of the doFinal function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Output the result of mac calculation.
     *
     * @param { AsyncCallback<DataBlob> } callback - the callback of the doFinal function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Output the result of mac calculation.
     *
     * @param { AsyncCallback<DataBlob> } callback - the callback of the doFinal function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    doFinal(callback: AsyncCallback<DataBlob>): void;

    /**
     * Output the result of mac calculation.
     *
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Output the result of mac calculation.
     *
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Output the result of mac calculation.
     *
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    doFinal(): Promise<DataBlob>;

    /**
     * Output the result of mac calculation.
     *
     * @returns { DataBlob } the sync returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    doFinalSync(): DataBlob;

    /**
     * Output the length of mac result.
     *
     * @returns { int } returns the length of the mac result.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Output the length of mac result.
     *
     * @returns { int } returns the length of the mac result.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Output the length of mac result.
     *
     * @returns { int } returns the length of the mac result.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getMacLength(): int;

    /**
     * Indicates the algorithm name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the algorithm name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly algName: string;
  }

  /**
   * Provides the mac create func.
   *
   * @param { string } algName - indicates the mac algorithm name.
   * @returns { Mac } returns the created mac instance.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the mac create func.
   *
   * @param { string } algName - indicates the mac algorithm name.
   * @returns { Mac } returns the created mac instance.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Creates a Mac instance for MAC operations.
   *
   * @param { string } algName - indicates the mac algorithm name.
   * @returns { Mac } returns the created mac instance.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createMac(algName: string): Mac;

  /**
   * Creates a Mac instance for MAC operations.
   *
   * @param { MacSpec } macSpec - indicates the mac parameters.
   * @returns { Mac } returns the created mac instance.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
   * @throws { BusinessError } 17630001 - crypto operation error.
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createMac(macSpec: MacSpec): Mac;

  /**
   * Provides the Md type, which is used for Md generation.
   *
   * @typedef Md
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the Md type, which is used for Md generation.
   *
   * @typedef Md
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides the Md type, which is used for Md generation.
   * Before using any API of the Md class, you must create an Md instance by using createMd.
   *
   * @typedef Md
   * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Md {
    /**
     * Update md with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @param { AsyncCallback<void> } callback - the callback of the update function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Update md with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @param { AsyncCallback<void> } callback - the callback of the update function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Update md with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @param { AsyncCallback<void> } callback - the callback of the update function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    update(input: DataBlob, callback: AsyncCallback<void>): void;

    /**
     * Update md with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Update md with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Update md with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    update(input: DataBlob): Promise<void>;

    /**
     * Update md with DataBlob.
     *
     * @param { DataBlob } input - indicates the DataBlob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    updateSync(input: DataBlob): void;

    /**
     * Output the result of md calculation.
     *
     * @param { AsyncCallback<DataBlob> } callback - the callback of the digest function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Output the result of md calculation.
     *
     * @param { AsyncCallback<DataBlob> } callback - the callback of the digest function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Output the result of md calculation.
     *
     * @param { AsyncCallback<DataBlob> } callback - the callback of the digest function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    digest(callback: AsyncCallback<DataBlob>): void;

    /**
     * Output the result of md calculation.
     *
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Output the result of md calculation.
     *
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Output the result of md calculation.
     *
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    digest(): Promise<DataBlob>;

    /**
     * Output the result of md calculation.
     *
     * @returns { DataBlob } the sync returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    digestSync(): DataBlob;

    /**
     * Output the length of md result.
     *
     * @returns { int } returns the length of the md result.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Output the length of md result.
     *
     * @returns { int } returns the length of the md result.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Output the length of md result.
     *
     * @returns { int } returns the length of the md result.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getMdLength(): int;

    /**
     * Indicates the algorithm name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the algorithm name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly algName: string;
  }

  /**
   * Provides the md create func.
   *
   * @param { string } algName - indicates the md algorithm name.
   * @returns { Md } returns the created md instance.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the md create func.
   *
   * @param { string } algName - indicates the md algorithm name.
   * @returns { Md } returns the created md instance.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Creates an Md instance for MD operations.
   *
   * @param { string } algName - indicates the md algorithm name.
   * @returns { Md } returns the created md instance.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createMd(algName: string): Md;

  /**
   * Enum for encryption specified parameters.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Enum for encryption specified parameters.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Enum for encryption specified parameters.
   * You can use setCipherSpec to set cipher parameters, and use getCipherSpec to obtain cipher parameters.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum CipherSpecItem {
    /**
     * Indicates the algorithm name of the message digest function. It is used during RSA encryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the algorithm name of the message digest function. It is used during RSA encryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name of the message digest function. It is used during RSA encryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    OAEP_MD_NAME_STR = 100,

    /**
     * Indicates the algorithm name for the mask generation function. It is used during RSA encryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the algorithm name for the mask generation function. It is used during RSA encryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name for the mask generation function. It is used during RSA encryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    OAEP_MGF_NAME_STR = 101,

    /**
     * Indicates the message digest parameter for the MGF1 mask generation function. It is used during RSA encryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the message digest parameter for the MGF1 mask generation function. It is used during RSA encryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the message digest parameter for the MGF1 mask generation function. It is used during RSA encryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    OAEP_MGF1_MD_STR = 102,

    /**
     * Indicates the source of the encoding input P. It is used during RSA encryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the source of the encoding input P. It is used during RSA encryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the source of the encoding input P. It is used during RSA encryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    OAEP_MGF1_PSRC_UINT8ARR = 103,

    /**
     * Indicates the hash algorithm name of SM2 cipher process.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the hash algorithm name of SM2 cipher process.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SM2_MD_NAME_STR = 104
  }

  /**
   * Enum for signature specified parameters, also used for verification.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Enum for signature specified parameters, also used for verification.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Enum for signature specified parameters, also used for verification.
   * You can use setSignSpec and setVerifySpec to set these parameters, and use getSignSpec and getVerifySpec to obtain the parameters.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework.Signature
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum SignSpecItem {
    /**
     * Indicates the algorithm name of the message digest function. It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the algorithm name of the message digest function. It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name of the message digest function. It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PSS_MD_NAME_STR = 100,

    /**
     * Indicates the algorithm name of the mask generation function. It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the algorithm name of the mask generation function. It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name of the mask generation function. It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PSS_MGF_NAME_STR = 101,

    /**
     * Indicates the message digest parameter for the MGF1 mask generation function.
     * It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the message digest parameter for the MGF1 mask generation function.
     * It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the message digest parameter for the MGF1 mask generation function.
     * It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PSS_MGF1_MD_STR = 102,

    /**
     * Indicates the salt length in bits. It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the salt length in bits. It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the salt length in bits. It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PSS_SALT_LEN_NUM = 103,

    /**
     * Indicates the value for the trailer field. It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the value for the trailer field. It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the value for the trailer field. It is used in RSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PSS_TRAILER_FIELD_NUM = 104,

    /**
     * Indicates the value for user id. It is used in SM2 signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the value for user id. It is used in SM2 signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SM2_USER_ID_UINT8ARR = 105
  }

  /**
   * Provides the Cipher type, which is used for encryption and decryption operations.
   *
   * @typedef Cipher
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the Cipher type, which is used for encryption and decryption operations.
   *
   * @typedef Cipher
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides the Cipher type, which is used for encryption and decryption operations.
   *
   * @typedef Cipher
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Cipher {
    /**
     * Init the crypto operation with the given crypto mode, key and parameters.
     *
     * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
     * @param { Key } key - indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec } params - indicates the algorithm parameters such as IV.
     * @param { AsyncCallback<void> } callback - the callback of the init function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Init the crypto operation with the given crypto mode, key and parameters.
     *
     * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
     * @param { Key } key - indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec } params - indicates the algorithm parameters such as IV.
     * @param { AsyncCallback<void> } callback - the callback of the init function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Init the crypto operation with the given crypto mode, key and parameters.
     * init, update, and doFinal must be used together. init and doFinal are mandatory, and update is optional.
     *
     * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
     * @param { Key } key - indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec } params - indicates the algorithm parameters such as IV.
     * @param { AsyncCallback<void> } callback - the callback of the init function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    init(opMode: CryptoMode, key: Key, params: ParamsSpec, callback: AsyncCallback<void>): void;

    /**
     * Init the crypto operation with the given crypto mode, key and parameters.
     *
     * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
     * @param { Key } key - indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec | null } params - indicates the algorithm parameters such as IV.
     * @param { AsyncCallback<void> } callback - the callback of the init function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Init the crypto operation with the given crypto mode, key and parameters.
     *
     * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
     * @param { Key } key - indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec | null } params - indicates the algorithm parameters such as IV.
     * @param { AsyncCallback<void> } callback - the callback of the init function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Init the crypto operation with the given crypto mode, key and parameters.
     * init, update, and doFinal must be used together. init and doFinal are mandatory, and update is optional.
     *
     * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
     * @param { Key } key - indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec | null } params - indicates the algorithm parameters such as IV.
     * @param { AsyncCallback<void> } callback - the callback of the init function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    init(opMode: CryptoMode, key: Key, params: ParamsSpec | null, callback: AsyncCallback<void>): void;

    /**
     * Init the crypto operation with the given crypto mode, key and parameters.
     *
     * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
     * @param { Key } key - indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec } params - indicates the algorithm parameters such as IV.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Init the crypto operation with the given crypto mode, key and parameters.
     *
     * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
     * @param { Key } key - indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec } params - indicates the algorithm parameters such as IV.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Init the crypto operation with the given crypto mode, key and parameters.
     * init, update, and doFinal must be used together. init and doFinal are mandatory, and update is optional.
     *
     * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
     * @param { Key } key - indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec } params - indicates the algorithm parameters such as IV.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    init(opMode: CryptoMode, key: Key, params: ParamsSpec): Promise<void>;

    /**
     * Init the crypto operation with the given crypto mode, key and parameters.
     *
     * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
     * @param { Key } key - indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec | null } params - indicates the algorithm parameters such as IV.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Init the crypto operation with the given crypto mode, key and parameters.
     *
     * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
     * @param { Key } key - indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec | null } params - indicates the algorithm parameters such as IV.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Init the crypto operation with the given crypto mode, key and parameters.
     * init, update, and doFinal must be used together. init and doFinal are mandatory, and update is optional.
     *
     * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
     * @param { Key } key - indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec | null } params - indicates the algorithm parameters such as IV.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    init(opMode: CryptoMode, key: Key, params: ParamsSpec | null): Promise<void>;

    /**
     * Init the crypto operation with the given crypto mode, key and parameters.
     * init, update, and doFinal must be used together. init and doFinal are mandatory, and update is optional.
     *
     * @param { CryptoMode } opMode - indicates the crypto mode is encryption or decryption.
     * @param { Key } key - indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec | null } params - indicates the algorithm parameters such as IV.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    initSync(opMode: CryptoMode, key: Key, params: ParamsSpec | null): void;

    /**
     * Update the crypto operation with the input data, and feed back the encrypted or decrypted data
     * this time. RSA is not supported in this function.
     *
     * @param { DataBlob } data - indicates the data to be encrypted or decrypted.
     * @param { AsyncCallback<DataBlob> } callback - the callback of the update function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Update the crypto operation with the input data, and feed back the encrypted or decrypted data
     * this time. RSA is not supported in this function.
     *
     * @param { DataBlob } data - indicates the data to be encrypted or decrypted.
     * @param { AsyncCallback<DataBlob> } callback - the callback of the update function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Update the crypto operation with the input data, and feed back the encrypted or decrypted data
     * this time. RSA is not supported in this function.
     *
     * @param { DataBlob } data - indicates the data to be encrypted or decrypted.
     * @param { AsyncCallback<DataBlob> } callback - the callback of the update function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    update(data: DataBlob, callback: AsyncCallback<DataBlob>): void;

    /**
     * Update the crypto operation with the input data, and feed back the encrypted or decrypted data
     * this time. RSA is not supported in this function.
     *
     * @param { DataBlob } data - indicates the data to be encrypted or decrypted.
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Update the crypto operation with the input data, and feed back the encrypted or decrypted data
     * this time. RSA is not supported in this function.
     *
     * @param { DataBlob } data - indicates the data to be encrypted or decrypted.
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Update the crypto operation with the input data, and feed back the encrypted or decrypted data
     * this time. RSA is not supported in this function.
     *
     * @param { DataBlob } data - indicates the data to be encrypted or decrypted.
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    update(data: DataBlob): Promise<DataBlob>;

    /**
     * Update the crypto operation with the input data, and feed back the encrypted or decrypted data
     * this time. RSA is not supported in this function.
     *
     * @param { DataBlob } data - indicates the data to be encrypted or decrypted.
     * @returns { DataBlob } cipherText when encrypted or plainText when decrypted.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    updateSync(data: DataBlob): DataBlob;

    /**
     * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * @param { DataBlob } data - indicates the data to be finally encrypted or decrypted.
     * @param { AsyncCallback<DataBlob> } callback - the callback of the doFinal function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * @param { DataBlob } data - indicates the data to be finally encrypted or decrypted.
     * @param { AsyncCallback<DataBlob> } callback - the callback of the doFinal function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * @param { DataBlob } data - indicates the data to be finally encrypted or decrypted.
     * @param { AsyncCallback<DataBlob> } callback - the callback of the doFinal function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    doFinal(data: DataBlob, callback: AsyncCallback<DataBlob>): void;

    /**
     * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * @param { DataBlob | null } data - indicates the data to be finally encrypted or decrypted.
     * @param { AsyncCallback<DataBlob> } callback - the callback of the doFinal function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * @param { DataBlob | null } data - indicates the data to be finally encrypted or decrypted.
     * @param { AsyncCallback<DataBlob> } callback - the callback of the doFinal function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * @param { DataBlob | null } data - indicates the data to be finally encrypted or decrypted.
     * @param { AsyncCallback<DataBlob> } callback - the callback of the doFinal function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>): void;

    /**
     * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * @param { DataBlob } data - indicates the data to be finally encrypted or decrypted.
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * @param { DataBlob } data - indicates the data to be finally encrypted or decrypted.
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * @param { DataBlob } data - indicates the data to be finally encrypted or decrypted.
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    doFinal(data: DataBlob): Promise<DataBlob>;

    /**
     * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * @param { DataBlob | null } data - indicates the data to be finally encrypted or decrypted.
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * @param { DataBlob | null } data - indicates the data to be finally encrypted or decrypted.
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * @param { DataBlob | null } data - indicates the data to be finally encrypted or decrypted.
     * @returns { Promise<DataBlob> } the promise returned by the function.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    doFinal(data: DataBlob | null): Promise<DataBlob>;

    /**
     * Finish the crypto operation, encrypt or decrypt the input data, and then feed back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * @param { DataBlob | null } data - indicates the data to be finally encrypted or decrypted.
     * @returns { DataBlob } cipherText when encrypted or plainText when decrypted.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    doFinalSync(data: DataBlob | null): DataBlob;

    /**
     * Set the specified parameter to the cipher object.
     * Currently, only the OAEP_MGF1_PSRC_UINT8ARR parameter in RSA is supported.
     *
     * @param { CipherSpecItem } itemType - indicates the specified parameter type.
     * @param { Uint8Array } itemValue - the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Set the specified parameter to the cipher object.
     * Currently, only the OAEP_MGF1_PSRC_UINT8ARR parameter in RSA is supported.
     *
     * @param { CipherSpecItem } itemType - indicates the specified parameter type.
     * @param { Uint8Array } itemValue - the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Set the specified parameter to the cipher object.
     * Currently, only the OAEP_MGF1_PSRC_UINT8ARR parameter in RSA is supported.
     *
     * @param { CipherSpecItem } itemType - indicates the specified parameter type.
     * @param { Uint8Array } itemValue - the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setCipherSpec(itemType: CipherSpecItem, itemValue: Uint8Array): void;

    /**
     * Get the specified parameter from the cipher object.
     * Currently, only OAEP parameters in RSA is supported.
     *
     * @param { CipherSpecItem } itemType - indicates the specified parameter type.
     * @returns { string | Uint8Array } the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Get the specified parameter from the cipher object.
     * Currently, only OAEP parameters in RSA is supported.
     *
     * @param { CipherSpecItem } itemType - indicates the specified parameter type.
     * @returns { string | Uint8Array } the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Get the specified parameter from the cipher object.
     * Currently, only OAEP parameters in RSA is supported.
     *
     * @param { CipherSpecItem } itemType - indicates the specified parameter type.
     * @returns { string | Uint8Array } the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getCipherSpec(itemType: CipherSpecItem): string | Uint8Array;

    /**
     * Indicates the algorithm name of the cipher object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the algorithm name of the cipher object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name of the cipher object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly algName: string;
  }

  /**
   * Create a cipher object for encryption and decryption operations according to the given specifications.
   * Two different Cipher objects should be created when using RSA encryption and decryption,
   * even with the same specifications.
   *
   * @param { string } transformation - indicates the description to be transformed to cipher specifications.
   * @returns { Cipher } the cipher object returned by the function.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Create a cipher object for encryption and decryption operations according to the given specifications.
   * Two different Cipher objects should be created when using RSA encryption and decryption,
   * even with the same specifications.
   *
   * @param { string } transformation - indicates the description to be transformed to cipher specifications.
   * @returns { Cipher } the cipher object returned by the function.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Create a cipher object for encryption and decryption operations according to the given specifications.
   * Two different Cipher objects should be created when using RSA encryption and decryption,
   * even with the same specifications.
   *
   * @param { string } transformation - indicates the description to be transformed to cipher specifications.
   *                                    Multiple parameters need to be concatenated by "|".
   * @returns { Cipher } the cipher object returned by the function.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createCipher(transformation: string): Cipher;

  /**
   * Provides the Sign type, which is used for generating signatures.
   *
   * @typedef Sign
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the Sign type, which is used for generating signatures.
   *
   * @typedef Sign
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides the Sign type, which is used for generating signatures.
   * Before using any API of the Sign class, you must create a Sign instance by using createSign.
   *
   * @typedef Sign
   * @syscap SystemCapability.Security.CryptoFramework.Signature
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Sign {
    /**
     * Used to init environment.
     *
     * @param { PriKey } priKey - the private key.
     * @param { AsyncCallback<void> } callback - the call back function return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to init environment.
     *
     * @param { PriKey } priKey - the private key.
     * @param { AsyncCallback<void> } callback - the call back function return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Initializes the Sign instance with a private key.
     * init, update, and sign must be used together. init and sign are mandatory, and update is optional.
     *
     * @param { PriKey } priKey - the private key.
     * @param { AsyncCallback<void> } callback - the call back function return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    init(priKey: PriKey, callback: AsyncCallback<void>): void;

    /**
     * Used to init environment.
     *
     * @param { PriKey } priKey - the private key.
     * @returns { Promise<void> } return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to init environment.
     *
     * @param { PriKey } priKey - the private key.
     * @returns { Promise<void> } return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Initializes the Sign instance with a private key.
     * init, update, and sign must be used together. init and sign are mandatory, and update is optional.
     *
     * @param { PriKey } priKey - the private key.
     * @returns { Promise<void> } return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    init(priKey: PriKey): Promise<void>;

    /**
     * Initializes the Sign instance with a private key.
     * init, update, and sign must be used together. init and sign are mandatory, and update is optional.
     *
     * @param { PriKey } priKey - the private key.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    initSync(priKey: PriKey): void;

    /**
     * Used to append the message need to be signed.
     *
     * @param { DataBlob } data - the data need to be signed.
     * @param { AsyncCallback<void> } callback - the call back function return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to append the message need to be signed.
     *
     * @param { DataBlob } data - the data need to be signed.
     * @param { AsyncCallback<void> } callback - the call back function return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to append the message need to be signed.
     * This API can be called only after the Sign instance is initialized by using init.
     *
     * @param { DataBlob } data - the data need to be signed.
     * @param { AsyncCallback<void> } callback - the call back function return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    update(data: DataBlob, callback: AsyncCallback<void>): void;

    /**
     * Used to append the message need to be signed.
     *
     * @param { DataBlob } data - the data need to be signed.
     * @returns { Promise<void> } return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to append the message need to be signed.
     *
     * @param { DataBlob } data - the data need to be signed.
     * @returns { Promise<void> } return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to append the message need to be signed.
     * This API can be called only after the Sign instance is initialized by using init.
     *
     * @param { DataBlob } data - the data need to be signed.
     * @returns { Promise<void> } return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    update(data: DataBlob): Promise<void>;

    /**
     * Used to append the message need to be signed.
     * This API can be called only after the Sign instance is initialized by using init.
     *
     * @param { DataBlob } data - the data need to be signed.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    updateSync(data: DataBlob): void;

    /**
     * Used to sign message, include the update data.
     *
     * @param { DataBlob } data - the data need to be signed.
     * @param { AsyncCallback<DataBlob> } callback - return the signed message.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to sign message, include the update data.
     *
     * @param { DataBlob } data - the data need to be signed.
     * @param { AsyncCallback<DataBlob> } callback - return the signed message.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to sign message, include the update data.
     *
     * @param { DataBlob } data - the data need to be signed.
     * @param { AsyncCallback<DataBlob> } callback - return the signed message.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    sign(data: DataBlob, callback: AsyncCallback<DataBlob>): void;

    /**
     * Used to sign message, include the update data.
     *
     * @param { DataBlob | null } data - the data need to be signed.
     * @param { AsyncCallback<DataBlob> } callback - return the signed message.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Used to sign message, include the update data.
     *
     * @param { DataBlob | null } data - the data need to be signed.
     * @param { AsyncCallback<DataBlob> } callback - return the signed message.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to sign message, include the update data.
     *
     * @param { DataBlob | null } data - the data need to be signed.
     * @param { AsyncCallback<DataBlob> } callback - return the signed message.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    sign(data: DataBlob | null, callback: AsyncCallback<DataBlob>): void;

    /**
     * Used to append the message need to be signed.
     *
     * @param { DataBlob } data - the private key.
     * @returns { Promise<DataBlob> } return the signed message.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to append the message need to be signed.
     *
     * @param { DataBlob } data - the private key.
     * @returns { Promise<DataBlob> } return the signed message.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to append the message need to be signed.
     *
     * @param { DataBlob } data - the private key.
     * @returns { Promise<DataBlob> } return the signed message.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    sign(data: DataBlob): Promise<DataBlob>;

    /**
     * Used to append the message need to be signed.
     *
     * @param { DataBlob | null } data - the private key.
     * @returns { Promise<DataBlob> } return the signed message.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Used to append the message need to be signed.
     *
     * @param { DataBlob | null } data - the private key.
     * @returns { Promise<DataBlob> } return the signed message.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to append the message need to be signed.
     *
     * @param { DataBlob | null } data - the private key.
     * @returns { Promise<DataBlob> } return the signed message.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    sign(data: DataBlob | null): Promise<DataBlob>;

    /**
     * Used to append the message need to be signed.
     *
     * @param { DataBlob | null } data - the private key.
     * @returns { DataBlob } return the signed message.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    signSync(data: DataBlob | null): DataBlob;

    /**
     * Set the specified parameter to the sign object.
     * Currently, only the PSS_SALT_LEN parameter in RSA is supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @param { int } itemValue - the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Set the specified parameter to the sign object.
     * Currently, only the PSS_SALT_LEN parameter in RSA is supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @param { int } itemValue - the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Set the specified parameter to the sign object.
     * Currently, only the PSS_SALT_LEN parameter in RSA is supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @param { int } itemValue - the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setSignSpec(itemType: SignSpecItem, itemValue: int): void;

    /**
     * Set the specified parameter to the sign object.
     * Currently, only PSS_SALT_LEN in RSA and USER_ID in SM2 are supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @param { int | Uint8Array } itemValue - the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Set the specified parameter to the sign object.
     * Currently, only PSS_SALT_LEN in RSA and USER_ID in SM2 are supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @param { int | Uint8Array } itemValue - the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setSignSpec(itemType: SignSpecItem, itemValue: int | Uint8Array): void;

    /**
     * Get the specified parameter from the sign object.
     * Currently, only PSS parameters in RSA is supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @returns { string | int } the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Get the specified parameter from the sign object.
     * Currently, only PSS parameters in RSA is supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @returns { string | int } the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Get the specified parameter from the sign object.
     * Currently, only PSS parameters in RSA is supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @returns { string | int } the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getSignSpec(itemType: SignSpecItem): string | int;

    /**
     * Indicates the algorithm name of the sign object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the algorithm name of the sign object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name of the sign object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly algName: string;
  }

  /**
   * Provides the Verify interface, which is used for verifying signatures.
   *
   * @typedef Verify
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides the Verify interface, which is used for verifying signatures.
   *
   * @typedef Verify
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides the Verify interface, which is used for verifying signatures.
   * Before using any API of the Verify class, you must create a Verify instance by using createVerify.
   * Invoke init, update, and sign in this class in sequence to complete the signature verification.
   *
   * @typedef Verify
   * @syscap SystemCapability.Security.CryptoFramework.Signature
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Verify {
    /**
     * Used to init environment.
     *
     * @param { PubKey } pubKey - the public key.
     * @param { AsyncCallback<void> } callback - return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to init environment.
     *
     * @param { PubKey } pubKey - the public key.
     * @param { AsyncCallback<void> } callback - return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Initializes the Verify instance with a public key.
     *
     * @param { PubKey } pubKey - the public key.
     * @param { AsyncCallback<void> } callback - return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    init(pubKey: PubKey, callback: AsyncCallback<void>): void;

    /**
     * Used to init environment.
     *
     * @param { PubKey } pubKey - the public key.
     * @returns { Promise<void> } return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to init environment.
     *
     * @param { PubKey } pubKey - the public key.
     * @returns { Promise<void> } return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Initializes the Verify instance with a public key.
     *
     * @param { PubKey } pubKey - the public key.
     * @returns { Promise<void> } return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    init(pubKey: PubKey): Promise<void>;

    /**
     * Initializes the Verify instance with a public key.
     *
     * @param { PubKey } pubKey - the public key.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    initSync(pubKey: PubKey): void;

    /**
     * Used to append the message need to be verified.
     *
     * @param { DataBlob } data - the data need to be verified.
     * @param { AsyncCallback<void> } callback - return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to append the message need to be verified.
     *
     * @param { DataBlob } data - the data need to be verified.
     * @param { AsyncCallback<void> } callback - return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to append the message need to be verified.
     *
     * @param { DataBlob } data - the data need to be verified.
     * @param { AsyncCallback<void> } callback - return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    update(data: DataBlob, callback: AsyncCallback<void>): void;

    /**
     * Used to append the message need to be verified.
     *
     * @param { DataBlob } data - the data need to be verified.
     * @returns { Promise<void> } return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to append the message need to be verified.
     *
     * @param { DataBlob } data - the data need to be verified.
     * @returns { Promise<void> } return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to append the message need to be verified.
     *
     * @param { DataBlob } data - the data need to be verified.
     * @returns { Promise<void> } return nothing.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'} 
     * @arkts 1.1&1.2
     */
    update(data: DataBlob): Promise<void>;

    /**
     * Used to append the message need to be verified.
     *
     * @param { DataBlob } data - the data need to be verified.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    updateSync(data: DataBlob): void;

    /**
     * Used to verify message, include the update data.
     *
     * @param { DataBlob } data - the data need to be verified.
     * @param { DataBlob } signatureData - the signature data.
     * @param { AsyncCallback<boolean> } callback - return the verify result.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to verify message, include the update data.
     *
     * @param { DataBlob } data - the data need to be verified.
     * @param { DataBlob } signatureData - the signature data.
     * @param { AsyncCallback<boolean> } callback - return the verify result.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to verify message, include the update data.
     *
     * @param { DataBlob } data - the data need to be verified.
     * @param { DataBlob } signatureData - the signature data.
     * @param { AsyncCallback<boolean> } callback - return the verify result.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    verify(data: DataBlob, signatureData: DataBlob, callback: AsyncCallback<boolean>): void;

    /**
     * Used to verify message, include the update data.
     *
     * @param { DataBlob | null } data - the data need to be verified.
     * @param { DataBlob } signatureData - the signature data.
     * @param { AsyncCallback<boolean> } callback - return the verify result.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Used to verify message, include the update data.
     *
     * @param { DataBlob | null } data - the data need to be verified.
     * @param { DataBlob } signatureData - the signature data.
     * @param { AsyncCallback<boolean> } callback - return the verify result.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to verify message, include the update data.
     *
     * @param { DataBlob | null } data - the data need to be verified.
     * @param { DataBlob } signatureData - the signature data.
     * @param { AsyncCallback<boolean> } callback - return the verify result.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    verify(data: DataBlob | null, signatureData: DataBlob, callback: AsyncCallback<boolean>): void;

    /**
     * Used to verify message, include the update data.
     *
     * @param { DataBlob } data - the data need to be verified.
     * @param { DataBlob } signatureData - the signature data.
     * @returns { Promise<boolean> } return the verify result.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to verify message, include the update data.
     *
     * @param { DataBlob } data - the data need to be verified.
     * @param { DataBlob } signatureData - the signature data.
     * @returns { Promise<boolean> } return the verify result.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to verify message, include the update data.
     *
     * @param { DataBlob } data - the data need to be verified.
     * @param { DataBlob } signatureData - the signature data.
     * @returns { Promise<boolean> } return the verify result.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    verify(data: DataBlob, signatureData: DataBlob): Promise<boolean>;

    /**
     * Used to verify message, include the update data.
     *
     * @param { DataBlob | null } data - the data need to be verified.
     * @param { DataBlob } signatureData - the signature data.
     * @returns { Promise<boolean> } return the verify result.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Used to verify message, include the update data.
     *
     * @param { DataBlob | null } data - the data need to be verified.
     * @param { DataBlob } signatureData - the signature data.
     * @returns { Promise<boolean> } return the verify result.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Used to verify message, include the update data.
     *
     * @param { DataBlob | null } data - the data need to be verified.
     * @param { DataBlob } signatureData - the signature data.
     * @returns { Promise<boolean> } return the verify result.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    verify(data: DataBlob | null, signatureData: DataBlob): Promise<boolean>;

    /**
     * Used to verify message, include the update data.
     *
     * @param { DataBlob | null } data - the data need to be verified.
     * @param { DataBlob } signatureData - the signature data.
     * @returns { boolean } return the verify result.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    verifySync(data: DataBlob | null, signatureData: DataBlob): boolean;

    /**
     * Used to recover signed data.
     * Currently, only RSA is supported.
     *
     * @param { DataBlob } signatureData - the signature data.
     * @returns { Promise<DataBlob | null> } the promise used to return the recovered data.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    recover(signatureData: DataBlob): Promise<DataBlob | null>;

    /**
     * Used to recover signed data.
     * Currently, only RSA is supported.
     *
     * @param { DataBlob } signatureData - the signature data.
     * @returns { DataBlob | null } return the recovered data.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    recoverSync(signatureData: DataBlob): DataBlob | null;

    /**
     * Set the specified parameter to the verify object.
     * Currently, only the PSS_SALT_LEN parameter in RSA is supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @param { int } itemValue - the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Set the specified parameter to the verify object.
     * Currently, only the PSS_SALT_LEN parameter in RSA is supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @param { int } itemValue - the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Set the specified parameter to the verify object.
     * Currently, only the PSS_SALT_LEN parameter in RSA is supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @param { int } itemValue - the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setVerifySpec(itemType: SignSpecItem, itemValue: int): void;

    /**
     * Set the specified parameter to the verify object.
     * Currently, only PSS_SALT_LEN in RSA and USER_ID in SM2 are supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @param { int | Uint8Array } itemValue - the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Set the specified parameter to the verify object.
     * Currently, only PSS_SALT_LEN in RSA and USER_ID in SM2 are supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @param { int | Uint8Array } itemValue - the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setVerifySpec(itemType: SignSpecItem, itemValue: int | Uint8Array): void;

    /**
     * Get the specified parameter from the verify object.
     * Currently, only PSS parameters in RSA is supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @returns { string | int } the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Get the specified parameter from the verify object.
     * Currently, only PSS parameters in RSA is supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @returns { string | int } the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Get the specified parameter from the verify object.
     * Currently, only PSS parameters in RSA is supported.
     *
     * @param { SignSpecItem } itemType - indicates the specified parameter type.
     * @returns { string | int } the value of the specified parameter.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getVerifySpec(itemType: SignSpecItem): string | int;

    /**
     * Indicates the algorithm name of the verify object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the algorithm name of the verify object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name of the verify object.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly algName: string;
  }

  /**
   * Create a sign object for generating signatures.
   *
   * @param { string } algName - indicates the algorithm name and params.
   * @returns { Sign } the sign class.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Create a sign object for generating signatures.
   *
   * @param { string } algName - indicates the algorithm name and params.
   * @returns { Sign } the sign class.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Create a sign object for generating signatures.
   *
   * @param { string } algName - indicates the algorithm name and params. Multiple parameters need to be concatenated by "|".
   * @returns { Sign } the sign class.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework.Signature
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createSign(algName: string): Sign;

  /**
   * Create a verify object for verifying signatures.
   *
   * @param { string } algName - indicates the algorithm name and the parameters.
   * @returns { Verify } the verify class.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Create a verify object for verifying signatures.
   *
   * @param { string } algName - indicates the algorithm name and the parameters.
   * @returns { Verify } the verify class.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Create a verify object for verifying signatures.
   *
   * @param { string } algName - indicates the algorithm name and the parameters. Multiple parameters need to be concatenated by "|".
   * @returns { Verify } the verify class.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework.Signature
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createVerify(algName: string): Verify;

  /**
   * Provides key agreement function.
   *
   * @typedef KeyAgreement
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Provides key agreement function.
   *
   * @typedef KeyAgreement
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides key agreement function.
   * Before using any API of the KeyAgreement class, you must create a KeyAgreement instance by using createKeyAgreement.
   *
   * @typedef KeyAgreement
   * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface KeyAgreement {
    /**
     * Used to generate secret.
     *
     * @param { PriKey } priKey - the private key.
     * @param { PubKey } pubKey - the public key.
     * @param { AsyncCallback<DataBlob> } callback - return the secret.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to generate secret.
     *
     * @param { PriKey } priKey - the private key.
     * @param { PubKey } pubKey - the public key.
     * @param { AsyncCallback<DataBlob> } callback - return the secret.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generates a shared secret based on the given private key and public key.
     *
     * @param { PriKey } priKey - the private key.
     * @param { PubKey } pubKey - the public key.
     * @param { AsyncCallback<DataBlob> } callback - return the secret.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateSecret(priKey: PriKey, pubKey: PubKey, callback: AsyncCallback<DataBlob>): void;

    /**
     * Used to generate secret.
     *
     * @param { PriKey } priKey - the private key.
     * @param { PubKey } pubKey - the public key.
     * @returns { Promise<DataBlob> } the promise used to return secret.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Used to generate secret.
     *
     * @param { PriKey } priKey - the private key.
     * @param { PubKey } pubKey - the public key.
     * @returns { Promise<DataBlob> } the promise used to return secret.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generates a shared secret based on the given private key and public key.
     *
     * @param { PriKey } priKey - the private key.
     * @param { PubKey } pubKey - the public key.
     * @returns { Promise<DataBlob> } the promise used to return secret.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateSecret(priKey: PriKey, pubKey: PubKey): Promise<DataBlob>;

    /**
     * Generates a shared secret based on the given private key and public key.
     *
     * @param { PriKey } priKey - the private key.
     * @param { PubKey } pubKey - the public key.
     * @returns { DataBlob } the promise used to return secret.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateSecretSync(priKey: PriKey, pubKey: PubKey): DataBlob;

    /**
     * Indicates the algorithm name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    /**
     * Indicates the algorithm name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly algName: string;
  }

  /**
   * Create a key agreement object.
   *
   * @param { string } algName - indicates the algorithm name and params.
   * @returns { KeyAgreement } the key agreement object.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 9
   */
  /**
   * Create a key agreement object.
   *
   * @param { string } algName - indicates the algorithm name and params.
   * @returns { KeyAgreement } the key agreement object.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Create a key agreement object.
   *
   * @param { string } algName - indicates the algorithm name and params. Multiple parameters need to be concatenated by "|".
   * @returns { KeyAgreement } the key agreement object.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createKeyAgreement(algName: string): KeyAgreement;

  /**
   * Enum for algorithm specified parameters.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Enum for algorithm specified parameters.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Enum for algorithm specified parameters.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum AsyKeySpecItem {
    /**
     * Indicates the DSA prime p.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the DSA prime p.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DSA prime p.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DSA_P_BN = 101,

    /**
     * Indicates the DSA sub-prime q.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the DSA sub-prime q.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DSA sub-prime q.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DSA_Q_BN = 102,

    /**
     * Indicates the DSA base g.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the DSA base g.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DSA base g.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DSA_G_BN = 103,

    /**
     * Indicates the DSA private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the DSA private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DSA private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DSA_SK_BN = 104,

    /**
     * Indicates the DSA public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the DSA public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DSA public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DSA_PK_BN = 105,

    /**
     * Indicates the prime p of an elliptic curve (EC) prime finite field.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the prime p of an elliptic curve (EC) prime finite field.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the prime p of an elliptic curve (EC) prime finite field.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ECC_FP_P_BN = 201,

    /**
     * Indicates the first coefficient a of this elliptic curve.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the first coefficient a of this elliptic curve.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the first coefficient a of this elliptic curve.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ECC_A_BN = 202,

    /**
     * Indicates the second coefficient b of this elliptic curve.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the second coefficient b of this elliptic curve.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the second coefficient b of this elliptic curve.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ECC_B_BN = 203,

    /**
     * Indicates the affine x-coordinate of base point g.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the affine x-coordinate of base point g.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the affine x-coordinate of base point g.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ECC_G_X_BN = 204,

    /**
     * Indicates the affine y-coordinate of base point g.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the affine y-coordinate of base point g.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the affine y-coordinate of base point g.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ECC_G_Y_BN = 205,

    /**
     * Indicates the order of the base point g.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the order of the base point g.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the order of the base point g.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ECC_N_BN = 206,

    /**
     * Indicates the cofactor of the elliptic curve.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the cofactor of the elliptic curve.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the cofactor of the elliptic curve.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ECC_H_NUM = 207,

    /**
     * Indicates the private value of the ECC private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the private value of the ECC private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private value of the ECC private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ECC_SK_BN = 208,

    /**
     * Indicates the affine x-coordinate of a point, which is the public point of an ECC public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the affine x-coordinate of a point, which is the public point of an ECC public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the affine x-coordinate of a point, which is the public point of an ECC public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ECC_PK_X_BN = 209,

    /**
     * Indicates the affine y-coordinate of a point, which is the public point of an ECC public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the affine y-coordinate of a point, which is the public point of an ECC public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the affine y-coordinate of a point, which is the public point of an ECC public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ECC_PK_Y_BN = 210,

    /**
     * Indicates an elliptic curve finite field type.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates an elliptic curve finite field type.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates an elliptic curve finite field type.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ECC_FIELD_TYPE_STR = 211,

    /**
     * Indicates the field size in bits.
     * For Fp field (an elliptic curve prime finite field with prime p), the field size is the size of prime p.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the field size in bits.
     * For Fp field (an elliptic curve prime finite field with prime p), the field size is the size of prime p.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the field size in bits.
     * For Fp field (an elliptic curve prime finite field with prime p), the field size is the size of prime p.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ECC_FIELD_SIZE_NUM = 212,

    /**
     * Indicates the curve name according to SECG (Standards for Efficient Cryptography Group).
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the curve name according to SECG (Standards for Efficient Cryptography Group).
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the curve name according to SECG (Standards for Efficient Cryptography Group).
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ECC_CURVE_NAME_STR = 213,

    /**
     * Indicates the modulus n of RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the modulus n of RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the modulus n of RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    RSA_N_BN = 301,

    /**
     * Indicates the private exponent d of RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the private exponent d of RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private exponent d of RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    RSA_SK_BN = 302,

    /**
     * Indicates the public exponent e of RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the public exponent e of RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public exponent e of RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    RSA_PK_BN = 303,

    /**
     * Indicates the prime p of DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the prime p of DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DH_P_BN = 401,

    /**
     * Indicates the generator g of DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the generator g of DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DH_G_BN = 402,

    /**
     * Indicates the number of bits of the private key length used in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the number of bits of the private key length used in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DH_L_NUM = 403,

    /**
     * Indicates the private value of the DH private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private value of the DH private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DH_SK_BN = 404,

    /**
     * Indicates the public value of the DH public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public value of the DH public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DH_PK_BN = 405,

    /**
     * Indicates the private value of the ED25519 private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private value of the ED25519 private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ED25519_SK_BN = 501,

    /**
     * Indicates the public value of the ED25519 public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public value of the ED25519 public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ED25519_PK_BN = 502,

    /**
     * Indicates the private value of the X25519 private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private value of the X25519 private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    X25519_SK_BN = 601,

    /**
     * Indicates the public value of the X25519 public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public value of the X25519 public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    X25519_PK_BN = 602
  }

  /**
   * Enum for algorithm specified parameters type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Enum for algorithm specified parameters type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Enum for algorithm specified parameters type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum AsyKeySpecType {
    /**
     * Indicates the common specified parameters.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the common specified parameters.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the common specified parameters.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON_PARAMS_SPEC = 0,

    /**
     * Indicates the specified parameters of private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the specified parameters of private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the specified parameters of private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PRIVATE_KEY_SPEC = 1,

    /**
     * Indicates the specified parameters of public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the specified parameters of public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the specified parameters of public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PUBLIC_KEY_SPEC = 2,

    /**
     * Indicates the specified parameters of keypair.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the specified parameters of keypair.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the specified parameters of keypair.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    KEY_PAIR_SPEC = 3
  }

  /**
   * Provides a base interface for specifying asymmetric key parameters.
   *
   * @typedef AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Provides a base interface for specifying asymmetric key parameters.
   *
   * @typedef AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides a base interface for specifying asymmetric key parameters.
   *
   * @typedef AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface AsyKeySpec {
    /**
     * Indicates the algorithm name of the asymmetric key object.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the algorithm name of the asymmetric key object.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name of the asymmetric key object.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    algName: string;

    /**
     * Indicates the type of the specified parameters.
     *
     * @type { AsyKeySpecType }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the type of the specified parameters.
     *
     * @type { AsyKeySpecType }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the type of the specified parameters.
     *
     * @type { AsyKeySpecType }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    specType: AsyKeySpecType;
  }

  /**
   * Specifies the set of parameters used in the DSA algorithm.
   *
   * @typedef DSACommonParamsSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Specifies the set of parameters used in the DSA algorithm.
   *
   * @typedef DSACommonParamsSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the set of parameters used in the DSA algorithm. It can be used to randomly generate a public or private key.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   * 
   * @typedef DSACommonParamsSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface DSACommonParamsSpec extends AsyKeySpec {
    /**
     * Indicates the DSA prime p.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the DSA prime p.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DSA prime p.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    p: bigint;

    /**
     * Indicates the DSA sub-prime q.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the DSA sub-prime q.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DSA sub-prime q.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    q: bigint;

    /**
     * Indicates the DSA base g.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the DSA base g.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DSA base g.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    g: bigint;
  }

  /**
   * Specifies the DSA public key with its associated parameters.
   *
   * @typedef DSAPubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Specifies the DSA public key with its associated parameters.
   *
   * @typedef DSAPubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the DSA public key with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef DSAPubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface DSAPubKeySpec extends AsyKeySpec {
    /**
     * Indicates the DSA common parameters.
     *
     * @type { DSACommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the DSA common parameters.
     *
     * @type { DSACommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DSA common parameters.
     *
     * @type { DSACommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    params: DSACommonParamsSpec;

    /**
     * Indicates the DSA public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the DSA public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DSA public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    pk: bigint;
  }

  /**
   * Specifies the DSA keypair with its associated parameters.
   *
   * @typedef DSAKeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Specifies the DSA keypair with its associated parameters.
   *
   * @typedef DSAKeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the DSA keypair with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef DSAKeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface DSAKeyPairSpec extends AsyKeySpec {
    /**
     * Indicates the DSA common parameters.
     *
     * @type { DSACommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the DSA common parameters.
     *
     * @type { DSACommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DSA common parameters.
     *
     * @type { DSACommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    params: DSACommonParamsSpec;

    /**
     * Indicates the DSA private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the DSA private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DSA private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    sk: bigint;

    /**
     * Indicates the DSA public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the DSA public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DSA public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    pk: bigint;
  }

  /**
   * Specifies an elliptic curve finite field.
   *
   * @typedef ECField
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Specifies an elliptic curve finite field.
   *
   * @typedef ECField
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies an elliptic curve finite field. Currently, only the Fp field is supported.
   *
   * @typedef ECField
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ECField {
    /**
     * Indicates the type of an elliptic curve finite field.
     * Currently, only Fp (elliptic curve prime finite field) is supported.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the type of an elliptic curve finite field.
     * Currently, only Fp (elliptic curve prime finite field) is supported.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the type of an elliptic curve finite field.
     * Currently, only Fp (elliptic curve prime finite field) is supported.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    fieldType: string;
  }

  /**
   * Specifies an elliptic curve finite field with the prime p.
   *
   * @typedef ECFieldFp
   * @extends ECField
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Specifies an elliptic curve finite field with the prime p.
   *
   * @typedef ECFieldFp
   * @extends ECField
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies an elliptic curve finite field with the prime p.
   *
   * @typedef ECFieldFp
   * @extends ECField
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ECFieldFp extends ECField {
    /**
     * Indicates the prime p.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the prime p.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the prime p.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    p: bigint;
  }

  /**
   * Represents a point on an elliptic curve in affine coordinates.
   *
   * @typedef Point
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Represents a point on an elliptic curve in affine coordinates.
   *
   * @typedef Point
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Represents a point on an elliptic curve in affine coordinates.
   *
   * @typedef Point
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Point {
    /**
     * Indicates the affine x-coordinate.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the affine x-coordinate.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the affine x-coordinate.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    x: bigint;

    /**
     * Indicates the affine y-coordinate.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the affine y-coordinate.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the affine y-coordinate.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey 
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    y: bigint;
  }

  /**
   * Specifies the set of common parameters used in the ECC algorithm.
   *
   * @typedef ECCCommonParamsSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Specifies the set of common parameters used in the ECC algorithm.
   *
   * @typedef ECCCommonParamsSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the set of common parameters used in the ECC algorithm. It can be used to randomly generate a public or private key.
   *
   * @typedef ECCCommonParamsSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ECCCommonParamsSpec extends AsyKeySpec {
    /**
     * Indicates an elliptic curve finite field.
     *
     * @type { ECField }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates an elliptic curve finite field.
     *
     * @type { ECField }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates an elliptic curve finite field.
     *
     * @type { ECField }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    field: ECField;

    /**
     * Indicates the first coefficient a of the elliptic curve.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the first coefficient a of the elliptic curve.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the first coefficient a of the elliptic curve.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    a: bigint;

    /**
     * Indicates the second coefficient b of the elliptic curve.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the second coefficient b of the elliptic curve.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the second coefficient b of the elliptic curve.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    b: bigint;

    /**
     * Indicates the base point g.
     *
     * @type { Point }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the base point g.
     *
     * @type { Point }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the base point g.
     *
     * @type { Point }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    g: Point;

    /**
     * Indicates the order of the base point g.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the order of the base point g.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the order of the base point g.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    n: bigint;

    /**
     * Indicates the cofactor h.
     *
     * @type { int }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the cofactor h.
     *
     * @type { int }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the cofactor h.
     *
     * @type { int }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    h: int;
  }

  /**
   * Specifies the ECC private key with its associated parameters.
   *
   * @typedef ECCPriKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Specifies the ECC private key with its associated parameters.
   *
   * @typedef ECCPriKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the ECC private key with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef ECCPriKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ECCPriKeySpec extends AsyKeySpec {
    /**
     * Indicates the ECC common parameters.
     *
     * @type { ECCCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the ECC common parameters.
     *
     * @type { ECCCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the ECC common parameters.
     *
     * @type { ECCCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    params: ECCCommonParamsSpec;

    /**
     * Indicates the private value of the ECC private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the private value of the ECC private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private value of the ECC private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    sk: bigint;
  }

  /**
   * Specifies the ECC public key with its associated parameters.
   *
   * @typedef ECCPubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Specifies the ECC public key with its associated parameters.
   *
   * @typedef ECCPubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the ECC public key with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef ECCPubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ECCPubKeySpec extends AsyKeySpec {
    /**
     * Indicates the ECC common parameters.
     *
     * @type { ECCCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the ECC common parameters.
     *
     * @type { ECCCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the ECC common parameters.
     *
     * @type { ECCCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    params: ECCCommonParamsSpec;

    /**
     * Indicates the public point of the ECC public key.
     *
     * @type { Point }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the public point of the ECC public key.
     *
     * @type { Point }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public point of the ECC public key.
     *
     * @type { Point }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    pk: Point;
  }

  /**
   * Specifies the ECC keypair with its associated parameters.
   *
   * @typedef ECCKeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Specifies the ECC keypair with its associated parameters.
   *
   * @typedef ECCKeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the ECC keypair with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef ECCKeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ECCKeyPairSpec extends AsyKeySpec {
    /**
     * Indicates the ECC common parameters.
     *
     * @type { ECCCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the ECC common parameters.
     *
     * @type { ECCCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the ECC common parameters.
     *
     * @type { ECCCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    params: ECCCommonParamsSpec;

    /**
     * Indicates the private value of the ECC private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the private value of the ECC private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private value of the ECC private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    sk: bigint;

    /**
     * Indicates the public point of the ECC public key.
     *
     * @type { Point }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the public point of the ECC public key.
     *
     * @type { Point }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public point of the ECC public key.
     *
     * @type { Point }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    pk: Point;
  }

  /**
   * Key utilities for ECC Algorithm.
   *
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides APIs for generating common parameters for an asymmetric key pair based on the elliptic curve name.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class ECCKeyUtil {
    /**
     * Create the common parameter set based on the curve name.
     *
     * @param { string } curveName - indicates curve name according to the ECC elliptic curve.
     * @returns { ECCCommonParamsSpec } the ECC common params spec obj.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @static
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generates common parameters for an asymmetric key pair based on the specified name identifier (NID) of an elliptic curve.
     *
     * @param { string } curveName - indicates curve name according to the ECC elliptic curve.
     * @returns { ECCCommonParamsSpec } the ECC common params spec obj.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @static
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static genECCCommonParamsSpec(curveName: string): ECCCommonParamsSpec;

    /**
     * Used to convert the encoded point data to a point object, according to the ECC curve name.
     *
     * @param { string } curveName - indicates curve name according to the ECC elliptic curve.
     * @param { Uint8Array } encodedPoint - the encoded ECC point data.
     * @returns { Point } the ECC point object.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @static
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static convertPoint(curveName: string, encodedPoint: Uint8Array): Point;

    /**
     * Used to get the encoded point data from a point object, according to the ECC curve name.
     *
     * @param { string } curveName - indicates curve name according to the ECC elliptic curve.
     * @param { Point } point - the ECC point object.
     * @param { string } format - indicates the format of the encoded point data.
     * @returns { Uint8Array } the encoded point data.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @static
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static getEncodedPoint(curveName: string, point: Point, format: string): Uint8Array;
  }

  /**
   * Specifies the set of common parameters used in the DH algorithm.
   *
   * @typedef DHCommonParamsSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the set of common parameters used in the DH algorithm. It can be used to randomly generate a public or private key.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef DHCommonParamsSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface DHCommonParamsSpec extends AsyKeySpec {
    /**
     * Indicates the prime p.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the prime p.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    p: bigint;

    /**
     * Indicates the generator g.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the generator g.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    g: bigint;

    /**
     * Indicates the byte length of the private key.
     *
     * @type { int }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the byte length of the private key.
     *
     * @type { int }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    l: int;
  }

  /**
   * Specifies the DH private key with its associated parameters.
   *
   * @typedef DHPriKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the DH private key with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef DHPriKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface DHPriKeySpec extends AsyKeySpec {
    /**
     * Indicates the DH common parameters.
     *
     * @type { DHCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DH common parameters.
     *
     * @type { DHCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    params: DHCommonParamsSpec;

    /**
     * Indicates the private value of the DH private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private value of the DH private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    sk: bigint;
  }

  /**
   * Specifies the DH public key with its associated parameters.
   *
   * @typedef DHPubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the DH public key with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef DHPubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface DHPubKeySpec extends AsyKeySpec {
    /**
     * Indicates the DH common parameters.
     *
     * @type { DHCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DH common parameters.
     *
     * @type { DHCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    params: DHCommonParamsSpec;

    /**
     * Indicates the public value of the DH public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public value of the DH public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    pk: bigint;
  }

  /**
   * Specifies the DH keypair with its associated parameters.
   *
   * @typedef DHKeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the DH keypair with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef DHKeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface DHKeyPairSpec extends AsyKeySpec {
    /**
     * Indicates the DH common parameters.
     *
     * @type { DHCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the DH common parameters.
     *
     * @type { DHCommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    params: DHCommonParamsSpec;

    /**
     * Indicates the private value of the DH private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private value of the DH private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    sk: bigint;

    /**
     * Indicates the public value of the DH public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public value of the DH public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    pk: bigint;
  }

  /**
   * Key utilities for DH Algorithm.
   *
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Provides APIs for generating common parameters for a DH key based on the prime p length and the private key length.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class DHKeyUtil {
    /**
     * Create the common parameter set.
     *
     * @param { int } pLen - indicates the byte length of the prime p.
     * @param { int } [skLen] - indicates the byte length of the private key.
     * @returns { DHCommonParamsSpec } the DH common params spec obj.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @static
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generates common parameters for a DH key based on the prime p length and the private key length.
     *
     * @param { int } pLen - indicates the byte length of the prime p.
     * @param { int } [skLen] - indicates the byte length of the private key.
     * @returns { DHCommonParamsSpec } the DH common params spec obj.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @static
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static genDHCommonParamsSpec(pLen: int, skLen?: int): DHCommonParamsSpec;
  }

  /**
   * Specifies the ED25519 private key with its associated parameters.
   *
   * @typedef ED25519PriKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the ED25519 private key with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef ED25519PriKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ED25519PriKeySpec extends AsyKeySpec {
    /**
     * Indicates the private value of the ED25519 private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private value of the ED25519 private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    sk: bigint;
  }

  /**
   * Specifies the ED25519 public key with its associated parameters.
   *
   * @typedef ED25519PubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the ED25519 public key with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef ED25519PubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ED25519PubKeySpec extends AsyKeySpec {
    /**
     * Indicates the public value of the ED25519 public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public value of the ED25519 public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    pk: bigint;
  }

  /**
   * Specifies the ED25519 keypair with its associated parameters.
   *
   * @typedef ED25519KeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the ED25519 keypair with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef ED25519KeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ED25519KeyPairSpec extends AsyKeySpec {
    /**
     * Indicates the private value of the ED25519 private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private value of the ED25519 private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'} 
     * @arkts 1.1&1.2
     */
    sk: bigint;

    /**
     * Indicates the public value of the ED25519 public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public value of the ED25519 public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    pk: bigint;
  }

  /**
   * Specifies the X25519 private key with its associated parameters.
   *
   * @typedef X25519PriKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the X25519 private key with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef X25519PriKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface X25519PriKeySpec extends AsyKeySpec {
    /**
     * Indicates the private value of the X25519 private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private value of the X25519 private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    sk: bigint;
  }

  /**
   * Specifies the X25519 public key with its associated parameters.
   *
   * @typedef X25519PubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the X25519 public key with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef X25519PubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface X25519PubKeySpec extends AsyKeySpec {
    /**
     * Indicates the public value of the X25519 public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public value of the X25519 public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    pk: bigint;
  }

  /**
   * Specifies the X25519 keypair with its associated parameters.
   *
   * @typedef X25519KeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the X25519 keypair with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef X25519KeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface X25519KeyPairSpec extends AsyKeySpec {
    /**
     * Indicates the private value of the X25519 private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private value of the X25519 private key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    sk: bigint;

    /**
     * Indicates the public value of the X25519 public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public value of the X25519 public key.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    pk: bigint;
  }

  /**
   * Specifies the set of common parameters used in the RSA algorithm.
   *
   * @typedef RSACommonParamsSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Specifies the set of common parameters used in the RSA algorithm.
   *
   * @typedef RSACommonParamsSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the set of common parameters used in the RSA algorithm.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef RSACommonParamsSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface RSACommonParamsSpec extends AsyKeySpec {
    /**
     * Indicates the modulus n.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the modulus n.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the modulus n.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    n: bigint;
  }

  /**
   * Specifies the RSA public key with its associated parameters.
   *
   * @typedef RSAPubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Specifies the RSA public key with its associated parameters.
   *
   * @typedef RSAPubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the RSA public key with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef RSAPubKeySpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface RSAPubKeySpec extends AsyKeySpec {
    /**
     * Indicates the RSA common parameters.
     *
     * @type { RSACommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the RSA common parameters.
     *
     * @type { RSACommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the RSA common parameters.
     *
     * @type { RSACommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    params: RSACommonParamsSpec;

    /**
     * Indicates the public exponent e.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the public exponent e.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public exponent e.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    pk: bigint;
  }

  /**
   * Specifies the RSA keypair with its associated parameters.
   *
   * @typedef RSAKeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Specifies the RSA keypair with its associated parameters.
   *
   * @typedef RSAKeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the RSA keypair with its associated parameters.
   * To generate a key based on key parameters, pass it to createAsyKeyGeneratorBySpec to create a key generator.
   *
   * @typedef RSAKeyPairSpec
   * @extends AsyKeySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface RSAKeyPairSpec extends AsyKeySpec {
    /**
     * Indicates the RSA common parameters.
     *
     * @type { RSACommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the RSA common parameters.
     *
     * @type { RSACommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the RSA common parameters.
     *
     * @type { RSACommonParamsSpec }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    params: RSACommonParamsSpec;

    /**
     * Indicates the private exponent d.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the private exponent d.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the private exponent d.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    sk: bigint;

    /**
     * Indicates the public exponent e.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the public exponent e.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the public exponent e.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    pk: bigint;
  }

  /**
   * The AsyKeyGeneratorBySpec provides the ability to generate key with its associated parameters.
   *
   * @typedef AsyKeyGeneratorBySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * The AsyKeyGeneratorBySpec provides the ability to generate key with its associated parameters.
   *
   * @typedef AsyKeyGeneratorBySpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * The AsyKeyGeneratorBySpec provides the ability to generate key with its associated parameters.
   * Before using the APIs of this class, you need to use createAsyKeyGeneratorBySpec to create an AsyKeyGeneratorBySpec instance.
   *
   * @typedef AsyKeyGeneratorBySpec
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface AsyKeyGeneratorBySpec {
    /**
     * Generate an asymmetric keypair.
     *
     * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: Incorrect parameter types;
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Generate an asymmetric keypair.
     *
     * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: Incorrect parameter types;
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generate an asymmetric keypair.
     *
     * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: Incorrect parameter types;
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateKeyPair(callback: AsyncCallback<KeyPair>): void;

    /**
     * Generate an asymmetric keypair.
     *
     * @returns { Promise<KeyPair> } the promise used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Generate an asymmetric keypair.
     *
     * @returns { Promise<KeyPair> } the promise used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generate an asymmetric keypair.
     *
     * @returns { Promise<KeyPair> } the promise used to return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateKeyPair(): Promise<KeyPair>;

    /**
     * Generate an asymmetric keypair.
     *
     * @returns { KeyPair } return keypair.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateKeyPairSync(): KeyPair;

    /**
     * Generate a private key instance.
     *
     * @param { AsyncCallback<PriKey> } callback - the callback used to return PriKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: Mandatory parameters are left unspecified;
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Generate a private key instance.
     *
     * @param { AsyncCallback<PriKey> } callback - the callback used to return PriKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: Mandatory parameters are left unspecified;
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generate a private key instance.
     *
     * @param { AsyncCallback<PriKey> } callback - the callback used to return PriKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: Mandatory parameters are left unspecified;
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generatePriKey(callback: AsyncCallback<PriKey>): void;

    /**
     * Generate a private key instance.
     *
     * @returns { Promise<PriKey> } the promise used to return PriKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Generate a private key instance.
     *
     * @returns { Promise<PriKey> } the promise used to return PriKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generate a private key instance.
     *
     * @returns { Promise<PriKey> } the promise used to return PriKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generatePriKey(): Promise<PriKey>;

    /**
     * Generate a private key instance.
     *
     * @returns { PriKey } return PriKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generatePriKeySync(): PriKey;

    /**
     * Generate a public key instance.
     *
     * @param { AsyncCallback<PubKey> } callback - the callback used to return PubKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: Incorrect parameter types;
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Generate a public key instance.
     *
     * @param { AsyncCallback<PubKey> } callback - the callback used to return PubKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: Incorrect parameter types;
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generate a public key instance.
     *
     * @param { AsyncCallback<PubKey> } callback - the callback used to return PubKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: Incorrect parameter types;
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generatePubKey(callback: AsyncCallback<PubKey>): void;

    /**
     * Generate a public key instance.
     *
     * @returns { Promise<PubKey> } the promise used to return PubKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Generate a public key instance.
     *
     * @returns { Promise<PubKey> } the promise used to return PubKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generate a public key instance.
     *
     * @returns { Promise<PubKey> } the promise used to return PubKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generatePubKey(): Promise<PubKey>;

    /**
     * Generate a public key instance.
     *
     * @returns { PubKey } return PubKey.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generatePubKeySync(): PubKey;

    /**
     * Indicates the algorithm name of the generator.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 10
     */
    /**
     * Indicates the algorithm name of the generator.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name of the generator.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly algName: string;
  }

  /**
   * Create an asymmetric key generator with the specified parameters.
   *
   * @param { AsyKeySpec } asyKeySpec - indicates the associated parameters of algorithm.
   * @returns { AsyKeyGeneratorBySpec } the generator obj create by asyKeySpec.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @since 10
   */
  /**
   * Create an asymmetric key generator with the specified parameters.
   *
   * @param { AsyKeySpec } asyKeySpec - indicates the associated parameters of algorithm.
   * @returns { AsyKeyGeneratorBySpec } the generator obj create by asyKeySpec.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Create an asymmetric key generator with the specified parameters.
   *
   * @param { AsyKeySpec } asyKeySpec - indicates the associated parameters of algorithm.
   * @returns { AsyKeyGeneratorBySpec } the generator obj create by asyKeySpec.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createAsyKeyGeneratorBySpec(asyKeySpec: AsyKeySpec): AsyKeyGeneratorBySpec;

  /**
   * Specifies the key derivation function parameters.
   *
   * @typedef KdfSpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the key derivation function parameters.
   * When the key derivation function is used to derive a key, you need to construct and pass in a child class object of KdfSpec.
   *
   * @typedef KdfSpec
   * @syscap SystemCapability.Security.CryptoFramework.Kdf
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface KdfSpec {
    /**
     * Indicates the algorithm name of key derivation function.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name of key derivation function.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    algName: string;
  }

  /**
   * Specifies the PBKDF2 parameters.
   *
   * @typedef PBKDF2Spec
   * @extends KdfSpec
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Specifies the PBKDF2 parameters.
   *
   * @typedef PBKDF2Spec
   * @extends KdfSpec
   * @syscap SystemCapability.Security.CryptoFramework.Kdf
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface PBKDF2Spec extends KdfSpec {
    /**
     * Indicates the password parameter of PBKDF2.
     *
     * @type { string | Uint8Array }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the password parameter of PBKDF2.
     *
     * @type { string | Uint8Array }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    password: string | Uint8Array;

    /**
     * Indicates the salt parameter of PBKDF2.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the salt parameter of PBKDF2.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    salt: Uint8Array;

    /**
     * Indicates the iteration number of PBKDF2.
     *
     * @type { int }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the iteration number of PBKDF2.
     *
     * @type { int }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    iterations: int;

    /**
     * Indicates the byte length of output key of PBKDF2.
     *
     * @type { int }
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the byte length of output key of PBKDF2.
     *
     * @type { int }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    keySize: int;
  }

  /**
   * Specifies the HKDF parameters.
   *
   * @typedef HKDFSpec
   * @extends KdfSpec
   * @syscap SystemCapability.Security.CryptoFramework.Kdf
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface HKDFSpec extends KdfSpec {
    /**
     * Indicates the key parameter of HKDF.
     *
     * @type { string | Uint8Array }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    key: string | Uint8Array;

    /**
     * Indicates the salt parameter of HKDF.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    salt: Uint8Array;

    /**
     * Indicates the info about the context of HKDF.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    info: Uint8Array;

    /**
     * Indicates the byte length of output key of HKDF.
     *
     * @type { int }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    keySize: int;
  }

  /**
   * Specifies the SCRYPT parameters.
   *
   * @extends KdfSpec
   * @typedef ScryptSpec
   * @syscap SystemCapability.Security.CryptoFramework.Kdf
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ScryptSpec extends KdfSpec {
    /**
     * Indicates the passphrase parameter of SCRYPT.
     *
     * @type { string | Uint8Array }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    passphrase: string | Uint8Array;

    /**
     * Indicates the salt parameter of SCRYPT.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    salt: Uint8Array;

    /**
     * Indicates the cost parameter of SCRYPT.
     *
     * @type { long }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    n: long;

    /**
     * Indicates the block size parameter of SCRYPT.
     *
     * @type { long }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    r: long;

    /**
     * Indicates the parallelization parameter of SCRYPT.
     *
     * @type { long }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    p: long;

    /**
     * Indicates the byte length of memory of SCRYPT.
     *
     * @type { long }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    maxMemory: long;

    /**
     * Indicates the byte length of output key of SCRYPT.
     *
     * @type { int }
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    keySize: int;
  }

  /**
   * The key derivation function object provides the ability to derive key with its associated parameters.
   *
   * @typedef Kdf
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * The key derivation function object provides the ability to derive key with its associated parameters.
   * Before using APIs of this class, you need to create an instance of this class by using createKdf.
   *
   * @typedef Kdf
   * @syscap SystemCapability.Security.CryptoFramework.Kdf
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Kdf {
    /**
     * Generate a dataBlob object of secret key.
     *
     * @param { KdfSpec } params - the input params of key derivation function.
     * @param { AsyncCallback<DataBlob> } callback - the callback used to return dataBlob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generate a dataBlob object of secret key.
     *
     * @param { KdfSpec } params - the input params of key derivation function.
     * @param { AsyncCallback<DataBlob> } callback - the callback used to return dataBlob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateSecret(params: KdfSpec, callback: AsyncCallback<DataBlob>): void;

    /**
     * Generate a dataBlob object of secret key.
     *
     * @param { KdfSpec } params - the input params of key derivation function.
     * @returns { Promise<DataBlob> } the promise used to return dataBlob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Generate a dataBlob object of secret key.
     *
     * @param { KdfSpec } params - the input params of key derivation function.
     * @returns { Promise<DataBlob> } the promise used to return dataBlob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateSecret(params: KdfSpec): Promise<DataBlob>;

    /**
     * Generate a dataBlob object of secret key.
     *
     * @param { KdfSpec } params - the input params of key derivation function.
     * @returns { DataBlob } the sync used to return dataBlob.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    generateSecretSync(params: KdfSpec): DataBlob;

    /**
     * Indicates the algorithm name of the key derivation function.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework
     * @crossplatform
     * @since 11
     */
    /**
     * Indicates the algorithm name of the key derivation function.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly algName: string;
  }

  /**
   * Create a key derivation function object.
   *
   * @param { string } algName - indicates the algorithm name and params.
   * @returns { Kdf } the key derivation function object.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework
   * @crossplatform
   * @since 11
   */
  /**
   * Create a key derivation function object.
   *
   * @param { string } algName - indicates the algorithm name and params. Multiple parameters need to be concatenated by "|".
   * @returns { Kdf } the key derivation function object.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 17620001 - memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework.Kdf
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createKdf(algName: string): Kdf;

  /**
   * Provides the interface for specifying detailed data in the SM2 ciphertext in ASN.1 format.
   *
   * @typedef SM2CipherTextSpec
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface SM2CipherTextSpec {
    /**
     * Indicates the x coordinate, also known as C1x.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    xCoordinate: bigint;

    /**
     * Indicates the y coordinate, also known as C1y.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    yCoordinate: bigint;

    /**
     * Indicates the detailed ciphertext data, also known as C2.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    cipherTextData: Uint8Array;

    /**
     * Indicates the hash data, also known as C3.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    hashData: Uint8Array;
  }

  /**
   * Utilities for SM2 crypto operations.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class SM2CryptoUtil {
    /**
     * Generate the SM2 ciphertext in ASN.1 format according to the specific data.
     *
     * @param { SM2CipherTextSpec } spec - indicates the specific data of SM2 ciphertext.
     * @param { string } [mode] - indicates the arrangement mode of the SM2 ciphertext.
     * @returns { DataBlob } the SM2 ciphertext in ASN.1 format.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @static
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static genCipherTextBySpec(spec: SM2CipherTextSpec, mode?: string): DataBlob;

    /**
     * Get the specific data from the SM2 ciphertext in ASN.1 format.
     *
     * @param { DataBlob } cipherText - indicates the SM2 ciphertext in ASN.1 format.
     * @param { string } [mode] - indicates the arrangement mode of the SM2 ciphertext.
     * @returns { SM2CipherTextSpec } the specific data of SM2 ciphertext.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @static
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static getCipherTextSpec(cipherText: DataBlob, mode?: string): SM2CipherTextSpec;
  }

  /**
   * Defines the ECC signature spec, also works with SM2 signature.
   *
   * @typedef EccSignatureSpec
   * @syscap SystemCapability.Security.CryptoFramework.Signature
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  interface EccSignatureSpec {
    /**
     * Indicates the r value of the signature.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 20
     * @arkts 1.1&1.2
     */
    r: bigint;

    /**
     * Indicates the s value of the signature.
     *
     * @type { bigint }
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 20
     * @arkts 1.1&1.2
     */
    s: bigint;
  }

  /**
   * Utilities for signature operations.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Signature
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  class SignatureUtils {
    /**
     * Generates the ECC signature spec from the ECC signature in DER format.
     *
     * @param { Uint8Array } data - indicates the signature in DER format.
     * @returns { EccSignatureSpec } the ECC signature spec.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17620003 - parameter check failed. Possible causes:
     * <br>1. The length of the data parameter is 0 or too large.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @static
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 20
     * @arkts 1.1&1.2
     */
    static genEccSignatureSpec(data: Uint8Array): EccSignatureSpec;

    /**
     * Generates the ECC signature in DER format according to the ECC signature spec.
     *
     * @param { EccSignatureSpec } spec - indicates the ECC signature spec.
     * @returns { Uint8Array } the signature in DER format.
     * @throws { BusinessError } 17620001 - memory operation failed.
     * @throws { BusinessError } 17620002 - failed to convert parameters between arkts and c.
     * @throws { BusinessError } 17620003 - parameter check failed. Possible causes:
     * <br>1. The r or s value of the spec parameter is 0 or too large.
     * @throws { BusinessError } 17630001 - crypto operation error.
     * @static
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 20
     * @arkts 1.1&1.2
     */
    static genEccSignature(spec: EccSignatureSpec): Uint8Array;
  }
}

export default cryptoFramework;
