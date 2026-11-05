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
 * @file 扫描
 * @kit BasicServicesKit
 */

import type { Callback } from './@ohos.base';

/**
 * 该模块提供扫描框架的JS API，支持扫描仪的发现与管理、扫描执行、设备事件监听等能力，适用于应用需要集成扫描仪进行文档数字化采集与设备管理的场景。
 *
 * > **说明：**
 * >
 * > 当前界面仅包含本模块的公开接口。
 *
 * @syscap SystemCapability.Print.PrintFramework
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace scan {
    /**
     * 定义扫描错误码的枚举。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum ScanErrorCode {
        /**
         * 无权限，请根据对应接口的权限要求申请所需权限，并在配置文件中声明。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_NO_PERMISSION = 201,

        /**
         * 非系统应用，请检查应用类型是否为系统应用。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_NOT_SYSTEM_APPLICATION = 202,

        /**
         * 无效参数，请检查参数类型和取值范围。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_INVALID_PARAMETER = 401,

        /**
         * 通用失败，请检查扫描服务运行状态并重试。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_GENERIC_FAILURE = 13100001,

        /**
         * RPC失败，请检查RPC通信状态并重试。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_RPC_FAILURE = 13100002,

        /**
         * 服务失败，请检查扫描服务是否正常运行并重试。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_SERVER_FAILURE = 13100003,

        /**
         * 不支持的操作，请检查当前操作是否被扫描仪支持。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_UNSUPPORTED = 13100004,

        /**
         * 操作取消，请检查是否调用了cancelScan或操作被系统中断。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_CANCELED = 13100005,

        /**
         * 设备忙，请等待设备空闲后重试。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_DEVICE_BUSY = 13100006,

        /**
         * 无效操作，请检查当前操作在扫描仪状态下是否有效。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_INVALID = 13100007,

        /**
         * 卡纸，请清除扫描仪中的卡纸后重试。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_JAMMED = 13100008,

        /**
         * 缺纸，请在扫描仪中放入文档后重试。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_NO_DOCS = 13100009,

        /**
         * 盖子打开，请关闭扫描仪盖子后重试。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_COVER_OPEN = 13100010,

        /**
         * I/O错误，请检查设备I/O连接状态并重试。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_IO_ERROR = 13100011,

        /**
         * 内存不足，请释放系统内存后重试。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_NO_MEMORY = 13100012,
    }

    /**
     * 定义参数约束类型的枚举。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum ConstraintType {
        /**
         * 无限制。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_CONSTRAINT_NONE = 0,

        /**
         * 范围限制。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_CONSTRAINT_RANGE = 1,

        /**
         * 数字列表。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_CONSTRAINT_WORD_LIST = 2,

        /**
         * 字符串列表。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_CONSTRAINT_STRING_LIST = 3,
    }

    /**
     * 定义物理单位的枚举。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum PhysicalUnit {
        /**
         * 无单位。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_NONE = 0,

        /**
         * 像素单位。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_PIXEL = 1,

        /**
         * 位单位。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_BIT = 2,

        /**
         * 毫米单位。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_MM = 3,

        /**
         * DPI单位。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_DPI = 4,

        /**
         * 百分比单位。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_PERCENT = 5,

        /**
         * 微秒单位。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_MICROSECOND = 6,
    }

    /**
     * 定义选项值类型的枚举。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum OptionValueType {
        /**
         * 布尔类型。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_TYPE_BOOL = 0,

        /**
         * 整数类型。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_TYPE_INT = 1,

        /**
         * 定点数类型。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_TYPE_FIXED = 2,

        /**
         * 字符串类型。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_TYPE_STRING = 3,
    }

    /**
     * 定义扫描仪同步模式的枚举。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum ScannerSyncMode {
        /**
         * 更新模式，表示扫描仪ID的变化。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        UPDATE_STR = 'update',

        /**
         * 删除模式，表示扫描仪掉线。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        DELETE_STR = 'delete',
    }

    /**
     * 定义扫描仪发现模式的枚举。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum ScannerDiscoveryMode {
        /**
         * 网络扫描仪的发现模式。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        TCP_STR = 'TCP',

        /**
         * USB扫描仪的发现模式。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        USB_STR = 'USB',
    }

    /**
     * 定义范围的接口。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface Range {
        /**
         * 范围的最小值。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        minValue: int;

        /**
         * 范围的最大值。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        maxValue: int;

        /**
         * 范围的量化值，表示范围内有效值之间的步长。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        quantValue: int;
    }

    /**
     * 定义扫描仪参数的接口。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface ScannerParameter {
        /**
         * 选项名称。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionName: string;

        /**
         * 要获取的选项的索引，可通过getScannerParameter()获取。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionIndex: int;

        /**
         * 选项标题。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionTitle: string;

        /**
         * 选项描述。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionDesc: string;

        /**
         * 选项值类型。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionType: OptionValueType;

        /**
         * 选项物理单位。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionUnit: PhysicalUnit;

        /**
         * 选项约束类型，决定有效的约束字段。当类型为SCAN_CONSTRAINT_NONE时无约束。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionConstraintType: ConstraintType;

        /**
         * 选项字符串约束，仅在optionConstraintType为SCAN_CONSTRAINT_STRING_LIST时有效。默认为空数组。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionConstraintString?: string[];

        /**
         * 选项整数约束，仅在optionConstraintType为SCAN_CONSTRAINT_WORD_LIST时有效。默认为空数组。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionConstraintInt?: int[];

        /**
         * 选项范围约束，仅在optionConstraintType为SCAN_CONSTRAINT_RANGE时有效。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionConstraintRange?: Range;
    }

    /**
     * 定义扫描仪选项值的接口。当对应选项的约束类型为SCAN_CONSTRAINT_STRING_LIST时，选项取值应为optionConstraintString集合中的字符串。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface ScannerOptionValue {
        /**
         * 值类型，决定应使用的值字段。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        valueType: OptionValueType;

        /**
         * 数值，仅在valueType为SCAN_TYPE_INT或SCAN_TYPE_FIXED时有效。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        numValue?: int;

        /**
         * 字符串值，仅在valueType为SCAN_TYPE_STRING时有效。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        strValue?: string;

        /**
         * 布尔值，仅在valueType为SCAN_TYPE_BOOL时有效。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        boolValue?: boolean;
    }

    /**
     * 定义图片扫描进度的接口。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface PictureScanProgress {
        /**
         * 当前进度百分比，取值范围为0~100。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        progress: int;

        /**
         * 扫描图片的文件描述符。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        pictureFd: int;

        /**
         * 是否是本次扫描的最后一张图片。true表示是最后一张图片，false表示不是最后一张图片。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        isFinal: boolean;
    }

    /**
     * 定义扫描仪设备的接口。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface ScannerDevice {
        /**
         * 扫描仪的ID，可以在startScannerDiscovery后通过scanDeviceFound回调获取。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        scannerId: string;

        /**
         * 扫描仪的发现模式，表示发现扫描仪的方式。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        discoveryMode: ScannerDiscoveryMode;

        /**
         * 扫描仪的唯一ID。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        uniqueId: string;

        /**
         * 扫描仪的制造商。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        manufacturer: string;

        /**
         * 扫描仪的型号。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        model: string;

        /**
         * 扫描仪的设备名称。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        deviceName: string;
    }

    /**
     * 定义扫描仪同步设备的接口。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface ScannerSyncDevice {
        /**
         * 扫描仪的ID，可以在startScannerDiscovery后通过scanDeviceFound回调获取。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        scannerId: string;
            /**
         * 扫描仪的发现模式，表示发现扫描仪的方式。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        discoveryMode: ScannerDiscoveryMode;

        /**
         * 扫描仪的唯一ID。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        uniqueId: string;

        /**
         * 同步模式，决定oldScannerId是否有效：当syncMode为"update"时oldScannerId有效，为"delete"时oldScannerId无效。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        syncMode: ScannerSyncMode;

        /**
         * 旧的扫描仪ID，仅在syncMode为"update"时有效，默认值为空字符串。
         *
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        oldScannerId?: string;
    }

    /**
     * 初始化扫描服务，必须在调用其它扫描接口前完成初始化。使用Promise异步回调。使用完毕后需调用exit()退出扫描服务，释放资源。
     *
     * @permission ohos.permission.PRINT
     * @returns { Promise<void> } Promise对象，初始化扫描服务成功时resolve，失败时reject。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function init(): Promise<void>;

    /**
     * 退出扫描服务。使用Promise异步回调。扫描服务退出后，其它扫描方法将不可用，如需再次使用需重新调用init()。
     *
     * @permission ohos.permission.PRINT
     * @returns { Promise<void> } Promise对象，退出扫描服务成功时resolve，失败时reject。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function exit(): Promise<void>;

    /**
     * 开始发现扫描仪，发现的扫描仪设备信息通过on('scanDeviceFound')事件回调通知。需在调用init()完成初始化后使用。使用Promise异步回调。
     *
     * @permission ohos.permission.PRINT
     * @returns { Promise<void> } Promise对象，开始发现扫描仪成功时resolve，失败时reject。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function startScannerDiscovery(): Promise<void>;

    /**
     * 打开扫描仪。需在调用init()完成初始化后使用。使用Promise异步回调。在使用完毕后，需调用closeScanner()关闭扫描仪，释放资源。
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - 要打开的扫描仪的ID，可以在startScannerDiscovery后通过scanDeviceFound回调获取。
     * @returns { Promise<void> } Promise对象，打开扫描仪成功时resolve，失败时reject。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function openScanner(scannerId: string): Promise<void>;

    /**
     * 关闭扫描仪。使用Promise异步回调。扫描仪关闭后，将不能再对该扫描仪执行参数获取、设置、扫描等操作。如需再次使用需重新调用openScanner()。
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - 要关闭的扫描仪的ID，可以在startScannerDiscovery后通过scanDeviceFound回调获取。
     * @returns { Promise<void> } Promise对象，关闭扫描仪成功时resolve，失败时reject。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function closeScanner(scannerId: string): Promise<void>;

    /**
     * 获取扫描仪参数。使用Promise异步回调。必须在调用openScanner()打开扫描仪之后才能调用此方法。应用可通过此方法获取参数索引（optionIndex），用于setScannerParameter、setScanAutoOption和getScannerCurrentSetting等方法的调用。
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - 扫描仪的ID，可以在startScannerDiscovery后通过scanDeviceFound回调获取。
     * @returns { Promise<ScannerParameter[]> } Promise对象，获取扫描仪参数成功时resolve并返回扫描仪参数数组，失败时reject。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function getScannerParameter(scannerId: string): Promise<ScannerParameter[]>;

    /**
     * 设置扫描仪参数。使用Promise异步回调。必须在调用openScanner()打开扫描仪之后才能调用此方法。
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - 要设置参数的扫描仪的ID，可以在startScannerDiscovery后通过scanDeviceFound回调获取。
     * @param { int } optionIndex - 要设置的选项的索引，可通过getScannerParameter()获取。
     * @param { ScannerOptionValue } value - 要设置的扫描仪选项值，包含值类型（valueType）及对应的数值（numValue）、字符串值（strValue）或布尔值（boolValue）。
     * @returns { Promise<void> } Promise对象，设置扫描仪参数成功时resolve，失败时reject。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function setScannerParameter(scannerId: string, optionIndex: int, value: ScannerOptionValue): Promise<void>;

    /**
     * 设置扫描选项为自动模式，由扫描仪自动确定该选项的取值。使用Promise异步回调。必须在调用openScanner()打开扫描仪之后才能调用此方法。
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - 扫描仪的ID，可以在startScannerDiscovery后通过scanDeviceFound回调获取。
     * @param { int } optionIndex - 要设置为自动的选项的索引，可通过getScannerParameter()获取。
     * @returns { Promise<void> } Promise对象，设置扫描选项为自动模式成功时resolve，失败时reject。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function setScanAutoOption(scannerId: string, optionIndex: int): Promise<void>;

    /**
     * 获取当前扫描仪设置。使用Promise异步回调。必须在调用openScanner()打开扫描仪之后才能调用此方法。
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - 要获取当前设置的扫描仪的ID，可以在startScannerDiscovery后通过scanDeviceFound回调获取。
     * @param { int } optionIndex - 要获取的选项的索引，可通过getScannerParameter()获取。
     * @returns { Promise<ScannerOptionValue> } Promise对象，获取当前扫描仪设置成功时resolve并返回扫描仪选项值，失败时reject。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function getScannerCurrentSetting(scannerId: string, optionIndex: int): Promise<ScannerOptionValue>;

    /**
     * 开始扫描。使用Promise异步回调。必须在调用openScanner()打开扫描仪之后才能调用此方法。
     * 扫描过程中可通过getPictureScanProgress()获取扫描进度；需要取消扫描时，可调用cancelScan()。
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - 扫描仪的ID，可以在startScannerDiscovery后通过scanDeviceFound回调获取。
     * @param { boolean } batchMode - 是否使用批处理模式。true表示使用批处理模式，可连续扫描多页文档；false表示不使用批处理模式，仅扫描单页。
     * @returns { Promise<void> } Promise对象，开始扫描成功时resolve，失败时reject。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function startScan(scannerId: string, batchMode: boolean): Promise<void>;

    /**
     * 取消扫描。使用Promise异步回调。必须在开始扫描之后才能调用此方法。
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - 扫描仪的ID，可以在startScannerDiscovery后通过scanDeviceFound回调获取。
     * @returns { Promise<void> } Promise对象，取消扫描成功时resolve，失败时reject。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function cancelScan(scannerId: string): Promise<void>;

    /**
     * 获取图片扫描进度。使用Promise异步回调。必须在开始扫描之后才能调用此方法。
     *
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - 扫描仪的ID，可以在startScannerDiscovery后通过scanDeviceFound回调获取。
     * @returns { Promise<PictureScanProgress> } Promise对象，获取图片扫描进度成功时resolve并返回图片扫描进度信息，失败时reject。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function getPictureScanProgress(scannerId: string): Promise<PictureScanProgress>;

    /**
     * 添加扫描仪（系统接口）。根据指定的发现模式发现并添加扫描仪设备，添加成功后将触发scanDeviceAdd事件通知，可通过on('scanDeviceAdd')监听设备添加事件。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } uniqueId - 扫描仪的唯一ID，由调用方指定，用于标识待添加的扫描仪设备。
     * @param { ScannerDiscoveryMode } discoveryMode - 扫描仪的发现模式。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    function addScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>;

    /**
     * 删除扫描仪（系统接口）。适用于扫描仪设备离线或不再需要时移除设备的场景，删除成功后将触发scanDeviceDel事件通知，可通过on('scanDeviceDel')监听设备删除事件。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } uniqueId - 扫描仪的唯一ID，可通过getAddedScanners()获取或从scan.on('scanDeviceAdd')事件回调中获得。
     * @param { ScannerDiscoveryMode } discoveryMode - 扫描仪的发现模式，需与添加该扫描仪时使用的发现模式保持一致。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    function deleteScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>;

    /**
     * 获取已添加的扫描仪（系统接口）。适用于需要查询当前可用扫描仪列表以供用户选择设备的场景。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @returns { Promise<ScannerDevice[]> } Promise对象。resolve返回已添加的扫描仪设备数组，reject表示获取扫描仪设备失败。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    function getAddedScanners(): Promise<ScannerDevice[]>;

    /**
     * 注册扫描仪设备发现事件回调，当调用startScannerDiscovery发现新的扫描仪设备时会触发此事件。使用callback异步回调。
     *
     * @permission ohos.permission.PRINT
     * @param { 'scanDeviceFound' } type - 事件类型。
     * @param { Callback<ScannerDevice> } callback - 回调函数，返回扫描仪设备发现信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     */
    function on(type: 'scanDeviceFound', callback: Callback<ScannerDevice>): void;

    /**
     * 注册扫描仪设备发现事件回调。使用callback异步回调。
     *
     * @permission ohos.permission.PRINT
     * @param { Callback<ScannerDevice> } callback - 回调函数，返回扫描仪设备发现信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    function onScanDeviceFound(callback: Callback<ScannerDevice>): void;

    /**
     * 取消注册扫描仪设备发现事件回调。
     *
     * @permission ohos.permission.PRINT
     * @param { 'scanDeviceFound' } type - 事件类型。
     * @param { Callback<ScannerDevice> } [callback] - 需要取消注册的回调函数。若不传入，则取消调用方所有已注册的回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     */
    function off(type: 'scanDeviceFound', callback?: Callback<ScannerDevice>): void;

    /**
     * 取消注册扫描仪设备发现事件回调。使用callback异步回调。
     *
     * @permission ohos.permission.PRINT
     * @param { Callback<ScannerDevice> } [callback] - 回调函数，返回扫描仪设备发现信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    function offScanDeviceFound(callback?: Callback<ScannerDevice>): void;

    /**
     * 注册扫描仪设备同步事件回调，当扫描仪设备状态发生变化（如扫描仪设备ID变更或掉线）时会触发此事件，通知应用同步维护扫描仪列表。使用callback异步回调。
     * 适用于应用需要持续跟踪扫描仪设备状态变化的场景，如扫描仪重新连接时更新本地设备信息。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceSync' } type - 事件类型。
     * @param { Callback<ScannerSyncDevice> } callback - 回调函数，返回扫描仪设备同步信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     */
    function on(type: 'scanDeviceSync', callback: Callback<ScannerSyncDevice>): void;

    /**
     * 注册扫描仪设备同步事件回调。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerSyncDevice> } callback - 回调函数，返回扫描仪设备同步信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    function onScanDeviceSync(callback: Callback<ScannerSyncDevice>): void;

    /**
     * 取消注册扫描仪设备同步事件回调。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceSync' } type - 事件类型。
     * @param { Callback<ScannerSyncDevice> } [callback] - 需要取消注册的回调函数。若不传入，则取消调用方所有已注册的回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     */
    function off(type: 'scanDeviceSync', callback?: Callback<ScannerSyncDevice>): void;

    /**
     * 取消注册扫描仪设备同步事件回调。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerSyncDevice> } [callback] - 回调函数，返回扫描仪设备同步信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    function offScanDeviceSync(callback?: Callback<ScannerSyncDevice>): void;

    /**
     * 注册扫描仪设备添加事件回调（系统接口）。当扫描仪设备被成功添加时触发此回调，返回添加的设备信息。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceAdd' } type - 事件类型。
     * @param { Callback<ScannerDevice> } callback - 扫描仪设备添加事件的回调函数，当有扫描仪设备添加时触发，返回添加的扫描仪设备信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    function on(type: 'scanDeviceAdd', callback: Callback<ScannerDevice>): void;

    /**
     * 注册扫描仪设备添加事件回调（系统接口）。当扫描仪设备被成功添加时触发此回调，返回添加的设备信息。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerDevice> } callback - 扫描仪设备添加事件的回调函数，当有扫描仪设备添加时触发，返回添加的扫描仪设备信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    function onScanDeviceAdd(callback: Callback<ScannerDevice>): void;

    /**
     * 取消注册扫描仪设备添加事件回调（系统接口）。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceAdd' } type - 事件类型。
     * @param { Callback<ScannerDevice> } [callback] - 需要取消注册的回调函数。若不传入，则取消调用方所有已注册的回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    function off(type: 'scanDeviceAdd', callback?: Callback<ScannerDevice>): void;

    /**
     * 取消注册扫描仪设备添加事件回调（系统接口）。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerDevice> } [callback] - 需要取消注册的回调函数。若不传入，则取消调用方所有已注册的回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    function offScanDeviceAdd(callback?: Callback<ScannerDevice>): void;

    /**
     * 注册扫描仪设备删除事件回调（系统接口）。当扫描仪设备被删除时触发此回调，返回删除的设备信息。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceDel' } type - 事件类型。
     * @param { Callback<ScannerDevice> } callback - 扫描仪设备删除事件的回调函数，当有扫描仪设备删除时触发，返回删除的扫描仪设备信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    function on(type: 'scanDeviceDel', callback: Callback<ScannerDevice>): void;

    /**
     * 注册扫描仪设备删除事件回调（系统接口）。当扫描仪设备被删除时触发此回调，返回删除的设备信息。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerDevice> } callback - 扫描仪设备删除事件的回调函数，当有扫描仪设备删除时触发，返回删除的扫描仪设备信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    function onScanDeviceDel(callback: Callback<ScannerDevice>): void;

    /**
     * 取消注册扫描仪设备删除事件回调（系统接口）。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceDel' } type - 事件类型。
     * @param { Callback<ScannerDevice> } [callback] - 需要取消注册的回调函数。若不传入，则取消调用方所有已注册的回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    function off(type: 'scanDeviceDel', callback?: Callback<ScannerDevice>): void;

    /**
     * 取消注册扫描仪设备删除事件回调（系统接口）。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerDevice> } [callback] - 需要取消注册的回调函数。若不传入，则取消调用方所有已注册的回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    function offScanDeviceDel(callback?: Callback<ScannerDevice>): void;
}
export default scan;