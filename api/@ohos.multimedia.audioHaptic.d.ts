/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit AudioKit
 */

import type { Callback } from './@ohos.base';
import type audio from './@ohos.multimedia.audio';

/**
 * Provides audio haptic collaborative play interfaces.
 *
 * @namespace audioHaptic
 * @syscap SystemCapability.Multimedia.AudioHaptic.Core
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace audioHaptic {
  /**
   * Obtains an {@link AudioHapticManager} instance. This object is singleton in one process.
   * @returns { AudioHapticManager } AudioHapticManager instance.
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getAudioHapticManager(): AudioHapticManager;

  /**
   * Audio Latency mode.
   * @enum {int}
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum AudioLatencyMode {
    /**
     * Normal audio mode.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    AUDIO_LATENCY_MODE_NORMAL = 0,

    /**
     * Low latency mode. This mode should be used when duration of the audio source is short. If duration of the audio 
     * source is long, it may be truncated. This behavior is the same with sound pool.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    AUDIO_LATENCY_MODE_FAST = 1
  }

  /**
   * Audio haptic player options object.
   * @typedef AudioHapticPlayerOptions
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface AudioHapticPlayerOptions {
    /**
     * Mute audio.
     * @type {?boolean}
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    muteAudio?: boolean;

    /**
     * Mute haptics.
     * @type {?boolean}
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    muteHaptics?: boolean;
  }

  /**
   * Audio haptic manager object.
   * @typedef AudioHapticManager
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface AudioHapticManager {
    /**
     * Register audio and haptic file into manager. Audio and haptic works are paired while playing. After registering
     * source, it will returns the source id. This method uses a promise to return the source id.
     * @param { string } audioUri - Audio file uri.
     * @param { string } hapticUri - Haptic file uri.
     * @returns { Promise<int> } Promise used to return the source id.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    registerSource(audioUri: string, hapticUri: string): Promise<int>;

    /**
     * Unregister source. This method uses a promise to return the result.
     * @param { int } id source id.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    unregisterSource(id: int): Promise<void>;

    /**
     * Set the audio latency mode of one source.
     * @param { int } id - Source id.
     * @param { AudioLatencyMode } latencyMode - Audio latency mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setAudioLatencyMode(id:int, latencyMode: AudioLatencyMode): void;

    /**
     * Set the stream usage of one source.
     * @param { int } id - Source id.
     * @param { audio.StreamUsage } usage - Stream usage.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types;
     *                                 3.Parameter verification failed.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setStreamUsage(id: int, usage: audio.StreamUsage): void;

    /**
     * Create an audio haptic player. This method uses a promise to return the result. If haptics is needed, caller
     * should have the permission of ohos.permission.VIBRATE.
     * @permission ohos.permission.VIBRATE
     * @param { int } id - Source id.
     * @param { AudioHapticPlayerOptions } options - Options when creating audio haptic player.
     * @returns { Promise<AudioHapticPlayer> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400106 - Unsupport format.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    createPlayer(id: int, options?: AudioHapticPlayerOptions): Promise<AudioHapticPlayer>;

    /**
     * Register audio and haptic file represented by fd into manager. Audio and haptic works are paired while playing.
     * After registering source, it will returns the source id. This method uses a promise to return the source id.
     * @param { AudioHapticFileDescriptor } audioFd : The file descriptor of audio source from file system.
     * @param { AudioHapticFileDescriptor } hapticFd : The file descriptor of haptic source from file system.
     * @returns { Promise<number> } Promise used to return the source id.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20
     */
    registerSourceFromFd(audioFd: AudioHapticFileDescriptor, hapticFd: AudioHapticFileDescriptor): Promise<number>;
  }

  /**
   * Type of audio haptic.
   * @enum {int}
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum AudioHapticType {
    /**
     * Audio.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    AUDIO_HAPTIC_TYPE_AUDIO = 0,

    /**
     * Haptic.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    AUDIO_HAPTIC_TYPE_HAPTIC = 1,
  }

  /**
   * Describes audio haptic file descriptor.
   * Caller needs to ensure the fd is valid and the offset and length are correct.
   * @typedef AudioHapticFileDescriptor
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 20
   */
  interface AudioHapticFileDescriptor {
    /**
     * The file descriptor of the source.
     * @type { number }
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20
     */
    fd: number;

    /**
     * The length in bytes of the data to be read.
     * By default, the length is the rest of bytes in the file from the offset.
     * @type { ?number }
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20
     */
    length?: number;

    /**
     * The offset into the file where the data to be read.
     * By default, the offset is 0.
     * @type { ?number }
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20
     */
    offset?: number
  }

  /**
   * Audio haptic player object.
   * @typedef AudioHapticPlayer
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface AudioHapticPlayer {
    /**
     * Is muted for one AudioHapticType
     * @param { AudioHapticType } type - Indicates the type to query.
     * @returns { boolean } - Is muted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    isMuted(type: AudioHapticType): boolean;

    /**
     * Start this player. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 5400102 - Operate not permit.
     * @throws { BusinessError } 5400103 - IO error.
     * @throws { BusinessError } 5400105 - Service died.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    start(): Promise<void>;

    /**
     * Stop this player. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 5400102 - Operate not permit.
     * @throws { BusinessError } 5400105 - Service died.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    stop(): Promise<void>;

    /**
     * Release this player. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 5400105 - Service died.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    release(): Promise<void>;

    /**
     * Subscribes end of stream event.
     * @param { 'endOfStream' } type - Type of the playback event to listen for.
     * @param { Callback<void> } callback - Callback used to listen for the playback end of stream.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    on(type: 'endOfStream', callback: Callback<void>): void;

    /**
     * Unsubscribes end of stream event.
     * @param { 'endOfStream' } type - Type of the playback event to listen for.
     * @param { Callback<void> } callback - Callback used to listen for the playback end of stream.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    off(type: 'endOfStream', callback?: Callback<void>): void;

    /**
     * Subscribes audio interrupt event.
     * @param { 'audioInterrupt' } type - Type of the playback event to listen for.
     * @param { Callback<audio.InterruptEvent> } callback - Callback used to listen for audio interrupt info.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void;

    /**
     * Unsubscribes audio interrupt event.
     * @param { 'audioInterrupt' } type - Type of the playback event to listen for.
     * @param { Callback<audio.InterruptEvent> } callback - Callback used to listen for audio interrupt info.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    off(type: 'audioInterrupt', callback?: Callback<audio.InterruptEvent>): void;

    /**
     * Enable haptics when the ringer mode is silent mode.
     * This function should be called before player start or after stop, and before release.
     * @param { boolean } enable - use {@code true} if application want to enable this feature.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 5400102 - Operate not permit in current state.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @systemapi
     * @since 20
     */
    enableHapticsInSilentMode(enable: boolean): void;

    /**
     * Set audio volume for this player. This method uses a promise to return the result.
     * This function should be called before player release.
     * @param { number } volume - Target audio volume.
     *     The value ranges from 0.00 to 1.00. 1.00 indicates the maximum volume (100%).
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 5400102 - Operate not permit in current state.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400108 - Parameter out of range.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20
     */
    setVolume(volume: number): Promise<void>;

    /**
     * Check whether the device supports haptics intensity adjustment.
     * @returns { boolean } - {@code true} means supported.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @systemapi
     * @since 20
     */
    isHapticsIntensityAdjustmentSupported(): boolean;

    /**
     * Set haptics intensity for this player. This method uses a promise to return the result.
     * This function should be called before player release, and can only set once for each starting process.
     * @param { number } intensity - Target Haptics intensity value.
     *     The value ranges from 0.00 to 1.00. 1.00 indicates the maximum intensity (100%).
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 801 - Function is not supported in current device.
     * @throws { BusinessError } 5400102 - Operate not permit in current state.
     * @throws { BusinessError } 5400108 - Parameter out of range.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @systemapi
     * @since 20
     */
    setHapticsIntensity(intensity: number): Promise<void>;

    /**
     * Check whether the device supports haptics intensity ramp effect.
     * @returns { boolean } - {@code true} means supported.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @systemapi
     * @since 20
     */
    isHapticsRampSupported(): boolean;

    /**
     * Set haptics intensity ramp effect for this player. This method uses a promise to return the result.
     * This function should be called before player start or after stop, and before release.
     * @param { number } duration - ramp duration to set, unit is milliseconds.
     *     The value should be an integer, and not less than 100.
     * @param { number } startIntensity - Starting intensity for Haptics ramp to set.
     *     The value ranges from 0.00 to 1.00. 1.00 indicates the maximum intensity (100%).
     * @param { number } endIntensity - End intensity for haptics ramp to set.
     *     The value ranges from 0.00 to 1.00. 1.00 indicates the maximum intensity (100%).
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 801 - Function is not supported in current device.
     * @throws { BusinessError } 5400102 - Operate not permit in current state.
     * @throws { BusinessError } 5400108 - Parameter out of range.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @systemapi
     * @since 20
     */
    setHapticsRamp(duration: number, startIntensity: number, endIntensity: number): Promise<void>;

    /**
     * Set the playback to be looping. This method uses a promise to return the result.
     * This function should be called before player release.
     * @param { boolean } loop - Whether to loop or not, value true means loop.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 5400102 - Operate not permit in current state.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20
     */
    setLoop(loop: boolean): Promise<void>;
  }
}
export default audioHaptic;
