/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @file Helper functions to access image and video assets
 * @kit MediaLibraryKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';
import type image from './@ohos.multimedia.image';
import type dataSharePredicates from './@ohos.data.dataSharePredicates';
import type { CustomColors } from './@ohos.arkui.theme';

/**
 * Helper functions to access image and video assets
 *
 * @namespace photoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @since 10
 */
/**
 * Helper functions to access image and video assets
 *
 * @namespace photoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 11
 */
/**
 * Helper functions to access image and video assets
 *
 * @namespace photoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace photoAccessHelper {
  /**
   * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
   *
   * @param { Context } context - Context of the ability instance.
   * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @StageModelOnly
   * @since 10
   */
  /**
   * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
   *
   * @param { Context } context - Context of the ability instance.
   * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @StageModelOnly
   * @atomicservice
   * @since 11
   */
  /**
   * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
   *
   * @param { Context } context - Context of the ability instance.
   * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getPhotoAccessHelper(context: Context): PhotoAccessHelper;

  /**
   * Returns an instance of PhotoAccessHelper
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Context } context - Hap context information
   * @param { number } userId - Target userId
   * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Called by non-system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @StageModelOnly
   * @since 19
   */
  function getPhotoAccessHelper(context: Context, userId: number): PhotoAccessHelper;

  /**
   * Enumerates the types of av file format.
   * 
   * @enum { string } SupportedImageFormat
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  enum SupportedImageFormat {
    /**
     * jpg format
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    AVFILE_FORMAT_JPG = 'jpg',
  }

  /**
   * Enumerates media file types.
   *
   * @enum { number } PhotoType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Enumerates media file types.
   *
   * @enum { number } PhotoType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Enumerates media file types.
   *
   * @enum { number } PhotoType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum PhotoType {
    /**
     * Image asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Image asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Image asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    IMAGE = 1,
    /**
     * Video asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Video asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Video asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    VIDEO = 2
  }

  /**
   * Enumerates the PhotoAsset types.
   *
   * @enum { number } PhotoSubtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 10
   */
  /**
   * Enumerates the PhotoAsset types.
   *
   * @enum { number } PhotoSubtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum PhotoSubtype {
    /**
     * Default Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    /**
     * Default Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DEFAULT = 0,
    /**
     * Screenshot Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SCREENSHOT = 1,
    /**
     * Moving Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    MOVING_PHOTO = 3,
    /**
     * Burst Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    BURST = 4,
  }

  /**
   * Enumerates the formats for displaying media assets.
   *
   * @enum { number } DynamicRangeType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum DynamicRangeType {
    /**
     * Standard dynamic range (SDR).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SDR = 0,
    /**
     * High dynamic range (HDR).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    HDR = 1
  }

  /**
   * Ability to access thumbnail
   * 
   * @enum { number } ThumbnailVisibility
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14
   */
  enum ThumbnailVisibility {
    /**
     * Unable to access thumbnail
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    INVISIBLE = 0,
    /**
     * able to access thumbnail
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    VISIBLE = 1
  }

  /**
   * Enumerates the file locations.
   *
   * @enum { number } Photo asset position, such as local device or cloud
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 10
   */
  /**
   * Enumerates the file locations.
   *
   * @enum { number } Photo asset position, such as local device or cloud
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since arkts {'1.1':'16','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum PositionType {
    /**
     * Asset exists only in local device
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    /**
     * Asset exists only in local device
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'16','1.2':'20'}
     * @arkts 1.1&1.2
     */
    LOCAL = 1,
    /**
     * Stored only on a local device.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    /**
     * Stored only on the cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'16','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CLOUD = 2,
    /**
     * Stored both on a local device and cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 16
     */
    LOCAL_AND_CLOUD = 3
  }

  /**
   * Analysis type
   *
   * @enum { number } AnalysisType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum AnalysisType {
    /**
     * Analysis of aesthetics score
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_AESTHETICS_SCORE = 0,
    /**
     * Analysis of label
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_LABEL,
    /**
     * Analysis of ocr
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_OCR,
    /**
     * Analysis of face
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_FACE,
    /**
     * Analysis of object
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_OBJECT,
    /**
     * Analysis of recommendation
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_RECOMMENDATION,
    /**
     * Analysis of segmentation
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_SEGMENTATION,
    /**
     * Analysis of composition
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_COMPOSITION,
    /**
     * Analysis of saliency
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_SALIENCY,
    /**
     * Analysis of photo detail address info
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_DETAIL_ADDRESS,
    /**
     * Analysis of human face tag
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_HUMAN_FACE_TAG,
    /**
     * Analysis of head position
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_HEAD_POSITION,
    /**
     * Analysis of bone pose
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_BONE_POSE,
    /**
     * Analysis of video label
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_VIDEO_LABEL,
    /**
     * Analysis of highlight
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_HIGHLIGHT,
    /**
     * Analysis of multi crop
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANALYSIS_MULTI_CROP,
    /**
     * Analysis of search index
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    ANALYSIS_SEARCH_INDEX = 16
  }

  /**
   * Enumerates the types of recommended images.
   *
   * @enum { number } RecommendationType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum RecommendationType {
    /**
     * QR_OR_BAR_CODE indicates that QR code or barcode photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    QR_OR_BAR_CODE = 1,

    /**
     * QR_CODE indicates that QR code photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    QR_CODE = 2,

    /**
     * BAR_CODE indicates that barcode photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    BAR_CODE = 3,

    /**
     * ID_CARD indicates that QR code or barcode photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ID_CARD = 4,

    /**
     * PROFILE_PICTURE indicates that profile picture photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PROFILE_PICTURE = 5,

    /**
     * PASSPORT indicates that passport photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PASSPORT = 6,

    /**
     * BANK_CARD indicates that bank card photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    BANK_CARD = 7,

    /**
     * DRIVER_LICENSE indicates that driver license photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DRIVER_LICENSE = 8,

    /**
     * DRIVING_LICENSE indicates that driving license photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DRIVING_LICENSE = 9,

    /**
     * FEATURED_SINGLE_PORTRAIT indicates that featured single portrait photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    FEATURED_SINGLE_PORTRAIT = 10,

    /**
     * COLOR_STYLE_PHOTO indicates that color style photo can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    COLOR_STYLE_PHOTO = 12
  }

  /**
   * Enumerates the asset delivery modes.
   *
   * @enum { number } DeliveryMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum DeliveryMode {
    /**
     * Fast mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    FAST_MODE = 0,

    /**
     * High-quality mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    HIGH_QUALITY_MODE = 1,

    /**
     * Balance mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    BALANCE_MODE = 2
  }

  /**
   * Enumerates the video transcoding mode.
   *
   * @enum { number } CompatibleMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum CompatibleMode {
    /**
     * Maintains the original video format.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ORIGINAL_FORMAT_MODE = 0,

    /**
     * Converts the HDR content to SDR format.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMPATIBLE_FORMAT_MODE = 1
  }

  /**
   * Data handler used to notify the progress of required media asset data
   *
   * @interface MediaAssetProgressHandler
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface MediaAssetProgressHandler {
    /**
     * Indicates the progress of required media asset data
     *
     * @param { number } progress - Progress in percentage. Value range: 0 to 100
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    onProgress(progress: number): void;
  }

  /**
   * Enumerates the types of the file to read.
   *
   * @enum { number } SourceMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum SourceMode {
    /**
     * Original file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ORIGINAL_MODE = 0,

    /**
     * Edited file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    EDITED_MODE = 1
  }

  /**
   * Enumeration type of permissions for accessing asset uri.
   *
   * @enum { number } PhotoPermissionType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum PhotoPermissionType {
    /**
     * Temporary read permission.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TEMPORARY_READ_IMAGEVIDEO = 0,

    /**
     * Persistent read permission.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PERSISTENT_READ_IMAGEVIDEO = 1
  }

  /**
   * Enumerates the types of media resource information to be hidden from an application.
   *
   * @enum { number } HideSensitiveType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum HideSensitiveType {
    /**
     * Geographical location and shooting parameters.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    HIDE_LOCATION_AND_SHOOTING_PARAM = 0,

    /**
     * Geographical location information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    HIDE_LOCATION_ONLY = 1,

    /**
     * Shooting parameters.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    HIDE_SHOOTING_PARAM_ONLY = 2,

    /**
     * Do not hide any information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NO_HIDE_SENSITIVE_TYPE = 3
  }

  /**
   * Enumerates the authorization modes.
   *
   * @enum { number } AuthorizationMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum AuthorizationMode {
    /**
     * Temporary authorization.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SHORT_TIME_AUTHORIZATION = 0
  }

  /**
   * Enumerates the watermark editable flags.
   *
   * @enum { number } WatermarkType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum WatermarkType {
    /**
     * Watermarks are not editable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DEFAULT = 0,

    /**
     * Brand and common watermarks are editable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    BRAND_COMMON = 1,

    /**
     * Common watermarks are editable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMMON = 2,

    /**
     * Brand watermarks are editable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    BRAND = 3,
  }

  /**
   * Enum: complete button text
   *
   * @enum { number } CompleteButtonText
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum CompleteButtonText {
    /**
     * Complete button text: done
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TEXT_DONE = 0,
    /**
     * Complete button text: send
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TEXT_SEND = 1,

    /**
     * Complete button text: add
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TEXT_ADD = 2,
  }

  /**
   * Options to request media asset
   *
   * @interface RequestOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface RequestOptions {
    /**
     * Indicates the delivery mode
     *
     * @type { DeliveryMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    deliveryMode: DeliveryMode;

    /**
     * Indicates the source mode
     *
     * @type { ?SourceMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    sourceMode?: SourceMode;

    /**
     * Indicates the compatible mode
     *
     * @type { ?CompatibleMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    compatibleMode?: CompatibleMode;

    /**
     * data handler used to notify the progress of required media asset data
     *
     * @type { ?MediaAssetProgressHandler }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    mediaAssetProgressHandler?: MediaAssetProgressHandler;
  }

  /**
   * Media asset handler, which can be used to customize the media asset processing logic in onDataPrepared.
   *
   * @interface MediaAssetDataHandler
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface MediaAssetDataHandler<T> {
    /**
     * Indicates required media asset data is prepared
     *
     * @param { T } data - the returned data of media asset
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Indicates required media asset data is prepared
     *
     * @param { T } data - the returned data of media asset
     * @param { Map<string, string> } [map] - additional information for the data
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    onDataPrepared(data: T, map?: Map<string, string>): void;
  }

  /**
   * Data handler when quick request image is finished
   *
   * @typedef QuickImageDataHandler
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface QuickImageDataHandler<T> {
    /**
     * Indicates required media asset data quickly is prepared
     *
     * @param { T } data - the returned data of picture
     * @param { image.ImageSource } imageSource - the returned data of imageSource
     * @param { Map<string, string> } map - additional information for the data
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    onDataPrepared(data: T, imageSource: image.ImageSource, map: Map<string, string>): void;
  }

  /**
   * Photo proxy object, which is used by the camera application to write image data.
   *
   * @interface PhotoProxy
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface PhotoProxy {}

  /**
   * A media asset manager class, used for manipulating the read and write operations of media assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11
   */
  /**
   * A media asset manager class, used for manipulating the read and write operations of media assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14
   */
  class MediaAssetManager {
    /**
     * Request image
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { MediaAssetDataHandler<image.ImageSource> } dataHandler - Media asset handler, which invokes a callback to return the image when the requested image is ready.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    static requestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<image.ImageSource>
    ): Promise<string>;

    /**
     * Requests an image quickly.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { QuickImageDataHandler<image.Picture> } dataHandler - Media asset handler, which invokes a callback to return the image when the requested image is ready.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13
     */
    static quickRequestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: QuickImageDataHandler<image.Picture>
    ): Promise<string>;

    /**
     * Requests image data.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { MediaAssetDataHandler<ArrayBuffer> } dataHandler - Media asset handler, which invokes a callback to return the image when the requested image is ready.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    static requestImageData(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<ArrayBuffer>
    ): Promise<string>;

    /**
     * Requests a moving photo object, which can be used to request the asset data of the moving photo.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { MediaAssetDataHandler<MovingPhoto> } dataHandler - Media asset handler, which invokes a callback to return the image when the requested image is ready.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Requests a moving photo object, which can be used to request the asset data of the moving photo.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { MediaAssetDataHandler<MovingPhoto> } dataHandler - Media asset handler, which invokes a callback to return the image when the requested image is ready.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 18
     */
    static requestMovingPhoto(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<MovingPhoto>
    ): Promise<string>;

    /**
     * Cancels a request for the asset, the callback of which has not been triggered yet.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { string } requestId - ID of the request to cancel. It is a valid request ID returned by requestImage.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    static cancelRequest(context: Context, requestId: string): Promise<void>;

    /**
     * Request video file
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the video asset.
     * @param { string } fileUri - the destination file uri to save the video data
     * @param { MediaAssetDataHandler<boolean> } dataHandler - Media asset handler. When the requested video is written to the specified directory, a callback is triggered.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Request video file
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the video asset.
     * @param { string } fileUri - the destination file uri to save the video data
     * @param { MediaAssetDataHandler<boolean> } dataHandler - Media asset handler. When the requested video is written to the specified directory, a callback is triggered.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15
     */
    static requestVideoFile(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      fileUri: string,
      dataHandler: MediaAssetDataHandler<boolean>
    ): Promise<string>;

    /**
     * Load moving photo
     *
     * @param { Context } context - AbilityContext or UIExtensionContext instance.
     * @param { string } imageFileUri - image file uri of the moving photo to be loaded
     * @param { string } videoFileUri - video file uri of the moving photo to be loaded
     * @returns { Promise<MovingPhoto> } Returns moving photo
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Load moving photo
     *
     * @param { Context } context - AbilityContext or UIExtensionContext instance.
     * @param { string } imageFileUri - image file uri of the moving photo to be loaded
     * @param { string } videoFileUri - video file uri of the moving photo to be loaded
     * @returns { Promise<MovingPhoto> } Returns moving photo
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14
     */
    static loadMovingPhoto(
      context: Context,
      imageFileUri: string,
      videoFileUri: string
    ): Promise<MovingPhoto>;
  }

  /**
   * Indicates the type of photo asset member.
   *
   * @typedef { number | string | boolean } MemberType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Indicates the type of photo asset member.
   *
   * @typedef { number | string | boolean } MemberType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type MemberType = number | string | boolean;
  
  /**
   * Indicates the type of a batch photo asset member.
   *
   * @typedef { Record<string, MemberType>[] } PhotoAssetParams
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 21
   * @arkts 1.1&1.2
   */
  type PhotoAssetParams = Record<string, MemberType>[];

  /**
   * Provides APIs for encapsulating file asset attributes.
   *
   * @interface PhotoAsset
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Provides APIs for encapsulating file asset attributes.
   *
   * @interface PhotoAsset
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Provides APIs for encapsulating file asset attributes.
   *
   * @interface PhotoAsset
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface PhotoAsset {
    /**
     * uri of the asset.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * uri of the asset.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly uri: string;
    /**
     * Photo type, image or video
     *
     * @type { PhotoType }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Photo type, image or video
     *
     * @type { PhotoType }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Photo type, image or video
     *
     * @type { PhotoType }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly photoType: PhotoType;
    /**
     * Display name (with a file name extension) of the asset.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Display name (with a file name extension) of the asset.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Display name (with a file name extension) of the asset.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly displayName: string;
    /**
     * Obtains a PhotoAsset member parameter.
     *
     * @param { string } member - Photo asset member. for example : get(PhotoKeys.SIZE)
     * @returns { MemberType } Returns the value of the specified photo asset member
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains a PhotoAsset member parameter.
     *
     * @param { string } member - Photo asset member. for example : get(PhotoKeys.SIZE)
     * @returns { MemberType } Returns the value of the specified photo asset member
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains a PhotoAsset member parameter.
     *
     * @param { string } member - Photo asset member. for example : get(PhotoKeys.SIZE)
     * @returns { MemberType } Returns the value of the specified photo asset member
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    get(member: string): MemberType;
    /**
     * Sets a PhotoAsset member parameter.
     *
     * @param { string } member - Photo asset member
     * @param { string } value - The new value of the member.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     * @example : set(PhotoKeys.TITLE, "newTitle"), call commitModify after set
     */
    set(member: string, value: string): void;
    /**
     * Commits the modification on the file metadata to the database. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Commits the modification on the file metadata to the database. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Commits the modification on the file metadata to the database. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Commits the modification on the file metadata to the database. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    commitModify(): Promise<void>;
    /**
     * Open the asset
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } mode - Mode for open, for example: rw, r, w.
     * @param { AsyncCallback<number> } callback - Callback return the fd of the asset.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead ohos.file.fs/fileIo#open
     */
    open(mode: string, callback: AsyncCallback<number>): void;
    /**
     * Open the asset
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } mode - Mode for open, for example: rw, r, w.
     * @returns { Promise<number> } Returns the fd
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead ohos.file.fs/fileIo#open
     */
    open(mode: string): Promise<number>;
    /**
     * Opens this file in read-only mode. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<number> } callback - Callback used to return the file descriptor (FD) of the file opened.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     * @deprecated since 11
     * @useinstead ohos.file.fs/fileIo#open
     */
    getReadOnlyFd(callback: AsyncCallback<number>): void;
    /**
     * Opens this file in read-only mode. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<number> } Returns the read only fd
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     * @deprecated since 11
     * @useinstead ohos.file.fs/fileIo#open
     */
    getReadOnlyFd(): Promise<number>;
    /**
     * Closes a file. This API uses an asynchronous callback to return the result.
     *
     * @param { number } fd - FD of the file to close.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     * @deprecated since 11
     * @useinstead ohos.file.fs/fileIo#close
     */
    close(fd: number, callback: AsyncCallback<void>): void;
    /**
     * Closes a file. This API uses a promise to return the result.
     *
     * @param { number } fd - FD of the file to close.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     * @deprecated since 11
     * @useinstead ohos.file.fs/fileIo#close
     */
    close(fd: number): Promise<void>;
    /**
     * Obtains the thumbnail of this file. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the PixelMap of the thumbnail.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the thumbnail of this file. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the PixelMap of the thumbnail.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    getThumbnail(callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Obtains the file thumbnail of the given size. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } size - Size of the thumbnail.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the PixelMap of the thumbnail.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the file thumbnail of the given size. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } size - Size of the thumbnail.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the PixelMap of the thumbnail.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Obtains the file thumbnail of the given size. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } [size] - Size of the thumbnail.
     * @returns { Promise<image.PixelMap> } Returns the thumbnail's pixelMap.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    /**
     * Obtains the file thumbnail of the given size. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } [size] - Size of the thumbnail.
     * @returns { Promise<image.PixelMap> } Returns the thumbnail's pixelMap.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     * @arkts 1.1&1.2
     */
    getThumbnail(size?: image.Size): Promise<image.PixelMap>;
    /**
     * Obtains the ArrayBuffer of a file thumbnail by specifying its type. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { ThumbnailType } type - Type of the thumbnail.
     * @returns { Promise<ArrayBuffer> } Returns the thumbnail's ArrayBuffer. 
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    getThumbnailData(type: ThumbnailType): Promise<ArrayBuffer>;
    /**
     * Favorites or unfavorites this file. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } favoriteState - Operation to perform. The value true means to favorite the file asset, and false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setFavorite
     */
    setFavorite(favoriteState: boolean, callback: AsyncCallback<void>): void;
    /**
     * Favorites or unfavorites this file asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } favoriteState - Operation to perform. The value true means to favorite the file asset, and false means the opposite.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setFavorite
     */
    setFavorite(favoriteState: boolean): Promise<void>;
    /**
     * Sets this file to hidden state. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - Whether to set a file to hidden state. The value true means to hide the file; the value false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setHidden
     */
    setHidden(hiddenState: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets this file asset to hidden state. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - Whether to set a file to hidden state. The value true means to hide the file; the value false means the opposite.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setHidden
     */
    setHidden(hiddenState: boolean): Promise<void>;
    /**
     * Sets user comment information of an image or video. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } userComment - User comment information to set.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setUserComment
     */
    setUserComment(userComment: string, callback: AsyncCallback<void>): void;
    /**
     * Sets user comment information of an image or video. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } userComment - User comment information to set.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setUserComment
     */
    setUserComment(userComment: string): Promise<void>;
    /**
     * Obtains the exchangeable image file format (EXIF) data from a JPG image. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<string> } callback - Callback used to return the EXIF data, in JSON strings.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    getExif(callback: AsyncCallback<string>): void;
    /**
     * Obtains analysis data. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AnalysisType } analysisType - Smart analysis type.
     * @returns { Promise<string> } Returns analysis info into a json string
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAnalysisData(analysisType: AnalysisType): Promise<string>;
    /**
     * Obtains the exchangeable image file format (EXIF) data from a JPG image. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Returns exif info into a json string
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    getExif(): Promise<string>;
    /**
     * Sets the pending state for this image or video asset. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } pendingState - Whether to set the file to pending state. The value true means to set the file to pending state, and the value false means to remove the pending state.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    setPending(pendingState: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets the pending state for this image or video asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } pendingState - Whether to set the file to pending state. The value true means to set the file to pending state, and the value false means to remove the pending state.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    setPending(pendingState: boolean): Promise<void>;
    /**
     * Checks whether this image or video asset is edited. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value true means that the image or video asset is edited, and false means the opposite. The default value is false.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    isEdited(callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether this image or video asset is edited. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<boolean> } Returns whether the asset has been edited.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    isEdited(): Promise<boolean>;
    /**
     * Obtains the edit data of this image or video asset. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<string> } callback - Callback used to return the edit data obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    requestEditData(callback: AsyncCallback<string>): void;
    /**
     * Obtains the edit data of this image or video asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Returns asset edit data.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    requestEditData(): Promise<string>;
    /**
     * Obtains the edited data of this asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<MediaAssetEditData> } Returns media asset edit data
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    getEditData(): Promise<MediaAssetEditData>;
    /**
     * Clone asset.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } title - The title of asset.
     * @returns { Promise<PhotoAsset> } Returns asset
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 14
     */
    clone(title: string): Promise<PhotoAsset>;
    /**
     * Copy a picture in the same album and convert it to a specified format.
     * The album here refers to the album created by user or application album.
     * The API supports media types include normal picture, moving(only picture part), and burst photo, but video is not include.
     * The API supports image format include heif and heic.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } title - The new image title.
     * @param { SupportedImageFormat } imageFormat - The target image format.
     * @returns { Promise<PhotoAsset> } Returns the new PhotoAsset.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     * 1. The original file does not exist locally in PhotoAsset;
     * 2. The original file format is not within the supported range;
     * 3. The original file is a temporary file or is being edited;
     * 4. The title is the same with an image in the same album;
     * 5. PhotoAsset is a photo in the trash or a hidden photo;
     * 6. The title does not meet the parameter specifications.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the
     * kogs. Possible causes:
     * 1. Database corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    convertImageFormat(title: string, imageFormat: SupportedImageFormat): Promise<PhotoAsset>;
    /**
     * Create a compatibility copy of the asset for applications that do not support the encoding format.
     * The current HEIF image will generate a JPEG image when this interface is called.
     * The API supports media types include normal picture,movingphoto(only picture part), and burst photo,
     * but video is not included.
     * The API supports image format incluse heif and heic.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns the void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     *    1. The original file does not exist locally in PhotoAsset;
     *    2. The original file format is not within the supported rrange
     *    3. The original file is a temporary file or is being editted;
     * @throws { BusinessError } 23800301 - Internal systerm error.It is recommended to retry and check the
     *    logs.Possible causes:
     *    1. Database corrupted.2. The file system is abnorma1.3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    createTemporaryCompatibleDuplicate(): Promise<void>;
    /**
     * Opens the source file to obtain the FD. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<number> } callback - Callback used to return the FD.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    requestSource(callback: AsyncCallback<number>): void;
    /**
     * Opens the source file to obtain the FD. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<number> }  Returns opened source asset fd.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    requestSource(): Promise<number>;
    /**
     * Commits the edited image or video asset. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } editData - New data to commit.
     * @param { string } uri - URI of the committed image or video in the application sandbox.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    commitEditedAsset(editData: string, uri: string, callback: AsyncCallback<void>): void;
    /**
     * Commits the edited image or video asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } editData - New data to commit.
     * @param { string } uri - URI of the committed image or video in the application sandbox.
     * @returns { Promise<void> } Returns void.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    commitEditedAsset(editData: string, uri: string): Promise<void>;
    /**
     * Reverts to the state of the file before being edited. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    revertToOriginal(callback: AsyncCallback<void>): void;
    /**
     * Reverts to the state of the file before being edited. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns void.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    revertToOriginal(): Promise<void>;
    /**
     * Obtains the quick thumbnail and quality thumbnail of this asset. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback invoked twice to return the quick and quality thumbnails obtained.
     * @returns { string } Returns request photo task id.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    requestPhoto(callback: AsyncCallback<image.PixelMap>): string;
    /**
     * Obtains the thumbnails of an asset based on the specified options. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { RequestPhotoOptions } options - Options for obtaining the asset thumbnail.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the thumbnails obtained. The callback may be invoked more than once, depending on options.
     * @returns { string } Returns request photo task id.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    requestPhoto(options: RequestPhotoOptions, callback: AsyncCallback<image.PixelMap>): string;
    /**
     * Cancels a task for obtaining media thumbnails.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } requestId - ID of the task to cancel.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    cancelPhotoRequest(requestId: string): void;
    /**
     * Obtains the thumbnail of the specified type for the key frame. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { number } beginFrameTimeMs - Time of the start frame, in ms. The value 0 indicates the cover frame.
     * @param { ThumbnailType } type - Type of the thumbnail.
     * @returns { Promise<image.PixelMap> } Returns the thumbnail's pixelMap.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    getKeyFrameThumbnail(beginFrameTimeMs: number, type: ThumbnailType): Promise<image.PixelMap>;
  }

  /**
   * Enumeration of photo asset members
   *
   * @enum { string } PhotoKeys
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Enumeration of photo asset members
   *
   * @enum { string } PhotoKeys
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 12
   */
  /**
   * Enumeration of photo asset members
   *
   * @enum { string } PhotoKeys
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'20','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum PhotoKeys {
    /**
     * Asset uri, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Asset uri, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Asset uri, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     * @arkts 1.1&1.2
     */
    URI = 'uri',
    /**
     * Photo type of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Photo type of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Photo type of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PHOTO_TYPE = 'media_type',
    /**
     * Asset name, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Asset name, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Asset name, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DISPLAY_NAME = 'display_name',
    /**
     * Size of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Size of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Size of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SIZE = 'size',
    /**
     * Creation date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Creation date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Creation date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DATE_ADDED = 'date_added',
    /**
     * Modified date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Modified date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Modified date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     * @arkts 1.1&1.2
     */
    DATE_MODIFIED = 'date_modified',
    /**
     * Duration of video files, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Duration of video files, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Duration of video files, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DURATION = 'duration',
    /**
     * Width of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Width of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Width of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    WIDTH = 'width',
    /**
     * Height of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Height of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Height of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    HEIGHT = 'height',
    /**
     * Date taken of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Date taken of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Date taken of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2

     */
    DATE_TAKEN = 'date_taken',
    /**
     * Orientation of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Orientation of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Orientation of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ORIENTATION = 'orientation',
    /**
     * Favorite state of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Favorite state of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Favorite state of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    FAVORITE = 'is_favorite',
    /**
     * Title of the asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Title of the asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Title of the asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TITLE = 'title',
    /**
     * Asset position, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    /**
     * Asset position, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 16
     */
    /**
     * Asset position, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    POSITION = 'position',
    /**
     * Trashed date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DATE_TRASHED = 'date_trashed',
    /**
     * Hidden state of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    HIDDEN = 'hidden',
    /**
     * User comment info
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    USER_COMMENT = 'user_comment',
    /**
     * Camera shot key
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CAMERA_SHOT_KEY = 'camera_shot_key',
    /**
     * The year of the file created, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DATE_YEAR = 'date_year',
    /**
     * The month of the file created, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DATE_MONTH = 'date_month',
    /**
     * The day of the file created, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DATE_DAY = 'date_day',
    /**
     * Pending state of the asset, true means asset is pending, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PENDING = 'pending',
    /**
     * Creation time of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Creation time of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DATE_ADDED_MS = 'date_added_ms',
    /**
     * Modified time of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Modified time of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DATE_MODIFIED_MS = 'date_modified_ms',
    /**
     * Trashed time of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DATE_TRASHED_MS = 'date_trashed_ms',
    /**
     * Photo subtype of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Photo subtype of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PHOTO_SUBTYPE = 'subtype',
    /**
     * Effect mode of moving photo, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    MOVING_PHOTO_EFFECT_MODE = 'moving_photo_effect_mode',
    /**
     * Dynamic range type of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Dynamic range type of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DYNAMIC_RANGE_TYPE = 'dynamic_range_type',
    /**
     * Cover position of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Cover position of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    COVER_POSITION = 'cover_position',
    /**
     * Unique uuid of the burst photos, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Unique uuid of the burst photos, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    BURST_KEY = 'burst_key',
    /**
     * Thumbnail of photo asset has been ready, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    THUMBNAIL_READY = 'thumbnail_ready',
    /**
     * Width and height information of lcd picture, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Width and height information of lcd picture, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    LCD_SIZE = 'lcd_size',
    /**
     * Width and height information of thumbnail picture, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Width and height information of thumbnail picture, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    THM_SIZE = 'thm_size',
    /**
     * Detail time of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13
     */
    /**
     * Detail time of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DETAIL_TIME = 'detail_time',
    /**
     * Date taken of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13
     */
    /**
     * Date taken of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DATE_TAKEN_MS = 'date_taken_ms',
    /**
     * Cloud enhancement status of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CE_AVAILABLE = 'ce_available',
    /**
     * watermark type of the asset, read only
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    SUPPORTED_WATERMARK_TYPE = 'supported_watermark_type',
    /**
     * visibility of thumbnails
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    THUMBNAIL_VISIBLE = 'thumbnail_visible',
    /**
     * Whether the photo supports auto cloud enhancement task, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    IS_CE_AUTO = 'is_auto',
    /**
     * Owner album id of the asset, read only
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    OWNER_ALBUM_ID = 'owner_album_id',
    /**
     * Recentshow state of the asset, read only
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    IS_RECENT_SHOW = 'is_recent_show',
    /**
     * Suffix of the asset, read only
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 18
     */
    MEDIA_SUFFIX = 'media_suffix',
    /**
     * total size of assets, read only
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19
     */
    SUM_SIZE = 'sum(size)',
    /**
     * orientation in exif
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    EXIF_ROTATE = 'exif_rotate',
    /**
     * AppLink state of assets, read only
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21
     * @arkts 1.1&1.2
     */
    HAS_APPLINK = 'has_applink',
    /**
     * AppLink info of assets, read only
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21
     * @arkts 1.1&1.2
     */
    APPLINK = 'applink'
  }

  /**
   * Enumerates the key album attributes.
   *
   * @enum { string } AlbumKeys
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Enumerates the key album attributes.
   *
   * @enum { string } AlbumKeys
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum AlbumKeys {
    /**
     * URI of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * URI of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * URI of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    URI = 'uri',
    /**
     * Name of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Name of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ALBUM_NAME = 'album_name',
    /**
     * Virtual path of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    ALBUM_LPATH = 'lpath',
    /**
     * Bundle name of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    BUNDLE_NAME = 'bundle_name',
    /**
     * Timestamp when the album was modified, in milliseconds.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'18','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DATE_MODIFIED = 'date_modified',
    /**
     * album cover uri source
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    COVER_URI_SOURCE = 'cover_uri_source'
  }

  /**
   * Enumerates the display modes of hidden files in the system.
   *
   * @enum { number } HiddenPhotosDisplayMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum HiddenPhotosDisplayMode {
    /**
     * Display all hidden files in the system.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ASSETS_MODE,
    /**
     * Display hidden files by album (display all albums that contain hidden files in the system, excluding the preset hidden album and the albums in the trash).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ALBUMS_MODE
  }

  /**
   * Defines the options for fetching media files.
   *
   * @interface FetchOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Defines the options for fetching media files.
   *
   * @interface FetchOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 12
   */  
  /**
   * Defines the options for fetching media files.
   *
   * @interface FetchOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'20','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface FetchOptions {
    /**
     * Indicates the members to query.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Indicates the members to query.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Indicates the members to query.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    fetchColumns: Array<string>;
    /**
     * Predicates that specify the fetch criteria.
     *
     * @type { dataSharePredicates.DataSharePredicates }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Predicates that specify the fetch criteria.
     *
     * @type { dataSharePredicates.DataSharePredicates }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Predicates that specify the fetch criteria.
     *
     * @type { dataSharePredicates.DataSharePredicates }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
   * Options for creating an image or video asset.
   *
   * @interface PhotoCreateOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface PhotoCreateOptions {
    /**
     * Specify subtype of the asset to create
     *
     * @type { ?PhotoSubtype }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    subtype?: PhotoSubtype;
    /**
     * Camera shot key
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    cameraShotKey?: string;
    /**
     * User id
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19
     */
    userId?: number;
  }

  /**
   * Config to create photo asset
   *
   * @interface PhotoCreationConfig
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface PhotoCreationConfig {
    /**
     * Title of the asset
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    title?: string;

    /**
     * Extension of the asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    fileNameExtension: string;

    /**
     * Specify photo type of the asset to create, include image or video
     *
     * @type { PhotoType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    photoType: PhotoType;

    /**
     * Specify photo subtype of the asset to create, include default or moving_photo
     *
     * @type { ?PhotoSubtype }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    subtype?: PhotoSubtype;
  }

  /**
   * Options for creating an image or video asset.
   *
   * @interface CreateOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Options for creating an image or video asset.
   *
   * @interface CreateOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface CreateOptions {
    /**
     * Title of the asset
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Title of the asset
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    title?: string;
    /**
     * Specify subtype of the asset to create
     *
     * @type { ?PhotoSubtype }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    subtype?: PhotoSubtype;
  }

  /**
   * Defines the options for obtaining the thumbnail of an image or video.
   *
   * @interface RequestPhotoOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface RequestPhotoOptions {
    /**
     * Size of the thumbnail to obtain.
     *
     * @type { ?image.Size }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    size?: image.Size;
    /**
     * Operation to perform.
     *
     * @type { ?RequestPhotoType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    requestPhotoType?: RequestPhotoType;
  }

  /**
   * Defines the application information provided to create assets on behalf of the application.
   *
   * @interface PhotoCreationSource
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18
   */
  interface PhotoCreationSource {
    /**
     * Bundle name of the target application
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    bundleName?: string;
    /**
     * Name of the target application
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    appName?: string;
    /**
     * ID of the target application
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    appId?: string;
    /**
     * Token ID of the target application
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    tokenId?: number;
  }

  /**
   * Provides APIs to manage the file retrieval result.
   *
   * @interface FetchResult
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Provides APIs to manage the file retrieval result.
   *
   * @interface FetchResult
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 12
   */
  /**
   * Provides APIs to manage the file retrieval result.
   *
   * @interface FetchResult
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'20','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface FetchResult<T> {
    /**
     * Obtains the total number of files in the result set.
     *
     * @returns { number } Total number of objects.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the total number of files in the result set.
     *
     * @returns { number } Total number of objects.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the total number of objects in the fetch result.
     *
     * @returns { number } Total number of objects.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getCount(): number;
    /**
     * Checks whether the cursor is in the last row of the result set.
     * You need to check whether the object is the last one before calling getNextObject.
     *
     * @returns { boolean } Whether the object is the last one in the fetch result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Checks whether the cursor is in the last row of the result set.
     * You need to check whether the object is the last one before calling getNextObject.
     *
     * @returns { boolean } Whether the object is the last one in the fetch result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Checks whether the result set points to the last row.
     * You need to check whether the object is the last one before calling getNextObject.
     *
     * @returns { boolean } Whether the object is the last one in the fetch result.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isAfterLast(): boolean;
    /**
     * Obtains the first file asset in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the first file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the first file asset in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the first file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the first object in the fetch result.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the first file asset obtained.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getFirstObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the first file asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Returns the first object in the fetch result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the first file asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Returns the first object in the fetch result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the first object in the fetch result.
     *
     * @returns { Promise<T> } Returns the first object in the fetch result.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getFirstObject(): Promise<T>;
    /**
     * Obtains the next file asset in the result set. This API uses an asynchronous callback to return the result.
     * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the next file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the next file asset in the result set. This API uses an asynchronous callback to return the result.
     * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the next file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the next object in the fetch result. 
     * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
     * in the fetch result. This method only works when the current position is not the last row.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the next file asset obtained.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getNextObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the next file asset in the result set. This API uses a promise to return the result.
     * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
     *
     * @returns { Promise<T> } Returns the next object
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the next file asset in the result set. This API uses a promise to return the result.
     * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
     *
     * @returns { Promise<T> } Returns the next object
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the next object in the fetch result. 
     * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
     * in the fetch result. This method only works when the current position is not the last row.
     *
     * @returns { Promise<T> } Returns the next object
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getNextObject(): Promise<T>;
    /**
     * Obtains the last file asset in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the last file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the last file asset in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the last file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the last object asset in the fetch result.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the last file asset obtained.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getLastObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the last file asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Returns the last object
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the last file asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Returns the last object
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the last object asset in the fetch result.
     *
     * @returns { Promise<T> } Returns the last object
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getLastObject(): Promise<T>;
    /**
     * Obtains a file asset with the specified index in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { number } index - Index of the file asset to obtain. The value starts from 0.
     * @param { AsyncCallback<T> } callback - Callback used to return the file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains a file asset with the specified index in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { number } index - Index of the file asset to obtain. The value starts from 0.
     * @param { AsyncCallback<T> } callback - Callback used to return the file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the object with the specified index in the result set.
     *
     * @param { number } index - Index of the file asset to obtain. The value starts from 0.
     * @param { AsyncCallback<T> } callback - Callback used to return the file asset obtained.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getObjectByPosition(index: number, callback: AsyncCallback<T>): void;
    /**
     * Obtains a file asset with the specified index in the result set. This API uses a promise to return the result.
     *
     * @param { number } index - Index of the file asset to obtain. The value starts from 0.
     * @returns { Promise<T> } Returns the object
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains a file asset with the specified index in the result set. This API uses a promise to return the result.
     *
     * @param { number } index - Index of the file asset to obtain. The value starts from 0.
     * @returns { Promise<T> } Returns the object
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the object with the specified index in the result set.
     *
     * @param { number } index - Index of the file asset to obtain. The value starts from 0.
     * @returns { Promise<T> } Returns the object
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getObjectByPosition(index: number): Promise<T>;
    /**
     * Obtains the objects in the fetch result in segments.
     *
     * @param { number } index - Index of the asset to obtain.
     * @param { number } offset - Offset of the asset to obtain.
     * @returns { Promise<T[]> } Returns the objects in segments
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: 'index or 'offset' validity check failed.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21
     * @arkts 1.1&1.2
     */
    getRangeObjects(index: number, offset: number): Promise<T[]>
    /**
     * Obtains all the file assets in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<T>> } callback - Callback used to return an array of all file assets in the result set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains all the file assets in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<T>> } callback - Callback used to return an array of all file assets in the result set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains all objects in the fetch result.
     *
     * @param { AsyncCallback<Array<T>> } callback - Callback used to return an array of all file assets in the result set.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAllObjects(callback: AsyncCallback<Array<T>>): void;
    /**
     * Obtains all the file assets in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<T>> } Returns all the objects
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains all the file assets in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<T>> } Returns all the objects
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains all objects in the fetch result.
     *
     * @returns { Promise<Array<T>> } Returns all the objects
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAllObjects(): Promise<Array<T>>;
    /**
     * Closes this FetchResult instance to invalidate it. After this instance is released, the APIs in this instance cannot be invoked.
     *
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Closes this FetchResult instance to invalidate it. After this instance is released, the APIs in this instance cannot be invoked.
     *
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Release the fetch result.
     *
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    close(): void;
  }

  /**
   * Enumerates the album types.
   *
   * @enum { number } AlbumType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Enumerates the album types.
   *
   * @enum { number } AlbumType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum AlbumType {
    /**
     * User album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * User album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    USER = 0,
    /**
     * System album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * System album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SYSTEM = 1024,
    /**
     * Album created by app.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    SOURCE = 2048,
    /**
     * Album created by smart abilities.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SMART = 4096
  }

  /**
   * Enumerate the album subtypes.
   *
   * @enum { number } AlbumSubtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Enumerate the album subtypes.
   *
   * @enum { number } AlbumSubtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum AlbumSubtype {
    /**
     * Generic user-created albums.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Generic user-created albums.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    USER_GENERIC = 1,
    /**
     * Favorite album, which assets are marked as favorite.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Favorite album, which assets are marked as favorite.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    FAVORITE = 1025,
    /**
     * Video album, which contains all video assets.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Video album, which contains all video assets.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    VIDEO,
    /**
     * Hidden album, which assets are marked as hidden.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    HIDDEN,
    /**
     * Trash album, which assets are deleted.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TRASH,
    /**
     * Screenshot album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SCREENSHOT,
    /**
     * Camera album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CAMERA,
    /**
     * Image album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    /**
     * Image album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    IMAGE = 1031,
    /**
     * Cloud Enhancement album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CLOUD_ENHANCEMENT = 1032,
    /**
     * Source album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SOURCE_GENERIC = 2049,
    /**
     * Classify album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CLASSIFY = 4097,
    /**
     * Location album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    GEOGRAPHY_LOCATION = 4099,
    /**
     * City album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    GEOGRAPHY_CITY,
    /**
     * ShootingMode album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SHOOTING_MODE,
    /**
     * Portrait album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PORTRAIT,
    /**
     * Group photo album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    GROUP_PHOTO,
    /**
     * Highlight album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    HIGHLIGHT = 4104,
    /**
     * Highlight suggestions album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    HIGHLIGHT_SUGGESTIONS,
    /**
     * Any album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Any album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ANY = 2147483647
  }

  /**
   * Enumerates the types of the operation for obtaining image or video thumbnails.
   *
   * @enum { number } RequestPhotoType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum RequestPhotoType {
    /**
     * Obtain both the quick thumbnail and the quality thumbnail.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    REQUEST_ALL_THUMBNAILS = 0,
    /**
     * Obtain only the quick thumbnail.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    REQUEST_FAST_THUMBNAIL,
    /**
     * Obtain only the quality thumbnail.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    REQUEST_QUALITY_THUMBNAIL
  }

  /**
   * Enumerates source types of cover uri.
   *
   * @enum { number } CoverUriSource
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  enum CoverUriSource {
    /**
     * Default album cover.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    DEFAULT_COVER = 0,

    /**
     * Manually set cover uri.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    MANUAL_COVER = 1
  }

  /**
   * Defines the abstract interface of albums.
   *
   * @interface AbsAlbum
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Defines the abstract interface of albums.
   *
   * @interface AbsAlbum
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface AbsAlbum {
    /**
     * Album type
     *
     * @type { AlbumType }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Album type
     *
     * @type { AlbumType }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly albumType: AlbumType;
    /**
     * Album subtype
     *
     * @type { AlbumSubtype }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Album subtype
     *
     * @type { AlbumSubtype }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly albumSubtype: AlbumSubtype;
    /**
     * Album name.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Album name.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    albumName: string;
    /**
     * Album uri.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Album uri.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly albumUri: string;
    /**
     * Number of assets in the album
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Number of assets in the album
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly count: number;
    /**
     * Cover uri for the album
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly coverUri: string;
    /**
     * Lpath for the album, one album has a virtual path
     *
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    readonly lpath?: string;
    /**
     * Album cover uri source
     *
     * @type { ?CoverUriSource }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    readonly coverUriSource?: CoverUriSource;
    /**
     * Obtains image and video assets. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback used to return the image and video assets obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains image and video assets. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback used to return the image and video assets obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void;
    /**
     * Fetch assets in an album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Fetch options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Fetch assets in an album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Fetch options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Fetch assets in an album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Fetch options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Fetch shared photo assets in an album.
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { FetchOptions } options - Fetch options.
     * @returns { Array<SharedPhotoAsset> } Returns the shared photo assets
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13
     */
    getSharedPhotoAssets(options: FetchOptions): Array<SharedPhotoAsset>;
  }

  /**
   * Enumeration change types of data change.
   *
   * @enum { number } NotifyChangeType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20
   */
  enum NotifyChangeType {
    /**
     * Data(assets or albums) have been newly created.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    NOTIFY_CHANGE_ADD = 0,
    /**
     * Data(assets or albums) have been modified.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    NOTIFY_CHANGE_UPDATE = 1,
    /**
     * Data(assets or albums) have been removed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    NOTIFY_CHANGE_REMOVE = 2,
  }

  /**
   * Defines the album.
   *
   * @extends AbsAlbum
   * @interface Album
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Defines the album.
   *
   * @extends AbsAlbum
   * @interface Album
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Album extends AbsAlbum {
    /**
     * Number of image assets in the album
     *
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Number of image assets in the album
     *
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly imageCount?: number;
    /**
     * Number of video assets in the album
     *
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Number of video assets in the album
     *
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly videoCount?: number;
    /**
     * Album dateAdded
     *
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    readonly dateAdded?: number;
    /**
     * Album dateModified
     *
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    readonly dateModified?: number;
    /**
     * Modify metadata for the album
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify metadata for the album
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    commitModify(): Promise<void>;
    /**
     * Adds image and video assets to an album. Before the operation, ensure that the image and video assets to add and the album exist.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image and video assets to add.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#addAssets
     */
    addAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * Adds image and video assets to an album. Before the operation, ensure that the image and video assets to add and the album exist. 
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image and video assets to add.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#addAssets
     */
    addAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * Removes image and video assets from an album. The album and file resources must exist.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image and video assets to remove.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#removeAssets
     */
    removeAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * Removes image and video assets from an album. The album and file resources must exist.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image and video assets to remove.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#removeAssets
     */
    removeAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * Recovers image or video assets from the trash. Before the operation, ensure that the image or video assets exist in the trash.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image or video assets to recover.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#recoverAssets
     */
    recoverAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * Recovers image or video assets from the trash. Before the operation, ensure that the image or video assets exist in the trash.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image or video assets to recover.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#recoverAssets
     */
    recoverAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * Deletes image or video assets from the trash. Before the operation, ensure that the image or video assets exist in the trash.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image or video assets to delete.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#deleteAssets
     */
    deleteAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * Deletes image or video assets from the trash. Before the operation, ensure that the image or video assets exist in the trash. 
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image or video assets to delete.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#deleteAssets
     */
    deleteAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * Sets the album cover. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } uri - URI of the file to be set as the album cover.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#setCoverUri
     */
    setCoverUri(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Sets the album cover. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } uri - URI of the file to be set as the album cover.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#setCoverUri
     */
    setCoverUri(uri: string): Promise<void>;
    /**
     * Obtains the face identifier on the cover of a portrait album or group photo album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Returns tag_id if portrait album, Returns group_tag if group photo album,
     * <br>Returns empty if not found.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getFaceId(): Promise<string>;
  }

  /**
   * Defines the album order.
   *
   * @interface AlbumOrder
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20
   */
  interface AlbumOrder {
    /**
     * The album id of album asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    albumId: number;
    /**
     * The album order of album asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    albumOrder: number;
    /**
     * The order section of album asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    orderSection: number;
    /**
     * The order type of album asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    orderType: number;
    /**
     * The order status of album asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    orderStatus: number;
  }

  /**
   * Helper functions to access photos and albums.
   *
   * @interface PhotoAccessHelper
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Helper functions to access photos and albums.
   *
   * @interface PhotoAccessHelper
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Helper functions to access photos and albums.
   *
   * @interface PhotoAccessHelper
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface PhotoAccessHelper {
    /**
     * Obtains image and video assets. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback used to return the image and video assets obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains image and video assets. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback used to return the image and video assets obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void;
    /**
     * Obtains image and video assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains image and video assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Fetch photo assets
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     * @arkts 1.1&1.2
     */
    getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Obtains burst assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } burstKey - UUID of a set of burst photos (BURST_KEY of PhotoKeys). The value is a string of 36 characters.
     * @param { FetchOptions } options - Options for fetching the burst photos.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Fetch a group of burst assets
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } burstKey - UUID of a set of burst photos (BURST_KEY of PhotoKeys). The value is a string of 36 characters.
     * @param { FetchOptions } options - Options for fetching the burst photos.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'20','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getBurstAssets(burstKey: string, options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Creates an image or video asset with the specified file name. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { AsyncCallback<PhotoAsset> } callback - File name of the image or video to create.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    createAsset(displayName: string, callback: AsyncCallback<PhotoAsset>): void;
    /**
     * Creates an image or video asset with the specified file name. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @returns { Promise<PhotoAsset> } Returns the newly created asset
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    createAsset(displayName: string): Promise<PhotoAsset>;
    /**
     * Creates an image or video asset with the specified file name and options. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { PhotoCreateOptions } options - Options for creating an image or video asset.
     * @returns { Promise<PhotoAsset> } Returns the newly created asset
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    createAsset(displayName: string, options: PhotoCreateOptions): Promise<PhotoAsset>;
    /**
     * Creates an image or video asset with the specified file name and options.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { PhotoCreateOptions } options - Options for creating an image or video asset.
     * @param { AsyncCallback<PhotoAsset> } callback - Callback used to return the image or video created.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    createAsset(displayName: string, options: PhotoCreateOptions, callback: AsyncCallback<PhotoAsset>): void;
    /**
     * Creates an image or video asset with the specified file type, file name extension, and options.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } options - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
     * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Creates an image or video asset with the specified file type, file name extension, and options.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } options - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
     * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    createAsset(photoType: PhotoType, extension: string, options: CreateOptions, callback: AsyncCallback<string>): void;
    /**
     * Creates an image or video asset with the specified file type and file name extension.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Creates an image or video asset with the specified file type and file name extension.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    createAsset(photoType: PhotoType, extension: string, callback: AsyncCallback<string>): void;
    /**
     * Creates an image or video asset with the specified file type, file name extension, and options.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } [options] - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
     * @returns { Promise<string> } Returns the uri of the newly created asset
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Creates an image or video asset with the specified file type, file name extension, and options.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } [options] - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
     * @returns { Promise<string> } Returns the uri of the newly created asset
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    createAsset(photoType: PhotoType, extension: string, options?: CreateOptions): Promise<string>;
    /**
     * Creates an album. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Name of the album to create.
     * @param { AsyncCallback<Album> } callback - Callback used to return the created album instance.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900015 - The file name already exists.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#createAlbumRequest
     */
    createAlbum(name: string, callback: AsyncCallback<Album>): void;
    /**
     * Creates an album. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Name of the album to create.
     * @returns { Promise<Album> } Returns the instance of newly created Album
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900015 - The file name already exists.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#createAlbumRequest
     */
    createAlbum(name: string): Promise<Album>;
    /**
     * Deletes albums. This API uses an asynchronous callback to return the result.
     * Ensure that the albums to be deleted exist. Only user albums can be deleted.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Albums to delete.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#deleteAlbums
     */
    deleteAlbums(albums: Array<Album>, callback: AsyncCallback<void>): void;
    /**
     * Deletes albums. This API uses a promise to return the result.
     * Ensure that the albums to be deleted exist. Only user albums can be deleted.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Albums to delete.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#deleteAlbums
     */
    deleteAlbums(albums: Array<Album>): Promise<void>;
    /**
     * Obtains albums based on the specified options and album type. This API uses an asynchronous callback to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { FetchOptions } options - Options for fetching the albums.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains albums based on the specified options and album type. This API uses an asynchronous callback to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { FetchOptions } options - Options for fetching the albums.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAlbums(
      type: AlbumType,
      subtype: AlbumSubtype,
      options: FetchOptions,
      callback: AsyncCallback<FetchResult<Album>>
    ): void;
    /**
     * Obtains albums by type. This API uses an asynchronous callback to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains albums by type. This API uses an asynchronous callback to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAlbums(type: AlbumType, subtype: AlbumSubtype, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains albums based on the specified options and album type. This API uses a promise to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { FetchOptions } [options] - Options for fetching the albums.
     * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains albums based on the specified options and album type. This API uses a promise to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Album subtype.
     * @param { FetchOptions } [options] - Options for fetching the albums.
     * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAlbums(type: AlbumType, subtype: AlbumSubtype, options?: FetchOptions): Promise<FetchResult<Album>>;
    /**
     * Obtains hidden albums based on the specified display mode and retrieval options.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - Display mode of albums containing hidden assets.
     * @param { FetchOptions } options - Options to fetch albums.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Returns fetchResult of albums containing hidden assets.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getHiddenAlbums(mode: HiddenPhotosDisplayMode, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains hidden albums based on the specified display mode. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - Display mode of hidden albums.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getHiddenAlbums(mode: HiddenPhotosDisplayMode, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains hidden albums based on the specified display mode and retrieval options. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - Display mode of hidden albums.
     * @param { FetchOptions } [options] - Options for retrieving the files.
     * @returns { Promise<FetchResult<Album>> } Returns fetchResult of albums containing hidden assets.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getHiddenAlbums(mode: HiddenPhotosDisplayMode, options?: FetchOptions): Promise<FetchResult<Album>>;
    /**
     * Deletes media assets. This API uses an asynchronous callback to return the result. The deleted assets are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - URIs of the media files to delete.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000002 - The uri format is incorrect or does not exist.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#deleteAssets
     */
    deleteAssets(uriList: Array<string>, callback: AsyncCallback<void>): void;
    /**
     * Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - URIs of the media files to delete.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000002 - The uri format is incorrect or does not exist.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#deleteAssets
     */
    deleteAssets(uriList: Array<string>): Promise<void>;
    /**
     * Registers listening for the specified URI. This API uses a callback to return the result.
     *
     * @param { string } uri - URI of the photo asset, URI of the album, or DefaultChangeUri.
     * @param { boolean } forChildUris - Whether to perform fuzzy listening.
     * If uri is the URI of an album, the value true means to listen for the changes of the files in the album;
     * the value false means to listen for the changes of the album only.
     * If uri is the URI of a photoAsset, there is no difference between true and false for forChildUris.
     * If uri is DefaultChangeUri, forChildUris must be set to true. If forChildUris is false,
     * the URI cannot be found and no message can be received.
     * @param { Callback<ChangeData> } callback - Callback used to return the ChangeData.
     * Multiple callback listeners can be registered for a URI.
     * You can use unRegisterChange to unregister all listeners for the URI or a specified callback listener.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    registerChange(uri: string, forChildUris: boolean, callback: Callback<ChangeData>): void;
    /**
     * Get analysis progress of the asset.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AnalysisType } analysisType - Analysis type
     * @returns { Promise<string> } Returns analysis progress info into a json string
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12
     */
     getDataAnalysisProgress(analysisType: AnalysisType): Promise<string>;
    /**
     * Unregisters listening for the specified URI. Multiple callbacks can be registered for a URI for listening.
     * You can use this API to unregister the listening of the specified callbacks or all callbacks.
     *
     * @param { string } uri - URI of the photo asset, URI of the album, or DefaultChangeUri.
     * @param { Callback<ChangeData> } [callback] - The callback function to unregister.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    unRegisterChange(uri: string, callback?: Callback<ChangeData>): void;
    /**
     * Creates a dialog box for deleting media files. This API uses an asynchronous callback to return the result.
     * The deleted media files are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - URIs of the media files to delete. A maximum of 300 media files can be deleted.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#deleteAssets
     */
    createDeleteRequest(uriList: Array<string>, callback: AsyncCallback<void>): void;
    /**
     * Creates a dialog box for deleting media files. This API uses a promise to return the result.
     * The deleted media files are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - URIs of the media files to delete. A maximum of 300 media files can be deleted.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#deleteAssets
     */
    createDeleteRequest(uriList: Array<string>): Promise<void>;
    /**
     * Create a save dialog to save photos
     *
     * @param { Array<string> } srcFileUris - List of the file uris to be saved
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - List of the photo asset creation configs
     * @returns { Promise<Array<string>> } - Returns the media library file uri list to application which has been authorized
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    showAssetsCreationDialog(srcFileUris: Array<string>, photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>;
    /**
     * Create assets and grant save permission to the app which called the save dialog.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } bundleName - BundleName of the application which called the save dialog
     * @param { string } appName - AppName of the application which called the save dialog
     * @param { number } tokenId - TokenId of the application which called the save dialog
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - List of the photo asset creation configs
     * @returns { Promise<Array<string>> } - Returns the media library file uri list to application which has been authorized
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes: 1. The photoCreationConfigs is empty;
     * <br>2. Incorrect photoCreationConfigs format.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'19','1.2':'20'}
     * @arkts 1.1&1.2
     */
    createAssetsForApp(bundleName: string, appName: string, tokenId: number, photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>;
    /**
     * Create asset and grant short term permission to the application.
     *
     * @permission ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO
     * @param { PhotoCreationConfig } photoCreationConfig - photo asset creation configs
     * @returns { Promise<string> } - Returns the media library file uri to application which has been authorized
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    createAssetWithShortTermPermission(photoCreationConfig: PhotoCreationConfig): Promise<string>;
    /**
     * Creates assets with a temporary permission. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } bundleName - Bundle name of the target application.
     * @param { string } appName - Name of the target application.
     * @param { string } appId - ID of the target application.
     * @param { number } tokenId - Unique identifier for the temporary authorization.
     * @param { AuthorizationMode } authorizationMode - Mode of authorization
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - Configuration for creating (saving) the media assets in the media library.
     * @returns { Promise<Array<string>> } - Returns the media library file uri list to application which has been authorized
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    createAssetsForAppWithMode(
      bundleName: string,
      appName: string,
      appId: string,
      tokenId: number,
      authorizationMode: AuthorizationMode,
      photoCreationConfigs: Array<PhotoCreationConfig>
    ): Promise<Array<string>>;
    /**
     * Grants the save permission for URIs. This API uses a promise to return the result.
     *
     * @param { Array<string> } srcFileUris - URIs of the images or videos to be granted with the permission.
     * @returns { Promise<Array<string>> } - Returns the authorized uri list
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14
     */
    requestPhotoUrisReadPermission(srcFileUris: Array<string>): Promise<Array<string>>;
    /**
     * Obtains the index of an image or video in an album. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } photoUri - URI of the media asset whose index is to be obtained.
     * @param { string } albumUri - Album URI, which can be an empty string. 
     * <br>If it is an empty string, all the media assets in the Gallery are obtained by default.
     * @param { FetchOptions } options - Fetch options. Only one search condition or sorting mode must be set in predicates.
     * <br> If no value is set or multiple search criteria or sorting modes are set, the API cannot be called successfully.
     * @param { AsyncCallback<number> } callback - Callback used to return the index obtained.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions, callback: AsyncCallback<number>): void;
    /**
     * Obtains the index of an image or video in an album. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } photoUri - URI of the media asset whose index is to be obtained.
     * @param { string } albumUri - Album URI, which can be an empty string. If it is an empty string, all the media assets in the Gallery are obtained by default.
     * @param { FetchOptions } options - Fetch options. Only one search condition or sorting mode must be set in predicates.
     * <br>If no value is set or multiple search criteria or sorting modes are set, the API cannot be called successfully.
     * @returns { Promise<number> } - Returns the index of the asset in the album
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions): Promise<number>;
    /**
     * Releases this PhotoAccessHelper instance. This API uses an asynchronous callback to return the result.
     * Call this API when the APIs of the PhotoAccessHelper instance are no longer used.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases this PhotoAccessHelper instance. This API uses a promise to return the result.
     * Call this API when the APIs of the PhotoAccessHelper instance are no longer used.
     *
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    release(): Promise<void>;
    /**
     * Saves form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - Information store with the form.
     * @param { AsyncCallback<void> } callback - No value returned.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    saveFormInfo(info: FormInfo, callback: AsyncCallback<void>): void;
    /**
     * Saves form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - Information store with the form.
     * @returns { Promise<void> } Return void.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    saveFormInfo(info: FormInfo): Promise<void>;
    /**
     * Saves gallery form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { GalleryFormInfo } info - Information store with the gallery form.
     * @returns { Promise<void> } Return void.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    saveGalleryFormInfo(info: GalleryFormInfo): Promise<void>;
    /**
     * Removes form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - Information store with the form.
     * @param { AsyncCallback<void> } callback - No value returned.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    removeFormInfo(info: FormInfo, callback: AsyncCallback<void>): void;
    /**
     * Removes form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - Information store with the form.
     * @returns { Promise<void> } Return void.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    removeFormInfo(info: FormInfo): Promise<void>;
    /**
     * Removes gallery form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { GalleryFormInfo } info - Information store with the gallery form.
     * @returns { Promise<void> } Return void.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    removeGalleryFormInfo(info: GalleryFormInfo): Promise<void>;
    /**
     * Updates gallery form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { GalleryFormInfo } info - Information store with the gallery form.
     * @returns { Promise<void> } Return void.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    updateGalleryFormInfo(info: GalleryFormInfo): Promise<void>;
    /**
     * Applies media changes. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { MediaChangeRequest } mediaChangeRequest - Request for asset changes or album changes.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    applyChanges(mediaChangeRequest: MediaChangeRequest): Promise<void>;
    /**
     * Get index construction progress.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Returns progress of the photo and video
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getIndexConstructProgress(): Promise<string>;
    /**
     * Grants an application the permission to access multiple URIs. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { number } tokenId - ID of the target application.
     * @param { Array<string> } uriList - A list of URIs, which cannot exceed 1000.
     * @param { PhotoPermissionType } photoPermissionType - Type of the permission to be granted. For details, see the enum.
     * @param { HideSensitiveType } hideSensitiveType - Type of the information to hide.
     * <br>This parameter is reserved. Currently, any enumerated value of HideSensitiveType can be passed in.
     * @returns { Promise<number> } Returns result of grant permission
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes: 1. Incorrect uri format;
     * <br>2. The value of photoPermissionType or hideSensitiveType is out of range.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19
     */
    grantPhotoUrisPermission(tokenId: number, uriList: Array<string>, photoPermissionType: PhotoPermissionType, hideSensitiveType: HideSensitiveType): Promise<number>;
    /**
     * Grants an application the permission to access a URI. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { number } tokenId - ID of the target application.
     * @param { string } uri - URI of the media asset.
     * @param { PhotoPermissionType } photoPermissionType - Type of the permission to be granted. For details, see the enum.
     * @param { HideSensitiveType } hideSensitiveType - Type of the information to hide.
     * <br>This parameter is reserved. Currently, any enumerated value of HideSensitiveType can be passed in.
     * @returns { Promise<number> } Returns result of grant permission
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes: 1. Incorrect uri format;
     * <br>2. The value of photoPermissionType or hideSensitiveType is out of range.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'19','1.2':'20'}
     * @arkts 1.1&1.2
     */
    grantPhotoUriPermission(tokenId: number, uri: string, photoPermissionType: PhotoPermissionType, hideSensitiveType: HideSensitiveType): Promise<number>;
    /**
     * Cancels the permission for accessing an URI from an application. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { number } tokenId - ID of the target application.
     * @param { string } uri - URI of the media asset.
     * @param { PhotoPermissionType } photoPermissionType - Permission type.
     * @returns { Promise<number> } Returns result of cancel permission
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes: 1. Incorrect uri format;
     * <br>2. The value of photoPermissionType or hideSensitiveType is out of range.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19
     */
    cancelPhotoUriPermission(tokenId: number, uri: string, photoPermissionType: PhotoPermissionType): Promise<number>;
    /**
     * Provides the capability of thumbnail generation according to specified rules.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicate - Rule options for generating thumbnails.
     * @param { AsyncCallback<void> } callback - Returns void when the task is completed.
     * @returns { number } Create task id for generating thumbnails
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13
     */
    startThumbnailCreationTask(predicate: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<void>): number;
    /**
     * Provides the capability of stop generating thumbnails.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { number } taskId - Stop generating thumbnail task id.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    stopThumbnailCreationTask(taskId: number): void;
    /**
     * Fetch shared photo assets.
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { FetchOptions } options - Fetch options.
     * @returns { Array<SharedPhotoAsset> } Returns the shared photo assets
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13
     */
    getSharedPhotoAssets(options: FetchOptions): Array<SharedPhotoAsset>;
    /**
     * Obtains the list of image or video file name extensions supported by the media library.
     *
     * @param { PhotoType } photoType - Type of the file.
     * @returns { Promise<Array<string>> } - Return the list of image or video suffixes supported by the media library
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 18
     */
    getSupportedPhotoFormats(photoType: PhotoType): Promise<Array<string>>;
    /**
     * Starts asset analysis.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AnalysisType } type - Smart analysis type.
     * @param { Array<string> } assetUris - Array of asset URIs.
     * @returns { Promise<number> } Returns the task id of the service.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    startAssetAnalysis(type: AnalysisType, assetUris?: Array<string>): Promise<number>;
    /**
     * Obtains album information by album IDs. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<number> } albumIds - Array of album IDs.
     * @returns { Promise<Map<number, Album>> } - Return the map of albums
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    getAlbumsByIds(albumIds: Array<number>): Promise<Map<number, Album>>;
    /**
     * Creates assets for the current application or other applications in the specified source or user album. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoCreationSource } source - Application information provided to create assets on behalf of the application.
     * @param { string } albumUri - URI of the album.
     * @param { boolean } isAuthorized - Whether to authorize other applications. The value true means that the permission is authorized, and false means the opposite.
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - Configuration for creating (saving) the media assets in the media library.
     * @returns { Promise<Array<string>> } - Returns the media library file uri list to application which has been authorized
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    createAssetsForAppWithAlbum(source: PhotoCreationSource, albumUri: string, isAuthorized: boolean, photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>;

    /**
     * Register the callback of photo changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoChange' } type - The value is fixed at 'photoChange', indicating the photo change event.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback invoked when the photo is changed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'photoChange'; 2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    on(type: 'photoChange', callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Unregister the callback of photo changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoChange' } type - The value is fixed at 'photoChange', indicating the photo change event.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback to be removed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'photoChange'; 2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    off(type: 'photoChange', callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Register the callback of hidden photo changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenPhotoChange' } type - The value is fixed at 'hiddenPhotoChange', indicating the hidden photo change event.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback invoked when the hidden photo is changed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'hiddenPhotoChange'; 2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    on(type: 'hiddenPhotoChange', callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Unregister the callback of hidden photo changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenPhotoChange' } type - The value is fixed at 'hiddenPhotoChange', indicating the hidden photo change event.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback to be removed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'hiddenPhotoChange'; 2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    off(type: 'hiddenPhotoChange', callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Register the callback of trashed photo changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedPhotoChange' } type - The value is fixed at 'trashedPhotoChange', indicating the trashed photo change event.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback invoked when the trashed photo is changed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'trashedPhotoChange'; 2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    on(type: 'trashedPhotoChange', callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Unregister the callback of trashed photo changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedPhotoChange' } type - The value is fixed at 'trashedPhotoChange', indicating the trashed photo change event.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback to be removed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'trashedPhotoChange'; 2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    off(type: 'trashedPhotoChange', callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Register the callback of album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoAlbumChange' } type - The value is fixed at 'photoAlbumChange', indicating the album change event.
     * @param { Callback<AlbumChangeInfos> } callback - Callback invoked when the album is changed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'photoAlbumChange'; 2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    on(type: 'photoAlbumChange', callback: Callback<AlbumChangeInfos>): void;

    /**
     * Unregister the callback of album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoAlbumChange' } type - The value is fixed at 'photoAlbumChange', indicating the album change event.
     * @param { Callback<AlbumChangeInfos> } callback - Callback to be removed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'photoAlbumChange'; 2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    off(type: 'photoAlbumChange', callback?: Callback<AlbumChangeInfos>): void;

    /**
     * Register the callback of hidden album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenAlbumChange' } type - The value is fixed at 'hiddenAlbumChange', indicating the hidden album change event.
     * @param { Callback<AlbumChangeInfos> } callback - Callback invoked when the hidden album is changed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'hiddenAlbumChange'; 2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    on(type: 'hiddenAlbumChange', callback: Callback<AlbumChangeInfos>): void;

    /**
     * Unregister the callback of hidden album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenAlbumChange' } type - The value is fixed at 'hiddenAlbumChange', indicating the hidden album change event.
     * @param { Callback<AlbumChangeInfos> } callback - Callback to be removed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'hiddenAlbumChange'; 2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    off(type: 'hiddenAlbumChange', callback?: Callback<AlbumChangeInfos>): void;

    /**
     * Register the callback of trashed album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedAlbumChange' } type - The value is fixed at 'trashedAlbumChange', indicating the trashed album change event.
     * @param { Callback<AlbumChangeInfos> } callback - Callback invoked when the trashed album is changed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'trashedAlbumChange'; 2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    on(type: 'trashedAlbumChange', callback: Callback<AlbumChangeInfos>): void;

    /**
     * Unregister the callback of trashed album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedAlbumChange' } type - The value is fixed at 'trashedAlbumChange', indicating the trashed album change event.
     * @param { Callback<AlbumChangeInfos> } callback - Callback to be removed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'trashedAlbumChange'; 2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    off(type: 'trashedAlbumChange', callback?: Callback<AlbumChangeInfos>): void;

    /**
     * Get the PhotoPickerComponent default album name.
     *
     * @returns { Promise<string> } - Returns the default album name.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. The IPC request timed out. 2. system running error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    getPhotoPickerComponentDefaultAlbumName(): Promise<string>;

    /**
     * Batchly obtain the values of PhotoAsset members.
     *
     * @param {PhotoAsset[]} assets - The array of PhotoAsset objects.
     * @param {string[]} members - The array of member property names to get.
     * @returns { PhotoAssetParams } Returns the objects in segments
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: The attribute to be queried does not exist in assets.
     * @throws { BusinessError } 23800104 - The provided member must be a property name of PhotoKey.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21
     * @arkts 1.1&1.2
     */
    batchGetPhotoAssetParams(assets: PhotoAsset[], members: string[]): PhotoAssetParams

    /**
     * checks whether the application supports compatiblle copies by bundleName
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } bundleName - BundleName of target applicaation
     * @returns { Promise<boolean> } - Returns the whether appplication supports compatible copies
     * @throws {BusinessError } 201 - Permission denied
     * @throws {BusinessError } 202 - Called by non-system aapplication
     * @throws {BusinessError } 23800301 - Internal system eerror. It is recommended to retry and check the logs
     *    <br>Possible causes: 1. The IPC request timed out. 2.system running error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    isCompatibleDuplicateSupported(bundleName: string): Promise<boolean>;

    /**
     * Obtains photo albums based on the specified options. This API uses a promise to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } [options] - Options for fetching the albums.
     * @returns { Promise<FetchResult<Album>> } - Return the fetch result
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    getPhotoAlbums(options?: FetchOptions): Promise<FetchResult<Album>>;

    /**
     * Get Order of Photo Albums
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { number } orderStyle - Order style for albums.
     * @param { FetchOptions } [options] - Options for fetching the albums.
     * @returns { Promise<FetchResult<AlbumOrder>> } - Return FetchResult of AlbumOrder.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The input parameter is not within the valid range. 
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    getPhotoAlbumOrder(orderStyle: number, options?: FetchOptions): Promise<FetchResult<AlbumOrder>>;

    /**
     * Set Order of Photo Albums
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { number } orderStyle - Order style for albums.
     * @param { Array<AlbumOrder> } albumOrders - Array AlbumOrder of the content.
     * @returns { Promise<void> } - Return void
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The input parameter is not within the valid range. 
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    setPhotoAlbumOrder(orderStyle: number, albumOrders: Array<AlbumOrder>): Promise<void>;

    /**
     * Get recent photo or video info by options
     *
     * @param { RecentPhotoOptions } [options] - options for recent photo
     * @returns { Promise<RecentPhotoInfo> } - Returns the recent photo info
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    getRecentPhotoInfo(options?: RecentPhotoOptions): Promise<RecentPhotoInfo>;

    /**
     * Queries data in the database based on specified conditions.
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { string } sql - The query conditions.
     * @returns { Promise<ResultSet> } The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: The SQL statement is abnormal.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     * @arkts 1.1&1.2
     */
    query(sql: string): Promise<ResultSet>;
  }

  /**
   * RecentPhotoOptions Object
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20
   */
  export class RecentPhotoOptions {
    /**
     * Support set period time
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    period?: number;

    /**
     * The type of the file in the recent photo window.
     *
     * @type { ?photoAccessHelper.PhotoViewMIMETypes }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    MIMEType?: photoAccessHelper.PhotoViewMIMETypes;

    /**
     * PhotoSource
     *
     * @type { ?PhotoSource }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    photoSource?: PhotoSource;
  }

  /**
   * Recent photo info
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20
   */
  export class RecentPhotoInfo {
    /**
     * The dateTaken of photos or videos
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    dateTaken?: number;

    /**
     * The identifier of photos or videos
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    identifier?: string;
  }

  /**
   * Enumeration of PhotoSource type
   *
   * @enum { number } PhotoSource
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20
   */
  export enum PhotoSource {
    /**
     * all resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    ALL = 0,

    /**
     * camera resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    CAMERA = 1,

    /**
     * screenshot resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    SCREENSHOT = 2
  }

  /**
   * Enumeration status of thumbnail change.
   *
   * @enum { number } ThumbnailChangeStatus
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20
   */
  enum ThumbnailChangeStatus {
    /**
     * Thumbnail not exists.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    THUMBNAIL_NOT_EXISTS = 0,

    /**
     * Thumbnail have been newly created.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    THUMBNAIL_ADD = 1,

    /**
     * Thumbnail have been modified.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    THUMBNAIL_UPDATE = 2,

    /**
     * Thumbnail no change.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    THUMBNAIL_NOT_CHANGE = 3
  }

  /**
   * Enumeration of strong association types of photos.
   *
   * @enum { number } StrongAssociationType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20
   */
  enum StrongAssociationType {
    /**
     * Normal photo type.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    NORMAL = 0,
    /**
     * Cloud enhancement photo type.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    CLOUD_ENHANCEMENT = 1
  }

  /**
   * Defines the photo asset change infos.
   *
   * @interface PhotoAssetChangeInfos
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20
   */
  interface PhotoAssetChangeInfos {
    /**
     * Notification type of photo asset.
     *
     * @type { NotifyChangeType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    type: NotifyChangeType;

    /**
     * The changed asset datas.
     *
     * @type { PhotoAssetChangeData[] | null }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    assetChangeDatas: PhotoAssetChangeData[] | null;

    /**
     * Whether the application should recheck the photo asset infos that use to solve abnormal notification scenarios.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    isForRecheck: boolean;
  }

  /**
   * Defines the photo asset change data.
   *
   * @interface PhotoAssetChangeData
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20
   */
  interface PhotoAssetChangeData {
    /**
     * The photo asset info before change.
     *
     * @type { PhotoAssetChangeInfo | null }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    assetBeforeChange: PhotoAssetChangeInfo | null;

    /**
     * The photo asset info after change.
     *
     * @type { PhotoAssetChangeInfo | null }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    assetAfterChange: PhotoAssetChangeInfo | null;

    /**
     * Whether the photo asset content is changed.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    isContentChanged: boolean;

    /**
     * Whether the photo asset is deleted.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    isDeleted: boolean;

    /**
     * Thumbnail change status of The photo asset.
     *
     * @type { ThumbnailChangeStatus }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    thumbnailChangeStatus: ThumbnailChangeStatus;
    
    /**
     * The version of the photo asset info used to determine the order of notification changes.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    version: number;
  }

  /**
   * Defines the photo asset info.
   *
   * @interface PhotoAssetChangeInfo
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20
   */
  interface PhotoAssetChangeInfo {
    /**
     * The uri of photo asset.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    uri: string;

    /**
     * The media type of photo asset.
     *
     * @type { PhotoType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    mediaType: PhotoType;

    /**
     * The album uri of photo asset.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    albumUri: string;

    /**
     * The file id of photo asset.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    fileId: number;

    /**
     * The date day of photo asset.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    dateDay: string;

    /**
     * The favorite state of photo asset.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    isFavorite: boolean;

    /**
     * The hidden state of photo asset.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    isHidden: boolean;

    /**
     * The strong association value of photo asset.
     *
     * @type { StrongAssociationType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    strongAssociation: StrongAssociationType;

    /**
     * The visibility of photo asset thumbnail.
     *
     * @type { ThumbnailVisibility }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    thumbnailVisible: ThumbnailVisibility;

    /**
     * The trashed time of photo asset in milliseconds.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    dateTrashedMs: number;

    /**
     * The added time of photo asset in milliseconds.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    dateAddedMs: number;

    /**
     * The taken time of photo asset in milliseconds.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    dateTakenMs: number;

    /**
     * asset position.
     *
     * @type { ?PositionType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     */
    position?: PositionType;

    /**
     * Display name of photo asset.
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     */
    displayName?: string;

    /**
     * Size of photo asset.
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     */
    size?: number;
  }

  /**
   * Defines the album change infos.
   *
   * @interface AlbumChangeInfos
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20
   */
  interface AlbumChangeInfos {
    /**
     * Notification type of album.
     *
     * @type { NotifyChangeType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    type: NotifyChangeType;

    /**
     * The changed album datas.
     *
     * @type { AlbumChangeData[] | null }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    albumChangeDatas: AlbumChangeData[] | null;

    /**
     * Whether the application should recheck the album infos that use to solve abnormal notification scenarios.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    isForRecheck: boolean;
  }

  /**
   * Defines the album change data.
   *
   * @interface AlbumChangeData
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20
   */
  interface AlbumChangeData {
    /**
     * The album info before change.
     *
     * @type { AlbumChangeInfo | null }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    albumBeforeChange: AlbumChangeInfo | null;

    /**
     * The album info after change.
     *
     * @type { AlbumChangeInfo | null }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    albumAfterChange: AlbumChangeInfo | null;

    /**
     * The version of the album info used to determine the order of notification changes.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    version: number;
  }

  /**
   * Defines the album info.
   *
   * @interface AlbumChangeInfo
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20
   */
  interface AlbumChangeInfo {
    /**
     * Type of the album.
     *
     * @type { AlbumType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    albumType: AlbumType;

    /**
     * Subtype of the album.
     *
     * @type { AlbumSubtype }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    albumSubtype: AlbumSubtype;

    /**
     * Name of the album.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    albumName: string;

    /**
     * URI of the album.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    albumUri: string;

    /**
     * Number of images in the album.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    imageCount: number;

    /**
     * Number of videos in the album.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    videoCount: number;

    /**
     * Number of files in the album.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    count: number;

    /**
     * URI of the cover file of the album.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20
     */
    coverUri: string;

    /**
     * Number of hidden files in the album.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    hiddenCount: number;

    /**
     * URI of the hidden cover file of the album.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    hiddenCoverUri: string;

    /**
     * Change state of the cover content.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    isCoverChanged: boolean;

    /**
     * Change state of the hidden cover content in the album.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    isHiddenCoverChanged: boolean;

    /**
     * Change info of the cover file of the album.
     *
     * @type { ?PhotoAssetChangeInfo }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    coverInfo?: PhotoAssetChangeInfo;

    /**
     * Change info of the hidden cover file of the album.
     *
     * @type { ?PhotoAssetChangeInfo }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    hiddenCoverInfo?: PhotoAssetChangeInfo;

    /**
     * The order section of album asset.
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     */
    orderSection?: number;

    /**
     * The album order of album asset.
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     */
    albumOrder?: number;
  }

  /**
   * Gallery Form information.
   *
   * @interface GalleryFormInfo
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18
   */
  interface GalleryFormInfo {
    /**
     * Id of the form.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    formId: string;
    /**
     * uriList of the photo or album.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    assetUris?: Array<string>;
  }

  /**
   * Defines the Gallery widget information.
   *
   * @interface FormInfo
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface FormInfo {
    /**
     * Widget ID, which is provided when a widget is created in Gallery.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    formId: string;
    /**
     * URI of the image bound to the widget. When a widget is created, uri can be empty or the URI of an image.
     * When a widget is removed, uri is not verified and can be empty.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    uri: string;
  }

  /**
   * Enumeration types of data change.
   *
   * @enum { number } NotifyType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum NotifyType {
    /**
     * Data(assets or albums) have been newly created
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NOTIFY_ADD,
    /**
     * Data(assets or albums) have been modified
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NOTIFY_UPDATE,
    /**
     * Data(assets or albums) have been removed
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NOTIFY_REMOVE,
    /**
     * Assets have been added to an album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NOTIFY_ALBUM_ADD_ASSET,
    /**
     * Assets have been removed from an album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NOTIFY_ALBUM_REMOVE_ASSET
  }

  /**
   * Enumeration uris for registerChange.
   *
   * @enum { string } DefaultChangeUri
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum DefaultChangeUri {
    /**
     * Uri for default PhotoAsset, use with forDescendant{true}, will receive all PhotoAsset's change notifications
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DEFAULT_PHOTO_URI = 'file://media/Photo',
    /**
     * Uri for default Album, use with forDescendant{true}, will receive all Album's change notifications
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DEFAULT_ALBUM_URI = 'file://media/PhotoAlbum',
    /**
     * Uri for albums in hidden album view.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DEFAULT_HIDDEN_ALBUM_URI = 'file://media/HiddenAlbum'
  }

  /**
   * Defines the change data
   *
   * @interface ChangeData
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ChangeData {
    /**
     * The NotifyType of ChangeData
     *
     * @type { NotifyType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    type: NotifyType;
    /**
     * The changed uris
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    uris: Array<string>;
    /**
     * Change details of the asset uris to an album.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    extraUris: Array<string>;
    /**
     * sharedPhotoAssets of the same type
     * 
     * @type { Array<SharedPhotoAsset> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    sharedPhotoAssets: Array<SharedPhotoAsset>;
    /**
     * sharedAlbumAssets of the same type
     * 
     * @type { Array<SharedAlbumAsset> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    sharedAlbumAssets: Array<SharedAlbumAsset>;
    /**
     * sharedExtraPhotoAssets of the same type
     * 
     * @type { Array<SharedPhotoAsset> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    sharedExtraPhotoAssets: Array<SharedPhotoAsset>;
  }

  /**
   * PhotoViewMIMETypes represents the type of media resource that photo picker selects.
   *
   * @enum { string } PhotoViewMIMETypes
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * PhotoViewMIMETypes represents the type of media resource that photo picker selects.
   *
   * @enum { string } PhotoViewMIMETypes
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * PhotoViewMIMETypes represents the type of media resource that photo picker selects.
   *
   * @enum { string } PhotoViewMIMETypes
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum PhotoViewMIMETypes {
    /**
     * IMAGE_TYPE indicates that the selected media resources are images.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * IMAGE_TYPE indicates that the selected media resources are images.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * IMAGE_TYPE indicates that the selected media resources are images.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    IMAGE_TYPE = 'image/*',
    /**
     * VIDEO_TYPE indicates that the selected media resources are videos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * VIDEO_TYPE indicates that the selected media resources are videos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * VIDEO_TYPE indicates that the selected media resources are videos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    VIDEO_TYPE = 'video/*',
    /**
     * IMAGE_VIDEO_TYPE indicates that the selected media resources are images and videos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * IMAGE_VIDEO_TYPE indicates that the selected media resources are images and videos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * IMAGE_VIDEO_TYPE indicates that the selected media resources are images and videos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    IMAGE_VIDEO_TYPE = '*/*',

    /**
     * MOVING_PHOTO_IMAGE_TYPE indicates that the selected media resources are moving photos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    MOVING_PHOTO_IMAGE_TYPE = 'image/movingPhoto'
  }

  /**
   * Enumeration type of filter operator.
   *
   * @enum { number } FilterOperator
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19
   */
  export enum FilterOperator {
    /**
     * Filter operator: equal to
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    EQUAL_TO = 0,
    /**
     * Filter operator: not equal to
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    NOT_EQUAL_TO = 1,
    /**
     * Filter operator: more than
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    MORE_THAN = 2,
    /**
     * Filter operator: less than
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    LESS_THAN = 3,
    /**
     * Filter operator: more than or equal to
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    MORE_THAN_OR_EQUAL_TO = 4,
    /**
     * Filter operator: less than or equal to
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    LESS_THAN_OR_EQUAL_TO = 5,
    /**
     * Filter operator: between
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    BETWEEN = 6,
  }

    /**
     * Enumeration type of single selection mode
     *
     * @enum { number } SingleSelectionMode
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18
     */
  export enum SingleSelectionMode {
    /**
     * browser mode
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18
     */
    BROWSER_MODE = 0,
    /**
     * select directly mode
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18
     */
    SELECT_MODE = 1,
    /**
     * browser and select mode
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18
     */
    BROWSER_AND_SELECT_MODE = 2
  }

  /**
   * Class BaseSelectOptions, which is extracted from class PhotoSelectOptions
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class BaseSelectOptions {
    /**
     * The Type of the file in the picker window.
     *
     * @type { ?PhotoViewMIMETypes }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * The Type of the file in the picker window.
     *
     * @type { ?PhotoViewMIMETypes }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The Type of the file in the picker window.
     * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
     *
     * @type { ?PhotoViewMIMETypes }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    MIMEType?: PhotoViewMIMETypes;

    /**
     * Maximum number of images for a single selection.
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Maximum number of images for a single selection.
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Maximum number of images for a single selection.
     * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    maxSelectNumber?: number;

    /**
     * Support search.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Support search.
     * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    isSearchSupported?: boolean;

    /**
     * Support taking photos.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Support taking photos.
     * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    isPhotoTakingSupported?: boolean;

    /**
    * The recommendation options when use recommendation photo function.
    *
    * @type { ?RecommendationOptions }
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @atomicservice
    * @since 11
    */
    /**
     * The recommendation options when use recommendation photo function.
     * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
     *
     * @type { ?RecommendationOptions }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    recommendationOptions?: RecommendationOptions;

    /**
     * The uri for the preselected files.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The uri for the preselected files.
     * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    preselectedUris?: Array<string>;

    /**
     * Support preview in single selection mode or not
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    isPreviewForSingleSelectionSupported?: boolean;

    /**
     * The mode of single selection
     *
     * @type { ?SingleSelectionMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18
     */
    singleSelectionMode?: SingleSelectionMode;

    /**
     * Media file filtering configuration.
     *
     * @type { ?MimeTypeFilter }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    mimeTypeFilter?: MimeTypeFilter;

    /**
     * Media file size filtering configuration.
     *
     * @type { ?FileSizeFilter }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    fileSizeFilter?: FileSizeFilter;

    /**
     * Media file video duration filtering configuration.
     *
     * @type { ?VideoDurationFilter }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    videoDurationFilter?: VideoDurationFilter;

    /**
     * Configures filter conditions as a string array, supporting multiple combined 
     * conditions to specify supported file types. When this parameter is set, the 
     * original file type configuration parameters `MIMEType` and `mimeTypeFilter` become invalid.
     * 
     * @type { ?Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    combinedMediaTypeFilter?: Array<string>;

    /**
     * Media file type and size combined filtering configuration. The array supports a maximum length of 3. 
     * Setting this parameter will cause the `fileSizeFilter` and `MIMEType` parameters to be ignored.
     *
     * @type { ?Array<PhotoViewMimeTypeFileSizeFilter> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    photoViewMimeTypeFileSizeFilters?: Array<PhotoViewMimeTypeFileSizeFilter>;
  }

  /**
   * Media file filtering configuration.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19
   */
  class MimeTypeFilter {
    /**
     * Indicates the media file type to be filtered.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    mimeTypeArray: Array<string>;
  }

  /**
   * Media file size filtering configuration.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19
   */
    class FileSizeFilter {
      /**
       * Specifing filter operator.
       *
       * @type { FilterOperator }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 19
       */
      filterOperator: FilterOperator;

      /**
       * Specifing the size of files to be filtered.
       *
       * @type { number }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 19
       */
      fileSize: number;

      /**
       * Specifing the upper limit of file size to be filtered.
       *
       * @type { ?number }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 19
       */
      extraFileSize?: number;
    }

  /**
   * Media file video duration filtering configuration.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19
   */
  class VideoDurationFilter {
      /**
       * Specifing filter operator.
       *
       * @type { FilterOperator }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 19
       */
      filterOperator: FilterOperator;

      /**
       * Specifing the video duration of files to be filtered.
       *
       * @type { number }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 19
       */
      videoDuration: number;

      /**
       * Specifing the upper limit of video duration to be filtered.
       *
       * @type { ?number }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 19
       */
      extraVideoDuration?: number;
  }

  /**
   * Media file video duration filtering configuration.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20
   */
    class PhotoViewMimeTypeFileSizeFilter {
      /**
       * Specifing filter Type.
       *
       * @type { PhotoViewMIMETypes }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 20
       */
      photoViewMimeType: PhotoViewMIMETypes;
  
      /**
       * Specifing file size filtering configuration.
       *
       * @type { FileSizeFilter }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 20
       */
      sizeFilter: FileSizeFilter;
    }

  /**
   * PhotoSelectOptions Object
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * PhotoSelectOptions Object
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * PhotoSelectOptions extends base class BaseSelectOptions
   *
   * @extends BaseSelectOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class PhotoSelectOptions extends BaseSelectOptions {
    /**
     * Support editing photos.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    isEditSupported?: boolean;

    /**
     * Support select original photo or not
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    isOriginalSupported?: boolean;

    /**
     * SubWindow name
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    subWindowName?: string;

    /**
     * Theme color
     *
     * @type { ?CustomColors }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12
     */
    themeColor?: CustomColors;

    /**
     * Complete button text
     *
     * @type { ?CompleteButtonText }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14
     */
    completeButtonText?: CompleteButtonText;

    /**
     * user id
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    userId?: number;
  }

  /**
   * Defines the image recommendation options.
   * The image recommendation feature depends on the image data analysis capability, which varies with devices.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class RecommendationOptions {
    /**
     * Type of the recommended image.
     *
     * @type { ?RecommendationType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    recommendationType?: RecommendationType;

    /**
     * Text based on which images are recommended.
     * If both recommendationType and textContextInfo are set, textContextInfo takes precedence over recommendationType.
     *
     * @type { ?TextContextInfo }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    textContextInfo?: TextContextInfo;
  }

  /**
   * Represents the text information about the recommended images.
   *
   * @interface TextContextInfo
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface TextContextInfo {
    /**
     * Text based on which images are recommended.
     * The text cannot exceed 250 characters. The default value is an empty string.
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    text?: string;
  }

  /**
   * Defines information about the images or videos selected.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Defines information about the images or videos selected.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Defines information about the images or videos selected.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class PhotoSelectResult {
    /**
     * URIs of the images or videos selected. The URI array can be used only by calling photoAccessHelper.getAssets with temporary authorization.
     * For details about how to use the media file URI, see Using a Media File URI.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * URIs of the images or videos selected. The URI array can be used only by calling photoAccessHelper.getAssets with temporary authorization.
     * For details about how to use the media file URI, see Using a Media File URI.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * URIs of the images or videos selected. The URI array can be used only by calling photoAccessHelper.getAssets with temporary authorization.
     * For details about how to use the media file URI, see Using a Media File URI.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    photoUris: Array<string>;

    /**
     * Whether the selected media asset is the original image.
     * The value true means that the selected media asset is the original image, and false means the opposite.
     * The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Whether the selected media asset is the original image.
     * The value true means that the selected media asset is the original image, and false means the opposite.
     * The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Whether the selected media asset is the original image.
     * The value true means that the selected media asset is the original image, and false means the opposite.
     * The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isOriginalPhoto: boolean;
  }

  /**
   * Provides APIs for the user to select images and videos.
   * Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Provides APIs for the user to select images and videos.
   * Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Provides APIs for the user to select images and videos.
   * Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class PhotoViewPicker {
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { PhotoSelectOptions } [option] - represents the options provided in select mode.
     * @returns { Promise<PhotoSelectResult> } Returns the uris for the selected files.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { PhotoSelectOptions } [option] - represents the options provided in select mode.
     * @returns { Promise<PhotoSelectResult> } Returns the uris for the selected files.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { PhotoSelectOptions } [option] - represents the options provided in select mode.
     * @returns { Promise<PhotoSelectResult> } Returns the uris for the selected files.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    select(option?: PhotoSelectOptions): Promise<PhotoSelectResult>;

    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { PhotoSelectOptions } option - represents the options provided in select mode.
     * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { PhotoSelectOptions } option - represents the options provided in select mode.
     * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { PhotoSelectOptions } option - represents the options provided in select mode.
     * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>): void;

    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    select(callback: AsyncCallback<PhotoSelectResult>): void;
  }

  /**
   * Represents the edited media asset data.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class MediaAssetEditData {
    /**
     * Constructor.
     *
     * @param { string } compatibleFormat - Format of the edited data.
     * @param { string } formatVersion - Version of the data format.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    constructor(compatibleFormat: string, formatVersion: string);

    /**
     * Compatible format
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    compatibleFormat: string;

    /**
     * Format version
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    formatVersion: string;

    /**
     * Edit data
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    data: string;
  }

  /**
   * Enumerates the types of the resources to write.
   *
   * @enum { number } ResourceType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum ResourceType {
    /**
     * Image resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    IMAGE_RESOURCE = 1,

    /**
     * Video resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    VIDEO_RESOURCE = 2,

    /**
     * Photo proxy
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PHOTO_PROXY = 3,

    /**
     * Private moving photo resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PRIVATE_MOVING_PHOTO_RESOURCE = 4,

    /**
     * Private moving photo metadata
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    PRIVATE_MOVING_PHOTO_METADATA = 5
  }

  /**
   * Enumerates the types of image files to save.
   *
   * @enum { number } ImageFileType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum ImageFileType {
    /**
     * JPEG
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    JPEG = 1,

    /**
     * HEIF
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    HEIF = 2
  }
    
  /**
   * Enumeration of moving photo effect mode.
   *
   * @enum { number } MovingPhotoEffectMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum MovingPhotoEffectMode {
    /**
     * Default
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DEFAULT = 0,

    /**
     * Bounce play
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    BOUNCE_PLAY = 1,

    /**
     * Loop play
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    LOOP_PLAY = 2,

    /**
     * Long exposure
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    LONG_EXPOSURE = 3,

    /**
     * Multi exposure
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    MULTI_EXPOSURE = 4,

    /**
     * Cinema graph
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CINEMA_GRAPH = 5,

    /**
     * Image only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    IMAGE_ONLY = 10
  }

  /**
   * Enumerates the types of segmented video enhancement.
   * 
   * @enum { number } VideoEnhancementType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
  */
  enum VideoEnhancementType {
    /**
     * Apply enhancement on the device.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    QUALITY_ENHANCEMENT_LOCAL = 0,

    /**
     * Apply enhancement on the cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    QUALITY_ENHANCEMENT_CLOUD = 1,

    /**
     * Apply enhancement on both the device and cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    QUALITY_ENHANCEMENT_LOCAL_AND_CLOUD = 2
  }

  /**
   * Defines the interface of media change request.
   *
   * @interface MediaChangeRequest
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface MediaChangeRequest {}

  /**
   * Defines the class of media asset change request.
   *
   * @implements MediaChangeRequest
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class MediaAssetChangeRequest implements MediaChangeRequest {
    /**
     * Constructor used to initialize an asset change request.
     *
     * @param { PhotoAsset } asset - Assets to change.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Constructor used to initialize an asset change request.
     *
     * @param { PhotoAsset } asset - Assets to change.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor(asset: PhotoAsset);

    /**
     * Creates an image asset change request.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } fileUri - Data source of the image asset, which is specified by a URI in the application sandbox directory. 
     * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Creates an image asset change request.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } fileUri - Data source of the image asset, which is specified by a URI in the application sandbox directory. 
     * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static createImageAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest;

    /**
     * Creates a video asset change request.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } fileUri - Data source of the video asset, which is specified by a URI in the application sandbox directory.
     * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static createVideoAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest;

    /**
     * Creates an asset change request with the specified file name.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } displayName - File name of the image or video to create.
     * @param { PhotoCreateOptions } [options] - Options for creating an image or video asset.
     * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static createAssetRequest(context: Context, displayName: string, options?: PhotoCreateOptions): MediaAssetChangeRequest;

    /**
     * Create an asset change request based on the file type and filename extension.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } [options] - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
     * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static createAssetRequest(context: Context, photoType: PhotoType, extension: string, options?: CreateOptions): MediaAssetChangeRequest;

    /**
     * Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<PhotoAsset> } assets - Array of assets to delete.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static deleteAssets(context: Context, assets: Array<PhotoAsset>): Promise<void>;

    /**
     * Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<string> } uriList - URIs of the media files to delete.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000002 - The uri format is incorrect or does not exist.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static deleteAssets(context: Context, uriList: Array<string>): Promise<void>;

    /**
     * Get the asset.
     *
     * @returns { PhotoAsset } - Returns the asset
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Obtains the asset in this asset change request.
     *
     * @returns { PhotoAsset } - Returns the asset
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAsset(): PhotoAsset;

    /**
     * Set favorite state of the asset.
     *
     * @param { boolean } favoriteState - true: Put the asset into favorite album; false: Remove the asset from favorite album.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setFavorite(favoriteState: boolean): void;

    /**
     * Set hidden state of the asset.
     *
     * @param { boolean } hiddenState - true: Put the asset into hidden album; false: Recover the asset from hidden album.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setHidden(hiddenState: boolean): void;

    /**
     * Set user comment of the asset.
     *
     * @param { string } userComment - user comment info
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setUserComment(userComment: string): void;

    /**
     * Sets location information.
     *
     * @param { number } longitude - Longitude.
     * @param { number } latitude - Latitude.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setLocation(longitude: number, latitude: number): void;

    /**
     * Sets the media asset title.
     *
     * @param { string } title - Title to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Sets the media asset title.
     *
     * @param { string } title - Title to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setTitle(title: string): void;

    /**
     * Saves the edited data of an asset.
     *
     * @param { MediaAssetEditData } editData - Edited data to save.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setEditData(editData: MediaAssetEditData): void;

    /**
     * Obtains the handler used for writing a file to cache.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<number> } Returns the write cache handler
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getWriteCacheHandler(): Promise<number>;

    /**
     * Adds a resource using fileUri.
     *
     * @param { ResourceType } type - Type of the resource to add.
     * @param { string } fileUri - Data source of the resource to be added, which is specified by a URI in the application sandbox directory.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    addResource(type: ResourceType, fileUri: string): void;

    /**
     * Adds a resource using ArrayBuffer data.
     *
     * @param { ResourceType } type - Type of the resource to add.
     * @param { ArrayBuffer } data - Data of the resource to add.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    addResource(type: ResourceType, data: ArrayBuffer): void;

    /**
     * Adds resources using PhotoProxy data.
     *
     * @param { ResourceType } type - Type of the resource to add.
     * @param { PhotoProxy } proxy - PhotoProxy data of the resource to add.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    addResource(type: ResourceType, proxy: PhotoProxy): void;

    /**
     * Sets the Key for the Ultra Snapshot feature, which allows the camera to take photos or record videos with the screen off.
     *
     * @param { string } cameraShotKey - Key for the Ultra Snapshot feature.
     * <br>This parameter is available only for the system camera, and the key value is defined by the system camera.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setCameraShotKey(cameraShotKey: string): void;

    /**
     * Saves the photo taken by the camera.
     *
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    saveCameraPhoto(): void;

    /**
     * Saves the photo taken by the camera.
     *
     * @param { ImageFileType } imageFileType - File type of the photo to save.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    saveCameraPhoto(imageFileType: ImageFileType): void;

    /**
     * Discards the photo taken by the camera.
     *
     * @throws { BusinessError } 14000011 - Internal system error
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    discardCameraPhoto(): void;

    /**
     * Sets the effect of this moving photo.
     *
     * @param { MovingPhotoEffectMode } mode - Effect to set.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setEffectMode(mode: MovingPhotoEffectMode): void;

    /**
     * Sets the orientation of this image.
     *
     * @param { number } orientation - Rotation angle of the image to set. The value can only be 0, 90, 180, or 270.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15
     */
    setOrientation(orientation: number): void;

    /**
     * Set video enhancement attribute
     * 
     * @param { VideoEnhancementType } videoEnhancementType - The type of video enhancement
     * @param { string } photoId - The photo id of video
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
    */
    setVideoEnhancementAttr(videoEnhancementType: VideoEnhancementType, photoId: string): void;

    /**
     * Sets the watermark type supported by photos.
     *
     * @param { WatermarkType } watermarkType - Watermark type to set.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setSupportedWatermarkType(watermarkType: WatermarkType): void;

    /**
     * Permanently deletes photos or videos in batches. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<PhotoAsset> } assets - Array of images or videos to be permanently deleted.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    static deleteLocalAssetsPermanently(context: Context, assets: Array<PhotoAsset>): Promise<void>;

    /**
     * Delete local assets permanently from the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Hap context information
     * @param { Array<string> } assetUris - Uris of the assets to be deleted permanently
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19
     */
    static deleteLocalAssetsPermanentlyWithUri(context: Context, assetUris: Array<string>): Promise<void>;

    /**
     * Set the AppLink state of this asset.
     *
     * @param { int } hasAppLink - AppLink state of the asset to set.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21
     * @arkts 1.1&1.2
     */
    setHasAppLink(hasAppLink: int): void;

    /**
     * Set the AppLink info of this asset.
     *
     * @param { string } appLink - AppLink info of the asset to set.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21
     * @arkts 1.1&1.2
     */
    setAppLinkInfo(appLink: string): void;
  }

  /**
   * Defines the class of media assets change request.
   *
   * @implements MediaChangeRequest
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class MediaAssetsChangeRequest implements MediaChangeRequest {
    /**
     * Constructor.
     *
     * @param { Array<PhotoAsset> } assets - Assets to change.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor(assets: Array<PhotoAsset>);

    /**
     * Set favorite state of the assets.
     *
     * @param { boolean } favoriteState - true: Put the assets into favorite album; false: Remove the assets from favorite album.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setFavorite(favoriteState: boolean): void;

    /**
     * Set hidden state of the assets.
     *
     * @param { boolean } hiddenState - true: Put the assets into hidden album; false: Recover the assets from hidden album.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setHidden(hiddenState: boolean): void;

    /**
     * Set user comment of the assets.
     *
     * @param { string } userComment - user comment info
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setUserComment(userComment: string): void;

    /**
     * Sets whether this asset is displayed in the Recent list.
     *
     * @param { boolean } isRencentShow - Whether this asset is displayed in the Recent list.
     * <br>The value true means this asset is displayed in the Recent list, and false means the opposite.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    setIsRecentShow(isRencentShow: boolean): void;
  }

  /**
   * Defines the class of media album change request.
   *
   * @implements MediaChangeRequest
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class MediaAlbumChangeRequest implements MediaChangeRequest {
    /**
     * The constructor to create a MediaAlbumChangeRequest instance.
     *
     * @param { Album } album - Specify which album to change
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor(album: Album);

    /**
     * Creates a MediaAlbumChangeRequest instance.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } name - Name of the album.
     * @returns { MediaAlbumChangeRequest } - Returns a MediaAlbumChangeRequest instance
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static createAlbumRequest(context: Context, name: string): MediaAlbumChangeRequest;

    /**
     * Deletes albums. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<Album> } albums - Albums to delete.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static deleteAlbums(context: Context, albums: Array<Album>): Promise<void>;

    /**
     * Delete albums With Uri.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Hap context information
     * @param { Array<string> } albumUris - Uris of albums to delete
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out;
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19
     */
    static deleteAlbumsWithUri(context: Context, albumUris: Array<string>): Promise<void>;

    /**
     * Obtains the album in the current album change request.
     *
     * @returns { Album } - Returns the album
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAlbum(): Album;

    /**
     * Sets the album cover.
     *
     * @param { string } coverUri - URI of the file to be set as the album cover.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setCoverUri(coverUri: string): void;

    /**
     * Sets the album name.
     *
     * @param { string } name - Album name to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setAlbumName(name: string): void;

    /**
     * Add assets to the album.
     *
     * @param { Array<PhotoAsset> } assets - Array of assets to add.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    addAssets(assets: Array<PhotoAsset>): void;

    /**
     * Removes assets from the album.
     *
     * @param { Array<PhotoAsset> } assets - Array of assets to remove.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    removeAssets(assets: Array<PhotoAsset>): void;

    /**
     * Moves assets to another album.
     *
     * @param { Array<PhotoAsset> } assets - Assets to move.
     * @param { Album } targetAlbum - Album to which the assets are to be moved.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    moveAssets(assets: Array<PhotoAsset>, targetAlbum: Album): void;

    /**
     * Move assets to the target album.
     *
     * @param { Array<string> } assetUris - Uris of assets to move
     * @param { Album } targetAlbum - target album
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19
     */
    moveAssetsWithUri(assetUris: Array<string>, targetAlbum: Album): void;

    /**
     * Recovers assets from the trash.
     *
     * @param { Array<PhotoAsset> } assets - Assets to recover.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    recoverAssets(assets: Array<PhotoAsset>): void;

    /**
     * Recover assets from the trash album.
     *
     * @param { Array<string> } assetUris - Uris of assets to recover
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19
     */
    recoverAssetsWithUri(assetUris: Array<string>): void;

    /**
     * Permanently deletes assets from the trash.
     *
     * @param { Array<PhotoAsset> } assets - Assets to be permanently deleted.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    deleteAssets(assets: Array<PhotoAsset>): void;

    /**
     * Delete assets permanently from the trash album.
     *
     * @param { Array<string> } assetUris - Uris of assets to be deleted permanently
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19
     */
    deleteAssetsWithUri(assetUris: Array<string>): void;

    /**
     * Set portrait album to me
     *
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setIsMe(): void;

    /**
     * Set display level of the portrait album
     *
     * @param { number } displayLevel - The level of display interface for portrait albums, such as homepage and more pages
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setDisplayLevel(displayLevel: number): void;

    /**
     * Remove assets from the smart album
     *
     * @param { Array<PhotoAsset> } assets - Assets to remove.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dismissAssets(assets: Array<PhotoAsset>): void;

    /**
     * Merge two portrait albums
     *
     * @param { Album } target - Album generated after the merge. The album must be renamed.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    mergeAlbum(target: Album): void;

    /**
     * Places this album before an album.
     *
     * @param { Album } album - Target album. To place this album to the end, set album to null.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    placeBefore(album: Album): void;

    /**
     * Removes this group photo album.
     *
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dismiss(): void;

    /**
     * reset the album cover.
     *
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     * <br>Possible causes:1. Database corrupted.2. The file system is abnormal.3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    resetCoverUri(): void;
  }

  /**
   * Defines the shared photo asset
   *
   * @interface SharedPhotoAsset
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface SharedPhotoAsset {
    /**
     * File id of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    fileId: number;
    /**
     * URI of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    uri: string;
    /**
     * Path data of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    data: string;
    /**
     * Media type of photo asset
     *
     * @type { PhotoType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    mediaType: PhotoType;
    /**
     * Display name of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    displayName: string;
    /**
     * Size of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    size: number;
    /**
     * Added date of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dateAdded: number;
    /**
     * Modify date of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dateModified: number;
    /**
     * Duration of video photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    duration: number;
    /**
     * Width of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    width: number;
    /**
     * Height of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    height: number;
    /**
     * DateTaken of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dateTaken: number;
    /**
     * Orientation of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    orientation: number;
    /**
     * Favorite state of photo asset
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    isFavorite: boolean;
    /**
     * Title of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    title: string;
    /**
     * Position of photo asset
     *
     * @type { PositionType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    position: PositionType;
    /**
     * Trashed date of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dateTrashed: number;
    /**
     * Hidden state of photo asset
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    hidden: boolean;
    /**
     * User comment info of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    userComment: string;
    /**
     * Camera shot key of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    cameraShotKey: string;
    /**
     * The year of the file created
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dateYear: string;
    /**
     * The month of the file created
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dateMonth: string;
    /**
     * The day of the file created
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dateDay: string;
    /**
     * Pending state of the asset, true means asset is pending
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    pending: boolean;
    /**
     * Added date of photo asset in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dateAddedMs: number;
    /**
     * Modified time of the asset in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dateModifiedMs: number;
    /**
     * Trashed time of the asset in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dateTrashedMs: number;
    /**
     * Subtype of photo asset
     *
     * @type { PhotoSubtype }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    subtype: PhotoSubtype;
    /**
     * Effect mode of moving photo
     * 
     * @type { MovingPhotoEffectMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    movingPhotoEffectMode: MovingPhotoEffectMode;
    /**
     * Dynamic range type of the asset
     *
     * @type { DynamicRangeType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    dynamicRangeType: DynamicRangeType;
    /**
     * Ready state of thumbnail
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    thumbnailReady: boolean;
    /**
     * Width and height information of lcd picture
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    lcdSize: string;
    /**
     * Width and height information of thumbnail picture
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    thmSize: string;
    /**
     * modified time of thumbnail status
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    thumbnailModifiedMs?: number;
    /**
     * visibility of thumbnails
     *
     * @type { ThumbnailVisibility }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    thumbnailVisible: ThumbnailVisibility;
  }

  /**
   * Defines the shared album asset
   *
   * @interface SharedAlbumAsset
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14
   */
    interface SharedAlbumAsset {
      /**
       * album id of album asset
       *
       * @type { number }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14
       */
      albumId: number;
      /**
       * type of album asset
       *
       * @type { AlbumType }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14
       */
      albumType: AlbumType;
      /**
       * subtype of album asset
       *
       * @type { AlbumSubtype }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14
       */
      albumSubType: AlbumSubtype;
      /**
       * album name
       *
       * @type { string }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14
       */
      albumName: string;
      /**
       * uri of album cover
       *
       * @type { string }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14
       */
      coverUri: string;
      /**
       * number of assets in this album
       *
       * @type { number }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14
       */
      count: number;
      /**
       * number of photo assets in this album
       *
       * @type { number }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14
       */
      imageCount: number;
      /**
       * number of video assets in this album
       *
       * @type { number }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14
       */
      videoCount: number;
    }

  /**
   * Provides APIs for managing a moving photo instance.
   *
   * @interface MovingPhoto
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface MovingPhoto {
    /**
     * Requests the image data and video data of this moving photo and writes them to the specified URIs, respectively.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } imageFileUri - URI to which the image data of the moving photo is to be written.
     * @param { string } videoFileUri - URI to which the video data of the moving photo is to be written.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    requestContent(imageFileUri: string, videoFileUri: string): Promise<void>;

    /**
     * Requests the moving photo content of the specified resource type and writes it to the specified URI.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { ResourceType } resourceType - Resource type of the moving photo content to request.
     * @param { string } fileUri - URI to which the moving photo content is to be written.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    requestContent(resourceType: ResourceType, fileUri: string): Promise<void>;

    /**
     * Requests the moving photo content of the specified resource type and returns it in ArrayBuffer format.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { ResourceType } resourceType - Resource type of the moving photo content to request.
     * @returns { Promise<ArrayBuffer> } Returns array buffer of the content
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    requestContent(resourceType: ResourceType): Promise<ArrayBuffer>;

    /**
     * Obtains the URI of this moving photo.
     *
     * @returns { string } Returns uri of the moving photo
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getUri(): string;

    /**
     * Check if the video of the moving photo is ready.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<boolean> } Returns whether the video is ready
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    isVideoReady(): Promise<boolean>;
  }

  /**
   * Enumerates the types of the highlights album information.
   *
   * @enum { number } HighlightAlbumInfoType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum HighlightAlbumInfoType {
    /**
     * Cover information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    COVER_INFO = 0,
    /**
     * Music information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PLAY_INFO = 1,
    /**
     * Highlight Album information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'21','1.2':'22'}
     * @arkts 1.1&1.2
     */
    ALBUM_INFO = 2
  }

  /**
   * Enumerates the user behavior types of the highlights album.
   *
   * @enum { number } HighlightUserActionType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum HighlightUserActionType {
    /**
     * Number of inserted pictures.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    INSERTED_PIC_COUNT = 0,
    /**
     * Number of removed pictures.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    REMOVED_PIC_COUNT,
    /**
     * Number of times that a full-length image in a highlights album is shared.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SHARED_SCREENSHOT_COUNT,
    /**
     * Number of times that a highlights cover is shared.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SHARED_COVER_COUNT,
    /**
     * Number of times that a highlights album is renamed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    RENAMED_COUNT,
    /**
     * Number of times that a cover is changed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CHANGED_COVER_COUNT,
    /**
     * Number of times that the pictures in a highlights album are played.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    RENDER_VIEWED_TIMES = 100,
    /**
     * Time used to play the pictures in a highlights album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    RENDER_VIEWED_DURATION,
    /**
     * Number of times that a highlights album is viewed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ART_LAYOUT_VIEWED_TIMES,
    /**
     * Time used to view a highlights album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ART_LAYOUT_VIEWED_DURATION
  }

  /**
   * Enumerates the types of the highlights album attribute which can be set.
   *
   * @enum { number } HighlightAlbumChangeAttribute
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'21','1.2':'22'}
   * @arkts 1.1&1.2
   */
  enum HighlightAlbumChangeAttribute {
    /**
     * The highlight has been viewed or not.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'21','1.2':'22'}
     * @arkts 1.1&1.2
     */
    IS_VIEWED = 0,

    /**
     * Time of this highlight notification.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'21','1.2':'22'}
     * @arkts 1.1&1.2
     */
    NOTIFICATION_TIME = 1,

    /**
     * Favorite of this highlight album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'21','1.2':'22'}
     * @arkts 1.1&1.2
     */
    IS_FAVORITE = 2
  }

  /**
   * Enumerates thumbnail types.
   *
   * @enum { number } ThumbnailType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum ThumbnailType {
    /**
     * LCD thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    LCD = 1,
    /**
     * THM thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    THM = 2
  }

  /**
   * Defines the class of media analysis album change request.
   *
   * @extends MediaAlbumChangeRequest
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi 
   * @since 18
   */
   class MediaAnalysisAlbumChangeRequest extends MediaAlbumChangeRequest {
    /**
     * The constructor to create a MediaAnalysisAlbumChangeRequest instance.
     * 
     * @param { Album } album - Album
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi 
     * @since 18
     */
    constructor(album: Album);

    /**
     * Set order positions of assets in the album
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets in the album for which the sequence needs to be set.
     * @param { Array<number> } position - Sequence of assets in the album.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi 
     * @since 18
     */
    setOrderPosition(assets: Array<PhotoAsset>, position: Array<number>): void;

    /**
     * Set the relationship in the album with the phone owner
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } relationship - The relationship with the phone owner
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The input parameter is not within the valid range. 
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi 
     * @since 21
     * @arkts 1.1&1.2
     */
     setRelationship(relationship: string): Promise<void>;
  }

  /**
   * Defines the class of media highlight album change request.
   *
   * @extends MediaAnalysisAlbumChangeRequest
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'21','1.2':'22'}
   * @arkts 1.1&1.2
   */
  class MediaHighlightAlbumChangeRequest extends MediaAnalysisAlbumChangeRequest {
    /**
     * The constructor to create a MediaHighlightAlbumChangeRequest instance.
     *
     * @param { Album } album - Album
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'21','1.2':'22'}
     * @arkts 1.1&1.2
     */
    constructor(album: Album);

    /**
     * Set attribute values of highlight album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { HighlightAlbumChangeAttribute } attribute - Highlight attribute to be set.
     * @param { string } value - Value of attribute.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'21','1.2':'22'}
     * @arkts 1.1&1.2
     */
    setHighlightAttribute(attribute: HighlightAlbumChangeAttribute, value: string): void;
  }

  /**
   * Analysis album to create.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi 
   * @since 18
   */
  class AnalysisAlbum {
    /**
     * The constructor to create an analysisAlbum instance.
     *
     * @param { Album } album - Album
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi 
     * @since 18
     */
    constructor(album: Album);
    /**
     * Obtains the sequence of assets in the Analysis album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets in the album whose sequence needs to be obtained.
     * @returns { Promise<Array<number>> } Returns the order of positions of assets
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi 
     * @since 18
     */
    getOrderPosition(assets: Array<PhotoAsset>): Promise<Array<number>>;

    /**
     * Get the relationship in the album with the phone owner
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Returns the relationship of the album with the phone owner
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi 
     * @since 21
     * @arkts 1.1&1.2
     */
     getRelationship(): Promise<string>;
  }

  /**
   * Provides APIs for managing the Highlights album, which is an automatically generated collection of memorable photos or videos.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi 
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class HighlightAlbum {
    /**
     * The constructor to create a highlight instance.
     *
     * @param { Album } album - Analysis album
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi 
     * @since 12
     */
    constructor(album: Album);

    /**
     * Obtains specific information about the Highlights album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { HighlightAlbumInfoType } type - Type of the album information to obtain.
     * @returns { Promise<string> } Returns highlight album info into a json string
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12
     */
    getHighlightAlbumInfo(type: HighlightAlbumInfoType): Promise<string>;

    /**
     * Obtains the ArrayBuffer for caching the specified asset.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } resourceUri - URI of the asset to cache.
     * @returns { Promise<ArrayBuffer> } Returns array buffer of the content
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12
     */
    getHighlightResource(resourceUri: string): Promise<ArrayBuffer>;

    /**
     * Sets the user behavior data for the Highlights album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { HighlightUserActionType } type - Type of the user behavior data to set.
     * @param { number } actionData - Behavior data.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi 
     * @since 12
     */
    setHighlightUserActionData(type: HighlightUserActionType, actionData: number): Promise<void>;

    /**
     * Set highlight sub title
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } subTitle - Highlight sub title
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi 
     * @since 18
     */
    setSubTitle(subTitle: string): Promise<void>;

    /**
     * Deletes highlight albums.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<Album> } albums - Array of highlight albums to delete.
     * @returns { Promise<number> } Returns result of delete highlight album
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi 
     * @since 18
     */
    static deleteHighlightAlbums(context: Context, albums: Array<Album>): Promise<number>;
  }

  /**
   * Enumerates the cloud enhancement task states, which are returned by CloudEnhancementTaskState.
   * 
   * @enum { number } CloudEnhancementTaskStage
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum CloudEnhancementTaskStage {
    /**
     * The cloud enhancement task is abnormal.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TASK_STAGE_EXCEPTION = -1,
    /**
     * The cloud enhancement task is being prepared.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TASK_STAGE_PREPARING,
    /**
     * The cloud enhancement task is uploading data.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TASK_STAGE_UPLOADING,
    /**
     * The cloud enhancement task is being executed.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TASK_STAGE_EXECUTING,
    /**
     * The cloud enhancement task is downloading data.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TASK_STAGE_DOWNLOADING,
    /**
     * The cloud enhancement task failed.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TASK_STAGE_FAILED,
    /**
     * The cloud enhancement task is complete.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TASK_STAGE_COMPLETED
  }

  /**
   * Represents the cloud enhancement task information,
   * which includes the cloud enhancement task state and other information related to certain states.
   * 
   * @interface CloudEnhancementTaskState
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface CloudEnhancementTaskState {
    /**
     * Indicates the cloud enhancement task stage.
     * 
     * @type { CloudEnhancementTaskStage }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly taskStage: CloudEnhancementTaskStage;
    /**
     * Indicates the transferred file size.
     * 
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly transferredFileSize?: number;
    /**
     * Indicates the total file size.
     * 
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly totalFileSize?: number;
    /**
     * Indicates the expected duration of cloud enhancement queue time.
     * 
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly expectedDuration?: number;
    /**
     * Status code when failed in cloud enhancement.
     * 
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly statusCode?: number;
  }

  /**
   * Provides APIs for cloud enhancement management,
   * including managing the tasks of generating AI-powered cloud enhancement photos
   * and obtaining the association between the original photos and AI cloud enhancement photos.
   * 
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class CloudEnhancement {
    /**
     * Obtains a cloud enhancement instance.
     * 
     * @param { Context } context - Context of the ability instance.
     * @returns { CloudEnhancement } Returns cloud enhancement instance
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    static getCloudEnhancementInstance(context: Context): CloudEnhancement;

    /**
     * Submits cloud enhancement tasks.
     * 
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } photoAssets - PhotoAsset to enhance.
     * @param { boolean } hasCloudWatermark - Whether to add a cloud enhancement watermark to the enhanced images.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13
     */
    submitCloudEnhancementTasks(photoAssets: Array<PhotoAsset>, hasCloudWatermark: boolean): Promise<void>;

    /**
     * Submits cloud enhancement tasks.
     * 
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } photoAssets - PhotoAsset to enhance.
     * @param { boolean } hasCloudWatermark - Whether to add a cloud watermark to the enhanced image.
     * The value true means to add the watermark, and false means the opposite.
     * @param { number } [triggerMode] - Trigger mode of the cloud enhancement task.
     * 0: manually triggered. 1: automatically triggered. The default value is 0.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18
     */
    submitCloudEnhancementTasks(
      photoAssets: Array<PhotoAsset>,
      hasCloudWatermark: boolean,
      triggerMode?: number
    ): Promise<void>;

    /**
     * Prioritizes a cloud enhancement task.
     * 
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoAsset } photoAsset - PhotoAsset whose cloud enhancement priority needs to be escalated.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13
     */
    prioritizeCloudEnhancementTask(photoAsset: PhotoAsset): Promise<void>;

    /**
     * Cancels cloud enhancement tasks.
     * 
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } photoAssets - Array of PhotoAssets whose cloud enhancement tasks are to be canceled.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13
     */
    cancelCloudEnhancementTasks(photoAssets: Array<PhotoAsset>): Promise<void>;

    /**
     * Cancels all cloud enhancement tasks.
     * 
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13
     */
    cancelAllCloudEnhancementTasks(): Promise<void>;

    /**
     * Queries information about a cloud enhancement task.
     * 
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PhotoAsset } photoAsset - PhotoAsset whose cloud enhancement task information is to be queried.
     * @returns { Promise<CloudEnhancementTaskState> } Returns cloud enhancement task state
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13
     */
    queryCloudEnhancementTaskState(photoAsset: PhotoAsset): Promise<CloudEnhancementTaskState>;

    /**
     * Synchronizes the cloud enhancement task status.
     * 
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13
     */
    syncCloudEnhancementTaskStatus(): Promise<void>;

    /**
     * Obtains the photo after cloud enhancement.
     * 
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PhotoAsset } asset - PhotoAsset whose cloud enhancement photo is to be obtained.
     * @returns { Promise<PhotoAsset> } Returns cloud-enhanced asset
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13
     */
    getCloudEnhancementPair(asset: PhotoAsset): Promise<PhotoAsset>;
  }

  /**
   * Enumerates the cloud enhancement states.
   * 
   * @enum { number } CloudEnhancementState
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum CloudEnhancementState {
    /**
     * Cloud enhancement is unavailable.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    UNAVAILABLE = 0,
    /**
     * Cloud enhancement is available.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    AVAILABLE,
    /**
     * Cloud enhancement is being executed.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    EXECUTING,
    /**
     * Cloud enhancement has been completed.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMPLETED
  }

  /**
   * Enumerates the statuses of tasks used for downloading cloud media assets.
   * 
   * @enum { number } CloudMediaAssetTaskStatus
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14
   */
  enum CloudMediaAssetTaskStatus {
    /**
     * The task is in progress.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    DOWNLOADING = 0,
    /**
     * The task is paused.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    PAUSED = 1,
    /**
     * There is no download task.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    IDLE = 2
  }

  /**
   * Enumerates the reasons why a cloud media asset download task is paused.
   * 
   * @enum { number } CloudMediaTaskPauseCause
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14
   */
  enum CloudMediaTaskPauseCause {
    /**
     * The device temperature is excessively high.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    NO_PAUSE = 0,
    /**
     * The device temperature is excessively high.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    TEMPERATURE_LIMIT = 1,
    /**
     * Network traffic is restricted, and Wi-Fi is not available.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    ROM_LIMIT = 2,
    /**
     * Network traffic is restricted, and Wi-Fi is not available.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    NETWORK_FLOW_LIMIT = 3,
    /**
     * Power usage is restricted.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    WIFI_UNAVAILABLE = 4,
    /**
     * Power usage is restricted.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    POWER_LIMIT = 5,
    /**
     * The device is not in charging screen-off mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    BACKGROUND_TASK_UNAVAILABLE = 6,
    /**
     * The user is making requests too frequently.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    FREQUENT_USER_REQUESTS = 7,
    /**
     * There is an error with the cloud service.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    CLOUD_ERROR = 8,
    /**
     * The download has been paused by the user.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    USER_PAUSED = 9
  }

  /**
   * Describes the details of a cloud media asset download task.
   * It is the return value of the API used by applications to obtain the cloud asset download task status.
   *
   * @interface CloudMediaAssetStatus
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14
   */
  interface CloudMediaAssetStatus {
    /**
     * Status of the download task.
     * 
     * @type { CloudMediaAssetTaskStatus }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    readonly taskStatus: CloudMediaAssetTaskStatus;
    /**
     * Total number of and size (measured in bytes) of the assets that have been downloaded,
     * and the total number and size (also measured in bytes) of the assets remaining to be downloaded.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    readonly taskInfo: string;
    /**
     * Reason why the download task is suspended.
     * 
     * @type { CloudMediaTaskPauseCause }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    readonly errorCode: CloudMediaTaskPauseCause;
  }

  /**
   * Enumerates the types of download tasks.
   * 
   * @enum { number } CloudMediaDownloadType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14
   */
  enum CloudMediaDownloadType {
    /**
     * High-priority download, without the need for the device to switch to screen-off charging mode.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    DOWNLOAD_FORCE = 0,
    /**
     * Low-priority download, demanding that device be in screen-off charging mode.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    DOWNLOAD_GENTLE = 1
  }

  /**
   * Enumerates the modes used for deleting cloud media assets.
   * 
   * @enum { number } CloudMediaRetainType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14
   */
  enum CloudMediaRetainType {
    /**
     * Deletes the local metadata and thumbnail of the original files from the cloud.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    RETAIN_FORCE = 0
  }

  /**
   * A class used for cloud media asset management. It is used to manage download tasks for media assets stored
   * in the cloud and delete local data and files pertaining to these cloud-based assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14
   */
  class CloudMediaAssetManager {
    /**
     * Obtains a CloudMediaAssetManager instance.
     *
     * @param { Context } context - Obtains a CloudMediaAssetManager instance.
     * @returns { CloudMediaAssetManager } Returns cloud media asset manager instance
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    static getCloudMediaAssetManagerInstance(context: Context): CloudMediaAssetManager;

    /**
     * Starts or resumes a task to download cloud media assets.
     * 
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { CloudMediaDownloadType } downloadType - Type of the download task.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    startDownloadCloudMedia(downloadType: CloudMediaDownloadType): Promise<void>;

    /**
     * Suspends a task that downloads cloud media assets.
     * 
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    pauseDownloadCloudMedia(): Promise<void>;

    /**
     * Cancels a task that downloads cloud media assets.
     * 
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    cancelDownloadCloudMedia(): Promise<void>;

    /**
     * Deletes local metadata and files of cloud media assets.
     * 
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { CloudMediaRetainType } retainType - Mode for deleting cloud media assets.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    retainCloudMediaAsset(retainType: CloudMediaRetainType): Promise<void>;

    /**
     * Obtains the status of a task that downloads cloud media assets.
     * 
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<CloudMediaAssetStatus> } Returns cloud media asset status
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14
     */
    getCloudMediaAssetStatus(): Promise<CloudMediaAssetStatus>;
  }

  /**
   * Custom record of media asset.
   * 
   * @interface PhotoAssetCustomRecord
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20
   */
  interface PhotoAssetCustomRecord {
    /**
     * Indicates the media asset file Id.
     * It must be must be greater than 0.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    readonly fileId: number;
    /**
     * Indicates the media asset share count.
     * It must be must be greater than 0.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    readonly shareCount: number;
    /**
     * Indicates the media asset lcd jump count.
     * It must be must be greater than 0.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    readonly lcdJumpCount: number;
  }

  /**
   * Defines the class of media asset custom record manager.
   * 
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20
   */
  class PhotoAssetCustomRecordManager {
    /**
     * Get media asset custom record manager instance.
     * 
     * @param { Context } context - Context of the ability instance.
     * @returns { PhotoAssetCustomRecordManager } Returns media asset custom record manager instance
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800107 - Context is invalid
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    static getCustomRecordManagerInstance(context: Context): PhotoAssetCustomRecordManager;
    /**
     * A maximum of 200 custom records can be created at once.
     * 
     * @param { Array<PhotoAssetCustomRecord> } customRecords - Custom records
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification. Possible causes:
     * <br>1. The value range of mandatory parameters in photoAssetCustomRecord does not meet the requirements.
     * <br>2. The transferred record already exists. 3. The number of transferred records exceeds 200.
     * PhotoAssetCustomRecord param out of line; 2. PhotoAssetCustomRecord already exists ; 3. array length is over 200.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    createCustomRecords(customRecords: Array<PhotoAssetCustomRecord>): Promise<void>;
    /**
     * Get custom records.
     * 
     * @param { FetchOptions } optionCheck - Options to fetch custom records.
     * @returns { Promise<FetchResult<PhotoAssetCustomRecord>> } Returns fetchResult of PhotoAssetCustomRecord
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification. Possible causes:
     * 1. The fileter criteria or fetchColumns that are not supported by options are transferred.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    getCustomRecords(optionCheck: FetchOptions): Promise<FetchResult<PhotoAssetCustomRecord>>;
    /**
     * Set custom records.
     * A maximum of 200 custom records can be set at once.
     * 
     * @param { Array<PhotoAssetCustomRecord> } customRecords - Custom records.
     * @returns { Promise<Array<number>> } Returns list of fileId in photoAssetCustomRecord which set failed
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.Possible causes:
     * <br>1. The value range of mandatory parameters in photoAssetCustomRecord does not meet the requirements.
     * <br>2. The number of transferred records exceeds 200.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    setCustomRecords(customRecords: Array<PhotoAssetCustomRecord>): Promise<Array<number>>;
    /**
     * Remove custom records.
     * 
     * @param { FetchOptions } optionCheck - Options to remove custom records.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification. Possible causes:
     * <br>1. The fileter criteria or fetchColumns that are not supported by options are transferred.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    removeCustomRecords(optionCheck: FetchOptions): Promise<void>;
    /**
     * Add share count which fileId is in ids.
     * A maximum of 500 ids can be set at once.
     * 
     * @param { Array<number> } ids - ids which need to add share count.
     * @returns {Promise<Array<number>> } Returns list of fileId which add failed
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification. Possible causes:
     * <br>1. The ids list is empty; 2. The number of ids lists exceeds 500.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    addShareCount(ids: Array<number>): Promise<Array<number>>;
    /**
     * Add lcd jump count which fileId is in ids.
     * A maximum of 500 ids can be set at once.
     * 
     * @param { Array<number> } ids - ids which need to add lcd jump count.
     * @returns {Promise<Array<number>> } Returns list of fileId which add failed
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification. Possible causes:
     * <br>1. The ids list is empty; 2. The number of ids lists exceeds 500.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20
     */
    addLcdJumpCount(ids: Array<number>): Promise<Array<number>>;
  }

  /**
   * Indicates possible value types
   *
   * @typedef { number | string | boolean | Uint8Array | null } ValueType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22
   * @arkts 1.1&1.2
   */
  type ValueType = number | string | boolean | Uint8Array | null;

  /**
   * Values in buckets are stored in key-value pairs, change {[key: string]: ValueType;} to Record<string, ValueType>
   *
   * @typedef { Record<string, ValueType> } ValuesBucket
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22
   * @arkts 1.1&1.2
   */
  type ValuesBucket = Record<string, ValueType>;

  /**
   * Provides methods for accessing a database result set generated by querying the database.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22
   * @arkts 1.1&1.2
   */
  class ResultSet {
    /**
     * Obtains the number of columns in the result set.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     * @arkts 1.1&1.2
     */
    columnCount: number;
    /**
     * Obtains the number of rows in the result set.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     * @arkts 1.1&1.2
     */
    rowCount: number;
    /**
     * Obtains the current index of the result set.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     * @arkts 1.1&1.2
     */
    rowIndex: number;
    /**
     * Checks whether the cursor is positioned at the last row.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     * @arkts 1.1&1.2
     */
    isAtLastRow: boolean;
    /**
     * Go to the specified row of the result set.
     *
     * @param { number } position - Indicates the index of the specified row, which starts from 0.
     * @returns { boolean } True if the result set is moved successfully; Returns false otherwise.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes: position invalid.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     * @arkts 1.1&1.2
     */
    goToRow(position: number): boolean;
    /**
     * Go to the first row of the result set.
     *
     * @returns { boolean } True if the result set is moved successfully; Returns false otherwise.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     * @arkts 1.1&1.2
     */
    goToFirstRow(): boolean;
    /**
     * Go to the next row of the result set.
     *
     * @returns { boolean } True if the result set is moved successfully; Returns false otherwise.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     * @arkts 1.1&1.2
     */
    goToNextRow(): boolean;
    /**
     * Obtains the values of all columns in the specified row.
     *
     * @returns { ValuesBucket } Indicates the row of data {@link ValuesBucket} to be inserted into the table.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     * @arkts 1.1&1.2
     */
    getRow(): ValuesBucket;
    /**
     * Obtains the value of the specified column in the current row.
     *
     * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { ValueType } The value of the specified column..
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes: columnIndex invalid.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     * @arkts 1.1&1.2
     */
    getValue(columnIndex: number): ValueType;
    /**
     * Closes the result set.
     *
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22
     * @arkts 1.1&1.2
     */
    close(): void;
  }

}

export default photoAccessHelper;
