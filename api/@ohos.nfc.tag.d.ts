/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * @kit ConnectivityKit
 */

import type { NfcATag as _NfcATag, NfcBTag as _NfcBTag, NfcFTag as _NfcFTag, NfcVTag as _NfcVTag } from './tag/nfctech';
import {
  IsoDepTag as _IsoDepTag,
  NdefTag as _NdefTag,
  MifareClassicTag as _MifareClassicTag,
  MifareUltralightTag as _MifareUltralightTag,
  NdefFormatableTag as _NdefFormatableTag,
  BarcodeTag as _BarcodeTag
} from './tag/nfctech';
import { NdefMessage as _NdefMessage } from './tag/nfctech';
import { TagSession as _TagSession } from './tag/tagSession';
/*** if arkts dynamic */
import type { PacMap } from './ability/dataAbilityHelper';
/*** endif */
import type rpc from './@ohos.rpc';
import type { AsyncCallback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import type { ElementName } from './bundleManager/ElementName';

/**
 * Provides methods to operate or manage NFC tag.
 *
 * @namespace tag
 * @syscap SystemCapability.Communication.NFC.Tag
 * @since 7
 */
/**
 * Provides methods to operate or manage NFC tag.
 *
 * @namespace tag
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice
 * @since 12 dynamic
 * @since 20 static
 */
declare namespace tag {
  /**
   * Indicates an NFC-A tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7
   */
  /**
   * Indicates an NFC-A tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  const NFC_A = 1;

  /**
   * Indicates an NFC-B tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7
   */
  /**
   * Indicates an NFC-B tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  const NFC_B = 2;

  /**
   * Indicates an ISO_DEP tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7
   */
  /**
   * Indicates an ISO_DEP tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  const ISO_DEP = 3;

  /**
   * Indicates an NFC-F tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7
   */
  /**
   * Indicates an NFC-F tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  const NFC_F = 4;

  /**
   * Indicates an NFC-V tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7
   */
  /**
   * Indicates an NFC-V tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  const NFC_V = 5;

  /**
   * Indicates an NDEF tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7
   */
  /**
   * Indicates an NDEF tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  const NDEF = 6;

  /**
   * Indicates an NDEF Formatable tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * Indicates an NDEF Formatable tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  const NDEF_FORMATABLE = 7;

  /**
   * Indicates an MIFARE CLASSIC tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7
   */
  /**
   * Indicates an MIFARE CLASSIC tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  const MIFARE_CLASSIC = 8;

  /**
   * Indicates an MIFARE ULTRALIGHT tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7
   */
  /**
   * Indicates an MIFARE ULTRALIGHT tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  const MIFARE_ULTRALIGHT = 9;

  /**
   * Indicates an NfcBarcode tag.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 18 dynamic
   * @since 20 static
   */
  const NFC_BARCODE = 10;

  /**
   * TNF types definitions, see NFCForum-TS-NDEF_1.0.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * TNF types definitions, see NFCForum-TS-NDEF_1.0.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  enum TnfType {
    /**
     * Empty
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Empty
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TNF_EMPTY = 0x0,

    /**
     * NFC Forum well-known type [NFC RTD]
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * NFC Forum well-known type [NFC RTD]
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TNF_WELL_KNOWN = 0x1,

    /**
     * Media-type as defined in RFC 2046 [RFC 2046]
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Media-type as defined in RFC 2046 [RFC 2046]
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TNF_MEDIA = 0x2,

    /**
     * Absolute URI as defined in RFC 3986 [RFC 3986]
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Absolute URI as defined in RFC 3986 [RFC 3986]
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TNF_ABSOLUTE_URI = 0x3,

    /**
     * NFC Forum external type [NFC RTD]
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * NFC Forum external type [NFC RTD]
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TNF_EXT_APP = 0x4,

    /**
     * Unknown
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Unknown
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TNF_UNKNOWN = 0x5,

    /**
     *  Unchanged (see section 2.3.3)
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     *  Unchanged (see section 2.3.3)
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TNF_UNCHANGED = 0x6
  }

  /**
   * NfcForum Type definition. The NDEF tag may use one of them.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * NfcForum Type definition. The NDEF tag may use one of them.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  enum NfcForumType {
    /**
     * NFC FORUM TYPE 1
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * NFC FORUM TYPE 1
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    NFC_FORUM_TYPE_1 = 1,

    /**
     * NFC FORUM TYPE 2
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * NFC FORUM TYPE 2
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    NFC_FORUM_TYPE_2 = 2,

    /**
     * NFC FORUM TYPE 3
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * NFC FORUM TYPE 3
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    NFC_FORUM_TYPE_3 = 3,

    /**
     * NFC FORUM TYPE 4
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * NFC FORUM TYPE 4
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    NFC_FORUM_TYPE_4 = 4,

    /**
     * Mifare Classic
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Mifare Classic
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    MIFARE_CLASSIC = 101
  }

  /**
   * RTD type TEXT, see NFC Record Type Definition (RTD) Specification.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * RTD type TEXT, see NFC Record Type Definition (RTD) Specification.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  const RTD_TEXT: int[];

  /**
   * RTD type URI, see NFC Record Type Definition (RTD) Specification.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * RTD type URI, see NFC Record Type Definition (RTD) Specification.
   *
   * @constant
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  const RTD_URI: int[];

  /**
   * MifareClassic Type definition
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * MifareClassic Type definition
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  enum MifareClassicType {
    /**
     * Mifare Type unknown
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Mifare Type unknown
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TYPE_UNKNOWN = 0,

    /**
     * Mifare Classic
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Mifare Classic
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TYPE_CLASSIC = 1,

    /**
     * Mifare Plus
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Mifare Plus
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TYPE_PLUS = 2,

    /**
     * Mifare Pro
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Mifare Pro
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TYPE_PRO = 3
  }

  /**
   * MifareClassic Tag size.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * MifareClassic Tag size.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  enum MifareClassicSize {
    /**
     * 5 sectors per tag, 4 blocks per sector
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * 5 sectors per tag, 4 blocks per sector
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    MC_SIZE_MINI = 320,

    /**
     * 16 sectors per tag, 4 blocks per sector
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * 16 sectors per tag, 4 blocks per sector
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    MC_SIZE_1K = 1024,

    /**
     * 32 sectors per tag, 4 blocks per sector
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * 32 sectors per tag, 4 blocks per sector
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    MC_SIZE_2K = 2048,

    /**
     * 40 sectors per tag, 4 blocks per sector
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * 40 sectors per tag, 4 blocks per sector
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    MC_SIZE_4K = 4096
  }

  /**
   * MifareUltralight Type definition
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * MifareUltralight Type definition
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  enum MifareUltralightType {
    /**
     * Mifare Type unknown
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Mifare Type unknown
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TYPE_UNKNOWN = 0,

    /**
     * Mifare Ultralight
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Mifare Ultralight
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TYPE_ULTRALIGHT = 1,

    /**
     * Mifare UltralightC
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Mifare UltralightC
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    TYPE_ULTRALIGHT_C = 2
  }

  /**
   * Obtains an {@link NfcATag} object based on the tag information.
   * <p>During tag reading, if the tag supports the NFC-A technology, an {@link NfcATag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo Indicates the tag information.
   * @returns { NfcATag } The {@link NfcATag} object.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getNfcA
   */
  function getNfcATag(tagInfo: TagInfo): NfcATag;

  /**
   * Obtains an {@link NfcATag} object based on the tag information.
   * During tag reading, if the tag supports the NFC-A technology, an {@link NfcATag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NfcATag } {@link NfcATag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - Tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * Obtains an {@link NfcATag} object based on the tag information.
   * During tag reading, if the tag supports the NFC-A technology, an {@link NfcATag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NfcATag } {@link NfcATag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function getNfcA(tagInfo: TagInfo): NfcATag;

  /**
   * Obtains an {@link NfcBTag} object based on the tag information.
   * <p>During tag reading, if the tag supports the NFC-B technology, an {@link NfcBTag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo Indicates the tag information.
   * @returns { NfcBTag } The {@link NfcBTag} object.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getNfcB
   */
  function getNfcBTag(tagInfo: TagInfo): NfcBTag;

  /**
   * Obtains an {@link NfcBTag} object based on the tag information.
   * During tag reading, if the tag supports the NFC-B technology, an {@link NfcBTag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NfcBTag } The {@link NfcBTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - Tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * Obtains an {@link NfcBTag} object based on the tag information.
   * During tag reading, if the tag supports the NFC-B technology, an {@link NfcBTag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NfcBTag } The {@link NfcBTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function getNfcB(tagInfo: TagInfo): NfcBTag;

  /**
   * Obtains an {@link NfcFTag} object based on the tag information.
   * <p>During tag reading, if the tag supports the NFC-F technology, an {@link NfcFTag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo Indicates the tag information.
   * @returns { NfcFTag } The {@link NfcFTag} object.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getNfcF
   */
  function getNfcFTag(tagInfo: TagInfo): NfcFTag;

  /**
   * Obtains an {@link NfcFTag} object based on the tag information.
   * During tag reading, if the tag supports the NFC-F technology, an {@link NfcFTag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NfcFTag } The {@link NfcFTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - Tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * Obtains an {@link NfcFTag} object based on the tag information.
   * During tag reading, if the tag supports the NFC-F technology, an {@link NfcFTag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NfcFTag } The {@link NfcFTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function getNfcF(tagInfo: TagInfo): NfcFTag;

  /**
   * Obtains an {@link NfcVTag} object based on the tag information.
   * <p>During tag reading, if the tag supports the NFC-V technology, an {@link NfcVTag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo Indicates the tag information.
   * @returns { NfcVTag } The {@link NfcVTag} object.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getNfcV
   */
  function getNfcVTag(tagInfo: TagInfo): NfcVTag;

  /**
   * Obtains an {@link NfcVTag} object based on the tag information.
   * During tag reading, if the tag supports the NFC-V technology, an {@link NfcVTag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NfcVTag } The {@link NfcVTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - Tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * Obtains an {@link NfcVTag} object based on the tag information.
   * During tag reading, if the tag supports the NFC-V technology, an {@link NfcVTag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NfcVTag } The {@link NfcVTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function getNfcV(tagInfo: TagInfo): NfcVTag;

  /**
   * Obtains an {@link IsoDepTag} object based on the tag information.
   * During tag reading, if the tag supports the IsoDep technology, an {@link IsoDepTag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { IsoDepTag } The {@link IsoDepTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - Tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * Obtains an {@link IsoDepTag} object based on the tag information.
   * During tag reading, if the tag supports the IsoDep technology, an {@link IsoDepTag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { IsoDepTag } The {@link IsoDepTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function getIsoDep(tagInfo: TagInfo): IsoDepTag;

  /**
   * Obtains an {@link NdefTag} object based on the tag information.
   * During tag reading, if the tag supports the NDEF technology, an {@link NdefTag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NdefTag } The {@link NdefTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - Tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * Obtains an {@link NdefTag} object based on the tag information.
   * During tag reading, if the tag supports the NDEF technology, an {@link NdefTag} object
   * will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NdefTag } The {@link NdefTag} object.
   * @throws { BusinessError } 401 - The parameter check failed.  Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function getNdef(tagInfo: TagInfo): NdefTag;

  /**
   * Obtains an {@link MifareClassicTag} object based on the tag information.
   * During tag reading, if the tag supports the MIFARE Classic technology,
   * an {@link MifareClassicTag} object will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { MifareClassicTag } The {@link MifareClassicTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - Tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * Obtains an {@link MifareClassicTag} object based on the tag information.
   * During tag reading, if the tag supports the MIFARE Classic technology,
   * an {@link MifareClassicTag} object will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { MifareClassicTag } The {@link MifareClassicTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function getMifareClassic(tagInfo: TagInfo): MifareClassicTag;

  /**
   * Obtains an {@link MifareUltralightTag} object based on the tag information.
   * During tag reading, if the tag supports the MIFARE Ultralight technology,
   * an {@link MifareUltralightTag} object will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { MifareUltralightTag } The {@link MifareUltralightTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - Tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * Obtains an {@link MifareUltralightTag} object based on the tag information.
   * During tag reading, if the tag supports the MIFARE Ultralight technology,
   * an {@link MifareUltralightTag} object will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { MifareUltralightTag } The {@link MifareUltralightTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function getMifareUltralight(tagInfo: TagInfo): MifareUltralightTag;

  /**
   * Obtains an {@link NdefFormatableTag} object based on the tag information.
   * During tag reading, if the tag supports the NDEF Formatable technology,
   * an {@link NdefFormatableTag} object will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NdefFormatableTag } The {@link NdefFormatableTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - Tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * Obtains an {@link NdefFormatableTag} object based on the tag information.
   * During tag reading, if the tag supports the NDEF Formatable technology,
   * an {@link NdefFormatableTag} object will be created based on the tag information.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NdefFormatableTag } The {@link NdefFormatableTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function getNdefFormatable(tagInfo: TagInfo): NdefFormatableTag;

  /**
   * Obtains an {@link BarcodeTag} object based on the tag information.
   * During tag reading, if the tag supports the NfcBarcode technology,
   * an {@link BarcodeTag} object will be created.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { BarcodeTag } The {@link BarcodeTag} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 18 dynamic
   * @since 20 static
   */
  function getBarcodeTag(tagInfo: TagInfo): BarcodeTag;

  /**
   * Parse a {@link TagInfo} object from Want.
   *
   * @param { Want } want - The want object that contains the values of TagInfo.
   * @returns { TagInfo } The {@link TagInfo} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * Parse a {@link TagInfo} object from Want.
   *
   * @param { Want } want - The want object that contains the values of TagInfo.
   * @returns { TagInfo } The {@link TagInfo} object.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function getTagInfo(want: Want): TagInfo;

  /**
   * Register tag foreground dispatch. Dispatches to this application only if a tag discovered.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { ElementName } elementName - The element name of application, must include the bundleName and abilityName.
   * @param { number[] } discTech - The technologies list to set for discovering. From {@link NFC_A} to {@link MIFARE_ULTRALIGHT}.
   * @param { AsyncCallback<TagInfo> } callback - The callback to dispatched the TagInfo object for application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 10
   */
  /**
   * Register tag foreground dispatch. Dispatches to this application only if a tag discovered.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { ElementName } elementName - The element name of application, must include the bundleName and abilityName.
   * @param { int[] } discTech - The technologies list to set for discovering. From {@link NFC_A} to {@link MIFARE_ULTRALIGHT}.
   * @param { AsyncCallback<TagInfo> } callback - The callback to dispatched the TagInfo object for application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100202 - The element state is invalid.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function registerForegroundDispatch(
    elementName: ElementName,
    discTech: int[],
    callback: AsyncCallback<TagInfo>
  ): void;

  /**
   * Unregister tag foreground dispatch.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { ElementName } elementName - The element name of application, must include the bundleName and abilityName.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 10
   */
  /**
   * Unregister tag foreground dispatch.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { ElementName } elementName - The element name of application, must include the bundleName and abilityName.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function unregisterForegroundDispatch(elementName: ElementName): void;

  /**
   * Set reader mode enabled when the specific application is foreground. Dispatches to this application only if a tag discovered.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'readerMode' } type - The callback type to be registered.
   * @param { ElementName } elementName - The element name of application, must include the bundleName and abilityName.
   * @param { number[] } discTech - The technologies list to set for discovering. From {@link NFC_A} to {@link MIFARE_ULTRALIGHT}.
   * @param { AsyncCallback<TagInfo> } callback - The callback to dispatched the TagInfo object for application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100202 - The element state is invalid.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 11
   */
  /**
   * Set reader mode enabled when the specific application is foreground. Dispatches to this application only if a tag discovered.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'readerMode' } type - The callback type to be registered.
   * @param { ElementName } elementName - The element name of application, must include the bundleName and abilityName.
   * @param { int[] } discTech - The technologies list to set for discovering. From {@link NFC_A} to {@link MIFARE_ULTRALIGHT}.
   * @param { AsyncCallback<TagInfo> } callback - The callback to dispatched the TagInfo object for application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100202 - The element state is invalid.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function on(type: 'readerMode', elementName: ElementName, discTech: int[], callback: AsyncCallback<TagInfo>): void;

  /**
   * Disable foreground reader mode settings explicitly.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'readerMode' } type - The callback type to be unregistered.
   * @param { ElementName } elementName - The element name of application, must include the bundleName and abilityName.
   * @param { AsyncCallback<TagInfo> } [callback] - The callback to dispatched the TagInfo object for application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100203 - The off() can be called only when the on() has been called.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 11
   */
  /**
   * Disable foreground reader mode settings explicitly.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'readerMode' } type - The callback type to be unregistered.
   * @param { ElementName } elementName - The element name of application, must include the bundleName and abilityName.
   * @param { AsyncCallback<TagInfo> } [callback] - The callback to dispatched the TagInfo object for application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100203 - The off() API can be called only when the on() has been called.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  function off(type: 'readerMode', elementName: ElementName, callback?: AsyncCallback<TagInfo>): void;

  /**
   * Provides tag information.
   * <p>This class provides the technology a tag supports, for example, NFC-A. Applications can create
   * different tags based on the supported technology.
   *
   * @typedef TagInfo
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7
   */
    /**
   * Provides tag information.
   * <p>This class provides the technology a tag supports, for example, NFC-A. Applications can create
   * different tags based on the supported technology.
   *
   * @typedef TagInfo
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  export interface TagInfo {
    /**
     * The uid of this tag, it.
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * The uid of this tag, it.
     *
     * @permission ohos.permission.NFC_TAG
     * @type { int[] }
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    uid: int[];

    /**
     * The supported technology list of this tag.
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * The supported technology list of this tag.
     *
     * @permission ohos.permission.NFC_TAG
     * @type { int[] }
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    technology: int[];

    /**
     * The extra data for each technology of this tag.
     *
     * @permission ohos.permission.NFC_TAG
     * @type { PacMap[] }
     * @syscap SystemCapability.Communication.NFC.Tag
     * @systemapi hide for inner use.
     * @since 9 dynamic
     */
    extrasData: PacMap[];

    /**
     * The the RF discovery id of this tag.
     *
     * @permission ohos.permission.NFC_TAG
     * @type { int }
     * @syscap SystemCapability.Communication.NFC.Tag
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 20 static
     */
    tagRfDiscId: int;

    /**
     * The extra data for the technology of this tag.
     *
     * @permission ohos.permission.NFC_TAG
     * @type { rpc.RemoteObject }
     * @syscap SystemCapability.Communication.NFC.Tag
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 20 static
     */
    remoteTagService: rpc.RemoteObject;

    /**
     * The supported technology list of this tag.
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.nfc.tag/tag.TagInfo#technology
     */
    supportedProfiles: number[];
  }

  /**
   * NDEF records definition, see NFCForum-TS-NDEF_1.0.
   *
   * @typedef NdefRecord
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * NDEF records definition, see NFCForum-TS-NDEF_1.0.
   *
   * @typedef NdefRecord
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  export interface NdefRecord {
    /**
     * tnf of NdefRecord
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * tnf of NdefRecord
     *
     * @type { int }
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    tnf: int;

    /**
     * RTD type of NdefRecord
     *
     * @type { number[] }
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * RTD type of NdefRecord
     *
     * @type { int[] }
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    rtdType: int[];

    /**
     * id of NdefRecord
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * id of NdefRecord
     *
     * @type { int[] }
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    id: int[];

    /**
     * payload of NdefRecord
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * payload of NdefRecord
     *
     * @type { int[] }
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    payload: int[];
  }

  /**
   * Provides methods for accessing NDEF tag.
   *
   * @namespace ndef
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 9
   */
  /**
   * Provides methods for accessing NDEF tag.
   *
   * @namespace ndef
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  namespace ndef {
    /**
     * Creates an NDEF record with uri data.
     *
     * @param { string } uri - Uri data for new NDEF record.
     * @returns { NdefRecord } The instance of NdefRecord.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Creates an NDEF record with uri data.
     *
     * @param { string } uri - Uri data for new NDEF record.
     * @returns { NdefRecord } The instance of NdefRecord.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    function makeUriRecord(uri: string): NdefRecord;

    /**
     * Creates an NDEF record with text data.
     *
     * @param { string } text - Text data for new an NDEF record.
     * @param { string } locale - Language code for the NDEF record. if locale is null, use default locale.
     * @returns { NdefRecord } The instance of NdefRecord.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Creates an NDEF record with text data.
     *
     * @param { string } text - Text data for new an NDEF record.
     * @param { string } locale - Language code for the NDEF record. if locale is null, use default locale.
     * @returns { NdefRecord } The instance of NdefRecord.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    function makeTextRecord(text: string, locale: string): NdefRecord;

    /**
     * Creates an NDEF Record with OpenHarmony application bundle name.
     *
     * @param { string } bundleName - The bundle name of application to make.
     * @returns { NdefRecord } The instance of NdefRecord.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 18 dynamic
     * @since 20 static
     */
    function makeApplicationRecord(bundleName: string): NdefRecord;

    /**
     * Creates an NDEF record with mime data.
     *
     * @param { string } mimeType type of mime data for new an NDEF record.
     * @param { number[] } mimeData mime data for new an NDEF record.
     * @returns { NdefRecord } The instance of NdefRecord.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Creates an NDEF record with mime data.
     *
     * @param { string } mimeType type of mime data for new an NDEF record.
     * @param { int[] } mimeData mime data for new an NDEF record.
     * @returns { NdefRecord } The instance of NdefRecord.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    function makeMimeRecord(mimeType: string, mimeData: int[]): NdefRecord;

    /**
     * Creates an NDEF record with external data.
     *
     * @param { string } domainName - Domain name of issuing organization for the external data.
     * @param { string } type - Domain specific type of data for the external data.
     * @param { number[] } externalData - Data payload of an NDEF record.
     * @returns { NdefRecord } The instance of NdefRecord.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Creates an NDEF record with external data.
     *
     * @param { string } domainName - Domain name of issuing organization for the external data.
     * @param { string } type - Domain specific type of data for the external data.
     * @param { int[] } externalData - Data payload of an NDEF record.
     * @returns { NdefRecord } The instance of NdefRecord.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    function makeExternalRecord(domainName: string, type: string, externalData: int[]): NdefRecord;
    /**
     * Creates an NDEF message with raw bytes.
     *
     * @param { number[] } data - The raw bytes to parse NDEF message.
     * @returns { NdefMessage } The instance of NdefMessage.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Creates an NDEF message with raw bytes.
     *
     * @param { int[] } data - The raw bytes to parse NDEF message.
     * @returns { NdefMessage } The instance of NdefMessage.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    function createNdefMessage(data: int[]): NdefMessage;

    /**
     * Creates an NDEF message with record list.
     *
     * @param { NdefRecord[] } ndefRecords - The NDEF records to parse NDEF message.
     * @returns { NdefMessage } The instance of NdefMessage.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Creates an NDEF message with record list.
     *
     * @param { NdefRecord[] } ndefRecords - The NDEF records to parse NDEF message.
     * @returns { NdefMessage } The instance of NdefMessage.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    function createNdefMessage(ndefRecords: NdefRecord[]): NdefMessage;

    /**
     * Parses an NDEF message into raw bytes.
     *
     * @param { NdefMessage } ndefMessage - An NDEF message to parse.
     * @returns { number[] } Returns the raw bytes of an NDEF message.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 9
     */
    /**
     * Parses an NDEF message into raw bytes.
     *
     * @param { NdefMessage } ndefMessage - An NDEF message to parse.
     * @returns { int[] } Returns the raw bytes of an NDEF message.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    function messageToBytes(ndefMessage: NdefMessage): int[];
  }

 /**
  * Exports type NfcATag.
  *
  * @syscap SystemCapability.Communication.NFC.Tag
  * @since 7
  */
 /**
  * Exports type NfcATag.
  *
  * @typedef { _NfcATag }
  * @syscap SystemCapability.Communication.NFC.Tag
  * @atomicservice
  * @since 12 dynamic
  * @since 20 static
  */
  export type NfcATag = _NfcATag;

 /**
  * Exports type NfcBTag.
  *
  * @syscap SystemCapability.Communication.NFC.Tag
  * @since 7
  */
 /**
  * Exports type NfcBTag.
  *
  * @typedef { _NfcBTag }
  * @syscap SystemCapability.Communication.NFC.Tag
  * @atomicservice
  * @since 12 dynamic
  * @since 20 static
  */
  export type NfcBTag = _NfcBTag;

 /**
  * Exports type NfcFTag.
  *
  * @syscap SystemCapability.Communication.NFC.Tag
  * @since 7
  */
 /**
  * Exports type NfcFTag.
  *
  * @typedef { _NfcFTag }
  * @syscap SystemCapability.Communication.NFC.Tag
  * @atomicservice
  * @since 12 dynamic
  * @since 20 static
  */
  export type NfcFTag = _NfcFTag;

 /**
  * Exports type NfcVTag.
  *
  * @syscap SystemCapability.Communication.NFC.Tag
  * @since 7
  */
 /**
  * Exports type NfcVTag.
  *
  * @typedef { _NfcVTag }
  * @syscap SystemCapability.Communication.NFC.Tag
  * @atomicservice
  * @since 12 dynamic
  * @since 20 static
  */
  export type NfcVTag = _NfcVTag;

 /**
  * Exports type IsoDepTag.
  *
  * @syscap SystemCapability.Communication.NFC.Tag
  * @since 9
  */
 /**
  * Exports type IsoDepTag.
  *
  * @typedef { _IsoDepTag }
  * @syscap SystemCapability.Communication.NFC.Tag
  * @atomicservice
  * @since 12 dynamic
  * @since 20 static
  */
  export type IsoDepTag = _IsoDepTag;

 /**
  * Exports type NdefTag.
  *
  * @syscap SystemCapability.Communication.NFC.Tag
  * @since 9
  */
 /**
  * Exports type NdefTag.
  *
  * @typedef { _NdefTag }
  * @syscap SystemCapability.Communication.NFC.Tag
  * @atomicservice
  * @since 12 dynamic
  * @since 20 static
  */
  export type NdefTag = _NdefTag;

 /**
  * Exports type MifareClassicTag.
  *
  * @syscap SystemCapability.Communication.NFC.Tag
  * @since 9
  */
 /**
  * Exports type MifareClassicTag.
  *
  * @typedef { _MifareClassicTag }
  * @syscap SystemCapability.Communication.NFC.Tag
  * @atomicservice
  * @since 12 dynamic
  * @since 20 static
  */
  export type MifareClassicTag = _MifareClassicTag;

 /**
  * Exports type MifareUltralightTag.
  *
  * @syscap SystemCapability.Communication.NFC.Tag
  * @since 9
  */
 /**
  * Exports type MifareUltralightTag.
  *
  * @typedef { _MifareUltralightTag }
  * @syscap SystemCapability.Communication.NFC.Tag
  * @atomicservice
  * @since 12 dynamic
  * @since 20 static
  */
  export type MifareUltralightTag = _MifareUltralightTag;

 /**
  * Exports type NdefFormatableTag.
  *
  * @syscap SystemCapability.Communication.NFC.Tag
  * @since 9
  */
 /**
  * Exports type NdefFormatableTag.
  *
  * @typedef { _NdefFormatableTag }
  * @syscap SystemCapability.Communication.NFC.Tag
  * @atomicservice
  * @since 12 dynamic
  * @since 20 static
  */
  export type NdefFormatableTag = _NdefFormatableTag;

 /**
  * Exports type BarcodeTag.
  *
  * @typedef { _BarcodeTag }
  * @syscap SystemCapability.Communication.NFC.Tag
  * @atomicservice
  * @since 18 dynamic
  * @since 20 static
  */
  export type BarcodeTag = _BarcodeTag;

 /**
  * Exports type NdefMessage.
  *
  * @syscap SystemCapability.Communication.NFC.Tag
  * @since 9
  */
 /**
  * Exports type NdefMessage.
  *
  * @typedef { _NdefMessage }
  * @syscap SystemCapability.Communication.NFC.Tag
  * @atomicservice
  * @since 12 dynamic
  * @since 20 static
  */
  export type NdefMessage = _NdefMessage;

 /**
  * Exports type TagSession.
  *
  * @syscap SystemCapability.Communication.NFC.Tag
  * @since 7
  */
 /**
  * Exports type TagSession.
  *
  * @typedef { _TagSession }
  * @syscap SystemCapability.Communication.NFC.Tag
  * @atomicservice
  * @since 12 dynamic
  * @since 20 static
  */
  export type TagSession = _TagSession;
}
export default tag;