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
 * @file HiLOG日志打印
 * @kit PerformanceAnalysisKit
 */

/*** if arkts static */
import { RecordData } from '@ohos.base';
/*** endif */

/**
 * hilog模块是OpenHarmony提供的日志打印子系统，允许应用或服务按照指定的日志类型、日志级别和格式字符串输出日志。开发者可利用hilog在应用运行过程中记录关键流程信息，异常情况和错误事件，从而了解应用的运行状态并更好地调试
 *     程序。hilog适用于应用和服务在开发调试记录阶段记录运行日志的场景，也适用于正式发布版本中通过级别控制减少日志输出和保护隐私数据的场景。
 * 
 * hilog模块提供以下核心功能：
 * 
 * **日志打印**：提供debug、info、warn、error、fatal五个级别函数，开发者可根据信息的严重程度选择合适的级别输出日志。日志内容支持格式化字符串和隐私标识，便于结构化记录和保护敏感数据。
 * 
 * **日志级别控制**：通过setMinLogLevel设置最小日志级别过滤低级别日志输出，或通过setLogLevel配合偏好策略（PerferStrategy）灵活决定新设置级别与控制系统级别的生效关系，避免冗余日志。
 * 
 * **日志输出管理**：通过setOutputType设置日志输出到控制台、私有沙箱或公有沙箱，通过setOutputTypeByDomain按域ID列表精细化控制不同的的输出方式，并提供沙箱日志目录查询、沙箱日志文件获取、沙箱日志刷新
 *     与清理等管理能力
 *
 */

/**
 * @syscap SystemCapability.HiviewDFX.HiLog
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace hilog {

  /**
   * 打印DEBUG级别的日志。
   *
   * DEBUG级别的日志在正式发布版本中默认不被打印，只有在调试版本或打开调试开关的情况下才会打印。
   *
   * @param { number } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。建议tag长度最多不超过31字节，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br>隐私标识分为{public}和{private}，缺省为{private
   *     }。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。隐私标识机制帮助开发者保护隐私敏感数据。
   * @param { any[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   *     当格式字符串中不包含占位符时，可以不传此参数，仅输出格式字符串本身。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function debug(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * 打印DEBUG级别的日志。
   *
   * @param { int } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。建议tag长度最多不超过31字节，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br>隐私标识分为{public}和{private}，缺省为{private
   *     }。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。隐私标识机制帮助开发者保护隐私敏感数据。
   * @param { RecordData[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   *     当格式字符串中不包含占位符时，可以不传此参数，仅输出格式字符串本身。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function debug(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * 打印INFO级别的日志。
   *
   * @param { number } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。建议tag长度最多不超过31字节，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。隐私标识机制帮助开发者保护隐私敏感数据。
   * @param { any[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   *     当格式字符串中不包含占位符时，可以不传此参数，仅输出格式字符串本身。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function info(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * 打印INFO级别的日志。
   *
   * @param { int } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。建议tag长度最多不超过31字节，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。隐私标识机制帮助开发者保护隐私敏感数据。
   * @param { RecordData[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   *     当格式字符串中不包含占位符时，可以不传此参数，仅输出格式字符串本身。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function info(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * 打印WARN级别的日志。
   *
   * @param { number } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。建议tag长度最多不超过31字节，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。隐私标识机制帮助开发者保护隐私敏感数据。
   * @param { any[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   *     当格式字符串中不包含占位符时，可以不传此参数，仅输出格式字符串本身。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function warn(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * 打印WARN级别的日志。
   *
   * @param { int } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。建议tag长度最多不超过31字节，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。隐私标识机制帮助开发者保护隐私敏感数据。
   * @param { RecordData[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   *     当格式字符串中不包含占位符时，可以不传此参数，仅输出格式字符串本身。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function warn(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * 打印ERROR级别的日志。
   *
   * @param { number } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。 建议tag长度最多不超过31字节，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。隐私标识机制帮助开发者保护隐私敏感数据。
   * @param { any[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   *     当格式字符串中不包含占位符时，可以不传此参数，仅输出格式字符串本身。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function error(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * 打印ERROR级别的日志。
   *
   * @param { int } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。 建议tag长度最多不超过31字节，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。隐私标识机制帮助开发者保护隐私敏感数据。
   * @param { RecordData[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   *     当格式字符串中不包含占位符时，可以不传此参数，仅输出格式字符串本身。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function error(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * 打印FATAL级别的日志。
   *
   * @param { number } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。建议tag长度最多不超过31字节，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。隐私标识机制帮助开发者保护隐私敏感数据。
   * @param { any[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   *     当格式字符串中不包含占位符时，可以不传此参数，仅输出格式字符串本身。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function fatal(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * 打印FATAL级别的日志。
   *
   * @param { int } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。建议tag长度最多不超过31字节，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。隐私标识机制帮助开发者保护隐私敏感数据。
   * @param { RecordData[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   *     当格式字符串中不包含占位符时，可以不传此参数，仅输出格式字符串本身。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function fatal(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * 在打印日志前调用该接口，用于检查指定领域标识、日志标识和级别的日志是否可以打印。
   *
   * @param { int } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。建议tag长度最多不超过31字节，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { LogLevel } level - 日志级别。
   * @returns { boolean } 如果返回true，则该领域标识、日志标识和级别的日志可以打印，否则不能打印。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function isLoggable(domain: int, tag: string, level: LogLevel): boolean;

  /**
   * 设置应用日志打印的最低日志级别，用于拦截低级别日志打印。在需要优化应用性能或减少低价值日志干扰时使用，避免冗余日志。
   *
   * > **注意：**
   * >
   * > 如果设置的日志级别低于[全局日志级别](docroot://dfx/hilog.md#查看和设置日志级别)，设置不生效。
   * >
   * > debug版本应用下，此函数不生效。
   *
   * @param { LogLevel } level - 日志级别。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function setMinLogLevel(level: LogLevel): void;

  /**
   * 设置当前应用程序进程的最低日志级别。
   *
   * 可通过prefer参数配置不同的偏好策略。如果选择策略PREFER_CLOSE_LOG，等同于调用setMinLogLevel函数。
   *
   * > **注意：**
   * >
   * > debug版本应用下，此函数不生效。
   *
   * @param { LogLevel } level - 日志级别。
   * @param { PreferStrategy } prefer - 偏好策略。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function setLogLevel(level: LogLevel, prefer: PreferStrategy): void;

  /**
   * 设置hilog输出类型。
   *
   * @param { OutputType } type - hilog的日志输出类型，用于设置hilog日志的输出目标（如控制台或沙箱）。
   * @returns { OutputType } 返回上一次设置的输出类型。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynameic&static
   */
  function setOutputType(type: OutputType): OutputType;

  /**
   * 设置hilog输出类型,并且配置输出domainID列表，可选择仅输出列表中的doaminID，或不输出列表中的domainID。
   *
   * @param { OutputType } type - hilog的输出类型。
   * @param { Array<int> } domainIDs - domainID列表，每个domainID取值范围为0x0000~0xFFFF, 仅对应用domain生效。
   * @param { boolean } isExclude - 用于决定domainIDs是否对输出类型生效。
   *     <br>true表示排除domain生效；false表示仅对列表中的domain生效。
   * @returns { OutputType } 返回上一次设置的输出类型。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynameic&static
   */
  function setOutputTypeByDomainID(type: OutputType, domainIDs: Array<int>, isExclude: boolean): OutputType;

  /**
   * 获取当前hilog的输出类型。
   *
   * @returns { OutputType } 返回当前hilog的输出类型。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynameic&static
   */
  function getOutputType(): OutputType;

  /**
   * 返回hilog日志在沙箱中的路径，如果hilog输出类型为DEFAULT.则返回空。
   *
   * @returns { string } hilog日志的沙箱路径。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynameic&static
   */
  function getOutputDir(): string;

  /**
   * 删除沙箱中的所有hilog日志。
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynameic&static
   */
  function clean(): void;
  
  /**
   * 刷新沙箱中的hilog日志，确保日志落盘。
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynameic&static
   */
  function flush(): void;

  /**
   * 返回指定秒数内修改过的hilog沙箱日志文件。
   *
   * @param { int } latestSeconds - 距离现在的时间间隔，以秒为单位。
   *     <br>若传入的值小于0，则无效值，返回值为空。
   * @returns { Array<string> } 指定时间段内写入过的沙箱文件列表。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynameic&static
   */
  function getLogFile(latestSeconds: int): Array<string>;

  /**
   * 日志级别。
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  enum LogLevel {
    /**
     * 详细的流程记录，通过该级别的日志可以更详细地分析业务流程和定位分析问题。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    DEBUG = 3,
    /**
     * 用于记录业务关键流程节点，可以还原业务的主要运行过程；
     *
     * 用于记录可预料的非正常情况信息，如无网络信号、登录失败等。
     *
     * 这些日志都应该由该业务内处于支配地位的模块来记录，避免在多个被调用的模块或低级函数中重复记录。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    INFO = 4,
    /**
     * 用于记录较为严重的非预期情况，但是对用户影响不大，应用可以自动恢复或通过简单的操作就可以恢复的问题。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    WARN = 5,
    /**
     * 应用发生了错误，该错误会影响功能的正常运行或用户的正常使用，可以恢复但恢复代价较高，如重置数据等。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    ERROR = 6,
    /**
     * 重大致命异常，表明应用即将崩溃，故障无法恢复。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    FATAL = 7
  }

  /**
   * 偏好策略。
   * 
   * 以全局日志级别为INFO下，打印5条不同级别的hilog日志，在打印过程中调用两次setLogLevel接口为例：
   * 
   * 由于全局日志起始为INFO，第一条日志可以正常打印。
   * 
   * 在设置进程最低日志级别为WANR, 并选择策略PREFER_OPEN_LOG后，实际生效的最低日志级别是全局日志级别INFO，所以第二条和第三条日志均可正常打印。
   * 
   * 在设置进程最低日志级别为DEBUG, 并选择策略PREFER_CLOSE_LOG后(等同于hilog.setMinLogLevel(hilog.LogLevel.DEBUG)), 但是此时全局日志级别为INFO，所以第四条日志不满足全
   * 
   * 局日志级别，打印失败，第五条日志可以打印。
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  enum PreferStrategy {
    /**
     * 清除设置, 实际生效的最低日志级别是系统控制的最低级别。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    UNSET_LOGLEVEL = 0,
    /**
     * 实际生效的最低日志级别是新设置的级别和系统控制的最低级别两个值的较大值，适用于需要严格限制日志输出的场景
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    PREFER_CLOSE_LOG = 1,
    /**
     * 实际生效的最低日志级别是新设置的级别和系统控制的最低级别两个值的较小值，适用于需要尽可能多的打开日志输出的场景
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    PREFER_OPEN_LOG = 2
  }
  /**
   * hilog输出类型的枚举值，DEFAULT和CONSOLE_ONLY适用于仅输出到控制台的场景，PRIVATE_SANDBOX_ONLY适用于隐私日志存储，SHARE_SANDBOX_ONLY适用于需要云端采集日志的场景，
   * PRIVATE_SANDBOX_WITH_CONSOLE和SHARE_SANDBOX_WITH_CONSOLE适用于同时需要控制台输出和沙箱存储的场景。
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  enum OutputType {
    /**
     * 默认输出类型，hilog仅输出至控制台，等价于CONSOLE_ONLY。
     * 
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynameic&static
     */
    DEFAULT = 0,
    /**
     * hilog仅输出至控制台，等价于DEFAULT。
     * 
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynameic&static
     */
    CONSOLE_ONLY = 0,
    /**
     * hilog落盘至应用私有沙箱，该路径仅自身可访问。
     * 
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynameic&static
     */
    PRIVATE_SANDBOX_ONLY = 1,
    /**
     * hilog落盘至应用公有沙箱，该路径允许应用自身及系统访问。
     * 
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynameic&static
     */
    SHARE_SANDBOX_ONLY = 2,
    /**
     * 同时启用CONSOLE_ONLY和PRIVATE_SANDBOX_ONLY。
     * 
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynameic&static
     */
    PRIVATE_SANDBOX_WITH_CONSOLE = 3,
    /**
     * 同时启用CONSOLE_ONLY和SHARE_SANDBOX_ONLY。
     * 
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynameic&static
     */
    SHARE_SANDBOX_WITH_CONSOLE = 4
  }
}

export default hilog;