/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit MechanicKit
 */

import type { Callback } from './@ohos.base';

/**
 * Provides capabilities for controlling and interacting with mechanical devices connected to this device.
 * The capabilities cover connection management, control, and monitoring.
 *
 * @namespace mechanicManager
 * @syscap SystemCapability.Mechanic.Core
 * @since 20 dynamic&static
 */

declare namespace mechanicManager {

    /**
     * Subscribes to device attachment state change events.
     * @param { 'attachStateChange' } type Event type.
     * @param { Callback<AttachStateChangeInfo> } callback Callback used to return the state change.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */
    function on(type: 'attachStateChange', callback: Callback<AttachStateChangeInfo>): void;

    /**
     * Unsubscribes from device attachment state change events.
     * @param { 'attachStateChange' } type Event type.
     * @param { Callback<AttachStateChangeInfo> } [callback] Callback used to return the state change.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */
    function off(type: 'attachStateChange', callback?: Callback<AttachStateChangeInfo>): void;

    /**
     * Obtain the list of connected mechanical devices.
     * @returns { MechInfo[] } List of connected mechanical devices.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */
    function getAttachedMechDevices(): MechInfo[];

    /**
     * Sets a user operation.
     * @permission ohos.permission.CONNECT_MECHANIC_HARDWARE
     * @param { Operation } operation Operation type.
     * @param { string } mac MAC address.
     * @param { string } params Operation parameters.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    function setUserOperation(operation: Operation, mac: string, params: string): void;

    /**
     * Enables or disables camera tracking.
     * @param { boolean } isEnabled Whether to enable camera tracking.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @throws { BusinessError } 33300003 - Feature not supported.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */

    function setCameraTrackingEnabled(isEnabled: boolean): void;

    /**
     * Checks whether camera tracking is enabled for this mechanical device.
     * @returns { boolean } Enabled status. The value true means that camera tracking is enabled, and false means
     * the opposite.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */

    function getCameraTrackingEnabled(): boolean;

    /**
     * Subscribes to tracking events.
     * @param { 'trackingStateChange' } type Event type.
     * @param { Callback<TrackingEventInfo> } callback Callback used to return the tracking event information.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */
    function on(type: 'trackingStateChange', callback: Callback<TrackingEventInfo>): void;

    /**
     * Unsubscribes from tracking events.
     * @param { 'trackingStateChange' } type Event type.
     * @param { Callback<TrackingEventInfo> } [callback] Callback used to return the tracking event information.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */
    function off(type: 'trackingStateChange', callback?: Callback<TrackingEventInfo>): void;

    /**
     * Sets the camera tracking layout for this mechanical device.
     * @param { CameraTrackingLayout } trackingLayout Camera tracking layout.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @throws { BusinessError } 33300003 - Feature not supported.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */

    function setCameraTrackingLayout(trackingLayout: CameraTrackingLayout): void;

    /**
     * Obtains the camera tracking layout of this mechanical device.
     * @returns { CameraTrackingLayout } Camera tracking layout obtained.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */
    function getCameraTrackingLayout(): CameraTrackingLayout;

    /**
     * Rotates a mechanical device to the relative angles.
     * @param { number } mechId ID of the mechanical device.
     * @param { RotationAngles } angles Relative angles.
     * @param { number } duration Rotation duration. Unit: millisecond.
     * @returns { Promise<Result> } Promise that return the execution result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */

    function rotate(mechId: number, angles: RotationAngles, duration: number): Promise<Result>;

    /**
     * Rotates a mechanical device to the absolute angles.
     * @param { number } mechId ID of the mechanical device.
     * @param { EulerAngles } angles Absolute angles.
     * @param { number } duration Rotation duration. Unit: millisecond.
     * @returns { Promise<Result> } Promise that return the execution result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */

    function rotateToEulerAngles(mechId: number, angles: EulerAngles, duration: number): Promise<Result>;

    /**
     * Obtains the maximum continuous rotation duration of a mechanical device.
     *
     * @param { number } mechId ID of the mechanical device.
     * @returns { number } Maximum rotation duration. Unit: millisecond.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    function getMaxRotationTime(mechId: number): number;

    /**
     * Obtains the maximum rotation speed of a mechanical device.
     *
     * @param { number } mechId ID of the mechanical device.
     * @returns { RotationSpeed } Maximum speed. Only the absolute value of the speed is returned.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    function getMaxRotationSpeed(mechId: number): RotationSpeed;

    /**
     * Rotates a mechanical device at the specified speed.
     * @param { number } mechId ID of the mechanical device.
     * @param { RotationSpeed } speed Rotation speed.
     * @param { number } duration Rotation duration. Unit: millisecond.
     * @returns { Promise<Result> } Promise that return the execution result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    function rotateBySpeed(mechId: number, speed: RotationSpeed, duration: number): Promise<Result>;

    /**
     * Stops a mechanical device from moving.
     * @param { number } mechId ID of the mechanical device.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    function stopMoving(mechId: number): Promise<void>;

    /**
     * Obtains the current angles of a mechanical device.
     * @param { number } mechId ID of the mechanical device.
     * @returns { EulerAngles } Rotation angles.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */

    function getCurrentAngles(mechId: number): EulerAngles;

    /**
     * Obtains the maximum rotation angles relative to the reference point for the specified mechanical device.
     *
     * @param { number } mechId ID of the mechanical device.
     * @returns { RotationLimits } Maximum rotation angles.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */

    function getRotationLimits(mechId: number): RotationLimits;

    /**
     * Obtains the status of the rotation axes.
     * @param { number } mechId ID of the mechanical device.
     * @returns { RotationAxesStatus } Rotation axis status.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    function getRotationAxesStatus(mechId: number): RotationAxesStatus;


    /**
     * Register a listener for axis state changes.
     * The status of the rotation axis changes dynamically, which needs to be monitored.
     *
     * @param { 'rotationAxesStatusChange' } type - Event type.
     * @param { Callback<RotationAxesStateChangeInfo> } callback - Rotate axis state changes callback.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    function on(type: 'rotationAxesStatusChange', callback: Callback<RotationAxesStateChangeInfo>): void;

    /**
     * Unregister a listener for axis state changes.
     *
     * @param { 'rotationAxesStatusChange' } type - Event type.
     * @param { Callback<RotationAxesStateChangeInfo> } [callback] - Rotate axis state changes callback.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    function off(type: 'rotationAxesStatusChange', callback?: Callback<RotationAxesStateChangeInfo>): void;

    /**
     * Searching for a specified target.
     *
     * @param { TargetInfo } target - Target infomation.
     * @param { SearchParams } params - Parameters to use when searching.
     * @returns { Promise<SearchResult> } Promise that return the Search result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @throws { BusinessError } 33300003 - Feature not supported.
     * @throws { BusinessError } 33300004 - Camera not opened.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic&static
     */
    function searchTarget(target: TargetInfo, params: SearchParams): Promise<SearchResult>;

    /**
     * Mechanical device information.
     * @typedef MechInfo
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */
    export interface MechInfo {
        /**
         * ID of the mechanical device.
         * @type { number }
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        mechId: number;


        /**
         * Type of the mechanical device.
         * @type { MechDeviceType }
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        mechDeviceType: MechDeviceType;

        /**
         * Name of the mechanical device.
         * @type { string }
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        mechName: string;
    }


    /**
     * The rotion angles, relative to the current position.
     * @typedef RotationAngles
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    export interface RotationAngles {
        /**
         * Yaw angle, ranging from -2*Math.PI to 2*Math.PI, measured in radians.
         * @type { ?number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */

        yaw?: number;

        /**
         * Roll angle, ranging from -2*Math.PI to 2*Math.PI, measured in radians.
         * @type { ?number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */

        roll?: number;

        /**
         * Pitch angle, ranging from -2*Math.PI to 2*Math.PI, measured in radians.
         * @type { ?number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */

        pitch?: number;
    }

    /**
     * Absolute euler angles relative to the home position.
     *
     * @typedef EulerAngles
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    export interface EulerAngles {
        /**
         * Yaw angle, ranging from -Math.PI to Math.PI, measured in radians.
         * @type { ?number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */

        yaw?: number;

        /**
         * Roll angle, ranging from -Math.PI to Math.PI, measured in radians.
         * @type { ?number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */

        roll?: number;

        /**
         * Pitch angle, ranging from -Math.PI to Math.PI, measured in radians.
         * @type { ?number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */

        pitch?: number;
    }

    /**
     * Rotational speed. A negative value indicates a clockwise rotation, and a positive value indicates a
     * counterclockwise rotation.
     * @typedef RotationSpeed
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */

    export interface RotationSpeed {
        /**
         * Yaw speed, measured in radians per second.
         * @type { ?number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */

        yawSpeed?: number;

        /**
         * Roll speed, measured in radians per second.
         * @type { ?number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */

        rollSpeed?: number;

        /**
         * Pitch speed, measured in radians per second.
         * @type { ?number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */

        pitchSpeed?: number;
    }


    /**
     * Rotation angle limits relative to the reference point.
     * @typedef RotationLimits
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */

    export interface RotationLimits {
        /**
         * Maximum yaw rotation angles in the negative direction, ranging from -2*Math.PI to 0, measured in radians.
         * If the value is less than or equal to -2*Math.PI, there is no restriction.
         * @type { number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        negativeYawMax: number;

        /**
         * Maximum yaw rotation angles in the positive direction, ranging from 0 to 2*Math.PI, measured in radians.
         * If the value is greater than or equal to 2*Math.PI, there is no restriction.
         * @type { number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        positiveYawMax: number;

        /**
         * Maximum roll rotation angles in the negative direction, ranging from -2*Math.PI to 0, measured in radians.
         * If the value is less than or equal to -2*Math.PI, there is no restriction.
         * @type { number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        negativeRollMax: number;

        /**
         * Maximum roll rotation angles in the positive direction, ranging from 0 to 2*Math.PI, measured in radians.
         * If the value is greater than or equal to 2*Math.PI, there is no restriction.
         * @type { number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        positiveRollMax: number;

        /**
         * Maximum pitch rotation angles in the negative direction, ranging from -2*Math.PI to 0, measured in radians.
         * If the value is less than or equal to -2*Math.PI, there is no restriction.
         * @type { number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        negativePitchMax: number;

        /**
         * Maximum pitch rotation angles in the positive direction, ranging from 0 to 2*Math.PI, measured in radians.
         * If the value is greater than or equal to 2*Math.PI, there is no restriction.
         * @type { number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        positivePitchMax: number;
    }

    /**
     * Rotation axes status
     *
     * @typedef RotationAxesStatus
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    export interface RotationAxesStatus {
        /**
         * Whether the yaw axis is enabled.
         * @type { boolean }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        yawEnabled: boolean;

        /**
         * Whether the roll axis is enabled.
         * @type { boolean }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        rollEnabled: boolean;

        /**
         * Whether the pitch axis is enabled.
         * @type { boolean }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        pitchEnabled: boolean;

        /**
         * Whether the yaw axis is limited.
         * @type { ?RotationAxisLimited } RotationAxisLimited
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        yawLimited?: RotationAxisLimited;

        /**
         * Whether the roll axis is limited.
         * @type { ?RotationAxisLimited }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        rollLimited?: RotationAxisLimited;

        /**
         * Whether the pitch axis is limited.
         * @type { ?RotationAxisLimited }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        pitchLimited?: RotationAxisLimited;
    }

    /**
     * Enumerates the rotation axis limit states.
     * @enum { number }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    export enum RotationAxisLimited {
        /**
         * Not limited.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        NOT_LIMITED = 0,

        /**
         * Negative limited.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        NEGATIVE_LIMITED = 1,

        /**
         * Positive limited.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        POSITIVE_LIMITED = 2,
    }

    /**
     * Rotation axes state change information.
     * @typedef RotationAxesStateChangeInfo
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    export interface RotationAxesStateChangeInfo {
        /**
         * ID of the mechanical device.
         * @type { number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        mechId: number;

        /**
         * Rotate axis status.
         * @type { RotationAxesStatus }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        status: RotationAxesStatus,
    }

    /**
     * Tracking event callback info.
     *
     * @typedef TrackingEventInfo
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */
    export interface TrackingEventInfo {
        /**
         * Tracking event.
         * @type { TrackingEvent } Tracking event.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        event: TrackingEvent;
    }

    /**
     * Callback information about the device attachment state change.
     * @typedef AttachStateChangeInfo
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */
    export interface AttachStateChangeInfo {

        /**
         * Device attachment state.
         * @type { AttachState }
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        state: AttachState;

        /**
         * Mechanical device information.
         * @type { MechInfo }
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        mechInfo: MechInfo,
    }

    /**
     * Target information.
     *
     * @typedef TargetInfo
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic&static
     */
    export interface TargetInfo {
        /**
         * Target type.
         * @type { TargetType }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic&static
         */
        targetType: TargetType;
    }

    /**
     * Parameters for target searching.
     *
     * @typedef SearchParams
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic&static
     */
    export interface SearchParams {

        /**
         * Search direction.
         * @type { SearchDirection }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic&static
         */
        direction: SearchDirection;
    }

    /**
     * Search result.
     *
     * @typedef SearchResult
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic&static
     */
    export interface SearchResult {
        /**
         * Search result. Returns the number of targets found.0 means not found.
         * @type { number }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic&static
         */
        targetCount: number;
    }

    /**
     * Enumerates the user operations.
     * @enum { number }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    export enum Operation {
        /**
         * Connection operation.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        CONNECT = 0,

        /**
         * Disconnection operation.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        DISCONNECT = 1
    }

    /**
     * Enumerates the tracking events.
     * @enum { number }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */

    export enum TrackingEvent {
        /**
         * Camera tracking enabled by user.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        CAMERA_TRACKING_USER_ENABLED = 0,

        /**
         * Camera tracking disabled by user.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        CAMERA_TRACKING_USER_DISABLED = 1,

        /**
         * Camera tracking layout changed. You can call getCameraTrackingLayout to obtain the new layout.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        CAMERA_TRACKING_LAYOUT_CHANGED = 2,
    }

    /**
     * Rotation execution results.
     *
     * @enum { number }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic&static
     */
    export enum Result {
        /**
         * Rotation completed.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        COMPLETED = 0,

        /**
         * Rotation was interrupted.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        INTERRUPTED = 1,

        /**
         * Device reached limitation.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        LIMITED = 2,

        /**
         * Rotation time out.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        TIMEOUT = 3,

        /**
         * Rotation failed due to system error.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic&static
         */
        SYSTEM_ERROR = 100
    }

    /**
     * Enumerates the mechanical device types.
     * @enum { number }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */

    export enum MechDeviceType {
        /**
         * Gimbal device.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */

        GIMBAL_DEVICE = 0
    }

    /**
     * Device attach states.
     *
     * @enum { number }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */
    export enum AttachState {

        /**
         * Device attached.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        ATTACHED = 0,

        /**
         * Device detached.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        DETACHED = 1
    }

    /**
     * Enumerates the camera tracking layouts.
     * @enum { number }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic&static
     */
    export enum CameraTrackingLayout {
        /**
         * Default layout.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        DEFAULT = 0,

        /**
         * Left-side layout.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        LEFT = 1,

        /**
         * Middle layout.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        MIDDLE = 2,

        /**
         * Right-side layout.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic&static
         */
        RIGHT = 3
    }

    /**
     * Target type.
     *
     * @enum { int }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic&static
     */
    export enum TargetType {
        /**
         * human Face type.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic&static
         */
        HUMAN_FACE = 0
    }

    /**
     * Search direction.
     *
     * @enum { int }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic&static
     */
    export enum SearchDirection {
        /**
         * System Default Direction.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic&static
         */
        DEFAULT = 0,

        /**
         * Leftward direction. Also indicates clockwise direction.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic&static
         */
        LEFTWARD = 1,

        /**
         * Rightward direction. Also indicates the counterclockwise direction.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic&static
         */
        RIGHTWARD = 2,
    }
}

export default mechanicManager;