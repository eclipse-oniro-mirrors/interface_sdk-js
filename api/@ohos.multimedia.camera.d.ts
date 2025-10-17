/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
 * @kit CameraKit
 */

import { ErrorCallback, AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/BaseContext';
import image from './@ohos.multimedia.image';
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
import photoAccessHelper from './@ohos.file.photoAccessHelper';

/**
 * @namespace camera
 * @syscap SystemCapability.Multimedia.Camera.Core
 * @since 10
 */
/**
 * @namespace camera
 * @syscap SystemCapability.Multimedia.Camera.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 20 static
 */
declare namespace camera {
  /**
   * Creates a CameraManager instance.
   *
   * @param { Context } context - Current application context.
   * @returns { CameraManager } CameraManager instance.
   * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
   * @throws { BusinessError } 7400201 - Camera service fatal error.
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Creates a CameraManager instance.
   *
   * @param { Context } context - Current application context.
   * @returns { CameraManager } CameraManager instance.
   * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
   * @throws { BusinessError } 7400201 - Camera service fatal error.
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  function getCameraManager(context: Context): CameraManager;

  /**
   * Enum for camera status.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Enum for camera status.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum CameraStatus {
    /**
     * Appear status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Appear status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_STATUS_APPEAR = 0,

    /**
     * Disappear status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Disappear status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_STATUS_DISAPPEAR = 1,

    /**
     * Available status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Available status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_STATUS_AVAILABLE = 2,

    /**
     * Unavailable status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unavailable status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_STATUS_UNAVAILABLE = 3
  }

  /**
   * Enum for fold status.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 12
   */
  /**
   * Enum for fold status.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum FoldStatus {
    /**
     * Non-foldable status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Non-foldable status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    NON_FOLDABLE = 0,

    /**
     * Expanded status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Expanded status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    EXPANDED = 1,

    /**
     * Folded status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Folded status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    FOLDED = 2
  }

  /**
   * Profile for camera streams.
   *
   * @typedef Profile
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Profile for camera streams.
   *
   * @typedef Profile
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface Profile {
    /**
     * Camera format.
     *
     * @type { CameraFormat }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera format.
     *
     * @type { CameraFormat }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly format: CameraFormat;

    /**
     * Picture size.
     *
     * @type { Size }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Resolution. The settings are the width and height of the camera's resolution, not the width and height of the actual output image.
     *
     * @type { Size }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly size: Size;
  }

  /**
   * Frame rate range.
   *
   * @typedef FrameRateRange
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Frame rate range.
   *
   * @typedef FrameRateRange
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface FrameRateRange {
    /**
     * Min frame rate.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Min frame rate.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly min: int;

    /**
     * Max frame rate.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Max frame rate.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly max: int;
  }

  /**
   * Video profile.
   *
   * @extends Profile
   * @typedef VideoProfile
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Video profile.
   *
   * @extends Profile
   * @typedef VideoProfile
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface VideoProfile extends Profile {
    /**
     * Frame rate in unit fps (frames per second).
     *
     * @type { FrameRateRange }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Frame rate range, in fps (frames per second).
     *
     * @type { FrameRateRange }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly frameRateRange: FrameRateRange;
  }

  /**
   * Camera output capability.
   *
   * @typedef CameraOutputCapability
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Camera output capability.
   *
   * @typedef CameraOutputCapability
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface CameraOutputCapability {
    /**
     * Preview profiles.
     *
     * @type { Array<Profile> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Preview profiles.
     *
     * @type { Array<Profile> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly previewProfiles: Array<Profile>;

    /**
     * Photo profiles.
     *
     * @type { Array<Profile> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Photo profiles.
     *
     * @type { Array<Profile> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly photoProfiles: Array<Profile>;

    /**
     * Video profiles.
     *
     * @type { Array<VideoProfile> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Video profiles.
     *
     * @type { Array<VideoProfile> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly videoProfiles: Array<VideoProfile>;

    /**
     * Depth profiles.
     *
     * @type { Array<DepthProfile> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly depthProfiles: Array<DepthProfile>;

    /**
     * All the supported metadata Object Types.
     *
     * @type { Array<MetadataObjectType> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * All the supported metadata Object Types.
     *
     * @type { Array<MetadataObjectType> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly supportedMetadataObjectTypes: Array<MetadataObjectType>;
  }

  /**
   * Enum for camera error code.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Enum for camera error code.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum CameraErrorCode {
    /**
     * Parameter missing or parameter type incorrect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Parameter missing or parameter type incorrect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    INVALID_ARGUMENT = 7400101,

    /**
     * Operation not allowed.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Operation not allowed.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    OPERATION_NOT_ALLOWED = 7400102,

    /**
     * Session not config.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Session not config.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    SESSION_NOT_CONFIG = 7400103,

    /**
     * Session not running.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Session not running.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    SESSION_NOT_RUNNING = 7400104,

    /**
     * Session config locked.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Session config locked.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    SESSION_CONFIG_LOCKED = 7400105,

    /**
     * Device setting locked.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Device setting locked.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    DEVICE_SETTING_LOCKED = 7400106,

    /**
     * Can not use camera cause of conflict.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Can not use camera cause of conflict.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CONFLICT_CAMERA = 7400107,

    /**
     * Camera disabled cause of security reason.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera disabled cause of security reason.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    DEVICE_DISABLED = 7400108,

    /**
     * Can not use camera cause of preempted.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Can not use camera cause of preempted.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    DEVICE_PREEMPTED = 7400109,

    /**
     * Unresolved conflicts with current configurations.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Unresolved conflicts with current configurations.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    UNRESOLVED_CONFLICTS_WITH_CURRENT_CONFIGURATIONS = 7400110,

    /**
     * Camera frequently switched.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    DEVICE_FREQUENTLY_SWITCHED = 7400111,

    /**
     * Camera lens retracted.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    CAMERA_LENS_RETRACTED = 7400112,

    /**
     * Camera service fatal error.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera service fatal error.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    SERVICE_FATAL_ERROR = 7400201
  }

  /**
   * Enum for restore parameter.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  enum RestoreParamType {
    /**
     * No need set restore Stream Parameter, only prelaunch camera device.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    NO_NEED_RESTORE_PARAM = 0,

    /**
     * Presistent default parameter, long-lasting effect after T minutes.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    PRESISTENT_DEFAULT_PARAM = 1,

    /**
     * Transient active parameter, which has a higher priority than PRESISTENT_DEFAULT_PARAM when both exist.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    TRANSIENT_ACTIVE_PARAM = 2
  }

  /**
   * Setting parameter for stream.
   *
   * @typedef SettingParam
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  interface SettingParam {
    /**
     * Skin smooth level value for restore.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    skinSmoothLevel: int;

    /**
     * Face slender value for restore.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    faceSlender: int;

    /**
     * Skin tone value for restore.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    skinTone: int;
  }

  /**
   * Prelaunch config object.
   *
   * @typedef PrelaunchConfig
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 10 dynamic
   * @since 20 static
   */
  interface PrelaunchConfig {
    /**
     * Camera instance.
     *
     * @type { CameraDevice }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 20 static
     */
    cameraDevice: CameraDevice;

    /**
     * Restore parameter type.
     *
     * @type { ?RestoreParamType }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    restoreParamType?: RestoreParamType;

    /**
     * Begin active time.
     *
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    activeTime?: int;

    /**
     * Setting parameter.
     *
     * @type { ?SettingParam }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    settingParam?: SettingParam;
  }

  /**
   * Camera manager object.
   *
   * @interface CameraManager
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Camera Manager class, the camera manager instance needs to be get from the getCameraManager interface before using it.
   *
   * @interface CameraManager
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface CameraManager {
    /**
     * Gets supported camera descriptions.
     *
     * @returns { Array<CameraDevice> } An array of supported cameras.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Gets the supported camera device objects and return the results synchronously.
     *
     * @returns { Array<CameraDevice> } An array of supported cameras.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getSupportedCameras(): Array<CameraDevice>;

    /**
     * Queries the output capability supported by the camera device in the specified mode and returns the result synchronously.
     *
     * @param { CameraDevice } camera - Camera device.
     * @returns { CameraOutputCapability } The camera output capability.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.CameraManager#getSupportedOutputCapability
     */
    getSupportedOutputCapability(camera: CameraDevice): CameraOutputCapability;

    /**
     * Gets supported scene mode for specific camera.
     *
     * @param { CameraDevice } camera - Camera device.
     * @returns { Array<SceneMode> } An array of supported scene mode of camera.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Gets supported scene mode for specific camera.
     *
     * @param { CameraDevice } camera - Camera device, obtained through the getSupportedCameras interface.
     * An error code will be returned if there is an exception in parameter passing.
     * @returns { Array<SceneMode> } An array of supported scene mode of camera.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getSupportedSceneModes(camera: CameraDevice): Array<SceneMode>;

    /**
     * Gets supported output capability for specific camera.
     *
     * @param { CameraDevice } camera - Camera device.
     * @param { SceneMode } mode - Scene mode.
     * @returns { CameraOutputCapability } The camera output capability.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Gets supported output capability for specific camera.
     *
     * @param { CameraDevice } camera - Camera device, obtained through the getSupportedCameras interface.
     * @param { SceneMode } mode - Scene mode, obtained through the getSupportedSceneModes interface.
     * @returns { CameraOutputCapability } The camera output capability.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode): CameraOutputCapability;

    /**
     * Determine whether camera is muted.
     *
     * @returns { boolean } Is camera muted.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Queries whether the current camera is muted.
     *
     * @returns { boolean } Is camera muted.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    isCameraMuted(): boolean;

    /**
     * Determine whether camera mute is supported.
     *
     * @returns { boolean } Is camera mute supported.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Determine whether camera mute is supported.
     *
     * @returns { boolean } Is camera mute supported.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    isCameraMuteSupported(): boolean;

    /**
     * Mute camera.
     *
     * @param { boolean } mute - Mute camera if TRUE, otherwise unmute camera.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.camera.CameraManager#muteCameraPersistent
     */
    muteCamera(mute: boolean): void;

    /**
     * Mutes or unmutes camera for persistence purpose.
     *
     * @permission ohos.camera.CAMERA_CONTROL
     * @param { boolean } mute - Mute camera if TRUE, otherwise unmute camera.
     * @param { PolicyType } type - Type for indicating the calling role.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. 
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    muteCameraPersistent(mute: boolean, type: PolicyType): void;

    /**
     * Creates a CameraInput instance by camera.
     *
     * @permission ohos.permission.CAMERA
     * @param { CameraDevice } camera - Camera device used to create the instance.
     * @returns { CameraInput } The CameraInput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Creates a CameraInput instance by camera.
     *
     * @permission ohos.permission.CAMERA
     * @param { CameraDevice } camera - Camera device used to create the instance.
     * @returns { CameraInput } The CameraInput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Creates a CameraInput instance by camera.
     * 
     * Before using this interface, first through the getSupportedCameras interface to query the current list of camera
     * devices supported by the device, the developer needs to be based on specific scenarios to choose the camera device
     * that meets the needs of the developer, and then use this interface to create a CameraInput instance.
     *
     * @permission ohos.permission.CAMERA
     * @param { CameraDevice } camera - Camera device used to create the instance.
     * @returns { CameraInput } Returns a CameraInput instance. Failure of an interface call returns the corresponding
     * error code, which is of type CameraErrorCode.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    createCameraInput(camera: CameraDevice): CameraInput;

    /**
     * Creates a CameraInput instance by camera position and type.
     *
     * @permission ohos.permission.CAMERA
     * @param { CameraPosition } position - Target camera position.
     * @param { CameraType } type - Target camera type.
     * @returns { CameraInput } The CameraInput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Creates a CameraInput instance by camera position and type.
     *
     * @permission ohos.permission.CAMERA
     * @param { CameraPosition } position - Target camera position.
     * @param { CameraType } type - Target camera type.
     * @returns { CameraInput } The CameraInput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Creates a CameraInput instance by camera position and type.
     *
     * @permission ohos.permission.CAMERA
     * @param { CameraPosition } position - Camera position, first get the supported camera device
     * objects through the getSupportedCameras interface, and then get the device position information
     * based on the returned camera device objects.
     * @param { CameraType } type - camera type, first get the supported camera device object through
     * the getSupportedCameras interface, then get the device type information based on the returned
     * camera device object.
     * @returns { CameraInput } Returns a CameraInput instance. Failure of an interface call returns
     * the corresponding error code, which is of type CameraErrorCode.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    createCameraInput(position: CameraPosition, type: CameraType): CameraInput;

    /**
     * Creates a PreviewOutput instance.
     *
     * @param { Profile } profile - Preview output profile.
     * @param { string } surfaceId - Surface object id used in camera photo output.
     * @returns { PreviewOutput } The PreviewOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Creates a PreviewOutput instance.
     *
     * @param { Profile } profile - Preview output profile.
     * @param { string } surfaceId - Surface object id used in camera photo output.
     * @returns { PreviewOutput } The PreviewOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Creates a PreviewOutput instance.
     *
     * @param { Profile } profile - Supported preview configuration information,
     * obtained through the getSupportedOutputCapability API.
     * @param { string } surfaceId - Surface object id used in camera photo output.
     * @returns { PreviewOutput } The PreviewOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    createPreviewOutput(profile: Profile, surfaceId: string): PreviewOutput;

    /**
     * Creates a PreviewOutput instance without profile.
     * You can use this method to create a preview output instance without a profile, This instance can
     * only be used in a preconfiged session.
     *
     * @param { string } surfaceId - Surface object id used in camera preview output.
     * @returns { PreviewOutput } The PreviewOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Creates a PreviewOutput instance without profile.
     * You can use this method to create a preview output instance without a profile, This instance can
     * only be used in a preconfiged session.
     *
     * @param { string } surfaceId - Surface object id used in camera preview output.
     * @returns { PreviewOutput } The PreviewOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    createPreviewOutput(surfaceId: string): PreviewOutput;

    /**
     * Creates a PhotoOutput instance.
     *
     * @param { Profile } profile - Photo output profile.
     * @param { string } surfaceId - Surface object id used in camera photo output.
     * @returns { PhotoOutput } The PhotoOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.CameraManager#createPhotoOutput
     */
    createPhotoOutput(profile: Profile, surfaceId: string): PhotoOutput;

    /**
     * Creates a PhotoOutput instance without surfaceId.
     * Call PhotoOutput capture interface will give a callback,
     * {@link on(type: 'photoAvailable', callback: AsyncCallback<Photo>)}
     *
     * @param { Profile } profile - Photo output profile.
     * @returns { PhotoOutput } The PhotoOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Creates a PhotoOutput instance without surfaceId.
     * Call PhotoOutput capture interface will give a callback,
     * {@link on(type: 'photoAvailable', callback: AsyncCallback<Photo>)}
     * You can use this method to create a photo output instance without a profile, This instance can
     * only be used in a preconfiged session.
     *
     * @param { Profile } profile - Photo output profile.
     * @returns { PhotoOutput } The PhotoOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Creates a PhotoOutput instance without surfaceId.
     * Call PhotoOutput capture interface will give a callback,
     * {@link on(type: 'photoAvailable', callback: AsyncCallback<Photo>)}
     * You can use this method to create a photo output instance without a profile, This instance can
     * only be used in a preconfiged session.
     *
     * @param { Profile } profile - Supported photo configuration information, obtained through the
     * getSupportedOutputCapability API. This parameter is mandatory for API version 11.
     * Starting from API version 12, if the preconfig API is used for preconfiguration, the
     * profile parameter, if specified, will override the settings configured by the preconfig API.
     * @returns { PhotoOutput } The PhotoOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    createPhotoOutput(profile?: Profile): PhotoOutput;

    /**
     * Creates a VideoOutput instance.
     *
     * @param { VideoProfile } profile - Video profile.
     * @param { string } surfaceId - Surface object id used in camera video output.
     * @returns { VideoOutput } The VideoOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Creates a VideoOutput instance.
     *
     * @param { VideoProfile } profile - Video profile.
     * @param { string } surfaceId - Surface object id used in camera video output.
     * @returns { VideoOutput } The VideoOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Creates a VideoOutput instance.
     *
     * @param { VideoProfile } profile - Supported recording configuration information,
     * obtained through the getSupportedOutputCapability API.
     * @param { string } surfaceId - Surface object id used in camera video output.
     * @returns { VideoOutput } The VideoOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    createVideoOutput(profile: VideoProfile, surfaceId: string): VideoOutput;

    /**
     * Creates a VideoOutput instance without profile.
     * You can use this method to create a video output instance without a profile, This instance can
     * only be used in a preconfiged session.
     *
     * @param { string } surfaceId - Surface object id used in camera video output.
     * @returns { VideoOutput } The VideoOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Creates a VideoOutput instance without profile.
     * You can use this method to create a video output instance without a profile, This instance can
     * only be used in a preconfiged session.
     *
     * @param { string } surfaceId - Surface object id used in camera video output.
     * @returns { VideoOutput } The VideoOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    createVideoOutput(surfaceId: string): VideoOutput;

    /**
     * Creates a MetadataOutput instance.
     *
     * @param { Array<MetadataObjectType> } metadataObjectTypes - Array of MetadataObjectType.
     * @returns { MetadataOutput } The MetadataOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Creates a MetadataOutput instance.
     *
     * @param { Array<MetadataObjectType> } metadataObjectTypes - Array of MetadataObjectType.
     * @returns { MetadataOutput } The MetadataOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Creates a MetadataOutput instance.
     *
     * @param { Array<MetadataObjectType> } metadataObjectTypes - Metadata stream type information,
     * obtained through the getSupportedOutputCapability API.
     * @returns { MetadataOutput } The MetadataOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    createMetadataOutput(metadataObjectTypes: Array<MetadataObjectType>): MetadataOutput;

    /**
     * Creates a DepthDataOutput instance.
     *
     * @param { DepthProfile } profile - Depth data profile.
     * @returns { DepthDataOutput } The DepthDataOutput instance.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    createDepthDataOutput(profile: DepthProfile): DepthDataOutput;

    /**
     * Gets a CaptureSession instance.
     *
     * @returns { CaptureSession } The CaptureSession instance.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.CameraManager#createSession
     */
    createCaptureSession(): CaptureSession;

    /**
     * Gets a Session instance by specific scene mode.
     *
     * @param { SceneMode } mode - Scene mode.
     * @returns { T } The specific Session instance by specific scene mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     * 3. Parameter verification failed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Gets a Session instance by specific scene mode.
     *
     * @param { SceneMode } mode - The modes supported by the camera. If the passed parameters are
     * abnormal (e.g. out of range, passed null or undefined, etc.), the actual interface will not take effect.
     * @returns { T } Session instance. Failure of an interface call returns the appropriate error code,
     * which is of type CameraErrorCode.
     * @throws { BusinessError } 7400101 - Parameter error. Possible causes:
     * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     * 3. Parameter verification failed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    createSession<T extends Session>(mode: SceneMode): T;

    /**
     * Queries a specified device based on position and type.
     *
     * @param { CameraPosition } position - Camera position.
     * @param { CameraType } type - Camera type.
     * @returns { CameraDevice } A device queried base on position and type.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Queries a specified device based on position and type.
     *
     * @param { CameraPosition } position - Camera position.
     * @param { CameraType } type - Camera type.
     * @returns { CameraDevice } A device queried base on position and type.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getCameraDevice(position: CameraPosition, type: CameraType): CameraDevice;

    /**
     * Obtains the concurrent information of specified cameras,
     * the empty return means concurrency is not supported.
     *
     * @param { Array<CameraDevice> } cameras - Set of camera devices to be queried.
     * @returns { Array<CameraConcurrentInfo> } Set of queried concurrent information.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Obtains the concurrent information of specified cameras,
     * the empty return means concurrency is not supported.
     *
     * @param { Array<CameraDevice> } cameras - Set of camera devices to be queried.
     * @returns { Array<CameraConcurrentInfo> } Set of queried concurrent information.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getCameraConcurrentInfos(cameras: Array<CameraDevice>): Array<CameraConcurrentInfo>;

    /**
     * Subscribes camera status change event callback.
     *
     * @param { 'cameraStatus' } type - Event type.
     * @param { AsyncCallback<CameraStatusInfo> } callback - Callback used to get the camera status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Subscribes cameras status change event callback.
     *
     * @param { 'cameraStatus' } type - Event type.
     * @param { AsyncCallback<CameraStatusInfo> } callback - Callback used to get the camera status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'cameraStatus', callback: AsyncCallback<CameraStatusInfo>): void;

    /**
     * Subscribes cameras status change event callback.
     *
     * @param { AsyncCallback<CameraStatusInfo> } callback - Callback used to get the camera status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onCameraStatus(callback: AsyncCallback<CameraStatusInfo>): void;

    /**
     * Unsubscribes from camera status change event callback.
     *
     * @param { 'cameraStatus' } type - Event type.
     * @param { AsyncCallback<CameraStatusInfo> } callback - Callback used to get the camera status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unsubscribes from camera status change event callback.
     *
     * @param { 'cameraStatus' } type - Event type.
     * @param { AsyncCallback<CameraStatusInfo> } callback - Callback used to get the camera status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'cameraStatus', callback?: AsyncCallback<CameraStatusInfo>): void;

    /**
     * Unsubscribes from camera status change event callback.
     *
     * @param { AsyncCallback<CameraStatusInfo> } [callback] - Callback used to get the camera status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
    */
    offCameraStatus(callback?: AsyncCallback<CameraStatusInfo>): void;

    /**
     * Subscribes fold status change event callback.
     *
     * @param { 'foldStatusChanged' } type - Event type.
     * @param { AsyncCallback<FoldStatusInfo> } callback - Callback used to get the fold status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Registers a listener for fold state changes. This API uses an asynchronous callback to return the result.
     * 
     * Description: Currently, it is not allowed to use off() to unregister the callback
     * within the callback method of on().
     *
     * @param { 'foldStatusChanged' } type - Event type.
     * @param { AsyncCallback<FoldStatusInfo> } callback - Callback used to get the fold status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'foldStatusChange', callback: AsyncCallback<FoldStatusInfo>): void;
    
    /***
     * Subscribes fold status change event callback.
     * 
     * @param { AsyncCallback<FoldStatusInfo> } callback - Callback used to get the fold status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
    */
    onFoldStatusChange(callback: AsyncCallback<FoldStatusInfo>): void;

    /**
     * Unsubscribes from fold status change event callback.
     *
     * @param { 'foldStatusChanged' } type - Event type.
     * @param { AsyncCallback<FoldStatusInfo> } callback - Callback used to get the fold status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Unsubscribes from fold status change event callback.
     *
     * @param { 'foldStatusChanged' } type - Event type.
     * @param { AsyncCallback<FoldStatusInfo> } callback - Callback used to get the fold status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'foldStatusChange', callback?: AsyncCallback<FoldStatusInfo>): void;
    
    /**
     * Unsubscribes from fold status change event callback.
     *
     * @param { AsyncCallback<FoldStatusInfo> } [callback] - Callback used to get the fold status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offFoldStatusChange(callback?: AsyncCallback<FoldStatusInfo>): void;

    /**
     * Subscribes camera mute change event callback.
     *
     * @param { 'cameraMute' } type - Event type.
     * @param { AsyncCallback<boolean> } callback - Callback used to get the camera mute change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Subscribes camera mute change event callback.
     *
     * @param { 'cameraMute' } type - Event type.
     * @param { AsyncCallback<boolean> } callback - Callback used to get the camera mute change.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'cameraMute', callback: AsyncCallback<boolean>): void;

     /***
     * Subscribes camera mute change event callback.
     * 
     * @param { AsyncCallback<boolean> } callback - Callback used to get the camera mute change.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onCameraMute(callback: AsyncCallback<boolean>): void;
    /**
     * Unsubscribes from camera mute change event callback.
     *
     * @param { 'cameraMute' } type - Event type.
     * @param { AsyncCallback<boolean> } callback - Callback used to get the camera mute change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Unsubscribes from camera mute change event callback.
     *
     * @param { 'cameraMute' } type - Event type.
     * @param { AsyncCallback<boolean> } callback - Callback used to get the camera mute change.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'cameraMute', callback?: AsyncCallback<boolean>): void;

    /**
     * Unsubscribes from camera mute change event callback.
     *
     * @param { AsyncCallback<boolean> } [callback] - Callback used to get the camera mute change.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offCameraMute(callback?: AsyncCallback<boolean>): void;

    /**
     * Determines whether the camera device supports prelaunch.
     * This function must be called in prior to the setPrelaunchConfig and prelaunch functions.
     *
     * @param { CameraDevice } camera - Camera device.
     * @returns { boolean } Whether prelaunch is supported.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Determines whether the camera device supports prelaunch.
     * This function must be called in prior to the setPrelaunchConfig and prelaunch functions.
     *
     * @param { CameraDevice } camera - Camera device.
     * @returns { boolean } Whether prelaunch is supported.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    isPrelaunchSupported(camera: CameraDevice): boolean;

    /**
     * Sets the camera prelaunch configuration.
     * The configuration is sent to the camera service when you exit the camera or change the configuration next time.
     *
     * @permission ohos.permission.CAMERA
     * @param { PrelaunchConfig } prelaunchConfig - Prelaunch configuration info.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Sets the camera prelaunch configuration.
     * The configuration is sent to the camera service when you exit the camera or change the configuration next time.
     *
     * @permission ohos.permission.CAMERA
     * @param { PrelaunchConfig } prelaunchConfig - Prelaunch configuration info.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    setPrelaunchConfig(prelaunchConfig: PrelaunchConfig): void;

    /**
     * Enable the camera to prelaunch and start.
     * This function is called when the user clicks the system camera icon to start the camera application.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Enable the camera to prelaunch and start.
     * This function is called when the user clicks the system camera icon to start the camera application.
     *
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    prelaunch(): void;

    /**
     * Prepare the camera resources.
     * This function is called when the user touch down the camera switch icon in camera application.
     *
     * @param { string } cameraId - The camera to prepare.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
    /**
     * Prepare the camera resources.
     * This function is called when the user touch down the camera switch icon in camera application.
     *
     * @param { string } cameraId - The camera to prepare.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    preSwitchCamera(cameraId: string): void;

    /**
     * Creates a deferred PreviewOutput instance.
     *
     * @param { Profile } profile - Preview output profile.
     * @returns { PreviewOutput } the PreviewOutput instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Creates a deferred PreviewOutput instance.
     * You can use the method to create deferred preview output without profile, then you must add this output
     * to a session which already preconfiged.
     *
     * @param { Profile } profile - Preview output profile.
     * @returns { PreviewOutput } the PreviewOutput instance.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    createDeferredPreviewOutput(profile?: Profile): PreviewOutput;

    /**
     * Check if the device has a torch.
     *
     * @returns { boolean } this value that specifies whether the device has a torch.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Check if the device has a torch.
     *
     * @returns { boolean } this value that specifies whether the device has a torch.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    isTorchSupported(): boolean;

    /**
     * Check if a specifies torch mode is supported.
     * @param { TorchMode } mode - torch mode.
     * @returns { boolean } is torch mode supported.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Check if a specifies torch mode is supported.
     * @param { TorchMode } mode - torch mode.
     * @returns { boolean } is torch mode supported.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    isTorchModeSupported(mode: TorchMode): boolean;

    /**
     * Get current torch mode.
     *
     * @returns { TorchMode } torch mode.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Get current torch mode.
     *
     * @returns { TorchMode } torch mode.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getTorchMode(): TorchMode;

    /**
     * Set torch mode to the device.
     *
     * @param { TorchMode } mode - torch mode.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Set torch mode to the device.
     *
     * @param { TorchMode } mode - torch mode.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Set torch mode to the device.
     *
     * @param { TorchMode } mode - torch mode.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Set torch mode to the device.
     *
     * @param { TorchMode } mode - torch mode.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setTorchMode(mode: TorchMode): void;

    /**
     * Subscribes torch status change event callback.
     *
     * @param { 'torchStatusChange' } type - Event type
     * @param { AsyncCallback<TorchStatusInfo> } callback - Callback used to return the torch status change
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Registers a listener for flashlight state changes to get flashlight state change by registering
     * a callback function. This API uses an asynchronous callback to return the result.
     * 
     * Description: Currently, it is not allowed to use off() to unregister the callback
     * within the callback method of on().
     *
     * @param { 'torchStatusChange' } type - Event type
     * @param { AsyncCallback<TorchStatusInfo> } callback - Callback used to return the torch status change
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'torchStatusChange', callback: AsyncCallback<TorchStatusInfo>): void;

    /**
     * Subscribes torch status change event callback.
     * 
     * @param { AsyncCallback<TorchStatusInfo> } callback - Callback used to return the torch status change
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
    */
    onTorchStatusChange(callback: AsyncCallback<TorchStatusInfo>): void;

    /**
     * Unsubscribes torch status change event callback.
     *
     * @param { 'torchStatusChange' } type - Event type
     * @param { AsyncCallback<TorchStatusInfo> } callback - Callback used to return the torch status change
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Unsubscribes torch status change event callback.
     *
     * @param { 'torchStatusChange' } type - Event type
     * @param { AsyncCallback<TorchStatusInfo> } callback - Callback used to return the torch status change
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    off(type: 'torchStatusChange', callback?: AsyncCallback<TorchStatusInfo>): void;

    /**
     * Unsubscribes torch status change event callback.
     * 
     * @param { AsyncCallback<TorchStatusInfo> } [callback] - Callback used to return the torch status change
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
    */
    offTorchStatusChange(callback?: AsyncCallback<TorchStatusInfo>): void;
  }

  /**
   * Torch status info.
   *
   * @typedef TorchStatusInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * Torch status info.
   *
   * @typedef TorchStatusInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface TorchStatusInfo {
    /**
     * is torch available
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * is torch available
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly isTorchAvailable: boolean;

    /**
     * is torch active
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Whether the flashlight is activated or not. True means the flashlight is activated, false means the flashlight
     * is not activated.
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly isTorchActive: boolean;

    /**
     * the current torch brightness level.
     *
     * @type { double }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Flashlight brightness level, value range is [0,1], the closer to 1, the brighter it is.
     *
     * @type { double }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly torchLevel: double;
  }

  /**
   * Enum for torch mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * Enum for torch mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum TorchMode {
    /**
     * The device torch is always off.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * The device torch is always off.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    OFF = 0,

    /**
     * The device torch is always on.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * The device torch is always on.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    ON = 1,

    /**
     * The device continuously monitors light levels and uses the torch when necessary.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * The device continuously monitors light levels and uses the torch when necessary.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    AUTO = 2
  }

  /**
   * Camera status info.
   *
   * @typedef CameraStatusInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * An instance of the interface returned by the camera manager's callback that represents camera state information.
   *
   * @typedef CameraStatusInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface CameraStatusInfo {
    /**
     * Camera instance.
     *
     * @type { CameraDevice }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera instance.
     *
     * @type { CameraDevice }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    camera: CameraDevice;

    /**
     * Current camera status.
     *
     * @type { CameraStatus }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Current camera status.
     *
     * @type { CameraStatus }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    status: CameraStatus;
  }

  /**
   * Fold status info.
   *
   * @typedef FoldStatusInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 12
   */
  /**
   * Fold status info.
   *
   * @typedef FoldStatusInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface FoldStatusInfo {
    /**
     * Gets supported camera devices under the current fold status.
     *
     * @type { Array<CameraDevice> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Gets supported camera devices under the current fold status.
     *
     * @type { Array<CameraDevice> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly supportedCameras: Array<CameraDevice>;

    /**
     * Current fold status.
     *
     * @type { FoldStatus }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Current fold status.
     *
     * @type { FoldStatus }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly foldStatus: FoldStatus;
  }

  /**
   * Enum for camera position.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Enum for camera position.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 20 static
   */
  enum CameraPosition {
    /**
     * Unspecified position.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unspecified position.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    CAMERA_POSITION_UNSPECIFIED = 0,

    /**
     * Back position.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Back position.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    CAMERA_POSITION_BACK = 1,

    /**
     * Front position.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Front position.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 20 static
     */
    CAMERA_POSITION_FRONT = 2,

    /**
     * Camera that is inner position when the device is folded.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Camera that is inner position when the device is folded.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 12 dynamic
     * @deprecated since 12
     */
    CAMERA_POSITION_FOLD_INNER = 3
  }

  /**
   * Enum for camera type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Enum for camera type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum CameraType {
    /**
     * Default camera type
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Default camera type
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_TYPE_DEFAULT = 0,

    /**
     * Wide camera
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Wide camera
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_TYPE_WIDE_ANGLE = 1,

    /**
     * Ultra wide camera
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Ultra wide camera
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_TYPE_ULTRA_WIDE = 2,

    /**
     * Telephoto camera
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Telephoto camera
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_TYPE_TELEPHOTO = 3,

    /**
     * True depth camera
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * True depth camera
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_TYPE_TRUE_DEPTH = 4
  }

  /**
   * Enum for camera connection type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Enum for camera connection type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum ConnectionType {
    /**
     * Built-in camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Built-in camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_CONNECTION_BUILT_IN = 0,

    /**
     * Camera connected using USB
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera connected using USB
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_CONNECTION_USB_PLUGIN = 1,

    /**
     * Remote camera
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Remote camera
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_CONNECTION_REMOTE = 2
  }

  /**
   * Enum for remote camera device type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 10
   */
  /**
   * Enum for remote camera device type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 15
   */
  /**
   * Enum for remote camera device type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum HostDeviceType {
    /**
     * Indicates an unknown device camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Indicates an unknown device camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 15
     */
    /**
     * Indicates an unknown device camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    UNKNOWN_TYPE = 0,

    /**
     * Indicates a smartphone camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Indicates a smartphone camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 15
     */
    /**
     * Indicates a smartphone camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    PHONE = 0x0E,

    /**
     * Indicates a tablet camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Indicates a tablet camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 15
     */
    /**
     * Indicates a tablet camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    TABLET = 0x11
  }

  /**
   * Camera device object.
   *
   * @typedef CameraDevice
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Camera device object.
   *
   * @typedef CameraDevice
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface CameraDevice {
    /**
     * Camera id attribute.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera ID attribute.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly cameraId: string;

    /**
     * Camera position attribute.
     *
     * @type { CameraPosition }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera position attribute.
     *
     * @type { CameraPosition }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly cameraPosition: CameraPosition;

    /**
     * Camera type attribute.
     *
     * @type { CameraType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera type attribute.
     *
     * @type { CameraType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly cameraType: CameraType;

    /**
     * Camera connection type attribute.
     *
     * @type { ConnectionType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera connection type attribute.
     *
     * @type { ConnectionType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly connectionType: ConnectionType;

    /**
     * Camera remote camera device name attribute.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Camera remote camera device name attribute.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 15
     */
    /**
     * Camera remote camera device name attribute.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly hostDeviceName: string;

    /**
     * Camera remote camera device type attribute.
     *
     * @type { HostDeviceType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Camera remote camera device type attribute.
     *
     * @type { HostDeviceType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 15
     */
    /**
     * Camera remote camera device type attribute.
     *
     * @type { HostDeviceType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly hostDeviceType: HostDeviceType;

    /**
     * Camera sensor orientation attribute.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * The camera mounting angle, which does not change with screen rotation, takes values from 0° to 360° in degrees.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly cameraOrientation: int;

    /**
     * Camera device retractable attribute
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    readonly isRetractable?: boolean;
  }

  /**
   * Size parameter.
   *
   * @typedef Size
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Size parameter.
   *
   * @typedef Size
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface Size {
    /**
     * Height.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Height.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    height: int;

    /**
     * Width.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Width.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    width: int;
  }

  /**
   * Point parameter.
   *
   * @typedef Point
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Point coordinates are used for focus and exposure configuration.
   *
   * @typedef Point
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface Point {
    /**
     * x co-ordinate
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * x co-ordinate
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    x: double;

    /**
     * y co-ordinate
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * y co-ordinate
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    y: double;
  }

  /**
   * Camera input object.
   *
   * @interface CameraInput
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Camera input object.
   *
   * @interface CameraInput
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface CameraInput {
    /**
     * Open camera.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
     * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Open camera.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
     * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    open(callback: AsyncCallback<void>): void;

    /**
     * Open camera.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
     * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Open camera.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
     * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    open(): Promise<void>;

    /**
     * Open camera.
     *
     * @param { boolean } isSecureEnabled - Enable secure camera.
     * @returns { Promise<bigint> } Promise used to return the result.
     * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
     * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Open camera.
     *
     * @param { boolean } isSecureEnabled - Setting true enables the camera to be opened in a safe way,
     * setting false does the opposite. Failure of an interface call returns an error code of type CameraErrorCode.
     * @returns { Promise<bigint> } Promise used to return the result.
     * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
     * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    open(isSecureEnabled: boolean): Promise<bigint>;

    /**
     * Open camera with specified concurrent type.
     *
     * @param { CameraConcurrentType } type - Camera concurrent type.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
     * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Open camera with specified concurrent type.
     *
     * @param { CameraConcurrentType } type - Camera concurrent type.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
     * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    open(type: CameraConcurrentType): Promise<void>;

    /**
     * Close camera.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Close camera.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    close(callback: AsyncCallback<void>): void;

    /**
     * Close camera.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Close camera.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    close(): Promise<void>;

    /**
     * Delay close camera.
     *
     * @param { int } time - delay time for turning off camera.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    closeDelayed(time: int): Promise<void>;

    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { CameraDevice } camera - Camera device.
     * @param { ErrorCallback } callback - Callback used to get the camera input errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { CameraDevice } camera - Camera device.
     * @param { ErrorCallback } callback - Callback used to get the camera input errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'error', camera: CameraDevice, callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     * 
     * @param { CameraDevice } camera - Camera device.}
     * @param { ErrorCallback } callback - Callback used to get the camera input errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onError(camera: CameraDevice, callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { CameraDevice } camera - Camera device.
     * @param { ErrorCallback } callback - Callback used to get the camera input errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { CameraDevice } camera - Camera device.
     * @param { ErrorCallback } callback - Callback used to get the camera input errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'error', camera: CameraDevice, callback?: ErrorCallback): void;

    /***
     * Unsubscribes from error events.
     * 
     * @param { CameraDevice } camera - Camera device.
     * @param { ErrorCallback } callback - Callback used to get the camera input errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offError(camera: CameraDevice, callback?: ErrorCallback): void;

    /**
     * Subscribes to camera occlusion detection results.
     *
     * @param { 'cameraOcclusionDetection' } type - Event type.
     * @param { AsyncCallback<CameraOcclusionDetectionResult> } callback - Callback used to get detection results.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'cameraOcclusionDetection', callback: AsyncCallback<CameraOcclusionDetectionResult>): void;

    /**
     * Subscribes to camera occlusion detection results.
     * 
     * @param { AsyncCallback<CameraOcclusionDetectionResult> } callback - Callback used to get detection results.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onCameraOcclusionDetection(callback: AsyncCallback<CameraOcclusionDetectionResult>): void;

    /**
     * Unsubscribes from camera occlusion detection results.
     *
     * @param { 'cameraOcclusionDetection' } type - Event type.
     * @param { AsyncCallback<CameraOcclusionDetectionResult> } callback - Callback used to get detection results.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'cameraOcclusionDetection', callback?: AsyncCallback<CameraOcclusionDetectionResult>): void;

    /**
     * Unsubscribes from camera occlusion detection results.
     * 
     * @param { AsyncCallback<CameraOcclusionDetectionResult> } callback - Callback used to get detection results.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offCameraOcclusionDetection(callback?: AsyncCallback<CameraOcclusionDetectionResult>): void;

    /**
     * Sets the camera to be used as a camera at the specified position.
     *
     * @param { CameraPosition } position - The positon used for the camera.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 19 dynamic
     * @since 20 static
     */
    usedAsPosition(position: CameraPosition): void;

    /**
     * Control auxiliary.
     *
     * @param { AuxiliaryType } auxiliaryType - Auxiliary type.
     * @param { AuxiliaryStatus } auxiliaryStatus - Auxiliary status.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    controlAuxiliary(auxiliaryType: AuxiliaryType, auxiliaryStatus: AuxiliaryStatus): Promise<void>;
  }

  /**
   * Enumerates the camera scene modes.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * Enumerates the camera scene modes.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum SceneMode {
    /**
     * Normal photo mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Normal photo mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    NORMAL_PHOTO = 1,

    /**
     * Normal video mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Normal video mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    NORMAL_VIDEO = 2,

    /**
     * Portrait photo mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    PORTRAIT_PHOTO = 3,

    /**
     * Night photo mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    NIGHT_PHOTO = 4,

    /**
     * Professional photo mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    PROFESSIONAL_PHOTO = 5,

    /**
     * Professional video mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    PROFESSIONAL_VIDEO = 6,

    /**
     * Slow motion video mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    SLOW_MOTION_VIDEO = 7,

    /**
     * Macro photo mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    MACRO_PHOTO = 8,

    /**
     * Macro video mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    MACRO_VIDEO = 9,

    /**
     * Light painting photo mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    LIGHT_PAINTING_PHOTO = 10,

    /**
     * High resolution mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    HIGH_RESOLUTION_PHOTO = 11,

    /**
     * Secure camera mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Secure camera mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    SECURE_PHOTO = 12,

    /**
     * Quick shot mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    QUICK_SHOT_PHOTO = 13,

    /**
     * Aperture video mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    APERTURE_VIDEO = 14,

    /**
     * Panorama photo camera mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    PANORAMA_PHOTO = 15,

    /**
     * Timelapse photo camera mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    TIME_LAPSE_PHOTO = 16,

    /**
     * Fluorescence photo mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    FLUORESCENCE_PHOTO = 17
  }

  /**
   * Enum for camera format type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Enum for camera format type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum CameraFormat {
    /**
     * RGBA 8888 Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * RGBA 8888 Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_FORMAT_RGBA_8888 = 3,

    /**
     * Digital negative Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    CAMERA_FORMAT_DNG = 4,

    /**
     * Extreme Digital Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    CAMERA_FORMAT_DNG_XDRAW = 5,

    /**
     * YUV 420 Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * YUV 420 Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_FORMAT_YUV_420_SP = 1003,

    /**
     * JPEG Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * JPEG Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_FORMAT_JPEG = 2000,

    /**
     * YCBCR P010 Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * YCBCR P010 Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_FORMAT_YCBCR_P010,

    /**
     * YCRCB P010 Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * YCRCB P010 Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_FORMAT_YCRCB_P010,

    /**
     * HEIC Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * HEIC Format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_FORMAT_HEIC = 2003,

    /**
     * Depth Data Format: float 16.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    CAMERA_FORMAT_DEPTH_16 = 3000,

    /**
     * Depth Data Format: float 32.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    CAMERA_FORMAT_DEPTH_32 = 3001
  }

  /**
   * Enum for flash mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Enum for flash mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum FlashMode {
    /**
     * Close mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Close mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    FLASH_MODE_CLOSE = 0,

    /**
     * Open mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Open mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    FLASH_MODE_OPEN = 1,

    /**
     * Auto mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Auto mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    FLASH_MODE_AUTO = 2,

    /**
     * Always open mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Always open mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    FLASH_MODE_ALWAYS_OPEN = 3
  }

  /**
   * LCD Flash Status.
   *
   * @typedef LcdFlashStatus
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface LcdFlashStatus {
    /**
     * Check whether lcd flash is needed.
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly isLcdFlashNeeded: boolean;

    /**
     * Compensate value for lcd flash.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly lcdCompensation: int;
  }

  /**
   * Flash Query object.
   *
   * @interface FlashQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 12
   */
  /**
   * Flash Query object.
   *
   * @interface FlashQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface FlashQuery {
    /**
     * Check if device has flash light.
     *
     * @returns { boolean } The flash light support status.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Check if device has flash light.
     * Move to FlashQuery interface from Flash since 12.
     *
     * @returns { boolean } The flash light support status.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Check if device has flash light.
     * Move to FlashQuery interface from Flash since 12.
     *
     * @returns { boolean } The flash light support status.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    hasFlash(): boolean;

    /**
     * Checks whether a specified flash mode is supported.
     *
     * @param { FlashMode } flashMode - Flash mode
     * @returns { boolean } Is the flash mode supported.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Checks whether a specified flash mode is supported.
     * Move to FlashQuery interface from Flash since 12.
     *
     * @param { FlashMode } flashMode - Flash mode
     * @returns { boolean } Is the flash mode supported.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Checks whether a specified flash mode is supported.
     * Move to FlashQuery interface from Flash since 12.
     *
     * @param { FlashMode } flashMode - Flash mode
     * @returns { boolean } Is the flash mode supported.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    isFlashModeSupported(flashMode: FlashMode): boolean;

    /**
     * Checks whether lcd flash is supported.
     *
     * @returns { boolean } Is lcd flash supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    isLcdFlashSupported(): boolean;
  }

  /**
   * Flash object.
   *
   * @extends FlashQuery
   * @interface Flash
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * Flash object.
   *
   * @extends FlashQuery
   * @interface Flash
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface Flash extends FlashQuery {
    /**
     * Gets current flash mode.
     *
     * @returns { FlashMode } The current flash mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Gets current flash mode.
     *
     * @returns { FlashMode } The current flash mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getFlashMode(): FlashMode;

    /**
     * Sets flash mode.
     *
     * @param { FlashMode } flashMode - Target flash mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Sets flash mode.
     *
     * @param { FlashMode } flashMode - Target flash mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setFlashMode(flashMode: FlashMode): void;

    /**
     * Enable lcd flash.
     *
     * @param { boolean } enabled - Target lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    enableLcdFlash(enabled: boolean): void;
  }

  /**
   * Enum for exposure mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Enum for exposure mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum ExposureMode {
    /**
     * Lock exposure mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Lock exposure mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    EXPOSURE_MODE_LOCKED = 0,

    /**
     * Auto exposure mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Auto exposure mode. Exposure area center point can be set by AutoExposure.setMeteringPoint interface.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    EXPOSURE_MODE_AUTO = 1,

    /**
     * Continuous automatic exposure.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Continuous automatic exposure.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    EXPOSURE_MODE_CONTINUOUS_AUTO = 2,

    /**
     * Manual exposure mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    EXPOSURE_MODE_MANUAL = 3
  }

  /**
   * Enum for exposure metering mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  enum ExposureMeteringMode {
    /**
     * Matrix metering.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    MATRIX = 0,

    /**
     * Center metering.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    CENTER = 1,

    /**
     * Spot metering.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    SPOT = 2
  }

  /**
   * AutoExposureQuery object.
   *
   * @interface AutoExposureQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 12
   */
  /**
   * AutoExposureQuery object.
   *
   * @interface AutoExposureQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface AutoExposureQuery {
    /**
     * Checks whether a specified exposure mode is supported.
     *
     * @param { ExposureMode } aeMode - Exposure mode
     * @returns { boolean } Is the exposure mode supported.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Checks whether a specified exposure mode is supported.
     * Move to AutoExposureQuery interface from AutoExposure interface since 12.
     *
     * @param { ExposureMode } aeMode - Exposure mode
     * @returns { boolean } Is the exposure mode supported.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Checks whether a specified exposure mode is supported.
     * Move to AutoExposureQuery interface from AutoExposure interface since 12.
     *
     * @param { ExposureMode } aeMode - Exposure mode
     * @returns { boolean } Is the exposure mode supported.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    isExposureModeSupported(aeMode: ExposureMode): boolean;

    /**
     * Query the exposure compensation range.
     *
     * @returns { Array<double> } The array of compensation range.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Query the exposure compensation range.
     * Move to AutoExposureQuery interface from AutoExposure interface since 12.
     *
     * @returns { Array<double> } The array of compensation range.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Query the exposure compensation range.
     * Move to AutoExposureQuery interface from AutoExposure interface since 12.
     *
     * @returns { Array<double> } The array of compensation range.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getExposureBiasRange(): Array<double>;

    /**
     * Checks whether a specified exposure metering mode is supported.
     *
     * @param { ExposureMeteringMode } aeMeteringMode - Exposure metering mode
     * @returns { boolean } Is the exposure metering mode supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    isExposureMeteringModeSupported(aeMeteringMode: ExposureMeteringMode): boolean;
  }

  /**
   * AutoExposure object.
   *
   * @extends AutoExposureQuery
   * @interface AutoExposure
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * AutoExposure object.
   *
   * @extends AutoExposureQuery
   * @interface AutoExposure
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface AutoExposure extends AutoExposureQuery {
    /**
     * Gets current exposure mode.
     *
     * @returns { ExposureMode } The current exposure mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Gets current exposure mode.
     *
     * @returns { ExposureMode } The current exposure mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getExposureMode(): ExposureMode;

    /**
     * Sets Exposure mode.
     *
     * @param { ExposureMode } aeMode - Exposure mode
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Sets Exposure mode.
     *
     * @param { ExposureMode } aeMode - Exposure mode
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setExposureMode(aeMode: ExposureMode): void;

    /**
     * Gets current metering point.
     *
     * @returns { Point } The current metering point.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Gets current metering point.
     *
     * @returns { Point } The current metering point.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getMeteringPoint(): Point;

    /**
     * Set the center point of the metering area.
     *
     * @param { Point } point - metering point
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Set the center point of the metering area.
     *
     * @param { Point } point - metering point
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setMeteringPoint(point: Point): void;

    /**
     * Set exposure compensation.
     *
     * @param { double } exposureBias - Exposure compensation
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Set exposure compensation.
     *
     * @param { double } exposureBias - Exposure compensation
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Set exposure compensation.
     *
     * @param { double } exposureBias - Exposure compensation
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setExposureBias(exposureBias: double): void;

    /**
     * Query the exposure value.
     *
     * @returns { double } The exposure value.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Query the exposure value.
     *
     * @returns { double } The exposure value.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getExposureValue(): double;

    /**
     * Gets current exposure metering mode.
     *
     * @returns { ExposureMeteringMode } The current exposure metering mode.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getExposureMeteringMode(): ExposureMeteringMode;

    /**
     * Sets exposure metering mode.
     *
     * @param { ExposureMeteringMode } aeMeteringMode - Exposure metering mode
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    setExposureMeteringMode(aeMeteringMode: ExposureMeteringMode): void;
  }

  /**
   * Enum for focus mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Enum for focus mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum FocusMode {
    /**
     * Manual mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Manual mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    FOCUS_MODE_MANUAL = 0,

    /**
     * Continuous auto mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Continuous auto mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    FOCUS_MODE_CONTINUOUS_AUTO = 1,

    /**
     * Auto mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Auto mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    FOCUS_MODE_AUTO = 2,

    /**
     * Locked mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Locked mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    FOCUS_MODE_LOCKED = 3
  }

  /**
   * Enum for focus state.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Enum for focus state.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum FocusState {
    /**
     * Scan state.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Scan state.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    FOCUS_STATE_SCAN = 0,

    /**
     * Focused state.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Focused state.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    FOCUS_STATE_FOCUSED = 1,

    /**
     * Unfocused state.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unfocused state.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    FOCUS_STATE_UNFOCUSED = 2
  }

  /**
   * Enum for focus range type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 20 static
   */
  enum FocusRangeType {
    /**
     * Automatic focus range type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    AUTO = 0,

    /**
     * Focus on near objects primarily.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    NEAR = 1
  }

  /**
   * Enum for focus driven type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 20 static
   */
  enum FocusDrivenType {
    /**
     * Automatic focus driven type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    AUTO = 0,

    /**
     * Face focus driven type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    FACE = 1
  }

  /**
   * Enum for focus tracking mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 20 static
   */
  enum FocusTrackingMode {
    /**
     * Automatic focus tracking mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    AUTO = 0
  }

  /**
   * Focus tracking info.
   *
   * @typedef FocusTrackingInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 20 static
   */
  interface FocusTrackingInfo {
    /**
     * mode of focus tracking.
     *
     * @type { FocusTrackingMode }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    trackingMode: FocusTrackingMode;

    /**
     * region of focus tracking.
     *
     * @type { Rect }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    trackingRegion: Rect;
  }

  /**
   * Focus Query object.
   *
   * @interface FocusQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 12
   */
  /**
   * Focus Query object.
   *
   * @interface FocusQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface FocusQuery {
    /**
     * Checks whether a specified focus mode is supported.
     *
     * @param { FocusMode } afMode - Focus mode.
     * @returns { boolean } Is the focus mode supported.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Checks whether a specified focus mode is supported.
     * Move to FocusQuery interface from Focus interface since 12.
     *
     * @param { FocusMode } afMode - Focus mode.
     * @returns { boolean } Is the focus mode supported.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Checks whether a specified focus mode is supported.
     * Move to FocusQuery interface from Focus interface since 12.
     *
     * @param { FocusMode } afMode - Focus mode.
     * @returns { boolean } Is the focus mode supported.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    isFocusModeSupported(afMode: FocusMode): boolean;

    /**
     * Checks whether a focus assist is supported.
     *
     * @returns { boolean } Is the focus assist supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    isFocusAssistSupported(): boolean;

    /**
     * Checks whether a specified focus range type is supported.
     *
     * @param { FocusRangeType } type - Focus range type.
     * @returns { boolean } Is the focus range type supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     * 3. Parameter verification failed.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    isFocusRangeTypeSupported(type: FocusRangeType): boolean;

    /**
     * Checks whether a specified focus driven type is supported.
     *
     * @param { FocusDrivenType } type - Focus driven type.
     * @returns { boolean } Is the focus driven type supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     * 3. Parameter verification failed.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    isFocusDrivenTypeSupported(type: FocusDrivenType): boolean;
  }

  /**
   * Focus object.
   *
   * @extends FocusQuery
   * @interface Focus
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * Focus object.
   *
   * @extends FocusQuery
   * @interface Focus
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface Focus extends FocusQuery {
    /**
     * Gets current focus mode.
     *
     * @returns { FocusMode } The current focus mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Gets current focus mode.
     *
     * @returns { FocusMode } The current focus mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getFocusMode(): FocusMode;

    /**
     * Sets focus mode.
     *
     * @param { FocusMode } afMode - Target focus mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Sets focus mode.
     *
     * @param { FocusMode } afMode - Target focus mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setFocusMode(afMode: FocusMode): void;

    /**
     * Sets focus point.
     *
     * @param { Point } point - Target focus point.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Sets focus point.
     *
     * @param { Point } point - Target focus point.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setFocusPoint(point: Point): void;

    /**
     * Gets current focus point.
     *
     * @returns { Point } The current focus point.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Gets current focus point.
     *
     * @returns { Point } Used to get the current focus. Failure of the interface call will return the
     * corresponding error code, which is of type CameraErrorCode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getFocusPoint(): Point;

    /**
     * Gets current focal length.
     *
     * @returns { double } The current focal point.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Gets current focal length.
     *
     * @returns { double } The current focal point.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getFocalLength(): double;

    /**
     * Gets current focus assist.
     *
     * @returns { boolean } The current focus assist.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    getFocusAssist(): boolean;

    /**
     * Sets focus assist.
     *
     * @param { boolean } enabled - Enable focus assist if TRUE.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    setFocusAssist(enabled: boolean): void;

    /**
     * Gets current focus range type.
     *
     * @returns { FocusRangeType } The current focus range type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    getFocusRange(): FocusRangeType;

    /**
     * Sets focus range type.
     *
     * @param { FocusRangeType } type - Target focus range type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     * 3. Parameter verification failed.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    setFocusRange(type: FocusRangeType): void;

    /**
     * Gets current focus driven type.
     *
     * @returns { FocusDrivenType } The current focus driven type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    getFocusDriven(): FocusDrivenType;

    /**
     * Sets focus driven type.
     *
     * @param { FocusDrivenType } type - Target focus driven type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     * 3. Parameter verification failed.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    setFocusDriven(type: FocusDrivenType): void;
  }

  /**
   * ManualFocus object.
   *
   * @interface ManualFocus
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface ManualFocus {
    /**
     * Gets current focus distance.
     *
     * @returns { double } The current focus distance.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getFocusDistance(): double;

    /**
     * Sets focus distance.
     *
     * @param { double } distance - Focus distance
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    setFocusDistance(distance: double): void;
  }

  /**
   * Enumerates the camera white balance modes.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12
   */
  /**
   * Enumerates the camera white balance modes.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic&static
   */
  enum WhiteBalanceMode {
    /**
     * Automatic white balance mode.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Automatic white balance mode.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic&static
     */
    AUTO = 0,

    /**
     * Cloudy white balance mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Cloudy white balance mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic&static
     */
    CLOUDY = 1,

    /**
     * Incandescent white balance mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Incandescent white balance mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic&static
     */
    INCANDESCENT = 2,

    /**
     * Fluorescent white balance mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Fluorescent white balance mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic&static
     */
    FLUORESCENT = 3,

    /**
     * Daylight white balance mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Daylight white balance mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic&static
     */
    DAYLIGHT = 4,

    /**
     * Manual white balance mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Manual white balance mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic&static
     */
    MANUAL = 5,

    /**
     * Lock white balance mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Lock white balance mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic&static
     */
    LOCKED = 6
  }

  /**
   * White Balance Query object.
   *
   * @interface WhiteBalanceQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12
   */
  /**
   * White Balance Query object.
   *
   * @interface WhiteBalanceQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic&static
   */
  interface WhiteBalanceQuery {
    /**
     * Checks whether a specified white balance mode is supported.
     *
     * @param { WhiteBalanceMode } mode - White balance mode.
     * @returns { boolean } Is the white balance mode supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Checks whether the specified white balance mode is supported.
     * @param { WhiteBalanceMode } mode White balance mode.
     * @returns { boolean } Check result.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic&static
     */
    isWhiteBalanceModeSupported(mode: WhiteBalanceMode): boolean;

    /**
     * Query the white balance mode range.
     *
     * @returns { Array<int> } The array of white balance mode range.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Query the white balance mode range.
     *
     * @returns { Array<int> } The array of white balance mode range.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic&static
     */
    getWhiteBalanceRange(): Array<int>;
  }

  /**
   * WhiteBalance object.
   *
   * @extends WhiteBalanceQuery
   * @interface WhiteBalance
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12
   */
  /**
   * WhiteBalance object.
   *
   * @extends WhiteBalanceQuery
   * @interface WhiteBalance
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic&static
   */
  interface WhiteBalance extends WhiteBalanceQuery {
    /**
     * Gets current white balance mode.
     *
     * @returns { WhiteBalanceMode } The current white balance mode.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Obtains the white balance mode in use.
     * @returns { WhiteBalanceMode } White balance mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic&static
     */
    getWhiteBalanceMode(): WhiteBalanceMode;

    /**
     * Sets white balance mode.
     *
     * @param { WhiteBalanceMode } mode - Target white balance mode.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Sets white balance mode.
     *
     * @param { WhiteBalanceMode } mode - Target white balance mode.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic&static
     */
    setWhiteBalanceMode(mode: WhiteBalanceMode): void;

    /**
     * Gets current white balance.
     *
     * @returns { int } The current white balance.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Gets current white balance.
     *
     * @returns { int } The current white balance.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic&static
     */
    getWhiteBalance(): int;

    /**
     * Sets white balance.
     *
     * @param { int } whiteBalance - White balance.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Sets white balance.
     *
     * @param { int } whiteBalance - White balance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic&static
     */
    setWhiteBalance(whiteBalance: int): void;
  }

  /**
   * Manual ISO Query object.
   *
   * @interface ManualIsoQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface ManualIsoQuery {
    /**
     * Checks whether ISO is supported.
     *
     * @returns { boolean } Is the ISO supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    isManualIsoSupported(): boolean;

    /**
     * Get the ISO range.
     *
     * @returns { Array<int> } The array of ISO range.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getIsoRange(): Array<int>;
  }

  /**
   * ManualIso object.
   *
   * @extends ManualIsoQuery
   * @interface ManualIso
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface ManualIso extends ManualIsoQuery {
    /**
     * Gets current ISO.
     *
     * @returns { int } The current ISO.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getIso(): int;

    /**
     * Sets ISO.
     *
     * @param { int } iso - ISO
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    setIso(iso: int): void;
  }

  /**
   * Enum for smooth zoom mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * Enum for smooth zoom mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum SmoothZoomMode {
    /**
     * Normal zoom mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Normal zoom mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    NORMAL = 0
  }

  /**
   * SmoothZoomInfo object
   *
   * @typedef SmoothZoomInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * SmoothZoomInfo object
   *
   * @typedef SmoothZoomInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface SmoothZoomInfo {
    /**
     * The duration of smooth zoom.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * The duration of smooth zoom.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    duration: int;
  }

  /**
   * ZoomPointInfo object.
   *
   * @typedef ZoomPointInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface ZoomPointInfo {
    /**
     * The zoom ratio value.
     *
     * @type { double }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly zoomRatio: double;

    /**
     * The equivalent focal Length.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly equivalentFocalLength: int;
  }

  /**
   * Zoom query object.
   *
   * @interface ZoomQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 12
   */
  /**
   * Zoom query object.
   *
   * @interface ZoomQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface ZoomQuery {
    /**
     * Gets all supported zoom ratio range.
     *
     * @returns { Array<double> } The zoom ratio range.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Gets all supported zoom ratio range.
     * Move to ZoomQuery interface from Zoom since 12.
     *
     * @returns { Array<double> } The zoom ratio range.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Gets all supported zoom ratio range.
     * Move to ZoomQuery interface from Zoom since 12.
     *
     * @returns { Array<double> } The zoom ratio range.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getZoomRatioRange(): Array<double>;

    /**
     * Gets all important zoom ratio infos.
     *
     * @returns { Array<ZoomPointInfo> } The zoom point infos.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getZoomPointInfos(): Array<ZoomPointInfo>;
  }

  /**
   * Zoom object.
   *
   * @extends ZoomQuery
   * @interface Zoom
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * Zoom object.
   *
   * @extends ZoomQuery
   * @interface Zoom
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface Zoom extends ZoomQuery {
    /**
     * Gets zoom ratio.
     *
     * @returns { double } The zoom ratio value.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Gets zoom ratio.
     *
     * @returns { double } The zoom ratio value.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Gets zoom ratio.
     *
     * @returns { double } The zoom ratio value.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getZoomRatio(): double;

    /**
     * Sets zoom ratio.
     *
     * @param { double } zoomRatio - Target zoom ratio.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Sets zoom ratio.
     *
     * @param { double } zoomRatio - Target zoom ratio.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setZoomRatio(zoomRatio: double): void;

    /**
     * Sets target zoom ratio by smooth method.
     *
     * @param { double } targetRatio - Target zoom ratio.
     * @param { SmoothZoomMode } mode - Smooth zoom mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Sets target zoom ratio by smooth method.
     *
     * @param { double } targetRatio - Target zoom ratio.
     * @param { SmoothZoomMode } mode - Smooth zoom mode.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Sets target zoom ratio by smooth method.
     *
     * @param { double } targetRatio - Target zoom ratio.
     * @param { SmoothZoomMode } mode - Smooth zoom mode.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setSmoothZoom(targetRatio: double, mode?: SmoothZoomMode): void;

    /**
     * Notify device to prepare for zoom.
     *
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    prepareZoom(): void;

    /**
     * Notify device of zoom completion.
     *
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    unprepareZoom(): void;
  }

  /**
   * Enum for video stabilization mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Enum for video stabilization mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum VideoStabilizationMode {
    /**
     * Turn off video stablization.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Turn off video stablization.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    OFF = 0,

    /**
     * LOW mode provides basic stabilization effect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * LOW mode provides basic stabilization effect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    LOW = 1,

    /**
     * MIDDLE mode means algorithms can achieve better effects than LOW mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * MIDDLE mode means algorithms can achieve better effects than LOW mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    MIDDLE = 2,

    /**
     * HIGH mode means algorithms can achieve better effects than MIDDLE mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * HIGH mode means algorithms can achieve better effects than MIDDLE mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    HIGH = 3,

    /**
     * Camera HDF can select mode automatically.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * The stabilization algorithm is selected automatically. Selection of the stabilization algorithm is performed automatically.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    AUTO = 4
  }

  /**
   * Stabilization Query object.
   *
   * @interface StabilizationQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 12
   */
  /**
   * Stabilization Query object.
   *
   * @interface StabilizationQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface StabilizationQuery {
    /**
     * Check whether the specified video stabilization mode is supported.
     *
     * @param { VideoStabilizationMode } vsMode - Video Stabilization mode.
     * @returns { boolean } Is video stabilization mode supported.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Check whether the specified video stabilization mode is supported.
     * Move to StabilizationQuery interface from Stabilization since 12.
     *
     * @param { VideoStabilizationMode } vsMode - Video Stabilization mode.
     * @returns { boolean } Is video stabilization mode supported.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Check whether the specified video stabilization mode is supported.
     * Move to StabilizationQuery interface from Stabilization since 12.
     *
     * @param { VideoStabilizationMode } vsMode - Video Stabilization mode.
     * @returns { boolean } Is video stabilization mode supported.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    isVideoStabilizationModeSupported(vsMode: VideoStabilizationMode): boolean;
  }

  /**
   * Stabilization object.
   *
   * @extends StabilizationQuery
   * @interface Stabilization
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * Stabilization object.
   *
   * @extends StabilizationQuery
   * @interface Stabilization
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface Stabilization extends StabilizationQuery {
    /**
     * Query the video stabilization mode currently in use.
     *
     * @returns { VideoStabilizationMode } The current video stabilization mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Query the video stabilization mode currently in use.
     *
     * @returns { VideoStabilizationMode } The current video stabilization mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getActiveVideoStabilizationMode(): VideoStabilizationMode;

    /**
     * Set video stabilization mode.
     *
     * @param { VideoStabilizationMode } mode - video stabilization mode to set.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Set video stabilization mode.
     *
     * @param { VideoStabilizationMode } mode - video stabilization mode to set.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setVideoStabilizationMode(mode: VideoStabilizationMode): void;
  }

  /**
   * Enumerates the camera portrait theme types.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 14 dynamic
   * @since 20 static
   */
  enum PortraitThemeType {
    /**
     * Natural portrait theme type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 20 static
     */
    NATURAL = 0,

    /**
     * Delicate portrait theme type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 20 static
     */
    DELICATE = 1,

    /**
     * Stylish portrait theme type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 20 static
     */
    STYLISH = 2
  }

  /**
   * Enumerates the camera beauty effect types.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 10 dynamic
   * @since 20 static
   */
  enum BeautyType {
    /**
     * Auto beauty type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 20 static
     */
    AUTO = 0,

    /**
     * Skin smooth beauty type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 20 static
     */
    SKIN_SMOOTH = 1,

    /**
     * Face slender beauty type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 20 static
     */
    FACE_SLENDER = 2,

    /**
     * Skin tone beauty type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 20 static
     */
    SKIN_TONE = 3
  }

  /**
   * Beauty Query object.
   *
   * @interface BeautyQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface BeautyQuery {
    /**
     * Gets supported beauty effect types.
     *
     * @returns { Array<BeautyType> } List of beauty effect types.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
    /**
     * Gets supported beauty effect types.
     * Move to BeautyQuery from Beauty since 12.
     *
     * @returns { Array<BeautyType> } List of beauty effect types.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getSupportedBeautyTypes(): Array<BeautyType>;

    /**
     * Gets the specific beauty effect type range.
     *
     * @param { BeautyType } type - The type of beauty effect.
     * @returns { Array<int> } The array of the specific beauty effect range.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
    /**
     * Gets the specific beauty effect type range.
     * Move to BeautyQuery from Beauty since 12.
     *
     * @param { BeautyType } type - The type of beauty effect.
     * @returns { Array<int> } The array of the specific beauty effect range.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getSupportedBeautyRange(type: BeautyType): Array<int>;

    /**
     * Gets supported portrait theme type.
     *
     * @returns { Array<PortraitThemeType> } Lists of portrait theme types
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 20 static
     */
    getSupportedPortraitThemeTypes(): Array<PortraitThemeType>;

    /**
     * Checks whether portrait theme is supported.
     *
     * @returns { boolean } Is portrait theme supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 20 static
     */
    isPortraitThemeSupported(): boolean;
  }

  /**
   * Beauty object.
   *
   * @extends BeautyQuery
   * @interface Beauty
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  interface Beauty extends BeautyQuery {
    /**
     * Gets the beauty effect in use.
     *
     * @param { BeautyType } type - The type of beauty effect.
     * @returns { int } the beauty effect in use.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    getBeauty(type: BeautyType): int;

    /**
     * Sets a beauty effect for a camera device.
     *
     * @param { BeautyType } type - The type of beauty effect.
     * @param { int } value The number of beauty effect.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    setBeauty(type: BeautyType, value: int): void;

    /**
     * Sets a portrait theme type for a camera device.
     *
     * @param { PortraitThemeType } type - The type of portrait theme.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 20 static
     */
    setPortraitThemeType(type: PortraitThemeType): void;
  }

  /**
   * EffectSuggestion object.
   *
   * @typedef EffectSuggestion
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface EffectSuggestion {

    /**
     * Checks whether effect suggestion is supported.
     *
     * @returns { boolean } Is the effect suggestion supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    isEffectSuggestionSupported(): boolean;

    /**
     * Enable effect suggestion for session.
     *
     * @param { boolean } enabled enable effect suggestion for session if TRUE..
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    enableEffectSuggestion(enabled: boolean): void;

    /**
     * Gets supported effect suggestion types.
     *
     * @returns { Array<EffectSuggestionType> } The array of the effect suggestion types.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getSupportedEffectSuggestionTypes(): Array<EffectSuggestionType>;

    /**
     * Set the range of effect suggestion type and enable status.
     * The application should fully set all data when it starts up.
     *
     * @param { Array<EffectSuggestionStatus> } status - The array of the effect suggestion status.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    setEffectSuggestionStatus(status: Array<EffectSuggestionStatus>): void;

    /**
     * Update the enable status of the effect suggestion type.
     *
     * @param { EffectSuggestionType } type - The type of effect suggestion.
     * @param { boolean } enabled - The status of effect suggestion type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    updateEffectSuggestion(type: EffectSuggestionType, enabled: boolean): void;
  }

  /**
   * Enumerates the camera color effect types.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  enum ColorEffectType {
    /**
     * Normal color effect type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    NORMAL = 0,

    /**
     * Bright color effect type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    BRIGHT = 1,

    /**
     * Soft color effect type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    SOFT = 2,

    /**
     * Black white color effect type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    BLACK_WHITE = 3
  }

  /**
   * Enum for policy type
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  enum PolicyType {
    /**
     * PRIVACY type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    PRIVACY = 1
  }

  /**
   * Color Effect Query object.
   *
   * @interface ColorEffectQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface ColorEffectQuery {
    /**
     * Gets supported color effect types.
     *
     * @returns { Array<ColorEffectType> } List of color effect types.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
    /**
     * Gets supported color effect types.
     * Move to ColorEffectQuery from ColorEffect since 12.
     *
     * @returns { Array<ColorEffectType> } List of color effect types.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getSupportedColorEffects(): Array<ColorEffectType>;
  }

  /**
   * Color effect object.
   *
   * @extends ColorEffectQuery
   * @interface ColorEffect
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  interface ColorEffect extends ColorEffectQuery {
    /**
     * Gets the specific color effect type.
     *
     * @returns { ColorEffectType } The array of the specific color effect type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    getColorEffect(): ColorEffectType;

    /**
     * Sets a color effect for a camera device.
     *
     * @param { ColorEffectType } type - The type of color effect.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    setColorEffect(type: ColorEffectType): void;
  }

  /**
   * Color Management Query object.
   *
   * @interface ColorManagementQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 12
   */
  /**
   * Color Management Query object.
   *
   * @interface ColorManagementQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface ColorManagementQuery {
    /**
     * Gets the supported color space types.
     *
     * @returns { Array<colorSpaceManager.ColorSpace> } The array of the supported color space for the session.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Gets the supported color space types.
     *
     * @returns { Array<colorSpaceManager.ColorSpace> } The array of the supported color space for the session.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Gets the supported color space types.
     *
     * @returns { Array<colorSpaceManager.ColorSpace> } The array of the supported color space for the session.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getSupportedColorSpaces(): Array<colorSpaceManager.ColorSpace>;
  }

  /**
   * Color Management object.
   *
   * @extends ColorManagementQuery
   * @interface ColorManagement
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 12
   */
  /**
   * Color Management object.
   *
   * @extends ColorManagementQuery
   * @interface ColorManagement
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface ColorManagement extends ColorManagementQuery {
    /**
     * Gets the specific color space type.
     *
     * @returns { colorSpaceManager.ColorSpace } Current color space.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Gets the specific color space type.
     *
     * @returns { colorSpaceManager.ColorSpace } Current color space.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getActiveColorSpace(): colorSpaceManager.ColorSpace;

    /**
     * Sets a color space for the session.
     *
     * @param { colorSpaceManager.ColorSpace } colorSpace - The type of color space.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - The colorSpace does not match the format.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Sets a color space for the session.
     *
     * @param { colorSpaceManager.ColorSpace } colorSpace - The type of color space.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - The colorSpace does not match the format.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setColorSpace(colorSpace: colorSpaceManager.ColorSpace): void;
  }

  /**
   * Auto Device Switch Query object.
   *
   * @interface AutoDeviceSwitchQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 13
   */
  /**
   * Auto Device Switch Query object.
   *
   * @interface AutoDeviceSwitchQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface AutoDeviceSwitchQuery {
    /**
     * Check whether auto device switch is supported.
     *
     * @returns { boolean } Is auto device switch supported.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Check whether auto device switch is supported.
     *
     * @returns { boolean } Is auto device switch supported.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Check whether auto device switch is supported.
     *
     * @returns { boolean } Is auto device switch supported.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    isAutoDeviceSwitchSupported(): boolean;
  }

  /**
   * Auto Device Switch object.
   *
   * @extends AutoDeviceSwitchQuery
   * @interface AutoDeviceSwitch
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 13
   */
  /**
   * Auto Device Switch object.
   *
   * @extends AutoDeviceSwitchQuery
   * @interface AutoDeviceSwitch
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface AutoDeviceSwitch extends AutoDeviceSwitchQuery {
    /**
     * Enable auto device switch for session.
     *
     * @param { boolean } enabled - enable auto device switch if TRUE.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     * 3. Parameters verification failed.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Enable auto device switch for session.
     *
     * @param { boolean } enabled - enable auto device switch if TRUE.
     * @throws { BusinessError } 7400101 - Parameter error. Possible causes:
     * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     * 3. Parameters verification failed.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    enableAutoDeviceSwitch(enabled: boolean): void;
  }

  /**
   * Auto Device Switch Status.
   *
   * @typedef AutoDeviceSwitchStatus
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 13
   */
  /**
   * Auto Device Switch Status.
   *
   * @typedef AutoDeviceSwitchStatus
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface AutoDeviceSwitchStatus {
    /**
     * Notify whether device is switched.
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Notify whether device is switched.
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly isDeviceSwitched: boolean;

    /**
     * Notify whether device capability is changed.
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Notify whether device capability is changed.
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly isDeviceCapabilityChanged: boolean;
  }

  /**
   * Macro Query object.
   *
   * @interface MacroQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12
   */
  /**
   * Macro Query object.
   *
   * @interface MacroQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface MacroQuery {
    /**
     * Determine whether camera macro is supported.
     *
     * @returns { boolean } Is camera macro supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
    /**
     * Determine whether camera macro is supported.
     * Move to MacroQuery interface from Macro since 12.
     *
     * @returns { boolean } Is camera macro supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Determine whether camera macro is supported.
     *
     * @returns { boolean } Is camera macro supported.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    isMacroSupported(): boolean;
  }

  /**
   * Macro object.
   *
   * @extends MacroQuery
   * @interface Macro
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11
   */
  /**
   * Macro object.
   *
   * @extends MacroQuery
   * @interface Macro
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface Macro extends MacroQuery {
    /**
     * Enable macro for camera.
     *
     * @param { boolean } enabled - enable macro for camera if TRUE.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
    /**
     * Enable macro for camera.
     *
     * @param { boolean } enabled - enable macro for camera if TRUE.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Enable macro for camera.
     *
     * @param { boolean } enabled - enable macro for camera if TRUE.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    enableMacro(enabled: boolean): void;
  }

  /**
   * Enum for usage type used in capture session.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  enum UsageType {
    /**
     * Bokeh usage type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    BOKEH = 0
  }

  /**
   * Session object.
   *
   * @interface Session
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * Session object.
   *
   * @interface Session
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface Session {
    /**
     * Begin capture session config.
     *
     * @throws { BusinessError } 7400105 - Session config locked.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Begin capture session config.
     *
     * @throws { BusinessError } 7400105 - Session config locked.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Begin capture session config.
     *
     * @throws { BusinessError } 7400105 - Session config locked.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    beginConfig(): void;

    /**
     * Commit capture session config.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Commit capture session config.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    commitConfig(callback: AsyncCallback<void>): void;

    /**
     * Commit capture session config.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Commit capture session config.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    commitConfig(): Promise<void>;

    /**
     * Determines whether the camera input can be added into the session.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraInput } cameraInput - Target camera input to add.
     * @returns { boolean } You can add the input into the session.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Determines whether the camera input can be added into the session.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraInput } cameraInput - Target camera input to add.
     * @returns { boolean } You can add the input into the session.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    canAddInput(cameraInput: CameraInput): boolean;

    /**
     * Adds a camera input.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraInput } cameraInput - Target camera input to add.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Adds a camera input.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraInput } cameraInput - Target camera input to add.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Adds a camera input.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraInput } cameraInput - Target camera input to add.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Adds a camera input.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraInput } cameraInput - Target camera input to add.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    addInput(cameraInput: CameraInput): void;

    /**
     * Removes a camera input.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraInput } cameraInput - Target camera input to remove.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Removes a camera input.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraInput } cameraInput - Target camera input to remove.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Removes a camera input.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraInput } cameraInput - Target camera input to remove.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Removes a camera input.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraInput } cameraInput - Target camera input to remove.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    removeInput(cameraInput: CameraInput): void;

    /**
     * Determines whether the camera output can be added into the session.
     * This method is valid after Session.addInput(cameraInput) and before Session.commitConfig().
     *
     * @param { CameraOutput } cameraOutput - Target camera output to add.
     * @returns { boolean } You can add the output into the session.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Determines whether the camera output can be added into the session.
     * This method is valid after Session.addInput(cameraInput) and before Session.commitConfig().
     *
     * @param { CameraOutput } cameraOutput - Target camera output to add.
     * @returns { boolean } You can add the output into the session.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    canAddOutput(cameraOutput: CameraOutput): boolean;

    /**
     * Adds a camera output.
     * This method is valid after Session.addInput(cameraInput) and before Session.commitConfig().
     *
     * @param { CameraOutput } cameraOutput - Target camera output to add.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Adds a camera output.
     * This method is valid after Session.addInput(cameraInput) and before Session.commitConfig().
     *
     * @param { CameraOutput } cameraOutput - Target camera output to add.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Adds a camera output.
     * This method is valid after Session.addInput(cameraInput) and before Session.commitConfig().
     *
     * @param { CameraOutput } cameraOutput - Target camera output to add.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Adds a camera output.
     * This method is valid after Session.addInput(cameraInput) and before Session.commitConfig().
     *
     * @param { CameraOutput } cameraOutput - Target camera output to add.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    addOutput(cameraOutput: CameraOutput): void;

    /**
     * Removes a camera output.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraOutput } cameraOutput - Target camera output to remove.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Removes a camera output.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraOutput } cameraOutput - Target camera output to remove.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Removes a camera output.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraOutput } cameraOutput - Target camera output to remove.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Removes a camera output.
     * This method is valid between Session.beginConfig() and Session.commitConfig().
     *
     * @param { CameraOutput } cameraOutput - Target camera output to remove.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    removeOutput(cameraOutput: CameraOutput): void;

    /**
     * Starts capture session.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Starts capture session.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Starts capture session.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Starts capture session.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Starts capture session.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Starts capture session.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    start(): Promise<void>;

    /**
     * Stops capture session.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Stops capture session.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stops capture session.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Stops capture session.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    stop(): Promise<void>;

    /**
     * Release capture session instance.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Release capture session instance.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Release capture session instance.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Release capture session instance.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    release(): Promise<void>;

    /**
     * Set usage for the capture session.
     *
     * @param { UsageType } usage - The capture session usage.
     * @param { boolean } enabled - Enable usage for session if TRUE.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    setUsage(usage: UsageType, enabled: boolean): void;

    /**
     * Get the supported camera output capability set.
     *
     * @param { CameraDevice } camera - Camera device.
     * @returns { Array<CameraOutputCapability> } The array of the output capability.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    getCameraOutputCapabilities(camera: CameraDevice): Array<CameraOutputCapability>;
  }

  /**
   * Capture session object.
   *
   * @interface CaptureSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.multimedia.camera.VideoSession
   */
  interface CaptureSession {
    /**
     * Begin capture session config.
     *
     * @throws { BusinessError } 7400105 - Session config locked.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#beginConfig
     */
    beginConfig(): void;

    /**
     * Commit capture session config.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#commitConfig
     */
    commitConfig(callback: AsyncCallback<void>): void;

    /**
     * Commit capture session config.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#commitConfig
     */
    commitConfig(): Promise<void>;

    /**
     * Adds a camera input.
     *
     * @param { CameraInput } cameraInput - Target camera input to add.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#addInput
     */
    addInput(cameraInput: CameraInput): void;

    /**
     * Removes a camera input.
     *
     * @param { CameraInput } cameraInput - Target camera input to remove.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#removeInput
     */
    removeInput(cameraInput: CameraInput): void;

    /**
     * Adds a camera output.
     *
     * @param { CameraOutput } cameraOutput - Target camera output to add.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#addOutput
     */
    addOutput(cameraOutput: CameraOutput): void;

    /**
     * Removes a camera output.
     *
     * @param { CameraOutput } cameraOutput - Target camera output to remove.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#removeOutput
     */
    removeOutput(cameraOutput: CameraOutput): void;

    /**
     * Starts capture session.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#start
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Starts capture session.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#start
     */
    start(): Promise<void>;

    /**
     * Stops capture session.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#stop
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stops capture session.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#stop
     */
    stop(): Promise<void>;

    /**
     * Release capture session instance.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#release
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Release capture session instance.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#release
     */
    release(): Promise<void>;

    /**
     * Check if device has flash light.
     *
     * @returns { boolean } The flash light support status.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Flash#hasFlash
     */
    hasFlash(): boolean;

    /**
     * Checks whether a specified flash mode is supported.
     *
     * @param { FlashMode } flashMode - Flash mode
     * @returns { boolean } Is the flash mode supported.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Flash#isFlashModeSupported
     */
    isFlashModeSupported(flashMode: FlashMode): boolean;

    /**
     * Gets current flash mode.
     *
     * @returns { FlashMode } The current flash mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Flash#getFlashMode
     */
    getFlashMode(): FlashMode;

    /**
     * Sets flash mode.
     *
     * @param { FlashMode } flashMode - Target flash mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Flash#setFlashMode
     */
    setFlashMode(flashMode: FlashMode): void;

    /**
     * Checks whether a specified exposure mode is supported.
     *
     * @param { ExposureMode } aeMode - Exposure mode
     * @returns { boolean } Is the exposure mode supported.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.AutoExposure#isExposureModeSupported
     */
    isExposureModeSupported(aeMode: ExposureMode): boolean;

    /**
     * Gets current exposure mode.
     *
     * @returns { ExposureMode } The current exposure mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.AutoExposure#getExposureMode
     */
    getExposureMode(): ExposureMode;

    /**
     * Sets Exposure mode.
     *
     * @param { ExposureMode } aeMode - Exposure mode
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.AutoExposure#setExposureMode
     */
    setExposureMode(aeMode: ExposureMode): void;

    /**
     * Gets current metering point.
     *
     * @returns { Point } The current metering point.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.AutoExposure#getMeteringPoint
     */
    getMeteringPoint(): Point;

    /**
     * Set the center point of the exposure area, the exposure point should be located in the 0-1 coordinate system,
     * which is {0, 0} in the upper left corner and {1, 1} in the bottom right corner. This coordinate system is
     * based on the horizontal device orientation when the device charging port is on the right side, e.g. the preview
     * interface layout of an application is based on the vertical direction when the device charging port is on the lower side,
     * the layout width and height is {w, h}, and the touch point is {x, y}. Then the transformed coordinate point is {y/h, 1-x/w}.
     *
     * @param { Point } point - metering point
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.AutoExposure#setMeteringPoint
     */
    setMeteringPoint(point: Point): void;

    /**
     * Query the exposure compensation range.
     *
     * @returns { Array<number> } The array of compensation range.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.AutoExposure#getExposureBiasRange
     */
    getExposureBiasRange(): Array<number>;

    /**
     * Set exposure compensation.
     *
     * @param { number } exposureBias - Exposure compensation
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.AutoExposure#setExposureBias
     */
    setExposureBias(exposureBias: number): void;

    /**
     * Queries the current exposure value.
     *
     * @returns { number } The exposure value.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.AutoExposure#getExposureValue
     */
    getExposureValue(): number;

    /**
     * Queries whether a specified focus mode is supported.
     *
     * @param { FocusMode } afMode - Focus mode.
     * @returns { boolean } Is the focus mode supported.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Focus#isFocusModeSupported
     */
    isFocusModeSupported(afMode: FocusMode): boolean;

    /**
     * Gets current focus mode.
     *
     * @returns { FocusMode } The current focus mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Focus#getFocusMode
     */
    getFocusMode(): FocusMode;

    /**
     * Sets focus mode.
     *
     * @param { FocusMode } afMode - Target focus mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Focus#setFocusMode
     */
    setFocusMode(afMode: FocusMode): void;

    /**
     * Sets focus point.
     *
     * @param { Point } point - Target focus point.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Focus#setFocusPoint
     */
    setFocusPoint(point: Point): void;

    /**
     * Gets current focus point.
     *
     * @returns { Point } The current focus point.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Focus#getFocusPoint
     */
    getFocusPoint(): Point;

    /**
     * Gets current focal length.
     *
     * @returns { number } The current focal point.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Focus#getFocalLength
     */
    getFocalLength(): number;

    /**
     * Gets all supported zoom ratio range.
     *
     * @returns { Array<number> } The zoom ratio range.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Zoom#getZoomRatioRange
     */
    getZoomRatioRange(): Array<number>;

    /**
     * Gets zoom ratio.
     *
     * @returns { number } The zoom ratio value.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Zoom#getZoomRatio
     */
    getZoomRatio(): number;

    /**
     * Sets zoom ratio.
     *
     * @param { number } zoomRatio - Target zoom ratio.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Zoom#setZoomRatio
     */
    setZoomRatio(zoomRatio: number): void;

    /**
     * Check whether the specified video stabilization mode is supported.
     *
     * @param { VideoStabilizationMode } vsMode - Video Stabilization mode.
     * @returns { boolean } Is flash mode supported.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Stabilization#isVideoStabilizationModeSupported
     */
    isVideoStabilizationModeSupported(vsMode: VideoStabilizationMode): boolean;

    /**
     * Query the video stabilization mode currently in use.
     *
     * @returns { VideoStabilizationMode } The current video stabilization mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Stabilization#getActiveVideoStabilizationMode
     */
    getActiveVideoStabilizationMode(): VideoStabilizationMode;

    /**
     * Set video stabilization mode.
     *
     * @param { VideoStabilizationMode } mode - video stabilization mode to set.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Stabilization#setVideoStabilizationMode
     */
    setVideoStabilizationMode(mode: VideoStabilizationMode): void;

    /**
     * Subscribes focus status change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.VideoSession#on
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus status change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.VideoSession#off
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.VideoSession#on
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.VideoSession#off
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Gets supported beauty effect types.
     *
     * @returns { Array<BeautyType> } List of beauty effect types.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Beauty#getSupportedBeautyTypes
     */
    getSupportedBeautyTypes(): Array<BeautyType>;

    /**
     * Gets the specific beauty effect type range.
     *
     * @param { BeautyType } type - The type of beauty effect.
     * @returns { Array<number> } The array of the specific beauty effect range.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Beauty#getSupportedBeautyRange
     */
    getSupportedBeautyRange(type: BeautyType): Array<number>;

    /**
     * Gets the beauty effect in use.
     *
     * @param { BeautyType } type - The type of beauty effect.
     * @returns { number } the beauty effect in use.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Beauty#getBeauty
     */
    getBeauty(type: BeautyType): number;

    /**
     * Sets a beauty effect for a camera device.
     *
     * @param { BeautyType } type - The type of beauty effect.
     * @param { number } value The number of beauty effect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Beauty#setBeauty
     */
    setBeauty(type: BeautyType, value: number): void;
  }

  /**
   * Types of preconfig, which used to configure session conveniently.
   * Preconfig type contains common use cases of camera output.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 12
   */
  /**
   * Types of preconfig, which used to configure session conveniently.
   * Preconfig type contains common use cases of camera output.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum PreconfigType {
    /**
     * 720P output for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * 720P output for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    PRECONFIG_720P = 0,

    /**
     * 1080P output for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * 1080P output for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    PRECONFIG_1080P = 1,

    /**
     * 4K output for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * 4K output for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    PRECONFIG_4K = 2,

    /**
     * high quality output for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * high quality output for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    PRECONFIG_HIGH_QUALITY = 3
  }

  /**
   * The aspect ratios of preconfig, which used to configure session conveniently.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 12
   */
  /**
   * The aspect ratios of preconfig, which used to configure session conveniently.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum PreconfigRatio {
    /**
     * Aspect ratio 1:1 for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Aspect ratio 1:1 for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    PRECONFIG_RATIO_1_1 = 0,

    /**
     * Aspect ratio 4:3 for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Aspect ratio 4:3 for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    PRECONFIG_RATIO_4_3 = 1,

    /**
     * Aspect ratio 16:9 for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Aspect ratio 16:9 for preconfig.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    PRECONFIG_RATIO_16_9 = 2
  }

  /**
   * Enum for feature type used in scene detection.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  enum SceneFeatureType {
    /**
     * Feature for boost moon capture.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    MOON_CAPTURE_BOOST = 0,

    /**
     * Feature for tripod detection.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    TRIPOD_DETECTION = 1,

    /**
     * Feature for low light boost.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    LOW_LIGHT_BOOST = 2
  }

  /**
   * Feature Detection Result.
   *
   * @typedef SceneFeatureDetectionResult
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface SceneFeatureDetectionResult {
    /**
     * Detected feature type.
     *
     * @type { SceneFeatureType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly featureType: SceneFeatureType;

    /**
     * Check whether feature is detected.
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly detected: boolean;
  }

  /**
   * Enum for tripod status.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  enum TripodStatus {
    /**
     * Invalid tripod status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    INVALID = 0,

    /**
     * Tripod is active.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    ACTIVE = 1,

    /**
     * Enter tripod stabilization state.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    ENTERING = 2,

    /**
     * Exit tripod stabilization state.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    EXITING = 3
  }

  /**
   * Tripod detection result.
   *
   * @extends SceneFeatureDetectionResult
   * @interface TripodDetectionResult
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface TripodDetectionResult extends SceneFeatureDetectionResult {
    /**
     * tripod status.
     *
     * @type { TripodStatus }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly tripodStatus: TripodStatus;
  }

  /**
   * Scene detection query.
   *
   * @interface SceneDetectionQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface SceneDetectionQuery {
    /**
     * Check whether specified feature is supported.
     *
     * @param { SceneFeatureType } type - Specified feature type.
     * @returns { boolean } - Is specified feature supported.
     * @throws { BusinessError } 202 - Not System Application, only throw in session usage.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    isSceneFeatureSupported(type: SceneFeatureType): boolean;
  }

  /**
   * Scene detection.
   *
   * @extends SceneDetectionQuery
   * @interface SceneDetection
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface SceneDetection extends SceneDetectionQuery {
    /**
     * Enable specified feature.
     *
     * @param { SceneFeatureType } type - Specified feature type.
     * @param { boolean } enabled - Target feature status.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    enableSceneFeature(type: SceneFeatureType, enabled: boolean): void;
  }

  /**
   * Photo session object for system hap.
   *
   * @extends PhotoSession, Beauty, ColorEffect, ColorManagement, Macro, SceneDetection, EffectSuggestion
   * @interface PhotoSessionForSys
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11
   */
  /**
   * Photo session object for system hap.
   *
   * @extends PhotoSession, Beauty, ColorEffect, ColorManagement, Macro, SceneDetection, EffectSuggestion, DepthFusion
   * @interface PhotoSessionForSys
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 14 dynamic
   * @since 20 static
   */
  interface PhotoSessionForSys extends PhotoSession, Beauty, ColorEffect, ColorManagement, Macro, SceneDetection, EffectSuggestion, DepthFusion {
  }

  /**
   * Photo session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorManagement
   * @interface PhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * The Normal Photo Mode session category provides operations for flash, exposure, focus, zoom, and color space.
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorManagement, AutoDeviceSwitch
   * @interface PhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 13
   */
  /**
   * Photo session object.
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorManagement, AutoDeviceSwitch, Macro
   * @interface PhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19
   */
  /**
   * Photo session object.
   * @extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, ColorManagement, AutoDeviceSwitch, Macro
   * @interface PhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
     * @since 20 dynamic&static
   */
  interface PhotoSession extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, ColorManagement, AutoDeviceSwitch, Macro {
    /**
     * Gets whether the choosed preconfig type can be used to configure photo session.
     * Must choose preconfig type from {@link PreconfigType}.
     *
     * @param { PreconfigType } preconfigType - preconfig type.
     * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
     *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_4_3}.
     * @returns { boolean } Whether the choosed preconfig type can be used.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Gets whether the choosed preconfig type can be used to configure photo session.
     * Must choose preconfig type from {@link PreconfigType}.
     *
     * @param { PreconfigType } preconfigType - preconfig type.
     * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
     *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_4_3}.
     * @returns { boolean } Whether the choosed preconfig type can be used.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    canPreconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): boolean;

    /**
     * Configure photo session with the preconfig type.
     * Must choose preconfig type from {@link PreconfigType}.
     *
     * @param { PreconfigType } preconfigType - preconfig type.
     * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
     *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_4_3}
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Configure photo session with the preconfig type.
     * Must choose preconfig type from {@link PreconfigType}.
     *
     * @param { PreconfigType } preconfigType - preconfig type.
     * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
     *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_4_3}
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void;

    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
    */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     * 
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     * 
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     * 
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes camera macro status event callback.
     *
     * @param { 'macroStatusChanged' } type - Event type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result,
     *     true indicating macro scene is detected and can be enabled, false indicating macro scene is detected
     *     and macro should be disabled.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'macroStatusChanged', callback: AsyncCallback<boolean>): void;

    /**
     * Subscribes camera macro status event callback.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result,
     *     true indicating macro scene is detected and can be enabled, false indicating macro scene is detected
     *     and macro should be disabled.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onMacroStatusChanged(callback: AsyncCallback<boolean>): void;

    /**
     * Unsubscribes camera macro status event callback.
     *
     * @param { 'macroStatusChanged' } type - Event type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result,
     *     true indicating macro scene is detected and can be enabled, false indicating macro scene is detected
     *     and macro should be disabled.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'macroStatusChanged', callback?: AsyncCallback<boolean>): void;

    /**
     * Unsubscribes camera macro status event callback.
     *
     * @param { AsyncCallback<boolean> } [callback] - Callback used to return the result,
     *     true indicating macro scene is detected and can be enabled, false indicating macro scene is detected
     *     and macro should be disabled.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offMacroStatusChanged(callback?: AsyncCallback<boolean>): void;

    /**
     * Subscribes to feature detection results.
     *
     * @param { 'featureDetection' } type - Event type.
     * @param { SceneFeatureType } featureType - Feature type.
     * @param { AsyncCallback<SceneFeatureDetectionResult> } callback - Callback used to get the detection result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    on(type: 'featureDetection', featureType: SceneFeatureType, callback: AsyncCallback<SceneFeatureDetectionResult>): void;

    /**
     * Subscribes to feature detection results.
     * 
     * @param { SceneFeatureType } featureType - Feature type.
     * @param { AsyncCallback<SceneFeatureDetectionResult> } callback - Callback used to get the detection result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onFeatureDetection(featureType: SceneFeatureType, callback: AsyncCallback<SceneFeatureDetectionResult>): void;

    /**
     * Unsubscribes from feature detection result.
     *
     * @param { 'featureDetection' } type - Event type.
     * @param { SceneFeatureType } featureType - Feature type.
     * @param { AsyncCallback<SceneFeatureDetectionResult> } callback - Callback used to get the detection result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'featureDetection', featureType: SceneFeatureType, callback?: AsyncCallback<SceneFeatureDetectionResult>): void;

    /**
     * Unsubscribes from feature detection result.
     * 
     * @param { SceneFeatureType } featureType - Feature type.
     * @param { AsyncCallback<SceneFeatureDetectionResult> } [callback] - Callback used to get the detection result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offFeatureDetection(featureType: SceneFeatureType, callback?: AsyncCallback<SceneFeatureDetectionResult>): void;

    /**
     * Subscribes to effect suggestion event callback.
     *
     * @param { 'effectSuggestionChange' } type - Event type.
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'effectSuggestionChange', callback: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Subscribes to effect suggestion event callback.
     * 
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onEffectSuggestionChange(callback: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Unsubscribes from effect suggestion event callback.
     *
     * @param { 'effectSuggestionChange' } type - Event type.
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'effectSuggestionChange', callback?: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Unsubscribes from effect suggestion event callback.
     * 
     * @param { AsyncCallback<EffectSuggestionType> } [callback] - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offEffectSuggestionChange(callback?: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Subscribes to auto device switch status event callback.
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Subscribes to auto device switch status event callback.
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'autoDeviceSwitchStatusChange', callback: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Subscribes to auto device switch status event callback.
     * 
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onAutoDeviceSwitchStatusChange(callback?: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Unsubscribes to auto device switch status event callback.
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Unsubscribes to auto device switch status event callback.
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'autoDeviceSwitchStatusChange', callback?: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Unsubscribes to auto device switch status event callback.
     * 
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } [callback] - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offAutoDeviceSwitchStatusChange(callback?: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Subscribes to lcd flash status.
     *
     * @param { 'lcdFlashStatus' } type - Event type.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'lcdFlashStatus', callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Subscribes to lcd flash status.
     * 
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onLcdFlashStatus(callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from lcd flash status.
     *
     * @param { 'lcdFlashStatus' } type - Event type.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    off(type: 'lcdFlashStatus', callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from lcd flash status.
     * 
     * @param { AsyncCallback<LcdFlashStatus> } [callback] - Callback used to get the lcd flash status.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offLcdFlashStatus(callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Gets session functions.
     *
     * @param { CameraOutputCapability } outputCapability - CameraOutputCapability to set.
     * @returns { Array<PhotoFunctions> } List of session functions.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    getSessionFunctions(outputCapability: CameraOutputCapability): Array<PhotoFunctions>;

    /**
     * Gets session conflict functions.
     *
     * @returns { Array<PhotoConflictFunctions> } List of session conflict functions.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    getSessionConflictFunctions(): Array<PhotoConflictFunctions>;
  }

  /**
   * Video session object used by the system camera.
   *
   * @extends VideoSession, Beauty, ColorEffect, ColorManagement, Macro
   * @interface VideoSessionForSys
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11
   */
  /**
   * Video session object used by the system camera.
   *
   * @extends VideoSession, Beauty, ColorEffect, ColorManagement, Macro, Aperture, ColorReservation
   * @interface VideoSessionForSys
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15
   */
  /**
   * Video session object used by the system camera.
   *
   * @extends VideoSession, Beauty, ColorEffect, ColorManagement, Macro, Aperture, ColorReservation, EffectSuggestion
   * @interface VideoSessionForSys
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  interface VideoSessionForSys extends VideoSession, Beauty, ColorEffect, ColorManagement, Macro, Aperture, ColorReservation, EffectSuggestion {
  }

  /**
   * Enum for quality prioritization.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 14
   */
  /**
   * Enum for quality prioritization.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum QualityPrioritization {
    /**
     * High quality priority.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 14
     */
    /**
     * High quality priority.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    HIGH_QUALITY = 0,

    /**
     * Power balance priority.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 14
     */
    /**
     * Power balance priority.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    POWER_BALANCE = 1
  }

  /**
   * Video session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement
   * @interface VideoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * Video session object.
   *
   * @interface VideoSession
   * @extends AutoDeviceSwitch
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 13
   */
  /**
   * Video session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement, AutoDeviceSwitch, Macro
   * @interface VideoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19
   */
  /**
   * Video session object.
   *
   * @extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, Stabilization, ColorManagement, AutoDeviceSwitch, Macro
   * @interface VideoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic&static
   */
  interface VideoSession extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, Stabilization, ColorManagement, AutoDeviceSwitch, Macro {
    /**
     * Gets whether the choosed preconfig type can be used to configure video session.
     * Must choose preconfig type from {@link PreconfigType}.
     *
     * @param { PreconfigType } preconfigType - preconfig type.
     * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
     *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_16_9}.
     * @returns { boolean } Whether the choosed preconfig type can be used.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Gets whether the choosed preconfig type can be used to configure video session.
     * Must choose preconfig type from {@link PreconfigType}.
     *
     * @param { PreconfigType } preconfigType - preconfig type.
     * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
     *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_16_9}.
     * @returns { boolean } Whether the choosed preconfig type can be used.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    canPreconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): boolean;

    /**
     * Configure video session with the preconfig type.
     * Must choose preconfig type from {@link PreconfigType}.
     *
     * @param { PreconfigType } preconfigType - preconfig type.
     * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
     *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_16_9}.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Configure video session with the preconfig type.
     * Must choose preconfig type from {@link PreconfigType}.
     *
     * @param { PreconfigType } preconfigType - preconfig type.
     * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
     *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_16_9}.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void;

    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { AsyncCallback<Error> } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onError(callback: AsyncCallback<Error>): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offError(callback?: AsyncCallback<Error>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     * 
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes camera macro status event callback.
     *
     * @param { 'macroStatusChanged' } type - Event type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'macroStatusChanged', callback: AsyncCallback<boolean>): void;

    /**
     * Subscribes camera macro status event callback.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return macro detection result,
     *     true indicating macro scene is detected and can be enabled, false indicating no macro scene is detected,
     *     and macro scene should be disabled.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onMacroStatusChanged(callback: AsyncCallback<boolean>): void;

    /**
     * Unsubscribes camera macro status event callback.
     *
     * @param { 'macroStatusChanged' } type - Event type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'macroStatusChanged', callback?: AsyncCallback<boolean>): void;

    /**
     * Unsubscribes camera macro status event callback.
     * 
     * @param { AsyncCallback<boolean> } [callback] - Callback used to return macro detection result,
     *     true indicating macro scene is detected and can be enabled, false indicating macro scene is detected,
     *     and macro scene should be disabled.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offMacroStatusChanged(callback?: AsyncCallback<boolean>): void;

    /**
     * Subscribes to lcd flash status.
     *
     * @param { 'lcdFlashStatus' } type - Event type.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'lcdFlashStatus', callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Subscribes to lcd flash status.
     * 
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
    */
    onLcdFlashStatus(callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from lcd flash status.
     *
     * @param { 'lcdFlashStatus' } type - Event type.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'lcdFlashStatus', callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from lcd flash status.
     * 
     * @param { AsyncCallback<LcdFlashStatus> } [callback] - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
    */
    offLcdFlashStatus(callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Subscribes to auto device switch status event callback.
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Subscribes to auto device switch status event callback.
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'autoDeviceSwitchStatusChange', callback: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Subscribes to auto device switch status event callback.
     * 
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
    */
    onAutoDeviceSwitchStatusChange(callback: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Unsubscribes to auto device switch status event callback.
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Unsubscribes to auto device switch status event callback.
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'autoDeviceSwitchStatusChange', callback?: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Unsubscribes to auto device switch status event callback.
     * 
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } [callback] - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
    */
    offAutoDeviceSwitchStatusChange(callback?: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Subscribes to focus tracking info event callback.
     *
     * @param { 'focusTrackingInfoAvailable' } type - Event type.
     * @param { Callback<FocusTrackingInfo> } callback - Callback used to get the focus tracking info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     */
    on(type: 'focusTrackingInfoAvailable', callback: Callback<FocusTrackingInfo>): void;

    /**
     * Subscribes to focus tracking info event callback.
     * 
     * @param { Callback<FocusTrackingInfo> } callback - Callback used to get the focus tracking info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onFocusTrackingInfoAvailable(callback: Callback<FocusTrackingInfo>): void;

    /**
     * Unsubscribes from focus tracking info event callback.
     *
     * @param { 'focusTrackingInfoAvailable' } type - Event type.
     * @param { Callback<FocusTrackingInfo> } callback - Callback used to get the focus tracking info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     */
    off(type: 'focusTrackingInfoAvailable', callback?: Callback<FocusTrackingInfo>): void;

    /**
     * Unsubscribes from focus tracking info event callback.
     * 
     * @param { Callback<FocusTrackingInfo> } [callback] - Callback used to get the focus tracking info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offFocusTrackingInfoAvailable(callback?: Callback<FocusTrackingInfo>): void;

    /**
     * Subscribes to effect suggestion change events.
     * @param { 'effectSuggestionChange' } type - Event type.
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.[object Object]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     */
    on(type: 'effectSuggestionChange', callback: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Subscribes to effect suggestion change events.
     *
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.[object Object]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onEffectSuggestionChange(callback: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Unsubscribes from effect suggestion change events.
     *
     * @param { 'effectSuggestionChange' } type - Event type.
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.[object Object]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     */
    off(type: 'effectSuggestionChange', callback?: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Unsubscribes from effect suggestion change events.
     *
     * @param { AsyncCallback<EffectSuggestionType> } [callback] - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.[object Object]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offEffectSuggestionChange(callback?: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Gets session functions.
     *
     * @param { CameraOutputCapability } outputCapability - CameraOutputCapability to set.
     * @returns { Array<VideoFunctions> } List of session functions.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    getSessionFunctions(outputCapability: CameraOutputCapability): Array<VideoFunctions>;

    /**
     * Gets session conflict functions.
     *
     * @returns { Array<VideoConflictFunctions> } List of session conflict functions.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    getSessionConflictFunctions(): Array<VideoConflictFunctions>;

    /**
     * Sets quality prioritization.
     * Setting to power balance reduces video quality to conserve power, suitable for long-duration recordings where
     * video quality is less critical.
     *
     * @param { QualityPrioritization } quality - Target quality prioritization, with a default of HIGH_QUALITY.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     * 3. Parameter verification failed.
     * @throws { BusinessError } 7400103 - Session not config. The session has not been committed or configured.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 14
     */
    /**
     * Sets quality prioritization.
     * Setting to power balance reduces video quality to conserve power, suitable for long-duration recordings where
     * video quality is less critical.
     *
     * @param { QualityPrioritization } quality - Target quality prioritization, with a default of HIGH_QUALITY.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     * 3. Parameter verification failed.
     * @throws { BusinessError } 7400103 - Session not config. The session has not been committed or configured.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setQualityPrioritization(quality : QualityPrioritization) : void;

    /**
     * Subscribes camera light status event callback.
     *
     * @param { 'lightStatusChange' } type - Event type.
     * @param { AsyncCallback<LightStatus> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     */
    on(type: 'lightStatusChange', callback: AsyncCallback<LightStatus>): void;

    /**
     * Subscribes camera light status event callback.
     * 
     * @param { AsyncCallback<LightStatus> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onLightStatusChange(callback: AsyncCallback<LightStatus>): void;

    /**
     * Unsubscribes camera light status event callback.
     *
     * @param { 'lightStatusChange' } type - Event type.
     * @param { AsyncCallback<LightStatus> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    off(type: 'lightStatusChange', callback?: AsyncCallback<LightStatus>): void;

    /**
     * Unsubscribes camera light status event callback.
     *
     * @param { AsyncCallback<LightStatus> } [callback] - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offLightStatusChange(callback?: AsyncCallback<LightStatus>): void;
  }

  /**
   * Enum for the camera light status.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  enum LightStatus {
    /**
     * Sufficient lighting.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    NORMAL = 0,

    /**
     * Insufficient lighting.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    INSUFFICIENT = 1
  }

  /**
   * Enumerates the camera portrait effects.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 10 dynamic
   * @since 20 static
   */
  enum PortraitEffect {
    /**
     * portrait effect off.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 20 static
     */
    OFF = 0,

    /**
     * circular blurring for portrait.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 20 static
     */
    CIRCLES = 1,

    /**
     * heart blurring for portrait.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    HEART = 2,

    /**
     * rotated blurring for portrait.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    ROTATED = 3,

    /**
     * studio blurring for portrait.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    STUDIO = 4,

    /**
     * theater blurring for portrait.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    THEATER = 5
  }

  /**
   * Portrait Query object.
   *
   * @interface PortraitQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface PortraitQuery {
    /**
     * Gets supported portrait effect.
     *
     * @returns { Array<PortraitEffect> } List of portrait effect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Gets supported portrait effect.
     * Move to Portrait interface from PortraitPhotoSession interface since 11.
     *
     * @returns { Array<PortraitEffect> } List of portrait effect.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
    /**
     * Gets supported portrait effect.
     * Move to PortraitQuery interface from Portrait interface since 12.
     *
     * @returns { Array<PortraitEffect> } List of portrait effect.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getSupportedPortraitEffects(): Array<PortraitEffect>;
  }

  /**
   * Portrait object.
   *
   * @extends PortraitQuery
   * @interface Portrait
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  interface Portrait extends PortraitQuery {
    /**
     * Gets the portrait effect in use.
     *
     * @returns { PortraitEffect } The portrait effect in use.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Gets the portrait effect in use.
     * Move to Portrait interface from PortraitPhotoSession interface since 11.
     *
     * @returns { PortraitEffect } The portrait effect in use.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    getPortraitEffect(): PortraitEffect;

    /**
     * Sets a portrait effect for a camera device.
     *
     * @param { PortraitEffect } effect - Effect Portrait effect to set.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Sets a portrait effect for a camera device.
     * Move to Portrait interface from PortraitPhotoSession interface since 11.
     *
     * @param { PortraitEffect } effect - Effect Portrait effect to set.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    setPortraitEffect(effect: PortraitEffect): void;
  }

  /**
   * Zoom range.
   *
   * @typedef ZoomRange
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  interface ZoomRange {
    /**
     * Min zoom value.
     *
     * @type { double }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    readonly min: double;

    /**
     * Max zoom value.
     *
     * @type { double }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    readonly max: double;
  }

  /**
   * Physical Aperture object
   *
   * @typedef PhysicalAperture
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  interface PhysicalAperture {
    /**
     * Zoom Range of the specific physical aperture.
     *
     * @type { ZoomRange }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    zoomRange: ZoomRange;

    /**
     * The supported physical apertures.
     *
     * @type { Array<double> }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    apertures: Array<double>;
  }

  /**
   * Aperture Query object.
   *
   * @interface ApertureQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface ApertureQuery {
    /**
     * Gets the supported virtual apertures.
     *
     * @returns { Array<double> } The array of supported virtual apertures.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
    /**
     * Gets the supported virtual apertures.
     * Move to ApertureQuery interface from Aperture since 12.
     *
     * @returns { Array<double> } The array of supported virtual apertures.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getSupportedVirtualApertures(): Array<double>;

    /**
     * Gets the supported physical apertures.
     *
     * @returns { Array<PhysicalAperture> } The array of supported physical apertures.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
     /**
     * Gets the supported physical apertures.
     * Move to ApertureQuery interface from Aperture since 12.
     *
     * @returns { Array<PhysicalAperture> } The array of supported physical apertures.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getSupportedPhysicalApertures(): Array<PhysicalAperture>;
  }

  /**
   * Aperture object.
   *
   * @extends ApertureQuery
   * @interface Aperture
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  interface Aperture extends ApertureQuery {
    /**
     * Gets current virtual aperture value.
     *
     * @returns { double } The current virtual aperture value.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    getVirtualAperture(): double;

    /**
     * Sets virtual aperture value.
     *
     * @param { double } aperture - virtual aperture value
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    setVirtualAperture(aperture: double): void;

    /**
     * Gets current physical aperture value.
     *
     * @returns { double } The current physical aperture value.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    getPhysicalAperture(): double;

    /**
     * Sets physical aperture value.
     *
     * @param { double } aperture - physical aperture value
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    setPhysicalAperture(aperture: double): void;
  }

  /**
   * Portrait Photo session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, Beauty, ColorEffect, ColorManagement, Portrait, Aperture
   * @interface PortraitPhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
     * @since 11 dynamic
     * @since 20 static
   */
  interface PortraitPhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, Beauty, ColorEffect, ColorManagement, Portrait, Aperture {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     * 
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes to lcd flash status.
     *
     * @param { 'lcdFlashStatus' } type - Event type.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'lcdFlashStatus', callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Subscribes to lcd flash status.
     *
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onLcdFlashStatus(callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from lcd flash status.
     *
     * @param { 'lcdFlashStatus' } type - Event type.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'lcdFlashStatus', callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from lcd flash status.
     *
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offLcdFlashStatus(callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Gets session functions.
     *
     * @param { CameraOutputCapability } outputCapability - CameraOutputCapability to set.
     * @returns { Array<PortraitPhotoFunctions> } List of session functions.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    getSessionFunctions(outputCapability: CameraOutputCapability): Array<PortraitPhotoFunctions>;

    /**
     * Gets session conflict functions.
     *
     * @returns { Array<PortraitPhotoConflictFunctions> } List of session conflict functions.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    getSessionConflictFunctions(): Array<PortraitPhotoConflictFunctions>;
  }

  /**
   * Aperture video session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, Aperture
   * @interface ApertureVideoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface ApertureVideoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, Aperture {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;
  }

  /**
   * ManualExposure Query object.
   *
   * @interface ManualExposureQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface ManualExposureQuery {
    /**
     * Gets the supported manual exposure range.
     *
     * @returns { Array<int> } The array of manual exposure range.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
    /**
     * Gets the supported manual exposure range.
     * Move to ManualExposureQuery from ManualExposure since 12.
     *
     * @returns { Array<int> } The array of manual exposure range.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getSupportedExposureRange(): Array<int>;
  }

  /**
   * ManualExposure object.
   *
   * @extends ManualExposureQuery
   * @interface ManualExposure
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  interface ManualExposure extends ManualExposureQuery {
    /**
     * Gets current exposure value.
     *
     * @returns { int } The current exposure value.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
    /**
     * Gets current exposure value.
     *
     * @returns { int } The current exposure value.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getExposure(): int;

    /**
     * Sets Exposure value.
     *
     * @param { int } exposure - Exposure value
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
    /**
     * Sets Exposure value.
     *
     * @param { int } exposure - Exposure value
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    setExposure(exposure: int): void;
  }

  /**
   * Night photo session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, Beauty, ColorManagement, ManualExposure
   * @interface NightPhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  interface NightPhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, Beauty, ColorManagement, ManualExposure {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes to lcd flash status.
     *
     * @param { 'lcdFlashStatus' } type - Event type.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'lcdFlashStatus', callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Subscribes to lcd flash status.
     *
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onLcdFlashStatus(callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from lcd flash status.
     *
     * @param { 'lcdFlashStatus' } type - Event type.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'lcdFlashStatus', callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from lcd flash status.
     *
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offLcdFlashStatus(callback?: AsyncCallback<LcdFlashStatus>): void;
  }

  /**
   * ISO info object
   *
   * @typedef IsoInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface IsoInfo {
    /**
     * ISO value.
     *
     * @type { ?int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly iso?: int;
  }

  /**
   * Exposure info object
   *
   * @typedef ExposureInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface ExposureInfo {
    /**
     * Exposure time value.
     *
     * @type { ?int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
     readonly exposureTime?: int;
  }

  /**
   * Aperture info object
   *
   * @typedef ApertureInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface ApertureInfo {
    /**
     * Aperture value.
     *
     * @type { ?double }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly aperture?: double;
  }

  /**
   * Lumination info object
   *
   * @typedef LuminationInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface LuminationInfo {
    /**
     * Lumination value.
     *
     * @type { ?double }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly lumination?: double;
  }

  /**
   * Professional photo session object.
   *
   * @interface ProfessionalPhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface ProfessionalPhotoSession extends Session, AutoExposure, ManualExposure, Focus, ManualFocus, WhiteBalance, ManualIso, Flash, Zoom, ColorEffect, Aperture {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes ISO info event callback.
     *
     * @param { 'isoInfoChange' } type - Event type.
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'isoInfoChange', callback: AsyncCallback<IsoInfo>): void;

     /**
     * Subscribes ISO info event callback.
     *
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onIsoInfoChange(callback: AsyncCallback<IsoInfo>): void;

    /**
     * Unsubscribes from ISO info event callback.
     *
     * @param { 'isoInfoChange' } type - Event type.
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'isoInfoChange', callback?: AsyncCallback<IsoInfo>): void;

    /**
     * Unsubscribes from ISO info event callback.
     *
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offIsoInfoChange(callback?: AsyncCallback<IsoInfo>): void;

    /**
     * Subscribes exposure info event callback.
     *
     * @param { 'exposureInfoChange' } type - Event type.
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'exposureInfoChange', callback: AsyncCallback<ExposureInfo>): void;

    /**
     * Subscribes exposure info event callback.
     *
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onExposureInfoChange(callback: AsyncCallback<ExposureInfo>): void;

    /**
     * Unsubscribes from exposure info event callback.
     *
     * @param { 'exposureInfoChange' } type - Event type.
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'exposureInfoChange', callback?: AsyncCallback<ExposureInfo>): void;

    /**
     * Unsubscribes from exposure info event callback.
     *
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offExposureInfoChange(callback?: AsyncCallback<ExposureInfo>): void;

    /**
     * Subscribes aperture info event callback.
     *
     * @param { 'apertureInfoChange' } type - Event type.
     * @param { AsyncCallback<ApertureInfo> } callback - Callback used to get the aperture info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'apertureInfoChange', callback: AsyncCallback<ApertureInfo>): void;

    /**
     * Subscribes aperture info event callback.
     *
     * @param { AsyncCallback<ApertureInfo> } callback - Callback used to get the aperture info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onApertureInfoChange(callback: AsyncCallback<ApertureInfo>): void;

    /**
     * Unsubscribes from aperture info event callback.
     *
     * @param { 'apertureInfoChange' } type - Event type.
     * @param { AsyncCallback<ApertureInfo> } callback - Callback used to get the aperture info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'apertureInfoChange', callback?: AsyncCallback<ApertureInfo>): void;

    /**
     * Unsubscribes from aperture info event callback.
     *
     * @param { AsyncCallback<ApertureInfo> } callback - Callback used to get the aperture info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offApertureInfoChange(callback?: AsyncCallback<ApertureInfo>): void;

    /**
     * Subscribes lumination info event callback.
     *
     * @param { 'luminationInfoChange' } type - Event type.
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'luminationInfoChange', callback: AsyncCallback<LuminationInfo>): void;

    /**
     * Subscribes lumination info event callback.
     *
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onLuminationInfoChange(callback: AsyncCallback<LuminationInfo>): void;

    /**
     * Unsubscribes from lumination info event callback.
     *
     * @param { 'luminationInfoChange' } type - Event type.
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'luminationInfoChange', callback?: AsyncCallback<LuminationInfo>): void;

    /**
     * Unsubscribes from lumination info event callback.
     *
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offLuminationInfoChange(callback?: AsyncCallback<LuminationInfo>): void;
  }

  /**
   * Professional video session object.
   *
   * @extends Session, AutoExposure, ManualExposure, Focus, ManualFocus, WhiteBalance, ManualIso, Flash, Zoom, ColorEffect, Aperture
   * @interface ProfessionalVideoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface ProfessionalVideoSession extends Session, AutoExposure, ManualExposure, Focus, ManualFocus, WhiteBalance, ManualIso, Flash, Zoom, ColorEffect, Aperture {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes ISO info event callback.
     *
     * @param { 'isoInfoChange' } type - Event type.
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'isoInfoChange', callback: AsyncCallback<IsoInfo>): void;

    /**
     * Subscribes ISO info event callback.
     *
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onIsoInfoChange(callback: AsyncCallback<IsoInfo>): void;

    /**
     * Unsubscribes from ISO info event callback.
     *
     * @param { 'isoInfoChange' } type - Event type.
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'isoInfoChange', callback?: AsyncCallback<IsoInfo>): void;

    /**
     * Unsubscribes from ISO info event callback.
     *
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offIsoInfoChange(callback?: AsyncCallback<IsoInfo>): void;

    /**
     * Subscribes exposure info event callback.
     *
     * @param { 'exposureInfoChange' } type - Event type.
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'exposureInfoChange', callback: AsyncCallback<ExposureInfo>): void;

    /**
     * Subscribes exposure info event callback.
     *
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onExposureInfoChange(callback: AsyncCallback<ExposureInfo>): void;

    /**
     * Unsubscribes from exposure info event callback.
     *
     * @param { 'exposureInfoChange' } type - Event type.
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'exposureInfoChange', callback?: AsyncCallback<ExposureInfo>): void;

    /**
     * Unsubscribes from exposure info event callback.
     *
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offExposureInfoChange(callback?: AsyncCallback<ExposureInfo>): void;

    /**
     * Subscribes aperture info event callback.
     *
     * @param { 'apertureInfoChange' } type - Event type.
     * @param { AsyncCallback<ApertureInfo> } callback - Callback used to get the aperture info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'apertureInfoChange', callback: AsyncCallback<ApertureInfo>): void;

    /**
     * Subscribes aperture info event callback.
     *
     * @param { AsyncCallback<ApertureInfo> } callback - Callback used to get the aperture info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onApertureInfoChange(callback: AsyncCallback<ApertureInfo>): void;

    /**
     * Unsubscribes from aperture info event callback.
     *
     * @param { 'apertureInfoChange' } type - Event type.
     * @param { AsyncCallback<ApertureInfo> } callback - Callback used to get the aperture info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'apertureInfoChange', callback?: AsyncCallback<ApertureInfo>): void;

    /**
     * Unsubscribes from aperture info event callback.
     *
     * @param { AsyncCallback<ApertureInfo> } callback - Callback used to get the aperture info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offApertureInfoChange(callback?: AsyncCallback<ApertureInfo>): void;

    /**
     * Subscribes lumination info event callback.
     *
     * @param { 'luminationInfoChange' } type - Event type.
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'luminationInfoChange', callback: AsyncCallback<LuminationInfo>): void;

    /**
     * Subscribes lumination info event callback.
     *
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onLuminationInfoChange(callback: AsyncCallback<LuminationInfo>): void;

    /**
     * Unsubscribes from lumination info event callback.
     *
     * @param { 'luminationInfoChange' } type - Event type.
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'luminationInfoChange', callback?: AsyncCallback<LuminationInfo>): void;

    /**
     * Unsubscribes from lumination info event callback.
     *
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offLuminationInfoChange(callback?: AsyncCallback<LuminationInfo>): void;
  }

  /**
   * Enum for slow motion status.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  enum SlowMotionStatus {
    /**
     * Slow motion disabled.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    DISABLED = 0,

    /**
     * Slow motion ready.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    READY = 1,

    /**
     * Slow motion video start.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    VIDEO_START = 2,

    /**
     * Slow motion video done.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    VIDEO_DONE = 3,

    /**
     * Slow motion finished.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    FINISHED = 4
  }

  /**
   * Slow motion video session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect
   * @interface SlowMotionVideoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface SlowMotionVideoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Determine whether camera slow motion detection is supported.
     *
     * @returns { boolean } Is camera slow motion detection supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Determine whether camera slow motion detection is supported.
     *
     * @returns { boolean } Is camera slow motion detection supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 19 dynamic
     * @since 20 static
     */
    isSlowMotionDetectionSupported(): boolean;

    /**
     * Set slow motion detection area.
     *
     * @param { Rect } area - Detection area.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Set slow motion detection area.
     *
     * @param { Rect } area - Detection area.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 19 dynamic
     * @since 20 static
     */
    setSlowMotionDetectionArea(area: Rect): void;

    /**
     * Subscribes slow motion status callback.
     *
     * @param { 'slowMotionStatus' } type - Event type.
     * @param { AsyncCallback<SlowMotionStatus> } callback - Callback used to get the slow motion status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'slowMotionStatus', callback: AsyncCallback<SlowMotionStatus>): void;

    /**
     * Subscribes slow motion status callback.
     *
     * @param { AsyncCallback<SlowMotionStatus> } callback - Callback used to get the slow motion status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onSlowMotionStatus(callback: AsyncCallback<SlowMotionStatus>): void;

    /**
     * Unsubscribes slow motion status callback.
     *
     * @param { 'slowMotionStatus' } type - Event type.
     * @param { AsyncCallback<SlowMotionStatus> } callback - Callback used to get the slow motion status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'slowMotionStatus', callback?: AsyncCallback<SlowMotionStatus>): void;

    /**
     * Unsubscribes slow motion status callback.
     *
     * @param { AsyncCallback<SlowMotionStatus> } callback - Callback used to get the slow motion status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offSlowMotionStatus(callback?: AsyncCallback<SlowMotionStatus>): void;
  }

  /**
   * High resolution session object.
   *
   * @extends Session, AutoExposure, Focus
   * @interface HighResolutionPhotoSession 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface HighResolutionPhotoSession extends Session, AutoExposure, Focus {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;
  }

  /**
   * Macro photo session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus
   * @interface MacroPhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12
   */
  /**
   * Macro photo session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus, DepthFusion
   * @interface MacroPhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 14
   */
  /**
   * Macro photo session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus, DepthFusion, ColorManagement
   * @interface MacroPhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  interface MacroPhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus, DepthFusion, ColorManagement {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;
  }

  /**
   * Macro video session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus
   * @interface MacroVideoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12
   */
  /**
   * Macro video session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus, ColorManagement
   * @interface MacroVideoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  interface MacroVideoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus, ColorManagement {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

     /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;
  }

  /**
   * Secure camera session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom
   * @interface SecureSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 12
   */
  /**
   * Secure camera session object.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom
   * @interface SecureSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19
   */
  /**
   * Secure camera session object.
   *
   * @extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom
   * @interface SecureSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic&static
   */
  interface SecureSession extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom {
    /**
     * Add Secure output for camera.
     *
     * @param { PreviewOutput } previewOutput - Specify the output as a secure flow.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Preview output is marked as secure out put by this interface.
     *
     * @param { PreviewOutput } previewOutput - Specify the output as a secure flow.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Add Secure output for camera.
     *
     * @param { PreviewOutput } previewOutput - Specify the output as a secure flow.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    addSecureOutput(previewOutput: PreviewOutput): void;

    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus status change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Subscribes focus status change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus status change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus status change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Unsubscribes from focus status change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus status change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;
  }

  /**
   * Light painting photo session object.
   *
   * @extends Session, Flash, Focus, Zoom, ColorEffect
   * @interface LightPaintingPhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface LightPaintingPhotoSession extends Session, Flash, Focus, Zoom, ColorEffect {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     * 
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Gets the light painting type in use.
     *
     * @returns { LightPaintingType } The light painting type in use.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getLightPaintingType(): LightPaintingType;

    /**
     * Sets a light painting type for a camera device.
     *
     * @param { LightPaintingType } type - Light painting type to set.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    setLightPaintingType(type: LightPaintingType): void;

    /**
     * Gets supported light painting types.
     *
     * @returns { Array<LightPaintingType> } List of light painting types.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getSupportedLightPaintingTypes(): Array<LightPaintingType>;
  }

  /**
   * Quick shot photo session object.
   *
   * @extends Session, AutoExposure, ColorEffect, ColorManagement, EffectSuggestion, Flash, Focus, Zoom
   * @interface QuickShotPhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 22 static
   */
  interface QuickShotPhotoSession extends Session, AutoExposure, ColorEffect, ColorManagement, EffectSuggestion, Flash, Focus, Zoom {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to effect suggestion event callback.
     *
     * @param { 'effectSuggestionChange' } type - Event type.
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'effectSuggestionChange', callback: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Subscribes to effect suggestion event callback.
     *
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onEffectSuggestionChange(callback: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Unsubscribes from effect suggestion event callback.
     *
     * @param { 'effectSuggestionChange' } type - Event type.
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'effectSuggestionChange', callback?: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Unsubscribes from effect suggestion event callback.
     *
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offEffectSuggestionChange(callback?: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;
  }

  /**
   * Panorama photo session object.
   *
   * @extends Session, Focus, AutoExposure, WhiteBalance, ColorEffect
   * @interface PanoramaPhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 22 static
   */
  interface PanoramaPhotoSession extends Session, Focus, AutoExposure, WhiteBalance, ColorEffect {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;
  }

  /**
   * Fluorescence photo session object.
   *
   * @extends Session, AutoExposure, Focus, Zoom
   * @interface FluorescencePhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 22 static
   */
  interface FluorescencePhotoSession extends Session, AutoExposure, Focus, Zoom {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    
  }

  /**
   * Photo Functions object.
   *
   * @extends FlashQuery, AutoExposureQuery, ManualExposureQuery, FocusQuery, ZoomQuery, BeautyQuery, ColorEffectQuery, ColorManagementQuery, MacroQuery, SceneDetectionQuery
   * @interface PhotoFunctions
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface PhotoFunctions extends FlashQuery, AutoExposureQuery, ManualExposureQuery, FocusQuery, ZoomQuery, BeautyQuery, ColorEffectQuery, ColorManagementQuery, MacroQuery, SceneDetectionQuery {
  }

  /**
   * Video Functions object.
   *
   * @extends FlashQuery, AutoExposureQuery, ManualExposureQuery, FocusQuery, ZoomQuery, StabilizationQuery, BeautyQuery, ColorEffectQuery, ColorManagementQuery, MacroQuery, SceneDetectionQuery
   * @interface VideoFunctions
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface VideoFunctions extends FlashQuery, AutoExposureQuery, ManualExposureQuery, FocusQuery, ZoomQuery, StabilizationQuery, BeautyQuery, ColorEffectQuery, ColorManagementQuery, MacroQuery, SceneDetectionQuery {
  }

  /**
   * Portrait Photo Functions object.
   *
   * @extends FlashQuery, AutoExposureQuery, FocusQuery, ZoomQuery, BeautyQuery, ColorEffectQuery, ColorManagementQuery, PortraitQuery, ApertureQuery, SceneDetectionQuery
   * @interface PortraitPhotoFunctions
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface PortraitPhotoFunctions extends FlashQuery, AutoExposureQuery, FocusQuery, ZoomQuery, BeautyQuery, ColorEffectQuery, ColorManagementQuery, PortraitQuery, ApertureQuery, SceneDetectionQuery {
  }

  /**
   * Photo Conflict Functions object.
   *
   * @extends ZoomQuery, MacroQuery
   * @interface PhotoConflictFunctions
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface PhotoConflictFunctions extends ZoomQuery, MacroQuery {
  }

  /**
   * Video Conflict Functions object.
   *
   * @extends ZoomQuery, MacroQuery
   * @interface VideoConflictFunctions
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface VideoConflictFunctions extends ZoomQuery, MacroQuery {
  }

  /**
   * Portrait Photo Conflict Functions object.
   *
   * @interface PortraitPhotoFunctions
   * @extends ZoomQuery, PortraitQuery, ApertureQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface PortraitPhotoConflictFunctions extends ZoomQuery, PortraitQuery, ApertureQuery {
  }

  /**
   * Camera output object.
   *
   * @interface CameraOutput
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Camera output object.
   *
   * @interface CameraOutput
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface CameraOutput {
    /**
     * Release output instance.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Release output instance.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Release output instance.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Release output instance.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    release(): Promise<void>;
  }

  /**
   * SketchStatusData object
   *
   * @typedef SketchStatusData
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  interface SketchStatusData {
    /**
     * Status of the sketch stream.
     * 0 is stop, and 1 is start.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    status: int;

    /**
     * The zoom ratio of the sketch stream.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    sketchRatio: double;
  }

  /**
   * Preview output object.
   *
   * @extends CameraOutput
   * @interface PreviewOutput
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Preview output object.
   *
   * @extends CameraOutput
   * @interface PreviewOutput
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 22 static
   */
  interface PreviewOutput extends CameraOutput {
    /**
     * Start output instance.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#start
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Start output instance.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#start
     */
    start(): Promise<void>;

    /**
     * Stop output instance.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#stop
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stop output instance.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.Session#stop
     */
    stop(): Promise<void>;

    /**
     * Subscribes frame start event callback.
     *
     * @param { 'frameStart' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Subscribes frame start event callback.
     *
     * @param { 'frameStart' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'frameStart', callback: AsyncCallback<void>): void;

    /**
     * Subscribes frame start event callback.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 22 static
     */
    onFrameStart(callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes from frame start event callback.
     *
     * @param { 'frameStart' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unsubscribes from frame start event callback.
     *
     * @param { 'frameStart' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'frameStart', callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes from frame start event callback.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offFrameStart(callback?: AsyncCallback<void>): void;

    /**
     * Subscribes frame end event callback.
     *
     * @param { 'frameEnd' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Subscribes frame end event callback.
     *
     * @param { 'frameEnd' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'frameEnd', callback: AsyncCallback<void>): void;

    /**
     * Subscribes frame end event callback.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onFrameEnd(callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes from frame end event callback.
     *
     * @param { 'frameEnd' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unsubscribes from frame end event callback.
     *
     * @param { 'frameEnd' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     */
    off(type: 'frameEnd', callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes from frame end event callback.
     *
     * @param { 'frameEnd' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offFrameEnd(callback?: AsyncCallback<void>): void;

    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the preview output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the preview output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { AsyncCallback<void> } callback - Callback used to get the preview output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onError(callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the preview output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the preview output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the preview output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Get supported frame rates which can be set during session running.
     *
     * @returns { Array<FrameRateRange> } The array of supported frame rate range.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Get supported frame rates which can be set during session running.
     *
     * @returns { Array<FrameRateRange> } The array of supported frame rate range.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getSupportedFrameRates(): Array<FrameRateRange>;

    /**
     * Set a frame rate range.
     *
     * @param { int } minFps - Minimum frame rate per second.
     * @param { int } maxFps - Maximum frame rate per second.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400110 - Unresolved conflicts with current configurations.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * The supported frame rate range can be queried via the getSupportedFrameRates interface before setting.
     *
     * @param { int } minFps - Minimum frame rate per second.
     * @param { int } maxFps - Maximum frame rate per second.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400110 - Unresolved conflicts with current configurations.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setFrameRate(minFps: int, maxFps: int): void;

    /**
     * Get active frame rate range which has been set before.
     *
     * @returns { FrameRateRange } The active frame rate range.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Queryable after setting the frame rate for the preview stream using the setFrameRate interface.
     *
     * @returns { FrameRateRange } The active frame rate range.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getActiveFrameRate(): FrameRateRange;

    /**
     * Gets the current preconfig type if you had already call preconfig interface.
     *
     * @returns { Profile } The current preconfig type.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Gets the current preconfig type if you had already call preconfig interface.
     *
     * @returns { Profile } The current preconfig type.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getActiveProfile(): Profile;

    /**
     * Gets the preview rotation angle.
     *
     * @param { int } displayRotation - The current display rotation angle.
     * @returns { ImageRotation } The preview rotation angle.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Gets the preview rotation angle.
     *
     * @param { int } displayRotation - The current display rotation angle.
     * @returns { ImageRotation } The preview rotation angle.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getPreviewRotation(displayRotation: int): ImageRotation;

     /**
      * Sets the preview rotation angle.
      *
      * @param { ImageRotation } previewRotation - Preview display rotation angle.
      * @param { boolean } isDisplayLocked - TRUE means the display is locked, if not set, the default is FALSE.
      * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
      * @throws { BusinessError } 7400201 - Camera service fatal error.
      * @syscap SystemCapability.Multimedia.Camera.Core
      * @since 12
      */
     /**
      * Sets the preview rotation angle.
      *
      * @param { ImageRotation } previewRotation - Preview display rotation angle.
      * @param { boolean } isDisplayLocked - TRUE means the display is locked, if not set, the default is FALSE.
      * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
      * @throws { BusinessError } 7400201 - Camera service fatal error.
      * @syscap SystemCapability.Multimedia.Camera.Core
      * @atomicservice
      * @since 19 dynamic
      * @since 20 static
      */
    setPreviewRotation(previewRotation: ImageRotation, isDisplayLocked?: boolean): void;

    /**
     * Adds a deferred surface.
     *
     * @param { string } surfaceId - Surface object id used in camera photo output.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Adds a deferred surface.
     *
     * @param { string } surfaceId - Surface object id used in camera photo output.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    addDeferredSurface(surfaceId: string): void;

    /**
     * Determine whether camera sketch is supported.
     *
     * @returns { boolean } Is camera sketch supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    isSketchSupported(): boolean;

    /**
     * Gets the specific zoom ratio when sketch stream open.
     *
     * @returns { double } The specific zoom ratio of sketch.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    getSketchRatio(): double;

    /**
     * Enable sketch for camera.
     *
     * @param { boolean } enabled - enable sketch for camera if TRUE.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
    /**
     * Enable sketch for camera.
     *
     * @param { boolean } enabled - enable sketch for camera if TRUE.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    enableSketch(enabled: boolean): void;

    /**
     * Attach surface to the sketch stream.
     *
     * @param { string } surfaceId - Surface object id used in sketch stream.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11
     */
    /**
     * Attach surface to the sketch stream.
     *
     * @param { string } surfaceId - Surface object id used in sketch stream.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    attachSketchSurface(surfaceId: string): void;

    /**
     * Subscribes sketch status changed event callback.
     *
     * @param { 'sketchStatusChanged' } type - Event type.
     * @param { AsyncCallback<SketchStatusData> } callback - Callback used to sketch status data.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'sketchStatusChanged', callback: AsyncCallback<SketchStatusData>): void;

    /**
     * Subscribes sketch status changed event callback.
     *
     * @param { Callback<SketchStatusData> } callback - Callback used to sketch status data.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onSketchStatusChanged(callback: AsyncCallback<SketchStatusData>): void;

    /**
     * Unsubscribes sketch status changed event callback.
     *
     * @param { 'sketchStatusChanged' } type - Event type.
     * @param { AsyncCallback<SketchStatusData> } callback - Callback used to get sketch status data.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'sketchStatusChanged', callback?: AsyncCallback<SketchStatusData>): void;

    /**
     * Unsubscribes sketch status changed event callback.
     *
     * @param { Callback<SketchStatusData> } callback - Callback used to get sketch status data.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offSketchStatusChanged(callback?: AsyncCallback<SketchStatusData>): void;
  }

  /**
   * Enum for effect suggestion.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  enum EffectSuggestionType {
    /**
     * None.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    EFFECT_SUGGESTION_NONE = 0,
    /**
     * Portrait.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    EFFECT_SUGGESTION_PORTRAIT = 1,
    /**
     * Food.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    EFFECT_SUGGESTION_FOOD = 2,

    /**
     * Sky.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    EFFECT_SUGGESTION_SKY = 3,

    /**
     * Sunrise and sunset.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    EFFECT_SUGGESTION_SUNRISE_SUNSET = 4,

    /**
     * Stage.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    EFFECT_SUGGESTION_STAGE = 5
  }

  /**
   * Effect suggestion status
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  class EffectSuggestionStatus {
    /**
     * Effect Suggestion type.
     *
     * @type { EffectSuggestionType }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    type: EffectSuggestionType;
    /**
     * Effect Suggestion type status.
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    status: boolean;
  }

  /**
   * Enumerates the image rotation angles.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Enumerates the image rotation angles.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum ImageRotation {
    /**
     * The capture image rotates 0 degrees.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * The capture image rotates 0 degrees.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    ROTATION_0 = 0,

    /**
     * The capture image rotates 90 degrees.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * The capture image rotates 90 degrees.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    ROTATION_90 = 90,

    /**
     * The capture image rotates 180 degrees.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * The capture image rotates 180 degrees.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    ROTATION_180 = 180,

    /**
     * The capture image rotates 270 degrees.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * The capture image rotates 270 degrees.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    ROTATION_270 = 270
  }

  /**
   * Photo capture location
   *
   * @typedef Location
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Photo capture location
   *
   * @typedef Location
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
     * @since 19 dynamic
     * @since 20 static
   */
  interface Location {
    /**
     * Latitude.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Latitude.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    latitude: double;

    /**
     * Longitude.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Longitude.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    longitude: double;

    /**
     * Altitude.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Altitude.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    altitude: double;
  }

  /**
   * Enumerates the image quality levels.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Enumerates the image quality levels.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum QualityLevel {
    /**
     * High image quality.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * High image quality.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    QUALITY_LEVEL_HIGH = 0,

    /**
     * Medium image quality.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Medium image quality.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    QUALITY_LEVEL_MEDIUM = 1,

    /**
     * Low image quality.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Low image quality.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    QUALITY_LEVEL_LOW = 2
  }

  /**
   * Photo capture options to set.
   *
   * @typedef PhotoCaptureSetting
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Photo capture options to set.
   *
   * @typedef PhotoCaptureSetting
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface PhotoCaptureSetting {
    /**
     * Photo image quality.
     *
     * @type { ?QualityLevel }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Photo image quality.
     *
     * @type { ?QualityLevel }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    quality?: QualityLevel;

    /**
     * Photo rotation.
     *
     * @type { ?ImageRotation }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Photo rotation.
     *
     * @type { ?ImageRotation }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    rotation?: ImageRotation;

    /**
     * Photo location.
     *
     * @type { ?Location }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Photo location.
     *
     * @type { ?Location }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    location?: Location;

    /**
     * Set the mirror photo function switch, default to false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Mirror enable switch (default off).
     * It is necessary to utilize the function isMirrorSupported to ascertain whether it is supported
     * prior to its implementation.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    mirror?: boolean;
  }

  /**
   * Enumerates the delivery image types.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  enum DeferredDeliveryImageType {
    /**
     * Undefer image delivery.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    NONE = 0,

    /**
     * Defer photo delivery when capturing photos.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    PHOTO = 1,

    /**
     * Defer video delivery when capturing videos.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    VIDEO = 2
  }

  /**
   * Photo object
   *
   * @typedef Photo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * Photo object
   *
   * @typedef Photo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface Photo {
    /**
     * Main image.
     *
     * @type { image.Image }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Main image.
     *
     * @type { image.Image }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    main: image.Image;

    /**
     * Raw image.
     *
     * @type { ?image.Image }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    raw?: image.Image;

    /**
     * Depth data.
     *
     * @type { DepthData }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    depthData?: DepthData;

    /**
     * Release Photo object.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Release Photo object.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    release(): Promise<void>;
  }

  /**
   * DeferredPhotoProxy object
   *
   * @typedef DeferredPhotoProxy
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  interface DeferredPhotoProxy {
    /**
     * Thumbnail image.
     *
     * @returns { Promise<image.PixelMap> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    getThumbnail(): Promise<image.PixelMap>;

    /**
     * Release DeferredPhotoProxy object.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    release(): Promise<void>;
  }

  /**
   * Enumerates the camera video codec type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 13
   */
  /**
   * Enumerates the camera video codec type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum VideoCodecType {
    /**
     * Codec type AVC.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Video encoding type AVC.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    AVC = 0,

    /**
     * Codec type HEVC.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Video encoding type HEVC.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    HEVC = 1
  }

  /**
   * Photo output object.
   *
   * @extends CameraOutput
   * @interface PhotoOutput
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Photo output object.
   *
   * @extends CameraOutput
   * @interface PhotoOutput
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 22 static
   */
  interface PhotoOutput extends CameraOutput {
    /**
     * Start capture output.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Start capture output.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    capture(callback: AsyncCallback<void>): void;

    /**
     * Start capture output.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Start capture output.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    capture(): Promise<void>;

    /**
     * Start capture output.
     *
     * @param { PhotoCaptureSetting } setting - Photo capture settings.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Start capture output.
     *
     * @param { PhotoCaptureSetting } setting - Photo capture settings.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    capture(setting: PhotoCaptureSetting, callback: AsyncCallback<void>): void;

    /**
     * Start capture output.
     *
     * @param { PhotoCaptureSetting } setting - Photo capture settings.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Start capture output.
     * Remove optional param.
     *
     * @param { PhotoCaptureSetting } setting - Photo capture settings.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Start capture output.
     * Remove optional param.
     *
     * @param { PhotoCaptureSetting } setting - Photo capture settings.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    capture(setting: PhotoCaptureSetting): Promise<void>;

    /**
     * Start burst capture.
     *
     * @param { PhotoCaptureSetting } setting - Photo capture settings.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    burstCapture(setting: PhotoCaptureSetting): Promise<void>;

    /**
     * Confirm capture in Night mode or end burst capture.
     *
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    confirmCapture(): void;

    /**
     * Confirm if the raw image delivery is supported
     *
     * @returns { boolean } TRUE if the type of delivery image is support.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    isRawDeliverySupported(): boolean;

    /**
     * Enable raw image image delivery.
     *
     * @param { boolean } enabled - Target state for raw image delivery.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    enableRawDelivery(enabled: boolean): void;

    /**
     * Confirm if the deferred image delivery supported in the specific device.
     *
     * @param { DeferredDeliveryImageType } type - Type of delivery image.
     * @returns { boolean } TRUE if the type of delivery image is support.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    isDeferredImageDeliverySupported(type: DeferredDeliveryImageType): boolean;

    /**
     * Confirm if the deferred image delivery enabled.
     *
     * @param { DeferredDeliveryImageType } type - Type of delivery image.
     * @returns { boolean } TRUE if the type of delivery image is enable.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    isDeferredImageDeliveryEnabled(type: DeferredDeliveryImageType): boolean;

    /**
     * Sets the image type for deferred image delivery.
     *
     * @param { DeferredDeliveryImageType } type - Type of delivery image.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 20 static
     */
    deferImageDelivery(type: DeferredDeliveryImageType): void;

    /**
     * Check if the depth data delivery is supported.
     *
     * @returns { boolean } TRUE if the type of delivery image is enabled.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    isDepthDataDeliverySupported(): boolean;

    /**
     * Enable depth data delivery.
     *
     * @param { boolean } enabled - Target state for depth data delivery.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    enableDepthDataDelivery(enabled: boolean): void;

    /**
     * Get supported moving photo video codec types.
     *
     * @returns { Array<VideoCodecType> } An array of supported video codec types for moving photo.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Get supported moving photo video codec types.
     *
     * @returns { Array<VideoCodecType> } An array of supported video codec types for moving photo.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getSupportedMovingPhotoVideoCodecTypes(): Array<VideoCodecType>;

    /**
     * Sets codec type for moving photo, default to AVC.
     *
     * @param { VideoCodecType } codecType - Codec type for moving photo.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Sets codec type for moving photo, default to AVC.
     *
     * @param { VideoCodecType } codecType - Codec type for moving photo.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setMovingPhotoVideoCodecType(codecType: VideoCodecType): void;

    /**
     * Subscribes photo available event callback.
     *
     * @param { 'photoAvailable' } type - Event type.
     * @param { AsyncCallback<Photo> } callback - Callback used to get the Photo.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Subscribes photo available event callback.  
     *
     * @param { 'photoAvailable' } type - Event type.
     * @param { AsyncCallback<Photo> } callback - Callback used to get the Photo.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'photoAvailable', callback: AsyncCallback<Photo>): void;

    /**
     * Subscribes photo available event callback.
     *
     * @param { AsyncCallback<Photo> } callback - Callback used to get the Photo.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onPhotoAvailable(callback: AsyncCallback<Photo>): void;

    /**
     * Unsubscribes photo available event callback.
     *
     * @param { 'photoAvailable' } type - Event type.
     * @param { AsyncCallback<Photo> } callback - Callback used to get the Photo.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Unsubscribes photo available event callback.
     *
     * @param { 'photoAvailable' } type - Event type.
     * @param { AsyncCallback<Photo> } callback - Callback used to get the Photo.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'photoAvailable', callback?: AsyncCallback<Photo>): void;

    /**
     * Subscribes photo error event callback.
     *
     * @param { AsyncCallback<Photo> } callback - Callback used to get the Photo.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offPhotoError(callback: AsyncCallback<Photo>): void;
  
    /**
     * Subscribes deferred photo proxy available event callback.
     *
     * @param { 'deferredPhotoProxyAvailable' } type - Event type.
     * @param { AsyncCallback<DeferredPhotoProxy> } callback - Callback used to get the DeferredPhotoProxy.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'deferredPhotoProxyAvailable', callback: AsyncCallback<DeferredPhotoProxy>): void;

    /**
     * Subscribes deferred photo proxy available event callback.
     *
     * @param { AsyncCallback<DeferredPhotoProxy> } callback - Callback used to get the DeferredPhotoProxy.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onDeferredPhotoProxyAvailable(callback: AsyncCallback<DeferredPhotoProxy>): void;

    /**
     * Unsubscribes deferred photo proxy available event callback.
     *
     * @param { 'deferredPhotoProxyAvailable' } type - Event type.
     * @param { AsyncCallback<DeferredPhotoProxy> } callback - Callback used to get the DeferredPhotoProxy.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'deferredPhotoProxyAvailable', callback?: AsyncCallback<DeferredPhotoProxy>): void;

    /**
     * Subscribes deferred photo proxy error event callback.
     *
     * @param { AsyncCallback<DeferredPhotoProxy> } callback - Callback used to get the DeferredPhotoProxy.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offDeferredPhotoProxyError(callback: AsyncCallback<DeferredPhotoProxy>): void;

    /**
     * Subscribes to photo asset event callback.
     *
     * <p>This API processes deferred photo delivery data by quickly displaying low-quality images to give
     * users the impression of faster photo capture, while also generating high-quality images to maintain the
     * final output quality. For details about the design specifications, see {@link
     * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-camera-shot2see}. </p>
     * @param { 'photoAssetAvailable' } type - Event type.
     * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - Callback used to get the asset.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Subscribes to photo asset event callback.
     *
     * <p>This API processes deferred photo delivery data by quickly displaying low-quality images to give
     * users the impression of faster photo capture, while also generating high-quality images to maintain the
     * final output quality. For details about the design specifications, see {@link
     * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-camera-shot2see}. </p>
     * @param { 'photoAssetAvailable' } type - Event type.
     * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - Callback used to get the asset.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'photoAssetAvailable', callback: AsyncCallback<photoAccessHelper.PhotoAsset>): void;

    /**
     * Subscribes to photo asset event callback.
     * 
     * <p>This API processes deferred photo delivery data by quickly displaying low-quality images to give
     * users the impression of faster photo capture, while also generating high-quality images to maintain the
     * final output quality. For details about the design specifications, see {@link
     * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-camera-shot2see}. </p>
     * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - Callback used to get the asset.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
    */
    onPhotoAssetAvailable(callback: AsyncCallback<photoAccessHelper.PhotoAsset>): void;

    /**
     * Unsubscribes photo asset event callback.
     *
     * @param { 'photoAssetAvailable' } type - Event type.
     * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - Callback used to get the asset.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Unsubscribes photo asset event callback.
     *
     * @param { 'photoAssetAvailable' } type - Event type.
     * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - Callback used to get the asset.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'photoAssetAvailable', callback?: AsyncCallback<photoAccessHelper.PhotoAsset>): void;

    /**
     * Unsubscribes photo asset error event callback.
     *
     * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - Callback used to get the asset.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offPhotoAssetAvailable(callback: AsyncCallback<photoAccessHelper.PhotoAsset>): void;

    /**
     * Check whether to support mirror photo.
     *
     * @returns { boolean } Is the mirror supported.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Check whether to support mirror photo.
     *
     * @returns { boolean } Is the mirror supported.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    isMirrorSupported(): boolean;

    /**
     * Enable mirror for photo capture.
     *
     * @param { boolean } enabled - enable photo mirror if TRUE.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Whether to enable moving photo mirroring.
     * 
     * Prior to invoking this interface, it is necessary to determine whether the moving
     * photo function is supported through the isMovingPhotoSupported API and whether the
     * photo mirroring function is supported through the isMirrorSupported API.
     *
     * @param { boolean } enabled - enable moving photo mirror if TRUE.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    enableMirror(enabled: boolean): void;

    /**
     * Subscribes capture start event callback.
     *
     * @param { 'captureStart' } type - Event type.
     * @param { AsyncCallback<number> } callback - Callback used to get the capture ID.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.PhotoOutput#captureStartWithInfo
     */
    on(type: 'captureStart', callback: AsyncCallback<number>): void;

    /**
     * Subscribes capture start event callback.
     * 
     * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to get the capture start info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
    */
   onCaptureStart(callback: AsyncCallback<CaptureStartInfo>): void;

    /**
     * Unsubscribes from capture start event callback.
     *
     * @param { 'captureStart' } type - Event type.
     * @param { AsyncCallback<number> } callback - Callback used to get the capture ID.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.PhotoOutput#captureStartWithInfo
     */
    off(type: 'captureStart', callback?: AsyncCallback<number>): void;

    /***
     * Unsubscribes from capture start event callback.
     * 
     * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to get the capture start info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offCaptureStart(callback?: AsyncCallback<CaptureStartInfo>): void;

    /**
     * Subscribes capture start event callback.
     *
     * @param { 'captureStartWithInfo' } type - Event type.
     * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to get the capture start info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Registers a listener for the start of the photo taking to get the CaptureStartInfo by registering
     * a callback function. This API uses an asynchronous callback to return the result.
     * 
     * Description: Currently, it is not allowed to use off() to unregister the callback
     * within the callback method of on().
     *
     * @param { 'captureStartWithInfo' } type - Event type.
     * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to get the capture start info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'captureStartWithInfo', callback: AsyncCallback<CaptureStartInfo>): void;

    /***
     * Subscribes capture start event callback.
     * 
     * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to get the capture start info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onCaptureStartWithInfo(callback: AsyncCallback<CaptureStartInfo>): void;

    /**
     * Unsubscribes from capture start event callback.
     *
     * @param { 'captureStartWithInfo' } type - Event type.
     * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to get the capture start info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Unsubscribes from capture start event callback.
     *
     * @param { 'captureStartWithInfo' } type - Event type.
     * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to get the capture start info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'captureStartWithInfo', callback?: AsyncCallback<CaptureStartInfo>): void;

    /**
     * Unsubscribes from capture start event callback.
     *
     * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to get the capture start info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offCaptureWithInfo(callback?: AsyncCallback<CaptureStartInfo>): void;

    /**
     * Subscribes frame shutter event callback.
     *
     * @param { 'frameShutter' } type - Event type.
     * @param { AsyncCallback<FrameShutterInfo> } callback - Callback used to get the frame shutter information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Subscribes frame shutter event callback.
     *
     * @param { 'frameShutter' } type - Event type.
     * @param { AsyncCallback<FrameShutterInfo> } callback - Callback used to get the frame shutter information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'frameShutter', callback: AsyncCallback<FrameShutterInfo>): void;

    /**
     * Subscribes frame shutter event callback.
     *
     * @param { AsyncCallback<FrameShutterInfo> } callback - Callback used to get the frame shutter information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onFrameShutter(callback: AsyncCallback<FrameShutterInfo>): void;

    /**
     * Unsubscribes from frame shutter event callback.
     *
     * @param { 'frameShutter' } type - Event type.
     * @param { AsyncCallback<FrameShutterInfo> } callback - Callback used to get the frame shutter information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unsubscribes from frame shutter event callback.
     *
     * @param { 'frameShutter' } type - Event type.
     * @param { AsyncCallback<FrameShutterInfo> } callback - Callback used to get the frame shutter information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'frameShutter', callback?: AsyncCallback<FrameShutterInfo>): void;

    /**
     * Unsubscribes from frame shutter event callback.
     *
     * @param { AsyncCallback<FrameShutterInfo> } callback - Callback used to get the frame shutter information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offFrameShutter(callback?: AsyncCallback<FrameShutterInfo>): void;

    /**
     * Subscribes frame shutter end event callback.
     *
     * @param { 'frameShutterEnd' } type - Event type.
     * @param { AsyncCallback<FrameShutterEndInfo> } callback - Callback used to get the frame shutter end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Registers a listener for the end of photo exposure capture to get the result by registering
     * a callback function. This API uses an asynchronous callback to return the result.
     * 
     * Description: Currently, it is not allowed to use off() to unregister the callback
     * within the callback method of on().
     *
     * @param { 'frameShutterEnd' } type - Event type.
     * @param { AsyncCallback<FrameShutterEndInfo> } callback - Callback used to get the frame shutter end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'frameShutterEnd', callback: AsyncCallback<FrameShutterEndInfo>): void;

    /**
     * Subscribes frame shutter end event callback.
     *
     * @param { AsyncCallback<FrameShutterEndInfo> } callback - Callback used to get the frame shutter end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onFrameShutterEnd(callback: AsyncCallback<FrameShutterEndInfo>): void;

    /**
     * Unsubscribes from frame shutter end event callback.
     *
     * @param { 'frameShutterEnd' } type - Event type.
     * @param { AsyncCallback<FrameShutterEndInfo> } callback - Callback used to get the frame shutter end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Unsubscribes from frame shutter end event callback.
     *
     * @param { 'frameShutterEnd' } type - Event type.
     * @param { AsyncCallback<FrameShutterEndInfo> } callback - Callback used to get the frame shutter end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'frameShutterEnd', callback?: AsyncCallback<FrameShutterEndInfo>): void;

     /**
     * Unsubscribes from frame shutter end event callback.
     *
     * @param { AsyncCallback<FrameShutterEndInfo> } callback - Callback used to get the frame shutter end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offFrameShutterEnd(callback?: AsyncCallback<FrameShutterEndInfo>): void;

    /**
     * Subscribes capture end event callback.
     *
     * @param { 'captureEnd' } type - Event type.
     * @param { AsyncCallback<CaptureEndInfo> } callback - Callback used to get the capture end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Registers a listener for the end of the photo shoot to get the result by registering
     * a callback function. This API uses an asynchronous callback to return the result.
     * 
     * Description: Currently, it is not allowed to use off() to unregister the callback
     * within the callback method of on().
     *
     * @param { 'captureEnd' } type - Listens to the event, fixed to 'captureEnd', when photoOutput is
     * created successfully. This event can be triggered when the photoOutput is created successfully.
     * @param { AsyncCallback<CaptureEndInfo> } callback - Callback used to get the capture end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'captureEnd', callback: AsyncCallback<CaptureEndInfo>): void;

     /**
     * Subscribes capture end event callback.
     *
     * @param { AsyncCallback<CaptureEndInfo> } callback - Callback used to get the capture end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onCaptureEnd(callback: AsyncCallback<CaptureEndInfo>): void;

    /**
     * Unsubscribes from capture end event callback.
     *
     * @param { 'captureEnd' } type - Event type.
     * @param { AsyncCallback<CaptureEndInfo> } callback - Callback used to get the capture end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unsubscribes from capture end event callback.
     *
     * @param { 'captureEnd' } type - Event type.
     * @param { AsyncCallback<CaptureEndInfo> } callback - Callback used to get the capture end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'captureEnd', callback?: AsyncCallback<CaptureEndInfo>): void;

    /**
     * Unsubscribes from capture end event callback.
     *
     * @param { AsyncCallback<CaptureEndInfo> } callback - Callback used to get the capture end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offCaptureEnd(callback?: AsyncCallback<CaptureEndInfo>): void;

    /**
     * Subscribes capture ready event callback. After receiving the callback, can proceed to the next capture
     *
     * @param { 'captureReady' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to notice capture ready.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Registers a listener for the next available shot to get the result by registering
     * a callback function. This API uses an asynchronous callback to return the result.
     * 
     * Description: Currently, it is not allowed to use off() to unregister the callback
     * within the callback method of on().
     *
     * @param { 'captureReady' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to notice capture ready.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'captureReady', callback: AsyncCallback<void>): void;

    /**
     * Subscribes capture ready event callback. After receiving the callback, can proceed to the next capture
     *
     * @param { AsyncCallback<void> } callback - Callback used to notice capture ready.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onCaptureReady(callback: AsyncCallback<void>): void;

    /**
     * Unsubscribes from capture ready event callback.
     *
     * @param { 'captureReady' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to notice capture ready.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Unsubscribes from capture ready event callback.
     *
     * @param { 'captureReady' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to notice capture ready.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'captureReady', callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes from capture ready event callback.
     *
     * @param { AsyncCallback<void> } callback - Callback used to notice capture ready.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offCaptureReady(callback?: AsyncCallback<void>): void;

    /**
     * Subscribes estimated capture duration event callback.
     *
     * @param { 'estimatedCaptureDuration' } type - Event type.
     * @param { AsyncCallback<double> } callback - Callback used to notify the estimated capture duration (in milliseconds).
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Registers a listener for the estimated time to take a picture to get the result by registering
     * a callback function. This API uses an asynchronous callback to return the result.
     * 
     * Description: Currently, it is not allowed to use off() to unregister the callback
     * within the callback method of on().
     *
     * @param { 'estimatedCaptureDuration' } type - Event type.
     * @param { AsyncCallback<double> } callback - Callback used to notify the estimated capture duration (in milliseconds).
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'estimatedCaptureDuration', callback: AsyncCallback<double>): void;

    /**
     * Subscribes estimated capture duration event callback.
     *
     * @param { AsyncCallback<double> } callback - Callback used to notify the estimated capture duration (in milliseconds).
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onEstimatedCaptureDuration(callback: AsyncCallback<double>): void;

    /**
     * Unsubscribes from estimated capture duration event callback.
     *
     * @param { 'estimatedCaptureDuration' } type - Event type.
     * @param { AsyncCallback<double> } callback - Callback used to notify the estimated capture duration (in milliseconds).
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Unsubscribes from estimated capture duration event callback.
     *
     * @param { 'estimatedCaptureDuration' } type - Event type.
     * @param { AsyncCallback<double> } callback - Callback used to notify the estimated capture duration (in milliseconds).
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'estimatedCaptureDuration', callback?: AsyncCallback<double>): void;

    /**
     * Unsubscribes from estimated capture duration event callback.
     *
     * @param { AsyncCallback<double> } callback - Callback used to notify the estimated capture duration (in milliseconds).
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offEstimatedCaptureDuration(callback?: AsyncCallback<double>): void;

    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the photo output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Registers a listener for errors in the photo output to get the result by registering
     * a callback function. This API uses an asynchronous callback to return the result.
     * 
     * Description: Currently, it is not allowed to use off() to unregister the callback
     * within the callback method of on().
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the photo output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the photo output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the photo output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the photo output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     * 
     * @param { ErrorCallback } callback - Callback used to get the photo output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
    */
    offError(callback?: ErrorCallback): void;

    /**
     * Gets the current preconfig type if you had already call preconfig interface.
     *
     * @returns { Profile } The current preconfig type.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Gets the current preconfig type if you had already call preconfig interface.
     *
     * @returns { Profile } The current preconfig type.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getActiveProfile(): Profile;

    /**
     * Checks whether PhotoOutput supports quick thumbnail.
     * This method is valid after Session.addInput() and Session.addOutput(photoOutput) are called.
     *
     * @returns { boolean } Whether quick thumbnail is supported.
     * @throws { BusinessError } 7400104 - session is not running.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Checks whether PhotoOutput supports quick thumbnail.
     * This method is valid after Session.addInput() and Session.addOutput(photoOutput) are called.
     *
     * @returns { boolean } Whether quick thumbnail is supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - session is not running.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    isQuickThumbnailSupported(): boolean;

    /**
     * Enables or disables quick thumbnail.
     * The method must be called after Session.addInput() and Session.addOutput(photoOutput) are called.
     * To avoid stream reconfiguration and performance loss,
     * you are advised to call the method before Session.commitConfig().
     *
     * @param { boolean } enabled - The value TRUE means to enable quick thumbnail, and FALSE means the opposite.
     * @throws { BusinessError } 7400104 - session is not running.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10
     */
    /**
     * Enables or disables quick thumbnail.
     * The method must be called after Session.addInput() and Session.addOutput(photoOutput) are called.
     * To avoid stream reconfiguration and performance loss,
     * you are advised to call the method before Session.commitConfig().
     *
     * @param { boolean } enabled - The value TRUE means to enable quick thumbnail, and FALSE means the opposite.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - session is not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    enableQuickThumbnail(enabled: boolean): void;

    /**
     * Subscribes to camera thumbnail events.
     * This method is valid only after enableQuickThumbnail(true) is called.
     *
     * @param { 'quickThumbnail' } type - Event type.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to get the quick thumbnail.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     */
    on(type: 'quickThumbnail', callback: AsyncCallback<image.PixelMap>): void;

    /**
     * Subscribes to camera thumbnail events.
     * This method is valid only after enableQuickThumbnail(true) is called.
     *
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to get the quick thumbnail.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onQuickThumbnail(callback: AsyncCallback<image.PixelMap>): void;

    /**
     * Unsubscribes from camera thumbnail events.
     * This method is valid only after enableQuickThumbnail(true) is called.
     *
     * @param { 'quickThumbnail' } type - Event type.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to get the quick thumbnail.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'quickThumbnail', callback?: AsyncCallback<image.PixelMap>): void;

    /**
     * Unsubscribes from camera thumbnail events.
     * This method is valid only after enableQuickThumbnail(true) is called.
     *
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to get the quick thumbnail.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offQuickThumbnail(callback?: AsyncCallback<image.PixelMap>): void;

    /**
     * Confirm if the auto high quality photo supported.
     *
     * @returns { boolean } TRUE if the auto high quality photo is supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - session is not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    isAutoHighQualityPhotoSupported(): boolean;

    /**
     * Enable auto high quality photo.
     *
     * @param { boolean } enabled - Target state for auto high quality photo.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - session is not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    enableAutoHighQualityPhoto(enabled: boolean): void;

    /**
     * Confirm if the auto cloud image enhancement is supported.
     *
     * @returns { boolean } TRUE if the auto cloud image enhancement is supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    isAutoCloudImageEnhancementSupported(): boolean;

    /**
     * Enable auto cloud image enhancement
     *
     * @param { boolean } enabled - Target state for auto cloud image enhancement.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    enableAutoCloudImageEnhancement(enabled: boolean): void;

    /**
     * Confirm if moving photo supported.
     *
     * @returns { boolean } TRUE if the moving photo is supported.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Confirm if moving photo supported.
     *
     * @returns { boolean } TRUE if the moving photo is supported.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    isMovingPhotoSupported(): boolean;

    /**
     * Enable moving photo.
     *
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } enabled - Target state for moving photo.
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Enable moving photo.
     *
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } enabled - Target state for moving photo.
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    enableMovingPhoto(enabled: boolean): void;

    /**
     * Gets the photo rotation angle.
     *
     * @param { int } deviceDegree - The current device rotation degree.
     * @returns { ImageRotation } The photo rotation angle.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Gets the photo rotation angle.
     *
     * @param { int } deviceDegree - The current device rotation degree.
     * @returns { ImageRotation } The photo rotation angle.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getPhotoRotation(deviceDegree: int): ImageRotation;

    /**
     * Confirm if offline processing is supported.
     *
     * @returns { boolean } TRUE if the type of offline is supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    isOfflineSupported(): boolean;

    /**
     * Enable offline processing.
     *
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - session is not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    enableOffline(): void;

    /**
     * Subscribes offline Delivery finished events.
     * This method is valid only after enableOffline() is called.
     *
     * @param { 'offlineDeliveryFinished' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to get offline Delivery finished events.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     */
    on(type: 'offlineDeliveryFinished', callback: AsyncCallback<void>): void;

    /**
     * Subscribes offline Delivery finished events.
     * This method is valid only after enableOffline() is called.
     *
     * @param { AsyncCallback<void> } callback - Callback used to get offline Delivery finished events.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onOfflineDeliveryFinished(callback: AsyncCallback<void>): void;

    /**
     * Unsubscribes offline Delivery finished events.
     * This method is valid only after enableOffline() is called.
     *
     * @param { 'offlineDeliveryFinished' } type - Event type.
     * @param { AsyncCallback<void>} callback - Callback used to get offline Delivery finished events.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    off(type: 'offlineDeliveryFinished', callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes offline Delivery finished events.
     * This method is valid only after enableOffline() is called.
     *
     * @param { AsyncCallback<void>} callback - Callback used to get offline Delivery finished events.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offOfflineDeliveryFinished(callback?: AsyncCallback<void>): void;
  }

  /**
   * Frame shutter callback info.
   *
   * @typedef FrameShutterInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Frame shutter callback info.
   *
   * @typedef FrameShutterInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface FrameShutterInfo {
    /**
     * Capture id.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Capture id.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    captureId: int;
    /**
     * Timestamp for frame.
     *
     * @type { long }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Timestamp for frame.
     *
     * @type { long }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    timestamp: long;
  }

  /**
   * Frame shutter end callback info.
   *
   * @typedef FrameShutterEndInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 12
   */
  /**
   * Frame shutter end callback info.
   *
   * @typedef FrameShutterEndInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface FrameShutterEndInfo {
    /**
     * Capture id.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Capture id.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    captureId: int;
  }

  /**
   * Capture start info.
   *
   * @typedef CaptureStartInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 11
   */
  /**
   * Capture start info.
   *
   * @typedef CaptureStartInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface CaptureStartInfo {
    /**
     * Capture id.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Capture id.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    captureId: int;
    /**
     * Time(in milliseconds) is the shutter time for the photo.
     *
     * @type { long }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Time(in milliseconds) is the shutter time for the photo.
     *
     * @type { long }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    time: long;
  }

  /**
   * Capture end info.
   *
   * @typedef CaptureEndInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Capture end info.
   *
   * @typedef CaptureEndInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface CaptureEndInfo {
    /**
     * Capture id.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Capture id.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    captureId: int;
    /**
     * Frame count.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Frame count.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    frameCount: int;
  }

  /**
   * Deferred video enhancement info.
   *
   * @typedef DeferredVideoEnhancementInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface DeferredVideoEnhancementInfo {
    /**
     * Check whether deferred video enhancement available.
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly isDeferredVideoEnhancementAvailable: boolean;
    /**
     * Video identifier.
     *
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly videoId?: string;
  }

  /**
   * Video output object.
   *
   * @extends CameraOutput
   * @interface VideoOutput
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Video output object.
   *
   * @extends CameraOutput
   * @interface VideoOutput
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface VideoOutput extends CameraOutput {
    /**
     * Start video output.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Start video output.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Start video output.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Start video output.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    start(): Promise<void>;

    /**
     * Stop video output.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Stop video output.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stop video output.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Stop video output.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    stop(): Promise<void>;

    /**
     * Determine whether video mirror is supported.
     *
     * @returns { boolean } Is video mirror supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Determine whether video mirror is supported.
     *
     * @returns { boolean } Is video mirror supported.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 15
     */
    /**
     * Determine whether video mirror is supported.
     *
     * @returns { boolean } Is video mirror supported.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    isMirrorSupported(): boolean;

    /**
     * Enable mirror for video capture.
     *
     * @param { boolean } enabled - enable video mirror if TRUE.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12
     */
    /**
     * Enable mirror for video capture.
     *
     * @param { boolean } enabled - enable video mirror if TRUE.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 15
     */
    /**
     * Enable/disable mirror recording.
     * 
     * Before calling this API, it is necessary to use isMirrorSupported to check whether
     * video mirroring is supported.
     * 
     * When enabling or disabling video mirroring, you must first call getVideoRotation
     * to retrieve the current rotation value and then call updateRotation to apply the
     * updated rotation.
     *
     * @param { boolean } enabled - enable video mirror if TRUE.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    enableMirror(enabled: boolean): void;

    /**
     * Get supported frame rates which can be set during session running.
     *
     * @returns { Array<FrameRateRange> } The array of supported frame rate range.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Get supported frame rates which can be set during session running.
     *
     * @returns { Array<FrameRateRange> } The array of supported frame rate range.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getSupportedFrameRates(): Array<FrameRateRange>;

    /**
     * Set a frame rate range.
     *
     * @param { int } minFps - Minimum frame rate per second.
     * @param { int } maxFps - Maximum frame rate per second.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400110 - Unresolved conflicts with current configurations.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Set a frame rate range.
     *
     * @param { int } minFps - Minimum frame rate per second.
     * @param { int } maxFps - Maximum frame rate per second.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400110 - Unresolved conflicts with current configurations.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    setFrameRate(minFps: int, maxFps: int): void;

    /**
     * Get active frame rate range which has been set before.
     *
     * @returns { FrameRateRange } The active frame rate range.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Get active frame rate range which has been set before.
     *
     * @returns { FrameRateRange } The active frame rate range.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getActiveFrameRate(): FrameRateRange;

    /**
     * Gets the video rotation angle.
     *
     * @param { int } deviceDegree - The current device rotation degree.
     * @returns { ImageRotation } The video rotation angle.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Gets the video rotation angle.
     *
     * @param { int } deviceDegree - The current device rotation degree.
     * @returns { ImageRotation } The video rotation angle.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getVideoRotation(deviceDegree: int): ImageRotation;

    /**
     * Confirm if auto deferred video enhancement is supported in the specific device.
     *
     * @returns { boolean } TRUE if auto deferred video enhancement is supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    isAutoDeferredVideoEnhancementSupported(): boolean;

    /**
     * Confirm if auto deferred video enhancement is enabled.
     *
     * @returns { boolean } TRUE if auto deferred video enhancement is enabled.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    isAutoDeferredVideoEnhancementEnabled(): boolean;

    /**
     * Enable auto deferred video enhancement if needed.
     *
     * @param { boolean } enabled - Status of auto deferred video enhancement.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    enableAutoDeferredVideoEnhancement(enabled: boolean): void;

    /**
     * Get supported video rotations.
     *
     * @returns { Array<ImageRotation> } The array of supported video rotations.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 20 static
     */
    getSupportedRotations(): Array<ImageRotation>;

    /**
     * Determine whether video rotation is supported.
     *
     * @returns { boolean } Is video rotation supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 20 static
     */
    isRotationSupported(): boolean;

    /**
     * Set a video rotation.
     *
     * @param { ImageRotation } rotation - The rotation angle.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 20 static
     */
    setRotation(rotation: ImageRotation): void;

    /**
     * Determine whether auto frame rate is supported.
     *
     * @returns { boolean } Is auto frame rate supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    isAutoVideoFrameRateSupported(): boolean;

    /**
     * Enable auto frame rate for video capture.
     *
     * @param { boolean } enabled - enable auto frame rate if TRUE.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    enableAutoVideoFrameRate(enabled: boolean): void;

    /**
     * Subscribes deferred video enhancement info callback.
     *
     * @param { 'deferredVideoEnhancementInfo' } type - Event type.
     * @param { AsyncCallback<DeferredVideoEnhanceInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'deferredVideoEnhancementInfo', callback: AsyncCallback<DeferredVideoEnhancementInfo>): void;

    /**
     * Subscribes to deferred video enhancement info callback.
     * 
     * @param { AsyncCallback<DeferredVideoEnhancementInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
    */
    onDeferredVideoEnhancementInfo(callback: AsyncCallback<DeferredVideoEnhancementInfo>): void;

    /**
     * Unsubscribes from deferred video enhancement info callback.
     *
     * @param { 'deferredVideoEnhancementInfo' } type - Event type.
     * @param { AsyncCallback<DeferredVideoEnhancementInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'deferredVideoEnhancementInfo', callback?: AsyncCallback<DeferredVideoEnhancementInfo>): void;

    /**
     * Unsubscribes from deferred video enhancement info callback.
     *
     * @param { AsyncCallback<DeferredVideoEnhancementInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offDeferredVideoEnhancementInfo(callback?: AsyncCallback<DeferredVideoEnhancementInfo>): void;

    /**
     * Subscribes frame start event callback.
     *
     * @param { 'frameStart' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Subscribes frame start event callback.
     *
     * @param { 'frameStart' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'frameStart', callback: AsyncCallback<void>): void;

    /**
     * Subscribes frame start event callback.
     * 
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
    */
    onFrameStart(callback: AsyncCallback<void>): void;

    /**
     * Unsubscribes from frame start event callback.
     *
     * @param { 'frameStart' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unsubscribes from frame start event callback.
     * 
     * @param { 'frameStart' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'frameStart', callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes from frame start event callback.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offFrameStart(callback?: AsyncCallback<void>): void;

    /**
     * Subscribes frame end event callback.
     *
     * @param { 'frameEnd' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Subscribes frame end event callback.
     *
     * @param { 'frameEnd' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'frameEnd', callback: AsyncCallback<void>): void;

    /**
     * Subscribes frame end event callback.
     * 
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onFrameEnd(callback: AsyncCallback<void>): void;

    /**
     * Unsubscribes from frame end event callback.
     *
     * @param { 'frameEnd' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unsubscribes from frame end event callback.
     *
     * @param { 'frameEnd' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'frameEnd', callback?: AsyncCallback<void>): void;

     /**
     * Unsubscribes from frame end event callback.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offFrameEnd(callback?: AsyncCallback<void>): void;

    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Registers a listener for errors in the metadata stream to get the result by registering
     * a callback function. This API uses an asynchronous callback to return the result.
     * 
     * Description: Currently, it is not allowed to use off() to unregister the callback
     * within the callback method of on().
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     * 
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
    */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     * 
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Gets the current preconfig type if you had already call preconfig interface.
     *
     * @returns { VideoProfile } The current preconfig type.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Gets the current preconfig type if you had already call preconfig interface.
     *
     * @returns { VideoProfile } The current preconfig type.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    getActiveProfile(): VideoProfile;

    /**
     * Get supported video meta types.
     * @returns { Array<VideoMetaType> } The array of supported video meta type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getSupportedVideoMetaTypes(): Array<VideoMetaType>;

    /**
     * Attach a meta surface to VideoOutput.
     * @param { string } surfaceId - Surface object id used for receiving meta infos.
     * @param { VideoMetaType } type - Video meta type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    attachMetaSurface(surfaceId: string, type: VideoMetaType): void;
  }

  /**
   * Video meta type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  enum VideoMetaType {
    /**
     * Video meta type for storing maker info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    VIDEO_META_MAKER_INFO = 0
  }

  /**
   * Metadata object type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Metadata object type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum MetadataObjectType {
    /**
     * Face detection type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Face detection type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    FACE_DETECTION = 0,

    /**
     * Human body detection type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    HUMAN_BODY = 1,

    /**
     * Cat face detection type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    CAT_FACE = 2,

    /**
     * Cat body detection type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    CAT_BODY = 3,

    /**
     * Dog face detection type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    DOG_FACE = 4,

    /**
     * Dog body detection type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    DOG_BODY = 5,

    /**
     * Salient detection type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    SALIENT_DETECTION = 6,

    /**
     * Barcode detection type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    BAR_CODE_DETECTION = 7
  }

  /**
   * Enum for light painting tabletype.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  enum LightPaintingType {
    /**
     * Traffic trails effect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    TRAFFIC_TRAILS = 0,

    /**
     * Star trails effect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    STAR_TRAILS = 1,

    /**
     * Silky water effect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    SILKY_WATER = 2,

    /**
     * Light graffiti effect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    LIGHT_GRAFFITI = 3
  }

  /**
   * Rectangle definition.
   *
   * @typedef Rect
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Rectangle definition.
   *
   * @typedef Rect
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface Rect {
    /**
     * X coordinator of top left point.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * X coordinator of top left point.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    topLeftX: double;
    /**
     * Y coordinator of top left point.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Y coordinator of top left point.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    topLeftY: double;
    /**
     * Width of this rectangle.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Width of this rectangle.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    width: double;
    /**
     * Height of this rectangle.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Height of this rectangle.
     *
     * @type { double }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    height: double;
  }

  /**
   * Enum for emotion type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  enum Emotion {
    /**
     * Emotion type: Neutral.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    NEUTRAL = 0,

    /**
     * Emotion type: Sadness.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    SADNESS = 1,

    /**
     * Emotion type: Smile.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    SMILE = 2,

    /**
     * Emotion type: Surprise.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    SURPRISE = 3
  }

  /**
   * Metadata object basis.
   *
   * @typedef MetadataObject
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Metadata object basis.
   *
   * @typedef MetadataObject
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface MetadataObject {
    /**
     * Metadata object type.
     *
     * @type { MetadataObjectType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Metadata object type.
     *
     * @type { MetadataObjectType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly type: MetadataObjectType;
    /**
     * Metadata object timestamp in milliseconds.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Metadata object timestamp in milliseconds.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly timestamp: int;
    /**
     * The axis-aligned bounding box of detected metadata object.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * The axis-aligned bounding box of detected metadata object.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly boundingBox: Rect;
    /**
     * Metadata object id.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly objectId: int;
    /**
     * Confidence for the detected type.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly confidence: int;
  }

  /**
   * Metadata object for face.
   *
   * @typedef MetadataFaceObject
   * @extends MetadataObject
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface MetadataFaceObject extends MetadataObject {
    /**
     * Bounding box for left eye.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly leftEyeBoundingBox: Rect;

    /**
     * Bounding box for right eye.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly rightEyeBoundingBox: Rect;

    /**
     * Emotion type for face.
     *
     * @type { Emotion }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly emotion: Emotion;

    /**
     * Emotion confidence.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly emotionConfidence: int;

    /**
     * Pitch angle for face.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly pitchAngle: int;

    /**
     * Yaw angle for face.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly yawAngle: int;

    /**
     * Roll angle for face.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly rollAngle: int;
  }

  /**
   * Metadata object for human body.
   *
   * @typedef MetadataHumanBodyObject
   * @extends MetadataObject
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface MetadataHumanBodyObject extends MetadataObject {
  }

  /**
   * Metadata object for cat face.
   *
   * @typedef MetadataCatFaceObject
   * @extends MetadataObject
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface MetadataCatFaceObject extends MetadataObject {
    /**
     * Bounding box for left eye.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly leftEyeBoundingBox: Rect;

    /**
     * Bounding box for right eye.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly rightEyeBoundingBox: Rect;
  }

  /**
   * Metadata object for cat body.
   *
   * @typedef MetadataCatBodyObject
   * @extends MetadataObject
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface MetadataCatBodyObject extends MetadataObject {
  }

  /**
   * Metadata object for dog face.
   *
   * @typedef MetadataDogFaceObject
   * @extends MetadataObject
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface MetadataDogFaceObject extends MetadataObject {
    /**
     * Bounding box for left eye.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly leftEyeBoundingBox: Rect;

    /**
     * Bounding box for right eye.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly rightEyeBoundingBox: Rect;
  }

  /**
   * Metadata object for dog body.
   *
   * @typedef MetadataDogBodyObject
   * @extends MetadataObject
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface MetadataDogBodyObject extends MetadataObject {
  }

  /**
   * Metadata object for salient detection.
   *
   * @typedef MetadataSalientDetectionObject
   * @extends MetadataObject
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface MetadataSalientDetectionObject extends MetadataObject {
  }

  /**
   * Metadata object for barcode.
   *
   * @extends MetadataObject
   * @typedef MetadataBarcodeObject
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 14 dynamic
   * @since 20 static
   */
  interface MetadataBarcodeObject extends MetadataObject {
  }

  /**
   * Camera Occlusion Detection Result.
   *
   * @typedef CameraOcclusionDetectionResult
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface CameraOcclusionDetectionResult {
    /**
     * Check whether camera is occluded.
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly isCameraOccluded: boolean;

    /**
     * Check whether camera lens is dirty.
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly isCameraLensDirty: boolean;
  }

  /**
   * Metadata Output object
   *
   * @extends CameraOutput
   * @interface MetadataOutput
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10
   */
  /**
   * Metadata Output object
   *
   * @extends CameraOutput
   * @interface MetadataOutput
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface MetadataOutput extends CameraOutput {
    /**
     * Start output metadata
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Start output metadata
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Start output metadata
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Start output metadata
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    start(): Promise<void>;

    /**
     * Stop output metadata
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Stop output metadata
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stop output metadata
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Stop output metadata
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    stop(): Promise<void>;

    /**
     * Add metadata object types.
     *
     * @param { Array<MetadataObjectType> } types - Object types to be added.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    addMetadataObjectTypes(types: Array<MetadataObjectType>): void;

    /**
     * Remove metadata object types.
     *
     * @param { Array<MetadataObjectType> } types - Object types to be removed.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    removeMetadataObjectTypes(types: Array<MetadataObjectType>): void;

    /**
     * Subscribes to metadata objects available event callback.
     *
     * @param { 'metadataObjectsAvailable' } type - Event type.
     * @param { AsyncCallback<Array<MetadataObject>> } callback - Callback used to get the available metadata objects.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Subscribes to metadata objects available event callback.
     *
     * @param { 'metadataObjectsAvailable' } type - Event type.
     * @param { AsyncCallback<Array<MetadataObject>> } callback - Callback used to get the available metadata objects.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>): void;

    /**
     * Subscribes to metadata objects available event callback.
     * 
     * @param { AsyncCallback<Array<MetadataObject>> } callback - Callback used to get the available metadata objects.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
    */
   onMetadataObjectsAvailable(callback: AsyncCallback<Array<MetadataObject>>): void;

    /**
     * Unsubscribes from metadata objects available event callback.
     *
     * @param { 'metadataObjectsAvailable' } type - Event type.
     * @param { AsyncCallback<Array<MetadataObject>> } callback - Callback used to get the available metadata objects.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unsubscribes from metadata objects available event callback.
     *
     * @param { 'metadataObjectsAvailable' } type - Event type.
     * @param { AsyncCallback<Array<MetadataObject>> } callback - Callback used to get the available metadata objects.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'metadataObjectsAvailable', callback?: AsyncCallback<Array<MetadataObject>>): void;

    /**
     * Unsubscribe from metadata objects available event callback.
     *
     * @param { AsyncCallback<Array<MetadataObject>> } [callback] - Callback used to get the available metadata objects.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offMetadataObjectsAvailable(callback?: AsyncCallback<Array<MetadataObject>>): void;

    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribe from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;
  }

  /**
   * Enum for camera concurrent type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 18
   */
  /**
   * Enum for camera concurrent type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  enum CameraConcurrentType {
    /**
     * Cameras concurrency with limited capabilities.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Cameras concurrency with limited capabilities.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_LIMITED_CAPABILITY = 0,

    /**
     * Cameras concurrency with full capabilities.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Cameras concurrency with full capabilities.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    CAMERA_FULL_CAPABILITY = 1,
  }

  /**
   * Camera concurrent information.
   *
   * @interface CameraConcurrentInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 18
   */
  /**
   * Camera concurrent information.
   *
   * @interface CameraConcurrentInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 20 static
   */
  interface CameraConcurrentInfo {
    /**
     * Camera instance.
     *
     * @type { CameraDevice }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Camera instance.
     *
     * @type { CameraDevice }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly device: CameraDevice;

    /**
     * Camera concurrent type.
     *
     * @type { CameraConcurrentType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Camera concurrent type.
     *
     * @type { CameraConcurrentType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly type: CameraConcurrentType;

    /**
     * Supported scene modes.
     *
     * @type { Array<SceneMode> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Supported scene modes.
     *
     * @type { Array<SceneMode> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly modes: Array<SceneMode>;

    /**
     * Supported outputCapability.
     *
     * @type { Array<CameraOutputCapability> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Supported outputCapability.
     *
     * @type { Array<CameraOutputCapability> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 20 static
     */
    readonly outputCapabilities: Array<CameraOutputCapability>;
  }

  /**
   * Enumerates the timelapse recording state.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  enum TimeLapseRecordState {
    /**
     * TimeLapse idle state.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    IDLE = 0,

    /**
     * TimeLapse recording state.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    RECORDING = 1
  }

  /**
   * Enumerates the timelapse preview type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  enum TimeLapsePreviewType {
    /**
     * TimeLapse dark preview.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    DARK = 1,

    /**
     * TimeLapse Light preview.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    LIGHT = 2
  }

  /**
   * Try AE information.
   *
   * @typedef TryAEInfo
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  interface TryAEInfo {
    /**
     * Determine whether try AE is done.
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly isTryAEDone: boolean;

    /**
     * Determine whether AE hint is needed.
     *
     * @type { ?boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly isTryAEHintNeeded?: boolean;

    /**
     * Timelapse preview type.
     *
     * @type { ?TimeLapsePreviewType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly previewType?: TimeLapsePreviewType;

    /**
     * Timelapse capture interval.
     *
     * @type { ?int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    readonly captureInterval?: int;
  }

  /**
   * Timelapse photo session object.
   *
   * @extends Session, Focus, ManualFocus, AutoExposure, ManualExposure, ManualIso, WhiteBalance, Zoom, ColorEffect
   * @interface TimeLapsePhotoSession
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 22 static
   */
  interface TimeLapsePhotoSession extends Session, Focus, ManualFocus, AutoExposure, ManualExposure, ManualIso, WhiteBalance, Zoom, ColorEffect {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to focus state change event callback.
     *
     * @param { ErrorCallback } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     * 
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
    */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     * 
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
    */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     * 
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
    */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes ISO info event callback.
     *
     * @param { 'isoInfoChange' } type - Event type.
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'isoInfoChange', callback: AsyncCallback<IsoInfo>): void;

    /**
     * Subscribes ISO info event callback.
     * 
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onIsoInfoChange(callback: AsyncCallback<IsoInfo>): void;

    /**
     * Unsubscribes from ISO info event callback.
     *
     * @param { 'isoInfoChange' } type - Event type.
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'isoInfoChange', callback?: AsyncCallback<IsoInfo>): void;

    /**
     * Unsubscribes from ISO info event callback.
     * 
     * @param { AsyncCallback<IsoInfo> } [callback] - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offIsoInfoChange(callback?: AsyncCallback<IsoInfo>): void;

    /**
     * Subscribes exposure info event callback.
     *
     * @param { 'exposureInfoChange' } type - Event type.
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'exposureInfoChange', callback: AsyncCallback<ExposureInfo>): void;

    /**
     * Subscribes exposure info event callback.
     * 
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onExposureInfoChange(callback: AsyncCallback<ExposureInfo>): void;

    /**
     * Unsubscribes from exposure info event callback.
     *
     * @param { 'exposureInfoChange' } type - Event type.
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'exposureInfoChange', callback?: AsyncCallback<ExposureInfo>): void;

    /**
     * Unsubscribes from exposure info event callback.
     * 
     * @param { AsyncCallback<ExposureInfo> } [callback] - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offExposureInfoChange(callback?: AsyncCallback<ExposureInfo>): void;

    /**
     * Subscribes lumination info event callback.
     *
     * @param { 'luminationInfoChange' } type - Event type.
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'luminationInfoChange', callback: AsyncCallback<LuminationInfo>): void;

    /**
     * Subscribes lumination info event callback.
     * 
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onLuminationInfoChange(callback: AsyncCallback<LuminationInfo>): void;

    /**
     * Unsubscribes from lumination info event callback.
     *
     * @param { 'luminationInfoChange' } type - Event type.
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'luminationInfoChange', callback?: AsyncCallback<LuminationInfo>): void;

    /**
     * Unsubscribes from lumination info event callback.
     * 
     * @param { AsyncCallback<LuminationInfo> } [callback] - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offLuminationInfoChange(callback?: AsyncCallback<LuminationInfo>): void;

    /**
     * Check whether try AE is needed.
     *
     * @returns { boolean } Is try AE needed.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    isTryAENeeded(): boolean;

    /**
     * Start try AE.
     *
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    startTryAE(): void;

    /**
     * Stop try AE.
     *
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 22 static
     */
    stopTryAE(): void;

    /**
     * Subscribes try AE info event callback.
     *
     * @param { 'tryAEInfoChange' } type - Event type.
     * @param { AsyncCallback<TryAEInfo> } callback - Callback used to get the try AE info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'tryAEInfoChange', callback: AsyncCallback<TryAEInfo>): void;

    /**
     * Subscribes try AE info event callback.
     * 
     * @param { AsyncCallback<TryAEInfo> } callback - Callback used to get the try AE info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onTryAEInfoChange(callback: AsyncCallback<TryAEInfo>): void;

    /**
     * Unsubscribes from try AE info event callback.
     *
     * @param { 'tryAEInfoChange' } type - Event type.
     * @param { AsyncCallback<TryAEInfo> } callback - Callback used to get the try AE info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'tryAEInfoChange', callback?: AsyncCallback<TryAEInfo>): void;

    /**
     * Unsubscribes from try AE info event callback.
     * 
     * @param { AsyncCallback<TryAEInfo> } [callback] - Callback used to get the try AE info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offTryAEInfoChange(callback?: AsyncCallback<TryAEInfo>): void;

    /**
     * Gets supported timelapse interval range.
     *
     * @returns { Array<int> } Timelapse interval range.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getSupportedTimeLapseIntervalRange(): Array<int>;

    /**
     * Gets the timelapse interval in use.
     *
     * @returns { int } the timelapse interval in use.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    getTimeLapseInterval(): int;

    /**
     * Sets a timelapse interval for a camera device.
     *
     * @param { int } interval The timelapse interval.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    setTimeLapseInterval(interval: int): void;

    /**
     * Gets the timelapse recording state in use.
     *
     * @returns { TimeLapseRecordState } the timelapse recording state in use.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    getTimeLapseRecordState(): TimeLapseRecordState;

    /**
     * Sets a timelapse recording state.
     *
     * @param { TimeLapseRecordState } state The timelapse recording state.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    setTimeLapseRecordState(state: TimeLapseRecordState): void;

    /**
     * Gets the timelapse preview type in use.
     *
     * @returns { TimeLapsePreviewType } the timelapse preview type in use.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    getTimeLapsePreviewType(): TimeLapsePreviewType;

    /**
     * Sets a timelapse preview type.
     *
     * @param { TimeLapsePreviewType } type The timelapse preview type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    setTimeLapsePreviewType(type: TimeLapsePreviewType): void;
  }

  /**
   * Enum for Depth Data Accuracy.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  enum DepthDataAccuracy {
    /**
     * Relative accuracy depth data.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    DEPTH_DATA_ACCURACY_RELATIVE = 0,

    /**
     * Absolute accuracy depth data.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    DEPTH_DATA_ACCURACY_ABSOLUTE = 1
  }

  /**
   * Enum for Depth Data Quality Level.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  enum DepthDataQualityLevel {
    /**
     * Depth data quality is bad.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    DEPTH_DATA_QUALITY_BAD = 0,

    /**
     * Depth data quality is fair.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    DEPTH_DATA_QUALITY_FAIR = 1,

    /**
     * Depth data quality is good.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    DEPTH_DATA_QUALITY_GOOD = 2
  }

  /**
   * Depth Profile.
   *
   * @interface DepthProfile
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface DepthProfile {
    /**
     * Depth data format.
     *
     * @type { CameraFormat }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly format: CameraFormat;

    /**
     * Depth data accuracy.
     *
     * @type { DepthDataAccuracy }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly dataAccuracy: DepthDataAccuracy;

    /**
     * Depth data resolution.
     *
     * @type { Size }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly size: Size;
  }

  /**
   * Depth Data.
   *
   * @interface DepthData.
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface DepthData {
    /**
     * Depth data format.
     *
     * @type { CameraFormat }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly format: CameraFormat;

    /**
     * Depth data map.
     *
     * @type { image.PixelMap }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly depthMap: image.PixelMap;

    /**
     * Depth data quality level.
     *
     * @type { DepthDataQualityLevel }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly qualityLevel: DepthDataQualityLevel;

    /**
     * Depth data accuracy.
     *
     * @type { DepthDataAccuracy }
     * @readonly
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    readonly dataAccuracy: DepthDataAccuracy;

    /**
     * Release depth data object.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    release(): Promise<void>;
  }

  /**
   * Depth Data Output object
   *
   * @extends CameraOutput
   * @interface DepthDataOutput
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 20 static
   */
  interface DepthDataOutput extends CameraOutput {
    /**
     * Start depth data output.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    start(): Promise<void>;

    /**
     * Stop depth data output.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 20 static
     */
    stop(): Promise<void>;

    /**
     * Subscribes to depth data objects available event callback.
     *
     * @param { 'depthDataAvailable' } type - Event type.
     * @param { AsyncCallback<DepthData> } callback - Callback used to get the available DepthData objects.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'depthDataAvailable', callback: AsyncCallback<DepthData>): void;

    /**
     * Subscribes to depth data objects available event callback.
     *
     * @param { AsyncCallback<DepthData> } callback - Callback used to get the available DepthData objects.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onDepthDataAvailable(callback: AsyncCallback<DepthData>): void;

    /**
     * Unsubscribes from depth data objects available event callback.
     *
     * @param { 'depthDataAvailable' } type - Event type.
     * @param { AsyncCallback<DepthData> } callback - Callback used to get the available DepthData objects.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'depthDataAvailable', callback?: AsyncCallback<DepthData>): void;

    /**
     * Unsubscribes from depth data objects available event callback.
     *
     * @param { AsyncCallback<DepthData> } callback - Callback used to get the available DepthData objects.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offDepthDataAvailable(callback?: AsyncCallback<DepthData>): void;

    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 static
     */
    offError(callback?: ErrorCallback): void;
  }

  /**
   * Depth Fusion Query object.
   *
   * @interface DepthFusionQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 14 dynamic
   * @since 20 static
   */
  interface DepthFusionQuery {
    /**
     * Checks whether a depth fusion is supported.
     *
     * @returns { boolean } Is the depth fusion supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 20 static
     */
    isDepthFusionSupported(): boolean;

    /**
     * Query the depth fusion threshold.
     *
     * @returns { Array<double> } The depth fusion threshold.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 20 static
     */
    getDepthFusionThreshold(): Array<double>;
  }

  /**
   * Depth Fusion object.
   *
   * @extends DepthFusionQuery
   * @interface DepthFusion
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 14 dynamic
   * @since 20 static
   */
  interface DepthFusion extends DepthFusionQuery {
    /**
     * Confirm if the depth fusion enabled.
     *
     * @returns { boolean } TRUE if the depth fusion is enable.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 20 static
     */
    isDepthFusionEnabled(): boolean;

    /**
     * Enable depth fusion.
     *
     * @param { boolean } enabled - Target state for depth fusion.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 20 static
     */
    enableDepthFusion(enabled: boolean): void;
  }

  /**
   * Enum for auxiliary type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  enum AuxiliaryType {
    /**
     * Contract lens.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    CONTRACT_LENS = 0
  }

  /**
   * Enum for auxiliary status.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  enum AuxiliaryStatus {
    /**
     * Auxiliary locked.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    LOCKED = 0,

    /**
     * Turn on auxiliary.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    ON = 1,

    /**
     * Turn off auxiliary.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 20 static
     */
    OFF = 2
  }

  /**
   * Enum for color reservation type.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 20 static
   */
  enum ColorReservationType {
    /**
     * None.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    NONE = 0,

    /**
     * Portrait color reservation.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    PORTRAIT = 1
  }

  /**
   * Color Reservation Query object.
   *
   * @interface ColorReservationQuery
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 20 static
   */
  interface ColorReservationQuery {
    /**
     * Gets supported color reservation types.
     *
     * @returns { Array<ColorReservationType> } Array of supported color reservation types.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    getSupportedColorReservationTypes(): Array<ColorReservationType>;
  }

  /**
   * Color Reservation object.
   *
   * @extends ColorReservationQuery
   * @interface ColorReservation
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 20 static
   */
  interface ColorReservation extends ColorReservationQuery {
    /**
     * Gets the current color reservation type.
     *
     * @returns { ColorReservationType } The current color reservation type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    getColorReservation(): ColorReservationType;

    /**
     * Sets the color reservation type.
     *
     * @param { ColorReservationType } type - The color reservation type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     * 3. Parameter verification failed.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 20 static
     */
    setColorReservation(type: ColorReservationType): void;
  }

  /**
   * Quick thumbnail object
   *
   * @typedef QuickThumbnail
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 19 dynamic
   */
  interface QuickThumbnail {
    /**
     * capture id.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 19 dynamic
     */
    readonly captureId: number;

    /**
     * Thumbnail image.
     *
     * @type { image.PixelMap }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 19 dynamic
     */
    thumbnailImage: image.PixelMap;

    /**
     * Release quick thumbnail object.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 19 dynamic
     */
    release(): Promise<void>;
  }
}

export default camera;
