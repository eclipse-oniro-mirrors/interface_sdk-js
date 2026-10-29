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
 * @file Scan
 * @kit BasicServicesKit
 */

import type { Callback } from './@ohos.base';

/**
 * This module provides JavaScript APIs of the scan framework, which support scanner discovery and management, scanning
 * execution, and device event listening. It is applicable to scenarios where an app needs to integrate a scanner for
 * digital document collection and device management.
 *
 * > **NOTE**
 * >
 * > This topic describes only public APIs provided by the module.
 *
 * @syscap SystemCapability.Print.PrintFramework
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace scan {
    /**
     * Enumerates the scan error codes.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum ScanErrorCode {
        /**
         * No permission. Request the required permission based on the permission requirements of the corresponding API
         * and declare the permission in the configuration file.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_NO_PERMISSION = 201,

        /**
         * Not a system app. Check whether the app is a system app.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_NOT_SYSTEM_APPLICATION = 202,

        /**
         * Invalid parameter. Check the parameter type and value range.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_INVALID_PARAMETER = 401,

        /**
         * General failure. Check the running status of the scan service and try again.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_GENERIC_FAILURE = 13100001,

        /**
         * RPC failure. Check the RPC communication status and try again.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_RPC_FAILURE = 13100002,

        /**
         * Service failure. Check whether the scan service is running properly and try again.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_SERVER_FAILURE = 13100003,

        /**
         * The operation is not supported. Check whether the current operation is supported by the scanner.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_UNSUPPORTED = 13100004,

        /**
         * Operation canceled. Check whether **cancelScan** is called or the operation is interrupted by the system.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_CANCELED = 13100005,

        /**
         * The device is busy. Wait until the device is idle and try again.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_DEVICE_BUSY = 13100006,

        /**
         * Invalid operation. Check whether the current operation is valid in the scanner state.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_INVALID = 13100007,

        /**
         * Paper jammed. Remove the jammed paper from the scanner and try again.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_JAMMED = 13100008,

        /**
         * No paper. Place paper in the scanner and try again.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_NO_DOCS = 13100009,

        /**
         * The scanner cover is open. Close the cover and try again.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_COVER_OPEN = 13100010,

        /**
         * I/O error. Check the device I/O connection and try again.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_IO_ERROR = 13100011,

        /**
         * Insufficient memory. Release system memory and try again.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_NO_MEMORY = 13100012,
    }

    /**
     * Enumerates the parameter constraint types.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum ConstraintType {
        /**
         * No constraint.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_CONSTRAINT_NONE = 0,

        /**
         * Range.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_CONSTRAINT_RANGE = 1,

        /**
         * Number list.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_CONSTRAINT_WORD_LIST = 2,

        /**
         * String list.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_CONSTRAINT_STRING_LIST = 3,
    }

    /**
     * Enumerates the physical units.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum PhysicalUnit {
        /**
         * No unit.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_NONE = 0,

        /**
         * Pixel unit.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_PIXEL = 1,

        /**
         * Bit unit.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_BIT = 2,

        /**
         * Millimeter unit.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_MM = 3,

        /**
         * DPI unit.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_DPI = 4,

        /**
         * Percentage unit.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_PERCENT = 5,

        /**
         * Microsecond unit.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_MICROSECOND = 6,
    }

    /**
     * Enumerates the option value types.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum OptionValueType {
        /**
         * Boolean.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_TYPE_BOOL = 0,

        /**
         * Integer.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_TYPE_INT = 1,

        /**
         * Fixed-point number.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_TYPE_FIXED = 2,

        /**
         * String.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_TYPE_STRING = 3,
    }

    /**
     * Enumerates the scanner sync modes.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum ScannerSyncMode {
        /**
         * Update mode, which indicates that the scanner ID changes.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        UPDATE_STR = 'update',

        /**
         * Deletion mode, which indicates that the scanner is offline.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        DELETE_STR = 'delete',
    }

    /**
     * Enumerates the scanner discovery modes.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum ScannerDiscoveryMode {
        /**
         * Discovery mode of the network scanner.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        TCP_STR = 'TCP',

        /**
         * Discovery mode of the USB scanner.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        USB_STR = 'USB',
    }

    /**
     * Defines the range.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface Range {
        /**
         * Minimum value.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        minValue: int;

        /**
         * Maximum value.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        maxValue: int;

        /**
         * Quantized value of the range, which indicates the step between valid values within the range.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        quantValue: int;
    }

    /**
     * Defines the scanner parameters.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface ScannerParameter {
        /**
         * Option name.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionName: string;

        /**
         * Option index.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionIndex: int;

        /**
         * Option title.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionTitle: string;

        /**
         * Option description.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionDesc: string;

        /**
         * Option value type.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionType: OptionValueType;

        /**
         * Physical unit of the option.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionUnit: PhysicalUnit;

        /**
         * Constraint type of the option, which determines the valid constraint field. If this parameter is set to
         * **SCAN_CONSTRAINT_NONE**, there is no constraint.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionConstraintType: ConstraintType;

        /**
         * String constraint of the option. This parameter is valid only when **optionConstraintType** is set to
         * **SCAN_CONSTRAINT_STRING_LIST**. The default value is an empty array.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionConstraintString?: string[];

        /**
         * String constraint of the option. This parameter is valid only when **optionConstraintType** is set to
         * **SCAN_CONSTRAINT_WORD_LIST**. The default value is an empty array.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionConstraintInt?: int[];

        /**
         * Option range constraint. This parameter is valid only when **optionConstraintType** is set to
         * **SCAN_CONSTRAINT_RANGE**.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionConstraintRange?: Range;
    }

    /**
     * Defines the scanner option value. When the constraint type of the option is **SCAN_CONSTRAINT_STRING_LIST**, the
     * option value must be a string in the **optionConstraintString** set.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface ScannerOptionValue {
        /**
         * Value type, which determines the value field to be used.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        valueType: OptionValueType;

        /**
         * Numeric value. This parameter is valid only when **valueType** is set to **SCAN_TYPE_INT** or
         * **SCAN_TYPE_FIXED**.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        numValue?: int;

        /**
         * String value. This parameter is valid only when **valueType** is set to **SCAN_TYPE_STRING**.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        strValue?: string;

        /**
         * Boolean. This parameter is valid only when **valueType** is set to **SCAN_TYPE_BOOL**.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        boolValue?: boolean;
    }

    /**
     * Defines the progress of scanning pictures.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface PictureScanProgress {
        /**
         * Processing progress, in percentage. The value ranges from 0 to 100.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        progress: int;

        /**
         * File descriptor of the scanned picture.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        pictureFd: int;

        /**
         * Whether the picture is the last one to be scanned. The value **true** indicates that the picture is the last
         * one to be scanned, and **false** indicates that the picture is not the last one.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        isFinal: boolean;
    }

    /**
     * Defines the scanner.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface ScannerDevice {
        /**
         * Scanner ID, which can be obtained using the scanDeviceFound callback after startScannerDiscovery is called.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        scannerId: string;

        /**
         * Discovery mode of the scanner.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        discoveryMode: ScannerDiscoveryMode;

        /**
         * Unique ID of the scanner.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        uniqueId: string;

        /**
         * Manufacturer of the scanner.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        manufacturer: string;

        /**
         * Model of the scanner.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        model: string;

        /**
         * Name of the scanner.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        deviceName: string;
    }

    /**
     * Defines the device to be synced from the scanner.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface ScannerSyncDevice {
        /**
         * Scanner ID, which can be obtained using the scanDeviceFound callback after startScannerDiscovery is called.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        scannerId: string;
            /**
         * Discovery mode of the scanner, indicating how the scanner is discovered.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        discoveryMode: ScannerDiscoveryMode;

        /**
         * Unique ID of the scanner.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        uniqueId: string;

        /**
         * Synchronization mode, which determines whether **oldScannerId** is valid. When **syncMode** is set to
         * **'update'**, **oldScannerId** is valid. When **syncMode** is set to **'delete'**, **oldScannerId** is invalid.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        syncMode: ScannerSyncMode;

        /**
         * Old scanner ID, which is valid only when **syncMode** is set to **update**.
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        oldScannerId?: string;
    }

    /**
     * Initializes the scan service. This API must be called before other scanning APIs. This API uses a promise to
     * return the result. After using the service, call **exit()** to exit the scan service and release resources.
     *
     * @permission ohos.permission.PRINT
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function init(): Promise<void>;

    /**
     * Exits the scan service. This API uses a promise to return the result. After the scan service exits, other scan
     * methods are unavailable. To use them again, call **init()** again.
     *
     * @permission ohos.permission.PRINT
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function exit(): Promise<void>;

    /**
     * Starts scanner discovery. The discovered scanner information is returned through the **on('scanDeviceFound')**
     * event callback. This API can be used only after initialization is complete by calling **init()**. This API uses a
     * promise to return the result.
     *
     * @permission ohos.permission.PRINT
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function startScannerDiscovery(): Promise<void>;

    /**
     * Opens a scanner. This API can be used only after initialization is complete by calling **init()**. This API uses
     * a promise to return the result. After using the scanner, call **closeScanner()** to close the scanner and release
     * resources.
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - ID of the scanner to be opened.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function openScanner(scannerId: string): Promise<void>;

    /**
     * Closes a scanner. This API uses a promise to return the result. After a scanner is closed, you cannot obtain or
     * set parameters for the scanner or perform scanning operations on the scanner. To use the scanner again, call
     * **openScanner()**.
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - ID of the scanner to be closed.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function closeScanner(scannerId: string): Promise<void>;

    /**
     * Obtains scanner parameters. This API uses a promise to return the result. This method can be called only after
     * the scanner is opened by calling **openScanner()**. Your app can use this method to obtain the parameter index (
     * **optionIndex**), which is used to call methods such as **setScannerParameter**, **setScanAutoOption**, and
     * **getScannerCurrentSetting**.
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - Scanner ID.
     * @returns { Promise<ScannerParameter[]> } Promise used to return the scanner parameters.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function getScannerParameter(scannerId: string): Promise<ScannerParameter[]>;

    /**
     * Sets scanner parameters. This API uses a promise to return the result. This method can be called only after the
     * scanner is opened by calling **openScanner()**.
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - Scanner ID.
     * @param { int } optionIndex - Index of the option to be set.
     * @param { ScannerOptionValue } value - Value to be set.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function setScannerParameter(scannerId: string, optionIndex: int, value: ScannerOptionValue): Promise<void>;

    /**
     * Sets the scan option to auto mode, in which the scanner automatically determines the value of this option. This
     * API uses a promise to return the result. This method can be called only after the scanner is opened by calling
     * **openScanner()**.
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - Scanner ID.
     * @param { int } optionIndex - Index of the option to be set to auto mode.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function setScanAutoOption(scannerId: string, optionIndex: int): Promise<void>;

    /**
     * Obtains the current scanner settings. This API uses a promise to return the result. This method can be called
     * only after the scanner is opened by calling **openScanner()**.
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - Scanner ID.
     * @param { int } optionIndex - Index of the option to be obtained.
     * @returns { Promise<ScannerOptionValue> } Promise used to return the scanner option value.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function getScannerCurrentSetting(scannerId: string, optionIndex: int): Promise<ScannerOptionValue>;

    /**
     * Starts scanning. This API uses a promise to return the result. This method can be called only after the scanner
     * is opened by calling **openScanner()**. During the scanning, you can call **getPictureScanProgress()** to obtain
     * the scanning progress. To cancel the scanning, call **cancelScan()**.
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - Scanner ID.
     * @param { boolean } batchMode - Whether to use the batch processing mode. The value **true** indicates that the
     *     batch processing mode is used, and **false** indicates the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function startScan(scannerId: string, batchMode: boolean): Promise<void>;

    /**
     * Cancels scanning. This API uses a promise to return the result. This method can be called only after scanning
     * starts.
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - Scanner ID.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function cancelScan(scannerId: string): Promise<void>;

    /**
     * Obtains the progress of scanning a picture. This API uses a promise to return the result. This method can be
     * called only after scanning starts.
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - Scanner ID.
     * @returns { Promise<PictureScanProgress> } Promise used to return the progress.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function getPictureScanProgress(scannerId: string): Promise<PictureScanProgress>;

    /**
     * Adds a scanner. This is a system API. This method can be used to discover and add a scanner based on the
     * specified discovery mode. After the scanner is added, the **scanDeviceAdd event** is triggered. You can use
     * **on('scanDeviceAdd')** to listen for the device addition event. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } uniqueId - Unique ID of a scanner, which is specified by the caller and is used to identify the
     *     scanner to be added.
     * @param { ScannerDiscoveryMode } discoveryMode - Discovery mode of the scanner.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    function addScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>;

    /**
     * Deletes a scanner. This is a system API. This method can be used to remove a scanner when it is offline or no
     * longer needed. After the scanner is deleted, the **scanDeviceDel** event is triggered. You can use
     * **on('scanDeviceDel')** to listen for the device deletion event. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } uniqueId - Unique ID of a scanner, which can be obtained by calling **getAddedScanners()** or
     *     from the **scan.on('scanDeviceAdd')** event callback.
     * @param { ScannerDiscoveryMode } discoveryMode - Discovery mode of the scanner, which must be the same as that
     *     used when the scanner is added.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    function deleteScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>;

    /**
     * Obtains the added scanners. This is a system API. This API can be used to query the list of available scanners
     * for users to select one. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @returns { Promise<ScannerDevice[]> } Promise used to return the result. **resolve** returns the array of added
     *     scanners; **reject** indicates that the scanners fail to be obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    function getAddedScanners(): Promise<ScannerDevice[]>;

    /**
     * Registers a callback to listen for the scanner discovery event. This callback is triggered when a new scanner is
     * discovered by calling **startScannerDiscovery**. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.PRINT
     * @param { 'scanDeviceFound' } type - Event type.
     * @param { Callback<ScannerDevice> } callback - Callback used to return the discovered scanner.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     */
    function on(type: 'scanDeviceFound', callback: Callback<ScannerDevice>): void;

    /**
     * Register event callback for scanner device found.
     *
     * @permission ohos.permission.PRINT
     * @param { Callback<ScannerDevice> } callback - Callback for device found event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    function onScanDeviceFound(callback: Callback<ScannerDevice>): void;

    /**
     * Unregisters a callback used to listen for the scanner discovery event.
     *
     * @permission ohos.permission.PRINT
     * @param { 'scanDeviceFound' } type - Event type.
     * @param { Callback<ScannerDevice> } [callback] - Callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     */
    function off(type: 'scanDeviceFound', callback?: Callback<ScannerDevice>): void;

    /**
     * Unregister event callback for scanner device found.
     *
     * @permission ohos.permission.PRINT
     * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    function offScanDeviceFound(callback?: Callback<ScannerDevice>): void;

    /**
     * Registers a callback to listen for the scanner sync event. This callback is triggered when the scanner status
     * changes (for example, the scanner ID changes or the scanner goes offline), notifying the app to update the
     * scanner list. This API uses an asynchronous callback to return the result. This API is applicable to scenarios
     * where your app needs to continuously track scanner status changes, for example, updating local device information
     * when a scanner is reconnected.
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceSync' } type - Event type.
     * @param { Callback<ScannerSyncDevice> } callback - Callback used to return the synced scanner.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     */
    function on(type: 'scanDeviceSync', callback: Callback<ScannerSyncDevice>): void;

    /**
     * Register event callback for scanner device sync.
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerSyncDevice> } callback - Callback for device sync event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    function onScanDeviceSync(callback: Callback<ScannerSyncDevice>): void;

    /**
     * Unregisters a callback used to listen for the scanner sync event.
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceSync' } type - Event type.
     * @param { Callback<ScannerSyncDevice> } [callback] - Callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     */
    function off(type: 'scanDeviceSync', callback?: Callback<ScannerSyncDevice>): void;

    /**
     * Unregister event callback for scanner device sync.
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerSyncDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    function offScanDeviceSync(callback?: Callback<ScannerSyncDevice>): void;

    /**
     * Registers a callback used to listen for the scanner addition event. This is a system API. This callback is
     * triggered when a scanner is successfully added and returns the information of the added scanner. This API uses an
     * asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceAdd' } type - Event type.
     * @param { Callback<ScannerDevice> } callback - Callback for the scanner device addition event. This callback is
     *     triggered when a scanner is added and returns the information of the added scanner.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    function on(type: 'scanDeviceAdd', callback: Callback<ScannerDevice>): void;

    /**
     * Register event callback for scanner device add (system API).
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerDevice> } callback - Callback for device add event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    function onScanDeviceAdd(callback: Callback<ScannerDevice>): void;

    /**
     * Unregisters the callback used to listen for the scanner addition event. This is a system API.
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceAdd' } type - Event type.
     * @param { Callback<ScannerDevice> } [callback] - Callback to unregister. If this parameter is not passed, all
     *     registered callbacks of the caller will be unregistered.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    function off(type: 'scanDeviceAdd', callback?: Callback<ScannerDevice>): void;

    /**
     * Unregister event callback for scanner device add (system API).
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    function offScanDeviceAdd(callback?: Callback<ScannerDevice>): void;

    /**
     * Registers a callback used to listen for the scanner deletion event. This is a system API. This callback is
     * triggered when a scanner is deleted and returns the information of the deleted scanner. This API uses an
     * asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceDel' } type - Event type.
     * @param { Callback<ScannerDevice> } callback - Callback for the scanner device deletion event. This callback is
     *     triggered when a scanner is deleted and returns the information of the deleted scanner.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    function on(type: 'scanDeviceDel', callback: Callback<ScannerDevice>): void;

    /**
     * Register event callback for scanner device delete (system API).
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerDevice> } callback - Callback for device delete event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    function onScanDeviceDel(callback: Callback<ScannerDevice>): void;

    /**
     * Unregisters the callback used to listen for the scanner deletion event. This is a system API.
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceDel' } type - Event type.
     * @param { Callback<ScannerDevice> } [callback] - Callback to unregister. If this parameter is not passed, all
     *     registered callbacks of the caller will be unregistered.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    function off(type: 'scanDeviceDel', callback?: Callback<ScannerDevice>): void;

    /**
     * Unregister event callback for scanner device delete (system API).
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    function offScanDeviceDel(callback?: Callback<ScannerDevice>): void;
}
export default scan;
