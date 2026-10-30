/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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
 * @file Certificate Framework
 * @kit DeviceCertificateKit
 */
import type { AsyncCallback } from './@ohos.base';
import cryptoFramework from './@ohos.security.cryptoFramework';

/**
 * The **cert** module provides APIs for performing certificate operations. The **certFramework** module depends on
 * the basic algorithm capabilities of the Crypto framework. For details, see
 * [cryptoFramework]{@link @ohos.security.cryptoFramework:cryptoFramework}.
 *
 * @syscap SystemCapability.Security.Cert
 * @crossplatform [since 11]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace cert {
  /**
   * Enumerates the error codes.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum CertResult {
    /**
     * Invalid parameter.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID_PARAMS = 401,

    /**
     * Unsupported operation.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOT_SUPPORT = 801,

    /**
     * Memory error.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_OUT_OF_MEMORY = 19020001,

    /**
     * This error code is reported if an error occurs during running.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_RUNTIME_ERROR = 19020002,

    /**
     * Parameter check failed.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    ERR_PARAMETER_CHECK_FAILED = 19020003,

    /**
     * An error occurs when the API of a third-party algorithm library is called.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_CRYPTO_OPERATION = 19030001,

    /**
     * The certificate signature verification failed.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_CERT_SIGNATURE_FAILURE = 19030002,

    /**
     * The certificate has not taken effect.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_CERT_NOT_YET_VALID = 19030003,

    /**
     * The certificate has expired.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_CERT_HAS_EXPIRED = 19030004,

    /**
     * Failed to obtain the certificate issuer.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_UNABLE_TO_GET_ISSUER_CERT_LOCALLY = 19030005,

    /**
     * The key cannot be used for signing a certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_KEYUSAGE_NO_CERTSIGN = 19030006,

    /**
     * The key cannot be used for digital signature.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_KEYUSAGE_NO_DIGITAL_SIGNATURE = 19030007,

    /**
     * The private key password may be incorrect.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    ERR_MAYBE_WRONG_PASSWORD = 19030008,

    /**
     * This error code is reported if the certificate is untrusted.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_UNTRUSTED = 19030009,

    /**
     * This error code is reported if the certificate has been revoked.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_HAS_REVOKED = 19030010,

    /**
     * This error code is reported if there is an unknown critical extension.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_UNKNOWN_CRITICAL_EXTENSION = 19030011,

    /**
     * This error code is reported if the hostname is not matched.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_HOSTNAME_MISMATCH = 19030012,

    /**
     * The email address in the certificate is not matched.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_EMAIL_ADDRESS_MISMATCH = 19030013,

    /**
     * Key usage mismatch in the certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_KEYUSAGE_MISMATCH = 19030014,

    /**
     * This error code is reported if the attempt to obtain the CRL fails.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_NOT_FOUND = 19030015,

    /**
     * This error code is reported if the CRL has not taken effect.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_NOT_YET_VALID = 19030016,

    /**
     * This error code is reported if the CRL has expired.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_HAS_EXPIRED = 19030017,

    /**
     * This error code is reported if the CRL signature verification fails.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_SIGNATURE_FAILURE = 19030018,

    /**
     * This error code is reported if the attempt to obtain the CRL issuer fails.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_ISSUER_NOT_FOUND = 19030019,

    /**
     * This error code is reported if the attempt to obtain the Online Certificate Status Protocol (OCSP) response fails.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_OCSP_RESPONSE_NOT_FOUND = 19030020,

    /**
     * This error code is reported if the OCSP response is invalid.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_OCSP_RESPONSE_INVALID = 19030021,

    /**
     * This error code is reported if the OCSP signature verification fails.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_OCSP_SIGNATURE_FAILURE = 19030022,

    /**
     * This error code is reported if the OCSP certificate status is unknown.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_OCSP_CERT_STATUS_UNKNOWN = 19030023,

    /**
     * This error code is reported if the network connection times out.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_NETWORK_TIMEOUT = 19030024
  }

  /**
   * Encapsulates binary data. The core field **data** is of the Uint8Array type.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface DataBlob {
    /**
     * Data.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    data: Uint8Array;
  }

  /**
   * Defines a list of data arrays.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface DataArray {
    /**
     * Data list.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    data: Array<Uint8Array>;
  }

  /**
   * Enumerates the certificate encoding formats.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum EncodingFormat {
    /**
     * DER.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    FORMAT_DER = 0,

    /**
     * PEM.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    FORMAT_PEM = 1,

    /**
     * PKCS #7.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    FORMAT_PKCS7 = 2
  }

  /**
   * Enumerates the certificate fields that can be obtained.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CertItemType {
    /**
     * Information to be signed.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_TBS = 0,

    /**
     * Public key of the certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_PUBLIC_KEY = 1,

    /**
     * Unique ID of the certificate issuer.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_ISSUER_UNIQUE_ID = 2,

    /**
     * Unique ID of the certificate subject.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_SUBJECT_UNIQUE_ID = 3,

    /**
     * Certificate extensions.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_EXTENSIONS = 4
  }

  /**
   * Enumerates certificate extension OID types.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ExtensionOidType {
    /**
     * All OIDs.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_OID_TYPE_ALL = 0,

    /**
     * OIDs whose **critical** is **true**.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_OID_TYPE_CRITICAL = 1,

    /**
     * OID whose **critical** is **false**.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_OID_TYPE_UNCRITICAL = 2
  }

  /**
   * Enumerates certificate extension types.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ExtensionEntryType {
    /**
     * Entire extension.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_ENTRY_TYPE_ENTRY = 0,

    /**
     * **critical** attribute of the extension.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_ENTRY_TYPE_ENTRY_CRITICAL = 1,

    /**
     * Value of the extension (extension-specific data).
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_ENTRY_TYPE_ENTRY_VALUE = 2
  }

  /**
   * Represents an encoded binary data block.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface EncodingBlob {
    /**
     * Encoded data.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    data: Uint8Array;
    /**
     * Encoding format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    encodingFormat: EncodingFormat;
  }

  /**
   * Defines the certificate chain data, which is passed in as input parameters during certificate chain verification.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface CertChainData {
    /**
     * Certificate data, which is a combination of the certificate length (2 bytes) and data. For example,
     * **08ABCDEFGH07ABCDEFG** indicates that the first certificate is an 8-byte certificate, followed by 8-byte
     * certificate data. The second certificate is a 7-byte certificate, followed by 7-byte certificate data.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    data: Uint8Array;
    /**
     * Number of certificates.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    count: int;
    /**
     * Encoding format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    encodingFormat: EncodingFormat;
  }

  /**
   * Enumerates the obtained encoding formats.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum EncodingType {
    /**
     * UTF-8.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ENCODING_UTF8 = 0
  }

  /**
   * Provides APIs for X.509 certificate operations.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface X509Cert {
    /**
     * Verifies the certificate signature. This API uses an asynchronous callback to return the result.
     *
     * @param { cryptoFramework.PubKey } key - Public key used for signature verification.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If signature verification is
     *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>): void;

    /**
     * Verifies the certificate signature. This API uses a promise to return the result.
     *
     * @param { cryptoFramework.PubKey } key - Public key used for signature verification.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    verify(key: cryptoFramework.PubKey): Promise<void>;

    /**
     * Obtains the serialized X.509 certificate data. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<EncodingBlob> } callback - Callback used to return the result. If the serialized X.509
     *     certificate data is successfully obtained, **err** is **undefined**, and **data** is the serialized X.509
     *     certificate data obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getEncoded(callback: AsyncCallback<EncodingBlob>): void;

    /**
     * Obtains the serialized X.509 certificate data. This API uses a promise to return the result.
     *
     * @returns { Promise<EncodingBlob> } Promise used to return the serialized X.509 certificate data.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getEncoded(): Promise<EncodingBlob>;

    /**
     * Obtains the public key of the X.509 certificate.
     *
     * @returns { cryptoFramework.PubKey } Public key of the X.509 certificate obtained. This object is used only for
     *     **verify()** of **X509Cert**.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getPublicKey(): cryptoFramework.PubKey;

    /**
     * Checks the validity period of the X.509 certificate.
     *
     * @param { string } date - Date, in **ASN.1 UTCTime** or **GeneralizedTime** format.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @throws { BusinessError } 19030003 - The certificate has not taken effect.
     * @throws { BusinessError } 19030004 - The certificate has expired.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    checkValidityWithDate(date: string): void;

    /**
     * Obtains the X.509 certificate version.
     *
     * @returns { int } X.509 certificate version obtained.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getVersion(): int;

    /**
     * Obtains the X.509 certificate serial number.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 10. Use
     * > [X509Cert.getCertSerialNumber()]{@link cert.X509Cert.getCertSerialNumber} instead.
     *
     * @returns { number } X.509 certificate serial number obtained.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.security.cert.X509Cert.getCertSerialNumber
     */
    getSerialNumber(): number;

    /**
     * Obtains the X.509 certificate serial number.
     *
     * @returns { bigint } X.509 certificate serial number obtained.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCertSerialNumber(): bigint;

    /**
     * Obtains the X.509 certificate issuer name.
     *
     * > **NOTE**
     * >
     * > - The obtained X.509 certificate issuer name ends with a null terminator (with the value of **0**). Determine
     * > whether to remove the terminator based on service requirements.
     * > - The obtained certificate issuer name is encoded in ASCII. After being converted into a string, the name starts
     * > with a slash (/), followed by a string of distinguished names separated by slashes (/).
     *
     * @returns { DataBlob } X.509 certificate issuer name obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getIssuerName(): DataBlob;

    /**
     * Obtains the X.509 certificate issuer name based on the encoding type.
     *
     * @param { EncodingType } encodingType - Encoding type.
     * @returns { string } Issuer name of an X.509 certificate, separated by commas (,).
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is not in the EncodingType enumeration range.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getIssuerName(encodingType: EncodingType): string;

    /**
     * Obtains the X.509 certificate subject name.
     *
     * > **NOTE**
     * >
     * > - If the encodingType parameter is not set, the obtained certificate subject name ends with a null terminator
     * > (with the value of **0**). Determine whether to remove the terminator based on service requirements.
     * > - If the encodingType parameter is not set, the obtained certificate subject name is encoded in ASCII. After
     * > being converted into a string, the name starts with a slash (/), followed by a string of distinguished names
     * > separated by slashes (/).
     * > - You are advised to set **encodingType** to **EncodingType.ENCODING_UTF8**. In this case, the obtained
     * > certificate subject name is a string of distinguished names separated by commas (,).
     *
     * @param { EncodingType } [encodingType] - Encoding type. The value is UTF-8. If this parameter is not set, ASCII
     *     encoding is used by default. This parameter can be set in versions later than API version 12. [since 12]
     * @returns { DataBlob } Subject name of the X.509 certificate.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Incorrect parameter types;
     *     <br>2. Parameter verification failed. [since 12]
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getSubjectName(encodingType?: EncodingType): DataBlob;

    /**
     * Obtains the start time of the X.509 certificate.
     *
     * @returns { string } X.509 certificate effective time, in **ASN.1 UTCTime** or **GeneralizedTime** format.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getNotBeforeTime(): string;

    /**
     * Obtains the expiration time of the X.509 certificate.
     *
     * @returns { string } X.509 certificate expiration time, in **ASN.1 UTCTime** or **GeneralizedTime** format.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getNotAfterTime(): string;

    /**
     * Obtains the signature data of the X.509 certificate.
     *
     * @returns { DataBlob } Indicates the X.509 certificate signature data.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getSignature(): DataBlob;

    /**
     * Obtains the name of the X.509 certificate signature algorithm.
     *
     * @returns { string } Name of the X.509 certificate signature algorithm obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getSignatureAlgName(): string;

    /**
     * Obtains the object identifier (OID) of the X.509 certificate signature algorithm. OIDs are allocated by the ISO.
     *
     * @returns { string } OID obtained. It will be truncated if the length exceeds 127 bytes.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getSignatureAlgOid(): string;

    /**
     * Obtains parameters of the X.509 certificate signature algorithm.
     *
     * @returns { DataBlob } Parameters of the X.509 certificate signature algorithm obtained.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getSignatureAlgParams(): DataBlob;

    /**
     * Obtains the key usage of this X.509 certificate.
     *
     * @returns { DataBlob } Usage of the X.509 certificate key.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getKeyUsage(): DataBlob;

    /**
     * Obtains the usage of the extended key of this X.509 certificate.
     *
     * @returns { DataArray } Usage of the extended key obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getExtKeyUsage(): DataArray;

    /**
     * Obtains basic constraints on the X.509 certificate.
     *
     * @returns { int } Basic constraints obtained.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getBasicConstraints(): int;

    /**
     * Obtains the alternative subject names of the X.509 certificate.
     *
     * > **NOTE**
     * >
     * > The obtained alternative subject names of the X.509 certificate contain a string terminator.
     *
     * @returns { DataArray } Alternative subject names of the X.509 certificate obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getSubjectAltNames(): DataArray;

    /**
     * Obtains the alternative issuer names of the X509 certificate.
     *
     * > **NOTE**
     * >
     * > The obtained alternative issuer names of the X509 certificate contain a string terminator.
     *
     * @returns { DataArray } Alternative issuer names of the X509 certificate obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getIssuerAltNames(): DataArray;

    /**
     * Obtains the fields in the X.509 certificate.
     *
     * @param { CertItemType } itemType - Certificate field to obtain.
     * @returns { DataBlob } Fields in DER format.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getItem(itemType: CertItemType): DataBlob;

    /**
     * Checks whether the certificate matches the input parameters.
     *
     * @param { X509CertMatchParameters } param - Parameters specified for matching the certificate.
     * @returns { boolean } Returns **true** if the certificate matches the parameters specified; returns **false**
     *     otherwise.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    match(param: X509CertMatchParameters): boolean;

    /**
     * Obtains URIs of the CRL distribution points of the X.509 certificate.
     *
     * @returns { DataArray } URIs of the distribution points for this X.509 CRL obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getCRLDistributionPoint(): DataArray;

    /**
     * Obtains the X.500 distinguished name of the X.509 certificate issuer.
     *
     * @returns { X500DistinguishedName } X.500 distinguished name object.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getIssuerX500DistinguishedName(): X500DistinguishedName;

    /**
     * Obtains the X.500 distinguished name of the X.509 certificate subject.
     *
     * @returns { X500DistinguishedName } X.500 distinguished name object.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getSubjectX500DistinguishedName(): X500DistinguishedName;

    /**
     * Converts the object data into a string.
     *
     * @returns { string } String obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    toString(): string;

    /**
     * Converts this object into a string in the specified encoding format.
     *
     * @param { EncodingType } encodingType - Encoding type.
     * @returns { string } String obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is not in the EncodingType enumeration range.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    toString(encodingType: EncodingType): string;

    /**
     * Obtains the hash value of the data in DER format.
     *
     * @returns { Uint8Array } Hash value in DER format obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hashCode(): Uint8Array;

    /**
     * Obtains the certificate extension object.
     *
     * @returns { CertExtension } Certificate extension object.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getExtensionsObject(): CertExtension;
  }

  /**
   * Creates an X.509 certificate object. This API uses an asynchronous callback to return the result.
   *
   * @param { EncodingBlob } inStream - X.509 certificate serialization data.
   * @param { AsyncCallback<X509Cert> } callback - Callback used to return the result. If the X.509 certificate object is
   *     successfully created, **err** is **undefined**, and **data** is the **X509Cert** instance obtained. Otherwise,
   *     **err** is an error object.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createX509Cert(inStream: EncodingBlob, callback: AsyncCallback<X509Cert>): void;

  /**
   * Creates an X.509 certificate object. This API uses a promise to return the result.
   *
   * @param { EncodingBlob } inStream - X.509 certificate serialization data.
   * @returns { Promise<X509Cert> } Promise that returns the **X509Cert** instance created.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createX509Cert(inStream: EncodingBlob): Promise<X509Cert>;

  /**
   * Provides APIs for operating on certificate extensions.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CertExtension {
    /**
     * Obtains the serialized data of a certificate extension.
     *
     * @returns { EncodingBlob } Serialized data of the obtained certificate extension.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getEncoded(): EncodingBlob;

    /**
     * Obtains the OID list of a certificate extension.
     *
     * @param { ExtensionOidType } valueType - Type of the OID to be obtained.
     * @returns { DataArray } OID list of the obtained certificate extension.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getOidList(valueType: ExtensionOidType): DataArray;

    /**
     * Obtains the value of a certificate extension based on the OID.
     *
     * @param { ExtensionEntryType } valueType - Type of the extension information to be obtained.
     * @param { DataBlob } oid - OID of the extension item to be obtained.
     * @returns { DataBlob } Certificate extension data obtained.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getEntry(valueType: ExtensionEntryType, oid: DataBlob): DataBlob;

    /**
     * Checks whether the certificate is a CA certificate.
     *
     * @returns { int } If the key usage extension contains the **keyCertSign** bit and the **cA** field in the basic
     *     constraints is **true**, the certificate is a CA certificate. Returns **-1** if the certificate is not a CA
     *     certificate; returns the path length in the basic constraints otherwise. Returns **-2** if the certificate is
     *     a CA certificate but the path length is not specified in the basic constraints, which means the path length
     *     is not limited.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    checkCA(): int;

    /**
     * Checks whether there is any critical extension that is not supported.
     *
     * @returns { boolean } Returns **true** if unsupported critical extension is found; returns **false** otherwise.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    hasUnsupportedCriticalExtension(): boolean;
  }

  /**
   * Creates a certificate extension object. This API uses an asynchronous callback to return the result.
   *
   * @param { EncodingBlob } inStream - Serialized certificate extension data.
   * @param { AsyncCallback<CertExtension> } callback - Callback used to return the result. If the certificate extension
   *     object is successfully created, **err** is **undefined**, and **data** is the **CertExtension** instance
   *     obtained. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function createCertExtension(inStream: EncodingBlob, callback: AsyncCallback<CertExtension>): void;

  /**
   * Creates a certificate extension object. This API uses a promise to return the result.
   *
   * @param { EncodingBlob } inStream - Serialized certificate extension data.
   * @returns { Promise<CertExtension> } Promise that returns the **CertExtension** instance created.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function createCertExtension(inStream: EncodingBlob): Promise<CertExtension>;

  /**
   * Provides APIs for operating on a revoked certificate entry in a CRL.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 9 and deprecated since API version 11. Use
   * > [X509CRLEntry()]{@link cert.X509CRLEntry} instead.
   *
   * @syscap SystemCapability.Security.Cert
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cert.X509CRLEntry
   */
  interface X509CrlEntry {
    /**
     * Obtains the serialized data of this revoked certificate entry. This API uses an asynchronous callback to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRLEntry.getEncoded()]{@link cert.X509CRLEntry.getEncoded(callback: AsyncCallback<EncodingBlob>)} instead.
     *
     * @param { AsyncCallback<EncodingBlob> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined**, and **data** is the serialized data of the revoked certificate entry
     *     obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRLEntry#getEncoded
     */
    getEncoded(callback: AsyncCallback<EncodingBlob>): void;

    /**
     * Obtains the serialized data of this revoked certificate entry. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRLEntry.getEncoded()]{@link cert.X509CRLEntry.getEncoded()} instead.
     *
     * @returns { Promise<EncodingBlob> } Promise used to return the serialized data of the revoked certificate entry
     *     obtained.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRLEntry#getEncoded
     */
    getEncoded(): Promise<EncodingBlob>;

    /**
     * Obtains the serial number of this revoked certificate.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRLEntry.getSerialNumber()]{@link cert.X509CRLEntry.getSerialNumber} instead.
     *
     * @returns { number } Serial number of the revoked certificate obtained.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRLEntry#getSerialNumber
     */
    getSerialNumber(): number;

    /**
     * Obtains the issuer name of the revoked certificate.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRLEntry.getCertIssuer()]{@link cert.X509CRLEntry.getCertIssuer()} instead.
     *
     * @returns { DataBlob } Issuer name of the revoked certificate obtained.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRLEntry#getCertIssuer
     */
    getCertIssuer(): DataBlob;

    /**
     * Obtains the certificate's revocation date.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRLEntry.getRevocationDate()]{@link cert.X509CRLEntry.getRevocationDate} instead.
     *
     * @returns { string } Certificate revocation date,  in an ASN.1 time format, specifically UTCTime or
     *     GeneralizedTime.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRLEntry#getRevocationDate
     */
    getRevocationDate(): string;
  }

  /**
   * Provides APIs for operating on a revoked certificate entry in a CRL.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CRLEntry {
    /**
     * Obtains the serialized data of a revoked certificate. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<EncodingBlob> } callback - Callback used to return the result. If the serialized data of
     *     the CRL entry is obtained successfully, **err** is **undefined**, and **data** is the serialized data of the
     *     CRL entry obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getEncoded(callback: AsyncCallback<EncodingBlob>): void;

    /**
     * Obtains the serialized data of a revoked certificate. This API uses a promise to return the result.
     *
     * @returns { Promise<EncodingBlob> } Promise used to return the serialized data of the CRL entry.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getEncoded(): Promise<EncodingBlob>;

    /**
     * Obtains the serial number of this revoked certificate.
     *
     * @returns { bigint } Serial number of a revoked certificate.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getSerialNumber(): bigint;

    /**
     * Obtains the issuer name of a revoked certificate.
     *
     * > **NOTE**
     * >
     * > The obtained issuer name of the revoked certificate contains a string terminator.
     *
     * @returns { DataBlob } Issuer name of a revoked certificate.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getCertIssuer(): DataBlob;

    /**
     * Obtains the issuer name of a revoked certificate based on the encoding type.
     *
     * @param { EncodingType } encodingType - Encoding type.
     * @returns { string } Issuer name of the revoked certificate, separated by commas (,).
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is not in the EncodingType enumeration range.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getCertIssuer(encodingType: EncodingType): string;

    /**
     * Obtains the date when the certificate was revoked.
     *
     * @returns { string } The certificate revocation date obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getRevocationDate(): string;

    /**
     * Obtains the CRL extensions.
     *
     * @returns { DataBlob } X.509 CRL entry extensions obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getExtensions(): DataBlob;

    /**
     * Checks whether a CRL entry has extensions.
     *
     * @returns { boolean } **true** is returned if the CRL entry has extensions; **false** is returned otherwise.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    hasExtensions(): boolean;

    /**
     * Obtains the X.500 distinguished name object of the issuer of a revoked certificate.
     *
     * @returns { X500DistinguishedName } X.500 distinguished name object.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getCertIssuerX500DistinguishedName(): X500DistinguishedName;

    /**
     * Converts the object data into a string.
     *
     * @returns { string } String obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    toString(): string;

    /**
     * Obtains the hash value of the data in DER format.
     *
     * @returns { Uint8Array } Hash value in DER format obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hashCode(): Uint8Array;

    /**
     * Obtains the extension object of a CRL entry.
     *
     * @returns { CertExtension } Extension object of a CRL entry.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getExtensionsObject(): CertExtension;
  }

  /**
   * Provides APIs for X.509 CRL operations.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 9 and deprecated since API version 11. Use [X509CRL()]{@link cert.X509CRL}
   * > instead.
   *
   * @syscap SystemCapability.Security.Cert
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cert.X509CRL
   */
  interface X509Crl {
    /**
     * Checks whether an X.509 certificate is revoked.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.isRevoked()]{@link cert.X509CRL.isRevoked} instead.
     *
     * @param { X509Cert } cert - X.509 certificate to check.
     * @returns { boolean } Whether the certificate is revoked. The value **true** indicates that the certificate is
     *     revoked, and **false** indicates the opposite.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#isRevoked
     */
    isRevoked(cert: X509Cert): boolean;

    /**
     * Obtains the CRL type.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getType()]{@link cert.X509CRL.getType} instead.
     *
     * @returns { string } CRL type obtained.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getType
     */
    getType(): string;

    /**
     * Obtains the serialized X.509 CRL data. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getEncoded()]{@link cert.X509CRL.getEncoded(callback: AsyncCallback<EncodingBlob>)} instead.
     *
     * @param { AsyncCallback<EncodingBlob> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined**, and **data** is the serialized X.509 CRL data obtained. Otherwise,
     *     **err** is an error object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getEncoded
     */
    getEncoded(callback: AsyncCallback<EncodingBlob>): void;

    /**
     * Obtains the serialized X.509 CRL data. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getEncoded()]{@link cert.X509CRL.getEncoded()} instead.
     *
     * @returns { Promise<EncodingBlob> } Promise used to return the serialized X.509 CRL data obtained.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getEncoded
     */
    getEncoded(): Promise<EncodingBlob>;

    /**
     * Verifies the signature of the X.509 CRL. The RSA algorithm is supported. This API uses an asynchronous callback
     * to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.verify()]{@link cert.X509CRL.verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>)}
     * > instead.
     *
     * @param { cryptoFramework.PubKey } key - Public key used for signature verification.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#verify
     */
    verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>): void;

    /**
     * Verifies the signature of the X.509 CRL. The RSA algorithm is supported. This API uses a promise to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.verify()]{@link cert.X509CRL.verify(key: cryptoFramework.PubKey)} instead.
     *
     * @param { cryptoFramework.PubKey } key - Public key used for signature verification.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#verify
     */
    verify(key: cryptoFramework.PubKey): Promise<void>;

    /**
     * Obtains the version of the X.509 CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getVersion()]{@link cert.X509CRL.getVersion} instead.
     *
     * @returns { number } Version of the X.509 CRL obtained.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getVersion
     */
    getVersion(): number;

    /**
     * Obtains the issuer of the X.509 CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getIssuerName()]{@link cert.X509CRL.getIssuerName()} instead.
     *
     * @returns { DataBlob } Issuer of the X.509 CRL obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getIssuerName
     */
    getIssuerName(): DataBlob;

    /**
     * Obtains the last update date of this X.509 CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getLastUpdate()]{@link cert.X509CRL.getLastUpdate} instead.
     *
     * @returns { string } Last update date of the X.509 CRL, in an ASN.1 time format, specifically UTCTime or
     *     GeneralizedTime.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getLastUpdate
     */
    getLastUpdate(): string;

    /**
     * Obtains the next update date of this CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getNextUpdate()]{@link cert.X509CRL.getNextUpdate} instead.
     *
     * @returns { string } Next update date of the CRL, in an ASN.1 time format, specifically UTCTime or
     *     GeneralizedTime.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getNextUpdate
     */
    getNextUpdate(): string;

    /**
     * Obtains the revoked certificate entry from the X.509 CRL based on the specified serial number of the certificate.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getRevokedCert()]{@link cert.X509CRL.getRevokedCert} instead.
     *
     * @param { number } serialNumber - Serial number of the certificate.
     * @returns { X509CrlEntry } Revoked certificate entry obtained.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getRevokedCert
     */
    getRevokedCert(serialNumber: number): X509CrlEntry;

    /**
     * Obtains the revoked certificate entry from the X.509 CRL based on the specified certificate.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getRevokedCertWithCert()]{@link cert.X509CRL.getRevokedCertWithCert} instead.
     *
     * @param { X509Cert } cert - Certificate based on which the revoked certificate is obtained.
     * @returns { X509CrlEntry } Revoked certificate entry obtained.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getRevokedCertWithCert
     */
    getRevokedCertWithCert(cert: X509Cert): X509CrlEntry;

    /**
     * Obtains all the revoked certificate entries from the X.509 CRL. This API uses an asynchronous callback to return
     * the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getRevokedCerts()]{@link cert.X509CRL.getRevokedCerts(callback: AsyncCallback<Array<X509CRLEntry>>)}
     * > instead.
     *
     * @param { AsyncCallback<Array<X509CrlEntry>> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined**, and **data** is the revoked certificate entries obtained. Otherwise,
     *     **err** is an error object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getRevokedCerts
     */
    getRevokedCerts(callback: AsyncCallback<Array<X509CrlEntry>>): void;

    /**
     * Obtains all the revoked certificate entries from the X.509 CRL. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getRevokedCerts()]{@link cert.X509CRL.getRevokedCerts()} instead.
     *
     * @returns { Promise<Array<X509CrlEntry>> } Promise used to return the revoked certificate entries obtained.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getRevokedCerts
     */
    getRevokedCerts(): Promise<Array<X509CrlEntry>>;

    /**
     * Obtains the DER-encoded CRL information, that is, **tbsCertList** from this CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getTBSInfo()]{@link cert.X509CRL.getTBSInfo} instead.
     *
     * @returns { DataBlob } **tbsCertList** information obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getTBSInfo
     */
    getTbsInfo(): DataBlob;

    /**
     * Obtains the signature data of the X.509 CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getSignature()]{@link cert.X509CRL.getSignature} instead.
     *
     * @returns { DataBlob } Signature data of the X.509 CRL obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getSignature
     */
    getSignature(): DataBlob;

    /**
     * Obtains the signature algorithm of the X.509 CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getSignatureAlgName()]{@link cert.X509CRL.getSignatureAlgName} instead.
     *
     * @returns { string } Signature algorithm name of the X.509 CRL obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getSignatureAlgName
     */
    getSignatureAlgName(): string;

    /**
     * Obtains the OID of the X.509 CRL signature algorithm. OIDs are allocated by the ISO.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getSignatureAlgOid()]{@link cert.X509CRL.getSignatureAlgOid} instead.
     *
     * @returns { string } OID of the X.509 CRL signature algorithm obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getSignatureAlgOid
     */
    getSignatureAlgOid(): string;

    /**
     * Obtains the parameters of the X.509 CRL signature algorithm.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getSignatureAlgParams()]{@link cert.X509CRL.getSignatureAlgParams} instead.
     *
     * @returns { DataBlob } Parameters of the X.509 CRL signature algorithm obtained.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getSignatureAlgParams
     */
    getSignatureAlgParams(): DataBlob;
  }

  /**
   * Creates an **X509Crl** instance. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 9 and deprecated since API version 11. Use
   * > [cert.createX509CRL()]{@link cert.createX509CRL(inStream: EncodingBlob, callback: AsyncCallback<X509CRL>)} instead.
   *
   * @param { EncodingBlob } inStream - Serialized CRL data.
   * @param { AsyncCallback<X509Crl> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**, and **data** is the **X509Crl** instance created. Otherwise, **err** is an error
   *     object.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @syscap SystemCapability.Security.Cert
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cert#createX509CRL
   */
  function createX509Crl(inStream: EncodingBlob, callback: AsyncCallback<X509Crl>): void;

  /**
   * Creates an **X509Crl** instance. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 9 and deprecated since API version 11. Use
   * > [cert.createX509CRL()]{@link cert.createX509CRL(inStream: EncodingBlob)} instead.
   *
   * @param { EncodingBlob } inStream - Serialized CRL data.
   * @returns { Promise<X509Crl> } Promise used to return the **X509Crl** instance created.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @syscap SystemCapability.Security.Cert
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cert#createX509CRL
   */
  function createX509Crl(inStream: EncodingBlob): Promise<X509Crl>;

  /**
   * Provides APIs for operations on X.509 CRLs.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CRL {
    /**
     * Checks whether the certificate is revoked.
     *
     * @param { X509Cert } cert - X.509 certificate to check.
     * @returns { boolean } Whether the certificate is revoked. The value **true** indicates that the certificate is
     *     revoked, and **false** indicates the opposite.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    isRevoked(cert: X509Cert): boolean;

    /**
     * Obtains the CRL type.
     *
     * @returns { string } CRL type obtained.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getType(): string;

    /**
     * Obtains the serialized X.509 CRL data. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<EncodingBlob> } callback - Callback used to return the result. If the serialized X.509 CRL
     *     data is successfully obtained, **err** is **undefined**, and **data** is the serialized X.509 CRL data
     *     obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getEncoded(callback: AsyncCallback<EncodingBlob>): void;

    /**
     * Obtains the serialized X.509 CRL data. This API uses a promise to return the result.
     *
     * @returns { Promise<EncodingBlob> } Promise used to return the serialized X.509 CRL data.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getEncoded(): Promise<EncodingBlob>;

    /**
     * Verifies the X.509 CRL signature. This API uses an asynchronous callback to return the result. RSA can be used
     * for signature verification.
     *
     * @param { cryptoFramework.PubKey } key - Public key used for signature verification.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>): void;

    /**
     * Verifies the X.509 CRL signature. This API uses a promise to return the result. RSA can be used for signature
     * verification.
     *
     * @param { cryptoFramework.PubKey } key - Public key used for signature verification.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    verify(key: cryptoFramework.PubKey): Promise<void>;

    /**
     * Obtains the version of the X.509 CRL.
     *
     * @returns { int } Version of the X.509 CRL obtained.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getVersion(): int;

    /**
     * Obtains the X.509 CRL issuer name.
     *
     * > **NOTE**
     * >
     * > The obtained X.509 CRL issuer name contains a string terminator.
     *
     * @returns { DataBlob } X.509 CRL issuer name obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getIssuerName(): DataBlob;

    /**
     * Obtains the X.509 CRL issuer name based on the encoding type.
     *
     * @param { EncodingType } encodingType - Encoding type.
     * @returns { string } Issuer name of an X.509 CRL, separated by commas (,).
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is not in the EncodingType enumeration range.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getIssuerName(encodingType: EncodingType): string;

    /**
     * Obtains the last update date of the X.509 CRL.
     *
     * @returns { string } Last update date of the X.509 CRL, in **ASN.1 UTCTime** or **GeneralizedTime** format.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getLastUpdate(): string;

    /**
     * Obtains the date when the CRL will be updated the next time.
     *
     * @returns { string } Next update date of the X.509 CRL, in **ASN.1 UTCTime** or **GeneralizedTime** format.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getNextUpdate(): string;

    /**
     * Obtains the revoked certificate based on the specified certificate serial number.
     *
     * @param { bigint } serialNumber - Serial number of the certificate.
     * @returns { X509CRLEntry } CRL entry.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getRevokedCert(serialNumber: bigint): X509CRLEntry;

    /**
     * Obtains the revoked certificate based on the specified certificate object.
     *
     * @param { X509Cert } cert - Certificate based on which the revoked certificate is obtained.
     * @returns { X509CRLEntry } CRL entry.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getRevokedCertWithCert(cert: X509Cert): X509CRLEntry;

    /**
     * Obtains revoked certificates. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<X509CRLEntry>> } callback - Callback used to return the result. If the revoked
     *     certificates are obtained successfully, **err** is **undefined**, and **data** is the CRL obtained. Otherwise,
     *     **err** is an error object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getRevokedCerts(callback: AsyncCallback<Array<X509CRLEntry>>): void;

    /**
     * Obtains revoked certificates. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<X509CRLEntry>> } Promise used to return the revoked certificates.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getRevokedCerts(): Promise<Array<X509CRLEntry>>;

    /**
     * Obtains the to be signed certificate list (**tbsCertList**) of this CRL.
     *
     * @returns { DataBlob } **tbsCertList** information obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getTBSInfo(): DataBlob;

    /**
     * Obtains the signature data of the X.509 CRL.
     *
     * @returns { DataBlob } Signature data of the X.509 CRL obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getSignature(): DataBlob;

    /**
     * Obtains the signature algorithm of the X.509 CRL.
     *
     * @returns { string } Signature algorithm name of the X.509 CRL obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getSignatureAlgName(): string;

    /**
     * Obtains the OID of the X.509 CRL signature algorithm. OIDs are allocated by the ISO.
     *
     * @returns { string } OID of the X.509 CRL signature algorithm obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getSignatureAlgOid(): string;

    /**
     * Obtains the parameters of the X.509 CRL signature algorithm.
     *
     * @returns { DataBlob } Parameters of the X.509 CRL signature algorithm obtained.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getSignatureAlgParams(): DataBlob;

    /**
     * Obtains CRL extensions, in DER format.
     *
     * @returns { DataBlob } CRL extensions, in DER format.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getExtensions(): DataBlob;

    /**
     * Checks whether this CRL matches the specified parameters.
     *
     * @param { X509CRLMatchParameters } param - Parameters specified for matching the CRL.
     * @returns { boolean } Returns **true** if the CRL matches the parameters specified; returns **false**
     *     otherwise.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    match(param: X509CRLMatchParameters): boolean;

    /**
     * Obtains the X.500 distinguished name object of the CRL issuer.
     *
     * @returns { X500DistinguishedName } X.500 distinguished name object.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getIssuerX500DistinguishedName(): X500DistinguishedName;

    /**
     * Converts the object data into a string.
     *
     * @returns { string } String obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    toString(): string;

    /**
     * Converts this object into a string in the specified encoding format.
     *
     * @param { EncodingType } encodingType - Encoding type.
     * @returns { string } String obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is not in the EncodingType enumeration range.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    toString(encodingType: EncodingType): string;

    /**
     * Obtains the hash value of the data in DER format.
     *
     * @returns { Uint8Array } Hash value in DER format obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hashCode(): Uint8Array;

    /**
     * Obtains the CRL extension object.
     *
     * @returns { CertExtension } CRL extension object.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getExtensionsObject(): CertExtension;
  }

  /**
   * Creates an X.509 CRL object. This API uses an asynchronous callback to return the result.
   *
   * @param { EncodingBlob } inStream - Serialized CRL data. The data length cannot exceed 8192 bytes.
   * @param { AsyncCallback<X509CRL> } callback - Callback used to return the result. If the X.509 CRL object is
   *     successfully created, **err** is **undefined**, and **data** is the **X509CRL** instance obtained. Otherwise,
   *     **err** is an error object.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createX509CRL(inStream: EncodingBlob, callback: AsyncCallback<X509CRL>): void;

  /**
   * Creates an X.509 CRL object. This API uses a promise to return the result.
   *
   * @param { EncodingBlob } inStream - Serialized CRL data. The data length cannot exceed 8192 bytes.
   * @returns { Promise<X509CRL> } Promise that returns the **X509CRL** instance created.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createX509CRL(inStream: EncodingBlob): Promise<X509CRL>;

  /**
   * Enumerates the certificate revocation flags.
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum CertRevocationFlag {
    /**
     * OCSP check (preferred). This flag takes effect only when both **CERT_REVOCATION_CRL_CHECK** and
     * **CERT_REVOCATION_OCSP_CHECK** are set.
     *
     * - After this flag is set, the OCSP check is performed first, and the CRL check is performed if no OCSP response
     * is found or a timeout occurs;
     * - If this flag is not set, the CRL check is performed first, and the OCSP check is performed if no CRL is found
     * or a timeout occurs.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CERT_REVOCATION_PREFER_OCSP = 0,

    /**
     * CRL check. Verify the certificate status based on a CRL. Match a CRL using the **crls** parameter of
     * [X509CertRevokedParams]{@link cert.X509CertRevokedParams}. If no matching CRL is found and **allowDownloadCrl**
     * of [X509CertRevokedParams]{@link cert.X509CertRevokedParams} is set to **true**, the CDP extension of the
     * certificate is used to download the CRL.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CERT_REVOCATION_CRL_CHECK = 1,

    /**
     * OCSP check. Verify the certificate status based on the OCSP response.
     *
     * <br>First, the **ocspResponses** parameter of [X509CertRevokedParams]{@link cert.X509CertRevokedParams} is used.
     * If no matching OCSP response is found and **allowOcspCheckOnline** of
     * [X509CertRevokedParams]{@link cert.X509CertRevokedParams} is set to **true**, the system attempts to obtain the
     * OCSP URL from the certificate AIA extension and sends a request to obtain the response.
     *
     * > **NOTE**
     * >
     * > - Always use the current system time to verify the validity period of the OCSP response, and allow a time
     * > tolerance of ±5 minutes.
     * > - Always use the current system time to verify the validity period of the OCSP signing certificate chain.
     * > - Lack of **nonce** and **nextUpdate** is allowed.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CERT_REVOCATION_OCSP_CHECK = 2,

    /**
     * Revocation status check of all certificates.
     *
     * - If this flag is set, revocation check is performed on all certificates in the certificate chain
     * (skips self-signed certificates);
     * - If this flag is not set, only the end-entity certificate (the first certificate in the certificate chain) is
     * checked.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CERT_REVOCATION_CHECK_ALL_CERT = 3
  }

  /**
   * Enumerates OCSP digest algorithms.
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum OcspDigest {
    /**
     * SHA-1.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA1 = 0,

    /**
     * SHA-224.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA224 = 1,

    /**
     * SHA-256.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA256 = 2,

    /**
     * SHA-384.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA384 = 3,

    /**
     * SHA-512.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA512 = 4
  }

  /**
   * Enumerates the certificate revocation check parameters.
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface X509CertRevokedParams {
    /**
     * Certificate revocation check flags. Value range: [1, 4]. The array must contain **CERT_REVOCATION_CRL_CHECK** or
     * **CERT_REVOCATION_OCSP_CHECK**.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    revocationFlags: Array<CertRevocationFlag>;

    /**
     * CRLs. Maximum number: 100.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    crls?: Array<X509CRL>;

    /**
     * Indicates whether to allow CRL download. The default value is false. true: The CDP extension of the certificate
     * is used to download the CRL. false: Do not attempt to download the CRL.
     *
     * > **NOTE**
     * >
     * > Skip download if matching CRL exists in crls.
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    allowDownloadCrl?: boolean;

    /**
     * OCSP response data. Preset OCSP response data. Maximum number: 100.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ocspResponses?: Array<Uint8Array>;

    /**
     * Indicates whether to allow online OCSP check. The default value is false.
     * - **true**: performs online OCSP check, that is, attempts to obtain the OCSP URL from the AIA extension of the
     * certificate and send a request to obtain a response;
     * - **false**: does not perform online OCSP check.
     *
     * > **NOTE**
     * >
     * > Skip online OCSP check if a matching OCSP response is found in ocspResponses.
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    allowOcspCheckOnline?: boolean;

    /**
     * Digest algorithm used for OCSP requests. The default value is SHA256.
     *
     * @default SHA256
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ocspDigest?: OcspDigest;
  }

  /**
   * Represents the parameters for certificate validation.
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface CertValidationParams {
    /**
     * Untrusted certificates. The intermediate certificates used only for building a certificate chain cannot be used as
     * trust anchors. Maximum number: 100.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    untrustedCerts?: Array<X509Cert>;

    /**
     * Trusted certificates. Trusted root certificates or intermediate CA certificates can be specified as trust anchors
     * for verification. Maximum number: 100.
     * <br>During verification, the certificate chain must trace back to a trusted certificate. Therefore, either this
     * parameter or **trustSystemCa** must be set to **true**.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    trustedCerts?: Array<X509Cert>;

    /**
     * Whether to trust system CA certificates. The default value is **false**.
     * - **true**: uses the system's prebuilt CA certificate store as a trust anchor. This parameter can be used to
     * verify public website certificates. You do not need to manually configure the root certificate;
     * - **false**: does not use the system's prebuilt CA certificate store as a trust anchor.
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    trustSystemCa?: boolean;

    /**
     * Whether to allow partial certificate chain verification. The default value is **false**.
     * - **true**: Any certificate in the trusted certificate list can be used as the trust anchor, and it is not
     * necessary to trace back to the root certificate;
     * - **false**: the root certificate must be traced during certificate chain construction.
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    partialChain?: boolean;

    /**
     * Whether to allow intermediate CA certificates to be downloaded from the network. The default value is **false**.
     * - **true**: When the intermediate certificate is missing in the certificate chain, it is allowed to download the
     * issuer certificate using the issuer address in the certificate AIA extension so that the certificate chain is
     * complete;
     * - **false**: intermediate CA certificates cannot be downloaded from the network.
     * <br>The download address is obtained from the certificate AIA extension. Only HTTP is supported. To use the
     * network for download, you need to request the **ohos.permission.INTERNET** permission. For details about the
     * permission configuration, see [Declaring Permissions](docroot://security/AccessToken/declare-permissions.md).
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    allowDownloadIntermediateCa?: boolean;

    /**
     * Verification date. The format is YYMMDDHHMMSSZ or YYYYMMDDHHMMSSZ. By default, the current system time is
     * used.
     * <br>Custom verification time is supported, which is applicable to scenarios such as offline verification of
     * historical signatures.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    date?: string;

    /**
     * Whether to verify the date. The default value is **true**. **true**: The certificate and CRL validity periods are
     * verified. **false**: The certificate and CRL validity periods are not verified.
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    validateDate?: boolean;

    /**
     * Whether to ignore specific verification errors. Maximum number: 8.
     * <br>The errors that can be ignored include: ERR_CERT_NOT_YET_VALID, ERR_CERT_HAS_EXPIRED,
     * ERR_UNKNOWN_CRITICAL_EXTENSION, ERR_CRL_NOT_FOUND, ERR_CRL_NOT_YET_VALID, ERR_CRL_HAS_EXPIRED,
     * ERR_OCSP_RESPONSE_NOT_FOUND, ERR_NETWORK_TIMEOUT.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ignoreErrs?: Array<CertResult>;

    /**
     * Host names. This parameter is used to verify that the certificate's subject alternative name (SAN) or common name
     * (CN) contains the specified host name. Maximum number: 100; maximum length of each host name: 128.
     * This parameter is applicable to scenarios such as HTTPS.
     * <br>Verification is successful as long as one of the hostnames is matched.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    hostnames?: Array<string>;

    /**
     * Email addresses. This parameter is used to verify that the certificate contains the specified email address. A
     * maximum of one email address is supported. The maximum length of the email address is 128.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    emailAddresses?: Array<string>;

    /**
     * Key usages. This parameter is used to check whether the key usage extension of the certificate contains the
     * specified usage. Maximum number: 9.
     * <br>The certificate must contain all specified key usages for verification to be successful.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    keyUsage?: Array<KeyUsageType>;

    /**
     * User ID. Used to set the user identifier required for signature verification when verifying the SM2 certificate.
     * Maximum length: 128 characters.
     * <br>This parameter is commonly set to
     * [0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38] for SM2
     * certificates. (The corresponding ASCII character string is 1234567812345678, 16 bytes.)
     * Certificate revocation check is not supported after userId is set.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    userId?: Uint8Array;

    /**
     * Certificate revocation check parameters, which are used to check whether a certificate is revoked. The parameters
     * include the CRL list, OCSP response data, and whether to allow online check.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    revokedParams?: X509CertRevokedParams;
  }

  /**
   * Represents the certificate verification result.
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface CertValidationResult {
    /**
     * Verified certificate chain. When the verification is successful, a complete certificate chain (from the end-entity
     * certificate to the trust anchor) is returned. It can be used for subsequent certificate information query or
     * other verification operations.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    readonly certChain: Array<X509Cert>;
  }

  /**
   * Describes a certificate chain validator object.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface CertChainValidator {
    /**
     * Verifies the X.509 certificate chain. This API uses an asynchronous callback to return the result.
     *
     * <br>Because the system time on the device is untrusted, the certificate chain validator does not verify the
     * certificate validity period. To check the validity period of a certificate, use the
     * [checkValidityWithDate()]{@link cert.X509Cert.checkValidityWithDate} API of the **X509Cert** class. For details
     * about certificate specifications, see
     * [Certificate Specifications](docroot://security/DeviceCertificateKit/certificate-framework-overview.md#certificate-specifications)
     * .
     *
     * @param { CertChainData } certChain - Serialized X.509 certificate chain data.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the verification is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @throws { BusinessError } 19030002 - The certificate signature verification failed.
     * @throws { BusinessError } 19030003 - The certificate has not taken effect.
     * @throws { BusinessError } 19030004 - The certificate has expired.
     * @throws { BusinessError } 19030005 - Failed to obtain the certificate issuer.
     * @throws { BusinessError } 19030006 - The key cannot be used for signing a certificate.
     * @throws { BusinessError } 19030007 - The key cannot be used for a digital signature.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    validate(certChain: CertChainData, callback: AsyncCallback<void>): void;

    /**
     * Verifies the X.509 certificate chain. This API uses a promise to return the result.
     *
     * <br>Because the system time on the device is untrusted, the certificate chain validator does not verify the
     * certificate validity period. To check the validity period of a certificate, use the
     * [checkValidityWithDate()]{@link cert.X509Cert.checkValidityWithDate} API of the **X509Cert** class. For details
     * about certificate specifications, see
     * [Certificate Specifications](docroot://security/DeviceCertificateKit/certificate-framework-overview.md#certificate-specifications)
     * .
     *
     * @param { CertChainData } certChain - Serialized X.509 certificate chain data.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @throws { BusinessError } 19030002 - The certificate signature verification failed.
     * @throws { BusinessError } 19030003 - The certificate has not taken effect.
     * @throws { BusinessError } 19030004 - The certificate has expired.
     * @throws { BusinessError } 19030005 - Failed to obtain the certificate issuer.
     * @throws { BusinessError } 19030006 - The key cannot be used for signing a certificate.
     * @throws { BusinessError } 19030007 - The key cannot be used for a digital signature.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    validate(certChain: CertChainData): Promise<void>;

    /**
     * Validates a certificate by building and verifying its certificate chain. This API uses a promise to return the
     * result.
     *
     * <br>The certificate chain construction process complies with the following rules:
     * 1. Trusted anchor source: The trusted certificate list (trustedCerts) is always used as the trust anchor source.
     * The pre-configured certificate is used as the trust anchor source only when trustSystemCa is set to true.
     * 2. Issuer search sequence: The system searches for the issuer from the trust anchor source first. If the issuer
     * cannot be found, the system searches for the issuer in the untrusted certificate list (untrustedCerts). The
     * intermediate CA certificate downloaded from the Internet is an untrusted certificate.
     * 3. Trust anchor locking: Once the issuer is found in the trust anchor source, the subsequent lookup process does
     * not back track to the untrusted certificate, that is, the subsequent certificates must come from the trust anchor
     * source.
     * 4. Build completion condition:
     * If partialChain is false (default value), the build is complete only when the root certificate (self-signed
     * certificate) is found.
     * If partialChain is true, the first time the issuer is found in the trust anchor source, the build is complete.
     * 5. Subsequent verification: After the certificate chain is constructed, perform other verification operations,
     * such as certificate signature verification and certificate revocation check.
     *
     * @param { X509Cert } cert - Certificate to be verified.
     * @param { CertValidationParams } params - Parameters for certificate validation.
     * @returns { Promise<CertValidationResult> } Promise used to return the verification result.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @throws { BusinessError } 19030002 - The certificate signature verification failed.
     * @throws { BusinessError } 19030003 - The certificate has not taken effect.
     * @throws { BusinessError } 19030004 - The certificate has expired.
     * @throws { BusinessError } 19030005 - Failed to obtain the certificate issuer.
     * @throws { BusinessError } 19030006 - The key cannot be used for signing a certificate.
     * @throws { BusinessError } 19030007 - The key cannot be used for a digital signature.
     * @throws { BusinessError } 19030009 - Untrusted certificate.
     * @throws { BusinessError } 19030010 - The certificate has been revoked.
     * @throws { BusinessError } 19030011 - Unsupported critical extension.
     * @throws { BusinessError } 19030012 - Hostname mismatch in the certificate.
     * @throws { BusinessError } 19030013 - Email address mismatch in the certificate.
     * @throws { BusinessError } 19030014 - Key usage mismatch in the certificate.
     * @throws { BusinessError } 19030015 - Failed to obtain the certificate revocation list.
     * @throws { BusinessError } 19030016 - The certificate revocation list has not taken effect.
     * @throws { BusinessError } 19030017 - The certificate revocation list has expired.
     * @throws { BusinessError } 19030018 - Failed to verify the signature of the certificate revocation list.
     * @throws { BusinessError } 19030019 - Failed to find the issuer of the certificate revocation list.
     * @throws { BusinessError } 19030020 - Failed to obtain the OCSP response.
     * @throws { BusinessError } 19030021 - Invalid OCSP response.
     * @throws { BusinessError } 19030022 - Failed to verify the OCSP signature.
     * @throws { BusinessError } 19030023 - Unknown OCSP certificate status.
     * @throws { BusinessError } 19030024 - Network connection timed out.
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    validateCert(cert: X509Cert, params: CertValidationParams): Promise<CertValidationResult>;

    /**
     * Algorithm of the X.509 certificate chain validator.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly algorithm: string;
  }

  /**
   * Creates a certificate chain validator object.
   *
   * @param { string } algorithm - Algorithm of the certificate chain validator obtained. Currently, only **PKIX** is
   *     supported.
   * @returns { CertChainValidator } **CertChainValidator** object created.
   * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
   *     <br>1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system;
   *     <br>3. Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createCertChainValidator(algorithm: string): CertChainValidator;

  /**
   * Enumerates the general name types defined in X.509. These types can be used in the subject alternative name and
   * other extensions.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum GeneralNameType {
    /**
     * Other name.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_OTHER_NAME = 0,

    /**
     * Email address.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_RFC822_NAME = 1,

    /**
     * DNS name.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_DNS_NAME = 2,

    /**
     * X.400 address.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_X400_ADDRESS = 3,

    /**
     * Directory name.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_DIRECTORY_NAME = 4,

    /**
     * Electronic Data Interchange (EDI) entity.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_EDI_PARTY_NAME = 5,

    /**
     * Uniform Resource Identifier (URI).
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_UNIFORM_RESOURCE_ID = 6,

    /**
     * IP address.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_IP_ADDRESS = 7,

    /**
     * Registered OID.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_REGISTERED_ID = 8
  }

  /**
   * Represents an X.509 general name defined in RFC 5280, which can be used in the subject alternative name and other
   * extensions.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface GeneralName {
    /**
     * General name type.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    type: GeneralNameType;

    /**
     * Value of **GeneralName** encoded in DER format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    name?: Uint8Array;
  }

  /**
   * Defines the parameters used to match a certificate. If no parameter is specified, all certificates are matched.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CertMatchParameters {
    /**
     * Certificate subject alternative name (SAN).
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    subjectAlternativeNames?: Array<GeneralName>;

    /**
     * Whether to match all SANs of the certificate. **true**: yes; **false**: no.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    matchAllSubjectAltNames?: boolean;

    /**
     * Key of the certificate authority (CA).
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    authorityKeyIdentifier?: Uint8Array;

    /**
     * Path length of the CA certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    minPathLenConstraint?: int;

    /**
     * Certificate object.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    x509Cert?: X509Cert;

    /**
     * Certificate validity period, for example, **20231121074700Z**.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    validDate?: string;

    /**
     * Certificate issuer, in DER format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    issuer?: Uint8Array;

    /**
     * Usage of the extended key.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    extendedKeyUsage?: Array<string>;

    /**
     * Specifies the name constraint entry to be matched against the type and value of any name constraint entry in the certificate's nameConstraints extension.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    nameConstraints?: Uint8Array;

    /**
     * Certificate policy.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    certPolicy?: Array<string>;

    /**
     * Validity period of the certificate private key.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    privateKeyValid?: string;

    /**
     * Whether to match the key usage. **true**: yes; **false**: no.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    keyUsage?: Array<boolean>;

    /**
     * Serial number of the certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    serialNumber?: bigint;

    /**
     * Certificate subject name, in DER format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    subject?: Uint8Array;

    /**
     * Public key identifier (Subject Key Identifier extension) of the certificate subject.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    subjectKeyIdentifier?: Uint8Array;

    /**
     * Public key of the certificate, in DER format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    publicKey?: DataBlob;

    /**
     * Algorithm of the certificate public key.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    publicKeyAlgID?: string;

    /**
     * Private key of the certificate. The value can be a string (indicating a PEM-encoded private key) or a
     * Uint8Array (indicating a DER-encoded private key).
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    privateKey?: string | Uint8Array;
  }

  /**
   * Represents the parameters used to match a certificate revocation list (CRL). If no parameter is specified, all CRLs
   * are matched.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CRLMatchParameters {
    /**
     * CRL issuer, in DER format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    issuer?: Array<Uint8Array>;

    /**
     * Certificate object used to determine whether the certificate is in the CRL.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    x509Cert?: X509Cert;

    /**
     * CRL update time, for example, **20231121074700Z**.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    updateDateTime?: string;

    /**
     * Maximum CRL number.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    maxCRL?: bigint;

    /**
     * Minimum CRL number.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    minCRL?: bigint;
  }

  /**
   * Certificate and CRL collection.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface CertCRLCollection {
    /**
     * Selects certificates that match the specified parameters. This API uses a promise to return the result.
     *
     * @param { X509CertMatchParameters } param - Parameters used to match the certificates.
     * @returns { Promise<Array<X509Cert>> } Promise used to return an array of matched certificate objects.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    selectCerts(param: X509CertMatchParameters): Promise<Array<X509Cert>>;

    /**
     * Selects certificates that match the specified parameters. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { X509CertMatchParameters } param - Parameters used to match the certificates.
     * @param { AsyncCallback<Array<X509Cert>> } callback - Callback used to return the result. If the certificate objects
     *     are successfully found, **err** is **undefined** and **data** is an array of matched certificate objects
     *     obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    selectCerts(param: X509CertMatchParameters, callback: AsyncCallback<Array<X509Cert>>): void;

    /**
     * Selects CRLs that match the specified parameters. This API uses a promise to return the result.
     *
     * @param { X509CRLMatchParameters } param - Parameters used to match the CRLs.
     * @returns { Promise<Array<X509CRL>> } Promise used to return the matched CRLs.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    selectCRLs(param: X509CRLMatchParameters): Promise<Array<X509CRL>>;

    /**
     * Selects CRLs that match the specified parameters. This API uses an asynchronous callback to return the result.
     *
     * @param { X509CRLMatchParameters } param - Parameters used to match the CRLs.
     * @param { AsyncCallback<Array<X509CRL>> } callback - Callback used to return the result. If the CRLs are successfully
     *     found, **err** is **undefined** and **data** is an array of CRLs obtained. Otherwise, **err** is an error
     *     object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    selectCRLs(param: X509CRLMatchParameters, callback: AsyncCallback<Array<X509CRL>>): void;
  }

  /**
   * Creates an object for a collection of X.509 certificates and CRLs.
   *
   * @param { Array<X509Cert> } certs - X.509 certificate array.
   * @param { Array<X509CRL> } [options] crls - X.509 CRL array. [since 11 - 11]
   * @param { Array<X509CRL> } [crls] - X.509 CRL array.
   * @returns { CertCRLCollection } Certificate and CRL collection.
   * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createCertCRLCollection(certs: Array<X509Cert>, crls?: Array<X509CRL>): CertCRLCollection;

  /**
   * Describes an X.509 certificate chain object.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CertChain {
    /**
     * Obtains a list of X.509 certificates.
     *
     * @returns { Array<X509Cert> } X.509 certificates.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getCertList(): Array<X509Cert>;

    /**
     * Verifies the certificate chain. This API uses a promise to return the result.
     *
     * @param { CertChainValidationParameters } param - Parameters for verifying the X.509 certificate chain.
     * @returns { Promise<CertChainValidationResult> } Promise used to return the certificate chain verification result.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @throws { BusinessError } 19030002 - The certificate signature verification failed.
     * @throws { BusinessError } 19030003 - The certificate has not taken effect.
     * @throws { BusinessError } 19030004 - The certificate has expired.
     * @throws { BusinessError } 19030005 - Failed to obtain the certificate issuer.
     * @throws { BusinessError } 19030006 - The key cannot be used for signing a certificate.
     * @throws { BusinessError } 19030007 - The key cannot be used for a digital signature.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    validate(param: CertChainValidationParameters): Promise<CertChainValidationResult>;

    /**
     * Verifies a certificate chain using verification parameters. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { CertChainValidationParameters } param - Parameters for verifying the X.509 certificate chain.
     * @param { AsyncCallback<CertChainValidationResult> } callback - Callback used to return the result. If the
     *     certificate chain is verified successfully, **err** is **undefined** and **data** is the obtained certificate
     *     chain verification result. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @throws { BusinessError } 19030002 - The certificate signature verification failed.
     * @throws { BusinessError } 19030003 - The certificate has not taken effect.
     * @throws { BusinessError } 19030004 - The certificate has expired.
     * @throws { BusinessError } 19030005 - Failed to obtain the certificate issuer.
     * @throws { BusinessError } 19030006 - The key cannot be used for signing a certificate.
     * @throws { BusinessError } 19030007 - The key cannot be used for a digital signature.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    validate(param: CertChainValidationParameters, callback: AsyncCallback<CertChainValidationResult>): void;

    /**
     * Converts the object data into a string.
     *
     * @returns { string } String obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    toString(): string;

    /**
     * Obtains the hash value of the data in DER format.
     *
     * @returns { Uint8Array } Hash value in DER format obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hashCode(): Uint8Array;
  }

  /**
   * Creates an X.509 certificate chain object. This API uses a promise to return the result.
   *
   * @param { EncodingBlob } inStream - X.509 certificate serialization data.
   * @returns { Promise<X509CertChain> } Promise that returns the **X509CertChain** instance created.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createX509CertChain(inStream: EncodingBlob): Promise<X509CertChain>;

  /**
   * Creates an X.509 certificate chain object. This API uses an asynchronous callback to return the result.
   *
   * @param { EncodingBlob } inStream - X.509 certificate serialization data.
   * @param { AsyncCallback<X509CertChain> } callback - Callback used to return the result. If the X.509 certificate chain
   *     object is successfully created, **err** is **undefined**, and **data** is the **X509CertChain** instance
   *     obtained. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createX509CertChain(inStream: EncodingBlob, callback: AsyncCallback<X509CertChain>): void;

  /**
   * Creates an X.509 certificate chain object based on the specified certificates. This API returns the result
   * synchronously.
   *
   * @param { Array<X509Cert> } certs - X.509 certificates.
   * @returns { X509CertChain } X.509 certificate chain object.
   * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createX509CertChain(certs: Array<X509Cert>): X509CertChain;

  /**
   * Builds an X.509 certificate chain with a **CertChainBuildParameters** object. This API uses a promise to return the
   * result.
   *
   * @param { CertChainBuildParameters } param - Object used to build the certificate chain.
   * @returns { Promise<CertChainBuildResult> } Promise that returns the **CertChainBuildResult** instance created.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
   *     <br>1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system;
   *     <br>3. Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @throws { BusinessError } 19030002 - The certificate signature verification failed.
   * @throws { BusinessError } 19030003 - The certificate has not taken effect.
   * @throws { BusinessError } 19030004 - The certificate has expired.
   * @throws { BusinessError } 19030005 - Failed to obtain the certificate issuer.
   * @throws { BusinessError } 19030006 - The key cannot be used for signing a certificate.
   * @throws { BusinessError } 19030007 - The key cannot be used for a digital signature.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function buildX509CertChain(param: CertChainBuildParameters): Promise<CertChainBuildResult>;

  /**
   * Enumerates the certificate data encoding formats.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum EncodingBaseFormat {
    /**
     * PEM.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PEM = 0,

    /**
     * DER.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    DER = 1
  }

  /**
   * Represents the PKCS #12 data, including the private key, certificate, and other certificates.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface Pkcs12Data {
    /**
     * Private key. The string is in PEM format, and the Uint8Array data is in DER format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    privateKey?: string | Uint8Array;

    /**
     * Certificate that matches the private key.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    cert?: X509Cert;

    /**
     * Other certificates.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    otherCerts?: Array<X509Cert>;
  }

  /**
   * Represents the configuration for parsing PKCS #12 files.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface Pkcs12ParsingConfig {
    /**
     * Password.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * Whether to obtain the private key. The default value is **true**.
     *
     * **true**: To obtain the private key in PKCS #8 format; **false**: Not to obtain the private key.
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    needsPrivateKey?: boolean;

    /**
     * Format of the private key to be obtained. Currently, the PEM and DER formats are supported. If this parameter is
     * not specified, the PEM format is used by default. Note: This parameter is valid only when **needsPrivateKey** is
     * set to **true**.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    privateKeyFormat?: EncodingBaseFormat;

    /**
     * Whether to obtain the certificate. The default value is **true**. **true**: yes; **false**: no.
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    needsCert?: boolean;

    /**
     * Whether to obtain other certificates. The default value is **false**. **true**: yes; **false**: no.
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    needsOtherCerts?: boolean;
  }

  /**
   * Parse the PKCS #12 file.
   *
   * @param { Uint8Array } data - Original data of the PKCS #12 file in DER format.
   * @param { Pkcs12ParsingConfig } config - Configuration for parsing the PKCS #12 file.
   * @returns { Pkcs12Data } Certificate, private key, and other certificates parsed from a PKCS #12 file.
   * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
   *     <br>1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system;
   *     <br>3. Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @throws { BusinessError } 19030008 - Maybe wrong password.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function parsePkcs12(data: Uint8Array, config: Pkcs12ParsingConfig): Pkcs12Data;

  /**
   * Parses P12. This API uses a promise to return the result.
   *
   * @param { Uint8Array } data - Raw data of P12 file, in DER format.
   * @param { string } password - Password.
   * @returns { Promise<Pkcs12Data> } Promise used to return the parsed P12 data. The private key in the returned
   *     **Pkcs12Data** is encoded in PEM format.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
   *     <br>1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system;
   *     <br>3. Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
   *     <br>1. The length of the data is zero or too large;
   *     <br>2. The length of the password is too large.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @throws { BusinessError } 19030008 - Maybe wrong password.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function parsePkcs12(data: Uint8Array, password: string): Promise<Pkcs12Data>;

  /**
   * Creates a [TrustAnchor]{@link cert.X509TrustAnchor} object array by using the CA certificate parsed from a .p12
   * keystore file. This API uses a promise to return the result.
   *
   * @param { Uint8Array } keystore - Raw data of P12 file, in DER format.
   * @param { string } pwd - Password.
   * @returns { Promise<Array<X509TrustAnchor>> } Promise used to return the **X509TrustAnchor** object array created.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
   *     <br>1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system;
   *     <br>3. Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @throws { BusinessError } 19030002 - The certificate signature verification failed.
   * @throws { BusinessError } 19030003 - The certificate has not taken effect.
   * @throws { BusinessError } 19030004 - The certificate has expired.
   * @throws { BusinessError } 19030005 - Failed to obtain the certificate issuer.
   * @throws { BusinessError } 19030006 - The key cannot be used for signing a certificate.
   * @throws { BusinessError } 19030007 - The key cannot be used for a digital signature.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function createTrustAnchorsWithKeyStore(keystore: Uint8Array, pwd: string): Promise<Array<X509TrustAnchor>>;

  /**
   * Creates an **X500DistinguishedName** object with a name in the form of a string. This API uses a promise to return
   * the result.
   *
   * @param { string } nameStr - Distinguishable names of the string type are separated by slashes (/). Each
   *     distinguishable name is in the format of an attribute=a value. Common attributes include **CN** (common
   *     name), **O** (organization name), **OU** (organization unit), **C** (country/region), **ST**
   *     (province/state), and **L** (city/district). For example, **\/CN=example.com/O=Example/C=CN**.
   * @returns { Promise<X500DistinguishedName> } Promise used to return the **X500DistinguishedName** instance obtained.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
   *     <br>1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system;
   *     <br>3. Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @throws { BusinessError } 19030002 - The certificate signature verification failed.
   * @throws { BusinessError } 19030003 - The certificate has not taken effect.
   * @throws { BusinessError } 19030004 - The certificate has expired.
   * @throws { BusinessError } 19030005 - Failed to obtain the certificate issuer.
   * @throws { BusinessError } 19030006 - The key cannot be used for signing a certificate.
   * @throws { BusinessError } 19030007 - The key cannot be used for a digital signature.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function createX500DistinguishedName(nameStr: string): Promise<X500DistinguishedName>;

  /**
   * Creates an **X500DistinguishedName** object with a name in DER format. This API uses a promise to return the
   * result.
   *
   * @param { Uint8Array } nameDer - X.500 Distinguished Name in DER format.
   * @returns { Promise<X500DistinguishedName> } Promise used to return the **X500DistinguishedName** instance obtained.
   * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
   *     <br>1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system;
   *     <br>3. Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @throws { BusinessError } 19030002 - The certificate signature verification failed.
   * @throws { BusinessError } 19030003 - The certificate has not taken effect.
   * @throws { BusinessError } 19030004 - The certificate has expired.
   * @throws { BusinessError } 19030005 - Failed to obtain the certificate issuer.
   * @throws { BusinessError } 19030006 - The key cannot be used for signing a certificate.
   * @throws { BusinessError } 19030007 - The key cannot be used for a digital signature.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function createX500DistinguishedName(nameDer: Uint8Array): Promise<X500DistinguishedName>;

  /**
   * Provides APIs for X.500 distinguished name operations.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface X500DistinguishedName {
    /**
     * Obtains the distinguished name in the form of a string.
     *
     * @returns { string } Distinguished name obtained.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getName(): string;

    /**
     * Obtains the string of the distinguished names based on the specified encoding type.
     *
     * @param { EncodingType } encodingType - Encoding format.
     * @returns { string } String of the distinguished names separated by commas (,).
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is not in the EncodingType enumeration range.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getName(encodingType: EncodingType): string;

    /**
     * Obtains the string of the relative distinguished names (RDNs) of the specified types.
     *
     * @param { string } type - RDN of the specified type. For example, **CN** and **OU**.
     * @returns { Array<string> } RDN string array.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getName(type: string): Array<string>;

    /**
     * Obtains an array of RDN strings based on the specified type and encoding format.
     *
     * @param { string } type - RDN of the specified type. For example, **CN** and **OU**.
     * @param { EncodingType } encodingType - Encoding format.
     * @returns { Array<string> } RDN string array.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is not in the EncodingType enumeration range.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getName(type: string, encodingType: EncodingType): Array<string>;

    /**
     * Obtains an X.500 distinguished name encoded in DER format.
     *
     * @returns { EncodingBlob } X.500 distinguished name encoded in DER format.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getEncoded(): EncodingBlob;
  }

  /**
   * Represents an X.509 trust anchor, which is used to verify the certificate chain. The certificate or public key in
   * the trust anchor is used as the trusted root to verify the certificate chain.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509TrustAnchor {
    /**
     * Trusted CA certificate. If **CACert** is set, only **CACert** is used to validate the certificate chain.
     * **CAPubKey** and **CASubject** are not used.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CACert?: X509Cert;

    /**
     * Public key of the trusted CA certificate, in DER format. This parameter takes effect only when **CACert** is not
     * set.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CAPubKey?: Uint8Array;

    /**
     * Subject name of the trusted CA certificate, in DER format. This parameter takes effect only when
     * **CAPubKey** is set. The validation object is determined based on the CA public key type (self-signed or
     * upper-level), and can be the subject or issuer name of the root certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CASubject?: Uint8Array;

    /**
     * Name constraints, in DER format. Only the leaf certificate of the current certificate chain is validated.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    nameConstraints?: Uint8Array;
  }

  /**
   * Enumerates the options for checking the certificate revocation status.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum RevocationCheckOptions {
    /**
     * Use OCSP over CRL (default).
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_PREFER_OCSP = 0,

    /**
     * Obtain the CRL/OCSP response over the network. By default, it is disabled. The certificate revocation status can be
     * checked by obtaining the first CRL distribution point address from the CDP extension or the first OCSP server
     * address from the AIA extension. Moreover, only HTTP is supported. You must declare the
     * ohos.permission.INTERNET permission.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_ACCESS_NETWORK = 1,

    /**
     * This parameter is valid when the **ACCESS_NETWORK** option is enabled. It allows the alternative solution to be
     * used to obtain the certificate revocation status if the preferred solution cannot be used due to network
     * problems.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_FALLBACK_NO_PREFER = 2,

    /**
     * This parameter is valid when the **ACCESS_NETWORK** option is enabled. It allows the locally configured CRL/OCSP
     * response to be used to check the certificate revocation status if the online CRL/OCSP response cannot be used due
     * to network problems.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_FALLBACK_LOCAL = 3,

    /**
     * This parameter is valid when the **ACCESS_NETWORK** option is enabled. If this capability is enabled, the system
     * continues to check the revocation status of the intermediate certificate if the OCSP or CRL check of the leaf
     * certificate succeeds. This capability is disabled by default.
     *
     * > **NOTE**
     * >
     * > This capability and **REVOCATION_CHECK_OPTION_LOCAL_CRL_ONLY_CHECK_END_ENTITY_CERT** cannot be enabled at
     * > the same time.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_CHECK_INTERMEDIATE_CA_ONLINE = 4,

    /**
     * If this option is enabled, the response of a local CRL is used to check the revocation status of the end entity
     * certificate. This capability is disabled by default.
     *
     * > **NOTE**
     * >
     * > This capability and **REVOCATION_CHECK_OPTION_CHECK_INTERMEDIATE_CA_ONLINE** cannot be enabled at the same
     * > time.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_LOCAL_CRL_ONLY_CHECK_END_ENTITY_CERT = 5,

    /**
     * If this option is enabled, the CRL/OCSP response obtained over the network is used to check the certificate
     * revocation status, ignoring the unreachable network error. This capability is disabled by default. By default, the
     * network unreachable error may cause certificate chain validation failure.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    REVOCATION_CHECK_OPTION_IGNORE_NETWORK_ERROR = 6
  }

  /**
   * Enumerates the types of the online certificate chain validation policy.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum ValidationPolicyType {
    /**
     * Do not verify **sslHostname** or **dNSName** in the certificate. It is the default value.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    VALIDATION_POLICY_TYPE_X509 = 0,

    /**
     * Verify **sslHostname** or **dNSName** in the certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    VALIDATION_POLICY_TYPE_SSL = 1
  }

  /**
   * Enumerates the purposes, for which the key in the certificate is used.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum KeyUsageType {
    /**
     * The certificate holder can use the private key contained in the certificate to generate a digital signature.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_DIGITAL_SIGNATURE = 0,

    /**
     * The certificate holder can use the key to create a digital signature as part of a non-repudiation service.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_NON_REPUDIATION = 1,

    /**
     * The certificate holder can use the public key contained in the certificate for key encryption.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_KEY_ENCIPHERMENT = 2,

    /**
     * The certificate holder can use the public key contained in the certificate for data encryption.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_DATA_ENCIPHERMENT = 3,

    /**
     * The certificate public key can be used to perform key agreement operations.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_KEY_AGREEMENT = 4,

    /**
     * The certificate public key can be used to sign other certificates.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_KEY_CERT_SIGN = 5,

    /**
     * The certificate public key can be used to sign CRLs.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_CRL_SIGN = 6,

    /**
     * The certificate holder can use the key to perform encryption only.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_ENCIPHER_ONLY = 7,

    /**
     * The certificate holder can use the key to perform decryption only.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_DECIPHER_ONLY = 8
  }

  /**
   * Represents the parameters for checking the certificate revocation status for a certificate chain.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface RevocationCheckParameter {
    /**
     * OCSP request extensions.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspRequestExtension?: Array<Uint8Array>;

    /**
     * URI of the alternative server used to send OCSP requests. HTTP and HTTPS are supported. The specific
     * configuration is determined via the negotiation with the server. Note: The current URI takes effect only for
     * entity certificates.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspResponderURI?: string;

    /**
     * Signing certificate used for verifying the signature of the OCSP response.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspResponderCert?: X509Cert;

    /**
     * Alternative OCSP responses.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspResponses?: Uint8Array;

    /**
     * Alternative address used to download the CRLs. Note: The current URI takes effect only for entity certificates.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    crlDownloadURI?: string;

    /**
     * A set of rules for obtaining the certificate revocation status.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    options?: Array<RevocationCheckOptions>;

    /**
     * Hash algorithm used to create a certificate ID during OCSP communication. The options include **MD5**, **SHA1**,
     * **SHA224**, **SHA256**, **SHA384**, and **SHA512**. The default value is **SHA256**.
     *
     * @default SHA256
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspDigest?: string;
  }

  /**
   * Represents the parameters for certificate chain validation.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface CertChainValidationParameters {
    /**
     * Date used to check the validity of a certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    date?: string;

    /**
     * List of trusted anchors.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    trustAnchors: Array<X509TrustAnchor>;

    /**
     * Whether to trust system CA certificates. The default value is **false**. **true**: Use the system's prebuilt CA
     * certificate store as the trust anchor. **false**: Do not use the system's prebuilt CA certificate store as the
     * trust anchor.
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    trustSystemCa?: boolean;

    /**
     * Whether to allow downloading the missing intermediate CA certificate from the network.
     * **true** means yes; **false** otherwise. The default value is **false**.
     * <br>The download address is obtained from the certificate AIA extension. Only HTTP is supported. To use the
     * network for download, you need to request the **ohos.permission.INTERNET** permission. For details about the
     * permission configuration, see [Declaring Permissions](docroot://security/AccessToken/declare-permissions.md).
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    allowDownloadIntermediateCa?: boolean;

    /**
     * CRLs used to check whether a certificate is revoked.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    certCRLs?: Array<CertCRLCollection>;

    /**
     * Parameters for checking the certificate revocation status.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    revocationCheckParam?: RevocationCheckParameter;

    /**
     * Type of the policy for certificate validation.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    policy?: ValidationPolicyType;

    /**
     * Host name in the certificate to be verified. This parameter must be used with **policy** together.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    sslHostname?: string;

    /**
     * Usage of the key in the certificate to be validated.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    keyUsage?: Array<KeyUsageType>;
  }

  /**
   * Represents the return value of certificate chain validation.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface CertChainValidationResult {
    /**
     * Trust anchor.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly trustAnchor: X509TrustAnchor;

    /**
     * Entity certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly entityCert: X509Cert;
  }

  /**
   * Defines the parameters for building a certificate chain.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface CertChainBuildParameters {
    /**
     * Filter criteria.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    certMatchParameters: X509CertMatchParameters;

    /**
     * Maximum number of CA certificates.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    maxLength?: int;

    /**
     * Verification condition.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    validationParameters: CertChainValidationParameters;
  }

  /**
   * Represents the result of building a certificate chain.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface CertChainBuildResult {
    /**
     * Certificate chain object created.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly certChain: X509CertChain;

    /**
     * Certificate chain validation result.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly validationResult: CertChainValidationResult;
  }

  /**
   * Enumerates the Cryptographic Message Syntax (CMS) message types.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum CmsContentType {
    /**
     * Signed data.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    SIGNED_DATA = 0,

    /**
     * Encapsulated data, including authenticated encapsulated data.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    ENVELOPED_DATA = 1
  }

  /**
   * Enumerates the CMS message formats.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum CmsContentDataFormat {
    /**
     * Binary data format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    BINARY = 0,

    /**
     * Text data format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    TEXT = 1
  }

  /**
   * Enumerates the CMS encoding formats.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum CmsFormat {
    /**
     * PEM format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PEM = 0,

    /**
     * DER.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    DER = 1
  }

  /**
   * Represents information about the private key.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface PrivateKeyInfo {
    /**
     * Encrypted or unencrypted private key in PEM or DER format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    key: string | Uint8Array;

    /**
     * Password of the private key, if the private key is encrypted.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    password?: string;
  }

  /**
   * Enumerates the RSA CMS signature padding modes.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum CmsRsaSignaturePadding {
    /**
     * PKCS #1 v1.5 padding mode.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    PKCS1_PADDING = 0,

    /**
     * PKCS #1 PSS padding mode.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    PKCS1_PSS_PADDING = 1
  }

  /**
   * Represents the configuration of the CMS signer.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CmsSignerConfig {
    /**
     * Message digest algorithm, for example, **SHA384**. Currently, **SHA1**, **SHA256**, **SHA384**, and **SHA512**
     * are supported.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    mdName: string;

    /**
     * Padding mode for an RSA signature. The default value is **PKCS1_PADDING**.
     * <br>When this parameter is set to **PKCS1_PSS_PADDING**, **mdName** must be set to **SHA256**, **SHA384**, or
     * **SHA512**. Note: This parameter is valid only when the signer private key is an RSA key.
     *
     * @default CmsRsaSignaturePadding.PKCS1_PADDING
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    rsaSignaturePadding?: CmsRsaSignaturePadding;

    /**
     * Whether to add a certificate. The default value is **true**. **true**: yes; **false**: no.
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    addCert?: boolean;

    /**
     * Whether to add the signature attribute. The default value is **true**. **true**: yes; **false**: no.
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    addAttr?: boolean;

    /**
     * Whether to add the S/MIME capability for CMS objects. The default value is **true**. **true**: yes; **false**:
     * no.
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    addSmimeCapAttr?: boolean;
  }

  /**
   * Enumerates the digest algorithms of the CMS KeyAgree type.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum CmsKeyAgreeRecipientDigestAlgorithm {
    /**
     * SHA-256.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    SHA256 = 0,

    /**
     * SHA-384.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    SHA384 = 1,

    /**
     * SHA-512.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    SHA512 = 2
  }

  /**
   * Enumerates the encryption algorithms for CMS-encapsulated data.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum CmsRecipientEncryptionAlgorithm {
    /**
     * AES-128-CBC.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_128_CBC = 0,

    /**
     * AES-192-CBC.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_192_CBC = 1,

    /**
     * AES-256-CBC.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_256_CBC = 2,

    /**
     * AES-128-GCM.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_128_GCM = 3,

    /**
     * AES-192-GCM.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_192_GCM = 4,

    /**
     * AES-256-GCM.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_256_GCM = 5
  }

  /**
   * Represents the recipient information for key transport encapsulated using CMS.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsKeyTransRecipientInfo {
    /**
     * RSA certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    cert: X509Cert;
  }

  /**
   * Represents the recipient information for key agreement encapsulated using CMS.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsKeyAgreeRecipientInfo {
    /**
     * EC certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    cert: X509Cert;

    /**
     * KDF digest algorithm. The default value is **SHA256**.
     *
     * @default CmsKeyAgreeRecipientDigestAlgorithm.SHA256
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    digestAlgorithm?: CmsKeyAgreeRecipientDigestAlgorithm;
  }

  /**
   * Represents the recipient information encapsulated using CMS.

   * > **NOTE**
   * >
   * > At least one recipient must be set.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsRecipientInfo {
    /**
     * Recipient information for key transport.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    keyTransInfo?: CmsKeyTransRecipientInfo;
    /**
     * Recipient information for key agreement.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    keyAgreeInfo?: CmsKeyAgreeRecipientInfo;
  }

  /**
   * Represents the configuration for generating a CMS message.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CmsGeneratorOptions {
    /**
     * Format of the content. The default value is **CmsContentDataFormat.BINARY**.
     *
     * @default CmsContentDataFormat.BINARY
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    contentDataFormat?: CmsContentDataFormat;

    /**
     * Format of the CMS data generated. The default value is **DER**.
     *
     * @default CmsFormat.DER
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    outFormat?: CmsFormat;

    /**
     * Whether the final CMS message does not contain the raw data. The default value is **false**. **true**: raw data
     * is not contained; **false**: raw data is contained.
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    isDetached?: boolean;
  }

  /**
   * Provide APIs for generating messages in CMS format.
   *
   * > **NOTE**
   * >
   * > PKCS #7 is a standard syntax for storing signed or encrypted data. CMS is an extension of PKCS #7. PKCS #7
   * > supports data types including data, signed data, enveloped data, signed and enveloped data, digested
   * > data, and encrypted data. It is often used to protect data integrity and confidentiality.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CmsGenerator {
    /**
     * Adds a signer to the CMS **SIGNED_DATA** structure.
     *
     * > **NOTE**
     * >
     * > OpenSSL does not support signature verification of self-signed certificates. Therefore, self-signed
     * > certificates cannot be used as issuer certificates.
     *
     * @param { X509Cert } cert - X.509 certificate.
     * @param { PrivateKeyInfo } keyInfo - Private key information.
     * @param { CmsSignerConfig } config - CMS signer configuration.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @throws { BusinessError } 19030008 - Maybe wrong password.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    addSigner(cert: X509Cert, keyInfo: PrivateKeyInfo, config: CmsSignerConfig): void;

    /**
     * Adds a certificate for the CMS **SIGNED_DATA** structure, for example, the issuer certificate of a signing
     * certificate.
     *
     * <br>If the certificate is added without calling **addSigner**, the generated CMS signature data contains only the
     * certificate information.
     *
     * @param { X509Cert } cert - X.509 certificate to be added.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    addCert(cert: X509Cert): void;

    /**
     * Sets the encryption algorithm for CMS **ENVELOPED_DATA**.
     *
     * <br>This API should be called immediately after a **CmsGenerator** object of the **ENVELOPED_DATA** type is
     * created. If not, AES_256_GCM is used as the encryption algorithm by default.
     *
     * @param { CmsRecipientEncryptionAlgorithm } algorithm - Encryption algorithm used to encapsulate data based on
     *     CMS.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
     *     <br>1. The type of algorithm is invalid or not supported.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    setRecipientEncryptionAlgorithm(algorithm: CmsRecipientEncryptionAlgorithm): void;

    /**
     * Adds recipient information to the CMS **ENVELOPED_DATA** structure. This API uses a promise to return the result.
     *
     * <br>At least one recipient must be set.
     *
     * @param { CmsRecipientInfo } recipientInfo - Recipient Information.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
     *     <br>1. The type of recipient certificate is invalid or not supported;
     *     <br>2. The digestAlgorithm of CmsKeyAgreeRecipientInfo is invalid or not supported;
     *     <br>3. The recipientInfo does not have any recipient info.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    addRecipientInfo(recipientInfo: CmsRecipientInfo): Promise<void>;

    /**
     * Obtains the CMS data, for example, the CMS signature data or CMS encapsulated data. This API uses a promise to
     * return the result.
     *
     * @param { Uint8Array } data - CMS data to be operated.
     * @param { CmsGeneratorOptions } [options] - Configuration of the CMS operation.
     * @returns { Promise<Uint8Array | string> } Promise used to return CMS messages.
     * @throws { BusinessError } 401 - [Sync/Async] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    doFinal(data: Uint8Array, options?: CmsGeneratorOptions): Promise<Uint8Array | string>;

    /**
     * Obtains the CMS message, for example, the CMS signature data or CMS encapsulated data. This API returns the result
     * synchronously.
     *
     * @param { Uint8Array } data - CMS data to be operated.
     * @param { CmsGeneratorOptions } [options] - Configuration of the CMS operation.
     * @returns { Uint8Array | string } CMS message.
     * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    doFinalSync(data: Uint8Array, options?: CmsGeneratorOptions): Uint8Array | string;

    /**
     * Obtains the encrypted data of the CMS **ENVELOPED_DATA** structure. This API uses a promise to return the result.
     *
     * <br>Obtains the encrypted data if a **CmsGenerator** object of the **ENVELOPED_DATA** type is created and data
     * separation is used to generate CMS encapsulated data.
     *
     * @returns { Promise<Uint8Array> } Promise used to return the encrypted data.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getEncryptedContentData(): Promise<Uint8Array>;
  }

  /**
   * Creates a **CmsGenerator** object.
   *
   * @param { CmsContentType } contentType - CMS content type.
   * @returns { CmsGenerator } **CmsGenerator** object created.
   * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
   *     <br>1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system;
   *     <br>3. Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function createCmsGenerator(contentType: CmsContentType): CmsGenerator;

  /**
   * CMS signature verification configuration.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsVerificationConfig {
    /**
     * Trust certificate. Note: You need to configure the trust certificates for all signers.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    trustCerts: Array<X509Cert>;

    /**
     * Signer certificate. This parameter is left empty by default.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    signerCerts?: Array<X509Cert>;

    /**
     * Content data. If the detached mode is used, you need to specify the plaintext data. This parameter is optional in
     * attached mode.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    contentData?: Uint8Array;

    /**
     * Format of the content. The default value is **CmsContentDataFormat.BINARY**.
     *
     * @default CmsContentDataFormat.BINARY
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    contentDataFormat?: CmsContentDataFormat;
  }

  /**
   * Represents configuration for decapsulation with CMS.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsEnvelopedDecryptionConfig {
    /**
     * Private key parameter. This parameter is left empty by default.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    keyInfo?: PrivateKeyInfo;

    /**
     * Public key certificate. This parameter is left empty by default.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    cert?: X509Cert;

    /**
     * Encrypted content data. If the CMS does not contain content data, you can specify the data. This parameter is left
     * empty by default.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    encryptedContentData?: Uint8Array;

    /**
     * Format of the content. The default value is **CmsContentDataFormat.BINARY**.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    contentDataFormat?: CmsContentDataFormat;
  }

  /**
   * Enumerates certificate types obtained from CMS.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum CmsCertType {
    /**
     * Signer certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    SIGNER_CERTS = 0,

    /**
     * All certificates.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    ALL_CERTS = 1
  }

  /**
   * Provide APIs for parsing, verifying signatures, and decapsulating CMS messages.
   *
   * > **NOTE**
   * >
   * > PKCS #7 is a standard syntax for storing signed or encrypted data. CMS is an extension of PKCS #7. PKCS #7
   * > supports data types including data, signed data, enveloped data, signed and enveloped data, digested
   * > data, and encrypted data. It is often used to protect data integrity and confidentiality.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsParser {
    /**
     * Sets CMS message data. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > CMS messages in PEM and DER formats are supported. The string is in PEM format, and the Uint8Array data is in
     * > DER format.
     *
     * @param { Uint8Array | string } data - CMS message content.
     * @param { CmsFormat } cmsFormat - Input CMS format.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
     *     <br>1. The length of the data is zero or too large;
     *     <br>2. The type of the cmsFormat is invalid or not supported.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    setRawData(data: Uint8Array | string, cmsFormat: CmsFormat): Promise<void>;

    /**
     * Obtains the CMS content type.
     *
     * @returns { CmsContentType } CMS content type.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getContentType(): CmsContentType;

    /**
     * Verifies the CMS message of the signature data type. This API uses a promise to return the result.
     *
     * @param { CmsVerificationConfig } config - CMS signature verification configuration.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
     *     <br>1. The trustCerts of config is empty;
     *     <br>2. The length of the contentData of config is zero or too large;
     *     <br>3. The contentDataFormat of config is invalid or not supported.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @throws { BusinessError } 19030003 - The certificate has not taken effect.
     * @throws { BusinessError } 19030004 - The certificate has expired.
     * @throws { BusinessError } 19030005 - Failed to obtain the certificate issuer.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    verifySignedData(config: CmsVerificationConfig): Promise<void>;

    /**
     * Obtains the content data from the CMS message of the signature data type. This API uses a promise to return the
     * result.
     *
     * @returns { Promise<Uint8Array> } Promise used to return CMS content data.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getContentData(): Promise<Uint8Array>;

    /**
     * Obtains the certificate from CMS messages of the signature data type by passing enumerated values. Currently, the
     * signer certificate or all certificates can be obtained. This API uses a promise to return the result.
     *
     * @param { CmsCertType } type - Type of the certificate obtained from the CMS.
     * @returns { Promise<Array<X509Cert>> } Promise used to return a certificate set.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
     *     <br>1. The value of type is invalid or not supported.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getCerts(type: CmsCertType): Promise<Array<X509Cert>>;

    /**
     * Decrypts the CMS message of the enveloped data type. This API uses a promise to return the result.
     *
     * @param { CmsEnvelopedDecryptionConfig } config - CMS decryption configuration.
     * @returns { Promise<Uint8Array> } Promise used to return the decryption result.
     * @throws { BusinessError } 19020001 - Memory malloc failed.
     * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
     *     <br>1. The private key is invalid or not supported;
     *     <br>2. The recipient certificate is invalid or not supported.
     * @throws { BusinessError } 19030001 - Crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    decryptEnvelopedData(config: CmsEnvelopedDecryptionConfig): Promise<Uint8Array>;
  }

  /**
   * Creates a **CmsParser** object.
   *
   * @returns { CmsParser } CmsParser object.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
   *     <br>1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system;
   *     <br>3. Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function createCmsParser(): CmsParser;

  /**
   * Defines the CSR attribute.
   *
   * <br>The CSR attribute field can only be set to a UTF-8 string currently. **type** is commonly set to
   * **challengePassword**.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CsrAttribute {
    /**
     * Attribute type defined in PKCS #9.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    type: string;

    /**
     * Attribute value.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    value: string;
  }

  /**
   * Describes the configuration parameters for generating a CSR, including the subject name, extension, message digest
   * (MD) algorithm, and output format.
   *
   * > **NOTE**
   * >
   * > - **subject** is an object of the Name type defined by X509.
   * >
   * > - **mdName** specifies the message digest algorithm. Currently, SHA-1, SHA-256, SHA-384, and SHA-512 are
   * > supported.
   * >
   * > - **attributes** is optional. You can specify the extension types and values defined in OpenSSL to generate a
   * > CSR, for example, **challengePassword** and **keyUsage**.
   * >
   * > - **outFormat** specifies the format of the CSR generated. If it is not specified, the PEM format is used by
   * > default.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CsrGenerationConfig {
    /**
     * Subject name.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    subject: X500DistinguishedName;

    /**
     * MD algorithm name. Currently, SHA-1, SHA-256, SHA-384, and SHA-512 are supported.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    mdName: string;

    /**
     * Extension.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    attributes?: Array<CsrAttribute>;

    /**
     * Output type. The default value is **PEM**.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    outFormat?: EncodingBaseFormat;
  }

  /**
   * Generates a CSR using the specified private key by passing configuration parameters such as the subject, extension,
   * MD algorithm, and output format.
   *
   * @param { PrivateKeyInfo } keyInfo - Private key information.
   * @param { CsrGenerationConfig } config - Configuration for generating the CSR.
   * @returns { string | Uint8Array } CSR generated.
   * @throws { BusinessError } 401 - [Sync] Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
   *     <br>1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system;
   *     <br>3. Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @throws { BusinessError } 19030008 - Maybe wrong password.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function generateCsr(keyInfo: PrivateKeyInfo, config: CsrGenerationConfig): string | Uint8Array;

  /**
   * Enumerates password-based encryption scheme (PBES) algorithms.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  enum PbesEncryptionAlgorithm {
    /**
     * AES-128-CBC.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    AES_128_CBC = 0,

    /**
     * AES-192-CBC.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    AES_192_CBC = 1,

    /**
     * AES-256-CBC.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    AES_256_CBC = 2
  }

  /**
   * Enumerates PBES algorithm parameters. Currently, only PBES2 is supported.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  interface PbesParams {
    /**
     * Salt length. The default value is **16**, and the minimum value is **8**.
     *
     * @default 16
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    saltLen?: int;

    /**
     * Number of iterations. The default value is **2048**.
     *
     * @default 2048
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    iterations?: int;

    /**
     * PBES algorithm type. The default value is **AES_256_CBC**.
     *
     * @default PbesEncryptionAlgorithm.AES_256_CBC
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    encryptionAlgorithm?: PbesEncryptionAlgorithm;
  }

  /**
   * Enumerates the PKCS #12 MAC digest algorithms.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  enum Pkcs12MacDigestAlgorithm {
    /**
     * SHA-256.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    SHA256 = 0,

    /**
     * SHA-384.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    SHA384 = 1,

    /**
     * SHA-512.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    SHA512 = 2
  }

  /**
   * Represents the configuration for creating a PKCS #12 file.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  interface Pkcs12CreationConfig {
    /**
     * Password of the PKCS #12 file. The minimum length is 4.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * Algorithm parameters for encrypting the private key.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    keyEncParams?: PbesParams;

    /**
     * Whether to encrypt the certificate. The default value is **true**. **true**: yes; **false**: no.
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    encryptCert?: boolean;

    /**
     * Algorithm parameters for encrypting the certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    certEncParams?: PbesParams;

    /**
     * Salt length of the PKCS #12 MAC algorithm. The minimum value is **8**, and the default value is **16**.
     *
     * @default 16
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    macSaltLen?: int;

    /**
     * Number of iterations for the PKCS #12 MAC algorithm. The default value is **2048**.
     *
     * @default 2048
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    macIterations?: int;

    /**
     * PKCS #12 MAC digest algorithm. The default value is **SHA256**.
     *
     * @default Pkcs12MacDigestAlgorithm.SHA256
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    macDigestAlgorithm?: Pkcs12MacDigestAlgorithm;
  }

  /**
   * Creates P12. This API returns the result synchronously.
   *
   * @param { Pkcs12Data } data - P12 data object to be packed.
   * @param { Pkcs12CreationConfig } config - Configuration for creating the P12 file.
   * @returns { Uint8Array } P12 file created, in DER format.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
   *     <br>1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system;
   *     <br>3. Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
   *     <br>1. The password is too short or too long;
   *     <br>2. The private key does not match the certificate;
   *     <br>3. Invalid encryption algorithm parameters.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function createPkcs12Sync(data: Pkcs12Data, config: Pkcs12CreationConfig): Uint8Array;

  /**
   * Creates P12. This API uses a promise to return the result.
   *
   * @param { Pkcs12Data } data - P12 data object to be packed.
   * @param { Pkcs12CreationConfig } config - Configuration for creating the P12.
   * @returns { Promise<Uint8Array> } Promise used to return the P12 created, in DER format.
   * @throws { BusinessError } 19020001 - Memory malloc failed.
   * @throws { BusinessError } 19020002 - Runtime error. Possible causes:
   *     <br>1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system;
   *     <br>3. Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 19020003 - Parameter check failed. Possible causes:
   *     <br>1. The password is too short or too long;
   *     <br>2. The private key does not match the certificate;
   *     <br>3. Invalid encryption algorithm parameters.
   * @throws { BusinessError } 19030001 - Crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function createPkcs12(data: Pkcs12Data, config: Pkcs12CreationConfig): Promise<Uint8Array>;
}

export default cert;
