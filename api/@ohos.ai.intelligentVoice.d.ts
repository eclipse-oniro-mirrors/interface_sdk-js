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
 * @kit BasicServicesKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * @namespace intelligentVoice
 * @syscap SystemCapability.AI.IntelligentVoice.Core
 * @systemapi
 * @since 10 dynamic
 */
declare namespace intelligentVoice {
  /**
   * Obtains an {@link IntelligentVoiceManager} instance.
   * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
   * @returns { IntelligentVoiceManager } this {@link IntelligentVoiceManager} object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 22700101 - No memory.
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  function getIntelligentVoiceManager(): IntelligentVoiceManager;

  /**
   * Implements intelligent voice management.
   * @typedef IntelligentVoiceManager
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  interface IntelligentVoiceManager {
    /**
     * Obtains capability information.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @returns { Array<IntelligentVoiceEngineType> } array of supported IntelligentVoiceEngineType.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    getCapabilityInfo(): Array<IntelligentVoiceEngineType>;
    /**
     * Subscribes service change events. When the state of intelligent voice service changes,
     * the callback is invoked.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { 'serviceChange' } type - Type of the event to listen for. Only the serviceChange event is supported.
     * @param { Callback<ServiceChangeType> } callback - Callback is invoked when the event is triggered.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    on(type: 'serviceChange', callback: Callback<ServiceChangeType>): void;
    /**
     * Unsubscribes service change events.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { 'serviceChange' } type - Type of the event to listen for. Only the serviceChange event is supported.
     * @param { Callback<ServiceChangeType> } [callback] - Callback is invoked when the event is triggered.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'serviceChange', callback?: Callback<ServiceChangeType>): void;
  }

  /**
   * Implements wakeup management.
   * @typedef WakeupManager
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 12 dynamic
   */
  interface WakeupManager {
    /**
     * Sets an intelligent voice parameter. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { string } key - the key of the intelligent voice parameter to set.
     * @param { string } value - the value of the intelligent voice parameter to set.
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @throws { BusinessError } 22700107 - System error.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    setParameter(key: string, value: string): Promise<void>;
    /**
     * Obtains the value of an intelligent voice parameter. This method uses a promise to return the query result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { string } key - the key of the intelligent voice parameter whose value is to be obtained.
     * @returns { Promise<string> } the promise used to return the value of the intelligent voice parameter.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @throws { BusinessError } 22700107 - System error.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    getParameter(key: string): Promise<string>;
    /**
     * Obtains files needed to upload. This method uses a promise to return the files needed to upload.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { number } maxCount - the maximum count of upload files. The maxCount should be greater than 0 and smaller than 101
     * @returns { Promise<Array<UploadFile>> } the promise used to return the upload files.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 22700101 - No memory.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @throws { BusinessError } 22700107 - System error.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    getUploadFiles (maxCount: number): Promise<Array<UploadFile>>;
    /**
     * Obtains wakeup source files. This method uses a promise to return the wakeup source files.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @returns { Promise<Array<WakeupSourceFile>> } the promise used to return the wakeup source files.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 22700101 - No memory.
     * @throws { BusinessError } 22700107 - System error.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    getWakeupSourceFiles(): Promise<Array<WakeupSourceFile>>;
    /**
     * Enrolls with wakeup files for result. This method uses a promise to return the enroll result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { Array<WakeupSourceFile> } wakeupFiles - the wakeup source files needed.
     * @param { string } wakeupInfo - wakeup information.
     * @returns { Promise<EnrollResult> } the promise used to return the enroll result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700101 - No memory.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @throws { BusinessError } 22700107 - System error.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    enrollWithWakeupFilesForResult(wakeupFiles: Array<WakeupSourceFile>, wakeupInfo: string): Promise<EnrollResult>;
    /**
     * Clears user data.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 22700107 - System error.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    clearUserData(): Promise<void>;
  }

  /**
   * Enumerates upload file type.
   * @enum {number}
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 12 dynamic
   */
  enum UploadFileType {
    /**
     * Enroll file.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    ENROLL_FILE = 0,
    /**
     * Wakeup file.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    WAKEUP_FILE = 1,
  }

  /**
   * Describes upload file information.
   * @typedef UploadFile
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 12 dynamic
   */
  interface UploadFile {
    /**
     * Report file type.
     * @type { UploadFileType }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    type: UploadFileType;
    /**
     * Files description.
     * @type { string }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    filesDescription: string;
    /**
     * Files content.
     * @type { Array<ArrayBuffer> }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    filesContent: Array<ArrayBuffer>;
  }

  /**
   * Describes wakeup source file information.
   * @typedef WakeupSourceFile
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 12 dynamic
   */
  interface WakeupSourceFile {
    /**
     * File path.
     * @type { string }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    filePath: string;
    /**
     * File content.
     * @type { ArrayBuffer }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    fileContent: ArrayBuffer;
  }

  /**
   * Enumerates service change type.
   * @enum {number}
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  enum ServiceChangeType {
    /**
     * Service unavailable.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    SERVICE_UNAVAILABLE = 0,
  }

  /**
   * Enumerates intelligent voice engine type.
   * @enum {number}
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  enum IntelligentVoiceEngineType {
    /**
     * Enroll engine.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    ENROLL_ENGINE_TYPE = 0,
    /**
     * Wakeup engine.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    WAKEUP_ENGINE_TYPE = 1,
    /**
     * Update engine.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    UPDATE_ENGINE_TYPE = 2,
  }

  /**
   * Describes enroll intelligent voice engine.
   * @typedef EnrollIntelligentVoiceEngineDescriptor
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  interface EnrollIntelligentVoiceEngineDescriptor {
    /**
     * Wakeup phrase.
     * @type { string }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    wakeupPhrase: string;
  }

  /**
   * Describes wakeup intelligent voice engine.
   * @typedef WakeupIntelligentVoiceEngineDescriptor
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  interface WakeupIntelligentVoiceEngineDescriptor {
    /**
     * Need reconfirm.
     * @type { boolean }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    needReconfirm: boolean;
    /**
     * Wakeup phrase.
     * @type { string }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    wakeupPhrase: string;
  }

  /**
   * Enumerates evaluation result code.
   * @enum {number}
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 12 dynamic
   */
  enum EvaluationResultCode {
    /**
     * Unknown.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
     UNKNOWN = 0,
    /**
     * Pass.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    PASS = 1,
    /**
     * Word is empty.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    WORD_EMPTY = 2,
    /**
     * Only chinese is supported.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    CHINESE_ONLY = 3,
    /**
     * Invalid length.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    INVALID_LENGTH = 4,
    /**
     * Unusual word.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    UNUSUAL_WORD = 5,
    /**
     * Consecutive same word.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    CONSECUTIVE_SAME_WORD = 6,
    /**
     * Too few phonemes.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    TOO_FEW_PHONEMES = 7,
    /**
     * Too many phonemes.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    TOO_MANY_PHONEMES = 8,
    /**
     * Contain common instruction.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    COMMON_INSTRUCTION = 9,
    /**
     * Contain common spoken language.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    COMMON_SPOKEN_LANGUAGE = 10,
    /**
     * Contain sensitive word.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    SENSITIVE_WORD = 11,
    /**
     * Two consecutive words without initial consonant.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    NO_INITIAL_CONSONANT = 12,
    /**
     * Contain repeated phoneme.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    REPEATED_PHONEME = 13,
  }

  /**
   * Describes evaluation result.
   * @typedef EvaluationResult
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 12 dynamic
   */
  interface EvaluationResult {
    /**
     * Evaluation score.
     * @type { number }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    score: number;
    /**
     * Describes evaluation result code.
     * @type { EvaluationResultCode }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    resultCode: EvaluationResultCode;
  }

  /**
   * Obtains an {@link WakeupManager} instance.
   * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
   * @returns { WakeupManager } this {@link WakeupManager} object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 22700101 - No memory.
   * @throws { BusinessError } 22700107 - System error.
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 12 dynamic
   */
  function getWakeupManager(): WakeupManager;

  /**
   * Obtains an {@link EnrollIntelligentVoiceEngine} instance. This method uses an asynchronous callback to return the EnrollIntelligentVoiceEngine instance.
   * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
   * @param { EnrollIntelligentVoiceEngineDescriptor } descriptor - descriptor indicates enroll intelligent voice engine descriptor.
   * @param { AsyncCallback<EnrollIntelligentVoiceEngine> } callback - the callback used to return the EnrollIntelligentVoiceEngine instance.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @throws { BusinessError } 22700101 - No memory.
   * @throws { BusinessError } 22700102 - Invalid parameter.
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  function createEnrollIntelligentVoiceEngine(descriptor: EnrollIntelligentVoiceEngineDescriptor, callback: AsyncCallback<EnrollIntelligentVoiceEngine>): void;

  /**
   * Obtains an {@link EnrollIntelligentVoiceEngine} instance. This method uses a promise to return the EnrollIntelligentVoiceEngine instance.
   * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
   * @param { EnrollIntelligentVoiceEngineDescriptor } descriptor - descriptor indicates enroll intelligent voice engine descriptor.
   * @returns { Promise<EnrollIntelligentVoiceEngine> } the promise used to return the EnrollIntelligentVoiceEngine instance.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @throws { BusinessError } 22700101 - No memory.
   * @throws { BusinessError } 22700102 - Invalid parameter.
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  function createEnrollIntelligentVoiceEngine(descriptor: EnrollIntelligentVoiceEngineDescriptor): Promise<EnrollIntelligentVoiceEngine>;

  /**
   * Obtains an {@link WakeupIntelligentVoiceEngine} instance. This method uses an asynchronous callback to return the WakeupIntelligentVoiceEngine instance.
   * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
   * @param { WakeupIntelligentVoiceEngineDescriptor } descriptor - descriptor indicates wakeup intelligent voice engine descriptor.
   * @param { AsyncCallback<WakeupIntelligentVoiceEngine> } callback - the callback used to return the WakeupIntelligentVoiceEngine instance.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @throws { BusinessError } 22700101 - No memory.
   * @throws { BusinessError } 22700102 - Invalid parameter.
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  function createWakeupIntelligentVoiceEngine(descriptor: WakeupIntelligentVoiceEngineDescriptor, callback: AsyncCallback<WakeupIntelligentVoiceEngine>): void;

  /**
   * Obtains an {@link WakeupIntelligentVoiceEngine} instance. This method uses a promise to return the WakeupIntelligentVoiceEngine instance.
   * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
   * @param { WakeupIntelligentVoiceEngineDescriptor } descriptor - descriptor indicates wakeup intelligent voice engine descriptor.
   * @returns { Promise<WakeupIntelligentVoiceEngine> } the promise used to return the WakeupIntelligentVoiceEngine instance.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @throws { BusinessError } 22700101 - No memory.
   * @throws { BusinessError } 22700102 - Invalid parameter.
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  function createWakeupIntelligentVoiceEngine(descriptor: WakeupIntelligentVoiceEngineDescriptor): Promise<WakeupIntelligentVoiceEngine>;

  /**
   * Describes enroll engine config.
   * @typedef EnrollEngineConfig
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  interface EnrollEngineConfig {
    /**
     * Language that enroll engine supports.
     * @type { string }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    language: string;
    /**
     * Region that enroll engine supports.
     * @type { string }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    region: string;
  }

  /**
   * Enumerates sensibility type.
   * @enum {number}
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  enum SensibilityType {
    /**
     * Low sensibility.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    LOW_SENSIBILITY = 1,
    /**
     * Middle sensibility.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    MIDDLE_SENSIBILITY = 2,
    /**
     * High sensibility.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    HIGH_SENSIBILITY = 3,
  }

  /**
   * Describes wakeup hap information.
   * @typedef WakeupHapInfo
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  interface WakeupHapInfo {
    /**
     * Bundle name.
     * @type { string }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    bundleName: string;
    /**
     * Ability name.
     * @type { string }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    abilityName: string;
  }

  /**
   * Enumerates wakeup intelligent voice event type.
   * @enum {number}
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  enum WakeupIntelligentVoiceEventType {
    /**
     * Wakeup None.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    INTELLIGENT_VOICE_EVENT_WAKEUP_NONE = 0,
    /**
     * Recognize complete.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    INTELLIGENT_VOICE_EVENT_RECOGNIZE_COMPLETE = 1,
    /**
     * Headset Recognize complete.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    INTELLIGENT_VOICE_EVENT_HEADSET_RECOGNIZE_COMPLETE = 2,
  }

  /**
   * Enumerates intelligent voice error code.
   * @enum {number}
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  enum IntelligentVoiceErrorCode {
    /**
     * No memory.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    INTELLIGENT_VOICE_NO_MEMORY = 22700101,
    /**
     * Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    INTELLIGENT_VOICE_INVALID_PARAM = 22700102,
    /**
     * Init failed.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    INTELLIGENT_VOICE_INIT_FAILED = 22700103,
    /**
     * Failed to commit the enrollment.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    INTELLIGENT_VOICE_COMMIT_ENROLL_FAILED = 22700104,
    /**
     * Start capturer failed.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    INTELLIGENT_VOICE_START_CAPTURER_FAILED = 22700105,
    /**
     * Read failed.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    INTELLIGENT_VOICE_READ_FAILED = 22700106,
    /**
     * System error.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    INTELLIGENT_VOICE_SYSTEM_ERROR = 22700107,
  }

  /**
   * Enumerates enroll result.
   * @enum {number}
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  enum EnrollResult {
    /**
     * Success.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    SUCCESS = 0,
    /**
     * Vpr train failed.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    VPR_TRAIN_FAILED = -1,
    /**
     * Wakeup phrase not match.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    WAKEUP_PHRASE_NOT_MATCH = -2,
    /**
     * Too noisy.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    TOO_NOISY = -3,
    /**
     * Too loud.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    TOO_LOUD = -4,
    /**
     * Interval large.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    INTERVAL_LARGE = -5,
    /**
     * Different person.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    DIFFERENT_PERSON = -6,
    /**
     * Unknown error.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    UNKNOWN_ERROR = -100,
  }

  /**
   * Enumerates capturer channel.
   * @enum {number}
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 12 dynamic
   */
  enum CapturerChannel {
    /**
     * Capturer channel 1.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    CAPTURER_CHANNEL_1 = 0x1 << 0,
    /**
     * Capturer channel 2.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    CAPTURER_CHANNEL_2 = 0x1 << 1,
    /**
     * Capturer channel 3.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    CAPTURER_CHANNEL_3 = 0x1 << 2,
    /**
     * Capturer channel 4.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    CAPTURER_CHANNEL_4 = 0x1 << 3,
  }

  /**
   * Describes enroll callback information.
   * @typedef EnrollCallbackInfo
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  interface EnrollCallbackInfo {
    /**
     * Result.
     * @type { EnrollResult }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    result: EnrollResult;
    /**
     * Describes enroll event context.
     * @type { string }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    context: string;
  }

  /**
   * Describes wakeup intelligent voice engine callback information.
   * @typedef WakeupIntelligentVoiceEngineCallbackInfo
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  interface WakeupIntelligentVoiceEngineCallbackInfo {
    /**
     * Wakeup event id.
     * @type { WakeupIntelligentVoiceEventType }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    eventId: WakeupIntelligentVoiceEventType;
    /**
     * Is success.
     * @type { boolean }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    isSuccess: boolean;
    /**
     * Describes wakeup event context.
     * @type { string }
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    context: string;
  }

  /**
   * Implements enroll intelligent voice engine.
   * @typedef EnrollIntelligentVoiceEngine
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  interface EnrollIntelligentVoiceEngine {
    /**
     * Obtains the supported regions, This method uses an asynchronous callback to return the query result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { AsyncCallback<Array<string>> } callback - the callback used to return the supported regions.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    getSupportedRegions(callback: AsyncCallback<Array<string>>): void;
    /**
     * Obtains the supported regions, This method uses a promise to return the query result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @returns { Promise<Array<string>> } the promise used to return the supported regions.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    getSupportedRegions(): Promise<Array<string>>;
    /**
     * Initials the engine, This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { EnrollEngineConfig } config - config indicates enroll engine configuration.
     * @param { AsyncCallback<void> } callback - the callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @throws { BusinessError } 22700103 - Init failed.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    init(config: EnrollEngineConfig, callback: AsyncCallback<void>): void;
    /**
     * Initials the engine, This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { EnrollEngineConfig } config - config indicates enroll engine configuration.
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @throws { BusinessError } 22700103 - Init failed.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    init(config: EnrollEngineConfig): Promise<void>;
    /**
     * Enrolls for result, This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { boolean } isLast - isLast indicates if it is the last time to enroll.
     * @param { AsyncCallback<EnrollCallbackInfo> } callback - the callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    enrollForResult(isLast: boolean, callback: AsyncCallback<EnrollCallbackInfo>): void;
    /**
     * Enrolls for result, This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { boolean } isLast - isLast indicates if it is the last time to enroll.
     * @returns { Promise<EnrollCallbackInfo> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    enrollForResult(isLast: boolean): Promise<EnrollCallbackInfo>;
    /**
     * Stops the engine, This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { AsyncCallback<void> } callback  - the callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops the engine, This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    stop(): Promise<void>;
    /**
     * Commit enroll, This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { AsyncCallback<void> } callback - the callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 22700104 - Failed to commit the enrollment.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    commit(callback: AsyncCallback<void>): void;
    /**
     * Commit enroll, This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 22700104 - Failed to commit the enrollment.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    commit(): Promise<void>;
    /**
     * Sets wakeup hap information, This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { WakeupHapInfo } info - info indicates wakeup hap information.
     * @param { AsyncCallback<void> } callback - the callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    setWakeupHapInfo(info: WakeupHapInfo, callback: AsyncCallback<void>): void;
    /**
     * Sets wakeup hap information, This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { WakeupHapInfo } info - info indicates wakeup hap information.
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    setWakeupHapInfo(info: WakeupHapInfo): Promise<void>;
    /**
     * Sets sensibility, This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { SensibilityType } sensibility - sensibility to set.
     * @param { AsyncCallback<void> } callback - the callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    setSensibility(sensibility: SensibilityType, callback: AsyncCallback<void>): void;
    /**
     * Sets sensibility, This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { SensibilityType } sensibility - sensibility to set.
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    setSensibility(sensibility: SensibilityType): Promise<void>;
    /**
     * Sets an intelligent voice parameter. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { string } key - the key of the intelligent voice parameter to set.
     * @param { string } value - the value of the intelligent voice parameter to set.
     * @param { AsyncCallback<void> } callback - the callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    setParameter(key: string, value: string, callback: AsyncCallback<void>): void;
    /**
     * Sets an intelligent voice parameter. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { string } key - the key of the intelligent voice parameter to set.
     * @param { string } value - the value of the intelligent voice parameter to set.
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    setParameter(key: string, value: string): Promise<void>;
    /**
     * Obtains the value of an intelligent voice parameter. This method uses an asynchronous callback to return the query result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { string } key - the key of the intelligent voice parameter whose value is to be obtained.
     * @param { AsyncCallback<string> } callback - the callback used to return the value of the intelligent voice parameter.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    getParameter(key: string, callback: AsyncCallback<string>): void;
    /**
     * Obtains the value of an intelligent voice parameter. This method uses a promise to return the query result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { string } key - the key of the intelligent voice parameter whose value is to be obtained.
     * @returns { Promise<string> } the promise used to return the value of the intelligent voice parameter.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    getParameter(key: string): Promise<string>;
    /**
     * Evaluates for result, This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { string } word - the word to evaluate.
     * @returns { Promise<EvaluationResult> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700107 - System error.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    evaluateForResult(word: string): Promise<EvaluationResult>;
    /**
     * Releases the engine, This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { AsyncCallback<void> } callback - the callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases the engine, This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    release(): Promise<void>;
  }

  /**
   * Implements wakeup intelligent voice engine.
   * @typedef WakeupIntelligentVoiceEngine
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 10 dynamic
   */
  interface WakeupIntelligentVoiceEngine {
    /**
     * Obtains the supported regions, This method uses an asynchronous callback to return the query result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { AsyncCallback<Array<string>> } callback - the callback used to return the supported regions.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    getSupportedRegions(callback: AsyncCallback<Array<string>>): void;
    /**
     * Obtains the supported regions, This method uses a promise to return the query result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @returns { Promise<Array<string>> } the promise used to return the supported regions.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    getSupportedRegions(): Promise<Array<string>>;
    /**
     * Sets wakeup hap information, This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { WakeupHapInfo } info - info indicates wakeup hap information.
     * @param { AsyncCallback<void> } callback - the callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    setWakeupHapInfo(info: WakeupHapInfo, callback: AsyncCallback<void>): void;
    /**
     * Sets wakeup hap information, This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { WakeupHapInfo } info - info indicates wakeup hap information.
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    setWakeupHapInfo(info: WakeupHapInfo): Promise<void>;
    /**
     * Sets sensibility, This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { SensibilityType } sensibility - sensibility to set.
     * @param { AsyncCallback<void> } callback - the callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    setSensibility(sensibility: SensibilityType, callback: AsyncCallback<void>): void;
    /**
     * Sets sensibility, This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { SensibilityType } sensibility - sensibility to set.
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    setSensibility(sensibility: SensibilityType): Promise<void>;
    /**
     * Sets an intelligent voice parameter. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { string } key - the key of the intelligent voice parameter to set.
     * @param { string } value - the value of the intelligent voice parameter to set.
     * @param { AsyncCallback<void> } callback - the callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    setParameter(key: string, value: string, callback: AsyncCallback<void>): void;
    /**
     * Sets an intelligent voice parameter. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { string } key - the key of the intelligent voice parameter to set.
     * @param { string } value - the value of the intelligent voice parameter to set.
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    setParameter(key: string, value: string): Promise<void>;
    /**
     * Obtains the value of an intelligent voice parameter. This method uses an asynchronous callback to return the query result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { string } key - the key of the intelligent voice parameter whose value is to be obtained.
     * @param { AsyncCallback<string> } callback - the callback used to return the value of the intelligent voice parameter.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    getParameter(key: string, callback: AsyncCallback<string>): void;
    /**
     * Obtains the value of an intelligent voice parameter. This method uses a promise to return the query result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { string } key - the key of the intelligent voice parameter whose value is to be obtained.
     * @returns { Promise<string> } the promise used to return the value of the intelligent voice parameter.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    getParameter(key: string): Promise<string>;
    /**
     * Gets pulse-code modulation audio. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @returns { Promise<ArrayBuffer> } the promise used to return the pulse-code modulation audio.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 22700101 - No memory.
     * @throws { BusinessError } 22700107 - System error.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    getPcm(): Promise<ArrayBuffer>;
    /**
     * Starts the capturer. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { number } channels - the channels needed in reading. The channels should be greater than 0 and smaller than 16.
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 22700102 - Invalid parameter.
     * @throws { BusinessError } 22700105 - Start capturer failed.
     * @throws { BusinessError } 22700107 - System error.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    startCapturer(channels: number): Promise<void>;
    /**
     * Reads the buffer from wakeup engine. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @returns { Promise<ArrayBuffer> } the promise used to return the buffer.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 22700101 - No memory.
     * @throws { BusinessError } 22700106 - Read failed.
     * @throws { BusinessError } 22700107 - System error.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    read(): Promise<ArrayBuffer>;
    /**
     * Stops the capturer. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 22700107 - System error.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 12 dynamic
     */
    stopCapturer(): Promise<void>;
    /**
     * Releases the engine, This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { AsyncCallback<void> } callback - the callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases the engine, This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @returns { Promise<void> } the promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    release(): Promise<void>;
    /**
     * Subscribes wakeup intelligent voice events. When wakeup intelligent voice events reach,
     * the callback is invoked.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { 'wakeupIntelligentVoiceEvent' } type - Type of the event to listen for. Only the wakeupIntelligentVoice event is supported.
     * @param { Callback<WakeupIntelligentVoiceEngineCallbackInfo> } callback - the callback invoked when the event is triggered.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    on(type: 'wakeupIntelligentVoiceEvent', callback: Callback<WakeupIntelligentVoiceEngineCallbackInfo>): void;
    /**
     * Unsubscribes wakeup intelligent voice events.
     * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
     * @param { 'wakeupIntelligentVoiceEvent' } type - Type of the event to listen for. Only the wakeupIntelligentVoice event is supported.
     * @param { Callback<WakeupIntelligentVoiceEngineCallbackInfo> } [callback] - the callback invoked when the event is triggered.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.AI.IntelligentVoice.Core
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'wakeupIntelligentVoiceEvent', callback?: Callback<WakeupIntelligentVoiceEngineCallbackInfo>): void;
  }
}

export default intelligentVoice;