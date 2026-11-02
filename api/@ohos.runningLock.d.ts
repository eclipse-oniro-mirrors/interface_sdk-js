/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file RunningLock
 * @kit BasicServicesKit
 */

import { AsyncCallback, BusinessError } from './@ohos.base';

/**
 * The **runningLock** module provides APIs for creating, querying, holding, and releasing running locks. A running lock
 * enables the proximity sensor to turn on or off the screen, or prevents the device from entering sleep mode when the
 * screen is off. For details about the running lock types, see [RunningLockType]{@link runningLock.RunningLockType}.
 *
 * @syscap SystemCapability.PowerManager.PowerManager.Core
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace runningLock {

  /**
   * The lock that prevents the system from sleeping or enanles the proximity sensor to control screen on/off.
   * Different types of locks have diffrent functions. For details, see [RunningLockType]{@link runninglocktype}.
   * This API must be used together with [create]{@liink runninglockcreate9} to create a lock, [hold]{@link hold9}
   * to hold the lock, and [unhold]{@link unhold9} to release the lock. For details, see the example.
   * A RunningLock object cannot be shared among multiple Worker or TaskPool threads. The hold(), unhold(),
   * and isHolding() methods of the same RunningLock instance must be called in the same thread.
   * If the methods are called in different threads, the lock status may be inconsistent and no error
   * will be reported. After the power service restarts unexpectedly, the craeted RunningLock object is still valid,
   * but the service restart scenario and call the hold() method again if necessary. When the JS object of a
   * RunningLock is garbage collected, the lock held by the underlying layer is automatically released.
   * To hold the lock for a long time, keep the reference to the RunningLock object.
   *
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamic
   * @since 23 static
   */
  class RunningLock {
    /**
     * Locks and holds a **RunningLock** object.
     *
     * @permission ohos.permission.RUNNING_LOCK
     * @param { number } timeout - Duration for locking and holding the **RunningLock** object, in ms.
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead runningLock.RunningLock.hold
     */
    lock(timeout: number): void;

    /**
     * Lock and hold the RunningLock. This is applicable in scenarios where the system needs to prevent sleep
     * when an application requires continuous background operation (such as background downloads, long-term
     * location tracking, etc.) or when the screen needs to be controlled to trun on or off based on proximity sensor
     * input during a call. After calling this method, you must call unhold() to release the lock once it is no longer
     * needed, or set a timeout release time when calling the method so that the system automatically releases the lock.
     * This method should be used in conjunction with the ubhold() method. Failure to release the lock will cause the
     * sleep prevention or screen control functionality to remain active indefinitely. Repeated calls to hold()
     * will not result in an error. Note: If you first call hold(-1) (to hold the lock permanently) and then  call
     * hold(timeout) (to hold the lock for a specific duration), the lock will be released after the timeout
     * milliseconds, meaning the timeout parameter of the latter call will owerride the former. It is recommended that
     * if you need to update the timeout duration, first call unhold() to release the lock and then
     * call hold(newTimeout).
     *
     * @permission ohos.permission.RUNNING_LOCK
     * @param { int } timeout - Duration for locking and holding the **RunningLock** object, in ms.<br>The value must be
     *     a number:<br>**-1**: The lock is permanently held and needs to be released automatically.<br>**0**: The lock
     *     is released 3 seconds after the timer expires by default.<br>> 0: The lock is released based on the input
     *     value after the timer expires.
     * @throws { BusinessError } 201 - If the permission is denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    hold(timeout: int): void;

    /**
     * Checks whether this running lock is used.
     *
     * @returns { boolean } Returns true if the lock is held or in use; returns false if the lock has been released.
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead runningLock.RunningLock.isHolding
     */
    isUsed(): boolean;

    /**
     * Checks whether this running lock is being held.
     *
     * @returns { boolean } The value **true** indicates that the **RunningLock** object is held; and the value
     *     **false** indicates that the **RunningLock** object is released.
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    isHolding(): boolean;

    /**
     * Releases this running lock.
     *
     * @permission ohos.permission.RUNNING_LOCK
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead runningLock.RunningLock.unhold
     */
    unlock(): void;

    /**
     * Releases this running lock. This method is used together with the hold() method. After the lock is held by
     * calling the hold() method, this method is called to release the lock. If the unhold() method is called for
     * a lock that is not held, no error is reported and the operation is regarded as no operation.
     *
     * @permission ohos.permission.RUNNING_LOCK
     * @throws { BusinessError } 201 - If the permission is denied.
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    unhold(): void;
  }

  /**
   * Enumerates the types of **RunningLock** objects.
   *
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamic
   * @since 23 static
   */
  export enum RunningLockType {
    /**
     * A lock that prevents the system from entering sleep mode when the screen is off.
     *
     * **NOTE**
     *
     * This parameter is supported since API version 7 and deprecated since API version 10.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 7 dynamic
     * @since 23 static
     * @deprecated since 10
     */
    BACKGROUND = 1,
    /**
     * A lock that enables the proximity sensor and turns on or off the screen based on the distance between the sensor
     * and the obstacle.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 7 dynamic
     * @since 23 static
     */
    PROXIMITY_SCREEN_CONTROL = 2,
    /**
     * A background lock that prevents the system from automatically entering sleep mode when the user is inactive for a
     * period of time. Note: This lock cannot prevent the system from entering the forced sleep state in scenarios such
     * as closing the PC lid. The user must listen for the
     * [COMMON_EVENT_ENTER_FORCE_SLEEP](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_enter_force_sleep12)
     * event and release this lock after receiving the event. The behavior of this lock varies with devices. For details
     * about how to use this type of lock, see
     * [Preventing the Idle System from Entering Sleep Mode](docroot://basic-services/powermgr/runningLock/runningLock-dev.md).
     * If the device does not support the BACKGROUND_USER_IDLE type, the create() method still returns a success
     * message. However, the subsequen hold() call will not take effect amd no error will be reported.
     * You are advised to use isSupported() to check whether the device supports this type after calling create().
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 23 dynamic&static
     */
    BACKGROUND_USER_IDLE = 129
  }

  /**
   * Checks whether a specified type of {@link RunningLock} is supported. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { RunningLockType } type - Type of the running lock.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined** and **data** is the query result obtained, where the value **true** indicates that the
   *     specified type of the running lock is supported and **false** indicates the opposite. Otherwise, **err** is an
   *     error object.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead runningLock.isSupported
   */
  function isRunningLockTypeSupported(type: RunningLockType, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a specified type of {@link RunningLock} is supported. This API uses a promise to return the
   * result.
   *
   * @param { RunningLockType } type - Type of the running lock.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the specified
   *     type of the running lock is supported, and the value **false** indicates the opposite.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead runningLock.isSupported
   */
  function isRunningLockTypeSupported(type: RunningLockType): Promise<boolean>;

  /**
   * Checks whether a specified type of {@link RunningLock} is supported.
   *
   * @param { RunningLockType } type - Type of the running lock. The value must be an enum.
   * @returns { boolean } The value **true** indicates that the specified type of the running lock is supported, and the
   *     value **false** indicates the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function isSupported(type: RunningLockType): boolean;

  /**
   * Creates a {@link RunningLock} object. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.RUNNING_LOCK
   * @param { string } name - Indicates the {@link RunningLock} name. A recommended name consists of the package or
   *     class name and a suffix.
   * @param { RunningLockType } type - Indicates the {@link RunningLockType}.
   * @param { AsyncCallback<RunningLock> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined** and data is the created **RunningLock** object. Otherwise, **err** is an
   *     error object. **AsyncCallback** has encapsulated an API of the **RunningLock** class.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead runningLock.create
   */
  function createRunningLock(name: string, type: RunningLockType, callback: AsyncCallback<RunningLock>): void;

  /**
   * Creates a {@link RunningLock} object. This API uses a promise to return the result.
   *
   * @permission ohos.permission.RUNNING_LOCK
   * @param { string } name - Indicates the {@link RunningLock} name. A recommended name consists of the package or
   *     class name and a suffix.
   * @param { RunningLockType } type - Indicates the {@link RunningLockType}.
   * @returns { Promise<RunningLock> } Promise used to return the {@link RunningLock} object.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead runningLock.create
   */
  function createRunningLock(name: string, type: RunningLockType): Promise<RunningLock>;

  /**
   * Creates a {@link RunningLock} object. This API uses an asynchronous callback to return the result.
   * After creating the lock object, the hold() method must be called to lock and hold the lock in order for the lock
   * functionality to take effect. It is not recommended to concurrently call create to create lock objects
   * cross multiple Workers/TaskPools.
   *
   * @permission ohos.permission.RUNNING_LOCK
   * @param { string } name - Name of the **RunningLock** object. The value must be a string.
   * @param { RunningLockType } type - Type of the **RunningLock** object. The value must be an enum.
   * @param { AsyncCallback<RunningLock> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined** and data is the created **RunningLock** object. Otherwise, **err** is an
   *     error object. **AsyncCallback** has encapsulated an API of the **RunningLock** class.
   * @throws { BusinessError } 201 - If the permission is denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function create(name: string, type: RunningLockType, callback: AsyncCallback<RunningLock>): void;

  /**
   * Creates a {@link RunningLock} object. This API uses a promise to return the result.
   * After creating the lock object, the hold() method must be called to lock and hold the lock in order for the lock
   * functionality to take effect. It is not recommended to concurrently call create to create lock objects
   * cross multiple Workers/TaskPools.
   *
   * @permission ohos.permission.RUNNING_LOCK
   * @param { string } name - Name of the **RunningLock** object. The value must be a string.
   * @param { RunningLockType } type - Type of the **RunningLock** object. The value must be an enum.
   * @returns { Promise<RunningLock> } Promise used to return the {@link RunningLock} object.
   * @throws { BusinessError } 201 - If the permission is denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function create(name: string, type: RunningLockType): Promise<RunningLock>;
}

export default runningLock;